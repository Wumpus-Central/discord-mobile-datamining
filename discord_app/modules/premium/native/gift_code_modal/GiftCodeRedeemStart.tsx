// discord_app/modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl7 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import CollectiblesItemType from "../../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import merged5 from "../../../../../_runtime/05081_merged5.js";
import GiftCodeUtils from "../../../../utils/GiftCodeUtils.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import GameIcon from "../../../game_detection/native/GameIcon.tsx";
import SlayerStorefrontUtils from "../../../slayer_storefront/SlayerStorefrontUtils.tsx";
import SoundboardActionCreators from "../../../soundboard/SoundboardActionCreators.tsx";
import ExperimentalGameControllerLinkIcon2 from "../../../../design/components/Icon/native/redesign/generated/ExperimentalGameControllerLinkIcon.tsx";
import BundleSampleV2Default from "../../../collectibles/native/BundleSampleV2.tsx";
import SocialLayerStorefrontActionCreators from "../../../slayer_storefront/SocialLayerStorefrontActionCreators.tsx";
import ProfileEffectUserPreviewDefault from "../../../collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx";
import ProfileFrameUserPreviewDefault from "../../../collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx";
import NameplatePreview from "../../../collectibles/nameplates/native/NameplatePreview.tsx";
import actions_GiftCodeActionCreatorsDefault from "../../../../actions/native/GiftCodeActionCreators.tsx";
import GiftCodeRedeemModal from "GiftCodeRedeemModal.tsx";
import SlayerStorefrontGiftPreviewDefault from "../../../slayer_storefront/native/SlayerStorefrontGiftPreview.tsx";
import GiftBoxAnimationDefault from "GiftBoxAnimation.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import GiftCodeStore from "../../../../stores/GiftCodeStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import SKUStore from "../../../../stores/game_store/SKUStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let closure_9, giftCode, navigation;

