// === Module 8595: connectToStage ===

// Module 8595 (connectToStage)
import _modDef5307 from "module_5307" /* 5307 */;
import openStageChannelSettingsAll from "openStageChannelSettings" /* 8596 */;
import _initializeDefault from "_initialize" /* 12705 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "reset" /* 4467 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "createGuildRecordFromRust" /* 1910 */;
import closure_8 from "getUncachedChannelPermissions" /* 4089 */;
import closure_9 from "handleConnectionOpen" /* 1981 */;

const require = arg1;
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
        const result = tmp7(8596).openStageBlockedUsersSheet(channel, () => {
          closure_1_11(closure_0, true);
        });
        num = 1;
        const tmp7Result = tmp7(8596);
      }
      tmp6 = num;
      const obj2 = openStageChannelSettingsAll;
      tmp7 = importAll;
    }
    if (tmp6) {
      return false;
    }
  }
  _initializeDefault.initialize();
  const obj = closure_9;
  const obj4 = _initializeDefault;
  const voiceChannel = _modDef5307.selectVoiceChannel(channel.id);
  if (obj.getVoiceChannelId() !== channel.id) {
    return false;
  } else {
    allApplicationStreamsForChannel = allApplicationStreamsForChannel.getAllApplicationStreamsForChannel(channel.id);
    const found = allApplicationStreamsForChannel.find((currentUserActiveStream) => !streamMarkedFull.isStreamMarkedFull(channel(table[13]).encodeStreamKey(currentUserActiveStream)));
    if (null != found) {
      _require(4628).watchStream(found, { noFocus: true });
      const obj6 = _require(4628);
    }
    return true;
  }
  const obj5 = _modDef5307;
}
function connectAndOpen(channel, flag) {
  const _require = channel;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
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
    result = _require(12707).shouldShowVoiceChannelChangeConfirmation(channel);
    const obj = _require(12707);
  }
  if (result) {
    result = flag2(8596).showChannelChangeConfirmationAlert(channel, () => {
      closure_1_11(closure_0, flag, flag2, true);
    });
    const obj2 = flag2(8596);
  }
  if (!result) {
    if (connectToStage(channel, flag)) {
      flag2(8596).navigateToStage(channel, voiceChannelId);
      const obj3 = flag2(8596);
    }
  }
}
let result = require("set").fileFinishedImporting("modules/stage_channels/StageChannelModalActionCreators.tsx");

export const connectOrLurkStage = function connectOrLurkStage(closure_0, closure_1, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  closure_0 = undefined;
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
          return { value: "HermesInternal", done: null };
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
                closure_2_10(channel, closure_1_2);
                c4 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = tmp26(channel);
                return obj1;
              } else {
                let obj4 = callback(closure_2_3[8]);
                const items = [callback];
                c3 = 1;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj4.stopLurkingAll(items);
                return obj2;
              }
              tmp26 = callback;
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
              obj1 = callback2(closure_2_3[9]);
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
            return { value: "HermesInternal", done: null };
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