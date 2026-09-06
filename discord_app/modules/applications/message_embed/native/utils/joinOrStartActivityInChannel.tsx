// === Module 11945: joinOrStartActivityInChannel ===

// Module 11945 (joinOrStartActivityInChannel)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

const require = fn;
let closure_7 = async function _joinOrStartActivityInChannel(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp2;
          closure_2 = tmp3;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          ({ appId: closure_130_0, channelId: closure_130_1, analyticsLocations: closure_130_2, customId: closure_130_3, referrerId: closure_130_4 } = closure_0);
          let selfEmbeddedActivityForChannel;
          let voiceChannelId;
          let channel;
          closure_130_8 = undefined;
          closure_130_9 = undefined;
          closure_130_10 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          selfEmbeddedActivityForChannel = closure_131_4.getSelfEmbeddedActivityForChannel(closure_130_1);
          voiceChannelId = closure_131_6.getVoiceChannelId();
          let applicationId;
          if (selfEmbeddedActivityForChannel != null) {
            applicationId = selfEmbeddedActivityForChannel.applicationId;
          }
          if (applicationId === closure_130_0) {
            if (voiceChannelId === closure_130_1) {
              channel = closure_131_5.getChannel(closure_130_1);
              let guild_id;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              c1 = guild_id;
              if (guild_id == null) {
                c1 = null;
              }
              closure_130_8 = c1;
              closure_131_1(closure_131_2[4])(closure_130_8, selfEmbeddedActivityForChannel.location);
              c5 = 3;
              return { value: true, done: true };
            }
          }
          const embeddedActivitiesForChannel = closure_131_4.getEmbeddedActivitiesForChannel(closure_130_1);
          closure_130_9 = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === closure_1_0);
          let compositeInstanceId;
          if (closure_130_9.length > 0) {
            compositeInstanceId = closure_130_9[0].compositeInstanceId;
          }
          closure_130_10 = compositeInstanceId;
          let obj2 = closure_131_0(closure_131_2[5]);
          obj2 = { channelId: closure_130_1, applicationId: closure_130_0, isStart: null == closure_130_10, embeddedActivitiesManager: closure_131_1(closure_131_2[6])(), analyticsLocations: closure_130_2, customId: closure_130_3, referrerId: closure_130_4 };
          c4 = 2;
          c5 = 1;
          const obj3 = { value: obj2.runPrimaryAppCommandOrJoinEmbeddedActivity(obj2), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        c5 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp43) {
      c5 = tmp;
      throw tmp43;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/message_embed/native/utils/joinOrStartActivityInChannel.tsx");

export const joinOrStartActivityInChannel = function joinOrStartActivityInChannel() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};