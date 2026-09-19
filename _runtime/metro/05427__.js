// === Module 5427: ? ===

// Module 5427
import _mod5425 from "module_5425" /* 5425 */;
import _modDef5428 from "module_5428" /* 5428 */;
import _modDef5429 from "module_5429" /* 5429 */;
import sumDefault from "sum" /* 5431 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 5432 */;
import _modDef5433 from "module_5433" /* 5433 */;
import _modDef5437 from "module_5437" /* 5437 */;
import _modDef5438 from "module_5438" /* 5438 */;
import _modDef5439 from "module_5439" /* 5439 */;
import _modDef5440 from "module_5440" /* 5440 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5428.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5429;
        const findTiffOffsetsResult = _modDef5429.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5425.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef5429;
    }
    if (_modDef5428.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5425.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef5428.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5425.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5428.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef5433;
        const findHeicOffsetsResult = _modDef5433.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5425.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef5433;
    }
    if (_modDef5428.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5437;
        const findAvifOffsetsResult = _modDef5437.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5425.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef5437;
    }
    if (_modDef5428.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5438;
        const findOffsetsResult = _modDef5438.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5425.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef5438;
    }
    if (_modDef5428.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5439;
        const findOffsetsResult1 = _modDef5439.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5425.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef5439;
    }
    if (_modDef5428.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5440;
        const findOffsetsResult2 = _modDef5440.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5425.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef5440;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};