// discord_app/modules/user_profile/hooks/useUserProfileWidgets.tsx
import closure_2 from "../../../stores/AuthenticationStore.tsx";
import closure_3 from "../UserProfileStore.tsx";
import closure_4 from "../WidgetStore.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useUserProfileWidgets.tsx");

export default function useUserProfileWidgets(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => null != closure_0 && closure_1_2.getId() === closure_0, items1);
  const obj = initialize;
  const items2 = [closure_4];
  const stateFromStores1 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items2, () => pendingWidgets.getPendingWidgets());
  const obj2 = initialize;
  const items3 = [closure_3];
  const items4 = [arg0];
  const stateFromStoresArray = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items3, () => {
    if (null == closure_0) {
      return [];
    } else {
      const userProfile = closure_1_3.getUserProfile(tmp);
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