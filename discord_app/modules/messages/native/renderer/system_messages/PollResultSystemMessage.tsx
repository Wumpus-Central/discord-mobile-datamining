// === Module 14423: PollResultSystemMessage ===

// Module 14423 (PollResultSystemMessage)
import EmojiConstants from "EmojiConstants" /* 1390 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 12008 */;
import PollTextUtils from "PollTextUtils" /* 12238 */;
import parsePollResultSystemMessageEmbedDefault from "parsePollResultSystemMessageEmbed" /* 14431 */;
import size from "module_2" /* 2 */;

const AvatarUtilsDefault = getEmojiURL(1413);
const UnicodeEmojisDefault = getEmojiURL(4989);
const formatUsernameOnClickDefault = getEmojiURL(14379);
const createCommonMessageDefault = getEmojiURL(14380);
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx");

export function createPollResultSystemMessage(message) {
  let getEmojiURL = importDefault;
  let obj = dependencyMap;
  const tmp = parsePollResultSystemMessageEmbedDefault(message.message.embeds[0]);
  let tmp2 = null;
  if (null != tmp) {
    tmp2 = null;
    if (null != message.message.messageReference) {
      const obj2 = {};
      const merged = Object.assign(createCommonMessageDefault(message));
      message = message.message;
      let v9dPxsm = require;
      let messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
      let fn = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, title: null, titleOnClick: null };
      const obj4 = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
      fn.usernameOnClick = formatUsernameOnClickDefault(obj4);
      fn.title = PollTextUtils.getPollPlainText(tmp.questionText);
      const obj6 = { action: "bindJumpToMessage", targetChannelId: message.messageReference.channel_id, targetMessageId: message.messageReference.message_id, medium: true };
      fn.titleOnClick = obj6;
      if (0 === tmp.totalVotes) {
        const intl3 = v9dPxsm(1112).intl;
        v9dPxsm = v9dPxsm(1112).t["9dPxsm"];
        obj = {};
        const merged1 = Object.assign(fn);
        let obj8 = { type: "emoji", content: "frowning", surrogate: "\u{1F626}" };
        fn = () => obj8;
        obj.sadEmojiHook = fn;
        let formatToPartsResult = intl3.formatToParts(v9dPxsm, obj);
        obj2.content = formatToPartsResult;
      } else {
        const _Math = Math;
        const _HermesInternal = HermesInternal;
        messageAuthorWithProcessedColor = "" + Math.round(tmp.victorAnswerVotes / tmp.totalVotes * 100) + "%";
        if (null != tmp.victorAnswerId) {
          items = [];
          let id = tmp.victorEmoji;
          if (null == id) {
            const parsePollMarkupResult = v9dPxsm(14424).parsePollMarkup(tmp.victorAnswerText, false);
            if (null != parsePollMarkupResult) {
              const push = items.push;
              const _Array = Array;
              let tmp13 = parsePollMarkupResult;
              if (!Array.isArray(parsePollMarkupResult)) {
                const items1 = [parsePollMarkupResult];
                tmp13 = items1;
              }
              const items2 = [];
              HermesBuiltin.arraySpread(tmp13, 0);
              HermesBuiltin.apply(items2, items);
            }
            const intl = v9dPxsm(1112).intl;
            const obj7 = {};
            const merged2 = Object.assign(fn);
            obj8 = { type: "strong", content: items };
            obj7.answerHook = () => obj8;
            obj7.percentage = messageAuthorWithProcessedColor;
            formatToPartsResult = intl.formatToParts(v9dPxsm(1112).t.zFwIxC, obj7);
            const v9dPxsmResult = v9dPxsm(14424);
          } else {
            if (null != id.id) {
              const obj10 = { id: null, type: "customEmoji", alt: null, src: null, frozenSrc: null };
              ({ id: obj9.id, name: obj9.alt } = id);
              const emojiURL = AvatarUtilsDefault;
              const obj12 = { id: null, animated: null, size: null };
              ({ id: obj11.id, animated: obj11.animated } = id);
              obj12.size = EMOJI_URL_BASE_SIZE;
              obj10.src = emojiURL.getEmojiURL(obj12);
              const emojiURL1 = AvatarUtilsDefault;
              getEmojiURL = emojiURL1.getEmojiURL;
              const obj13 = { id: null, animated: false, size: null };
              id = id.id;
              obj13.id = id;
              obj13.size = EMOJI_URL_BASE_SIZE;
              obj10.frozenSrc = getEmojiURL(obj13);
              items.push(obj10);
            } else {
              const obj14 = { type: "emoji", content: null, surrogate: null };
              const emojiURL2 = UnicodeEmojisDefault;
              obj14.content = emojiURL2.convertSurrogateToName(id.name, false);
              obj14.surrogate = id.name;
              items.push(obj14);
            }
            items.push({ type: "text", content: " " });
          }
        }
      }
      const intl2 = v9dPxsm(1112).intl;
      const obj15 = {};
      const merged3 = Object.assign(fn);
      obj15.percentage = messageAuthorWithProcessedColor;
      formatToPartsResult = intl2.formatToParts(v9dPxsm(1112).t.dqftZ2, obj15);
    }
  }
  return tmp2;
}