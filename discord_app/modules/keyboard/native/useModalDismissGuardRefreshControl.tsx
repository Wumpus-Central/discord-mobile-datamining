// discord_app/modules/keyboard/native/useModalDismissGuardRefreshControl.tsx
import noop from "../../../../_runtime/00019_noop.js";
import { RefreshControl } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

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