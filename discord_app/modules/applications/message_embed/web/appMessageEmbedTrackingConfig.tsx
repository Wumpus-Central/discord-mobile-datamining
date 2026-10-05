// === Module 7179: appMessageEmbedTrackingConfig ===

// Module 7179 (appMessageEmbedTrackingConfig)
import MessageEmbedConstants from "MessageEmbedConstants" /* 7173 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const LinkType = MessageEmbedConstants.LinkType;
const result = size.fileFinishedImporting("modules/applications/message_embed/web/appMessageEmbedTrackingConfig.tsx");

export const trackingConfigWithDefaults = function trackingConfigWithDefaults(id) {
  let activityCustomId;
  let appEmbedState;
  let channelId;
  let flag;
  let guildId;
  let linkType;
  let messageId;
  let onLinkCopied;
  let onView;
  let referrerId;
  let str;
  if (id != null) {
    str = id.id;
  }
  if (str == null) {
    str = "0";
  }
  const obj = { id: str, linkType, referrerId, activityCustomId, onView, onLinkCopied, guildId, channelId, messageId, isDeadEnd: flag, appEmbedState };
  linkType = undefined;
  if (id != null) {
    linkType = id.linkType;
  }
  if (linkType == null) {
    linkType = LinkType.UNKNOWN;
  }
  referrerId = undefined;
  if (id != null) {
    referrerId = id.referrerId;
  }
  if (referrerId == null) {
    referrerId = AuthenticationStore.getId();
  }
  activityCustomId = undefined;
  if (id != null) {
    activityCustomId = id.activityCustomId;
  }
  onView = undefined;
  if (id != null) {
    onView = id.onView;
  }
  onLinkCopied = undefined;
  if (id != null) {
    onLinkCopied = id.onLinkCopied;
  }
  guildId = undefined;
  if (id != null) {
    guildId = id.guildId;
  }
  channelId = undefined;
  if (id != null) {
    channelId = id.channelId;
  }
  messageId = undefined;
  if (id != null) {
    messageId = id.messageId;
  }
  flag = undefined;
  if (id != null) {
    flag = id.isDeadEnd;
  }
  if (flag == null) {
    flag = false;
  }
  appEmbedState = undefined;
  if (id != null) {
    appEmbedState = id.appEmbedState;
  }
  return obj;
};