// discord_app/modules/guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import MessageRecordUtils from "../../../messages/MessageRecordUtils.tsx";
import createMessageDefault from "../../../messages/createMessage.tsx";
import UserActionCreatorsAll from "../../../../actions/UserActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserRecord from "../../../../records/UserRecord.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const MessageStates = Constants.MessageStates;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (content) {
      let intl;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== content) {
        const obj2 = { state: MessageStates.SENT, id: "31337" };
        const createMessageRecord = MessageRecordUtils.createMessageRecord;
        const obj3 = { channelId: "1337", content };
        MessageRecordUtils;
        const merged = Object.assign(createMessageDefault(obj3));
        const messageRecord = createMessageRecord(obj2);
        const obj4 = { id: "313337", username: intl.string(intl2.t.cqpybK), discriminator: "0000", bot: false };
        intl = intl2.intl;
        const self = this;
        const self2 = this;
        const tmp13 = new UserRecord(obj4);
        messageRecord.author = tmp13;
        const obj5 = UserActionCreatorsAll;
        const insertStaticUserResult = obj5.insertStaticUser(tmp13);
        if (null != insertStaticUserResult) {
          messageRecord.author = insertStaticUserResult;
          messageRecord.author.getAvatarURL = () =>
            require("../../../../../discord_assets/assets/premium/wumpus-avatar.png.js");
        }
        cResult[0] = content;
        cResult[1] = messageRecord;
        tmp4 = messageRecord;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (content) => {
      const items = [content];
      return react.useMemo(() => {
        let intl;
        const obj = { state: MessageStates.SENT, id: "31337" };
        const createMessageRecord = MessageRecordUtils.createMessageRecord;
        const obj2 = { channelId: "1337", content };
        MessageRecordUtils;
        const merged = Object.assign(createMessageDefault(obj2));
        const messageRecord = createMessageRecord(obj);
        const obj3 = { id: "313337", username: intl.string(intl2.t.cqpybK), discriminator: "0000", bot: false };
        intl = intl2.intl;
        const tmp4 = new UserRecord(obj3);
        messageRecord.author = tmp4;
        const obj4 = UserActionCreatorsAll;
        const insertStaticUserResult = obj4.insertStaticUser(tmp4);
        if (null != insertStaticUserResult) {
          messageRecord.author = insertStaticUserResult;
          messageRecord.author.getAvatarURL = () => closure_1_1(closure_1_3[9]);
        }
        return messageRecord;
      }, items);
    };
const result = size.fileFinishedImporting("modules/guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx");

export const useGuildSettingsRoleExampleMessage = tmp2;
