// _runtime/13502_all.js
import { all } from "13503_all.js";

export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all /* all */(obj);
  }
  return tmp2;
};