// === Module 17266: SafetyHubPage ===

// Module 17266 (SafetyHubPage)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import _modDef3417 from "module_3417" /* 3417 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import Text_Text from "Text/Text" /* 5929 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6771 */;
import MetricEvents from "MetricEvents" /* 6776 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6844 */;
import InlineNotice from "InlineNotice" /* 8159 */;
import ManualReviewActionCreators from "ManualReviewActionCreators" /* 8403 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 14183 */;
import AutomatedUnderageAppealModalActionCreatorsDefault from "AutomatedUnderageAppealModalActionCreators" /* 14185 */;
import useAvailableAgeVerificationMethods from "useAvailableAgeVerificationMethods" /* 17267 */;
import useShouldShowInitialGoogleWalletBanner from "useShouldShowInitialGoogleWalletBanner" /* 17268 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8231 */;

const require = globalThis.__r;

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
  const obj = { type: "critical", message: null, role: "alert", action: null };
  const intl = util.intl;
  obj.message = intl.string(util.t.dqbMbn);
  const obj2 = { text: null, onPress: null };
  const intl2 = util.intl;
  obj2.text = intl2.string(util.t.IcA9iD);
  obj2.onPress = handleRetryClick;
  obj.action = obj2;
  return application_id(InlineNotice.InlineNotice, obj);
}
function AgeCheckLoadingBanner() {
  items = [SafetyHubStore];
  const stateFromStores = initialize.useStateFromStores(items, () => isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled());
  const intl = util.intl;
  const t = util.t;
  return application_id(InlineNotice.InlineNotice, { type: "info", message: intl.string(stateFromStores ? t.PU8nMu : t["nhhy/R"]), role: "status" });
}
function ManualOrAutomatedReviewBanner() {
  _require = closure_22();
  const obj = { type: "critical", message: null, role: "alert", action: null };
  const intl = require("util").intl;
  obj.message = intl.format(_modDef3417.vPoM8y, {
    manualReviewHook(children, arg1) {
      return application_id(Text_Text.Text, { onPress: handleManualReviewClick, style: link.link, variant: "body-sm/normal", color: "text-default", children }, arg1);
    }
  });
  const obj3 = { text: null, onPress: null };
  const intl2 = require("util").intl;
  obj3.text = intl2.string(require("util").t.IcA9iD);
  obj3.onPress = handleRetryClick;
  obj.action = obj3;
  return closure_12(require("InlineNotice").InlineNotice, obj);
}
function ManualReviewBanner() {
  const availableAgeVerificationMethods = useAvailableAgeVerificationMethods.useAvailableAgeVerificationMethods();
  const methods = availableAgeVerificationMethods.methods;
  if (availableAgeVerificationMethods.loading) {
    let tmp5Result = application_id(AgeCheckLoadingBanner, {});
  } else {
    if (null != methods) {
      if (0 !== methods.length) {
        if (methods.every((method) => method.method === require("user").AgeAssuranceMethod.GOOGLE_WALLET)) {
          tmp5Result = application_id(ManualOrAutomatedReviewBanner, {});
        } else {
          tmp5Result = application_id(RetryBanner, {});
        }
      }
    }
    const obj2 = { type: "critical", message: null, role: "alert", action: null };
    const intl = util.intl;
    obj2.message = intl.string(util.t.VTgFYh);
    const obj3 = { text: null, onPress: null };
    const intl2 = util.intl;
    obj3.text = intl2.string(util.t.NkTGsC);
    obj3.onPress = handleManualReviewClick;
    obj2.action = obj3;
    tmp5Result = application_id(InlineNotice.InlineNotice, obj2);
  }
  return tmp5Result;
}
function AutomatedUnderageAppealStatus() {
  items = [SafetyHubStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus());
  useShouldShowInitialGoogleWalletBanner;
  if (stateFromStores === AgeCheckStatus.NONE) {
    let tmp20 = null;
    if (tmp5) {
      tmp20 = application_id(ManualOrAutomatedReviewBanner, {});
    }
    let tmp9 = tmp20;
  } else if (stateFromStores === AgeCheckStatus.SUCCESS) {
    const obj2 = { type: "success", message: null, role: "status" };
    const intl6 = util.intl;
    const obj3 = {
      loginHook(children) {
          return closure_1_12(require("Text/Text").Text, {
            variant: "body-sm/medium",
            color: "text-link",
            onPress() {
              return closure_1_1(closure_1_3[6]).logout("safety_hub_page_appeal_success", constants.LOGIN);
            },
            children
          });
        }
    };
    obj2.message = intl6.format(util.t.hyh4ls, obj3);
    tmp9 = application_id(InlineNotice.InlineNotice, obj2);
  } else if (stateFromStores === AgeCheckStatus.VERIFIED) {
    const obj4 = { type: "success", message: null, role: "status", action: null };
    const intl4 = util.intl;
    obj4.message = intl4.string(util.t["2Qe65J"]);
    const obj5 = { text: null, onPress: null };
    const intl5 = util.intl;
    obj5.text = intl5.string(util.t["2jvQ6K"]);
    obj5.onPress = handleLogInClick;
    obj4.action = obj5;
    tmp9 = application_id(InlineNotice.InlineNotice, obj4);
  } else if (stateFromStores === AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
    const obj6 = { type: "success", message: null, role: "status" };
    const intl3 = util.intl;
    obj6.message = intl3.string(util.t.Ie7p1Q);
    tmp9 = application_id(InlineNotice.InlineNotice, obj6);
  } else if (stateFromStores === AgeCheckStatus.ERROR) {
    const obj7 = { type: "critical", message: null, role: "alert" };
    const intl2 = util.intl;
    obj7.message = intl2.string(util.t["4sILBU"]);
    tmp9 = application_id(InlineNotice.InlineNotice, obj7);
  } else if (stateFromStores === AgeCheckStatus.FAILURE) {
    const obj8 = { type: "critical", message: null, role: "alert" };
    const intl = util.intl;
    obj8.message = intl.string(util.t["40R63o"]);
    tmp9 = application_id(InlineNotice.InlineNotice, obj8);
  } else if (stateFromStores === AgeCheckStatus.UNDERAGE) {
    tmp9 = application_id(RetryBanner, {});
  } else if (stateFromStores === AgeCheckStatus.UNDERAGE_MANUAL_REVIEW) {
    tmp9 = application_id(ManualReviewBanner, {});
  } else {
    tmp9 = application_id(AgeCheckLoadingBanner, {});
  }
  return tmp9;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: closure_6, ScrollView: metroImportDefault } = get_ActivityIndicator);
