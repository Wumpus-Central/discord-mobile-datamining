// _runtime/metro/14106__.js
import _mod14097 from "14097__.js";
import _mod14105 from "14105__.js";
import _mod14107 from "14107__.js";
import _mod14108 from "14108__.js";

export default _mod14097
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14107("Symbol");
      let tmpResultResult = _mod14105(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14108(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14108;
      }
      return tmpResultResult;
    };
