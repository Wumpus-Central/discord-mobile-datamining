// === Module 17445: ExistingUserAgeGateModal ===

// Module 17445 (ExistingUserAgeGateModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 6710 */;
import AgeGateUnderageDefault from "AgeGateUnderage" /* 15908 */;
import ExistingUserAgeGateConstants from "ExistingUserAgeGateConstants" /* 17446 */;
import ExistingUserAgeGateDefault from "ExistingUserAgeGate" /* 17447 */;
import ExistingUserAgeGateConfirmDefault from "ExistingUserAgeGateConfirm" /* 17449 */;
import AgeGateVerifyDefault from "AgeGateVerify" /* 17450 */;
import NsfwGateGuildDefault from "NsfwGateGuild" /* 17451 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import AgeGateConstants from "AgeGateConstants" /* 1110 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
function onClose() {
  const obj = AgeGateModalActionCreators;
  obj.closeAgeGateModal();
}
function renderHeaderTitle() {
  return null;
}
function getScreens(source) {
  let constants2;
  let obj3;
  let obj6;
  let obj9;
  _require = source;
  if (constants.NSFW_SERVER_INVITE !== source) {
    let fn;
    if (constants.NSFW_SERVER_INVITE_EMBED !== source) {
      if (constants.JOIN_LARGE_GUILD_UNDERAGE !== source) {
        if (constants.ACCESS_LARGE_GUILD_UNDERAGE !== source) {
          if (constants.LARGE_GUILD !== source) {
            if (constants.NSFW_SERVER !== source) {
              if (constants.NSFW_CHANNEL === source) {
                fn = () => {
                  const guildId = SelectedGuildStore.getGuildId();
                  if (null != guildId) {
                    const obj = GuildActionCreatorsDefault;
                    obj.nsfwReturnToSafety(guildId);
                  }
                  const obj2 = source(dependencyMap[10]);
                  obj2.closeAgeGateModal(source);
                };
              } else if (constants.NSFW_VOICE_CHANNEL === source) {
                fn = () => {
                  const obj = ModalActionCreatorsDefault;
                  obj.popAll();
                  const obj2 = AnalyticsUtilsDefault;
                  const obj3 = { source, action: constants.AGE_GATE_CLOSE };
                  obj2.track(constants2.AGE_GATE_ACTION, obj3);
                };
              } else if (constants.FAMILY_CENTER === source) {
                fn = () => {
                  const obj = source(dependencyMap[10]);
                  obj.closeAgeGateModal(source);
                };
              }
            }
          }
        }
      }
      fn = () => {
        const guildId = SelectedGuildStore.getGuildId();
        if (null != guildId) {
          const obj = GuildActionCreatorsDefault;
          obj.nsfwReturnToSafety(guildId);
        }
        const obj2 = source(dependencyMap[10]);
        obj2.closeAgeGateModal(source);
        const obj3 = ModalActionCreatorsDefault;
        obj3.popAll();
      };
    }
    let tmp2 = null;
    if (fn == null) {
      fn = () => {

      };
    }
    let obj = {};
    let obj2 = {
      fullscreen: true,
      impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.USER_AGE_GATE,
      impressionProperties: { existing_user: true },
      headerLeft: obj3.getHeaderBackButton(fn),
      headerTitle: renderHeaderTitle,
      render(arg0, arg1) {
          let NSFWGateGuild;
          let closure_0 = arg1;
          if (closure_0 === metroRequire.NSFW_SERVER_INVITE) {
            let fn;
            let obj = PlatformUtils;
            if (obj.isIOS()) {
              fn = () => {
                let intl;
                closure_0.push(NSFWGateGuild.NSFWGateGuild);
                const tmp2 = closure_2_1(closure_2_2[7]);
                const open = tmp2.open;
                const obj = { key: "AGE_GATE_AGE_VERIFIED", icon: closure_2_1(closure_2_2[8]), content: intl.string(source(closure_2_2[9]).t.gUiIGZ) };
                intl = source(closure_2_2[9]).intl;
                open(obj);
              };
            }
            return jsx(ExistingUserAgeGateDefault, { onSuccess: fn, onClose, source: tmp });
          }
          fn = () => {
            let intl;
            const obj = source(closure_1_2[10]);
            obj.closeAgeGateModal();
            const tmp2 = closure_1_1(closure_1_2[7]);
            const open = tmp2.open;
            const obj2 = { key: "AGE_GATE_AGE_VERIFIED", icon: closure_1_1(closure_1_2[8]), content: intl.string(source(closure_1_2[9]).t.gUiIGZ) };
            intl = source(closure_1_2[9]).intl;
            open(obj2);
          };
        }
    };
    const AgeGate = closure_7.AgeGate;
    obj3 = require("NavigatorHeader");
    obj[AgeGate] = obj2;
    const obj4 = {
      fullscreen: true,
      headerTitle: renderHeaderTitle,
      render(arg0) {
          ExistingUserAgeGateConfirmDefault;
          const merged = Object.assign(arg0);
          return <tmp source={source} />;
        }
    };
    obj[closure_7.AgeGateConfirm] = obj4;
    const Pawtect = closure_7.Pawtect;
    const obj5 = {
      fullscreen: true,
      headerLeft: obj6.getHeaderBackButton(fn),
      impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.USER_AGE_GATE_VERIFY,
      headerTitle: renderHeaderTitle,
      render() {
          return jsx(AgeGateVerifyDefault, { source });
        }
    };
    obj[Pawtect] = obj5;
    const obj7 = {
      fullscreen: true,
      headerTitle: renderHeaderTitle,
      impressionProperties: { existing_user: true },
      render(arg0) {
          AgeGateUnderageDefault;
          const merged = Object.assign(arg0);
          return <tmp />;
        }
    };
    obj[closure_7.Blocked] = obj7;
    obj6 = require("NavigatorHeader");
    const NSFWGateGuild = closure_7.NSFWGateGuild;
    const obj8 = {
      headerTitle: renderHeaderTitle,
      headerLeft: obj9.getHeaderBackButton(fn),
      render() {
          return jsx(NsfwGateGuildDefault, { onClose });
        }
    };
    obj[NSFWGateGuild] = obj8;
    obj9 = require("NavigatorHeader");
    return obj;
  }
  fn = () => {
    const obj = source(dependencyMap[10]);
    obj.closeAgeGateModal(source);
  };
}
({ AgeGateAnalyticAction: hasOwnProperty, AgeGateSource: metroRequire } = AgeGateConstants);
let closure_7 = ExistingUserAgeGateConstants.ExistingUserAgeGateScreens;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((source) => {
  let tmp12;
  let tmp5;
  let tmp7;
  let obj = source(576);
  const cResult = obj.c(8);
  source = source.source;
  const obj2 = source(5100);
  const shouldAgeVerifyForAgeGate = obj2.useShouldAgeVerifyForAgeGate();
  const ref = react.useRef(shouldAgeVerifyForAgeGate);
  if (cResult[0] !== source) {
    const fn = function s() {
      if (ref.current) {
        const obj = AgeGateModalActionCreators;
        obj.closeAgeGateModal(source);
      }
    };
    cResult[0] = source;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = source(5102);
  const watchAgeVerificationStatusChange = tmpResult.useWatchAgeVerificationStatusChange(tmp5);
  if (cResult[2] !== source) {
    const tmp9 = getScreens(source);
    cResult[2] = source;
    cResult[3] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  const tmp11 = shouldAgeVerifyForAgeGate ? closure_7.Pawtect : closure_7.AgeGate;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(source(1126).t["13/7kX"]);
    cResult[4] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === tmp7) {
    let tmp14;
    if (cResult[6] === tmp11) {
      tmp14 = cResult[7];
    }
    return tmp14;
  }
  const tmp15 = jsx(source(6496).Navigator, { screens: tmp7, initialRouteName: tmp11, headerBackTitle: tmp12 });
  cResult[5] = tmp7;
  cResult[6] = tmp11;
  cResult[7] = tmp15;
  tmp14 = tmp15;
}) : ((source) => {
  source = source.source;
  let obj = source(5100);
  const shouldAgeVerifyForAgeGate = obj.useShouldAgeVerifyForAgeGate();
  const ref = react.useRef(shouldAgeVerifyForAgeGate);
  const items = [source];
  const obj2 = source(5102);
  const watchAgeVerificationStatusChange = obj2.useWatchAgeVerificationStatusChange(react.useCallback(() => {
    if (ref.current) {
      const obj = AgeGateModalActionCreators;
      obj.closeAgeGateModal(source);
    }
  }, items));
  const items1 = [source];
  const Navigator = source(6496).Navigator;
  const intl = tmp(1126).intl;
  return <Navigator screens={react.useMemo(() => getScreens(source), items1)} initialRouteName={shouldAgeVerifyForAgeGate ? closure_7.Pawtect : closure_7.AgeGate} headerBackTitle={intl.string(source(1126).t["13/7kX"])} />;
});
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateModal.tsx");

export default tmp3;