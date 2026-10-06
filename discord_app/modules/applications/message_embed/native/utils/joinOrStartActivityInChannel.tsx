// discord_app/modules/applications/message_embed/native/utils/joinOrStartActivityInChannel.tsx
import _asyncToGenerator from "../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import EmbeddedActivitiesStore from "../../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let applicationId, c5;

let obj = function _joinOrStartActivityInChannel() {
  obj = _asyncToGenerator(async (applicationId) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let referrerId;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (applicationId === 1) {
        throw value;
      } else if (applicationId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let channelId;
        let analyticsLocations;
        let customId;
        let selfEmbeddedActivityForChannel;
        let voiceChannelId;
        let guild_id;
        let closure_8;
        let length;
        let compositeInstanceId;
        c5 = 2;
        if (0 === referrerId) {
          if (applicationId === 1) {
            c5 = 3;
            throw value;
          } else if (applicationId === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp2;
            applicationId = undefined;
            channelId = undefined;
            analyticsLocations = undefined;
            customId = undefined;
            ({ appId: c0, channelId: c1, analyticsLocations: c2, customId: c3, referrerId: c4 } = closure_0);
            selfEmbeddedActivityForChannel = undefined;
            voiceChannelId = undefined;
            guild_id = undefined;
            closure_8 = undefined;
            length = undefined;
            compositeInstanceId = undefined;
            referrerId = 1;
            c5 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === tmp5) {
          if (applicationId === 1) {
            c5 = 3;
            throw value;
          } else if (applicationId === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            selfEmbeddedActivityForChannel = closure_131_4.getSelfEmbeddedActivityForChannel(channelId);
            voiceChannelId = closure_131_6.getVoiceChannelId();
            applicationId = undefined;
            if (selfEmbeddedActivityForChannel != null) {
              applicationId = selfEmbeddedActivityForChannel.applicationId;
            }
            if (applicationId === applicationId) {
              if (voiceChannelId === channelId) {
                closure_131_5.getChannel(channelId);
                guild_id = undefined;
                if (guild_id != null) {
                  guild_id = guild_id.guild_id;
                }
                channelId = guild_id;
                if (guild_id == null) {
                  channelId = null;
                }
                closure_8 = channelId;
                closure_131_1(closure_131_2[4])(closure_8, selfEmbeddedActivityForChannel.location);
                c5 = 3;
                return { value: true, done: true };
              }
            }
            const embeddedActivitiesForChannel = closure_131_4.getEmbeddedActivitiesForChannel(channelId);
            length = embeddedActivitiesForChannel.filter(
              (applicationId) => applicationId.applicationId === applicationId,
            );
            compositeInstanceId = undefined;
            if (length.length > 0) {
              compositeInstanceId = length[0].compositeInstanceId;
            }
            const obj5 = {
              channelId,
              applicationId,
              isStart: null == compositeInstanceId,
              embeddedActivitiesManager: closure_131_1(closure_131_2[6])(),
              analyticsLocations,
              customId,
              referrerId,
            };
            const runPrimaryAppCommandOrJoinEmbeddedActivity = closure_131_0(
              closure_131_2[5],
            ).runPrimaryAppCommandOrJoinEmbeddedActivity;
            const tmp22 = closure_131_0(closure_131_2[5]);
            referrerId = 2;
            c5 = 1;
            const obj6 = { value: runPrimaryAppCommandOrJoinEmbeddedActivity(obj5), done: false };
            return obj6;
          }
        } else if (applicationId === 1) {
          c5 = 3;
          throw value;
        } else if (applicationId === 2) {
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp43) {
        c5 = 3;
        throw tmp43;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting(
  "modules/applications/message_embed/native/utils/joinOrStartActivityInChannel.tsx",
);

export const joinOrStartActivityInChannel = function joinOrStartActivityInChannel() {
  return obj(...arguments);
};
