// _runtime/metro/14413__.js
import _mod14404 from "14404__.js";
import _mod14412 from "14412__.js";
import _mod14414 from "14414__.js";
import _mod14415 from "14415__.js";

export default _mod14404
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14414("Symbol");
      let tmpResultResult = _mod14412(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14415(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14415;
      }
      return tmpResultResult;
    };
