//your code here!
const list = document.getElementById('list');
const items = ['List Item 11', 'List Item 12'];

function addItems() {
  for (let i = 0; i < items.length; i++) {
    const li = document.createElement('li');
    li.textContent = items[i];
    list.appendChild(li);
  }
}

addItems();

list.addEventListener('scroll', () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems();
  }
});

