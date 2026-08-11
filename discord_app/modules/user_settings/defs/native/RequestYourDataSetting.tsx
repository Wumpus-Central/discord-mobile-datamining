// discord_app/modules/user_settings/defs/native/RequestYourDataSetting.tsx
import { ActivityIndicator } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { jsx } from "jsxProd";
import identity from "identity";
import createToggle from "createToggle";
import { t } from "../../../../../_runtime/03902_t.js";
import { isIterable } from "../../../../../_runtime/03933_isIterable.js";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { saveProfileAndAccountRequest } from "../../../../actions/UserSettingsAccountActionCreators.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { RequestDataScreen } from "../../privacy_and_safety/native/RequestDataScreen.tsx";

let UserSettingsSections;
let c5;
function useIsHarvestRequestDisabled() {
  const items = [mergeGuildAvatar];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = initialize;
  const tmp = require;
  let harvestDisabledResult = callback((isRequesting) => isRequesting.isRequesting, isIterable.shallow);
  let tmp6 = null == stateFromStores;
  if (!tmp6) {
    if (!harvestDisabledResult) {
      harvestDisabledResult = tmp(14114).harvestDisabled(tmp4, stateFromStores);
      const tmpResult = tmp(14114);
    }
    tmp6 = harvestDisabledResult;
  }
  return tmp6;
}
({ REQUEST_DATA_LIMIT_DAYS: c5, UserSettingsSections } = ME);
let closure_7 = identity.createWithEqualityFn(() => ({ isRequesting: false, harvestRequest: null }));
obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.XAHCgJ);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
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
      const addResult = t(tmp3.created_at).add(closure_5, "days");
      let formatToPlainStringResult = null;
      if (!addResult.isBefore(t())) {
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
    const items = [mergeGuildAvatar];
    const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
    const obj = initialize;
    const tmp = require;
    let harvestDisabledResult = callback((isRequesting) => isRequesting.isRequesting, isIterable.shallow);
    let tmp6 = null == stateFromStores;
    if (!tmp6) {
      if (!harvestDisabledResult) {
        harvestDisabledResult = tmp(14114).harvestDisabled(tmp4, stateFromStores);
        const tmpResult = tmp(14114);
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
    return RequestDataScreen.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/RequestYourDataSetting.tsx");

export default route;
export const fetchHarvestStatus = function fetchHarvestStatus() {
  const harvestStatus = saveProfileAndAccountRequest.getHarvestStatus();
  harvestStatus.then((arg0) => {
    const callback = arg0;
    callback(705).batchUpdates(() => {
      outer1_7.setState({ isRequesting: false, harvestRequest: body.body });
    });
  }, () => {
    callback(705).batchUpdates(() => state.setState({ isRequesting: false }));
  });
};
export { useIsHarvestRequestDisabled };