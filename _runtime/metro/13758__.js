// _runtime/metro/13758__.js
import prop from "../13749_prop.js";
import all from "../13757_all.js";
import all2 from "../13759_all.js";
import call from "../13760_call.js";


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});