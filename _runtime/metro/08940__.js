// === Module 8940: ? ===

// Module 8940
import _mod8938 from "module_8938" /* 8938 */;
import _modDef8941 from "module_8941" /* 8941 */;
import _modDef8942 from "module_8942" /* 8942 */;
import sumDefault from "sum" /* 8944 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8945 */;
import _modDef8946 from "module_8946" /* 8946 */;
import _modDef8950 from "module_8950" /* 8950 */;
import _modDef8951 from "module_8951" /* 8951 */;
import _modDef8952 from "module_8952" /* 8952 */;
import _modDef8953 from "module_8953" /* 8953 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8941.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8942;
        const findTiffOffsetsResult = _modDef8942.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8938.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8942;
    }
    if (_modDef8941.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8938.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8941.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8938.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8941.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8946;
        const findHeicOffsetsResult = _modDef8946.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8938.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8946;
    }
    if (_modDef8941.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8950;
        const findAvifOffsetsResult = _modDef8950.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8938.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8950;
    }
    if (_modDef8941.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8951;
        const findOffsetsResult = _modDef8951.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8938.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8951;
    }
    if (_modDef8941.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8952;
        const findOffsetsResult1 = _modDef8952.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8938.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8952;
    }
    if (_modDef8941.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8953;
        const findOffsetsResult2 = _modDef8953.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8938.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8953;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};