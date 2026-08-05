// discord_app/modules/applications/message_embed/web/appMessageEmbedTracking.tsx
import noop from "noop";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("expandEventProperties").fileFinishedImporting("modules/applications/message_embed/web/appMessageEmbedTracking.tsx");

export const ClickArea = { VIEW: "view", PLAY: "play", CLOUD_PLAY: "cloud_play", JOIN: "join", ADD_APP: "add_app", JOIN_SERVER: "join_server", INVITE: "invite", SYNC: "sync", CONTENT: "content", BANNER: "banner", STREAM: "stream", CONNECT_ACCOUNT: "connect_account" };
export const trackAppEmbedClick = function trackAppEmbedClick(arg0) {
  let applicationId;
  let area;
  let customId;
  let isDeadEnd;
  let linkType;
  let messageId;
  let referrerId;
  ({ applicationId, linkType, area, referrerId, customId, isDeadEnd, messageId } = arg0);
  importDefault(698).track(AnalyticEvents.APP_EMBED_CLICKED, { application_id: applicationId, link_type: linkType, area, referrer_id: referrerId, custom_id: customId, is_dead_end: isDeadEnd, message_id: messageId });
};
export const trackAppEmbedViewed = function trackAppEmbedViewed(arg0) {
  let appEmbedState;
  let appId;
  let channelId;
  let customId;
  let guildId;
  let linkType;
  let messageId;
  let referrerId;
  ({ appId, linkType, referrerId, customId, guildId, channelId, messageId, appEmbedState } = arg0);
  importDefault(698).track(AnalyticEvents.APP_EMBED_VIEWED, { application_id: appId, link_type: linkType, referrer_id: referrerId, custom_id: customId, guild_id: guildId, channel_id: channelId, message_id: messageId, app_embed_state: appEmbedState });
};
export const useTrackAppEmbedViewed = function useTrackAppEmbedViewed(id) {
  _require = _require(7074).trackingConfigWithDefaults(id);
  let closure_1 = React.useRef(false);
  let obj = _require(7074);
  return _require(7075).useIsVisible((arg0) => {
    let activityCustomId;
    let appEmbedState;
    let channelId;
    let guildId;
    let id;
    let linkType;
    let messageId;
    let referrerId;
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
      let obj = ref(outer1_2[2]);
      obj = { application_id: null, link_type: null, referrer_id: null, custom_id: null, guild_id: null, channel_id: null, message_id: null, app_embed_state: null };
      obj[0] = id;
      obj[1] = linkType;
      obj[2] = referrerId;
      obj[3] = activityCustomId;
      obj[4] = guildId;
      obj[5] = channelId;
      obj[6] = messageId;
      obj[7] = appEmbedState;
      obj.track(outer1_4.APP_EMBED_VIEWED, obj);
      const tmp3 = onView;
    }
  }, undefined);
};
export const trackAppEmbedLinkSent = function trackAppEmbedLinkSent(applicationId, ACTIVITY_INVITE, closure_5, customId) {
  let obj = importDefault(698);
  obj = { application_id: applicationId, link_type: ACTIVITY_INVITE, referrer_id: closure_5, custom_id: customId };
  obj.track(AnalyticEvents.APP_EMBED_LINK_SENT, obj);
};