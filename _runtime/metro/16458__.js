// _runtime/metro/16458__.js
import _mod16449 from "16449__.js";
import _mod16457 from "16457__.js";
import _mod16459 from "16459__.js";
import _mod16460 from "16460__.js";

export default _mod16449
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16459("Symbol");
      let tmpResultResult = _mod16457(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16460(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16460;
      }
      return tmpResultResult;
    };
