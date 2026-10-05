// _runtime/05340_ToUint32.js
import ToNumber from "05341_ToNumber.js";
import isFinite from "05358_isFinite.js";
import truncate from "05359_truncate.js";
import modulo from "05361_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (isFinite(tmp3)) {
    if (0 !== tmp3) {
      const tmp4 = truncate(tmp3);
      const tmp5 = modulo(tmp4, 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
}
