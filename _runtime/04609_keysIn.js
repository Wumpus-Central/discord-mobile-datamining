// _runtime/04609_keysIn.js
import isArrayLike from "00600_isArrayLike.js";

export default function keysIn(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = tmp(614)(arg0, true);
  } else {
    tmp3 = tmp(4610)(arg0);
  }
  return tmp3;
}
