import cached from '../queryObj/queryObj';
import renderCards from '../renderCards/renderCards';
import peopleArr from '../peopleObj/peopleObj';

function handleSubmit() {
  const { input } = cached;
  const val = input.value.trim();
  if (val === '') return;
  input.value = '';
  //* on submit add the person to the array and re render
  peopleArr.addPerson(val);
  renderCards();
}

function getFormInput() {
  const { form } = cached;
  return form.addEventListener('submit', handleSubmit);
}

export default getFormInput;
