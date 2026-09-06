// discord_app/modules/user_settings/defs/native/RequestYourDataSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import hooksDefault from "../../../../../_runtime/04153_hooks.js";
import isIterable from "../../../../../_runtime/04184_isIterable.js";
import saveProfileAndAccountRequest from "../../../../actions/UserSettingsAccountActionCreators.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import harvestDisabled from "../../../harvester/HarvesterUtils.tsx";
import closure_4 from "../../../../stores/UserStore.tsx";
import ME from "../../../../Constants.tsx";
import identity from "../../../../../_runtime/01244_identity.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

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
  screen: obj,
};
obj = {
  route: UserSettingsSections.REQUEST_DATA,
  getComponent() {
    return require("../../privacy_and_safety/native/RequestDataScreen.tsx").default;
  },
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/RequestYourDataSetting.tsx");

export default route;
export const fetchHarvestStatus = function fetchHarvestStatus() {
  const harvestStatus = saveProfileAndAccountRequest.getHarvestStatus();
  harvestStatus.then(
    (arg0) => {
      const callback = arg0;
      callback(1249).batchUpdates(() => {
        closure_1_7.setState({ isRequesting: false, harvestRequest: body.body });
      });
    },
    () => {
      callback(1249).batchUpdates(() => state.setState({ isRequesting: false }));
    },
  );
};
export { useIsHarvestRequestDisabled };
