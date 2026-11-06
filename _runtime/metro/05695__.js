// _runtime/metro/05695__.js
import _mod5693 from "05693__.js";

export default function _superPropBase(arg0, key10009) {
  hasOwnProperty = {}.hasOwnProperty;
  const call = hasOwnProperty.call;
  let tmp = arg0;
  if (!(typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009))) {
    let tmp4 = _mod5693(arg0);
    tmp = tmp4;
    if (null !== tmp4) {
      while (true) {
        let hasOwnProperty2 = {}.hasOwnProperty;
        let call2 = hasOwnProperty2.call;
        tmp = tmp4;
        if (typeof call2 === "unknown" ? hasOwnProperty2(key10009) : call2(tmp4, key10009)) {
          break;
        } else {
          tmp4 = _mod5693(tmp4);
          tmp = tmp4;
          if (null === tmp4) {
            break;
          }
        }
      }
    }
  }
  return tmp;
}
