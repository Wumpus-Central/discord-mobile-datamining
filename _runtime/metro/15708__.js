// _runtime/metro/15708__.js
import _mod15699 from "15699__.js";
import _mod15707 from "15707__.js";
import _mod15709 from "15709__.js";
import _mod15710 from "15710__.js";

export default _mod15699
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15709("Symbol");
      let tmpResultResult = _mod15707(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15710(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15710;
      }
      return tmpResultResult;
    };
