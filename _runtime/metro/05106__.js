// _runtime/metro/05106__.js
import getDataView from "../05104_getDataView.js";

require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  parseAppMarkers(byteLength, flag2) {
    if (module(5107).USE_TIFF) {
      let tmpResult = tmp(5108);
      if (tmpResult.isTiffFile(byteLength)) {
        tmpResult = tmp(5108);
        const findTiffOffsetsResult = tmpResult.findTiffOffsets();
        let obj = { fileType: null };
        obj[0] = { value: "tiff", description: "TIFF" };
        return getDataView.objectAssign({}, findTiffOffsetsResult, obj);
      }
    }
    if (module(5107).USE_JPEG) {
      if (tmpResult1.isJpegFile(byteLength)) {
        const tmpResult2 = tmp(5110);
        const findJpegOffsetsResult = tmp(5110).findJpegOffsets(byteLength);
        obj = { fileType: null };
        obj[0] = { value: "jpeg", description: "JPEG" };
        return getDataView.objectAssign({}, findJpegOffsetsResult, obj);
      }
      tmpResult1 = tmp(5110);
    }
    if (module(5107).USE_PNG) {
      if (tmpResult3.isPngFile(byteLength)) {
        const tmpResult4 = tmp(5111);
        const findPngOffsetsResult = tmp(5111).findPngOffsets(byteLength, flag2);
        obj1 = { fileType: null };
        obj1[0] = { value: "png", description: "PNG" };
        return getDataView.objectAssign({}, findPngOffsetsResult, obj1);
      }
      tmpResult3 = tmp(5111);
    }
    if (module(5107).USE_HEIC) {
      if (tmpResult5.isHeicFile(byteLength)) {
        const tmpResult6 = tmp(5112);
        const findHeicOffsetsResult = tmp(5112).findHeicOffsets(byteLength);
        const obj2 = { fileType: null };
        obj2[0] = { value: "heic", description: "HEIC" };
        return getDataView.objectAssign({}, findHeicOffsetsResult, obj2);
      }
      tmpResult5 = tmp(5112);
    }
    if (module(5107).USE_AVIF) {
      if (tmpResult7.isAvifFile(byteLength)) {
        const tmpResult8 = tmp(5116);
        const findAvifOffsetsResult = tmp(5116).findAvifOffsets(byteLength);
        const obj3 = { fileType: null };
        obj3[0] = { value: "avif", description: "AVIF" };
        return getDataView.objectAssign({}, findAvifOffsetsResult, obj3);
      }
      tmpResult7 = tmp(5116);
    }
    if (module(5107).USE_WEBP) {
      if (tmpResult9.isWebpFile(byteLength)) {
        const tmpResult10 = tmp(5117);
        const findOffsetsResult = tmp(5117).findOffsets(byteLength);
        const obj4 = { fileType: null };
        obj4[0] = { value: "webp", description: "WebP" };
        return getDataView.objectAssign({}, findOffsetsResult, obj4);
      }
      tmpResult9 = tmp(5117);
    }
    if (module(5107).USE_GIF) {
      if (tmpResult11.isGifFile(byteLength)) {
        const tmpResult12 = tmp(5118);
        const findOffsetsResult1 = tmp(5118).findOffsets(byteLength);
        const obj5 = { fileType: null };
        obj5[0] = { value: "gif", description: "GIF" };
        return getDataView.objectAssign({}, findOffsetsResult1, obj5);
      }
      tmpResult11 = tmp(5118);
    }
    if (module(5107).USE_XMP) {
      if (tmpResult13.isXMLFile(byteLength)) {
        const tmpResult14 = tmp(5119);
        const findOffsetsResult2 = tmp(5119).findOffsets(byteLength);
        const obj6 = { fileType: null };
        obj6[0] = { value: "xml", description: "XML" };
        return getDataView.objectAssign({}, findOffsetsResult2, obj6);
      }
      tmpResult13 = tmp(5119);
    }
    error = new Error("Invalid image format");
    throw error;
  }
};