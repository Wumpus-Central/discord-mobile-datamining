// discord_app/modules/guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx
import createMessageDefault from "../../../messages/createMessage.tsx";
import _fetchProfileAll from "../../../../actions/UserActionCreators.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import createdAt from "../../../../records/UserRecord.tsx";
import { MessageStates } from "../../../../Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx");

export const useGuildSettingsRoleExampleMessage = function useGuildSettingsRoleExampleMessage(intl) {
  closure_0 = intl;
  const items = [intl];
  return React.useMemo(() => {
    intl(dependencyMap[3]);
    const obj = { channelId: "1337", content: intl };
    const merged = Object.assign(createMessageDefault(obj));
    obj.state = MessageStates.SENT;
    obj.id = "31337";
    const messageRecord = obj.createMessageRecord(obj);
    obj1 = { id: "313337", username: null, discriminator: "0000", bot: false };
    intl = intl(dependencyMap[5]).intl;
    obj1[1] = intl.string(intl(dependencyMap[5]).t.cqpybK);
    const tmp3 = new closure_1_5(obj1);
    messageRecord.author = tmp3;
    const insertStaticUserResult = _fetchProfileAll.insertStaticUser(tmp3);
    if (null != insertStaticUserResult) {
      messageRecord.author = insertStaticUserResult;
      messageRecord.author.getAvatarURL = () => callback(table[7]);
    }
    return messageRecord;
  }, items);
};