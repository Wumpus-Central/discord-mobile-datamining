// === Module 8029: noop ===

// Module 8029 (noop)
import _mod7036 from "module_7036" /* 7036 */;
import importAllResult from "noop" /* 19 */;
import { RefreshControl } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import obj132 from "obj132" /* 500 */;
import importDefaultResult from "module_4115" /* 4115 */;

require = fn;
let c3 = importAllResult;
let obj;
if (obj132.isAndroid()) {
  obj = { disabled: true };
}
function noop() {

}
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  obj = { maintainVisibleContentPosition: obj, ref };
  const merged = Object.assign(arg0);
  return jsx(_mod7036.FlashList, { maintainVisibleContentPosition: obj, ref });
});
let closure_8 = importDefaultResult.createAnimatedComponent(require("module_7036").FlashList);
const forwardRefResult1 = importAllResult.forwardRef((arg0, ref) => {
  obj = { maintainVisibleContentPosition: obj, ref };
  const merged = Object.assign(arg0);
  return <closure_8 maintainVisibleContentPosition={obj} ref={ref} />;
});
const forwardRefResult2 = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0, Object.create(null));
  obj = { ref, maintainVisibleContentPosition: obj, masonry: true };
  const merged1 = Object.assign(merged);
  return jsx(_mod7036.FlashList, { ref, maintainVisibleContentPosition: obj, masonry: true });
});
let closure_9 = importDefaultResult.createAnimatedComponent(require("module_7036").FlashList);
const importDefaultResult1 = importDefaultResult;
const forwardRefResult3 = importAllResult.forwardRef((arg0, ref) => {
  ({ preventNativeModalDismiss, refreshControl } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const items = [preventNativeModalDismiss, refreshControl];
  const memo = importAllResult.useMemo(() => {
    let tmp2 = refreshControl;
    if (null == refreshControl) {
      tmp2 = refreshControl;
      if (true === preventNativeModalDismiss) {
        obj = preventNativeModalDismiss(dependencyMap[3]);
        tmp2 = refreshControl;
        if (obj.isIOS()) {
          obj = { refreshing: false, onRefresh: null, tintColor: "transparent" };
          obj[1] = noop;
          tmp2 = <RefreshControl refreshing={false} onRefresh={null} tintColor="transparent" />;
        }
      }
    }
    return tmp2;
  }, items);
  obj = { ref, maintainVisibleContentPosition: obj };
  const merged1 = Object.assign(merged);
  obj.refreshControl = memo;
  return jsx(refreshControl(7035), { ref, maintainVisibleContentPosition: obj });
});
const result = obj132.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10063 in require("module_7036")) {
  arg5[key10063] = require("module_7036")[key10063];
  continue;
}
const forwardRefResult4 = importAllResult.forwardRef((arg0, ref) => {
  ({ preventNativeModalDismiss, refreshControl } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const items = [preventNativeModalDismiss, refreshControl];
  obj = { ref, maintainVisibleContentPosition: obj, masonry: true, renderScrollComponent: null };
  const memo = importAllResult.useMemo(() => {
    let tmp2 = refreshControl;
    if (null == refreshControl) {
      tmp2 = refreshControl;
      if (true === preventNativeModalDismiss) {
        obj = preventNativeModalDismiss(dependencyMap[3]);
        tmp2 = refreshControl;
        if (obj.isIOS()) {
          obj = { refreshing: false, onRefresh: null, tintColor: "transparent" };
          obj[1] = noop;
          tmp2 = <RefreshControl refreshing={false} onRefresh={null} tintColor="transparent" />;
        }
      }
    }
    return tmp2;
  }, items);
  obj[3] = preventNativeModalDismiss(6952).BottomSheetScrollView;
  const merged1 = Object.assign(merged);
  obj.refreshControl = memo;
  return <closure_9 ref={ref} maintainVisibleContentPosition={obj} masonry renderScrollComponent={null} />;
});

export const defaultMVCPConfig = obj;
export const FlashList = forwardRefResult;
export const AnimatedFlashList = forwardRefResult1;
export const MasonryFlashList = forwardRefResult2;
export const BottomSheetFlashList = forwardRefResult3;
export const BottomSheetMasonryFlashList = importAllResult.forwardRef((arg0, ref) => {
  ({ preventNativeModalDismiss, refreshControl } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const items = [preventNativeModalDismiss, refreshControl];
  obj = { ref, maintainVisibleContentPosition: obj, masonry: true, renderScrollComponent: null };
  const memo = importAllResult.useMemo(() => {
    let tmp2 = refreshControl;
    if (null == refreshControl) {
      tmp2 = refreshControl;
      if (true === preventNativeModalDismiss) {
        obj = preventNativeModalDismiss(dependencyMap[3]);
        tmp2 = refreshControl;
        if (obj.isIOS()) {
          obj = { refreshing: false, onRefresh: null, tintColor: "transparent" };
          obj[1] = noop;
          tmp2 = <RefreshControl refreshing={false} onRefresh={null} tintColor="transparent" />;
        }
      }
    }
    return tmp2;
  }, items);
  obj[3] = preventNativeModalDismiss(6952).BottomSheetScrollView;
  const merged1 = Object.assign(merged);
  obj.refreshControl = memo;
  return <closure_9 ref={ref} maintainVisibleContentPosition={obj} masonry renderScrollComponent={null} />;
});