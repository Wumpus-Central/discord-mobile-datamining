// discord_app/modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import LegacyBaseButton from "../../../../_runtime/05599_LegacyBaseButton.js";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { ShopCtaEnum } from "../CollectiblesShopConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ memo, useCallback: c4, useLayoutEffect: c5, useMemo: closure_6, useState: error } = noop);
({ Pressable: closure_8, ScrollView: c9, View: c10 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { previewContainer: null, bundleThumbnail: null, selectedRing: null, bundleThumbnailRow: null, bundleContainer: null, bundleInfoContainer: null };
createCacheKey = { paddingTop: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 56, height: 56, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, overflow: "hidden" };
let obj1 = { width: 56, height: 56, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, overflow: "hidden" };
createCacheKey[2] = { position: "absolute", top: -2, left: -2, right: -2, bottom: -2, borderRadius: ThemesDefault.radii.sm + 2, borderWidth: 2, borderColor: ThemesDefault.colors.BORDER_STRONG };
const obj2 = { position: "absolute", top: -2, left: -2, right: -2, bottom: -2, borderRadius: ThemesDefault.radii.sm + 2, borderWidth: 2, borderColor: ThemesDefault.colors.BORDER_STRONG };
createCacheKey[3] = { flexDirection: "row", gap: ThemesDefault.space.PX_12, paddingVertical: ThemesDefault.space.PX_4, paddingHorizontal: 2 };
let obj3 = { flexDirection: "row", gap: ThemesDefault.space.PX_12, paddingVertical: ThemesDefault.space.PX_4, paddingHorizontal: 2 };
createCacheKey[4] = { paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
const obj4 = { paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
createCacheKey[5] = { gap: ThemesDefault.space.PX_8 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let closure_15 = memo((index) => {
  index = index.index;
  ({ isSelected, setSelected } = index);
  const trackedSkuId = index.trackedSkuId;
  const onTrackPress = index.onTrackPress;
  const items = [setSelected, index, onTrackPress, trackedSkuId];
  ({ item, label } = index);
  const tmp2 = callback8();
  let obj = {
    role: "radio",
    "aria-checked": isSelected,
    onPress: callback2(() => {
      if (onTrackPress != null) {
        tmp(closure_1_11.BUNDLE_VIEW_PRODUCT, trackedSkuId);
      }
      setSelected(index);
    }, items),
    "aria-label": label,
    children: null
  };
  obj = { style: tmp2.bundleThumbnail, children: callback6(setSelected(trackedSkuId[7]), { item, size: 56 }) };
  const items1 = [callback6(closure_10, obj), ];
  if (isSelected) {
    obj = { style: null, pointerEvents: "none" };
    obj[0] = tmp2.selectedRing;
    isSelected = callback6(closure_10, obj);
  }
  items1[1] = isSelected;
  obj[4] = items1;
  return closure_13(closure_8, obj);
});
let closure_16 = memo((arg0) => {
  ({ items, bundledProducts: require, activeIndex: importDefault, onSelect: dependencyMap, onTrackPress: closure_3 } = arg0);
  let obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  obj = { gesture: nativeGesture, children: null };
  obj = { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: callback8().bundleThumbnailRow, role: "radiogroup", "aria-label": null, children: null };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.cTbdgu);
  obj[5] = items.map((item, index) => {
    const obj = { item, index, isSelected: index === closure_1, setSelected: closure_2, label: null, trackedSkuId: null, onTrackPress: null };
    let name;
    if (closure_0 != null) {
      if (tmp3[index] != null) {
        name = tmp5.name;
      }
    }
    if (name == null) {
      name = item.skuId;
    }
    obj[4] = name;
    let skuId;
    if (closure_0 != null) {
      if (tmp3[index] != null) {
        skuId = tmp7.skuId;
      }
    }
    if (skuId == null) {
      skuId = item.skuId;
    }
    obj[5] = skuId;
    obj[6] = closure_3;
    return closure_1_12(closure_1_15, obj, item.skuId);
  });
  obj[1] = callback6(closure_9, obj);
  return callback6(LegacyBaseButton.GestureDetector, obj);
});
let obj5 = { gap: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx");

export default function BundleProductDetailsActionSheetPreview(arg0) {
  ({ product, onTrackPress, onActiveItemChange } = arg0);
  closure_1 = undefined;
  ({ width, handlePreviewPress } = arg0);
  const tmp = callback8();
  [num, tmp3] = callback(callback5(0), 2);
  const tmp2 = callback(callback5(0), 2);
  ({ items, bundledProducts } = product);
  if (product.skuId !== tmp4[0]) {
    tmp5(product.skuId);
    tmp3(0);
  }
  closure_1 = tmp8;
  items = [, ];
  items[0] = items[num];
  items[1] = onActiveItemChange;
  callback3(() => {
    if (onActiveItemChange != null) {
      tmp(closure_1);
    }
  }, items);
  let tmp10;
  if (bundledProducts != null) {
    tmp10 = bundledProducts[num];
  }
  let name;
  if (tmp10 != null) {
    name = tmp10.name;
  }
  if (name == null) {
    name = tmp8.skuId;
  }
  let obj = onActiveItemChange(7226);
  const collectibleTypeLabel = obj.getCollectibleTypeLabel(tmp8.type);
  const items1 = [items[num]];
  obj = { style: tmp.previewContainer, children: null };
  const tmp12 = onActiveItemChange;
  tmp4 = callback(callback5(product.skuId), 2);
  const items2 = [
    callback6(onActiveItemChange(9659).IndividualProductPreview, {
      product: callback4(() => {
        const items = [closure_1];
        return { skuId: closure_1.skuId, type: closure_1.type, items };
      }, items1),
      width,
      handlePreviewPress,
      onTrackPress
    }),

  ];
  obj = { style: tmp.bundleContainer, children: null };
  obj1 = { style: tmp.bundleInfoContainer, children: null };
  const items3 = [callback6(onActiveItemChange(4440).Text, { variant: "heading-xl/bold", children: product.name }), ];
  const obj3 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = onActiveItemChange(1236).intl;
  obj3[2] = intl.formatToPlainString(onActiveItemChange(1236).t["/0Yndu"], { num: items.length });
  items3[1] = callback6(onActiveItemChange(4440).Text, obj3);
  obj1[1] = items3;
  const items4 = [callback7(closure_10, obj1), ];
  const obj5 = { style: tmp.bundleInfoContainer, children: null };
  const items5 = [callback6(closure_16, { items, bundledProducts, activeIndex: num, onSelect: tmp3, onTrackPress }), ];
  const items6 = [name, ];
  let tmp18Result = null != collectibleTypeLabel;
  if (tmp18Result) {
    const obj6 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const _HermesInternal = HermesInternal;
    obj6[2] = " - " + collectibleTypeLabel;
    tmp18Result = callback6(tmp12(4440).Text, obj6);
  }
  items6[1] = tmp18Result;
  items5[1] = callback7(onActiveItemChange(4440).Text, { variant: "text-sm/medium", color: "text-default", children: items6 });
  obj5[1] = items5;
  items4[1] = callback7(closure_10, obj5);
  obj[1] = items4;
  items2[1] = callback7(closure_10, obj);
  obj[1] = items2;
  return callback7(closure_10, obj);
};