// _runtime/01618_SafeAreaView.js
import noop from "metro/00019__.js";

const useMemo = fn(19).useMemo;
const jsx = fn(21).jsx;
let closure_4 = { top: "additive", left: "additive", bottom: "additive", right: "additive" };

export const SafeAreaView = noop.forwardRef((edges, ref) => {
  edges = edges.edges;
  const merged = Object.assign(edges, Object.assign({ edges: 0 }));
  const items = [edges];
  const obj = {};
  const tmp2 = useMemo(() => {
    if (null == edges) {
      return closure_4;
    } else {
      const _Array = Array;
      let rect = edges;
      if (Array.isArray(edges)) {
        rect = edges.reduce((acc, item) => {
          acc[item] = "additive";
          return acc;
        }, {});
      }
      let str = rect.top;
      if (str == null) {
        str = "off";
      }
      rect = { top: str, right: null, bottom: null, left: null };
      let str2 = rect.right;
      if (str2 == null) {
        str2 = "off";
      }
      rect.right = str2;
      let str3 = rect.bottom;
      if (str3 == null) {
        str3 = "off";
      }
      rect.bottom = str3;
      let str4 = rect.left;
      if (str4 == null) {
        str4 = "off";
      }
      rect.left = str4;
      return rect;
    }
  }, items);
  const merged1 = Object.assign(merged);
  obj.edges = tmp2;
  obj.ref = ref;
  return jsx(edges(1619), {});
});
