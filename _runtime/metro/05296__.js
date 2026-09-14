// _runtime/metro/05296__.js
import _mod5294 from "05294__.js";
import _modDef5297 from "05297__.js";
import _modDef5298 from "05298__.js";
import sumDefault from "../05300_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../05301_PNG_CHUNK_TYPE_SIZE.js";
import _modDef5302 from "05302__.js";
import _modDef5306 from "05306__.js";
import _modDef5307 from "05307__.js";
import _modDef5308 from "05308__.js";
import _modDef5309 from "05309__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5297.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5298;
        const findTiffOffsetsResult = _modDef5298.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5294.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef5298;
    }
    if (_modDef5297.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5294.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef5297.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5294.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5297.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef5302;
        const findHeicOffsetsResult = _modDef5302.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5294.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef5302;
    }
    if (_modDef5297.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5306;
        const findAvifOffsetsResult = _modDef5306.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5294.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef5306;
    }
    if (_modDef5297.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5307;
        const findOffsetsResult = _modDef5307.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5294.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef5307;
    }
    if (_modDef5297.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5308;
        const findOffsetsResult1 = _modDef5308.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5294.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef5308;
    }
    if (_modDef5297.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5309;
        const findOffsetsResult2 = _modDef5309.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5294.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef5309;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
