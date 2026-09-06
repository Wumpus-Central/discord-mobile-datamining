// discord_app/modules/collectibles/native/useHandleUseNow.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import { RootNavigatorScreen } from "../../main_tabs_v2/native/MainTabsConstants.tsx";

let require = arg1;
let result = require("set").fileFinishedImporting("modules/collectibles/native/useHandleUseNow.tsx");

export const useHandleUseNow = function useHandleUseNow(analyticsLocations) {
  const product = analyticsLocations.product;
  require = product;
  const onSuccess = analyticsLocations.onSuccess;
  const stageCollectibleChangeForEditProfile = analyticsLocations.stageCollectibleChangeForEditProfile;
  let callback;
  let handleUseNow;
  closure_5 = undefined;
  const items = [onSuccess, stageCollectibleChangeForEditProfile];
  callback = callback.useCallback(() => {
    if (null == onSuccess) {
      onSuccess(stageCollectibleChangeForEditProfile[2]).hideAllActionSheets();
      const obj = onSuccess(stageCollectibleChangeForEditProfile[2]);
      const tmp4 = stageCollectibleChangeForEditProfile;
      onSuccess(stageCollectibleChangeForEditProfile[3]).popAll();
      if (null == stageCollectibleChangeForEditProfile) {
        const rootNavigationRef = product(tmp4[4]).getRootNavigationRef();
        const obj3 = product(tmp4[4]);
        if (tmp9) {
          rootNavigationRef.navigate(handleUseNow.YOU);
        }
        tmp9 = null != rootNavigationRef && rootNavigationRef.isReady();
      }
      const obj2 = onSuccess(stageCollectibleChangeForEditProfile[3]);
    } else {
      tmp();
    }
  }, items);
  const callback1 = callback.useCallback(() => {
    let obj = onSuccess(stageCollectibleChangeForEditProfile[5]);
    obj = { key: "collectible shop apply error", content: null };
    const intl = product(stageCollectibleChangeForEditProfile[6]).intl;
    obj[1] = intl.string(product(stageCollectibleChangeForEditProfile[6]).t.CKsXk3);
    obj.open(obj);
  }, []);
  let obj = require(stageCollectibleChangeForEditProfile[7]);
  handleUseNow = obj.useHandleUseNow({ product, onSuccess: callback, onError: callback1 });
  handleUseNow = handleUseNow.handleUseNow;
  const items1 = [stageCollectibleChangeForEditProfile, product, callback, handleUseNow];
  ({ isApplying, canUseNow } = handleUseNow);
  const callback2 = callback.useCallback(() => {
    if (null != stageCollectibleChangeForEditProfile) {
      const result = product(stageCollectibleChangeForEditProfile[8]).commitCollectiblePreview();
      tmp(closure_0);
      callback();
    } else {
      handleUseNow();
    }
  }, items1);
  const tmp5 = onSuccess(stageCollectibleChangeForEditProfile[9])({
    analyticsLocations: analyticsLocations.analyticsLocations,
  });
  closure_5 = tmp5;
  obj = {
    handleUseNow: callback2,
    isApplying,
    canUseNow,
    handleEditProfile: callback.useCallback(() => {
      callback();
      if (null == onSuccess) {
        onSuccess(stageCollectibleChangeForEditProfile[2]).hideAllActionSheets();
        const obj = onSuccess(stageCollectibleChangeForEditProfile[2]);
        onSuccess(stageCollectibleChangeForEditProfile[3]).popAll();
        const obj2 = onSuccess(stageCollectibleChangeForEditProfile[3]);
      } else {
        tmp2();
      }
    }, items2),
  };
  items2 = [tmp5, onSuccess];
  return obj;
};
