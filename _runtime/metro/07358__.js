// _runtime/metro/07358__.js
import _mod7356 from "07356__.js";
import _modDef7359 from "07359__.js";
import _modDef7360 from "07360__.js";
import _modDef7362 from "07362__.js";
import PNG_CHUNK_TYPE_SIZEDefault from "../07363_PNG_CHUNK_TYPE_SIZE.js";
import ITEM_INFO_TYPE_EXIFDefault from "../07364_ITEM_INFO_TYPE_EXIF.js";
import _modDef7368 from "07368__.js";
import _modDef7369 from "07369__.js";
import _modDef7370 from "07370__.js";
import _modDef7371 from "07371__.js";

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef7359.USE_TIFF) {
      const tmpResult = _modDef7360;
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef7360;
        const findTiffOffsetsResult = tmpResult16.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        const obj31 = _mod7356;
        return obj31.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (_modDef7359.USE_JPEG) {
      const tmpResult17 = _modDef7362;
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = _modDef7362;
        const findJpegOffsetsResult = tmpResult18.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        const obj28 = _mod7356;
        return obj28.objectAssign({}, findJpegOffsetsResult, obj2);
      }
    }
    if (_modDef7359.USE_PNG) {
      const tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = tmpResult20.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        const obj25 = _mod7356;
        return obj25.objectAssign({}, findPngOffsetsResult, obj3);
      }
    }
    if (_modDef7359.USE_HEIC) {
      const tmpResult21 = ITEM_INFO_TYPE_EXIFDefault;
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = ITEM_INFO_TYPE_EXIFDefault;
        const findHeicOffsetsResult = tmpResult22.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        const obj22 = _mod7356;
        return obj22.objectAssign({}, findHeicOffsetsResult, obj4);
      }
    }
    if (_modDef7359.USE_AVIF) {
      const tmpResult23 = _modDef7368;
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef7368;
        const findAvifOffsetsResult = tmpResult24.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        const obj19 = _mod7356;
        return obj19.objectAssign({}, findAvifOffsetsResult, obj5);
      }
    }
    if (_modDef7359.USE_WEBP) {
      const tmpResult25 = _modDef7369;
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef7369;
        const findOffsetsResult = tmpResult26.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        const obj16 = _mod7356;
        return obj16.objectAssign({}, findOffsetsResult, obj6);
      }
    }
    if (_modDef7359.USE_GIF) {
      const tmpResult27 = _modDef7370;
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef7370;
        const findOffsetsResult1 = tmpResult28.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        const obj13 = _mod7356;
        return obj13.objectAssign({}, findOffsetsResult1, obj7);
      }
    }
    if (_modDef7359.USE_XMP) {
      const tmpResult29 = _modDef7371;
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef7371;
        const findOffsetsResult2 = tmpResult30.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        const obj10 = _mod7356;
        return obj10.objectAssign({}, findOffsetsResult2, obj8);
      }
    }
    const error = new Error("Invalid image format");
    throw error;
  },
};
