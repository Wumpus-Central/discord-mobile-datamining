// _runtime/metro/08421__.js
import _mod8419 from "08419__.js";
import _modDef8422 from "08422__.js";
import _modDef8423 from "08423__.js";
import sumDefault from "../08425_sum.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../08426_PNG_CHUNK_TYPE_SIZE.js";
import _modDef8427 from "08427__.js";
import _modDef8431 from "08431__.js";
import _modDef8432 from "08432__.js";
import _modDef8433 from "08433__.js";
import _modDef8434 from "08434__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef8422.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef8423;
        const findTiffOffsetsResult = _modDef8423.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod8419.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef8423;
    }
    if (_modDef8422.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod8419.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef8422.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod8419.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef8422.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef8427;
        const findHeicOffsetsResult = _modDef8427.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod8419.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef8427;
    }
    if (_modDef8422.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef8431;
        const findAvifOffsetsResult = _modDef8431.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod8419.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef8431;
    }
    if (_modDef8422.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef8432;
        const findOffsetsResult = _modDef8432.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod8419.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef8432;
    }
    if (_modDef8422.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef8433;
        const findOffsetsResult1 = _modDef8433.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod8419.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef8433;
    }
    if (_modDef8422.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef8434;
        const findOffsetsResult2 = _modDef8434.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod8419.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef8434;
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
