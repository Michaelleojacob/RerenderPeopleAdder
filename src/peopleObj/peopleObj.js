function peopleObj() {
  const peopleArr = [];

  const getCurrPeopleArr = () => peopleArr;

  const logPeopleArr = () => console.log(peopleArr);

  const addPerson = (person) => peopleArr.push(person);

  const removePerson = (person) =>
    peopleArr.indexOf(person) !== -1 && peopleArr.splice(peopleArr.indexOf(person), 1);

  return { getCurrPeopleArr, logPeopleArr, addPerson, removePerson };
}

const peopleArr = peopleObj();

export default peopleArr;
