/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
 var ans=fileName.split(".");
 var str = ans[ans.length - 1];
 if(fileName.startsWith("#")|| (str==="pdf")||(str==="docx")){
    console.log("Store");
 }
 else{
    console.log("Delete");
 }