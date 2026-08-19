// _runtime/metro/04929__.js
import getDataView from "../04910_getDataView.js";
import _modDef4915 from "04915__.js";
import readTag from "../04930_readTag.js";
import importDefaultResult1 from "../04931_importDefaultResult1.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
let c3 = "Exif IFD Pointer";
let c4 = "GPS Info IFD Pointer";
let c5 = "Interoperability IFD Pointer";
arg5.default = {
  read(getUint16, c5) {
    const byteOrder = _modDef4915.getByteOrder(getUint16, c5);
    const obj2 = readTag;
    const ifd = obj2.readIfd(getUint16, importDefaultResult1.IFD_TYPE_0TH, c5, readTag.get0thIfdOffset(getUint16, c5, byteOrder), byteOrder, arg2);
    let objectAssignResult = ifd;
    if (undefined !== ifd[c3]) {
      const tmp3Result = readTag;
      objectAssignResult = tmp3Result.objectAssign(ifd, tmp3Result.readIfd(getUint16, importDefaultResult1.IFD_TYPE_EXIF, c5, c5 + ifd[tmp5].value, byteOrder, arg2));
    }
    if (undefined !== objectAssignResult[c4]) {
      const tmp3Result2 = readTag;
      objectAssignResult = getDataView.objectAssign(objectAssignResult, tmp3Result2.readIfd(getUint16, importDefaultResult1.IFD_TYPE_GPS, c5, c5 + objectAssignResult[tmp12].value, byteOrder, arg2));
      const tmp3Result1 = getDataView;
    }
    let objectAssignResult1 = objectAssignResult;
    if (undefined !== objectAssignResult[c5]) {
      const tmp3Result4 = readTag;
      objectAssignResult1 = getDataView.objectAssign(objectAssignResult, tmp3Result4.readIfd(getUint16, importDefaultResult1.IFD_TYPE_INTEROPERABILITY, c5, c5 + objectAssignResult[tmp19].value, byteOrder, arg2));
      const tmp3Result3 = getDataView;
    }
    return { tags: objectAssignResult1, byteOrder };
  }
};