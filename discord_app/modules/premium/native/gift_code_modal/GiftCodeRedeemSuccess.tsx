// discord_app/modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import ProfileEffectUserPreviewDefault from "../../../collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx";
import ProfileFrameUserPreviewDefault from "../../../collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx";
import NameplatePreview from "../../../collectibles/nameplates/native/NameplatePreview.tsx";
import GiftBoxAnimationDefault from "GiftBoxAnimation.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import SKUStore from "../../../../stores/game_store/SKUStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  container: { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 28,
    paddingBottom: 12,
    paddingHorizontal: 32,
  },
  nameplateContainer: null,
  bundleContainer: null,
  bundlePreview: null,
  header: null,
  message: null,
  footer: null,
  gameItemCard: null,
};
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
  const items = [SKUStore];
  const stateFromStores = giftCode(504).useStateFromStores(items, () => SKUStore.get(giftCode.skuId));
  let obj = giftCode(504);
  const getOrFetchSubscriptionPlan = giftCode(11790).useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const obj2 = giftCode(11790);
  const getOrFetchApplication = giftCode(7501).useGetOrFetchApplication(giftCode.applicationId);
  const obj3 = giftCode(7501);
  const obj4 = giftCode(11399);
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
  obj5 = giftCode(7884);
  let tmp10 = product;
  if (product == null) {
    const obj6 = { items: [] };
    tmp10 = obj6;
  }
  const shopProductItems = giftCode(8519).useShopProductItems(tmp10);
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  const tmp2Result = giftCode(8519);
  let tmp12 = product;
  if (product == null) {
    const obj7 = { skuId: "", type: tmp2(1973).CollectiblesItemType.BUNDLE, items: [] };
    tmp12 = obj7;
  }
  const handleUseNow1 = giftCode(11439).useHandleUseNow({ product: tmp12 });
  const isApplying = handleUseNow1.isApplying;
  ({ handleUseNow, canUseNow } = handleUseNow1);
  const tmp2Result6 = giftCode(11439);
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
      if (tmp2Result7.isGameItemSKU(stateFromStores)) {
        const obj10 = { style: tmp.gameItemCard, children: null };
        const obj11 = { sku: stateFromStores };
        obj10.children = closure_8(user(9186), obj11);
        let tmp24Result = closure_8(closure_5, obj10);
      } else {
        const obj12 = { game: getOrFetchApplication, size: tmp2(7505).GameIconSizes.LARGE, skuId: giftCode.skuId };
        tmp24Result = closure_8(user(7505), obj12);
        const tmp26 = user(7505);
      }
      tmp2Result7 = tmp2(7559);
    }
  }
  if (type === giftCode(1973).CollectiblesItemType.BUNDLE) {
    if (null != product) {
      const obj13 = { style: tmp.bundleContainer, children: null };
      const obj14 = { style: tmp.bundlePreview, onLayout: callback, children: null };
      let tmp20Result = null != tmp15;
      if (tmp20Result) {
        const obj15 = {
          deco: firstAvatarDecoration,
          pfx: firstProfileEffect,
          nameplate: firstNameplate,
          previewAssets: product.previewAssets,
          disableStaticBackground: true,
          size: "large",
          targetSize: tmp15,
        };
        tmp20Result = closure_8(user(9158), obj15);
      }
      obj14.children = tmp20Result;
      obj13.children = closure_8(closure_5, obj14);
      let tmp20Result2 = closure_8(closure_5, obj13);
    }
    const items1 = [tmp20Result2, ,];
    if (null == stateFromStores) {
      const obj16 = { variant: "heading-xl/bold", style: tmp.header, accessibilityRole: "header", children: null };
      const intl4 = tmp2(1115).intl;
      obj16.children = intl4.string(tmp2(1115).t["+BNMcF"]);
      let tmp31 = closure_8(tmp2(4825).Text, obj16);
    } else {
      if (tmp2Result8.isGameItemSKU(stateFromStores)) {
        const obj17 = { variant: "heading-xl/bold", style: tmp.header, accessibilityRole: "header", children: null };
        const intl3 = tmp2(1115).intl;
        obj17.children = intl3.string(tmp2(1115).t["5glWta"]);
        tmp31 = closure_8(tmp2(4825).Text, obj17);
      } else {
        if (giftCode.isSubscription) {
          if (null != getOrFetchSubscriptionPlan) {
            const obj18 = {
              variant: "heading-xl/bold",
              style: tmp.header,
              accessibilityRole: "header",
              children: null,
            };
            const intl2 = tmp2(1115).intl;
            const obj19 = { skuName: stateFromStores.name };
            obj18.children = intl2.format(tmp2(1115).t["1C2BG/"], obj19);
            tmp31 = closure_8(tmp2(4825).Text, obj18);
          }
        }
        if (null != first) {
          const obj20 = {
            variant: "heading-xl/bold",
            color: "mobile-text-heading-primary",
            style: tmp.header,
            accessibilityRole: "header",
            children: null,
          };
          const intl = tmp2(1115).intl;
          obj20.children = intl.string(tmp2(1115).t.IMffmm);
          tmp31 = closure_8(tmp2(4825).Text, obj20);
        }
      }
      tmp2Result8 = tmp2(7559);
    }
    items1[1] = tmp31;
    if (tmp2Result9.isGameItemSKU(stateFromStores)) {
      if (null != getOrFetchApplication) {
        const obj21 = { variant: "text-md/medium", style: tmp.message, children: null };
        const intl7 = tmp2(1115).intl;
        let str2;
        if (stateFromStores != null) {
          str2 = stateFromStores.name;
        }
        if (str2 == null) {
          str2 = "";
        }
        const obj22 = { skuName: str2, applicationName: getOrFetchApplication.name };
        obj21.children = intl7.formatToPlainString(tmp2(1115).t.W2znvX, obj22);
        let tmp36Result = closure_8(tmp2(4825).Text, obj21);
        let tmp36 = closure_8;
      }
      items1[2] = tmp36Result;
      obj9.children = items1;
      const items2 = [closure_9(closure_6, obj9)];
      const obj23 = { style: tmp.footer, children: null };
      if (null != first) {
        if (canUseNow) {
          const obj24 = { text: null, size: "md", loading: null, disabled: null, onPress: null };
          const intl9 = tmp2(1115).intl;
          obj24.text = intl9.string(tmp2(1115).t.MAS7uK);
          obj24.loading = isApplying;
          obj24.disabled = isApplying;
          obj24.onPress = handleUseNow;
          let obj25 = obj24;
        }
        obj23.children = tmp36(tmp44, obj25);
        items2[1] = tmp36(closure_5, obj23);
        obj8.children = items2;
        return closure_9(tmp2(7456).SafeAreaPaddingView, obj8);
      }
      obj25 = { text: null, size: "md", onPress: null };
      const intl8 = tmp2(1115).intl;
      obj25.text = intl8.string(tmp2(1115).t["NX+WJN"]);
      obj25.onPress = user(5032).pop;
    }
    if (giftCode.isSubscription) {
      if (null != getOrFetchSubscriptionPlan) {
        const obj26 = {
          variant: "text-md/medium",
          style: tmp.message,
          children: tmp2(5081).getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan),
        };
        tmp36Result = closure_8(tmp2(4825).Text, obj26);
        tmp36 = closure_8;
        const tmp2Result10 = tmp2(5081);
      }
    }
    tmp36 = closure_8;
    const obj27 = { variant: "text-md/medium", style: tmp.message, children: null };
    if (null != first) {
      let name;
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      if (null != name) {
        const intl6 = tmp2(1115).intl;
        const obj28 = { itemName: stateFromStores.name };
        let formatToPlainStringResult = intl6.formatToPlainString(tmp2(1115).t["4kp0AB"], obj28);
      }
      obj27.children = formatToPlainStringResult;
      tmp36Result = tmp36(tmp37, obj27);
    }
    const intl5 = tmp2(1115).intl;
    formatToPlainStringResult = intl5.string(tmp2(1115).t["5ayf7w"]);
    tmp2Result9 = tmp2(7559);
  }
  const tmp14 = _slicedToArray(noop.useState(), 2);
  const match = giftCode(5014).match(first);
  const str = giftCode(5014);
  const obj29 = { type: giftCode(1973).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match.with({ type: giftCode(1973).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
    let avatarSource;
    if (user != null) {
      avatarSource = user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_SUCCESS]);
    }
    return React6(native.Avatar, {
      source: avatarSource,
      avatarDecoration,
      size: native.AvatarSizes.GIFT_SUCCESS,
      animate: true,
    });
  });
  const obj30 = { type: giftCode(1973).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with({ type: giftCode(1973).CollectiblesItemType.PROFILE_EFFECT }, (profileEffect) =>
    React6(ProfileEffectUserPreviewDefault, { user, profileEffect }),
  );
  const obj31 = { type: giftCode(1973).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with({ type: giftCode(1973).CollectiblesItemType.PROFILE_FRAME }, (profileFrame) =>
    React6(ProfileFrameUserPreviewDefault, { user, profileFrame }),
  );
  const obj32 = { type: giftCode(1973).CollectiblesItemType.NAMEPLATE };
  tmp20Result2 = withResult2
    .with({ type: giftCode(1973).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
      const obj = {
        style: nameplateContainer.nameplateContainer,
        children: React6(NameplatePreview.NameplatePreview, { user, nameplate }),
      };
      return React6(hasOwnProperty, obj);
    })
    .otherwise(() => React6(GiftBoxAnimationDefault, { giftStyle: giftCode.giftStyle }));
  const withResult3 = withResult2.with({ type: giftCode(1973).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
    const obj = {
      style: nameplateContainer.nameplateContainer,
      children: React6(NameplatePreview.NameplatePreview, { user, nameplate }),
    };
    return React6(hasOwnProperty, obj);
  });
}
