// _runtime/04928_getDataView.js
import getDataView from "04915_getDataView.js";

require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  isWebpFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = getDataView.getStringFromDataView(dataView, 0, 4) === "RIFF";
      const obj = getDataView;
    }
    if (tmp) {
      tmp = getDataView.getStringFromDataView(dataView, 8, 4) === "WEBP";
      const obj2 = getDataView;
    }
    return tmp;
  },
  findOffsets(byteLength) {
    let flag = false;
    let num = 12;
    let hasAppMarkers = false;
    let vp8xChunkOffset;
    let iccChunks;
    let xmpChunks;
    let tiffHeaderOffset;
    if (20 < byteLength.byteLength) {
      while (true) {
        let tmp10 = dependencyMap;
        let tmp9 = require;
        let obj = getDataView;
        let stringFromDataView = obj.getStringFromDataView(byteLength, num, 4);
        let uint32 = byteLength.getUint32(num + 4, true);
        let tmp13 = module;
        let flag3 = flag;
        let tmp14 = num;
        let tmp15 = tmp;
        let tmp16 = tmp2;
        let tmp17 = tmp3;
        let tmp18 = tmp4;
        if (module(4918).USE_EXIF) {
          if ("EXIF" === stringFromDataView) {
            let tmp9Result = tmp9(4915);
            let sum = num + 8;
            let sum1 = sum;
            if (tmp9Result.getStringFromDataView(byteLength, sum, 6) === "Exif\0\0") {
              sum1 = sum + 6;
            }
            let tmp22 = sum1;
            flag3 = true;
            let sum4 = tmp;
            let tmp20 = tmp2;
            let tmp21 = tmp3;
            let sum2 = uint32;
            if (uint32 % 2 !== 0) {
              sum2 = uint32 + 1;
            }
            let sum3 = num + (8 + sum2);
            flag = flag3;
            num = sum3;
            tmp = sum4;
            tmp2 = tmp20;
            tmp3 = tmp21;
            tmp4 = tmp22;
            hasAppMarkers = flag3;
            vp8xChunkOffset = sum4;
            iccChunks = tmp20;
            xmpChunks = tmp21;
            tiffHeaderOffset = tmp22;
            if (sum3 + 8 >= byteLength.byteLength) {
              break;
            }
          }
        }
        if (tmp13(4918).USE_XMP) {
          if ("XMP " === stringFromDataView) {
            obj = { dataOffset: null, length: null };
            obj[0] = num + 8;
            obj[1] = uint32;
            let items = [obj];
            flag3 = true;
            sum4 = tmp;
            tmp20 = tmp2;
            tmp21 = items;
            tmp22 = tmp4;
          }
        }
        if (tmp13(4918).USE_ICC) {
          if ("ICCP" === stringFromDataView) {
            obj = { offset: null, length: null, chunkNumber: 1, chunksTotal: 1 };
            obj[0] = num + 8;
            obj[1] = uint32;
            let items1 = [obj];
            flag3 = true;
            sum4 = tmp;
            tmp20 = items1;
            tmp21 = tmp3;
            tmp22 = tmp4;
          }
        }
        sum4 = tmp;
        tmp20 = tmp2;
        tmp21 = tmp3;
        tmp22 = tmp4;
        if ("VP8X" === stringFromDataView) {
          sum4 = num + 8;
          flag3 = true;
          tmp20 = tmp2;
          tmp21 = tmp3;
          tmp22 = tmp4;
        }
      }
    }
    return { hasAppMarkers, tiffHeaderOffset, xmpChunks, iccChunks, vp8xChunkOffset };
  }
};