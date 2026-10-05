// _runtime/00673_baseMatches.js
import baseIsMatch from "00675_baseIsMatch.js";

const require = globalThis.__r;
let _require;

export default function baseMatches(arg0) {
  let arr;
  let closure_0;
  _require = arg0;
  const tmp = _require;
  let tmp2 = arr;
  arr = require("getMatchData")(arg0);
  if (1 == arr.length) {
    let fn;
    if (arr[0][2]) {
      fn = tmp(tmp2[1])(arr[0][0], arr[0][1]);
    }
    return fn;
  }
  fn = (arg0) => {
    const tmp2 = arg0 === closure_0 || baseIsMatch(arg0, tmp, arr);
    return tmp2;
  };
}
