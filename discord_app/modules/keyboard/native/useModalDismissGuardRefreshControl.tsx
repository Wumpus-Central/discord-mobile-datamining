// discord_app/modules/keyboard/native/useModalDismissGuardRefreshControl.tsx
import closure_2 from "../../../../_runtime/00019_noop.js";
import { RefreshControl } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function noop() {}
const result = require("set").fileFinishedImporting("modules/keyboard/native/useModalDismissGuardRefreshControl.tsx");

export const useModalDismissGuardRefreshControl = function useModalDismissGuardRefreshControl() {
  isPortalKeyboardInModal = isPortalKeyboardInModal(9160).useIsPortalKeyboardInModal();
  const items = [isPortalKeyboardInModal];
  return React.useMemo(() => {
    let tmp;
    if (isPortalKeyboardInModal) {
      let obj = isPortalKeyboardInModal(closure_1_1[4]);
      if (obj.isIOS()) {
        obj = { refreshing: false, onRefresh: null, tintColor: "transparent" };
        obj[1] = closure_1_5;
        tmp = closure_1_4(closure_1_3, obj);
      }
    }
    return tmp;
  }, items);
};
