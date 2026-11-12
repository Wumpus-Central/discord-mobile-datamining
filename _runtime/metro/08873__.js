// _runtime/metro/08873__.js
import _mod8871 from "08871__.js";
import _modDef8874 from "08874__.js";
import _modDef8875 from "08875__.js";
import sumDefault from "../08877_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../08878_PNG_CHUNK_TYPE_SIZE.js";
import _modDef8879 from "08879__.js";
import _modDef8883 from "08883__.js";
import _modDef8884 from "08884__.js";
import _modDef8885 from "08885__.js";
import _modDef8886 from "08886__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8874.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8875;
        const findTiffOffsetsResult = _modDef8875.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8871.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8875;
    }
    if (_modDef8874.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8871.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8874.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8871.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8874.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8879;
        const findHeicOffsetsResult = _modDef8879.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8871.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8879;
    }
    if (_modDef8874.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8883;
        const findAvifOffsetsResult = _modDef8883.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8871.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8883;
    }
    if (_modDef8874.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8884;
        const findOffsetsResult = _modDef8884.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8871.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8884;
    }
    if (_modDef8874.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8885;
        const findOffsetsResult1 = _modDef8885.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8871.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8885;
    }
    if (_modDef8874.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8886;
        const findOffsetsResult2 = _modDef8886.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8871.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8886;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
