import noop from "noop";
import createdAt from "createdAt";
import { MessageStates } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx");

export const useGuildSettingsRoleExampleMessage = function useGuildSettingsRoleExampleMessage(intl) {
  let closure_0 = intl;
  const items = [intl];
  return React.useMemo(() => {
    let obj = intl(outer1_3[3]);
    obj = {};
    obj = { channelId: "1337", content: intl };
    const merged = Object.assign(outer1_1(outer1_3[4])(obj));
    obj.state = outer1_6.SENT;
    obj.id = "31337";
    const messageRecord = obj.createMessageRecord(obj);
    const obj1 = { id: "313337", username: null, discriminator: "0000", bot: false };
    intl = intl(outer1_3[5]).intl;
    obj1[1] = intl.string(intl(outer1_3[5]).t.cqpybK);
    const tmp3 = new outer1_5(obj1);
    messageRecord.author = tmp3;
    const insertStaticUserResult = outer1_2(outer1_3[6]).insertStaticUser(tmp3);
    if (null != insertStaticUserResult) {
      messageRecord.author = insertStaticUserResult;
      messageRecord.author.getAvatarURL = () => callback(table[7]);
    }
    return messageRecord;
  }, items);
};