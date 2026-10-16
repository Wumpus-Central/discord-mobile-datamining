// === Module 8051: ? ===

// Module 8051
import _mod8049 from "module_8049" /* 8049 */;
import _modDef8052 from "module_8052" /* 8052 */;
import _modDef8053 from "module_8053" /* 8053 */;
import sumDefault from "sum" /* 8055 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8056 */;
import _modDef8057 from "module_8057" /* 8057 */;
import _modDef8061 from "module_8061" /* 8061 */;
import _modDef8062 from "module_8062" /* 8062 */;
import _modDef8063 from "module_8063" /* 8063 */;
import _modDef8064 from "module_8064" /* 8064 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8052.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8053;
        const findTiffOffsetsResult = _modDef8053.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8049.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8053;
    }
    if (_modDef8052.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8049.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8052.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8049.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8052.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8057;
        const findHeicOffsetsResult = _modDef8057.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8049.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8057;
    }
    if (_modDef8052.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8061;
        const findAvifOffsetsResult = _modDef8061.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8049.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8061;
    }
    if (_modDef8052.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8062;
        const findOffsetsResult = _modDef8062.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8049.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8062;
    }
    if (_modDef8052.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8063;
        const findOffsetsResult1 = _modDef8063.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8049.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8063;
    }
    if (_modDef8052.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8064;
        const findOffsetsResult2 = _modDef8064.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8049.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8064;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};