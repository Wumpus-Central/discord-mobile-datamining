// discord_app/modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx
import closure_2 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import closure_5 from "map" /* 9199 */;

const require = arg1;
({ useEffect: c3, useState: c4 } = noop);
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx");

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