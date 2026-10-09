// === Module 7375: appMessageEmbedTracking ===

// Module 7375 (appMessageEmbedTracking)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
function trackAppEmbedViewed(arg0) {
  ({ appId, linkType, referrerId, customId, guildId, channelId, messageId, appEmbedState } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.APP_EMBED_VIEWED, { application_id: appId, link_type: linkType, referrer_id: referrerId, custom_id: customId, guild_id: guildId, channel_id: channelId, message_id: messageId, app_embed_state: appEmbedState });
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/applications/message_embed/web/appMessageEmbedTracking.tsx");

export const ClickArea = { VIEW: "view", PLAY: "play", CLOUD_PLAY: "cloud_play", JOIN: "join", ADD_APP: "add_app", JOIN_SERVER: "join_server", INVITE: "invite", SYNC: "sync", CONTENT: "content", BANNER: "banner", STREAM: "stream", CONNECT_ACCOUNT: "connect_account" };
export const trackAppEmbedClick = function trackAppEmbedClick(arg0) {
  ({ applicationId, linkType, area, referrerId, customId, isDeadEnd, messageId } = arg0);
  AnalyticsUtilsDefault.track(AnalyticEvents.APP_EMBED_CLICKED, { application_id: applicationId, link_type: linkType, area, referrer_id: referrerId, custom_id: customId, is_dead_end: isDeadEnd, message_id: messageId });
};
export { trackAppEmbedViewed };
export const useTrackAppEmbedViewed = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackAppEmbedViewed(id) {
  const cResult = require("c").c(4);
  if (cResult[0] !== id) {
    const result = tmp(7376).trackingConfigWithDefaults(id);
    cResult[0] = id;
    cResult[1] = result;
    let tmp4 = result;
    const tmpResult = tmp(7376);
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  noop.useRef(false);
  if (cResult[2] !== tmp4) {
    const fn = function s(arg0) {
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
        const obj2 = { application_id: id, link_type: linkType, referrer_id: referrerId, custom_id: activityCustomId, guild_id: guildId, channel_id: channelId, message_id: messageId, app_embed_state: appEmbedState };
        AnalyticsUtilsDefault.track(AnalyticEvents.APP_EMBED_VIEWED, obj2);
      }
    };
    cResult[2] = tmp4;
    cResult[3] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[3];
  }
  let obj = require("c");
  return require("useIntersectionObserver").useIsVisible(tmp6, undefined);
}) : (function useTrackAppEmbedViewed(id) {
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
      const obj2 = { application_id: id, link_type: linkType, referrer_id: referrerId, custom_id: activityCustomId, guild_id: guildId, channel_id: channelId, message_id: messageId, app_embed_state: appEmbedState };
      AnalyticsUtilsDefault.track(AnalyticEvents.APP_EMBED_VIEWED, obj2);
    }
  }, undefined);
});
export const trackAppEmbedLinkSent = function trackAppEmbedLinkSent(applicationId, ACTIVITY_INVITE, id, customId) {
  AnalyticsUtilsDefault.track(AnalyticEvents.APP_EMBED_LINK_SENT, { application_id: applicationId, link_type: ACTIVITY_INVITE, referrer_id: id, custom_id: customId });
};