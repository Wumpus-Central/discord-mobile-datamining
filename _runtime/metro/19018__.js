// _runtime/metro/19018__.js
import arrayReduce from "../05788_arrayReduce.js";
import words from "../19019_words.js";
import deburr from "../19023_deburr.js";

let closure_2 = RegExp("['\u2019]", "g");

export default function createCompounder(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const tmp = arrayReduce;
    const tmp2 = words;
    return tmp(tmp2(deburr(arg0).replace(closure_2, "")), closure_0, "");
  };
}
