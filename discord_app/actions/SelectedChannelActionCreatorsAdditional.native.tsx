// discord_app/actions/SelectedChannelActionCreatorsAdditional.native.tsx
import closure_3 from "../stores/ChannelStore.tsx";
import closure_4 from "../stores/GuildStore.tsx";
import closure_5 from "../stores/GuildVerificationStore.tsx";
import closure_6 from "../stores/PermissionStore.tsx";
import closure_7 from "../stores/SelectedChannelStore.tsx";
import closure_8 from "../stores/UserStore.tsx";
import closure_9 from "../stores/VoiceStateStore.tsx";
import { STAGE_BOOSTING_SHEET_KEY } from "../modules/stage_channels/StageChannelsConstants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("actions/SelectedChannelActionCreatorsAdditional.native.tsx");

export const selectVoiceChannelAdditional = function selectVoiceChannelAdditional(id, guildId, flag, flag2, arg4) {
  const _require = id;
  importDefault = guildId;
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let flag3 = obj.lockVoiceStateForResume;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = obj.bypassIdleUpdate;
  if (flag4 === undefined) {
    flag4 = false;
  }
  const channel = flag2.getChannel(id);
  currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    if (null != channel) {
      const isChannelFullResult = _require(flag[8]).isChannelFull(channel, closure_9, flag3);
      const check = flag4.getCheck(channel.guild_id);
      if (!check.canChat) {
        let tmp14Result = tmp14(tmp15[9]);
        if (!tmp14Result.canLurkerListen(channel)) {
          tmp14Result = tmp14(tmp15[10]);
          return tmp14Result.unverifiedVoiceGate(check);
        }
      }
      const tmp4 = importDefault(flag[11])(channel, closure_6);
      if (isChannelFullResult) {
        if (channel.isGuildStageVoice()) {
          if (tmp14Result1.getStageHasMedia(channel.id)) {
            obj = { channel: null };
            obj[0] = channel;
            importDefault(tmp15[13]).openLazy(tmp14(tmp15[15])(tmp15[14], tmp15.paths), STAGE_BOOSTING_SHEET_KEY, obj);
          }
          tmp14Result1 = tmp14(tmp15[12]);
        }
      }
    }
    importDefault(flag[16])(
      () => {
        let obj = id(flag[17]);
        const v4Result = obj.v4();
        obj = {
          type: "VOICE_CHANNEL_SELECT",
          guildId,
          channelId: id,
          currentVoiceChannelId: closure_1_7.getVoiceChannelId(),
          video: flag,
          stream: flag2,
          lockVoiceStateForResume: flag3,
          joinVoiceId: v4Result,
          bypassIdleUpdate: flag4,
        };
        guildId(flag[18]).dispatch(obj);
      },
      id,
      flag2,
      flag,
    );
  }
};
