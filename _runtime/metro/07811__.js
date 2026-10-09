// _runtime/metro/07811__.js
import _mod7809 from "07809__.js";
import _modDef7812 from "07812__.js";
import _modDef7813 from "07813__.js";
import sumDefault from "../07815_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../07816_PNG_CHUNK_TYPE_SIZE.js";
import _modDef7817 from "07817__.js";
import _modDef7821 from "07821__.js";
import _modDef7822 from "07822__.js";
import _modDef7823 from "07823__.js";
import _modDef7824 from "07824__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef7812.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef7813;
        const findTiffOffsetsResult = _modDef7813.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod7809.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef7813;
    }
    if (_modDef7812.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod7809.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef7812.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod7809.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef7812.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef7817;
        const findHeicOffsetsResult = _modDef7817.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod7809.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef7817;
    }
    if (_modDef7812.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef7821;
        const findAvifOffsetsResult = _modDef7821.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod7809.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef7821;
    }
    if (_modDef7812.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef7822;
        const findOffsetsResult = _modDef7822.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod7809.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef7822;
    }
    if (_modDef7812.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef7823;
        const findOffsetsResult1 = _modDef7823.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod7809.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef7823;
    }
    if (_modDef7812.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef7824;
        const findOffsetsResult2 = _modDef7824.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod7809.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef7824;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
