import './style.css';
import preventSubmit from './forminput/preventSubmit';
import getFormInput from './forminput/forminput';
import peopleArr from './peopleObj/peopleObj';
import personCard from './personCard/personCard';

preventSubmit();
getFormInput();
peopleArr.logPeopleArr();

const thing = personCard('mike');
const container = document.querySelector('#container');
container.appendChild(thing);

//* on page load
// if array is not empty, we want to render array

//* add person
// people counter should update
// people holder thing should update

//* delete person
// people counter should update
// people holder thing should update
