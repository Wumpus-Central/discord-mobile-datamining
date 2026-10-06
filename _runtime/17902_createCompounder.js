// === Module 17902: createCompounder ===

// Module 17902 (createCompounder)
import arrayReduce from "arrayReduce" /* 5019 */;
import words from "words" /* 17903 */;
import deburr from "deburr" /* 17907 */;

let closure_2 = RegExp("['\u2019]", "g");

export default function createCompounder(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    const tmp = arrayReduce;
    const tmp2 = words;
    const str = deburr(arg0);
    return tmp(tmp2(str.replace(closure_2, "")), closure_0, "");
  };
};