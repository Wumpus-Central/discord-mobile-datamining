// _runtime/metro/06302__.js
import _mod6300 from "06300__.js";

export default function _superPropBase(arg0, key10009) {
  hasOwnProperty = {}.hasOwnProperty;
  const call = hasOwnProperty.call;
  let tmp = arg0;
  if (!(typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009))) {
    let tmp4 = _mod6300(arg0);
    tmp = tmp4;
    if (null !== tmp4) {
      while (true) {
        let hasOwnProperty2 = {}.hasOwnProperty;
        let call2 = hasOwnProperty2.call;
        tmp = tmp4;
        if (typeof call2 === "unknown" ? hasOwnProperty2(key10009) : call2(tmp4, key10009)) {
          break;
        } else {
          tmp4 = _mod6300(tmp4);
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
