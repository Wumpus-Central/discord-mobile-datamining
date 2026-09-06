// discord_app/modules/safety_hub/native/SafetyHubPage.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AuthenticationActionCreatorsDefault from "../../../actions/AuthenticationActionCreators.tsx";
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import SafetyHubActionCreatorsAll from "../SafetyHubActionCreators.tsx";
import AutomatedUnderageAppealModalActionCreatorsDefault from "../AutomatedUnderageAppealModalActionCreators.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SafetyHubStore from "../SafetyHubStore.tsx";

const util = hyh4ls(1114);
const native = hyh4ls(1178);
const components_Button_Button = hyh4ls(4975);
require = fn;
function handleLogInClick() {
  AuthenticationActionCreatorsDefault.closeSuspendedUser();
}
function handleRetryClick() {
  AutomatedUnderageAppealModalActionCreatorsDefault.openV2("");
}
function AutomatedUnderageAppealStatus() {
  let hyh4ls = require;
  let formatResult = dependencyMap;
  let obj = initialize;
  const items = [SafetyHubStore];
  const stateFromStores = obj.useStateFromStores(items, () => uiStore.getAgeCheckStatus());
  initialize;
  [][0] = SafetyHubStore;
  if (stateFromStores === AgeCheckStatus.NONE) {
    return null;
  } else if (stateFromStores === tmp5.SUCCESS) {
    obj = { messageType: native.HelpMessageTypes.SUCCESS, children: null };
    const intl10 = util.intl;
    hyh4ls = util.t.hyh4ls;
    obj = {
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
    formatResult = intl10.format(hyh4ls, obj);
    obj.children = formatResult;
    let tmp18Result = closure_1_12(native.HelpMessage, obj);
  } else if (stateFromStores === tmp5.VERIFIED) {
    const obj1 = { messageType: native.HelpMessageTypes.SUCCESS, button: null, children: null };
    const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl8 = util.intl;
    obj2.text = intl8.string(util.t["2jvQ6K"]);
    obj2.onPress = handleLogInClick;
    obj1.button = closure_1_12(components_Button_Button.Button, obj2);
    const intl9 = util.intl;
    obj1.children = intl9.string(util.t["2Qe65J"]);
    tmp18Result = closure_1_12(native.HelpMessage, obj1);
  } else if (stateFromStores === tmp5.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
    const obj3 = { messageType: native.HelpMessageTypes.SUCCESS, children: null };
    const intl7 = util.intl;
    obj3.children = intl7.string(util.t.Ie7p1Q);
    tmp18Result = closure_1_12(native.HelpMessage, obj3);
  } else if (stateFromStores === tmp5.ERROR) {
    const obj4 = { messageType: native.HelpMessageTypes.ERROR, children: null };
    const intl6 = util.intl;
    obj4.children = intl6.string(util.t["4sILBU"]);
    tmp18Result = closure_1_12(native.HelpMessage, obj4);
  } else if (stateFromStores === tmp5.FAILURE) {
    const obj5 = { messageType: native.HelpMessageTypes.ERROR, children: null };
    const intl5 = util.intl;
    obj5.children = intl5.string(util.t["40R63o"]);
    tmp18Result = closure_1_12(native.HelpMessage, obj5);
  } else if (stateFromStores === tmp5.UNDERAGE) {
    const obj6 = { messageType: native.HelpMessageTypes.ERROR, button: null, children: null };
    const obj7 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl3 = util.intl;
    obj7.text = intl3.string(util.t.IcA9iD);
    obj7.onPress = handleRetryClick;
    obj6.button = closure_1_12(components_Button_Button.Button, obj7);
    const intl4 = util.intl;
    obj6.children = intl4.string(util.t.dqbMbn);
    tmp18Result = closure_1_12(native.HelpMessage, obj6);
  } else if (stateFromStores === tmp5.UNDERAGE_MANUAL_REVIEW) {
    const obj8 = { messageType: native.HelpMessageTypes.ERROR, button: null, children: null };
    const obj9 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl = util.intl;
    obj9.text = intl.string(util.t.NkTGsC);
    obj9.onPress = handleRetryClick;
    obj8.button = closure_1_12(components_Button_Button.Button, obj9);
    const intl2 = util.intl;
    obj8.children = intl2.string(util.t.VTgFYh);
    tmp18Result = closure_1_12(native.HelpMessage, obj8);
  } else {
    const obj10 = { messageType: native.HelpMessageTypes.INFO, children: null };
    const intl11 = util.intl;
    const t = util.t;
    obj10.children = intl11.string(tmp4 ? t.PU8nMu : t["nhhy/R"]);
    tmp18Result = closure_1_12(native.HelpMessage, obj10);
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const AgeCheckStatus = fn(8419).AgeCheckStatus;
const Constants = fn(1074);
({ AnalyticEvents: c10, Routes: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = { container: null, loadingIndicator: null, body: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12 };
createStyles.container = createStyles;
createStyles.loadingIndicator = { display: "flex", justifyContent: "center", alignItems: "center" };
createStyles.body = { gap: nativeDefault.space.PX_8 };
let closure_17 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  visible = visible.visible;
  let safetyHubFetchError;
  const tmp = closure_17();
  let obj = visible(safetyHubFetchError[16]);
  importDefault = obj.useSafetyHubInitialized();
  let obj1 = visible(safetyHubFetchError[17]);
  const state = obj1.useSafetyHubAccountStanding();
  const tmp2 = importDefault;
  const tmp4 = require("useSafetyHubLoading")();
  const tmp5 = visible;
  safetyHubFetchError = visible(safetyHubFetchError[18]).useSafetyHubFetchError();
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
        ActionSheetActionCreatorsDefault.openLazy(
          asyncRequireImpl(14770, dependencyMap.paths),
          "SafetyHubErrorActionSheet",
          {},
        );
      }
    }
    ActionSheetActionCreatorsDefault.hideActionSheet("SafetyHubErrorActionSheet");
  }, items);
  if (tmp4) {
    obj = { style: null, children: null };
    const items1 = [,];
    ({ container: arr4[0], loadingIndicator: arr4[1] } = tmp);
    obj.style = items1;
    obj.children = closure_12(closure_6, { animating: true, size: "large" });
    let tmp9 = closure_12(closure_5, obj);
  } else {
    tmp9 = null;
    if (null == safetyHubFetchError) {
      obj = { style: tmp.container, children: null };
      obj1 = { style: tmp.body, children: null };
      const items2 = [closure_12(AutomatedUnderageAppealStatus, {}), closure_12(tmp2(tmp3[27]), {})];
      obj1.children = items2;
      const items3 = [
        closure_13(closure_5, obj1),
        closure_12(tmp5(tmp3[28]).ConnectedSafetyHubViolationsContainer, {}),
      ];
      obj.children = items3;
      tmp9 = closure_13(closure_7, obj);
    }
  }
  return tmp9;
}
