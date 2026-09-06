// discord_app/modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import GiftCodeUtils from "../../../../utils/GiftCodeUtils.tsx";
import SlayerStorefrontUtils from "../../../slayer_storefront/SlayerStorefrontUtils.tsx";
import SoundboardActionCreators from "../../../soundboard/SoundboardActionCreators.tsx";
import SocialLayerStorefrontActionCreators from "../../../slayer_storefront/SocialLayerStorefrontActionCreators.tsx";
import ProfileEffectUserPreviewDefault from "../../../collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx";
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
({ ImageBackground: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_11, GiftCodeModalStates: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  body: null,
  bodyWithMessage: null,
  nameplateContainer: null,
  nameplateContainerOffCenter: null,
  message: null,
  text: null,
  footer: null,
  confettiBackground: null,
  emojiContainer: null,
  imageWrapper: null,
  collectiblesAsset: null,
  collectiblesAssetBundle: null,
  giftCardAsset: null,
  linkAccountIcon: null,
};
createStyles = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.body = { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28 };
createStyles.bodyWithMessage = { flex: 0 };
createStyles.nameplateContainer = { width: "100%" };
createStyles.nameplateContainerOffCenter = { paddingBottom: 56 };
createStyles.message = { gap: 8 };
createStyles.text = { textAlign: "center", paddingHorizontal: 32 };
createStyles.footer = { paddingHorizontal: 24, paddingBottom: 12 };
createStyles.confettiBackground = {
  justifyContent: "center",
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  opacity: 0.4,
  height: 275,
};
createStyles.emojiContainer = { justifyContent: "center", alignItems: "center" };
createStyles.imageWrapper = { position: "relative", width: "100%", alignItems: "center", justifyContent: "center" };
createStyles.collectiblesAsset = { margin: 40 };
createStyles.collectiblesAssetBundle = {
  margin: 20,
  alignSelf: "stretch",
  minHeight: 250,
  alignItems: "center",
  justifyContent: "center",
};
createStyles.giftCardAsset = { marginTop: 20, marginBottom: 40 };
createStyles.linkAccountIcon = { marginRight: 4 };
let closure_15 = createStyles.createStyles(createStyles);
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
  let obj = giftCode(soundId[15]);
  closure_6 = obj.useNavigation();
  let obj1 = giftCode(soundId[16]);
  let items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => GiftCodeStore.getIsAccepting(giftCode.code));
  let obj2 = giftCode(soundId[16]);
  const items1 = [stateFromStores1];
  let str = obj2.useStateFromStores(items1, () => UserUtilsDefault.getName(UserStore.getUser(giftCode.userId)));
  if (str == null) {
    str = "";
  }
  const tmp6 = customMessage(tmp3[18])(giftCode.code, user);
  message = tmp6;
  let tmp2Result = tmp2(tmp3[19]);
  const getOrFetchSubscriptionPlan = tmp2Result.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  tmp2Result = tmp2(tmp3[20]);
  const getOrFetchApplication = tmp2Result.useGetOrFetchApplication(giftCode.applicationId);
  const tmp2Result1 = tmp2(tmp3[21]);
  let skuId = null;
  if (tmp2Result2.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = tmp2Result1.useFetchCollectiblesProduct(skuId, true).product;
  let first;
  if (product != null) {
    first = product.items[0];
  }
  let type;
  if (product != null) {
    type = product.type;
  }
  tmp2Result2 = tmp2(tmp3[22]);
  let tmp12 = product;
  if (product == null) {
    obj = { items: [] };
    tmp12 = obj;
  }
  const shopProductItems = tmp2(tmp3[23]).useShopProductItems(tmp12);
  let tmp27Result = null != customMessage;
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  if (tmp27Result) {
    tmp27Result = customMessage.length > 0;
  }
  closure_8 = tmp27Result;
  const tmp2Result3 = tmp2(tmp3[23]);
  const items2 = [fetched];
  stateFromStores1 = tmp2(tmp3[16]).useStateFromStores(items2, () => SKUStore.get(giftCode.skuId));
  const tmp16 = customMessage(tmp3[24])(getOrFetchApplication);
  fetched = tmp16.fetched;
  hasAlreadyLinked = tmp16.hasAlreadyLinked;
  canStartAuthorization = tmp16.canStartAuthorization;
  startAuthorization = tmp16.startAuthorization;
  const tmp2Result4 = tmp2(tmp3[16]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = tmp2(
    tmp3[25],
  ).useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  let tmp5Result = tmp5(tmp3[26]);
  analyticsLocations = tmp5Result(tmp5(tmp3[27]).GIFT_CODE_MODAL).analyticsLocations;
  obj = { analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization };
  ref = user.useRef(obj);
  const items3 = [canStartAuthorization];
  const effect = user.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items3);
  const items4 = [fetched, hasAlreadyLinked, stateFromStores1];
  const effect1 = user.useEffect(() => {
    if (fetched) {
      let obj = SlayerStorefrontUtils;
      if (obj.isGameItemSKU(stateFromStores1)) {
        ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
        obj = {
          location_stack: analyticsLocations,
          sku_id: skuId,
          application_id: applicationId,
          is_gift: true,
          is_account_linked: hasAlreadyLinked,
          can_start_authorization: canStartAuthorization,
        };
        AnalyticsUtilsDefault.track(constants.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj);
      }
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
    const obj = { step: constants2.CONFIRM, giftCode, customMessage, emojiName, soundId };
    obj.trackStep(obj);
  }, items6);
  const items7 = [soundId, giftCode.giftStyle];
  const effect4 = user.useEffect(() => {
    let tmp = null != giftCode.giftStyle;
    if (tmp) {
      tmp = null != soundId;
    }
    if (tmp) {
      const obj = { soundId, volume: 1 };
      obj.playSoundLocally(null, obj);
    }
  }, items7);
  const tmp2Result5 = tmp2(tmp3[25]);
  [tmp25, c16] = emojiName(user.useState(), 2);
  const callback = user.useCallback((nativeEvent) => {
    ({ width: giftCode, height: customMessage } = nativeEvent.nativeEvent.layout);
    _undefined((arg0) => {
      let size = arg0;
      if (null != arg0) {
        return size;
      }
      size = { width, height };
    });
  }, []);
  obj1 = { bottom: true, style: tmp.container, children: null };
  const items8 = [tmp.body];
  let bodyWithMessage;
  if (tmp27Result) {
    bodyWithMessage = tmp.bodyWithMessage;
  }
  obj2 = { contentContainerStyle: items8, alwaysBounceVertical: false, children: null };
  items8[1] = bodyWithMessage;
  const obj3 = {
    variant: "heading-xl/bold",
    color: "mobile-text-heading-primary",
    style: tmp.text,
    accessibilityRole: "header",
    children: null,
  };
  if (first != null) {
    type = first.type;
  }
  const tmp31 = type === tmp2(tmp3[12]).CollectiblesItemType.BUNDLE;
  closure_129_0 = str;
  if (giftCode.isSubscription) {
    if (null != getOrFetchSubscriptionPlan) {
      let name;
      if (stateFromStores1 != null) {
        name = stateFromStores1.name;
      }
      let subscriptionGiftStartHeaderText = tmp2(tmp3[8]).getSubscriptionGiftStartHeaderText(
        getOrFetchSubscriptionPlan,
        str,
        name,
      );
      const tmp2Result6 = tmp2(tmp3[8]);
    }
    obj3.children = subscriptionGiftStartHeaderText;
    const items9 = [tmp30(tmp2(tmp3[32]).Text, obj3), , ,];
    const obj4 = { style: tmp.imageWrapper, children: null };
    let tmp30Result = null != emojiName;
    if (tmp30Result) {
      const obj5 = { source: tmp2(tmp3[33]), style: tmp.confettiBackground, children: null };
      const obj6 = { style: tmp.emojiContainer, children: null };
      const obj7 = { emojiName, randomizeSizing: true };
      obj6.children = tmp30(tmp5(tmp3[34]), obj7);
      obj5.children = tmp30(tmp34, obj6);
      tmp30Result = tmp30(closure_5, obj5);
    }
    obj4.children = tmp30Result;
    items9[1] = tmp30(closure_6, obj4);
    if (null == first) {
      if (null != getOrFetchApplication) {
        if (tmp2Result7.isGameItemSKU(stateFromStores1)) {
          const obj8 = {
            sku: stateFromStores1,
            application: getOrFetchApplication,
            sender: str,
            hasAccountLinked: hasAlreadyLinked,
            canStartAuthorization,
            mobileAccountLinkingDisabled: socialLayerStorefrontMobileAccountLinkingDisabled,
          };
          tmp30Result = tmp30(tmp5(tmp3[35]), obj8);
        }
        items9[2] = tmp30Result;
        if (tmp27Result) {
          const obj9 = { style: tmp.message, children: null };
          const obj10 = { variant: "eyebrow", color: "text-default", style: tmp.text, children: null };
          const intl2 = tmp2(tmp3[10]).intl;
          const obj11 = { sender: str };
          obj10.children = intl2.format(tmp2(tmp3[10]).t["6yrIzU"], obj11);
          const items10 = [tmp30(tmp2(tmp3[32]).Text, obj10)];
          let str4 = "heading-xxl/semibold";
          if (customMessage.length > 110) {
            str4 = "heading-xl/semibold";
          }
          const obj12 = { variant: str4, style: tmp.text, children: customMessage };
          items10[1] = tmp30(tmp2(tmp3[32]).Text, obj12);
          obj9.children = items10;
          tmp27Result = tmp27(tmp34, obj9);
        }
        items9[3] = tmp27Result;
        obj2.children = items9;
        const items11 = [tmp27(tmp28, obj2)];
        const obj13 = { style: tmp.footer, children: null };
        if (giftCode.isClaimed) {
          const obj14 = { text: null, size: "md", onPress: null };
          const intl7 = tmp2(tmp3[10]).intl;
          obj14.text = intl7.string(tmp2(tmp3[10]).t.XiOHRX);
          obj14.onPress = function onPress() {
            return closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.SUCCESS, { giftCode });
          };
          let tmp30Result1 = tmp30(tmp2(tmp3[43]).Button, obj14);
        } else if (null != tmp6) {
          const obj15 = { text: null, size: "md", onPress: null };
          const intl6 = tmp2(tmp3[10]).intl;
          obj15.text = intl6.string(tmp2(tmp3[10]).t["3nWhcJ"]);
          obj15.onPress = function onPress() {
            let obj = { step: constants2.ERROR, giftCode, customMessage, emojiName, soundId };
            obj.trackStep(obj);
            obj = { message };
            closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.ERROR, obj);
          };
          tmp30Result1 = tmp30(tmp2(tmp3[43]).Button, obj15);
        } else {
          if (tmp2Result8.isGameItemSKU(stateFromStores1)) {
            if (!hasAlreadyLinked) {
              if (canStartAuthorization) {
                if (!socialLayerStorefrontMobileAccountLinkingDisabled) {
                  let obj16 = { text: null, size: "md", icon: null, onPress: null };
                  const intl3 = tmp2(tmp3[10]).intl;
                  obj16.text = intl3.string(tmp2(tmp3[10]).t["VDAhr+"]);
                  const obj17 = { size: "xs", color: tmp5(tmp3[14]).colors.WHITE, style: tmp.linkAccountIcon };
                  obj16.icon = tmp30(tmp2(tmp3[46]).ExperimentalGameControllerLinkIcon, obj17);
                  obj16.onPress = function onPress() {
                    let obj = {
                      location_stack: analyticsLocations,
                      sku_id: giftCode.skuId,
                      application_id: giftCode.applicationId,
                      is_gift: true,
                    };
                    obj.track(constants.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj);
                    obj = { analyticsLocations };
                    startAuthorization(obj);
                  };
                }
                tmp30Result1 = tmp30(tmp40, obj16);
              }
              const obj18 = { text: null, size: "md", onPress: null };
              const intl4 = tmp2(tmp3[10]).intl;
              obj18.text = intl4.string(tmp2(tmp3[10]).t.cpT0Cq);
              obj18.onPress = function onPress() {
                let arr = customMessage(soundId[45]);
                arr = arr.pop();
              };
              obj16 = obj18;
            }
          }
          const obj19 = { disabled: stateFromStores, text: null, size: "md", onPress: null };
          const intl5 = tmp2(tmp3[10]).intl;
          const string = intl5.string;
          let rTeOBK = tmp2(tmp3[10]).t;
          if (stateFromStores) {
            rTeOBK = rTeOBK.rTeOBK;
            let stringResult = string(rTeOBK);
          } else {
            stringResult = string(rTeOBK["3nWhcJ"]);
          }
          obj19.text = stringResult;
          obj19.onPress = function onPress() {
            let obj = {
              code: giftCode.code,
              onRedeemed() {
                giftCode(soundId[8]);
                let obj = { step: canStartAuthorization.SUCCESS, giftCode, customMessage, emojiName, soundId };
                obj.trackStep(obj);
                obj = { giftCode };
                closure_1_6.push(giftCode(soundId[44]).GiftCodeModalScreens.SUCCESS, obj);
              },
              onError(error) {
                giftCode(soundId[8]);
                let obj = { step: canStartAuthorization.ERROR, giftCode, customMessage, emojiName, soundId };
                obj.trackStep(obj);
                obj = { message: giftCode(soundId[8]).getGiftCodeRedeemError(error, user) };
                closure_1_6.push(giftCode(soundId[44]).GiftCodeModalScreens.ERROR, obj);
              },
            };
            obj.redeemGiftCode(obj);
          };
          tmp30(tmp2(tmp3[43]).Button, obj19);
          tmp2Result8 = tmp2(tmp3[9]);
        }
        obj13.children = tmp30Result1;
        items11[1] = tmp30(tmp34, obj13);
        obj1.children = items11;
        return tmp27(tmp2(tmp3[31]).SafeAreaPaddingView, obj1);
      }
    }
    if (null == first) {
      if (null != getOrFetchApplication) {
        if (null == giftCode.giftStyle) {
          const obj20 = { game: getOrFetchApplication, size: null, skuId: null };
          tmp5Result = tmp5(tmp3[36]);
          obj20.size = tmp2(tmp3[36]).GameIconSizes.LARGE;
          obj20.skuId = giftCode.skuId;
          tmp30Result = tmp30(tmp5Result, obj20);
        }
      }
    }
    if (tmp31) {
      if (null != product) {
        const obj21 = { style: tmp.collectiblesAssetBundle, onLayout: callback, children: null };
        let tmp30Result3 = null != tmp25;
        if (tmp30Result3) {
          const obj22 = {
            deco: firstAvatarDecoration,
            pfx: firstProfileEffect,
            nameplate: firstNameplate,
            previewAssets: product.previewAssets,
            disableStaticBackground: true,
            size: "large",
            targetSize: tmp25,
          };
          tmp30Result3 = tmp30(tmp5(tmp3[37]), obj22);
        }
        obj21.children = tmp30Result3;
        let obj23 = obj21;
      }
      tmp30Result = tmp30(tmp34, obj23);
    }
    obj23 = { style: giftCode.isSubscription ? tmp.giftCardAsset : tmp.collectiblesAsset, children: null };
    const match = tmp2(tmp3[11]).match(first);
    const obj24 = { type: tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION };
    const str3 = tmp2(tmp3[11]);
    const obj25 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT };
    const withResult = match.with(obj24, (avatarDecoration) =>
      map1(native.Avatar, {
        source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]),
        avatarDecoration,
        size: native.AvatarSizes.GIFT_START,
        animate: true,
      }),
    );
    const obj26 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME };
    const withResult1 = match
      .with(obj24, (avatarDecoration) =>
        map1(native.Avatar, {
          source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]),
          avatarDecoration,
          size: native.AvatarSizes.GIFT_START,
          animate: true,
        }),
      )
      .with(obj25, (profileEffect) => map1(ProfileEffectUserPreviewDefault, { user, profileEffect }));
    const obj27 = { type: tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE };
    const withResult2 = match
      .with(obj24, (avatarDecoration) =>
        map1(native.Avatar, {
          source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]),
          avatarDecoration,
          size: native.AvatarSizes.GIFT_START,
          animate: true,
        }),
      )
      .with(obj25, (profileEffect) => map1(ProfileEffectUserPreviewDefault, { user, profileEffect }))
      .with(obj26, (profileFrame) => map1(ProfileFrameUserPreviewDefault, { user, profileFrame }));
    obj23.children = match
      .with(obj24, (avatarDecoration) =>
        map1(native.Avatar, {
          source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]),
          avatarDecoration,
          size: native.AvatarSizes.GIFT_START,
          animate: true,
        }),
      )
      .with(obj25, (profileEffect) => map1(ProfileEffectUserPreviewDefault, { user, profileEffect }))
      .with(obj26, (profileFrame) => map1(ProfileFrameUserPreviewDefault, { user, profileFrame }))
      .with(obj27, (nameplate) => {
        const items = [closure_5.nameplateContainer];
        let prop;
        if (!closure_8) {
          prop = closure_5.nameplateContainerOffCenter;
        }
        let obj = { style: items, children: null };
        items[1] = prop;
        obj = { user, nameplate };
        obj.children = map1(NameplatePreview.NameplatePreview, obj);
        return map1(timestampProducer, obj);
      })
      .otherwise(() => map1(GiftBoxAnimationDefault, { giftStyle: giftCode.giftStyle }));
    const withResult3 = match
      .with(obj24, (avatarDecoration) =>
        map1(native.Avatar, {
          source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]),
          avatarDecoration,
          size: native.AvatarSizes.GIFT_START,
          animate: true,
        }),
      )
      .with(obj25, (profileEffect) => map1(ProfileEffectUserPreviewDefault, { user, profileEffect }))
      .with(obj26, (profileFrame) => map1(ProfileFrameUserPreviewDefault, { user, profileFrame }))
      .with(obj27, (nameplate) => {
        const items = [closure_5.nameplateContainer];
        let prop;
        if (!closure_8) {
          prop = closure_5.nameplateContainerOffCenter;
        }
        let obj = { style: items, children: null };
        items[1] = prop;
        obj = { user, nameplate };
        obj.children = map1(NameplatePreview.NameplatePreview, obj);
        return map1(timestampProducer, obj);
      });
  }
  const tmp24 = emojiName(user.useState(), 2);
  tmp28 = message;
  if (tmp2Result9.isGameItemSKU(stateFromStores1)) {
    let intl = tmp2(tmp3[10]).intl;
    subscriptionGiftStartHeaderText = intl.string(tmp2(tmp3[10]).t["Bn1J+a"]);
  } else {
    const obj28 = { type, isBundle: tmp31, sender: str };
    const match1 = tmp2(tmp3[11]).match(obj28);
    const obj29 = { isBundle: true, sender: null };
    const P = tmp2(tmp3[11]).P;
    obj29.sender = P.not(tmp2(tmp3[11]).P.nullish);
    const str2 = tmp2(tmp3[11]);
    const obj30 = { isBundle: true, sender: tmp2(tmp3[11]).P.nullish };
    const withResult4 = match1.with(obj29, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
    });
    const obj31 = { type: tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION, sender: null };
    const P2 = tmp2(tmp3[11]).P;
    obj31.sender = P2.not(tmp2(tmp3[11]).P.nullish);
    const withResult5 = match1
      .with(obj29, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
      })
      .with(obj30, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t.iJ8823);
      });
    const obj32 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT, sender: null };
    const P3 = tmp2(tmp3[11]).P;
    obj32.sender = P3.not(tmp2(tmp3[11]).P.nullish);
    const withResult6 = match1
      .with(obj29, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
      })
      .with(obj30, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t.iJ8823);
      })
      .with(obj31, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
      });
    const obj33 = { type: tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE, sender: null };
    const P4 = tmp2(tmp3[11]).P;
    obj33.sender = P4.not(tmp2(tmp3[11]).P.nullish);
    const withResult7 = match1
      .with(obj29, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
      })
      .with(obj30, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t.iJ8823);
      })
      .with(obj31, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
      })
      .with(obj32, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
      });
    const obj34 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME, sender: null };
    const P5 = tmp2(tmp3[11]).P;
    obj34.sender = P5.not(tmp2(tmp3[11]).P.nullish);
    const withResult8 = match1
      .with(obj29, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
      })
      .with(obj30, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t.iJ8823);
      })
      .with(obj31, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
      })
      .with(obj32, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
      })
      .with(obj33, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
      });
    const obj35 = { type: tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION, sender: tmp2(tmp3[11]).P.nullish };
    const withResult9 = match1
      .with(obj29, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
      })
      .with(obj30, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t.iJ8823);
      })
      .with(obj31, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
      })
      .with(obj32, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
      })
      .with(obj33, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
      })
      .with(obj34, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
      });
    const obj36 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT, sender: tmp2(tmp3[11]).P.nullish };
    const withResult10 = match1
      .with(obj29, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
      })
      .with(obj30, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t.iJ8823);
      })
      .with(obj31, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
      })
      .with(obj32, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
      })
      .with(obj33, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
      })
      .with(obj34, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
      })
      .with(obj35, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t["2ZO6CC"]);
      });
    const obj37 = { type: tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE, sender: tmp2(tmp3[11]).P.nullish };
    const withResult11 = match1
      .with(obj29, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
      })
      .with(obj30, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t.iJ8823);
      })
      .with(obj31, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
      })
      .with(obj32, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
      })
      .with(obj33, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
      })
      .with(obj34, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
      })
      .with(obj35, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t["2ZO6CC"]);
      })
      .with(obj36, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t["2NxdjX"]);
      });
    const obj38 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME, sender: tmp2(tmp3[11]).P.nullish };
    const withResult12 = match1
      .with(obj29, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
      })
      .with(obj30, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t.iJ8823);
      })
      .with(obj31, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
      })
      .with(obj32, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
      })
      .with(obj33, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
      })
      .with(obj34, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
      })
      .with(obj35, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t["2ZO6CC"]);
      })
      .with(obj36, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t["2NxdjX"]);
      })
      .with(obj37, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t.v7F232);
      });
    subscriptionGiftStartHeaderText = match1
      .with(obj29, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
      })
      .with(obj30, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t.iJ8823);
      })
      .with(obj31, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
      })
      .with(obj32, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
      })
      .with(obj33, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
      })
      .with(obj34, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
      })
      .with(obj35, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t["2ZO6CC"]);
      })
      .with(obj36, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t["2NxdjX"]);
      })
      .with(obj37, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t.v7F232);
      })
      .with(obj38, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t["1+tgC0"]);
      })
      .otherwise(() => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t["2BWscv"]);
      });
    const withResult13 = match1
      .with(obj29, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.JUV1tL, { sender: giftCode });
      })
      .with(obj30, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t.iJ8823);
      })
      .with(obj31, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.SKduyh, { sender: giftCode });
      })
      .with(obj32, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["1w42T2"], { sender: giftCode });
      })
      .with(obj33, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t.vFiQlU, { sender: giftCode });
      })
      .with(obj34, () => {
        const intl = util.intl;
        return intl.formatToPlainString(util.t["UH/EQL"], { sender: giftCode });
      })
      .with(obj35, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t["2ZO6CC"]);
      })
      .with(obj36, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t["2NxdjX"]);
      })
      .with(obj37, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t.v7F232);
      })
      .with(obj38, () => {
        const intl = giftCode(soundId[10]).intl;
        return intl.string(giftCode(soundId[10]).t["1+tgC0"]);
      });
  }
}
