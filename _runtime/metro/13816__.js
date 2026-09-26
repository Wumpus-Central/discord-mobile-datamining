// _runtime/metro/13816__.js
import _mod13807 from "13807__.js";
import _mod13815 from "13815__.js";
import _mod13817 from "13817__.js";
import _mod13818 from "13818__.js";

export default _mod13807
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod13817("Symbol");
      let tmpResultResult = _mod13815(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod13818(tmp3.prototype, Object(arg0));
        const tmpResult = _mod13818;
      }
      return tmpResultResult;
    };
