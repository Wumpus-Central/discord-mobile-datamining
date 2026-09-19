// === Module 8327: VoiceSessionSystemMessage ===

// Module 8327 (VoiceSessionSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8217 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8219 */;
import createCommonMessageDefault from "createCommonMessage" /* 8221 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 8237 */;
import ChannelStore from "ChannelStore" /* 2041 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/VoiceSessionSystemMessage.tsx");

export const createVoiceSessionSystemMessage = function createVoiceSessionSystemMessage(message) {
  ({ message, roleStyle } = message);
  _require = ChannelStore.getChannel(message.channel_id);
  const tmp3 = getHumanizedCallDurationDefault(message);
  const messageAuthorWithProcessedColor = require("useAuthorWithProcessedColor").getMessageAuthorWithProcessedColor(message);
  let obj = require("useAuthorWithProcessedColor");
  const sortedVoiceSessionParticipants = require("VoiceSessionUtils").getSortedVoiceSessionParticipants(message);
  const mapped = sortedVoiceSessionParticipants.map((user) => {
    const obj = { user, messageAuthor: useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(user, closure_0) };
    return obj;
  });
  if (null == tmp3) {
    const intl = tmp4(1115).intl;
    const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null };
    const obj4 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj3.usernameOnClick = formatUsernameOnClickDefault(obj4);
    let formatToPartsResult = intl.formatToParts(tmp4(1115).t.HzBfIN, obj3);
  } else {
    const intl2 = tmp4(1115).intl;
    const obj5 = { userCount: mapped.length + 1, username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, username2: null, username2OnClick: null, username3: null, username3OnClick: null, otherCount: null, duration: null };
    const obj6 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj5.usernameOnClick = formatUsernameOnClickDefault(obj6);
    const first = mapped[0];
    let nick;
    if (first != null) {
      nick = first.messageAuthor.nick;
    }
    obj5.username2 = nick;
    let tmp7;
    if (null != mapped[0]) {
      const obj7 = { userId: mapped[0].user.id, message, author: mapped[0].messageAuthor, roleStyle };
      tmp7 = formatUsernameOnClickDefault(obj7);
    }
    obj5.username2OnClick = tmp7;
    let nick1;
    if (mapped[1] != null) {
      nick1 = tmp8.messageAuthor.nick;
    }
    obj5.username3 = nick1;
    let tmp10;
    if (null != mapped[1]) {
      const obj8 = { userId: mapped[1].user.id, message, author: mapped[1].messageAuthor, roleStyle };
      tmp10 = formatUsernameOnClickDefault(obj8);
    }
    obj5.username3OnClick = tmp10;
    obj5.otherCount = mapped.length - 1;
    obj5.duration = tmp3;
    formatToPartsResult = intl2.formatToParts(tmp4(1115).t.atbXuX, obj5);
  }
  const merged = Object.assign(createCommonMessageDefault(message));
  return { content: formatToPartsResult };
};