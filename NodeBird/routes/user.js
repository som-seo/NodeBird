const express=require('express');

const {isLoggedIn}=require('../middlewares');
const {follow}=require('../controllers/user');

const router=express.Router();

// POST /user/:id/follow
router.post('/:id/follow', isLoggedIn, function (req, res, next){follow});

module.exports=router;