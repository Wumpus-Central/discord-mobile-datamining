// _runtime/metro/14604__.js
import _mod14595 from "14595__.js";
import _mod14603 from "14603__.js";
import _mod14605 from "14605__.js";
import _mod14606 from "14606__.js";

export default _mod14595
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14605("Symbol");
      let tmpResultResult = _mod14603(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14606(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14606;
      }
      return tmpResultResult;
    };
