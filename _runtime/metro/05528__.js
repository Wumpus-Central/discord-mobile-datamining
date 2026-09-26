// _runtime/metro/05528__.js
import _mod5526 from "05526__.js";
import _modDef5529 from "05529__.js";
import _modDef5530 from "05530__.js";
import sumDefault from "../05532_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../05533_PNG_CHUNK_TYPE_SIZE.js";
import _modDef5534 from "05534__.js";
import _modDef5538 from "05538__.js";
import _modDef5539 from "05539__.js";
import _modDef5540 from "05540__.js";
import _modDef5541 from "05541__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5529.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5530;
        const findTiffOffsetsResult = _modDef5530.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5526.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef5530;
    }
    if (_modDef5529.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5526.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef5529.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5526.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5529.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef5534;
        const findHeicOffsetsResult = _modDef5534.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5526.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef5534;
    }
    if (_modDef5529.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5538;
        const findAvifOffsetsResult = _modDef5538.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5526.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef5538;
    }
    if (_modDef5529.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5539;
        const findOffsetsResult = _modDef5539.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5526.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef5539;
    }
    if (_modDef5529.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5540;
        const findOffsetsResult1 = _modDef5540.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5526.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef5540;
    }
    if (_modDef5529.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5541;
        const findOffsetsResult2 = _modDef5541.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5526.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef5541;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
