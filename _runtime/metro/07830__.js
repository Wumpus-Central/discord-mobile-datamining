// === Module 7830: ? ===

// Module 7830
import _mod7828 from "module_7828" /* 7828 */;
import _modDef7831 from "module_7831" /* 7831 */;
import _modDef7832 from "module_7832" /* 7832 */;
import sumDefault from "sum" /* 7834 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 7835 */;
import _modDef7836 from "module_7836" /* 7836 */;
import _modDef7840 from "module_7840" /* 7840 */;
import _modDef7841 from "module_7841" /* 7841 */;
import _modDef7842 from "module_7842" /* 7842 */;
import _modDef7843 from "module_7843" /* 7843 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef7831.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef7832;
        const findTiffOffsetsResult = _modDef7832.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod7828.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef7832;
    }
    if (_modDef7831.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod7828.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef7831.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod7828.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef7831.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef7836;
        const findHeicOffsetsResult = _modDef7836.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod7828.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef7836;
    }
    if (_modDef7831.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef7840;
        const findAvifOffsetsResult = _modDef7840.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod7828.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef7840;
    }
    if (_modDef7831.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef7841;
        const findOffsetsResult = _modDef7841.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod7828.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef7841;
    }
    if (_modDef7831.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef7842;
        const findOffsetsResult1 = _modDef7842.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod7828.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef7842;
    }
    if (_modDef7831.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef7843;
        const findOffsetsResult2 = _modDef7843.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod7828.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef7843;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};