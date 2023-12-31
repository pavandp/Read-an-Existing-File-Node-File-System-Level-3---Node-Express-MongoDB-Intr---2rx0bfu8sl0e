const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {
  // write code here
	// dont change function name
  try{
    const content=await fs.readFile(fileName, 'utf-8');
    console.log(content);
    return content;
  }
  catch(err){
    console.error(err.message);
    throw err;
  }
  
};


module.exports =  reader ;
