// _runtime/01439_PseudoMap.js
import _mod1440 from "metro/01440__.js";

let tmp = "pseudomap" === process.env.npm_package_name;
if (tmp) {
  const _process = process;
  tmp = "test" === process.env.npm_lifecycle_script;
}
if (tmp) {
  const _process2 = process;
  process.env.TEST_PSEUDOMAP = "true";
}
if (typeof Map === "function") {
  const _process3 = process;
  if (!process.env.TEST_PSEUDOMAP) {
    const _Map = Map;
    module.exports = Map;
  }
}

export default _mod1440;
