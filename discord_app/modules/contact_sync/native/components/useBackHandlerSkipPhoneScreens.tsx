// discord_app/modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import useNavigatorBackPressHandler from "../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx";
import ContactSyncLandingPage from "../ContactSyncConstants.tsx";
import { useNavigatorBackPressHandler } from "../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
const ContactSyncScenes = ContactSyncLandingPage.ContactSyncScenes;
const result = set.fileFinishedImporting("modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx");

export default function useBackHandlerSkipPhoneScreens(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  _useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    if (null != closure_1) {
      tmp();
    } else {
      let arr = state;
      const items = [, , ];
      ({ ADD_PHONE: arr2[0], VERIFY_PHONE: arr2[1], VERIFY_PASSWORD: arr2[2] } = closure_1_3);
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
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
};