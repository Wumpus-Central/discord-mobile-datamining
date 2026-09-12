// _runtime/metro/05313__.js
import _mod5294 from "05294__.js";
import _modDef5299 from "05299__.js";
import get0thIfdOffset from "../05314_get0thIfdOffset.js";
import IFD_TYPE_0TH from "../05315_IFD_TYPE_0TH.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
let c3 = "Exif IFD Pointer";
let c4 = "GPS Info IFD Pointer";
let c5 = "Interoperability IFD Pointer";

export default {
  read(getUint16, c5, arg2) {
    const byteOrder = _modDef5299.getByteOrder(getUint16, c5);
    const obj2 = get0thIfdOffset;
    const ifd = obj2.readIfd(
      getUint16,
      IFD_TYPE_0TH.IFD_TYPE_0TH,
      c5,
      get0thIfdOffset.get0thIfdOffset(getUint16, c5, byteOrder),
      byteOrder,
      arg2,
    );
    let objectAssignResult = ifd;
    if (undefined !== ifd[c3]) {
      const tmp3Result = get0thIfdOffset;
      objectAssignResult = tmp3Result.objectAssign(
        ifd,
        tmp3Result.readIfd(getUint16, IFD_TYPE_0TH.IFD_TYPE_EXIF, c5, c5 + ifd[tmp5].value, byteOrder, arg2),
      );
    }
    if (undefined !== objectAssignResult[c4]) {
      const tmp3Result2 = get0thIfdOffset;
      objectAssignResult = _mod5294.objectAssign(
        objectAssignResult,
        tmp3Result2.readIfd(
          getUint16,
          IFD_TYPE_0TH.IFD_TYPE_GPS,
          c5,
          c5 + objectAssignResult[tmp12].value,
          byteOrder,
          arg2,
        ),
      );
      const tmp3Result1 = _mod5294;
    }
    let objectAssignResult1 = objectAssignResult;
    if (undefined !== objectAssignResult[c5]) {
      const tmp3Result4 = get0thIfdOffset;
      objectAssignResult1 = _mod5294.objectAssign(
        objectAssignResult,
        tmp3Result4.readIfd(
          getUint16,
          IFD_TYPE_0TH.IFD_TYPE_INTEROPERABILITY,
          c5,
          c5 + objectAssignResult[tmp19].value,
          byteOrder,
          arg2,
        ),
      );
      const tmp3Result3 = _mod5294;
    }
    return { tags: objectAssignResult1, byteOrder };
  },
};
