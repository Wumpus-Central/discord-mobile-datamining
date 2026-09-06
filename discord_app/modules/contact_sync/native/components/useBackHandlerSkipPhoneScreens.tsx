// discord_app/modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import useNavigatorBackPressHandler from "../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx";
import ContactSyncConstants from "../ContactSyncConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
const ContactSyncScenes = ContactSyncConstants.ContactSyncScenes;
const result = size.fileFinishedImporting("modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx");

export default function useBackHandlerSkipPhoneScreens(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => {
    if (null != closure_1) {
      tmp();
    } else {
      let arr = state;
      const items = [, ,];
      ({ ADD_PHONE: arr2[0], VERIFY_PHONE: arr2[1], VERIFY_PASSWORD: arr2[2] } = ContactSyncScenes);
      const routes = state.getState().routes;
      if (routes.length <= 2) {
        arr = arr.pop();
      } else if (items.includes(routes[routes.length - 2].name)) {
        arr = arr.pop(routes.length - 1);
      }
    }
    return true;
  });
}
export const useBackHandlerMinimizeApp = function useBackHandlerMinimizeApp() {
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
};
