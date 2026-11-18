// discord_app/modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import GiftCodeUtils from "../../../../utils/GiftCodeUtils.tsx";
import SoundboardActionCreators from "../../../soundboard/SoundboardActionCreators.tsx";
import SlayerStorefrontUtils from "../../../slayer_storefront/SlayerStorefrontUtils.tsx";
import ProfileEffectUserPreviewDefault from "../../../collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx";
import SocialLayerStorefrontActionCreators from "../../../slayer_storefront/SocialLayerStorefrontActionCreators.tsx";
import ProfileFrameUserPreviewDefault from "../../../collectibles/profile_frames/native/previews/ProfileFrameUserPreview.tsx";
import NameplatePreview from "../../../collectibles/nameplates/native/NameplatePreview.tsx";
import actions_GiftCodeActionCreatorsDefault from "../../../../actions/native/GiftCodeActionCreators.tsx";
import GiftCodeRedeemModal from "GiftCodeRedeemModal.tsx";
import GiftBoxAnimationDefault from "GiftBoxAnimation.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GiftCodeStore from "../../../../stores/GiftCodeStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import SKUStore from "../../../../stores/game_store/SKUStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: closure_6, StyleSheet } = get_ActivityIndicator);
const SubscriptionIntervalTypes = fn(1390).SubscriptionIntervalTypes;
const Constants = fn(1072);
({ AnalyticEvents: closure_11, GiftCodeModalStates: closure_12, NOOP: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4823);
let obj2 = {
  container: { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28 },
  bodyWithMessage: { flex: 0 },
  nameplateContainer: { width: "100%" },
  nameplateContainerOffCenter: { paddingBottom: 56 },
  message: { gap: 8 },
  text: { textAlign: "center", paddingHorizontal: 32 },
  footer: { paddingHorizontal: 24, paddingBottom: 12 },
  renewsText: null,
  confettiBackground: null,
  confettiImage: null,
  emojiContainer: null,
  imageWrapper: null,
  collectiblesAsset: null,
  collectiblesAssetBundle: null,
  giftCardAsset: null,
  linkAccountIcon: null,
};
let obj3 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.renewsText = { textAlign: "center", paddingHorizontal: 32, marginTop: nativeDefault.space.PX_8 };
obj2.confettiBackground = {
  justifyContent: "center",
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  opacity: 0.4,
  height: 275,
};
let obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.width = "100%";
obj5.height = 275;
obj2.confettiImage = obj5;
obj2.emojiContainer = { justifyContent: "center", alignItems: "center" };
obj2.imageWrapper = { position: "relative", width: "100%", alignItems: "center", justifyContent: "center" };
obj2.collectiblesAsset = { margin: 40 };
obj2.collectiblesAssetBundle = {
  margin: 20,
  alignSelf: "stretch",
  minHeight: 250,
  alignItems: "center",
  justifyContent: "center",
};
obj2.giftCardAsset = { marginTop: 20, marginBottom: 40 };
obj2.linkAccountIcon = { marginRight: 4 };
let closure_17 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx");

export default function GiftCodeRedeemStart(giftCode) {
  giftCode = giftCode.giftCode;
  const customMessage = giftCode.customMessage;
  const soundId = giftCode.soundId;
  const emojiName = giftCode.emojiName;
  const user = giftCode.user;
  let stateFromStores1;
  let message;
  closure_9 = undefined;
  let stateFromStores2;
  let fetched;
  let hasAlreadyLinked;
  let canStartAuthorization;
  let startAuthorization;
  let analyticsLocations;
  let ref;
  c17 = undefined;
  let tmp = c17();
  closure_5 = tmp;
  const tmp2 = giftCode;
  const tmp3 = soundId;
  closure_6 = giftCode(soundId[17]).useNavigation();
  let obj = giftCode(soundId[17]);
  items = [stateFromStores1];
  const stateFromStores = giftCode(soundId[18]).useStateFromStores(items, () =>
    GiftCodeStore.getIsAccepting(giftCode.code),
  );
  let obj2 = giftCode(soundId[18]);
  const items1 = [stateFromStores1];
  stateFromStores1 = giftCode(soundId[18]).useStateFromStores(items1, () => GiftCodeStore.get(giftCode.code));
  if (stateFromStores1 == null) {
    stateFromStores1 = giftCode;
  }
  let obj3 = giftCode(soundId[18]);
  const result = tmp2(tmp3[19]).isPendingGiftSubscriptionCode(stateFromStores1);
  const tmp2Result = tmp2(tmp3[19]);
  const items2 = [message];
  let str = tmp2(tmp3[18]).useStateFromStores(items2, () =>
    UserUtilsDefault.getName(UserStore.getUser(giftCode.userId)),
  );
  if (str == null) {
    str = "";
  }
  const tmp8 = customMessage(tmp3[22])(giftCode.code, user);
  message = tmp8;
  const tmp2Result13 = tmp2(tmp3[18]);
  const getOrFetchSubscriptionPlan = tmp2(tmp3[23]).useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const tmp2Result14 = tmp2(tmp3[23]);
  const getOrFetchApplication = tmp2(tmp3[24]).useGetOrFetchApplication(giftCode.applicationId);
  const tmp2Result15 = tmp2(tmp3[24]);
  const tmp2Result16 = tmp2(tmp3[25]);
  let skuId = null;
  if (tmp2Result17.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = tmp2Result16.useFetchCollectiblesProduct(skuId, true).product;
  let first;
  if (product != null) {
    first = product.items[0];
  }
  let type1;
  if (product != null) {
    type1 = product.type;
  }
  tmp2Result17 = tmp2(tmp3[26]);
  let tmp14 = product;
  if (product == null) {
    const obj4 = { items: [] };
    tmp14 = obj4;
  }
  const shopProductItems = tmp2(tmp3[27]).useShopProductItems(tmp14);
  let tmp29Result2 = null != customMessage;
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  if (tmp29Result2) {
    tmp29Result2 = customMessage.length > 0;
  }
  closure_9 = tmp29Result2;
  const tmp2Result18 = tmp2(tmp3[27]);
  const items3 = [closure_9];
  stateFromStores2 = tmp2(tmp3[18]).useStateFromStores(items3, () => SKUStore.get(giftCode.skuId));
  const tmp18 = customMessage(tmp3[28])(getOrFetchApplication);
  fetched = tmp18.fetched;
  hasAlreadyLinked = tmp18.hasAlreadyLinked;
  canStartAuthorization = tmp18.canStartAuthorization;
  startAuthorization = tmp18.startAuthorization;
  const tmp2Result19 = tmp2(tmp3[18]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = tmp2(
    tmp3[29],
  ).useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  const tmp2Result20 = tmp2(tmp3[29]);
  analyticsLocations = customMessage(tmp3[30])(tmp7(tmp3[31]).GIFT_CODE_MODAL).analyticsLocations;
  ref = user.useRef({
    analyticsLocations,
    skuId: giftCode.skuId,
    applicationId: giftCode.applicationId,
    canStartAuthorization,
  });
  const items4 = [canStartAuthorization];
  const effect = user.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items4);
  const items5 = [fetched, hasAlreadyLinked, stateFromStores2];
  const effect1 = user.useEffect(() => {
    if (fetched) {
      if (obj.isGameItemSKU(stateFromStores2)) {
        ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
        const obj3 = {
          location_stack: analyticsLocations,
          sku_id: skuId,
          application_id: applicationId,
          is_gift: true,
          is_account_linked: hasAlreadyLinked,
          can_start_authorization: canStartAuthorization,
        };
        AnalyticsUtilsDefault.track(constants.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj3);
      }
      obj = SlayerStorefrontUtils;
    }
  }, items5);
  const items6 = [stateFromStores2];
  const effect2 = user.useEffect(() => {
    if (obj.isGameItemSKU(stateFromStores2)) {
      const socialLayerStorefrontConfig = SocialLayerStorefrontActionCreators.fetchSocialLayerStorefrontConfig();
      const tmpResult = SocialLayerStorefrontActionCreators;
    }
    obj = SlayerStorefrontUtils;
  }, items6);
  const items7 = [giftCode, customMessage, emojiName, soundId];
  const effect3 = user.useEffect(() => {
    GiftCodeUtils.trackStep({ step: constants2.CONFIRM, giftCode, customMessage, emojiName, soundId });
  }, items7);
  const items8 = [soundId, giftCode.giftStyle];
  const effect4 = user.useEffect(() => {
    let tmp = null != giftCode.giftStyle;
    if (tmp) {
      tmp = null != soundId;
    }
    if (tmp) {
      const obj2 = { soundId, volume: 1 };
      SoundboardActionCreators.playSoundLocally(null, obj2);
    }
  }, items8);
  const obj5 = {
    analyticsLocations,
    skuId: giftCode.skuId,
    applicationId: giftCode.applicationId,
    canStartAuthorization,
  };
  const tmp7Result = customMessage(tmp3[30]);
  [tmp27, c17] = emojiName(user.useState(), 2);
  const callback = user.useCallback((nativeEvent) => {
    ({ width: giftCode, height: customMessage } = nativeEvent.nativeEvent.layout);
    _undefined((arg0) => {
      let size = arg0;
      if (null != arg0) {
        return size;
      }
      const size1 = { width, height };
      size = size1;
    });
  }, []);
  const obj6 = { bottom: true, style: tmp.container, children: null };
  const items9 = [tmp.body];
  let bodyWithMessage;
  if (tmp29Result2) {
    bodyWithMessage = tmp.bodyWithMessage;
  }
  const obj7 = { contentContainerStyle: items9, alwaysBounceVertical: false, children: null };
  items9[1] = bodyWithMessage;
  const obj8 = {
    variant: "heading-xl/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.text,
    accessibilityRole: "header",
    children: null,
  };
  if (first != null) {
    const type = first.type;
  }
  const tmp34 = type1 === tmp2(tmp3[14]).CollectiblesItemType.BUNDLE;
  closure_129_0 = str;
  if (result) {
    const intl2 = tmp2(tmp3[9]).intl;
    const obj9 = { name: str };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp7(tmp3[10]).lhj054, obj9);
  } else {
    if (giftCode.isSubscription) {
      if (null != getOrFetchSubscriptionPlan) {
        let name;
        if (stateFromStores2 != null) {
          name = stateFromStores2.name;
        }
        formatToPlainStringResult = tmp2(tmp3[11]).getSubscriptionGiftStartHeaderText(
          getOrFetchSubscriptionPlan,
          str,
          name,
        );
        const tmp2Result21 = tmp2(tmp3[11]);
      }
    }
    if (tmp2Result22.isGameItemSKU(stateFromStores2)) {
      let intl = tmp2(tmp3[9]).intl;
      formatToPlainStringResult = intl.string(tmp2(tmp3[9]).t["Bn1J+a"]);
    } else {
      const obj10 = { type, isBundle: tmp34, sender: str };
      const match = tmp2(tmp3[13]).match(obj10);
      const obj11 = { isBundle: true, sender: null };
      const P = tmp2(tmp3[13]).P;
      obj11.sender = P.not(tmp2(tmp3[13]).P.nullish);
      const str2 = tmp2(tmp3[13]);
      const obj12 = { isBundle: true, sender: tmp2(tmp3[13]).P.nullish };
      const withResult = match.with(obj11, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
      });
      const obj13 = { type: tmp2(tmp3[14]).CollectiblesItemType.AVATAR_DECORATION, sender: null };
      const P2 = tmp2(tmp3[13]).P;
      obj13.sender = P2.not(tmp2(tmp3[13]).P.nullish);
      const withResult1 = match
        .with(obj11, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
        })
        .with(obj12, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t.iJ8823);
        });
      const obj14 = { type: tmp2(tmp3[14]).CollectiblesItemType.PROFILE_EFFECT, sender: null };
      const P3 = tmp2(tmp3[13]).P;
      obj14.sender = P3.not(tmp2(tmp3[13]).P.nullish);
      const withResult2 = match
        .with(obj11, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
        })
        .with(obj12, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t.iJ8823);
        })
        .with(obj13, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
        });
      const obj15 = { type: tmp2(tmp3[14]).CollectiblesItemType.NAMEPLATE, sender: null };
      const P4 = tmp2(tmp3[13]).P;
      obj15.sender = P4.not(tmp2(tmp3[13]).P.nullish);
      const withResult3 = match
        .with(obj11, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
        })
        .with(obj12, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t.iJ8823);
        })
        .with(obj13, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
        })
        .with(obj14, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
        });
      const obj16 = { type: tmp2(tmp3[14]).CollectiblesItemType.PROFILE_FRAME, sender: null };
      const P5 = tmp2(tmp3[13]).P;
      obj16.sender = P5.not(tmp2(tmp3[13]).P.nullish);
      const withResult4 = match
        .with(obj11, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
        })
        .with(obj12, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t.iJ8823);
        })
        .with(obj13, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
        })
        .with(obj14, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
        })
        .with(obj15, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
        });
      const obj17 = { type: tmp2(tmp3[14]).CollectiblesItemType.AVATAR_DECORATION, sender: tmp2(tmp3[13]).P.nullish };
      const withResult5 = match
        .with(obj11, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
        })
        .with(obj12, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t.iJ8823);
        })
        .with(obj13, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
        })
        .with(obj14, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
        })
        .with(obj15, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
        })
        .with(obj16, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
        });
      const obj18 = { type: tmp2(tmp3[14]).CollectiblesItemType.PROFILE_EFFECT, sender: tmp2(tmp3[13]).P.nullish };
      const withResult6 = match
        .with(obj11, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
        })
        .with(obj12, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t.iJ8823);
        })
        .with(obj13, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
        })
        .with(obj14, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
        })
        .with(obj15, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
        })
        .with(obj16, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
        })
        .with(obj17, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t["2ZO6CC"]);
        });
      const obj19 = { type: tmp2(tmp3[14]).CollectiblesItemType.NAMEPLATE, sender: tmp2(tmp3[13]).P.nullish };
      const withResult7 = match
        .with(obj11, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
        })
        .with(obj12, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t.iJ8823);
        })
        .with(obj13, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
        })
        .with(obj14, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
        })
        .with(obj15, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
        })
        .with(obj16, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
        })
        .with(obj17, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t["2ZO6CC"]);
        })
        .with(obj18, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t["2NxdjX"]);
        });
      const obj20 = { type: tmp2(tmp3[14]).CollectiblesItemType.PROFILE_FRAME, sender: tmp2(tmp3[13]).P.nullish };
      const withResult8 = match
        .with(obj11, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
        })
        .with(obj12, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t.iJ8823);
        })
        .with(obj13, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
        })
        .with(obj14, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
        })
        .with(obj15, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
        })
        .with(obj16, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
        })
        .with(obj17, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t["2ZO6CC"]);
        })
        .with(obj18, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t["2NxdjX"]);
        })
        .with(obj19, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t.v7F232);
        });
      formatToPlainStringResult = match
        .with(obj11, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
        })
        .with(obj12, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t.iJ8823);
        })
        .with(obj13, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
        })
        .with(obj14, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
        })
        .with(obj15, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
        })
        .with(obj16, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
        })
        .with(obj17, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t["2ZO6CC"]);
        })
        .with(obj18, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t["2NxdjX"]);
        })
        .with(obj19, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t.v7F232);
        })
        .with(obj20, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t["1+tgC0"]);
        })
        .otherwise(() => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t["2BWscv"]);
        });
      const withResult9 = match
        .with(obj11, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
        })
        .with(obj12, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t.iJ8823);
        })
        .with(obj13, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
        })
        .with(obj14, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
        })
        .with(obj15, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
        })
        .with(obj16, () => {
          const intl = util.intl;
          return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
        })
        .with(obj17, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t["2ZO6CC"]);
        })
        .with(obj18, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t["2NxdjX"]);
        })
        .with(obj19, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t.v7F232);
        })
        .with(obj20, () => {
          const intl = giftCode(soundId[9]).intl;
          return intl.string(giftCode(soundId[9]).t["1+tgC0"]);
        });
    }
    tmp2Result22 = tmp2(tmp3[12]);
  }
  obj8.children = formatToPlainStringResult;
  const items10 = [startAuthorization(tmp2(tmp3[36]).Text, obj8)];
  let tmp37 = result;
  if (result) {
    tmp37 = null != getOrFetchSubscriptionPlan;
  }
  if (!tmp37) {
    const obj21 = { children: null };
    items10[1] = tmp37;
    obj21.children = items10;
    const items11 = [tmp29(analyticsLocations, obj21), , ,];
    const obj22 = { style: tmp.imageWrapper, children: null };
    let tmp29Result = null != emojiName;
    if (tmp29Result) {
      const obj23 = { style: tmp.confettiBackground, children: null };
      const obj24 = { source: tmp2(tmp3[38]), style: tmp.confettiImage };
      const items12 = [tmp33(tmp7(tmp3[37]), obj24)];
      const obj25 = { style: tmp.emojiContainer, children: null };
      const obj26 = { emojiName, randomizeSizing: true };
      obj25.children = tmp33(tmp7(tmp3[39]), obj26);
      items12[1] = tmp33(tmp40, obj25);
      obj23.children = items12;
      tmp29Result = tmp29(tmp40, obj23);
      const tmp7Result3 = tmp7(tmp3[37]);
    }
    obj22.children = tmp29Result;
    items11[1] = tmp33(closure_5, obj22);
    if (null == first) {
      if (null != getOrFetchApplication) {
        if (tmp2Result23.isGameItemSKU(stateFromStores2)) {
          const obj27 = {
            sku: stateFromStores2,
            application: getOrFetchApplication,
            sender: str,
            hasAccountLinked: hasAlreadyLinked,
            canStartAuthorization,
            mobileAccountLinkingDisabled: socialLayerStorefrontMobileAccountLinkingDisabled,
          };
          let tmp33Result = tmp33(tmp7(tmp3[40]), obj27);
        }
        items11[2] = tmp33Result;
        if (tmp29Result2) {
          const obj28 = { style: tmp.message, children: null };
          const obj29 = { variant: "body-sm/medium", color: "text-default", style: tmp.text, children: null };
          const intl4 = tmp2(tmp3[9]).intl;
          const obj30 = { sender: str };
          obj29.children = intl4.format(tmp2(tmp3[9]).t["6yrIzU"], obj30);
          const items13 = [tmp33(tmp2(tmp3[36]).Text, obj29)];
          let str4 = "heading-xxl/semibold";
          if (customMessage.length > 110) {
            str4 = "heading-xl/semibold";
          }
          const obj31 = { variant: str4, style: tmp.text, children: customMessage };
          items13[1] = tmp33(tmp2(tmp3[36]).Text, obj31);
          obj28.children = items13;
          tmp29Result2 = tmp29(tmp40, obj28);
        }
        items11[3] = tmp29Result2;
        obj7.children = items11;
        const items14 = [tmp29(closure_6, obj7)];
        const obj32 = { style: tmp.footer, children: null };
        if (giftCode.isClaimed) {
          const obj33 = { text: null, size: "md", onPress: null };
          const intl10 = tmp2(tmp3[9]).intl;
          obj33.text = intl10.string(tmp2(tmp3[9]).t.XiOHRX);
          obj33.onPress = function onPress() {
            return closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.SUCCESS, { giftCode: stateFromStores1 });
          };
          let tmp33Result5 = tmp33(tmp2(tmp3[48]).Button, obj33);
        } else if (customMessage(tmp3[20])(stateFromStores1).isResolvingAgreement) {
          const obj34 = { text: null, size: "md", loading: true, disabled: true, onPress: null };
          const intl9 = tmp2(tmp3[9]).intl;
          obj34.text = intl9.string(tmp2(tmp3[9]).t["3nWhcJ"]);
          obj34.onPress = canStartAuthorization;
          tmp33Result5 = tmp33(tmp2(tmp3[48]).Button, obj34);
        } else if (null != tmp8) {
          const obj35 = { text: null, size: "md", onPress: null };
          const intl8 = tmp2(tmp3[9]).intl;
          obj35.text = intl8.string(tmp2(tmp3[9]).t["3nWhcJ"]);
          obj35.onPress = function onPress() {
            GiftCodeUtils.trackStep({ step: constants2.ERROR, giftCode, customMessage, emojiName, soundId });
            closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.ERROR, { message });
          };
          tmp33Result5 = tmp33(tmp2(tmp3[48]).Button, obj35);
        } else {
          if (tmp2Result24.isGameItemSKU(stateFromStores2)) {
            if (!hasAlreadyLinked) {
              if (canStartAuthorization) {
                if (!socialLayerStorefrontMobileAccountLinkingDisabled) {
                  let obj36 = { text: null, size: "md", icon: null, onPress: null };
                  const intl5 = tmp2(tmp3[9]).intl;
                  obj36.text = intl5.string(tmp2(tmp3[9]).t["VDAhr+"]);
                  const obj37 = { size: "xs", color: tmp7(tmp3[16]).colors.WHITE, style: tmp.linkAccountIcon };
                  obj36.icon = tmp33(tmp2(tmp3[51]).ExperimentalGameControllerLinkIcon, obj37);
                  obj36.onPress = function onPress() {
                    AnalyticsUtilsDefault.track(constants.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, {
                      location_stack: analyticsLocations,
                      sku_id: giftCode.skuId,
                      application_id: giftCode.applicationId,
                      is_gift: true,
                    });
                    startAuthorization({ analyticsLocations });
                  };
                }
                tmp33Result5 = tmp33(tmp46, obj36);
              }
              const obj38 = { text: null, size: "md", onPress: null };
              const intl6 = tmp2(tmp3[9]).intl;
              obj38.text = intl6.string(tmp2(tmp3[9]).t.cpT0Cq);
              obj38.onPress = function onPress() {
                customMessage(soundId[50]).pop();
              };
              obj36 = obj38;
            }
          }
          const obj39 = { disabled: stateFromStores, text: null, size: "md", onPress: null };
          const intl7 = tmp2(tmp3[9]).intl;
          const string = intl7.string;
          let rTeOBK = tmp2(tmp3[9]).t;
          if (stateFromStores) {
            rTeOBK = rTeOBK.rTeOBK;
            let stringResult = string(rTeOBK);
          } else {
            stringResult = string(rTeOBK["3nWhcJ"]);
          }
          obj39.text = stringResult;
          obj39.onPress = function onPress() {
            actions_GiftCodeActionCreatorsDefault.redeemGiftCode({
              code: giftCode.code,
              onRedeemed() {
                giftCode(soundId[11]).trackStep({
                  step: hasAlreadyLinked.SUCCESS,
                  giftCode,
                  customMessage,
                  emojiName,
                  soundId,
                });
                closure_1_6.push(giftCode(soundId[49]).GiftCodeModalScreens.SUCCESS, { giftCode: giftCode2 });
              },
              onError(error) {
                giftCode(soundId[11]).trackStep({
                  step: hasAlreadyLinked.ERROR,
                  giftCode,
                  customMessage,
                  emojiName,
                  soundId,
                });
                const obj3 = { message: null };
                const obj = giftCode(soundId[11]);
                const obj2 = { step: hasAlreadyLinked.ERROR, giftCode, customMessage, emojiName, soundId };
                obj3.message = giftCode(soundId[11]).getGiftCodeRedeemError(error, user);
                closure_1_6.push(giftCode(soundId[49]).GiftCodeModalScreens.ERROR, obj3);
              },
            });
          };
          tmp33(tmp2(tmp3[48]).Button, obj39);
          tmp2Result24 = tmp2(tmp3[12]);
        }
        obj32.children = tmp33Result5;
        items14[1] = tmp33(tmp40, obj32);
        obj6.children = items14;
        return tmp29(tmp2(tmp3[35]).SafeAreaPaddingView, obj6);
      }
    }
    if (null == first) {
      if (null != getOrFetchApplication) {
        if (null == giftCode.giftStyle) {
          const obj40 = {
            game: getOrFetchApplication,
            size: tmp2(tmp3[41]).GameIconSizes.LARGE,
            skuId: giftCode.skuId,
          };
          tmp33Result = tmp33(tmp7(tmp3[41]), obj40);
          const tmp7Result4 = tmp7(tmp3[41]);
        }
      }
    }
    if (tmp34) {
      if (null != product) {
        const obj41 = { style: tmp.collectiblesAssetBundle, onLayout: callback, children: null };
        let tmp33Result7 = null != tmp27;
        if (tmp33Result7) {
          const obj42 = {
            deco: firstAvatarDecoration,
            pfx: firstProfileEffect,
            nameplate: firstNameplate,
            previewAssets: product.previewAssets,
            disableStaticBackground: true,
            size: "large",
            targetSize: tmp27,
          };
          tmp33Result7 = tmp33(tmp7(tmp3[42]), obj42);
        }
        obj41.children = tmp33Result7;
        let obj43 = obj41;
      }
      tmp33Result = tmp33(tmp40, obj43);
    }
    obj43 = { style: giftCode.isSubscription ? tmp.giftCardAsset : tmp.collectiblesAsset, children: null };
    const match1 = tmp2(tmp3[13]).match(first);
    const obj44 = { type: tmp2(tmp3[14]).CollectiblesItemType.AVATAR_DECORATION };
    const str3 = tmp2(tmp3[13]);
    const obj45 = { type: tmp2(tmp3[14]).CollectiblesItemType.PROFILE_EFFECT };
    const withResult10 = match1.with(obj44, (avatarDecoration) =>
      gesture(native.Avatar, {
        source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]),
        avatarDecoration,
        size: native.AvatarSizes.GIFT_START,
        animate: true,
      }),
    );
    const obj46 = { type: tmp2(tmp3[14]).CollectiblesItemType.PROFILE_FRAME };
    const withResult11 = match1
      .with(obj44, (avatarDecoration) =>
        gesture(native.Avatar, {
          source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]),
          avatarDecoration,
          size: native.AvatarSizes.GIFT_START,
          animate: true,
        }),
      )
      .with(obj45, (profileEffect) => gesture(ProfileEffectUserPreviewDefault, { user, profileEffect }));
    const obj47 = { type: tmp2(tmp3[14]).CollectiblesItemType.NAMEPLATE };
    const withResult12 = match1
      .with(obj44, (avatarDecoration) =>
        gesture(native.Avatar, {
          source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]),
          avatarDecoration,
          size: native.AvatarSizes.GIFT_START,
          animate: true,
        }),
      )
      .with(obj45, (profileEffect) => gesture(ProfileEffectUserPreviewDefault, { user, profileEffect }))
      .with(obj46, (profileFrame) => gesture(ProfileFrameUserPreviewDefault, { user, profileFrame }));
    obj43.children = match1
      .with(obj44, (avatarDecoration) =>
        gesture(native.Avatar, {
          source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]),
          avatarDecoration,
          size: native.AvatarSizes.GIFT_START,
          animate: true,
        }),
      )
      .with(obj45, (profileEffect) => gesture(ProfileEffectUserPreviewDefault, { user, profileEffect }))
      .with(obj46, (profileFrame) => gesture(ProfileFrameUserPreviewDefault, { user, profileFrame }))
      .with(obj47, (nameplate) => {
        items = [closure_5.nameplateContainer];
        let prop;
        if (!closure_9) {
          prop = closure_5.nameplateContainerOffCenter;
        }
        const obj = { style: items, children: gesture(NameplatePreview.NameplatePreview, { user, nameplate }) };
        items[1] = prop;
        return gesture(hasOwnProperty, obj);
      })
      .otherwise(() => gesture(GiftBoxAnimationDefault, { giftStyle: giftCode.giftStyle }));
    const withResult13 = match1
      .with(obj44, (avatarDecoration) =>
        gesture(native.Avatar, {
          source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]),
          avatarDecoration,
          size: native.AvatarSizes.GIFT_START,
          animate: true,
        }),
      )
      .with(obj45, (profileEffect) => gesture(ProfileEffectUserPreviewDefault, { user, profileEffect }))
      .with(obj46, (profileFrame) => gesture(ProfileFrameUserPreviewDefault, { user, profileFrame }))
      .with(obj47, (nameplate) => {
        items = [closure_5.nameplateContainer];
        let prop;
        if (!closure_9) {
          prop = closure_5.nameplateContainerOffCenter;
        }
        const obj = { style: items, children: gesture(NameplatePreview.NameplatePreview, { user, nameplate }) };
        items[1] = prop;
        return gesture(hasOwnProperty, obj);
      });
  } else {
    const obj48 = { variant: "body-md/medium", style: tmp.renewsText, children: null };
    const intl3 = tmp2(tmp3[9]).intl;
    if (getOrFetchSubscriptionPlan.interval === stateFromStores2.MONTH) {
      let RdrnRc = tmp7(tmp3[10]).p3wUY4;
    } else {
      RdrnRc = tmp7(tmp3[10]).RdrnRc;
    }
    obj48.children = intl3.string(RdrnRc);
    tmp33(tmp2(tmp3[36]).Text, obj48);
  }
}
