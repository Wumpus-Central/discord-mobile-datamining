// === Module 10493: react ===

// Module 10493 (react)
import convertToSharedIndex from "convertToSharedIndex" /* 10494 */;
import react_mod from "react" /* 19 */;

let react = react_mod;

export const useInitProps = function useInitProps(defaultIndex) {
  let height;
  let width;
  defaultIndex = defaultIndex.defaultIndex;
  let num = 0;
  if (undefined !== defaultIndex) {
    num = defaultIndex;
  }
  let data = defaultIndex.data;
  if (undefined === data) {
    data = [];
  }
  const loop = tmp;
  const autoPlayInterval = defaultIndex.autoPlayInterval;
  let num2 = 1000;
  if (undefined !== autoPlayInterval) {
    num2 = autoPlayInterval;
  }
  const scrollAnimationDuration = defaultIndex.scrollAnimationDuration;
  let num3 = 500;
  if (undefined !== scrollAnimationDuration) {
    num3 = scrollAnimationDuration;
  }
  let style = defaultIndex.style;
  if (undefined === style) {
    style = {};
  }
  const autoFillData = defaultIndex.autoFillData;
  react = tmp2;
  const enabled = defaultIndex.enabled;
  const pagingEnabled = defaultIndex.pagingEnabled;
  const overscrollEnabled = defaultIndex.overscrollEnabled;
  let snapEnabled = defaultIndex.snapEnabled;
  const tmp3 = undefined === enabled || enabled;
  const tmp4 = undefined === pagingEnabled || pagingEnabled;
  const tmp5 = undefined === overscrollEnabled || overscrollEnabled;
  if (undefined === snapEnabled) {
    let flag = defaultIndex.enableSnap;
    if (flag == null) {
      flag = true;
    }
    snapEnabled = flag;
  }
  ({ width, height } = defaultIndex);
  const _Math = Math;
  if (!width) {
    width = 0;
  }
  const _Math2 = Math;
  const round2 = Math.round;
  const roundResult = round(width);
  if (!height) {
    height = 0;
  }
  const items = [data, undefined === loop || loop, undefined === autoFillData || autoFillData];
  const round2Result = round2(height);
  const bound = Math.max(num2, 0);
  const memo = react.useMemo(() => {
    const obj = convertToSharedIndex;
    const obj2 = { loop, autoFillData, data, dataLength: data.length };
    return obj.computedFillDataWithAutoFillData(obj2);
  }, items);
  let tmp10 = "vertical-stack" !== defaultIndex.mode;
  const length2 = data.length;
  if (tmp10) {
    tmp10 = "horizontal-stack" !== defaultIndex.mode;
  }
  if (!tmp10) {
    if (!defaultIndex.modeConfig) {
      defaultIndex.modeConfig = {};
    }
    const modeConfig2 = defaultIndex.modeConfig;
    let showLength;
    const modeConfig = defaultIndex.modeConfig;
    if (modeConfig2 != null) {
      showLength = modeConfig2.showLength;
    }
    if (showLength == null) {
      showLength = length - 1;
    }
    modeConfig.showLength = showLength;
  }
  let obj = { defaultIndex: num, autoFillData: undefined === autoFillData || autoFillData, data: memo, dataLength: memo.length, rawData: data, rawDataLength: length2, loop: undefined === loop || loop, enabled: tmp3, autoPlayInterval: bound, scrollAnimationDuration: num3, style, pagingEnabled: tmp4, snapEnabled, overscrollEnabled: tmp5, width: roundResult, height: round2Result };
  const merged = Object.assign(defaultIndex);
  return obj;
};