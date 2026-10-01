// === Module 5714: ? ===

// Module 5714
import _mod5712 from "module_5712" /* 5712 */;
import _modDef5715 from "module_5715" /* 5715 */;
import _modDef5716 from "module_5716" /* 5716 */;
import sumDefault from "sum" /* 5718 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 5719 */;
import _modDef5720 from "module_5720" /* 5720 */;
import _modDef5724 from "module_5724" /* 5724 */;
import _modDef5725 from "module_5725" /* 5725 */;
import _modDef5726 from "module_5726" /* 5726 */;
import _modDef5727 from "module_5727" /* 5727 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5715.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5716;
        const findTiffOffsetsResult = _modDef5716.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5712.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef5716;
    }
    if (_modDef5715.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5712.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef5715.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5712.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5715.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef5720;
        const findHeicOffsetsResult = _modDef5720.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5712.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef5720;
    }
    if (_modDef5715.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5724;
        const findAvifOffsetsResult = _modDef5724.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5712.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef5724;
    }
    if (_modDef5715.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5725;
        const findOffsetsResult = _modDef5725.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5712.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef5725;
    }
    if (_modDef5715.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5726;
        const findOffsetsResult1 = _modDef5726.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5712.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef5726;
    }
    if (_modDef5715.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5727;
        const findOffsetsResult2 = _modDef5727.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5712.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef5727;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};