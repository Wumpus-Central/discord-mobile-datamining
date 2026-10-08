// === Module 7802: ? ===

// Module 7802
import _mod7800 from "module_7800" /* 7800 */;
import _modDef7803 from "module_7803" /* 7803 */;
import _modDef7804 from "module_7804" /* 7804 */;
import sumDefault from "sum" /* 7806 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 7807 */;
import _modDef7808 from "module_7808" /* 7808 */;
import _modDef7812 from "module_7812" /* 7812 */;
import _modDef7813 from "module_7813" /* 7813 */;
import _modDef7814 from "module_7814" /* 7814 */;
import _modDef7815 from "module_7815" /* 7815 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef7803.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef7804;
        const findTiffOffsetsResult = _modDef7804.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod7800.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef7804;
    }
    if (_modDef7803.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod7800.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef7803.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod7800.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef7803.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef7808;
        const findHeicOffsetsResult = _modDef7808.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod7800.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef7808;
    }
    if (_modDef7803.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef7812;
        const findAvifOffsetsResult = _modDef7812.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod7800.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef7812;
    }
    if (_modDef7803.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef7813;
        const findOffsetsResult = _modDef7813.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod7800.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef7813;
    }
    if (_modDef7803.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef7814;
        const findOffsetsResult1 = _modDef7814.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod7800.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef7814;
    }
    if (_modDef7803.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef7815;
        const findOffsetsResult2 = _modDef7815.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod7800.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef7815;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};