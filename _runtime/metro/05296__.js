// === Module 5296: ? ===

// Module 5296
import _mod5294 from "module_5294" /* 5294 */;
import _modDef5297 from "module_5297" /* 5297 */;
import _modDef5298 from "module_5298" /* 5298 */;
import sumDefault from "sum" /* 5300 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 5301 */;
import _modDef5302 from "module_5302" /* 5302 */;
import _modDef5306 from "module_5306" /* 5306 */;
import _modDef5307 from "module_5307" /* 5307 */;
import _modDef5308 from "module_5308" /* 5308 */;
import _modDef5309 from "module_5309" /* 5309 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5297.USE_TIFF) {
      let tmpResult = _modDef5298;
      if (tmpResult.isTiffFile(byteLength)) {
        tmpResult = _modDef5298;
        const findTiffOffsetsResult = tmpResult.findTiffOffsets();
        let obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5294.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef5297.USE_JPEG) {
      if (tmpResult1.isJpegFile(byteLength)) {
        const tmpResult2 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        obj = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5294.objectAssign({}, findJpegOffsetsResult, obj);
      }
      tmpResult1 = sumDefault;
    }
    if (_modDef5297.USE_PNG) {
      if (tmpResult3.isPngFile(byteLength)) {
        const tmpResult4 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj1 = { fileType: { value: "png", description: "PNG" } };
        return _mod5294.objectAssign({}, findPngOffsetsResult, obj1);
      }
      tmpResult3 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5297.USE_HEIC) {
      if (tmpResult5.isHeicFile(byteLength)) {
        const tmpResult6 = _modDef5302;
        const findHeicOffsetsResult = _modDef5302.findHeicOffsets(byteLength);
        const obj2 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5294.objectAssign({}, findHeicOffsetsResult, obj2);
      }
      tmpResult5 = _modDef5302;
    }
    if (_modDef5297.USE_AVIF) {
      if (tmpResult7.isAvifFile(byteLength)) {
        const tmpResult8 = _modDef5306;
        const findAvifOffsetsResult = _modDef5306.findAvifOffsets(byteLength);
        const obj3 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5294.objectAssign({}, findAvifOffsetsResult, obj3);
      }
      tmpResult7 = _modDef5306;
    }
    if (_modDef5297.USE_WEBP) {
      if (tmpResult9.isWebpFile(byteLength)) {
        const tmpResult10 = _modDef5307;
        const findOffsetsResult = _modDef5307.findOffsets(byteLength);
        const obj4 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5294.objectAssign({}, findOffsetsResult, obj4);
      }
      tmpResult9 = _modDef5307;
    }
    if (_modDef5297.USE_GIF) {
      if (tmpResult11.isGifFile(byteLength)) {
        const tmpResult12 = _modDef5308;
        const findOffsetsResult1 = _modDef5308.findOffsets(byteLength);
        const obj5 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5294.objectAssign({}, findOffsetsResult1, obj5);
      }
      tmpResult11 = _modDef5308;
    }
    if (_modDef5297.USE_XMP) {
      if (tmpResult13.isXMLFile(byteLength)) {
        const tmpResult14 = _modDef5309;
        const findOffsetsResult2 = _modDef5309.findOffsets(byteLength);
        const obj6 = { fileType: { value: "xml", description: "XML" } };
        return _mod5294.objectAssign({}, findOffsetsResult2, obj6);
      }
      tmpResult13 = _modDef5309;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};