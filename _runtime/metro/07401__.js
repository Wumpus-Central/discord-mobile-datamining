// _runtime/metro/07401__.js
import _mod7356 from "07356__.js";
import _modDef7361 from "07361__.js";
import _modDef7373 from "07373__.js";
import get0thIfdOffset from "../07376_get0thIfdOffset.js";
import IFD_TYPE_0TH from "../07377_IFD_TYPE_0TH.js";

let obj = {
  read(buffer, c5, arg2) {
    let str11;
    let str12;
    let tmp16;
    let obj = _modDef7361;
    const byteOrder = obj.getByteOrder(buffer, c5);
    const readIfd = get0thIfdOffset.readIfd;
    get0thIfdOffset;
    const IFD_TYPE_MPF = IFD_TYPE_0TH.IFD_TYPE_MPF;
    const obj2 = get0thIfdOffset;
    const ifd = readIfd(buffer, IFD_TYPE_MPF, c5, obj2.get0thIfdOffset(buffer, c5, byteOrder), byteOrder, arg2);
    if (ifd.MPEntry) {
      const items = [];
      const _Math = Math;
      let num13 = 0;
      if (0 < Math.ceil(ifd.MPEntry.value.length / c3)) {
        do {
          let num16;
          let num22;
          let num35;
          let num41;
          items[num13] = {};
          let value = ifd.MPEntry.value;
          let result = num13 * c3;
          let obj3 = _modDef7373;
          let typeSize = obj3.getTypeSize("LONG");
          if (byteOrder === _modDef7361.LITTLE_ENDIAN) {
            let num17 = 0;
            let num18 = 0;
            let num19 = 0;
            if (0 < typeSize) {
              do {
                num18 = num18 + (value[result + num17] << (8 * num17));
                num17 = num17 + 1;
                num19 = num18;
              } while (num17 < typeSize);
            }
            num16 = num19;
          } else {
            let num14 = 0;
            let num15 = 0;
            num16 = 0;
            if (0 < typeSize) {
              do {
                num15 = num15 + (value[result + num14] << (8 * (typeSize - 1 - num14)));
                num14 = num14 + 1;
                num16 = num15;
              } while (num14 < typeSize);
            }
          }
          let items1 = [(num16 >> 31) & 1, (num16 >> 30) & 1, (num16 >> 29) & 1];
          let items2 = [];
          let tmp12 = items[num13];
          if (items1[0]) {
            let arr = items2.push("Dependent Parent Image");
          }
          if (items1[1]) {
            let arr2 = items2.push("Dependent Child Image");
          }
          if (items1[2]) {
            let arr3 = items2.push("Representative Image");
          }
          let obj4 = { value: items1, description: tmp16 };
          tmp16 = items2.join(", ") || "None";
          tmp12.ImageFlags = obj4;
          let tmp18 = (num16 >> 24) & 7;
          let obj5 = { value: tmp18, description: str11 };
          str11 = "Unknown";
          let tmp17 = items[num13];
          if (0 === tmp18) {
            str11 = "JPEG";
          }
          tmp17.ImageFormat = obj5;
          let tmp20 = 16777215 & num16;
          let obj6 = { value: tmp20, description: str12 };
          str12 = {
            196608: "Baseline MP Primary Image",
            65537: "Large Thumbnail (VGA equivalent)",
            65538: "Large Thumbnail (Full HD equivalent)",
            131073: "Multi-Frame Image (Panorama)",
            131074: "Multi-Frame Image (Disparity)",
            131075: "Multi-Frame Image (Multi-Angle)",
            0: "Undefined",
          }[tmp20];
          let tmp19 = items[num13];
          if (!str12) {
            str12 = "Unknown";
          }
          tmp19.ImageType = obj6;
          let value2 = ifd.MPEntry.value;
          let sum = num13 * c3 + 4;
          let obj7 = _modDef7373;
          let typeSize1 = obj7.getTypeSize("LONG");
          if (byteOrder === _modDef7361.LITTLE_ENDIAN) {
            let num23 = 0;
            let num24 = 0;
            let num25 = 0;
            if (0 < typeSize1) {
              do {
                num24 = num24 + (value2[sum + num23] << (8 * num23));
                num23 = num23 + 1;
                num25 = num24;
              } while (num23 < typeSize1);
            }
            num22 = num25;
          } else {
            let num20 = 0;
            let num21 = 0;
            num22 = 0;
            if (0 < typeSize1) {
              do {
                num21 = num21 + (value2[sum + num20] << (8 * (typeSize1 - 1 - num20)));
                num20 = num20 + 1;
                num22 = num21;
              } while (num20 < typeSize1);
            }
          }
          let obj8 = { value: num22, description: "" + num22 };
          items[num13].ImageSize = obj8;
          let num26 = 0;
          if (0 !== num13) {
            let num29;
            let value3 = ifd.MPEntry.value;
            let sum1 = num13 * c3 + 8;
            let obj15 = _modDef7373;
            let typeSize2 = obj15.getTypeSize("LONG");
            if (byteOrder === _modDef7361.LITTLE_ENDIAN) {
              let num30 = 0;
              let num31 = 0;
              let num32 = 0;
              if (0 < typeSize2) {
                do {
                  num31 = num31 + (value3[sum1 + num30] << (8 * num30));
                  num30 = num30 + 1;
                  num32 = num31;
                } while (num30 < typeSize2);
              }
              num29 = num32;
            } else {
              let num27 = 0;
              let num28 = 0;
              num29 = 0;
              if (0 < typeSize2) {
                do {
                  num28 = num28 + (value3[sum1 + num27] << (8 * (typeSize2 - 1 - num27)));
                  num27 = num27 + 1;
                  num29 = num28;
                } while (num27 < typeSize2);
              }
            }
            num26 = num29 + c5;
          }
          let obj9 = { value: num26, description: "" + num26 };
          items[num13].ImageOffset = obj9;
          let value4 = ifd.MPEntry.value;
          let sum2 = num13 * c3 + 12;
          let obj10 = _modDef7373;
          let typeSize3 = obj10.getTypeSize("SHORT");
          if (byteOrder === _modDef7361.LITTLE_ENDIAN) {
            let num36 = 0;
            let num37 = 0;
            let num38 = 0;
            if (0 < typeSize3) {
              do {
                num37 = num37 + (value4[sum2 + num36] << (8 * num36));
                num36 = num36 + 1;
                num38 = num37;
              } while (num36 < typeSize3);
            }
            num35 = num38;
          } else {
            let num33 = 0;
            let num34 = 0;
            num35 = 0;
            if (0 < typeSize3) {
              do {
                num34 = num34 + (value4[sum2 + num33] << (8 * (typeSize3 - 1 - num33)));
                num33 = num33 + 1;
                num35 = num34;
              } while (num33 < typeSize3);
            }
          }
          let obj11 = { value: num35, description: "" + num35 };
          items[num13].DependentImage1EntryNumber = obj11;
          let value5 = ifd.MPEntry.value;
          let sum3 = num13 * c3 + 14;
          let obj12 = _modDef7373;
          let typeSize4 = obj12.getTypeSize("SHORT");
          if (byteOrder === _modDef7361.LITTLE_ENDIAN) {
            let num42 = 0;
            let num43 = 0;
            let num44 = 0;
            if (0 < typeSize4) {
              do {
                num43 = num43 + (value5[sum3 + num42] << (8 * num42));
                num42 = num42 + 1;
                num44 = num43;
              } while (num42 < typeSize4);
            }
            num41 = num44;
          } else {
            let num39 = 0;
            let num40 = 0;
            num41 = 0;
            if (0 < typeSize4) {
              do {
                num40 = num40 + (value5[sum3 + num39] << (8 * (typeSize4 - 1 - num39)));
                num39 = num39 + 1;
                num41 = num40;
              } while (num39 < typeSize4);
            }
          }
          let obj13 = { value: num41, description: "" + num41 };
          items[num13].DependentImage2EntryNumber = obj13;
          buffer = buffer.buffer;
          items[num13].image = buffer.slice(num26, num26 + num22);
          let obj14 = _mod7356;
          let deferInitResult = obj14.deferInit(items[num13], "base64", function () {
            const obj = _mod7356;
            return obj.getBase64Image(this.image);
          });
          num13 = num13 + 1;
          let _Math2 = Math;
        } while (num13 < Math.ceil(ifd.MPEntry.value.length / c3));
      }
      ifd.Images = items;
    }
    return ifd;
  },
};
let c3 = 16;

export default obj;
