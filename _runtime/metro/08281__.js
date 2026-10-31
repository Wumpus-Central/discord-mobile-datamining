// === Module 8281: ? ===

// Module 8281
import _mod8279 from "module_8279" /* 8279 */;
import _modDef8282 from "module_8282" /* 8282 */;
import _modDef8283 from "module_8283" /* 8283 */;
import sumDefault from "sum" /* 8285 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8286 */;
import _modDef8287 from "module_8287" /* 8287 */;
import _modDef8291 from "module_8291" /* 8291 */;
import _modDef8292 from "module_8292" /* 8292 */;
import _modDef8293 from "module_8293" /* 8293 */;
import _modDef8294 from "module_8294" /* 8294 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8282.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8283;
        const findTiffOffsetsResult = _modDef8283.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8279.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8283;
    }
    if (_modDef8282.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8279.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8282.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8279.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8282.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8287;
        const findHeicOffsetsResult = _modDef8287.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8279.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8287;
    }
    if (_modDef8282.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8291;
        const findAvifOffsetsResult = _modDef8291.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8279.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8291;
    }
    if (_modDef8282.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8292;
        const findOffsetsResult = _modDef8292.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8279.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8292;
    }
    if (_modDef8282.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8293;
        const findOffsetsResult1 = _modDef8293.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8279.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8293;
    }
    if (_modDef8282.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8294;
        const findOffsetsResult2 = _modDef8294.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8279.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8294;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};