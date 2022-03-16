module.exports=getDate;
function getDate(){
    let datew=new Date();
    let options={
      weekday:'long',
      day:'numeric',
      month:'long'};

  let day= datew.toLocaleDateString("en-us",options);
    return day;
  };
  