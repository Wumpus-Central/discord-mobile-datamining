// discord_app/modules/collectibles/native/useHandleUseNow.tsx
import useOpenProfileSettingsDefault from "../../profile_customization/useOpenProfileSettings.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { RootNavigatorScreen } from "../../main_tabs_v2/native/MainTabsConstants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/native/useHandleUseNow.tsx");

export const useHandleUseNow = function useHandleUseNow(onSuccess) {
  onSuccess = onSuccess.onSuccess;
  importDefault = undefined;
  const items = [onSuccess];
  ({ product, analyticsLocations } = onSuccess);
  const callback = React.useCallback(() => {
    if (null == onSuccess) {
      callback(closure_1_2[2]).hideActionSheet();
      const obj = callback(closure_1_2[2]);
      callback(closure_1_2[3]).popAll();
      const obj2 = callback(closure_1_2[3]);
      const rootNavigationRef = onSuccess(closure_1_2[4]).getRootNavigationRef();
      const obj3 = onSuccess(closure_1_2[4]);
      if (tmp8) {
        rootNavigationRef.navigate(closure_1_4.YOU);
      }
      tmp8 = null != rootNavigationRef && rootNavigationRef.isReady();
    } else {
      tmp();
    }
  }, items);
  const callback1 = React.useCallback(() => {
    let obj = callback(4194);
    obj = { key: "collectible shop apply error", content: null };
    const intl = onSuccess(1233).intl;
    obj[1] = intl.string(onSuccess(1233).t.CKsXk3);
    obj.open(obj);
  }, []);
  let obj = onSuccess(11056);
  handleUseNow = obj.useHandleUseNow({ product, onSuccess: callback, onError: callback1 });
  ({ handleUseNow, isApplying, canUseNow } = handleUseNow);
  const tmp4 = useOpenProfileSettingsDefault({ analyticsLocations });
  importDefault = tmp4;
  obj = {
    handleUseNow,
    isApplying,
    canUseNow,
    handleEditProfile: React.useCallback(() => {
      callback();
      if (null == onSuccess) {
        callback(closure_1_2[2]).hideActionSheet();
        const obj = callback(closure_1_2[2]);
        callback(closure_1_2[3]).popAll();
        const obj2 = callback(closure_1_2[3]);
      } else {
        tmp2();
      }
    }, items1),
  };
  items1 = [tmp4, onSuccess];
  return obj;
};
