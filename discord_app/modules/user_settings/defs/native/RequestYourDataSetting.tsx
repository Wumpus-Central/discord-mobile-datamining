// discord_app/modules/user_settings/defs/native/RequestYourDataSetting.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import ReactBatchUpdates from "../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import _modDef4153 from "../../../../../_runtime/metro/04153__.js";
import _mod4184 from "../../../../../_runtime/metro/04184__.js";
import UserSettingsAccountActionCreators from "../../../../actions/UserSettingsAccountActionCreators.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import HarvesterUtils from "../../../harvester/HarvesterUtils.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Constants from "../../../../Constants.tsx";
import identity from "../../../../../_runtime/metro/01244__.js";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function useIsHarvestRequestDisabled() {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let harvestDisabledResult = closure_7((isRequesting) => isRequesting.isRequesting, _mod4184.shallow);
  let tmp6 = null == stateFromStores;
  if (!tmp6) {
    if (!harvestDisabledResult) {
      harvestDisabledResult = HarvesterUtils.harvestDisabled(tmp4, stateFromStores);
      const tmpResult = HarvesterUtils;
    }
    tmp6 = harvestDisabledResult;
  }
  return tmp6;
}
const ActivityIndicator = _mod17.ActivityIndicator;
({ REQUEST_DATA_LIMIT_DAYS: hasOwnProperty, UserSettingsSections } = Constants);
const jsx = jsxProd.jsx;
let closure_7 = identity.createWithEqualityFn(() => ({ isRequesting: false, harvestRequest: null }));
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.XAHCgJ);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useTrailing: function useHarvestRequestSettingTrailing() {
    let tmp = null;
    if (closure_7((isRequesting) => isRequesting.isRequesting, _mod4184.shallow)) {
      tmp = <ActivityIndicator />;
    }
    return tmp;
  },
  useDescription: function useRequestYourDataSettingDescription() {
    const tmp3 = closure_7((harvestRequest) => harvestRequest.harvestRequest, _mod4184.shallow);
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      return null;
    } else if (currentUser.isStaff()) {
      const intl2 = util.intl;
      return intl2.string(util.t.ZPQLH2);
    } else if (null == tmp3) {
      return null;
    } else {
      const addResult = _modDef4153(tmp3.created_at).add(hasOwnProperty, "days");
      let formatToPlainStringResult = null;
      if (!addResult.isBefore(_modDef4153())) {
        const intl = util.intl;
        const obj = { date: addResult.format("MMMM Do YYYY") };
        formatToPlainStringResult = intl.formatToPlainString(util.t.RNDlV9, obj);
      }
      return formatToPlainStringResult;
    }
  },
  useIsDisabled: useIsHarvestRequestDisabled,
  usePreNavigationAction() {
    const items = [UserStore];
    const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
    let harvestDisabledResult = closure_7((isRequesting) => isRequesting.isRequesting, _mod4184.shallow);
    let tmp6 = null == stateFromStores;
    if (!tmp6) {
      if (!harvestDisabledResult) {
        harvestDisabledResult = HarvesterUtils.harvestDisabled(tmp4, stateFromStores);
        const tmpResult = HarvesterUtils;
      }
      tmp6 = harvestDisabledResult;
    }
    require = tmp6;
    return (fn) => {
      let flag = !harvestDisabledResult;
      if (!harvestDisabledResult) {
        fn();
        flag = true;
      }
      return flag;
    };
  },
  screen: {
    route: UserSettingsSections.REQUEST_DATA,
    getComponent() {
      return require("RequestDataScreen").default;
    },
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/RequestYourDataSetting.tsx");

export default route;
export const fetchHarvestStatus = function fetchHarvestStatus() {
  const harvestStatus = UserSettingsAccountActionCreators.getHarvestStatus();
  harvestStatus.then(
    (result) => {
      const body = result;
      body(1249).batchUpdates(() => {
        state.setState({ isRequesting: false, harvestRequest: body.body });
      });
    },
    () => {
      ReactBatchUpdates.batchUpdates(() => state.setState({ isRequesting: false }));
    },
  );
};
export { useIsHarvestRequestDisabled };
