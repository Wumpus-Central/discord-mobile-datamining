// === Module 795: getOwnPropertySymbols ===

// Module 795 (getOwnPropertySymbols)
import stubArray from "stubArray" /* 796 */;

if (getOwnPropertySymbols) {
  let fn = (arg0) => {
    let _require = arg0;
    if (null == arg0) {
      let items = [];
    } else {
      const _Object = Object;
      const ObjectResult = Object(arg0);
      _require = ObjectResult;
      items = _require(797)(getOwnPropertySymbols(ObjectResult), (arg0) => {
        const call = closure_1_2.call;
        return typeof call === "unknown" ? closure_1_2(arg0) : call(closure_0, arg0);
      });
      const tmp5 = _require(797);
    }
    return items;
  };
} else {
  fn = stubArray;
}

export default fn;