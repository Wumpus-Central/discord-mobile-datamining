// discord_app/modules/messages/tryInjectMessage.tsx
import fetchFingerprint from "fetchFingerprint";
import ME from "ME";
import { hasFlag } from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import { createMessage } from "createMessage.tsx";
import { createMinimalMessageRecord } from "MessageRecordUtils.tsx";

let c4;
let c5;
let closure_6;
const require = arg1;
({ MessageFlags: c4, MessageStates: c5, MessageTypes: closure_6 } = ME);
const map = new Map();
let result = require("createMessage").fileFinishedImporting("modules/messages/tryInjectMessage.tsx");

export const tryCreateInjectedMessage = function tryCreateInjectedMessage(id, closure_0) {
  let obj = map;
  if (map.get(closure_0.id) === id.id) {
    obj = { channelId: null, type: null, content: "", author: null, flags: null, state: null };
    obj[0] = closure_0.id;
    obj[1] = constants3.IN_GAME_MESSAGE_NUX;
    obj[3] = id.author;
    obj[4] = constants.EPHEMERAL;
    obj[5] = constants2.SENT;
    const tmp19 = createMessage(obj);
    const messageRecord = createMinimalMessageRecord.createMessageRecord(tmp19);
    ({ applicationId: tmp21.applicationId, timestamp: tmp21.timestamp } = id);
    let tmp4 = messageRecord;
    const obj9 = createMinimalMessageRecord;
  } else {
    tmp4 = null;
    if (null != id.applicationId) {
      let obj1 = hasFlag;
      tmp4 = null;
      if (obj1.hasFlag(id.flags, constants.SENT_BY_SOCIAL_LAYER_INTEGRATION)) {
        tmp4 = null;
        if (closure_0.isDM()) {
          tmp4 = null;
          if (id.author.id !== id.getId()) {
            tmp4 = null;
            if (null == id.activity) {
              let tmpResult = tmp(1384);
              let num = closure_0.recipientFlags;
              if (num == null) {
                num = 0;
              }
              tmp4 = null;
              if (!tmpResult.hasFlag(num, tmp(11361).ChannelRecipientPrivateUserDataFlags.DISMISSED_IN_GAME_MESSAGE_NUX)) {
                tmp4 = null;
                if (!obj.has(closure_0.id)) {
                  obj = { channelId: null, type: null, content: "", author: null, flags: null, state: null };
                  obj[0] = closure_0.id;
                  obj[1] = constants3.IN_GAME_MESSAGE_NUX;
                  obj[3] = id.author;
                  obj[4] = tmp3.EPHEMERAL;
                  obj[5] = constants2.SENT;
                  tmpResult = tmp(4523);
                  const messageRecord1 = tmpResult.createMessageRecord(createMessage(obj));
                  ({ applicationId: tmp10.applicationId, timestamp: tmp10.timestamp } = id);
                  const result = obj.set(closure_0.id, id.id);
                  const tmp6 = importDefault;
                  const tmp9 = createMessage(obj);
                  let num2 = closure_0.recipientFlags;
                  if (num2 == null) {
                    num2 = 0;
                  }
                  const tmpResult1 = tmp(1384);
                  const setFlagResult = tmp(1384).setFlag(num2, tmp(11361).ChannelRecipientPrivateUserDataFlags.DISMISSED_IN_GAME_MESSAGE_NUX, true);
                  const result1 = tmp6(11362).updatePrivateChannelRecipientFlags(closure_0.id, setFlagResult);
                  tmp4 = messageRecord1;
                  const tmp6Result = tmp6(11362);
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