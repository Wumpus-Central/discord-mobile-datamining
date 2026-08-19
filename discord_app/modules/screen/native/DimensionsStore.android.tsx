// === Module 1495: getDimensionsStoreStateForEntry ===

// Module 1495 (getDimensionsStoreStateForEntry)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import batchUpdates from "batchUpdates" /* 705 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1629 */;
import APP_ENTRY_KEYS from "APP_ENTRY_KEYS" /* 1642 */;
import readWindowSizeForAppEntry from "readWindowSizeForAppEntry" /* 1894 */;
import keys from "keys" /* 644 */;
import importDefaultResult from "subscribeToKeyboardUIStore" /* 1496 */;
import importDefaultResult1 from "module_1630" /* 1630 */;

function getDimensionsStoreStateForEntry(appEntryKey) {
  const size = {};
  obj = Dimensions;
  const merged = Object.assign(Dimensions.get("window"));
  obj1 = readWindowSizeForAppEntry;
  const merged1 = Object.assign(obj1.readWindowSizeForAppEntry(appEntryKey));
  let obj2 = readWindowSizeForAppEntry;
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
  let tmp2Result = tmp2(1629);
  const rect = tmp2Result.getSafeAreaInsets(appEntryKey);
  let tmp8 = height;
  let tmp9 = width2;
  if (height === width) {
    tmp8 = width2;
    tmp9 = height;
  }
  const bound = Math.min(width + rect.left + rect.right, tmp9);
  const sum = size.height + rect.top + rect.bottom;
  tmp2Result = tmp2(1895);
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
  const rect2 = useSafeAreaInsets.getSafeAreaInsets(appEntryKey);
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
  obj = {};
  let flag = null != arg0;
  const iter = APP_ENTRY_KEYS.APP_ENTRY_KEYS[Symbol.iterator]();
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
const Dimensions = get_ActivityIndicator.Dimensions;
let obj = keys.create(() => getDimensionsStoreState(undefined));
const subscription = importDefaultResult1.subscribe(() => {
  batchUpdates.batchUpdates(() => state.setState((arg0) => callback(arg0)));
});
importDefaultResult(() => {
  batchUpdates.batchUpdates(() => state.setState((arg0) => callback(arg0)));
});
const listener = Dimensions.addEventListener("change", () => {
  batchUpdates.batchUpdates(() => state.setState((arg0) => callback(arg0)));
});
const result = set.fileFinishedImporting("modules/screen/native/DimensionsStore.android.tsx");

export default obj;