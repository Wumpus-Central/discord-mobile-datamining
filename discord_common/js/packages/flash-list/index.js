// discord_common/js/packages/flash-list/index.js
import PlatformUtils2 from "../../../../discord_app/utils/PlatformUtils.tsx";
import _mod5623 from "../../../../_runtime/metro/05623__.js";
import noop_mod from "../../../../_runtime/metro/00019__.js";
import module_1652_mod from "../../../../_runtime/metro/01652__.js";

require = fn;
let noop = noop_mod;
const RefreshControl = fn(17).RefreshControl;
const jsx = fn(21).jsx;
const PlatformUtils = fn(1377);
let obj2;
if (PlatformUtils.isAndroid()) {
  obj2 = { disabled: true };
}
noop = function noop() {

};
let module_1652 = module_1652_mod;
let closure_8 = module_1652.createAnimatedComponent(fn(5623).FlashList);
let module_1652 = module_1652_mod;
let closure_9 = module_1652.createAnimatedComponent(fn(5623).FlashList);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10048 in require("../../../../_runtime/metro/05623__.js")) {
  arg5[key10048] = require("../../../../_runtime/metro/05623__.js")[key10048];
  continue;
}

export const defaultMVCPConfig = obj2;
export (ref) => {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(_mod5623.FlashList, { maintainVisibleContentPosition: obj2, ref: ref.ref });
}
export (ref) => {
  const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
  return <closure_8 maintainVisibleContentPosition={obj2} ref={ref.ref} />;
}
export (ref) => {
  const merged = Object.assign(ref, Object.assign({ preventNativeModalDismiss: 0, ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(_mod5623.FlashList, { ref: ref.ref, maintainVisibleContentPosition: obj2, masonry: true });
}
export (ref) => {
  ({ preventNativeModalDismiss, refreshControl } = ref);
  const merged = Object.assign(ref, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0, ref: 0 }));
  items = [preventNativeModalDismiss, refreshControl];
  const memo = noop.useMemo(() => {
    let tmp2 = refreshControl;
    if (null == refreshControl) {
      tmp2 = refreshControl;
      if (true === preventNativeModalDismiss) {
        tmp2 = refreshControl;
        if (obj.isIOS()) {
          obj2 = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
          tmp2 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
        }
        obj = PlatformUtils2;
      }
    }
    return tmp2;
  }, items);
  const obj = { ref: ref.ref, maintainVisibleContentPosition: obj2 };
  const merged1 = Object.assign(merged);
  obj.refreshControl = memo;
  return jsx(refreshControl(5622), { ref: ref.ref, maintainVisibleContentPosition: obj2 });
}
export (ref) => {
  ({ preventNativeModalDismiss, refreshControl } = ref);
  const merged = Object.assign(ref, Object.assign({ preventNativeModalDismiss: 0, refreshControl: 0, ref: 0 }));
  items = [preventNativeModalDismiss, refreshControl];
  let obj = { ref: ref.ref, maintainVisibleContentPosition: obj2, masonry: true, renderScrollComponent: null };
  const memo = noop.useMemo(() => {
    let tmp2 = refreshControl;
    if (null == refreshControl) {
      tmp2 = refreshControl;
      if (true === preventNativeModalDismiss) {
        tmp2 = refreshControl;
        if (obj.isIOS()) {
          obj2 = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
          tmp2 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
        }
        obj = PlatformUtils2;
      }
    }
    return tmp2;
  }, items);
  obj.renderScrollComponent = preventNativeModalDismiss(5398).BottomSheetScrollView;
  const merged1 = Object.assign(merged);
  obj.refreshControl = memo;
  return <closure_9 ref={ref.ref} maintainVisibleContentPosition={obj2} masonry renderScrollComponent={null} />;
}