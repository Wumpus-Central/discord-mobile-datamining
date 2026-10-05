// _runtime/01625_SafeAreaView.js
import react2 from "00019_react.js";
import Fragment from "react/00021_Fragment.js";

const react = react2;
let edges;

const useMemo = react2.useMemo;
const jsx = Fragment.jsx;
let closure_4 = { top: "additive", left: "additive", bottom: "additive", right: "additive" };

export const SafeAreaView = react.forwardRef((edges, ref) => {
  edges = edges.edges;
  const merged = Object.assign(edges, Object.assign({ edges: 0 }));
  const items = [edges];
  const tmp2 = useMemo(() => {
    let str2;
    let str3;
    let str4;
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
      const rect1 = { top: str, right: str2, bottom: str3, left: str4 };
      str2 = rect.right;
      if (str2 == null) {
        str2 = "off";
      }
      str3 = rect.bottom;
      if (str3 == null) {
        str3 = "off";
      }
      str4 = rect.left;
      if (str4 == null) {
        str4 = "off";
      }
      return rect1;
    }
  }, items);
  edges(1626);
  const merged1 = Object.assign(merged);
  return <tmp3 edges={tmp2} ref={ref} />;
});
