// _runtime/metro/16651__.js
import _mod16642 from "16642__.js";
import _mod16650 from "16650__.js";
import _mod16652 from "16652__.js";
import _mod16653 from "16653__.js";

export default _mod16642
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16652("Symbol");
      let tmpResultResult = _mod16650(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16653(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16653;
      }
      return tmpResultResult;
    };
