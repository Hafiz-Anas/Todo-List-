const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const msg = document.querySelector('.msg');
var text;

btn.addEventListener('click', addlist);
input.addEventListener('keyup', e => {
  (e.keyCode === 13 ? addlist(e) : null);
});
 
function addlist (e) {
  const notCompleted = document.querySelector('.Not-Completed');
  const Completed = document.querySelector('.Completed');

  const newLi = document.createElement('li');
  const checkBtn = document.createElement('button');
  const delBtn = document.createElement('button');

  checkBtn.innerHTML = '<i class = "fa fa-check"></i>';
  delBtn.innerHTML = '<i class = "fa fa-trash"></i>';

  if (input.value !== '') {
    newLi.textContent = input.value;
    input.value = '';
    notCompleted.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
    text = 'Item Added To The List';
    msg.textContent = text;
    msg.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
    msg.style.color = ' rgb(115, 172, 2)';
    setTimeout(function () {
      msg.textContent = "";
      msg.style.backgroundColor = 'transparent'
    }, 1000);
  }

  checkBtn.addEventListener('click', function () {
    const parent = this.parentNode;
    parent.remove();
    Completed.appendChild(newLi);
    checkBtn.style.display = 'none';
    text = 'Added To Completed List';
    msg.textContent = text;
    msg.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
    msg.style.color = ' rgb(115, 172, 2)';
    setTimeout(function () {
      msg.textContent = "";
      msg.style.backgroundColor = 'transparent';
    }, 1000);
  });

  delBtn.addEventListener('click', function () {
    const parent = this.parentNode;
    parent.remove();
    text = 'Item Removed';
    msg.textContent = text;
    msg.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
    msg.style.color = ' red';
    setTimeout(function () {
      msg.textContent = "";
      msg.style.backgroundColor = 'transparent'
    }, 1000);
  });
}  
