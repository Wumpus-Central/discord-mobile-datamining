// discord_app/modules/messages/tryInjectMessage.tsx
import hasFlag from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import createMinimalMessageRecord from "MessageRecordUtils.tsx";
import createMessageDefault from "createMessage.tsx";
import closure_3 from "../../stores/AuthenticationStore.tsx";
import ME from "../../Constants.tsx";

require = arg1;
({ MessageFlags: c4, MessageStates: c5, MessageTypes: closure_6 } = ME);
const map = new Map();
let result = require("set").fileFinishedImporting("modules/messages/tryInjectMessage.tsx");

export const tryCreateInjectedMessage = function tryCreateInjectedMessage(id, closure_0) {
  let obj = map;
  if (map.get(closure_0.id) === id.id) {
    obj = { channelId: null, type: null, content: "", author: null, flags: null, state: null };
    obj[0] = closure_0.id;
    obj[1] = constants3.IN_GAME_MESSAGE_NUX;
    obj[3] = id.author;
    obj[4] = constants.EPHEMERAL;
    obj[5] = constants2.SENT;
    const tmp19 = createMessageDefault(obj);
    const messageRecord = createMinimalMessageRecord.createMessageRecord(tmp19);
    ({ applicationId: tmp21.applicationId, timestamp: tmp21.timestamp } = id);
    let tmp4 = messageRecord;
    const obj9 = createMinimalMessageRecord;
  } else {
    tmp4 = null;
    if (null != id.applicationId) {
      obj1 = hasFlag;
      tmp4 = null;
      if (obj1.hasFlag(id.flags, constants.SENT_BY_SOCIAL_LAYER_INTEGRATION)) {
        tmp4 = null;
        if (closure_0.isDM()) {
          tmp4 = null;
          if (id.author.id !== id.getId()) {
            tmp4 = null;
            if (null == id.activity) {
              let tmpResult = tmp(1399);
              let num = closure_0.recipientFlags;
              if (num == null) {
                num = 0;
              }
              tmp4 = null;
              if (!tmpResult.hasFlag(num, tmp(11527).ChannelRecipientPrivateUserDataFlags.DISMISSED_IN_GAME_MESSAGE_NUX)) {
                tmp4 = null;
                if (!obj.has(closure_0.id)) {
                  obj = { channelId: null, type: null, content: "", author: null, flags: null, state: null };
                  obj[0] = closure_0.id;
                  obj[1] = constants3.IN_GAME_MESSAGE_NUX;
                  obj[3] = id.author;
                  obj[4] = tmp3.EPHEMERAL;
                  obj[5] = constants2.SENT;
                  tmpResult = tmp(4737);
                  const messageRecord1 = tmpResult.createMessageRecord(createMessageDefault(obj));
                  ({ applicationId: tmp10.applicationId, timestamp: tmp10.timestamp } = id);
                  const result = obj.set(closure_0.id, id.id);
                  const tmp6 = importDefault;
                  const tmp9 = createMessageDefault(obj);
                  let num2 = closure_0.recipientFlags;
                  if (num2 == null) {
                    num2 = 0;
                  }
                  const tmpResult1 = tmp(1399);
                  const setFlagResult = tmp(1399).setFlag(num2, tmp(11527).ChannelRecipientPrivateUserDataFlags.DISMISSED_IN_GAME_MESSAGE_NUX, true);
                  const result1 = tmp6(11528).updatePrivateChannelRecipientFlags(closure_0.id, setFlagResult);
                  tmp4 = messageRecord1;
                  const tmp6Result = tmp6(11528);
                }
              }
            }
          }
        }
      }
      tmp3 = constants;
    }
  }
  let tmp22 = null;
  if (null != tmp4) {
    obj1 = { message: null, position: "before" };
    obj1[0] = tmp4;
    tmp22 = obj1;
  }
  return tmp22;
};