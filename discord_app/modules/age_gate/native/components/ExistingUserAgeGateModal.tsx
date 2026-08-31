// === Module 16847: onClose ===

// Module 16847 (onClose)
import openAgeGateModal from "openAgeGateModal" /* 6019 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleConnectionOpen" /* 4269 */;
import result from "result" /* 1221 */;
import { ExistingUserAgeGateScreens as closure_7 } from "ExistingUserAgeGateScreens" /* 16848 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function onClose() {
  openAgeGateModal.closeAgeGateModal();
}
function renderHeaderTitle() {
  return null;
}
({ AgeGateAnalyticAction: c5, AgeGateSource: closure_6 } = result);
result = require("set").fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateModal.tsx");

export default function ExistingUserAgeGateModal(source) {
  source = source.source;
  closure_1 = undefined;
  let obj = source(4699);
  const shouldAgeVerifyForAgeGate = obj.useShouldAgeVerifyForAgeGate();
  closure_1 = React.useRef(shouldAgeVerifyForAgeGate);
  const items = [source];
  const watchAgeVerificationStatusChange = source(4701).useWatchAgeVerificationStatusChange(React.useCallback(() => {
    if (ref.current) {
      source(closure_1_2[10]).closeAgeGateModal(source);
      const obj = source(closure_1_2[10]);
    }
  }, items));
  obj = {
    screens: React.useMemo(() => {
      if (closure_1_6.NSFW_SERVER_INVITE !== closure_0) {
        if (tmp2.NSFW_SERVER_INVITE_EMBED !== tmp) {
          if (tmp2.JOIN_LARGE_GUILD_UNDERAGE !== tmp) {
            if (tmp2.ACCESS_LARGE_GUILD_UNDERAGE !== tmp) {
              if (tmp2.LARGE_GUILD !== tmp) {
                if (tmp2.NSFW_SERVER !== tmp) {
                  if (tmp2.NSFW_CHANNEL === tmp) {
                    let fn = () => {
                      const guildId = closure_1_4.getGuildId();
                      if (null != guildId) {
                        closure_1_1(closure_1_2[11]).nsfwReturnToSafety(guildId);
                        const obj = closure_1_1(closure_1_2[11]);
                      }
                      callback(closure_1_2[10]).closeAgeGateModal(callback);
                    };
                  } else if (tmp2.NSFW_VOICE_CHANNEL === tmp) {
                    fn = () => {
                      let obj = closure_1_1(closure_1_2[12]);
                      obj.popAll();
                      obj = { source: closure_0, action: closure_1_5.AGE_GATE_CLOSE };
                      closure_1_1(closure_1_2[13]).track(closure_1_8.AGE_GATE_ACTION, obj);
                    };
                  } else if (tmp2.FAMILY_CENTER === tmp) {
                    fn = () => {
                      callback(closure_1_2[10]).closeAgeGateModal(callback);
                    };
                  }
                }
              }
            }
          }
          fn = () => {
            const guildId = closure_1_4.getGuildId();
            if (null != guildId) {
              closure_1_1(closure_1_2[11]).nsfwReturnToSafety(guildId);
              const obj = closure_1_1(closure_1_2[11]);
            }
            callback(closure_1_2[10]).closeAgeGateModal(callback);
            const obj2 = callback(closure_1_2[10]);
            closure_1_1(closure_1_2[12]).popAll();
          };
        }
        if (fn == null) {
          fn = () => {

          };
        }
        let obj = {};
        obj = { fullscreen: true, impressionName: null, impressionProperties: null, headerLeft: null, headerTitle: null, render: null };
        obj[1] = source(closure_1_2[14]).ImpressionNames.USER_AGE_GATE;
        obj[2] = { existing_user: true };
        let obj2 = source(closure_1_2[15]);
        obj[3] = obj2.getHeaderBackButton(fn);
        obj[4] = closure_1_11;
        obj[5] = function render(arg0, arg1) {
          const callback = arg1;
          if (callback === closure_1_6.NSFW_SERVER_INVITE) {
            let obj = callback(closure_1_2[6]);
            if (obj.isIOS()) {
              let fn = () => {
                arr = arr.push(closure_1_7.NSFWGateGuild);
                let obj = closure_1_1(closure_1_2[7]);
                obj = { key: "AGE_GATE_AGE_VERIFIED", icon: closure_1_1(closure_1_2[8]), content: null };
                const intl = arr(closure_1_2[9]).intl;
                obj[2] = intl.string(arr(closure_1_2[9]).t.gUiIGZ);
                obj.open(obj);
              };
            }
            obj = { onSuccess: null, onClose: null, source: null };
            obj[0] = fn;
            obj[1] = closure_1_10;
            obj[2] = tmp;
            return closure_1_9(closure_1_1(closure_1_2[16]), obj);
          }
          fn = () => {
            let obj = arr(6019);
            obj.closeAgeGateModal();
            obj = { key: "AGE_GATE_AGE_VERIFIED", icon: callback(16849), content: null };
            const intl = arr(1236).intl;
            obj[2] = intl.string(arr(1236).t.gUiIGZ);
            callback(4164).open(obj);
          };
        };
        obj[closure_1_7.AgeGate] = obj;
        obj = { fullscreen: true, headerTitle: null, render: null };
        obj[1] = closure_1_11;
        obj[2] = function render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.source = closure_0;
          return closure_1_9(closure_1_1(closure_1_2[17]), obj);
        };
        obj[closure_1_7.AgeGateConfirm] = obj;
        obj1 = { fullscreen: true, headerLeft: null, impressionName: null, headerTitle: null, render: null };
        obj1[1] = source(closure_1_2[15]).getHeaderBackButton(fn);
        obj1[2] = source(closure_1_2[14]).ImpressionNames.USER_AGE_GATE_VERIFY;
        obj1[3] = closure_1_11;
        obj1[4] = function render() {
          return closure_1_9(closure_1_1(closure_1_2[18]), { source: closure_0 });
        };
        obj[closure_1_7.Pawtect] = obj1;
        obj2 = { fullscreen: true, headerTitle: null, impressionProperties: null, render: null };
        obj2[1] = closure_1_11;
        obj2[2] = { existing_user: true };
        obj2[3] = function render(arg0) {
          const merged = Object.assign(arg0);
          return callback3(callback2(15542), {});
        };
        obj[closure_1_7.Blocked] = obj2;
        const obj3 = { headerTitle: null, headerLeft: null, render: null };
        obj3[0] = closure_1_11;
        const obj6 = source(closure_1_2[15]);
        obj3[1] = source(closure_1_2[15]).getHeaderBackButton(fn);
        obj3[2] = function render() {
          return callback3(callback2(9093), { onClose: closure_10 });
        };
        obj[closure_1_7.NSFWGateGuild] = obj3;
        return obj;
      }
      fn = () => {
        callback(closure_1_2[10]).closeAgeGateModal(callback);
      };
    }, items1),
    initialRouteName: shouldAgeVerifyForAgeGate ? tmp6.Pawtect : tmp6.AgeGate,
    headerBackTitle: null
  };
  items1 = [source];
  let intl = tmp(1236).intl;
  obj[2] = intl.string(source(1236).t["13/7kX"]);
  return jsx(source(5976).Navigator, {
    screens: React.useMemo(() => {
      if (closure_1_6.NSFW_SERVER_INVITE !== closure_0) {
        if (tmp2.NSFW_SERVER_INVITE_EMBED !== tmp) {
          if (tmp2.JOIN_LARGE_GUILD_UNDERAGE !== tmp) {
            if (tmp2.ACCESS_LARGE_GUILD_UNDERAGE !== tmp) {
              if (tmp2.LARGE_GUILD !== tmp) {
                if (tmp2.NSFW_SERVER !== tmp) {
                  if (tmp2.NSFW_CHANNEL === tmp) {
                    let fn = () => {
                      const guildId = closure_1_4.getGuildId();
                      if (null != guildId) {
                        closure_1_1(closure_1_2[11]).nsfwReturnToSafety(guildId);
                        const obj = closure_1_1(closure_1_2[11]);
                      }
                      callback(closure_1_2[10]).closeAgeGateModal(callback);
                    };
                  } else if (tmp2.NSFW_VOICE_CHANNEL === tmp) {
                    fn = () => {
                      let obj = closure_1_1(closure_1_2[12]);
                      obj.popAll();
                      obj = { source: closure_0, action: closure_1_5.AGE_GATE_CLOSE };
                      closure_1_1(closure_1_2[13]).track(closure_1_8.AGE_GATE_ACTION, obj);
                    };
                  } else if (tmp2.FAMILY_CENTER === tmp) {
                    fn = () => {
                      callback(closure_1_2[10]).closeAgeGateModal(callback);
                    };
                  }
                }
              }
            }
          }
          fn = () => {
            const guildId = closure_1_4.getGuildId();
            if (null != guildId) {
              closure_1_1(closure_1_2[11]).nsfwReturnToSafety(guildId);
              const obj = closure_1_1(closure_1_2[11]);
            }
            callback(closure_1_2[10]).closeAgeGateModal(callback);
            const obj2 = callback(closure_1_2[10]);
            closure_1_1(closure_1_2[12]).popAll();
          };
        }
        if (fn == null) {
          fn = () => {

          };
        }
        let obj = {};
        obj = { fullscreen: true, impressionName: null, impressionProperties: null, headerLeft: null, headerTitle: null, render: null };
        obj[1] = source(closure_1_2[14]).ImpressionNames.USER_AGE_GATE;
        obj[2] = { existing_user: true };
        let obj2 = source(closure_1_2[15]);
        obj[3] = obj2.getHeaderBackButton(fn);
        obj[4] = closure_1_11;
        obj[5] = function render(arg0, arg1) {
          const callback = arg1;
          if (callback === closure_1_6.NSFW_SERVER_INVITE) {
            let obj = callback(closure_1_2[6]);
            if (obj.isIOS()) {
              let fn = () => {
                arr = arr.push(closure_1_7.NSFWGateGuild);
                let obj = closure_1_1(closure_1_2[7]);
                obj = { key: "AGE_GATE_AGE_VERIFIED", icon: closure_1_1(closure_1_2[8]), content: null };
                const intl = arr(closure_1_2[9]).intl;
                obj[2] = intl.string(arr(closure_1_2[9]).t.gUiIGZ);
                obj.open(obj);
              };
            }
            obj = { onSuccess: null, onClose: null, source: null };
            obj[0] = fn;
            obj[1] = closure_1_10;
            obj[2] = tmp;
            return closure_1_9(closure_1_1(closure_1_2[16]), obj);
          }
          fn = () => {
            let obj = arr(6019);
            obj.closeAgeGateModal();
            obj = { key: "AGE_GATE_AGE_VERIFIED", icon: callback(16849), content: null };
            const intl = arr(1236).intl;
            obj[2] = intl.string(arr(1236).t.gUiIGZ);
            callback(4164).open(obj);
          };
        };
        obj[closure_1_7.AgeGate] = obj;
        obj = { fullscreen: true, headerTitle: null, render: null };
        obj[1] = closure_1_11;
        obj[2] = function render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.source = closure_0;
          return closure_1_9(closure_1_1(closure_1_2[17]), obj);
        };
        obj[closure_1_7.AgeGateConfirm] = obj;
        obj1 = { fullscreen: true, headerLeft: null, impressionName: null, headerTitle: null, render: null };
        obj1[1] = source(closure_1_2[15]).getHeaderBackButton(fn);
        obj1[2] = source(closure_1_2[14]).ImpressionNames.USER_AGE_GATE_VERIFY;
        obj1[3] = closure_1_11;
        obj1[4] = function render() {
          return closure_1_9(closure_1_1(closure_1_2[18]), { source: closure_0 });
        };
        obj[closure_1_7.Pawtect] = obj1;
        obj2 = { fullscreen: true, headerTitle: null, impressionProperties: null, render: null };
        obj2[1] = closure_1_11;
        obj2[2] = { existing_user: true };
        obj2[3] = function render(arg0) {
          const merged = Object.assign(arg0);
          return callback3(callback2(15542), {});
        };
        obj[closure_1_7.Blocked] = obj2;
        const obj3 = { headerTitle: null, headerLeft: null, render: null };
        obj3[0] = closure_1_11;
        const obj6 = source(closure_1_2[15]);
        obj3[1] = source(closure_1_2[15]).getHeaderBackButton(fn);
        obj3[2] = function render() {
          return callback3(callback2(9093), { onClose: closure_10 });
        };
        obj[closure_1_7.NSFWGateGuild] = obj3;
        return obj;
      }
      fn = () => {
        callback(closure_1_2[10]).closeAgeGateModal(callback);
      };
    }, items1),
    initialRouteName: shouldAgeVerifyForAgeGate ? tmp6.Pawtect : tmp6.AgeGate,
    headerBackTitle: null
  });
};