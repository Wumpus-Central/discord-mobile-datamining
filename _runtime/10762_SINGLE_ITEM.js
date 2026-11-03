// === Module 10762: SINGLE_ITEM ===

// Module 10762 (SINGLE_ITEM)
import DATA_LENGTH from "DATA_LENGTH" /* 10763 */;

const SINGLE_ITEM = DATA_LENGTH.DATA_LENGTH.SINGLE_ITEM;
const DOUBLE_ITEM = DATA_LENGTH.DATA_LENGTH.DOUBLE_ITEM;
let items = [{ code: "(function isAutoFillData_Pnpm_computedWithAutoFillDataTs1(params){return!!params.loop&&!!params.autoFillData;})" }];
[tmp2] = items;
function isAutoFillData(loop) {
  return loop.loop && loop.autoFillData;
}
isAutoFillData.__workletHash = 5076158824574;
isAutoFillData.__initData = tmp2;
let items1 = [{ code: "(function convertToSharedIndex_Pnpm_computedWithAutoFillDataTs2(params){let[isAutoFillData,SINGLE_ITEM,DOUBLE_ITEM]=this.__closure;const{loop:loop,rawDataLength:rawDataLength,index:index,autoFillData:autoFillData}=params;if(isAutoFillData({loop:loop,autoFillData:autoFillData})){switch(rawDataLength){case SINGLE_ITEM:return 0;case DOUBLE_ITEM:return index%2;}}return index;})" }, isAutoFillData, SINGLE_ITEM, DOUBLE_ITEM];
let closure_129_0;
let closure_129_1;
let closure_129_2;
[tmp3, tmp4, tmp5, tmp6] = items1;
function convertToSharedIndex(loop) {
  ({ rawDataLength, index } = loop);
  if (SINGLE_ITEM(obj)) {
    if (DOUBLE_ITEM === rawDataLength) {
      return 0;
    } else if (isAutoFillData === rawDataLength) {
      return index % 2;
    }
  }
  return index;
}
const items2 = [tmp4, tmp5, tmp6];
convertToSharedIndex.__closure = items2;
convertToSharedIndex.__workletHash = 14793551292104;
convertToSharedIndex.__initData = tmp3;
const items3 = [{ code: "(function computedOffsetXValueWithAutoFillData_Pnpm_computedWithAutoFillDataTs3(params){let[isAutoFillData,SINGLE_ITEM,DOUBLE_ITEM]=this.__closure;const{rawDataLength:rawDataLength,value:value,size:size,loop:loop,autoFillData:autoFillData}=params;if(isAutoFillData({loop:loop,autoFillData:autoFillData})){switch(rawDataLength){case SINGLE_ITEM:return value%size;case DOUBLE_ITEM:return value%(size*2);}}return value;})" }, isAutoFillData, SINGLE_ITEM, DOUBLE_ITEM];
let closure_130_0;
let closure_130_1;
let closure_130_2;
[tmp7, tmp8, tmp9, tmp10] = items3;
function computedOffsetXValueWithAutoFillData(loop) {
  ({ rawDataLength, value, size } = loop);
  if (SINGLE_ITEM(obj)) {
    if (DOUBLE_ITEM === rawDataLength) {
      return value % size;
    } else if (isAutoFillData === rawDataLength) {
      return value % (2 * size);
    }
  }
  return value;
}
const items4 = [tmp8, tmp9, tmp10];
computedOffsetXValueWithAutoFillData.__closure = items4;
computedOffsetXValueWithAutoFillData.__workletHash = 16187438698124;
computedOffsetXValueWithAutoFillData.__initData = tmp7;

export { convertToSharedIndex };
export { computedOffsetXValueWithAutoFillData };
export function computedRealIndexWithAutoFillData(loop) {
  ({ index, dataLength } = loop);
  if (typeof isAutoFillData === "function") {
    if (tmp2) {
      if (SINGLE_ITEM === dataLength) {
        return index % 1;
      } else if (DOUBLE_ITEM === dataLength) {
        return index % 2;
      }
    }
    return index;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export function computedFillDataWithAutoFillData(loop) {
  ({ data, dataLength } = loop);
  if (typeof isAutoFillData === "function") {
    if (tmp2) {
      if (SINGLE_ITEM === dataLength) {
        items = [data[0], data[0], data[0]];
        return items;
      } else if (DOUBLE_ITEM === dataLength) {
        const items1 = [data[0], data[1], , ];
        [arr[2], arr[3]] = data;
        return items1;
      }
    }
    return data;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}