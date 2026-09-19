// _runtime/metro/05473__.js
import _mod5425 from "05425__.js";
import PNG_CHUNK_TYPE_SIZE from "../05432_PNG_CHUNK_TYPE_SIZE.js";
import _modDef5442 from "05442__.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  read(byteLength, arg1) {
    const obj = {};
    for (let num = 0; num < arg1.length; num = num + 1) {
      let obj2 = _modDef5442;
      let longAt = obj2.getLongAt(byteLength, arg1[num] + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_LENGTH_OFFSET);
      let obj3 = _mod5425;
      let sum = arg1[num] + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_TYPE_OFFSET;
      let stringFromDataView = obj3.getStringFromDataView(byteLength, sum, PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_TYPE_SIZE);
      if (stringFromDataView === PNG_CHUNK_TYPE_SIZE.TYPE_PHYS) {
        let tmp22 = arg1[num];
        let tmp23 = 4 <= longAt && tmp22 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 4 <= byteLength.byteLength;
        let tmp24;
        if (tmp23) {
          let tmpResult = _modDef5442;
          let longAt1 = tmpResult.getLongAt(byteLength, tmp22 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET);
          let obj4 = { value: longAt1, description: "" + longAt1 };
          tmp24 = obj4;
        }
        obj["Pixels Per Unit X"] = tmp24;
        let tmp26 = arg1[num];
        let tmp27 = 8 <= longAt && tmp26 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 4 + 4 <= byteLength.byteLength;
        let tmp28;
        if (tmp27) {
          let tmpResult9 = _modDef5442;
          let longAt2 = tmpResult9.getLongAt(byteLength, tmp26 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 4);
          let obj5 = { value: longAt2, description: "" + longAt2 };
          tmp28 = obj5;
        }
        obj["Pixels Per Unit Y"] = tmp28;
        let tmp30 = arg1[num];
        let tmp31 = 9 <= longAt && tmp30 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 8 + 1 <= byteLength.byteLength;
        let tmp32;
        if (tmp31) {
          let tmpResult10 = _modDef5442;
          let byteAt = tmpResult10.getByteAt(byteLength, tmp30 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 8);
          let obj6 = { value: byteAt, description: null };
          let str7 = "Unknown";
          if (1 === byteAt) {
            str7 = "meters";
          }
          obj6.description = str7;
          tmp32 = obj6;
        }
        obj["Pixel Units"] = tmp32;
      } else if (stringFromDataView === PNG_CHUNK_TYPE_SIZE.TYPE_TIME) {
        let tmp34 = arg1[num];
        let tmp8 = 7 <= longAt && tmp34 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 7 <= byteLength.byteLength;
        let tmp9;
        if (tmp8) {
          let tmpResult11 = _modDef5442;
          let shortAt = tmpResult11.getShortAt(byteLength, tmp34 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET);
          let tmpResult12 = _modDef5442;
          let byteAt1 = tmpResult12.getByteAt(byteLength, tmp34 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 2);
          let tmpResult13 = _modDef5442;
          let byteAt2 = tmpResult13.getByteAt(byteLength, tmp34 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 3);
          let tmpResult14 = _modDef5442;
          let byteAt3 = tmpResult14.getByteAt(byteLength, tmp34 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 4);
          let tmpResult15 = _modDef5442;
          let byteAt4 = tmpResult15.getByteAt(byteLength, tmp34 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 5);
          let tmpResult16 = _modDef5442;
          let byteAt5 = tmpResult16.getByteAt(byteLength, tmp34 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 6);
          let obj7 = { value: null, description: null };
          let items = [shortAt, byteAt1, byteAt2, byteAt3, byteAt4, byteAt5];
          obj7.value = items;
          let repeat = "0".repeat;
          let _HermesInternal = HermesInternal;
          let combined = "" + "0".repeat(4 - "" + shortAt.length) + shortAt;
          let repeat2 = "0".repeat;
          let _HermesInternal2 = HermesInternal;
          let repeat3 = "0".repeat;
          let combined1 = "" + "0".repeat(2 - "" + byteAt1.length) + byteAt1;
          let _HermesInternal3 = HermesInternal;
          let repeat4 = "0".repeat;
          let combined2 = "" + "0".repeat(2 - "" + byteAt2.length) + byteAt2;
          let _HermesInternal4 = HermesInternal;
          let repeat5 = "0".repeat;
          let combined3 = "" + "0".repeat(2 - "" + byteAt3.length) + byteAt3;
          let _HermesInternal5 = HermesInternal;
          let repeat6 = "0".repeat;
          let combined4 = "" + "0".repeat(2 - "" + byteAt4.length) + byteAt4;
          let _HermesInternal6 = HermesInternal;
          let _HermesInternal7 = HermesInternal;
          let str = "";
          let str2 = "-";
          let str3 = "-";
          let str4 = " ";
          let str5 = ":";
          let str6 = ":";
          obj7.description =
            "" +
            combined +
            "-" +
            combined1 +
            "-" +
            combined2 +
            " " +
            combined3 +
            ":" +
            combined4 +
            ":" +
            "" +
            "0".repeat(2 - "" + byteAt5.length) +
            byteAt5;
          tmp9 = obj7;
        }
        obj["Modify Date"] = tmp9;
      }
    }
    return obj;
  },
};
