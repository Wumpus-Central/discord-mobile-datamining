import { isArrayLike } from "00603_isArrayLike.js";
// _runtime/00616_keys.js

export default function keys(arg0) {
  if (isArrayLike /* isArrayLike */(arg0)) {
    let tmp3 = tmp(617)(arg0);
  } else {
    tmp3 = tmp(629)(arg0);
  }
  return tmp3;
};