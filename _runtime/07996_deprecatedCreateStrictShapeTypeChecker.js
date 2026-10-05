// _runtime/07996_deprecatedCreateStrictShapeTypeChecker.js
import _mod38 from "metro/00038__.js";

export default function deprecatedCreateStrictShapeTypeChecker(arg0) {
  let closure_0 = arg0;
  function checkType(arg0, arg1, arg2, arg3, arg4) {
    const substr = [...arguments].slice();
    if (arg1[arg2]) {
      if (typeof arg1[arg2] !== "object") {
        const _HermesInternal3 = HermesInternal;
        const tmp41 = typeof arg1[arg2];
        const tmp44 = _mod38;
        tmp44(
          false,
          "Invalid " + arg4 ||
            "(unknown)" + " `" + arg2 + "` of type `" + tmp41 + "` supplied to `" + arg3 + "`, expected `object`.",
        );
      }
      const obj = {};
      const merged = Object.assign(arg1[arg2]);
      const merged1 = Object.assign(closure_0);
      for (const key10047 in obj) {
        let tmp52 = closure_0[key10047];
        if (!tmp52) {
          let _HermesInternal2 = HermesInternal;
          let str11 = "Invalid props.";
          let str12 = " key `";
          let str13 = "` supplied to `";
          let str14 = "`.\nBad object: ";
          let tmp23 = _mod38;
          let _JSON = JSON;
          let combined = "Invalid props." + arg2 + " key `" + tmp50 + "` supplied to `" + arg3 + "`.\nBad object: ";
          let _JSON2 = JSON;
          let _Object = Object;
          let sum = combined + JSON.stringify(arg1[arg2], null, "  ");
          let tmp23Result = tmp23(false, sum + "\nValid keys: " + JSON.stringify(Object.keys(tmp51), null, "  "));
        }
        let items = [tmp11, key10047, arg3, arg4];
        let arraySpreadResult = HermesBuiltin.arraySpread(items, substr, 4);
        let applyResult = HermesBuiltin.apply(tmp52, items, undefined);
        if (!applyResult) {
          continue;
        } else {
          let _JSON3 = JSON;
          let tmp38 = _mod38;
          let text = `${tmp35.message}
    Bad object: `;
          let tmp38Result = tmp38(
            false,
            `${tmp35.message}
    Bad object: ` + JSON.stringify(arg1[arg2], null, "  "),
          );
          continue;
        }
        continue;
      }
    } else {
      const tmp2 = arg0;
      if (tmp2) {
        const _HermesInternal = HermesInternal;
        const tmp5 = _mod38;
        tmp5(false, "Required object `" + arg2 + "` was not specified in `" + arg3 + "`.");
      }
    }
  }
  function chainedCheckType(arg0, arg1, arg2, arg3) {
    return checkType(arg0, arg1, arg2, arg3, ...HermesBuiltin.copyRestArgs());
  }
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
}
