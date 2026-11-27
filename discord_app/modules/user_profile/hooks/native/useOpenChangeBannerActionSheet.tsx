// discord_app/modules/user_profile/hooks/native/useOpenChangeBannerActionSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/02120_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserProfileActionCreators from "../../UserProfileActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useOpenChangeBannerActionSheet.tsx");

export default function useOpenChangeBannerActionSheet(user) {
  user = user.user;
  const guildId = user.guildId;
  const analyticsLocations = user.analyticsLocations;
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = user.showRemoveBanner;
  if (flag2 === undefined) {
    flag2 = false;
  }
  items = [user, guildId, analyticsLocations, flag, flag2];
  return flag.useCallback(() => {
    let obj2 = {
      user,
      analyticsLocations: null,
      onBannerChange: null,
      guildId: null,
      showRemoveBanner: null,
      isTryItOut: null,
      onGifBannerSelect: null,
    };
    items = analyticsLocations;
    let obj = ActionSheetActionCreatorsDefault;
    if (analyticsLocations == null) {
      items = [];
    }
    obj2.analyticsLocations = items;
    if (flag) {
      let fn = UserProfileActionCreators.setTryItOutBanner;
    } else {
      fn = (banner) => user(analyticsLocations[5]).setPendingChanges({ guildId, banner });
    }
    obj2.onBannerChange = fn;
    obj2.guildId = guildId;
    obj2.showRemoveBanner = flag2;
    obj2.isTryItOut = flag;
    obj2.onGifBannerSelect = function openGifPicker() {
      guildId(analyticsLocations[1]).hideActionSheet();
      const obj = guildId(analyticsLocations[1]);
      const obj3 = { profileAssetType: null, selectionContext: null, guildId: null };
      const obj2 = guildId(analyticsLocations[1]);
      obj3.profileAssetType = user(analyticsLocations[7]).ProfileAssetType.BANNER;
      const GIFSelectionContext = user(analyticsLocations[7]).GIFSelectionContext;
      obj3.selectionContext = flag ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT;
      obj3.guildId = guildId;
      obj2.openLazy(
        user(analyticsLocations[3])(analyticsLocations[6], analyticsLocations.paths),
        "Select GIF Banner",
        obj3,
      );
    };
    obj.openLazy(asyncRequireImpl(16039, dependencyMap.paths), "Change Banner", obj2);
    const tmp3 = asyncRequireImpl(16039, dependencyMap.paths);
  }, items);
}
