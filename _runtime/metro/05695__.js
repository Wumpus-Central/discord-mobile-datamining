// === Module 5695: ? ===

// Module 5695
import _mod5693 from "module_5693" /* 5693 */;
import _modDef5696 from "module_5696" /* 5696 */;
import _modDef5697 from "module_5697" /* 5697 */;
import sumDefault from "sum" /* 5699 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 5700 */;
import _modDef5701 from "module_5701" /* 5701 */;
import _modDef5705 from "module_5705" /* 5705 */;
import _modDef5706 from "module_5706" /* 5706 */;
import _modDef5707 from "module_5707" /* 5707 */;
import _modDef5708 from "module_5708" /* 5708 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5696.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5697;
        const findTiffOffsetsResult = _modDef5697.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5693.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef5697;
    }
    if (_modDef5696.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5693.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef5696.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5693.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5696.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef5701;
        const findHeicOffsetsResult = _modDef5701.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5693.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef5701;
    }
    if (_modDef5696.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5705;
        const findAvifOffsetsResult = _modDef5705.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5693.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef5705;
    }
    if (_modDef5696.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5706;
        const findOffsetsResult = _modDef5706.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5693.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef5706;
    }
    if (_modDef5696.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5707;
        const findOffsetsResult1 = _modDef5707.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5693.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef5707;
    }
    if (_modDef5696.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5708;
        const findOffsetsResult2 = _modDef5708.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5693.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef5708;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};