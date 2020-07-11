const { MSICreator } = require('electron-wix-msi');

// Step 1: Instantiate the MSICreator
const msiCreator = new MSICreator({
  appDirectory: './dist/SNAQ-win32-x64',

  exe: 'SNAQ',
  name: 'SNAQ',
  manufacturer: 'SDU Technopark',
  version: '0.0.1',
  language:1049,
  outputDirectory: 'C:/Users/Adil/Desktop/electron project/electronApplication/dist/installer',

});

// Step 2: Create a .wxs template file
async function createMSI() {
    await msiCreator.create();
    await msiCreator.compile();
}

createMSI().then(res=>{
  console.log(res);

}).catch(err=>{
  console.log(err);
})
