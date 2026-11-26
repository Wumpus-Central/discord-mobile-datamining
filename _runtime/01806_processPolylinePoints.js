// _runtime/01806_processPolylinePoints.js
import _mod1807 from "metro/01807__.js";

require = arg1;
const dependencyMap = arg6;

export (join) => {
  let str = join;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const obj2 = { d: null };
  const obj = _mod1807;
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
  const obj = _mod1807;
  const parts = str.replace(/([^eE])-/g, "$1 -").split(/(?:\s+|\s*,\s*)/g);
  obj2.d = obj.processSVGPath("M" + parts.join(" ") + "z");
  return obj2;
}