// === Module 12122: useTrackUserProfileActivityView ===

// Module 12122 (useTrackUserProfileActivityView)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import map from "map";

let c3;
let c4;
const require = arg1;
({ useEffect: c3, useState: c4 } = noop);
const result = require("map").fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx");

export default function useTrackUserProfileActivityView(arg0) {
  let onAction;
  let require;
  ({ userId: require, onAction } = arg0);
  let callback;
  let callback2;
  const items = [map];
  const stateFromStores = require(onAction[3]).useStateFromStores(items, () => outer1_5.isFetchingUserOutbox(closure_0));
  const tmp2 = callback(callback3(false), 2);
  callback = tmp2[1];
  let tmp3 = !stateFromStores;
  if (!stateFromStores) {
    tmp3 = !tmp2[0];
  }
  callback2 = tmp3;
  const items1 = [tmp3, onAction];
  callback2(() => {
    if (c3) {
      onAction({ action: "VIEW_ACTIVITY_CARD" });
      callback(true);
    }
  }, items1);
};