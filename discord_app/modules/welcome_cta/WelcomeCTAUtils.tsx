// discord_app/modules/welcome_cta/WelcomeCTAUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import UserStore from "../../stores/UserStore.tsx";

const WELCOME_STICKERS = fn(8346).WELCOME_STICKERS;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/welcome_cta/WelcomeCTAUtils.tsx");

export const pickHelloSticker = function pickHelloSticker() {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    num = SnowflakeUtilsDefault.extractTimestamp(id);
  }
  return WELCOME_STICKERS[num % WELCOME_STICKERS.length];
};
export const pickWelcomeSticker = function pickWelcomeSticker(id) {
  const currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    num = SnowflakeUtilsDefault.extractTimestamp(id);
  }
  const obj2 = SnowflakeUtilsDefault;
  return WELCOME_STICKERS[(num + obj2.extractTimestamp(obj2, id)) % WELCOME_STICKERS.length];
};
export const handleWelcomeCtaClicked = function handleWelcomeCtaClicked(messageChannel, message, stickerId) {
  const obj = MessageActionCreatorsDefault;
  obj.sendGreetMessage(
    messageChannel.id,
    stickerId,
    MessageActionCreatorsDefault.getSendMessageOptionsForReply({
      channel: messageChannel,
      message,
      shouldMention: true,
      showMentionToggle: true,
    }),
  );
  const obj3 = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  const obj5 = { is_reply: true, sticker_id: stickerId, target_user: message.author.id, sender: null };
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  obj5.sender = id;
  AnalyticsUtilsDefault.track(AnalyticEvents.WELCOME_CTA_CLICKED, obj5);
};
