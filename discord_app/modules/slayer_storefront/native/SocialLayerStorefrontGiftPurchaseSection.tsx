// === Module 11003: SocialLayerStorefrontGiftPurchaseSection ===

// Module 11003 (SocialLayerStorefrontGiftPurchaseSection)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10797 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
let useNativeCheckoutStore = fn(7424).useNativeCheckoutStore;
const AnalyticEvents = fn(1074).AnalyticEvents;
const GiftingOrigin = fn(1373).GiftingOrigin;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles((arg0) => {
  let obj = { container: null, legalCopy: null };
  obj = { paddingBottom: nativeDefault.space.PX_12 + arg0, paddingTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj.container = obj;
  obj = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
  obj.legalCopy = obj;
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftPurchaseSection.tsx");

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
  let obj = skuId(giftOptions[11]);
  let applicationId;
  if (sku != null) {
    applicationId = sku.applicationId;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  let tmp4Result = tmp4(tmp2[12]);
  const items = [closure_7];
  recipient = tmp4Result.useStateFromStores(items, () => UserStore.getUser(giftOptions.recipient_id));
  const tmp7 = useNativeCheckoutStore((analyticsFields) => analyticsFields.analyticsFields);
  useNativeCheckoutStore = tmp7;
  const tmp8 = useNativeCheckoutStore((setCheckoutFailed) => setCheckoutFailed.setCheckoutFailed);
  closure_7 = tmp8;
  [tmp10, c8] = _slicedToArray(analyticsLocations.useState(false), 2);
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
  obj = { skuId, sku, giftParams: memo, analyticsLoadId: tmp7.load_id, analyticsLocations, orderId: null, analyticsData: null, onPurchaseComplete: null, onPurchaseError: null, onPurchasePending: null };
  let id;
  let tmp9 = _slicedToArray(analyticsLocations.useState(false), 2);
  if (tmp12 != null) {
    id = tmp12.id;
  }
  obj.orderId = id;
  obj.analyticsData = tmp7;
  obj.onPurchaseComplete = function onPurchaseComplete() {
    closure_9.current = false;
    let obj = PlatformUtils;
    if (obj.isIOS()) {
      AnalyticsUtilsDefault.track(AnalyticEvents.PAYMENT_FLOW_SUCCEEDED, closure_6);
    }
    _undefined(false);
    let tmp9 = null == giftOptions.recipient_id;
    if (!tmp9) {
      tmp9 = _slicedToArray !== GiftingOrigin.USER_PROFILE_WISHLIST && tmp10 !== GiftingOrigin.DM_CHANNEL_WISHLIST;
      const tmp11 = _slicedToArray !== GiftingOrigin.USER_PROFILE_WISHLIST && tmp10 !== GiftingOrigin.DM_CHANNEL_WISHLIST;
    }
    if (!tmp9) {
      obj = { type: "WISHLIST_GIFT_SENT", skuId, recipientId: giftOptions.recipient_id };
      DispatcherDefault.dispatch(obj);
    }
    obj = { skuId, orbsReward: null, recipient: null, analyticsLocations: null };
    let orbsReward;
    if (sku != null) {
      orbsReward = sku.orbsReward;
    }
    obj.orbsReward = orbsReward;
    obj.recipient = recipient;
    obj.analyticsLocations = analyticsLocations;
    const result = SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj);
    result.then(SocialLayerStorefrontNativeActionCreators.closeSocialLayerStorefrontGiftModal);
    const tmpResult = SocialLayerStorefrontNativeActionCreators;
  };
  obj.onPurchaseError = onPurchaseError;
  obj.onPurchasePending = function onPurchasePending() {

  };
  closure_11 = sku(giftOptions[15])(obj);
  const intl = tmp4(tmp2[19]).intl;
  const stringResult = intl.string(skuId(giftOptions[19]).t.ouo4FK);
  obj = { style: tmp3.container, children: null };
  const obj1 = { style: tmp3.legalCopy, children: null };
  tmp4Result = tmp4(tmp2[20]);
  const mobileFinePrintMessageForApplication = tmp4Result.getMobileFinePrintMessageForApplication(getOrFetchApplication, stringResult, { shouldAppendDisclaimer: true });
  obj1.children = mobileFinePrintMessageForApplication.map((children, index) => callback(skuId(giftOptions[21]).Text, { variant: "text-xs/normal", color: "text-muted", children }, index));
  const items3 = [
    onPurchaseError(recipient, obj1),
    onPurchaseError(skuId(giftOptions[22]).Button, {
      variant: "active",
      disabled: disabled.isPurchaseDisabled,
      loading: tmp10,
      text: stringResult,
      onPress() {
        closure_9.current = true;
        _undefined(true);
        closure_11().catch(callback);
      }
    })
  ];
  obj.children = items3;
  return closure_11(recipient, obj);
};