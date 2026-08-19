// === Module 80: processColorElement ===

// Module 80 (processColorElement)
import processColorDefault from "processColor" /* 50 */;

importDefault = arg2;
const dependencyMap = arg6;
function processColorElement(arg0) {
  let num = processColorDefault(arg0);
  if (null == num) {
    const _console = console;
    console.error("Invalid value in color array:", arg0);
    num = 0;
  }
  return num;
}
arg5.default = function processColorArray(arr) {
  let mapped = null;
  if (null != arr) {
    mapped = arr.map(processColorElement);
  }
  return mapped;
};