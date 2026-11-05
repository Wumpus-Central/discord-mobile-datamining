// === Module 8426: ? ===

// Module 8426
import _mod8424 from "module_8424" /* 8424 */;
import _modDef8427 from "module_8427" /* 8427 */;
import _modDef8428 from "module_8428" /* 8428 */;
import sumDefault from "sum" /* 8430 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8431 */;
import _modDef8432 from "module_8432" /* 8432 */;
import _modDef8436 from "module_8436" /* 8436 */;
import _modDef8437 from "module_8437" /* 8437 */;
import _modDef8438 from "module_8438" /* 8438 */;
import _modDef8439 from "module_8439" /* 8439 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8427.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8428;
        const findTiffOffsetsResult = _modDef8428.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8424.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8428;
    }
    if (_modDef8427.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8424.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8427.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8424.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8427.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8432;
        const findHeicOffsetsResult = _modDef8432.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8424.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8432;
    }
    if (_modDef8427.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8436;
        const findAvifOffsetsResult = _modDef8436.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8424.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8436;
    }
    if (_modDef8427.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8437;
        const findOffsetsResult = _modDef8437.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8424.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8437;
    }
    if (_modDef8427.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8438;
        const findOffsetsResult1 = _modDef8438.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8424.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8438;
    }
    if (_modDef8427.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8439;
        const findOffsetsResult2 = _modDef8439.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8424.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8439;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};