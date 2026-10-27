// _runtime/01457_PseudoMap.js
import _mod1458 from "metro/01458__.js";

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

export default _mod1458;
