// _runtime/metro/14899__.js
import _mod14890 from "14890__.js";
import _mod14898 from "14898__.js";
import _mod14900 from "14900__.js";
import _mod14901 from "14901__.js";

export default _mod14890
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14900("Symbol");
      let tmpResultResult = _mod14898(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14901(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14901;
      }
      return tmpResultResult;
    };
