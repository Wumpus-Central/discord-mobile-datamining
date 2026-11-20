// === Module 1922: SharedTransitionBoundary ===

// Module 1922 (SharedTransitionBoundary)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import _modDef1923 from "module_1923" /* 1923 */;

const StyleSheet = _mod17.StyleSheet;
const jsx = jsxProd.jsx;
const contents = StyleSheet.create({ contents: { overflow: "visible", display: "contents" } });

export function SharedTransitionBoundary(arg0) {
  ({ isActive, children } = arg0);
  return jsx(_modDef1923, { style: contents.contents, isActive, pointerEvents: "box-none", children });
}