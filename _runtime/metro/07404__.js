// === Module 7404: ? ===

// Module 7404
import _mod7356 from "module_7356" /* 7356 */;
import PNG_CHUNK_TYPE_SIZE from "PNG_CHUNK_TYPE_SIZE" /* 7363 */;
import _modDef7373 from "module_7373" /* 7373 */;


export default {
  read(byteLength, arg1) {
    let combined;
    let combined1;
    let combined2;
    let combined3;
    let combined4;
    let items;
    let num;
    let str7;
    const obj = {};
    for (let num = 0; num < arg1.length; num = num + 1) {
      let obj2 = _modDef7373;
      let longAt = obj2.getLongAt(byteLength, arg1[num] + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_LENGTH_OFFSET);
      let tmp5 = _mod7356;
      let getStringFromDataView = tmp5.getStringFromDataView;
      let sum = arg1[num] + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_TYPE_OFFSET;
      let stringFromDataView = getStringFromDataView(byteLength, sum, PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_TYPE_SIZE);
      if (stringFromDataView === PNG_CHUNK_TYPE_SIZE.TYPE_PHYS) {
        let tmp23 = arg1[num];
        let tmp24 = 4 <= longAt && tmp23 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 4 <= byteLength.byteLength;
        let tmp25;
        if (tmp24) {
          let tmpResult = _modDef7373;
          let longAt1 = tmpResult.getLongAt(byteLength, tmp23 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET);
          let obj3 = { value: longAt1, description: "" + longAt1 };
          tmp25 = obj3;
        }
        obj["Pixels Per Unit X"] = tmp25;
        let tmp27 = arg1[num];
        let tmp28 = 8 <= longAt && tmp27 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 4 + 4 <= byteLength.byteLength;
        let tmp29;
        if (tmp28) {
          let tmpResult9 = _modDef7373;
          let longAt2 = tmpResult9.getLongAt(byteLength, tmp27 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 4);
          let obj4 = { value: longAt2, description: "" + longAt2 };
          tmp29 = obj4;
        }
        obj["Pixels Per Unit Y"] = tmp29;
        let tmp31 = arg1[num];
        let tmp32 = 9 <= longAt && tmp31 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 8 + 1 <= byteLength.byteLength;
        let tmp33;
        if (tmp32) {
          let tmpResult10 = _modDef7373;
          let byteAt = tmpResult10.getByteAt(byteLength, tmp31 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 8);
          let obj5 = { value: byteAt, description: str7 };
          str7 = "Unknown";
          if (1 === byteAt) {
            str7 = "meters";
          }
          tmp33 = obj5;
        }
        obj["Pixel Units"] = tmp33;
      } else if (stringFromDataView === PNG_CHUNK_TYPE_SIZE.TYPE_TIME) {
        let tmp35 = arg1[num];
        let tmp9 = 7 <= longAt && tmp35 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 7 <= byteLength.byteLength;
        let tmp10;
        if (tmp9) {
          let tmpResult11 = _modDef7373;
          let shortAt = tmpResult11.getShortAt(byteLength, tmp35 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET);
          let tmpResult12 = _modDef7373;
          let byteAt1 = tmpResult12.getByteAt(byteLength, tmp35 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 2);
          let tmpResult13 = _modDef7373;
          let byteAt2 = tmpResult13.getByteAt(byteLength, tmp35 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 3);
          let tmpResult14 = _modDef7373;
          let byteAt3 = tmpResult14.getByteAt(byteLength, tmp35 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 4);
          let tmpResult15 = _modDef7373;
          let byteAt4 = tmpResult15.getByteAt(byteLength, tmp35 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 5);
          let tmpResult16 = _modDef7373;
          let byteAt5 = tmpResult16.getByteAt(byteLength, tmp35 + PNG_CHUNK_TYPE_SIZE.PNG_CHUNK_DATA_OFFSET + 6);
          let obj6 = { value: items, description: "" + combined + "-" + combined1 + "-" + combined2 + " " + combined3 + ":" + combined4 + ":" + "" + "0".repeat(2 - ("" + byteAt5).length) + byteAt5 };
          items = [shortAt, byteAt1, byteAt2, byteAt3, byteAt4, byteAt5];
          let repeat = "0".repeat;
          let _HermesInternal = HermesInternal;
          combined = "" + "0".repeat(4 - ("" + shortAt).length) + shortAt;
          let repeat2 = "0".repeat;
          let _HermesInternal2 = HermesInternal;
          let repeat3 = "0".repeat;
          combined1 = "" + "0".repeat(2 - ("" + byteAt1).length) + byteAt1;
          let _HermesInternal3 = HermesInternal;
          let repeat4 = "0".repeat;
          combined2 = "" + "0".repeat(2 - ("" + byteAt2).length) + byteAt2;
          let _HermesInternal4 = HermesInternal;
          let repeat5 = "0".repeat;
          combined3 = "" + "0".repeat(2 - ("" + byteAt3).length) + byteAt3;
          let _HermesInternal5 = HermesInternal;
          let repeat6 = "0".repeat;
          combined4 = "" + "0".repeat(2 - ("" + byteAt4).length) + byteAt4;
          let _HermesInternal6 = HermesInternal;
          let _HermesInternal7 = HermesInternal;
          let str = "";
          let str2 = "-";
          let str3 = "-";
          let str4 = " ";
          let str5 = ":";
          let str6 = ":";
          tmp10 = obj6;
        }
        obj["Modify Date"] = tmp10;
      }
    }
    return obj;
  }
};