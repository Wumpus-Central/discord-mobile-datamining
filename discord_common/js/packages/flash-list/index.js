// discord_common/js/packages/flash-list/index.js
import _mod5814 from "../../../../_runtime/metro/05814__.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { RefreshControl } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import set from "../../../../discord_app/utils/PlatformUtils.tsx";
import importDefaultResult from "../../../../discord_app/modules/reanimated/ReanimatedRexport.tsx";

require = arg1;
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
  return jsx(_mod5814.FlashList, { maintainVisibleContentPosition: obj, ref });
});
let closure_8 = importDefaultResult.createAnimatedComponent(require("../../../../_runtime/metro/05814__.js").FlashList);
const forwardRefResult1 = importAllResult.forwardRef((arg0, ref) => {
  obj = { maintainVisibleContentPosition: obj, ref };
  const merged = Object.assign(arg0);
  return <closure_8 maintainVisibleContentPosition={obj} ref={arg1} />;
});
const forwardRefResult2 = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0, Object.create(null));
  obj = { ref, maintainVisibleContentPosition: obj, masonry: true };
  const merged1 = Object.assign(merged);
  return jsx(_mod5814.FlashList, { ref, maintainVisibleContentPosition: obj, masonry: true });
});
let closure_9 = importDefaultResult.createAnimatedComponent(require("../../../../_runtime/metro/05814__.js").FlashList);
const importDefaultResult1 = importDefaultResult;
const forwardRefResult3 = importAllResult.forwardRef((arg0, ref) => {
  ({ preventNativeModalDismiss, refreshControl } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const items = [preventNativeModalDismiss, refreshControl];
  const memo = importAllResult.useMemo(() => {
    let tmp2 = refreshControl;
    if (null == refreshControl) {
      tmp2 = tmp;
      if (true === preventNativeModalDismiss) {
        obj = preventNativeModalDismiss(closure_1_2[3]);
        tmp2 = tmp;
        if (obj.isIOS()) {
          obj = { refreshing: false, onRefresh: null, tintColor: "transparent" };
          obj[1] = closure_1_7;
          tmp2 = closure_1_5(closure_1_4, obj);
        }
      }
    }
    return tmp2;
  }, items);
  obj = { ref, maintainVisibleContentPosition: obj };
  const merged1 = Object.assign(merged);
  obj.refreshControl = memo;
  return jsx(refreshControl(5813), { ref, maintainVisibleContentPosition: obj });
});
const result = set.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10063 in require("../../../../_runtime/metro/05814__.js")) {
  let tmp8 = key10063;
  arg5[key10063] = require("../../../../_runtime/metro/05814__.js")[key10063];
  continue;
}

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
      tmp2 = tmp;
      if (true === preventNativeModalDismiss) {
        obj = preventNativeModalDismiss(closure_1_2[3]);
        tmp2 = tmp;
        if (obj.isIOS()) {
          obj = { refreshing: false, onRefresh: null, tintColor: "transparent" };
          obj[1] = closure_1_7;
          tmp2 = closure_1_5(closure_1_4, obj);
        }
      }
    }
    return tmp2;
  }, items);
  obj[3] = preventNativeModalDismiss(5589).BottomSheetScrollView;
  const merged1 = Object.assign(merged);
  obj.refreshControl = memo;
  return <closure_9 ref={arg1} maintainVisibleContentPosition={obj} masonry renderScrollComponent={null} />;
});