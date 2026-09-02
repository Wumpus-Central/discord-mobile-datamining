// === Module 8499: GiftCodeRedeemStart ===

// Module 8499 (GiftCodeRedeemStart)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "updateGiftCode" /* 8456 */;
import closure_9 from "mergeGuildAvatar" /* 1921 */;
import closure_10 from "addSku" /* 4527 */;
import ME from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ ImageBackground: c5, View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ AnalyticEvents: unpackModuleId, GiftCodeModalStates: closure_12 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { container: null, body: null, bodyWithMessage: null, nameplateContainer: null, nameplateContainerOffCenter: null, message: null, text: null, footer: null, confettiBackground: null, emojiContainer: null, imageWrapper: null, collectiblesAsset: null, collectiblesAssetBundle: null, giftCardAsset: null, linkAccountIcon: null };
createCacheKey = { flex: 1, justifyContent: "space-between", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28 };
createCacheKey[2] = { flex: 0 };
createCacheKey[3] = { width: "100%" };
createCacheKey[4] = { paddingBottom: 56 };
createCacheKey[5] = { gap: 8 };
createCacheKey[6] = { textAlign: "center", paddingHorizontal: 32 };
createCacheKey[7] = { paddingHorizontal: 24, paddingBottom: 12 };
createCacheKey[8] = { justifyContent: "center", width: "100%", position: "absolute", top: 0, left: 0, opacity: 0.4, height: 275 };
createCacheKey[9] = { justifyContent: "center", alignItems: "center" };
createCacheKey[10] = { position: "relative", width: "100%", alignItems: "center", justifyContent: "center" };
createCacheKey[11] = { margin: 40 };
createCacheKey[12] = { margin: 20, alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" };
createCacheKey[13] = { marginTop: 20, marginBottom: 40 };
createCacheKey[14] = { marginRight: 4 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx");

export default function GiftCodeRedeemStart(giftCode) {
  giftCode = giftCode.giftCode;
  let str = giftCode;
  const customMessage = giftCode.customMessage;
  const soundId = giftCode.soundId;
  const emojiName = giftCode.emojiName;
  const user = giftCode.user;
  closure_5 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  let stateFromStores1;
  let fetched;
  let hasAlreadyLinked;
  let canStartAuthorization;
  let startAuthorization;
  let analyticsLocations;
  let callback;
  c16 = undefined;
  let tmp = callback();
  closure_5 = tmp;
  let tmp2 = str;
  const tmp3 = soundId;
  let obj = str(soundId[15]);
  closure_6 = obj.useNavigation();
  obj1 = str(soundId[16]);
  let items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => isAccepting.getIsAccepting(str.code));
  let obj2 = str(soundId[16]);
  const items1 = [stateFromStores1];
  str = obj2.useStateFromStores(items1, () => customMessage(soundId[17]).getName(stateFromStores1.getUser(str.userId)));
  if (str == null) {
    str = "";
  }
  const tmp6 = customMessage(tmp3[18])(giftCode.code, user);
  closure_7 = tmp6;
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
    obj = { items: null };
    obj[0] = [];
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
  stateFromStores1 = tmp2(tmp3[16]).useStateFromStores(items2, () => fetched.get(str.skuId));
  const tmp16 = customMessage(tmp3[24])(getOrFetchApplication);
  fetched = tmp16.fetched;
  hasAlreadyLinked = tmp16.hasAlreadyLinked;
  canStartAuthorization = tmp16.canStartAuthorization;
  startAuthorization = tmp16.startAuthorization;
  const tmp2Result4 = tmp2(tmp3[16]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = tmp2(tmp3[25]).useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  let tmp5Result = tmp5(tmp3[26]);
  analyticsLocations = tmp5Result(tmp5(tmp3[27]).GIFT_CODE_MODAL).analyticsLocations;
  obj = { analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization };
  callback = user.useRef(obj);
  const items3 = [canStartAuthorization];
  const effect = user.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items3);
  const items4 = [fetched, hasAlreadyLinked, stateFromStores1];
  const effect1 = user.useEffect(() => {
    if (fetched) {
      let obj = str(soundId[9]);
      if (obj.isGameItemSKU(stateFromStores1)) {
        ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
        obj = { location_stack: null, sku_id: null, application_id: null, is_gift: true, is_account_linked: null, can_start_authorization: null };
        obj[0] = analyticsLocations;
        obj[1] = skuId;
        obj[2] = applicationId;
        obj[4] = hasAlreadyLinked;
        obj[5] = canStartAuthorization;
        customMessage(tmp2[28]).track(hasAlreadyLinked.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj);
        const obj2 = customMessage(tmp2[28]);
      }
      tmp2 = soundId;
    }
  }, items4);
  const items5 = [stateFromStores1];
  const effect2 = user.useEffect(() => {
    if (obj.isGameItemSKU(stateFromStores1)) {
      const socialLayerStorefrontConfig = str(soundId[29]).fetchSocialLayerStorefrontConfig();
      const tmpResult = str(soundId[29]);
    }
  }, items5);
  const items6 = [giftCode, customMessage, emojiName, soundId];
  const effect3 = user.useEffect(() => {
    let obj = str(soundId[8]);
    obj = { step: canStartAuthorization.CONFIRM, giftCode: str, customMessage, emojiName, soundId };
    obj.trackStep(obj);
  }, items6);
  const items7 = [soundId, giftCode.giftStyle];
  const effect4 = user.useEffect(() => {
    let tmp = null != str.giftStyle;
    if (tmp) {
      tmp = null != soundId;
    }
    if (tmp) {
      let obj = str(soundId[30]);
      obj = { soundId: null, volume: 1 };
      obj[0] = soundId;
      obj.playSoundLocally(null, obj);
    }
  }, items7);
  const tmp2Result5 = tmp2(tmp3[25]);
  [tmp25, c16] = emojiName(user.useState(), 2);
  callback = user.useCallback((nativeEvent) => {
    ({ width: str, height: customMessage } = nativeEvent.nativeEvent.layout);
    _undefined((arg0) => {
      let size = arg0;
      if (null != arg0) {
        return size;
      }
      size = { width: closure_0, height: closure_1 };
    });
  }, []);
  obj1 = { bottom: true, style: tmp.container, children: null };
  const items8 = [tmp.body, ];
  let bodyWithMessage;
  if (tmp27Result) {
    bodyWithMessage = tmp.bodyWithMessage;
  }
  obj2 = { contentContainerStyle: items8, alwaysBounceVertical: false, children: null };
  items8[1] = bodyWithMessage;
  const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.text, accessibilityRole: "header", children: null };
  if (first != null) {
    type = first.type;
  }
  const tmp31 = type === tmp2(tmp3[12]).CollectiblesItemType.BUNDLE;
  if (giftCode.isSubscription) {
    if (null != getOrFetchSubscriptionPlan) {
      let name;
      if (stateFromStores1 != null) {
        name = stateFromStores1.name;
      }
      let subscriptionGiftStartHeaderText = tmp2(tmp3[8]).getSubscriptionGiftStartHeaderText(getOrFetchSubscriptionPlan, str, name);
      const tmp2Result6 = tmp2(tmp3[8]);
    }
    obj3[4] = subscriptionGiftStartHeaderText;
    const items9 = [tmp30(tmp2(tmp3[32]).Text, obj3), , , ];
    let obj4 = { style: null, children: null };
    obj4[0] = tmp.imageWrapper;
    let tmp30Result = null != emojiName;
    if (tmp30Result) {
      const obj5 = { source: null, style: null, children: null };
      obj5[0] = tmp2(tmp3[33]);
      obj5[1] = tmp.confettiBackground;
      const obj6 = { style: null, children: null };
      obj6[0] = tmp.emojiContainer;
      const obj7 = { emojiName: null, randomizeSizing: true };
      obj7[0] = emojiName;
      obj6[1] = tmp30(tmp5(tmp3[34]), obj7);
      obj5[2] = tmp30(tmp34, obj6);
      tmp30Result = tmp30(closure_5, obj5);
    }
    obj4[1] = tmp30Result;
    items9[1] = tmp30(closure_6, obj4);
    if (null == first) {
      if (null != getOrFetchApplication) {
        if (tmp2Result7.isGameItemSKU(stateFromStores1)) {
          const obj8 = { sku: null, application: null, sender: null, hasAccountLinked: null, canStartAuthorization: null, mobileAccountLinkingDisabled: null };
          obj8[0] = stateFromStores1;
          obj8[1] = getOrFetchApplication;
          obj8[2] = str;
          obj8[3] = hasAlreadyLinked;
          obj8[4] = canStartAuthorization;
          obj8[5] = socialLayerStorefrontMobileAccountLinkingDisabled;
          tmp30Result = tmp30(tmp5(tmp3[35]), obj8);
        }
        items9[2] = tmp30Result;
        if (tmp27Result) {
          const obj9 = { style: null, children: null };
          obj9[0] = tmp.message;
          const obj10 = { variant: "eyebrow", color: "text-default", style: null, children: null };
          obj10[2] = tmp.text;
          const intl2 = tmp2(tmp3[10]).intl;
          const obj11 = { sender: null };
          obj11[0] = str;
          obj10[3] = intl2.format(tmp2(tmp3[10]).t["6yrIzU"], obj11);
          const items10 = [tmp30(tmp2(tmp3[32]).Text, obj10), ];
          let str4 = "heading-xxl/semibold";
          if (customMessage.length > 110) {
            str4 = "heading-xl/semibold";
          }
          const obj12 = { variant: null, style: null, children: null };
          obj12[0] = str4;
          obj12[1] = tmp.text;
          obj12[2] = customMessage;
          items10[1] = tmp30(tmp2(tmp3[32]).Text, obj12);
          obj9[1] = items10;
          tmp27Result = tmp27(tmp34, obj9);
        }
        items9[3] = tmp27Result;
        obj2[2] = items9;
        const items11 = [tmp27(tmp28, obj2), ];
        const obj13 = { style: null, children: null };
        obj13[0] = tmp.footer;
        if (giftCode.isClaimed) {
          const obj14 = { text: null, size: "md", onPress: null };
          const intl7 = tmp2(tmp3[10]).intl;
          obj14[0] = intl7.string(tmp2(tmp3[10]).t.XiOHRX);
          obj14[2] = function onPress() {
            return arr.push(str(soundId[44]).GiftCodeModalScreens.SUCCESS, { giftCode: str });
          };
          let tmp30Result1 = tmp30(tmp2(tmp3[43]).Button, obj14);
        } else if (null != tmp6) {
          const obj15 = { text: null, size: "md", onPress: null };
          const intl6 = tmp2(tmp3[10]).intl;
          obj15[0] = intl6.string(tmp2(tmp3[10]).t["3nWhcJ"]);
          obj15[2] = function onPress() {
            let obj = str(soundId[8]);
            obj = { step: canStartAuthorization.ERROR, giftCode: str, customMessage, emojiName, soundId };
            obj.trackStep(obj);
            obj = { message: closure_7 };
          };
          tmp30Result1 = tmp30(tmp2(tmp3[43]).Button, obj15);
        } else {
          if (tmp2Result8.isGameItemSKU(stateFromStores1)) {
            if (!hasAlreadyLinked) {
              if (canStartAuthorization) {
                if (!socialLayerStorefrontMobileAccountLinkingDisabled) {
                  let obj16 = { text: null, size: "md", icon: null, onPress: null };
                  const intl3 = tmp2(tmp3[10]).intl;
                  obj16[0] = intl3.string(tmp2(tmp3[10]).t["VDAhr+"]);
                  const obj17 = { size: "xs", color: null, style: null };
                  obj17[1] = tmp5(tmp3[14]).colors.WHITE;
                  obj17[2] = tmp.linkAccountIcon;
                  obj16[2] = tmp30(tmp2(tmp3[46]).ExperimentalGameControllerLinkIcon, obj17);
                  obj16[3] = function onPress() {
                    let obj = customMessage(soundId[28]);
                    obj = { location_stack: analyticsLocations, sku_id: str.skuId, application_id: str.applicationId, is_gift: true };
                    obj.track(hasAlreadyLinked.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj);
                    obj = { analyticsLocations };
                    startAuthorization(obj);
                  };
                }
                tmp30Result1 = tmp30(tmp40, obj16);
              }
              const obj18 = { text: null, size: "md", onPress: null };
              const intl4 = tmp2(tmp3[10]).intl;
              obj18[0] = intl4.string(tmp2(tmp3[10]).t.cpT0Cq);
              obj18[2] = function onPress() {
                let arr = customMessage(soundId[45]);
                arr = arr.pop();
              };
              obj16 = obj18;
            }
          }
          const obj19 = { disabled: null, text: null, size: "md", onPress: null };
          obj19[0] = stateFromStores;
          const intl5 = tmp2(tmp3[10]).intl;
          const string = intl5.string;
          let rTeOBK = tmp2(tmp3[10]).t;
          if (stateFromStores) {
            rTeOBK = rTeOBK.rTeOBK;
            let stringResult = string(rTeOBK);
          } else {
            stringResult = string(rTeOBK["3nWhcJ"]);
          }
          obj19[1] = stringResult;
          obj19[3] = function onPress() {
            let obj = customMessage(soundId[47]);
            obj = {
              code: str.code,
              onRedeemed() {
                let obj = closure_1_0(closure_1_2[8]);
                obj = { step: closure_1_12.SUCCESS, giftCode: closure_0, customMessage: closure_1, emojiName: closure_3, soundId: closure_2 };
                obj.trackStep(obj);
                obj = { giftCode: closure_0 };
              },
              onError(error) {
                let obj = closure_1_0(closure_1_2[8]);
                obj = { step: closure_1_12.ERROR, giftCode: closure_0, customMessage: closure_1, emojiName: closure_3, soundId: closure_2 };
                obj.trackStep(obj);
                obj = { message: closure_1_0(closure_1_2[8]).getGiftCodeRedeemError(error, closure_4) };
                const obj4 = closure_1_0(closure_1_2[8]);
              }
            };
            obj.redeemGiftCode(obj);
          };
          tmp30(tmp2(tmp3[43]).Button, obj19);
          tmp2Result8 = tmp2(tmp3[9]);
        }
        obj13[1] = tmp30Result1;
        items11[1] = tmp30(tmp34, obj13);
        obj1[2] = items11;
        return tmp27(tmp2(tmp3[31]).SafeAreaPaddingView, obj1);
      }
    }
    if (null == first) {
      if (null != getOrFetchApplication) {
        if (null == giftCode.giftStyle) {
          const obj20 = { game: null, size: null, skuId: null };
          obj20[0] = getOrFetchApplication;
          tmp5Result = tmp5(tmp3[36]);
          obj20[1] = tmp2(tmp3[36]).GameIconSizes.LARGE;
          obj20[2] = giftCode.skuId;
          tmp30Result = tmp30(tmp5Result, obj20);
        }
      }
    }
    if (tmp31) {
      if (null != product) {
        const obj21 = { style: null, onLayout: null, children: null };
        obj21[0] = tmp.collectiblesAssetBundle;
        obj21[1] = callback;
        let tmp30Result3 = null != tmp25;
        if (tmp30Result3) {
          const obj22 = { deco: null, pfx: null, nameplate: null, previewAssets: null, disableStaticBackground: true, size: "large", targetSize: null };
          obj22[0] = firstAvatarDecoration;
          obj22[1] = firstProfileEffect;
          obj22[2] = firstNameplate;
          obj22[3] = product.previewAssets;
          obj22[6] = tmp25;
          tmp30Result3 = tmp30(tmp5(tmp3[37]), obj22);
        }
        obj21[2] = tmp30Result3;
        let obj23 = obj21;
      }
      tmp30Result = tmp30(tmp34, obj23);
    }
    obj23 = { style: null, children: null };
    obj23[0] = giftCode.isSubscription ? tmp.giftCardAsset : tmp.collectiblesAsset;
    const match = tmp2(tmp3[11]).match(first);
    const obj24 = { type: null };
    obj24[0] = tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION;
    const str3 = tmp2(tmp3[11]);
    const obj25 = { type: null };
    obj25[0] = tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT;
    const withResult = match.with(obj24, (avatarDecoration) => startAuthorization(str(soundId[38]).Avatar, { source: user.getAvatarSource(null, true, str(soundId[38]).AVATAR_SIZE_MAP[str(undefined, soundId[38]).AvatarSizes.GIFT_START]), avatarDecoration, size: str(soundId[38]).AvatarSizes.GIFT_START, animate: true }));
    const obj26 = { type: null };
    obj26[0] = tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME;
    const withResult1 = match.with(obj24, (avatarDecoration) => startAuthorization(str(soundId[38]).Avatar, { source: user.getAvatarSource(null, true, str(soundId[38]).AVATAR_SIZE_MAP[str(undefined, soundId[38]).AvatarSizes.GIFT_START]), avatarDecoration, size: str(soundId[38]).AvatarSizes.GIFT_START, animate: true })).with(obj25, (profileEffect) => startAuthorization(customMessage(soundId[39]), { user, profileEffect }));
    const obj27 = { type: null };
    obj27[0] = tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE;
    const withResult2 = match.with(obj24, (avatarDecoration) => startAuthorization(str(soundId[38]).Avatar, { source: user.getAvatarSource(null, true, str(soundId[38]).AVATAR_SIZE_MAP[str(undefined, soundId[38]).AvatarSizes.GIFT_START]), avatarDecoration, size: str(soundId[38]).AvatarSizes.GIFT_START, animate: true })).with(obj25, (profileEffect) => startAuthorization(customMessage(soundId[39]), { user, profileEffect })).with(obj26, (profileFrame) => startAuthorization(customMessage(soundId[40]), { user, profileFrame }));
    obj23[1] = match.with(obj24, (avatarDecoration) => startAuthorization(str(soundId[38]).Avatar, { source: user.getAvatarSource(null, true, str(soundId[38]).AVATAR_SIZE_MAP[str(undefined, soundId[38]).AvatarSizes.GIFT_START]), avatarDecoration, size: str(soundId[38]).AvatarSizes.GIFT_START, animate: true })).with(obj25, (profileEffect) => startAuthorization(customMessage(soundId[39]), { user, profileEffect })).with(obj26, (profileFrame) => startAuthorization(customMessage(soundId[40]), { user, profileFrame })).with(obj27, (nameplate) => {
      const items = [closure_5.nameplateContainer, ];
      let prop;
      if (!closure_8) {
        prop = closure_5.nameplateContainerOffCenter;
      }
      obj = { style: items, children: tmp(str(soundId[41]).NameplatePreview, obj) };
      items[1] = prop;
      obj = { user, nameplate };
      return startAuthorization(closure_6, obj);
    }).otherwise(() => startAuthorization(customMessage(soundId[42]), { giftStyle: str.giftStyle }));
    const withResult3 = match.with(obj24, (avatarDecoration) => startAuthorization(str(soundId[38]).Avatar, { source: user.getAvatarSource(null, true, str(soundId[38]).AVATAR_SIZE_MAP[str(undefined, soundId[38]).AvatarSizes.GIFT_START]), avatarDecoration, size: str(soundId[38]).AvatarSizes.GIFT_START, animate: true })).with(obj25, (profileEffect) => startAuthorization(customMessage(soundId[39]), { user, profileEffect })).with(obj26, (profileFrame) => startAuthorization(customMessage(soundId[40]), { user, profileFrame })).with(obj27, (nameplate) => {
      const items = [closure_5.nameplateContainer, ];
      let prop;
      if (!closure_8) {
        prop = closure_5.nameplateContainerOffCenter;
      }
      obj = { style: items, children: tmp(str(soundId[41]).NameplatePreview, obj) };
      items[1] = prop;
      obj = { user, nameplate };
      return startAuthorization(closure_6, obj);
    });
  }
  const tmp24 = emojiName(user.useState(), 2);
  tmp28 = closure_7;
  if (tmp2Result9.isGameItemSKU(stateFromStores1)) {
    let intl = tmp2(tmp3[10]).intl;
    subscriptionGiftStartHeaderText = intl.string(tmp2(tmp3[10]).t["Bn1J+a"]);
  } else {
    const obj28 = { type: null, isBundle: null, sender: null };
    obj28[0] = type;
    obj28[1] = tmp31;
    obj28[2] = str;
    const match1 = tmp2(tmp3[11]).match(obj28);
    const obj29 = { isBundle: true, sender: null };
    const P = tmp2(tmp3[11]).P;
    obj29[1] = P.not(tmp2(tmp3[11]).P.nullish);
    const str2 = tmp2(tmp3[11]);
    const obj30 = { isBundle: true, sender: null };
    obj30[1] = tmp2(tmp3[11]).P.nullish;
    const withResult4 = match1.with(obj29, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.JUV1tL, { sender: str });
    });
    const obj31 = { type: null, sender: null };
    obj31[0] = tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION;
    const P2 = tmp2(tmp3[11]).P;
    obj31[1] = P2.not(tmp2(tmp3[11]).P.nullish);
    const withResult5 = match1.with(obj29, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.JUV1tL, { sender: str });
    }).with(obj30, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t.iJ8823);
    });
    const obj32 = { type: null, sender: null };
    obj32[0] = tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT;
    const P3 = tmp2(tmp3[11]).P;
    obj32[1] = P3.not(tmp2(tmp3[11]).P.nullish);
    const withResult6 = match1.with(obj29, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.JUV1tL, { sender: str });
    }).with(obj30, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t.iJ8823);
    }).with(obj31, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.SKduyh, { sender: str });
    });
    const obj33 = { type: null, sender: null };
    obj33[0] = tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE;
    const P4 = tmp2(tmp3[11]).P;
    obj33[1] = P4.not(tmp2(tmp3[11]).P.nullish);
    const withResult7 = match1.with(obj29, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.JUV1tL, { sender: str });
    }).with(obj30, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t.iJ8823);
    }).with(obj31, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.SKduyh, { sender: str });
    }).with(obj32, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t["1w42T2"], { sender: str });
    });
    const obj34 = { type: null, sender: null };
    obj34[0] = tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME;
    const P5 = tmp2(tmp3[11]).P;
    obj34[1] = P5.not(tmp2(tmp3[11]).P.nullish);
    const withResult8 = match1.with(obj29, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.JUV1tL, { sender: str });
    }).with(obj30, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t.iJ8823);
    }).with(obj31, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.SKduyh, { sender: str });
    }).with(obj32, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t["1w42T2"], { sender: str });
    }).with(obj33, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.vFiQlU, { sender: str });
    });
    const obj35 = { type: null, sender: null };
    obj35[0] = tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION;
    obj35[1] = tmp2(tmp3[11]).P.nullish;
    const withResult9 = match1.with(obj29, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.JUV1tL, { sender: str });
    }).with(obj30, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t.iJ8823);
    }).with(obj31, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.SKduyh, { sender: str });
    }).with(obj32, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t["1w42T2"], { sender: str });
    }).with(obj33, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.vFiQlU, { sender: str });
    }).with(obj34, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t["UH/EQL"], { sender: str });
    });
    const obj36 = { type: null, sender: null };
    obj36[0] = tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT;
    obj36[1] = tmp2(tmp3[11]).P.nullish;
    const withResult10 = match1.with(obj29, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.JUV1tL, { sender: str });
    }).with(obj30, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t.iJ8823);
    }).with(obj31, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.SKduyh, { sender: str });
    }).with(obj32, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t["1w42T2"], { sender: str });
    }).with(obj33, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.vFiQlU, { sender: str });
    }).with(obj34, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t["UH/EQL"], { sender: str });
    }).with(obj35, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t["2ZO6CC"]);
    });
    const obj37 = { type: null, sender: null };
    obj37[0] = tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE;
    obj37[1] = tmp2(tmp3[11]).P.nullish;
    const withResult11 = match1.with(obj29, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.JUV1tL, { sender: str });
    }).with(obj30, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t.iJ8823);
    }).with(obj31, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.SKduyh, { sender: str });
    }).with(obj32, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t["1w42T2"], { sender: str });
    }).with(obj33, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.vFiQlU, { sender: str });
    }).with(obj34, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t["UH/EQL"], { sender: str });
    }).with(obj35, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t["2ZO6CC"]);
    }).with(obj36, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t["2NxdjX"]);
    });
    const obj38 = { type: null, sender: null };
    obj38[0] = tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME;
    obj38[1] = tmp2(tmp3[11]).P.nullish;
    const withResult12 = match1.with(obj29, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.JUV1tL, { sender: str });
    }).with(obj30, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t.iJ8823);
    }).with(obj31, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.SKduyh, { sender: str });
    }).with(obj32, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t["1w42T2"], { sender: str });
    }).with(obj33, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.vFiQlU, { sender: str });
    }).with(obj34, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t["UH/EQL"], { sender: str });
    }).with(obj35, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t["2ZO6CC"]);
    }).with(obj36, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t["2NxdjX"]);
    }).with(obj37, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t.v7F232);
    });
    subscriptionGiftStartHeaderText = match1.with(obj29, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.JUV1tL, { sender: str });
    }).with(obj30, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t.iJ8823);
    }).with(obj31, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.SKduyh, { sender: str });
    }).with(obj32, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t["1w42T2"], { sender: str });
    }).with(obj33, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.vFiQlU, { sender: str });
    }).with(obj34, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t["UH/EQL"], { sender: str });
    }).with(obj35, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t["2ZO6CC"]);
    }).with(obj36, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t["2NxdjX"]);
    }).with(obj37, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t.v7F232);
    }).with(obj38, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t["1+tgC0"]);
    }).otherwise(() => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t["2BWscv"]);
    });
    const withResult13 = match1.with(obj29, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.JUV1tL, { sender: str });
    }).with(obj30, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t.iJ8823);
    }).with(obj31, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.SKduyh, { sender: str });
    }).with(obj32, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t["1w42T2"], { sender: str });
    }).with(obj33, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t.vFiQlU, { sender: str });
    }).with(obj34, () => {
      const intl = str(soundId[10]).intl;
      return intl.formatToPlainString(str(soundId[10]).t["UH/EQL"], { sender: str });
    }).with(obj35, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t["2ZO6CC"]);
    }).with(obj36, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t["2NxdjX"]);
    }).with(obj37, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t.v7F232);
    }).with(obj38, () => {
      const intl = str(soundId[10]).intl;
      return intl.string(str(soundId[10]).t["1+tgC0"]);
    });
  }
};