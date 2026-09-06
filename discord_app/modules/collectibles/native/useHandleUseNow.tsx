// discord_app/modules/collectibles/native/useHandleUseNow.tsx
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import CollectiblePreviewSession from "../CollectiblePreviewSession.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const RootNavigatorScreen = fn(11084).RootNavigatorScreen;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/useHandleUseNow.tsx");

export const useHandleUseNow = function useHandleUseNow(analyticsLocations) {
  const product = analyticsLocations.product;
  require = product;
  const stageCollectibleChangeForEditProfile = analyticsLocations.stageCollectibleChangeForEditProfile;
  let onSuccess;
  const items = [onSuccess, stageCollectibleChangeForEditProfile];
  onSuccess = onSuccess.useCallback(() => {
    if (null == onSuccess) {
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      ModalActionCreatorsDefault.popAll();
      if (null == stageCollectibleChangeForEditProfile) {
        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
        if (tmp9) {
          rootNavigationRef.navigate(RootNavigatorScreen.YOU);
        }
        tmp9 = null != rootNavigationRef && rootNavigationRef.isReady();
      }
    } else {
      tmp();
    }
  }, items);
  const callback1 = onSuccess.useCallback(() => {
    onSuccess(stageCollectibleChangeForEditProfile[5]);
    const obj = { key: "collectible shop apply error", content: null };
    const intl = product(stageCollectibleChangeForEditProfile[6]).intl;
    obj.content = intl.string(product(stageCollectibleChangeForEditProfile[6]).t.CKsXk3);
    obj.open(obj);
  }, []);
  let obj = require("hooks/useHandleUseNow");
  let handleUseNow = obj.useHandleUseNow({ product, onSuccess, onError: callback1 });
  handleUseNow = handleUseNow.handleUseNow;
  const items1 = [stageCollectibleChangeForEditProfile, product, onSuccess, handleUseNow];
  ({ isApplying, canUseNow } = handleUseNow);
  const callback2 = onSuccess.useCallback(() => {
    if (null != stageCollectibleChangeForEditProfile) {
      const result = CollectiblePreviewSession.commitCollectiblePreview();
      tmp(product);
      callback();
    } else {
      handleUseNow();
    }
  }, items1);
  const tmp5 = onSuccess(stageCollectibleChangeForEditProfile[9])({
    analyticsLocations: analyticsLocations.analyticsLocations,
  });
  closure_5 = tmp5;
  obj = { handleUseNow: callback2, isApplying, canUseNow, handleEditProfile: null };
  const items2 = [tmp5, onSuccess];
  obj.handleEditProfile = onSuccess.useCallback(() => {
    closure_5();
    if (null == onSuccess) {
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      ModalActionCreatorsDefault.popAll();
    } else {
      tmp2();
    }
  }, items2);
  return obj;
};
