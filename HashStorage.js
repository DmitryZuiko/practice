class HashStorage {

    constructor() {
        this._storage = {};
    }

    addValue(key, value) {
        this._storage[key] = value;
    }

    getValue(key) {
        return this._storage[key];
    }

    deleteValue(key) {
        if(!(key in this._storage)) return false
        return delete this._storage[key];
    }

    getKeys() {
        return Object.keys(this._storage);
    }
}

const coctailsStorage = new HashStorage();

coctailsStorage.addValue('Маргарита', {alc: "да", ingredients:
        `Гренадин Monin 10мл 
        Клубничный сироп Monin 10мл 
        Персиковый сок 150мл 
        Лимонный сок 15мл 
        Банан 110г 
        Клубника 50г 
        Дробленый лед 60г`, recipe: "Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке."});

alert(coctailsStorage.getValue('Маргарита'));

const add = document.getElementById('add');
const del = document.getElementById('del');
const value = document.getElementById('value');
const keys = document.getElementById('keys');

add.onclick = () => {
    const name = window.prompt('Введите название коктеля');
    const alc = window.prompt('Напиток алкогольный?');

    coctailsStorage.addValue(name, {name, alc});
    alert('Cocktail was added' + coctailsStorage.getValue(name));
}

del.onclick = () => {
    const key = window.prompt('Введите название');
    alert(coctailsStorage.deleteValue(key));
}

value.onclick = () => {
    const key = window.prompt('Введите название');
    alert(coctailsStorage.getValue(key));
}

keys.onclick = () => {
    alert(coctailsStorage.getKeys());
}