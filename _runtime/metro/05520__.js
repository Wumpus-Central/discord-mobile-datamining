// _runtime/metro/05520__.js
import _mod5518 from "05518__.js";
import _modDef5521 from "05521__.js";
import _modDef5522 from "05522__.js";
import sumDefault from "../05524_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../05525_PNG_CHUNK_TYPE_SIZE.js";
import _modDef5526 from "05526__.js";
import _modDef5530 from "05530__.js";
import _modDef5531 from "05531__.js";
import _modDef5532 from "05532__.js";
import _modDef5533 from "05533__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5521.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5522;
        const findTiffOffsetsResult = _modDef5522.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5518.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef5522;
    }
    if (_modDef5521.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5518.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef5521.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5518.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5521.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef5526;
        const findHeicOffsetsResult = _modDef5526.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5518.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef5526;
    }
    if (_modDef5521.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5530;
        const findAvifOffsetsResult = _modDef5530.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5518.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef5530;
    }
    if (_modDef5521.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5531;
        const findOffsetsResult = _modDef5531.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5518.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef5531;
    }
    if (_modDef5521.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5532;
        const findOffsetsResult1 = _modDef5532.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5518.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef5532;
    }
    if (_modDef5521.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5533;
        const findOffsetsResult2 = _modDef5533.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5518.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef5533;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
