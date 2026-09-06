// discord_app/modules/messages/tryInjectMessage.tsx
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import MessageRecordUtils from "MessageRecordUtils.tsx";
import createMessageDefault from "createMessage.tsx";
import ChannelRecipientPrivateUserDataFlags from "../../../discord_common/js/shared/shared-constants/ChannelRecipientPrivateUserDataFlags.tsx";
import PrivateChannelRecipientActionCreatorsDefault from "../private_channel_recipient/PrivateChannelRecipientActionCreators.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

require = fn;
const Constants = fn(1074);
({ MessageFlags: closure_4, MessageStates: hasOwnProperty, MessageTypes: metroRequire } = Constants);
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/tryInjectMessage.tsx");

export const tryCreateInjectedMessage = function tryCreateInjectedMessage(id, id2) {
  let obj = map;
  if (map.get(id2.id) === id.id) {
    obj = {
      channelId: id2.id,
      type: constants3.IN_GAME_MESSAGE_NUX,
      content: "",
      author: id.author,
      flags: constants.EPHEMERAL,
      state: constants2.SENT,
    };
    const tmp19 = createMessageDefault(obj);
    const messageRecord = MessageRecordUtils.createMessageRecord(tmp19);
    ({ applicationId: tmp21.applicationId, timestamp: tmp21.timestamp } = id);
    let tmp4 = messageRecord;
  } else {
    tmp4 = null;
    if (null != id.applicationId) {
      let obj1 = FlagUtils;
      tmp4 = null;
      if (obj1.hasFlag(id.flags, constants.SENT_BY_SOCIAL_LAYER_INTEGRATION)) {
        tmp4 = null;
        if (id2.isDM()) {
          tmp4 = null;
          if (id.author.id !== AuthenticationStore.getId()) {
            tmp4 = null;
            if (null == id.activity) {
              let tmpResult = FlagUtils;
              let num = id2.recipientFlags;
              if (num == null) {
                num = 0;
              }
              tmp4 = null;
              if (
                !tmpResult.hasFlag(
                  num,
                  ChannelRecipientPrivateUserDataFlags.ChannelRecipientPrivateUserDataFlags
                    .DISMISSED_IN_GAME_MESSAGE_NUX,
                )
              ) {
                tmp4 = null;
                if (!obj.has(id2.id)) {
                  obj = {
                    channelId: id2.id,
                    type: constants3.IN_GAME_MESSAGE_NUX,
                    content: "",
                    author: id.author,
                    flags: constants.EPHEMERAL,
                    state: constants2.SENT,
                  };
                  tmpResult = MessageRecordUtils;
                  const messageRecord1 = tmpResult.createMessageRecord(createMessageDefault(obj));
                  ({ applicationId: tmp10.applicationId, timestamp: tmp10.timestamp } = id);
                  const result = obj.set(id2.id, id.id);
                  const tmp9 = createMessageDefault(obj);
                  let num2 = id2.recipientFlags;
                  if (num2 == null) {
                    num2 = 0;
                  }
                  const tmpResult1 = FlagUtils;
                  const setFlagResult = FlagUtils.setFlag(
                    num2,
                    ChannelRecipientPrivateUserDataFlags.ChannelRecipientPrivateUserDataFlags
                      .DISMISSED_IN_GAME_MESSAGE_NUX,
                    true,
                  );
                  const result1 = PrivateChannelRecipientActionCreatorsDefault.updatePrivateChannelRecipientFlags(
                    id2.id,
                    setFlagResult,
                  );
                  tmp4 = messageRecord1;
                  const tmp6Result = PrivateChannelRecipientActionCreatorsDefault;
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
    obj1 = { message: tmp4, position: "before" };
    tmp22 = obj1;
  }
  return tmp22;
};
