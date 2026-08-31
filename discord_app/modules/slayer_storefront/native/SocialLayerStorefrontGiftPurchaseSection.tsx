// === Module 10700: SocialLayerStorefrontGiftPurchaseSection ===

// Module 10700 (SocialLayerStorefrontGiftPurchaseSection)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { useNativeCheckoutStore } from "context" /* 7137 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { GiftingOrigin } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, legalCopy: null };
  obj = { paddingBottom: ThemesDefault.space.PX_12 + arg0, paddingTop: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_TOP_HIGH);
  obj[0] = obj;
  obj = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_4 };
  obj[1] = obj;
  return obj;
});
let result = require("set").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftPurchaseSection.tsx");

export default function SocialLayerStorefrontGiftPurchaseSection(disabled) {
  const skuId = disabled.skuId;
  const sku = disabled.sku;
  const giftOptions = disabled.giftOptions;
  ({ giftingOrigin: closure_3, analyticsLocations } = disabled);
  closure_5 = undefined;
  useNativeCheckoutStore = undefined;
  closure_7 = undefined;
  c8 = undefined;
  closure_9 = undefined;
  let callback;
  closure_11 = undefined;
  const tmp3 = callback2(sku(giftOptions[10])().insets.bottom);
  let obj = skuId(giftOptions[11]);
  let applicationId;
  if (sku != null) {
    applicationId = sku.applicationId;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  let tmp4Result = tmp4(tmp2[12]);
  const items = [closure_7];
  closure_5 = tmp4Result.useStateFromStores(items, () => user.getUser(giftOptions.recipient_id));
  const tmp7 = useNativeCheckoutStore((analyticsFields) => analyticsFields.analyticsFields);
  useNativeCheckoutStore = tmp7;
  const tmp8 = useNativeCheckoutStore((setCheckoutFailed) => setCheckoutFailed.setCheckoutFailed);
  closure_7 = tmp8;
  [tmp10, c8] = callback(analyticsLocations.useState(false), 2);
  closure_9 = analyticsLocations.useRef(false);
  const items1 = [tmp7, tmp8];
  callback = analyticsLocations.useCallback(() => {
    if (ref.current) {
      tmp.current = false;
      sku(giftOptions[13]).track(_undefined.PAYMENT_FLOW_FAILED, closure_6);
      user();
      const obj = sku(giftOptions[13]);
    }
    _undefined(false);
  }, items1);
  const tmp12 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  sku(giftOptions[14])(tmp12, giftOptions);
  const items2 = [giftOptions];
  const memo = analyticsLocations.useMemo(() => ({ isGift: true, options: giftOptions }), items2);
  obj = { skuId, sku, giftParams: memo, analyticsLoadId: tmp7.load_id, analyticsLocations, orderId: null, analyticsData: null, onPurchaseComplete: null, onPurchaseError: null, onPurchasePending: null };
  let id;
  let tmp9 = callback(analyticsLocations.useState(false), 2);
  if (tmp12 != null) {
    id = tmp12.id;
  }
  obj[5] = id;
  obj[6] = tmp7;
  obj[7] = function onPurchaseComplete() {
    ref.current = false;
    let obj = skuId(giftOptions[16]);
    if (obj.isIOS()) {
      sku(tmp2[13]).track(_undefined.PAYMENT_FLOW_SUCCEEDED, closure_6);
      const obj2 = sku(tmp2[13]);
    }
    _undefined(false);
    let tmp9 = null == giftOptions.recipient_id;
    if (!tmp9) {
      tmp9 = closure_3 !== ref.USER_PROFILE_WISHLIST && tmp10 !== ref.DM_CHANNEL_WISHLIST;
      const tmp11 = closure_3 !== ref.USER_PROFILE_WISHLIST && tmp10 !== ref.DM_CHANNEL_WISHLIST;
    }
    if (!tmp9) {
      obj = { type: "WISHLIST_GIFT_SENT", skuId: null, recipientId: null };
      obj[1] = skuId;
      obj[2] = giftOptions.recipient_id;
      sku(tmp2[17]).dispatch(obj);
      const obj3 = sku(tmp2[17]);
    }
    obj = { skuId, orbsReward: null, recipient: null, analyticsLocations: null };
    let orbsReward;
    if (sku != null) {
      orbsReward = sku.orbsReward;
    }
    obj[1] = orbsReward;
    obj[2] = closure_5;
    obj[3] = analyticsLocations;
    const result = skuId(giftOptions[18]).openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj);
    result.then(skuId(giftOptions[18]).closeSocialLayerStorefrontGiftModal);
  };
  obj[8] = callback;
  obj[9] = function onPurchasePending() {

  };
  closure_11 = sku(giftOptions[15])(obj);
  const intl = tmp4(tmp2[19]).intl;
  const stringResult = intl.string(skuId(giftOptions[19]).t.ouo4FK);
  obj = { style: tmp3.container, children: null };
  obj1 = { style: tmp3.legalCopy, children: null };
  tmp4Result = tmp4(tmp2[20]);
  const mobileFinePrintMessageForApplication = tmp4Result.getMobileFinePrintMessageForApplication(getOrFetchApplication, stringResult, { shouldAppendDisclaimer: true });
  obj1[1] = mobileFinePrintMessageForApplication.map((children) => callback(skuId(giftOptions[21]).Text, { variant: "text-xs/normal", color: "text-muted", children }, arg1));
  const items3 = [
    callback(closure_5, obj1),
    callback(skuId(giftOptions[22]).Button, {
      variant: "active",
      disabled: disabled.isPurchaseDisabled,
      loading: tmp10,
      text: stringResult,
      onPress() {
        closure_9.current = true;
        _undefined(true);
        callback().catch(callback);
      }
    })
  ];
  obj[1] = items3;
  return closure_11(closure_5, obj);
};