// discord_app/modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import map from "../../../content_inventory/ContentInventoryOutboxStore.tsx";

const require = fn;
({ useEffect: c3, useState: c4 } = noop);
const result = require("obj132").fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx");

export default function useTrackUserProfileActivityView(arg0) {
  ({ userId: require, onAction } = arg0);
  let callback;
  let callback2;
  const items = [closure_5];
  const stateFromStores = require(onAction[3]).useStateFromStores(items, () => closure_1_5.isFetchingUserOutbox(closure_0));
  const tmp2 = callback(callback3(false), 2);
  callback = tmp2[1];
  let tmp3 = !stateFromStores;
  if (!stateFromStores) {
    tmp3 = !tmp2[0];
  }
  callback2 = tmp3;
  const items1 = [tmp3, onAction];
  callback2(() => {
    if (closure_3) {
      onAction({ action: "VIEW_ACTIVITY_CARD" });
      callback(true);
    }
  }, items1);
};