// === Module 5522: ? ===

// Module 5522
import _mod5520 from "module_5520" /* 5520 */;
import _modDef5523 from "module_5523" /* 5523 */;
import _modDef5524 from "module_5524" /* 5524 */;
import sumDefault from "sum" /* 5526 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 5527 */;
import _modDef5528 from "module_5528" /* 5528 */;
import _modDef5532 from "module_5532" /* 5532 */;
import _modDef5533 from "module_5533" /* 5533 */;
import _modDef5534 from "module_5534" /* 5534 */;
import _modDef5535 from "module_5535" /* 5535 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5523.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5524;
        const findTiffOffsetsResult = _modDef5524.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5520.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef5524;
    }
    if (_modDef5523.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5520.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef5523.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5520.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5523.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef5528;
        const findHeicOffsetsResult = _modDef5528.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5520.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef5528;
    }
    if (_modDef5523.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5532;
        const findAvifOffsetsResult = _modDef5532.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5520.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef5532;
    }
    if (_modDef5523.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5533;
        const findOffsetsResult = _modDef5533.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5520.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef5533;
    }
    if (_modDef5523.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5534;
        const findOffsetsResult1 = _modDef5534.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5520.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef5534;
    }
    if (_modDef5523.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5535;
        const findOffsetsResult2 = _modDef5535.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5520.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef5535;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};