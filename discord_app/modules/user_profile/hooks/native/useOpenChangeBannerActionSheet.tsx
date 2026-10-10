// discord_app/modules/user_profile/hooks/native/useOpenChangeBannerActionSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserProfileActionCreators from "../../UserProfileActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useOpenChangeBannerActionSheet.tsx");

export default function useOpenChangeBannerActionSheet(user) {
  user = user.user;
  const analyticsLocations = user.analyticsLocations;
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = user.showRemoveBanner;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let items = [user, analyticsLocations, flag, flag2];
  return flag2.useCallback(() => {
    let obj2 = {
      user,
      analyticsLocations: null,
      onBannerChange: null,
      showRemoveBanner: null,
      isTryItOut: null,
      onGifBannerSelect: null,
    };
    let items = analyticsLocations;
    let obj = ActionSheetActionCreatorsDefault;
    if (analyticsLocations == null) {
      items = [];
    }
    obj2.analyticsLocations = items;
    if (flag) {
      let fn = UserProfileActionCreators.setTryItOutBanner;
    } else {
      fn = (banner) => user(flag[5]).setPendingChanges({ banner });
    }
    obj2.onBannerChange = fn;
    obj2.showRemoveBanner = flag2;
    obj2.isTryItOut = flag;
    obj2.onGifBannerSelect = function openGifPicker() {
      analyticsLocations(flag[1]).hideActionSheet();
      const obj = analyticsLocations(flag[1]);
      const obj3 = { profileAssetType: null, selectionContext: null };
      const obj2 = analyticsLocations(flag[1]);
      obj3.profileAssetType = user(flag[7]).ProfileAssetType.BANNER;
      const GIFSelectionContext = user(flag[7]).GIFSelectionContext;
      obj3.selectionContext = closure_1_2 ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT;
      obj2.openLazy(user(flag[3])(flag[6], flag.paths), "Select GIF Banner", obj3);
    };
    obj.openLazy(asyncRequireImpl(14819, dependencyMap.paths), "Change Banner", obj2);
    const tmp3 = asyncRequireImpl(14819, dependencyMap.paths);
  }, items);
}
