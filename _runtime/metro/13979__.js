// _runtime/metro/13979__.js
import prop from "../13970_prop.js";
import all from "../13978_all.js";
import all2 from "../13980_all.js";
import call from "../13981_call.js";


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});