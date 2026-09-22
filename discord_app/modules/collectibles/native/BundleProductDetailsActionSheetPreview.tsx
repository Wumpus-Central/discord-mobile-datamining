// === Module 13448: BundleProductDetailsActionSheetPreview ===

// Module 13448 (BundleProductDetailsActionSheetPreview)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4753 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6899 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7799 */;
import useShopProductItems from "useShopProductItems" /* 8444 */;
import IndividualProductPreview from "IndividualProductPreview" /* 13450 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ memo, useCallback: closure_4, useLayoutEffect: hasOwnProperty, useMemo: metroRequire, useState: closure_7 } = noop);
get_ActivityIndicator = fn(17);
({ Pressable: closure_8, ScrollView: closure_9, View: c10 } = get_ActivityIndicator);
const ShopCtaEnum = fn(1076).ShopCtaEnum;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { previewContainer: { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, bundleThumbnail: null, selectedRing: null, bundleThumbnailRow: null, bundleContainer: null, bundleInfoContainer: null };
let size = { width: 56, height: 56, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, overflow: "hidden" };
obj2.bundleThumbnail = size;
const rect = { position: "absolute", top: -2, left: -2, right: -2, bottom: -2, borderRadius: nativeDefault.radii.sm + 2, borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.selectedRing = rect;
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.bundleThumbnailRow = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: 2 };
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: 2 };
obj2.bundleContainer = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
const obj5 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.bundleInfoContainer = { gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles.createStyles(obj2);
let closure_15 = memo((index) => {
  index = index.index;
  ({ isSelected, setSelected } = index);
  const trackedSkuId = index.trackedSkuId;
  const onTrackPress = index.onTrackPress;
  const items = [setSelected, index, onTrackPress, trackedSkuId];
  ({ item, label } = index);
  const tmp2 = closure_14();
  const obj = {
    role: "radio",
    "aria-checked": isSelected,
    onPress: closure_4(() => {
      if (onTrackPress != null) {
        tmp(ShopCtaEnum.BUNDLE_VIEW_PRODUCT, trackedSkuId);
      }
      setSelected(index);
    }, items),
    "aria-label": label,
    children: null
  };
  const tmp = closure_4(() => {
    if (onTrackPress != null) {
      tmp(ShopCtaEnum.BUNDLE_VIEW_PRODUCT, trackedSkuId);
    }
    setSelected(index);
  }, items);
  const items1 = [closure_12(closure_10, { style: tmp2.bundleThumbnail, children: closure_12(setSelected(trackedSkuId[7]), { item, size: 56 }) }), ];
  if (isSelected) {
    const obj3 = { style: tmp2.selectedRing, pointerEvents: "none" };
    isSelected = closure_12(closure_10, obj3);
  }
  items1[1] = isSelected;
  obj.children = items1;
  return closure_13(closure_8, obj);
});
let closure_16 = memo((arg0) => {
  ({ items, bundledProducts: require, activeIndex: importDefault, onSelect: dependencyMap, onTrackPress: _slicedToArray } = arg0);
  const tmp = closure_14();
  const nativeGesture = LegacyBaseButton.useNativeGesture({ disallowInterruption: true });
  const obj2 = { gesture: nativeGesture, children: null };
  const obj3 = { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp.bundleThumbnailRow, role: "radiogroup", "aria-label": null, children: null };
  const intl = util.intl;
  obj3["aria-label"] = intl.string(util.t.cTbdgu);
  obj3.children = items.map((item, index) => {
    const obj = { item, index, isSelected: index === importDefault, setSelected, label: null, trackedSkuId: null, onTrackPress: null };
    let name;
    if (require != null) {
      if (require[index] != null) {
        name = tmp5.name;
      }
    }
    if (name == null) {
      name = item.skuId;
    }
    obj.label = name;
    let skuId;
    if (require != null) {
      if (require[index] != null) {
        skuId = tmp7.skuId;
      }
    }
    if (skuId == null) {
      skuId = item.skuId;
    }
    obj.trackedSkuId = skuId;
    obj.onTrackPress = onTrackPress;
    return closure_2_12(closure_15, obj, item.skuId);
  });
  obj2.children = closure_12(closure_9, obj3);
  return closure_12(LegacyBaseButton.GestureDetector, obj2);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx");

export default function BundleProductDetailsActionSheetPreview(arg0) {
  ({ product, onTrackPress, onActiveItemChange } = arg0);
  closure_1 = undefined;
  ({ width, handlePreviewPress } = arg0);
  const tmp = closure_14();
  [num, tmp3] = React5(0);
  const tmp2 = _slicedToArray(React5(0), 2);
  ({ items, bundledProducts } = product);
  [tmp5, tmp6] = React5(product.skuId);
  const tmp4 = _slicedToArray(React5(product.skuId), 2);
  const shopProductItems = useShopProductItems.useShopProductItems(product);
  ({ firstAvatarDecoration, firstProfileFrame, firstProfileEffect } = shopProductItems);
  if (product.skuId !== tmp5) {
    tmp6(product.skuId);
    tmp3(0);
  }
  closure_1 = tmp12;
  const items1 = [items[num], onActiveItemChange];
  hasOwnProperty(() => {
    if (onActiveItemChange != null) {
      tmp(closure_1);
    }
  }, items1);
  let tmp14;
  if (bundledProducts != null) {
    tmp14 = bundledProducts[num];
  }
  let name;
  if (tmp14 != null) {
    name = tmp14.name;
  }
  if (name == null) {
    name = tmp12.skuId;
  }
  const collectibleTypeLabel = CollectiblesUtils.getCollectibleTypeLabel(tmp12.type);
  const items2 = [items[num]];
  const obj2 = { style: tmp.previewContainer, children: null };
  const tmp7Result = CollectiblesUtils;
  const items3 = [
    closure_1_12(IndividualProductPreview.IndividualProductPreview, {
      product: timestampProducer(() => {
        const obj = { skuId: closure_1.skuId, type: closure_1.type, items: null };
        const items = [closure_1];
        obj.items = items;
        return obj;
      }, items2),
      width,
      avatarDecorationOverride: firstAvatarDecoration,
      profileFrameOverride: firstProfileFrame,
      profileEffectOverride: firstProfileEffect,
      handlePreviewPress,
      onTrackPress
    }),

  ];
  const obj3 = { style: tmp.bundleContainer, children: null };
  const obj4 = { style: tmp.bundleInfoContainer, children: null };
  const items4 = [closure_1_12(Text_Text.Text, { variant: "heading-xl/bold", children: product.name }), ];
  const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj6.children = intl.formatToPlainString(util.t["/0Yndu"], { num: items.length });
  items4[1] = closure_1_12(Text_Text.Text, obj6);
  obj4.children = items4;
  const items5 = [map1(closure_1_10, obj4), ];
  const obj8 = { style: tmp.bundleInfoContainer, children: null };
  const items6 = [closure_1_12(closure_16, { items, bundledProducts, activeIndex: num, onSelect: tmp3, onTrackPress }), ];
  const items7 = [name, ];
  let tmp20Result = null != collectibleTypeLabel;
  if (tmp20Result) {
    const obj9 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const _HermesInternal = HermesInternal;
    obj9.children = " - " + collectibleTypeLabel;
    tmp20Result = closure_1_12(Text_Text.Text, obj9);
  }
  items7[1] = tmp20Result;
  items6[1] = map1(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: items7 });
  obj8.children = items6;
  items5[1] = map1(closure_1_10, obj8);
  obj3.children = items5;
  items3[1] = map1(closure_1_10, obj3);
  obj2.children = items3;
  return map1(closure_1_10, obj2);
};