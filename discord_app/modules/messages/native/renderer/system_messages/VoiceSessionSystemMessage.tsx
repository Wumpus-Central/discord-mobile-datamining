// === Module 8070: VoiceSessionSystemMessage ===

// Module 8070 (VoiceSessionSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7960 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 7980 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/VoiceSessionSystemMessage.tsx");

export const createVoiceSessionSystemMessage = function createVoiceSessionSystemMessage(message) {
  ({ message, roleStyle } = message);
  _require = ChannelStore.getChannel(message.channel_id);
  const tmp3 = getHumanizedCallDurationDefault(message);
  let obj = require("useAuthorWithProcessedColor");
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  let obj1 = require("VoiceSessionUtils");
  const sortedVoiceSessionParticipants = obj1.getSortedVoiceSessionParticipants(message);
  const mapped = sortedVoiceSessionParticipants.map((user) => {
    const obj = { user, messageAuthor: useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(user, closure_0) };
    return obj;
  });
  if (null == tmp3) {
    const intl = tmp4(1114).intl;
    obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null };
    obj = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj.usernameOnClick = tmp(7962)(obj);
    let formatToPartsResult = intl.formatToParts(tmp4(1114).t.HzBfIN, obj);
  } else {
    const intl2 = tmp4(1114).intl;
    obj1 = { userCount: mapped.length + 1, username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, username2: null, username2OnClick: null, username3: null, username3OnClick: null, otherCount: null, duration: null };
    const obj2 = { message, author: messageAuthorWithProcessedColor, roleStyle };
    obj1.usernameOnClick = tmp(7962)(obj2);
    const first = mapped[0];
    let nick;
    if (first != null) {
      nick = first.messageAuthor.nick;
    }
    obj1.username2 = nick;
    let tmp7;
    if (null != mapped[0]) {
      const obj3 = { userId: mapped[0].user.id, message, author: mapped[0].messageAuthor, roleStyle };
      tmp7 = tmp(7962)(obj3);
    }
    obj1.username2OnClick = tmp7;
    let nick1;
    if (mapped[1] != null) {
      nick1 = tmp8.messageAuthor.nick;
    }
    obj1.username3 = nick1;
    let tmp10;
    if (null != mapped[1]) {
      const obj4 = { userId: mapped[1].user.id, message, author: mapped[1].messageAuthor, roleStyle };
      tmp10 = tmp(7962)(obj4);
    }
    obj1.username3OnClick = tmp10;
    obj1.otherCount = mapped.length - 1;
    obj1.duration = tmp3;
    formatToPartsResult = intl2.formatToParts(tmp4(1114).t.atbXuX, obj1);
  }
  const merged = Object.assign(tmp(7964)(message));
  return { content: formatToPartsResult };
};