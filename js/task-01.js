const list = document.getElementById("categories");

console.log(`Number of categories: ${list.children.length}`);

for (let idx = 0; idx < list.children.length; idx++) {
  console.log(`Category: ${list.children[idx].firstElementChild.textContent}`);
  console.log(
    `Elements: ${list.children[idx].lastElementChild.children.length}`
  );
}
