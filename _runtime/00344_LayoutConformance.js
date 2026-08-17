// _runtime/00344_LayoutConformance.js
import noopAll from "00019_noop.js";
import get_hairlineWidthDefault from "00254_get_hairlineWidth.js";
import LayoutConformanceDefault from "00345_LayoutConformance.js";
import { jsx } from "react/00021_jsxProd.js";

noopAll;
let closure_3 = get_hairlineWidthDefault.create({ container: { display: "contents" } });

export default function LayoutConformance(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.style = container.container;
  return jsx(LayoutConformanceDefault, {});
};