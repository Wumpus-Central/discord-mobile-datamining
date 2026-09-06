// discord_app/modules/stage_channels/StageChannelModalActionCreators.tsx
import SelectedChannelActionCreatorsDefault from "../../actions/SelectedChannelActionCreators.tsx";
import StageChannelActionCreatorExtrasAll from "StageChannelActionCreatorExtras.native.tsx";
import StageChannelNewUserManagerDefault from "StageChannelNewUserManager.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

const require = fn;
function connectToStage(channel, flag) {
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
        const result = tmp7(8394).openStageBlockedUsersSheet(channel, () => {
          connectAndOpen(closure_0, true);
        });
        num = 1;
        const tmp7Result = tmp7(8394);
      }
      tmp6 = num;
      tmp7 = importAll;
    }
    if (tmp6) {
      return false;
    }
  }
  StageChannelNewUserManagerDefault.initialize();
  const obj = SelectedChannelStore;
  const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
  if (obj.getVoiceChannelId() !== channel.id) {
    return false;
  } else {
    const allApplicationStreamsForChannel = ApplicationStreamingStore.getAllApplicationStreamsForChannel(channel.id);
    const found = allApplicationStreamsForChannel.find(
      (item) => !streamMarkedFull.isStreamMarkedFull(channel(dependencyMap[13]).encodeStreamKey(item)),
    );
    if (null != found) {
      require("StreamActionCreators").watchStream(found, { noFocus: true });
      const obj6 = require("StreamActionCreators");
    }
    return true;
  }
}
function connectAndOpen(channel, flag, flag2, arg3) {
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
    result = flag2(8394).showChannelChangeConfirmationAlert(channel, () => {
      connectAndOpen(closure_0, flag, flag2, true);
    });
    const obj2 = flag2(8394);
  }
  if (!result) {
    if (connectToStage(channel, flag)) {
      flag2(8394).navigateToStage(channel, voiceChannelId);
      const obj3 = flag2(8394);
    }
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelModalActionCreators.tsx");

export const connectOrLurkStage = function connectOrLurkStage(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  closure_0 = asyncGeneratorStep(async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp5;
            closure_129_0 = closure_0;
            let channel = ChannelStore.getChannel(tmp2);
            if (null != channel) {
              connectToStage(channel, closure_2);
              c4 = 3;
              let obj1 = { value: tmp25(channel), done: true };
              return obj1;
            } else {
              let obj4 = closure_0(7321);
              const items = [closure_0];
              c3 = 1;
              c4 = 1;
              const obj2 = { value: obj4.stopLurkingAll(items), done: false };
              return obj2;
            }
            tmp25 = closure_0;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            obj1 = tmp2(5520);
            c3 = 2;
            c4 = 1;
            obj4 = { value: obj1.joinGuild(closure_0, { lurker: true }), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const result = GuildStore.addConditionalChangeListener(() => {
            const channel = ChannelStore.getChannel(closure_1);
            flag = null == channel;
            if (!flag) {
              connectToStage(channel);
              closure_1(12927).initialize();
              closure_1_0(channel);
              flag = false;
              const obj = closure_1(12927);
            }
            return flag;
          });
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp20) {
        c4 = tmp;
        throw tmp20;
      }
    }
  });
  return new Promise(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  });
};
export { connectToStage };
export { connectAndOpen };
export const navigateToStage = function navigateToStage(arg0, arg1) {
  StageChannelActionCreatorExtrasAll.navigateToStage(arg0, arg1);
};
export const showUserProfile = function showUserProfile(arg0) {
  const result = StageChannelActionCreatorExtrasAll.showPlatformUserProfile(arg0);
};
