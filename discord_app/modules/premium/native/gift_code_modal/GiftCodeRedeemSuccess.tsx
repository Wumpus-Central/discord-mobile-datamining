// === Module 11807: GiftCodeRedeemSuccess ===

// Module 11807 (GiftCodeRedeemSuccess)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1186 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 8927 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 9332 */;
import NameplatePreview from "NameplatePreview" /* 9333 */;
import GiftBoxAnimationDefault from "GiftBoxAnimation" /* 11803 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SKUStore from "SKUStore" /* 6555 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4794);
let obj2 = { container: { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 }, nameplateContainer: null, bundleContainer: null, bundlePreview: null, header: null, message: null, footer: null, gameItemCard: null };
let obj3 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.nameplateContainer = { width: "100%", paddingTop: nativeDefault.space.PX_24 };
let obj4 = { width: "100%", paddingTop: nativeDefault.space.PX_24 };
obj2.bundleContainer = { width: "100%", alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
obj2.bundlePreview = { alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" };
obj2.header = { marginTop: 32, textAlign: "center" };
obj2.message = { marginTop: 8, textAlign: "center" };
obj2.footer = { paddingHorizontal: 24 };
obj2.gameItemCard = { marginTop: 20 };
let closure_10 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx");

export default function GiftCodeRedeemSuccess(giftCode) {
  giftCode = giftCode.giftCode;
  const user = giftCode.user;
  _slicedToArray = undefined;
  const tmp = closure_10();
  dependencyMap = tmp;
  items = [SKUStore];
  const stateFromStores = giftCode(504).useStateFromStores(items, () => SKUStore.get(giftCode.skuId));
  let obj = giftCode(504);
  const getOrFetchSubscriptionPlan = giftCode(11794).useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const obj2 = giftCode(11794);
  const getOrFetchApplication = giftCode(6745).useGetOrFetchApplication(giftCode.applicationId);
  const obj3 = giftCode(6745);
  const obj4 = giftCode(11798);
  let skuId = null;
  if (obj5.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = obj4.useFetchCollectiblesProduct(skuId, true).product;
  let first;
  if (product != null) {
    first = product.items[0];
  }
  let type;
  if (product != null) {
    type = product.type;
  }
  obj5 = giftCode(7967);
  let tmp10 = product;
  if (product == null) {
    const obj6 = { items: [] };
    tmp10 = obj6;
  }
  const shopProductItems = giftCode(8793).useShopProductItems(tmp10);
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  const tmp2Result = giftCode(8793);
  let tmp12 = product;
  if (product == null) {
    const obj7 = { skuId: "", type: tmp2(2112).CollectiblesItemType.BUNDLE, items: [] };
    tmp12 = obj7;
  }
  const handleUseNow1 = giftCode(9299).useHandleUseNow({ product: tmp12 });
  const isApplying = handleUseNow1.isApplying;
  ({ handleUseNow, canUseNow } = handleUseNow1);
  const tmp2Result7 = giftCode(9299);
  [tmp15, c3] = noop.useState();
  const callback = noop.useCallback((nativeEvent) => {
    ({ width: giftCode, height: user } = nativeEvent.nativeEvent.layout);
    _undefined((arg0) => {
      let size = arg0;
      if (null != arg0) {
        return size;
      }
      const size1 = { width, height };
      size = size1;
    });
  }, []);
  const obj8 = { bottom: true, style: tmp.container, children: null };
  const obj9 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
  if (null == first) {
    if (null != getOrFetchApplication) {
      if (tmp2Result8.isGameItemSKU(stateFromStores)) {
        const obj10 = { style: tmp.gameItemCard, children: null };
        const obj11 = { sku: stateFromStores };
        obj10.children = closure_8(user(8915), obj11);
        let tmp24Result = closure_8(closure_5, obj10);
      } else {
        const obj12 = { game: getOrFetchApplication, size: tmp2(7406).GameIconSizes.LARGE, skuId: giftCode.skuId };
        tmp24Result = closure_8(user(7406), obj12);
        const tmp26 = user(7406);
      }
      tmp2Result8 = tmp2(6728);
    }
  }
  if (type === giftCode(2112).CollectiblesItemType.BUNDLE) {
    if (null != product) {
      const obj13 = { style: tmp.bundleContainer, children: null };
      const obj14 = { style: tmp.bundlePreview, onLayout: callback, children: null };
      let tmp20Result = null != tmp15;
      if (tmp20Result) {
        const obj15 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp15 };
        tmp20Result = closure_8(user(8889), obj15);
      }
      obj14.children = tmp20Result;
      obj13.children = closure_8(closure_5, obj14);
      let tmp20Result2 = closure_8(closure_5, obj13);
    }
    const items1 = [tmp20Result2, , ];
    if (null == stateFromStores) {
      const obj16 = { variant: "heading-xl/semibold", style: tmp.header, accessibilityRole: "header", children: null };
      const intl4 = tmp2(1112).intl;
      obj16.children = intl4.string(tmp2(1112).t["+BNMcF"]);
      let tmp31 = closure_8(tmp2(5385).Text, obj16);
    } else {
      if (tmp2Result9.isGameItemSKU(stateFromStores)) {
        const obj17 = { variant: "heading-xl/semibold", style: tmp.header, accessibilityRole: "header", children: null };
        const intl3 = tmp2(1112).intl;
        obj17.children = intl3.string(tmp2(1112).t["5glWta"]);
        tmp31 = closure_8(tmp2(5385).Text, obj17);
      } else {
        if (giftCode.isSubscription) {
          if (null != getOrFetchSubscriptionPlan) {
            const obj18 = { variant: "heading-xl/semibold", style: tmp.header, accessibilityRole: "header", children: null };
            const intl2 = tmp2(1112).intl;
            const obj19 = { skuName: stateFromStores.name };
            obj18.children = intl2.format(tmp2(1112).t["1C2BG/"], obj19);
            tmp31 = closure_8(tmp2(5385).Text, obj18);
          }
        }
        if (null != first) {
          const obj20 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.header, accessibilityRole: "header", children: null };
          const intl = tmp2(1112).intl;
          obj20.children = intl.string(tmp2(1112).t.IMffmm);
          tmp31 = closure_8(tmp2(5385).Text, obj20);
        }
      }
      tmp2Result9 = tmp2(6728);
    }
    items1[1] = tmp31;
    if (tmp2Result10.isGameItemSKU(stateFromStores)) {
      if (null != getOrFetchApplication) {
        const obj21 = { variant: "body-md/medium", style: tmp.message, children: null };
        const intl8 = tmp2(1112).intl;
        let str2;
        if (stateFromStores != null) {
          str2 = stateFromStores.name;
        }
        if (str2 == null) {
          str2 = "";
        }
        const obj22 = { skuName: str2, applicationName: getOrFetchApplication.name };
        obj21.children = intl8.formatToPlainString(tmp2(1112).t.W2znvX, obj22);
        let tmp36Result = closure_8(tmp2(5385).Text, obj21);
        let tmp36 = closure_8;
      }
      items1[2] = tmp36Result;
      obj9.children = items1;
      const items2 = [closure_9(closure_6, obj9), ];
      const obj23 = { style: tmp.footer, children: null };
      if (null != first) {
        if (canUseNow) {
          const obj24 = { text: null, size: "md", loading: null, disabled: null, onPress: null };
          const intl10 = tmp2(1112).intl;
          obj24.text = intl10.string(tmp2(1112).t.MAS7uK);
          obj24.loading = isApplying;
          obj24.disabled = isApplying;
          obj24.onPress = handleUseNow;
          let obj25 = obj24;
        }
        obj23.children = tmp36(tmp46, obj25);
        items2[1] = tmp36(closure_5, obj23);
        obj8.children = items2;
        return closure_9(tmp2(6897).SafeAreaPaddingView, obj8);
      }
      obj25 = { text: null, size: "md", onPress: null };
      const intl9 = tmp2(1112).intl;
      obj25.text = intl9.string(tmp2(1112).t["NX+WJN"]);
      obj25.onPress = user(6310).pop;
    }
    tmp2Result10 = tmp2(6728);
    if (tmp2Result11.isPendingGiftSubscriptionCode(giftCode)) {
      const obj26 = { variant: "body-md/medium", style: tmp.message, children: null };
      const intl7 = tmp2(1112).intl;
      obj26.children = intl7.string(user(2789).fdrOGN);
      tmp36Result = closure_8(tmp2(5385).Text, obj26);
      tmp36 = closure_8;
    } else {
      if (giftCode.isSubscription) {
        if (null != getOrFetchSubscriptionPlan) {
          const obj27 = { variant: "body-md/medium", style: tmp.message, children: tmp2(6228).getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan) };
          tmp36Result = closure_8(tmp2(5385).Text, obj27);
          tmp36 = closure_8;
          const tmp2Result12 = tmp2(6228);
        }
      }
      tmp36 = closure_8;
      const obj28 = { variant: "body-md/medium", style: tmp.message, children: null };
      if (null != first) {
        let name;
        if (stateFromStores != null) {
          name = stateFromStores.name;
        }
        if (null != name) {
          const intl6 = tmp2(1112).intl;
          const obj29 = { itemName: stateFromStores.name };
          let formatToPlainStringResult = intl6.formatToPlainString(tmp2(1112).t["4kp0AB"], obj29);
        }
        obj28.children = formatToPlainStringResult;
        tmp36Result = tmp36(tmp37, obj28);
      }
      const intl5 = tmp2(1112).intl;
      formatToPlainStringResult = intl5.string(tmp2(1112).t["5ayf7w"]);
    }
    tmp2Result11 = tmp2(11791);
  }
  const tmp14 = _slicedToArray(noop.useState(), 2);
  const match = giftCode(6263).match(first);
  const str = giftCode(6263);
  const obj30 = { type: giftCode(2112).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match.with({ type: giftCode(2112).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
    let avatarSource;
    if (user != null) {
      avatarSource = user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_SUCCESS]);
    }
    return React5(native.Avatar, { source: avatarSource, avatarDecoration, size: native.AvatarSizes.GIFT_SUCCESS, animate: true });
  });
  const obj31 = { type: giftCode(2112).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with({ type: giftCode(2112).CollectiblesItemType.PROFILE_EFFECT }, (profileEffect) => React5(ProfileEffectUserPreviewDefault, { user, profileEffect }));
  const obj32 = { type: giftCode(2112).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with({ type: giftCode(2112).CollectiblesItemType.PROFILE_FRAME }, (profileFrame) => React5(ProfileFrameUserPreviewDefault, { user, profileFrame }));
  const obj33 = { type: giftCode(2112).CollectiblesItemType.NAMEPLATE };
  tmp20Result2 = withResult2.with({ type: giftCode(2112).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
    const obj = { style: nameplateContainer.nameplateContainer, children: React5(NameplatePreview.NameplatePreview, { user, nameplate }) };
    return React5(hasOwnProperty, obj);
  }).otherwise(() => React5(GiftBoxAnimationDefault, { giftStyle: giftCode.giftStyle }));
  const withResult3 = withResult2.with({ type: giftCode(2112).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
    const obj = { style: nameplateContainer.nameplateContainer, children: React5(NameplatePreview.NameplatePreview, { user, nameplate }) };
    return React5(hasOwnProperty, obj);
  });
};