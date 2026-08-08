// _runtime/05525_getTVProps.js
import { Platform } from "get ActivityIndicator";


export const getTVProps = function getTVProps(focusable) {
  if (Platform.isTV) {
    let flag = focusable.focusable;
    if (flag == null) {
      flag = focusable.isTVSelectable;
    }
    if (flag == null) {
      flag = true;
    }
    let obj = { isTVSelectable: null };
    obj[0] = flag;
  } else {
    obj = {};
  }
  return obj;
};
export const applyRelationProp = function applyRelationProp(closure_0, arg1, arg2) {
  if (arg2) {
    const _Array = Array;
    if (Array.isArray(arg2)) {
      const items = [];
      HermesBuiltin.arraySpread(arg2, 0);
      HermesBuiltin.apply(items, closure_0);
    } else {
      tmp4(arg2);
    }
  }
};