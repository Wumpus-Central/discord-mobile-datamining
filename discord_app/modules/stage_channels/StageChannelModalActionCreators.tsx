// === Module 8057: connectToStage ===

// Module 8057 (connectToStage)
import _modDef4975 from "module_4975" /* 4975 */;
import openStageChannelSettingsAll from "openStageChannelSettings" /* 8058 */;
import _initializeDefault from "_initialize" /* 12825 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import reset from "reset" /* 4652 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;

const require = fn;
function connectToStage(channel, flag) {
  if (flag === undefined) {
    flag = false;
  }
  if (!flag) {
    const _require = channel;
    const canResult = closure_8.can(_require(1399).JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
    let tmp6 = !canResult;
    if (canResult) {
      let num = openStageChannelSettingsAll.shouldShowBlockedUsers(channel.id) && tmp !== channel.id;
      if (num) {
        const result = openStageChannelSettingsAll.openStageBlockedUsersSheet(channel, () => {
          connectAndOpen(closure_0, true);
        });
        num = 1;
        const tmp7Result = openStageChannelSettingsAll;
      }
      tmp6 = num;
    }
    if (tmp6) {
      return false;
    }
  }
  _initializeDefault.initialize();
  const voiceChannel = _modDef4975.selectVoiceChannel(channel.id);
  if (voiceChannelId.getVoiceChannelId() !== channel.id) {
    return false;
  } else {
    allApplicationStreamsForChannel = allApplicationStreamsForChannel.getAllApplicationStreamsForChannel(channel.id);
    const found = allApplicationStreamsForChannel.find((item, index) => !streamMarkedFull.isStreamMarkedFull(channel(table[13]).encodeStreamKey(item)));
    if (null != found) {
      _require(9860).watchStream(found, { noFocus: true });
      const obj6 = _require(9860);
    }
    return true;
  }
}
function connectAndOpen(channel, flag, flag2, arg3) {
  const _require = channel;
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
  voiceChannelId = voiceChannelId.getVoiceChannelId();
  let result = !flag3;
  if (!flag3) {
    result = voiceChannelId !== channel.id;
  }
  if (result) {
    result = _require(12827).shouldShowVoiceChannelChangeConfirmation(channel);
    const obj = _require(12827);
  }
  if (result) {
    result = flag2(8058).showChannelChangeConfirmationAlert(channel, () => {
      connectAndOpen(closure_0, flag, flag2, true);
    });
    const obj2 = flag2(8058);
  }
  if (!result) {
    if (connectToStage(channel, flag)) {
      flag2(8058).navigateToStage(channel, voiceChannelId);
      const obj3 = flag2(8058);
    }
  }
}
let result = require("obj132").fileFinishedImporting("modules/stage_channels/StageChannelModalActionCreators.tsx");

export const connectOrLurkStage = function connectOrLurkStage(closure_0, closure_1, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              const callback2 = tmp2;
              let channel = closure_2_6.getChannel(closure_1_1);
              if (null != channel) {
                connectToStage(channel, flag);
                c4 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = callback(channel);
                return obj1;
              } else {
                let obj4 = callback(dependencyMap[8]);
                const items = [callback];
                c3 = 1;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj4.stopLurkingAll(items);
                return obj2;
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              obj1 = callback2(dependencyMap[9]);
              c3 = 2;
              c4 = 1;
              obj4 = { value: null, done: false };
              obj4[0] = obj1.joinGuild(callback, { lurker: true });
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const result = closure_2_7.addConditionalChangeListener(() => {
              const channel = closure_2_6.getChannel(closure_1);
              flag = null == channel;
              if (!flag) {
                closure_2_10(channel);
                closure_2_1(table[10]).initialize();
                callback(channel);
                flag = false;
                const obj = closure_2_1(table[10]);
              }
              return flag;
            });
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp20) {
          c4 = tmp;
          throw tmp20;
        }
      }
    })();
  });
  return new Promise(function() {
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
  openStageChannelSettingsAll.navigateToStage(arg0, arg1);
};
export const showUserProfile = function showUserProfile(arg0) {
  const result = openStageChannelSettingsAll.showPlatformUserProfile(arg0);
};