// === Module 9003: ? ===

// Module 9003
import PlatformUtils2 from "PlatformUtils" /* 1363 */;
import _mod6953 from "module_6953" /* 6953 */;
import noop_mod from "module_19" /* 19 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4373 */;

require = fn;
let noop = noop_mod;
const RefreshControl = fn(17).RefreshControl;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1363);
let defaultMVCPConfig;
if (PlatformUtils.isAndroid()) {
  defaultMVCPConfig = { disabled: true };
}
noop = function noop() {

};
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_8 = ReanimatedRexport.createAnimatedComponent(fn(6953).FlashList);
const forwardRefResult = noop.forwardRef((arg0, ref) => {
  maintainVisibleContentPosition = { maintainVisibleContentPosition, ref };
  const merged = Object.assign(arg0);
  return jsx(_mod6953.FlashList, { maintainVisibleContentPosition, ref });
});
const forwardRefResult1 = noop.forwardRef((arg0, ref) => {
  maintainVisibleContentPosition = { maintainVisibleContentPosition, ref };
  const merged = Object.assign(arg0);
  return <closure_8 maintainVisibleContentPosition={maintainVisibleContentPosition} ref={ref} />;
});
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_9 = ReanimatedRexport.createAnimatedComponent(fn(6953).FlashList);
const forwardRefResult2 = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0 }));
  maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, masonry: true };
  const merged1 = Object.assign(merged);
  return jsx(_mod6953.FlashList, { ref, maintainVisibleContentPosition, masonry: true });
});
const forwardRefResult3 = noop.forwardRef((arg0, ref) => {
  ({ preventNativeModalDismiss, refreshControl } = arg0);
  const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0 }));
  const items = [preventNativeModalDismiss, refreshControl];
  const memo = noop.useMemo(() => {
    let tmp2 = refreshControl;
    if (null == refreshControl) {
      tmp2 = refreshControl;
      if (true === preventNativeModalDismiss) {
        tmp2 = refreshControl;
        if (obj.isIOS()) {
          const obj2 = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
          tmp2 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
        }
        obj = PlatformUtils2;
      }
    }
    return tmp2;
  }, items);
  maintainVisibleContentPosition = { ref, maintainVisibleContentPosition };
  const merged1 = Object.assign(merged);
  maintainVisibleContentPosition.refreshControl = memo;
  return jsx(refreshControl(6952), { ref, maintainVisibleContentPosition });
});
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10063 in require("module_6953")) {
  arg5[key10063] = require("module_6953")[key10063];
  continue;
}
const forwardRefResult4 = noop.forwardRef((arg0, ref) => {
  ({ preventNativeModalDismiss, refreshControl } = arg0);
  const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0 }));
  const items = [preventNativeModalDismiss, refreshControl];
  maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, masonry: true, renderScrollComponent: null };
  const memo = noop.useMemo(() => {
    let tmp2 = refreshControl;
    if (null == refreshControl) {
      tmp2 = refreshControl;
      if (true === preventNativeModalDismiss) {
        tmp2 = refreshControl;
        if (obj.isIOS()) {
          const obj2 = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
          tmp2 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
        }
        obj = PlatformUtils2;
      }
    }
    return tmp2;
  }, items);
  maintainVisibleContentPosition.renderScrollComponent = preventNativeModalDismiss(6728).BottomSheetScrollView;
  const merged1 = Object.assign(merged);
  maintainVisibleContentPosition.refreshControl = memo;
  return <closure_9 ref={ref} maintainVisibleContentPosition={maintainVisibleContentPosition} masonry renderScrollComponent={null} />;
});

export { defaultMVCPConfig };
export const FlashList = forwardRefResult;
export const AnimatedFlashList = forwardRefResult1;
export const MasonryFlashList = forwardRefResult2;
export const BottomSheetFlashList = forwardRefResult3;
export const BottomSheetMasonryFlashList = noop.forwardRef((arg0, ref) => {
  ({ preventNativeModalDismiss, refreshControl } = arg0);
  const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0 }));
  const items = [preventNativeModalDismiss, refreshControl];
  maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, masonry: true, renderScrollComponent: null };
  const memo = noop.useMemo(() => {
    let tmp2 = refreshControl;
    if (null == refreshControl) {
      tmp2 = refreshControl;
      if (true === preventNativeModalDismiss) {
        tmp2 = refreshControl;
        if (obj.isIOS()) {
          const obj2 = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
          tmp2 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
        }
        obj = PlatformUtils2;
      }
    }
    return tmp2;
  }, items);
  maintainVisibleContentPosition.renderScrollComponent = preventNativeModalDismiss(6728).BottomSheetScrollView;
  const merged1 = Object.assign(merged);
  maintainVisibleContentPosition.refreshControl = memo;
  return <closure_9 ref={ref} maintainVisibleContentPosition={maintainVisibleContentPosition} masonry renderScrollComponent={null} />;
});