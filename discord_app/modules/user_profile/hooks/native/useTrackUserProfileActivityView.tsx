// discord_app/modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import ContentInventoryOutboxStore from "../../../content_inventory/ContentInventoryOutboxStore.tsx";

const require = fn;
const noop = fn(19);
({ useEffect: c3, useState: closure_4 } = noop);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx");

export default function useTrackUserProfileActivityView(arg0) {
  ({ userId: require, onAction } = arg0);
  _slicedToArray = undefined;
  closure_3 = undefined;
  const items = [ContentInventoryOutboxStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    ContentInventoryOutboxStore.isFetchingUserOutbox(require),
  );
  const tmp2 = _slicedToArray(closure_4(false), 2);
  _slicedToArray = tmp2[1];
  let tmp3 = !stateFromStores;
  if (!stateFromStores) {
    tmp3 = !tmp2[0];
  }
  closure_3 = tmp3;
  const items1 = [tmp3, onAction];
  closure_3(() => {
    if (closure_3) {
      onAction({ action: "VIEW_ACTIVITY_CARD" });
      closure_2(true);
    }
  }, items1);
}
