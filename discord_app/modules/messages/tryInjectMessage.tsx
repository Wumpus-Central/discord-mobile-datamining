// === Module 12286: tryInjectMessage ===

// Module 12286 (tryInjectMessage)
import FlagUtils from "FlagUtils" /* 1385 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5049 */;
import createMessageDefault from "createMessage" /* 8079 */;
import ChannelRecipientPrivateUserDataFlags from "ChannelRecipientPrivateUserDataFlags" /* 12287 */;
import PrivateChannelRecipientActionCreatorsDefault from "PrivateChannelRecipientActionCreators" /* 12288 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const Constants = fn(1074);
({ MessageFlags: closure_4, MessageStates: hasOwnProperty, MessageTypes: metroRequire } = Constants);
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/tryInjectMessage.tsx");

export const tryCreateInjectedMessage = function tryCreateInjectedMessage(id, id2) {
  if (map.get(id2.id) === id.id) {
    const obj3 = { channelId: id2.id, type: constants3.IN_GAME_MESSAGE_NUX, content: "", author: id.author, flags: constants.EPHEMERAL, state: constants2.SENT };
    const tmp19 = createMessageDefault(obj3);
    const messageRecord = MessageRecordUtils.createMessageRecord(tmp19);
    ({ applicationId: tmp21.applicationId, timestamp: tmp21.timestamp } = id);
    let tmp4 = messageRecord;
  } else {
    tmp4 = null;
    if (null != id.applicationId) {
      tmp4 = null;
      if (obj2.hasFlag(id.flags, constants.SENT_BY_SOCIAL_LAYER_INTEGRATION)) {
        tmp4 = null;
        if (id2.isDM()) {
          tmp4 = null;
          if (id.author.id !== AuthenticationStore.getId()) {
            tmp4 = null;
            if (null == id.activity) {
              let num = id2.recipientFlags;
              if (num == null) {
                num = 0;
              }
              tmp4 = null;
              if (!tmpResult.hasFlag(num, ChannelRecipientPrivateUserDataFlags.ChannelRecipientPrivateUserDataFlags.DISMISSED_IN_GAME_MESSAGE_NUX)) {
                tmp4 = null;
                if (!map.has(id2.id)) {
                  const obj4 = { channelId: id2.id, type: constants3.IN_GAME_MESSAGE_NUX, content: "", author: id.author, flags: constants.EPHEMERAL, state: constants2.SENT };
                  const tmp9 = createMessageDefault(obj4);
                  const messageRecord1 = MessageRecordUtils.createMessageRecord(tmp9);
                  ({ applicationId: tmp10.applicationId, timestamp: tmp10.timestamp } = id);
                  const result = map.set(id2.id, id.id);
                  const tmpResult3 = MessageRecordUtils;
                  let num2 = id2.recipientFlags;
                  if (num2 == null) {
                    num2 = 0;
                  }
                  const tmpResult4 = FlagUtils;
                  const setFlagResult = FlagUtils.setFlag(num2, ChannelRecipientPrivateUserDataFlags.ChannelRecipientPrivateUserDataFlags.DISMISSED_IN_GAME_MESSAGE_NUX, true);
                  const result1 = PrivateChannelRecipientActionCreatorsDefault.updatePrivateChannelRecipientFlags(id2.id, setFlagResult);
                  tmp4 = messageRecord1;
                  const tmp6Result = PrivateChannelRecipientActionCreatorsDefault;
                }
              }
              tmpResult = FlagUtils;
            }
          }
        }
      }
      obj2 = FlagUtils;
    }
  }
  let tmp22 = null;
  if (null != tmp4) {
    const obj5 = { message: tmp4, position: "before" };
    tmp22 = obj5;
  }
  return tmp22;
};