// === Module 14215: useIsHarvestRequestDisabled ===

// Module 14215 (useIsHarvestRequestDisabled)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import tDefault from "t" /* 3975 */;
import isIterable from "isIterable" /* 4006 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import saveProfileAndAccountRequest from "saveProfileAndAccountRequest" /* 8620 */;
import harvestDisabled from "harvestDisabled" /* 14216 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import identity from "identity" /* 700 */;
import createToggle from "createToggle" /* 10669 */;

function useIsHarvestRequestDisabled() {
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
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
let obj = {
  route: UserSettingsSections.REQUEST_DATA,
  getComponent() {
    return require(14218).default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/RequestYourDataSetting.tsx");

export default route;
export const fetchHarvestStatus = function fetchHarvestStatus() {
  const harvestStatus = saveProfileAndAccountRequest.getHarvestStatus();
  harvestStatus.then((result) => {
    const callback = result;
    callback(705).batchUpdates(() => {
      closure_1_7.setState({ isRequesting: false, harvestRequest: body.body });
    });
  }, () => {
    callback(705).batchUpdates(() => state.setState({ isRequesting: false }));
  });
};
export { useIsHarvestRequestDisabled };