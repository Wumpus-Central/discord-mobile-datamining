// === Module 10760: SINGLE_ITEM ===

// Module 10760 (SINGLE_ITEM)
import DATA_LENGTH from "DATA_LENGTH" /* 10761 */;

const SINGLE_ITEM = DATA_LENGTH.DATA_LENGTH.SINGLE_ITEM;
const DOUBLE_ITEM = DATA_LENGTH.DATA_LENGTH.DOUBLE_ITEM;
function isAutoFillData(loop) {
  return loop.loop && loop.autoFillData;
}
isAutoFillData.__closure = {};
isAutoFillData.__workletHash = 3243810595903;
isAutoFillData.__initData = { code: "function isAutoFillData_Pnpm_computedWithAutoFillDataTs1(params){return!!params.loop&&!!params.autoFillData;}" };
function convertToSharedIndex(loop) {
  ({ rawDataLength, index } = loop);
  if (typeof isAutoFillData === "function") {
    if (tmp2) {
      if (SINGLE_ITEM === rawDataLength) {
        return 0;
      } else if (DOUBLE_ITEM === rawDataLength) {
        return index % 2;
      }
    }
    return index;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
convertToSharedIndex.__closure = { isAutoFillData, SINGLE_ITEM, DOUBLE_ITEM };
convertToSharedIndex.__workletHash = 6582547575185;
convertToSharedIndex.__initData = { code: "function convertToSharedIndex_Pnpm_computedWithAutoFillDataTs2(params){const{isAutoFillData,SINGLE_ITEM,DOUBLE_ITEM}=this.__closure;const{loop:loop,rawDataLength:rawDataLength,index:index,autoFillData:autoFillData}=params;if(isAutoFillData({loop:loop,autoFillData:autoFillData})){switch(rawDataLength){case SINGLE_ITEM:return 0;case DOUBLE_ITEM:return index%2;}}return index;}" };
function computedOffsetXValueWithAutoFillData(loop) {
  ({ rawDataLength, value, size } = loop);
  if (typeof isAutoFillData === "function") {
    if (tmp2) {
      if (SINGLE_ITEM === rawDataLength) {
        return value % size;
      } else if (DOUBLE_ITEM === rawDataLength) {
        return value % (2 * size);
      }
    }
    return value;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
computedOffsetXValueWithAutoFillData.__closure = { isAutoFillData, SINGLE_ITEM, DOUBLE_ITEM };
computedOffsetXValueWithAutoFillData.__workletHash = 4588043425301;
computedOffsetXValueWithAutoFillData.__initData = { code: "function computedOffsetXValueWithAutoFillData_Pnpm_computedWithAutoFillDataTs3(params){const{isAutoFillData,SINGLE_ITEM,DOUBLE_ITEM}=this.__closure;const{rawDataLength:rawDataLength,value:value,size:size,loop:loop,autoFillData:autoFillData}=params;if(isAutoFillData({loop:loop,autoFillData:autoFillData})){switch(rawDataLength){case SINGLE_ITEM:return value%size;case DOUBLE_ITEM:return value%(size*2);}}return value;}" };

export { convertToSharedIndex };
export { computedOffsetXValueWithAutoFillData };
export const computedRealIndexWithAutoFillData = function computedRealIndexWithAutoFillData(loop) {
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
};
export const computedFillDataWithAutoFillData = function computedFillDataWithAutoFillData(loop) {
  ({ data, dataLength } = loop);
  if (typeof isAutoFillData === "function") {
    if (tmp2) {
      if (SINGLE_ITEM === dataLength) {
        const items = [data[0], data[0], data[0]];
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
};