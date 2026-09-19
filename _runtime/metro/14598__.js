// _runtime/metro/14598__.js
import _mod14589 from "14589__.js";
import _mod14597 from "14597__.js";
import _mod14599 from "14599__.js";
import _mod14600 from "14600__.js";

export default _mod14589
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14599("Symbol");
      let tmpResultResult = _mod14597(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14600(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14600;
      }
      return tmpResultResult;
    };
