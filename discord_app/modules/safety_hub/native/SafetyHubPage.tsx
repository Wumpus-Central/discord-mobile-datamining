// === Module 14820: SafetyHubPage ===

// Module 14820 (SafetyHubPage)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import user from "user" /* 1379 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef2978 from "module_2978" /* 2978 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import Text_Text from "Text/Text" /* 4602 */;
import components_Button_Button from "components/Button/Button" /* 5026 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6664 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7674 */;
import MetricEvents from "MetricEvents" /* 7679 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 8678 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11975 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 11977 */;
import useAvailableAgeVerificationMethods from "useAvailableAgeVerificationMethods" /* 14821 */;
import useShouldShowInitialGoogleWalletBanner from "useShouldShowInitialGoogleWalletBanner" /* 14822 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8516 */;

require = fn;
function handleLogInClick() {
  AuthenticationActionCreatorsDefault.closeSuspendedUser();
}
function handleRetryClick() {
  AutomatedUnderageAppealModalActionCreatorsDefault.openV2("");
}
function handleManualReviewClick() {
  const result = ManualReviewActionCreators.handleManualReviewCta();
}
function RetryBanner() {
  let obj = { messageType: native.HelpMessageTypes.ERROR, button: null, children: null };
  obj = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.IcA9iD);
  obj.onPress = handleRetryClick;
  obj.button = closure_1_12(components_Button_Button.Button, obj);
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.dqbMbn);
  return closure_1_12(native.HelpMessage, obj);
}
function AgeCheckLoadingBanner() {
  let obj = initialize;
  const items = [SafetyHubStore];
  const stateFromStores = obj.useStateFromStores(items, () => isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled());
  obj = { messageType: native.HelpMessageTypes.INFO, children: null };
  const intl = util.intl;
  const t = util.t;
  obj.children = intl.string(stateFromStores ? t.PU8nMu : t["nhhy/R"]);
  return closure_1_12(native.HelpMessage, obj);
}
function ManualReviewBanner() {
  let obj = { messageType: native.HelpMessageTypes.ERROR, button: null, children: null };
  obj = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.NkTGsC);
  obj.onPress = handleManualReviewClick;
  obj.button = closure_1_12(components_Button_Button.Button, obj);
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.VTgFYh);
  return closure_1_12(native.HelpMessage, obj);
}
function ManualOrAutomatedReviewBanner() {
  let obj = { messageType: native.HelpMessageTypes.ERROR, button: null, children: null };
  obj = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.IcA9iD);
  obj.onPress = handleRetryClick;
  obj.button = closure_1_12(components_Button_Button.Button, obj);
  const intl2 = util.intl;
  obj = {
    manualReviewHook(children, arg1) {
      return closure_1_12(Text_Text.Text, { onPress, variant: "text-sm/normal", color: "text-link", children }, arg1);
    }
  };
  obj.children = intl2.format(_modDef2978.vPoM8y, obj);
  return closure_1_12(native.HelpMessage, obj);
}
function AgeCheckFailureBanner(status) {
  const availableAgeVerificationMethods = useAvailableAgeVerificationMethods.useAvailableAgeVerificationMethods();
  const methods = availableAgeVerificationMethods.methods;
  if (availableAgeVerificationMethods.loading) {
    let tmp6Result = closure_1_12(AgeCheckLoadingBanner, {});
  } else {
    if (null == methods) {
      let tmp3 = status.status === AgeCheckStatus.UNDERAGE_MANUAL_REVIEW;
    } else {
      tmp3 = 0 === methods.length;
    }
    if (tmp3) {
      tmp6Result = closure_1_12(ManualReviewBanner, {});
    } else {
      let everyResult;
      if (methods != null) {
        everyResult = methods.every((method) => method.method === user.AgeAssuranceMethod.GOOGLE_WALLET);
      }
      if (everyResult) {
        tmp6Result = closure_1_12(ManualOrAutomatedReviewBanner, {});
      } else {
        tmp6Result = closure_1_12(RetryBanner, {});
      }
    }
  }
  return tmp6Result;
}
function AutomatedUnderageAppealStatus() {
  let obj = initialize;
  const items = [SafetyHubStore];
  const stateFromStores = obj.useStateFromStores(items, () => SafetyHubStore.getAgeCheckStatus());
  let obj1 = initialize;
  const items1 = [SafetyHubStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => SafetyHubStore.getIsManualReviewFallbackEnabled());
  useShouldShowInitialGoogleWalletBanner;
  if (stateFromStores === AgeCheckStatus.NONE) {
    let tmp22 = null;
    if (tmp6) {
      tmp22 = closure_1_12(ManualOrAutomatedReviewBanner, {});
    }
    let tmp10 = tmp22;
  } else if (stateFromStores === AgeCheckStatus.SUCCESS) {
    obj = { messageType: native.HelpMessageTypes.SUCCESS, children: null };
    const intl6 = util.intl;
    obj = {
      loginHook(children) {
          return closure_1_12(Text_Text.Text, {
            variant: "text-sm/medium",
            color: "text-link",
            onPress() {
              return closure_1_1(closure_1_3[6]).logout("safety_hub_page_appeal_success", constants.LOGIN);
            },
            children
          });
        }
    };
    obj.children = intl6.format(util.t.hyh4ls, obj);
    tmp10 = closure_1_12(native.HelpMessage, obj);
  } else if (stateFromStores === AgeCheckStatus.VERIFIED) {
    obj1 = { messageType: native.HelpMessageTypes.SUCCESS, button: null, children: null };
    const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl4 = util.intl;
    obj2.text = intl4.string(util.t["2jvQ6K"]);
    obj2.onPress = handleLogInClick;
    obj1.button = closure_1_12(components_Button_Button.Button, obj2);
    const intl5 = util.intl;
    obj1.children = intl5.string(util.t["2Qe65J"]);
    tmp10 = closure_1_12(native.HelpMessage, obj1);
  } else if (stateFromStores === AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
    const obj3 = { messageType: native.HelpMessageTypes.SUCCESS, children: null };
    const intl3 = util.intl;
    obj3.children = intl3.string(util.t.Ie7p1Q);
    tmp10 = closure_1_12(native.HelpMessage, obj3);
  } else if (stateFromStores === AgeCheckStatus.ERROR) {
    const obj4 = { messageType: native.HelpMessageTypes.ERROR, children: null };
    const intl2 = util.intl;
    obj4.children = intl2.string(util.t["4sILBU"]);
    tmp10 = closure_1_12(native.HelpMessage, obj4);
  } else if (stateFromStores === AgeCheckStatus.FAILURE) {
    const obj5 = { messageType: native.HelpMessageTypes.ERROR, children: null };
    const intl = util.intl;
    obj5.children = intl.string(util.t["40R63o"]);
    tmp10 = closure_1_12(native.HelpMessage, obj5);
  } else {
    if (stateFromStores !== AgeCheckStatus.UNDERAGE) {
      if (stateFromStores !== AgeCheckStatus.UNDERAGE_MANUAL_REVIEW) {
        tmp10 = closure_1_12(AgeCheckLoadingBanner, {});
      }
    }
    if (stateFromStores1) {
      const obj6 = { status: stateFromStores };
      let tmp11Result = closure_1_12(AgeCheckFailureBanner, obj6);
    } else {
      tmp11Result = closure_1_12(RetryBanner, {});
    }
  }
  return tmp10;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const AgeCheckStatus = fn(8505).AgeCheckStatus;
const Constants = fn(1074);
({ AnalyticEvents: c10, Routes: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4606);
let createStyles = { container: null, loadingIndicator: null, body: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
createStyles.container = createStyles;
createStyles.loadingIndicator = { display: "flex", justifyContent: "center", alignItems: "center" };
createStyles.body = { gap: nativeDefault.space.PX_8 };
let closure_23 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  visible = visible.visible;
  let safetyHubFetchError;
  const tmp = closure_23();
  let obj = visible(safetyHubFetchError[21]);
  importDefault = obj.useSafetyHubInitialized();
  let obj1 = visible(safetyHubFetchError[22]);
  const state = obj1.useSafetyHubAccountStanding();
  const tmp2 = importDefault;
  const tmp4 = require("useSafetyHubLoading")();
  const tmp5 = visible;
  safetyHubFetchError = visible(safetyHubFetchError[23]).useSafetyHubFetchError();
  require("useMountEffect")(() => {
    let obj = SafetyHubActionCreatorsAll;
    const safetyHubData = obj.getSafetyHubData();
    if (closure_1) {
      obj = { account_standing: state.state };
      AnalyticsUtilsDefault.track(constants.SAFETY_HUB_VIEWED, obj);
      obj = { name: MetricEvents.MetricEvents.SAFETY_HUB_VIEW };
      MonitoringAgentDefault.increment(obj);
    }
  });
  const items = [safetyHubFetchError, visible];
  const effect = noop.useEffect(() => {
    if (visible) {
      if (null != safetyHubFetchError) {
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14824, dependencyMap.paths), "SafetyHubErrorActionSheet", {});
      }
    }
    ActionSheetActionCreatorsDefault.hideActionSheet("SafetyHubErrorActionSheet");
  }, items);
  if (tmp4) {
    obj = { style: null, children: null };
    const items1 = [, ];
    ({ container: arr4[0], loadingIndicator: arr4[1] } = tmp);
    obj.style = items1;
    obj.children = closure_12(closure_6, { animating: true, size: "large" });
    let tmp9 = closure_12(closure_5, obj);
  } else {
    tmp9 = null;
    if (null == safetyHubFetchError) {
      obj = { style: tmp.container, children: null };
      obj1 = { style: tmp.body, children: null };
      const items2 = [closure_12(AutomatedUnderageAppealStatus, {}), closure_12(tmp2(tmp3[32]), {})];
      obj1.children = items2;
      const items3 = [closure_13(closure_5, obj1), closure_12(tmp5(tmp3[33]).ConnectedSafetyHubViolationsContainer, {})];
      obj.children = items3;
      tmp9 = closure_13(closure_7, obj);
    }
  }
  return tmp9;
};