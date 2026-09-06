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
const isProfileFrameRecord = fn(7549).isProfileFrameRecord;
let closure_6 = fn(8222).PROFILE_FRAME_ASPECT_RATIO;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
fn(4560);
let obj = { row: null, rowSpacer: null, previewContainer: null };
obj = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: fn(13170).GUTTER_SIZE,
};
obj.row = obj;
const createStyles = { height: fn(13170).GUTTER_SIZE };
obj.rowSpacer = createStyles;
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
  items = [setSelectedProfileFrame];
  const onPress = noop.useCallback(() => {
    setSelectedProfileFrame(null);
  }, items);
  let obj = { children: null };
  obj = { style: tmp.row, children: null };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, useCollectibleListLayout.ROW_SIZE);
  obj.children = substr.map((profileFrame, index) => {
    if (profileFrame === useProfileFrameSections.NONE_ITEM) {
      let obj = { size: width, onPress, isSelected: null == closure_1_0, asDefault: null != dependencyMap };
      return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj, "none");
    } else if (profileFrame === useProfileFrameSections.SHOP_ITEM) {
      obj = { size: width, analyticsSource: AnalyticsLocationDefault.EDIT_PROFILE_FRAME_SHEET };
      return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop, obj, "shop");
    } else if (isProfileFrameRecord(profileFrame)) {
      const obj1 = {
        profileFrame,
        isSelected: closure_1_0 === profileFrame.skuId,
        setSelectedProfileFrame,
        size: width,
      };
      return React5(memoResult1, obj1, profileFrame.skuId);
    } else {
      obj = { style: null };
      const size = { height: width, width };
      obj.style = size;
      return React5(View, obj, index);
    }
  });
  const items2 = [closure_7(onPress, obj)];
  obj = { style: tmp.rowSpacer };
  items2[1] = closure_7(onPress, obj);
  obj.children = items2;
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
  let obj = {
    skuId: profileFrame.skuId,
    isSelected: isSelected.isSelected,
    onPress: callback,
    size,
    accessibilityLabel: profileFrame.label,
    children: null,
  };
  obj = { style: closure_11().previewContainer, children: null };
  obj = { profileFrame, previewWidth: size * closure_6, previewHeight: size - 2 * PX_8, profileBackgroundColor: null };
  const tmp = closure_11();
  obj.profileBackgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
  obj.children = React5(ProfileFrameSamplePreviewDefault, obj);
  obj.children = React5(View, obj);
  return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditProfileFrameItem";
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/EditProfileFrameSection.tsx");

export const EditProfileFrameRow = memoResult;
