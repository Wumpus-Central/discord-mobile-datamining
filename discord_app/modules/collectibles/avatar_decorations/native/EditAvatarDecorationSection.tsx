// discord_app/modules/collectibles/avatar_decorations/native/EditAvatarDecorationSection.tsx
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import CutoutableAvatarDecorationDefault from "../../native/components/CutoutableAvatarDecoration.tsx";
import useAvatarDecorationSections from "../useAvatarDecorationSections.tsx";
import useCollectibleListLayout from "../../native/useCollectibleListLayout.tsx";
import CollectiblesEditUserProfileListItems from "../../native/CollectiblesEditUserProfileListItems.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const isAvatarDecorationRecord = fn(7547).isAvatarDecorationRecord;
const AVATAR_DECORATION_SIZE = fn(1397).AVATAR_DECORATION_SIZE;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let obj = { row: null, rowSpacer: null };
obj = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: fn(13170).GUTTER_SIZE,
};
obj.row = obj;
const createStyles = { height: fn(13170).GUTTER_SIZE };
obj.rowSpacer = createStyles;
let closure_10 = createStyles.createStyles(obj);
const memoResult = noop.memo((size) => {
  ({ items, selectedSkuId: require, setSelectedAvatarDecoration } = size);
  ({ guildId: dependencyMap, isTryItOut } = size);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  size = size.size;
  const tmp = closure_10();
  items = [setSelectedAvatarDecoration];
  const onPress = isTryItOut.useCallback(() => {
    setSelectedAvatarDecoration(null);
  }, items);
  let obj = { children: null };
  obj = { style: tmp.row, children: null };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, useCollectibleListLayout.ROW_SIZE);
  obj.children = substr.map((avatarDecoration, index) => {
    if (avatarDecoration === useAvatarDecorationSections.NONE_ITEM) {
      let obj = { size, onPress, isSelected: null == closure_1_0, asDefault: null != dependencyMap };
      return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj, "none");
    } else if (avatarDecoration === useAvatarDecorationSections.SHOP_ITEM) {
      obj = { size, analyticsSource: AnalyticsLocationDefault.EDIT_AVATAR_DECORATION_SHEET };
      return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop, obj, "shop");
    } else if (isAvatarDecorationRecord(avatarDecoration)) {
      const obj1 = {
        avatarDecoration,
        isSelected: closure_1_0 === avatarDecoration.skuId,
        setSelectedAvatarDecoration,
        isTryItOut,
        size,
      };
      return React5(memoResult1, obj1, avatarDecoration.skuId);
    } else {
      obj = { style: null };
      size = { height: null, width: null };
      size.height = size;
      size.width = size;
      obj.style = size;
      return React5(View, obj, index);
    }
  });
  const items2 = [closure_7(size, obj)];
  obj = { style: tmp.rowSpacer };
  items2[1] = closure_7(size, obj);
  obj.children = items2;
  return closure_9(closure_8, obj);
});
memoResult.displayName = "EditAvatarDecorationRow";
const memoResult1 = noop.memo((avatarDecoration) => {
  avatarDecoration = avatarDecoration.avatarDecoration;
  ({ isSelected, setSelectedAvatarDecoration } = avatarDecoration);
  let flag = avatarDecoration.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const items = [setSelectedAvatarDecoration, avatarDecoration];
  const callback = noop.useCallback(() => {
    setSelectedAvatarDecoration(avatarDecoration);
  }, items);
  let obj = {
    skuId: avatarDecoration.skuId,
    isSelected,
    onPress: callback,
    size: avatarDecoration.size,
    isTryItOut: flag,
    accessibilityLabel: avatarDecoration.label,
    children: null,
  };
  obj = { avatarDecoration, size: AVATAR_DECORATION_SIZE, animate: isSelected };
  obj.children = React5(CutoutableAvatarDecorationDefault, obj);
  return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditAvatarDecorationItem";
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/collectibles/avatar_decorations/native/EditAvatarDecorationSection.tsx",
);

export const EditAvatarDecorationRow = memoResult;
