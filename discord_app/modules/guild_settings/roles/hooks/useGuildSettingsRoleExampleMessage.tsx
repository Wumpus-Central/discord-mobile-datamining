// discord_app/modules/guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx
import util from "../../../../intl/index.native.tsx";
import MessageRecordUtils from "../../../messages/MessageRecordUtils.tsx";
import createMessageDefault from "../../../messages/createMessage.tsx";
import UserActionCreatorsAll from "../../../../actions/UserActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserRecord from "../../../../records/UserRecord.tsx";

require = fn;
const MessageStates = fn(1074).MessageStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx");

export const useGuildSettingsRoleExampleMessage = function useGuildSettingsRoleExampleMessage(intl) {
  const content = intl;
  const items = [intl];
  return noop.useMemo(() => {
    let obj = {};
    obj = { channelId: "1337", content };
    const merged = Object.assign(createMessageDefault(obj));
    obj.state = MessageStates.SENT;
    obj.id = "31337";
    const messageRecord = obj.createMessageRecord(obj);
    const obj1 = { id: "313337", username: null, discriminator: "0000", bot: false };
    const intl = util.intl;
    obj1.username = intl.string(util.t.cqpybK);
    const tmp3 = new UserRecord(obj1);
    messageRecord.author = tmp3;
    const insertStaticUserResult = UserActionCreatorsAll.insertStaticUser(tmp3);
    if (null != insertStaticUserResult) {
      messageRecord.author = insertStaticUserResult;
      messageRecord.author.getAvatarURL = () => closure_1_1(closure_1_3[7]);
    }
    return messageRecord;
  }, items);
};
