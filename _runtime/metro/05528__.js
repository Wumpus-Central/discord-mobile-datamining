// === Module 5528: ? ===

// Module 5528
import _mod5526 from "module_5526" /* 5526 */;
import _modDef5529 from "module_5529" /* 5529 */;
import _modDef5530 from "module_5530" /* 5530 */;
import sumDefault from "sum" /* 5532 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 5533 */;
import _modDef5534 from "module_5534" /* 5534 */;
import _modDef5538 from "module_5538" /* 5538 */;
import _modDef5539 from "module_5539" /* 5539 */;
import _modDef5540 from "module_5540" /* 5540 */;
import _modDef5541 from "module_5541" /* 5541 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5529.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5530;
        const findTiffOffsetsResult = _modDef5530.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5526.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef5530;
    }
    if (_modDef5529.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5526.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef5529.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5526.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5529.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef5534;
        const findHeicOffsetsResult = _modDef5534.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5526.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef5534;
    }
    if (_modDef5529.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5538;
        const findAvifOffsetsResult = _modDef5538.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5526.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef5538;
    }
    if (_modDef5529.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5539;
        const findOffsetsResult = _modDef5539.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5526.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef5539;
    }
    if (_modDef5529.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5540;
        const findOffsetsResult1 = _modDef5540.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5526.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef5540;
    }
    if (_modDef5529.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5541;
        const findOffsetsResult2 = _modDef5541.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5526.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef5541;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};