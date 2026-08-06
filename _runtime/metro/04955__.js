// _runtime/metro/04955__.js
import { getDataView } from "../04912_getDataView.js";
import { readTag } from "../04932_readTag.js";
import { importDefaultResult1 } from "../04933_importDefaultResult1.js";
const require = arg1;
const dependencyMap = arg6;
arg5.default = {
  read(byteLength, sum, arg2, byteOrder) {
    let obj = readTag;
    const ifd = obj.readIfd(byteLength, importDefaultResult1.IFD_TYPE_CANON, sum, sum + arg2, byteOrder, arg4);
    let tmp6 = ifd;
    if (ifd.ShotInfo) {
      const value = ifd.ShotInfo.value;
      obj = {};
      if (undefined !== value[27]) {
        obj = { value: null, description: null };
        obj[0] = value[27];
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
        obj[1] = str;
        obj.AutoRotate = obj;
      }
      const tmp3Result = getDataView;
      delete tmp[tmp2];
      tmp6 = getDataView.objectAssign({}, ifd, obj);
      const objectAssignResult = getDataView.objectAssign({}, ifd, obj);
    }
    return tmp6;
  },
  SHOT_INFO_AUTO_ROTATE: 27
};