// _runtime/04449_ToUint32.js

export default function ToUint32(arg0) {
  const tmp3 = require(4450) /* ToNumber */(arg0);
  if (require(4467) /* isFinite */(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4470)(tmp(4468)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};