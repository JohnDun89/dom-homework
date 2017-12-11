

var app = function () {

  const newCat = document.createElement('ul');
  newCat.classList.add('cat');

  const listitem = document.createElement('li');
  listitem.innerText = "Tiger";

  const listitemfavfood = document.createElement('li');
  listitemfavfood.innerText = "onion";

  const imageItem = document.createElement('li');
  const image = document.createElement('img');
  image.src = "http://www.petwave.com/~/media/Images/Center/Care-and-Nutrition/Cat/Kittensv2/Kitten-3.ashx";
  imageItem.appendChild(image);


  newCat.appendChild(listitem);
  newCat.appendChild(listitemfavfood);
  newCat.appendChild(imageItem);



  const cats = document.querySelector('#cats');
  cats.appendChild(newCat);

};

// const cats = [{name: 'tiger lily', favourite food: 'salmon',image: 'https://www.google.co.uk/search?q=kittens&source=lnms&tbm=isch&sa=X&ved=0ahUKEwizv_y4oILYAhVBEVAKHeX0DMIQ_AUICigB&biw=1440&bih=826#imgrc=2IpPGwjUzXtTPM' },
// {name: 'roise', favourite food: 'potatoe', image : 'https://www.google.co.uk/search?q=kittens&source=lnms&tbm=isch&sa=X&ved=0ahUKEwizv_y4oILYAhVBEVAKHeX0DMIQ_AUICigB&biw=1440&bih=826#imgrc=H69CsP5-rqcMxM' }]









document.addEventListener('DOMContentLoaded', app);
