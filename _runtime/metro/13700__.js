// _runtime/metro/13700__.js
import { all } from "../13699_all.js";
import { all } from "../13701_all.js";
import { call } from "../13702_call.js";

export default require("prop") ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});