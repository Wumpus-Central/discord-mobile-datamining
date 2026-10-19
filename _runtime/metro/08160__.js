// === Module 8160: ? ===

// Module 8160
import _mod8158 from "module_8158" /* 8158 */;
import _modDef8161 from "module_8161" /* 8161 */;
import _modDef8162 from "module_8162" /* 8162 */;
import sumDefault from "sum" /* 8164 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8165 */;
import _modDef8166 from "module_8166" /* 8166 */;
import _modDef8170 from "module_8170" /* 8170 */;
import _modDef8171 from "module_8171" /* 8171 */;
import _modDef8172 from "module_8172" /* 8172 */;
import _modDef8173 from "module_8173" /* 8173 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8161.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8162;
        const findTiffOffsetsResult = _modDef8162.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8158.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8162;
    }
    if (_modDef8161.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8158.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8161.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8158.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8161.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8166;
        const findHeicOffsetsResult = _modDef8166.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8158.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8166;
    }
    if (_modDef8161.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8170;
        const findAvifOffsetsResult = _modDef8170.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8158.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8170;
    }
    if (_modDef8161.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8171;
        const findOffsetsResult = _modDef8171.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8158.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8171;
    }
    if (_modDef8161.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8172;
        const findOffsetsResult1 = _modDef8172.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8158.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8172;
    }
    if (_modDef8161.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8173;
        const findOffsetsResult2 = _modDef8173.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8158.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8173;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};