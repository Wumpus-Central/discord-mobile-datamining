// _runtime/metro/08051__.js
import _mod8049 from "08049__.js";
import _modDef8052 from "08052__.js";
import _modDef8053 from "08053__.js";
import sumDefault from "../08055_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../08056_PNG_CHUNK_TYPE_SIZE.js";
import _modDef8057 from "08057__.js";
import _modDef8061 from "08061__.js";
import _modDef8062 from "08062__.js";
import _modDef8063 from "08063__.js";
import _modDef8064 from "08064__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8052.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8053;
        const findTiffOffsetsResult = _modDef8053.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8049.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8053;
    }
    if (_modDef8052.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8049.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8052.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8049.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8052.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8057;
        const findHeicOffsetsResult = _modDef8057.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8049.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8057;
    }
    if (_modDef8052.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8061;
        const findAvifOffsetsResult = _modDef8061.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8049.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8061;
    }
    if (_modDef8052.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8062;
        const findOffsetsResult = _modDef8062.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8049.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8062;
    }
    if (_modDef8052.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8063;
        const findOffsetsResult1 = _modDef8063.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8049.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8063;
    }
    if (_modDef8052.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8064;
        const findOffsetsResult2 = _modDef8064.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8049.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8064;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
