// === Module 12038: joinOrStartActivityInChannel ===

// Module 12038 (joinOrStartActivityInChannel)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

const require = fn;
let closure_7 = async function _joinOrStartActivityInChannel() {
  closure_3 = tmp2;
  closure_2 = tmp3;
  ({ appId: closure_130_0, channelId: closure_130_1, analyticsLocations: closure_130_2, customId: closure_130_3, referrerId: closure_130_4 } = closure_0);
  await "PX_16";
  const selfEmbeddedActivityForChannel = closure_131_4.getSelfEmbeddedActivityForChannel(closure_130_1);
  const voiceChannelId = closure_131_6.getVoiceChannelId();
  if (selfEmbeddedActivityForChannel != null) {
    const applicationId = selfEmbeddedActivityForChannel.applicationId;
  }
  if (applicationId === closure_130_0) {
    if (voiceChannelId === closure_130_1) {
      const channel = closure_131_5.getChannel(closure_130_1);
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
  if (closure_130_9.length > 0) {
    const compositeInstanceId = closure_130_9[0].compositeInstanceId;
  }
  closure_130_10 = compositeInstanceId;
  closure_131_0(closure_131_2[5]);
  const obj2 = { channelId: closure_130_1, applicationId: closure_130_0, isStart: null == closure_130_10, embeddedActivitiesManager: closure_131_1(closure_131_2[6])(), analyticsLocations: closure_130_2, customId: closure_130_3, referrerId: closure_130_4 };
  await obj2.runPrimaryAppCommandOrJoinEmbeddedActivity(obj2);
  return value;
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