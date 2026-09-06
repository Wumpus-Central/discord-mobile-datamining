// === Module 14858: useIsHarvestRequestDisabled ===

// Module 14858 (useIsHarvestRequestDisabled)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import hooksDefault from "hooks" /* 4153 */;
import isIterable from "isIterable" /* 4184 */;
import saveProfileAndAccountRequest from "saveProfileAndAccountRequest" /* 6984 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import harvestDisabled from "harvestDisabled" /* 14859 */;
import closure_4 from "mergeGuildAvatar" /* 1371 */;
import ME from "ME" /* 1074 */;
import identity from "identity" /* 1244 */;
import createToggle from "createToggle" /* 11468 */;

function useIsHarvestRequestDisabled() {
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = initialize;
  const tmp = require;
  let harvestDisabledResult = callback((isRequesting) => isRequesting.isRequesting, isIterable.shallow);
  let tmp6 = null == stateFromStores;
  if (!tmp6) {
    if (!harvestDisabledResult) {
      harvestDisabledResult = harvestDisabled.harvestDisabled(tmp4, stateFromStores);
      const tmpResult = harvestDisabled;
    }
    tmp6 = harvestDisabledResult;
  }
  return tmp6;
}
const ActivityIndicator = get_ActivityIndicator.ActivityIndicator;
({ REQUEST_DATA_LIMIT_DAYS: c5, UserSettingsSections } = ME);
const jsx = jsxProd.jsx;
let closure_7 = identity.createWithEqualityFn(() => ({ isRequesting: false, harvestRequest: null }));
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.XAHCgJ);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  useTrailing: function useHarvestRequestSettingTrailing() {
    let tmp = null;
    if (callback((isRequesting) => isRequesting.isRequesting, isIterable.shallow)) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  },
  useDescription: function useRequestYourDataSettingDescription() {
    const tmp3 = callback((harvestRequest) => harvestRequest.harvestRequest, isIterable.shallow);
    currentUser = currentUser.getCurrentUser();
    if (null == currentUser) {
      return null;
    } else if (currentUser.isStaff()) {
      const intl2 = tmp(1114).intl;
      return intl2.string(tmp(1114).t.ZPQLH2);
    } else if (null == tmp3) {
      return null;
    } else {
      const addResult = hooksDefault(tmp3.created_at).add(closure_5, "days");
      let formatToPlainStringResult = null;
      if (!addResult.isBefore(hooksDefault())) {
        const intl = tmp(1114).intl;
        const obj = { date: null };
        obj[0] = addResult.format("MMMM Do YYYY");
        formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t.RNDlV9, obj);
      }
      return formatToPlainStringResult;
    }
  },
  useIsDisabled: useIsHarvestRequestDisabled,
  usePreNavigationAction() {
    const items = [closure_4];
    const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
    const obj = initialize;
    const tmp = require;
    let harvestDisabledResult = callback((isRequesting) => isRequesting.isRequesting, isIterable.shallow);
    let tmp6 = null == stateFromStores;
    if (!tmp6) {
      if (!harvestDisabledResult) {
        harvestDisabledResult = harvestDisabled.harvestDisabled(tmp4, stateFromStores);
        const tmpResult = harvestDisabled;
      }
      tmp6 = harvestDisabledResult;
    }
    require = tmp6;
    return (arg0) => {
      let flag = !closure_0;
      if (!closure_0) {
        arg0();
        flag = true;
      }
      return flag;
    };
  },
  screen: obj
};
obj = {
  route: UserSettingsSections.REQUEST_DATA,
  getComponent() {
    return require(14861).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/RequestYourDataSetting.tsx");

export default route;
export const fetchHarvestStatus = function fetchHarvestStatus() {
  const harvestStatus = saveProfileAndAccountRequest.getHarvestStatus();
  harvestStatus.then((arg0) => {
    const callback = arg0;
    callback(1249).batchUpdates(() => {
      closure_1_7.setState({ isRequesting: false, harvestRequest: body.body });
    });
  }, () => {
    callback(1249).batchUpdates(() => state.setState({ isRequesting: false }));
  });
};
export { useIsHarvestRequestDisabled };