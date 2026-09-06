// _runtime/metro/10759__.js
import SINGLE_ITEM from "../10760_SINGLE_ITEM.js";
import noop from "00019__.js";

require = arg1;

export const useInitProps = function useInitProps(defaultIndex) {
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
  noop = tmp2;
  const enabled = defaultIndex.enabled;
  const pagingEnabled = defaultIndex.pagingEnabled;
  const overscrollEnabled = defaultIndex.overscrollEnabled;
  let snapEnabled = defaultIndex.snapEnabled;
  if (undefined === snapEnabled) {
    let flag = defaultIndex.enableSnap;
    if (flag == null) {
      flag = true;
    }
    snapEnabled = flag;
  }
  ({ width, height } = defaultIndex);
  if (!width) {
    width = 0;
  }
  const rounded = Math.round(width);
  if (!height) {
    height = 0;
  }
  const rounded1 = Math.round(height);
  const items = [data, undefined === loop || loop, undefined === autoFillData || autoFillData];
  const bound = Math.max(num2, 0);
  const memo = noop.useMemo(() => {
    const obj = { loop, autoFillData, data, dataLength: data.length };
    return obj.computedFillDataWithAutoFillData(obj);
  }, items);
  let tmp10 = "vertical-stack" !== defaultIndex.mode;
  if (tmp10) {
    tmp10 = "horizontal-stack" !== defaultIndex.mode;
  }
  if (!tmp10) {
    if (!defaultIndex.modeConfig) {
      defaultIndex.modeConfig = {};
    }
    const modeConfig = defaultIndex.modeConfig;
    let showLength;
    if (modeConfig != null) {
      showLength = modeConfig.showLength;
    }
    if (showLength == null) {
      showLength = length - 1;
    }
    defaultIndex.modeConfig.showLength = showLength;
  }
  let obj = {};
  const merged = Object.assign(defaultIndex);
  obj.defaultIndex = num;
  obj.autoFillData = undefined === autoFillData || autoFillData;
  obj.data = memo;
  obj.dataLength = memo.length;
  obj.rawData = data;
  obj.rawDataLength = data.length;
  obj.loop = undefined === loop || loop;
  obj.enabled = undefined === enabled || enabled;
  obj.autoPlayInterval = bound;
  obj.scrollAnimationDuration = num3;
  obj.style = style;
  obj.pagingEnabled = undefined === pagingEnabled || pagingEnabled;
  obj.snapEnabled = snapEnabled;
  obj.overscrollEnabled = undefined === overscrollEnabled || overscrollEnabled;
  obj.width = rounded;
  obj.height = rounded1;
  return obj;
};
