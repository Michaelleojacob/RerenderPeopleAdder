import renderPeopleAndCounter from '../updateContainerAndCounter/updateContainerAndCounter';

function peopleObj() {
  const peopleArr = [];

  const getCurrPeopleArr = () => peopleArr;

  const logPeopleArr = () => console.log(peopleArr);

  const getArrLength = () => peopleArr.length;

  const addPerson = (person) => {
    peopleArr.push(person);
    return renderPeopleAndCounter(getCurrPeopleArr());
  };

  const removePerson = (person) => {
    // peopleArr.indexOf(person) !== -1 && peopleArr.splice(peopleArr.indexOf(person), 1);
    peopleArr.splice(peopleArr.indexOf(person), 1);
    return renderPeopleAndCounter(getCurrPeopleArr());
  };

  return { getCurrPeopleArr, logPeopleArr, getArrLength, addPerson, removePerson };
}

const peopleArr = peopleObj();

export default peopleArr;
