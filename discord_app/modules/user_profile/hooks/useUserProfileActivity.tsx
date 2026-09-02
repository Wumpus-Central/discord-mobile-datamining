// === Module 12695: useUserProfileActivity ===

// Module 12695 (useUserProfileActivity)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import DesktopSources from "DesktopSources" /* 4542 */;
import closure_4 from "map" /* 9432 */;
import closure_5 from "_detectH265HardwareDecode" /* 4529 */;
import closure_6 from "sortActivity" /* 4569 */;

const useMemo = noop.useMemo;
const Features = DesktopSources.Features;
let closure_8 = [];
let closure_9 = [];
let result = set.fileFinishedImporting("modules/user_profile/hooks/useUserProfileActivity.tsx");

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
      found = entries.filter((traits) => {
        let length = traits;
        userProfileLiveActivities = traits;
        const isEntryLiveResult = userProfileLiveActivities(closure_1_2[8]).isEntryLive(traits);
        if (isEntryLiveResult) {
          return !isEntryLiveResult;
        } else {
          let tmpResult = tmp(tmp2[9]);
          if (tmpResult.isListenedSessionEntry(length)) {
            length = length.extra.entries.length;
            let tmp6 = length > 0;
            if (tmp6) {
              length = userProfileLiveActivities;
              tmp6 = !userProfileLiveActivities.some((party) => {
                let result = null != party;
                if (result) {
                  result = traits(closure_1_2[10]).isMatchingListeningActivity(traits, party);
                  const obj = traits(closure_1_2[10]);
                }
                return result;
              });
            }
            let result = tmp6;
          } else {
            tmpResult = tmp(tmp2[9]);
            if (tmpResult.isWatchedMediaEntry(length)) {
              result = !userProfileLiveActivities.some((details) => {
                let result = null != details;
                if (result) {
                  result = traits(closure_1_2[10]).isMatchingWatchActivity(traits, details);
                  const obj = traits(closure_1_2[10]);
                }
                return result;
              });
            } else {
              result = tmp(tmp2[9]).isRecentActivityEntry(length);
              const tmpResult1 = tmp(tmp2[9]);
            }
          }
        }
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