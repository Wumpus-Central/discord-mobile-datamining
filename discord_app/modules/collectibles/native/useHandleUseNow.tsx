// discord_app/modules/collectibles/native/useHandleUseNow.tsx
import useOpenProfileSettingsDefault from "../../profile_customization/useOpenProfileSettings.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { RootNavigatorScreen } from "../../main_tabs_v2/native/MainTabsConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/useHandleUseNow.tsx");

export const useHandleUseNow = function useHandleUseNow(onSuccess) {
  onSuccess = onSuccess.onSuccess;
  const items = [onSuccess];
  ({ product, analyticsLocations } = onSuccess);
  const callback = React.useCallback(() => {
    if (null == onSuccess) {
      callback(dependencyMap[2]).hideActionSheet();
      const obj = callback(dependencyMap[2]);
      callback(dependencyMap[3]).popAll();
      const obj2 = callback(dependencyMap[3]);
      const rootNavigationRef = onSuccess(dependencyMap[4]).getRootNavigationRef();
      const obj3 = onSuccess(dependencyMap[4]);
      if (tmp8) {
        rootNavigationRef.navigate(RootNavigatorScreen.YOU);
      }
      tmp8 = null != rootNavigationRef && rootNavigationRef.isReady();
    } else {
      tmp();
    }
  }, items);
  const callback1 = React.useCallback(() => {
    callback(4094);
    const obj = { key: "collectible shop apply error", content: null };
    const intl = onSuccess(1236).intl;
    obj[1] = intl.string(onSuccess(1236).t.CKsXk3);
    obj.open(obj);
  }, []);
  let obj = onSuccess(10396);
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
        callback(dependencyMap[2]).hideActionSheet();
        const obj = callback(dependencyMap[2]);
        callback(dependencyMap[3]).popAll();
        const obj2 = callback(dependencyMap[3]);
      } else {
        tmp2();
      }
    }, items1)
  };
  items1 = [tmp4, onSuccess];
  return obj;
};