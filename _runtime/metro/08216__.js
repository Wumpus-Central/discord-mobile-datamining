// === Module 8216: ? ===

// Module 8216
import _mod8214 from "module_8214" /* 8214 */;
import _modDef8217 from "module_8217" /* 8217 */;
import _modDef8218 from "module_8218" /* 8218 */;
import sumDefault from "sum" /* 8220 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8221 */;
import _modDef8222 from "module_8222" /* 8222 */;
import _modDef8226 from "module_8226" /* 8226 */;
import _modDef8227 from "module_8227" /* 8227 */;
import _modDef8228 from "module_8228" /* 8228 */;
import _modDef8229 from "module_8229" /* 8229 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8217.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8218;
        const findTiffOffsetsResult = _modDef8218.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8214.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8218;
    }
    if (_modDef8217.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8214.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8217.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8214.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8217.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8222;
        const findHeicOffsetsResult = _modDef8222.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8214.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8222;
    }
    if (_modDef8217.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8226;
        const findAvifOffsetsResult = _modDef8226.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8214.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8226;
    }
    if (_modDef8217.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8227;
        const findOffsetsResult = _modDef8227.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8214.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8227;
    }
    if (_modDef8217.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8228;
        const findOffsetsResult1 = _modDef8228.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8214.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8228;
    }
    if (_modDef8217.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8229;
        const findOffsetsResult2 = _modDef8229.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8214.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8229;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};