// discord_app/modules/safety_hub/native/SafetyHubPage.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import handleSafetyHubRequestAgeVerificationResetModalAction from "../SafetyHubStore.tsx";
import { AgeCheckStatus } from "../SafetyHubConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function AutomatedUnderageAppealStatus() {
  let obj = initialize;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus());
  if (AgeCheckStatus.SUCCESS === stateFromStores) {
    const intl4 = getSystemLocale.intl;
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
    obj[0] = intl4.format(getSystemLocale.t.hyh4ls, obj);
    obj[1] = Button.HelpMessageTypes.SUCCESS;
    let obj4 = obj;
  } else if (AgeCheckStatus.ERROR === stateFromStores) {
    obj1 = { message: null, type: null };
    const intl3 = getSystemLocale.intl;
    obj1[0] = intl3.string(getSystemLocale.t["4sILBU"]);
    obj1[1] = Button.HelpMessageTypes.ERROR;
    obj4 = obj1;
  } else if (AgeCheckStatus.FAILURE === stateFromStores) {
    const obj2 = { message: null, type: null };
    const intl2 = getSystemLocale.intl;
    obj2[0] = intl2.string(getSystemLocale.t["40R63o"]);
    obj2[1] = Button.HelpMessageTypes.ERROR;
    obj4 = obj2;
  } else if (AgeCheckStatus.LOADING === stateFromStores) {
    const obj3 = { message: null, type: null };
    const intl = getSystemLocale.intl;
    obj3[0] = intl.string(getSystemLocale.t["nhhy/R"]);
    obj3[1] = Button.HelpMessageTypes.INFO;
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
    tmp6 = callback(Button.HelpMessage, obj5);
  }
  return tmp6;
}
({ View: c5, ActivityIndicator: closure_6, ScrollView: error } = get_ActivityIndicator);
({ AnalyticEvents: c10, Routes: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_12, paddingVertical: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", justifyContent: "center", alignItems: "center" };
createCacheKey[2] = { gap: ThemesDefault.space.PX_8 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/safety_hub/native/SafetyHubPage.tsx");

export default function SafetyHubPage(visible) {
  visible = visible.visible;
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
      callback(safetyHubFetchError[19]).track(closure_1_10.SAFETY_HUB_VIEWED, obj);
      const obj2 = callback(safetyHubFetchError[19]);
      obj = { name: null };
      obj[0] = visible(safetyHubFetchError[21]).MetricEvents.SAFETY_HUB_VIEW;
      callback(safetyHubFetchError[20]).increment(obj);
      const obj4 = callback(safetyHubFetchError[20]);
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
    const obj = callback(safetyHubFetchError[22]);
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