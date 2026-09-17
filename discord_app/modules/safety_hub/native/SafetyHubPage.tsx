// discord_app/modules/safety_hub/native/SafetyHubPage.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import user from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import _modDef2981 from "../../age_assurance/ManualReview.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import AuthenticationActionCreatorsDefault from "../../../actions/AuthenticationActionCreators.tsx";
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import ManualReviewActionCreators from "../../age_assurance/ManualReviewActionCreators.tsx";
import SafetyHubActionCreatorsAll from "../SafetyHubActionCreators.tsx";
import AutomatedUnderageAppealModalActionCreatorsDefault from "../AutomatedUnderageAppealModalActionCreators.native.tsx";
import useAvailableAgeVerificationMethods from "../hooks/useAvailableAgeVerificationMethods.tsx";
import useShouldShowInitialGoogleWalletBanner from "../hooks/useShouldShowInitialGoogleWalletBanner.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
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
  const obj = { messageType: native.HelpMessageTypes.ERROR, button: null, children: null };
  const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.IcA9iD);
  obj2.onPress = handleRetryClick;
  obj.button = closure_1_12(components_Button_Button.Button, obj2);
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.dqbMbn);
  return closure_1_12(native.HelpMessage, obj);
}
function AgeCheckLoadingBanner() {
  const items = [SafetyHubStore];
  const stateFromStores = initialize.useStateFromStores(items, () =>
    isExpressiveModalV2Enabled.getIsExpressiveModalV2Enabled(),
  );
  const obj2 = { messageType: native.HelpMessageTypes.INFO, children: null };
  const intl = util.intl;
  const t = util.t;
  obj2.children = intl.string(stateFromStores ? t.PU8nMu : t["nhhy/R"]);
  return closure_1_12(native.HelpMessage, obj2);
}
function ManualReviewBanner() {
  const obj = { messageType: native.HelpMessageTypes.ERROR, button: null, children: null };
  const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.NkTGsC);
  obj2.onPress = handleManualReviewClick;
  obj.button = closure_1_12(components_Button_Button.Button, obj2);
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.VTgFYh);
  return closure_1_12(native.HelpMessage, obj);
}
function ManualOrAutomatedReviewBanner() {
  const obj = { messageType: native.HelpMessageTypes.ERROR, button: null, children: null };
  const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.IcA9iD);
  obj2.onPress = handleRetryClick;
  obj.button = closure_1_12(components_Button_Button.Button, obj2);
  const intl2 = util.intl;
  obj.children = intl2.format(_modDef2981.vPoM8y, {
    manualReviewHook(children, arg1) {
      return closure_1_12(Text_Text.Text, { onPress, variant: "text-sm/normal", color: "text-link", children }, arg1);
    },
  });
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
  const items = [SafetyHubStore];
  const stateFromStores = initialize.useStateFromStores(items, () => SafetyHubStore.getAgeCheckStatus());
  const items1 = [SafetyHubStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () =>
    SafetyHubStore.getIsManualReviewFallbackEnabled(),
  );
  useShouldShowInitialGoogleWalletBanner;
  if (stateFromStores === AgeCheckStatus.NONE) {
    let tmp22 = null;
    if (tmp6) {
      tmp22 = closure_1_12(ManualOrAutomatedReviewBanner, {});
    }
    let tmp10 = tmp22;
  } else if (stateFromStores === AgeCheckStatus.SUCCESS) {
    const obj3 = { messageType: native.HelpMessageTypes.SUCCESS, children: null };
    const intl6 = util.intl;
    const obj4 = {
      loginHook(children) {
        return closure_1_12(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          onPress() {
            return closure_1_1(closure_1_3[6]).logout("safety_hub_page_appeal_success", constants.LOGIN);
          },
          children,
        });
      },
    };
    obj3.children = intl6.format(util.t.hyh4ls, obj4);
    tmp10 = closure_1_12(native.HelpMessage, obj3);
  } else if (stateFromStores === AgeCheckStatus.VERIFIED) {
    const obj5 = { messageType: native.HelpMessageTypes.SUCCESS, button: null, children: null };
    const obj6 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl4 = util.intl;
    obj6.text = intl4.string(util.t["2jvQ6K"]);
    obj6.onPress = handleLogInClick;
    obj5.button = closure_1_12(components_Button_Button.Button, obj6);
    const intl5 = util.intl;
    obj5.children = intl5.string(util.t["2Qe65J"]);
    tmp10 = closure_1_12(native.HelpMessage, obj5);
  } else if (stateFromStores === AgeCheckStatus.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
    const obj7 = { messageType: native.HelpMessageTypes.SUCCESS, children: null };
    const intl3 = util.intl;
    obj7.children = intl3.string(util.t.Ie7p1Q);
    tmp10 = closure_1_12(native.HelpMessage, obj7);
  } else if (stateFromStores === AgeCheckStatus.ERROR) {
    const obj8 = { messageType: native.HelpMessageTypes.ERROR, children: null };
    const intl2 = util.intl;
    obj8.children = intl2.string(util.t["4sILBU"]);
    tmp10 = closure_1_12(native.HelpMessage, obj8);
  } else if (stateFromStores === AgeCheckStatus.FAILURE) {
    const obj9 = { messageType: native.HelpMessageTypes.ERROR, children: null };
    const intl = util.intl;
    obj9.children = intl.string(util.t["40R63o"]);
    tmp10 = closure_1_12(native.HelpMessage, obj9);
  } else {
    if (stateFromStores !== AgeCheckStatus.UNDERAGE) {
      if (stateFromStores !== AgeCheckStatus.UNDERAGE_MANUAL_REVIEW) {
        tmp10 = closure_1_12(AgeCheckLoadingBanner, {});
      }
    }
    if (stateFromStores1) {
      const obj10 = { status: stateFromStores };
      let tmp11Result = closure_1_12(AgeCheckFailureBanner, obj10);
    } else {
      tmp11Result = closure_1_12(RetryBanner, {});
    }
  }
  return tmp10;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const AgeCheckStatus = fn(8569).AgeCheckStatus;
