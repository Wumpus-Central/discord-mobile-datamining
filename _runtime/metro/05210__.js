// _runtime/metro/05210__.js
import getDataView from "../05166_getDataView.js";
import readTag from "../05186_readTag.js";
import importDefaultResult1 from "../05187_importDefaultResult1.js";

require = arg1;
const module = arg2;
const dependencyMap = arg6;
let obj = { K3_III: 78420 };
obj = { CAMERA_ORIENTATION: 1, ROLL_ANGLE: 3, PITCH_ANGLE: 5 };
arg5.default = {
  read(byteLength) {
    obj = module(5171);
    const byteOrder = obj.getByteOrder(byteLength, arg1 + arg2 + 8);
    const sum = arg1 + arg2;
    obj1 = readTag;
    const ifd = obj1.readIfd(byteLength, importDefaultResult1.IFD_TYPE_PENTAX, sum, sum + 10, byteOrder, arg3, true);
    let LevelInfo = ifd.PentaxModelID;
    if (LevelInfo) {
      LevelInfo = ifd.PentaxModelID.value === obj.K3_III;
    }
    if (LevelInfo) {
      LevelInfo = ifd.LevelInfo;
    }
    let tmp10 = ifd;
    if (LevelInfo) {
      const sum1 = sum + ifd.LevelInfo.__offset;
      obj = {};
      if (sum1 + 7 <= byteLength.byteLength) {
        const int8 = byteLength.getInt8(sum1 + obj.CAMERA_ORIENTATION);
        obj = { value: null, description: null };
        obj[0] = int8;
        let str6 = "Horizontal (normal)";
        if (0 !== int8) {
          let str = "Rotate 270 CW";
          if (1 !== int8) {
            let str2 = "Rotate 180";
            if (2 !== int8) {
              let str3 = "Rotate 90 CW";
              if (3 !== int8) {
                let str4 = "Upwards";
                if (4 !== int8) {
                  let str5 = "Unknown";
                  if (5 === int8) {
                    str5 = "Downwards";
                  }
                  str4 = str5;
                }
                str3 = str4;
              }
              str2 = str3;
            }
            str = str2;
          }
          str6 = str;
        }
        obj[1] = str6;
        obj.CameraOrientation = obj;
        const sum2 = sum1 + tmp17.ROLL_ANGLE;
        const int16 = byteLength.getInt16(sum2, byteOrder === tmp3(5171).LITTLE_ENDIAN);
        obj1 = { value: null, description: null };
        obj1[0] = int16;
        obj1[1] = "" + -0.5 * int16;
        obj.RollAngle = obj1;
        const sum3 = sum1 + tmp17.PITCH_ANGLE;
        const int161 = byteLength.getInt16(sum3, byteOrder === tmp3(5171).LITTLE_ENDIAN);
        const obj2 = { value: null, description: null };
        obj2[0] = int161;
        obj2[1] = "" + -0.5 * int161;
        obj.PitchAngle = obj2;
      }
      const tmp7Result = getDataView;
      delete tmp[tmp2];
      tmp10 = getDataView.objectAssign({}, ifd, obj);
      const objectAssignResult = getDataView.objectAssign({}, ifd, obj);
    }
    return tmp10;
  },
  PENTAX_IFD_OFFSET: 10,
  MODEL_ID: obj,
  LIK3III: obj,
};
