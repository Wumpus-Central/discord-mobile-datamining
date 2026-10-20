// _runtime/metro/08164__.js
import _mod8162 from "08162__.js";
import _modDef8165 from "08165__.js";
import _modDef8166 from "08166__.js";
import sumDefault from "../08168_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../08169_PNG_CHUNK_TYPE_SIZE.js";
import _modDef8170 from "08170__.js";
import _modDef8174 from "08174__.js";
import _modDef8175 from "08175__.js";
import _modDef8176 from "08176__.js";
import _modDef8177 from "08177__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8165.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8166;
        const findTiffOffsetsResult = _modDef8166.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8162.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8166;
    }
    if (_modDef8165.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8162.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8165.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8162.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8165.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8170;
        const findHeicOffsetsResult = _modDef8170.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8162.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8170;
    }
    if (_modDef8165.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8174;
        const findAvifOffsetsResult = _modDef8174.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8162.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8174;
    }
    if (_modDef8165.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8175;
        const findOffsetsResult = _modDef8175.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8162.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8175;
    }
    if (_modDef8165.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8176;
        const findOffsetsResult1 = _modDef8176.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8162.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8176;
    }
    if (_modDef8165.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8177;
        const findOffsetsResult2 = _modDef8177.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8162.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8177;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
