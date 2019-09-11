const program = {
    _dataUri: 'data/players.json',

    async init() {
        const data = await program.loadData();

        const table = new Table(data.players);
        const html = table.getHtml();

        program.printTable(html);
    },

    async loadData() {
        try {
            const response = await fetch(this._dataUri);

            console.log('Data loaded', response);

            return response.json();
        } catch (e) {
            alert('Cannot load Data!');

            console.error('Some error', e.message, e);
        }
    },

    printTable(html){
        const el = document.getElementById('table');

        if(!el){
            console.log('No Element found!');
            return;
        }

        el.innerHTML = html;
    }

};


window.addEventListener('DOMContentLoaded', async (event) => {
    console.log('Starting...');

    await program.init();
});
