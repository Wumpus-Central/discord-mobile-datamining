// === Module 5266: ? ===

// Module 5266
import _mod5264 from "module_5264" /* 5264 */;
import _modDef5267 from "module_5267" /* 5267 */;
import _modDef5268 from "module_5268" /* 5268 */;
import sumDefault from "sum" /* 5270 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 5271 */;
import _modDef5272 from "module_5272" /* 5272 */;
import _modDef5276 from "module_5276" /* 5276 */;
import _modDef5277 from "module_5277" /* 5277 */;
import _modDef5278 from "module_5278" /* 5278 */;
import _modDef5279 from "module_5279" /* 5279 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5267.USE_TIFF) {
      let tmpResult = _modDef5268;
      if (tmpResult.isTiffFile(byteLength)) {
        tmpResult = _modDef5268;
        const findTiffOffsetsResult = tmpResult.findTiffOffsets();
        let obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5264.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef5267.USE_JPEG) {
      if (tmpResult1.isJpegFile(byteLength)) {
        const tmpResult2 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        obj = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5264.objectAssign({}, findJpegOffsetsResult, obj);
      }
      tmpResult1 = sumDefault;
    }
    if (_modDef5267.USE_PNG) {
      if (tmpResult3.isPngFile(byteLength)) {
        const tmpResult4 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj1 = { fileType: { value: "png", description: "PNG" } };
        return _mod5264.objectAssign({}, findPngOffsetsResult, obj1);
      }
      tmpResult3 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5267.USE_HEIC) {
      if (tmpResult5.isHeicFile(byteLength)) {
        const tmpResult6 = _modDef5272;
        const findHeicOffsetsResult = _modDef5272.findHeicOffsets(byteLength);
        const obj2 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5264.objectAssign({}, findHeicOffsetsResult, obj2);
      }
      tmpResult5 = _modDef5272;
    }
    if (_modDef5267.USE_AVIF) {
      if (tmpResult7.isAvifFile(byteLength)) {
        const tmpResult8 = _modDef5276;
        const findAvifOffsetsResult = _modDef5276.findAvifOffsets(byteLength);
        const obj3 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5264.objectAssign({}, findAvifOffsetsResult, obj3);
      }
      tmpResult7 = _modDef5276;
    }
    if (_modDef5267.USE_WEBP) {
      if (tmpResult9.isWebpFile(byteLength)) {
        const tmpResult10 = _modDef5277;
        const findOffsetsResult = _modDef5277.findOffsets(byteLength);
        const obj4 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5264.objectAssign({}, findOffsetsResult, obj4);
      }
      tmpResult9 = _modDef5277;
    }
    if (_modDef5267.USE_GIF) {
      if (tmpResult11.isGifFile(byteLength)) {
        const tmpResult12 = _modDef5278;
        const findOffsetsResult1 = _modDef5278.findOffsets(byteLength);
        const obj5 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5264.objectAssign({}, findOffsetsResult1, obj5);
      }
      tmpResult11 = _modDef5278;
    }
    if (_modDef5267.USE_XMP) {
      if (tmpResult13.isXMLFile(byteLength)) {
        const tmpResult14 = _modDef5279;
        const findOffsetsResult2 = _modDef5279.findOffsets(byteLength);
        const obj6 = { fileType: { value: "xml", description: "XML" } };
        return _mod5264.objectAssign({}, findOffsetsResult2, obj6);
      }
      tmpResult13 = _modDef5279;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};