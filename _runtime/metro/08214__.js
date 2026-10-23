// === Module 8214: ? ===

// Module 8214
import _mod8212 from "module_8212" /* 8212 */;
import _modDef8215 from "module_8215" /* 8215 */;
import _modDef8216 from "module_8216" /* 8216 */;
import sumDefault from "sum" /* 8218 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8219 */;
import _modDef8220 from "module_8220" /* 8220 */;
import _modDef8224 from "module_8224" /* 8224 */;
import _modDef8225 from "module_8225" /* 8225 */;
import _modDef8226 from "module_8226" /* 8226 */;
import _modDef8227 from "module_8227" /* 8227 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8215.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8216;
        const findTiffOffsetsResult = _modDef8216.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8212.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8216;
    }
    if (_modDef8215.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8212.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8215.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8212.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8215.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8220;
        const findHeicOffsetsResult = _modDef8220.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8212.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8220;
    }
    if (_modDef8215.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8224;
        const findAvifOffsetsResult = _modDef8224.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8212.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8224;
    }
    if (_modDef8215.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8225;
        const findOffsetsResult = _modDef8225.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8212.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8225;
    }
    if (_modDef8215.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8226;
        const findOffsetsResult1 = _modDef8226.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8212.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8226;
    }
    if (_modDef8215.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8227;
        const findOffsetsResult2 = _modDef8227.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8212.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8227;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};