// _runtime/metro/04825__.js
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c3 = "Exif IFD Pointer";
let c4 = "GPS Info IFD Pointer";
let c5 = "Interoperability IFD Pointer";
arg5.default = {
  read(getUint16, sum) {
    const byteOrder = module(4811).getByteOrder(getUint16, sum);
    const obj = module(4811);
    const obj2 = require(4826) /* readTag */;
    const ifd = obj2.readIfd(getUint16, require(4827) /* importDefaultResult1 */.IFD_TYPE_0TH, sum, require(4826) /* readTag */.get0thIfdOffset(getUint16, sum, byteOrder), byteOrder, arg2);
    let objectAssignResult = ifd;
    if (undefined !== ifd[c3]) {
      let tmp3Result = tmp3(4806);
      tmp3Result = tmp3(4826);
      objectAssignResult = tmp3Result.objectAssign(ifd, tmp3Result.readIfd(getUint16, tmp3(4827).IFD_TYPE_EXIF, sum, sum + ifd[tmp5].value, byteOrder, arg2));
    }
    if (undefined !== objectAssignResult[c4]) {
      const tmp3Result2 = tmp3(4826);
      objectAssignResult = tmp3(4806).objectAssign(objectAssignResult, tmp3Result2.readIfd(getUint16, tmp3(4827).IFD_TYPE_GPS, sum, sum + objectAssignResult[tmp12].value, byteOrder, arg2));
      const tmp3Result1 = tmp3(4806);
    }
    let objectAssignResult1 = objectAssignResult;
    if (undefined !== objectAssignResult[c5]) {
      const tmp3Result4 = tmp3(4826);
      objectAssignResult1 = tmp3(4806).objectAssign(objectAssignResult, tmp3Result4.readIfd(getUint16, tmp3(4827).IFD_TYPE_INTEROPERABILITY, sum, sum + objectAssignResult[tmp19].value, byteOrder, arg2));
      const tmp3Result3 = tmp3(4806);
    }
    return { tags: objectAssignResult1, byteOrder };
  }
};