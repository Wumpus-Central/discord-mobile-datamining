// discord_app/modules/applications/message_embed/web/appMessageEmbedTracking.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/message_embed/web/appMessageEmbedTracking.tsx");

export const ClickArea = {
  VIEW: "view",
  PLAY: "play",
  CLOUD_PLAY: "cloud_play",
  JOIN: "join",
  ADD_APP: "add_app",
  JOIN_SERVER: "join_server",
  INVITE: "invite",
  SYNC: "sync",
  CONTENT: "content",
  BANNER: "banner",
  STREAM: "stream",
  CONNECT_ACCOUNT: "connect_account",
};
export const trackAppEmbedClick = function trackAppEmbedClick(arg0) {
  ({ applicationId, linkType, area, referrerId, customId, isDeadEnd, messageId } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.APP_EMBED_CLICKED, {
    application_id: applicationId,
    link_type: linkType,
    area,
    referrer_id: referrerId,
    custom_id: customId,
    is_dead_end: isDeadEnd,
    message_id: messageId,
  });
};
export const trackAppEmbedViewed = function trackAppEmbedViewed(arg0) {
  ({ appId, linkType, referrerId, customId, guildId, channelId, messageId, appEmbedState } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.APP_EMBED_VIEWED, {
    application_id: appId,
    link_type: linkType,
    referrer_id: referrerId,
    custom_id: customId,
    guild_id: guildId,
    channel_id: channelId,
    message_id: messageId,
    app_embed_state: appEmbedState,
  });
};
export const useTrackAppEmbedViewed = function useTrackAppEmbedViewed(id) {
  _require = require("appMessageEmbedTrackingConfig").trackingConfigWithDefaults(id);
  noop.useRef(false);
  let obj = require("appMessageEmbedTrackingConfig");
  return require("useIntersectionObserver").useIsVisible((arg0) => {
    const current = ref.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = arg0;
    }
    if (tmp2) {
      ref.current = true;
      onView = onView.onView;
      if (onView != null) {
        onView();
      }
      ({ id, linkType, referrerId, activityCustomId, guildId, channelId, messageId, appEmbedState } = onView);
      const obj = {
        application_id: id,
        link_type: linkType,
        referrer_id: referrerId,
        custom_id: activityCustomId,
        guild_id: guildId,
        channel_id: channelId,
        message_id: messageId,
        app_embed_state: appEmbedState,
      };
      obj.track(AnalyticEvents.APP_EMBED_VIEWED, obj);
    }
  }, undefined);
};
export const trackAppEmbedLinkSent = function trackAppEmbedLinkSent(applicationId, ACTIVITY_INVITE, id, customId) {
  const obj = { application_id: applicationId, link_type: ACTIVITY_INVITE, referrer_id: id, custom_id: customId };
  obj.track(AnalyticEvents.APP_EMBED_LINK_SENT, obj);
};
