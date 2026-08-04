
export default function ToUint32(arg0) {
  const tmp3 = require(4541) /* ToNumber */(arg0);
  if (require(4558) /* isFinite */(tmp3)) {
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