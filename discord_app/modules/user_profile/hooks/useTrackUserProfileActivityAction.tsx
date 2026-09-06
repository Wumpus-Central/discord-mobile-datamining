// discord_app/modules/user_profile/hooks/useTrackUserProfileActivityAction.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import ContentInventoryOutboxStore from "../../content_inventory/ContentInventoryOutboxStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

_mod19.useCallback;
let result = size.fileFinishedImporting("modules/user_profile/hooks/useTrackUserProfileActivityAction.tsx");

export default function useTrackUserProfileActivityAction(activity) {
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
    analyticsLocations = display(activity[3])().analyticsLocations;
  }
  let obj = require("UserProfileAnalyticsContext");
  const items = [stream];
  stateFromStores = require("initialize").useStateFromStores(items, () =>
    ContentInventoryOutboxStore.getUserOutbox(id.id),
  );
  const items1 = [
    trackUserProfileAction,
    context,
    display,
    activity,
    stream,
    entry,
    stateFromStores,
    voiceChannelId,
    analyticsLocations,
  ];
  return entry((action) => {
    action = action.action;
    let obj = { action, analyticsLocations };
    trackUserProfileAction(obj);
    obj = { action, display, activity, entry, stream, outbox: stateFromStores, voiceChannelId, analyticsLocations };
    const merged = Object.assign(context);
    const result = UserProfileAnalyticsUtils.trackUserProfileActivityAction(obj);
  }, items1);
}
