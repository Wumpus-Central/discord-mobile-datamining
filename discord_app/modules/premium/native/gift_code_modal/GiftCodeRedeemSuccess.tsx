// discord_app/modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx
import _slicedToArray from "_slicedToArray";
import BundleStaticPreviewContent from "BundleStaticPreviewContent";
import get_ActivityIndicator from "SlayerStorefrontItemCard";
import addSku from "addSku";
import jsxProd from "Button";
import createCacheKey from "createCacheKey";

let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, body: null, nameplateContainer: null, bundleContainer: null, bundlePreview: null, header: null, message: null, footer: null, gameItemCard: null };
createCacheKey = { flex: 1, justifyContent: "space-between", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 };
createCacheKey[2] = { width: "100%", paddingTop: require("Themes").space.PX_24 };
let obj1 = { width: "100%", paddingTop: require("Themes").space.PX_24 };
createCacheKey[3] = { width: "100%", alignItems: "center", paddingTop: require("Themes").space.PX_24 };
createCacheKey[4] = { alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" };
createCacheKey[5] = { marginTop: 32, textAlign: "center" };
createCacheKey[6] = { marginTop: 8, textAlign: "center" };
createCacheKey[7] = { paddingHorizontal: 24 };
createCacheKey[8] = { marginTop: 20 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { width: "100%", alignItems: "center", paddingTop: require("Themes").space.PX_24 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx");

export default function GiftCodeRedeemSuccess(giftCode) {
  let c3;
  let canUseNow;
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let handleUseNow;
  let tmp15;
  giftCode = giftCode.giftCode;
  const user = giftCode.user;
  let dependencyMap;
  let callback;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = giftCode(589);
  const items = [addSku];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.get(giftCode.skuId));
  let obj1 = giftCode(10419);
  const getOrFetchSubscriptionPlan = obj1.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  let obj2 = giftCode(5734);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(giftCode.applicationId);
  let obj3 = giftCode(10114);
  let obj4 = giftCode(7013);
  let skuId = null;
  if (obj4.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = obj3.useFetchCollectiblesProduct(skuId, true).product;
  let first;
  if (product != null) {
    first = product.items[0];
  }
  let type;
  if (product != null) {
    type = product.type;
  }
  let tmp2Result = tmp2(9374);
  let tmp10 = product;
  if (product == null) {
    obj = { items: null };
    obj[0] = [];
    tmp10 = obj;
  }
  const shopProductItems = tmp2Result.useShopProductItems(tmp10);
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  tmp2Result = tmp2(10131);
  let tmp12 = product;
  if (product == null) {
    obj = { skuId: "", type: null, items: null };
    obj[1] = tmp2(1930).CollectiblesItemType.BUNDLE;
    obj[2] = [];
    tmp12 = obj;
  }
  handleUseNow = tmp2Result.useHandleUseNow({ product: tmp12 });
  const isApplying = handleUseNow.isApplying;
  ({ handleUseNow, canUseNow } = handleUseNow);
  [tmp15, c3] = callback(React.useState(), 2);
  callback = React.useCallback((nativeEvent) => {
    let giftCode;
    let user;
    ({ width: giftCode, height: user } = nativeEvent.nativeEvent.layout);
    _undefined2((arg0) => {
      let size = arg0;
      if (null != arg0) {
        return size;
      }
      size = { width: closure_0, height: closure_1 };
    });
  }, []);
  obj1 = { bottom: true, style: tmp.container, children: null };
  obj2 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
  if (null == first) {
    if (null != getOrFetchApplication) {
      if (tmp2Result1.isGameItemSKU(stateFromStores)) {
        obj3 = { style: null, children: null };
        obj3[0] = tmp.gameItemCard;
        obj4 = { sku: null };
        obj4[0] = stateFromStores;
        obj3[1] = tmp24(user(9398), obj4);
        let tmp24Result = tmp24(closure_5, obj3);
      } else {
        const obj5 = { game: null, size: null, skuId: null };
        obj5[0] = getOrFetchApplication;
        obj5[1] = tmp2(5738).GameIconSizes.LARGE;
        obj5[2] = giftCode.skuId;
        tmp24Result = tmp24(user(5738), obj5);
        const tmp26 = user(5738);
      }
      tmp2Result1 = tmp2(5848);
    }
  }
  if (type === giftCode(1930).CollectiblesItemType.BUNDLE) {
    if (null != product) {
      const obj6 = { style: null, children: null };
      obj6[0] = tmp.bundleContainer;
      const obj7 = { style: null, onLayout: null, children: null };
      obj7[0] = tmp.bundlePreview;
      obj7[1] = callback;
      let tmp20Result = null != tmp15;
      if (tmp20Result) {
        const obj8 = { deco: null, pfx: null, nameplate: null, previewAssets: null, disableStaticBackground: true, size: "large", targetSize: null, exposureLocation: "GiftCodeRedeemSuccess" };
        obj8[0] = firstAvatarDecoration;
        obj8[1] = firstProfileEffect;
        obj8[2] = firstNameplate;
        obj8[3] = product.previewAssets;
        obj8[6] = tmp15;
        tmp20Result = tmp20(user(9375), obj8);
      }
      obj7[2] = tmp20Result;
      obj6[1] = callback2(closure_5, obj7);
      tmp20Result = tmp20(tmp21, obj6);
    }
    const items1 = [tmp20Result, , ];
    if (null == stateFromStores) {
      const obj9 = { variant: "heading-xl/bold", style: null, accessibilityRole: "header", children: null };
      obj9[1] = tmp.header;
      const intl4 = tmp2(1236).intl;
      obj9[3] = intl4.string(tmp2(1236).t["+BNMcF"]);
      let tmp31 = callback2(tmp2(4299).Text, obj9);
    } else {
      if (tmp2Result2.isGameItemSKU(stateFromStores)) {
        const obj10 = { variant: "heading-xl/bold", style: null, accessibilityRole: "header", children: null };
        obj10[1] = tmp.header;
        const intl3 = tmp2(1236).intl;
        obj10[3] = intl3.string(tmp2(1236).t["5glWta"]);
        tmp31 = callback2(tmp2(4299).Text, obj10);
      } else {
        if (giftCode.isSubscription) {
          if (null != getOrFetchSubscriptionPlan) {
            const obj11 = { variant: "heading-xl/bold", style: null, accessibilityRole: "header", children: null };
            obj11[1] = tmp.header;
            const intl2 = tmp2(1236).intl;
            const obj12 = { skuName: null };
            obj12[0] = stateFromStores.name;
            obj11[3] = intl2.format(tmp2(1236).t["1C2BG/"], obj12);
            tmp31 = callback2(tmp2(4299).Text, obj11);
          }
        }
        if (null != first) {
          const obj13 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: null, accessibilityRole: "header", children: null };
          obj13[2] = tmp.header;
          const intl = tmp2(1236).intl;
          obj13[4] = intl.string(tmp2(1236).t.IMffmm);
          tmp31 = callback2(tmp2(4299).Text, obj13);
        }
      }
      tmp2Result2 = tmp2(5848);
    }
    items1[1] = tmp31;
    if (tmp2Result3.isGameItemSKU(stateFromStores)) {
      if (null != getOrFetchApplication) {
        const obj14 = { variant: "text-md/medium", style: null, children: null };
        obj14[1] = tmp.message;
        const intl7 = tmp2(1236).intl;
        let str2;
        if (stateFromStores != null) {
          str2 = stateFromStores.name;
        }
        if (str2 == null) {
          str2 = "";
        }
        const obj15 = { skuName: null, applicationName: null };
        obj15[0] = str2;
        obj15[1] = getOrFetchApplication.name;
        obj14[2] = intl7.formatToPlainString(tmp2(1236).t.W2znvX, obj15);
        let tmp36Result = tmp42(tmp2(4299).Text, obj14);
        let tmp36 = tmp42;
      }
      items1[2] = tmp36Result;
      obj2[2] = items1;
      const items2 = [tmp17(tmp18, obj2), ];
      const obj16 = { style: null, children: null };
      obj16[0] = tmp.footer;
      if (null != first) {
        if (canUseNow) {
          const obj17 = { text: null, size: "md", loading: null, disabled: null, onPress: null };
          const intl9 = tmp2(1236).intl;
          obj17[0] = intl9.string(tmp2(1236).t.MAS7uK);
          obj17[2] = isApplying;
          obj17[3] = isApplying;
          obj17[4] = handleUseNow;
          let obj18 = obj17;
        }
        obj16[1] = tmp36(tmp44, obj18);
        items2[1] = tmp36(tmp43, obj16);
        obj1[2] = items2;
        return tmp17(tmp2(5328).SafeAreaPaddingView, obj1);
      }
      obj18 = { text: null, size: "md", onPress: null };
      const intl8 = tmp2(1236).intl;
      obj18[0] = intl8.string(tmp2(1236).t["NX+WJN"]);
      obj18[2] = user(4509).pop;
      tmp43 = closure_5;
    }
    if (giftCode.isSubscription) {
      if (null != getOrFetchSubscriptionPlan) {
        const obj19 = { variant: "text-md/medium", style: null, children: null };
        obj19[1] = tmp.message;
        obj19[2] = tmp2(4538).getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan);
        tmp36Result = callback2(tmp2(4299).Text, obj19);
        tmp36 = callback2;
        const tmp2Result4 = tmp2(4538);
      }
    }
    tmp36 = callback2;
    const obj20 = { variant: "text-md/medium", style: null, children: null };
    obj20[1] = tmp.message;
    if (null != first) {
      let name;
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      if (null != name) {
        const intl6 = tmp2(1236).intl;
        const obj21 = { itemName: null };
        obj21[0] = stateFromStores.name;
        let formatToPlainStringResult = intl6.formatToPlainString(tmp2(1236).t["4kp0AB"], obj21);
      }
      obj20[2] = formatToPlainStringResult;
      tmp36Result = tmp36(tmp37, obj20);
    }
    const intl5 = tmp2(1236).intl;
    formatToPlainStringResult = intl5.string(tmp2(1236).t["5ayf7w"]);
    tmp2Result3 = tmp2(5848);
  }
  const tmp14 = callback(React.useState(), 2);
  tmp18 = closure_6;
  const match = giftCode(4503).match(first);
  const str = giftCode(4503);
  const obj22 = { type: giftCode(1930).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match.with({ type: giftCode(1930).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
    let obj = user;
    let avatarSource;
    if (user != null) {
      avatarSource = obj.getAvatarSource(null, true, tmp2(tmp3[21]).AVATAR_SIZE_MAP[tmp2(undefined, tmp3[21]).AvatarSizes.GIFT_SUCCESS]);
    }
    obj = { source: avatarSource, avatarDecoration, size: tmp2(tmp3[21]).AvatarSizes.GIFT_SUCCESS, animate: true };
    return outer1_8(giftCode(_undefined[21]).Avatar, obj);
  });
  const obj23 = { type: giftCode(1930).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with({ type: giftCode(1930).CollectiblesItemType.PROFILE_EFFECT }, (profileEffect) => outer1_8(user(_undefined[22]), { user, profileEffect }));
  const obj24 = { type: giftCode(1930).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with({ type: giftCode(1930).CollectiblesItemType.PROFILE_FRAME }, (profileFrame) => outer1_8(user(_undefined[23]), { user, profileFrame }));
  const obj25 = { type: giftCode(1930).CollectiblesItemType.NAMEPLATE };
  tmp20Result = withResult2.with({ type: giftCode(1930).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
    obj = { style: _undefined.nameplateContainer, children: outer1_8(giftCode(_undefined[24]).NameplatePreview, obj) };
    obj = { user, nameplate };
    return outer1_8(outer1_5, obj);
  }).otherwise(() => outer1_8(user(_undefined[25]), { giftStyle: giftCode.giftStyle }));
};