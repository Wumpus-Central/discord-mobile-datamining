// === Module 8951: ? ===

// Module 8951
import _mod8949 from "module_8949" /* 8949 */;
import _modDef8952 from "module_8952" /* 8952 */;
import _modDef8953 from "module_8953" /* 8953 */;
import sumDefault from "sum" /* 8955 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 8956 */;
import _modDef8957 from "module_8957" /* 8957 */;
import _modDef8961 from "module_8961" /* 8961 */;
import _modDef8962 from "module_8962" /* 8962 */;
import _modDef8963 from "module_8963" /* 8963 */;
import _modDef8964 from "module_8964" /* 8964 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8952.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8953;
        const findTiffOffsetsResult = _modDef8953.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8949.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8953;
    }
    if (_modDef8952.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8949.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8952.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8949.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8952.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8957;
        const findHeicOffsetsResult = _modDef8957.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8949.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8957;
    }
    if (_modDef8952.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8961;
        const findAvifOffsetsResult = _modDef8961.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8949.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8961;
    }
    if (_modDef8952.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8962;
        const findOffsetsResult = _modDef8962.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8949.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8962;
    }
    if (_modDef8952.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8963;
        const findOffsetsResult1 = _modDef8963.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8949.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8963;
    }
    if (_modDef8952.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8964;
        const findOffsetsResult2 = _modDef8964.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8949.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8964;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};