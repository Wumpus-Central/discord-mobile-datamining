// _runtime/13502_all.js

export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = require("13503_all.js") /* all */(obj);
  }
  return tmp2;
};