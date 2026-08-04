// discord_app/modules/screen/native/DimensionsStore.android.tsx
import { Dimensions } from "get ActivityIndicator";
import keys from "keys";
import importDefaultResult from "subscribeToKeyboardUIStore";
import importDefaultResult1 from "module_1582";

function getDimensionsStoreStateForEntry(appEntryKey) {
  let height;
  let height2;
  let width2;
  let width4;
  const size = {};
  let obj = Dimensions;
  const merged = Object.assign(Dimensions.get("window"));
  let obj1 = require(1846) /* readWindowSizeForAppEntry */;
  const merged1 = Object.assign(obj1.readWindowSizeForAppEntry(appEntryKey));
  let obj2 = require(1846) /* readWindowSizeForAppEntry */;
  let size2 = obj2.readScreenSizeForAppEntry(appEntryKey);
  if (size2 == null) {
    size2 = obj.get("screen");
  }
  obj2 = arg1;
  const fontScale = size.fontScale;
  let windowDimensions;
  if (arg1 != null) {
    windowDimensions = obj2.windowDimensions;
  }
  let prop;
  if (obj2 != null) {
    prop = obj2.windowDimensionsIgnoringKeyboard;
  }
  let width = size.width;
  ({ width: width2, height } = size2);
  let tmp2Result = tmp2(1581);
  const rect = tmp2Result.getSafeAreaInsets(appEntryKey);
  let tmp8 = height;
  let tmp9 = width2;
  if (height === width) {
    tmp8 = width2;
    tmp9 = height;
  }
  const bound = Math.min(width + rect.left + rect.right, tmp9);
  const sum = size.height + rect.top + rect.bottom;
  tmp2Result = tmp2(1847);
  obj = { appEntryKey };
  const bound1 = Math.min(sum - tmp2Result.getSystemKeyboardHeight(obj), tmp8);
  width = undefined;
  if (windowDimensions != null) {
    width = windowDimensions.width;
  }
  if (width !== bound) {
    obj = { width: null, height: null };
    obj[0] = bound;
    obj[1] = bound1;
    windowDimensions = obj;
  }
  const width3 = size.width;
  ({ width: width4, height: height2 } = size2);
  const rect2 = require(1581) /* useSafeAreaInsets */.getSafeAreaInsets(appEntryKey);
  let tmp14 = height2;
  let tmp15 = width4;
  if (height2 === width3) {
    tmp14 = width4;
    tmp15 = height2;
  }
  const bound2 = Math.min(width3 + rect2.left + rect2.right, tmp15);
  const bound3 = Math.min(size.height + rect2.top + rect2.bottom, tmp14);
  let width1;
  if (prop != null) {
    width1 = prop.width;
  }
  if (width1 !== bound2) {
    obj1 = { width: null, height: null };
    obj1[0] = bound2;
    obj1[1] = bound3;
    prop = obj1;
  }
  let windowDimensions1;
  if (obj2 != null) {
    windowDimensions1 = obj2.windowDimensions;
  }
  if (windowDimensions1 === windowDimensions) {
    if (obj2.windowDimensionsIgnoringKeyboard === prop) {
      return obj2;
    }
  }
  obj2 = { fontScale, screenIsLandscape: tmp5, windowDimensions, windowDimensionsIgnoringKeyboard: prop };
}
function getDimensionsStoreState(arg0) {
  let tmp = arg0;
  let obj = {};
  let flag = null != arg0;
  const iter = require(1594) /* APP_ENTRY_KEYS */.APP_ENTRY_KEYS[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let tmp5;
    let tmp4 = getDimensionsStoreStateForEntry;
    if (tmp != null) {
      let tmp6 = nextResult;
      tmp5 = tmp.byAppEntry[tmp3];
    }
    let tmp4Result = tmp4(nextResult, tmp5);
    let tmp9 = nextResult;
    obj[tmp3] = tmp4Result;
    let tmp10;
    let tmp8 = tmp4Result;
    if (tmp != null) {
      let tmp11 = nextResult;
      tmp10 = tmp.byAppEntry[tmp3];
    }
    let tmp12 = tmp4Result;
    if (tmp10 !== tmp8) {
      flag = false;
    }
    continue;
  }
  if (!flag) {
    obj = { byAppEntry: null };
    obj[0] = obj;
    tmp = obj;
  }
  return tmp;
}
let obj = keys.create(() => getDimensionsStoreState(undefined));
const subscription = require("module_1582").subscribe(() => {
  require(705) /* batchUpdates */.batchUpdates(() => state.setState((arg0) => callback(arg0)));
});
importDefaultResult(() => {
  require(705) /* batchUpdates */.batchUpdates(() => state.setState((arg0) => callback(arg0)));
});
const listener = Dimensions.addEventListener("change", () => {
  require(705) /* batchUpdates */.batchUpdates(() => state.setState((arg0) => callback(arg0)));
});
const result = require("readWindowSizeForAppEntry").fileFinishedImporting("modules/screen/native/DimensionsStore.android.tsx");

export default obj;