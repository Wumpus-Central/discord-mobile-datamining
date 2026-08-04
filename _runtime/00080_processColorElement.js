// _runtime/00080_processColorElement.js
const module = arg2;
const dependencyMap = arg6;
function processColorElement(arg0) {
  let num = module(50)(arg0);
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