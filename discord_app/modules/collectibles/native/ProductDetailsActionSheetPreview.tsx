import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { ShopCtaEnum } from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let closure_6;
let error;
let unpackModuleId;
let require = arg1;
function BundleProductPreview(onActiveItemTypeChange) {
  let handlePreviewPress;
  let onActiveItemChange;
  let onTrackPress;
  let product;
  let width;
  ({ product, width, handlePreviewPress, onTrackPress, onActiveItemChange } = onActiveItemTypeChange);
  let obj = require(8078) /* useCollectiblesMobileFlexibleBundlesExperiment */;
  if (obj.useCollectiblesMobileFlexibleBundlesExperiment("ProductDetailsActionSheetPreview").enabled) {
    obj = { product: null, width: null, handlePreviewPress: null, onTrackPress: null, onActiveItemChange: null };
    obj[0] = product;
    obj[1] = width;
    obj[2] = handlePreviewPress;
    obj[3] = onTrackPress;
    obj[4] = onActiveItemChange;
    let tmp3Result = tmp3(importDefault(8751), obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.previewDivider;
    const obj1 = { product: null, width: null, handlePreviewPress: null, onTrackPress: null, onActiveItemChange: null, onActiveItemTypeChange: null };
    obj1[0] = product;
    obj1[1] = width;
    obj1[2] = handlePreviewPress;
    obj1[3] = onTrackPress;
    obj1[4] = onActiveItemChange;
    obj1[5] = onActiveItemTypeChange.onActiveItemTypeChange;
    obj[1] = tmp3(BundlePreview, obj1);
    tmp3Result = tmp3(View, obj);
  }
  return tmp3Result;
}
function BundlePreview(product) {
  product = product.product;
  const require = product;
  const width = product.width;
  const handlePreviewPress = product.handlePreviewPress;
  const onTrackPress = product.onTrackPress;
  const onActiveItemChange = product.onActiveItemChange;
  const onActiveItemTypeChange = product.onActiveItemTypeChange;
  let shopProductItems;
  let first;
  let closure_8;
  let c9;
  let callback4;
  let obj = require(handlePreviewPress[10]);
  shopProductItems = obj.useShopProductItems(product);
  let tmp2 = onTrackPress(first(0), 2);
  first = tmp2[0];
  closure_8 = tmp2[1];
  let items = [product, width, handlePreviewPress, shopProductItems, onTrackPress, first];
  const tmp4 = shopProductItems(() => {
    let tmp2 = null;
    if (null != shopProductItems.firstProfileEffect) {
      let obj = { label: null, id: "profile", page: null };
      const intl = product(handlePreviewPress[11]).intl;
      obj[0] = intl.string(product(handlePreviewPress[11]).t["s+YSgo"]);
      obj = { profileEffect: null, profileEffectRestartKey: null, width: null, handlePreviewPress: null, onTrackPress: null };
      obj[0] = tmp.firstProfileEffect;
      obj[1] = first;
      obj[2] = width;
      obj[3] = handlePreviewPress;
      obj[4] = onTrackPress;
      obj[2] = dependencyMap(product(handlePreviewPress[12]).ProfileEffectPreview, obj);
      tmp2 = obj;
    }
    const items = [tmp2, , ];
    let tmp14 = null;
    if (null != shopProductItems.firstAvatarDecoration) {
      obj = { label: null, id: "decoration", page: null };
      const intl2 = product(handlePreviewPress[11]).intl;
      obj[0] = intl2.string(product(handlePreviewPress[11]).t.aVCcr8);
      const obj1 = { product: null, handlePreviewPress: null, onTrackPress: null };
      obj1[0] = closure_0;
      obj1[1] = handlePreviewPress;
      obj1[2] = onTrackPress;
      obj[2] = dependencyMap(product(handlePreviewPress[12]).AvatarDecorationPreview, obj1);
      tmp14 = obj;
    }
    items[1] = tmp14;
    let tmp25 = null;
    if (null != shopProductItems.firstNameplate) {
      const obj2 = { label: null, id: "nameplate", page: null };
      const intl3 = product(handlePreviewPress[11]).intl;
      obj2[0] = intl3.string(product(handlePreviewPress[11]).t.HNnSVZ);
      const obj3 = { product: null };
      obj3[0] = closure_0;
      obj2[2] = dependencyMap(product(handlePreviewPress[12]).NameplatePreview, obj3);
      tmp25 = obj2;
    }
    items[2] = tmp25;
    return items.filter((arg0) => null != arg0);
  }, items);
  c9 = tmp4;
  const items1 = [shopProductItems];
  callback4 = shopProductItems(() => ({ profile: shopProductItems.firstProfileEffect, decoration: shopProductItems.firstAvatarDecoration, nameplate: shopProductItems.firstNameplate }), items1);
  const items2 = [shopProductItems, onActiveItemChange];
  onActiveItemTypeChange(() => {
    let firstNameplate = shopProductItems.firstProfileEffect;
    if (firstNameplate == null) {
      firstNameplate = tmp.firstAvatarDecoration;
    }
    if (firstNameplate == null) {
      firstNameplate = tmp.firstNameplate;
    }
    if (null != firstNameplate) {
      if (onActiveItemChange != null) {
        tmp2(firstNameplate);
      }
    }
  }, items2);
  let obj1 = require(handlePreviewPress[13]);
  obj = {
    items: tmp4,
    pageWidth: width,
    defaultIndex: 0,
    onPageChange(arg0) {
      let id;
      if (_undefined[arg0] != null) {
        id = tmp.id;
      }
      if (null != id) {
        if (null != outer1_13[id]) {
          if (onActiveItemTypeChange != null) {
            onActiveItemTypeChange(tmp4);
          }
        }
        if (null != dependencyMap[id]) {
          if (onActiveItemChange != null) {
            onActiveItemChange(tmp7);
          }
        }
      }
      if ("profile" === id) {
        callback((arg0) => arg0 + 1);
      }
    },
    onSetActiveIndex(arg0) {
      let id;
      if (_undefined[arg0] != null) {
        id = tmp.id;
      }
      if ("profile" === id) {
        if (onTrackPress != null) {
          tmp9(_undefined.BUNDLE_VIEW_PROFILE_EFFECT);
        }
      } else if ("decoration" === id) {
        if (onTrackPress != null) {
          tmp6(_undefined.BUNDLE_VIEW_AVATAR_DECORATION);
        }
      } else if ("nameplate" === id) {
        if (onTrackPress != null) {
          tmp3(_undefined.BUNDLE_VIEW_NAMEPLATE);
        }
      }
    }
  };
  const segmentedControlState = obj1.useSegmentedControlState(obj);
  obj = { children: null };
  const items3 = [callback4(require(handlePreviewPress[14]).SegmentedControlPages, { state: segmentedControlState }), ];
  obj1 = { style: null, children: null };
  obj1[0] = { paddingHorizontal: width(handlePreviewPress[6]).space.PX_16, paddingTop: width(handlePreviewPress[6]).space.PX_12 };
  obj1[1] = callback4(require(handlePreviewPress[15]).SegmentedControl, { state: segmentedControlState, variant: "default" });
  items3[1] = callback4(closure_8, obj1);
  obj[0] = items3;
  return callback5(closure_8, obj);
}
({ useCallback: c4, useEffect: c5, useMemo: closure_6, useState: error } = noop);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { previewContainer: { flex: 1 }, previewDivider: null };
createCacheKey = { borderBottomColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, paddingBottom: require("Themes").space.PX_16, flex: 1 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { profile: require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT, decoration: require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION, nameplate: require("CollectiblesItemType").CollectiblesItemType.NAMEPLATE };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPreview.tsx");

export default function ProductDetailsActionSheetPreview(arg0) {
  let c0;
  let handlePreviewPress;
  let onBundleActiveItemChange;
  let onBundleActiveItemTypeChange;
  let onTrackPress;
  let product;
  let tmp3;
  ({ product, handlePreviewPress, onTrackPress } = arg0);
  let _require;
  ({ onBundleActiveItemTypeChange, onBundleActiveItemChange } = arg0);
  const tmp = createCacheKey();
  [tmp3, c0] = callback(callback3(0), 2);
  const tmp2 = callback(callback3(0), 2);
  let obj = {
    style: tmp.previewContainer,
    onLayout: callback2((nativeEvent) => {
      _undefined(nativeEvent.nativeEvent.layout.width);
    }, []),
    children: null
  };
  if (product.type === _require(1901).CollectiblesItemType.BUNDLE) {
    obj = { product: null, width: null, handlePreviewPress: null, onTrackPress: null, onActiveItemChange: null, onActiveItemTypeChange: null };
    obj[0] = product;
    obj[1] = tmp3;
    obj[2] = handlePreviewPress;
    obj[3] = onTrackPress;
    obj[4] = onBundleActiveItemChange;
    obj[5] = onBundleActiveItemTypeChange;
    let tmp7Result = tmp7(BundleProductPreview, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.previewDivider;
    const obj1 = { product: null, width: null, handlePreviewPress: null, onTrackPress: null };
    obj1[0] = product;
    obj1[1] = tmp3;
    obj1[2] = handlePreviewPress;
    obj1[3] = onTrackPress;
    obj[1] = tmp7(_require(8753).IndividualProductPreview, obj1);
    tmp7Result = tmp7(tmp8, obj);
  }
  obj[2] = tmp7Result;
  return closure_10(View, obj);
};