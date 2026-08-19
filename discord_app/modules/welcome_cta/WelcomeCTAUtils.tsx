// === Module 8220: pickHelloSticker ===

// Module 8220 (pickHelloSticker)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import trackInviteDefault from "trackInvite" /* 7427 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { WELCOME_STICKERS } from "items" /* 8221 */;
import { AnalyticEvents } from "ME" /* 676 */;

const result = require("obj132").fileFinishedImporting("modules/welcome_cta/WelcomeCTAUtils.tsx");

export const pickHelloSticker = function pickHelloSticker() {
  const currentUser = authStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    num = DISCORD_EPOCHDefault.extractTimestamp(id);
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
    num = DISCORD_EPOCHDefault.extractTimestamp(id);
  }
  const obj2 = DISCORD_EPOCHDefault;
  return WELCOME_STICKERS[(num + obj2.extractTimestamp(obj2, id)) % WELCOME_STICKERS.length];
};
export const handleWelcomeCtaClicked = function handleWelcomeCtaClicked(messageChannel, message, stickerId) {
  let obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, trackInviteDefault.getSendMessageOptionsForReply(obj));
  obj = { is_reply: true, sticker_id: stickerId, target_user: message.author.id, sender: null };
  const currentUser = authStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  obj[3] = id;
  expandEventPropertiesDefault.track(AnalyticEvents.WELCOME_CTA_CLICKED, obj);
};