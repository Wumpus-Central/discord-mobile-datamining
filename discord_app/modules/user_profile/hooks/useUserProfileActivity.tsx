// discord_app/modules/user_profile/hooks/useUserProfileActivity.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import Constants from "../../../../discord_common/js/packages/media-engine/Constants.tsx";
import UserProfileStackedActivityCardUtils from "../utils/UserProfileStackedActivityCardUtils.tsx";
import ContentInventoryOutboxStore from "../../content_inventory/ContentInventoryOutboxStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useMemo = _mod19.useMemo;
const Features = Constants.Features;
let closure_8 = [];
let closure_9 = [];
let result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileActivity.tsx");

export default function useUserProfileActivity(arg0) {
  _require = arg0;
  let obj = require("initialize");
  const items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => MediaEngineStore.supports(constants.VIDEO));
  let tmp4 = null;
  if (stateFromStores) {
    tmp4 = stateFromStores1(stateFromStores2[6])(arg0);
  }
  let tmpResult = tmp(tmp2[5]);
  const items1 = [PresenceStore];
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => PresenceStore.getActivities(closure_0));
  tmpResult = tmp(tmp2[5]);
  const items2 = [ContentInventoryOutboxStore];
  stateFromStores2 = tmpResult.useStateFromStores(items2, () => ContentInventoryOutboxStore.getUserOutbox(closure_0));
  const items3 = [stateFromStores1];
  let entries;
  if (stateFromStores2 != null) {
    entries = stateFromStores2.entries;
  }
  items3[1] = entries;
  const tmp7Result = useMemo(() => {
    let obj = UserProfileStackedActivityCardUtils;
    let userProfileLiveActivities = obj.getUserProfileLiveActivities(stateFromStores1);
    let found;
    if (stateFromStores2 != null) {
      const entries = stateFromStores2.entries;
      found = entries.filter((item) => {
        let length = item;
        userProfileLiveActivities = item;
        const isEntryLiveResult = userProfileLiveActivities(stateFromStores2[8]).isEntryLive(item);
        if (isEntryLiveResult) {
          return !isEntryLiveResult;
        } else {
          let tmpResult = tmp(stateFromStores2[9]);
          if (tmpResult.isListenedSessionEntry(length)) {
            length = length.extra.entries.length;
            let tmp6 = length > 0;
            if (tmp6) {
              length = userProfileLiveActivities;
              tmp6 = !userProfileLiveActivities.some((item) => {
                let result = null != item;
                if (result) {
                  result = userProfileLiveActivities(8337).isMatchingListeningActivity(closure_0, item);
                  const obj = userProfileLiveActivities(8337);
                }
                return result;
              });
            }
            let result = tmp6;
          } else {
            tmpResult = tmp(stateFromStores2[9]);
            if (tmpResult.isWatchedMediaEntry(length)) {
              result = !userProfileLiveActivities.some((item) => {
                let result = null != item;
                if (result) {
                  result = userProfileLiveActivities(8337).isMatchingWatchActivity(closure_0, item);
                  const obj = userProfileLiveActivities(8337);
                }
                return result;
              });
            } else {
              result = tmp(stateFromStores2[9]).isRecentActivityEntry(length);
              const tmpResult1 = tmp(stateFromStores2[9]);
            }
          }
        }
        let obj = userProfileLiveActivities(stateFromStores2[8]);
      });
    }
    if (0 === userProfileLiveActivities.length) {
      userProfileLiveActivities = closure_8;
    }
    obj = { live: userProfileLiveActivities, recent: null };
    if (null == found) {
      found = closure_9;
    }
    obj.recent = found;
    return obj;
  }, items3);
  obj = { live: tmp7Result.live, recent: tmp7Result.recent, stream: tmp4, outbox: stateFromStores2 };
  return obj;
}
