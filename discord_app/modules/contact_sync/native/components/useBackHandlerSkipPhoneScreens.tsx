// === Module 11902: useBackHandlerSkipPhoneScreens ===

// Module 11902 (useBackHandlerSkipPhoneScreens)
import { NativeModules } from "get ActivityIndicator";
import { ContactSyncScenes } from "ContactSyncLandingPage";

const result = require("useNavigatorBackPressHandler").fileFinishedImporting("modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx");

export default function useBackHandlerSkipPhoneScreens(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  _require(5215).useNavigatorBackPressHandler(() => {
    if (null != closure_1) {
      tmp();
    } else {
      let arr = state;
      const items = [, , ];
      ({ ADD_PHONE: arr2[0], VERIFY_PHONE: arr2[1], VERIFY_PASSWORD: arr2[2] } = outer1_3);
      const routes = state.getState().routes;
      if (routes.length <= 2) {
        arr = arr.pop();
      } else if (items.includes(routes[routes.length - 2].name)) {
        arr = arr.pop(routes.length - 1);
      }
    }
    return true;
  });
};
export const useBackHandlerMinimizeApp = function useBackHandlerMinimizeApp() {
  require(5215) /* useNavigatorBackPressHandler */.useNavigatorBackPressHandler(() => {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
};