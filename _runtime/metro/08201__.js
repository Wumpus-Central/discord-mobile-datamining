// === Module 8201: ? ===

// Module 8201
import _mod8199 from "module_8199" /* 8199 */;
import _modDef8202 from "module_8202" /* 8202 */;
import _modDef8203 from "module_8203" /* 8203 */;
import sumDefault from "sum" /* 8205 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8206 */;
import _modDef8207 from "module_8207" /* 8207 */;
import _modDef8211 from "module_8211" /* 8211 */;
import _modDef8212 from "module_8212" /* 8212 */;
import _modDef8213 from "module_8213" /* 8213 */;
import _modDef8214 from "module_8214" /* 8214 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8202.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8203;
        const findTiffOffsetsResult = _modDef8203.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8199.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8203;
    }
    if (_modDef8202.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8199.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8202.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8199.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8202.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8207;
        const findHeicOffsetsResult = _modDef8207.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8199.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8207;
    }
    if (_modDef8202.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8211;
        const findAvifOffsetsResult = _modDef8211.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8199.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8211;
    }
    if (_modDef8202.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8212;
        const findOffsetsResult = _modDef8212.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8199.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8212;
    }
    if (_modDef8202.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8213;
        const findOffsetsResult1 = _modDef8213.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8199.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8213;
    }
    if (_modDef8202.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8214;
        const findOffsetsResult2 = _modDef8214.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8199.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8214;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};