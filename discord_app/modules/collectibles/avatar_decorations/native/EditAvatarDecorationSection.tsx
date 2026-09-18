// === Module 13415: EditAvatarDecorationSection ===

// Module 13415 (EditAvatarDecorationSection)
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7378 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 9053 */;
import useAvatarDecorationSections from "useAvatarDecorationSections" /* 13414 */;
import useCollectibleListLayout from "useCollectibleListLayout" /* 13416 */;
import CollectiblesEditUserProfileListItems from "CollectiblesEditUserProfileListItems" /* 13417 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isAvatarDecorationRecord = fn(7743).isAvatarDecorationRecord;
const AVATAR_DECORATION_SIZE = fn(1398).AVATAR_DECORATION_SIZE;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4722);
let obj = { row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: fn(13416).GUTTER_SIZE }, rowSpacer: null };
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: fn(13416).GUTTER_SIZE };
obj.rowSpacer = { height: fn(13416).GUTTER_SIZE };
let closure_10 = createStyles.createStyles(obj);
const memoResult = noop.memo((size) => {
  ({ items, selectedSkuId: require, setSelectedAvatarDecoration } = size);
  ({ guildId: dependencyMap, isTryItOut } = size);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  size = size.size;
  const tmp = closure_10();
  const items1 = [setSelectedAvatarDecoration];
  const onPress = isTryItOut.useCallback(() => {
    setSelectedAvatarDecoration(null);
  }, items1);
  let obj = { children: null };
  let obj2 = { style: tmp.row, children: null };
  const items2 = [...items, null, null];
  const substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
  obj2.children = substr.map((avatarDecoration, index) => {
    if (avatarDecoration === useAvatarDecorationSections.NONE_ITEM) {
      const obj2 = { size, onPress, isSelected: null == closure_1_0, asDefault: null != dependencyMap };
      return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
    } else if (avatarDecoration === useAvatarDecorationSections.SHOP_ITEM) {
      const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_AVATAR_DECORATION_SHEET };
      return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop, obj3, "shop");
    } else if (isAvatarDecorationRecord(avatarDecoration)) {
      const obj4 = { avatarDecoration, isSelected: closure_1_0 === avatarDecoration.skuId, setSelectedAvatarDecoration, isTryItOut, size };
      return React5(memoResult1, obj4, avatarDecoration.skuId);
    } else {
      const obj = { style: null };
      size = { height: null, width: null };
      size.height = size;
      size.width = size;
      obj.style = size;
      return React5(View, obj, index);
    }
  });
  const items3 = [closure_7(size, obj2), closure_7(size, { style: tmp.rowSpacer })];
  obj.children = items3;
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
  const obj = { skuId: avatarDecoration.skuId, isSelected, onPress: callback, size: avatarDecoration.size, isTryItOut: flag, accessibilityLabel: avatarDecoration.label, children: React5(CutoutableAvatarDecorationDefault, { avatarDecoration, size: AVATAR_DECORATION_SIZE, animate: isSelected }) };
  return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditAvatarDecorationItem";
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/native/EditAvatarDecorationSection.tsx");

export const EditAvatarDecorationRow = memoResult;