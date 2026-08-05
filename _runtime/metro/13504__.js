import { all } from "../13503_all.js";
import { all } from "../13505_all.js";
import { call } from "../13506_call.js";
// _runtime/metro/13504__.js

export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all /* all */("Symbol");
  let tmpResultResult = all /* all */(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call /* call */(tmp3.prototype, Object(arg0));
    const tmpResult = call /* call */;
  }
  return tmpResultResult;
});