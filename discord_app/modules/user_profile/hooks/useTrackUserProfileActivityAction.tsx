// discord_app/modules/user_profile/hooks/useTrackUserProfileActivityAction.tsx
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import closure_4 from "map" /* 9199 */;

noop.useCallback;
let result = set.fileFinishedImporting("modules/user_profile/hooks/useTrackUserProfileActivityAction.tsx");

export default function useTrackUserProfileActivityAction(activity) {
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
    const result = closure_1_0(activity[5]).trackUserProfileActivityAction(obj);
  }, items1);
};