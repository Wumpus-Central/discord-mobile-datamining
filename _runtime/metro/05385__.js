// === Module 5385: ? ===

// Module 5385
import _mod5383 from "module_5383" /* 5383 */;
import _modDef5386 from "module_5386" /* 5386 */;
import _modDef5387 from "module_5387" /* 5387 */;
import sumDefault from "sum" /* 5389 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 5390 */;
import _modDef5391 from "module_5391" /* 5391 */;
import _modDef5395 from "module_5395" /* 5395 */;
import _modDef5396 from "module_5396" /* 5396 */;
import _modDef5397 from "module_5397" /* 5397 */;
import _modDef5398 from "module_5398" /* 5398 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5386.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5387;
        const findTiffOffsetsResult = _modDef5387.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5383.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef5387;
    }
    if (_modDef5386.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5383.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef5386.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5383.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5386.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef5391;
        const findHeicOffsetsResult = _modDef5391.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5383.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef5391;
    }
    if (_modDef5386.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5395;
        const findAvifOffsetsResult = _modDef5395.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5383.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef5395;
    }
    if (_modDef5386.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5396;
        const findOffsetsResult = _modDef5396.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5383.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef5396;
    }
    if (_modDef5386.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5397;
        const findOffsetsResult1 = _modDef5397.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5383.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef5397;
    }
    if (_modDef5386.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5398;
        const findOffsetsResult2 = _modDef5398.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5383.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef5398;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};