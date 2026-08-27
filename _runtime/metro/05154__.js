// _runtime/metro/05154__.js
import getDataView from "../05109_getDataView.js";
import readTag from "../05129_readTag.js";
import importDefaultResult1 from "../05130_importDefaultResult1.js";

require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c3 = 16;
arg5.default = {
  read(buffer, sum) {
    let iter;
    let obj = module(5114);
    const byteOrder = obj.getByteOrder(buffer, sum);
    obj1 = readTag;
    let obj2 = readTag;
    const ifd = obj1.readIfd(buffer, importDefaultResult1.IFD_TYPE_MPF, sum, obj2.get0thIfdOffset(buffer, sum, byteOrder), byteOrder, arg2);
    if (ifd.MPEntry) {
      const items = [];
      const _Math = Math;
      let num13 = 0;
      if (0 < Math.ceil(ifd.MPEntry.value.length / c3)) {
        while (true) {
          items[num13] = {};
          let value = ifd.MPEntry.value;
          let tmp5 = c3;
          let result = num13 * c3;
          let tmp7 = module;
          let tmp8 = dependencyMap;
          let obj3 = module(5126);
          let typeSize = obj3.getTypeSize("LONG");
          let tmp10 = num13;
          if (byteOrder === module(5114).LITTLE_ENDIAN) {
            let num17 = 0;
            let num18 = 0;
            let num19 = 0;
            if (0 < typeSize) {
              do {
                num18 = num18 + (value[result + num17] << 8 * num17);
                num17 = num17 + 1;
                num19 = num18;
              } while (num17 < typeSize);
            }
            let num16 = num19;
          } else {
            let num14 = 0;
            let num15 = 0;
            num16 = 0;
            if (0 < typeSize) {
              do {
                num15 = num15 + (value[result + num14] << 8 * (typeSize - 1 - num14));
                num14 = num14 + 1;
                num16 = num15;
              } while (num14 < typeSize);
            }
          }
          let items1 = [num16 >> 31 & 1, num16 >> 30 & 1, num16 >> 29 & 1];
          let items2 = [];
          if (items1[0]) {
            let arr = items2.push("Dependent Parent Image");
          }
          if (items1[1]) {
            arr = items2.push("Dependent Child Image");
          }
          if (items1[2]) {
            let arr1 = items2.push("Representative Image");
          }
          obj = { value: null, description: null };
          obj[0] = items1;
          let tmp14 = items2.join(", ") || "None";
          obj[1] = tmp14;
          items[num13].ImageFlags = obj;
          let tmp15 = num16 >> 24 & 7;
          obj = { value: null, description: null };
          obj[0] = tmp15;
          let str11 = "Unknown";
          if (0 === tmp15) {
            str11 = "JPEG";
          }
          obj[1] = str11;
          items[num13].ImageFormat = obj;
          let tmp16 = 16777215 & num16;
          obj1 = { value: null, description: null };
          obj1[0] = tmp16;
          let str12 = { 196608: "Baseline MP Primary Image", 65537: "Large Thumbnail (VGA equivalent)", 65538: "Large Thumbnail (Full HD equivalent)", 131073: "Multi-Frame Image (Panorama)", 131074: "Multi-Frame Image (Disparity)", 131075: "Multi-Frame Image (Multi-Angle)", 0: "Undefined" }[tmp16];
          if (!str12) {
            str12 = "Unknown";
          }
          obj1[1] = str12;
          items[num13].ImageType = obj1;
          value = ifd.MPEntry.value;
          let tmp17 = c3;
          sum = num13 * c3 + 4;
          let tmp19 = module;
          let tmp20 = dependencyMap;
          let obj8 = module(5126);
          let typeSize1 = obj8.getTypeSize("LONG");
          if (byteOrder === module(5114).LITTLE_ENDIAN) {
            let num23 = 0;
            let num24 = 0;
            let num25 = 0;
            if (0 < typeSize1) {
              do {
                num24 = num24 + (value[sum + num23] << 8 * num23);
                num23 = num23 + 1;
                num25 = num24;
              } while (num23 < typeSize1);
            }
            let num22 = num25;
          } else {
            let num20 = 0;
            let num21 = 0;
            num22 = 0;
            if (0 < typeSize1) {
              do {
                num21 = num21 + (value[sum + num20] << 8 * (typeSize1 - 1 - num20));
                num20 = num20 + 1;
                num22 = num21;
              } while (num20 < typeSize1);
            }
          }
          obj2 = { value: null, description: null };
          obj2[0] = num22;
          obj2[1] = "" + num22;
          items[num13].ImageSize = obj2;
          let num26 = 0;
          iter = ifd.MPEntry;
          if (0 !== num13) {
            break;
          } else {
            obj3 = { value: null, description: null };
            obj3[0] = 0;
            obj3[1] = "";
            items[num13].ImageOffset = obj3;
            value = ifd.MPEntry.value;
            let tmp23 = c3;
            let sum1 = num13 * c3 + 12;
            let tmp25 = module;
            let tmp26 = dependencyMap;
            let obj11 = module(5126);
            let typeSize2 = obj11.getTypeSize("SHORT");
            if (byteOrder === module(5114).LITTLE_ENDIAN) {
              let num36 = 0;
              let num37 = 0;
              let num38 = 0;
              if (0 < typeSize2) {
                do {
                  num37 = num37 + (value[sum1 + num36] << 8 * num36);
                  num36 = num36 + 1;
                  num38 = num37;
                } while (num36 < typeSize2);
              }
              let num35 = num38;
            } else {
              let num33 = 0;
              let num34 = 0;
              num35 = 0;
              if (0 < typeSize2) {
                do {
                  num34 = num34 + (value[sum1 + num33] << 8 * (typeSize2 - 1 - num33));
                  num33 = num33 + 1;
                  num35 = num34;
                } while (num33 < typeSize2);
              }
            }
            let obj4 = { value: null, description: null };
            obj4[0] = num35;
            obj4[1] = "" + num35;
            items[num13].DependentImage1EntryNumber = obj4;
            let value1 = ifd.MPEntry.value;
            let tmp28 = c3;
            let sum2 = num13 * c3 + 14;
            let tmp30 = module;
            let tmp31 = dependencyMap;
            let obj13 = module(5126);
            let typeSize3 = obj13.getTypeSize("SHORT");
            if (byteOrder === module(5114).LITTLE_ENDIAN) {
              let num42 = 0;
              let num43 = 0;
              let num44 = 0;
              if (0 < typeSize3) {
                do {
                  num43 = num43 + (value1[sum2 + num42] << 8 * num42);
                  num42 = num42 + 1;
                  num44 = num43;
                } while (num42 < typeSize3);
              }
              let num41 = num44;
            } else {
              let num39 = 0;
              let num40 = 0;
              num41 = 0;
              if (0 < typeSize3) {
                do {
                  num40 = num40 + (value1[sum2 + num39] << 8 * (typeSize3 - 1 - num39));
                  num39 = num39 + 1;
                  num41 = num40;
                } while (num39 < typeSize3);
              }
            }
            let obj5 = { value: null, description: null };
            obj5[0] = num41;
            obj5[1] = "" + num41;
            items[num13].DependentImage2EntryNumber = obj5;
            buffer = buffer.buffer;
            items[num13].image = buffer.slice(0, num22);
            let tmp33 = require;
            let tmp34 = dependencyMap;
            let obj15 = getDataView;
            let deferInitResult = obj15.deferInit(items[num13], "base64", function() {
              return callback(table[4]).getBase64Image(this.image);
            });
            num13 = num13 + 1;
            let _Math2 = Math;
            let tmp36 = c3;
          }
        }
        const value2 = iter.value;
        const sum3 = num13 * c3 + 8;
        const typeSize4 = module(5126).getTypeSize("LONG");
        if (byteOrder === module(5114).LITTLE_ENDIAN) {
          let num30 = 0;
          let num31 = 0;
          let num32 = 0;
          if (0 < typeSize4) {
            do {
              num31 = num31 + (value2[sum3 + num30] << 8 * num30);
              num30 = num30 + 1;
              num32 = num31;
            } while (num30 < typeSize4);
          }
          let num29 = num32;
        } else {
          let num27 = 0;
          let num28 = 0;
          num29 = 0;
          if (0 < typeSize4) {
            do {
              num28 = num28 + (value2[sum3 + num27] << 8 * (typeSize4 - 1 - num27));
              num27 = num27 + 1;
              num29 = num28;
            } while (num27 < typeSize4);
          }
        }
        const sum4 = num29 + sum;
        const obj16 = module(5126);
      }
      ifd.Images = items;
    }
    return ifd;
  }
};