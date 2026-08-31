// _runtime/01635_SafeAreaView.js
import noopAll from "00019_noop.js";
import { useMemo } from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

let closure_4 = { top: "additive", left: "additive", bottom: "additive", right: "additive" };

export const SafeAreaView = noopAll.forwardRef((edges, ref) => {
  edges = edges.edges;
  const merged = Object.assign(edges, Object.create(null));
  const items = [edges];
  let obj = {};
  const tmp2 = useMemo(() => {
    if (null == edges) {
      return closure_1_4;
    } else {
      const _Array = Array;
      let rect = arr;
      if (Array.isArray(arr)) {
        rect = arr.reduce((arg0, arg1) => {
          arg0[arg1] = "additive";
          return arg0;
        }, {});
      }
      let str = rect.top;
      if (str == null) {
        str = "off";
      }
      const obj = { top: null, right: null, bottom: null, left: null };
      obj[0] = str;
      let str2 = rect.right;
      if (str2 == null) {
        str2 = "off";
      }
      obj[1] = str2;
      let str3 = rect.bottom;
      if (str3 == null) {
        str3 = "off";
      }
      obj[2] = str3;
      let str4 = rect.left;
      if (str4 == null) {
        str4 = "off";
      }
      obj[3] = str4;
      return obj;
    }
  }, items);
  const merged1 = Object.assign(merged);
  obj.edges = tmp2;
  obj.ref = ref;
  return jsx(edges(1636), {});
});