// _runtime/metro/16298__.js
import _mod16289 from "16289__.js";
import _mod16297 from "16297__.js";
import _mod16299 from "16299__.js";
import _mod16300 from "16300__.js";

export default _mod16289
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16299("Symbol");
      let tmpResultResult = _mod16297(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16300(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16300;
      }
      return tmpResultResult;
    };
