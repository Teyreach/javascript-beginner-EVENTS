var list = document.getElementById('list')
var add = document.getElementById('addElem')

add.addEventListener('click', function() 
{var element = document.createElement('li');



var items = list.getElementsByTagName('li');
console.log(items.length);
var num=items.length;
element.innerHTML = 'item ' + num ;


list.appendChild(element);

});

