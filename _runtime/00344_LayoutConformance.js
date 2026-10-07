// _runtime/00344_LayoutConformance.js
import _modDef345 from "metro/00345__.js";
import noop from "metro/00019__.js";
import get_hairlineWidth from "00254_get_hairlineWidth.js";

const jsx = fn(21).jsx;
const container = get_hairlineWidth.create({ container: { display: "contents" } });

export default function LayoutConformance(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.style = container.container;
  return jsx(_modDef345, {});
}
