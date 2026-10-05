// _runtime/metro/14088__.js
import _mod14079 from "14079__.js";
import _mod14087 from "14087__.js";
import _mod14089 from "14089__.js";
import _mod14090 from "14090__.js";

export default _mod14079
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14089("Symbol");
      let tmpResultResult = _mod14087(tmp3);
      if (tmpResultResult) {
        const tmpResult = _mod14090;
        tmpResultResult = tmpResult(tmp3.prototype, Object(arg0));
      }
      return tmpResultResult;
    };
