// === Module 13011: useTrackUserProfileActivityAction ===

// Module 13011 (useTrackUserProfileActivityAction)
import _mod19 from "module_19" /* 19 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8291 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8966 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

_mod19.useCallback;
let result = size.fileFinishedImporting("modules/user_profile/hooks/useTrackUserProfileActivityAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackUserProfileActivityAction(user) {
  const cResult = user(activity[3]).c(13);
  user = user.user;
  const display = user.display;
  activity = user.activity;
  const entry = user.entry;
  const stream = user.stream;
  const voiceChannelId = user.voiceChannelId;
  let analyticsLocations = user.analyticsLocations;
  const obj = user(activity[3]);
  const tmp = user;
  const tmp2 = activity;
  const userProfileAnalyticsContext = user(activity[4]).useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  const trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  if (analyticsLocations == null) {
    analyticsLocations = display(activity[5])().analyticsLocations;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stream];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function n() {
      return ContentInventoryOutboxStore.getUserOutbox(user.id);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj2 = user(activity[4]);
  const stateFromStores = tmp(tmp2[6]).useStateFromStores(first, tmp7);
  if (cResult[3] === activity) {
    if (cResult[4] === analyticsLocations) {
      if (cResult[5] === context) {
        if (cResult[6] === display) {
          if (cResult[7] === entry) {
            if (cResult[8] === stateFromStores) {
              if (cResult[9] === stream) {
                if (cResult[10] === trackUserProfileAction) {
                  if (cResult[11] === voiceChannelId) {
                    let tmp9 = cResult[12];
                  }
                  return tmp9;
                }
              }
            }
          }
        }
      }
    }
  }
  class C {
    constructor(arg0) {
      action = user.action;
      obj = { action, analyticsLocations };
      tmp = trackUserProfileAction(obj);
      obj2 = closure_0(closure_2[7]);
      obj1 = { action, display, activity, entry, stream, outbox: closure_9, voiceChannelId, analyticsLocations };
      merged = Object.assign(context);
      result = obj2.trackUserProfileActivityAction(obj1);
      return;
    }
  }
  cResult[3] = activity;
  cResult[4] = analyticsLocations;
  cResult[5] = context;
  cResult[6] = display;
  cResult[7] = entry;
  cResult[8] = stateFromStores;
  cResult[9] = stream;
  cResult[10] = trackUserProfileAction;
  cResult[11] = voiceChannelId;
  cResult[12] = C;
  tmp9 = C;
}) : (function useTrackUserProfileActivityAction(activity) {
  ({ user: require, display } = activity);
  activity = activity.activity;
  const entry = activity.entry;
  const stream = activity.stream;
  const voiceChannelId = activity.voiceChannelId;
  let analyticsLocations;
  let stateFromStores;
  const userProfileAnalyticsContext = require("UserProfileAnalyticsContext").useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  const trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  if (analyticsLocations == null) {
    analyticsLocations = display(activity[5])().analyticsLocations;
  }
  const obj = require("UserProfileAnalyticsContext");
  const items = [stream];
  stateFromStores = require("initialize").useStateFromStores(items, () => ContentInventoryOutboxStore.getUserOutbox(id.id));
  const items1 = [trackUserProfileAction, context, display, activity, stream, entry, stateFromStores, voiceChannelId, analyticsLocations];
  return entry((action) => {
    action = action.action;
    trackUserProfileAction({ action, analyticsLocations });
    const merged = Object.assign(context);
    const result = UserProfileAnalyticsUtils.trackUserProfileActivityAction({ action, display, activity, entry, stream, outbox: stateFromStores, voiceChannelId, analyticsLocations });
  }, items1);
});