// === Module 11327: ForwardActionCreators ===

// Module 11327 (ForwardActionCreators)
import Constants from "Constants" /* 1085 */;
import MessageConstants from "MessageConstants" /* 4889 */;
import allSettledDefault from "allSettled" /* 5330 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import size from "module_2" /* 2 */;

let c2, importDefault;

const MessageFlags = Constants.MessageFlags;
const MessageSendLocation = MessageConstants.MessageSendLocation;
let obj = {
  sendForward(message, item, arg2) {
    let closure_0 = message;
    let closure_1 = item;
    let closure_2 = arg2;
    return (async function() {
      let closure_0;
      let tmp34;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let flags;
          let channel;
          v3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              let guild_id;
              flags = undefined;
              closure_2 = undefined;
              channel = ChannelStore.getChannel(flags);
              const channel1 = ChannelStore.getChannel(tmp.channel_id);
              let prop;
              if (closure_2 != null) {
                prop = tmp68.isICYMIGameContentForwarding;
              }
              if (prop) {
                guild_id = tmp(c2[6]).GAME_CONTENT_GUILD_ID;
              } else if (channel1 != null) {
                guild_id = channel1.guild_id;
              }
              if (null == channel1) {
                if (null == guild_id) {
                  const _Error2 = Error;
                  const self3 = this;
                  const self4 = this;
                  const error = new Error("Unable to find original channel for message");
                  throw error;
                }
              }
              if (null == channel) {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error1 = new Error("Unable to find destination channel for message");
                throw error1;
              } else {
                const obj14 = flags(c2[7]);
                const parsed = obj14.parse(channel, "");
                const obj6 = { guild_id, channel_id: null, message_id: null, type: tmp(c2[8]).MessageReferenceTypes.FORWARD, forward_only: tmp34 };
                ({ channel_id: obj15.channel_id, id: obj15.message_id } = tmp);
                let onlyAttachmentIds;
                if (closure_2 != null) {
                  onlyAttachmentIds = tmp68.onlyAttachmentIds;
                }
                if (null != onlyAttachmentIds) {
                  const obj10 = { attachment_ids: null, embed_indices: null };
                  ({ onlyAttachmentIds: obj7.attachment_ids, onlyEmbedIndices: obj7.embed_indices } = closure_2);
                  tmp34 = obj10;
                } else {
                  let onlyEmbedIndices;
                  if (closure_2 != null) {
                    onlyEmbedIndices = tmp68.onlyEmbedIndices;
                  }
                }
                flags = 0;
                let withMessage;
                if (closure_2 != null) {
                  withMessage = tmp68.withMessage;
                }
                closure_2 = withMessage;
                let num9 = 0;
                if (null != withMessage) {
                  const tmp39 = v3(flags(c2[9])(withMessage), 2);
                  num9 = 0;
                  if (tmp39[0]) {
                    closure_2 = tmp39[1];
                    const obj8 = tmp(c2[10]);
                    const addFlagResult = obj8.addFlag(0, constants.SUPPRESS_NOTIFICATIONS);
                    flags = addFlagResult;
                    num9 = addFlagResult;
                  }
                }
                const obj9 = flags(c2[11]);
                const obj11 = { messageReference: obj6, location: constants2.FORWARDING, eagerDispatch: false, flags: num9 };
                c2 = 1;
                v3 = 1;
                const obj12 = { value: obj9.sendMessage(channel.id, parsed, false, obj11), done: false };
                return obj12;
              }
            }
          } else {
            if (1 === c2) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj13 = { value, done: true };
                return obj13;
              } else {
                let result = null == closure_2 || "" === closure_2;
                if (!result) {
                  const obj2 = tmp(c2[12]);
                  result = obj2.isRatelimitedInChannel(channel, PermissionStore);
                }
                if (!result) {
                  const tmp18 = flags(c2[11]);
                  const id = channel.id;
                  const sendMessage = tmp18.sendMessage;
                  const obj24 = { location: constants2.FORWARDING, flags };
                  const obj3 = flags(c2[7]);
                  c2 = 2;
                  v3 = 1;
                  const obj25 = { value: sendMessage(id, obj3.parse(channel, closure_2), false, obj24), done: false };
                  return obj25;
                }
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            }
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp56) {
          v3 = 3;
          throw tmp56;
        }
      }
    })();
  },
  sendForwards(message, arr, arg2) {
    let closure_1;
    let closure_0 = message;
    importDefault = arg2;
    const tmp = allSettledDefault;
    return tmp(arr.map((item) => obj.sendForward(message, item, closure_1)));
  }
};
let result = size.fileFinishedImporting("modules/forwarding/ForwardActionCreators.tsx");

export default obj;