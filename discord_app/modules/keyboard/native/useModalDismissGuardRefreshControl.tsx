// === Module 10450: useModalDismissGuardRefreshControl ===

// Module 10450 (useModalDismissGuardRefreshControl)
import PlatformUtils from "PlatformUtils" /* 1363 */;
import noop_mod from "module_19" /* 19 */;

require = fn;
function noop() {

}
let noop = noop_mod;
const RefreshControl = fn(17).RefreshControl;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/useModalDismissGuardRefreshControl.tsx");

export const useModalDismissGuardRefreshControl = function useModalDismissGuardRefreshControl() {
  isPortalKeyboardInModal = isPortalKeyboardInModal(10451).useIsPortalKeyboardInModal();
  const items = [isPortalKeyboardInModal];
  return noop.useMemo(() => {
    let tmp;
    if (isPortalKeyboardInModal) {
      if (obj.isIOS()) {
        const obj2 = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
        tmp = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
      }
      obj = PlatformUtils;
    }
    return tmp;
  }, items);
};