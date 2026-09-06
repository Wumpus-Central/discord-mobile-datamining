// === Module 5261: ? ===

// Module 5261
import _mod5213 from "module_5213" /* 5213 */;
import PNG_CHUNK_TYPE_SIZE from "PNG_CHUNK_TYPE_SIZE" /* 5220 */;
import _modDef5230 from "module_5230" /* 5230 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  read(byteLength, arg1) {
    let obj = {};
    for (let num = 0; num < arg1.length; num = num + 1) {
      let tmp = importDefault;
      let obj1 = _modDef5230;
      let tmp3 = require;
      let longAt = obj1.getLongAt(byteLength, arg1[num] + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_LENGTH_OFFSET);
      let obj2 = _mod5213;
      let sum = arg1[num] + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_TYPE_OFFSET;
      let stringFromDataView = obj2.getStringFromDataView(byteLength, sum, PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_TYPE_SIZE);
      if (stringFromDataView === PNG_CHUNK_TYPE_SIZE.TYPE_PHYS) {
        let tmp22 = arg1[num];
        let tmp23 = 4 <= longAt && tmp22 + tmp3(5220).PNG_CHUNK_DATA_OFFSET + 4 <= byteLength.byteLength;
        let tmp24;
        if (tmp23) {
          let tmpResult = tmp(5230);
          let longAt1 = tmpResult.getLongAt(byteLength, tmp22 + tmp3(5220).PNG_CHUNK_DATA_OFFSET);
          obj = { value: longAt1, description: "" + longAt1 };
          tmp24 = obj;
        }
        obj["Pixels Per Unit X"] = tmp24;
        let tmp26 = arg1[num];
        let tmp27 = 8 <= longAt && tmp26 + tmp3(5220).PNG_CHUNK_DATA_OFFSET + 4 + 4 <= byteLength.byteLength;
        let tmp28;
        if (tmp27) {
          tmpResult = tmp(5230);
          let longAt2 = tmpResult.getLongAt(byteLength, tmp26 + tmp3(5220).PNG_CHUNK_DATA_OFFSET + 4);
          obj = { value: longAt2, description: "" + longAt2 };
          tmp28 = obj;
        }
        obj["Pixels Per Unit Y"] = tmp28;
        let tmp30 = arg1[num];
        let tmp31 = 9 <= longAt && tmp30 + tmp3(5220).PNG_CHUNK_DATA_OFFSET + 8 + 1 <= byteLength.byteLength;
        let tmp32;
        if (tmp31) {
          let tmpResult1 = tmp(5230);
          let byteAt = tmpResult1.getByteAt(byteLength, tmp30 + tmp3(5220).PNG_CHUNK_DATA_OFFSET + 8);
          obj1 = { value: byteAt, description: null };
          let str7 = "Unknown";
          if (1 === byteAt) {
            str7 = "meters";
          }
          obj1.description = str7;
          tmp32 = obj1;
        }
        obj["Pixel Units"] = tmp32;
      } else if (stringFromDataView === tmp3(5220).TYPE_TIME) {
        let tmp34 = arg1[num];
        let tmp8 = 7 <= longAt && tmp34 + tmp3(5220).PNG_CHUNK_DATA_OFFSET + 7 <= byteLength.byteLength;
        let tmp9;
        if (tmp8) {
          let tmpResult2 = tmp(5230);
          let shortAt = tmpResult2.getShortAt(byteLength, tmp34 + tmp3(5220).PNG_CHUNK_DATA_OFFSET);
          let tmpResult3 = tmp(5230);
          let byteAt1 = tmpResult3.getByteAt(byteLength, tmp34 + tmp3(5220).PNG_CHUNK_DATA_OFFSET + 2);
          let tmpResult4 = tmp(5230);
          let byteAt2 = tmpResult4.getByteAt(byteLength, tmp34 + tmp3(5220).PNG_CHUNK_DATA_OFFSET + 3);
          let tmpResult5 = tmp(5230);
          let byteAt3 = tmpResult5.getByteAt(byteLength, tmp34 + tmp3(5220).PNG_CHUNK_DATA_OFFSET + 4);
          let tmpResult6 = tmp(5230);
          let byteAt4 = tmpResult6.getByteAt(byteLength, tmp34 + tmp3(5220).PNG_CHUNK_DATA_OFFSET + 5);
          let tmpResult7 = tmp(5230);
          let byteAt5 = tmpResult7.getByteAt(byteLength, tmp34 + tmp3(5220).PNG_CHUNK_DATA_OFFSET + 6);
          obj2 = { value: null, description: null };
          let items = [shortAt, byteAt1, byteAt2, byteAt3, byteAt4, byteAt5];
          obj2.value = items;
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
          obj2.description = "" + combined + "-" + combined1 + "-" + combined2 + " " + combined3 + ":" + combined4 + ":" + "" + "0".repeat(2 - "" + byteAt5.length) + byteAt5;
          tmp9 = obj2;
        }
        obj["Modify Date"] = tmp9;
      }
    }
    return obj;
  }
};