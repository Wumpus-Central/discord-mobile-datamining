// discord_app/modules/user_profile/hooks/native/useOpenChangeAvatarActionSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ProfileCustomizationUtils from "../../../profile_customization/ProfileCustomizationUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useOpenChangeAvatarActionSheet.tsx");

export default function useOpenChangeAvatarActionSheet(user) {
  user = user.user;
  const analyticsLocations = user.analyticsLocations;
  const isTryItOut = user.isTryItOut;
  noop = undefined;
  let pendingAvatar;
  setPendingAvatar = undefined;
  pendingAvatarDecoration = undefined;
  let handleUploadAvatarSelect;
  const canUseAnimatedAvatarResult = analyticsLocations(isTryItOut[1]).canUseAnimatedAvatar(user);
  let tmp4 = !canUseAnimatedAvatarResult;
  if (!canUseAnimatedAvatarResult) {
    tmp4 = !isTryItOut;
  }
  noop = tmp4;
  const tmp5 = analyticsLocations(isTryItOut[2])({ isTryItOut, analyticsLocations });
  pendingAvatar = tmp5.pendingAvatar;
  ({ pendingAvatarDecoration, setPendingAvatar } = tmp5);
  if (undefined === pendingAvatarDecoration) {
    pendingAvatarDecoration = user.avatarDecoration;
  }
  const tmp6 = analyticsLocations(isTryItOut[3])({ isTryItOut, analyticsLocations });
  handleUploadAvatarSelect = tmp6;
  const items = [
    user,
    analyticsLocations,
    pendingAvatar,
    setPendingAvatar,
    tmp6,
    tmp4,
    pendingAvatarDecoration,
    isTryItOut,
  ];
  return noop.useCallback(() => {
    let obj2 = {
      showAnimatedAvatarUpsell,
      handleRemoveAvatarSelect: function removeAvatar() {
        analyticsLocations(isTryItOut[4]).hideActionSheet();
        setPendingAvatar(null);
      },
      handleUploadAvatarSelect,
      handleUploadGIFAvatarSelect: function uploadAvatarGIF() {
        analyticsLocations(isTryItOut[4]).hideActionSheet();
        const obj = analyticsLocations(isTryItOut[4]);
        const obj3 = { profileAssetType: null, selectionContext: null };
        const obj2 = analyticsLocations(isTryItOut[4]);
        obj3.profileAssetType = user(isTryItOut[8]).ProfileAssetType.AVATAR;
        const GIFSelectionContext = user(isTryItOut[8]).GIFSelectionContext;
        obj3.selectionContext = closure_1_2 ? GIFSelectionContext.PROFILE_TRY_IT_OUT : GIFSelectionContext.PROFILE_EDIT;
        obj2.openLazy(user(isTryItOut[6])(isTryItOut[7], isTryItOut.paths), "Select GIF Avatar", obj3);
      },
      handleEditAvatarDecorationSelect: null,
      showRemoveAvatar: null,
    };
    let editAvatarDecoration;
    let obj = ActionSheetActionCreatorsDefault;
    if (!isTryItOut) {
      editAvatarDecoration = function editAvatarDecoration() {
        const result = user(isTryItOut[9]).openAvatarDecorationActionSheet({
          user,
          currentAvatarDecoration,
          analyticsLocations,
        });
      };
    }
    obj2.handleEditAvatarDecorationSelect = editAvatarDecoration;
    const tmp3 = asyncRequireImpl(14842, dependencyMap.paths);
    obj2.showRemoveAvatar = ProfileCustomizationUtils.showRemoveAvatar(pendingAvatar, user.avatar);
    obj.openLazy(tmp3, "Change Avatar", obj2);
    const tmp2Result = ProfileCustomizationUtils;
  }, items);
}
