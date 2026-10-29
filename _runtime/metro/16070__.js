// _runtime/metro/16070__.js
import _mod16061 from "16061__.js";
import _mod16069 from "16069__.js";
import _mod16071 from "16071__.js";
import _mod16072 from "16072__.js";

export default _mod16061
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16071("Symbol");
      let tmpResultResult = _mod16069(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16072(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16072;
      }
      return tmpResultResult;
    };
