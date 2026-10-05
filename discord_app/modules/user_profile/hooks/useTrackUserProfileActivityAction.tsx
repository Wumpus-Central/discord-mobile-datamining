// === Module 12843: useTrackUserProfileActivityAction ===

// Module 12843 (useTrackUserProfileActivityAction)
import react from "react" /* 19 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 7862 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8447 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let user;

react.useCallback;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let activity;
  let first;
  let tmp7;
  const tmp2 = activity;
  let obj = user(activity[3]);
  const cResult = obj.c(13);
  const tmp = user;
  user = user.user;
  const display = user.display;
  activity = user.activity;
  const entry = user.entry;
  const stream = user.stream;
  const voiceChannelId = user.voiceChannelId;
  let analyticsLocations = user.analyticsLocations;
  let obj2 = user(activity[4]);
  const userProfileAnalyticsContext = obj2.useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  const trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  if (analyticsLocations == null) {
    analyticsLocations = display(activity[5])().analyticsLocations;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stream];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function c() {
      return ContentInventoryOutboxStore.getUserOutbox(user.id);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(tmp2[6]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === activity) {
    if (cResult[4] === analyticsLocations) {
      if (cResult[5] === context) {
        if (cResult[6] === display) {
          if (cResult[7] === entry) {
            if (cResult[8] === stateFromStores) {
              if (cResult[9] === stream) {
                if (cResult[10] === trackUserProfileAction) {
                  let tmp9;
                  if (cResult[11] === voiceChannelId) {
                    tmp9 = cResult[12];
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
  class P {
    constructor(action) {
      action = action.action;
      const obj = { action, analyticsLocations };
      trackUserProfileAction(obj);
      const trackUserProfileActivityAction = UserProfileAnalyticsUtils.trackUserProfileActivityAction;
      const obj2 = { action, display, activity, entry, stream, outbox: stateFromStores, voiceChannelId, analyticsLocations };
      UserProfileAnalyticsUtils;
      const merged = Object.assign(context);
      const result = trackUserProfileActivityAction(obj2);
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
  cResult[12] = P;
  tmp9 = P;
}) : ((activity) => {
  let display;
  let id;
  let require;
  ({ user: require, display } = activity);
  activity = activity.activity;
  const entry = activity.entry;
  const stream = activity.stream;
  const voiceChannelId = activity.voiceChannelId;
  let analyticsLocations;
  let stateFromStores;
  const tmp2 = activity;
  let obj = require("UserProfileAnalyticsContext");
  const userProfileAnalyticsContext = obj.useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  const trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  if (analyticsLocations == null) {
    analyticsLocations = display(activity[5])().analyticsLocations;
  }
  const items = [stream];
  const tmpResult = require("get initialized");
  stateFromStores = tmpResult.useStateFromStores(items, () => ContentInventoryOutboxStore.getUserOutbox(require.id));
  const items1 = [trackUserProfileAction, context, display, activity, stream, entry, stateFromStores, voiceChannelId, analyticsLocations];
  return entry((action) => {
    action = action.action;
    const obj = { action, analyticsLocations };
    trackUserProfileAction(obj);
    const trackUserProfileActivityAction = UserProfileAnalyticsUtils.trackUserProfileActivityAction;
    const obj2 = { action, display, activity, entry, stream, outbox: stateFromStores, voiceChannelId, analyticsLocations };
    UserProfileAnalyticsUtils;
    const merged = Object.assign(context);
    const result = trackUserProfileActivityAction(obj2);
  }, items1);
});
let result = size.fileFinishedImporting("modules/user_profile/hooks/useTrackUserProfileActivityAction.tsx");

export default tmp2;