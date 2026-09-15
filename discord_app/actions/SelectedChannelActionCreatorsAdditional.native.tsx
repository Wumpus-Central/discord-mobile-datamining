// === Module 5497: SelectedChannelActionCreatorsAdditional ===

// Module 5497 (SelectedChannelActionCreatorsAdditional)
import DispatcherDefault from "Dispatcher" /* 573 */;
import v1 from "v1" /* 1255 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildStore from "GuildStore" /* 1980 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5498 */;
import PermissionStore from "PermissionStore" /* 4278 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4461 */;
import UserStore from "UserStore" /* 1372 */;
import VoiceStateStore from "VoiceStateStore" /* 4658 */;

const require = globalThis.__r;

require = fn;
const STAGE_BOOSTING_SHEET_KEY = fn(5499).STAGE_BOOSTING_SHEET_KEY;
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
export const selectVoiceChannelAdditional = function selectVoiceChannelAdditional(id, guildId) {
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
      const obj8 = require("ChannelUtils");
      const check = flag4.getCheck(channel.guild_id);
      if (!check.canChat) {
        if (!tmp14Result.canLurkerListen(channel)) {
          return tmp14(tmp15[11]).unverifiedVoiceGate(check);
        }
        tmp14Result = tmp14(tmp15[10]);
      }
      const isChannelFullResult = require("ChannelUtils").isChannelFull(channel, VoiceStateStore, flag3);
      const tmp2 = importDefault;
      if (isChannelFullResult) {
        if (channel.isGuildStageVoice()) {
          if (tmp14Result4.getStageHasMedia(channel.id)) {
            let obj2 = { channel };
            tmp2(tmp15[14]).openLazy(tmp14(tmp15[16])(tmp15[15], tmp15.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
            const tmp2Result = tmp2(tmp15[14]);
          }
          tmp14Result4 = tmp14(tmp15[13]);
        }
      }
      const tmp4 = require("canJoinVoiceChannel")(channel, PermissionStore);
    }
    require("collectCallFeedback")(() => {
      const v4Result = v1.v4();
      const obj2 = DispatcherDefault;
      obj2.dispatch({ type: "VOICE_CHANNEL_SELECT", guildId, channelId, currentVoiceChannelId: SelectedChannelStore.getVoiceChannelId(), video: flag, stream: flag2, lockVoiceStateForResume: flag3, joinVoiceId: v4Result, bypassIdleUpdate: flag4 });
    }, id, flag2, flag);
  }
};