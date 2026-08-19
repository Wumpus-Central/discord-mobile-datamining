// discord_app/actions/SelectedChannelActionCreatorsAdditional.native.tsx
import ensureGuildLoaded from "../stores/ChannelStore.tsx";
import createGuildRecordFromRust from "../stores/GuildStore.tsx";
import recomputeGuild from "../stores/GuildVerificationStore.tsx";
import getUncachedChannelPermissions from "../stores/PermissionStore.tsx";
import handleConnectionOpen from "../stores/SelectedChannelStore.tsx";
import mergeGuildAvatar from "../stores/UserStore.tsx";
import updateVoiceState from "../stores/VoiceStateStore.tsx";
import { STAGE_BOOSTING_SHEET_KEY } from "../modules/stage_channels/StageChannelsConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("actions/SelectedChannelActionCreatorsAdditional.native.tsx");

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
      const obj8 = _require(flag[8]);
      const check = flag4.getCheck(channel.guild_id);
      if (!check.canChat) {
        let tmp14Result = tmp14(tmp15[9]);
        if (!tmp14Result.canLurkerListen(channel)) {
          tmp14Result = tmp14(tmp15[10]);
          return tmp14Result.unverifiedVoiceGate(check);
        }
      }
      const isChannelFullResult = _require(flag[8]).isChannelFull(channel, closure_9, flag3);
      const tmp2 = importDefault;
      if (isChannelFullResult) {
        if (channel.isGuildStageVoice()) {
          if (tmp14Result1.getStageHasMedia(channel.id)) {
            obj = { channel: null };
            obj[0] = channel;
            tmp2(tmp15[13]).openLazy(tmp14(tmp15[15])(tmp15[14], tmp15.paths), STAGE_BOOSTING_SHEET_KEY, obj);
            const tmp2Result = tmp2(tmp15[13]);
          }
          tmp14Result1 = tmp14(tmp15[12]);
        }
      }
      const tmp4 = importDefault(flag[11])(channel, closure_6);
    }
    importDefault(flag[16])(() => {
      let obj = id(flag[17]);
      const v4Result = obj.v4();
      obj = { type: "VOICE_CHANNEL_SELECT", guildId, channelId: id, currentVoiceChannelId: closure_1_7.getVoiceChannelId(), video: flag, stream: flag2, lockVoiceStateForResume: flag3, joinVoiceId: v4Result, bypassIdleUpdate: flag4 };
      guildId(flag[18]).dispatch(obj);
    }, id, flag2, flag);
  }
};