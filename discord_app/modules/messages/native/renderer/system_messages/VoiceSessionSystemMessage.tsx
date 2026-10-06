// === Module 7751: VoiceSessionSystemMessage ===

// Module 7751 (VoiceSessionSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7630 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7632 */;
import createCommonMessageDefault from "createCommonMessage" /* 7634 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 7650 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/VoiceSessionSystemMessage.tsx");

export const createVoiceSessionSystemMessage = function createVoiceSessionSystemMessage(message) {
  let closure_0;
  let formatToPartsResult;
  let nick;
  let nick1;
  let obj4;
  let obj6;
  let roleStyle;
  let tmp10;
  let tmp7;
  ({ message, roleStyle } = message);
  _require = ChannelStore.getChannel(message.channel_id);
  const tmp3 = getHumanizedCallDurationDefault(message);
  let obj = require("useAuthorWithProcessedColor");
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let obj2 = require("VoiceSessionUtils");
  const sortedVoiceSessionParticipants = obj2.getSortedVoiceSessionParticipants(message);
  const mapped = sortedVoiceSessionParticipants.map((user) => {
    let obj2;
    const obj = { user, messageAuthor: obj2.getUserAuthorWithProcessedColor(user, closure_0) };
    obj2 = useAuthorWithProcessedColor;
    return obj;
  });
  if (null == tmp3) {
    const intl = tmp4(1126).intl;
    const formatToParts = intl.formatToParts;
    const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj4) };
    const HzBfIN = tmp4(1126).t.HzBfIN;
    obj4 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    formatToPartsResult = formatToParts(HzBfIN, obj3);
  } else {
    const intl2 = tmp4(1126).intl;
    const formatToParts2 = intl2.formatToParts;
    const obj5 = { userCount: mapped.length + 1, username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault(obj6), username2: nick, username2OnClick: tmp7, username3: nick1, username3OnClick: tmp10, otherCount: mapped.length - 1, duration: tmp3 };
    const atbXuX = tmp4(1126).t.atbXuX;
    const first = mapped[0];
    nick = undefined;
    obj6 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    if (first != null) {
      nick = first.messageAuthor.nick;
    }
    tmp7 = undefined;
    if (null != mapped[0]) {
      const obj7 = { userId: mapped[0].user.id, message, author: mapped[0].messageAuthor, roleStyle };
      tmp7 = formatUsernameOnClickDefault(obj7);
    }
    nick1 = undefined;
    if (mapped[1] != null) {
      nick1 = tmp8.messageAuthor.nick;
    }
    tmp10 = undefined;
    if (null != mapped[1]) {
      const obj8 = { userId: mapped[1].user.id, message, author: mapped[1].messageAuthor, roleStyle };
      tmp10 = formatUsernameOnClickDefault(obj8);
    }
    formatToPartsResult = formatToParts2(atbXuX, obj5);
  }
  const obj9 = { content: formatToPartsResult };
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj9;
};