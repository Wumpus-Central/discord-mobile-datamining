// === Module 7388: ? ===

// Module 7388
import _mod7345 from "module_7345" /* 7345 */;
import get0thIfdOffset from "get0thIfdOffset" /* 7365 */;
import IFD_TYPE_0TH from "IFD_TYPE_0TH" /* 7366 */;


export default {
  read(byteLength, sum, arg2, byteOrder, arg4) {
    let str;
    const obj = get0thIfdOffset;
    const ifd = obj.readIfd(byteLength, IFD_TYPE_0TH.IFD_TYPE_CANON, sum, sum + arg2, byteOrder, arg4);
    let tmp4 = ifd;
    if (ifd.ShotInfo) {
      const value = ifd.ShotInfo.value;
      const obj2 = {};
      const objectAssign = _mod7345.objectAssign;
      _mod7345;
      if (undefined !== value[27]) {
        const obj3 = { value: value[27], description: str };
        str = "None";
        if (0 !== value[27]) {
          let str2 = "Rotate 90 CW";
          if (1 !== value[27]) {
            let str3 = "Rotate 180";
            if (2 !== value[27]) {
              let str4 = "Unknown";
              if (3 === value[27]) {
                str4 = "Rotate 270 CW";
              }
              str3 = str4;
            }
            str2 = str3;
          }
          str = str2;
        }
        obj2.AutoRotate = obj3;
      }
      const objectAssignResult = objectAssign({}, ifd, obj2);
      delete tmp7["ShotInfo"];
      tmp4 = objectAssignResult;
    }
    return tmp4;
  },
  SHOT_INFO_AUTO_ROTATE: 27
};