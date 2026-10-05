// === Module 7358: ? ===

// Module 7358
import _mod7345 from "module_7345" /* 7345 */;
import _modDef7348 from "module_7348" /* 7348 */;


export default {
  isWebpFile(dataView) {
    let tmp = dataView;
    if (tmp) {
      const obj = _mod7345;
      tmp = obj.getStringFromDataView(dataView, 0, 4) === "RIFF";
    }
    if (tmp) {
      const obj2 = _mod7345;
      tmp = obj2.getStringFromDataView(dataView, 8, 4) === "WEBP";
    }
    return tmp;
  },
  findOffsets(byteLength) {
    let tmp;
    let tmp2;
    let tmp3;
    let flag = false;
    let num = 12;
    let hasAppMarkers = false;
    let vp8xChunkOffset;
    let iccChunks;
    let xmpChunks;
    let tiffHeaderOffset;
    if (20 < byteLength.byteLength) {
      while (true) {
        let tmp4;
        let sum4;
        let tmp20;
        let tmp21;
        let tmp22;
        let obj = _mod7345;
        let stringFromDataView = obj.getStringFromDataView(byteLength, num, 4);
        let uint32 = byteLength.getUint32(num + 4, true);
        let flag3 = flag;
        if (_modDef7348.USE_EXIF) {
          if ("EXIF" === stringFromDataView) {
            let tmp9Result = _mod7345;
            let sum = num + 8;
            let sum1 = sum;
            if (tmp9Result.getStringFromDataView(byteLength, sum, 6) === "Exif\0\0") {
              sum1 = sum + 6;
            }
            tmp22 = sum1;
            flag3 = true;
            sum4 = tmp;
            tmp20 = tmp2;
            tmp21 = tmp3;
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
        if (_modDef7348.USE_XMP) {
          if ("XMP " === stringFromDataView) {
            let obj2 = { dataOffset: num + 8, length: uint32 };
            let items = [obj2];
            flag3 = true;
            sum4 = tmp;
            tmp20 = tmp2;
            tmp21 = items;
            tmp22 = tmp4;
          }
        }
        if (_modDef7348.USE_ICC) {
          if ("ICCP" === stringFromDataView) {
            let obj3 = { offset: num + 8, length: uint32, chunkNumber: 1, chunksTotal: 1 };
            let items1 = [obj3];
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