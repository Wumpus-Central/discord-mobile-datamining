// discord_app/modules/user_profile/hooks/useUserProfileActivity.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import noop from "../../../../_runtime/00019_noop.js";
import DesktopSources from "../../../../discord_common/js/packages/media-engine/Constants.tsx";
import map from "../../content_inventory/ContentInventoryOutboxStore.tsx";
import _detectH265HardwareDecode from "../../../stores/MediaEngineStore.tsx";
import sortActivity from "../../../stores/PresenceStore.tsx";

const useMemo = noop.useMemo;
const Features = DesktopSources.Features;
let closure_8 = [];
let closure_9 = [];
let result = obj132.fileFinishedImporting("modules/user_profile/hooks/useUserProfileActivity.tsx");

export default function useUserProfileActivity(arg0) {
  const _require = arg0;
  let obj = _require(stateFromStores2[5]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.supports(constants.VIDEO));
  let tmp4 = null;
  if (stateFromStores) {
    tmp4 = stateFromStores1(stateFromStores2[6])(arg0);
  }
  let tmpResult = tmp(tmp2[5]);
  const items1 = [closure_6];
  stateFromStores1 = tmpResult.useStateFromStores(items1, () => closure_1_6.getActivities(closure_0));
  tmpResult = tmp(tmp2[5]);
  const items2 = [closure_4];
  stateFromStores2 = tmpResult.useStateFromStores(items2, () => closure_1_4.getUserOutbox(closure_0));
  const items3 = [stateFromStores1, ];
  let entries;
  if (stateFromStores2 != null) {
    entries = stateFromStores2.entries;
  }
  items3[1] = entries;
  const tmp7Result = useMemo(() => {
    let obj = callback(stateFromStores2[7]);
    let userProfileLiveActivities = obj.getUserProfileLiveActivities(stateFromStores1);
    let found;
    if (stateFromStores2 != null) {
      const entries = stateFromStores2.entries;
      found = entries.filter((item, index) => {
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
              tmp6 = !userProfileLiveActivities.some((item, index) => {
                let result = null != item;
                if (result) {
                  result = item(closure_1_2[10]).isMatchingListeningActivity(item, item);
                  const obj = item(closure_1_2[10]);
                }
                return result;
              });
            }
            let result = tmp6;
          } else {
            tmpResult = tmp(stateFromStores2[9]);
            if (tmpResult.isWatchedMediaEntry(length)) {
              result = !userProfileLiveActivities.some((item, index) => {
                let result = null != item;
                if (result) {
                  result = item(closure_1_2[10]).isMatchingWatchActivity(item, item);
                  const obj = item(closure_1_2[10]);
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
      userProfileLiveActivities = closure_1_8;
    }
    obj = { live: userProfileLiveActivities, recent: null };
    if (null == found) {
      found = closure_1_9;
    }
    obj[1] = found;
    return obj;
  }, items3);
  obj = { live: tmp7Result.live, recent: tmp7Result.recent, stream: tmp4, outbox: stateFromStores2 };
  return obj;
};