// === Module 14768: handleLogInClick ===

// Module 14768 (handleLogInClick)
import initialize from "initialize" /* 504 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Button from "Button" /* 1178 */;
import Button2 from "Button" /* 4975 */;
import handleLogoutDefault from "handleLogout" /* 6593 */;
import _modDef11883 from "module_11883" /* 11883 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 8430 */;
import { AgeCheckStatus } from "SafetyHubView" /* 8419 */;
import ME from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function handleLogInClick() {
  handleLogoutDefault.closeSuspendedUser();
}
function handleRetryClick() {
  _modDef11883.openV2("");
}
function AutomatedUnderageAppealStatus() {
  let hyh4ls = require;
  let formatResult = dependencyMap;
  let obj = initialize;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => uiStore.getAgeCheckStatus());
  initialize;
  [][0] = closure_8;
  if (stateFromStores === AgeCheckStatus.NONE) {
    return null;
  } else if (stateFromStores === tmp5.SUCCESS) {
    obj = { messageType: null, children: null };
    obj[0] = Button.HelpMessageTypes.SUCCESS;
    const intl10 = getSystemLocale.intl;
    hyh4ls = getSystemLocale.t.hyh4ls;
    obj = { loginHook: null };
    obj[0] = function loginHook(children) {
      return callback2(callback(table[11]).Text, {
        variant: "text-sm/medium",
        color: "text-link",
        onPress() {
          return callback(table[6]).logout("safety_hub_page_appeal_success", constants.LOGIN);
        },
        children
      });
    };
    formatResult = intl10.format(hyh4ls, obj);
    obj[1] = formatResult;
    let tmp18Result = callback(Button.HelpMessage, obj);
  } else if (stateFromStores === tmp5.VERIFIED) {
    obj1 = { messageType: null, button: null, children: null };
    obj1[0] = Button.HelpMessageTypes.SUCCESS;
    const obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl8 = getSystemLocale.intl;
    obj2[2] = intl8.string(getSystemLocale.t["2jvQ6K"]);
    obj2[3] = handleLogInClick;
    obj1[1] = callback(Button2.Button, obj2);
    const intl9 = getSystemLocale.intl;
    obj1[2] = intl9.string(getSystemLocale.t["2Qe65J"]);
    tmp18Result = callback(Button.HelpMessage, obj1);
  } else if (stateFromStores === tmp5.VERIFIED_OTHER_VIOLATIONS_REMAIN) {
    const obj3 = { messageType: null, children: null };
    obj3[0] = Button.HelpMessageTypes.SUCCESS;
    const intl7 = getSystemLocale.intl;
    obj3[1] = intl7.string(getSystemLocale.t.Ie7p1Q);
    tmp18Result = callback(Button.HelpMessage, obj3);
  } else if (stateFromStores === tmp5.ERROR) {
    const obj4 = { messageType: null, children: null };
    obj4[0] = Button.HelpMessageTypes.ERROR;
    const intl6 = getSystemLocale.intl;
    obj4[1] = intl6.string(getSystemLocale.t["4sILBU"]);
    tmp18Result = callback(Button.HelpMessage, obj4);
  } else if (stateFromStores === tmp5.FAILURE) {
    const obj5 = { messageType: null, children: null };
    obj5[0] = Button.HelpMessageTypes.ERROR;
    const intl5 = getSystemLocale.intl;
    obj5[1] = intl5.string(getSystemLocale.t["40R63o"]);
    tmp18Result = callback(Button.HelpMessage, obj5);
  } else if (stateFromStores === tmp5.UNDERAGE) {
    const obj6 = { messageType: null, button: null, children: null };
    obj6[0] = Button.HelpMessageTypes.ERROR;
    const obj7 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl3 = getSystemLocale.intl;
    obj7[2] = intl3.string(getSystemLocale.t.IcA9iD);
    obj7[3] = handleRetryClick;
    obj6[1] = callback(Button2.Button, obj7);
    const intl4 = getSystemLocale.intl;
    obj6[2] = intl4.string(getSystemLocale.t.dqbMbn);
    tmp18Result = callback(Button.HelpMessage, obj6);
  } else if (stateFromStores === tmp5.UNDERAGE_MANUAL_REVIEW) {
    const obj8 = { messageType: null, button: null, children: null };
    obj8[0] = Button.HelpMessageTypes.ERROR;
    const obj9 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl = getSystemLocale.intl;
    obj9[2] = intl.string(getSystemLocale.t.NkTGsC);
    obj9[3] = handleRetryClick;
    obj8[1] = callback(Button2.Button, obj9);
    const intl2 = getSystemLocale.intl;
    obj8[2] = intl2.string(getSystemLocale.t.VTgFYh);
    tmp18Result = callback(Button.HelpMessage, obj8);
  } else {
    const obj10 = { messageType: null, children: null };
    obj10[0] = Button.HelpMessageTypes.INFO;
    const intl11 = getSystemLocale.intl;
    const t = getSystemLocale.t;
    obj10[1] = intl11.string(tmp4 ? t.PU8nMu : t["nhhy/R"]);
    tmp18Result = callback(Button.HelpMessage, obj10);
    const tmp18 = callback;
  }
}
({ View: c5, ActivityIndicator: closure_6, ScrollView: error } = get_ActivityIndicator);
({ AnalyticEvents: c10, Routes: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { container: null, loadingIndicator: null, body: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_12, paddingVertical: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", justifyContent: "center", alignItems: "center" };
createCacheKey[2] = { gap: ThemesDefault.space.PX_8 };
let closure_17 = createCacheKey.createStyles(createCacheKey);
let obj1 = { gap: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  visible = visible.visible;
  importDefault = undefined;
  closure_2 = undefined;
  let safetyHubFetchError;
  const tmp = callback3();
  let obj = visible(safetyHubFetchError[16]);
  importDefault = obj.useSafetyHubInitialized();
  obj1 = visible(safetyHubFetchError[17]);
  closure_2 = obj1.useSafetyHubAccountStanding();
  const tmp2 = importDefault;
  const tmp4 = importDefault(safetyHubFetchError[15])();
  const tmp5 = visible;
  safetyHubFetchError = visible(safetyHubFetchError[18]).useSafetyHubFetchError();
  importDefault(safetyHubFetchError[19])(() => {
    let obj = lib(safetyHubFetchError[20]);
    const safetyHubData = obj.getSafetyHubData();
    if (callback) {
      obj = { account_standing: null };
      obj[0] = lib.state;
      callback(tmp[21]).track(closure_1_10.SAFETY_HUB_VIEWED, obj);
      const obj2 = callback(tmp[21]);
      obj = { name: null };
      obj[0] = visible(tmp[23]).MetricEvents.SAFETY_HUB_VIEW;
      callback(tmp[22]).increment(obj);
      const obj4 = callback(tmp[22]);
    }
  });
  const items = [safetyHubFetchError, visible];
  const effect = React.useEffect(() => {
    if (visible) {
      if (null != safetyHubFetchError) {
        callback(safetyHubFetchError[24]).openLazy(visible(safetyHubFetchError[26])(safetyHubFetchError[25], safetyHubFetchError.paths), "SafetyHubErrorActionSheet", {});
        const obj2 = callback(safetyHubFetchError[24]);
      }
    }
    callback(safetyHubFetchError[24]).hideActionSheet("SafetyHubErrorActionSheet");
  }, items);
  if (tmp4) {
    obj = { style: null, children: null };
    const items1 = [, ];
    ({ container: arr4[0], loadingIndicator: arr4[1] } = tmp);
    obj[0] = items1;
    obj[1] = callback(closure_6, { animating: true, size: "large" });
    let tmp9 = callback(closure_5, obj);
  } else {
    tmp9 = null;
    if (null == safetyHubFetchError) {
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj1 = { style: null, children: null };
      obj1[0] = tmp.body;
      const items2 = [callback(AutomatedUnderageAppealStatus, {}), callback(tmp2(tmp3[27]), {})];
      obj1[1] = items2;
      const items3 = [callback2(closure_5, obj1), callback(tmp5(tmp3[28]).ConnectedSafetyHubViolationsContainer, {})];
      obj[1] = items3;
      tmp9 = callback2(closure_7, obj);
    }
  }
  return tmp9;
};