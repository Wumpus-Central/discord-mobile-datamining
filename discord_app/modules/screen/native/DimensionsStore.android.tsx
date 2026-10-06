// === Module 1485: DimensionsStore ===

// Module 1485 (DimensionsStore)
import react_native from "react-native" /* 17 */;
import react_native2 from "react-native" /* 1259 */;
import useSafeAreaInsets from "useSafeAreaInsets" /* 1618 */;
import AppEntryKey from "AppEntryKey" /* 1631 */;
import react_native3 from "react-native" /* 1883 */;
import useSystemKeyboardHeight from "useSystemKeyboardHeight" /* 1884 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1486 */;
import module_570 from "module_570" /* 570 */;
import SafeAreaStore from "SafeAreaStore" /* 1619 */;
import size_mod from "module_2" /* 2 */;

const f84261 = () => state.setState((arg0) => closure_1_4(arg0));
function getDimensionsStoreStateForEntry(appEntryKey, arg1) {
  let height2;
  let height4;
  let width2;
  let width4;
  size = {};
  const merged = Object.assign(Dimensions.get("window"));
  const obj2 = react_native3;
  const merged1 = Object.assign(obj2.readWindowSizeForAppEntry(appEntryKey));
  const obj3 = react_native3;
  let size2 = obj3.readScreenSizeForAppEntry(appEntryKey);
  if (size2 == null) {
    size2 = Dimensions.get("screen");
  }
  let obj5 = arg1;
  const fontScale = size.fontScale;
  let windowDimensions;
  const tmp5 = size2.width > size2.height;
  if (arg1 != null) {
    windowDimensions = obj5.windowDimensions;
  }
  let prop;
  if (obj5 != null) {
    prop = obj5.windowDimensionsIgnoringKeyboard;
  }
  const width = size.width;
  ({ width: width2, height: height2 } = size2);
  const height = size.height;
  const tmp2Result = useSafeAreaInsets;
  const rect = tmp2Result.getSafeAreaInsets(appEntryKey);
  let tmp8 = height2;
  let tmp9 = width2;
  if (height2 === width) {
    tmp8 = width2;
    tmp9 = height2;
  }
  const bound = Math.min(width + rect.left + rect.right, tmp9);
  const sum = height + rect.top + rect.bottom;
  const obj4 = { appEntryKey };
  let width1;
  const tmp2Result3 = useSystemKeyboardHeight;
  const minResult = min(sum - tmp2Result3.getSystemKeyboardHeight(obj4), tmp8);
  if (windowDimensions != null) {
    width1 = windowDimensions.width;
  }
  if (width1 !== bound) {
    const size1 = { width: bound, height: minResult };
    windowDimensions = size1;
  }
  const width3 = size.width;
  ({ width: width4, height: height4 } = size2);
  const height3 = size.height;
  const tmp2Result4 = useSafeAreaInsets;
  const rect2 = tmp2Result4.getSafeAreaInsets(appEntryKey);
  let tmp14 = height4;
  let tmp15 = width4;
  if (height4 === width3) {
    tmp14 = width4;
    tmp15 = height4;
  }
  const bound1 = Math.min(width3 + rect2.left + rect2.right, tmp15);
  const bound2 = Math.min(height3 + rect2.top + rect2.bottom, tmp14);
  let width5;
  if (prop != null) {
    width5 = prop.width;
  }
  if (width5 !== bound1) {
    const size3 = { width: bound1, height: bound2 };
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
    tmp = { byAppEntry };
    const obj2 = { byAppEntry };
  }
  return tmp;
}
const Dimensions = react_native.Dimensions;
let byAppEntry = module_570.create(() => getDimensionsStoreState(undefined));
const subscription = SafeAreaStore.subscribe(() => {
  const obj = react_native2;
  obj.batchUpdates(f84261);
});
subscribeToKeyboardUIStore(() => {
  const obj = react_native2;
  obj.batchUpdates(f84261);
});
const listener = Dimensions.addEventListener("change", () => {
  let state;
  const obj = react_native2;
  obj.batchUpdates(f84261);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/screen/native/DimensionsStore.android.tsx");

export default byAppEntry;