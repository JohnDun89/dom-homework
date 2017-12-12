

var app = function () {

addCat('Captain Purius', 'betroot', 'http://www.petwave.com/~/media/Images/Center/Care-and-Nutrition/Cat/Kittensv2/Kitten-3.ashx');
addCat('Sir code allot', 'rotton haddock', 'https://media.giphy.com/media/aNqEFrYVnsS52/giphy-facebook_s.jpg');
};

// const cats = [{name: 'tiger lily', favourite food: 'salmon',image: 'https://www.google.co.uk/search?q=kittens&source=lnms&tbm=isch&sa=X&ved=0ahUKEwizv_y4oILYAhVBEVAKHeX0DMIQ_AUICigB&biw=1440&bih=826#imgrc=2IpPGwjUzXtTPM' },
// {name: 'roise', favourite food: 'potatoe', image : 'https://www.google.co.uk/search?q=kittens&source=lnms&tbm=isch&sa=X&ved=0ahUKEwizv_y4oILYAhVBEVAKHeX0DMIQ_AUICigB&biw=1440&bih=826#imgrc=H69CsP5-rqcMxM' }]

var addCat = function (name, food, imageLink) {
 var listName = createNameListItem(name);
 var listFood = createFoodListItem(food);
 var picture = createImageListItem(imageLink);
 const newCat = createCatUnorderedList();

 newCat.appendChild(listName);
 newCat.appendChild(listFood);
 newCat.appendChild(picture);

 const cats = document.querySelector('#cats');
cats.appendChild(newCat);
}

var createCatUnorderedList = function () {
const newCat = document.createElement('ul');
newCat.classList.add('cat');
return newCat;
}

var createNameListItem = function (name) {
const listitem = document.createElement('li');
listitem.innerText = name;
return listitem;
}

var createFoodListItem = function (food) {
const listitemfavfood = document.createElement('li');
listitemfavfood.innerText = food;
return listitemfavfood;
}

var createImageListItem = function (imageLink) {
const imageItem = document.createElement('li');
const image = document.createElement('img');
image.src = imageLink;
image.style.maxWidth = "500px";
imageItem.appendChild(image);
return imageItem;
}

document.addEventListener('DOMContentLoaded', app);

// var appendItems = function (cat, listName, listFood, picture){
//
//
// }

// newCat.appendChild(listitem);
// newCat.appendChild(listitemfavfood);
// newCat.appendChild(imageItem);


// cats.appendChild(newCat);
