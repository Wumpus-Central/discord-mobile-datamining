// discord_app/modules/user_settings/defs/native/RequestYourDataSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import tDefault from "../../../../../_runtime/03975_t.js";
import isIterable from "../../../../../_runtime/04006_isIterable.js";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import saveProfileAndAccountRequest from "../../../../actions/UserSettingsAccountActionCreators.tsx";
import harvestDisabled from "../../../harvester/HarvesterUtils.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import ME from "../../../../Constants.tsx";
import identity from "../../../../../_runtime/00700_identity.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

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
    return require("../../privacy_and_safety/native/RequestDataScreen.tsx").default;
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