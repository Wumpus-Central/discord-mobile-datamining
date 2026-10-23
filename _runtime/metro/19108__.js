// === Module 19108: ? ===

// Module 19108
import arrayReduce from "arrayReduce" /* 5793 */;
import words from "words" /* 19109 */;
import deburr from "deburr" /* 19113 */;

let closure_2 = RegExp("['\u2019]", "g");

export default function createCompounder(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const tmp = arrayReduce;
    const tmp2 = words;
    return tmp(tmp2(deburr(arg0).replace(closure_2, "")), closure_0, "");
  };
};