// === Module 8097: ? ===

// Module 8097
import _mod8095 from "module_8095" /* 8095 */;
import _modDef8098 from "module_8098" /* 8098 */;
import _modDef8099 from "module_8099" /* 8099 */;
import sumDefault from "sum" /* 8101 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8102 */;
import _modDef8103 from "module_8103" /* 8103 */;
import _modDef8107 from "module_8107" /* 8107 */;
import _modDef8108 from "module_8108" /* 8108 */;
import _modDef8109 from "module_8109" /* 8109 */;
import _modDef8110 from "module_8110" /* 8110 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8098.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8099;
        const findTiffOffsetsResult = _modDef8099.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8095.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8099;
    }
    if (_modDef8098.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8095.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8098.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8095.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8098.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8103;
        const findHeicOffsetsResult = _modDef8103.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8095.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8103;
    }
    if (_modDef8098.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8107;
        const findAvifOffsetsResult = _modDef8107.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8095.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8107;
    }
    if (_modDef8098.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8108;
        const findOffsetsResult = _modDef8108.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8095.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8108;
    }
    if (_modDef8098.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8109;
        const findOffsetsResult1 = _modDef8109.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8095.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8109;
    }
    if (_modDef8098.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8110;
        const findOffsetsResult2 = _modDef8110.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8095.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8110;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};