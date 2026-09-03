// === Module 11746: _joinOrStartActivityInChannel ===

// Module 11746 (_joinOrStartActivityInChannel)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "participantFromServer" /* 1385 */;
import closure_5 from "ensureGuildLoaded" /* 1386 */;
import closure_6 from "handleConnectionOpen" /* 1980 */;

const require = arg1;
function _joinOrStartActivityInChannel() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (channel === 2) {
        channel = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          channel = 2;
          if (0 === store) {
            if (arg0 === 1) {
              channel = 3;
              throw arg1;
            } else if (arg0 === 2) {
              channel = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c3 = tmp2;
              dependencyMap = tmp3;
              let callback;
              let callback2;
              dependencyMap = undefined;
              c3 = undefined;
              store = undefined;
              ({ appId: c0, channelId: c1, analyticsLocations: c2, customId: c3, referrerId: c4 } = callback);
              channel = undefined;
              let voiceChannelId;
              let guild_id;
              closure_8 = undefined;
              let length;
              let compositeInstanceId;
              store = 1;
              channel = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp6) {
            if (arg0 === 1) {
              channel = 3;
              throw arg1;
            } else if (arg0 === 2) {
              channel = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              channel = store.getSelfEmbeddedActivityForChannel(callback2);
              voiceChannelId = voiceChannelId.getVoiceChannelId();
              let applicationId;
              if (channel != null) {
                applicationId = channel.applicationId;
              }
              if (applicationId === callback) {
                if (voiceChannelId === callback2) {
                  guild_id = channel.getChannel(callback2);
                  guild_id = undefined;
                  if (guild_id != null) {
                    guild_id = guild_id.guild_id;
                  }
                  callback2 = guild_id;
                  if (guild_id == null) {
                    callback2 = null;
                  }
                  closure_8 = callback2;
                  callback2(9536)(closure_8, channel.location);
                  channel = 3;
                  return { value: true, done: true };
                }
              }
              const embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(callback2);
              length = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === c0);
              compositeInstanceId = undefined;
              if (length.length > 0) {
                compositeInstanceId = length[0].compositeInstanceId;
              }
              let obj2 = callback(9486);
              obj2 = { channelId: null, applicationId: null, isStart: null, embeddedActivitiesManager: null, analyticsLocations: null, customId: null, referrerId: null };
              obj2[0] = callback2;
              obj2[1] = callback;
              obj2[2] = null == compositeInstanceId;
              obj2[3] = callback2(9469)();
              obj2[4] = dependencyMap;
              obj2[5] = c3;
              obj2[6] = store;
              store = 2;
              channel = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj2.runPrimaryAppCommandOrJoinEmbeddedActivity(obj2);
              return obj3;
            }
          } else if (arg0 === 1) {
            channel = 3;
            throw arg1;
          } else if (arg0 === 2) {
            channel = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            channel = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp43) {
          channel = tmp;
          throw tmp43;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/applications/message_embed/native/utils/joinOrStartActivityInChannel.tsx");

export const joinOrStartActivityInChannel = function joinOrStartActivityInChannel(arg0) {
  const self = this;
  const apply = _joinOrStartActivityInChannel.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};