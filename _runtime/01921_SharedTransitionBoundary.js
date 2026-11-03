// === Module 1921: SharedTransitionBoundary ===

// Module 1921 (SharedTransitionBoundary)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import _modDef1922 from "module_1922" /* 1922 */;

const StyleSheet = _mod17.StyleSheet;
const jsx = jsxProd.jsx;
const contents = StyleSheet.create({ contents: { overflow: "visible", display: "contents" } });

export function SharedTransitionBoundary(arg0) {
  ({ isActive, children } = arg0);
  return jsx(_modDef1922, { style: contents.contents, isActive, pointerEvents: "box-none", children });
}