// _runtime/04598_keysIn.js
import { isArrayLike } from "00603_isArrayLike.js";

export default function keysIn(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = tmp(617)(arg0, true);
  } else {
    tmp3 = tmp(4599)(arg0);
  }
  return tmp3;
};