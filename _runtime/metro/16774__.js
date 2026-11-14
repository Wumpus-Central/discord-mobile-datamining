// _runtime/metro/16774__.js
import _mod16765 from "16765__.js";
import _mod16773 from "16773__.js";
import _mod16775 from "16775__.js";
import _mod16776 from "16776__.js";

export default _mod16765
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16775("Symbol");
      let tmpResultResult = _mod16773(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16776(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16776;
      }
      return tmpResultResult;
    };
