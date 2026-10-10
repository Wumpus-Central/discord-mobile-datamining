// === Module 9527: useModalDismissGuardRefreshControl ===

// Module 9527 (useModalDismissGuardRefreshControl)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import PortalKeyboardModalContext from "PortalKeyboardModalContext" /* 9528 */;
import noop_mod from "module_19" /* 19 */;

require = fn;
function noop() {

}
let noop = noop_mod;
const RefreshControl = fn(17).RefreshControl;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/useModalDismissGuardRefreshControl.tsx");

export const useModalDismissGuardRefreshControl = ReactCompilerGating.isReactCompilerEnabled() ? (function useModalDismissGuardRefreshControl() {
  const cResult = c.c(2);
  const isPortalKeyboardInModal = PortalKeyboardModalContext.useIsPortalKeyboardInModal();
  if (cResult[0] !== isPortalKeyboardInModal) {
    let tmp6;
    if (isPortalKeyboardInModal) {
      if (tmpResult.isIOS()) {
        const obj3 = { refreshing: false, onRefresh: noop, tintColor: "transparent" };
        tmp6 = <RefreshControl refreshing={false} onRefresh={noop} tintColor="transparent" />;
      }
      tmpResult = PlatformUtils;
    }
    cResult[0] = isPortalKeyboardInModal;
    cResult[1] = tmp6;
    let tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useModalDismissGuardRefreshControl() {
  isPortalKeyboardInModal = isPortalKeyboardInModal(9528).useIsPortalKeyboardInModal();
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
});