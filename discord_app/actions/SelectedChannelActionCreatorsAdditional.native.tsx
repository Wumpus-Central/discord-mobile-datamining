// === Module 5365: getChannelSelectionOrigin ===

// Module 5365 (getChannelSelectionOrigin)
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import closure_4 from "createGuildRecordFromRust" /* 1908 */;
import closure_5 from "recomputeGuild" /* 5366 */;
import closure_6 from "getUncachedChannelPermissions" /* 4120 */;
import closure_7 from "handleConnectionOpen" /* 1980 */;
import closure_8 from "handleConnectionOpen" /* 4299 */;
import closure_9 from "mergeGuildAvatar" /* 1921 */;
import closure_10 from "updateVoiceState" /* 4497 */;
import { STAGE_BOOSTING_SHEET_KEY } from "MAX_STAGE_TOPIC_LENGTH" /* 5367 */;

const require = arg1;
const result = require("set").fileFinishedImporting("actions/SelectedChannelActionCreatorsAdditional.native.tsx");

export const getChannelSelectionOrigin = function getChannelSelectionOrigin() {
  guildId = guildId.getGuildId();
  if (guildId == null) {
    guildId = null;
  }
  const obj = { fromGuildId: guildId, fromChannelId: null };
  channelId = channelId.getChannelId(guildId, false);
  if (channelId == null) {
    channelId = null;
  }
  obj[1] = channelId;
  return obj;
};
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
      const isChannelFullResult = _require(flag[9]).isChannelFull(channel, closure_10, flag3);
      const check = flag4.getCheck(channel.guild_id);
      if (!check.canChat) {
        let tmp14Result = tmp14(tmp15[10]);
        if (!tmp14Result.canLurkerListen(channel)) {
          tmp14Result = tmp14(tmp15[11]);
          return tmp14Result.unverifiedVoiceGate(check);
        }
      }
      const tmp4 = importDefault(flag[12])(channel, closure_6);
      if (isChannelFullResult) {
        if (channel.isGuildStageVoice()) {
          if (tmp14Result1.getStageHasMedia(channel.id)) {
            obj = { channel: null };
            obj[0] = channel;
            importDefault(tmp15[14]).openLazy(tmp14(tmp15[16])(tmp15[15], tmp15.paths), STAGE_BOOSTING_SHEET_KEY, obj);
          }
          tmp14Result1 = tmp14(tmp15[13]);
        }
      }
    }
    importDefault(flag[17])(() => {
      let obj = id(flag[18]);
      const v4Result = obj.v4();
      obj = { type: "VOICE_CHANNEL_SELECT", guildId, channelId: id, currentVoiceChannelId: closure_1_7.getVoiceChannelId(), video: flag, stream: flag2, lockVoiceStateForResume: flag3, joinVoiceId: v4Result, bypassIdleUpdate: flag4 };
      guildId(flag[19]).dispatch(obj);
    }, id, flag2, flag);
  }
};