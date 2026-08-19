// === Module 4912: ? ===

// Module 4912
import getDataView from "getDataView" /* 4910 */;
import _modDef4913 from "module_4913" /* 4913 */;
import _modDef4914 from "module_4914" /* 4914 */;
import sumDefault from "sum" /* 4916 */;
import _modDef4917 from "module_4917" /* 4917 */;
import parseBoxDefault from "parseBox" /* 4918 */;
import parseBoxDefault2 from "parseBox" /* 4922 */;
import getDataViewDefault from "getDataView" /* 4923 */;
import getDataViewDefault2 from "getDataView" /* 4924 */;
import getDataViewDefault3 from "getDataView" /* 4925 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
arg5.default = {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef4913.USE_TIFF) {
      let tmpResult = _modDef4914;
      if (tmpResult.isTiffFile(byteLength)) {
        tmpResult = _modDef4914;
        const findTiffOffsetsResult = tmpResult.findTiffOffsets();
        let obj = { fileType: null };
        obj[0] = { value: "tiff", description: "TIFF" };
        return getDataView.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef4913.USE_JPEG) {
      if (tmpResult1.isJpegFile(byteLength)) {
        const tmpResult2 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        obj = { fileType: null };
        obj[0] = { value: "jpeg", description: "JPEG" };
        return getDataView.objectAssign({}, findJpegOffsetsResult, obj);
      }
      tmpResult1 = sumDefault;
    }
    if (_modDef4913.USE_PNG) {
      if (tmpResult3.isPngFile(byteLength)) {
        const tmpResult4 = _modDef4917;
        const findPngOffsetsResult = _modDef4917.findPngOffsets(byteLength, flag2);
        obj1 = { fileType: null };
        obj1[0] = { value: "png", description: "PNG" };
        return getDataView.objectAssign({}, findPngOffsetsResult, obj1);
      }
      tmpResult3 = _modDef4917;
    }
    if (_modDef4913.USE_HEIC) {
      if (tmpResult5.isHeicFile(byteLength)) {
        const tmpResult6 = parseBoxDefault;
        const findHeicOffsetsResult = parseBoxDefault.findHeicOffsets(byteLength);
        const obj2 = { fileType: null };
        obj2[0] = { value: "heic", description: "HEIC" };
        return getDataView.objectAssign({}, findHeicOffsetsResult, obj2);
      }
      tmpResult5 = parseBoxDefault;
    }
    if (_modDef4913.USE_AVIF) {
      if (tmpResult7.isAvifFile(byteLength)) {
        const tmpResult8 = parseBoxDefault2;
        const findAvifOffsetsResult = parseBoxDefault2.findAvifOffsets(byteLength);
        const obj3 = { fileType: null };
        obj3[0] = { value: "avif", description: "AVIF" };
        return getDataView.objectAssign({}, findAvifOffsetsResult, obj3);
      }
      tmpResult7 = parseBoxDefault2;
    }
    if (_modDef4913.USE_WEBP) {
      if (tmpResult9.isWebpFile(byteLength)) {
        const tmpResult10 = getDataViewDefault;
        const findOffsetsResult = getDataViewDefault.findOffsets(byteLength);
        const obj4 = { fileType: null };
        obj4[0] = { value: "webp", description: "WebP" };
        return getDataView.objectAssign({}, findOffsetsResult, obj4);
      }
      tmpResult9 = getDataViewDefault;
    }
    if (_modDef4913.USE_GIF) {
      if (tmpResult11.isGifFile(byteLength)) {
        const tmpResult12 = getDataViewDefault2;
        const findOffsetsResult1 = getDataViewDefault2.findOffsets(byteLength);
        const obj5 = { fileType: null };
        obj5[0] = { value: "gif", description: "GIF" };
        return getDataView.objectAssign({}, findOffsetsResult1, obj5);
      }
      tmpResult11 = getDataViewDefault2;
    }
    if (_modDef4913.USE_XMP) {
      if (tmpResult13.isXMLFile(byteLength)) {
        const tmpResult14 = getDataViewDefault3;
        const findOffsetsResult2 = getDataViewDefault3.findOffsets(byteLength);
        const obj6 = { fileType: null };
        obj6[0] = { value: "xml", description: "XML" };
        return getDataView.objectAssign({}, findOffsetsResult2, obj6);
      }
      tmpResult13 = getDataViewDefault3;
    }
    error = new Error("Invalid image format");
    throw error;
  }
};