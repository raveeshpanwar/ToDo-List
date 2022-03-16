const exp=require('express');
const app=exp();

const dates=require(__dirname+'/date.js')

app.set('view engine','ejs');

const parseit=require('body-parser');
const { redirect } = require('express/lib/response');

app.use(parseit.urlencoded({extended:true}));

app.use(exp.static('public'));

let inins=[];
app.get('/',function(req,res){
  
let date=dates();
    res.render('list.ejs',{currentt:date,listName:inins});
}
)

app.post('/',function(req,res){
let inin=req.body.text1;
inins.push(inin);
res.render('list.ejs',{listName:inins})
res.redirect('/');
})


app.listen(3000,function(req,res){
    console.log('Server is now running on port 3000');
})