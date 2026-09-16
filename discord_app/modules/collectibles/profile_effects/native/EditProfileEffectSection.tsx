// === Module 14743: EditProfileEffectSection ===

// Module 14743 (EditProfileEffectSection)
import FastImageDefault from "FastImage" /* 5673 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7292 */;
import useProfileEffectDefault from "useProfileEffect" /* 8354 */;
import ProfileEffectDefault from "ProfileEffect" /* 8942 */;
import _modDef8964 from "module_8964" /* 8964 */;
import useCollectibleListLayout from "useCollectibleListLayout" /* 13317 */;
import CollectiblesEditUserProfileListItems from "CollectiblesEditUserProfileListItems" /* 13318 */;
import useProfileEffectSections from "useProfileEffectSections" /* 14742 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isProfileEffectRecord = fn(7658).isProfileEffectRecord;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4638);
let obj = { row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: fn(13317).GUTTER_SIZE }, rowSpacer: null, profileEffect: null, sampleProfile: null };
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: fn(13317).GUTTER_SIZE };
obj.rowSpacer = { height: fn(13317).GUTTER_SIZE };
obj.profileEffect = { overflow: "hidden", width: "100%", height: "100%" };
obj.sampleProfile = { aspectRatio: fn(8939).SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
let closure_9 = createStyles.createStyles(obj);
const memoResult = noop.memo((size) => {
  ({ items, selectedSkuId: require, setSelectedProfileEffect } = size);
  ({ guildId: dependencyMap, isTryItOut } = size);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  size = size.size;
  const tmp = closure_9();
  const items1 = [setSelectedProfileEffect];
  const onPress = isTryItOut.useCallback(() => {
    setSelectedProfileEffect(null);
  }, items1);
  let obj = { children: null };
  let obj2 = { style: tmp.row, children: null };
  const items2 = [...items, null, null];
  const substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
  obj2.children = substr.map((item, index) => {
    if (item === useProfileEffectSections.NONE_ITEM) {
      const obj2 = { size, onPress, isSelected: null == closure_1_0, asDefault: null != dependencyMap };
      return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
    } else if (item === useProfileEffectSections.SHOP_ITEM) {
      const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_PROFILE_EFFECT_SHEET };
      return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop, obj3, "shop");
    } else if (isProfileEffectRecord(item)) {
      const obj4 = { item, isSelected: closure_1_0 === item.skuId, setSelectedProfileEffect, isTryItOut, size };
      return timestampProducer(memoResult1, obj4, item.skuId);
    } else {
      const obj = { style: null };
      size = { height: null, width: null };
      size.height = size;
      size.width = size;
      obj.style = size;
      return timestampProducer(View, obj, index);
    }
  });
  const items3 = [closure_6(size, obj2), closure_6(size, { style: tmp.rowSpacer })];
  obj.children = items3;
  return closure_8(closure_7, obj);
});
memoResult.displayName = "EditProfileEffectRow";
const memoResult1 = noop.memo((isSelected) => {
  const item = isSelected.item;
  const setSelectedProfileEffect = isSelected.setSelectedProfileEffect;
  let flag = isSelected.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_9();
  const tmp4 = useProfileEffectDefault(item.skuId);
  closure_2 = tmp4;
  const items = [setSelectedProfileEffect, item];
  let thumbnailPreviewSrc;
  const callback = noop.useCallback(() => {
    setSelectedProfileEffect(item);
  }, items);
  if (tmp4 != null) {
    thumbnailPreviewSrc = tmp4.thumbnailPreviewSrc;
  }
  const items1 = [thumbnailPreviewSrc];
  const memo = noop.useMemo(() => {
    let thumbnailPreviewSrc;
    if (closure_2 != null) {
      thumbnailPreviewSrc = closure_2.thumbnailPreviewSrc;
    }
    if (null == thumbnailPreviewSrc) {
      let thumbnailPreviewSrc1;
      if (closure_2 != null) {
        thumbnailPreviewSrc1 = closure_2.thumbnailPreviewSrc;
      }
      let combined = thumbnailPreviewSrc1;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + closure_2.thumbnailPreviewSrc + "?width=100&height=195";
    }
    return combined;
  }, items1);
  const obj = { skuId: item.skuId, isSelected: isSelected.isSelected, onPress: callback, isTryItOut: flag, size: isSelected.size, accessibilityLabel: null, children: null };
  let accessibilityLabel;
  if (tmp4 != null) {
    accessibilityLabel = tmp4.accessibilityLabel;
  }
  obj.accessibilityLabel = accessibilityLabel;
  const obj2 = { style: null, accessible: false, importantForAccessibility: "no", children: null };
  const items2 = [tmp.profileEffect, { borderRadius: 6 }];
  obj2.style = items2;
  const obj3 = { source: null, style: null, resizeMode: "cover" };
  const obj4 = { uri: _modDef8964 };
  obj3.source = obj4;
  obj3.style = tmp.sampleProfile;
  const items3 = [timestampProducer(FastImageDefault, obj3), timestampProducer(ProfileEffectDefault, { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true, thumbnailUrlOverride: memo })];
  obj2.children = items3;
  obj.children = React6(View, obj2);
  return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditProfileEffectItem";
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/EditProfileEffectSection.tsx");

export const EditProfileEffectRow = memoResult;