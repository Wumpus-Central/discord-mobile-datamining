// _runtime/04540_ToUint32.js

export default function ToUint32(arg0) {
  const tmp3 = require("04541_ToNumber.js") /* ToNumber */(arg0);
  if (require("04558_isFinite.js") /* isFinite */(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4561)(tmp(4559)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};