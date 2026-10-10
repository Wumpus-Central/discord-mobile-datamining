// === Module 7829: ? ===

// Module 7829
import _mod7827 from "module_7827" /* 7827 */;
import _modDef7830 from "module_7830" /* 7830 */;
import _modDef7831 from "module_7831" /* 7831 */;
import sumDefault from "sum" /* 7833 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 7834 */;
import _modDef7835 from "module_7835" /* 7835 */;
import _modDef7839 from "module_7839" /* 7839 */;
import _modDef7840 from "module_7840" /* 7840 */;
import _modDef7841 from "module_7841" /* 7841 */;
import _modDef7842 from "module_7842" /* 7842 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef7830.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef7831;
        const findTiffOffsetsResult = _modDef7831.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod7827.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef7831;
    }
    if (_modDef7830.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod7827.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef7830.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod7827.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef7830.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef7835;
        const findHeicOffsetsResult = _modDef7835.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod7827.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef7835;
    }
    if (_modDef7830.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef7839;
        const findAvifOffsetsResult = _modDef7839.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod7827.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef7839;
    }
    if (_modDef7830.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef7840;
        const findOffsetsResult = _modDef7840.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod7827.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef7840;
    }
    if (_modDef7830.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef7841;
        const findOffsetsResult1 = _modDef7841.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod7827.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef7841;
    }
    if (_modDef7830.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef7842;
        const findOffsetsResult2 = _modDef7842.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod7827.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef7842;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};