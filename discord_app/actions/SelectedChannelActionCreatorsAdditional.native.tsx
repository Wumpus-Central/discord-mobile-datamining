// === Module 5412: SelectedChannelActionCreatorsAdditional ===

// Module 5412 (SelectedChannelActionCreatorsAdditional)
import DispatcherDefault from "Dispatcher" /* 573 */;
import v1 from "v1" /* 1256 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5413 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import UserStore from "UserStore" /* 1371 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

require = fn;
const STAGE_BOOSTING_SHEET_KEY = fn(5414).STAGE_BOOSTING_SHEET_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("actions/SelectedChannelActionCreatorsAdditional.native.tsx");

export const getChannelSelectionOrigin = function getChannelSelectionOrigin() {
  let guildId = SelectedGuildStore.getGuildId();
  if (guildId == null) {
    guildId = null;
  }
  const obj = { fromGuildId: guildId, fromChannelId: null };
  let channelId = SelectedChannelStore.getChannelId(guildId, false);
  if (channelId == null) {
    channelId = null;
  }
  obj.fromChannelId = channelId;
  return obj;
};
export const selectVoiceChannelAdditional = function selectVoiceChannelAdditional(id, guildId, flag, flag2, arg4) {
  _require = id;
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
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    if (null != channel) {
      const isChannelFullResult = require("ChannelUtils").isChannelFull(channel, VoiceStateStore, flag3);
      const check = flag4.getCheck(channel.guild_id);
      if (!check.canChat) {
        let tmp14Result = tmp14(tmp15[10]);
        if (!tmp14Result.canLurkerListen(channel)) {
          tmp14Result = tmp14(tmp15[11]);
          return tmp14Result.unverifiedVoiceGate(check);
        }
      }
      const tmp4 = require("canJoinVoiceChannel")(channel, PermissionStore);
      if (isChannelFullResult) {
        if (channel.isGuildStageVoice()) {
          if (tmp14Result1.getStageHasMedia(channel.id)) {
            obj = { channel };
            require("ActionSheetActionCreators").openLazy(tmp14(tmp15[16])(tmp15[15], tmp15.paths), STAGE_BOOSTING_SHEET_KEY, obj);
          }
          tmp14Result1 = tmp14(tmp15[13]);
        }
      }
    }
    require("collectCallFeedback")(() => {
      let obj = v1;
      const v4Result = obj.v4();
      obj = { type: "VOICE_CHANNEL_SELECT", guildId, channelId, currentVoiceChannelId: SelectedChannelStore.getVoiceChannelId(), video: flag, stream: flag2, lockVoiceStateForResume: flag3, joinVoiceId: v4Result, bypassIdleUpdate: flag4 };
      DispatcherDefault.dispatch(obj);
    }, id, flag2, flag);
  }
};