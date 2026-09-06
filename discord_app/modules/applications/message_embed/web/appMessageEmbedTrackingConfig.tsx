// === Module 7695: appMessageEmbedTrackingConfig ===

// Module 7695 (appMessageEmbedTrackingConfig)
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const LinkType = fn(7689).LinkType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/message_embed/web/appMessageEmbedTrackingConfig.tsx");

export const trackingConfigWithDefaults = function trackingConfigWithDefaults(id) {
  let str;
  if (id != null) {
    str = id.id;
  }
  if (str == null) {
    str = "0";
  }
  const obj = { id: str, linkType: null, referrerId: null, activityCustomId: null, onView: null, onLinkCopied: null, guildId: null, channelId: null, messageId: null, isDeadEnd: null, appEmbedState: null };
  let linkType;
  if (id != null) {
    linkType = id.linkType;
  }
  if (linkType == null) {
    linkType = LinkType.UNKNOWN;
  }
  obj.linkType = linkType;
  let referrerId;
  if (id != null) {
    referrerId = id.referrerId;
  }
  if (referrerId == null) {
    referrerId = AuthenticationStore.getId();
  }
  obj.referrerId = referrerId;
  let activityCustomId;
  if (id != null) {
    activityCustomId = id.activityCustomId;
  }
  obj.activityCustomId = activityCustomId;
  let onView;
  if (id != null) {
    onView = id.onView;
  }
  obj.onView = onView;
  let onLinkCopied;
  if (id != null) {
    onLinkCopied = id.onLinkCopied;
  }
  obj.onLinkCopied = onLinkCopied;
  let guildId;
  if (id != null) {
    guildId = id.guildId;
  }
  obj.guildId = guildId;
  let channelId;
  if (id != null) {
    channelId = id.channelId;
  }
  obj.channelId = channelId;
  let messageId;
  if (id != null) {
    messageId = id.messageId;
  }
  obj.messageId = messageId;
  let flag;
  if (id != null) {
    flag = id.isDeadEnd;
  }
  if (flag == null) {
    flag = false;
  }
  obj.isDeadEnd = flag;
  let appEmbedState;
  if (id != null) {
    appEmbedState = id.appEmbedState;
  }
  obj.appEmbedState = appEmbedState;
  return obj;
};