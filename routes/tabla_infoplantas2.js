const express = require('express');
const router = express.Router();
const pool = require('../conexion'); // Ajusta el camino a tu archivo de conexión

router.get('/', (req, res) => {
  pool.query('SELECT * FROM infoplantas2', (error, results) => {
    if (error) {
      console.error('Error en la consulta:', error);
      return res.status(500).json({ success: false, message: 'Error en el servidor' });
    }

    res.status(200).json({ success: true, data: results });
  });
});

module.exports = router;
