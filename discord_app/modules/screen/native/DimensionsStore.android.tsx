// === Module 1480: DimensionsStore ===

// Module 1480 (DimensionsStore)
import _mod17 from "module_17" /* 17 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1248 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1613 */;
import AppEntryKey from "AppEntryKey" /* 1626 */;
import readAppEntryWindowMetrics from "readAppEntryWindowMetrics" /* 1878 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1879 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1481 */;
import module_560 from "module_560" /* 560 */;
import SafeAreaStore from "SafeAreaStore" /* 1614 */;
import size from "module_2" /* 2 */;

function getDimensionsStoreStateForEntry(appEntryKey, arg1) {
  const size = {};
  const merged = Object.assign(Dimensions.get("window"));
  const merged1 = Object.assign(readAppEntryWindowMetrics.readWindowSizeForAppEntry(appEntryKey));
  let size2 = readAppEntryWindowMetrics.readScreenSizeForAppEntry(appEntryKey);
  if (size2 == null) {
    size2 = Dimensions.get("screen");
  }
  let obj5 = arg1;
  const fontScale = size.fontScale;
  let windowDimensions;
  if (arg1 != null) {
    windowDimensions = obj5.windowDimensions;
  }
  let prop;
  if (obj5 != null) {
    prop = obj5.windowDimensionsIgnoringKeyboard;
  }
  const width = size.width;
  ({ width: width2, height } = size2);
  const tmp5 = size2.width > size2.height;
  const rect = useSafeAreaInsets.getSafeAreaInsets(appEntryKey);
  let tmp8 = height;
  let tmp9 = width2;
  if (height === width) {
    tmp8 = width2;
    tmp9 = height;
  }
  const bound = Math.min(width + rect.left + rect.right, tmp9);
  const sum = size.height + rect.top + rect.bottom;
  const tmp2Result = useSafeAreaInsets;
  const bound1 = Math.min(sum - useSystemKeyboardHeight.getSystemKeyboardHeight({ appEntryKey }), tmp8);
  let width1;
  if (windowDimensions != null) {
    width1 = windowDimensions.width;
  }
  if (width1 !== bound) {
    const size1 = { width: bound, height: bound1 };
    windowDimensions = size1;
  }
  const width3 = size.width;
  ({ width: width4, height: height2 } = size2);
  const obj4 = { appEntryKey };
  const tmp2Result3 = useSystemKeyboardHeight;
  const rect2 = useSafeAreaInsets.getSafeAreaInsets(appEntryKey);
  let tmp14 = height2;
  let tmp15 = width4;
  if (height2 === width3) {
    tmp14 = width4;
    tmp15 = height2;
  }
  const bound2 = Math.min(width3 + rect2.left + rect2.right, tmp15);
  const bound3 = Math.min(size.height + rect2.top + rect2.bottom, tmp14);
  let width5;
  if (prop != null) {
    width5 = prop.width;
  }
  if (width5 !== bound2) {
    const size3 = { width: bound2, height: bound3 };
    prop = size3;
  }
  let windowDimensions1;
  if (obj5 != null) {
    windowDimensions1 = obj5.windowDimensions;
  }
  if (windowDimensions1 === windowDimensions) {
    if (obj5.windowDimensionsIgnoringKeyboard === prop) {
      return obj5;
    }
  }
  obj5 = { fontScale, screenIsLandscape: tmp5, windowDimensions, windowDimensionsIgnoringKeyboard: prop };
  const tmp2Result4 = useSafeAreaInsets;
}
function getDimensionsStoreState(arg0) {
  let tmp = arg0;
  byAppEntry = {};
  let flag = null != arg0;
  const iter = AppEntryKey.APP_ENTRY_KEYS[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let tmp5;
    if (tmp != null) {
      tmp5 = tmp.byAppEntry[tmp3];
    }
    let tmp4Result = getDimensionsStoreStateForEntry(nextResult, tmp5);
    byAppEntry[tmp3] = tmp4Result;
    let tmp10;
    let tmp8 = tmp4Result;
    if (tmp != null) {
      tmp10 = tmp.byAppEntry[tmp3];
    }
    if (tmp10 !== tmp8) {
      flag = false;
    }
    continue;
  }
  if (!flag) {
    const obj2 = { byAppEntry };
    tmp = obj2;
  }
  return tmp;
}
const Dimensions = _mod17.Dimensions;
let byAppEntry = module_560.create(() => getDimensionsStoreState(undefined));
const subscription = SafeAreaStore.subscribe(() => {
  ReactBatchUpdates.batchUpdates(() => state.setState((arg0) => closure_1_4(arg0)));
});
subscribeToKeyboardUIStore(() => {
  ReactBatchUpdates.batchUpdates(() => state.setState((arg0) => closure_1_4(arg0)));
});
const listener = Dimensions.addEventListener("change", () => {
  ReactBatchUpdates.batchUpdates(() => state.setState((arg0) => closure_1_4(arg0)));
});
const result = size.fileFinishedImporting("modules/screen/native/DimensionsStore.android.tsx");

export default byAppEntry;