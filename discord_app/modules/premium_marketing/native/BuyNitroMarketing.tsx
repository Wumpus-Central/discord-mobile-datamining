// discord_app/modules/premium_marketing/native/BuyNitroMarketing.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import BuyNitroPerkDetails from "components/BuyNitroPerkDetails.tsx";
import BuyNitroSectionHeaderDefault from "components/BuyNitroSectionHeader.tsx";
import BuyNitroPerkDefault from "components/BuyNitroPerk.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  list: null,
  listContent: null,
  listHeader: null,
  sectionHeader: null,
  disabled: null,
};
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.container = createStyles;
createStyles.list = { flex: 1 };
createStyles.listContent = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
createStyles.listHeader = { gap: nativeDefault.space.PX_24 };
let obj2 = { gap: nativeDefault.space.PX_24 };
createStyles.sectionHeader = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
createStyles.disabled = { pointerEvents: "none" };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium_marketing/native/BuyNitroMarketing.tsx");

export default function BuyNitroMarketing(onPaymentDismiss) {
  ({ onClose, applicationId } = onPaymentDismiss);
  ({ initialLoadCompleted, initialTier, onPaymentSuccess } = onPaymentDismiss);
  onPaymentDismiss = onPaymentDismiss.onPaymentDismiss;
  let buyNitroPlanSelection;
  let ref;
  let onSelectNitroTier;
  let locationStackFromLocationContext;
  let onOpenDetails;
  const tmp = onOpenDetails();
  noop = tmp;
  let obj = applicationId(onPaymentDismiss[6]);
  const youBarSettingsCustomHeaderPaddingTop = obj.useYouBarSettingsCustomHeaderPaddingTop();
  let obj1 = applicationId(onPaymentDismiss[7]);
  const nativeStackNavigation = obj1.useNativeStackNavigation();
  let obj2 = applicationId(onPaymentDismiss[8]);
  const buyNitroMarketingLifecycleHooks = obj2.useBuyNitroMarketingLifecycleHooks(
    nativeStackNavigation,
    initialLoadCompleted,
  );
  let obj3 = applicationId(onPaymentDismiss[9]);
  let tmp7;
  if (null != initialTier) {
    obj = { tier: initialTier, productId: "a" };
    tmp7 = obj;
  }
  buyNitroPlanSelection = obj3.useBuyNitroPlanSelection(tmp7);
  ref = noop.useRef(buyNitroPlanSelection);
  const items = [buyNitroPlanSelection];
  const effect = noop.useEffect(() => {
    closure_6.current = buyNitroPlanSelection;
  }, items);
  let tmp2Result = tmp2(tmp3[10]);
  const isBuyNitroPurchaseBlocked = tmp2Result.useIsBuyNitroPurchaseBlocked();
  const tmp12 = onPaymentSuccess(onPaymentDismiss[11])(buyNitroPlanSelection);
  onSelectNitroTier = tmp12.onSelectNitroTier;
  ({ onScroll, listData, listRef } = tmp12);
  tmp2Result = tmp2(tmp3[12]);
  locationStackFromLocationContext = tmp2Result.useLocationStackFromLocationContext();
  const promotionMarketingComponent = applicationId(onPaymentDismiss[13]).usePromotionMarketingComponent(
    tmp2(tmp3[14]).MarketingComponentType.MARKETING_PAGE_BANNER,
  );
  const items1 = [locationStackFromLocationContext, applicationId, onPaymentSuccess, onPaymentDismiss];
  onOpenDetails = noop.useCallback((perk) => {
    const obj = {
      selectedTier: ref.current.selection.tier,
      selectedProductId: ref.current.selection.productId,
      analyticsLocations: locationStackFromLocationContext,
      applicationId,
      onPaymentSuccess,
      onPaymentDismiss,
    };
    const result = obj.openBuyNitroPerkDetails(perk, obj);
  }, items1);
  const items2 = [buyNitroPlanSelection.selection.tier, tmp.sectionHeader, onOpenDetails, onSelectNitroTier];
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.list, children: null };
  const callback1 = noop.useCallback((item) => {
    item = item.item;
    if ("section-header" === item.kind) {
      let obj = {
        style: sectionHeader.sectionHeader,
        title: item.title,
        titleRequiresNitroHack: true === item.highlightNitro,
        onPress() {
          return onSelectNitroTier(buyNitroPlanSelection.TIER_2);
        },
      };
      let tmp6 = timestampProducer(BuyNitroSectionHeaderDefault, obj);
    } else {
      obj = {
        perk: item.perk,
        selectedTier: buyNitroPlanSelection.selection.tier,
        onOpenDetails,
        start: null,
        end: null,
      };
      ({ start: obj.start, end: obj.end } = item);
      tmp6 = timestampProducer(BuyNitroPerkDefault, obj);
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
    showsVerticalScrollIndicator: false,
  };
  obj3 = { topInset: youBarSettingsCustomHeaderPaddingTop, onBackPress: null, selectedTier: null };
  const tmp20 = locationStackFromLocationContext;
  const tmp2Result1 = applicationId(onPaymentDismiss[13]);
  if (onClose == null) {
    onClose = () => nativeStackNavigation.pop();
  }
  obj3.onBackPress = onClose;
  obj3.selectedTier = buyNitroPlanSelection.selection.tier;
  const items3 = [ref(onPaymentSuccess(onPaymentDismiss[19]), obj3)];
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
    const obj5 = {
      bannerFields: promotionMarketingComponent.properties.properties.marketingPageBanner,
      componentId: null,
      promotionId: null,
      analyticsPage: "Marketing Page Banner Tile",
      style: null,
      onPaymentSuccess: null,
      onPaymentDismiss: null,
    };
    ({ id: obj14.componentId, promotionId: obj14.promotionId } = promotionMarketingComponent);
    let disabled;
    if (isBuyNitroPurchaseBlocked) {
      disabled = tmp.disabled;
    }
    obj5.style = disabled;
    obj5.onPaymentSuccess = onPaymentSuccess;
    obj5.onPaymentDismiss = onPaymentDismiss;
    tmp19Result = tmp19(tmp11(tmp3[20]), obj5);
    const tmp11Result = tmp11(tmp3[20]);
  }
  const obj6 = { children: null };
  const items4 = [
    tmp19Result,
    ref(onPaymentSuccess(onPaymentDismiss[21]), { planSelection: buyNitroPlanSelection }),
    ref(onPaymentSuccess(onPaymentDismiss[22]), {}),
  ];
  obj4.children = items4;
  items3[1] = onSelectNitroTier(nativeStackNavigation, obj4);
  obj6.children = items3;
  obj2.ListHeaderComponent = onSelectNitroTier(tmp20, obj6);
  obj2.onScroll = onScroll;
  obj1.children = ref(applicationId(onPaymentDismiss[18]).FlashList, obj2);
  const items5 = [
    ref(nativeStackNavigation, obj1),
    ref(onPaymentSuccess(onPaymentDismiss[23]), {
      planSelection: buyNitroPlanSelection,
      applicationId,
      onPaymentSuccess,
      onPaymentDismiss,
    }),
  ];
  if (initialLoadCompleted) {
    initialLoadCompleted = tmp19(tmp2(tmp3[24]).BuyNitroTriggerPointEffect, {});
  }
  items5[2] = initialLoadCompleted;
  obj.children = items5;
  return onSelectNitroTier(nativeStackNavigation, obj);
}
