// _runtime/metro/14422__.js
import _mod14413 from "14413__.js";
import _mod14421 from "14421__.js";
import _mod14423 from "14423__.js";
import _mod14424 from "14424__.js";

export default _mod14413
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14423("Symbol");
      let tmpResultResult = _mod14421(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14424(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14424;
      }
      return tmpResultResult;
    };
