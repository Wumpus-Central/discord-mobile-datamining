// === Module 659: getOwnPropertySymbols ===

// Module 659 (getOwnPropertySymbols)
import stubArray from "stubArray" /* 660 */;

if (getOwnPropertySymbols) {
  let fn = (arg0) => {
    let _require = arg0;
    if (null == arg0) {
      let items = [];
    } else {
      const _Object = Object;
      const ObjectResult = Object(arg0);
      _require = ObjectResult;
      items = _require(661)(getOwnPropertySymbols(ObjectResult), (arg0) => {
        const call = closure_1_2.call;
        return typeof call === "unknown" ? closure_1_2(arg0) : call(closure_0, arg0);
      });
      const tmp5 = _require(661);
    }
    return items;
  };
} else {
  fn = stubArray;
}

export default fn;