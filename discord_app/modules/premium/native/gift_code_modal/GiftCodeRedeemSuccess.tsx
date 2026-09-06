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
fn(4560);
let createStyles = {
  container: null,
  body: null,
  nameplateContainer: null,
  bundleContainer: null,
  bundlePreview: null,
  header: null,
  message: null,
  footer: null,
  gameItemCard: null,
};
createStyles = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.body = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 28,
  paddingBottom: 12,
  paddingHorizontal: 32,
};
createStyles.nameplateContainer = { width: "100%", paddingTop: nativeDefault.space.PX_24 };
let obj1 = { width: "100%", paddingTop: nativeDefault.space.PX_24 };
createStyles.bundleContainer = { width: "100%", alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
createStyles.bundlePreview = { alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" };
createStyles.header = { marginTop: 32, textAlign: "center" };
createStyles.message = { marginTop: 8, textAlign: "center" };
createStyles.footer = { paddingHorizontal: 24 };
createStyles.gameItemCard = { marginTop: 20 };
let closure_10 = createStyles.createStyles(createStyles);
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx");

export default function GiftCodeRedeemSuccess(giftCode) {
  giftCode = giftCode.giftCode;
  const user = giftCode.user;
  _slicedToArray = undefined;
  const tmp = closure_10();
  dependencyMap = tmp;
  let obj = giftCode(504);
  const items = [SKUStore];
  const stateFromStores = obj.useStateFromStores(items, () => SKUStore.get(giftCode.skuId));
  let obj1 = giftCode(11441);
  const getOrFetchSubscriptionPlan = obj1.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  let obj2 = giftCode(7168);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(giftCode.applicationId);
  let obj3 = giftCode(11042);
  let obj4 = giftCode(7554);
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
  let tmp2Result = tmp2(8171);
  let tmp10 = product;
  if (product == null) {
    obj = { items: [] };
    tmp10 = obj;
  }
  const shopProductItems = tmp2Result.useShopProductItems(tmp10);
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  tmp2Result = tmp2(11083);
  let tmp12 = product;
  if (product == null) {
    obj = { skuId: "", type: tmp2(1889).CollectiblesItemType.BUNDLE, items: [] };
    tmp12 = obj;
  }
  handleUseNow = tmp2Result.useHandleUseNow({ product: tmp12 });
  const isApplying = handleUseNow.isApplying;
  ({ handleUseNow, canUseNow } = handleUseNow);
  [tmp15, c3] = _slicedToArray(noop.useState(), 2);
  const callback = noop.useCallback((nativeEvent) => {
    ({ width: giftCode, height: user } = nativeEvent.nativeEvent.layout);
    _undefined((arg0) => {
      let size = arg0;
      if (null != arg0) {
        return size;
      }
      size = { width, height };
    });
  }, []);
  obj1 = { bottom: true, style: tmp.container, children: null };
  obj2 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
  if (null == first) {
    if (null != getOrFetchApplication) {
      if (tmp2Result1.isGameItemSKU(stateFromStores)) {
        obj3 = { style: tmp.gameItemCard, children: null };
        obj4 = { sku: stateFromStores };
        obj3.children = tmp24(user(8825), obj4);
        let tmp24Result = tmp24(closure_5, obj3);
      } else {
        const obj5 = { game: getOrFetchApplication, size: tmp2(7172).GameIconSizes.LARGE, skuId: giftCode.skuId };
        tmp24Result = tmp24(user(7172), obj5);
        const tmp26 = user(7172);
      }
      tmp2Result1 = tmp2(7226);
    }
  }
  if (type === giftCode(1889).CollectiblesItemType.BUNDLE) {
    if (null != product) {
      const obj6 = { style: tmp.bundleContainer, children: null };
      const obj7 = { style: tmp.bundlePreview, onLayout: callback, children: null };
      let tmp20Result = null != tmp15;
      if (tmp20Result) {
        const obj8 = {
          deco: firstAvatarDecoration,
          pfx: firstProfileEffect,
          nameplate: firstNameplate,
          previewAssets: product.previewAssets,
          disableStaticBackground: true,
          size: "large",
          targetSize: tmp15,
        };
        tmp20Result = tmp20(user(8797), obj8);
      }
      obj7.children = tmp20Result;
      obj6.children = closure_8(closure_5, obj7);
      tmp20Result = tmp20(tmp21, obj6);
    }
    const items1 = [tmp20Result, ,];
    if (null == stateFromStores) {
      const obj9 = { variant: "heading-xl/bold", style: tmp.header, accessibilityRole: "header", children: null };
      const intl4 = tmp2(1114).intl;
      obj9.children = intl4.string(tmp2(1114).t["+BNMcF"]);
      let tmp31 = closure_8(tmp2(4556).Text, obj9);
    } else {
      if (tmp2Result2.isGameItemSKU(stateFromStores)) {
        const obj10 = { variant: "heading-xl/bold", style: tmp.header, accessibilityRole: "header", children: null };
        const intl3 = tmp2(1114).intl;
        obj10.children = intl3.string(tmp2(1114).t["5glWta"]);
        tmp31 = closure_8(tmp2(4556).Text, obj10);
      } else {
        if (giftCode.isSubscription) {
          if (null != getOrFetchSubscriptionPlan) {
            const obj11 = {
              variant: "heading-xl/bold",
              style: tmp.header,
              accessibilityRole: "header",
              children: null,
            };
            const intl2 = tmp2(1114).intl;
            const obj12 = { skuName: stateFromStores.name };
            obj11.children = intl2.format(tmp2(1114).t["1C2BG/"], obj12);
            tmp31 = closure_8(tmp2(4556).Text, obj11);
          }
        }
        if (null != first) {
          const obj13 = {
            variant: "heading-xl/bold",
            color: "mobile-text-heading-primary",
            style: tmp.header,
            accessibilityRole: "header",
            children: null,
          };
          const intl = tmp2(1114).intl;
          obj13.children = intl.string(tmp2(1114).t.IMffmm);
          tmp31 = closure_8(tmp2(4556).Text, obj13);
        }
      }
      tmp2Result2 = tmp2(7226);
    }
    items1[1] = tmp31;
    if (tmp2Result3.isGameItemSKU(stateFromStores)) {
      if (null != getOrFetchApplication) {
        const obj14 = { variant: "text-md/medium", style: tmp.message, children: null };
        const intl7 = tmp2(1114).intl;
        let str2;
        if (stateFromStores != null) {
          str2 = stateFromStores.name;
        }
        if (str2 == null) {
          str2 = "";
        }
        const obj15 = { skuName: str2, applicationName: getOrFetchApplication.name };
        obj14.children = intl7.formatToPlainString(tmp2(1114).t.W2znvX, obj15);
        let tmp36Result = tmp42(tmp2(4556).Text, obj14);
        let tmp36 = tmp42;
      }
      items1[2] = tmp36Result;
      obj2.children = items1;
      const items2 = [tmp17(tmp18, obj2)];
      const obj16 = { style: tmp.footer, children: null };
      if (null != first) {
        if (canUseNow) {
          const obj17 = { text: null, size: "md", loading: null, disabled: null, onPress: null };
          const intl9 = tmp2(1114).intl;
          obj17.text = intl9.string(tmp2(1114).t.MAS7uK);
          obj17.loading = isApplying;
          obj17.disabled = isApplying;
          obj17.onPress = handleUseNow;
          let obj18 = obj17;
        }
        obj16.children = tmp36(tmp44, obj18);
        items2[1] = tmp36(tmp43, obj16);
        obj1.children = items2;
        return tmp17(tmp2(7123).SafeAreaPaddingView, obj1);
      }
      obj18 = { text: null, size: "md", onPress: null };
      const intl8 = tmp2(1114).intl;
      obj18.text = intl8.string(tmp2(1114).t["NX+WJN"]);
      obj18.onPress = user(4763).pop;
      tmp43 = closure_5;
    }
    if (giftCode.isSubscription) {
      if (null != getOrFetchSubscriptionPlan) {
        const obj19 = {
          variant: "text-md/medium",
          style: tmp.message,
          children: tmp2(4799).getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan),
        };
        tmp36Result = closure_8(tmp2(4556).Text, obj19);
        tmp36 = closure_8;
        const tmp2Result4 = tmp2(4799);
      }
    }
    tmp36 = closure_8;
    const obj20 = { variant: "text-md/medium", style: tmp.message, children: null };
    if (null != first) {
      let name;
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      if (null != name) {
        const intl6 = tmp2(1114).intl;
        const obj21 = { itemName: stateFromStores.name };
        let formatToPlainStringResult = intl6.formatToPlainString(tmp2(1114).t["4kp0AB"], obj21);
      }
      obj20.children = formatToPlainStringResult;
      tmp36Result = tmp36(tmp37, obj20);
    }
    const intl5 = tmp2(1114).intl;
    formatToPlainStringResult = intl5.string(tmp2(1114).t["5ayf7w"]);
    tmp2Result3 = tmp2(7226);
  }
  const tmp14 = _slicedToArray(noop.useState(), 2);
  tmp18 = closure_6;
  const match = giftCode(4745).match(first);
  const str = giftCode(4745);
  const obj22 = { type: giftCode(1889).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match.with({ type: giftCode(1889).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
    let obj = user;
    let avatarSource;
    if (user != null) {
      avatarSource = obj.getAvatarSource(
        null,
        true,
        tmp2(1178).AVATAR_SIZE_MAP[tmp2(undefined, 1178).AvatarSizes.GIFT_SUCCESS],
      );
    }
    obj = { source: avatarSource, avatarDecoration, size: tmp2(1178).AvatarSizes.GIFT_SUCCESS, animate: true };
    return React6(native.Avatar, obj);
  });
  const obj23 = { type: giftCode(1889).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with({ type: giftCode(1889).CollectiblesItemType.PROFILE_EFFECT }, (profileEffect) =>
    React6(ProfileEffectUserPreviewDefault, { user, profileEffect }),
  );
  const obj24 = { type: giftCode(1889).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with({ type: giftCode(1889).CollectiblesItemType.PROFILE_FRAME }, (profileFrame) =>
    React6(ProfileFrameUserPreviewDefault, { user, profileFrame }),
  );
  const obj25 = { type: giftCode(1889).CollectiblesItemType.NAMEPLATE };
  tmp20Result = withResult2
    .with({ type: giftCode(1889).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
      let obj = { style: nameplateContainer.nameplateContainer, children: null };
      obj = { user, nameplate };
      obj.children = React6(NameplatePreview.NameplatePreview, obj);
      return React6(hasOwnProperty, obj);
    })
    .otherwise(() => React6(GiftBoxAnimationDefault, { giftStyle: giftCode.giftStyle }));
}
