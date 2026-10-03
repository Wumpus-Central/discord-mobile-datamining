// discord_app/modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import CollectiblesItemType from "../../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _mod5075 from "module_5075" /* 5075 */;
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import GiftCodeUtils from "../../../../utils/GiftCodeUtils.tsx";
import GameIcon from "../../../game_detection/native/GameIcon.tsx";
import SlayerStorefrontUtils from "../../../slayer_storefront/SlayerStorefrontUtils.tsx";
import BundleSampleV2Default from "../../../collectibles/native/BundleSampleV2.tsx";
import SlayerStorefrontItemCardDefault from "../../../slayer_storefront/native/SlayerStorefrontItemCard.tsx";
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
const createStyles = fn(4890);
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
const ReactCompilerGating = fn(558);
let obj5 = { width: "100%", alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (giftCode) => {
      const cResult = giftCode(576).c(65);
      giftCode = giftCode.giftCode;
      const user = giftCode.user;
      const tmp4 = firstProfileEffect();
      dependencyMap = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [first1];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== giftCode.skuId) {
        const fn = function y() {
          return SKUStore.get(giftCode.skuId);
        };
        cResult[1] = giftCode.skuId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let obj = giftCode(576);
      const stateFromStores = giftCode(504).useStateFromStores(first, tmp7);
      let tmpResult = giftCode(504);
      const getOrFetchSubscriptionPlan = giftCode(11100).useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
      const tmpResult7 = giftCode(11100);
      const getOrFetchApplication = giftCode(6663).useGetOrFetchApplication(giftCode.applicationId);
      const tmpResult8 = giftCode(6663);
      const tmpResult9 = giftCode(10778);
      let skuId = null;
      if (tmpResult10.isCollectiblesGiftCode(giftCode)) {
        skuId = giftCode.skuId;
      }
      const product = tmpResult9.useFetchCollectiblesProduct(skuId, true).product;
      closure_6 = product;
      first1 = undefined;
      if (product != null) {
        first1 = product.items[0];
      }
      let type;
      if (product != null) {
        type = product.type;
      }
      const tmp14 = type === giftCode(1980).CollectiblesItemType.BUNDLE;
      closure_8 = tmp14;
      if (cResult[3] !== product) {
        let tmp16 = product;
        if (product == null) {
          let obj2 = { items: [] };
          tmp16 = obj2;
        }
        cResult[3] = product;
        cResult[4] = tmp16;
        let tmp15 = tmp16;
      } else {
        tmp15 = cResult[4];
      }
      tmpResult10 = giftCode(7065);
      const shopProductItems = giftCode(7842).useShopProductItems(tmp15);
      const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
      firstProfileEffect = shopProductItems.firstProfileEffect;
      const firstNameplate = shopProductItems.firstNameplate;
      if (cResult[5] !== product) {
        let tmp19 = product;
        if (product == null) {
          let obj3 = { skuId: "", type: tmp(1980).CollectiblesItemType.BUNDLE, items: [] };
          tmp19 = obj3;
        }
        cResult[5] = product;
        cResult[6] = tmp19;
        let tmp18 = tmp19;
      } else {
        tmp18 = cResult[6];
      }
      if (cResult[7] !== tmp18) {
        let obj4 = { product: tmp18 };
        cResult[7] = tmp18;
        cResult[8] = obj4;
        let tmp20 = obj4;
      } else {
        tmp20 = cResult[8];
      }
      const tmpResult11 = giftCode(7842);
      let handleUseNow = giftCode(10819).useHandleUseNow(tmp20);
      handleUseNow = handleUseNow.handleUseNow;
      const canUseNow = handleUseNow.canUseNow;
      const isApplying = handleUseNow.isApplying;
      const tmp22 = stateFromStores(getOrFetchSubscriptionPlan.useState(), 2);
      const first2 = tmp22[0];
      closure_16 = tmp22[1];
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor(arg0) {
            ({ width, height } = giftCode.nativeEvent.layout);
            tmp = closure_16((arg0) => {
              let size = arg0;
              if (null != arg0) {
                return size;
              }
              const size1 = { width, height };
              size = size1;
            });
            return;
          }
        }
        cResult[9] = R;
      } else {
        class R {
          constructor(arg0) {
            ({ width, height } = giftCode.nativeEvent.layout);
            tmp = closure_16((arg0) => {
              let size = arg0;
              if (null != arg0) {
                return size;
              }
              const size1 = { width, height };
              size = size1;
            });
            return;
          }
        }
      }
      onLayout = R;
      if (cResult[10] === getOrFetchApplication) {
        class R {
          constructor(arg0) {
            ({ width, height } = giftCode.nativeEvent.layout);
            tmp = closure_16((arg0) => {
              let size = arg0;
              if (null != arg0) {
                return size;
              }
              const size1 = { width, height };
              size = size1;
            });
            return;
          }
        }
      }
      class K {
        constructor() {
          tmp = closure_7;
          if (null == closure_7) {
            if (null != closure_5) {
              tmp19 = closure_0;
              tmp20 = closure_2;
              obj13 = closure_0(closure_2[17]);
              tmp21 = closure_3;
              tmp22 = jsx;
              if (obj13.isGameItemSKU(closure_3)) {
                tmp30 = View;
                obj1 = { style: null, children: null };
                tmp31 = closure_2;
                obj1.style = closure_2.gameItemCard;
                tmp32 = jsx;
                tmp33 = closure_1;
                tmp34 = closure_2;
                obj17 = { sku: null };
                obj17.sku = tmp21;
                obj1.children = jsx(closure_1(closure_2[18]), obj17);
                tmp22Result = tmp22(View, obj1);
              } else {
                tmp23 = closure_1;
                tmp24 = closure_2;
                obj18 = { game: null, size: null, skuId: null };
                obj18.game = tmp2;
                tmp26 = closure_0;
                tmp27 = closure_2;
                tmp25 = closure_1(closure_2[19]);
                obj18.size = closure_0(closure_2[19]).GameIconSizes.LARGE;
                tmp28 = giftCode;
                obj18.skuId = giftCode.skuId;
                tmp22Result = tmp22(tmp25, obj18);
              }
              tmp35 = tmp22Result;
            }
          }
          if (closure_8) {
            if (null != product) {
              obj19 = { style: null, children: null };
              tmp7 = closure_2;
              obj19.style = closure_2.bundleContainer;
              obj20 = { style: null, onLayout: null, children: null };
              obj20.style = closure_2.bundlePreview;
              tmp10 = closure_17;
              obj20.onLayout = closure_17;
              tmp12 = null != closure_15;
              tmp5 = jsx;
              tmp6 = View;
              tmp8 = jsx;
              tmp9 = View;
              if (tmp12) {
                tmp13 = jsx;
                tmp14 = closure_1;
                tmp15 = closure_2;
                obj21 = {
                  deco: null,
                  pfx: null,
                  nameplate: null,
                  previewAssets: null,
                  disableStaticBackground: true,
                  size: "large",
                  targetSize: null,
                };
                tmp16 = firstAvatarDecoration;
                obj21.deco = firstAvatarDecoration;
                tmp17 = firstProfileEffect;
                obj21.pfx = firstProfileEffect;
                tmp18 = firstNameplate;
                obj21.nameplate = firstNameplate;
                obj21.previewAssets = tmp3.previewAssets;
                obj21.targetSize = tmp11;
                tmp12 = jsx(closure_1(closure_2[20]), obj21);
              }
              obj20.children = tmp12;
              obj19.children = tmp8(tmp9, obj20);
              tmp5Result = tmp5(tmp6, obj19);
            }
            return tmp5Result;
          }
          str = closure_0(closure_2[21]);
          match = str.match(tmp);
          obj22 = { type: closure_0(closure_2[14]).CollectiblesItemType.AVATAR_DECORATION };
          withResult = match.with(obj22, (avatarDecoration) => {
            let avatarSource;
            if (user != null) {
              avatarSource = user.getAvatarSource(
                null,
                true,
                giftCode(nameplateContainer[22]).AVATAR_SIZE_MAP[
                  giftCode(undefined, nameplateContainer[22]).AvatarSizes.GIFT_SUCCESS
                ],
              );
            }
            return closure_8(giftCode(nameplateContainer[22]).Avatar, {
              source: avatarSource,
              avatarDecoration,
              size: giftCode(nameplateContainer[22]).AvatarSizes.GIFT_SUCCESS,
              animate: true,
            });
          });
          obj23 = { type: closure_0(closure_2[14]).CollectiblesItemType.PROFILE_EFFECT };
          withResult1 = withResult.with(obj23, (profileEffect) =>
            closure_8(user(nameplateContainer[23]), { user, profileEffect }),
          );
          obj24 = { type: closure_0(closure_2[14]).CollectiblesItemType.PROFILE_FRAME };
          withResult2 = withResult1.with(obj24, (profileFrame) =>
            closure_8(user(nameplateContainer[24]), { user, profileFrame }),
          );
          obj25 = { type: closure_0(closure_2[14]).CollectiblesItemType.NAMEPLATE };
          withResult3 = withResult2.with(obj25, (nameplate) => {
            const obj = {
              style: nameplateContainer.nameplateContainer,
              children: closure_8(giftCode(nameplateContainer[25]).NameplatePreview, { user, nameplate }),
            };
            return closure_8(getOrFetchApplication, obj);
          });
          tmp5Result = withResult3.otherwise(() =>
            closure_8(user(nameplateContainer[26]), { giftStyle: giftStyle.giftStyle }),
          );
          return;
        }
      }
      cResult[10] = getOrFetchApplication;
      cResult[11] = first2;
      cResult[12] = firstAvatarDecoration;
      cResult[13] = firstNameplate;
      cResult[14] = firstProfileEffect;
      cResult[15] = giftCode.giftStyle;
      cResult[16] = giftCode.skuId;
      cResult[17] = tmp14;
      cResult[18] = first1;
      cResult[19] = product;
      cResult[20] = stateFromStores;
      cResult[21] = tmp4.bundleContainer;
      cResult[22] = tmp4.bundlePreview;
      cResult[23] = tmp4.gameItemCard;
      cResult[24] = tmp4.nameplateContainer;
      cResult[25] = user;
      cResult[26] = K;
      const tmpResult12 = giftCode(10819);
    }
  : (giftCode) => {
      giftCode = giftCode.giftCode;
      const user = giftCode.user;
      _slicedToArray = undefined;
      const tmp = closure_10();
      dependencyMap = tmp;
      const items = [SKUStore];
      const stateFromStores = giftCode(504).useStateFromStores(items, () => SKUStore.get(giftCode.skuId));
      let obj = giftCode(504);
      const getOrFetchSubscriptionPlan = giftCode(11100).useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
      const obj2 = giftCode(11100);
      const getOrFetchApplication = giftCode(6663).useGetOrFetchApplication(giftCode.applicationId);
      const obj3 = giftCode(6663);
      const obj4 = giftCode(10778);
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
      obj5 = giftCode(7065);
      let tmp10 = product;
      if (product == null) {
        const obj6 = { items: [] };
        tmp10 = obj6;
      }
      const shopProductItems = giftCode(7842).useShopProductItems(tmp10);
      ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
      const tmp2Result = giftCode(7842);
      let tmp12 = product;
      if (product == null) {
        const obj7 = { skuId: "", type: tmp2(1980).CollectiblesItemType.BUNDLE, items: [] };
        tmp12 = obj7;
      }
      const handleUseNow1 = giftCode(10819).useHandleUseNow({ product: tmp12 });
      const isApplying = handleUseNow1.isApplying;
      ({ handleUseNow, canUseNow } = handleUseNow1);
      const tmp2Result6 = giftCode(10819);
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
            obj10.children = closure_8(user(8481), obj11);
            let tmp24Result = closure_8(closure_5, obj10);
          } else {
            const obj12 = { game: getOrFetchApplication, size: tmp2(6667).GameIconSizes.LARGE, skuId: giftCode.skuId };
            tmp24Result = closure_8(user(6667), obj12);
            const tmp26 = user(6667);
          }
          tmp2Result7 = tmp2(6727);
        }
      }
      if (type === giftCode(1980).CollectiblesItemType.BUNDLE) {
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
            tmp20Result = closure_8(user(8453), obj15);
          }
          obj14.children = tmp20Result;
          obj13.children = closure_8(closure_5, obj14);
          let tmp20Result2 = closure_8(closure_5, obj13);
        }
        const items1 = [tmp20Result2, ,];
        if (null == stateFromStores) {
          const obj16 = { variant: "heading-xl/bold", style: tmp.header, accessibilityRole: "header", children: null };
          const intl4 = tmp2(1126).intl;
          obj16.children = intl4.string(tmp2(1126).t["+BNMcF"]);
          let tmp31 = closure_8(tmp2(4886).Text, obj16);
        } else {
          if (tmp2Result8.isGameItemSKU(stateFromStores)) {
            const obj17 = {
              variant: "heading-xl/bold",
              style: tmp.header,
              accessibilityRole: "header",
              children: null,
            };
            const intl3 = tmp2(1126).intl;
            obj17.children = intl3.string(tmp2(1126).t["5glWta"]);
            tmp31 = closure_8(tmp2(4886).Text, obj17);
          } else {
            if (giftCode.isSubscription) {
              if (null != getOrFetchSubscriptionPlan) {
                const obj18 = {
                  variant: "heading-xl/bold",
                  style: tmp.header,
                  accessibilityRole: "header",
                  children: null,
                };
                const intl2 = tmp2(1126).intl;
                const obj19 = { skuName: stateFromStores.name };
                obj18.children = intl2.format(tmp2(1126).t["1C2BG/"], obj19);
                tmp31 = closure_8(tmp2(4886).Text, obj18);
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
              const intl = tmp2(1126).intl;
              obj20.children = intl.string(tmp2(1126).t.IMffmm);
              tmp31 = closure_8(tmp2(4886).Text, obj20);
            }
          }
          tmp2Result8 = tmp2(6727);
        }
        items1[1] = tmp31;
        if (tmp2Result9.isGameItemSKU(stateFromStores)) {
          if (null != getOrFetchApplication) {
            const obj21 = { variant: "text-md/medium", style: tmp.message, children: null };
            const intl7 = tmp2(1126).intl;
            let str2;
            if (stateFromStores != null) {
              str2 = stateFromStores.name;
            }
            if (str2 == null) {
              str2 = "";
            }
            const obj22 = { skuName: str2, applicationName: getOrFetchApplication.name };
            obj21.children = intl7.formatToPlainString(tmp2(1126).t.W2znvX, obj22);
            let tmp36Result = closure_8(tmp2(4886).Text, obj21);
            let tmp36 = closure_8;
          }
          items1[2] = tmp36Result;
          obj9.children = items1;
          const items2 = [closure_9(closure_6, obj9)];
          const obj23 = { style: tmp.footer, children: null };
          if (null != first) {
            if (canUseNow) {
              const obj24 = { text: null, size: "md", loading: null, disabled: null, onPress: null };
              const intl9 = tmp2(1126).intl;
              obj24.text = intl9.string(tmp2(1126).t.MAS7uK);
              obj24.loading = isApplying;
              obj24.disabled = isApplying;
              obj24.onPress = handleUseNow;
              let obj25 = obj24;
            }
            obj23.children = tmp36(tmp44, obj25);
            items2[1] = tmp36(closure_5, obj23);
            obj8.children = items2;
            return closure_9(tmp2(6619).SafeAreaPaddingView, obj8);
          }
          obj25 = { text: null, size: "md", onPress: null };
          const intl8 = tmp2(1126).intl;
          obj25.text = intl8.string(tmp2(1126).t["NX+WJN"]);
          obj25.onPress = user(5093).pop;
        }
        if (giftCode.isSubscription) {
          if (null != getOrFetchSubscriptionPlan) {
            const obj26 = {
              variant: "text-md/medium",
              style: tmp.message,
              children: tmp2(5310).getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan),
            };
            tmp36Result = closure_8(tmp2(4886).Text, obj26);
            tmp36 = closure_8;
            const tmp2Result10 = tmp2(5310);
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
            const intl6 = tmp2(1126).intl;
            const obj28 = { itemName: stateFromStores.name };
            let formatToPlainStringResult = intl6.formatToPlainString(tmp2(1126).t["4kp0AB"], obj28);
          }
          obj27.children = formatToPlainStringResult;
          tmp36Result = tmp36(tmp37, obj27);
        }
        const intl5 = tmp2(1126).intl;
        formatToPlainStringResult = intl5.string(tmp2(1126).t["5ayf7w"]);
        tmp2Result9 = tmp2(6727);
      }
      const tmp14 = _slicedToArray(noop.useState(), 2);
      const match = giftCode(5075).match(first);
      const str = giftCode(5075);
      const obj29 = { type: giftCode(1980).CollectiblesItemType.AVATAR_DECORATION };
      const withResult = match.with(
        { type: giftCode(1980).CollectiblesItemType.AVATAR_DECORATION },
        (avatarDecoration) => {
          let avatarSource;
          if (user != null) {
            avatarSource = user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_SUCCESS]);
          }
          return closure_2_8(native.Avatar, {
            source: avatarSource,
            avatarDecoration,
            size: native.AvatarSizes.GIFT_SUCCESS,
            animate: true,
          });
        },
      );
      const obj30 = { type: giftCode(1980).CollectiblesItemType.PROFILE_EFFECT };
      const withResult1 = withResult.with(
        { type: giftCode(1980).CollectiblesItemType.PROFILE_EFFECT },
        (profileEffect) => closure_2_8(ProfileEffectUserPreviewDefault, { user, profileEffect }),
      );
      const obj31 = { type: giftCode(1980).CollectiblesItemType.PROFILE_FRAME };
      const withResult2 = withResult1.with(
        { type: giftCode(1980).CollectiblesItemType.PROFILE_FRAME },
        (profileFrame) => closure_2_8(ProfileFrameUserPreviewDefault, { user, profileFrame }),
      );
      const obj32 = { type: giftCode(1980).CollectiblesItemType.NAMEPLATE };
      tmp20Result2 = withResult2
        .with({ type: giftCode(1980).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
          const obj = {
            style: nameplateContainer.nameplateContainer,
            children: closure_2_8(NameplatePreview.NameplatePreview, { user, nameplate }),
          };
          return closure_2_8(hasOwnProperty, obj);
        })
        .otherwise(() => closure_2_8(GiftBoxAnimationDefault, { giftStyle: giftCode.giftStyle }));
      const withResult3 = withResult2.with({ type: giftCode(1980).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
        const obj = {
          style: nameplateContainer.nameplateContainer,
          children: closure_2_8(NameplatePreview.NameplatePreview, { user, nameplate }),
        };
        return closure_2_8(hasOwnProperty, obj);
      });
    };
