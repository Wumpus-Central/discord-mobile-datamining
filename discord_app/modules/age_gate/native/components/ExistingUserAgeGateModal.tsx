// === Module 17305: ExistingUserAgeGateModal ===

// Module 17305 (ExistingUserAgeGateModal)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 7211 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

require = fn;
function onClose() {
  AgeGateModalActionCreators.closeAgeGateModal();
}
function renderHeaderTitle() {
  return null;
}
const AgeGateConstants = fn(1098);
({ AgeGateAnalyticAction: hasOwnProperty, AgeGateSource: metroRequire } = AgeGateConstants);
let closure_7 = fn(17306).ExistingUserAgeGateScreens;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateModal.tsx");

export default function ExistingUserAgeGateModal(source) {
  source = source.source;
  let obj = source(4771);
  const shouldAgeVerifyForAgeGate = obj.useShouldAgeVerifyForAgeGate();
  noop.useRef(shouldAgeVerifyForAgeGate);
  const items = [source];
  const watchAgeVerificationStatusChange = source(4773).useWatchAgeVerificationStatusChange(noop.useCallback(() => {
    if (ref.current) {
      AgeGateModalActionCreators.closeAgeGateModal(source);
    }
  }, items));
  obj = { screens: null, initialRouteName: shouldAgeVerifyForAgeGate ? closure_7.Pawtect : closure_7.AgeGate, headerBackTitle: null };
  const items1 = [source];
  obj.screens = noop.useMemo(() => {
    if (constants.NSFW_SERVER_INVITE !== source) {
      if (constants.NSFW_SERVER_INVITE_EMBED !== source) {
        if (constants.JOIN_LARGE_GUILD_UNDERAGE !== source) {
          if (constants.ACCESS_LARGE_GUILD_UNDERAGE !== source) {
            if (constants.LARGE_GUILD !== source) {
              if (constants.NSFW_SERVER !== source) {
                if (constants.NSFW_CHANNEL === source) {
                  let fn = () => {
                    const guildId = SelectedGuildStore.getGuildId();
                    if (null != guildId) {
                      closure_1(5520).nsfwReturnToSafety(guildId);
                      const obj = closure_1(5520);
                    }
                    source(7211).closeAgeGateModal(closure_0);
                    const obj2 = source(7211);
                  };
                } else if (constants.NSFW_VOICE_CHANNEL === source) {
                  fn = () => {
                    let obj = closure_1(4763);
                    obj.popAll();
                    obj = { source, action: constants.AGE_GATE_CLOSE };
                    closure_1(1242).track(constants3.AGE_GATE_ACTION, obj);
                  };
                } else if (constants.FAMILY_CENTER === source) {
                  fn = () => {
                    source(7211).closeAgeGateModal(closure_0);
                  };
                }
              }
            }
          }
        }
        fn = () => {
          const guildId = SelectedGuildStore.getGuildId();
          if (null != guildId) {
            closure_1(5520).nsfwReturnToSafety(guildId);
            const obj = closure_1(5520);
          }
          source(7211).closeAgeGateModal(closure_0);
          const obj2 = source(7211);
          closure_1(4763).popAll();
          const obj3 = closure_1(4763);
        };
      }
      if (fn == null) {
        fn = () => {

        };
      }
      let obj = {};
      obj = { fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE, impressionProperties: { existing_user: true }, headerLeft: null, headerTitle: null, render: null };
      let obj2 = NavigatorHeader;
      obj.headerLeft = obj2.getHeaderBackButton(fn);
      obj.headerTitle = renderHeaderTitle;
      obj.render = function render(arg0, arg1) {
        closure_0 = arg1;
        if (closure_0 === constants2.NSFW_SERVER_INVITE) {
          let obj = source(1115);
          if (obj.isIOS()) {
            let fn = () => {
              closure_0.push(NSFWGateGuild.NSFWGateGuild);
              ref(4259);
              const obj = { key: "AGE_GATE_AGE_VERIFIED", icon: ref(17307), content: null };
              const intl = closure_0(1114).intl;
              obj.content = intl.string(closure_0(1114).t.gUiIGZ);
              obj.open(obj);
            };
          }
          obj = { onSuccess: fn, onClose, source: tmp };
          return jsx(closure_1(17308), { onSuccess: fn, onClose, source: tmp });
        }
        fn = () => {
          let obj = closure_0(7211);
          obj.closeAgeGateModal();
          obj = { key: "AGE_GATE_AGE_VERIFIED", icon: closure_1_1(17307), content: null };
          const intl = closure_0(1114).intl;
          obj.content = intl.string(closure_0(1114).t.gUiIGZ);
          closure_1_1(4259).open(obj);
        };
      };
      obj[NSFWGateGuild.AgeGate] = obj;
      obj = {
        fullscreen: true,
        headerTitle: renderHeaderTitle,
        render(arg0) {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.source = source;
            return jsx(closure_1(17310), {});
          }
      };
      obj[NSFWGateGuild.AgeGateConfirm] = obj;
      const obj1 = {
        fullscreen: true,
        headerLeft: NavigatorHeader.getHeaderBackButton(fn),
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE_VERIFY,
        headerTitle: renderHeaderTitle,
        render() {
            return jsx(closure_1(17311), { source });
          }
      };
      obj[NSFWGateGuild.Pawtect] = obj1;
      obj2 = {
        fullscreen: true,
        headerTitle: renderHeaderTitle,
        impressionProperties: { existing_user: true },
        render(arg0) {
            const merged = Object.assign(arg0);
            return closure_1_9(ref(15986), {});
          }
      };
      obj[NSFWGateGuild.Blocked] = obj2;
      let obj3 = { headerTitle: renderHeaderTitle, headerLeft: null, render: null };
      obj3.headerLeft = NavigatorHeader.getHeaderBackButton(fn);
      obj3.render = function render() {
        return closure_1_9(ref(10295), { onClose });
      };
      obj[NSFWGateGuild.NSFWGateGuild] = obj3;
      return obj;
    }
    fn = () => {
      source(7211).closeAgeGateModal(closure_0);
    };
  }, items1);
  let intl = tmp(1114).intl;
  obj.headerBackTitle = intl.string(source(1114).t["13/7kX"]);
  return jsx(source(7000).Navigator, { screens: null, initialRouteName: shouldAgeVerifyForAgeGate ? closure_7.Pawtect : closure_7.AgeGate, headerBackTitle: null });
};