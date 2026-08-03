// === Module 12121: useTrackUserProfileActivityAction ===

// Module 12121 (useTrackUserProfileActivityAction)
import map from "map";

require("noop").useCallback;
let result = require("UserProfileAnalyticsProvider").fileFinishedImporting("modules/user_profile/hooks/useTrackUserProfileActivityAction.tsx");

export default function useTrackUserProfileActivityAction(activity) {
  let display;
  let require;
  ({ user: require, display } = activity);
  activity = activity.activity;
  const entry = activity.entry;
  const stream = activity.stream;
  const voiceChannelId = activity.voiceChannelId;
  let analyticsLocations = activity.analyticsLocations;
  let context;
  let trackUserProfileAction;
  analyticsLocations = undefined;
  let stateFromStores;
  const userProfileAnalyticsContext = require(activity[2]).useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  if (analyticsLocations == null) {
    analyticsLocations = display(activity[3])().analyticsLocations;
  }
  let obj = require(activity[2]);
  const tmp = require;
  const tmp2 = activity;
  const items = [stream];
  stateFromStores = require(activity[4]).useStateFromStores(items, () => stream.getUserOutbox(id.id));
  const items1 = [trackUserProfileAction, context, display, activity, stream, entry, stateFromStores, voiceChannelId, analyticsLocations];
  return entry((action) => {
    action = action.action;
    let obj = { action, analyticsLocations };
    trackUserProfileAction(obj);
    obj = { action, display, activity, entry, stream, outbox: stateFromStores, voiceChannelId, analyticsLocations };
    const merged = Object.assign(context);
    const result = outer1_0(activity[5]).trackUserProfileActivityAction(obj);
  }, items1);
};