// discord_app/modules/age_gate/native/components/ExistingUserAgeGateModal.tsx
import AgeGateUnderage from "AgeGateUnderage";
import handleConnectionOpen from "handleConnectionOpen";
import result from "result";
import { ExistingUserAgeGateScreens as closure_7 } from "ExistingUserAgeGateScreens";
import { AnalyticEvents } from "ME";
import { jsx } from "shouldShowAgeGateForVoiceChannel";
import { openAgeGateModal } from "../../AgeGateModalActionCreators.tsx";

let c5;
let closure_6;
const require = arg1;
function onClose() {
  openAgeGateModal.closeAgeGateModal();
}
function renderHeaderTitle() {
  return null;
}
({ AgeGateAnalyticAction: c5, AgeGateSource: closure_6 } = result);
result = require("result").fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateModal.tsx");

export default function ExistingUserAgeGateModal(source) {
  source = source.source;
  let closure_1;
  let obj = source(4557);
  const shouldAgeVerifyForAgeGate = obj.useShouldAgeVerifyForAgeGate();
  closure_1 = React.useRef(shouldAgeVerifyForAgeGate);
  const items = [source];
  const watchAgeVerificationStatusChange = source(4559).useWatchAgeVerificationStatusChange(React.useCallback(() => {
    if (ref.current) {
      source(outer1_2[10]).closeAgeGateModal(source);
      const obj = source(outer1_2[10]);
    }
  }, items));
  obj = { screens: null, initialRouteName: null, headerBackTitle: null };
  const items1 = [source];
  obj[0] = React.useMemo(() => {
    if (outer1_6.NSFW_SERVER_INVITE !== closure_0) {
      if (tmp2.NSFW_SERVER_INVITE_EMBED !== tmp) {
        if (tmp2.JOIN_LARGE_GUILD_UNDERAGE !== tmp) {
          if (tmp2.ACCESS_LARGE_GUILD_UNDERAGE !== tmp) {
            if (tmp2.LARGE_GUILD !== tmp) {
              if (tmp2.NSFW_SERVER !== tmp) {
                if (tmp2.NSFW_CHANNEL === tmp) {
                  let fn = () => {
                    const guildId = outer1_4.getGuildId();
                    if (null != guildId) {
                      outer1_1(outer1_2[11]).nsfwReturnToSafety(guildId);
                      const obj = outer1_1(outer1_2[11]);
                    }
                    callback(outer1_2[10]).closeAgeGateModal(callback);
                  };
                } else if (tmp2.NSFW_VOICE_CHANNEL === tmp) {
                  fn = () => {
                    let obj = outer1_1(outer1_2[12]);
                    obj.popAll();
                    obj = { source: closure_0, action: outer1_5.AGE_GATE_CLOSE };
                    outer1_1(outer1_2[13]).track(outer1_8.AGE_GATE_ACTION, obj);
                  };
                } else if (tmp2.FAMILY_CENTER === tmp) {
                  fn = () => {
                    callback(outer1_2[10]).closeAgeGateModal(callback);
                  };
                }
              }
            }
          }
        }
        fn = () => {
          const guildId = outer1_4.getGuildId();
          if (null != guildId) {
            outer1_1(outer1_2[11]).nsfwReturnToSafety(guildId);
            const obj = outer1_1(outer1_2[11]);
          }
          callback(outer1_2[10]).closeAgeGateModal(callback);
          const obj2 = callback(outer1_2[10]);
          outer1_1(outer1_2[12]).popAll();
        };
      }
      if (fn == null) {
        fn = () => {

        };
      }
      let obj = {};
      obj = { fullscreen: true, impressionName: null, impressionProperties: null, headerLeft: null, headerTitle: null, render: null };
      obj[1] = source(outer1_2[14]).ImpressionNames.USER_AGE_GATE;
      obj[2] = { existing_user: true };
      let obj2 = source(outer1_2[15]);
      obj[3] = obj2.getHeaderBackButton(fn);
      obj[4] = outer1_11;
      obj[5] = function render(arg0, arg1) {
        const callback = arg1;
        if (callback === outer1_6.NSFW_SERVER_INVITE) {
          let obj = callback(outer1_2[6]);
          if (obj.isIOS()) {
            let fn = () => {
              arr = arr.push(outer1_7.NSFWGateGuild);
              let obj = outer1_1(outer1_2[7]);
              obj = { key: "AGE_GATE_AGE_VERIFIED", icon: outer1_1(outer1_2[8]), content: null };
              const intl = arr(outer1_2[9]).intl;
              obj[2] = intl.string(arr(outer1_2[9]).t.gUiIGZ);
              obj.open(obj);
            };
          }
          obj = { onSuccess: null, onClose: null, source: null };
          obj[0] = fn;
          obj[1] = outer1_10;
          obj[2] = tmp;
          return outer1_9(outer1_1(outer1_2[16]), obj);
        }
        fn = () => {
          let obj = arr(5865);
          obj.closeAgeGateModal();
          obj = { key: "AGE_GATE_AGE_VERIFIED", icon: callback(16450), content: null };
          const intl = arr(1236).intl;
          obj[2] = intl.string(arr(1236).t.gUiIGZ);
          callback(4062).open(obj);
        };
      };
      obj[outer1_7.AgeGate] = obj;
      obj = { fullscreen: true, headerTitle: null, render: null };
      obj[1] = outer1_11;
      obj[2] = function render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.source = closure_0;
        return outer1_9(outer1_1(outer1_2[17]), obj);
      };
      obj[outer1_7.AgeGateConfirm] = obj;
      const obj1 = { fullscreen: true, headerLeft: null, impressionName: null, headerTitle: null, render: null };
      obj1[1] = source(outer1_2[15]).getHeaderBackButton(fn);
      obj1[2] = source(outer1_2[14]).ImpressionNames.USER_AGE_GATE_VERIFY;
      obj1[3] = outer1_11;
      obj1[4] = function render() {
        return outer1_9(outer1_1(outer1_2[18]), { source: closure_0 });
      };
      obj[outer1_7.Pawtect] = obj1;
      obj2 = { fullscreen: true, headerTitle: null, impressionProperties: null, render: null };
      obj2[1] = outer1_11;
      obj2[2] = { existing_user: true };
      obj2[3] = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback3(callback2(15189), {});
      };
      obj[outer1_7.Blocked] = obj2;
      const obj3 = { headerTitle: null, headerLeft: null, render: null };
      obj3[0] = outer1_11;
      const obj6 = source(outer1_2[15]);
      obj3[1] = source(outer1_2[15]).getHeaderBackButton(fn);
      obj3[2] = function render() {
        return callback3(callback2(8725), { onClose: closure_10 });
      };
      obj[outer1_7.NSFWGateGuild] = obj3;
      return obj;
    }
    fn = () => {
      callback(outer1_2[10]).closeAgeGateModal(callback);
    };
  }, items1);
  obj[1] = shouldAgeVerifyForAgeGate ? closure_7.Pawtect : closure_7.AgeGate;
  let intl = tmp(1236).intl;
  obj[2] = intl.string(source(1236).t["13/7kX"]);
  return jsx(source(5822).Navigator, { screens: null, initialRouteName: null, headerBackTitle: null });
};