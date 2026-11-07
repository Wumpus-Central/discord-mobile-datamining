// _runtime/metro/08351__.js
import _mod8349 from "08349__.js";
import _modDef8352 from "08352__.js";
import _modDef8353 from "08353__.js";
import sumDefault from "../08355_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../08356_PNG_CHUNK_TYPE_SIZE.js";
import _modDef8357 from "08357__.js";
import _modDef8361 from "08361__.js";
import _modDef8362 from "08362__.js";
import _modDef8363 from "08363__.js";
import _modDef8364 from "08364__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8352.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8353;
        const findTiffOffsetsResult = _modDef8353.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8349.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8353;
    }
    if (_modDef8352.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8349.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8352.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8349.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8352.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8357;
        const findHeicOffsetsResult = _modDef8357.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8349.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8357;
    }
    if (_modDef8352.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8361;
        const findAvifOffsetsResult = _modDef8361.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8349.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8361;
    }
    if (_modDef8352.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8362;
        const findOffsetsResult = _modDef8362.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8349.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8362;
    }
    if (_modDef8352.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8363;
        const findOffsetsResult1 = _modDef8363.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8349.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8363;
    }
    if (_modDef8352.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8364;
        const findOffsetsResult2 = _modDef8364.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8349.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8364;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
