// discord_app/modules/collectibles/profile_frames/native/EditProfileFrameSection.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import ProfileFrameSamplePreviewDefault from "previews/ProfileFrameSamplePreview.tsx";
import useCollectibleListLayout from "../../native/useCollectibleListLayout.tsx";
import CollectiblesEditUserProfileListItems from "../../native/CollectiblesEditUserProfileListItems.tsx";
import useProfileFrameSections from "../hooks/useProfileFrameSections.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const isProfileFrameRecord = fn(7652).isProfileFrameRecord;
let closure_6 = fn(8338).PROFILE_FRAME_ASPECT_RATIO;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4636);
let obj = {
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: fn(13301).GUTTER_SIZE,
  },
  rowSpacer: null,
  previewContainer: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: fn(13301).GUTTER_SIZE,
};
obj.rowSpacer = { height: fn(13301).GUTTER_SIZE };
obj.previewContainer = {
  width: "100%",
  height: "100%",
  paddingVertical: PX_8,
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
};
let closure_11 = createStyles.createStyles(obj);
const memoResult = noop.memo((arg0) => {
  ({ items, selectedSkuId: require, setSelectedProfileFrame } = arg0);
  ({ guildId: dependencyMap, size: noop } = arg0);
  const tmp = closure_11();
  const items1 = [setSelectedProfileFrame];
  const onPress = noop.useCallback(() => {
    setSelectedProfileFrame(null);
  }, items1);
  let obj = { children: null };
  let obj2 = { style: tmp.row, children: null };
  const items2 = [...items, null, null];
  const substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
  obj2.children = substr.map((profileFrame, index) => {
    if (profileFrame === useProfileFrameSections.NONE_ITEM) {
      const obj2 = { size: width, onPress, isSelected: null == closure_1_0, asDefault: null != dependencyMap };
      return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
    } else if (profileFrame === useProfileFrameSections.SHOP_ITEM) {
      const obj3 = { size: width, analyticsSource: AnalyticsLocationDefault.EDIT_PROFILE_FRAME_SHEET };
      return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop, obj3, "shop");
    } else if (isProfileFrameRecord(profileFrame)) {
      const obj4 = {
        profileFrame,
        isSelected: closure_1_0 === profileFrame.skuId,
        setSelectedProfileFrame,
        size: width,
      };
      return React5(memoResult1, obj4, profileFrame.skuId);
    } else {
      const obj = { style: null };
      const size = { height: width, width };
      obj.style = size;
      return React5(View, obj, index);
    }
  });
  const items3 = [closure_7(onPress, obj2), closure_7(onPress, { style: tmp.rowSpacer })];
  obj.children = items3;
  return closure_9(closure_8, obj);
});
memoResult.displayName = "EditProfileFrameRow";
const memoResult1 = noop.memo((isSelected) => {
  const profileFrame = isSelected.profileFrame;
  const setSelectedProfileFrame = isSelected.setSelectedProfileFrame;
  const size = isSelected.size;
  const items = [setSelectedProfileFrame, profileFrame];
  const callback = noop.useCallback(() => {
    setSelectedProfileFrame({ skuId: profileFrame.skuId, type: profileFrame.type });
  }, items);
  const obj = {
    skuId: profileFrame.skuId,
    isSelected: isSelected.isSelected,
    onPress: callback,
    size,
    accessibilityLabel: profileFrame.label,
    children: null,
  };
  const obj2 = { style: closure_11().previewContainer, children: null };
  const obj3 = {
    profileFrame,
    previewWidth: size * closure_6,
    previewHeight: size - 2 * PX_8,
    profileBackgroundColor: null,
  };
  const tmp = closure_11();
  obj3.profileBackgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
  obj2.children = React5(ProfileFrameSamplePreviewDefault, obj3);
  obj.children = React5(View, obj2);
  return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditProfileFrameItem";
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/EditProfileFrameSection.tsx");

export const EditProfileFrameRow = memoResult;
