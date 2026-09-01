// === Module 11518: _joinOrStartActivityInChannel ===

// Module 11518 (_joinOrStartActivityInChannel)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "participantFromServer" /* 1386 */;
import closure_5 from "ensureGuildLoaded" /* 1387 */;
import closure_6 from "handleConnectionOpen" /* 1981 */;

const require = arg1;
function _joinOrStartActivityInChannel() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      c3 = tmp2;
      dependencyMap = tmp3;
      ({ appId: c0, channelId: c1, analyticsLocations: c2, customId: c3, referrerId: c4 } = callback);
      yield "PX_16";
      voiceChannelId = voiceChannelId.getVoiceChannelId();
      if (channel != null) {
        const applicationId = channel.applicationId;
      }
      if (applicationId === callback) {
        if (voiceChannelId === callback2) {
          let guild_id = channel.getChannel(callback2);
          guild_id = undefined;
          if (guild_id != null) {
            guild_id = guild_id.guild_id;
          }
          callback2 = guild_id;
          if (guild_id == null) {
            callback2 = null;
          }
          closure_8 = callback2;
          callback2(9519)(closure_8, channel.location);
          channel = 3;
          return { value: true, done: true };
        }
      }
      const embeddedActivitiesForChannel = store.getEmbeddedActivitiesForChannel(callback2);
      const length = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === c0);
      if (length.length > 0) {
        const compositeInstanceId = length[0].compositeInstanceId;
      }
      let obj2 = callback(9469);
      obj2 = { channelId: null, applicationId: null, isStart: null, embeddedActivitiesManager: null, analyticsLocations: null, customId: null, referrerId: null };
      obj2[0] = callback2;
      obj2[1] = callback;
      obj2[2] = null == compositeInstanceId;
      obj2[3] = callback2(9452)();
      obj2[4] = dependencyMap;
      obj2[5] = c3;
      obj2[6] = store;
      yield obj2.runPrimaryAppCommandOrJoinEmbeddedActivity(obj2);
      return arg1;
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