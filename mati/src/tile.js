class Tile {
    constructor(data) {
        this._data = data;
    }

    getHtml() {
        const d = this._data;

        let img = '';
        if (d.player_photo && d.player_photo !== '') {
            img = `<div class="img"><img src="images/${d.player_photo}"></div>`;
        }

        const html = `
            <div class="player">
                ${img}
                <div class="name">${d.player_name}</div>
                <div class="points">Points in Europe: ${d.europe_pts}</div>
                <div class="points">Points in Israel: ${d.israel_pts}</div>
            </div>
        `;

        return html;
    }
}
