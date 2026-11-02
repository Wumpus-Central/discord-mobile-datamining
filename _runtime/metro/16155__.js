// _runtime/metro/16155__.js
import _mod16146 from "16146__.js";
import _mod16154 from "16154__.js";
import _mod16156 from "16156__.js";
import _mod16157 from "16157__.js";

export default _mod16146
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16156("Symbol");
      let tmpResultResult = _mod16154(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16157(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16157;
      }
      return tmpResultResult;
    };
