// _runtime/metro/14543__.js
import _mod14534 from "14534__.js";
import _mod14542 from "14542__.js";
import _mod14544 from "14544__.js";
import _mod14545 from "14545__.js";

export default _mod14534
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14544("Symbol");
      let tmpResultResult = _mod14542(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14545(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14545;
      }
      return tmpResultResult;
    };
