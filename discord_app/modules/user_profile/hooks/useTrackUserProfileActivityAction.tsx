// === Module 12117: useTrackUserProfileActivityAction ===

// Module 12117 (useTrackUserProfileActivityAction)
import obj132 from "obj132" /* 2 */;
import noop from "noop" /* 19 */;
import map from "map" /* 9199 */;

noop.useCallback;
let result = obj132.fileFinishedImporting("modules/user_profile/hooks/useTrackUserProfileActivityAction.tsx");

export default function useTrackUserProfileActivityAction(activity) {
  ({ user: require, display } = activity);
  activity = activity.activity;
  const entry = activity.entry;
  const stream = activity.stream;
  const voiceChannelId = activity.voiceChannelId;
  let analyticsLocations;
  let stateFromStores;
  const userProfileAnalyticsContext = require(activity[2]).useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  const trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  if (analyticsLocations == null) {
    analyticsLocations = display(activity[3])().analyticsLocations;
  }
  let obj = require(activity[2]);
  const items = [stream];
  stateFromStores = require(activity[4]).useStateFromStores(items, () => stream.getUserOutbox(id.id));
  const items1 = [trackUserProfileAction, context, display, activity, stream, entry, stateFromStores, voiceChannelId, analyticsLocations];
  return entry((action) => {
    action = action.action;
    let obj = { action, analyticsLocations };
    trackUserProfileAction(obj);
    obj = { action, display, activity, entry, stream, outbox: stateFromStores, voiceChannelId, analyticsLocations };
    const merged = Object.assign(context);
    const result = require(activity[5]).trackUserProfileActivityAction(obj);
  }, items1);
};