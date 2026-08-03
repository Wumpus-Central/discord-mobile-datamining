// === Module 12141: useUserProfileActivity ===

// Module 12141 (useUserProfileActivity)
import { useMemo } from "noop";
import map from "map";
import sortActivity from "sortActivity";

let closure_6 = [];
let closure_7 = [];
let result = require("sortActivity").fileFinishedImporting("modules/user_profile/hooks/useUserProfileActivity.tsx");

export default function useUserProfileActivity(arg0) {
  const _require = arg0;
  let obj = _require(stateFromStores1[4]);
  const items = [sortActivity];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getActivities(closure_0));
  const tmp = stateFromStores(stateFromStores1[3])(arg0);
  const items1 = [map];
  stateFromStores1 = _require(stateFromStores1[4]).useStateFromStores(items1, () => outer1_4.getUserOutbox(closure_0));
  const items2 = [stateFromStores, ];
  let entries;
  if (stateFromStores1 != null) {
    entries = stateFromStores1.entries;
  }
  items2[1] = entries;
  const tmp4Result = useMemo(() => {
    let obj = callback(stateFromStores1[5]);
    let userProfileLiveActivities = obj.getUserProfileLiveActivities(stateFromStores);
    let found;
    if (stateFromStores1 != null) {
      const entries = stateFromStores1.entries;
      found = entries.filter((traits) => {
        let length = traits;
        const userProfileLiveActivities = traits;
        const isEntryLiveResult = userProfileLiveActivities(outer1_2[6]).isEntryLive(traits);
        if (isEntryLiveResult) {
          return !isEntryLiveResult;
        } else {
          let tmpResult = tmp(tmp2[7]);
          if (tmpResult.isListenedSessionEntry(length)) {
            length = length.extra.entries.length;
            let tmp6 = length > 0;
            if (tmp6) {
              length = userProfileLiveActivities;
              tmp6 = !userProfileLiveActivities.some((party) => {
                let result = null != party;
                if (result) {
                  result = traits(outer1_2[8]).isMatchingListeningActivity(traits, party);
                  const obj = traits(outer1_2[8]);
                }
                return result;
              });
            }
            let result = tmp6;
          } else {
            tmpResult = tmp(tmp2[7]);
            if (tmpResult.isWatchedMediaEntry(length)) {
              result = !userProfileLiveActivities.some((details) => {
                let result = null != details;
                if (result) {
                  result = traits(outer1_2[8]).isMatchingWatchActivity(traits, details);
                  const obj = traits(outer1_2[8]);
                }
                return result;
              });
            } else {
              result = tmp(tmp2[7]).isRecentActivityEntry(length);
              const tmpResult1 = tmp(tmp2[7]);
            }
          }
        }
      });
    }
    if (0 === userProfileLiveActivities.length) {
      userProfileLiveActivities = outer1_6;
    }
    obj = { live: userProfileLiveActivities, recent: null };
    if (null == found) {
      found = outer1_7;
    }
    obj[1] = found;
    return obj;
  }, items2);
  obj = { live: tmp4Result.live, recent: tmp4Result.recent, stream: tmp, outbox: stateFromStores1 };
  return obj;
};