import dom from '../domCreator/dom';

function handleDelete(e) {
  console.log(e);
}

export default function personCard(person) {
  const card = dom({
    text: person,
    children: [
      dom({ tag: 'button', text: 'X', events: [{ type: 'click', handler: handleDelete }] }),
    ],
  });
  console.log(card);
  return card;
}
