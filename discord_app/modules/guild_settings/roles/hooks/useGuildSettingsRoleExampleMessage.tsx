// === Module 17629: useGuildSettingsRoleExampleMessage ===

// Module 17629 (useGuildSettingsRoleExampleMessage)
import closure_4 from "noop" /* 19 */;
import closure_5 from "createdAt" /* 1385 */;
import { MessageStates } from "ME" /* 1074 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx");

export const useGuildSettingsRoleExampleMessage = function useGuildSettingsRoleExampleMessage(intl) {
  closure_0 = intl;
  const items = [intl];
  return React.useMemo(() => {
    let obj = intl(closure_1_3[3]);
    obj = {};
    obj = { channelId: "1337", content: intl };
    const merged = Object.assign(closure_1_1(closure_1_3[4])(obj));
    obj.state = closure_1_6.SENT;
    obj.id = "31337";
    const messageRecord = obj.createMessageRecord(obj);
    obj1 = { id: "313337", username: null, discriminator: "0000", bot: false };
    intl = intl(closure_1_3[5]).intl;
    obj1[1] = intl.string(intl(closure_1_3[5]).t.cqpybK);
    const tmp3 = new closure_1_5(obj1);
    messageRecord.author = tmp3;
    const insertStaticUserResult = closure_1_2(closure_1_3[6]).insertStaticUser(tmp3);
    if (null != insertStaticUserResult) {
      messageRecord.author = insertStaticUserResult;
      messageRecord.author.getAvatarURL = () => callback(table[7]);
    }
    return messageRecord;
  }, items);
};