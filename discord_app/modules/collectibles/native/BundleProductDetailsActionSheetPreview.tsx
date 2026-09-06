// discord_app/modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LegacyBaseButton from "../../../../_runtime/06655_LegacyBaseButton.js";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import IndividualProductPreview from "IndividualProductPreview.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
const noop = fn(19);
({ memo, useCallback: closure_4, useLayoutEffect: hasOwnProperty, useMemo: metroRequire, useState: closure_7 } = noop);
get_ActivityIndicator = fn(17);
({ Pressable: closure_8, ScrollView: closure_9, View: c10 } = get_ActivityIndicator);
const ShopCtaEnum = fn(1076).ShopCtaEnum;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let createStyles = {
  previewContainer: null,
  bundleThumbnail: null,
  selectedRing: null,
  bundleThumbnailRow: null,
  bundleContainer: null,
  bundleInfoContainer: null,
};
createStyles = {
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
createStyles.previewContainer = createStyles;
let size = {
  width: 56,
  height: 56,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  overflow: "hidden",
};
createStyles.bundleThumbnail = size;
const rect = {
  position: "absolute",
  top: -2,
  left: -2,
  right: -2,
  bottom: -2,
  borderRadius: nativeDefault.radii.sm + 2,
  borderWidth: 2,
  borderColor: nativeDefault.colors.BORDER_STRONG,
};
createStyles.selectedRing = rect;
createStyles.bundleThumbnailRow = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: 2,
};
let obj1 = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: 2,
};
createStyles.bundleContainer = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
const obj2 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles.bundleInfoContainer = { gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles.createStyles(createStyles);
let closure_15 = memo((index) => {
  index = index.index;
  ({ isSelected, setSelected } = index);
  const trackedSkuId = index.trackedSkuId;
  const onTrackPress = index.onTrackPress;
  const items = [setSelected, index, onTrackPress, trackedSkuId];
  ({ item, label } = index);
  const tmp2 = closure_14();
  let obj = {
    role: "radio",
    "aria-checked": isSelected,
    onPress: closure_4(() => {
      if (onTrackPress != null) {
        tmp(ShopCtaEnum.BUNDLE_VIEW_PRODUCT, trackedSkuId);
      }
      setSelected(index);
    }, items),
    "aria-label": label,
    children: null,
  };
  obj = { style: tmp2.bundleThumbnail, children: closure_12(setSelected(trackedSkuId[7]), { item, size: 56 }) };
  const items1 = [closure_12(closure_10, obj)];
  if (isSelected) {
    obj = { style: tmp2.selectedRing, pointerEvents: "none" };
    isSelected = closure_12(closure_10, obj);
  }
  items1[1] = isSelected;
  obj.children = items1;
  return closure_13(closure_8, obj);
});
let closure_16 = memo((arg0) => {
  ({
    items,
    bundledProducts: require,
    activeIndex: importDefault,
    onSelect: dependencyMap,
    onTrackPress: _slicedToArray,
  } = arg0);
  let obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  obj = { gesture: nativeGesture, children: null };
  obj = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: closure_14().bundleThumbnailRow,
    role: "radiogroup",
    "aria-label": null,
    children: null,
  };
  const intl = util.intl;
  obj["aria-label"] = intl.string(util.t.cTbdgu);
  obj.children = items.map((item, index) => {
    const obj = {
      item,
      index,
      isSelected: index === importDefault,
      setSelected,
      label: null,
      trackedSkuId: null,
      onTrackPress: null,
    };
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
  obj.children = closure_12(closure_9, obj);
  return closure_12(LegacyBaseButton.GestureDetector, obj);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx");

export default function BundleProductDetailsActionSheetPreview(arg0) {
  ({ product, onTrackPress, onActiveItemChange } = arg0);
  closure_1 = undefined;
  ({ width, handlePreviewPress } = arg0);
  const tmp = closure_14();
  [num, tmp3] = _slicedToArray(React5(0), 2);
  const tmp2 = _slicedToArray(React5(0), 2);
  ({ items, bundledProducts } = product);
  if (product.skuId !== tmp4[0]) {
    tmp5(product.skuId);
    tmp3(0);
  }
  closure_1 = tmp8;
  items = [,];
  items[0] = items[num];
  items[1] = onActiveItemChange;
  hasOwnProperty(() => {
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
  let obj = CollectiblesUtils;
  const collectibleTypeLabel = obj.getCollectibleTypeLabel(tmp8.type);
  const items1 = [items[num]];
  obj = { style: tmp.previewContainer, children: null };
  tmp4 = _slicedToArray(React5(product.skuId), 2);
  const items2 = [
    closure_1_12(IndividualProductPreview.IndividualProductPreview, {
      product: timestampProducer(() => {
        const obj = { skuId: closure_1.skuId, type: closure_1.type, items: null };
        const items = [closure_1];
        obj.items = items;
        return obj;
      }, items1),
      width,
      handlePreviewPress,
      onTrackPress,
    }),
  ];
  obj = { style: tmp.bundleContainer, children: null };
  const obj1 = { style: tmp.bundleInfoContainer, children: null };
  const items3 = [closure_1_12(Text_Text.Text, { variant: "heading-xl/bold", children: product.name })];
  const obj3 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj3.children = intl.formatToPlainString(util.t["/0Yndu"], { num: items.length });
  items3[1] = closure_1_12(Text_Text.Text, obj3);
  obj1.children = items3;
  const items4 = [map1(closure_1_10, obj1)];
  const obj5 = { style: tmp.bundleInfoContainer, children: null };
  const items5 = [closure_1_12(closure_16, { items, bundledProducts, activeIndex: num, onSelect: tmp3, onTrackPress })];
  const items6 = [name];
  let tmp18Result = null != collectibleTypeLabel;
  if (tmp18Result) {
    const obj6 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const _HermesInternal = HermesInternal;
    obj6.children = " - " + collectibleTypeLabel;
    tmp18Result = closure_1_12(Text_Text.Text, obj6);
  }
  items6[1] = tmp18Result;
  items5[1] = map1(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: items6 });
  obj5.children = items5;
  items4[1] = map1(closure_1_10, obj5);
  obj.children = items4;
  items2[1] = map1(closure_1_10, obj);
  obj.children = items2;
  return map1(closure_1_10, obj);
}
