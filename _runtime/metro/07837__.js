// === Module 7837: ? ===

// Module 7837
import _mod7835 from "module_7835" /* 7835 */;
import _modDef7838 from "module_7838" /* 7838 */;
import _modDef7839 from "module_7839" /* 7839 */;
import sumDefault from "sum" /* 7841 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 7842 */;
import _modDef7843 from "module_7843" /* 7843 */;
import _modDef7847 from "module_7847" /* 7847 */;
import _modDef7848 from "module_7848" /* 7848 */;
import _modDef7849 from "module_7849" /* 7849 */;
import _modDef7850 from "module_7850" /* 7850 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef7838.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef7839;
        const findTiffOffsetsResult = _modDef7839.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod7835.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef7839;
    }
    if (_modDef7838.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod7835.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef7838.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod7835.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef7838.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef7843;
        const findHeicOffsetsResult = _modDef7843.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod7835.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef7843;
    }
    if (_modDef7838.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef7847;
        const findAvifOffsetsResult = _modDef7847.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod7835.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef7847;
    }
    if (_modDef7838.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef7848;
        const findOffsetsResult = _modDef7848.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod7835.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef7848;
    }
    if (_modDef7838.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef7849;
        const findOffsetsResult1 = _modDef7849.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod7835.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef7849;
    }
    if (_modDef7838.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef7850;
        const findOffsetsResult2 = _modDef7850.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod7835.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef7850;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};