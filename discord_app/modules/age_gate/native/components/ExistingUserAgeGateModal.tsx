// discord_app/modules/age_gate/native/components/ExistingUserAgeGateModal.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import _modDef4806 from "../../../../../_runtime/metro/04806__.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import AgeGateModalActionCreators from "../../AgeGateModalActionCreators.tsx";
import AgeGateUnderageDefault from "AgeGateUnderage.tsx";
import ExistingUserAgeGateDefault from "ExistingUserAgeGate.tsx";
import ExistingUserAgeGateConfirmDefault from "ExistingUserAgeGateConfirm.tsx";
import AgeGateVerifyDefault from "AgeGateVerify.tsx";
import NsfwGateGuildDefault from "NsfwGateGuild.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";

require = fn;
function onClose() {
  AgeGateModalActionCreators.closeAgeGateModal();
}
function renderHeaderTitle() {
  return null;
}
function getScreens(source) {
  _require = source;
  closure_129_0 = source;
  if (constants2.NSFW_SERVER_INVITE !== source) {
    if (constants2.NSFW_SERVER_INVITE_EMBED !== source) {
      if (constants2.JOIN_LARGE_GUILD_UNDERAGE !== source) {
        if (constants2.ACCESS_LARGE_GUILD_UNDERAGE !== source) {
          if (constants2.LARGE_GUILD !== source) {
            if (constants2.NSFW_SERVER !== source) {
              if (constants2.NSFW_CHANNEL === source) {
                let fn = () => {
                  const guildId = SelectedGuildStore.getGuildId();
                  if (null != guildId) {
                    GuildActionCreatorsDefault.nsfwReturnToSafety(guildId);
                  }
                  AgeGateModalActionCreators.closeAgeGateModal(closure_0);
                };
              } else if (constants2.NSFW_VOICE_CHANNEL === source) {
                fn = () => {
                  ModalActionCreatorsDefault.popAll();
                  AnalyticsUtilsDefault.track(AnalyticEvents.AGE_GATE_ACTION, {
                    source,
                    action: constants.AGE_GATE_CLOSE,
                  });
                };
              } else if (constants2.FAMILY_CENTER === source) {
                fn = () => {
                  AgeGateModalActionCreators.closeAgeGateModal(closure_0);
                };
              }
            }
          }
        }
      }
      fn = () => {
        const guildId = SelectedGuildStore.getGuildId();
        if (null != guildId) {
          GuildActionCreatorsDefault.nsfwReturnToSafety(guildId);
        }
        AgeGateModalActionCreators.closeAgeGateModal(closure_0);
        ModalActionCreatorsDefault.popAll();
      };
    }
    if (fn == null) {
      fn = () => {};
    }
    let obj = {};
    let obj2 = {
      fullscreen: true,
      impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.USER_AGE_GATE,
      impressionProperties: { existing_user: true },
      headerLeft: require("NavigatorHeader").getHeaderBackButton(fn),
      headerTitle: renderHeaderTitle,
      render(arg0, arg1) {
        closure_0 = arg1;
        if (closure_0 === constants2.NSFW_SERVER_INVITE) {
          if (obj.isIOS()) {
            let fn = () => {
              closure_0.push(NSFWGateGuild.NSFWGateGuild);
              const obj2 = { key: "AGE_GATE_AGE_VERIFIED", icon: _modDef4806, content: null };
              const intl = closure_0(1126).intl;
              obj2.content = intl.string(closure_0(1126).t.gUiIGZ);
              ToastActionCreatorsDefault.open(obj2);
            };
          }
          let obj2 = { onSuccess: fn, onClose, source: tmp };
          return jsx(ExistingUserAgeGateDefault, { onSuccess: fn, onClose, source: tmp });
        }
        fn = () => {
          closure_0(6710).closeAgeGateModal();
          const obj = closure_0(6710);
          const obj3 = { key: "AGE_GATE_AGE_VERIFIED", icon: closure_1_1(4806), content: null };
          const intl = closure_0(1126).intl;
          obj3.content = intl.string(closure_0(1126).t.gUiIGZ);
          closure_1_1(4568).open(obj3);
        };
      },
    };
    obj[NSFWGateGuild.AgeGate] = obj2;
    const obj4 = {
      fullscreen: true,
      headerTitle: renderHeaderTitle,
      render(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.source = source;
        return jsx(ExistingUserAgeGateConfirmDefault, {});
      },
    };
    obj[NSFWGateGuild.AgeGateConfirm] = obj4;
    const obj5 = { fullscreen: true, headerLeft: null, impressionName: null, headerTitle: null, render: null };
    let obj3 = require("NavigatorHeader");
    obj5.headerLeft = require("NavigatorHeader").getHeaderBackButton(fn);
    obj5.impressionName = require("discord_common/AnalyticsUtils").ImpressionNames.USER_AGE_GATE_VERIFY;
    obj5.headerTitle = renderHeaderTitle;
    obj5.render = function render() {
      return jsx(AgeGateVerifyDefault, { source });
    };
    obj[NSFWGateGuild.Pawtect] = obj5;
    const obj7 = {
      fullscreen: true,
      headerTitle: renderHeaderTitle,
      impressionProperties: { existing_user: true },
      render(arg0) {
        const merged = Object.assign(arg0);
        return jsx(AgeGateUnderageDefault, {});
      },
    };
    obj[NSFWGateGuild.Blocked] = obj7;
    const obj8 = { headerTitle: renderHeaderTitle, headerLeft: null, render: null };
    const obj6 = require("NavigatorHeader");
    obj8.headerLeft = require("NavigatorHeader").getHeaderBackButton(fn);
    obj8.render = function render() {
      return jsx(NsfwGateGuildDefault, { onClose });
    };
    obj[NSFWGateGuild.NSFWGateGuild] = obj8;
    return obj;
  }
  fn = () => {
    AgeGateModalActionCreators.closeAgeGateModal(closure_0);
  };
}
const AgeGateConstants = fn(1110);
({ AgeGateAnalyticAction: hasOwnProperty, AgeGateSource: metroRequire } = AgeGateConstants);
let closure_7 = fn(17446).ExistingUserAgeGateScreens;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (source) => {
      const cResult = source(576).c(8);
      source = source.source;
      let obj = source(576);
      const shouldAgeVerifyForAgeGate = source(5100).useShouldAgeVerifyForAgeGate();
      noop.useRef(shouldAgeVerifyForAgeGate);
      if (cResult[0] !== source) {
        const fn = function s() {
          if (ref.current) {
            AgeGateModalActionCreators.closeAgeGateModal(source);
          }
        };
        cResult[0] = source;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      const obj2 = source(5100);
      const watchAgeVerificationStatusChange = source(5102).useWatchAgeVerificationStatusChange(tmp5);
      if (cResult[2] !== source) {
        const tmp9 = getScreens(source);
        cResult[2] = source;
        cResult[3] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[3];
      }
      const tmp11 = shouldAgeVerifyForAgeGate ? closure_7.Pawtect : closure_7.AgeGate;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["13/7kX"]);
        cResult[4] = stringResult;
        let tmp12 = stringResult;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === tmp7) {
        if (cResult[6] === tmp11) {
          let tmp14 = cResult[7];
        }
        return tmp14;
      }
      const tmp15 = jsx(source(6496).Navigator, { screens: tmp7, initialRouteName: tmp11, headerBackTitle: tmp12 });
      cResult[5] = tmp7;
      cResult[6] = tmp11;
      cResult[7] = tmp15;
      tmp14 = tmp15;
      const tmpResult = source(5102);
    }
  : (source) => {
      source = source.source;
      const shouldAgeVerifyForAgeGate = source(5100).useShouldAgeVerifyForAgeGate();
      noop.useRef(shouldAgeVerifyForAgeGate);
      let obj = source(5100);
      const items = [source];
      const watchAgeVerificationStatusChange = source(5102).useWatchAgeVerificationStatusChange(
        noop.useCallback(() => {
          if (ref.current) {
            AgeGateModalActionCreators.closeAgeGateModal(source);
          }
        }, items),
      );
      const obj3 = {
        screens: null,
        initialRouteName: shouldAgeVerifyForAgeGate ? closure_7.Pawtect : closure_7.AgeGate,
        headerBackTitle: null,
      };
      const items1 = [source];
      obj3.screens = noop.useMemo(() => getScreens(source), items1);
      const intl = tmp(1126).intl;
      obj3.headerBackTitle = intl.string(source(1126).t["13/7kX"]);
      return jsx(source(6496).Navigator, {
        screens: null,
        initialRouteName: shouldAgeVerifyForAgeGate ? closure_7.Pawtect : closure_7.AgeGate,
        headerBackTitle: null,
      });
    };
