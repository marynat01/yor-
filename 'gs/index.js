let randomAnekdot = [
    "В семье скелетов родился сын, назвали Костян…",
    "Выходит мужик на балкон, a балкона нет…",
    "Ведут как то раз колобка на расстрел, просит он последнее желание. . Дали добро, а он говорит: Пожалуйста, не стреляйте в голову. ...",
];

let randomPoc = randomAnekdot[Math.floor(Math.random() * randomAnekdot.length)];

console.log(randomPoc);



document.getElementById ('#fire').onclick = function() {
    let randomPoc = randomAnekdot[Math.floor(Math.random() * randomAnekdot.length)];
    alert(randomPoc)
}


