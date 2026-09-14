// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontGiftPurchaseSection.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
let useNativeCheckoutStore = fn(7527).useNativeCheckoutStore;
const AnalyticEvents = fn(1074).AnalyticEvents;
const GiftingOrigin = fn(1373).GiftingOrigin;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4636);
let closure_12 = createStyles.createStyles((arg0) => {
  const obj = { container: null, legalCopy: null };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj.container = {
    paddingBottom: nativeDefault.space.PX_12 + arg0,
    paddingTop: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_8,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  };
  const obj2 = {
    paddingBottom: nativeDefault.space.PX_12 + arg0,
    paddingTop: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_8,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  };
  obj.legalCopy = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/SocialLayerStorefrontGiftPurchaseSection.tsx",
);

export default function SocialLayerStorefrontGiftPurchaseSection(disabled) {
  const skuId = disabled.skuId;
  const sku = disabled.sku;
  const giftOptions = disabled.giftOptions;
  ({ giftingOrigin: _slicedToArray, analyticsLocations } = disabled);
  let recipient;
  useNativeCheckoutStore = undefined;
  closure_7 = undefined;
  c8 = undefined;
  let onPurchaseError;
  closure_11 = undefined;
  const tmp3 = closure_12(sku(giftOptions[10])().insets.bottom);
  let applicationId;
  if (sku != null) {
    applicationId = sku.applicationId;
  }
  const getOrFetchApplication = skuId(giftOptions[11]).useGetOrFetchApplication(applicationId);
  let obj = skuId(giftOptions[11]);
  const items = [closure_7];
  recipient = skuId(giftOptions[12]).useStateFromStores(items, () => UserStore.getUser(giftOptions.recipient_id));
  const tmp7 = useNativeCheckoutStore((analyticsFields) => analyticsFields.analyticsFields);
  useNativeCheckoutStore = tmp7;
  const tmp8 = useNativeCheckoutStore((setCheckoutFailed) => setCheckoutFailed.setCheckoutFailed);
  closure_7 = tmp8;
  const tmp4Result = skuId(giftOptions[12]);
  [tmp10, c8] = analyticsLocations.useState(false);
  analyticsLocations.useRef(false);
  const items1 = [tmp7, tmp8];
  onPurchaseError = analyticsLocations.useCallback(() => {
    if (ref.current) {
      tmp.current = false;
      AnalyticsUtilsDefault.track(AnalyticEvents.PAYMENT_FLOW_FAILED, closure_6);
      closure_7();
    }
    _undefined(false);
  }, items1);
  const tmp12 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  sku(giftOptions[14])(tmp12, giftOptions);
  const items2 = [giftOptions];
  const memo = analyticsLocations.useMemo(() => ({ isGift: true, options: giftOptions }), items2);
  let obj2 = {
    skuId,
    sku,
    giftParams: memo,
    analyticsLoadId: tmp7.load_id,
    analyticsLocations,
    orderId: null,
    analyticsData: null,
    onPurchaseComplete: null,
    onPurchaseError: null,
    onPurchasePending: null,
  };
  let id;
  let tmp9 = _slicedToArray(analyticsLocations.useState(false), 2);
  if (tmp12 != null) {
    id = tmp12.id;
  }
  obj2.orderId = id;
  obj2.analyticsData = tmp7;
  obj2.onPurchaseComplete = function onPurchaseComplete() {
    closure_9.current = false;
    if (obj.isIOS()) {
      AnalyticsUtilsDefault.track(AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, closure_6);
    }
    _undefined(false);
    let tmp9 = null == giftOptions.recipient_id;
    if (!tmp9) {
      tmp9 = _slicedToArray !== GiftingOrigin.USER_PROFILE_WISHLIST && tmp10 !== GiftingOrigin.DM_CHANNEL_WISHLIST;
      const tmp11 =
        _slicedToArray !== GiftingOrigin.USER_PROFILE_WISHLIST && tmp10 !== GiftingOrigin.DM_CHANNEL_WISHLIST;
    }
    if (!tmp9) {
      const obj4 = { type: "WISHLIST_GIFT_SENT", skuId, recipientId: giftOptions.recipient_id };
      DispatcherDefault.dispatch(obj4);
    }
    obj = PlatformUtils;
    const obj5 = { skuId, orbsReward: null, recipient: null, analyticsLocations: null };
    let orbsReward;
    if (sku != null) {
      orbsReward = sku.orbsReward;
    }
    obj5.orbsReward = orbsReward;
    obj5.recipient = recipient;
    obj5.analyticsLocations = analyticsLocations;
    const result =
      SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj5);
    result.then(SocialLayerStorefrontNativeActionCreators.closeSocialLayerStorefrontGiftModal);
    const tmpResult = SocialLayerStorefrontNativeActionCreators;
  };
  obj2.onPurchaseError = onPurchaseError;
  obj2.onPurchasePending = function onPurchasePending() {};
  closure_11 = sku(giftOptions[15])(obj2);
  const intl = tmp4(tmp2[19]).intl;
  const stringResult = intl.string(skuId(giftOptions[19]).t.ouo4FK);
  let obj3 = { style: tmp3.container, children: null };
  let obj4 = { style: tmp3.legalCopy, children: null };
  const tmp18 = closure_11;
  let tmpResult = sku(giftOptions[15]);
  const mobileFinePrintMessageForApplication = skuId(giftOptions[20]).getMobileFinePrintMessageForApplication(
    getOrFetchApplication,
    stringResult,
    { shouldAppendDisclaimer: true },
  );
  obj4.children = mobileFinePrintMessageForApplication.map((children, index) =>
    callback(skuId(giftOptions[21]).Text, { variant: "text-xs/normal", color: "text-muted", children }, index),
  );
  const items3 = [
    onPurchaseError(recipient, obj4),
    onPurchaseError(skuId(giftOptions[22]).Button, {
      variant: "active",
      disabled: disabled.isPurchaseDisabled,
      loading: tmp10,
      text: stringResult,
      onPress() {
        closure_9.current = true;
        _undefined(true);
        closure_11().catch(callback);
      },
    }),
  ];
  obj3.children = items3;
  return tmp18(recipient, obj3);
}
