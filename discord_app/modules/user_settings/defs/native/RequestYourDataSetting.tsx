// === Module 14313: useIsHarvestRequestDisabled ===

// Module 14313 (useIsHarvestRequestDisabled)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import hooksDefault from "hooks" /* 3979 */;
import isIterable from "isIterable" /* 4010 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import saveProfileAndAccountRequest from "saveProfileAndAccountRequest" /* 8665 */;
import harvestDisabled from "harvestDisabled" /* 14314 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import identity from "identity" /* 700 */;
import createToggle from "createToggle" /* 10516 */;

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
      const intl2 = tmp(1236).intl;
      return intl2.string(tmp(1236).t.ZPQLH2);
    } else if (null == tmp3) {
      return null;
    } else {
      const addResult = hooksDefault(tmp3.created_at).add(closure_5, "days");
      let formatToPlainStringResult = null;
      if (!addResult.isBefore(hooksDefault())) {
        const intl = tmp(1236).intl;
        const obj = { date: null };
        obj[0] = addResult.format("MMMM Do YYYY");
        formatToPlainStringResult = intl.formatToPlainString(tmp(1236).t.RNDlV9, obj);
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
    return require(14316).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/RequestYourDataSetting.tsx");

export default route;
export const fetchHarvestStatus = function fetchHarvestStatus() {
  const harvestStatus = saveProfileAndAccountRequest.getHarvestStatus();
  harvestStatus.then((arg0) => {
    const callback = arg0;
    callback(705).batchUpdates(() => {
      closure_1_7.setState({ isRequesting: false, harvestRequest: body.body });
    });
  }, () => {
    callback(705).batchUpdates(() => state.setState({ isRequesting: false }));
  });
};
export { useIsHarvestRequestDisabled };