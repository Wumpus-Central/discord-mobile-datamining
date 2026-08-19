// === Module 9387: noop ===

// Module 9387 (noop)
import noop from "noop" /* 19 */;
import { RefreshControl } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
function noop() {

}
const result = require("obj132").fileFinishedImporting("modules/keyboard/native/useModalDismissGuardRefreshControl.tsx");

export const useModalDismissGuardRefreshControl = function useModalDismissGuardRefreshControl() {
  isPortalKeyboardInModal = isPortalKeyboardInModal(9388).useIsPortalKeyboardInModal();
  const items = [isPortalKeyboardInModal];
  return React.useMemo(() => {
    let tmp;
    if (isPortalKeyboardInModal) {
      let obj = isPortalKeyboardInModal(dependencyMap[4]);
      if (obj.isIOS()) {
        obj = { refreshing: false, onRefresh: null, tintColor: "transparent" };
        obj[1] = noop;
        tmp = <RefreshControl refreshing={false} onRefresh={null} tintColor="transparent" />;
      }
    }
    return tmp;
  }, items);
};