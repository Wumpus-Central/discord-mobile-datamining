// === Module 8372: ? ===

// Module 8372
import _mod8370 from "module_8370" /* 8370 */;
import _modDef8373 from "module_8373" /* 8373 */;
import _modDef8374 from "module_8374" /* 8374 */;
import sumDefault from "sum" /* 8376 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8377 */;
import _modDef8378 from "module_8378" /* 8378 */;
import _modDef8382 from "module_8382" /* 8382 */;
import _modDef8383 from "module_8383" /* 8383 */;
import _modDef8384 from "module_8384" /* 8384 */;
import _modDef8385 from "module_8385" /* 8385 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8373.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8374;
        const findTiffOffsetsResult = _modDef8374.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8370.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8374;
    }
    if (_modDef8373.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8370.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8373.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8370.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8373.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8378;
        const findHeicOffsetsResult = _modDef8378.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8370.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8378;
    }
    if (_modDef8373.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8382;
        const findAvifOffsetsResult = _modDef8382.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8370.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8382;
    }
    if (_modDef8373.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8383;
        const findOffsetsResult = _modDef8383.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8370.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8383;
    }
    if (_modDef8373.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8384;
        const findOffsetsResult1 = _modDef8384.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8370.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8384;
    }
    if (_modDef8373.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8385;
        const findOffsetsResult2 = _modDef8385.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8370.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8385;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};