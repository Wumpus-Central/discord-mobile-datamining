// === Module 5300: ? ===

// Module 5300
import _mod5298 from "module_5298" /* 5298 */;
import _modDef5301 from "module_5301" /* 5301 */;
import _modDef5302 from "module_5302" /* 5302 */;
import sumDefault from "sum" /* 5304 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 5305 */;
import _modDef5306 from "module_5306" /* 5306 */;
import _modDef5310 from "module_5310" /* 5310 */;
import _modDef5311 from "module_5311" /* 5311 */;
import _modDef5312 from "module_5312" /* 5312 */;
import _modDef5313 from "module_5313" /* 5313 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5301.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5302;
        const findTiffOffsetsResult = _modDef5302.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5298.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef5302;
    }
    if (_modDef5301.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5298.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef5301.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5298.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5301.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef5306;
        const findHeicOffsetsResult = _modDef5306.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5298.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef5306;
    }
    if (_modDef5301.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5310;
        const findAvifOffsetsResult = _modDef5310.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5298.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef5310;
    }
    if (_modDef5301.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5311;
        const findOffsetsResult = _modDef5311.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5298.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef5311;
    }
    if (_modDef5301.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5312;
        const findOffsetsResult1 = _modDef5312.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5298.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef5312;
    }
    if (_modDef5301.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5313;
        const findOffsetsResult2 = _modDef5313.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5298.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef5313;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};