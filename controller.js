'use strict';

var response = require('./res');
var connection = require('./koneksi');
const conn = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan data 
exports.tampilsemuadata =  function(req, res){
    connection.query('SELECT * FROM data', function(error, rows, fields){
        if (error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data berdasarkan id
exports.tampilberdasarkanid = function(req, res){
    let id=req.params.id;
    connection.query('SELECT * FROM data WHERE id = ?', [id],
        function(error, rows, fields){
            if (error){
                connection.log(error);
            }else{
                response.ok(rows, res)
            }}
    );
}

//menambahkan data 
exports.tambahdata=function(req, res){
    var current = req.body.current;
    var voltage = req.body.voltage;

    connection.query('INSERT INTO data (currentAC, voltageAC, currentDC, voltageDC, ) VALUES (?,?,?,?)',
    [currentAC, voltageAC, currentDC, voltageDC,],
    function(error, rows, fields){
        if (error){
            connection.log(error);
        }else{
            response.ok("berhasil menambahkan data", res)
        }
    });
};

//mengubah data berdasarkan id
exports.ubahdata = function (req, res){
    var id = req.body.id;
    var current = req.body.current;
    var voltage = req.body.voltage;

    connection.query('UPDATE data SET currentAC=?, voltageAC=?, currentDC=?, voltageDC=? WHERE id=?', 
    [id, currentAC, voltageAC, currentDC, voltageDC],
    function(error, rows, fields){
        if (error){
            connection.log(error);
        }else{
            response.ok("berhasil mengubah data", res)
        }
    });
};

//menghapus data
exports.hapusdata = function(req, res){
    var id = req.body.id;
    
    connection.query('DELETE FROM data WHERE id=?', [id],
    function(error, rows, fields){
        if (error){
            connection.log(error);
        }else{
            response.ok("berhasil menghapus data", res)
        }
    });
};