// === Module 8273: ? ===

// Module 8273
import _mod8271 from "module_8271" /* 8271 */;
import _modDef8274 from "module_8274" /* 8274 */;
import _modDef8275 from "module_8275" /* 8275 */;
import sumDefault from "sum" /* 8277 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8278 */;
import _modDef8279 from "module_8279" /* 8279 */;
import _modDef8283 from "module_8283" /* 8283 */;
import _modDef8284 from "module_8284" /* 8284 */;
import _modDef8285 from "module_8285" /* 8285 */;
import _modDef8286 from "module_8286" /* 8286 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8274.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8275;
        const findTiffOffsetsResult = _modDef8275.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8271.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8275;
    }
    if (_modDef8274.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8271.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8274.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8271.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8274.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8279;
        const findHeicOffsetsResult = _modDef8279.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8271.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8279;
    }
    if (_modDef8274.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8283;
        const findAvifOffsetsResult = _modDef8283.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8271.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8283;
    }
    if (_modDef8274.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8284;
        const findOffsetsResult = _modDef8284.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8271.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8284;
    }
    if (_modDef8274.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8285;
        const findOffsetsResult1 = _modDef8285.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8271.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8285;
    }
    if (_modDef8274.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8286;
        const findOffsetsResult2 = _modDef8286.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8271.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8286;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};