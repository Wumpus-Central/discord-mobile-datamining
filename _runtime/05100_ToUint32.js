// _runtime/05100_ToUint32.js
import ToNumber from "05101_ToNumber.js";
import _mod5118 from "metro/05118__.js";
import truncate from "05119_truncate.js";
import modulo from "05121_modulo.js";

export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod5118(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = modulo(truncate(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
}
