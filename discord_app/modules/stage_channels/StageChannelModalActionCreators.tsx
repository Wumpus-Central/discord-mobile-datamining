// === Module 7878: StageChannelModalActionCreators ===

// Module 7878 (StageChannelModalActionCreators)
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6634 */;
import StageChannelActionCreatorExtrasAll from "StageChannelActionCreatorExtras" /* 7869 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6642 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import GuildStore from "GuildStore" /* 4845 */;
import PermissionStore from "PermissionStore" /* 4903 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4874 */;

const require = fn;
let closure_10 = async function _connectOrLurkStage() {
  closure_3 = tmp2;
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  let flag = closure_2;
  if (closure_2 === undefined) {
    flag = false;
  }
  closure_131_2 = flag;
  await "Reflect";
  let channel = closure_132_6.getChannel(closure_131_1);
  if (null != channel) {
    closure_132_11(channel, closure_131_2);
    return channel;
  }
  const items = [closure_131_0];
  await closure_132_0(closure_132_3[8]).stopLurkingAll(items);
  await closure_132_1(closure_132_3[9]).joinGuild(closure_131_0, { lurker: true });
  await (function waitForChannel(arg0) {
    closure_0 = arg0;
    return new Promise((arg0) => {
      closure_0 = arg0;
      const result = closure_1_7.addConditionalChangeListener(() => {
        channel = channel.getChannel(closure_0);
        let flag = null == channel;
        if (!flag) {
          closure_0(channel);
          flag = false;
        }
        return flag;
      });
    });
  })(closure_131_1);
  closure_131_4 = value;
  closure_132_11(closure_131_4);
  closure_132_1(closure_132_3[10]).initialize();
  return closure_131_4;
};
function connectToStage(channel) {
  if (flag === undefined) {
    flag = false;
  }
  if (!flag) {
    _require = channel;
    const canResult = PermissionStore.can(require("StageChannelPermissions").JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
    let tmp6 = !canResult;
    if (canResult) {
      let num = StageChannelActionCreatorExtrasAll.shouldShowBlockedUsers(channel.id) && tmp !== channel.id;
      if (num) {
        const result = StageChannelActionCreatorExtrasAll.openStageBlockedUsersSheet(channel, () => {
          connectAndOpen(closure_0, true);
        });
        num = 1;
        const tmp7Result = StageChannelActionCreatorExtrasAll;
      }
      tmp6 = num;
    }
    if (tmp6) {
      return false;
    }
  }
  const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
  if (SelectedChannelStore.getVoiceChannelId() !== channel.id) {
    return false;
  } else {
    const allApplicationStreamsForChannel = ApplicationStreamingStore.getAllApplicationStreamsForChannel(channel.id);
    const found = allApplicationStreamsForChannel.find((item) => !streamMarkedFull.isStreamMarkedFull(channel(dependencyMap[12]).encodeStreamKey(item)));
    if (null != found) {
      require("StreamActionCreators").watchStream(found, { noFocus: true });
      const obj5 = require("StreamActionCreators");
    }
    return true;
  }
}
function connectAndOpen(channel) {
  _require = channel;
  if (flag === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = arg3;
  if (arg3 === undefined) {
    flag3 = false;
  }
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  let result = !flag3;
  if (!flag3) {
    result = voiceChannelId !== channel.id;
  }
  if (result) {
    result = require("shouldShowVoiceChannelChangeConfirmation").shouldShowVoiceChannelChangeConfirmation(channel);
    const obj = require("shouldShowVoiceChannelChangeConfirmation");
  }
  if (result) {
    result = flag2(7869).showChannelChangeConfirmationAlert(channel, () => {
      connectAndOpen(closure_0, flag, flag2, true);
    });
    const obj2 = flag2(7869);
  }
  if (!result) {
    if (connectToStage(channel, flag)) {
      flag2(7869).navigateToStage(channel, voiceChannelId);
      const obj3 = flag2(7869);
    }
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelModalActionCreators.tsx");

export const connectOrLurkStage = function connectOrLurkStage() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { connectToStage };
export { connectAndOpen };
export const navigateToStage = function navigateToStage(id, arg1) {
  StageChannelActionCreatorExtrasAll.navigateToStage(id, arg1);
};
export const showUserProfile = function showUserProfile(arg0) {
  const result = StageChannelActionCreatorExtrasAll.showPlatformUserProfile(arg0);
};