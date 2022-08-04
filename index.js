localStorage.setItem('name', 'Tom');
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');

sessionStorage.setItem('color', 'green');
sessionStorage.setItem('color', 'blue');

document.cookie = 'name=Valerie; expires=' + new Date(2022,9,1).toUTCString();