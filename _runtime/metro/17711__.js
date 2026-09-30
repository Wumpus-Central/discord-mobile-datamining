// === Module 17711: ? ===

// Module 17711
import arrayReduce from "arrayReduce" /* 4988 */;
import words from "words" /* 17712 */;
import deburr from "deburr" /* 17716 */;

let closure_2 = RegExp("['\u2019]", "g");

export default function createCompounder(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const tmp = arrayReduce;
    const tmp2 = words;
    return tmp(tmp2(deburr(arg0).replace(closure_2, "")), closure_0, "");
  };
};