// === Module 1807: processPolylinePoints ===

// Module 1807 (processPolylinePoints)
import _mod1808 from "module_1808" /* 1808 */;

require = arg1;
const dependencyMap = arg6;

export (join) => {
  let str = join;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const obj2 = { d: null };
  const obj = _mod1808;
  const parts = str.replace(/([^eE])-/g, "$1 -").split(/(?:\s+|\s*,\s*)/g);
  obj2.d = obj.processSVGPath("M" + parts.join(" "));
  return obj2;
}
export (join) => {
  let str = join;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const obj2 = { d: null };
  const obj = _mod1808;
  const parts = str.replace(/([^eE])-/g, "$1 -").split(/(?:\s+|\s*,\s*)/g);
  obj2.d = obj.processSVGPath("M" + parts.join(" ") + "z");
  return obj2;
}