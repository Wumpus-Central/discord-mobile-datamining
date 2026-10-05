// === Module 80: processColorArray ===

// Module 80 (processColorArray)
import processColorDefault from "processColor" /* 50 */;

function processColorElement(arg0) {
  let num = processColorDefault(arg0);
  if (null == num) {
    const _console = console;
    console.error("Invalid value in color array:", arg0);
    num = 0;
  }
  return num;
}

export default function processColorArray(arr) {
  let mapped = null;
  if (null != arr) {
    mapped = arr.map(processColorElement);
  }
  return mapped;
};