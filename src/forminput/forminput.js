import cached from '../queryObj/queryObj';

function handleSubmit() {
  const { input } = cached;
  const val = input.value.trim();
  if (val === '') return;
  console.log(val);
  input.value = '';
}

function getFormInput() {
  const { form } = cached;
  return form.addEventListener('submit', handleSubmit);
}

export default getFormInput;
