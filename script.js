console.log('Hello!');
const res='3'+2*2;
console.log(res)
function showContent() {
  let temp = document.getElementsByTagName("template")[0];
  let clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
}