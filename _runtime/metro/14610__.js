// _runtime/metro/14610__.js
import _mod14601 from "14601__.js";
import _mod14609 from "14609__.js";
import _mod14611 from "14611__.js";
import _mod14612 from "14612__.js";

export default _mod14601
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14611("Symbol");
      let tmpResultResult = _mod14609(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14612(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14612;
      }
      return tmpResultResult;
    };