const Constants = fn(1074);
({ AnalyticEvents: c10, Routes: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4640);
let obj2 = {
  container: { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 },
  loadingIndicator: { display: "flex", justifyContent: "center", alignItems: "center" },
  body: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
obj2.body = { gap: nativeDefault.space.PX_8 };
let closure_23 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  visible = visible.visible;
  importDefault = undefined;
  let safetyHubFetchError;
  const tmp = closure_23();
  const tmp2 = importDefault;
  const tmp4 = require("useSafetyHubLoading")();
  const tmp5 = visible;
  importDefault = visible(safetyHubFetchError[21]).useSafetyHubInitialized();
  let obj = visible(safetyHubFetchError[21]);
  const state = visible(safetyHubFetchError[22]).useSafetyHubAccountStanding();
  let obj2 = visible(safetyHubFetchError[22]);
  safetyHubFetchError = visible(safetyHubFetchError[23]).useSafetyHubFetchError();
  require("useMountEffect")(() => {
    const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
    if (closure_1) {
      const obj3 = { account_standing: state.state };
      AnalyticsUtilsDefault.track(constants.SAFETY_HUB_VIEWED, obj3);
      const obj5 = { name: MetricEvents.MetricEvents.SAFETY_HUB_VIEW };
      MonitoringAgentDefault.increment(obj5);
    }
  });
  const items = [safetyHubFetchError, visible];
  const effect = noop.useEffect(() => {
    if (visible) {
      if (null != safetyHubFetchError) {
        ActionSheetActionCreatorsDefault.openLazy(
          asyncRequireImpl(14893, dependencyMap.paths),
          "SafetyHubErrorActionSheet",
          {},
        );
      }
    }
    ActionSheetActionCreatorsDefault.hideActionSheet("SafetyHubErrorActionSheet");
  }, items);
  if (tmp4) {
    let obj4 = { style: null, children: null };
    const items1 = [,];
    ({ container: arr4[0], loadingIndicator: arr4[1] } = tmp);
    obj4.style = items1;
    obj4.children = closure_12(closure_6, { animating: true, size: "large" });
    let tmp9 = closure_12(closure_5, obj4);
  } else {
    tmp9 = null;
    if (null == safetyHubFetchError) {
      let obj5 = { style: tmp.container, children: null };
      const obj6 = { style: tmp.body, children: null };
      const items2 = [closure_12(AutomatedUnderageAppealStatus, {}), closure_12(tmp2(tmp3[32]), {})];
      obj6.children = items2;
      const items3 = [
        closure_13(closure_5, obj6),
        closure_12(tmp5(tmp3[33]).ConnectedSafetyHubViolationsContainer, {}),
      ];
      obj5.children = items3;
      tmp9 = closure_13(closure_7, obj5);
    }
  }
  return tmp9;
}
