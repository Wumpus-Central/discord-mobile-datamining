// discord_app/modules/forwarding/ForwardActionCreators.tsx
import _slicedToArray from "_slicedToArray";
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { MessageFlags } from "ME";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

const require = arg1;
let obj = {
  sendForward(closure_0, alsoForwardToChannelId, closure_1) {
    closure_1 = alsoForwardToChannelId;
    let closure_2 = closure_1;
    return callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c1 = tmp5;
              let channel = tmp2;
              channel = undefined;
              c1 = undefined;
              dependencyMap = undefined;
              channel = outer1_5.getChannel(outer1_1);
              const channel1 = outer1_5.getChannel(outer1_0.channel_id);
              let prop;
              if (dependencyMap != null) {
                prop = tmp74.isICYMIGameContentForwarding;
              }
              if (prop) {
                let guild_id = outer1_0(6160).GAME_CONTENT_GUILD_ID;
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
                const parsed = outer1_1(5971).parse(channel, "");
                let obj1 = { guild_id: null, channel_id: null, message_id: null, type: null, forward_only: null };
                obj1[0] = guild_id;
                ({ channel_id: obj16[1], id: obj16[2] } = tmp72);
                obj1[3] = outer1_0(694).MessageReferenceTypes.FORWARD;
                let onlyAttachmentIds;
                if (tmp74 != null) {
                  onlyAttachmentIds = tmp74.onlyAttachmentIds;
                }
                if (null != onlyAttachmentIds) {
                  let obj2 = { attachment_ids: null, embed_indices: null };
                  ({ onlyAttachmentIds: obj8[0], onlyEmbedIndices: obj8[1] } = tmp74);
                  const tmp34 = obj2;
                } else {
                  let onlyEmbedIndices;
                  if (tmp74 != null) {
                    onlyEmbedIndices = tmp74.onlyEmbedIndices;
                  }
                }
                obj1[4] = tmp34;
                c1 = 0;
                let withMessage;
                if (tmp74 != null) {
                  withMessage = tmp74.withMessage;
                }
                dependencyMap = withMessage;
                let num9 = 0;
                if (null != withMessage) {
                  const tmp39 = v0(outer1_1(5972)(withMessage), 2);
                  num9 = 0;
                  if (tmp39[0]) {
                    dependencyMap = tmp39[1];
                    const addFlagResult = outer1_0(1384).addFlag(0, outer1_7.SUPPRESS_NOTIFICATIONS);
                    c1 = addFlagResult;
                    num9 = addFlagResult;
                    const obj9 = outer1_0(1384);
                  }
                }
                const obj10 = outer1_1(5718);
                let obj3 = { messageReference: null, location: null, eagerDispatch: false, flags: null };
                obj3[0] = obj1;
                obj3[1] = outer1_8.FORWARDING;
                obj3[3] = num9;
                dependencyMap = 1;
                v0 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = obj10.sendMessage(channel.id, parsed, false, obj3);
                return obj4;
              }
              tmp72 = outer1_0;
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                let result = null == dependencyMap;
                if (!result) {
                  result = "" === dependencyMap;
                }
                if (!result) {
                  obj1 = outer1_0(6161);
                  result = obj1.isRatelimitedInChannel(channel, outer1_6);
                }
                if (!result) {
                  obj2 = outer1_1(5718);
                  const id = channel.id;
                  obj3 = outer1_1(5971);
                  const obj6 = { location: null, flags: null };
                  obj6[0] = outer1_8.FORWARDING;
                  obj6[1] = c1;
                  dependencyMap = 2;
                  v0 = 1;
                  const obj7 = { value: null, done: false };
                  obj7[0] = obj2.sendMessage(id, obj3.parse(channel, dependencyMap), false, obj6);
                  return obj7;
                }
              }
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            v0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp60) {
          v0 = tmp;
          throw tmp60;
        }
      }
    })();
  },
  sendForwards(outer1_8, c1, arg2) {
    let closure_0 = outer1_8;
    const importDefault = arg2;
    return importDefault(4432)(c1.map((alsoForwardToChannelId) => outer1_9.sendForward(closure_0, alsoForwardToChannelId, closure_1)));
  }
};
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/forwarding/ForwardActionCreators.tsx");

export default obj;