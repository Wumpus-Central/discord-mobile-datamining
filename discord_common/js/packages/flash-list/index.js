// discord_common/js/packages/flash-list/index.js
import importAllResult from "noop";
import { RefreshControl } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import set from "set";
import importDefaultResult from "module_4146";
import importDefaultResult1 from "module_4146";
import set from "jsxProd";
import { 05506__ } from "../../../../_runtime/metro/05506__.js";

const require = arg1;
let c3 = importAllResult;
let obj;
if (set.isAndroid()) {
  obj = { disabled: true };
}
function noop() {

}
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  obj = { maintainVisibleContentPosition: obj, ref };
  const merged = Object.assign(arg0);
  return jsx(05506__.FlashList, { maintainVisibleContentPosition: obj, ref });
});
let closure_8 = require("module_4146").createAnimatedComponent(require("module_5506").FlashList);
const forwardRefResult1 = importAllResult.forwardRef((arg0, ref) => {
  obj = { maintainVisibleContentPosition: obj, ref };
  const merged = Object.assign(arg0);
  return <closure_8 maintainVisibleContentPosition={obj} ref={arg1} />;
});
const forwardRefResult2 = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0, Object.create(null));
  obj = { ref, maintainVisibleContentPosition: obj, masonry: true };
  const merged1 = Object.assign(merged);
  return jsx(05506__.FlashList, { ref, maintainVisibleContentPosition: obj, masonry: true });
});
let closure_9 = require("module_4146").createAnimatedComponent(require("module_5506").FlashList);
const forwardRefResult3 = importAllResult.forwardRef((arg0, ref) => {
  let preventNativeModalDismiss;
  let refreshControl;
  ({ preventNativeModalDismiss, refreshControl } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const items = [preventNativeModalDismiss, refreshControl];
  const memo = importAllResult.useMemo(() => {
    let tmp2 = refreshControl;
    if (null == refreshControl) {
      tmp2 = tmp;
      if (true === preventNativeModalDismiss) {
        let obj = preventNativeModalDismiss(outer1_2[3]);
        tmp2 = tmp;
        if (obj.isIOS()) {
          obj = { refreshing: false, onRefresh: null, tintColor: "transparent" };
          obj[1] = outer1_7;
          tmp2 = outer1_5(outer1_4, obj);
        }
      }
    }
    return tmp2;
  }, items);
  obj = { ref, maintainVisibleContentPosition: obj };
  const merged1 = Object.assign(merged);
  obj.refreshControl = memo;
  return jsx(refreshControl(5505), { ref, maintainVisibleContentPosition: obj });
});
const result = set.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10063 in require("module_5506")) {
  let tmp8 = key10063;
  arg5[key10063] = require("module_5506")[key10063];
  continue;
}

export const defaultMVCPConfig = obj;
export const FlashList = forwardRefResult;
export const AnimatedFlashList = forwardRefResult1;
export const MasonryFlashList = forwardRefResult2;
export const BottomSheetFlashList = forwardRefResult3;
export const BottomSheetMasonryFlashList = importAllResult.forwardRef((arg0, ref) => {
  let preventNativeModalDismiss;
  let refreshControl;
  ({ preventNativeModalDismiss, refreshControl } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const items = [preventNativeModalDismiss, refreshControl];
  obj = { ref, maintainVisibleContentPosition: obj, masonry: true, renderScrollComponent: null };
  const memo = importAllResult.useMemo(() => {
    let tmp2 = refreshControl;
    if (null == refreshControl) {
      tmp2 = tmp;
      if (true === preventNativeModalDismiss) {
        let obj = preventNativeModalDismiss(outer1_2[3]);
        tmp2 = tmp;
        if (obj.isIOS()) {
          obj = { refreshing: false, onRefresh: null, tintColor: "transparent" };
          obj[1] = outer1_7;
          tmp2 = outer1_5(outer1_4, obj);
        }
      }
    }
    return tmp2;
  }, items);
  obj[3] = preventNativeModalDismiss(5340).BottomSheetScrollView;
  const merged1 = Object.assign(merged);
  obj.refreshControl = memo;
  return <closure_9 ref={arg1} maintainVisibleContentPosition={obj} masonry renderScrollComponent={null} />;
});