// _runtime/metro/10783__.js
import _mod19 from "00019__.js";

const useRef = _mod19.useRef;
let closure_3 = {
  code: "function pnpm_useVisibleRangesTsx1(){const{windowSize,translation,viewSize,total,loop,isArraysEqual,cachedRanges}=this.__closure;var _cachedRanges$current,_cachedRanges$current2,_cachedRanges$current3,_cachedRanges$current4;const positiveCount=Math.round(windowSize/2);const negativeCount=windowSize-positiveCount;let currentIndex=Math.round(-translation.value/viewSize);currentIndex=currentIndex<0?currentIndex%total+total:currentIndex;let newRanges;if(!loop){newRanges={negativeRange:[0+currentIndex-(windowSize-1),0+currentIndex],positiveRange:[0+currentIndex,currentIndex+(windowSize-1)]};}else{const negativeRange=[(currentIndex-negativeCount+total)%total,(currentIndex-1+total)%total];const positiveRange=[(currentIndex+total)%total,(currentIndex+positiveCount+total)%total];if(negativeRange[0]<total&&negativeRange[0]>negativeRange[1]){negativeRange[1]=total-1;positiveRange[0]=0;}if(positiveRange[0]>positiveRange[1]){negativeRange[1]=total-1;positiveRange[0]=0;}newRanges={negativeRange:negativeRange,positiveRange:positiveRange};}if(isArraysEqual((_cachedRanges$current=(_cachedRanges$current2=cachedRanges.current)===null||_cachedRanges$current2===void 0?void 0:_cachedRanges$current2.negativeRange)!==null&&_cachedRanges$current!==void 0?_cachedRanges$current:[],newRanges.negativeRange)&&isArraysEqual((_cachedRanges$current3=(_cachedRanges$current4=cachedRanges.current)===null||_cachedRanges$current4===void 0?void 0:_cachedRanges$current4.positiveRange)!==null&&_cachedRanges$current3!==void 0?_cachedRanges$current3:[],newRanges.positiveRange))return cachedRanges.current;cachedRanges.current=newRanges;return cachedRanges.current;}",
};
function isArraysEqual(arr, arg1) {
  closure_0 = arg1;
  return arr.length === arg1.length && arr.every((item, index) => item === positiveRange1[index]);
}
isArraysEqual.__closure = {};
isArraysEqual.__workletHash = 6222082561981;
isArraysEqual.__initData = {
  code: "function isArraysEqual_Pnpm_useVisibleRangesTsx2(a,b){if(a.length!==b.length)return false;return a.every(function(value,index){return value===b[index];});}",
};

export const useVisibleRanges = function useVisibleRanges(total) {
  total = total.total;
  let num = 0;
  if (undefined !== total) {
    num = total;
  }
  const viewSize = total.viewSize;
  const translation = total.translation;
  ({ windowSize, loop } = total);
  if (windowSize == null) {
    windowSize = num;
  }
  const tmp = translation(null);
  num(viewSize[1]);
  const fn = function s() {
    const rounded = Math.round(windowSize / 2);
    const diff = windowSize - rounded;
    const rounded1 = Math.round(-translation.value / viewSize);
    let sum = rounded1;
    if (rounded1 < 0) {
      sum = (rounded1 % num) + num;
    }
    if (loop) {
      const items = [(sum - diff + num) % num, (sum - 1 + num) % num];
      const items1 = [(sum + num) % num, (sum + rounded + num) % num];
      if (tmp8) {
        items[1] = tmp7 - 1;
        items1[0] = 0;
      }
      if (items1[0] > items1[1]) {
        items[1] = tmp7 - 1;
        items1[0] = 0;
      }
      let obj = { negativeRange: items, positiveRange: items1 };
      tmp8 = items[0] < num && items[0] > items[1];
    } else {
      obj = { negativeRange: null, positiveRange: null };
      const items2 = [sum - (windowSize - 1), sum];
      obj.negativeRange = items2;
      const items3 = [sum, sum + (windowSize - 1)];
      obj.positiveRange = items3;
    }
    const current = ref.current;
    let negativeRange;
    if (current != null) {
      negativeRange = current.negativeRange;
    }
    if (negativeRange == null) {
      negativeRange = [];
    }
    const negativeRange1 = obj.negativeRange;
    if (typeof isArraysEqual === "function") {
      let positiveRange1 = negativeRange1;
      let tmp11 =
        negativeRange.length === negativeRange1.length &&
        negativeRange.every((item, index) => item === positiveRange1[index]);
      if (tmp11) {
        const current2 = ref.current;
        let positiveRange;
        if (current2 != null) {
          positiveRange = current2.positiveRange;
        }
        if (positiveRange == null) {
          positiveRange = [];
        }
        positiveRange1 = obj.positiveRange;
        if (typeof isArraysEqual === "function") {
          tmp11 =
            positiveRange.length === positiveRange1.length &&
            positiveRange.every((item, index) => item === positiveRange1[index]);
          const tmp12 =
            positiveRange.length === positiveRange1.length &&
            positiveRange.every((item, index) => item === positiveRange1[index]);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (!tmp11) {
        ref.current = obj;
      }
      return ref.current;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  let obj = { windowSize, translation, viewSize, total: num, loop, isArraysEqual: windowSize, cachedRanges: tmp };
  fn.__closure = obj;
  fn.__workletHash = 627759706032;
  fn.__initData = loop;
  let items = [loop, num, windowSize, translation];
  return obj.useDerivedValue(fn, items);
};
