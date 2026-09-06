// === Module 5257: ? ===

// Module 5257
import _mod5213 from "module_5213" /* 5213 */;
import _modDef5218 from "module_5218" /* 5218 */;
import get0thIfdOffset from "get0thIfdOffset" /* 5233 */;
import IFD_TYPE_0TH from "IFD_TYPE_0TH" /* 5234 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
let obj = { K3_III: 78420 };
obj = { CAMERA_ORIENTATION: 1, ROLL_ANGLE: 3, PITCH_ANGLE: 5 };

export default {
  read(byteLength, arg1, arg2, arg3) {
    obj = _modDef5218;
    const byteOrder = obj.getByteOrder(byteLength, arg1 + arg2 + 8);
    const sum = arg1 + arg2;
    let obj1 = get0thIfdOffset;
    const ifd = obj1.readIfd(byteLength, IFD_TYPE_0TH.IFD_TYPE_PENTAX, sum, sum + 10, byteOrder, arg3, true);
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
        obj = { value: int8, description: null };
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
        obj.description = str6;
        obj.CameraOrientation = obj;
        const sum2 = sum1 + tmp17.ROLL_ANGLE;
        const int16 = byteLength.getInt16(sum2, byteOrder === _modDef5218.LITTLE_ENDIAN);
        obj1 = { value: int16, description: "" + -0.5 * int16 };
        obj.RollAngle = obj1;
        const sum3 = sum1 + tmp17.PITCH_ANGLE;
        const int161 = byteLength.getInt16(sum3, byteOrder === _modDef5218.LITTLE_ENDIAN);
        const obj2 = { value: int161, description: "" + -0.5 * int161 };
        obj.PitchAngle = obj2;
      }
      const tmp7Result = _mod5213;
      delete tmp[tmp2];
      tmp10 = _mod5213.objectAssign({}, ifd, obj);
      const objectAssignResult = _mod5213.objectAssign({}, ifd, obj);
    }
    return tmp10;
  },
  PENTAX_IFD_OFFSET: 10,
  MODEL_ID: obj,
  LIK3III: obj
};