const AgeCheckStatus = fn(8206).AgeCheckStatus;
const Constants = fn(1072);
({ AnalyticEvents: closure_10, Routes: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 }, loadingIndicator: { display: "flex", justifyContent: "center", alignItems: "center" }, body: null, link: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
obj2.body = { gap: nativeDefault.space.PX_8 };
obj2.link = { textDecorationLine: "underline" };
let closure_22 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  visible = visible.visible;
  importDefault = undefined;
  let safetyHubFetchError;
  const tmp = closure_22();
  const tmp2 = importDefault;
  const tmp4 = require("useSafetyHubLoading")();
  const tmp5 = visible;
  importDefault = visible(safetyHubFetchError[20]).useSafetyHubInitialized();
  let obj = visible(safetyHubFetchError[20]);
  state = visible(safetyHubFetchError[21]).useSafetyHubAccountStanding();
  let obj2 = visible(safetyHubFetchError[21]);
  safetyHubFetchError = visible(safetyHubFetchError[22]).useSafetyHubFetchError();
  require("useMountEffect")(() => {
    const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
    if (closure_1) {
      const obj3 = { account_standing: state.state };
      AnalyticsUtilsDefault.track(constants.SAFETY_HUB_VIEWED, obj3);
      const obj5 = { name: MetricEvents.MetricEvents.SAFETY_HUB_VIEW };
      MonitoringAgentDefault.increment(obj5);
    }
  });
  items = [safetyHubFetchError, visible];
  const effect = noop.useEffect(() => {
    if (visible) {
      if (null != safetyHubFetchError) {
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17270, dependencyMap.paths), "SafetyHubErrorActionSheet", {});
      }
    }
    ActionSheetActionCreatorsDefault.hideActionSheet("SafetyHubErrorActionSheet");
  }, items);
  if (tmp4) {
    let obj4 = { style: null, children: null };
    const items1 = [, ];
    ({ container: arr4[0], loadingIndicator: arr4[1] } = tmp);
    obj4.style = items1;
    obj4.children = closure_12(closure_6, { animating: true, size: "large" });
    let tmp9 = closure_12(closure_5, obj4);
  } else {
    tmp9 = null;
    if (null == safetyHubFetchError) {
      let obj5 = { style: tmp.container, children: null };
      const obj6 = { style: tmp.body, children: null };
      const items2 = [closure_12(AutomatedUnderageAppealStatus, {}), closure_12(tmp2(tmp3[31]), {})];
      obj6.children = items2;
      const items3 = [closure_13(closure_5, obj6), closure_12(tmp5(tmp3[32]).ConnectedSafetyHubViolationsContainer, {})];
      obj5.children = items3;
      tmp9 = closure_13(closure_7, obj5);
    }
  }
  return tmp9;
};