var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Servicios = require('../models').servicio;
const Area = require('../models').area;

router.get('/findAll/json', function (req, res, next) {
  Servicios.findAll({
    attributes: {attributes: { exclude: ['id','createdAt','updatedAt'] }},
    include: [{ model: Area, attributes: ['nombre'], through: { attributes: [] }
    }],
  }).then(servicios => {
    res.json(servicios);
  }).catch(err => res.json({ error: err }));
  // }).catch(err => res.status(400).send(err));
});

router.get('/findAll/view', function (req, res, next) {
  Servicios.findAll({attributes: { exclude: ['id','createdAt','updatedAt'] },})
  .then(servicios => {
    res.render('servicios', { title: 'Servicios', arrServicios: servicios });
  })
  .catch(error => res.status(400).send(error))
});

router.get('/findAllByRange/json', function (req, res, next) {
  let lower = parseFloat(req.query.lower);
  let higher = parseFloat(req.query.higher);

  Servicios.findAll({
    attributes: { exclude: ['id','createdAt','updatedAt'] },
    where: { precio: { [Op.between]: [lower, higher] }}
  })
    .then(servicios => {
      res.render('servicios', { title: 'Servicios', arrServicios: servicios });
      // res.json(fotos);
    })
    .catch(error =>
      res.status(400).send(error))
});

router.get('/findAllById/:id/json', function (req, res, next) {
  let id = parseInt(req.params.id);

  Servicios.findAll({attributes: { exclude: ['id','createdAt','updatedAt'] },
    where: { [Op.and]: [{id_servicio: id}] }
  })
    .then(servicios => {
      res.render('servicios', { title: 'Servicios', arrServicios: servicios });
      // res.json(fotos);
    })
    .catch(error =>
      res.status(400).send(error))
});

module.exports = router;