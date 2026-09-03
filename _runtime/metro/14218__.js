// _runtime/metro/14218__.js
import prop from "../14209_prop.js";
import all from "../14217_all.js";
import all2 from "../14219_all.js";
import call from "../14220_call.js";

export default prop
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = all2("Symbol");
      let tmpResultResult = all(tmp3);
      if (tmpResultResult) {
        tmpResultResult = call(tmp3.prototype, Object(arg0));
        const tmpResult = call;
      }
      return tmpResultResult;
    };
