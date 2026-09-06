// === Module 5215: ? ===

// Module 5215
import _mod5213 from "module_5213" /* 5213 */;
import _modDef5216 from "module_5216" /* 5216 */;
import _modDef5217 from "module_5217" /* 5217 */;
import sumDefault from "sum" /* 5219 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 5220 */;
import _modDef5221 from "module_5221" /* 5221 */;
import _modDef5225 from "module_5225" /* 5225 */;
import _modDef5226 from "module_5226" /* 5226 */;
import _modDef5227 from "module_5227" /* 5227 */;
import _modDef5228 from "module_5228" /* 5228 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5216.USE_TIFF) {
      let tmpResult = _modDef5217;
      if (tmpResult.isTiffFile(byteLength)) {
        tmpResult = _modDef5217;
        const findTiffOffsetsResult = tmpResult.findTiffOffsets();
        let obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5213.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef5216.USE_JPEG) {
      if (tmpResult1.isJpegFile(byteLength)) {
        const tmpResult2 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        obj = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5213.objectAssign({}, findJpegOffsetsResult, obj);
      }
      tmpResult1 = sumDefault;
    }
    if (_modDef5216.USE_PNG) {
      if (tmpResult3.isPngFile(byteLength)) {
        const tmpResult4 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj1 = { fileType: { value: "png", description: "PNG" } };
        return _mod5213.objectAssign({}, findPngOffsetsResult, obj1);
      }
      tmpResult3 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5216.USE_HEIC) {
      if (tmpResult5.isHeicFile(byteLength)) {
        const tmpResult6 = _modDef5221;
        const findHeicOffsetsResult = _modDef5221.findHeicOffsets(byteLength);
        const obj2 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5213.objectAssign({}, findHeicOffsetsResult, obj2);
      }
      tmpResult5 = _modDef5221;
    }
    if (_modDef5216.USE_AVIF) {
      if (tmpResult7.isAvifFile(byteLength)) {
        const tmpResult8 = _modDef5225;
        const findAvifOffsetsResult = _modDef5225.findAvifOffsets(byteLength);
        const obj3 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5213.objectAssign({}, findAvifOffsetsResult, obj3);
      }
      tmpResult7 = _modDef5225;
    }
    if (_modDef5216.USE_WEBP) {
      if (tmpResult9.isWebpFile(byteLength)) {
        const tmpResult10 = _modDef5226;
        const findOffsetsResult = _modDef5226.findOffsets(byteLength);
        const obj4 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5213.objectAssign({}, findOffsetsResult, obj4);
      }
      tmpResult9 = _modDef5226;
    }
    if (_modDef5216.USE_GIF) {
      if (tmpResult11.isGifFile(byteLength)) {
        const tmpResult12 = _modDef5227;
        const findOffsetsResult1 = _modDef5227.findOffsets(byteLength);
        const obj5 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5213.objectAssign({}, findOffsetsResult1, obj5);
      }
      tmpResult11 = _modDef5227;
    }
    if (_modDef5216.USE_XMP) {
      if (tmpResult13.isXMLFile(byteLength)) {
        const tmpResult14 = _modDef5228;
        const findOffsetsResult2 = _modDef5228.findOffsets(byteLength);
        const obj6 = { fileType: { value: "xml", description: "XML" } };
        return _mod5213.objectAssign({}, findOffsetsResult2, obj6);
      }
      tmpResult13 = _modDef5228;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};