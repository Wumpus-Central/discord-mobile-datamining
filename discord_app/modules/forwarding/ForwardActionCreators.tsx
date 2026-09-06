// discord_app/modules/forwarding/ForwardActionCreators.tsx
import allSettledDefault from "../../../_runtime/04803_allSettled.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const MessageFlags = fn(1074).MessageFlags;
const MessageSendLocation = fn(4553).MessageSendLocation;
let obj = {
  sendForward(messageRecord, alsoForwardToChannelId, arg2) {
    closure_0 = messageRecord;
    closure_2 = arg2;
    return (async () => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              alsoForwardToChannelId = tmp5;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              const channel = ChannelStore.getChannel(alsoForwardToChannelId);
              closure_128_0 = channel;
              const channel1 = ChannelStore.getChannel(tmp2.channel_id);
              let prop;
              if (dependencyMap != null) {
                prop = dependencyMap.isICYMIGameContentForwarding;
              }
              if (prop) {
                let guild_id = tmp2(8348).GAME_CONTENT_GUILD_ID;
              } else if (channel1 != null) {
                guild_id = channel1.guild_id;
              }
              if (null == channel1) {
                if (null == guild_id) {
                  const _Error2 = Error;
                  const error = new Error("Unable to find original channel for message");
                  throw error;
                }
              }
              if (null == channel) {
                const _Error = Error;
                const error1 = new Error("Unable to find destination channel for message");
                throw error1;
              } else {
                const parsed = alsoForwardToChannelId(7682).parse(channel, "");
                let obj1 = { guild_id, channel_id: null, message_id: null, type: null, forward_only: null };
                ({ channel_id: obj16.channel_id, id: obj16.message_id } = tmp2);
                obj1.type = tmp2(1096).MessageReferenceTypes.FORWARD;
                let onlyAttachmentIds;
                if (dependencyMap != null) {
                  onlyAttachmentIds = dependencyMap.onlyAttachmentIds;
                }
                if (null != onlyAttachmentIds) {
                  let obj2 = { attachment_ids: null, embed_indices: null };
                  ({ onlyAttachmentIds: obj8.attachment_ids, onlyEmbedIndices: obj8.embed_indices } = dependencyMap);
                  const tmp34 = obj2;
                } else {
                  let onlyEmbedIndices;
                  if (dependencyMap != null) {
                    onlyEmbedIndices = dependencyMap.onlyEmbedIndices;
                  }
                }
                obj1.forward_only = tmp34;
                closure_128_1 = 0;
                let withMessage;
                if (dependencyMap != null) {
                  withMessage = dependencyMap.withMessage;
                }
                closure_128_2 = withMessage;
                let num9 = 0;
                if (null != withMessage) {
                  const tmp39 = v3(alsoForwardToChannelId(7684)(withMessage), 2);
                  num9 = 0;
                  if (tmp39[0]) {
                    closure_128_2 = tmp39[1];
                    const addFlagResult = tmp2(1384).addFlag(0, constants.SUPPRESS_NOTIFICATIONS);
                    closure_128_1 = addFlagResult;
                    num9 = addFlagResult;
                    const obj9 = tmp2(1384);
                  }
                }
                const obj10 = alsoForwardToChannelId(7456);
                let obj3 = {
                  messageReference: obj1,
                  location: constants2.FORWARDING,
                  eagerDispatch: false,
                  flags: num9,
                };
                dependencyMap = 1;
                v3 = 1;
                const obj4 = { value: obj10.sendMessage(channel.id, parsed, false, obj3), done: false };
                return obj4;
              }
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                let result = null == closure_128_2;
                if (!result) {
                  result = "" === closure_128_2;
                }
                if (!result) {
                  obj1 = tmp2(11684);
                  result = obj1.isRatelimitedInChannel(closure_128_0, PermissionStore);
                }
                if (!result) {
                  obj2 = alsoForwardToChannelId(7456);
                  const id = closure_128_0.id;
                  obj3 = alsoForwardToChannelId(7682);
                  const obj6 = { location: constants2.FORWARDING, flags: closure_128_1 };
                  dependencyMap = 2;
                  v3 = 1;
                  const obj7 = {
                    value: obj2.sendMessage(id, obj3.parse(closure_128_0, closure_128_2), false, obj6),
                    done: false,
                  };
                  return obj7;
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp60) {
          v3 = tmp;
          throw tmp60;
        }
      }
    })();
  },
  sendForwards(message, arr, arg2) {
    closure_0 = message;
    importDefault = arg2;
    return allSettledDefault(arr.map((item) => obj.sendForward(closure_0, item, closure_1)));
  },
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/forwarding/ForwardActionCreators.tsx");

export default obj;
