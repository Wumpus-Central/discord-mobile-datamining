// discord_app/modules/collectibles/avatar_decorations/native/EditAvatarDecorationSection.tsx
import useCollectibleListLayout from "../../native/useCollectibleListLayout.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { isAvatarDecorationRecord } from "../../records/AvatarDecorationRecord.tsx";
import { AVATAR_DECORATION_SIZE } from "../AvatarDecorationConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
let c3 = importAllResult;
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
let obj = { row: null, rowSpacer: null };
obj = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("useCollectibleListLayout").GUTTER_SIZE };
obj[0] = obj;
createCacheKey = { height: require("useCollectibleListLayout").GUTTER_SIZE };
obj[1] = createCacheKey;
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((size) => {
  ({ items, selectedSkuId: require, setSelectedAvatarDecoration } = size);
  ({ guildId: dependencyMap, isTryItOut } = size);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  size = size.size;
  closure_5 = undefined;
  const tmp = callback3();
  items = [setSelectedAvatarDecoration];
  closure_5 = isTryItOut.useCallback(() => {
    setSelectedAvatarDecoration(null);
  }, items);
  let obj = { children: null };
  obj = { style: tmp.row, children: null };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, useCollectibleListLayout.ROW_SIZE);
  obj[1] = substr.map((skuId) => {
    if (skuId === closure_1_0(closure_1_2[7]).NONE_ITEM) {
      let obj = { size: null, onPress: null, isSelected: null, asDefault: null };
      obj[0] = size;
      obj[1] = callback;
      obj[2] = null == closure_0;
      obj[3] = null != closure_2;
      return closure_1_7(tmp(tmp2[8]).EditCollectiblesListItemNone, obj, "none");
    } else if (skuId === tmp(tmp2[7]).SHOP_ITEM) {
      obj = { size: null, analyticsSource: null };
      obj[0] = size;
      obj[1] = setSelectedAvatarDecoration(tmp2[9]).EDIT_AVATAR_DECORATION_SHEET;
      return closure_1_7(tmp(tmp2[8]).EditCollectiblesListItemShop, obj, "shop");
    } else if (callback(skuId)) {
      obj1 = { avatarDecoration: null, isSelected: null, setSelectedAvatarDecoration: null, isTryItOut: null, size: null };
      obj1[0] = skuId;
      obj1[1] = closure_0 === skuId.skuId;
      obj1[2] = setSelectedAvatarDecoration;
      obj1[3] = isTryItOut;
      obj1[4] = size;
      return closure_1_7(closure_1_11, obj1, skuId.skuId);
    } else {
      obj = { style: null };
      const obj2 = { height: null, width: null };
      obj2[0] = size;
      obj2[1] = size;
      obj[0] = obj2;
      return closure_1_7(size, obj, arg1);
    }
  });
  const items2 = [callback(size, obj), ];
  obj = { style: tmp.rowSpacer };
  items2[1] = callback(size, obj);
  obj[0] = items2;
  return callback2(closure_8, obj);
});
memoResult.displayName = "EditAvatarDecorationRow";
const memoResult1 = importAllResult.memo((avatarDecoration) => {
  avatarDecoration = avatarDecoration.avatarDecoration;
  ({ isSelected, setSelectedAvatarDecoration } = avatarDecoration);
  let flag = avatarDecoration.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const items = [setSelectedAvatarDecoration, avatarDecoration];
  const callback = importAllResult.useCallback(() => {
    setSelectedAvatarDecoration(avatarDecoration);
  }, items);
  let obj = { skuId: avatarDecoration.skuId, isSelected, onPress: callback, size: avatarDecoration.size, isTryItOut: flag, accessibilityLabel: avatarDecoration.label, children: null };
  obj = { avatarDecoration, size: AVATAR_DECORATION_SIZE, animate: isSelected };
  obj[6] = callback(setSelectedAvatarDecoration(8513), obj);
  return callback(avatarDecoration(8508).EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditAvatarDecorationItem";
const result = require("set").fileFinishedImporting("modules/collectibles/avatar_decorations/native/EditAvatarDecorationSection.tsx");

export const EditAvatarDecorationRow = memoResult;