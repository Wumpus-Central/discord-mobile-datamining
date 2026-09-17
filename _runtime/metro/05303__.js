// _runtime/metro/05303__.js
import _mod5301 from "05301__.js";
import _modDef5304 from "05304__.js";
import _modDef5305 from "05305__.js";
import sumDefault from "../05307_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../05308_PNG_CHUNK_TYPE_SIZE.js";
import _modDef5309 from "05309__.js";
import _modDef5313 from "05313__.js";
import _modDef5314 from "05314__.js";
import _modDef5315 from "05315__.js";
import _modDef5316 from "05316__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5304.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5305;
        const findTiffOffsetsResult = _modDef5305.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5301.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef5305;
    }
    if (_modDef5304.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5301.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef5304.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5301.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5304.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef5309;
        const findHeicOffsetsResult = _modDef5309.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5301.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef5309;
    }
    if (_modDef5304.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5313;
        const findAvifOffsetsResult = _modDef5313.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5301.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef5313;
    }
    if (_modDef5304.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5314;
        const findOffsetsResult = _modDef5314.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5301.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef5314;
    }
    if (_modDef5304.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5315;
        const findOffsetsResult1 = _modDef5315.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5301.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef5315;
    }
    if (_modDef5304.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5316;
        const findOffsetsResult2 = _modDef5316.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5301.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef5316;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
