// _runtime/metro/08047__.js
import _mod8045 from "08045__.js";
import _modDef8048 from "08048__.js";
import _modDef8049 from "08049__.js";
import sumDefault from "../08051_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../08052_PNG_CHUNK_TYPE_SIZE.js";
import _modDef8053 from "08053__.js";
import _modDef8057 from "08057__.js";
import _modDef8058 from "08058__.js";
import _modDef8059 from "08059__.js";
import _modDef8060 from "08060__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8048.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8049;
        const findTiffOffsetsResult = _modDef8049.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8045.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8049;
    }
    if (_modDef8048.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8045.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8048.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8045.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8048.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8053;
        const findHeicOffsetsResult = _modDef8053.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8045.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8053;
    }
    if (_modDef8048.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8057;
        const findAvifOffsetsResult = _modDef8057.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8045.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8057;
    }
    if (_modDef8048.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8058;
        const findOffsetsResult = _modDef8058.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8045.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8058;
    }
    if (_modDef8048.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8059;
        const findOffsetsResult1 = _modDef8059.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8045.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8059;
    }
    if (_modDef8048.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8060;
        const findOffsetsResult2 = _modDef8060.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8045.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8060;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
