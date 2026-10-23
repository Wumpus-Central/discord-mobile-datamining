// discord_app/modules/stage_channels/StageChannelModalActionCreators.tsx
import SelectedChannelActionCreatorsDefault from "../../actions/SelectedChannelActionCreators.tsx";
import StageChannelActionCreatorExtrasAll from "StageChannelActionCreatorExtras.native.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

const require = fn;
let closure_10 = async function _connectOrLurkStage(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let flag = closure_2;
          if (closure_2 === undefined) {
            flag = false;
          }
          closure_131_2 = flag;
          let channel;
          closure_131_4 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          channel = closure_132_6.getChannel(closure_131_1);
          if (null != channel) {
            closure_132_11(channel, closure_131_2);
            c6 = 3;
            const obj5 = { value: channel, done: true };
            return obj5;
          } else {
            const items = [closure_131_0];
            c5 = 2;
            c6 = 1;
            const obj7 = { value: closure_132_0(closure_132_3[8]).stopLurkingAll(items), done: false };
            return obj7;
          }
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c5 = 3;
          c6 = 1;
          const obj10 = {
            value: closure_132_1(closure_132_3[9]).joinGuild(closure_131_0, { lurker: true }),
            done: false,
          };
          return obj10;
        }
      } else if (3 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          c5 = 4;
          c6 = 1;
          const obj12 = {
            value: (function waitForChannel(arg0) {
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
            })(closure_131_1),
            done: false,
          };
          return obj12;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj13 = { value, done: true };
        return obj13;
      } else {
        closure_131_4 = value;
        closure_132_11(closure_131_4);
        closure_132_1(closure_132_3[10]).initialize();
        c6 = 3;
        const obj14 = { value: closure_131_4, done: true };
        return obj14;
      }
    } catch (tmp34) {
      c6 = tmp;
      throw tmp34;
    }
  }
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
    const found = allApplicationStreamsForChannel.find(
      (item) => !streamMarkedFull.isStreamMarkedFull(channel(dependencyMap[12]).encodeStreamKey(item)),
    );
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
    result = flag2(7854).showChannelChangeConfirmationAlert(channel, () => {
      connectAndOpen(closure_0, flag, flag2, true);
    });
    const obj2 = flag2(7854);
  }
  if (!result) {
    if (connectToStage(channel, flag)) {
      flag2(7854).navigateToStage(channel, voiceChannelId);
      const obj3 = flag2(7854);
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
