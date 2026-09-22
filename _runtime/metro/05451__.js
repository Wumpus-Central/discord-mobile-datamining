// === Module 5451: ? ===

// Module 5451
import _mod5432 from "module_5432" /* 5432 */;
import _modDef5437 from "module_5437" /* 5437 */;
import get0thIfdOffset from "get0thIfdOffset" /* 5452 */;
import IFD_TYPE_0TH from "IFD_TYPE_0TH" /* 5453 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
let c3 = "Exif IFD Pointer";
let c4 = "GPS Info IFD Pointer";
let c5 = "Interoperability IFD Pointer";

export default {
  read(getUint16, c5, arg2) {
    const byteOrder = _modDef5437.getByteOrder(getUint16, c5);
    const obj2 = get0thIfdOffset;
    const ifd = obj2.readIfd(getUint16, IFD_TYPE_0TH.IFD_TYPE_0TH, c5, get0thIfdOffset.get0thIfdOffset(getUint16, c5, byteOrder), byteOrder, arg2);
    let objectAssignResult = ifd;
    if (undefined !== ifd[c3]) {
      const tmp3Result6 = get0thIfdOffset;
      objectAssignResult = _mod5432.objectAssign(ifd, tmp3Result6.readIfd(getUint16, IFD_TYPE_0TH.IFD_TYPE_EXIF, c5, c5 + ifd[tmp5].value, byteOrder, arg2));
      const tmp3Result = _mod5432;
    }
    let objectAssignResult3 = objectAssignResult;
    if (undefined !== objectAssignResult[c4]) {
      const tmp3Result8 = get0thIfdOffset;
      objectAssignResult3 = _mod5432.objectAssign(objectAssignResult, tmp3Result8.readIfd(getUint16, IFD_TYPE_0TH.IFD_TYPE_GPS, c5, c5 + objectAssignResult[tmp12].value, byteOrder, arg2));
      const tmp3Result7 = _mod5432;
    }
    let objectAssignResult4 = objectAssignResult3;
    if (undefined !== objectAssignResult3[c5]) {
      const tmp3Result10 = get0thIfdOffset;
      objectAssignResult4 = _mod5432.objectAssign(objectAssignResult3, tmp3Result10.readIfd(getUint16, IFD_TYPE_0TH.IFD_TYPE_INTEROPERABILITY, c5, c5 + objectAssignResult3[tmp19].value, byteOrder, arg2));
      const tmp3Result9 = _mod5432;
    }
    return { tags: objectAssignResult4, byteOrder };
  }
};