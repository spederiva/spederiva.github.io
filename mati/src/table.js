class Table {
    _data = [];

    constructor(data) {
        this._data = data;
    }

    getHtml() {
        let html = '<div>';

        console.log(this._data);

        this._data.forEach(player => {
            let tile = new Tile(player);
            html += tile.getHtml();
        });

        html += '</div>';

        return html;
    }
}
