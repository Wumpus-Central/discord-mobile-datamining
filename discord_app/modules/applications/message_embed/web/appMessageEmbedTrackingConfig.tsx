// === Module 7365: trackingConfigWithDefaults ===

// Module 7365 (trackingConfigWithDefaults)
import closure_0 from "fetchFingerprint" /* 1218 */;
import { LinkType } from "LinkType" /* 7359 */;

const result = require("set").fileFinishedImporting("modules/applications/message_embed/web/appMessageEmbedTrackingConfig.tsx");

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
  obj[1] = linkType;
  let referrerId;
  if (id != null) {
    referrerId = id.referrerId;
  }
  if (referrerId == null) {
    referrerId = id.getId();
  }
  obj[2] = referrerId;
  let activityCustomId;
  if (id != null) {
    activityCustomId = id.activityCustomId;
  }
  obj[3] = activityCustomId;
  let onView;
  if (id != null) {
    onView = id.onView;
  }
  obj[4] = onView;
  let onLinkCopied;
  if (id != null) {
    onLinkCopied = id.onLinkCopied;
  }
  obj[5] = onLinkCopied;
  let guildId;
  if (id != null) {
    guildId = id.guildId;
  }
  obj[6] = guildId;
  let channelId;
  if (id != null) {
    channelId = id.channelId;
  }
  obj[7] = channelId;
  let messageId;
  if (id != null) {
    messageId = id.messageId;
  }
  obj[8] = messageId;
  let flag;
  if (id != null) {
    flag = id.isDeadEnd;
  }
  if (flag == null) {
    flag = false;
  }
  obj[9] = flag;
  let appEmbedState;
  if (id != null) {
    appEmbedState = id.appEmbedState;
  }
  obj[10] = appEmbedState;
  return obj;
};