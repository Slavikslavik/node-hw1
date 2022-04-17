const { Router } = require('express');
const fs = require('fs');
const path = require('path');
const { itemsData } = require('./../services/index');

const router = Router();

router.get('/', (req, res) => { 

  let template = '';
  const index$ = fs.createReadStream(path.join(__dirname, '..','..', 'index.html'), {encoding: "utf-8"});
  
  index$.on('data', (data) => {
    template += data;
  });

  index$.on('end',  async () => {
    const items = await itemsData.getItems();
    const list = items.map(e => `<li>${e.date} ${e.value}</li>`).join('\n');
    template = template.replace('{%item%}',list);
    res.end(template);
  });

  index$.on('error', () => {
    res.status(500).send('Unexpected error');
  });

});

router.get('/index.html',(req, res) => {
  res.redirect('/');
});

router.post('/', (req, res) => {
  let body = '';
   req.on('data', data => {
     body += data;
   });

   req.on('end', async () => {
     const item = body.replace('todo=','')
     await itemsData.setItem({
       value: item,
       date: new Date().toISOString(),
     });
     res.redirect('/'); 
   });
})

module.exports = router;
