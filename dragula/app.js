const itemsContainer = document.querySelector('#items-container');
const items = "abcdefghijklmnop".split("");
for (const item of items) {
  const el = document.createElement('div')
  el.innerText = item;
  el.classList.add("bg-red-500", "m-1", "min-w-20", "max-w-min", "h-min")
  itemsContainer.appendChild(el);

  // Safari bug
  el.addEventListener('touchmove', event => event.preventDefault());
}

const rowsContainer = document.querySelector('#rows-container');
// const rowsItems = ["ar", "br", "cr"];
// for (const item of rowsItems) {
//   const el = document.createElement('div')
//   el.innerText = item;
//   el.classList.add("bg-green-500", "my-1")
//   rowsContainer.appendChild(el);
// }

const columnsContainer = document.querySelector('#columns-container');
// const columnsItems = ["ac", "bc", "cc"];
// for (const item of columnsItems) {
//   const el = document.createElement('div')
//   el.innerText = item;
//   el.classList.add("bg-yellow-500", "my-1")
//   columnsContainer.appendChild(el);
// }

const containers = [itemsContainer, rowsContainer, columnsContainer]

dragula(containers, {
  isContainer: function (el) {
    return false; // only elements in drake.containers will be taken into account
  },
  moves: function (el, source, handle, sibling) {
    return true; // elements are always draggable by default
  },
  accepts: function (el, target, source, sibling) {
    return true; // elements can be dropped in any of the `containers` by default
  },
  invalid: function (el, handle) {
    return false; // don't prevent any drags from initiating by default
  },
  direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
  copy: false,                       // elements are moved by default, not copied
  copySortSource: false,             // elements in copy-source containers can be reordered
  revertOnSpill: true,              // spilling will put the element back where it was dragged from, if this is true
  removeOnSpill: false,              // spilling will `.remove` the element, if this is true
  mirrorContainer: document.body,    // set the element that gets mirror elements appended
  ignoreInputTextSelection: true,     // allows users to select input text, see details below
  slideFactorX: 0,               // allows users to select the amount of movement on the X axis before it is considered a drag instead of a click
  slideFactorY: 0,               // allows users to select the amount of movement on the Y axis before it is considered a drag instead of a click

})
// .on('drag', function (el, source) {
//   console.log('drag', el, source)
//   el.className = el.className.replace('ex-moved', '');
// }).on('drop', function (el, target, source, sibling) {
//   console.log('drop', el, target, source, sibling)
//   el.className += ' ex-moved';
// }).on('over', function (el, container) {
//   console.log('over', el, container)
//   container.className += ' ex-over';
// }).on('out', function (el, container) {
//   console.log('out', el, container)
//   container.className = container.className.replace('ex-over', '');
// });