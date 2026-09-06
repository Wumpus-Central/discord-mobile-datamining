// discord_common/js/packages/flash-list/index.js
import PlatformUtils2 from "../../../../discord_app/utils/PlatformUtils.tsx";
import _mod6852 from "../../../../_runtime/metro/06852__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../../discord_app/modules/reanimated/ReanimatedRexport.tsx";

require = fn;
const RefreshControl = fn(17).RefreshControl;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1115);
let defaultMVCPConfig;
if (PlatformUtils.isAndroid()) {
  defaultMVCPConfig = { disabled: true };
}
noop = function noop() {};
let closure_8 = ReanimatedRexport.createAnimatedComponent(fn(6852).FlashList);
const forwardRefResult = noop.forwardRef((arg0, ref) => {
  maintainVisibleContentPosition = { maintainVisibleContentPosition, ref };
  const merged = Object.assign(arg0);
  return jsx(_mod6852.FlashList, { maintainVisibleContentPosition, ref });
});
const forwardRefResult1 = noop.forwardRef((arg0, ref) => {
  maintainVisibleContentPosition = { maintainVisibleContentPosition, ref };
  const merged = Object.assign(arg0);
  return <closure_8 maintainVisibleContentPosition={maintainVisibleContentPosition} ref={ref} />;
});
let closure_9 = ReanimatedRexport.createAnimatedComponent(fn(6852).FlashList);
const forwardRefResult2 = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0, Object.assign({ preventNativeModalDismiss: 0 }));
  maintainVisibleContentPosition = { ref, maintainVisibleContentPosition, masonry: true };
  const merged1 = Object.assign(merged);
  return jsx(_mod6852.FlashList, { ref, maintainVisibleContentPosition, masonry: true });
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
        obj = PlatformUtils2;
        tmp2 = refreshControl;
        if (obj.isIOS()) {
          obj = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
          tmp2 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
        }
      }
    }
    return tmp2;
  }, items);
  maintainVisibleContentPosition = { ref, maintainVisibleContentPosition };
  const merged1 = Object.assign(merged);
  maintainVisibleContentPosition.refreshControl = memo;
  return jsx(refreshControl(6851), { ref, maintainVisibleContentPosition });
});
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10063 in require("../../../../_runtime/metro/06852__.js")) {
  arg5[key10063] = require("../../../../_runtime/metro/06852__.js")[key10063];
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
        obj = PlatformUtils2;
        tmp2 = refreshControl;
        if (obj.isIOS()) {
          obj = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
          tmp2 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
        }
      }
    }
    return tmp2;
  }, items);
  maintainVisibleContentPosition.renderScrollComponent = preventNativeModalDismiss(6627).BottomSheetScrollView;
  const merged1 = Object.assign(merged);
  maintainVisibleContentPosition.refreshControl = memo;
  return (
    <closure_9
      ref={ref}
      maintainVisibleContentPosition={maintainVisibleContentPosition}
      masonry
      renderScrollComponent={null}
    />
  );
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
        obj = PlatformUtils2;
        tmp2 = refreshControl;
        if (obj.isIOS()) {
          obj = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
          tmp2 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
        }
      }
    }
    return tmp2;
  }, items);
  maintainVisibleContentPosition.renderScrollComponent = preventNativeModalDismiss(6627).BottomSheetScrollView;
  const merged1 = Object.assign(merged);
  maintainVisibleContentPosition.refreshControl = memo;
  return (
    <closure_9
      ref={ref}
      maintainVisibleContentPosition={maintainVisibleContentPosition}
      masonry
      renderScrollComponent={null}
    />
  );
});
