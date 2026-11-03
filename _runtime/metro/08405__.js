// _runtime/metro/08405__.js
import _mod8403 from "08403__.js";
import _modDef8406 from "08406__.js";
import _modDef8407 from "08407__.js";
import sumDefault from "../08409_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../08410_PNG_CHUNK_TYPE_SIZE.js";
import _modDef8411 from "08411__.js";
import _modDef8415 from "08415__.js";
import _modDef8416 from "08416__.js";
import _modDef8417 from "08417__.js";
import _modDef8418 from "08418__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8406.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8407;
        const findTiffOffsetsResult = _modDef8407.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8403.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8407;
    }
    if (_modDef8406.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8403.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8406.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8403.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8406.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8411;
        const findHeicOffsetsResult = _modDef8411.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8403.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8411;
    }
    if (_modDef8406.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8415;
        const findAvifOffsetsResult = _modDef8415.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8403.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8415;
    }
    if (_modDef8406.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8416;
        const findOffsetsResult = _modDef8416.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8403.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8416;
    }
    if (_modDef8406.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8417;
        const findOffsetsResult1 = _modDef8417.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8403.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8417;
    }
    if (_modDef8406.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8418;
        const findOffsetsResult2 = _modDef8418.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8403.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8418;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
