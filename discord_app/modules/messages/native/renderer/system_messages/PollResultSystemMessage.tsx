// === Module 8260: createPollResultSystemMessage ===

// Module 8260 (createPollResultSystemMessage)
import obj132 from "obj132" /* 2 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import set from "set" /* 1925 */;
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4034 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8187 */;
import createCommonMessageDefault from "createCommonMessage" /* 8188 */;
import parsePollResultSystemMessageEmbedDefault from "parsePollResultSystemMessageEmbed" /* 8261 */;

const EMOJI_URL_BASE_SIZE = set.EMOJI_URL_BASE_SIZE;
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx");

export const createPollResultSystemMessage = function createPollResultSystemMessage(message) {
  const tmp3 = parsePollResultSystemMessageEmbedDefault(message.message.embeds[0]);
  if (null == tmp3) {
    return null;
  } else if (null == message.message.messageReference) {
    return null;
  } else {
    message = message.message;
    const messageAuthorWithProcessedColor = obj6(8185).getMessageAuthorWithProcessedColor(message);
    let obj = { username: null, usernameOnClick: null, title: null, titleOnClick: null };
    obj[0] = messageAuthorWithProcessedColor.nick;
    obj = { message: null, author: null, roleStyle: null };
    obj[0] = message;
    obj[1] = messageAuthorWithProcessedColor;
    obj[2] = message.roleStyle;
    obj[1] = formatUsernameOnClickDefault(obj);
    obj[2] = tmp3.questionText;
    obj1 = { action: "bindJumpToMessage", targetChannelId: null, targetMessageId: null, medium: true };
    obj1[1] = message.messageReference.channel_id;
    obj1[2] = message.messageReference.message_id;
    obj[3] = obj1;
    if (0 === tmp3.totalVotes) {
      const intl3 = tmp21(1236).intl;
      const obj2 = {};
      const merged = Object.assign(obj);
      obj6 = { type: "emoji", content: "frowning", surrogate: "\u{1F626}" };
      obj2.sadEmojiHook = () => obj6;
      let formatToPartsResult = intl3.formatToParts(tmp21(1236).t["9dPxsm"], obj2);
    } else {
      const _Math = Math;
      const _HermesInternal = HermesInternal;
      const combined = "" + Math.round(tmp3.victorAnswerVotes / tmp3.totalVotes * 100) + "%";
      if (null == tmp3.victorAnswerId) {
        const intl2 = tmp21(1236).intl;
        const obj3 = {};
        const merged1 = Object.assign(obj);
        obj3.percentage = combined;
        formatToPartsResult = intl2.formatToParts(tmp21(1236).t.dqftZ2, obj3);
      } else {
        const items = [];
        let id = tmp3.victorEmoji;
        if (null == id) {
          const obj4 = { type: "text", content: null };
          obj4[1] = tmp3.victorAnswerText;
          items.push(obj4);
          const intl = tmp21(1236).intl;
          const obj5 = {};
          const merged2 = Object.assign(obj);
          obj6 = { type: "strong", content: null };
          obj6[1] = items;
          obj5.answerHook = () => obj6;
          obj5.percentage = combined;
          formatToPartsResult = intl.formatToParts(tmp21(1236).t.zFwIxC, obj5);
        } else {
          if (null != id.id) {
            const obj7 = { id: null, type: "customEmoji", alt: null, src: null, frozenSrc: null };
            ({ id: obj3[0], name: obj3[2] } = id);
            let tmpResult = getAvatarURLDefault;
            const obj8 = { id: null, animated: null, size: null };
            ({ id: obj5[0], animated: obj5[1] } = id);
            obj8[2] = EMOJI_URL_BASE_SIZE;
            obj7[3] = tmpResult.getEmojiURL(obj8);
            tmpResult = getAvatarURLDefault;
            const obj9 = { id: null, animated: false, size: null };
            id = id.id;
            obj9[0] = id;
            obj9[2] = EMOJI_URL_BASE_SIZE;
            obj7[4] = tmpResult.getEmojiURL(obj9);
            items.push(obj7);
          } else {
            obj = { type: "emoji", content: null, surrogate: null };
            obj[1] = parseRawEmojiObjectDefault.convertSurrogateToName(id.name, false);
            obj[2] = id.name;
            items.push(obj);
            const tmpResult1 = parseRawEmojiObjectDefault;
          }
          items.push({ type: "text", content: " " });
        }
      }
    }
    const obj10 = {};
    const merged3 = Object.assign(createCommonMessageDefault(message));
    obj10.content = formatToPartsResult;
    return obj10;
  }
};