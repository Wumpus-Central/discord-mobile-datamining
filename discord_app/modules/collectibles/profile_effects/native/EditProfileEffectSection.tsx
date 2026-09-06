// === Module 14629: EditProfileEffectSection ===

// Module 14629 (EditProfileEffectSection)
import FastImageDefault from "FastImage" /* 5587 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import useProfileEffectDefault from "useProfileEffect" /* 8226 */;
import ProfileEffectDefault from "ProfileEffect" /* 8801 */;
import _modDef8823 from "module_8823" /* 8823 */;
import useCollectibleListLayout from "useCollectibleListLayout" /* 13170 */;
import CollectiblesEditUserProfileListItems from "CollectiblesEditUserProfileListItems" /* 13171 */;
import useProfileEffectSections from "useProfileEffectSections" /* 14628 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isProfileEffectRecord = fn(7548).isProfileEffectRecord;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let obj = { row: null, rowSpacer: null, profileEffect: null, sampleProfile: null };
obj = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: fn(13170).GUTTER_SIZE };
obj.row = obj;
const createStyles = { height: fn(13170).GUTTER_SIZE };
obj.rowSpacer = createStyles;
obj.profileEffect = { overflow: "hidden", width: "100%", height: "100%" };
obj.sampleProfile = { aspectRatio: fn(8798).SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
let closure_9 = createStyles.createStyles(obj);
const memoResult = noop.memo((size) => {
  ({ items, selectedSkuId: require, setSelectedProfileEffect } = size);
  ({ guildId: dependencyMap, isTryItOut } = size);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  size = size.size;
  const tmp = closure_9();
  items = [setSelectedProfileEffect];
  const onPress = isTryItOut.useCallback(() => {
    setSelectedProfileEffect(null);
  }, items);
  let obj = { children: null };
  obj = { style: tmp.row, children: null };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, useCollectibleListLayout.ROW_SIZE);
  obj.children = substr.map((item, index) => {
    if (item === useProfileEffectSections.NONE_ITEM) {
      let obj = { size, onPress, isSelected: null == closure_1_0, asDefault: null != dependencyMap };
      return timestampProducer(tmp(13171).EditCollectiblesListItemNone, obj, "none");
    } else if (item === tmp(14628).SHOP_ITEM) {
      obj = { size, analyticsSource: AnalyticsLocationDefault.EDIT_PROFILE_EFFECT_SHEET };
      return timestampProducer(tmp(13171).EditCollectiblesListItemShop, obj, "shop");
    } else if (isProfileEffectRecord(item)) {
      const obj1 = { item, isSelected: closure_1_0 === item.skuId, setSelectedProfileEffect, isTryItOut, size };
      return timestampProducer(memoResult1, obj1, item.skuId);
    } else {
      obj = { style: null };
      size = { height: null, width: null };
      size.height = size;
      size.width = size;
      obj.style = size;
      return timestampProducer(View, obj, index);
    }
  });
  const items2 = [closure_6(size, obj), ];
  obj = { style: tmp.rowSpacer };
  items2[1] = closure_6(size, obj);
  obj.children = items2;
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
  obj.accessibilityLabel = accessibilityLabel;
  obj = { style: null, accessible: false, importantForAccessibility: "no", children: null };
  const items2 = [tmp.profileEffect, { borderRadius: 6 }];
  obj.style = items2;
  obj = { source: null, style: null, resizeMode: "cover" };
  const obj1 = { uri: _modDef8823 };
  obj.source = obj1;
  obj.style = tmp.sampleProfile;
  const items3 = [timestampProducer(FastImageDefault, obj), timestampProducer(ProfileEffectDefault, { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true, thumbnailUrlOverride: memo })];
  obj.children = items3;
  obj.children = React6(View, obj);
  return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditProfileEffectItem";
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/EditProfileEffectSection.tsx");

export const EditProfileEffectRow = memoResult;