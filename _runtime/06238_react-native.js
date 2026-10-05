// === Module 6238: react-native ===

// Module 6238 (react-native)
import react_native from "react-native" /* 17 */;

const Platform = react_native.Platform;

export const getTVProps = function getTVProps(focusable) {
  let obj;
  if (Platform.isTV) {
    let flag = focusable.focusable;
    if (flag == null) {
      flag = focusable.isTVSelectable;
    }
    if (flag == null) {
      flag = true;
    }
    obj = { isTVSelectable: flag };
    const obj2 = { isTVSelectable: flag };
  } else {
    obj = {};
  }
  return obj;
};
export const applyRelationProp = function applyRelationProp(arg0, arg1, arg2) {
  const tmp2 = arg2;
  if (tmp2) {
    const _Array = Array;
    if (Array.isArray(arg2)) {
      const items = [];
      HermesBuiltin.arraySpread(items, arg2, 0);
      HermesBuiltin.apply(arg0[arg1], items, arg0);
    } else {
      arg0[arg1](arg2);
    }
  }
};