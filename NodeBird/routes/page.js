const express=require('express');
const {renderProfile, renderJoin, renderMain}=require('../controllers/page');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');

const router=express.Router();

router.use((req, res, next)=>{
    res.locals.user=req.user;
    res.locals.fllowerCount=0;
    res.locals.fllowingCount=0;
    res.locals.fllowingIdList=[];
    next();
});

router.get('/profile', isLoggedIn, renderProfile);
router.get('/join', isNotLoggedIn, renderJoin);
router.get('/', renderMain);

module.exports=router;