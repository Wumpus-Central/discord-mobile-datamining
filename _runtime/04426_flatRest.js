import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require(4437) /* basePick */(arg0, arg1);
  }
  return obj;
});