// === Module 19792: useGuildSettingsRoleExampleMessage ===

// Module 19792 (useGuildSettingsRoleExampleMessage)
import util from "util" /* 1113 */;
import MessageRecordUtils from "MessageRecordUtils" /* 6063 */;
import UserActionCreatorsAll from "UserActionCreators" /* 8752 */;
import createMessageDefault from "createMessage" /* 10319 */;
import noop from "module_19" /* 19 */;
import UserRecord from "UserRecord" /* 1397 */;

require = fn;
const MessageStates = fn(1072).MessageStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx");

export function useGuildSettingsRoleExampleMessage(intl) {
  const content = intl;
  const items = [intl];
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
      messageRecord.author.getAvatarURL = () => closure_1_1(closure_1_3[7]);
    }
    return messageRecord;
  }, items);
}