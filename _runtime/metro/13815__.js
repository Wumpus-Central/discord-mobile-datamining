// _runtime/metro/13815__.js
import _mod13806 from "13806__.js";
import _mod13814 from "13814__.js";
import _mod13816 from "13816__.js";
import _mod13817 from "13817__.js";

export default _mod13806
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod13816("Symbol");
      let tmpResultResult = _mod13814(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod13817(tmp3.prototype, Object(arg0));
        const tmpResult = _mod13817;
      }
      return tmpResultResult;
    };
