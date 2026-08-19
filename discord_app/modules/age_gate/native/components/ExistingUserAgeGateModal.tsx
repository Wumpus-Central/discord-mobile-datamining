// === Module 16518: onClose ===

// Module 16518 (onClose)
import openAgeGateModal from "openAgeGateModal" /* 5255 */;
import noop from "noop" /* 19 */;
import handleConnectionOpen from "handleConnectionOpen" /* 4197 */;
import result from "result" /* 1221 */;
import { ExistingUserAgeGateScreens as closure_7 } from "ExistingUserAgeGateScreens" /* 16519 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
function onClose() {
  openAgeGateModal.closeAgeGateModal();
}
function renderHeaderTitle() {
  return null;
}
({ AgeGateAnalyticAction: c5, AgeGateSource: closure_6 } = result);
result = require("obj132").fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateModal.tsx");

export default function ExistingUserAgeGateModal(source) {
  source = source.source;
  let obj = source(5252);
  const shouldAgeVerifyForAgeGate = obj.useShouldAgeVerifyForAgeGate();
  closure_1 = React.useRef(shouldAgeVerifyForAgeGate);
  const items = [source];
  const watchAgeVerificationStatusChange = source(4992).useWatchAgeVerificationStatusChange(React.useCallback(() => {
    if (ref.current) {
      source(dependencyMap[10]).closeAgeGateModal(source);
      const obj = source(dependencyMap[10]);
    }
  }, items));
  obj = {
    screens: React.useMemo(() => {
      if (closure_1_6.NSFW_SERVER_INVITE !== closure_0) {
        if (closure_1_6.NSFW_SERVER_INVITE_EMBED !== closure_0) {
          if (closure_1_6.JOIN_LARGE_GUILD_UNDERAGE !== closure_0) {
            if (closure_1_6.ACCESS_LARGE_GUILD_UNDERAGE !== closure_0) {
              if (closure_1_6.LARGE_GUILD !== closure_0) {
                if (closure_1_6.NSFW_SERVER !== closure_0) {
                  if (closure_1_6.NSFW_CHANNEL === closure_0) {
                    let fn = () => {
                      const guildId = closure_1_4.getGuildId();
                      if (null != guildId) {
                        closure_1_1(closure_1_2[11]).nsfwReturnToSafety(guildId);
                        const obj = closure_1_1(closure_1_2[11]);
                      }
                      callback(closure_1_2[10]).closeAgeGateModal(callback);
                      const obj2 = callback(closure_1_2[10]);
                    };
                  } else if (closure_1_6.NSFW_VOICE_CHANNEL === closure_0) {
                    fn = () => {
                      let obj = closure_1_1(closure_1_2[12]);
                      obj.popAll();
                      obj = { source: closure_0, action: closure_1_5.AGE_GATE_CLOSE };
                      closure_1_1(closure_1_2[13]).track(closure_1_8.AGE_GATE_ACTION, obj);
                    };
                  } else if (closure_1_6.FAMILY_CENTER === closure_0) {
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
            const obj3 = closure_1_1(closure_1_2[12]);
          };
        }
        if (fn == null) {
          fn = () => {

          };
        }
        let obj = { fullscreen: true, impressionName: null, impressionProperties: null, headerLeft: null, headerTitle: null, render: null };
        obj[1] = source(dependencyMap[14]).ImpressionNames.USER_AGE_GATE;
        obj[2] = { existing_user: true };
        let obj2 = source(dependencyMap[15]);
        obj[3] = obj2.getHeaderBackButton(fn);
        obj[4] = renderHeaderTitle;
        obj[5] = function render(arg0, arg1) {
          const callback = arg1;
          if (callback === closure_1_6.NSFW_SERVER_INVITE) {
            let obj = callback(closure_1_2[6]);
            if (obj.isIOS()) {
              let fn = () => {
                arr = arr.push(closure_1_7.NSFWGateGuild);
                closure_1_1(closure_1_2[7]);
                const obj = { key: "AGE_GATE_AGE_VERIFIED", icon: closure_1_1(closure_1_2[8]), content: null };
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
            let obj = arr(5255);
            obj.closeAgeGateModal();
            obj = { key: "AGE_GATE_AGE_VERIFIED", icon: callback(16520), content: null };
            const intl = arr(1236).intl;
            obj[2] = intl.string(arr(1236).t.gUiIGZ);
            callback(4094).open(obj);
          };
        };
        obj[closure_1_7.AgeGate] = obj;
        obj = { fullscreen: true, headerTitle: null, render: null };
        obj[1] = renderHeaderTitle;
        obj[2] = function render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.source = closure_0;
          return closure_1_9(closure_1_1(closure_1_2[17]), obj);
        };
        obj[closure_1_7.AgeGateConfirm] = obj;
        obj1 = { fullscreen: true, headerLeft: null, impressionName: null, headerTitle: null, render: null };
        obj1[1] = source(dependencyMap[15]).getHeaderBackButton(fn);
        obj1[2] = source(dependencyMap[14]).ImpressionNames.USER_AGE_GATE_VERIFY;
        obj1[3] = renderHeaderTitle;
        obj1[4] = function render() {
          return closure_1_9(closure_1_1(closure_1_2[18]), { source: closure_0 });
        };
        obj[closure_1_7.Pawtect] = obj1;
        obj2 = { fullscreen: true, headerTitle: null, impressionProperties: null, render: null };
        obj2[1] = renderHeaderTitle;
        obj2[2] = { existing_user: true };
        obj2[3] = function render(arg0) {
          const merged = Object.assign(arg0);
          return callback3(callback2(15252), {});
        };
        obj[closure_1_7.Blocked] = obj2;
        let obj3 = { headerTitle: null, headerLeft: null, render: null };
        obj3[0] = renderHeaderTitle;
        const obj6 = source(dependencyMap[15]);
        obj3[1] = source(dependencyMap[15]).getHeaderBackButton(fn);
        obj3[2] = function render() {
          return callback3(callback2(9347), { onClose: closure_10 });
        };
        obj[closure_1_7.NSFWGateGuild] = obj3;
        return obj;
      }
      fn = () => {
        callback(closure_1_2[10]).closeAgeGateModal(callback);
      };
    }, items1),
    initialRouteName: shouldAgeVerifyForAgeGate ? closure_7.Pawtect : closure_7.AgeGate,
    headerBackTitle: null
  };
  items1 = [source];
  let intl = tmp(1236).intl;
  obj[2] = intl.string(source(1236).t["13/7kX"]);
  return jsx(source(6312).Navigator, {
    screens: React.useMemo(() => {
      if (closure_1_6.NSFW_SERVER_INVITE !== closure_0) {
        if (closure_1_6.NSFW_SERVER_INVITE_EMBED !== closure_0) {
          if (closure_1_6.JOIN_LARGE_GUILD_UNDERAGE !== closure_0) {
            if (closure_1_6.ACCESS_LARGE_GUILD_UNDERAGE !== closure_0) {
              if (closure_1_6.LARGE_GUILD !== closure_0) {
                if (closure_1_6.NSFW_SERVER !== closure_0) {
                  if (closure_1_6.NSFW_CHANNEL === closure_0) {
                    let fn = () => {
                      const guildId = closure_1_4.getGuildId();
                      if (null != guildId) {
                        closure_1_1(closure_1_2[11]).nsfwReturnToSafety(guildId);
                        const obj = closure_1_1(closure_1_2[11]);
                      }
                      callback(closure_1_2[10]).closeAgeGateModal(callback);
                      const obj2 = callback(closure_1_2[10]);
                    };
                  } else if (closure_1_6.NSFW_VOICE_CHANNEL === closure_0) {
                    fn = () => {
                      let obj = closure_1_1(closure_1_2[12]);
                      obj.popAll();
                      obj = { source: closure_0, action: closure_1_5.AGE_GATE_CLOSE };
                      closure_1_1(closure_1_2[13]).track(closure_1_8.AGE_GATE_ACTION, obj);
                    };
                  } else if (closure_1_6.FAMILY_CENTER === closure_0) {
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
            const obj3 = closure_1_1(closure_1_2[12]);
          };
        }
        if (fn == null) {
          fn = () => {

          };
        }
        let obj = { fullscreen: true, impressionName: null, impressionProperties: null, headerLeft: null, headerTitle: null, render: null };
        obj[1] = source(dependencyMap[14]).ImpressionNames.USER_AGE_GATE;
        obj[2] = { existing_user: true };
        let obj2 = source(dependencyMap[15]);
        obj[3] = obj2.getHeaderBackButton(fn);
        obj[4] = renderHeaderTitle;
        obj[5] = function render(arg0, arg1) {
          const callback = arg1;
          if (callback === closure_1_6.NSFW_SERVER_INVITE) {
            let obj = callback(closure_1_2[6]);
            if (obj.isIOS()) {
              let fn = () => {
                arr = arr.push(closure_1_7.NSFWGateGuild);
                closure_1_1(closure_1_2[7]);
                const obj = { key: "AGE_GATE_AGE_VERIFIED", icon: closure_1_1(closure_1_2[8]), content: null };
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
            let obj = arr(5255);
            obj.closeAgeGateModal();
            obj = { key: "AGE_GATE_AGE_VERIFIED", icon: callback(16520), content: null };
            const intl = arr(1236).intl;
            obj[2] = intl.string(arr(1236).t.gUiIGZ);
            callback(4094).open(obj);
          };
        };
        obj[closure_1_7.AgeGate] = obj;
        obj = { fullscreen: true, headerTitle: null, render: null };
        obj[1] = renderHeaderTitle;
        obj[2] = function render(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.source = closure_0;
          return closure_1_9(closure_1_1(closure_1_2[17]), obj);
        };
        obj[closure_1_7.AgeGateConfirm] = obj;
        obj1 = { fullscreen: true, headerLeft: null, impressionName: null, headerTitle: null, render: null };
        obj1[1] = source(dependencyMap[15]).getHeaderBackButton(fn);
        obj1[2] = source(dependencyMap[14]).ImpressionNames.USER_AGE_GATE_VERIFY;
        obj1[3] = renderHeaderTitle;
        obj1[4] = function render() {
          return closure_1_9(closure_1_1(closure_1_2[18]), { source: closure_0 });
        };
        obj[closure_1_7.Pawtect] = obj1;
        obj2 = { fullscreen: true, headerTitle: null, impressionProperties: null, render: null };
        obj2[1] = renderHeaderTitle;
        obj2[2] = { existing_user: true };
        obj2[3] = function render(arg0) {
          const merged = Object.assign(arg0);
          return callback3(callback2(15252), {});
        };
        obj[closure_1_7.Blocked] = obj2;
        let obj3 = { headerTitle: null, headerLeft: null, render: null };
        obj3[0] = renderHeaderTitle;
        const obj6 = source(dependencyMap[15]);
        obj3[1] = source(dependencyMap[15]).getHeaderBackButton(fn);
        obj3[2] = function render() {
          return callback3(callback2(9347), { onClose: closure_10 });
        };
        obj[closure_1_7.NSFWGateGuild] = obj3;
        return obj;
      }
      fn = () => {
        callback(closure_1_2[10]).closeAgeGateModal(callback);
      };
    }, items1),
    initialRouteName: shouldAgeVerifyForAgeGate ? closure_7.Pawtect : closure_7.AgeGate,
    headerBackTitle: null
  });
};