let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
function getGiftCodeHeaderText(isSubscription) {
  let P;
  let P2;
  let P3;
  let P4;
  let P5;
  let isBundle;
  let itemType;
  let sender;
  let sku;
  let subscriptionGiftStartHeaderText;
  let subscriptionPlan;
  const f106538 = () => {
    const intl = intl7.intl;
    const obj = { sender };
    return intl.formatToPlainString(intl7.t.JUV1tL, obj);
  };
  const f106539 = () => {
    const intl = sender(dependencyMap[10]).intl;
    return intl.string(sender(dependencyMap[10]).t.iJ8823);
  };
  const f106540 = () => {
    const intl = intl7.intl;
    const obj = { sender };
    return intl.formatToPlainString(intl7.t.SKduyh, obj);
  };
  const f106541 = () => {
    const intl = intl7.intl;
    const obj = { sender };
    return intl.formatToPlainString(intl7.t["1w42T2"], obj);
  };
  const f106542 = () => {
    const intl = intl7.intl;
    const obj = { sender };
    return intl.formatToPlainString(intl7.t.vFiQlU, obj);
  };
  const f106543 = () => {
    const intl = intl7.intl;
    const obj = { sender };
    return intl.formatToPlainString(intl7.t["UH/EQL"], obj);
  };
  const f106544 = () => {
    const intl = sender(dependencyMap[10]).intl;
    return intl.string(sender(dependencyMap[10]).t["2ZO6CC"]);
  };
  const f106545 = () => {
    const intl = sender(dependencyMap[10]).intl;
    return intl.string(sender(dependencyMap[10]).t["2NxdjX"]);
  };
  const f106546 = () => {
    const intl = sender(dependencyMap[10]).intl;
    return intl.string(sender(dependencyMap[10]).t.v7F232);
  };
  ({ subscriptionPlan, sender } = isSubscription);
  ({ sku, itemType, isBundle } = isSubscription);
  if (isSubscription.isSubscription) {
    if (null != subscriptionPlan) {
      let name;
      const getSubscriptionGiftStartHeaderText = sender(5317).getSubscriptionGiftStartHeaderText;
      sender(5317);
      if (sku != null) {
        name = sku.name;
      }
      subscriptionGiftStartHeaderText = getSubscriptionGiftStartHeaderText(subscriptionPlan, sender, name);
    }
    return subscriptionGiftStartHeaderText;
  }
  let obj = sender(6741);
  if (obj.isGameItemSKU(sku)) {
    let intl = sender(1126).intl;
    subscriptionGiftStartHeaderText = intl.string(sender(1126).t["Bn1J+a"]);
  } else {
    const obj2 = { type: itemType, isBundle, sender };
    const str = sender(5081);
    const match = str.match(obj2);
    const obj3 = { isBundle: true, sender: P.not(sender(5081).P.nullish) };
    const _with = match.with;
    P = sender(5081).P;
    const obj4 = { isBundle: true, sender: sender(5081).P.nullish };
    const _with2 = _with(obj3, f106538).with;
    _with(obj3, f106538);
    const obj5 = { type: sender(1980).CollectiblesItemType.AVATAR_DECORATION, sender: P2.not(sender(5081).P.nullish) };
    const _with3 = _with2(obj4, f106539).with;
    _with2(obj4, f106539);
    P2 = sender(5081).P;
    const obj6 = { type: sender(1980).CollectiblesItemType.PROFILE_EFFECT, sender: P3.not(sender(5081).P.nullish) };
    const _with4 = _with3(obj5, f106540).with;
    _with3(obj5, f106540);
    P3 = sender(5081).P;
    const obj7 = { type: sender(1980).CollectiblesItemType.NAMEPLATE, sender: P4.not(sender(5081).P.nullish) };
    const _with5 = _with4(obj6, f106541).with;
    _with4(obj6, f106541);
    P4 = sender(5081).P;
    const obj8 = { type: sender(1980).CollectiblesItemType.PROFILE_FRAME, sender: P5.not(sender(5081).P.nullish) };
    const _with6 = _with5(obj7, f106542).with;
    _with5(obj7, f106542);
    P5 = sender(5081).P;
    const obj9 = { type: sender(1980).CollectiblesItemType.AVATAR_DECORATION, sender: sender(5081).P.nullish };
    const _with7 = _with6(obj8, f106543).with;
    _with6(obj8, f106543);
    const obj10 = { type: sender(1980).CollectiblesItemType.PROFILE_EFFECT, sender: sender(5081).P.nullish };
    const _with8 = _with7(obj9, f106544).with;
    _with7(obj9, f106544);
    const obj11 = { type: sender(1980).CollectiblesItemType.NAMEPLATE, sender: sender(5081).P.nullish };
    const _with9 = _with8(obj10, f106545).with;
    _with8(obj10, f106545);
    const obj12 = { type: sender(1980).CollectiblesItemType.PROFILE_FRAME, sender: sender(5081).P.nullish };
    const _with10 = _with9(obj11, f106546).with;
    _with9(obj11, f106546);
    const _with10Result = _with10(obj12, () => {
      const intl = sender(dependencyMap[10]).intl;
      return intl.string(sender(dependencyMap[10]).t["1+tgC0"]);
    });
    subscriptionGiftStartHeaderText = _with10Result.otherwise(() => {
      const intl = sender(dependencyMap[10]).intl;
      return intl.string(sender(dependencyMap[10]).t["2BWscv"]);
    });
  }
}
({ ImageBackground: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ AnalyticEvents: unpackModuleId, GiftCodeModalStates: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let obj = {
  container: obj2,
  body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28 },
  bodyWithMessage: { flex: 0 },
  nameplateContainer: { width: "100%" },
  nameplateContainerOffCenter: { paddingBottom: 56 },
  message: { gap: 8 },
  text: { textAlign: "center", paddingHorizontal: 32 },
  footer: { paddingHorizontal: 24, paddingBottom: 12 },
  confettiBackground: {
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.4,
    height: 275,
  },
  emojiContainer: { justifyContent: "center", alignItems: "center" },
  imageWrapper: { position: "relative", width: "100%", alignItems: "center", justifyContent: "center" },
  collectiblesAsset: { margin: 40 },
  collectiblesAssetBundle: {
    margin: 20,
    alignSelf: "stretch",
    minHeight: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  giftCardAsset: { marginTop: 20, marginBottom: 40 },
  linkAccountIcon: { marginRight: 4 },
};
obj2 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_16 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (giftCode) => {
      let first;
      let firstProfileEffect;
      let onLayout;
      let ref;
      let soundId;
      let str;
      let tmp19;
      let tmp23;
      let tmp8;
      let tmp = giftCode;
      const tmp2 = soundId;
      let obj = giftCode(soundId[16]);
      const cResult = obj.c(118);
      giftCode = giftCode.giftCode;
      const customMessage = giftCode.customMessage;
      soundId = giftCode.soundId;
      const emojiName = giftCode.emojiName;
      const user = giftCode.user;
      let closure_5 = firstProfileEffect();
      firstProfileEffect();
      let obj2 = giftCode(soundId[17]);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = str;
        let items = [str];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== giftCode.code) {
        const fn = function y() {
          return GiftCodeStore.getIsAccepting(giftCode.code);
        };
        cResult[1] = giftCode.code;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      let tmpResult = tmp(tmp2[18]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      const items1 = [closure_9];
      const tmpResult9 = tmp(tmp2[18]);
      str = tmpResult9.useStateFromStores(items1, () => {
        const obj = UserUtilsDefault;
        return obj.getName(UserStore.getUser(giftCode.userId));
      });
      if (str == null) {
        str = "";
      }
      const tmp11 = customMessage(tmp2[20])(giftCode.code, user);
      closure_9 = tmp11;
      const tmpResult10 = tmp(tmp2[21]);
      const getOrFetchSubscriptionPlan = tmpResult10.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
      const tmpResult11 = tmp(tmp2[22]);
      const getOrFetchApplication = tmpResult11.useGetOrFetchApplication(giftCode.applicationId);
      const useFetchCollectiblesProduct = tmp(tmp2[23]).useFetchCollectiblesProduct;
      tmp(tmp2[23]);
      let skuId = null;
      const tmpResult13 = tmp(tmp2[24]);
      if (tmpResult13.isCollectiblesGiftCode(giftCode)) {
        skuId = giftCode.skuId;
      }
      const product = useFetchCollectiblesProduct(skuId, true).product;
      let first1;
      if (product != null) {
        first1 = product.items[0];
      }
      let type;
      if (product != null) {
        type = product.type;
      }
      const isBundle = type === tmp(tmp2[12]).CollectiblesItemType.BUNDLE;
      type === tmp(tmp2[12]).CollectiblesItemType.BUNDLE;
      if (cResult[3] !== product) {
        let tmp20 = product;
        if (product == null) {
          let obj3 = { items: [] };
          tmp20 = obj3;
        }
        cResult[3] = product;
        cResult[4] = tmp20;
        tmp19 = tmp20;
      } else {
        tmp19 = cResult[4];
      }
      const tmpResult14 = tmp(tmp2[25]);
      const shopProductItems = tmpResult14.useShopProductItems(tmp19);
      const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
      firstProfileEffect = shopProductItems.firstProfileEffect;
      const firstNameplate = shopProductItems.firstNameplate;
      let closure_18 = null != customMessage && customMessage.length > 0;
      const tmp22 = null != customMessage && customMessage.length > 0;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [getOrFetchSubscriptionPlan];
        cResult[5] = items2;
        tmp23 = items2;
      } else {
        tmp23 = cResult[5];
      }
      if (cResult[6] !== giftCode.skuId) {
        class U {
          constructor() {
            return SKUStore.get(giftCode.skuId);
          }
        }
        cResult[6] = giftCode.skuId;
        cResult[7] = U;
      } else {
        class U {
          constructor() {
            return SKUStore.get(giftCode.skuId);
          }
        }
      }
      const tmpResult15 = tmp(tmp2[18]);
      const stateFromStores1 = tmpResult15.useStateFromStores(tmp23, U);
      let tmp27 = tmp10(tmp2[26])(getOrFetchApplication);
      const fetched = tmp27.fetched;
      const hasAlreadyLinked = tmp27.hasAlreadyLinked;
      const canStartAuthorization = tmp27.canStartAuthorization;
      const startAuthorization = tmp27.startAuthorization;
      const tmpResult16 = tmp(tmp2[27]);
      const socialLayerStorefrontMobileAccountLinkingDisabled =
        tmpResult16.useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
      const tmp10Result = customMessage(tmp2[28]);
      const analyticsLocations = tmp10Result(tmp10(tmp2[29]).GIFT_CODE_MODAL).analyticsLocations;
      if (cResult[8] === analyticsLocations) {
        class U {
          constructor() {
            return SKUStore.get(giftCode.skuId);
          }
        }
      }
      let obj4 = {
        analyticsLocations,
        skuId: giftCode.skuId,
        applicationId: giftCode.applicationId,
        canStartAuthorization,
      };
      cResult[8] = analyticsLocations;
      cResult[9] = canStartAuthorization;
      cResult[10] = giftCode.applicationId;
      cResult[11] = giftCode.skuId;
      cResult[12] = obj4;
    }
  : (giftCode) => {
      let ExperimentalGameControllerLinkIcon;
      let _undefined;
      let c16;
      let firstAvatarDecoration;
      let firstNameplate;
      let firstProfileEffect;
      let intl;
      let intl2;
      let intl3;
      let intl5;
      let intl6;
      let items10;
      let obj12;
      let obj13;
      let obj17;
      let obj23;
      let obj9;
      let stringResult;
      let tmp27;
      let tmp32Result;
      let tmp32Result4;
      let tmp32Result5;
      let tmp32Result6;
      let tmp33;
      let type1;
      let withResult3;
      giftCode = giftCode.giftCode;
      const customMessage = giftCode.customMessage;
      const soundId = giftCode.soundId;
      const emojiName = giftCode.emojiName;
      const user = giftCode.user;
      let message;
      let closure_8;
      let stateFromStores1;
      let fetched;
      let hasAlreadyLinked;
      let canStartAuthorization;
      let startAuthorization;
      let analyticsLocations;
      let ref;
      c16 = undefined;
      let tmp = c16();
      let closure_5 = tmp;
      let obj = giftCode(soundId[17]);
      let closure_6 = obj.useNavigation();
      let obj2 = giftCode(soundId[18]);
      let items = [closure_8];
      const stateFromStores = obj2.useStateFromStores(items, () => GiftCodeStore.getIsAccepting(giftCode.code));
      let obj3 = giftCode(soundId[18]);
      const items1 = [stateFromStores1];
      let str = obj3.useStateFromStores(items1, () => {
        const obj = UserUtilsDefault;
        return obj.getName(UserStore.getUser(giftCode.userId));
      });
      if (str == null) {
        str = "";
      }
      const tmp6 = customMessage(soundId[20])(giftCode.code, user);
      message = tmp6;
      const tmp2Result = giftCode(soundId[21]);
      const getOrFetchSubscriptionPlan = tmp2Result.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
      const tmp2Result9 = giftCode(soundId[22]);
      const getOrFetchApplication = tmp2Result9.useGetOrFetchApplication(giftCode.applicationId);
      const useFetchCollectiblesProduct = tmp2(soundId[23]).useFetchCollectiblesProduct;
      giftCode(soundId[23]);
      let skuId = null;
      const tmp2Result11 = giftCode(soundId[24]);
      if (tmp2Result11.isCollectiblesGiftCode(giftCode)) {
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
      const BUNDLE = tmp2(tmp3[12]).CollectiblesItemType.BUNDLE;
      let tmp14 = product;
      const useShopProductItems = tmp2(soundId[25]).useShopProductItems;
      giftCode(soundId[25]);
      if (product == null) {
        let obj4 = { items: [] };
        tmp14 = obj4;
      }
      const shopProductItems = useShopProductItems(tmp14);
      let tmp29Result = null != customMessage;
      ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
      if (tmp29Result) {
        tmp29Result = customMessage.length > 0;
      }
      closure_8 = tmp29Result;
      const items2 = [fetched];
      const tmp2Result13 = giftCode(soundId[18]);
      stateFromStores1 = tmp2Result13.useStateFromStores(items2, () => SKUStore.get(giftCode.skuId));
      const tmp18 = customMessage(soundId[26])(getOrFetchApplication);
      fetched = tmp18.fetched;
      hasAlreadyLinked = tmp18.hasAlreadyLinked;
      canStartAuthorization = tmp18.canStartAuthorization;
      startAuthorization = tmp18.startAuthorization;
      const tmp2Result14 = giftCode(soundId[27]);
      const socialLayerStorefrontMobileAccountLinkingDisabled =
        tmp2Result14.useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
      const tmp5Result = customMessage(soundId[28]);
      analyticsLocations = tmp5Result(tmp5(tmp3[29]).GIFT_CODE_MODAL).analyticsLocations;
      const obj5 = {
        analyticsLocations,
        skuId: giftCode.skuId,
        applicationId: giftCode.applicationId,
        canStartAuthorization,
      };
      ref = user.useRef(obj5);
      const items3 = [canStartAuthorization];
      const effect = user.useEffect(() => {
        ref.current.canStartAuthorization = canStartAuthorization;
      }, items3);
      const items4 = [fetched, hasAlreadyLinked, stateFromStores1];
      const effect1 = user.useEffect(() => {
        let applicationId;
        let skuId;
        if (fetched) {
          const obj = SlayerStorefrontUtils;
          if (obj.isGameItemSKU(stateFromStores1)) {
            ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
            const obj3 = {
              location_stack: analyticsLocations,
              sku_id: skuId,
              application_id: applicationId,
              is_gift: true,
              is_account_linked: hasAlreadyLinked,
              can_start_authorization: canStartAuthorization,
            };
            const obj2 = AnalyticsUtilsDefault;
            obj2.track(unpackModuleId.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj3);
          }
        }
      }, items4);
      const items5 = [stateFromStores1];
      const effect2 = user.useEffect(() => {
        const obj = SlayerStorefrontUtils;
        if (obj.isGameItemSKU(stateFromStores1)) {
          const tmpResult = SocialLayerStorefrontActionCreators;
          const socialLayerStorefrontConfig = tmpResult.fetchSocialLayerStorefrontConfig();
        }
      }, items5);
      const items6 = [giftCode, customMessage, emojiName, soundId];
      const effect3 = user.useEffect(() => {
        const obj = GiftCodeUtils;
        const obj2 = { step: canStartAuthorization.CONFIRM, giftCode, customMessage, emojiName, soundId };
        obj.trackStep(obj2);
      }, items6);
      const items7 = [soundId, giftCode.giftStyle];
      const effect4 = user.useEffect(() => {
        const tmp = null != giftCode.giftStyle && null != soundId;
        if (tmp) {
          const obj2 = { soundId, volume: 1 };
          const obj = SoundboardActionCreators;
          obj.playSoundLocally(null, obj2);
        }
      }, items7);
      [tmp27, c16] = emojiName(user.useState(), 2);
      emojiName(user.useState(), 2);
      const callback = user.useCallback((nativeEvent) => {
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
      const obj6 = { bottom: true, style: tmp.container, children: null };
      const items8 = [tmp.body];
      let bodyWithMessage;
      const SafeAreaPaddingView = tmp2(tmp3[49]).SafeAreaPaddingView;
      const tmp30 = message;
      if (tmp29Result) {
        bodyWithMessage = tmp.bodyWithMessage;
      }
      const obj7 = { contentContainerStyle: items8, alwaysBounceVertical: false, children: null };
      items8[1] = bodyWithMessage;
      const obj8 = {
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp.text,
        accessibilityRole: "header",
        children: tmp33(obj9),
      };
      obj9 = {
        isSubscription: giftCode.isSubscription,
        subscriptionPlan: getOrFetchSubscriptionPlan,
        sender: str,
        itemType: type1,
        isBundle: type === BUNDLE,
        sku: stateFromStores1,
      };
      type1 = undefined;
      const Text = tmp2(tmp3[33]).Text;
      tmp33 = ref;
      if (first != null) {
        type1 = first.type;
      }
      const items9 = [startAuthorization(Text, obj8), , ,];
      const obj10 = { style: tmp.imageWrapper, children: tmp32Result };
      tmp32Result = null != emojiName;
      if (tmp32Result) {
        const obj11 = {
          source: giftCode(soundId[47]),
          style: tmp.confettiBackground,
          children: startAuthorization(closure_6, obj12),
        };
        obj12 = { style: tmp.emojiContainer, children: startAuthorization(customMessage(soundId[48]), obj13) };
        obj13 = { emojiName, randomizeSizing: true };
        tmp32Result = tmp32(closure_5, obj11);
      }
      items9[1] = startAuthorization(closure_6, obj10);
      if (null == first) {
        if (null != getOrFetchApplication) {
          const tmp2Result15 = giftCode(soundId[9]);
          if (tmp2Result15.isGameItemSKU(stateFromStores1)) {
            const obj14 = {
              sku: stateFromStores1,
              application: getOrFetchApplication,
              sender: str,
              hasAccountLinked: hasAlreadyLinked,
              canStartAuthorization,
              mobileAccountLinkingDisabled: socialLayerStorefrontMobileAccountLinkingDisabled,
            };
            tmp32Result4 = tmp32(tmp5(tmp3[34]), obj14);
          }
          items9[2] = tmp32Result4;
          if (tmp29Result) {
            const obj15 = { style: tmp.message, children: items10 };
            const obj16 = {
              variant: "eyebrow",
              color: "text-default",
              style: tmp.text,
              children: intl.format(giftCode(soundId[10]).t["6yrIzU"], obj17),
            };
            const Text2 = tmp2(tmp3[33]).Text;
            intl = tmp2(tmp3[10]).intl;
            obj17 = { sender: str };
            items10 = [startAuthorization(Text2, obj16)];
            let str3 = "heading-xxl/semibold";
            const Text3 = tmp2(tmp3[33]).Text;
            if (customMessage.length > 110) {
              str3 = "heading-xl/semibold";
            }
            const obj18 = { variant: str3, style: tmp.text, children: customMessage };
            items10[1] = startAuthorization(Text3, obj18);
            tmp29Result = tmp29(tmp36, obj15);
          }
          items9[3] = tmp29Result;
          obj7.children = items9;
          const items11 = [analyticsLocations(tmp30, obj7)];
          const obj19 = { style: tmp.footer, children: tmp32Result5 };
          if (giftCode.isClaimed) {
            const obj20 = {
              text: intl6.string(giftCode(soundId[10]).t.XiOHRX),
              size: "md",
              onPress() {
                const obj = { giftCode };
                return closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.SUCCESS, obj);
              },
            };
            const Button3 = tmp2(tmp3[42]).Button;
            intl6 = tmp2(tmp3[10]).intl;
            tmp32Result5 = tmp32(Button3, obj20);
          } else if (null != tmp6) {
            const obj21 = {
              text: intl5.string(giftCode(soundId[10]).t["3nWhcJ"]),
              size: "md",
              onPress() {
                const obj = GiftCodeUtils;
                const obj2 = { step: canStartAuthorization.ERROR, giftCode, customMessage, emojiName, soundId };
                obj.trackStep(obj2);
                const obj3 = { message };
                closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.ERROR, obj3);
              },
            };
            const Button2 = tmp2(tmp3[42]).Button;
            intl5 = tmp2(tmp3[10]).intl;
            tmp32Result5 = tmp32(Button2, obj21);
          } else {
            const tmp2Result16 = giftCode(soundId[9]);
            if (tmp2Result16.isGameItemSKU(stateFromStores1)) {
              if (!hasAlreadyLinked) {
                if (canStartAuthorization) {
                  let obj22;
                  if (!socialLayerStorefrontMobileAccountLinkingDisabled) {
                    obj22 = {
                      text: intl2.string(tmp2(soundId[10]).t["VDAhr+"]),
                      size: "md",
                      icon: startAuthorization(ExperimentalGameControllerLinkIcon, obj23),
                      onPress() {
                        const obj = AnalyticsUtilsDefault;
                        const obj2 = {
                          location_stack: analyticsLocations,
                          sku_id: giftCode.skuId,
                          application_id: giftCode.applicationId,
                          is_gift: true,
                        };
                        obj.track(unpackModuleId.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj2);
                        const obj3 = { analyticsLocations };
                        startAuthorization(obj3);
                      },
                    };
                    intl2 = tmp2(tmp3[10]).intl;
                    obj23 = { size: "xs", color: customMessage(soundId[14]).colors.WHITE, style: tmp.linkAccountIcon };
                    ExperimentalGameControllerLinkIcon = tmp2(tmp3[45]).ExperimentalGameControllerLinkIcon;
                  }
                  tmp32Result5 = tmp32(tmp42, obj22);
                }
                const obj24 = {
                  text: intl3.string(giftCode(soundId[10]).t.cpT0Cq),
                  size: "md",
                  onPress() {
                    const arr = customMessage(soundId[44]);
                    arr.pop();
                  },
                };
                intl3 = tmp2(tmp3[10]).intl;
                obj22 = obj24;
              }
            }
            const obj25 = {
              disabled: stateFromStores,
              text: stringResult,
              size: "md",
              onPress() {
                let obj = actions_GiftCodeActionCreatorsDefault;
                let obj2 = {
                  code: giftCode.code,
                  onRedeemed() {
                    const obj = giftCode(soundId[8]);
                    const obj2 = { step: canStartAuthorization.SUCCESS, giftCode, customMessage, emojiName, soundId };
                    obj.trackStep(obj2);
                    const obj3 = { giftCode };
                    closure_1_6.push(giftCode(soundId[43]).GiftCodeModalScreens.SUCCESS, obj3);
                  },
                  onError(error) {
                    let obj4;
                    const obj = giftCode(soundId[8]);
                    const obj2 = { step: canStartAuthorization.ERROR, giftCode, customMessage, emojiName, soundId };
                    obj.trackStep(obj2);
                    const push = closure_1_6.push;
                    const obj3 = { message: obj4.getGiftCodeRedeemError(error, user) };
                    const ERROR = giftCode(soundId[43]).GiftCodeModalScreens.ERROR;
                    obj4 = giftCode(soundId[8]);
                    push(ERROR, obj3);
                  },
                };
                obj.redeemGiftCode(obj2);
              },
            };
            const Button = tmp2(tmp3[42]).Button;
            const intl4 = tmp2(tmp3[10]).intl;
            const string = intl4.string;
            const t = tmp2(tmp3[10]).t;
            if (stateFromStores) {
              stringResult = string(t.rTeOBK);
            } else {
              stringResult = string(t["3nWhcJ"]);
            }
            tmp32Result5 = tmp32(Button, obj25);
          }
          items11[1] = startAuthorization(closure_6, obj19);
          obj6.children = items11;
          return analyticsLocations(SafeAreaPaddingView, obj6);
        }
      }
      if (null == first) {
        if (null != getOrFetchApplication) {
          if (null == giftCode.giftStyle) {
            const obj26 = {
              game: getOrFetchApplication,
              size: giftCode(soundId[35]).GameIconSizes.LARGE,
              skuId: giftCode.skuId,
            };
            const tmp5Result2 = customMessage(soundId[35]);
            tmp32Result4 = tmp32(tmp5Result2, obj26);
          }
        }
      }
      if (type === BUNDLE) {
        let obj29;
        if (null != product) {
          const obj27 = { style: tmp.collectiblesAssetBundle, onLayout: callback, children: tmp32Result6 };
          tmp32Result6 = null != tmp27;
          if (tmp32Result6) {
            const obj28 = {
              deco: firstAvatarDecoration,
              pfx: firstProfileEffect,
              nameplate: firstNameplate,
              previewAssets: product.previewAssets,
              disableStaticBackground: true,
              size: "large",
              targetSize: tmp27,
            };
            tmp32Result6 = tmp32(tmp5(tmp3[36]), obj28);
          }
          obj29 = obj27;
        }
        tmp32Result4 = tmp32(tmp36, obj29);
      }
      obj29 = {
        style: giftCode.isSubscription ? tmp.giftCardAsset : tmp.collectiblesAsset,
        children: withResult3.otherwise(() => {
          const obj = { giftStyle: giftCode.giftStyle };
          return map1(GiftBoxAnimationDefault, obj);
        }),
      };
      const str2 = giftCode(soundId[11]);
      const match = str2.match(first);
      const obj30 = { type: giftCode(soundId[12]).CollectiblesItemType.AVATAR_DECORATION };
      const withResult = match.with(obj30, (avatarDecoration) => {
        let getAvatarSource;
        const obj = {
          source: getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]),
          avatarDecoration,
          size: native.AvatarSizes.GIFT_START,
          animate: true,
        };
        const Avatar = native.Avatar;
        getAvatarSource = user.getAvatarSource;
        return map1(Avatar, obj);
      });
      const obj31 = { type: giftCode(soundId[12]).CollectiblesItemType.PROFILE_EFFECT };
      const withResult1 = withResult.with(obj31, (profileEffect) => {
        const obj = { user, profileEffect };
        return map1(ProfileEffectUserPreviewDefault, obj);
      });
      const obj32 = { type: giftCode(soundId[12]).CollectiblesItemType.PROFILE_FRAME };
      const withResult2 = withResult1.with(obj32, (profileFrame) => {
        const obj = { user, profileFrame };
        return map1(ProfileFrameUserPreviewDefault, obj);
      });
      const obj33 = { type: giftCode(soundId[12]).CollectiblesItemType.NAMEPLATE };
      withResult3 = withResult2.with(obj33, (nameplate) => {
        let obj2;
        const items = [closure_5.nameplateContainer];
        let prop;
        if (!closure_8) {
          prop = closure_5.nameplateContainerOffCenter;
        }
        items[1] = prop;
        const obj = { style: items, children: map1(NameplatePreview.NameplatePreview, obj2) };
        obj2 = { user, nameplate };
        return map1(metroRequire, obj);
      });
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx");

export default tmp5;
