// === Module 11140: map ===

// Module 11140 (map)
import hasFlag from "hasFlag" /* 1403 */;
import createMinimalMessageRecord from "createMinimalMessageRecord" /* 4803 */;
import createMessageDefault from "createMessage" /* 7500 */;
import ChannelRecipientPrivateUserDataFlags from "ChannelRecipientPrivateUserDataFlags" /* 11141 */;
import _modDef11142 from "module_11142" /* 11142 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ME from "ME" /* 676 */;

require = fn;
({ MessageFlags: c4, MessageStates: c5, MessageTypes: closure_6 } = ME);
const map = new Map();
let result = require("obj132").fileFinishedImporting("modules/messages/tryInjectMessage.tsx");

export const tryCreateInjectedMessage = function tryCreateInjectedMessage(id, closure_0) {
  let obj = map;
  if (map.get(_require.id) === id.id) {
    obj = { channelId: null, type: null, content: "", author: null, flags: null, state: null };
    obj[0] = _require.id;
    obj[1] = constants3.IN_GAME_MESSAGE_NUX;
    obj[3] = id.author;
    obj[4] = constants.EPHEMERAL;
    obj[5] = constants2.SENT;
    const tmp19 = createMessageDefault(obj);
    const messageRecord = createMinimalMessageRecord.createMessageRecord(tmp19);
    ({ applicationId: tmp21.applicationId, timestamp: tmp21.timestamp } = id);
    let tmp4 = messageRecord;
  } else {
    tmp4 = null;
    if (null != id.applicationId) {
      obj1 = hasFlag;
      tmp4 = null;
      if (obj1.hasFlag(id.flags, constants.SENT_BY_SOCIAL_LAYER_INTEGRATION)) {
        tmp4 = null;
        if (_require.isDM()) {
          tmp4 = null;
          if (id.author.id !== id.getId()) {
            tmp4 = null;
            if (null == id.activity) {
              let tmpResult = hasFlag;
              let num = _require.recipientFlags;
              if (num == null) {
                num = 0;
              }
              tmp4 = null;
              if (!tmpResult.hasFlag(num, ChannelRecipientPrivateUserDataFlags.ChannelRecipientPrivateUserDataFlags.DISMISSED_IN_GAME_MESSAGE_NUX)) {
                tmp4 = null;
                if (!obj.has(_require.id)) {
                  obj = { channelId: null, type: null, content: "", author: null, flags: null, state: null };
                  obj[0] = _require.id;
                  obj[1] = constants3.IN_GAME_MESSAGE_NUX;
                  obj[3] = id.author;
                  obj[4] = constants.EPHEMERAL;
                  obj[5] = constants2.SENT;
                  tmpResult = createMinimalMessageRecord;
                  const messageRecord1 = tmpResult.createMessageRecord(createMessageDefault(obj));
                  ({ applicationId: tmp10.applicationId, timestamp: tmp10.timestamp } = id);
                  const result = obj.set(_require.id, id.id);
                  const tmp9 = createMessageDefault(obj);
                  let num2 = _require.recipientFlags;
                  if (num2 == null) {
                    num2 = 0;
                  }
                  const tmpResult1 = hasFlag;
                  const setFlagResult = hasFlag.setFlag(num2, ChannelRecipientPrivateUserDataFlags.ChannelRecipientPrivateUserDataFlags.DISMISSED_IN_GAME_MESSAGE_NUX, true);
                  const result1 = _modDef11142.updatePrivateChannelRecipientFlags(_require.id, setFlagResult);
                  tmp4 = messageRecord1;
                  const tmp6Result = _modDef11142;
                }
              }
            }
          }
        }
      }
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