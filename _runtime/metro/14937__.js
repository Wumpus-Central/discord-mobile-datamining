// _runtime/metro/14937__.js
import _mod14928 from "14928__.js";
import _mod14936 from "14936__.js";
import _mod14938 from "14938__.js";
import _mod14939 from "14939__.js";

export default _mod14928
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14938("Symbol");
      let tmpResultResult = _mod14936(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14939(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14939;
      }
      return tmpResultResult;
    };
