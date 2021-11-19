import './style.css';
import preventSubmit from './forminput/preventSubmit';
import peopleArr from './peopleObj/peopleObj';

preventSubmit();

peopleArr.logPeopleArr();
peopleArr.addPerson('mike');
peopleArr.logPeopleArr();
peopleArr.addPerson('lol');
peopleArr.logPeopleArr();
peopleArr.removePerson('lol');
peopleArr.logPeopleArr();

//* on page load
// if array is not empty, we want to render array

//* add person
// people counter should update
// people holder thing should update

//* delete person
// people counter should update
// people holder thing should update
