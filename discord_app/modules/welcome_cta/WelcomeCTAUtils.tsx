// === Module 7906: pickHelloSticker ===

// Module 7906 (pickHelloSticker)
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
    num = importDefault(11).extractTimestamp(id);
    const obj = importDefault(11);
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
    num = importDefault(11).extractTimestamp(id);
    const obj = importDefault(11);
  }
  const obj2 = importDefault(11);
  return WELCOME_STICKERS[(num + obj2.extractTimestamp(obj2, id)) % WELCOME_STICKERS.length];
};
export const handleWelcomeCtaClicked = function handleWelcomeCtaClicked(messageChannel, message, stickerId) {
  let obj = importDefault(6814);
  obj = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  obj.sendGreetMessage(messageChannel.id, stickerId, importDefault(6814).getSendMessageOptionsForReply(obj));
  const obj2 = importDefault(6814);
  obj = { is_reply: true, sticker_id: stickerId, target_user: message.author.id, sender: null };
  const currentUser = authStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  obj[3] = id;
  importDefault(698).track(AnalyticEvents.WELCOME_CTA_CLICKED, obj);
};