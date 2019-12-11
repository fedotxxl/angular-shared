export class Filter {
    getSelectedIds: () => string[];

    private onSelected: (filterItems: FilterItem[]) => void;
    private _items: FilterItem[];

    constructor(getSelectedIds: () => string[], onSelected: (filterItems: FilterItem[]) => void) {
        this.getSelectedIds = getSelectedIds;
        this.onSelected = onSelected;
    }

    setItems(items: FilterItem[]) {
        this._items = items;
    }

    setSelected(items: FilterItem[]) {
        this.onSelected(items);
    }

    get items(): FilterItem[] {
        return this._items;
    }

}

export class FilterItem {
    id: string;
    type: string;
    label: string;

    idUnique: string;
    typeTranslation: string;
    text: string;
}
