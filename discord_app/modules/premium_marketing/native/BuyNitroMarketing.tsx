// === Module 13010: BuyNitroMarketing ===

// Module 13010 (BuyNitroMarketing)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
createCacheKey = { container: null, list: null, listContent: null, listHeader: null, sectionHeader: null, disabled: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_24 };
let obj1 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_24 };
createCacheKey[3] = { gap: ThemesDefault.space.PX_24 };
let obj2 = { gap: ThemesDefault.space.PX_24 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[5] = { pointerEvents: "none" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginTop: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketing.tsx");

export default function BuyNitroMarketing(onPaymentDismiss) {
  ({ onClose, applicationId } = onPaymentDismiss);
  ({ initialLoadCompleted, initialTier, onPaymentSuccess } = onPaymentDismiss);
  onPaymentDismiss = onPaymentDismiss.onPaymentDismiss;
  let React;
  let nativeStackNavigation;
  let buyNitroPlanSelection;
  closure_6 = undefined;
  let onSelectNitroTier;
  let locationStackFromLocationContext;
  let callback;
  const tmp = callback();
  React = tmp;
  let obj = applicationId(onPaymentDismiss[6]);
  const youBarSettingsCustomHeaderPaddingTop = obj.useYouBarSettingsCustomHeaderPaddingTop();
  obj1 = applicationId(onPaymentDismiss[7]);
  nativeStackNavigation = obj1.useNativeStackNavigation();
  let obj2 = applicationId(onPaymentDismiss[8]);
  const buyNitroMarketingLifecycleHooks = obj2.useBuyNitroMarketingLifecycleHooks(nativeStackNavigation, initialLoadCompleted);
  let obj3 = applicationId(onPaymentDismiss[9]);
  let tmp7;
  if (null != initialTier) {
    obj = { tier: null, productId: "Array" };
    obj[0] = initialTier;
    tmp7 = obj;
  }
  buyNitroPlanSelection = obj3.useBuyNitroPlanSelection(tmp7);
  closure_6 = React.useRef(buyNitroPlanSelection);
  const items = [buyNitroPlanSelection];
  const effect = React.useEffect(() => {
    closure_6.current = buyNitroPlanSelection;
  }, items);
  let tmp2Result = tmp2(tmp3[10]);
  const isBuyNitroPurchaseBlocked = tmp2Result.useIsBuyNitroPurchaseBlocked();
  const tmp12 = onPaymentSuccess(onPaymentDismiss[11])(buyNitroPlanSelection);
  onSelectNitroTier = tmp12.onSelectNitroTier;
  ({ onScroll, listData, listRef } = tmp12);
  tmp2Result = tmp2(tmp3[12]);
  locationStackFromLocationContext = tmp2Result.useLocationStackFromLocationContext();
  const promotionMarketingComponent = applicationId(onPaymentDismiss[13]).usePromotionMarketingComponent(tmp2(tmp3[14]).MarketingComponentType.MARKETING_PAGE_BANNER);
  const items1 = [locationStackFromLocationContext, applicationId, onPaymentSuccess, onPaymentDismiss];
  callback = React.useCallback((perk) => {
    let obj = applicationId(onPaymentDismiss[15]);
    obj = { selectedTier: ref.current.selection.tier, selectedProductId: ref.current.selection.productId, analyticsLocations: locationStackFromLocationContext, applicationId, onPaymentSuccess, onPaymentDismiss };
    const result = obj.openBuyNitroPerkDetails(perk, obj);
  }, items1);
  const items2 = [buyNitroPlanSelection.selection.tier, tmp.sectionHeader, callback, onSelectNitroTier];
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.list, children: null };
  const callback1 = React.useCallback((item) => {
    item = item.item;
    if ("section-header" === item.kind) {
      let obj = { style: null, title: null, titleRequiresNitroHack: null, onPress: null };
      obj[0] = sectionHeader.sectionHeader;
      obj[1] = item.title;
      obj[2] = true === item.highlightNitro;
      obj[3] = function onPress() {
        return callback(closure_1_5.TIER_2);
      };
      let tmp6 = ref(onPaymentSuccess(onPaymentDismiss[16]), obj);
    } else {
      obj = { perk: null, selectedTier: null, onOpenDetails: null, start: null, end: null };
      obj[0] = item.perk;
      obj[1] = buyNitroPlanSelection.selection.tier;
      obj[2] = callback;
      ({ start: obj[3], end: obj[4] } = item);
      tmp6 = ref(onPaymentSuccess(onPaymentDismiss[17]), obj);
    }
    return tmp6;
  }, items2);
  obj2 = {
    ref: listRef,
    contentContainerStyle: tmp.listContent,
    data: listData,
    renderItem: callback1,
    keyExtractor(kind) {
      if ("section-header" === kind.kind) {
        let id = kind.id;
      } else {
        id = kind.perk.id;
      }
      return id;
    },
    getItemType(kind) {
      return kind.kind;
    },
    ListHeaderComponent: null,
    onScroll: null,
    scrollEventThrottle: 16,
    showsVerticalScrollIndicator: false
  };
  obj3 = { topInset: youBarSettingsCustomHeaderPaddingTop, onBackPress: null, selectedTier: null };
  const tmp20 = locationStackFromLocationContext;
  const tmp2Result1 = applicationId(onPaymentDismiss[13]);
  if (onClose == null) {
    onClose = () => nativeStackNavigation.pop();
  }
  obj3[1] = onClose;
  obj3[2] = buyNitroPlanSelection.selection.tier;
  const items3 = [closure_6(onPaymentSuccess(onPaymentDismiss[19]), obj3), ];
  const obj4 = { style: tmp.listHeader, children: null };
  let tmp19Result = initialLoadCompleted;
  if (initialLoadCompleted) {
    let oneofKind;
    if (promotionMarketingComponent != null) {
      oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
    }
    tmp19Result = "marketingPageBanner" === oneofKind;
  }
  if (tmp19Result) {
    const obj5 = { bannerFields: null, componentId: null, promotionId: null, analyticsPage: "Marketing Page Banner Tile", style: null, onPaymentSuccess: null, onPaymentDismiss: null };
    obj5[0] = promotionMarketingComponent.properties.properties.marketingPageBanner;
    ({ id: obj14[1], promotionId: obj14[2] } = promotionMarketingComponent);
    let disabled;
    if (isBuyNitroPurchaseBlocked) {
      disabled = tmp.disabled;
    }
    obj5[4] = disabled;
    obj5[5] = onPaymentSuccess;
    obj5[6] = onPaymentDismiss;
    tmp19Result = tmp19(tmp11(tmp3[20]), obj5);
    const tmp11Result = tmp11(tmp3[20]);
  }
  const obj6 = { children: null };
  const items4 = [tmp19Result, closure_6(onPaymentSuccess(onPaymentDismiss[21]), { planSelection: buyNitroPlanSelection }), closure_6(onPaymentSuccess(onPaymentDismiss[22]), {})];
  obj4[1] = items4;
  items3[1] = onSelectNitroTier(nativeStackNavigation, obj4);
  obj6[0] = items3;
  obj2[6] = onSelectNitroTier(tmp20, obj6);
  obj2[7] = onScroll;
  obj1[1] = closure_6(applicationId(onPaymentDismiss[18]).FlashList, obj2);
  const items5 = [closure_6(nativeStackNavigation, obj1), closure_6(onPaymentSuccess(onPaymentDismiss[23]), { planSelection: buyNitroPlanSelection, applicationId, onPaymentSuccess, onPaymentDismiss }), ];
  if (initialLoadCompleted) {
    initialLoadCompleted = tmp19(tmp2(tmp3[24]).BuyNitroTriggerPointEffect, {});
  }
  items5[2] = initialLoadCompleted;
  obj[1] = items5;
  return onSelectNitroTier(nativeStackNavigation, obj);
};