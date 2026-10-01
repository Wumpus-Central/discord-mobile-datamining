// _runtime/metro/14019__.js
import _mod14010 from "14010__.js";
import _mod14018 from "14018__.js";
import _mod14020 from "14020__.js";
import _mod14021 from "14021__.js";

export default _mod14010
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14020("Symbol");
      let tmpResultResult = _mod14018(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14021(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14021;
      }
      return tmpResultResult;
    };
