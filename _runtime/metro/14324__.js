// _runtime/metro/14324__.js
import prop from "../14315_prop.js";
import all from "../14323_all.js";
import all2 from "../14325_all.js";
import call from "../14326_call.js";

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
