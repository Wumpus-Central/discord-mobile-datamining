// === Module 14277: AutomatedUnderageAppealStatus ===

// Module 14277 (AutomatedUnderageAppealStatus)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11514 */;
import { AgeCheckStatus } from "SafetyHubView" /* 8017 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
function AutomatedUnderageAppealStatus() {
  let obj = initialize;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus());
  if (AgeCheckStatus.SUCCESS === stateFromStores) {
    obj = { message: null, type: null };
    const intl4 = tmp(1236).intl;
    obj = { loginHook: null };
    obj[0] = function loginHook(children) {
      return callback2(callback(table[7]).Text, {
        variant: "text-sm/medium",
        color: "text-link",
        onPress() {
          return callback(table[8]).logout("safety_hub_page_appeal_success", constants.LOGIN);
        },
        children
      });
    };
    obj[0] = intl4.format(tmp(1236).t.hyh4ls, obj);
    obj[1] = tmp(1297).HelpMessageTypes.SUCCESS;
    let obj4 = obj;
  } else if (tmp4.ERROR === stateFromStores) {
    obj1 = { message: null, type: null };
    const intl3 = tmp(1236).intl;
    obj1[0] = intl3.string(tmp(1236).t["4sILBU"]);
    obj1[1] = tmp(1297).HelpMessageTypes.ERROR;
    obj4 = obj1;
  } else if (tmp4.FAILURE === stateFromStores) {
    const obj2 = { message: null, type: null };
    const intl2 = tmp(1236).intl;
    obj2[0] = intl2.string(tmp(1236).t["40R63o"]);
    obj2[1] = tmp(1297).HelpMessageTypes.ERROR;
    obj4 = obj2;
  } else if (tmp4.LOADING === stateFromStores) {
    const obj3 = { message: null, type: null };
    const intl = tmp(1236).intl;
    obj3[0] = intl.string(tmp(1236).t["nhhy/R"]);
    obj3[1] = tmp(1297).HelpMessageTypes.INFO;
    obj4 = obj3;
  } else {
    obj4 = { message: null, type: null };
  }
  const type = obj4.type;
  let tmp6 = null;
  if (null != type) {
    const obj5 = { messageType: null, children: null };
    obj5[0] = type;
    obj5[1] = tmp5;
    tmp6 = callback(tmp(1297).HelpMessage, obj5);
  }
  return tmp6;
}
({ View: c5, ActivityIndicator: closure_6, ScrollView: error } = get_ActivityIndicator);
({ AnalyticEvents: c10, Routes: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { container: null, loadingIndicator: null, body: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_12, paddingVertical: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", justifyContent: "center", alignItems: "center" };
createCacheKey[2] = { gap: ThemesDefault.space.PX_8 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let obj1 = { gap: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  visible = visible.visible;
  importDefault = undefined;
  closure_2 = undefined;
  let safetyHubFetchError;
  const tmp = callback3();
  let obj = visible(safetyHubFetchError[14]);
  importDefault = obj.useSafetyHubInitialized();
  obj1 = visible(safetyHubFetchError[15]);
  closure_2 = obj1.useSafetyHubAccountStanding();
  const tmp2 = importDefault;
  const tmp4 = importDefault(safetyHubFetchError[13])();
  const tmp5 = visible;
  safetyHubFetchError = visible(safetyHubFetchError[16]).useSafetyHubFetchError();
  importDefault(safetyHubFetchError[17])(() => {
    let obj = lib(safetyHubFetchError[18]);
    const safetyHubData = obj.getSafetyHubData();
    if (callback) {
      obj = { account_standing: null };
      obj[0] = lib.state;
      callback(tmp[19]).track(closure_1_10.SAFETY_HUB_VIEWED, obj);
      const obj2 = callback(tmp[19]);
      obj = { name: null };
      obj[0] = visible(tmp[21]).MetricEvents.SAFETY_HUB_VIEW;
      callback(tmp[20]).increment(obj);
      const obj4 = callback(tmp[20]);
    }
  });
  const items = [safetyHubFetchError, visible];
  const effect = React.useEffect(() => {
    if (visible) {
      if (null != safetyHubFetchError) {
        callback(safetyHubFetchError[22]).openLazy(visible(safetyHubFetchError[24])(safetyHubFetchError[23], safetyHubFetchError.paths), "SafetyHubErrorActionSheet", {});
        const obj2 = callback(safetyHubFetchError[22]);
      }
    }
    callback(safetyHubFetchError[22]).hideActionSheet("SafetyHubErrorActionSheet");
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
      const items2 = [callback(AutomatedUnderageAppealStatus, {}), callback(tmp2(tmp3[25]), {})];
      obj1[1] = items2;
      const items3 = [callback2(closure_5, obj1), callback(tmp5(tmp3[26]).ConnectedSafetyHubViolationsContainer, {})];
      obj[1] = items3;
      tmp9 = callback2(closure_7, obj);
    }
  }
  return tmp9;
};