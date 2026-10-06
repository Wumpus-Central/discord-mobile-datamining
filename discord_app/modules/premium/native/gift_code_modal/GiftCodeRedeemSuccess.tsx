// discord_app/modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl10 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import CollectiblesItemType from "../../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import merged5 from "../../../../../_runtime/05081_merged5.js";
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
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import SKUStore from "../../../../stores/game_store/SKUStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let dependencyMap,
  giftCode,
  obj1,
  tmp10,
  tmp11,
  tmp13,
  tmp14,
  tmp22,
  tmp23Result,
  tmp24,
  tmp26,
  tmp27,
  tmp28,
  tmp29,
  tmp3,
  tmp31,
  tmp32,
  tmp33,
  tmp35,
  tmp6Result,
  tmp8,
  tmp9;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 28,
    paddingBottom: 12,
    paddingHorizontal: 32,
  },
  nameplateContainer: obj3,
  bundleContainer: obj4,
  bundlePreview: { alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" },
  header: { marginTop: 32, textAlign: "center" },
  message: { marginTop: 8, textAlign: "center" },
  footer: { paddingHorizontal: 24 },
  gameItemCard: { marginTop: 20 },
};
obj2 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", paddingTop: nativeDefault.space.PX_24 };
obj4 = { width: "100%", alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
let closure_10 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (giftCode) => {
      let closure_2;
      let first;
      let first1;
      let firstProfileEffect;
      let tmp16;
      let tmp19;
      let tmp21;
      let tmp25;
      let tmp7;
      const tmp2 = dependencyMap;
      let obj = giftCode(576);
      const cResult = obj.c(65);
      giftCode = giftCode.giftCode;
      const user = giftCode.user;
      const tmp4 = firstProfileEffect();
      dependencyMap = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = first1;
        const items = [first1];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== giftCode.skuId) {
        const fn = function y() {
          return SKUStore.get(giftCode.skuId);
        };
        cResult[1] = giftCode.skuId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      let tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      const tmpResult7 = giftCode(11113);
      const getOrFetchSubscriptionPlan = tmpResult7.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
      const tmpResult8 = giftCode(6670);
      const getOrFetchApplication = tmpResult8.useGetOrFetchApplication(giftCode.applicationId);
      const useFetchCollectiblesProduct = tmp(10791).useFetchCollectiblesProduct;
      giftCode(10791);
      let skuId = null;
      const tmpResult10 = giftCode(7078);
      if (tmpResult10.isCollectiblesGiftCode(giftCode)) {
        skuId = giftCode.skuId;
      }
      const product = useFetchCollectiblesProduct(skuId, true).product;
      let closure_6 = product;
      first1 = undefined;
      if (product != null) {
        first1 = product.items[0];
      }
      let type;
      if (product != null) {
        type = product.type;
      }
      const tmp15 = type === giftCode(1980).CollectiblesItemType.BUNDLE;
      let closure_8 = tmp15;
      if (cResult[3] !== product) {
        let tmp17 = product;
        if (product == null) {
          let obj2 = { items: [] };
          tmp17 = obj2;
        }
        cResult[3] = product;
        cResult[4] = tmp17;
        tmp16 = tmp17;
      } else {
        tmp16 = cResult[4];
      }
      const tmpResult11 = giftCode(7853);
      const shopProductItems = tmpResult11.useShopProductItems(tmp16);
      const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
      firstProfileEffect = shopProductItems.firstProfileEffect;
      const firstNameplate = shopProductItems.firstNameplate;
      if (cResult[5] !== product) {
        let tmp20 = product;
        if (product == null) {
          let obj3 = { skuId: "", type: tmp(1980).CollectiblesItemType.BUNDLE, items: [] };
          tmp20 = obj3;
        }
        cResult[5] = product;
        cResult[6] = tmp20;
        tmp19 = tmp20;
      } else {
        tmp19 = cResult[6];
      }
      if (cResult[7] !== tmp19) {
        let obj4 = { product: tmp19 };
        cResult[7] = tmp19;
        cResult[8] = obj4;
        tmp21 = obj4;
      } else {
        tmp21 = cResult[8];
      }
      const tmpResult12 = giftCode(10832);
      let handleUseNow = tmpResult12.useHandleUseNow(tmp21);
      handleUseNow = handleUseNow.handleUseNow;
      const canUseNow = handleUseNow.canUseNow;
      const isApplying = handleUseNow.isApplying;
      const tmp23 = stateFromStores(getOrFetchSubscriptionPlan.useState(), 2);
      const first2 = tmp23[0];
      let closure_16 = tmp23[1];
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor(arg0) {
            ({ width, height } = giftCode.nativeEvent.layout);
            tmp = closure_16((arg0) => {
              size = arg0;
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
        tmp25 = R;
      } else {
        class R {
          constructor(arg0) {
            ({ width, height } = giftCode.nativeEvent.layout);
            tmp = closure_16((arg0) => {
              size = arg0;
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
      R = tmp25;
      if (cResult[10] === getOrFetchApplication) {
        class R {
          constructor(arg0) {
            ({ width, height } = giftCode.nativeEvent.layout);
            tmp = closure_16((arg0) => {
              size = arg0;
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
              tmp20 = closure_0;
              tmp21 = closure_2;
              obj13 = closure_0(closure_2[17]);
              tmp22 = closure_3;
              tmp23 = jsx;
              if (obj13.isGameItemSKU(closure_3)) {
                tmp31 = View;
                obj1 = { style: null, children: null };
                tmp32 = closure_2;
                obj1.style = closure_2.gameItemCard;
                tmp33 = jsx;
                tmp34 = closure_1;
                tmp35 = closure_2;
                obj17 = { sku: null };
                obj17.sku = tmp22;
                obj1.children = jsx(closure_1(closure_2[18]), obj17);
                tmp23Result = tmp23(View, obj1);
              } else {
                tmp24 = closure_1;
                tmp25 = closure_2;
                obj18 = { game: null, size: null, skuId: null };
                obj18.game = tmp2;
                tmp27 = closure_0;
                tmp28 = closure_2;
                tmp26 = closure_1(closure_2[19]);
                obj18.size = closure_0(closure_2[19]).GameIconSizes.LARGE;
                tmp29 = giftCode;
                obj18.skuId = giftCode.skuId;
                tmp23Result = tmp23(tmp26, obj18);
              }
              tmp6Result = tmp23Result;
            }
            return tmp6Result;
          }
          tmp3 = closure_8;
          if (tmp3) {
            if (null != product) {
              obj19 = { style: null, children: null };
              tmp8 = closure_2;
              obj19.style = closure_2.bundleContainer;
              obj20 = { style: null, onLayout: null, children: null };
              obj20.style = closure_2.bundlePreview;
              tmp11 = closure_17;
              obj20.onLayout = closure_17;
              tmp13 = null != closure_15;
              tmp6 = jsx;
              tmp7 = View;
              tmp9 = jsx;
              tmp10 = View;
              if (tmp13) {
                tmp14 = jsx;
                tmp15 = closure_1;
                tmp16 = closure_2;
                obj21 = {
                  deco: null,
                  pfx: null,
                  nameplate: null,
                  previewAssets: null,
                  disableStaticBackground: true,
                  size: "large",
                  targetSize: null,
                };
                tmp17 = firstAvatarDecoration;
                obj21.deco = firstAvatarDecoration;
                tmp18 = firstProfileEffect;
                obj21.pfx = firstProfileEffect;
                tmp19 = firstNameplate;
                obj21.nameplate = firstNameplate;
                obj21.previewAssets = tmp4.previewAssets;
                obj21.targetSize = tmp12;
                tmp13 = jsx(closure_1(closure_2[20]), obj21);
              }
              obj20.children = tmp13;
              obj19.children = tmp9(tmp10, obj20);
              tmp6Result = tmp6(tmp7, obj19);
            }
          }
          str = closure_0(closure_2[21]);
          match = str.match(tmp);
          obj22 = { type: closure_0(closure_2[14]).CollectiblesItemType.AVATAR_DECORATION };
          withResult = match.with(obj22, (avatarDecoration) => {
            let avatarSource;
            const Avatar = giftCode(nameplateContainer[22]).Avatar;
            if (user != null) {
              const getAvatarSource = user.getAvatarSource;
              avatarSource = getAvatarSource(
                null,
                true,
                giftCode(nameplateContainer[22]).AVATAR_SIZE_MAP[
                  giftCode(undefined, nameplateContainer[22]).AvatarSizes.GIFT_SUCCESS
                ],
              );
            }
            const obj = {
              source: avatarSource,
              avatarDecoration,
              size: giftCode(nameplateContainer[22]).AvatarSizes.GIFT_SUCCESS,
              animate: true,
            };
            return closure_8(Avatar, obj);
          });
          obj23 = { type: closure_0(closure_2[14]).CollectiblesItemType.PROFILE_EFFECT };
          withResult1 = withResult.with(obj23, (profileEffect) => {
            const obj = { user, profileEffect };
            return closure_8(user(nameplateContainer[23]), obj);
          });
          obj24 = { type: closure_0(closure_2[14]).CollectiblesItemType.PROFILE_FRAME };
          withResult2 = withResult1.with(obj24, (profileFrame) => {
            const obj = { user, profileFrame };
            return closure_8(user(nameplateContainer[24]), obj);
          });
          obj25 = { type: closure_0(closure_2[14]).CollectiblesItemType.NAMEPLATE };
          withResult3 = withResult2.with(obj25, (nameplate) => {
            let obj2;
            const obj = {
              style: nameplateContainer.nameplateContainer,
              children: closure_8(giftCode(nameplateContainer[25]).NameplatePreview, obj2),
            };
            obj2 = { user, nameplate };
            return closure_8(getOrFetchApplication, obj);
          });
          tmp6Result = withResult3.otherwise(() => {
            const obj = { giftStyle: giftStyle.giftStyle };
            return closure_8(user(nameplateContainer[26]), obj);
          });
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
      cResult[17] = tmp15;
      cResult[18] = first1;
      cResult[19] = product;
      cResult[20] = stateFromStores;
      cResult[21] = tmp4.bundleContainer;
      cResult[22] = tmp4.bundlePreview;
      cResult[23] = tmp4.gameItemCard;
      cResult[24] = tmp4.nameplateContainer;
      cResult[25] = user;
      cResult[26] = K;
    }
  : (giftCode) => {
      let W2znvX;
      let _undefined;
      let c3;
      let canUseNow;
      let firstAvatarDecoration;
      let firstNameplate;
      let firstProfileEffect;
      let formatToPlainString;
      let handleUseNow;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl8;
      let intl9;
      let nameplateContainer;
      let obj10;
      let obj15;
      let obj18;
      let obj26;
      let tmp18;
      let tmp24Result;
      let tmp24Result2;
      let tmp2Result10;
      giftCode = giftCode.giftCode;
      const user = giftCode.user;
      _slicedToArray = undefined;
      const tmp = closure_10();
      dependencyMap = tmp;
      let obj = giftCode(504);
      const items = [SKUStore];
      const stateFromStores = obj.useStateFromStores(items, () => SKUStore.get(giftCode.skuId));
      let obj2 = giftCode(11113);
      const getOrFetchSubscriptionPlan = obj2.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
      const obj3 = giftCode(6670);
      const getOrFetchApplication = obj3.useGetOrFetchApplication(giftCode.applicationId);
      const useFetchCollectiblesProduct = giftCode(10791).useFetchCollectiblesProduct;
      giftCode(10791);
      let skuId = null;
      const obj4 = giftCode(7078);
      if (obj4.isCollectiblesGiftCode(giftCode)) {
        skuId = giftCode.skuId;
      }
      const product = useFetchCollectiblesProduct(skuId, true).product;
      let first;
      if (product != null) {
        first = product.items[0];
      }
      let type;
      if (product != null) {
        type = product.type;
      }
      const BUNDLE = tmp2(1980).CollectiblesItemType.BUNDLE;
      let tmp12 = product;
      const useShopProductItems = giftCode(7853).useShopProductItems;
      giftCode(7853);
      if (product == null) {
        tmp12 = { items: [] };
        const obj5 = { items: [] };
      }
      const shopProductItems = useShopProductItems(tmp12);
      ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
      let tmp15 = product;
      const useHandleUseNow = giftCode(10832).useHandleUseNow;
      giftCode(10832);
      if (product == null) {
        tmp15 = { skuId: "", type: giftCode(1980).CollectiblesItemType.BUNDLE, items: [] };
        const obj6 = { skuId: "", type: giftCode(1980).CollectiblesItemType.BUNDLE, items: [] };
      }
      const handleUseNow1 = useHandleUseNow({ product: tmp15 });
      const isApplying = handleUseNow1.isApplying;
      ({ handleUseNow, canUseNow } = handleUseNow1);
      [tmp18, c3] = react.useState();
      _slicedToArray(react.useState(), 2);
      const callback = react.useCallback((nativeEvent) => {
        let closure_129_0;
        let closure_129_1;
        ({ width: closure_129_0, height: closure_129_1 } = nativeEvent.nativeEvent.layout);
        _undefined((arg0) => {
          size = arg0;
          if (null != arg0) {
            return size;
          }
          const size1 = { width, height };
          size = size1;
        });
      }, []);
      const obj7 = { bottom: true, style: tmp.container, children: null };
      const obj8 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
      if (null == first) {
        let tmp34;
        let tmp39;
        let tmp39Result;
        if (null != getOrFetchApplication) {
          let tmp28Result;
          const tmp2Result7 = giftCode(6741);
          if (tmp2Result7.isGameItemSKU(stateFromStores)) {
            const obj9 = { style: tmp.gameItemCard, children: closure_8(user(8514), obj10) };
            obj10 = { sku: stateFromStores };
            tmp28Result = closure_8(closure_5, obj9);
          } else {
            const obj11 = {
              game: getOrFetchApplication,
              size: giftCode(6674).GameIconSizes.LARGE,
              skuId: giftCode.skuId,
            };
            const tmp30 = user(6674);
            tmp28Result = closure_8(tmp30, obj11);
          }
          tmp24Result2 = tmp28Result;
        }
        const items1 = [tmp24Result2, ,];
        if (null == stateFromStores) {
          const obj12 = {
            variant: "heading-xl/bold",
            style: tmp.header,
            accessibilityRole: "header",
            children: intl4.string(giftCode(1126).t["+BNMcF"]),
          };
          const Text4 = tmp2(4892).Text;
          intl4 = tmp2(1126).intl;
          tmp34 = closure_8(Text4, obj12);
        } else {
          const tmp2Result8 = giftCode(6741);
          if (tmp2Result8.isGameItemSKU(stateFromStores)) {
            const obj13 = {
              variant: "heading-xl/bold",
              style: tmp.header,
              accessibilityRole: "header",
              children: intl3.string(giftCode(1126).t["5glWta"]),
            };
            const Text3 = tmp2(4892).Text;
            intl3 = tmp2(1126).intl;
            tmp34 = closure_8(Text3, obj13);
          } else {
            if (giftCode.isSubscription) {
              if (null != getOrFetchSubscriptionPlan) {
                const obj14 = {
                  variant: "heading-xl/bold",
                  style: tmp.header,
                  accessibilityRole: "header",
                  children: intl2.format(giftCode(1126).t["1C2BG/"], obj15),
                };
                const Text2 = tmp2(4892).Text;
                intl2 = tmp2(1126).intl;
                obj15 = { skuName: stateFromStores.name };
                tmp34 = closure_8(Text2, obj14);
              }
            }
            if (null != first) {
              const obj16 = {
                variant: "heading-xl/bold",
                color: "mobile-text-heading-primary",
                style: tmp.header,
                accessibilityRole: "header",
                children: intl.string(giftCode(1126).t.IMffmm),
              };
              const Text = tmp2(4892).Text;
              intl = tmp2(1126).intl;
              tmp34 = closure_8(Text, obj16);
            }
          }
        }
        items1[1] = tmp34;
        const tmp2Result9 = giftCode(6741);
        if (tmp2Result9.isGameItemSKU(stateFromStores)) {
          if (null != getOrFetchApplication) {
            const obj17 = {
              variant: "text-md/medium",
              style: tmp.message,
              children: formatToPlainString(W2znvX, obj18),
            };
            const Text6 = tmp2(4892).Text;
            const intl7 = tmp2(1126).intl;
            formatToPlainString = intl7.formatToPlainString;
            let str2;
            W2znvX = tmp2(1126).t.W2znvX;
            if (stateFromStores != null) {
              str2 = stateFromStores.name;
            }
            if (str2 == null) {
              str2 = "";
            }
            obj18 = { skuName: str2, applicationName: getOrFetchApplication.name };
            tmp39Result = closure_8(Text6, obj17);
            tmp39 = closure_8;
          }
          items1[2] = tmp39Result;
          obj8.children = items1;
          const items2 = [closure_9(tmp22, obj8)];
          const obj19 = { style: tmp.footer, children: null };
          if (null != first) {
            let obj21;
            if (canUseNow) {
              const obj20 = {
                text: intl9.string(giftCode(1126).t.MAS7uK),
                size: "md",
                loading: isApplying,
                disabled: isApplying,
                onPress: handleUseNow,
              };
              intl9 = tmp2(1126).intl;
              obj21 = obj20;
            }
            obj19.children = tmp39(tmp47, obj21);
            items2[1] = tmp39(closure_5, obj19);
            obj7.children = items2;
            return closure_9(tmp21, obj7);
          }
          obj21 = { text: intl8.string(giftCode(1126).t["NX+WJN"]), size: "md", onPress: user(5099).pop };
          intl8 = tmp2(1126).intl;
        }
        if (giftCode.isSubscription) {
          if (null != getOrFetchSubscriptionPlan) {
            const obj22 = {
              variant: "text-md/medium",
              style: tmp.message,
              children: tmp2Result10.getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan),
            };
            const Text5 = tmp2(4892).Text;
            tmp2Result10 = giftCode(5317);
            tmp39Result = closure_8(Text5, obj22);
            tmp39 = closure_8;
          }
        }
        tmp39 = closure_8;
        const obj23 = { variant: "text-md/medium", style: tmp.message, children: null };
        if (null != first) {
          let formatToPlainStringResult;
          let name;
          if (stateFromStores != null) {
            name = stateFromStores.name;
          }
          if (null != name) {
            const intl6 = tmp2(1126).intl;
            const obj24 = { itemName: stateFromStores.name };
            formatToPlainStringResult = intl6.formatToPlainString(tmp2(1126).t["4kp0AB"], obj24);
          }
          obj23.children = formatToPlainStringResult;
          tmp39Result = tmp39(tmp40, obj23);
        }
        const intl5 = tmp2(1126).intl;
        formatToPlainStringResult = intl5.string(tmp2(1126).t["5ayf7w"]);
      }
      if (type === BUNDLE) {
        if (null != product) {
          const obj25 = { style: tmp.bundleContainer, children: closure_8(closure_5, obj26) };
          obj26 = { style: tmp.bundlePreview, onLayout: callback, children: tmp24Result };
          tmp24Result = null != tmp18;
          if (tmp24Result) {
            const obj27 = {
              deco: firstAvatarDecoration,
              pfx: firstProfileEffect,
              nameplate: firstNameplate,
              previewAssets: product.previewAssets,
              disableStaticBackground: true,
              size: "large",
              targetSize: tmp18,
            };
            tmp24Result = closure_8(user(8486), obj27);
          }
          tmp24Result2 = closure_8(closure_5, obj25);
        }
      }
      const str = giftCode(5081);
      const match = str.match(first);
      const obj28 = { type: giftCode(1980).CollectiblesItemType.AVATAR_DECORATION };
      const withResult = match.with(obj28, (avatarDecoration) => {
        let avatarSource;
        const Avatar = native.Avatar;
        if (user != null) {
          const getAvatarSource = user.getAvatarSource;
          avatarSource = getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_SUCCESS]);
        }
        const obj = { source: avatarSource, avatarDecoration, size: native.AvatarSizes.GIFT_SUCCESS, animate: true };
        return metroImportAll(Avatar, obj);
      });
      const obj29 = { type: giftCode(1980).CollectiblesItemType.PROFILE_EFFECT };
      const withResult1 = withResult.with(obj29, (profileEffect) => {
        const obj = { user, profileEffect };
        return metroImportAll(ProfileEffectUserPreviewDefault, obj);
      });
      const obj30 = { type: giftCode(1980).CollectiblesItemType.PROFILE_FRAME };
      const withResult2 = withResult1.with(obj30, (profileFrame) => {
        const obj = { user, profileFrame };
        return metroImportAll(ProfileFrameUserPreviewDefault, obj);
      });
      const obj31 = { type: giftCode(1980).CollectiblesItemType.NAMEPLATE };
      const withResult3 = withResult2.with(obj31, (nameplate) => {
        let obj2;
        const obj = {
          style: nameplateContainer.nameplateContainer,
          children: metroImportAll(NameplatePreview.NameplatePreview, obj2),
        };
        obj2 = { user, nameplate };
        return metroImportAll(hasOwnProperty, obj);
      });
      tmp24Result2 = withResult3.otherwise(() => {
        const obj = { giftStyle: giftCode.giftStyle };
        return metroImportAll(GiftBoxAnimationDefault, obj);
      });
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx");

export default tmp5;
