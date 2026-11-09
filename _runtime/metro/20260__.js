// _runtime/metro/20260__.js
import arrayReduce from "../05986_arrayReduce.js";
import words from "../20261_words.js";
import deburr from "../20265_deburr.js";

let closure_2 = RegExp("['\u2019]", "g");

export default function createCompounder(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const tmp = arrayReduce;
    const tmp2 = words;
    return tmp(tmp2(deburr(arg0).replace(closure_2, "")), closure_0, "");
  };
}
