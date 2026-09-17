// _runtime/metro/05344__.js
import _mod5301 from "05301__.js";
import get0thIfdOffset from "../05321_get0thIfdOffset.js";
import IFD_TYPE_0TH from "../05322_IFD_TYPE_0TH.js";

require = arg1;
const dependencyMap = arg6;

export default {
  read(byteLength, sum, arg2, byteOrder, arg4) {
    const ifd = get0thIfdOffset.readIfd(byteLength, IFD_TYPE_0TH.IFD_TYPE_CANON, sum, sum + arg2, byteOrder, arg4);
    let tmp6 = ifd;
    if (ifd.ShotInfo) {
      value = ifd.ShotInfo.value;
      const obj2 = {};
      if (undefined !== value[27]) {
        const obj3 = { value: value[27], description: null };
        let str = "None";
        if (0 !== value[27]) {
          let str2 = "Rotate 90 CW";
          if (1 !== tmp7) {
            let str3 = "Rotate 180";
            if (2 !== tmp7) {
              let str4 = "Unknown";
              if (3 === tmp7) {
                str4 = "Rotate 270 CW";
              }
              str3 = str4;
            }
            str2 = str3;
          }
          str = str2;
        }
        obj3.description = str;
        obj2.AutoRotate = obj3;
      }
      const tmp3Result = _mod5301;
      delete tmp[tmp2];
      tmp6 = _mod5301.objectAssign({}, ifd, obj2);
      const objectAssignResult = _mod5301.objectAssign({}, ifd, obj2);
    }
    return tmp6;
  },
  SHOT_INFO_AUTO_ROTATE: 27,
};
