// === Module 5518: ? ===

// Module 5518
import _mod5516 from "module_5516" /* 5516 */;
import _modDef5519 from "module_5519" /* 5519 */;
import _modDef5520 from "module_5520" /* 5520 */;
import sumDefault from "sum" /* 5522 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 5523 */;
import _modDef5524 from "module_5524" /* 5524 */;
import _modDef5528 from "module_5528" /* 5528 */;
import _modDef5529 from "module_5529" /* 5529 */;
import _modDef5530 from "module_5530" /* 5530 */;
import _modDef5531 from "module_5531" /* 5531 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5519.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5520;
        const findTiffOffsetsResult = _modDef5520.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5516.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef5520;
    }
    if (_modDef5519.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5516.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef5519.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5516.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5519.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef5524;
        const findHeicOffsetsResult = _modDef5524.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5516.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef5524;
    }
    if (_modDef5519.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5528;
        const findAvifOffsetsResult = _modDef5528.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5516.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef5528;
    }
    if (_modDef5519.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5529;
        const findOffsetsResult = _modDef5529.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5516.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef5529;
    }
    if (_modDef5519.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5530;
        const findOffsetsResult1 = _modDef5530.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5516.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef5530;
    }
    if (_modDef5519.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5531;
        const findOffsetsResult2 = _modDef5531.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5516.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef5531;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};