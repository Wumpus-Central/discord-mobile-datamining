// discord_app/modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx
import util from "../../../../../intl/index.native.tsx";
import EmojiConstants from "../../../../emojis/EmojiConstants.tsx";
import AvatarUtilsDefault from "../../../../../utils/AvatarUtils.tsx";
import UnicodeEmojisDefault from "../../../../emojis/UnicodeEmojis.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import parsePollResultSystemMessageEmbedDefault from "../../../../polls/parsePollResultSystemMessageEmbed.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx",
);

export const createPollResultSystemMessage = function createPollResultSystemMessage(message) {
  const tmp3 = parsePollResultSystemMessageEmbedDefault(message.message.embeds[0]);
  if (null == tmp3) {
    return null;
  } else if (null == message.message.messageReference) {
    return null;
  } else {
    message = message.message;
    const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
    let obj = {
      username: messageAuthorWithProcessedColor.nick,
      usernameOnClick: null,
      title: null,
      titleOnClick: null,
    };
    obj = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
    obj.usernameOnClick = formatUsernameOnClickDefault(obj);
    obj.title = tmp3.questionText;
    const obj1 = {
      action: "bindJumpToMessage",
      targetChannelId: message.messageReference.channel_id,
      targetMessageId: message.messageReference.message_id,
      medium: true,
    };
    obj.titleOnClick = obj1;
    if (0 === tmp3.totalVotes) {
      const intl3 = util.intl;
      const obj2 = {};
      const merged = Object.assign(obj);
      let obj6 = { type: "emoji", content: "frowning", surrogate: "\u{1F626}" };
      obj2.sadEmojiHook = () => obj6;
      let formatToPartsResult = intl3.formatToParts(util.t["9dPxsm"], obj2);
    } else {
      const _Math = Math;
      const _HermesInternal = HermesInternal;
      const combined = "" + Math.round((tmp3.victorAnswerVotes / tmp3.totalVotes) * 100) + "%";
      if (null == tmp3.victorAnswerId) {
        const intl2 = util.intl;
        const obj3 = {};
        const merged1 = Object.assign(obj);
        obj3.percentage = combined;
        formatToPartsResult = intl2.formatToParts(util.t.dqftZ2, obj3);
      } else {
        const items = [];
        let id = tmp3.victorEmoji;
        if (null == id) {
          const obj4 = { type: "text", content: tmp3.victorAnswerText };
          items.push(obj4);
          const intl = util.intl;
          const obj5 = {};
          const merged2 = Object.assign(obj);
          obj6 = { type: "strong", content: items };
          obj5.answerHook = () => obj6;
          obj5.percentage = combined;
          formatToPartsResult = intl.formatToParts(util.t.zFwIxC, obj5);
        } else {
          if (null != id.id) {
            const obj7 = { id: null, type: "customEmoji", alt: null, src: null, frozenSrc: null };
            ({ id: obj3.id, name: obj3.alt } = id);
            let tmpResult = AvatarUtilsDefault;
            const obj8 = { id: null, animated: null, size: null };
            ({ id: obj5.id, animated: obj5.animated } = id);
            obj8.size = EMOJI_URL_BASE_SIZE;
            obj7.src = tmpResult.getEmojiURL(obj8);
            tmpResult = AvatarUtilsDefault;
            const obj9 = { id: null, animated: false, size: null };
            id = id.id;
            obj9.id = id;
            obj9.size = EMOJI_URL_BASE_SIZE;
            obj7.frozenSrc = tmpResult.getEmojiURL(obj9);
            items.push(obj7);
          } else {
            obj = {
              type: "emoji",
              content: UnicodeEmojisDefault.convertSurrogateToName(id.name, false),
              surrogate: id.name,
            };
            items.push(obj);
            const tmpResult1 = UnicodeEmojisDefault;
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
