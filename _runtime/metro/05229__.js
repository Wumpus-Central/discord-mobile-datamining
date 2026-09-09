// _runtime/metro/05229__.js
import _mod5227 from "05227__.js";
import _modDef5230 from "05230__.js";
import _modDef5231 from "05231__.js";
import sumDefault from "../05233_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../05234_PNG_CHUNK_TYPE_SIZE.js";
import _modDef5235 from "05235__.js";
import _modDef5239 from "05239__.js";
import _modDef5240 from "05240__.js";
import _modDef5241 from "05241__.js";
import _modDef5242 from "05242__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5230.USE_TIFF) {
      let tmpResult = _modDef5231;
      if (tmpResult.isTiffFile(byteLength)) {
        tmpResult = _modDef5231;
        const findTiffOffsetsResult = tmpResult.findTiffOffsets();
        let obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5227.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef5230.USE_JPEG) {
      if (tmpResult1.isJpegFile(byteLength)) {
        const tmpResult2 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        obj = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5227.objectAssign({}, findJpegOffsetsResult, obj);
      }
      tmpResult1 = sumDefault;
    }
    if (_modDef5230.USE_PNG) {
      if (tmpResult3.isPngFile(byteLength)) {
        const tmpResult4 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj1 = { fileType: { value: "png", description: "PNG" } };
        return _mod5227.objectAssign({}, findPngOffsetsResult, obj1);
      }
      tmpResult3 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5230.USE_HEIC) {
      if (tmpResult5.isHeicFile(byteLength)) {
        const tmpResult6 = _modDef5235;
        const findHeicOffsetsResult = _modDef5235.findHeicOffsets(byteLength);
        const obj2 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5227.objectAssign({}, findHeicOffsetsResult, obj2);
      }
      tmpResult5 = _modDef5235;
    }
    if (_modDef5230.USE_AVIF) {
      if (tmpResult7.isAvifFile(byteLength)) {
        const tmpResult8 = _modDef5239;
        const findAvifOffsetsResult = _modDef5239.findAvifOffsets(byteLength);
        const obj3 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5227.objectAssign({}, findAvifOffsetsResult, obj3);
      }
      tmpResult7 = _modDef5239;
    }
    if (_modDef5230.USE_WEBP) {
      if (tmpResult9.isWebpFile(byteLength)) {
        const tmpResult10 = _modDef5240;
        const findOffsetsResult = _modDef5240.findOffsets(byteLength);
        const obj4 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5227.objectAssign({}, findOffsetsResult, obj4);
      }
      tmpResult9 = _modDef5240;
    }
    if (_modDef5230.USE_GIF) {
      if (tmpResult11.isGifFile(byteLength)) {
        const tmpResult12 = _modDef5241;
        const findOffsetsResult1 = _modDef5241.findOffsets(byteLength);
        const obj5 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5227.objectAssign({}, findOffsetsResult1, obj5);
      }
      tmpResult11 = _modDef5241;
    }
    if (_modDef5230.USE_XMP) {
      if (tmpResult13.isXMLFile(byteLength)) {
        const tmpResult14 = _modDef5242;
        const findOffsetsResult2 = _modDef5242.findOffsets(byteLength);
        const obj6 = { fileType: { value: "xml", description: "XML" } };
        return _mod5227.objectAssign({}, findOffsetsResult2, obj6);
      }
      tmpResult13 = _modDef5242;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
