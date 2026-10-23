// === Module 8202: ? ===

// Module 8202
import _mod8200 from "module_8200" /* 8200 */;
import _modDef8203 from "module_8203" /* 8203 */;
import _modDef8204 from "module_8204" /* 8204 */;
import sumDefault from "sum" /* 8206 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8207 */;
import _modDef8208 from "module_8208" /* 8208 */;
import _modDef8212 from "module_8212" /* 8212 */;
import _modDef8213 from "module_8213" /* 8213 */;
import _modDef8214 from "module_8214" /* 8214 */;
import _modDef8215 from "module_8215" /* 8215 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8203.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8204;
        const findTiffOffsetsResult = _modDef8204.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8200.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8204;
    }
    if (_modDef8203.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8200.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8203.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8200.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8203.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8208;
        const findHeicOffsetsResult = _modDef8208.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8200.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8208;
    }
    if (_modDef8203.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8212;
        const findAvifOffsetsResult = _modDef8212.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8200.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8212;
    }
    if (_modDef8203.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8213;
        const findOffsetsResult = _modDef8213.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8200.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8213;
    }
    if (_modDef8203.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8214;
        const findOffsetsResult1 = _modDef8214.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8200.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8214;
    }
    if (_modDef8203.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8215;
        const findOffsetsResult2 = _modDef8215.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8200.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8215;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};