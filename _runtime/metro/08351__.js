// === Module 8351: ? ===

// Module 8351
import _mod8349 from "module_8349" /* 8349 */;
import _modDef8352 from "module_8352" /* 8352 */;
import _modDef8353 from "module_8353" /* 8353 */;
import sumDefault from "sum" /* 8355 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8356 */;
import _modDef8357 from "module_8357" /* 8357 */;
import _modDef8361 from "module_8361" /* 8361 */;
import _modDef8362 from "module_8362" /* 8362 */;
import _modDef8363 from "module_8363" /* 8363 */;
import _modDef8364 from "module_8364" /* 8364 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8352.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8353;
        const findTiffOffsetsResult = _modDef8353.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8349.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8353;
    }
    if (_modDef8352.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8349.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8352.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8349.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8352.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8357;
        const findHeicOffsetsResult = _modDef8357.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8349.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8357;
    }
    if (_modDef8352.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8361;
        const findAvifOffsetsResult = _modDef8361.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8349.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8361;
    }
    if (_modDef8352.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8362;
        const findOffsetsResult = _modDef8362.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8349.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8362;
    }
    if (_modDef8352.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8363;
        const findOffsetsResult1 = _modDef8363.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8349.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8363;
    }
    if (_modDef8352.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8364;
        const findOffsetsResult2 = _modDef8364.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8349.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8364;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};