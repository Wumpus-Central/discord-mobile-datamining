// === Module 5215: ? ===

// Module 5215
import _mod5213 from "module_5213" /* 5213 */;
import _modDef5216 from "module_5216" /* 5216 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5216.USE_TIFF) {
      let tmpResult = tmp(5217);
      if (tmpResult.isTiffFile(byteLength)) {
        tmpResult = tmp(5217);
        const findTiffOffsetsResult = tmpResult.findTiffOffsets();
        let obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5213.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef5216.USE_JPEG) {
      if (tmpResult1.isJpegFile(byteLength)) {
        const tmpResult2 = tmp(5219);
        const findJpegOffsetsResult = tmp(5219).findJpegOffsets(byteLength);
        obj = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5213.objectAssign({}, findJpegOffsetsResult, obj);
      }
      tmpResult1 = tmp(5219);
    }
    if (_modDef5216.USE_PNG) {
      if (tmpResult3.isPngFile(byteLength)) {
        const tmpResult4 = tmp(5220);
        const findPngOffsetsResult = tmp(5220).findPngOffsets(byteLength, flag2);
        const obj1 = { fileType: { value: "png", description: "PNG" } };
        return _mod5213.objectAssign({}, findPngOffsetsResult, obj1);
      }
      tmpResult3 = tmp(5220);
    }
    if (_modDef5216.USE_HEIC) {
      if (tmpResult5.isHeicFile(byteLength)) {
        const tmpResult6 = tmp(5221);
        const findHeicOffsetsResult = tmp(5221).findHeicOffsets(byteLength);
        const obj2 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5213.objectAssign({}, findHeicOffsetsResult, obj2);
      }
      tmpResult5 = tmp(5221);
    }
    if (_modDef5216.USE_AVIF) {
      if (tmpResult7.isAvifFile(byteLength)) {
        const tmpResult8 = tmp(5225);
        const findAvifOffsetsResult = tmp(5225).findAvifOffsets(byteLength);
        const obj3 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5213.objectAssign({}, findAvifOffsetsResult, obj3);
      }
      tmpResult7 = tmp(5225);
    }
    if (_modDef5216.USE_WEBP) {
      if (tmpResult9.isWebpFile(byteLength)) {
        const tmpResult10 = tmp(5226);
        const findOffsetsResult = tmp(5226).findOffsets(byteLength);
        const obj4 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5213.objectAssign({}, findOffsetsResult, obj4);
      }
      tmpResult9 = tmp(5226);
    }
    if (_modDef5216.USE_GIF) {
      if (tmpResult11.isGifFile(byteLength)) {
        const tmpResult12 = tmp(5227);
        const findOffsetsResult1 = tmp(5227).findOffsets(byteLength);
        const obj5 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5213.objectAssign({}, findOffsetsResult1, obj5);
      }
      tmpResult11 = tmp(5227);
    }
    if (_modDef5216.USE_XMP) {
      if (tmpResult13.isXMLFile(byteLength)) {
        const tmpResult14 = tmp(5228);
        const findOffsetsResult2 = tmp(5228).findOffsets(byteLength);
        const obj6 = { fileType: { value: "xml", description: "XML" } };
        return _mod5213.objectAssign({}, findOffsetsResult2, obj6);
      }
      tmpResult13 = tmp(5228);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};