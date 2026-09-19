// === Module 8299: PollResultSystemMessage ===

// Module 8299 (PollResultSystemMessage)
import util from "util" /* 1115 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4409 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8217 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8219 */;
import createCommonMessageDefault from "createCommonMessage" /* 8221 */;
import parsePollResultSystemMessageEmbedDefault from "parsePollResultSystemMessageEmbed" /* 8300 */;
import size from "module_2" /* 2 */;

const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx");

export const createPollResultSystemMessage = function createPollResultSystemMessage(message) {
  const tmp3 = parsePollResultSystemMessageEmbedDefault(message.message.embeds[0]);
  if (null == tmp3) {
    return null;
  } else if (null == message.message.messageReference) {
    return null;
  } else {
    message = message.message;
    const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, title: null, titleOnClick: null };
    const obj4 = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
    obj2.usernameOnClick = formatUsernameOnClickDefault(obj4);
    obj2.title = tmp3.questionText;
    const obj6 = { action: "bindJumpToMessage", targetChannelId: message.messageReference.channel_id, targetMessageId: message.messageReference.message_id, medium: true };
    obj2.titleOnClick = obj6;
    if (0 === tmp3.totalVotes) {
      const intl3 = util.intl;
      const obj7 = {};
      const merged = Object.assign(obj2);
      let obj11 = { type: "emoji", content: "frowning", surrogate: "\u{1F626}" };
      obj7.sadEmojiHook = () => obj11;
      let formatToPartsResult = intl3.formatToParts(util.t["9dPxsm"], obj7);
    } else {
      const _Math = Math;
      const _HermesInternal = HermesInternal;
      const combined = "" + Math.round(tmp3.victorAnswerVotes / tmp3.totalVotes * 100) + "%";
      if (null == tmp3.victorAnswerId) {
        const intl2 = util.intl;
        const obj8 = {};
        const merged1 = Object.assign(obj2);
        obj8.percentage = combined;
        formatToPartsResult = intl2.formatToParts(util.t.dqftZ2, obj8);
      } else {
        const items = [];
        let id = tmp3.victorEmoji;
        if (null == id) {
          const obj9 = { type: "text", content: tmp3.victorAnswerText };
          items.push(obj9);
          const intl = util.intl;
          const obj10 = {};
          const merged2 = Object.assign(obj2);
          obj11 = { type: "strong", content: items };
          obj10.answerHook = () => obj11;
          obj10.percentage = combined;
          formatToPartsResult = intl.formatToParts(util.t.zFwIxC, obj10);
        } else {
          if (null != id.id) {
            const obj12 = { id: null, type: "customEmoji", alt: null, src: null, frozenSrc: null };
            ({ id: obj3.id, name: obj3.alt } = id);
            const obj13 = { id: null, animated: null, size: null };
            ({ id: obj5.id, animated: obj5.animated } = id);
            obj13.size = EMOJI_URL_BASE_SIZE;
            obj12.src = AvatarUtilsDefault.getEmojiURL(obj13);
            const tmpResult = AvatarUtilsDefault;
            const obj15 = { id: null, animated: false, size: null };
            id = id.id;
            obj15.id = id;
            obj15.size = EMOJI_URL_BASE_SIZE;
            obj12.frozenSrc = AvatarUtilsDefault.getEmojiURL(obj15);
            items.push(obj12);
            const tmpResult3 = AvatarUtilsDefault;
          } else {
            const obj = { type: "emoji", content: UnicodeEmojisDefault.convertSurrogateToName(id.name, false), surrogate: id.name };
            items.push(obj);
            const tmpResult4 = UnicodeEmojisDefault;
          }
          items.push({ type: "text", content: " " });
        }
      }
    }
    const obj16 = {};
    const merged3 = Object.assign(createCommonMessageDefault(message));
    obj16.content = formatToPartsResult;
    return obj16;
  }
};