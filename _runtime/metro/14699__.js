// _runtime/metro/14699__.js
import _mod14690 from "14690__.js";
import _mod14698 from "14698__.js";
import _mod14700 from "14700__.js";
import _mod14701 from "14701__.js";

export default _mod14690
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14700("Symbol");
      let tmpResultResult = _mod14698(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14701(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14701;
      }
      return tmpResultResult;
    };
