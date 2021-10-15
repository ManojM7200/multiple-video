const express = require('express')
const app = express();
const cors = require('cors');

const port = 3000
const videosDir = './videos/';
const fs = require('fs');
const FileType = require('file-type');
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.use("/public", express.static(__dirname + "/videos"))

app.get('/videos',async (req,res)=>{
    let videoList = [];
    let fileType;
    await fs.readdir(videosDir, async (err, files) => {
        var bar = new Promise((resolve, reject) => {
            files.forEach(async( file,index,array) => {
                fileType = await FileType.fromFile(`${videosDir}${file}`);
                videoList.push({name:file,type:fileType});
                if (index === array.length -1) resolve();
            })
        });
        bar.then(()=>{
            res.send({status:true,videos:videoList});
        },err=>console.log(err))
      
    });   
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})