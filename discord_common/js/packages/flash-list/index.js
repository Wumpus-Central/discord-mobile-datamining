// === Module 7433: ? ===

// Module 7433
import PlatformUtils2 from "PlatformUtils" /* 1377 */;
import _mod5638 from "module_5638" /* 5638 */;
import noop_mod from "module_19" /* 19 */;
import module_1652_mod from "module_1652" /* 1652 */;

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
let closure_8 = module_1652.createAnimatedComponent(fn(5638).FlashList);
let module_1652 = module_1652_mod;
let closure_9 = module_1652.createAnimatedComponent(fn(5638).FlashList);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/flash-list/index.js");
for (const key10048 in require("module_5638")) {
  arg5[key10048] = require("module_5638")[key10048];
  continue;
}

export const defaultMVCPConfig = obj2;
export (ref) => {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(_mod5638.FlashList, { maintainVisibleContentPosition: obj2, ref: ref.ref });
}
export (ref) => {
  const merged = Object.assign(Object.assign(ref, Object.assign({ ref: 0 })));
  return <closure_8 maintainVisibleContentPosition={obj2} ref={ref.ref} />;
}
export (ref) => {
  const merged = Object.assign(ref, Object.assign({ preventNativeModalDismiss: 0, ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(_mod5638.FlashList, { ref: ref.ref, maintainVisibleContentPosition: obj2, masonry: true });
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
  return jsx(refreshControl(5637), { ref: ref.ref, maintainVisibleContentPosition: obj2 });
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
  obj.renderScrollComponent = preventNativeModalDismiss(5402).BottomSheetScrollView;
  const merged1 = Object.assign(merged);
  obj.refreshControl = memo;
  return <closure_9 ref={ref.ref} maintainVisibleContentPosition={obj2} masonry renderScrollComponent={null} />;
}