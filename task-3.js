class Storage{
    constructor(items) {
        this._items = items;
    }
    get items() {
        console.table(this._items)
    }

    addItem(newItem) {
        this._items.push(newItem)
    }

    removeItem(item) {
        this._items.splice(this._items.indexOf(item), 1)
    }
}


const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

storage.items; // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage._items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage._items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]