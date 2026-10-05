// _runtime/00080_processColorArray.js
import processColorDefault from "00050_processColor.js";

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
}
