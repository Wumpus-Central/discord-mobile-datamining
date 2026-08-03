// === Module 12281: useUserProfileWidgets ===

// Module 12281 (useUserProfileWidgets)
import fetchFingerprint from "fetchFingerprint";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import initialize from "initialize";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/user_profile/hooks/useUserProfileWidgets.tsx");

export default function useUserProfileWidgets(arg0) {
  const _require = arg0;
  const items = [fetchFingerprint];
  const items1 = [arg0];
  const stateFromStores = _require(589).useStateFromStores(items, () => null != closure_0 && outer1_2.getId() === closure_0, items1);
  const obj = _require(589);
  const items2 = [initialize];
  const stateFromStores1 = _require(589).useStateFromStores(items2, () => pendingWidgets.getPendingWidgets());
  const obj2 = _require(589);
  const items3 = [createUserWidgetFromServer];
  const items4 = [arg0];
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items3, () => {
    if (null == closure_0) {
      return [];
    } else {
      const userProfile = outer1_3.getUserProfile(tmp);
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