// _runtime/metro/08248__.js
import _mod8246 from "08246__.js";
import _modDef8249 from "08249__.js";
import _modDef8250 from "08250__.js";
import sumDefault from "../08252_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../08253_PNG_CHUNK_TYPE_SIZE.js";
import _modDef8254 from "08254__.js";
import _modDef8258 from "08258__.js";
import _modDef8259 from "08259__.js";
import _modDef8260 from "08260__.js";
import _modDef8261 from "08261__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8249.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8250;
        const findTiffOffsetsResult = _modDef8250.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8246.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8250;
    }
    if (_modDef8249.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8246.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8249.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8246.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8249.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8254;
        const findHeicOffsetsResult = _modDef8254.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8246.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8254;
    }
    if (_modDef8249.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8258;
        const findAvifOffsetsResult = _modDef8258.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8246.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8258;
    }
    if (_modDef8249.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8259;
        const findOffsetsResult = _modDef8259.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8246.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8259;
    }
    if (_modDef8249.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8260;
        const findOffsetsResult1 = _modDef8260.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8246.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8260;
    }
    if (_modDef8249.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8261;
        const findOffsetsResult2 = _modDef8261.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8246.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8261;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
