const path = require('path');

exports.tabletZIA = async (req, res) => {
    const id = req.params.id;
    try {
        res.sendFile(path.join(__dirname, '../views/tabletZIA.html'));
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro');
    }
};