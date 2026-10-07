// discord_app/actions/SelectedChannelActionCreatorsAdditional.native.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import v1 from "../../_runtime/01266_v1.js";
import ChannelStore from "../stores/ChannelStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import GuildVerificationStore from "../stores/GuildVerificationStore.tsx";
import PermissionStore from "../stores/PermissionStore.tsx";
import SelectedChannelStore from "../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../stores/SelectedGuildStore.tsx";
import UserStore from "../stores/UserStore.tsx";
import VoiceStateStore from "../stores/VoiceStateStore.tsx";

const require = globalThis.__r;

require = fn;
const STAGE_BOOSTING_SHEET_KEY = fn(5578).STAGE_BOOSTING_SHEET_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("actions/SelectedChannelActionCreatorsAdditional.native.tsx");

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
      const obj9 = require("ChannelUtils");
      const check = flag4.getCheck(channel.guild_id);
      if (!check.canChat) {
        if (!tmp17Result.canLurkerListen(channel)) {
          return tmp17(tmp18[11]).unverifiedVoiceGate(check);
        }
        tmp17Result = tmp17(tmp18[10]);
      }
      const isChannelFullResult = require("ChannelUtils").isChannelFull(channel, VoiceStateStore, flag3);
      const tmp2 = importDefault;
      if (isChannelFullResult) {
        if (channel.isGuildStageVoice()) {
          if (tmp17Result4.getStageHasMedia(channel.id)) {
            let obj2 = { channel };
            tmp2(tmp18[14]).openLazy(tmp17(tmp18[16])(tmp18[15], tmp18.paths), STAGE_BOOSTING_SHEET_KEY, obj2);
            const tmp2Result = tmp2(tmp18[14]);
          }
          tmp17Result4 = tmp17(tmp18[13]);
        }
      }
      const tmp4 = require("canJoinVoiceChannel")(channel, PermissionStore);
    }
    if (flag) {
      const result = require("applyBackgroundOption").applyInitialVideoBackgroundOption();
      const obj6 = require("applyBackgroundOption");
    }
    require("collectCallFeedback")(
      () => {
        const v4Result = v1.v4();
        const obj2 = DispatcherDefault;
        obj2.dispatch({
          type: "VOICE_CHANNEL_SELECT",
          guildId,
          channelId,
          currentVoiceChannelId: SelectedChannelStore.getVoiceChannelId(),
          video: flag,
          stream: flag2,
          lockVoiceStateForResume: flag3,
          joinVoiceId: v4Result,
          bypassIdleUpdate: flag4,
        });
      },
      id,
      flag2,
      flag,
    );
  }
};
