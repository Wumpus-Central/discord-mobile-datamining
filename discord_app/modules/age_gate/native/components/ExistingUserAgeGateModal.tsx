// === Module 17419: ExistingUserAgeGateModal ===

// Module 17419 (ExistingUserAgeGateModal)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1248 */;
import NavigatorHeader from "NavigatorHeader" /* 5705 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 7314 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4458 */;

require = fn;
function onClose() {
  AgeGateModalActionCreators.closeAgeGateModal();
}
function renderHeaderTitle() {
  return null;
}
const AgeGateConstants = fn(1098);
({ AgeGateAnalyticAction: hasOwnProperty, AgeGateSource: metroRequire } = AgeGateConstants);
let closure_7 = fn(17420).ExistingUserAgeGateScreens;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateModal.tsx");

export default function ExistingUserAgeGateModal(source) {
  source = source.source;
  const shouldAgeVerifyForAgeGate = source(4847).useShouldAgeVerifyForAgeGate();
  noop.useRef(shouldAgeVerifyForAgeGate);
  let obj = source(4847);
  const items = [source];
  const watchAgeVerificationStatusChange = source(4849).useWatchAgeVerificationStatusChange(noop.useCallback(() => {
    if (ref.current) {
      AgeGateModalActionCreators.closeAgeGateModal(source);
    }
  }, items));
  let obj3 = { screens: null, initialRouteName: shouldAgeVerifyForAgeGate ? closure_7.Pawtect : closure_7.AgeGate, headerBackTitle: null };
  const items1 = [source];
  obj3.screens = noop.useMemo(() => {
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
                      closure_1(5601).nsfwReturnToSafety(guildId);
                      const obj = closure_1(5601);
                    }
                    source(7314).closeAgeGateModal(closure_0);
                    const obj2 = source(7314);
                  };
                } else if (constants.NSFW_VOICE_CHANNEL === source) {
                  fn = () => {
                    closure_1(4839).popAll();
                    const obj = closure_1(4839);
                    closure_1(1240).track(constants3.AGE_GATE_ACTION, { source, action: constants.AGE_GATE_CLOSE });
                  };
                } else if (constants.FAMILY_CENTER === source) {
                  fn = () => {
                    source(7314).closeAgeGateModal(closure_0);
                  };
                }
              }
            }
          }
        }
        fn = () => {
          const guildId = SelectedGuildStore.getGuildId();
          if (null != guildId) {
            closure_1(5601).nsfwReturnToSafety(guildId);
            const obj = closure_1(5601);
          }
          source(7314).closeAgeGateModal(closure_0);
          const obj2 = source(7314);
          closure_1(4839).popAll();
          const obj3 = closure_1(4839);
        };
      }
      if (fn == null) {
        fn = () => {

        };
      }
      let obj = {};
      let obj2 = {
        fullscreen: true,
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE,
        impressionProperties: { existing_user: true },
        headerLeft: NavigatorHeader.getHeaderBackButton(fn),
        headerTitle: renderHeaderTitle,
        render(arg0, arg1) {
            closure_0 = arg1;
            if (closure_0 === constants2.NSFW_SERVER_INVITE) {
              if (obj.isIOS()) {
                let fn = () => {
                  closure_0.push(NSFWGateGuild.NSFWGateGuild);
                  const obj2 = { key: "AGE_GATE_AGE_VERIFIED", icon: ref(17421), content: null };
                  const intl = closure_0(1114).intl;
                  obj2.content = intl.string(closure_0(1114).t.gUiIGZ);
                  ref(4335).open(obj2);
                };
              }
              let obj2 = { onSuccess: fn, onClose, source: tmp };
              return jsx(closure_1(17422), { onSuccess: fn, onClose, source: tmp });
            }
            fn = () => {
              closure_0(7314).closeAgeGateModal();
              const obj = closure_0(7314);
              const obj3 = { key: "AGE_GATE_AGE_VERIFIED", icon: closure_1_1(17421), content: null };
              const intl = closure_0(1114).intl;
              obj3.content = intl.string(closure_0(1114).t.gUiIGZ);
              closure_1_1(4335).open(obj3);
            };
          }
      };
      obj[NSFWGateGuild.AgeGate] = obj2;
      const obj4 = {
        fullscreen: true,
        headerTitle: renderHeaderTitle,
        render(arg0) {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.source = source;
            return jsx(closure_1(17424), {});
          }
      };
      obj[NSFWGateGuild.AgeGateConfirm] = obj4;
      const obj5 = { fullscreen: true, headerLeft: null, impressionName: null, headerTitle: null, render: null };
      obj5.headerLeft = NavigatorHeader.getHeaderBackButton(fn);
      obj5.impressionName = discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE_VERIFY;
      obj5.headerTitle = renderHeaderTitle;
      obj5.render = function render() {
        return jsx(closure_1(17425), { source });
      };
      obj[NSFWGateGuild.Pawtect] = obj5;
      const obj7 = {
        fullscreen: true,
        headerTitle: renderHeaderTitle,
        impressionProperties: { existing_user: true },
        render(arg0) {
            const merged = Object.assign(arg0);
            return closure_1_9(ref(16083), {});
          }
      };
      obj[NSFWGateGuild.Blocked] = obj7;
      const obj8 = { headerTitle: renderHeaderTitle, headerLeft: null, render: null };
      obj8.headerLeft = NavigatorHeader.getHeaderBackButton(fn);
      obj8.render = function render() {
        return closure_1_9(ref(10424), { onClose });
      };
      obj[NSFWGateGuild.NSFWGateGuild] = obj8;
      return obj;
    }
    fn = () => {
      source(7314).closeAgeGateModal(closure_0);
    };
  }, items1);
  let intl = tmp(1114).intl;
  obj3.headerBackTitle = intl.string(source(1114).t["13/7kX"]);
  return jsx(source(7103).Navigator, { screens: null, initialRouteName: shouldAgeVerifyForAgeGate ? closure_7.Pawtect : closure_7.AgeGate, headerBackTitle: null });
};