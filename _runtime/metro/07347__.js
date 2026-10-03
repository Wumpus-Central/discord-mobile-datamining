// _runtime/metro/07347__.js
import _mod7345 from "07345__.js";
import _modDef7348 from "07348__.js";
import _modDef7349 from "07349__.js";
import sumDefault from "../07351_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../07352_PNG_CHUNK_TYPE_SIZE.js";
import _modDef7353 from "07353__.js";
import _modDef7357 from "07357__.js";
import _modDef7358 from "07358__.js";
import _modDef7359 from "07359__.js";
import _modDef7360 from "07360__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef7348.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef7349;
        const findTiffOffsetsResult = _modDef7349.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod7345.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef7349;
    }
    if (_modDef7348.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod7345.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef7348.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod7345.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef7348.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef7353;
        const findHeicOffsetsResult = _modDef7353.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod7345.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef7353;
    }
    if (_modDef7348.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef7357;
        const findAvifOffsetsResult = _modDef7357.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod7345.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef7357;
    }
    if (_modDef7348.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef7358;
        const findOffsetsResult = _modDef7358.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod7345.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef7358;
    }
    if (_modDef7348.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef7359;
        const findOffsetsResult1 = _modDef7359.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod7345.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef7359;
    }
    if (_modDef7348.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef7360;
        const findOffsetsResult2 = _modDef7360.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod7345.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef7360;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
