import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontGiftPurchaseSection.tsx
import _slicedToArray from "_slicedToArray";
import set from "set";
import { View } from "useSyncGiftOptionsToOrder";
import { useNativeCheckoutStore } from "context";
import mergeGuildAvatar from "mergeGuildAvatar";
import { AnalyticEvents } from "ME";
import { GiftingOrigin } from "GuildFeatures";
import jsxProd from "SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY";
import createCacheKey from "createCacheKey";

let c10;
let unpackModuleId;
const require = arg1;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, legalCopy: null };
  obj = { paddingBottom: Themes.space.PX_12 + arg0, paddingTop: Themes.space.PX_12, paddingHorizontal: Themes.space.PX_16, gap: Themes.space.PX_8, backgroundColor: Themes.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(Themes.shadows.SHADOW_TOP_HIGH);
  obj[0] = obj;
  obj = { display: "flex", flexDirection: "column", gap: Themes.space.PX_4 };
  obj[1] = obj;
  return obj;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftPurchaseSection.tsx");

export default function SocialLayerStorefrontGiftPurchaseSection(disabled) {
  let analyticsLocations;
  let _slicedToArray;
  const skuId = disabled.skuId;
  const sku = disabled.sku;
  const giftOptions = disabled.giftOptions;
  ({ giftingOrigin: _slicedToArray, analyticsLocations } = disabled);
  let closure_5;
  let useNativeCheckoutStore;
  let memo;
  let closure_8;
  let closure_9;
  let callback;
  let closure_11;
  const tmp3 = callback2(sku(giftOptions[10])().insets.bottom);
  let obj = skuId(giftOptions[11]);
  let applicationId;
  if (sku != null) {
    applicationId = sku.applicationId;
  }
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  let tmp4Result = tmp4(tmp2[12]);
  const items = [memo];
  closure_5 = tmp4Result.useStateFromStores(items, () => memo.getUser(giftOptions.recipient_id));
  const tmp7 = sku(giftOptions[13])(() => skuId(giftOptions[14]).v4());
  useNativeCheckoutStore = tmp7;
  let obj2 = analyticsLocations;
  const items1 = [analyticsLocations, skuId, , , , ];
  let type;
  if (sku != null) {
    type = sku.type;
  }
  items1[2] = type;
  let productLine;
  if (sku != null) {
    productLine = sku.productLine;
  }
  items1[3] = productLine;
  let applicationId1;
  if (sku != null) {
    applicationId1 = sku.applicationId;
  }
  items1[4] = applicationId1;
  items1[5] = tmp7;
  memo = analyticsLocations.useMemo(() => {
    const obj = { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: skuId, sku_type: null, sku_product_line: null, application_id: null, load_id: null };
    let type;
    if (sku != null) {
      type = tmp.type;
    }
    obj[4] = type;
    let productLine;
    if (sku != null) {
      productLine = tmp.productLine;
    }
    obj[5] = productLine;
    let applicationId;
    if (sku != null) {
      applicationId = tmp.applicationId;
    }
    obj[6] = applicationId;
    obj[7] = c6;
    return obj;
  }, items1);
  const tmp12 = callback(obj2.useState(false), 2);
  closure_8 = tmp12[1];
  closure_9 = obj2.useRef("not_started");
  tmp4Result = tmp4(tmp2[15]);
  const unmountEffect = tmp4Result.useUnmountEffect(() => {
    if ("pending" === closure_9.current) {
      sku(giftOptions[16]).track(lib.PAYMENT_FLOW_CANCELED, memo);
      const obj = sku(giftOptions[16]);
    }
  });
  const items2 = [memo];
  callback = obj2.useCallback(() => {
    if ("pending" === closure_9.current) {
      tmp.current = "failed";
      sku(giftOptions[16]).track(lib.PAYMENT_FLOW_FAILED, memo);
      const obj = sku(giftOptions[16]);
    }
    lib(false);
  }, items2);
  const tmp15 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  sku(giftOptions[17])(tmp15, giftOptions);
  const items3 = [giftOptions];
  const memo1 = obj2.useMemo(() => ({ isGift: true, options: giftOptions }), items3);
  obj = { skuId, sku, giftParams: memo1, analyticsLoadId: tmp7, analyticsLocations, orderId: null, analyticsData: null, onPurchaseComplete: null, onPurchaseError: null, onPurchasePending: null };
  let id;
  if (tmp15 != null) {
    id = tmp15.id;
  }
  obj[5] = id;
  obj[6] = memo;
  obj[7] = function onPurchaseComplete() {
    closure_9.current = "succeeded";
    let obj = skuId(giftOptions[19]);
    if (obj.isIOS()) {
      sku(tmp2[16]).track(lib.PAYMENT_FLOW_SUCCEEDED, memo);
      const obj2 = sku(tmp2[16]);
    }
    lib(false);
    let tmp9 = null == giftOptions.recipient_id;
    if (!tmp9) {
      tmp9 = _slicedToArray !== closure_9.USER_PROFILE_WISHLIST && tmp10 !== closure_9.DM_CHANNEL_WISHLIST;
      const tmp11 = _slicedToArray !== closure_9.USER_PROFILE_WISHLIST && tmp10 !== closure_9.DM_CHANNEL_WISHLIST;
    }
    if (!tmp9) {
      obj = { type: "WISHLIST_GIFT_SENT", skuId: null, recipientId: null };
      obj[1] = skuId;
      obj[2] = giftOptions.recipient_id;
      sku(tmp2[20]).dispatch(obj);
      const obj3 = sku(tmp2[20]);
    }
    obj = { skuId, orbsReward: null, recipient: null, analyticsLocations: null };
    let orbsReward;
    if (sku != null) {
      orbsReward = sku.orbsReward;
    }
    obj[1] = orbsReward;
    obj[2] = closure_5;
    obj[3] = analyticsLocations;
    const result = skuId(giftOptions[21]).openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj);
    result.then(skuId(giftOptions[21]).closeSocialLayerStorefrontGiftModal);
  };
  obj[8] = callback;
  obj[9] = function onPurchasePending() {

  };
  closure_11 = sku(giftOptions[18])(obj);
  const intl = tmp4(tmp2[22]).intl;
  const stringResult = intl.string(skuId(giftOptions[22]).t.ouo4FK);
  obj = { style: tmp3.container, children: null };
  const obj1 = { style: tmp3.legalCopy, children: null };
  const tmp21 = closure_11;
  const tmpResult = sku(giftOptions[18]);
  const mobileFinePrintMessageForApplication = skuId(giftOptions[23]).getMobileFinePrintMessageForApplication(getOrFetchApplication, stringResult, { shouldAppendDisclaimer: true });
  obj1[1] = mobileFinePrintMessageForApplication.map((children) => callback(skuId(giftOptions[24]).Text, { variant: "text-xs/normal", color: "text-muted", children }, arg1));
  const items4 = [callback(closure_5, obj1), ];
  obj2 = {
    variant: "active",
    disabled: disabled.isPurchaseDisabled,
    loading: tmp12[0],
    text: stringResult,
    onPress() {
      closure_9.current = "pending";
      sku(giftOptions[16]).track(lib.PAYMENT_FLOW_STARTED, memo);
      lib(true);
      const obj = sku(giftOptions[16]);
      callback().catch(callback);
    }
  };
  items4[1] = callback(skuId(giftOptions[25]).Button, obj2);
  obj[1] = items4;
  return tmp21(closure_5, obj);
};