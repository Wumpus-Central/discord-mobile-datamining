// _runtime/metro/05432__.js
import _mod5430 from "05430__.js";
import _modDef5433 from "05433__.js";
import _modDef5434 from "05434__.js";
import sumDefault from "../05436_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../05437_PNG_CHUNK_TYPE_SIZE.js";
import _modDef5438 from "05438__.js";
import _modDef5442 from "05442__.js";
import _modDef5443 from "05443__.js";
import _modDef5444 from "05444__.js";
import _modDef5445 from "05445__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5433.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5434;
        const findTiffOffsetsResult = _modDef5434.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5430.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef5434;
    }
    if (_modDef5433.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5430.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef5433.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5430.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5433.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef5438;
        const findHeicOffsetsResult = _modDef5438.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5430.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef5438;
    }
    if (_modDef5433.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5442;
        const findAvifOffsetsResult = _modDef5442.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5430.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef5442;
    }
    if (_modDef5433.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5443;
        const findOffsetsResult = _modDef5443.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5430.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef5443;
    }
    if (_modDef5433.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5444;
        const findOffsetsResult1 = _modDef5444.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5430.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef5444;
    }
    if (_modDef5433.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5445;
        const findOffsetsResult2 = _modDef5445.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5430.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef5445;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
