// === Module 10321: useModalDismissGuardRefreshControl ===

// Module 10321 (useModalDismissGuardRefreshControl)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import noop from "module_19" /* 19 */;

require = fn;
function noop() {

}
const RefreshControl = fn(17).RefreshControl;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/useModalDismissGuardRefreshControl.tsx");

export const useModalDismissGuardRefreshControl = function useModalDismissGuardRefreshControl() {
  isPortalKeyboardInModal = isPortalKeyboardInModal(10322).useIsPortalKeyboardInModal();
  const items = [isPortalKeyboardInModal];
  return noop.useMemo(() => {
    let tmp;
    if (isPortalKeyboardInModal) {
      let obj = PlatformUtils;
      if (obj.isIOS()) {
        obj = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
        tmp = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
      }
    }
    return tmp;
  }, items);
};