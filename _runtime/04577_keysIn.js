// _runtime/04577_keysIn.js
import isArrayLike from "00603_isArrayLike.js";


export default function keysIn(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = tmp(617)(arg0, true);
  } else {
    tmp3 = tmp(4578)(arg0);
  }
  return tmp3;
};