// _runtime/metro/13860__.js
import _mod13851 from "13851__.js";
import _mod13859 from "13859__.js";
import _mod13861 from "13861__.js";
import _mod13862 from "13862__.js";

export default _mod13851
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod13861("Symbol");
      let tmpResultResult = _mod13859(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod13862(tmp3.prototype, Object(arg0));
        const tmpResult = _mod13862;
      }
      return tmpResultResult;
    };
