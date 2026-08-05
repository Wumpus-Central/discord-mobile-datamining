import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
// discord_app/modules/user_profile/hooks/useUserProfileWidgets.tsx
import fetchFingerprint from "fetchFingerprint";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import initialize from "initialize";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/user_profile/hooks/useUserProfileWidgets.tsx");

export default function useUserProfileWidgets(arg0) {
  const _require = arg0;
  const items = [fetchFingerprint];
  const items1 = [arg0];
  const stateFromStores = _initialize.useStateFromStores(items, () => null != closure_0 && outer1_2.getId() === closure_0, items1);
  const obj = _initialize;
  const items2 = [initialize];
  const stateFromStores1 = _initialize.useStateFromStores(items2, () => pendingWidgets.getPendingWidgets());
  const obj2 = _initialize;
  const items3 = [createUserWidgetFromServer];
  const items4 = [arg0];
  const stateFromStoresArray = _initialize.useStateFromStoresArray(items3, () => {
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