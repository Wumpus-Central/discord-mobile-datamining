// _runtime/01924_SharedTransitionBoundary.js
import _mod17 from "metro/00017__.js";
import jsxProd from "react/00021_jsxProd.js";
import _modDef1925 from "metro/01925__.js";

const StyleSheet = _mod17.StyleSheet;
const jsx = jsxProd.jsx;
const contents = StyleSheet.create({ contents: { overflow: "visible", display: "contents" } });

export function SharedTransitionBoundary(arg0) {
  ({ isActive, children } = arg0);
  return jsx(_modDef1925, { style: contents.contents, isActive, pointerEvents: "box-none", children });
}
