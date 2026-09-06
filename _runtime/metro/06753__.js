// _runtime/metro/06753__.js
import _mod17 from "00017__.js";

const Platform = _mod17.Platform;

export const getTVProps = function getTVProps(focusable) {
  if (Platform.isTV) {
    let flag = focusable.focusable;
    if (flag == null) {
      flag = focusable.isTVSelectable;
    }
    if (flag == null) {
      flag = true;
    }
    let obj = { isTVSelectable: flag };
  } else {
    obj = {};
  }
  return obj;
};
export const applyRelationProp = function applyRelationProp(arg0, arg1, arg2) {
  if (arg2) {
    const _Array = Array;
    if (Array.isArray(arg2)) {
      const items = [];
      HermesBuiltin.arraySpread(arg2, 0);
      HermesBuiltin.apply(items, arg0);
    } else {
      tmp4(arg2);
    }
  }
};
