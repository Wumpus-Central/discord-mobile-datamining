// _runtime/17856_createCompounder.js
import arrayReduce from "05013_arrayReduce.js";
import words from "17857_words.js";
import deburr from "17861_deburr.js";

let closure_2 = RegExp("['\u2019]", "g");

export default function createCompounder(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    const tmp = arrayReduce;
    const tmp2 = words;
    const str = deburr(arg0);
    return tmp(tmp2(str.replace(closure_2, "")), closure_0, "");
  };
}
