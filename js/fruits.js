const menu = document.querySelector('#menu');

const lists = [
    {
        name:'イチゴ',
        img:'strawberry.jpg',
        price:450,
    },
    {
        name:'ライム',
        img:'lime.jpg',
        price:400,
    },
    {
        name:'マンゴー',
        img:'mango.jpg',
        price:400,
    },
    {
        name:'レモン',
        img:'lemon.jpg',
        price:500,
    },
    {
        name:'イチジク',
        img:'fig.jpg',
        price:300,
    },
    {
        name:'りんご',
        img:'apple.jpg',
        price:100,
    },
];

console.log(lists[0].name);

for(let i=0; i<lists.length; i++){
    const name = lists[i].name
    const img = lists[i].img
    const price = lists[i].price

    const content = `<div><img src = "images/${img} " alt=""><h2>${name}</h2>
    <p>${price}円</p></div>`;
    menu.insertAdjacentHTML('beforeend', content);
}

