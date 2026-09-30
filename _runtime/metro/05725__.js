// === Module 5725: ? ===

// Module 5725
import _mod5723 from "module_5723" /* 5723 */;
import _modDef5726 from "module_5726" /* 5726 */;
import _modDef5727 from "module_5727" /* 5727 */;
import sumDefault from "sum" /* 5729 */;
import PNG_CHUNK_TYPE_SIZEDefault from "PNG_CHUNK_TYPE_SIZE" /* 5730 */;
import _modDef5731 from "module_5731" /* 5731 */;
import _modDef5735 from "module_5735" /* 5735 */;
import _modDef5736 from "module_5736" /* 5736 */;
import _modDef5737 from "module_5737" /* 5737 */;
import _modDef5738 from "module_5738" /* 5738 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  parseAppMarkers(byteLength, flag2) {
    if (_modDef5726.USE_TIFF) {
      if (tmpResult.isTiffFile(byteLength)) {
        const tmpResult16 = _modDef5727;
        const findTiffOffsetsResult = _modDef5727.findTiffOffsets();
        const obj = { fileType: { value: "tiff", description: "TIFF" } };
        return _mod5723.objectAssign({}, findTiffOffsetsResult, obj);
      }
      tmpResult = _modDef5727;
    }
    if (_modDef5726.USE_JPEG) {
      if (tmpResult17.isJpegFile(byteLength)) {
        const tmpResult18 = sumDefault;
        const findJpegOffsetsResult = sumDefault.findJpegOffsets(byteLength);
        const obj2 = { fileType: { value: "jpeg", description: "JPEG" } };
        return _mod5723.objectAssign({}, findJpegOffsetsResult, obj2);
      }
      tmpResult17 = sumDefault;
    }
    if (_modDef5726.USE_PNG) {
      if (tmpResult19.isPngFile(byteLength)) {
        const tmpResult20 = PNG_CHUNK_TYPE_SIZEDefault;
        const findPngOffsetsResult = PNG_CHUNK_TYPE_SIZEDefault.findPngOffsets(byteLength, flag2);
        const obj3 = { fileType: { value: "png", description: "PNG" } };
        return _mod5723.objectAssign({}, findPngOffsetsResult, obj3);
      }
      tmpResult19 = PNG_CHUNK_TYPE_SIZEDefault;
    }
    if (_modDef5726.USE_HEIC) {
      if (tmpResult21.isHeicFile(byteLength)) {
        const tmpResult22 = _modDef5731;
        const findHeicOffsetsResult = _modDef5731.findHeicOffsets(byteLength);
        const obj4 = { fileType: { value: "heic", description: "HEIC" } };
        return _mod5723.objectAssign({}, findHeicOffsetsResult, obj4);
      }
      tmpResult21 = _modDef5731;
    }
    if (_modDef5726.USE_AVIF) {
      if (tmpResult23.isAvifFile(byteLength)) {
        const tmpResult24 = _modDef5735;
        const findAvifOffsetsResult = _modDef5735.findAvifOffsets(byteLength);
        const obj5 = { fileType: { value: "avif", description: "AVIF" } };
        return _mod5723.objectAssign({}, findAvifOffsetsResult, obj5);
      }
      tmpResult23 = _modDef5735;
    }
    if (_modDef5726.USE_WEBP) {
      if (tmpResult25.isWebpFile(byteLength)) {
        const tmpResult26 = _modDef5736;
        const findOffsetsResult = _modDef5736.findOffsets(byteLength);
        const obj6 = { fileType: { value: "webp", description: "WebP" } };
        return _mod5723.objectAssign({}, findOffsetsResult, obj6);
      }
      tmpResult25 = _modDef5736;
    }
    if (_modDef5726.USE_GIF) {
      if (tmpResult27.isGifFile(byteLength)) {
        const tmpResult28 = _modDef5737;
        const findOffsetsResult1 = _modDef5737.findOffsets(byteLength);
        const obj7 = { fileType: { value: "gif", description: "GIF" } };
        return _mod5723.objectAssign({}, findOffsetsResult1, obj7);
      }
      tmpResult27 = _modDef5737;
    }
    if (_modDef5726.USE_XMP) {
      if (tmpResult29.isXMLFile(byteLength)) {
        const tmpResult30 = _modDef5738;
        const findOffsetsResult2 = _modDef5738.findOffsets(byteLength);
        const obj8 = { fileType: { value: "xml", description: "XML" } };
        return _mod5723.objectAssign({}, findOffsetsResult2, obj8);
      }
      tmpResult29 = _modDef5738;
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};