// _runtime/metro/05434__.js
import _mod5432 from "05432__.js";
import _modDef5435 from "05435__.js";
import _modDef5436 from "05436__.js";
import sumDefault from "../05438_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../05439_PNG_CHUNK_TYPE_SIZE.js";
import _modDef5440 from "05440__.js";
import _modDef5444 from "05444__.js";
import _modDef5445 from "05445__.js";
import _modDef5446 from "05446__.js";
import _modDef5447 from "05447__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5435.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5436;
        const findTiffOffsetsResult = _modDef5436.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5432.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef5436;
    }
    if (_modDef5435.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5432.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef5435.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5432.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5435.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef5440;
        const findHeicOffsetsResult = _modDef5440.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5432.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef5440;
    }
    if (_modDef5435.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5444;
        const findAvifOffsetsResult = _modDef5444.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5432.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef5444;
    }
    if (_modDef5435.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5445;
        const findOffsetsResult = _modDef5445.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5432.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef5445;
    }
    if (_modDef5435.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5446;
        const findOffsetsResult1 = _modDef5446.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5432.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef5446;
    }
    if (_modDef5435.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5447;
        const findOffsetsResult2 = _modDef5447.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5432.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef5447;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
