// === Module 14283: memoResult1 ===

// Module 14283 (memoResult1)
import useCollectibleListLayout from "useCollectibleListLayout" /* 8090 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { isProfileEffectRecord } from "fromServer" /* 7293 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
let c3 = importAllResult;
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
let obj = { row: null, rowSpacer: null, profileEffect: null, sampleProfile: null };
obj = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("useCollectibleListLayout").GUTTER_SIZE };
obj[0] = obj;
createCacheKey = { height: require("useCollectibleListLayout").GUTTER_SIZE };
obj[1] = createCacheKey;
obj[2] = { overflow: "hidden", width: "100%", height: "100%" };
obj[3] = { aspectRatio: require("SAMPLE_PROFILE_ASPECT_RATIO").SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((size) => {
  ({ items, selectedSkuId: require, setSelectedProfileEffect } = size);
  ({ guildId: dependencyMap, isTryItOut } = size);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  size = size.size;
  closure_5 = undefined;
  const tmp = callback3();
  items = [setSelectedProfileEffect];
  closure_5 = isTryItOut.useCallback(() => {
    setSelectedProfileEffect(null);
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
      return closure_1_6(tmp(tmp2[8]).EditCollectiblesListItemNone, obj, "none");
    } else if (skuId === tmp(tmp2[7]).SHOP_ITEM) {
      obj = { size: null, analyticsSource: null };
      obj[0] = size;
      obj[1] = setSelectedProfileEffect(tmp2[9]).EDIT_PROFILE_EFFECT_SHEET;
      return closure_1_6(tmp(tmp2[8]).EditCollectiblesListItemShop, obj, "shop");
    } else if (callback(skuId)) {
      obj1 = { item: null, isSelected: null, setSelectedProfileEffect: null, isTryItOut: null, size: null };
      obj1[0] = skuId;
      obj1[1] = closure_0 === skuId.skuId;
      obj1[2] = setSelectedProfileEffect;
      obj1[3] = isTryItOut;
      obj1[4] = size;
      return closure_1_6(closure_1_10, obj1, skuId.skuId);
    } else {
      obj = { style: null };
      const obj2 = { height: null, width: null };
      obj2[0] = size;
      obj2[1] = size;
      obj[0] = obj2;
      return closure_1_6(size, obj, arg1);
    }
  });
  const items2 = [callback(size, obj), ];
  obj = { style: tmp.rowSpacer };
  items2[1] = callback(size, obj);
  obj[0] = items2;
  return callback2(closure_7, obj);
});
memoResult.displayName = "EditProfileEffectRow";
const memoResult1 = importAllResult.memo((isSelected) => {
  const item = isSelected.item;
  const setSelectedProfileEffect = isSelected.setSelectedProfileEffect;
  let flag = isSelected.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  const tmp = callback3();
  const tmp4 = setSelectedProfileEffect(8518)(item.skuId);
  dependencyMap = tmp4;
  const items = [setSelectedProfileEffect, item];
  let thumbnailPreviewSrc;
  const callback = importAllResult.useCallback(() => {
    setSelectedProfileEffect(item);
  }, items);
  if (tmp4 != null) {
    thumbnailPreviewSrc = tmp4.thumbnailPreviewSrc;
  }
  const items1 = [thumbnailPreviewSrc];
  const memo = importAllResult.useMemo(() => {
    let thumbnailPreviewSrc;
    if (closure_2 != null) {
      thumbnailPreviewSrc = tmp.thumbnailPreviewSrc;
    }
    if (null == thumbnailPreviewSrc) {
      let thumbnailPreviewSrc1;
      if (tmp != null) {
        thumbnailPreviewSrc1 = tmp.thumbnailPreviewSrc;
      }
      let combined = thumbnailPreviewSrc1;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + tmp.thumbnailPreviewSrc + "?width=100&height=195";
    }
    return combined;
  }, items1);
  let obj = { skuId: item.skuId, isSelected: isSelected.isSelected, onPress: callback, isTryItOut: flag, size: isSelected.size, accessibilityLabel: null, children: null };
  let accessibilityLabel;
  if (tmp4 != null) {
    accessibilityLabel = tmp4.accessibilityLabel;
  }
  obj[5] = accessibilityLabel;
  obj = { style: items2, accessible: false, importantForAccessibility: "no", children: null };
  items2 = [tmp.profileEffect, { borderRadius: 6 }];
  obj = { source: null, style: null, resizeMode: "cover" };
  obj1 = { uri: setSelectedProfileEffect(10750) };
  obj[0] = obj1;
  obj[1] = tmp.sampleProfile;
  const items3 = [closure_6(setSelectedProfileEffect(5493), obj), closure_6(setSelectedProfileEffect(8510), { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true, thumbnailUrlOverride: memo })];
  obj[3] = items3;
  obj[6] = callback2(View, obj);
  return closure_6(item(8091).EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditProfileEffectItem";
const result = require("set").fileFinishedImporting("modules/collectibles/profile_effects/native/EditProfileEffectSection.tsx");

export const EditProfileEffectRow = memoResult;