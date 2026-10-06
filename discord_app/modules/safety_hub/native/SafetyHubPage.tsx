// discord_app/modules/safety_hub/native/SafetyHubPage.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl7 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import _modDef3137 from "../../age_assurance/ManualReview.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import AuthenticationActionCreatorsDefault from "../../../actions/AuthenticationActionCreators.tsx";
import SafetyHubConstants from "../SafetyHubConstants.tsx";
import ManualReviewActionCreators from "../../age_assurance/ManualReviewActionCreators.tsx";
import SafetyHubActionCreatorsAll from "../SafetyHubActionCreators.tsx";
import AutomatedUnderageAppealModalActionCreatorsDefault from "../AutomatedUnderageAppealModalActionCreators.native.tsx";
import useAvailableAgeVerificationMethods from "../hooks/useAvailableAgeVerificationMethods.tsx";
import useShouldShowInitialGoogleWalletBanner from "../hooks/useShouldShowInitialGoogleWalletBanner.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import SafetyHubStore from "../SafetyHubStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

let c10;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function handleLogInClick() {
  const obj = AuthenticationActionCreatorsDefault;
  obj.closeSuspendedUser();
}
function handleRetryClick() {
  const obj = AutomatedUnderageAppealModalActionCreatorsDefault;
  obj.openV2("");
}
function handleManualReviewClick() {
  const obj = ManualReviewActionCreators;
  const result = obj.handleManualReviewCta();
}
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: metroImportDefault } = react_native);
const AgeCheckStatus = SafetyHubConstants.AgeCheckStatus;
({ AnalyticEvents: c10, Routes: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Button;
      let first;
      let intl;
      let intl2;
      let obj3;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          messageType: native.HelpMessageTypes.ERROR,
          button: closure_12(Button, obj3),
          children: intl2.string(intl7.t.dqbMbn),
        };
        const HelpMessage = native.HelpMessage;
        obj3 = { variant: "secondary", size: "sm", text: intl.string(intl7.t.IcA9iD), onPress: handleRetryClick };
        Button = components_Button_Button.Button;
        intl = intl7.intl;
        intl2 = intl7.intl;
        const tmp7 = closure_12(HelpMessage, obj2);
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let Button;
      let intl;
      let intl2;
      let obj2;
      const obj = {
        messageType: native.HelpMessageTypes.ERROR,
        button: closure_12(Button, obj2),
        children: intl2.string(intl7.t.dqbMbn),
      };
      const HelpMessage = native.HelpMessage;
      obj2 = { variant: "secondary", size: "sm", text: intl.string(intl7.t.IcA9iD), onPress: handleRetryClick };
      Button = components_Button_Button.Button;
      intl = intl7.intl;
      intl2 = intl7.intl;
      return closure_12(HelpMessage, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let isExpressiveModalV2Enabled;
      let tmp10;
      let tmp4;
      let tmp5;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SafetyHubStore];
        const fn = function n() {
          return isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const intl = intl7.intl;
        const string = intl.string;
        const t = intl7.t;
        const stringResult = string(stateFromStores ? t.PU8nMu : t["nhhy/R"]);
        cResult[2] = stateFromStores;
        cResult[3] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== tmp8) {
        const obj2 = { messageType: native.HelpMessageTypes.INFO, children: tmp8 };
        const HelpMessage = native.HelpMessage;
        const tmp12 = closure_12(HelpMessage, obj2);
        cResult[4] = tmp8;
        cResult[5] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[5];
      }
      return tmp10;
    }
  : () => {
      let isExpressiveModalV2Enabled;
      let string;
      let t;
      const items = [SafetyHubStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () =>
        isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled(),
      );
      const obj2 = {
        messageType: native.HelpMessageTypes.INFO,
        children: string(stateFromStores ? t.PU8nMu : t["nhhy/R"]),
      };
      const HelpMessage = native.HelpMessage;
      const intl = intl7.intl;
      string = intl.string;
      t = intl7.t;
      return closure_12(HelpMessage, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let link;
      let tmp12;
      let tmp9;
      let obj = require("react");
      const cResult = obj.c(5);
      const tmp4 = closure_22();
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          variant: "secondary",
          size: "sm",
          text: intl.string(require("intl").t.IcA9iD),
          onPress: handleRetryClick,
        };
        const Button = tmp(5601).Button;
        intl = tmp(1126).intl;
        const tmp8 = closure_12(Button, obj2);
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4) {
        const intl2 = tmp(1126).intl;
        const obj3 = {
          manualReviewHook(children, arg1) {
            const obj = {
              onPress: handleManualReviewClick,
              style: link.link,
              variant: "text-sm/normal",
              color: "text-default",
              children,
            };
            return closure_12(Text_Text.Text, obj, arg1);
          },
        };
        const formatResult = intl2.format(_modDef3137.vPoM8y, obj3);
        cResult[1] = tmp4;
        cResult[2] = formatResult;
        tmp9 = formatResult;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== tmp9) {
        const obj4 = { messageType: require("native").HelpMessageTypes.ERROR, button: first, children: tmp9 };
        const HelpMessage = tmp(1188).HelpMessage;
        const tmp14 = closure_12(HelpMessage, obj4);
        cResult[3] = tmp9;
        cResult[4] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[4];
      }
      return tmp12;
    }
  : () => {
      let Button;
      let intl;
      let intl2;
      let link;
      let obj2;
      let obj3;
      _require = closure_22();
      let obj = {
        messageType: require("native").HelpMessageTypes.ERROR,
        button: closure_12(Button, obj2),
        children: intl2.format(_modDef3137.vPoM8y, obj3),
      };
      const HelpMessage = require("native").HelpMessage;
      obj2 = {
        variant: "secondary",
        size: "sm",
        text: intl.string(require("intl").t.IcA9iD),
        onPress: handleRetryClick,
      };
      Button = require("components/Button/Button").Button;
      intl = require("intl").intl;
      intl2 = require("intl").intl;
      obj3 = {
        manualReviewHook(children, arg1) {
          const obj = {
            onPress: handleManualReviewClick,
            style: link.link,
            variant: "text-sm/normal",
            color: "text-default",
            children,
          };
          return closure_12(Text_Text.Text, obj, arg1);
        },
      };
      return closure_12(HelpMessage, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Button;
      let intl;
      let intl2;
      let obj4;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(4);
      const obj2 = useAvailableAgeVerificationMethods;
      const availableAgeVerificationMethods = obj2.useAvailableAgeVerificationMethods();
      const methods = availableAgeVerificationMethods.methods;
      if (availableAgeVerificationMethods.loading) {
        let first;
        const _Symbol4 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp25 = closure_12(closure_18, {});
          cResult[0] = tmp25;
          first = tmp25;
        } else {
          first = cResult[0];
        }
        tmp7 = first;
      } else {
        let tmp17;
        if (null != methods) {
          if (0 !== methods.length) {
            if (methods.every((method) => method.method === require("user").AgeAssuranceMethod.GOOGLE_WALLET)) {
              let tmp12;
              const _Symbol2 = Symbol;
              if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp15 = closure_12(closure_19, {});
                cResult[2] = tmp15;
                tmp12 = tmp15;
              } else {
                tmp12 = cResult[2];
              }
              tmp7 = tmp12;
            } else {
              const _Symbol = Symbol;
              if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp10 = closure_12(closure_17, {});
                cResult[3] = tmp10;
                tmp7 = tmp10;
              } else {
                tmp7 = cResult[3];
              }
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            messageType: native.HelpMessageTypes.ERROR,
            button: closure_12(Button, obj4),
            children: intl2.string(intl7.t.VTgFYh),
          };
          const HelpMessage = native.HelpMessage;
          obj4 = {
            variant: "secondary",
            size: "sm",
            text: intl.string(intl7.t.NkTGsC),
            onPress: handleManualReviewClick,
          };
          Button = components_Button_Button.Button;
          intl = intl7.intl;
          intl2 = intl7.intl;
          const tmp20 = closure_12(HelpMessage, obj3);
          cResult[1] = tmp20;
          tmp17 = tmp20;
        } else {
          tmp17 = cResult[1];
        }
        tmp7 = tmp17;
      }
      return tmp7;
    }
  : () => {
      let Button;
      let intl;
      let intl2;
      let obj3;
      let tmp5Result;
      const obj = useAvailableAgeVerificationMethods;
      const availableAgeVerificationMethods = obj.useAvailableAgeVerificationMethods();
      const methods = availableAgeVerificationMethods.methods;
      if (availableAgeVerificationMethods.loading) {
        tmp5Result = closure_12(closure_18, {});
      } else {
        if (null != methods) {
          if (0 !== methods.length) {
            if (methods.every((method) => method.method === require("user").AgeAssuranceMethod.GOOGLE_WALLET)) {
              tmp5Result = closure_12(closure_19, {});
            } else {
              tmp5Result = closure_12(closure_17, {});
            }
          }
        }
        const obj2 = {
          messageType: native.HelpMessageTypes.ERROR,
          button: closure_12(Button, obj3),
          children: intl2.string(intl7.t.VTgFYh),
        };
        const HelpMessage = native.HelpMessage;
        obj3 = {
          variant: "secondary",
          size: "sm",
          text: intl.string(intl7.t.NkTGsC),
          onPress: handleManualReviewClick,
        };
        Button = components_Button_Button.Button;
        intl = intl7.intl;
        intl2 = intl7.intl;
        tmp5Result = closure_12(HelpMessage, obj2);
      }
      return tmp5Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Button;
      let ageCheckStatus;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let obj3;
      let obj5;
      let tmp10;
      let tmp4;
      let tmp5;
      let obj = react2;
      const cResult = obj.c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SafetyHubStore];
        const fn = function n() {
          return ageCheckStatus.getAgeCheckStatus();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const tmpResult2 = useShouldShowInitialGoogleWalletBanner;
      const shouldShowInitialGoogleWalletBanner = tmpResult2.useShouldShowInitialGoogleWalletBanner();
      if (stateFromStores === AgeCheckStatus.NONE) {
        let tmp38;
        if (cResult[2] !== shouldShowInitialGoogleWalletBanner) {
          let tmp39 = null;
          if (shouldShowInitialGoogleWalletBanner) {
            tmp39 = closure_12(closure_19, {});
          }
          cResult[2] = shouldShowInitialGoogleWalletBanner;
          cResult[3] = tmp39;
          tmp38 = tmp39;
        } else {
          tmp38 = cResult[3];
        }
        tmp10 = tmp38;
      } else if (stateFromStores === AgeCheckStatus.SUCCESS) {
        let tmp35;
        const _Symbol8 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { messageType: native.HelpMessageTypes.SUCCESS, children: intl6.format(intl7.t.hyh4ls, obj3) };
          const HelpMessage5 = native.HelpMessage;
          intl6 = intl7.intl;
          obj3 = {
            loginHook(children) {
              let obj = {
                variant: "text-sm/medium",
                color: "text-link",
                onPress() {
                  const obj = closure_1_1(closure_1_3[6]);
                  return obj.logout("safety_hub_page_appeal_success", constants.LOGIN);
                },
                children,
              };
              return closure_1_12(require("Text/Text").Text, obj);
            },
          };
          const tmp37 = closure_12(HelpMessage5, obj2);
          cResult[4] = tmp37;
          tmp35 = tmp37;
        } else {
          tmp35 = cResult[4];
        }
        tmp10 = tmp35;
      } else if (stateFromStores === AgeCheckStatus.VERIFIED) {
        let tmp31;
        const _Symbol7 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = {
            messageType: native.HelpMessageTypes.SUCCESS,
            button: closure_12(Button, obj5),
            children: intl5.string(intl7.t["2Qe65J"]),
          };
          const HelpMessage4 = native.HelpMessage;
          obj5 = { variant: "secondary", size: "sm", text: intl4.string(intl7.t["2jvQ6K"]), onPress: handleLogInClick };
          Button = components_Button_Button.Button;
          intl4 = intl7.intl;
          intl5 = intl7.intl;
          const tmp34 = closure_12(HelpMessage4, obj4);
          cResult[5] = tmp34;
          tmp31 = tmp34;
        } else {
          tmp31 = cResult[5];
        }
        tmp10 = tmp31;
      } else if (stateFromStores === AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
        let tmp28;
        const _Symbol6 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = { messageType: native.HelpMessageTypes.SUCCESS, children: intl3.string(intl7.t.Ie7p1Q) };
          const HelpMessage3 = native.HelpMessage;
          intl3 = intl7.intl;
          const tmp30 = closure_12(HelpMessage3, obj6);
          cResult[6] = tmp30;
          tmp28 = tmp30;
        } else {
          tmp28 = cResult[6];
        }
        tmp10 = tmp28;
      } else if (stateFromStores === AgeCheckStatus.ERROR) {
        let tmp25;
        const _Symbol5 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { messageType: native.HelpMessageTypes.ERROR, children: intl2.string(intl7.t["4sILBU"]) };
          const HelpMessage2 = native.HelpMessage;
          intl2 = intl7.intl;
          const tmp27 = closure_12(HelpMessage2, obj7);
          cResult[7] = tmp27;
          tmp25 = tmp27;
        } else {
          tmp25 = cResult[7];
        }
        tmp10 = tmp25;
      } else if (stateFromStores === AgeCheckStatus.FAILURE) {
        let tmp22;
        const _Symbol4 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj8 = { messageType: native.HelpMessageTypes.ERROR, children: intl.string(intl7.t["40R63o"]) };
          const HelpMessage = native.HelpMessage;
          intl = intl7.intl;
          const tmp24 = closure_12(HelpMessage, obj8);
          cResult[8] = tmp24;
          tmp22 = tmp24;
        } else {
          tmp22 = cResult[8];
        }
        tmp10 = tmp22;
      } else if (stateFromStores === AgeCheckStatus.UNDERAGE) {
        let tmp18;
        const _Symbol3 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp21 = closure_12(closure_17, {});
          cResult[9] = tmp21;
          tmp18 = tmp21;
        } else {
          tmp18 = cResult[9];
        }
        tmp10 = tmp18;
      } else if (stateFromStores === AgeCheckStatus.UNDERAGE_MANUAL_REVIEW) {
        let tmp14;
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp17 = closure_12(closure_20, {});
          cResult[10] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[10];
        }
        tmp10 = tmp14;
      } else {
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = closure_12(closure_18, {});
          cResult[11] = tmp13;
          tmp10 = tmp13;
        } else {
          tmp10 = cResult[11];
        }
      }
      return tmp10;
    }
  : () => {
      let Button;
      let ageCheckStatus;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let obj3;
      let obj5;
      let tmp9;
      let obj = get_initialized;
      const items = [SafetyHubStore];
      const stateFromStores = obj.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus());
      useShouldShowInitialGoogleWalletBanner;
      if (stateFromStores === AgeCheckStatus.NONE) {
        let tmp20 = null;
        if (tmp5) {
          tmp20 = closure_12(closure_19, {});
        }
        tmp9 = tmp20;
      } else if (stateFromStores === AgeCheckStatus.SUCCESS) {
        const obj2 = { messageType: native.HelpMessageTypes.SUCCESS, children: intl6.format(intl7.t.hyh4ls, obj3) };
        const HelpMessage5 = native.HelpMessage;
        intl6 = intl7.intl;
        obj3 = {
          loginHook(children) {
            let obj = {
              variant: "text-sm/medium",
              color: "text-link",
              onPress() {
                const obj = closure_1_1(closure_1_3[6]);
                return obj.logout("safety_hub_page_appeal_success", constants.LOGIN);
              },
              children,
            };
            return closure_1_12(require("Text/Text").Text, obj);
          },
        };
        tmp9 = closure_12(HelpMessage5, obj2);
      } else if (stateFromStores === AgeCheckStatus.VERIFIED) {
        const obj4 = {
          messageType: native.HelpMessageTypes.SUCCESS,
          button: closure_12(Button, obj5),
          children: intl5.string(intl7.t["2Qe65J"]),
        };
        const HelpMessage4 = native.HelpMessage;
        obj5 = { variant: "secondary", size: "sm", text: intl4.string(intl7.t["2jvQ6K"]), onPress: handleLogInClick };
        Button = components_Button_Button.Button;
        intl4 = intl7.intl;
        intl5 = intl7.intl;
        tmp9 = closure_12(HelpMessage4, obj4);
      } else if (stateFromStores === AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
        const obj6 = { messageType: native.HelpMessageTypes.SUCCESS, children: intl3.string(intl7.t.Ie7p1Q) };
        const HelpMessage3 = native.HelpMessage;
        intl3 = intl7.intl;
        tmp9 = closure_12(HelpMessage3, obj6);
      } else if (stateFromStores === AgeCheckStatus.ERROR) {
        const obj7 = { messageType: native.HelpMessageTypes.ERROR, children: intl2.string(intl7.t["4sILBU"]) };
        const HelpMessage2 = native.HelpMessage;
        intl2 = intl7.intl;
        tmp9 = closure_12(HelpMessage2, obj7);
      } else if (stateFromStores === AgeCheckStatus.FAILURE) {
        const obj8 = { messageType: native.HelpMessageTypes.ERROR, children: intl.string(intl7.t["40R63o"]) };
        const HelpMessage = native.HelpMessage;
        intl = intl7.intl;
        tmp9 = closure_12(HelpMessage, obj8);
      } else if (stateFromStores === AgeCheckStatus.UNDERAGE) {
        tmp9 = closure_12(closure_17, {});
      } else if (stateFromStores === AgeCheckStatus.UNDERAGE_MANUAL_REVIEW) {
        tmp9 = closure_12(closure_20, {});
      } else {
        tmp9 = closure_12(closure_18, {});
      }
      return tmp9;
    };
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  loadingIndicator: { display: "flex", justifyContent: "center", alignItems: "center" },
  body: obj3,
  link: { textDecorationLine: "underline" },
};
obj2 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
let closure_22 = createStyles(obj);
let result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  let closure_1;
  let items1;
  let items2;
  let items3;
  let tmp9;
  visible = visible.visible;
  importDefault = undefined;
  let safetyHubFetchError;
  const tmp = closure_22();
  const tmp4 = require("useSafetyHubLoading")();
  let obj = visible(safetyHubFetchError[23]);
  const tmp2 = importDefault;
  importDefault = obj.useSafetyHubInitialized();
  let obj2 = visible(safetyHubFetchError[24]);
  const state = obj2.useSafetyHubAccountStanding();
  let obj3 = visible(safetyHubFetchError[25]);
  safetyHubFetchError = obj3.useSafetyHubFetchError();
  require("useMountEffect")(() => {
    const obj = SafetyHubActionCreatorsAll;
    const safetyHubData = obj.getSafetyHubData();
    if (closure_1) {
      const obj3 = { account_standing: state.state };
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(constants.SAFETY_HUB_VIEWED, obj3);
      const obj4 = { name: MetricEvents.MetricEvents.SAFETY_HUB_VIEW };
      const increment = MonitoringAgentDefault.increment;
      MonitoringAgentDefault;
      increment(obj4);
    }
  });
  const items = [safetyHubFetchError, visible];
  const effect = react.useEffect(() => {
    if (visible) {
      if (null != safetyHubFetchError) {
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.openLazy(asyncRequire(14571, dependencyMap.paths), "SafetyHubErrorActionSheet", {});
      }
    }
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("SafetyHubErrorActionSheet");
  }, items);
  const tmp5 = visible;
  if (tmp4) {
    let obj4 = { style: items1, children: closure_12(closure_6, { animating: true, size: "large" }) };
    items1 = [,];
    ({ container: arr4[0], loadingIndicator: arr4[1] } = tmp);
    tmp9 = closure_12(closure_5, obj4);
  } else {
    tmp9 = null;
    if (null == safetyHubFetchError) {
      const obj5 = { style: tmp.container, children: items3 };
      const obj6 = { style: tmp.body, children: items2 };
      items2 = [closure_12(closure_21, {}), closure_12(tmp2(tmp3[34]), {})];
      items3 = [closure_13(closure_5, obj6), closure_12(tmp5(tmp3[35]).ConnectedSafetyHubViolationsContainer, {})];
      tmp9 = closure_13(closure_7, obj5);
    }
  }
  return tmp9;
}
