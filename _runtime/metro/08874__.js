// === Module 8874: ? ===

// Module 8874
import _mod8872 from "module_8872" /* 8872 */;
import _modDef8875 from "module_8875" /* 8875 */;
import _modDef8876 from "module_8876" /* 8876 */;
import sumDefault from "sum" /* 8878 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8879 */;
import _modDef8880 from "module_8880" /* 8880 */;
import _modDef8884 from "module_8884" /* 8884 */;
import _modDef8885 from "module_8885" /* 8885 */;
import _modDef8886 from "module_8886" /* 8886 */;
import _modDef8887 from "module_8887" /* 8887 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8875.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8876;
        const findTiffOffsetsResult = _modDef8876.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8872.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8876;
    }
    if (_modDef8875.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8872.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8875.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8872.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8875.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8880;
        const findHeicOffsetsResult = _modDef8880.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8872.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8880;
    }
    if (_modDef8875.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8884;
        const findAvifOffsetsResult = _modDef8884.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8872.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8884;
    }
    if (_modDef8875.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8885;
        const findOffsetsResult = _modDef8885.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8872.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8885;
    }
    if (_modDef8875.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8886;
        const findOffsetsResult1 = _modDef8886.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8872.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8886;
    }
    if (_modDef8875.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8887;
        const findOffsetsResult2 = _modDef8887.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8872.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8887;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};