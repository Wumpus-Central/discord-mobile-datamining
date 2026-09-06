// === Module 9034: useUserProfileWidgets ===

// Module 9034 (useUserProfileWidgets)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserProfileStore from "UserProfileStore" /* 7621 */;
import WidgetStore from "WidgetStore" /* 7625 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileWidgets.tsx");

export default function useUserProfileWidgets(arg0) {
  _require = arg0;
  const items = [AuthenticationStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => null != closure_0 && AuthenticationStore.getId() === closure_0, items1);
  const obj = require("initialize");
  const items2 = [WidgetStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => pendingWidgets.getPendingWidgets());
  const obj2 = require("initialize");
  const items3 = [UserProfileStore];
  const items4 = [arg0];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items3, () => {
    if (null == closure_0) {
      return [];
    } else {
      const userProfile = UserProfileStore.getUserProfile(tmp);
      let widgets;
      if (userProfile != null) {
        widgets = userProfile.widgets;
      }
      if (widgets == null) {
        widgets = [];
      }
      return widgets;
    }
  }, items4);
  let tmp4 = stateFromStoresArray;
  if (stateFromStores) {
    tmp4 = stateFromStoresArray;
    if (null !== stateFromStores1) {
      tmp4 = stateFromStores1;
    }
  }
  return tmp4;
};