// === Module 13113: useUserProfileActivity ===

// Module 13113 (useUserProfileActivity)
import _mod19 from "module_19" /* 19 */;
import Constants from "Constants" /* 5116 */;
import utils from "utils" /* 8255 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 8443 */;
import UserProfileStackedActivityCardUtils from "UserProfileStackedActivityCardUtils" /* 13114 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8977 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import PresenceStore from "PresenceStore" /* 5107 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMemo = _mod19.useMemo;
const Features = Constants.Features;
let closure_8 = [];
let closure_9 = [];
let result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileActivity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useUserProfileActivity(arg0) {
  _require = arg0;
  const cResult = require("c").c(20);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function y() {
      return MediaEngineStore.supports(constants.VIDEO);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  let tmp8 = null;
  if (stateFromStores) {
    tmp8 = userProfileLiveActivities(10207)(arg0);
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PresenceStore];
    cResult[2] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    class S {
      constructor() {
        return closure_6.getActivities(closure_0);
      }
    }
    cResult[3] = arg0;
    cResult[4] = S;
  } else {
    class S {
      constructor() {
        return closure_6.getActivities(closure_0);
      }
    }
  }
  let tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, S);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_6.getActivities(closure_0);
      }
    }
    const items2 = [ContentInventoryOutboxStore];
    cResult[5] = items2;
    const tmp13 = items2;
  } else {
    class S {
      constructor() {
        return closure_6.getActivities(closure_0);
      }
    }
  }
  if (cResult[6] !== arg0) {
    class S {
      constructor() {
        return closure_6.getActivities(closure_0);
      }
    }
    cResult[6] = arg0;
    cResult[7] = tmp15;
  } else {
    class S {
      constructor() {
        return closure_6.getActivities(closure_0);
      }
    }
  }
  let tmpResult4 = require("initialize");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp13, tmp15);
  if (cResult[8] === stateFromStores1) {
    class S {
      constructor() {
        return closure_6.getActivities(closure_0);
      }
    }
    if (stateFromStores2 != null) {
      class S {
        constructor() {
          return closure_6.getActivities(closure_0);
        }
      }
    }
    if (cResult[9] === tmp17) {
      class S {
        constructor() {
          return closure_6.getActivities(closure_0);
        }
      }
      userProfileLiveActivities = arr4;
      let tmp18 = cResult[11];
    }
    if (0 === arr4.length) {
      class S {
        constructor() {
          return closure_6.getActivities(closure_0);
        }
      }
    }
    if (null == tmp18) {
      class S {
        constructor() {
          return closure_6.getActivities(closure_0);
        }
      }
    } else {
      class S {
        constructor() {
          return closure_6.getActivities(closure_0);
        }
      }
    }
    if (cResult[12] === arr4) {
      class S {
        constructor() {
          return closure_6.getActivities(closure_0);
        }
      }
      ({ live, recent } = tmp21);
      if (cResult[15] === live) {
        class S {
          constructor() {
            return closure_6.getActivities(closure_0);
          }
        }
      }
      const obj2 = { live, recent, stream: tmp8, outbox: stateFromStores2 };
      cResult[15] = live;
      cResult[16] = stateFromStores2;
      cResult[17] = recent;
      cResult[18] = tmp8;
      cResult[19] = obj2;
    }
    const obj3 = { live: arr4, recent: tmp18 };
    cResult[12] = arr4;
    cResult[13] = tmp18;
    cResult[14] = obj3;
    tmp21 = obj3;
  }
  const tmpResult5 = require("initialize");
  userProfileLiveActivities = require("UserProfileStackedActivityCardUtils").getUserProfileLiveActivities(stateFromStores1);
  let found;
  if (stateFromStores2 != null) {
    class S {
      constructor() {
        return closure_6.getActivities(closure_0);
      }
    }
    found = arr5.filter((item) => {
      let length = item;
      const isEntryLiveResult = utils.isEntryLive(item);
      if (isEntryLiveResult) {
        return !isEntryLiveResult;
      } else {
        if (tmpResult.isListenedSessionEntry(length)) {
          length = length.extra.entries.length;
          let tmp6 = length > 0;
          if (tmp6) {
            length = userProfileLiveActivities;
            tmp6 = !userProfileLiveActivities.some((item) => {
              let result = null != item;
              if (result) {
                result = item(8439).isMatchingListeningActivity(item, item);
                const obj = item(8439);
              }
              return result;
            });
          }
          let result = tmp6;
        } else {
          if (tmpResult3.isWatchedMediaEntry(length)) {
            result = !userProfileLiveActivities.some((item) => {
              let result = null != item;
              if (result) {
                result = item(8439).isMatchingWatchActivity(item, item);
                const obj = item(8439);
              }
              return result;
            });
          } else {
            result = ContentInventoryTypes.isRecentActivityEntry(length);
            const tmpResult4 = ContentInventoryTypes;
          }
          tmpResult3 = ContentInventoryTypes;
        }
        tmpResult = ContentInventoryTypes;
      }
    });
  }
  cResult[8] = stateFromStores1;
  if (stateFromStores2 != null) {
    class S {
      constructor() {
        return closure_6.getActivities(closure_0);
      }
    }
  }
  cResult[9] = undefined;
  cResult[10] = userProfileLiveActivities;
  cResult[11] = found;
  tmp18 = found;
  const tmpResult6 = require("UserProfileStackedActivityCardUtils");
}) : (function useUserProfileActivity(arg0) {
  _require = arg0;
  const items = [MediaEngineStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => MediaEngineStore.supports(constants.VIDEO));
  let tmp4 = null;
  if (stateFromStores) {
    tmp4 = stateFromStores1(stateFromStores2[8])(arg0);
  }
  let obj = require("initialize");
  const items1 = [PresenceStore];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => PresenceStore.getActivities(closure_0));
  let tmpResult = require("initialize");
  const items2 = [ContentInventoryOutboxStore];
  stateFromStores2 = require("initialize").useStateFromStores(items2, () => ContentInventoryOutboxStore.getUserOutbox(closure_0));
  const items3 = [stateFromStores1, ];
  let entries;
  if (stateFromStores2 != null) {
    entries = stateFromStores2.entries;
  }
  items3[1] = entries;
  const tmp7Result = useMemo(() => {
    let userProfileLiveActivities = UserProfileStackedActivityCardUtils.getUserProfileLiveActivities(stateFromStores1);
    let found;
    if (stateFromStores2 != null) {
      const entries = stateFromStores2.entries;
      found = entries.filter((item) => {
        let length = item;
        userProfileLiveActivities = item;
        const isEntryLiveResult = userProfileLiveActivities(stateFromStores2[10]).isEntryLive(item);
        if (isEntryLiveResult) {
          return !isEntryLiveResult;
        } else {
          if (tmpResult.isListenedSessionEntry(length)) {
            length = length.extra.entries.length;
            let tmp6 = length > 0;
            if (tmp6) {
              length = userProfileLiveActivities;
              tmp6 = !userProfileLiveActivities.some((item) => {
                let result = null != item;
                if (result) {
                  result = userProfileLiveActivities(8439).isMatchingListeningActivity(closure_0, item);
                  const obj = userProfileLiveActivities(8439);
                }
                return result;
              });
            }
            let result = tmp6;
          } else {
            if (tmpResult3.isWatchedMediaEntry(length)) {
              result = !userProfileLiveActivities.some((item) => {
                let result = null != item;
                if (result) {
                  result = userProfileLiveActivities(8439).isMatchingWatchActivity(closure_0, item);
                  const obj = userProfileLiveActivities(8439);
                }
                return result;
              });
            } else {
              result = tmp(stateFromStores2[11]).isRecentActivityEntry(length);
              const tmpResult4 = tmp(stateFromStores2[11]);
            }
            tmpResult3 = tmp(stateFromStores2[11]);
          }
          tmpResult = tmp(stateFromStores2[11]);
        }
        let obj = userProfileLiveActivities(stateFromStores2[10]);
      });
    }
    if (0 === userProfileLiveActivities.length) {
      userProfileLiveActivities = closure_8;
    }
    const obj2 = { live: userProfileLiveActivities, recent: null };
    if (null == found) {
      found = closure_9;
    }
    obj2.recent = found;
    return obj2;
  }, items3);
  return { live: tmp7Result.live, recent: tmp7Result.recent, stream: tmp4, outbox: stateFromStores2 };
});