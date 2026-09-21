// === Module 11702: GiftCodeRedeemStart ===

// Module 11702 (GiftCodeRedeemStart)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import UserUtilsDefault from "UserUtils" /* 4600 */;
import GiftCodeUtils from "GiftCodeUtils" /* 4994 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7471 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7580 */;
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 11060 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 11376 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 11485 */;
import NameplatePreview from "NameplatePreview" /* 11486 */;
import actions_GiftCodeActionCreatorsDefault from "actions/GiftCodeActionCreators" /* 11695 */;
import GiftCodeRedeemModal from "GiftCodeRedeemModal" /* 11701 */;
import GiftBoxAnimationDefault from "GiftBoxAnimation" /* 11711 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GiftCodeStore from "GiftCodeStore" /* 11692 */;
import UserStore from "UserStore" /* 1372 */;
import SKUStore from "SKUStore" /* 5727 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ImageBackground: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_11, GiftCodeModalStates: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28 }, bodyWithMessage: { flex: 0 }, nameplateContainer: { width: "100%" }, nameplateContainerOffCenter: { paddingBottom: 56 }, message: { gap: 8 }, text: { textAlign: "center", paddingHorizontal: 32 }, footer: { paddingHorizontal: 24, paddingBottom: 12 }, confettiBackground: { justifyContent: "center", width: "100%", position: "absolute", top: 0, left: 0, opacity: 0.4, height: 275 }, emojiContainer: { justifyContent: "center", alignItems: "center" }, imageWrapper: { position: "relative", width: "100%", alignItems: "center", justifyContent: "center" }, collectiblesAsset: { margin: 40 }, collectiblesAssetBundle: { margin: 20, alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" }, giftCardAsset: { marginTop: 20, marginBottom: 40 }, linkAccountIcon: { marginRight: 4 } };
let closure_15 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx");

export default function GiftCodeRedeemStart(giftCode) {
  giftCode = giftCode.giftCode;
  const customMessage = giftCode.customMessage;
  const soundId = giftCode.soundId;
  const emojiName = giftCode.emojiName;
  const user = giftCode.user;
  let message;
  closure_8 = undefined;
  let stateFromStores1;
  let fetched;
  let hasAlreadyLinked;
  let canStartAuthorization;
  let startAuthorization;
  let analyticsLocations;
  let ref;
  c16 = undefined;
  let tmp = ref();
  closure_5 = tmp;
  const tmp2 = giftCode;
  const tmp3 = soundId;
  closure_6 = giftCode(soundId[15]).useNavigation();
  let obj = giftCode(soundId[15]);
  let items = [closure_8];
  const stateFromStores = giftCode(soundId[16]).useStateFromStores(items, () => GiftCodeStore.getIsAccepting(giftCode.code));
  let obj2 = giftCode(soundId[16]);
  const items1 = [stateFromStores1];
  let str = giftCode(soundId[16]).useStateFromStores(items1, () => UserUtilsDefault.getName(UserStore.getUser(giftCode.userId)));
  if (str == null) {
    str = "";
  }
  const tmp6 = customMessage(tmp3[18])(giftCode.code, user);
  message = tmp6;
  let obj3 = giftCode(soundId[16]);
  const getOrFetchSubscriptionPlan = tmp2(tmp3[19]).useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const tmp2Result = tmp2(tmp3[19]);
  const getOrFetchApplication = tmp2(tmp3[20]).useGetOrFetchApplication(giftCode.applicationId);
  const tmp2Result11 = tmp2(tmp3[20]);
  const tmp2Result12 = tmp2(tmp3[21]);
  let skuId = null;
  if (tmp2Result13.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = tmp2Result12.useFetchCollectiblesProduct(skuId, true).product;
  let first;
  if (product != null) {
    first = product.items[0];
  }
  let type1;
  if (product != null) {
    type1 = product.type;
  }
  tmp2Result13 = tmp2(tmp3[22]);
  let tmp12 = product;
  if (product == null) {
    const obj4 = { items: [] };
    tmp12 = obj4;
  }
  const shopProductItems = tmp2(tmp3[23]).useShopProductItems(tmp12);
  let tmp27Result = null != customMessage;
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  if (tmp27Result) {
    tmp27Result = customMessage.length > 0;
  }
  closure_8 = tmp27Result;
  const tmp2Result14 = tmp2(tmp3[23]);
  const items2 = [fetched];
  stateFromStores1 = tmp2(tmp3[16]).useStateFromStores(items2, () => SKUStore.get(giftCode.skuId));
  const tmp16 = customMessage(tmp3[24])(getOrFetchApplication);
  fetched = tmp16.fetched;
  hasAlreadyLinked = tmp16.hasAlreadyLinked;
  canStartAuthorization = tmp16.canStartAuthorization;
  startAuthorization = tmp16.startAuthorization;
  const tmp2Result15 = tmp2(tmp3[16]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = tmp2(tmp3[25]).useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  const tmp2Result16 = tmp2(tmp3[25]);
  analyticsLocations = customMessage(tmp3[26])(tmp5(tmp3[27]).GIFT_CODE_MODAL).analyticsLocations;
  ref = user.useRef({ analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization });
  const items3 = [canStartAuthorization];
  const effect = user.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items3);
  const items4 = [fetched, hasAlreadyLinked, stateFromStores1];
  const effect1 = user.useEffect(() => {
    if (fetched) {
      if (obj.isGameItemSKU(stateFromStores1)) {
        ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
        const obj3 = { location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, is_gift: true, is_account_linked: hasAlreadyLinked, can_start_authorization: canStartAuthorization };
        AnalyticsUtilsDefault.track(constants.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj3);
      }
      obj = SlayerStorefrontUtils;
    }
  }, items4);
  const items5 = [stateFromStores1];
  const effect2 = user.useEffect(() => {
    if (obj.isGameItemSKU(stateFromStores1)) {
      const socialLayerStorefrontConfig = SocialLayerStorefrontActionCreators.fetchSocialLayerStorefrontConfig();
      const tmpResult = SocialLayerStorefrontActionCreators;
    }
    obj = SlayerStorefrontUtils;
  }, items5);
  const items6 = [giftCode, customMessage, emojiName, soundId];
  const effect3 = user.useEffect(() => {
    GiftCodeUtils.trackStep({ step: constants2.CONFIRM, giftCode, customMessage, emojiName, soundId });
  }, items6);
  const items7 = [soundId, giftCode.giftStyle];
  const effect4 = user.useEffect(() => {
    let tmp = null != giftCode.giftStyle;
    if (tmp) {
      tmp = null != soundId;
    }
    if (tmp) {
      const obj2 = { soundId, volume: 1 };
      SoundboardActionCreators.playSoundLocally(null, obj2);
    }
  }, items7);
  const obj5 = { analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization };
  const tmp5Result = customMessage(tmp3[26]);
  [tmp25, c16] = emojiName(user.useState(), 2);
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
  const items8 = [tmp.body, ];
  let bodyWithMessage;
  if (tmp27Result) {
    bodyWithMessage = tmp.bodyWithMessage;
  }
  const obj7 = { contentContainerStyle: items8, alwaysBounceVertical: false, children: null };
  items8[1] = bodyWithMessage;
  const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.text, accessibilityRole: "header", children: null };
  if (first != null) {
    const type = first.type;
  }
  const tmp31 = type1 === tmp2(tmp3[12]).CollectiblesItemType.BUNDLE;
  closure_129_0 = str;
  if (giftCode.isSubscription) {
    if (null != getOrFetchSubscriptionPlan) {
      let name;
      if (stateFromStores1 != null) {
        name = stateFromStores1.name;
      }
      let subscriptionGiftStartHeaderText = tmp2(tmp3[8]).getSubscriptionGiftStartHeaderText(getOrFetchSubscriptionPlan, str, name);
      const tmp2Result17 = tmp2(tmp3[8]);
    }
    obj8.children = subscriptionGiftStartHeaderText;
    const items9 = [tmp30(tmp2(tmp3[32]).Text, obj8), , , ];
    const obj9 = { style: tmp.imageWrapper, children: null };
    let tmp30Result = null != emojiName;
    if (tmp30Result) {
      const obj10 = { source: tmp2(tmp3[33]), style: tmp.confettiBackground, children: null };
      const obj11 = { style: tmp.emojiContainer, children: null };
      const obj12 = { emojiName, randomizeSizing: true };
      obj11.children = tmp30(tmp5(tmp3[34]), obj12);
      obj10.children = tmp30(tmp34, obj11);
      tmp30Result = tmp30(closure_5, obj10);
    }
    obj9.children = tmp30Result;
    items9[1] = tmp30(closure_6, obj9);
    if (null == first) {
      if (null != getOrFetchApplication) {
        if (tmp2Result18.isGameItemSKU(stateFromStores1)) {
          const obj13 = { sku: stateFromStores1, application: getOrFetchApplication, sender: str, hasAccountLinked: hasAlreadyLinked, canStartAuthorization, mobileAccountLinkingDisabled: socialLayerStorefrontMobileAccountLinkingDisabled };
          let tmp30Result5 = tmp30(tmp5(tmp3[35]), obj13);
        }
        items9[2] = tmp30Result5;
        if (tmp27Result) {
          const obj14 = { style: tmp.message, children: null };
          const obj15 = { variant: "eyebrow", color: "text-default", style: tmp.text, children: null };
          const intl2 = tmp2(tmp3[10]).intl;
          const obj16 = { sender: str };
          obj15.children = intl2.format(tmp2(tmp3[10]).t["6yrIzU"], obj16);
          const items10 = [tmp30(tmp2(tmp3[32]).Text, obj15), ];
          let str4 = "heading-xxl/semibold";
          if (customMessage.length > 110) {
            str4 = "heading-xl/semibold";
          }
          const obj17 = { variant: str4, style: tmp.text, children: customMessage };
          items10[1] = tmp30(tmp2(tmp3[32]).Text, obj17);
          obj14.children = items10;
          tmp27Result = tmp27(tmp34, obj14);
        }
        items9[3] = tmp27Result;
        obj7.children = items9;
        const items11 = [tmp27(tmp28, obj7), ];
        const obj18 = { style: tmp.footer, children: null };
        if (giftCode.isClaimed) {
          const obj19 = { text: null, size: "md", onPress: null };
          const intl7 = tmp2(tmp3[10]).intl;
          obj19.text = intl7.string(tmp2(tmp3[10]).t.XiOHRX);
          obj19.onPress = function onPress() {
            return closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.SUCCESS, { giftCode });
          };
          let tmp30Result6 = tmp30(tmp2(tmp3[43]).Button, obj19);
        } else if (null != tmp6) {
          const obj20 = { text: null, size: "md", onPress: null };
          const intl6 = tmp2(tmp3[10]).intl;
          obj20.text = intl6.string(tmp2(tmp3[10]).t["3nWhcJ"]);
          obj20.onPress = function onPress() {
            GiftCodeUtils.trackStep({ step: constants2.ERROR, giftCode, customMessage, emojiName, soundId });
            closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.ERROR, { message });
          };
          tmp30Result6 = tmp30(tmp2(tmp3[43]).Button, obj20);
        } else {
          if (tmp2Result19.isGameItemSKU(stateFromStores1)) {
            if (!hasAlreadyLinked) {
              if (canStartAuthorization) {
                if (!socialLayerStorefrontMobileAccountLinkingDisabled) {
                  let obj21 = { text: null, size: "md", icon: null, onPress: null };
                  const intl3 = tmp2(tmp3[10]).intl;
                  obj21.text = intl3.string(tmp2(tmp3[10]).t["VDAhr+"]);
                  const obj22 = { size: "xs", color: tmp5(tmp3[14]).colors.WHITE, style: tmp.linkAccountIcon };
                  obj21.icon = tmp30(tmp2(tmp3[46]).ExperimentalGameControllerLinkIcon, obj22);
                  obj21.onPress = function onPress() {
                    AnalyticsUtilsDefault.track(constants.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, { location_stack: analyticsLocations, sku_id: giftCode.skuId, application_id: giftCode.applicationId, is_gift: true });
                    startAuthorization({ analyticsLocations });
                  };
                }
                tmp30Result6 = tmp30(tmp40, obj21);
              }
              const obj23 = { text: null, size: "md", onPress: null };
              const intl4 = tmp2(tmp3[10]).intl;
              obj23.text = intl4.string(tmp2(tmp3[10]).t.cpT0Cq);
              obj23.onPress = function onPress() {
                customMessage(soundId[45]).pop();
              };
              obj21 = obj23;
            }
          }
          const obj24 = { disabled: stateFromStores, text: null, size: "md", onPress: null };
          const intl5 = tmp2(tmp3[10]).intl;
          const string = intl5.string;
          let rTeOBK = tmp2(tmp3[10]).t;
          if (stateFromStores) {
            rTeOBK = rTeOBK.rTeOBK;
            let stringResult = string(rTeOBK);
          } else {
            stringResult = string(rTeOBK["3nWhcJ"]);
          }
          obj24.text = stringResult;
          obj24.onPress = function onPress() {
            actions_GiftCodeActionCreatorsDefault.redeemGiftCode({
              code: giftCode.code,
              onRedeemed() {
                giftCode(soundId[8]).trackStep({ step: canStartAuthorization.SUCCESS, giftCode, customMessage, emojiName, soundId });
                closure_1_6.push(giftCode(soundId[44]).GiftCodeModalScreens.SUCCESS, { giftCode });
              },
              onError(error) {
                giftCode(soundId[8]).trackStep({ step: canStartAuthorization.ERROR, giftCode, customMessage, emojiName, soundId });
                const obj3 = { message: null };
                const obj = giftCode(soundId[8]);
                const obj2 = { step: canStartAuthorization.ERROR, giftCode, customMessage, emojiName, soundId };
                obj3.message = giftCode(soundId[8]).getGiftCodeRedeemError(error, user);
                closure_1_6.push(giftCode(soundId[44]).GiftCodeModalScreens.ERROR, obj3);
              }
            });
          };
          tmp30(tmp2(tmp3[43]).Button, obj24);
          tmp2Result19 = tmp2(tmp3[9]);
        }
        obj18.children = tmp30Result6;
        items11[1] = tmp30(tmp34, obj18);
        obj6.children = items11;
        return tmp27(tmp2(tmp3[31]).SafeAreaPaddingView, obj6);
      }
    }
    if (null == first) {
      if (null != getOrFetchApplication) {
        if (null == giftCode.giftStyle) {
          const obj25 = { game: getOrFetchApplication, size: tmp2(tmp3[36]).GameIconSizes.LARGE, skuId: giftCode.skuId };
          tmp30Result5 = tmp30(tmp5(tmp3[36]), obj25);
          const tmp5Result2 = tmp5(tmp3[36]);
        }
      }
    }
    if (tmp31) {
      if (null != product) {
        const obj26 = { style: tmp.collectiblesAssetBundle, onLayout: callback, children: null };
        let tmp30Result8 = null != tmp25;
        if (tmp30Result8) {
          const obj27 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp25 };
          tmp30Result8 = tmp30(tmp5(tmp3[37]), obj27);
        }
        obj26.children = tmp30Result8;
        let obj28 = obj26;
      }
      tmp30Result5 = tmp30(tmp34, obj28);
    }
    obj28 = { style: giftCode.isSubscription ? tmp.giftCardAsset : tmp.collectiblesAsset, children: null };
    const match = tmp2(tmp3[11]).match(first);
    const obj29 = { type: tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION };
    const str3 = tmp2(tmp3[11]);
    const obj30 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT };
    const withResult = match.with(obj29, (avatarDecoration) => map1(native.Avatar, { source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]), avatarDecoration, size: native.AvatarSizes.GIFT_START, animate: true }));
    const obj31 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME };
    const withResult1 = match.with(obj29, (avatarDecoration) => map1(native.Avatar, { source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]), avatarDecoration, size: native.AvatarSizes.GIFT_START, animate: true })).with(obj30, (profileEffect) => map1(ProfileEffectUserPreviewDefault, { user, profileEffect }));
    const obj32 = { type: tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE };
    const withResult2 = match.with(obj29, (avatarDecoration) => map1(native.Avatar, { source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]), avatarDecoration, size: native.AvatarSizes.GIFT_START, animate: true })).with(obj30, (profileEffect) => map1(ProfileEffectUserPreviewDefault, { user, profileEffect })).with(obj31, (profileFrame) => map1(ProfileFrameUserPreviewDefault, { user, profileFrame }));
    obj28.children = match.with(obj29, (avatarDecoration) => map1(native.Avatar, { source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]), avatarDecoration, size: native.AvatarSizes.GIFT_START, animate: true })).with(obj30, (profileEffect) => map1(ProfileEffectUserPreviewDefault, { user, profileEffect })).with(obj31, (profileFrame) => map1(ProfileFrameUserPreviewDefault, { user, profileFrame })).with(obj32, (nameplate) => {
      const items = [closure_5.nameplateContainer, ];
      let prop;
      if (!closure_8) {
        prop = closure_5.nameplateContainerOffCenter;
      }
      const obj = { style: items, children: map1(NameplatePreview.NameplatePreview, { user, nameplate }) };
      items[1] = prop;
      return map1(timestampProducer, obj);
    }).otherwise(() => map1(GiftBoxAnimationDefault, { giftStyle: giftCode.giftStyle }));
    const withResult3 = match.with(obj29, (avatarDecoration) => map1(native.Avatar, { source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]), avatarDecoration, size: native.AvatarSizes.GIFT_START, animate: true })).with(obj30, (profileEffect) => map1(ProfileEffectUserPreviewDefault, { user, profileEffect })).with(obj31, (profileFrame) => map1(ProfileFrameUserPreviewDefault, { user, profileFrame })).with(obj32, (nameplate) => {
      const items = [closure_5.nameplateContainer, ];
      let prop;
      if (!closure_8) {
        prop = closure_5.nameplateContainerOffCenter;
      }
      const obj = { style: items, children: map1(NameplatePreview.NameplatePreview, { user, nameplate }) };
      items[1] = prop;
      return map1(timestampProducer, obj);
    });
  }
  const tmp24 = emojiName(user.useState(), 2);
  tmp28 = message;
  if (tmp2Result20.isGameItemSKU(stateFromStores1)) {
    let intl = tmp2(tmp3[10]).intl;
    subscriptionGiftStartHeaderText = intl.string(tmp2(tmp3[10]).t["Bn1J+a"]);
  } else {
    const obj33 = { type, isBundle: tmp31, sender: str };
    const match1 = tmp2(tmp3[11]).match(obj33);
    const obj34 = { isBundle: true, sender: null };
    const P = tmp2(tmp3[11]).P;
    obj34.sender = P.not(tmp2(tmp3[11]).P.nullish);
    const str2 = tmp2(tmp3[11]);
    const obj35 = { isBundle: true, sender: tmp2(tmp3[11]).P.nullish };
    const withResult4 = match1.with(obj34, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
    });
    const obj36 = { type: tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION, sender: null };
    const P2 = tmp2(tmp3[11]).P;
    obj36.sender = P2.not(tmp2(tmp3[11]).P.nullish);
    const withResult5 = match1.with(obj34, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
    }).with(obj35, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t.iJ8823);
    });
    const obj37 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT, sender: null };
    const P3 = tmp2(tmp3[11]).P;
    obj37.sender = P3.not(tmp2(tmp3[11]).P.nullish);
    const withResult6 = match1.with(obj34, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
    }).with(obj35, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t.iJ8823);
    }).with(obj36, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
    });
    const obj38 = { type: tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE, sender: null };
    const P4 = tmp2(tmp3[11]).P;
    obj38.sender = P4.not(tmp2(tmp3[11]).P.nullish);
    const withResult7 = match1.with(obj34, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
    }).with(obj35, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t.iJ8823);
    }).with(obj36, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
    }).with(obj37, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
    });
    const obj39 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME, sender: null };
    const P5 = tmp2(tmp3[11]).P;
    obj39.sender = P5.not(tmp2(tmp3[11]).P.nullish);
    const withResult8 = match1.with(obj34, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
    }).with(obj35, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t.iJ8823);
    }).with(obj36, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
    }).with(obj37, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
    }).with(obj38, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
    });
    const obj40 = { type: tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION, sender: tmp2(tmp3[11]).P.nullish };
    const withResult9 = match1.with(obj34, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
    }).with(obj35, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t.iJ8823);
    }).with(obj36, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
    }).with(obj37, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
    }).with(obj38, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
    }).with(obj39, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
    });
    const obj41 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT, sender: tmp2(tmp3[11]).P.nullish };
    const withResult10 = match1.with(obj34, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
    }).with(obj35, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t.iJ8823);
    }).with(obj36, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
    }).with(obj37, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
    }).with(obj38, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
    }).with(obj39, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
    }).with(obj40, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["2ZO6CC"]);
    });
    const obj42 = { type: tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE, sender: tmp2(tmp3[11]).P.nullish };
    const withResult11 = match1.with(obj34, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
    }).with(obj35, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t.iJ8823);
    }).with(obj36, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
    }).with(obj37, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
    }).with(obj38, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
    }).with(obj39, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
    }).with(obj40, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["2ZO6CC"]);
    }).with(obj41, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["2NxdjX"]);
    });
    const obj43 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME, sender: tmp2(tmp3[11]).P.nullish };
    const withResult12 = match1.with(obj34, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
    }).with(obj35, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t.iJ8823);
    }).with(obj36, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
    }).with(obj37, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
    }).with(obj38, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
    }).with(obj39, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
    }).with(obj40, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["2ZO6CC"]);
    }).with(obj41, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["2NxdjX"]);
    }).with(obj42, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t.v7F232);
    });
    subscriptionGiftStartHeaderText = match1.with(obj34, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
    }).with(obj35, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t.iJ8823);
    }).with(obj36, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
    }).with(obj37, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
    }).with(obj38, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
    }).with(obj39, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
    }).with(obj40, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["2ZO6CC"]);
    }).with(obj41, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["2NxdjX"]);
    }).with(obj42, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t.v7F232);
    }).with(obj43, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["1+tgC0"]);
    }).otherwise(() => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["2BWscv"]);
    });
    const withResult13 = match1.with(obj34, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
    }).with(obj35, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t.iJ8823);
    }).with(obj36, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
    }).with(obj37, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
    }).with(obj38, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
    }).with(obj39, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
    }).with(obj40, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["2ZO6CC"]);
    }).with(obj41, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["2NxdjX"]);
    }).with(obj42, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t.v7F232);
    }).with(obj43, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["1+tgC0"]);
    });
  }
};