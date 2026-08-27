// _runtime/metro/13893__.js
import prop from "../13884_prop.js";
import all from "../13892_all.js";
import all2 from "../13894_all.js";
import call from "../13895_call.js";


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});