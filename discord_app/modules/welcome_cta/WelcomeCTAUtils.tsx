import { trackInvite } from "../../actions/MessageActionCreators.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";
// discord_app/modules/welcome_cta/WelcomeCTAUtils.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { WELCOME_STICKERS } from "items";
import { AnalyticEvents } from "ME";

const result = require("ME").fileFinishedImporting("modules/welcome_cta/WelcomeCTAUtils.tsx");

export const pickHelloSticker = function pickHelloSticker() {
  const currentUser = authStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    num = DISCORD_EPOCH.extractTimestamp(id);
    const obj = DISCORD_EPOCH;
  }
  return WELCOME_STICKERS[num % WELCOME_STICKERS.length];
};
export const pickWelcomeSticker = function pickWelcomeSticker(id) {
  const currentUser = authStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    num = DISCORD_EPOCH.extractTimestamp(id);
    const obj = DISCORD_EPOCH;
  }
  const obj2 = DISCORD_EPOCH;
  return WELCOME_STICKERS[(num + obj2.extractTimestamp(obj2, id)) % WELCOME_STICKERS.length];
};
export const handleWelcomeCtaClicked = function handleWelcomeCtaClicked(messageChannel, message, stickerId) {
  let obj = trackInvite;
  obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, trackInvite.getSendMessageOptionsForReply(obj));
  const obj2 = trackInvite;
  obj = { is_reply: true, sticker_id: stickerId, target_user: message.author.id, sender: null };
  const currentUser = authStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  obj[3] = id;
  expandEventProperties.track(AnalyticEvents.WELCOME_CTA_CLICKED, obj);
};