// _runtime/metro/05256__.js
import _mod5213 from "05213__.js";
import get0thIfdOffset from "../05233_get0thIfdOffset.js";
import IFD_TYPE_0TH from "../05234_IFD_TYPE_0TH.js";

require = arg1;
const dependencyMap = arg6;

export default {
  read(byteLength, sum, arg2, byteOrder, arg4) {
    let obj = get0thIfdOffset;
    const ifd = obj.readIfd(byteLength, IFD_TYPE_0TH.IFD_TYPE_CANON, sum, sum + arg2, byteOrder, arg4);
    let tmp6 = ifd;
    if (ifd.ShotInfo) {
      value = ifd.ShotInfo.value;
      obj = {};
      if (undefined !== value[27]) {
        obj = { value: value[27], description: null };
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
        obj.description = str;
        obj.AutoRotate = obj;
      }
      const tmp3Result = _mod5213;
      delete tmp[tmp2];
      tmp6 = _mod5213.objectAssign({}, ifd, obj);
      const objectAssignResult = _mod5213.objectAssign({}, ifd, obj);
    }
    return tmp6;
  },
  SHOT_INFO_AUTO_ROTATE: 27,
};
