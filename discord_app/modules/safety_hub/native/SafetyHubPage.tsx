// discord_app/modules/safety_hub/native/SafetyHubPage.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02120_asyncRequireImpl.js";
import _modDef3595 from "../../age_assurance/ManualReview.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import AuthenticationActionCreatorsDefault from "../../../actions/AuthenticationActionCreators.tsx";
import InlineNotice from "../../../design/mana/components/InlineNotice/InlineNotice.native.tsx";
import ManualReviewActionCreators from "../../age_assurance/ManualReviewActionCreators.tsx";
import SafetyHubActionCreatorsAll from "../SafetyHubActionCreators.tsx";
import AutomatedUnderageAppealModalActionCreatorsDefault from "../AutomatedUnderageAppealModalActionCreators.native.tsx";
import useAvailableAgeVerificationMethods from "../hooks/useAvailableAgeVerificationMethods.tsx";
import useShouldShowInitialGoogleWalletBanner from "../hooks/useShouldShowInitialGoogleWalletBanner.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import SafetyHubStore from "../SafetyHubStore.tsx";

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
  return state(InlineNotice.InlineNotice, obj);
}
function AgeCheckLoadingBanner() {
  items = [SafetyHubStore];
  const stateFromStores = initialize.useStateFromStores(items, () =>
    isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled(),
  );
  const intl = util.intl;
  const t = util.t;
  return state(InlineNotice.InlineNotice, {
    type: "info",
    message: intl.string(stateFromStores ? t.PU8nMu : t["nhhy/R"]),
    role: "status",
  });
}
function SessionExpiredBanner() {
  const obj = { type: "critical", message: null, role: "alert", action: null };
  const intl = util.intl;
  obj.message = intl.string(util.t.rL1kLX);
  const obj2 = { text: null, onPress: null };
  const intl2 = util.intl;
  obj2.text = intl2.string(util.t["SrY+jH"]);
  obj2.onPress = handleLogInClick;
  obj.action = obj2;
  return state(InlineNotice.InlineNotice, obj);
}
function ManualOrAutomatedReviewBanner() {
  _require = closure_24();
  const obj = { type: "critical", message: null, role: "alert", action: null };
  const intl = require("util").intl;
  obj.message = intl.format(_modDef3595.vPoM8y, {
    manualReviewHook(children, arg1) {
      return state(
        Text_Text.Text,
        {
          onPress: handleManualReviewClick,
          style: link.link,
          variant: "body-sm/normal",
          color: "text-default",
          children,
        },
        arg1,
      );
    },
  });
  const obj3 = { text: null, onPress: null };
  const intl2 = require("util").intl;
  obj3.text = intl2.string(require("util").t.IcA9iD);
  obj3.onPress = handleRetryClick;
  obj.action = obj3;
  return closure_13(require("InlineNotice").InlineNotice, obj);
}
function ManualReviewBanner() {
  const availableAgeVerificationMethods = useAvailableAgeVerificationMethods.useAvailableAgeVerificationMethods();
  const methods = availableAgeVerificationMethods.methods;
  if (availableAgeVerificationMethods.loading) {
    let tmp5Result = state(AgeCheckLoadingBanner, {});
  } else {
    if (null != methods) {
      if (0 !== methods.length) {
        if (methods.every((method) => method.method === require("user").AgeAssuranceMethod.GOOGLE_WALLET)) {
          tmp5Result = state(ManualOrAutomatedReviewBanner, {});
        } else {
          tmp5Result = state(RetryBanner, {});
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
    tmp5Result = state(InlineNotice.InlineNotice, obj2);
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
      tmp20 = state(ManualOrAutomatedReviewBanner, {});
    }
    let tmp9 = tmp20;
  } else if (stateFromStores === AgeCheckStatus.SUCCESS) {
    const obj2 = { type: "success", message: null, role: "status" };
    const intl6 = util.intl;
    const obj3 = {
      loginHook(children) {
        return closure_1_13(require("Text/Text").Text, {
          variant: "body-sm/medium",
          color: "text-link",
          onPress() {
            return closure_1_1(closure_1_3[7]).logout("safety_hub_page_appeal_success", constants.LOGIN);
          },
          children,
        });
      },
    };
    obj2.message = intl6.format(util.t.hyh4ls, obj3);
    tmp9 = state(InlineNotice.InlineNotice, obj2);
  } else if (stateFromStores === AgeCheckStatus.VERIFIED) {
    const obj4 = { type: "success", message: null, role: "status", action: null };
    const intl4 = util.intl;
    obj4.message = intl4.string(util.t["2Qe65J"]);
    const obj5 = { text: null, onPress: null };
    const intl5 = util.intl;
    obj5.text = intl5.string(util.t["2jvQ6K"]);
    obj5.onPress = handleLogInClick;
    obj4.action = obj5;
    tmp9 = state(InlineNotice.InlineNotice, obj4);
  } else if (stateFromStores === AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
    const obj6 = { type: "success", message: null, role: "status" };
    const intl3 = util.intl;
    obj6.message = intl3.string(util.t.Ie7p1Q);
    tmp9 = state(InlineNotice.InlineNotice, obj6);
  } else if (stateFromStores === AgeCheckStatus.ERROR) {
    const obj7 = { type: "critical", message: null, role: "alert" };
    const intl2 = util.intl;
    obj7.message = intl2.string(util.t["4sILBU"]);
    tmp9 = state(InlineNotice.InlineNotice, obj7);
  } else if (stateFromStores === AgeCheckStatus.FAILURE) {
    const obj8 = { type: "critical", message: null, role: "alert" };
    const intl = util.intl;
    obj8.message = intl.string(util.t["40R63o"]);
    tmp9 = state(InlineNotice.InlineNotice, obj8);
  } else if (stateFromStores === AgeCheckStatus.UNDERAGE) {
    tmp9 = state(RetryBanner, {});
  } else if (stateFromStores === AgeCheckStatus.UNDERAGE_MANUAL_REVIEW) {
    tmp9 = state(ManualReviewBanner, {});
  } else {
    tmp9 = state(AgeCheckLoadingBanner, {});
  }
  return tmp9;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: closure_6, ScrollView: metroImportDefault } = get_ActivityIndicator);
const AgeCheckStatus = fn(7886).AgeCheckStatus;
const Constants = fn(1071);
({ AnalyticEvents: closure_11, Routes: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5043);
let obj2 = {
  container: { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 },
  loadingIndicator: { display: "flex", justifyContent: "center", alignItems: "center" },
  body: null,
  link: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
obj2.body = { gap: nativeDefault.space.PX_8 };
obj2.link = { textDecorationLine: "underline" };
let closure_24 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  visible = visible.visible;
  importDefault = undefined;
  let safetyHubFetchError;
  const tmp = closure_24();
  let tmp2 = importDefault;
  let tmp13Result = safetyHubFetchError;
  let ConnectedSafetyHubViolationsContainer = visible;
  const tmp4 = require("useSafetyHubLoading")();
  importDefault = visible(safetyHubFetchError[21]).useSafetyHubInitialized();
  let obj = visible(safetyHubFetchError[21]);
  state = visible(safetyHubFetchError[22]).useSafetyHubAccountStanding();
  let obj2 = visible(safetyHubFetchError[22]);
  safetyHubFetchError = visible(safetyHubFetchError[23]).useSafetyHubFetchError();
  let obj3 = visible(safetyHubFetchError[23]);
  items = [AuthenticationStore];
  const stateFromStores = visible(safetyHubFetchError[12]).useStateFromStores(items, () =>
    suspendedUserTokenExpired.isSuspendedUserTokenExpired(),
  );
  require("useMountEffect")(() => {
    const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
    if (closure_1) {
      const obj3 = { account_standing: state.state };
      AnalyticsUtilsDefault.track(constants.SAFETY_HUB_VIEWED, obj3);
      const obj5 = { name: MetricEvents.MetricEvents.SAFETY_HUB_VIEW };
      MonitoringAgentDefault.increment(obj5);
    }
  });
  const items1 = [safetyHubFetchError, visible];
  const effect = noop.useEffect(() => {
    if (visible) {
      if (null != safetyHubFetchError) {
        ActionSheetActionCreatorsDefault.openLazy(
          asyncRequireImpl(16247, dependencyMap.paths),
          "SafetyHubErrorActionSheet",
          {},
        );
      }
    }
    ActionSheetActionCreatorsDefault.hideActionSheet("SafetyHubErrorActionSheet");
  }, items1);
  if (tmp4) {
    let obj5 = { style: null, children: null };
    const items2 = [,];
    ({ container: arr5[0], loadingIndicator: arr5[1] } = tmp);
    obj5.style = items2;
    obj5.children = closure_13(closure_6, { animating: true, size: "large" });
    let tmp9 = closure_13(closure_5, obj5);
  } else {
    tmp9 = null;
    if (null == safetyHubFetchError) {
      const obj6 = { style: tmp.container, children: null };
      let tmp10Result = closure_5;
      let obj9 = { style: tmp.body, children: null };
      const items3 = [closure_13(stateFromStores ? SessionExpiredBanner : AutomatedUnderageAppealStatus, {})];
      tmp2 = tmp2(tmp13Result[32]);
      items3[1] = closure_13(tmp2, {});
      obj9.children = items3;
      tmp10Result = closure_14(tmp10Result, obj9);
      obj9 = [tmp10Result];
      ConnectedSafetyHubViolationsContainer = ConnectedSafetyHubViolationsContainer(
        tmp13Result[33],
      ).ConnectedSafetyHubViolationsContainer;
      tmp13Result = closure_13(ConnectedSafetyHubViolationsContainer, {});
      obj9[1] = tmp13Result;
      obj6.children = obj9;
      closure_14(closure_7, obj6);
    }
  }
  return tmp9;
}
