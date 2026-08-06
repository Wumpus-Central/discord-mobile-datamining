// _runtime/metro/04914__.js
import { getDataView } from "../04912_getDataView.js";
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  parseAppMarkers(byteLength, flag2) {
    if (module(4915).USE_TIFF) {
      let tmpResult = tmp(4916);
      if (tmpResult.isTiffFile(byteLength)) {
        tmpResult = tmp(4916);
        const findTiffOffsetsResult = tmpResult.findTiffOffsets();
        let obj = { fileType: null };
        obj[0] = { value: "tiff", description: "TIFF" };
        return getDataView.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (module(4915).USE_JPEG) {
      if (tmpResult1.isJpegFile(byteLength)) {
        const tmpResult2 = tmp(4918);
        const findJpegOffsetsResult = tmp(4918).findJpegOffsets(byteLength);
        obj = { fileType: null };
        obj[0] = { value: "jpeg", description: "JPEG" };
        return getDataView.objectAssign({}, findJpegOffsetsResult, obj);
      }
      tmpResult1 = tmp(4918);
    }
    if (module(4915).USE_PNG) {
      if (tmpResult3.isPngFile(byteLength)) {
        const tmpResult4 = tmp(4919);
        const findPngOffsetsResult = tmp(4919).findPngOffsets(byteLength, flag2);
        const obj1 = { fileType: null };
        obj1[0] = { value: "png", description: "PNG" };
        return getDataView.objectAssign({}, findPngOffsetsResult, obj1);
      }
      tmpResult3 = tmp(4919);
    }
    if (module(4915).USE_HEIC) {
      if (tmpResult5.isHeicFile(byteLength)) {
        const tmpResult6 = tmp(4920);
        const findHeicOffsetsResult = tmp(4920).findHeicOffsets(byteLength);
        const obj2 = { fileType: null };
        obj2[0] = { value: "heic", description: "HEIC" };
        return getDataView.objectAssign({}, findHeicOffsetsResult, obj2);
      }
      tmpResult5 = tmp(4920);
    }
    if (module(4915).USE_AVIF) {
      if (tmpResult7.isAvifFile(byteLength)) {
        const tmpResult8 = tmp(4924);
        const findAvifOffsetsResult = tmp(4924).findAvifOffsets(byteLength);
        const obj3 = { fileType: null };
        obj3[0] = { value: "avif", description: "AVIF" };
        return getDataView.objectAssign({}, findAvifOffsetsResult, obj3);
      }
      tmpResult7 = tmp(4924);
    }
    if (module(4915).USE_WEBP) {
      if (tmpResult9.isWebpFile(byteLength)) {
        const tmpResult10 = tmp(4925);
        const findOffsetsResult = tmp(4925).findOffsets(byteLength);
        const obj4 = { fileType: null };
        obj4[0] = { value: "webp", description: "WebP" };
        return getDataView.objectAssign({}, findOffsetsResult, obj4);
      }
      tmpResult9 = tmp(4925);
    }
    if (module(4915).USE_GIF) {
      if (tmpResult11.isGifFile(byteLength)) {
        const tmpResult12 = tmp(4926);
        const findOffsetsResult1 = tmp(4926).findOffsets(byteLength);
        const obj5 = { fileType: null };
        obj5[0] = { value: "gif", description: "GIF" };
        return getDataView.objectAssign({}, findOffsetsResult1, obj5);
      }
      tmpResult11 = tmp(4926);
    }
    if (module(4915).USE_XMP) {
      if (tmpResult13.isXMLFile(byteLength)) {
        const tmpResult14 = tmp(4927);
        const findOffsetsResult2 = tmp(4927).findOffsets(byteLength);
        const obj6 = { fileType: null };
        obj6[0] = { value: "xml", description: "XML" };
        return getDataView.objectAssign({}, findOffsetsResult2, obj6);
      }
      tmpResult13 = tmp(4927);
    }
    const error = new Error("Invalid image format");
    throw error;
  }
};