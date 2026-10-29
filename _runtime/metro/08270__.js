// _runtime/metro/08270__.js
import _mod8268 from "08268__.js";
import _modDef8271 from "08271__.js";
import _modDef8272 from "08272__.js";
import sumDefault from "../08274_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../08275_PNG_CHUNK_TYPE_SIZE.js";
import _modDef8276 from "08276__.js";
import _modDef8280 from "08280__.js";
import _modDef8281 from "08281__.js";
import _modDef8282 from "08282__.js";
import _modDef8283 from "08283__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8271.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8272;
        const findTiffOffsetsResult = _modDef8272.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8268.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8272;
    }
    if (_modDef8271.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8268.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8271.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8268.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8271.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8276;
        const findHeicOffsetsResult = _modDef8276.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8268.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8276;
    }
    if (_modDef8271.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8280;
        const findAvifOffsetsResult = _modDef8280.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8268.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8280;
    }
    if (_modDef8271.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8281;
        const findOffsetsResult = _modDef8281.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8268.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8281;
    }
    if (_modDef8271.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8282;
        const findOffsetsResult1 = _modDef8282.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8268.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8282;
    }
    if (_modDef8271.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8283;
        const findOffsetsResult2 = _modDef8283.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8268.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8283;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
