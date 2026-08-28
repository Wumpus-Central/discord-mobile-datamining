// === Module 7925: createVoiceSessionSystemMessage ===

// Module 7925 (createVoiceSessionSystemMessage)
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 7835 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/VoiceSessionSystemMessage.tsx");

export const createVoiceSessionSystemMessage = function createVoiceSessionSystemMessage(message) {
  ({ message, roleStyle } = message);
  let _require;
  _require = channel.getChannel(message.channel_id);
  const tmp3 = getHumanizedCallDurationDefault(message);
  let obj = _require(7816);
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj1 = _require(7926);
  const sortedVoiceSessionParticipants = obj1.getSortedVoiceSessionParticipants(message);
  const mapped = sortedVoiceSessionParticipants.map((user) => {
    const obj = { user, messageAuthor: callback(closure_1_2[2]).getUserAuthorWithProcessedColor(user, callback) };
    return obj;
  });
  if (null == tmp3) {
    const intl = tmp4(1236).intl;
    obj = { username: null, usernameOnClick: null };
    obj[0] = messageAuthorWithProcessedColor.nick;
    obj = { message: null, author: null, roleStyle: null };
    obj[0] = message;
    obj[1] = messageAuthorWithProcessedColor;
    obj[2] = roleStyle;
    obj[1] = tmp(7818)(obj);
    let formatToPartsResult = intl.formatToParts(tmp4(1236).t.HzBfIN, obj);
  } else {
    const intl2 = tmp4(1236).intl;
    obj1 = { userCount: null, username: null, usernameOnClick: null, username2: null, username2OnClick: null, username3: null, username3OnClick: null, otherCount: null, duration: null };
    obj1[0] = mapped.length + 1;
    obj1[1] = messageAuthorWithProcessedColor.nick;
    const obj2 = { message: null, author: null, roleStyle: null };
    obj2[0] = message;
    obj2[1] = messageAuthorWithProcessedColor;
    obj2[2] = roleStyle;
    obj1[2] = tmp(7818)(obj2);
    const first = mapped[0];
    let nick;
    if (first != null) {
      nick = first.messageAuthor.nick;
    }
    obj1[3] = nick;
    let tmp7;
    if (null != mapped[0]) {
      const obj3 = { userId: null, message: null, author: null, roleStyle: null };
      obj3[0] = mapped[0].user.id;
      obj3[1] = message;
      obj3[2] = mapped[0].messageAuthor;
      obj3[3] = roleStyle;
      tmp7 = tmp(7818)(obj3);
    }
    obj1[4] = tmp7;
    let nick1;
    if (mapped[1] != null) {
      nick1 = tmp8.messageAuthor.nick;
    }
    obj1[5] = nick1;
    let tmp10;
    if (null != mapped[1]) {
      const obj4 = { userId: null, message: null, author: null, roleStyle: null };
      obj4[0] = mapped[1].user.id;
      obj4[1] = message;
      obj4[2] = mapped[1].messageAuthor;
      obj4[3] = roleStyle;
      tmp10 = tmp(7818)(obj4);
    }
    obj1[6] = tmp10;
    obj1[7] = mapped.length - 1;
    obj1[8] = tmp3;
    formatToPartsResult = intl2.formatToParts(tmp4(1236).t.atbXuX, obj1);
  }
  const merged = Object.assign(tmp(7819)(message));
  return { content: formatToPartsResult };
};