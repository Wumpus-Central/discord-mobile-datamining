// === Module 5232: ? ===

// Module 5232
import _mod5213 from "module_5213" /* 5213 */;
import _modDef5218 from "module_5218" /* 5218 */;
import get0thIfdOffset from "get0thIfdOffset" /* 5233 */;
import IFD_TYPE_0TH from "IFD_TYPE_0TH" /* 5234 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
let c3 = "Exif IFD Pointer";
let c4 = "GPS Info IFD Pointer";
let c5 = "Interoperability IFD Pointer";

export default {
  read(getUint16, c5, arg2) {
    const byteOrder = _modDef5218.getByteOrder(getUint16, c5);
    const obj2 = get0thIfdOffset;
    const ifd = obj2.readIfd(getUint16, IFD_TYPE_0TH.IFD_TYPE_0TH, c5, get0thIfdOffset.get0thIfdOffset(getUint16, c5, byteOrder), byteOrder, arg2);
    let objectAssignResult = ifd;
    if (undefined !== ifd[c3]) {
      const tmp3Result = get0thIfdOffset;
      objectAssignResult = tmp3Result.objectAssign(ifd, tmp3Result.readIfd(getUint16, IFD_TYPE_0TH.IFD_TYPE_EXIF, c5, c5 + ifd[tmp5].value, byteOrder, arg2));
    }
    if (undefined !== objectAssignResult[c4]) {
      const tmp3Result2 = get0thIfdOffset;
      objectAssignResult = _mod5213.objectAssign(objectAssignResult, tmp3Result2.readIfd(getUint16, IFD_TYPE_0TH.IFD_TYPE_GPS, c5, c5 + objectAssignResult[tmp12].value, byteOrder, arg2));
      const tmp3Result1 = _mod5213;
    }
    let objectAssignResult1 = objectAssignResult;
    if (undefined !== objectAssignResult[c5]) {
      const tmp3Result4 = get0thIfdOffset;
      objectAssignResult1 = _mod5213.objectAssign(objectAssignResult, tmp3Result4.readIfd(getUint16, IFD_TYPE_0TH.IFD_TYPE_INTEROPERABILITY, c5, c5 + objectAssignResult[tmp19].value, byteOrder, arg2));
      const tmp3Result3 = _mod5213;
    }
    return { tags: objectAssignResult1, byteOrder };
  }
};