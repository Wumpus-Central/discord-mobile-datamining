// === Module 5265: ? ===

// Module 5265
import _mod5263 from "module_5263" /* 5263 */;
import _modDef5266 from "module_5266" /* 5266 */;
import _modDef5267 from "module_5267" /* 5267 */;
import sumDefault from "sum" /* 5269 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 5270 */;
import _modDef5271 from "module_5271" /* 5271 */;
import _modDef5275 from "module_5275" /* 5275 */;
import _modDef5276 from "module_5276" /* 5276 */;
import _modDef5277 from "module_5277" /* 5277 */;
import _modDef5278 from "module_5278" /* 5278 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5266.USE_TIFF) {
      let tmpResult = _modDef5267;
      if (tmpResult.isTiffFile(byteLength)) {
        tmpResult = _modDef5267;
        const findTiffOffsetsResult = tmpResult.findTiffOffsets();
        let obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5263.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef5266.USE_JPEG) {
      if (tmpResult1.isJpegFile(byteLength)) {
        const tmpResult2 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        obj = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5263.objectAssign({}, findJpegOffsetsResult, obj);
      }
      tmpResult1 = sumDefault;
    }
    if (_modDef5266.USE_PNG) {
      if (tmpResult3.isPngFile(byteLength)) {
        const tmpResult4 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj1 = { fileType: { value: "png", description: "PNG" } };
        return _mod5263.objectAssign({}, findPngOffsetsResult, obj1);
      }
      tmpResult3 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5266.USE_HEIC) {
      if (tmpResult5.isHeicFile(byteLength)) {
        const tmpResult6 = _modDef5271;
        const findHeicOffsetsResult = _modDef5271.findHeicOffsets(byteLength);
        const obj2 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5263.objectAssign({}, findHeicOffsetsResult, obj2);
      }
      tmpResult5 = _modDef5271;
    }
    if (_modDef5266.USE_AVIF) {
      if (tmpResult7.isAvifFile(byteLength)) {
        const tmpResult8 = _modDef5275;
        const findAvifOffsetsResult = _modDef5275.findAvifOffsets(byteLength);
        const obj3 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5263.objectAssign({}, findAvifOffsetsResult, obj3);
      }
      tmpResult7 = _modDef5275;
    }
    if (_modDef5266.USE_WEBP) {
      if (tmpResult9.isWebpFile(byteLength)) {
        const tmpResult10 = _modDef5276;
        const findOffsetsResult = _modDef5276.findOffsets(byteLength);
        const obj4 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5263.objectAssign({}, findOffsetsResult, obj4);
      }
      tmpResult9 = _modDef5276;
    }
    if (_modDef5266.USE_GIF) {
      if (tmpResult11.isGifFile(byteLength)) {
        const tmpResult12 = _modDef5277;
        const findOffsetsResult1 = _modDef5277.findOffsets(byteLength);
        const obj5 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5263.objectAssign({}, findOffsetsResult1, obj5);
      }
      tmpResult11 = _modDef5277;
    }
    if (_modDef5266.USE_XMP) {
      if (tmpResult13.isXMLFile(byteLength)) {
        const tmpResult14 = _modDef5278;
        const findOffsetsResult2 = _modDef5278.findOffsets(byteLength);
        const obj6 = { fileType: { value: "xml", description: "XML" } };
        return _mod5263.objectAssign({}, findOffsetsResult2, obj6);
      }
      tmpResult13 = _modDef5278;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};