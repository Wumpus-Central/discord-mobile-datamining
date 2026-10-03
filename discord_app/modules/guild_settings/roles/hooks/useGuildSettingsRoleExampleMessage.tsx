// === Module 17776: useGuildSettingsRoleExampleMessage ===

// Module 17776 (useGuildSettingsRoleExampleMessage)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5112 */;
import createMessageDefault from "createMessage" /* 7248 */;
import UserActionCreatorsAll from "UserActionCreators" /* 7852 */;
import noop from "module_19" /* 19 */;
import UserRecord from "UserRecord" /* 1391 */;

const require = globalThis.__r;

require = fn;
const MessageStates = fn(1085).MessageStates;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx");

export const useGuildSettingsRoleExampleMessage = ReactCompilerGating.isReactCompilerEnabled() ? ((content) => {
  const cResult = c.c(2);
  if (cResult[0] !== content) {
    const obj2 = {};
    const obj3 = { channelId: "1337", content };
    const merged = Object.assign(createMessageDefault(obj3));
    obj2.state = MessageStates.SENT;
    obj2.id = "31337";
    const messageRecord = MessageRecordUtils.createMessageRecord(obj2);
    const obj4 = { id: "313337", username: null, discriminator: "0000", bot: false };
    const intl = util.intl;
    obj4.username = intl.string(util.t.cqpybK);
    const tmp14 = new UserRecord(obj4);
    messageRecord.author = tmp14;
    const tmpResult = MessageRecordUtils;
    const insertStaticUserResult = UserActionCreatorsAll.insertStaticUser(tmp14);
    if (null != insertStaticUserResult) {
      messageRecord.author = insertStaticUserResult;
      messageRecord.author.getAvatarURL = () => require("module_13133");
    }
    cResult[0] = content;
    cResult[1] = messageRecord;
    let tmp4 = messageRecord;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((content) => {
  const items = [content];
  return noop.useMemo(() => {
    const obj2 = {};
    const merged = Object.assign(createMessageDefault({ channelId: "1337", content }));
    obj2.state = MessageStates.SENT;
    obj2.id = "31337";
    const messageRecord = MessageRecordUtils.createMessageRecord(obj2);
    const obj4 = { id: "313337", username: null, discriminator: "0000", bot: false };
    const intl = util.intl;
    obj4.username = intl.string(util.t.cqpybK);
    const tmp3 = new UserRecord(obj4);
    messageRecord.author = tmp3;
    const obj3 = { channelId: "1337", content };
    const insertStaticUserResult = UserActionCreatorsAll.insertStaticUser(tmp3);
    if (null != insertStaticUserResult) {
      messageRecord.author = insertStaticUserResult;
      messageRecord.author.getAvatarURL = () => closure_1_1(closure_1_3[9]);
    }
    return messageRecord;
  }, items);
});