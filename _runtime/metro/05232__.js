// _runtime/metro/05232__.js
import readTag from "../05233_readTag.js";
import importDefaultResult1 from "../05234_importDefaultResult1.js";

require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c3 = "Exif IFD Pointer";
let c4 = "GPS Info IFD Pointer";
let c5 = "Interoperability IFD Pointer";
arg5.default = {
  read(getUint16, sum) {
    const byteOrder = module(5218).getByteOrder(getUint16, sum);
    const obj = module(5218);
    const obj2 = readTag;
    const ifd = obj2.readIfd(
      getUint16,
      importDefaultResult1.IFD_TYPE_0TH,
      sum,
      readTag.get0thIfdOffset(getUint16, sum, byteOrder),
      byteOrder,
      arg2,
    );
    let objectAssignResult = ifd;
    if (undefined !== ifd[c3]) {
      let tmp3Result = tmp3(5213);
      tmp3Result = tmp3(5233);
      objectAssignResult = tmp3Result.objectAssign(
        ifd,
        tmp3Result.readIfd(getUint16, tmp3(5234).IFD_TYPE_EXIF, sum, sum + ifd[tmp5].value, byteOrder, arg2),
      );
    }
    if (undefined !== objectAssignResult[c4]) {
      const tmp3Result2 = tmp3(5233);
      objectAssignResult = tmp3(5213).objectAssign(
        objectAssignResult,
        tmp3Result2.readIfd(
          getUint16,
          tmp3(5234).IFD_TYPE_GPS,
          sum,
          sum + objectAssignResult[tmp12].value,
          byteOrder,
          arg2,
        ),
      );
      const tmp3Result1 = tmp3(5213);
    }
    let objectAssignResult1 = objectAssignResult;
    if (undefined !== objectAssignResult[c5]) {
      const tmp3Result4 = tmp3(5233);
      objectAssignResult1 = tmp3(5213).objectAssign(
        objectAssignResult,
        tmp3Result4.readIfd(
          getUint16,
          tmp3(5234).IFD_TYPE_INTEROPERABILITY,
          sum,
          sum + objectAssignResult[tmp19].value,
          byteOrder,
          arg2,
        ),
      );
      const tmp3Result3 = tmp3(5213);
    }
    return { tags: objectAssignResult1, byteOrder };
  },
};
