// === Module 5226: ? ===

// Module 5226
import _mod5213 from "module_5213" /* 5213 */;
import _modDef5216 from "module_5216" /* 5216 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  isWebpFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      tmp = _mod5213.getStringFromDataView(dataView, 0, 4) === "RIFF";
    }
    if (tmp) {
      tmp = _mod5213.getStringFromDataView(dataView, 8, 4) === "WEBP";
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
        let tmp9 = require;
        let obj = _mod5213;
        let stringFromDataView = obj.getStringFromDataView(byteLength, num, 4);
        let uint32 = byteLength.getUint32(num + 4, true);
        let tmp13 = importDefault;
        let flag3 = flag;
        if (_modDef5216.USE_EXIF) {
          if ("EXIF" === stringFromDataView) {
            let tmp9Result = tmp9(5213);
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
            let tmp4 = tmp22;
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
        if (tmp13(5216).USE_XMP) {
          if ("XMP " === stringFromDataView) {
            obj = { dataOffset: num + 8, length: uint32 };
            let items = [obj];
            flag3 = true;
            sum4 = tmp;
            tmp20 = tmp2;
            tmp21 = items;
            tmp22 = tmp4;
          }
        }
        if (tmp13(5216).USE_ICC) {
          if ("ICCP" === stringFromDataView) {
            obj = { offset: num + 8, length: uint32, chunkNumber: 1, chunksTotal: 1 };
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