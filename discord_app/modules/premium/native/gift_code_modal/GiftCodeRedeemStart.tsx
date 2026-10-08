// === Module 10476: GiftCodeRedeemStart ===

// Module 10476 (GiftCodeRedeemStart)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1992 */;
import UserUtilsDefault from "UserUtils" /* 4922 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5629 */;
import _mod5741 from "module_5741" /* 5741 */;
import GameIcon from "GameIcon" /* 6851 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6917 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7038 */;
import ExperimentalGameControllerLinkIcon from "ExperimentalGameControllerLinkIcon" /* 8919 */;
import BundleSampleV2Default from "BundleSampleV2" /* 8970 */;
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 10142 */;
import actions_GiftCodeActionCreatorsDefault from "actions/GiftCodeActionCreators" /* 10469 */;
import GiftCodeRedeemModal from "GiftCodeRedeemModal" /* 10475 */;
import SlayerStorefrontGiftPreviewDefault from "SlayerStorefrontGiftPreview" /* 10484 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 10486 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 11186 */;
import NameplatePreview from "NameplatePreview" /* 11187 */;
import GiftBoxAnimationDefault from "GiftBoxAnimation" /* 11237 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GiftCodeStore from "GiftCodeStore" /* 10466 */;
import UserStore from "UserStore" /* 1389 */;
import SKUStore from "SKUStore" /* 6092 */;

require = fn;
function getGiftCodeHeaderText(isSubscription) {
  ({ subscriptionPlan, sender } = isSubscription);
  ({ sku, itemType, isBundle } = isSubscription);
  if (isSubscription.isSubscription) {
    if (null != subscriptionPlan) {
      let name;
      if (sku != null) {
        name = sku.name;
      }
      let subscriptionGiftStartHeaderText = sender(5629).getSubscriptionGiftStartHeaderText(subscriptionPlan, sender, name);
      const obj24 = sender(5629);
    }
    return subscriptionGiftStartHeaderText;
  }
  if (obj.isGameItemSKU(sku)) {
    let intl = sender(1126).intl;
    subscriptionGiftStartHeaderText = intl.string(sender(1126).t["Bn1J+a"]);
  } else {
    const obj2 = { type: itemType, isBundle, sender };
    const match = sender(5741).match(obj2);
    const obj3 = { isBundle: true, sender: null };
    const P = sender(5741).P;
    obj3.sender = P.not(sender(5741).P.nullish);
    const str = sender(5741);
    const obj4 = { isBundle: true, sender: sender(5741).P.nullish };
    const withResult = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    });
    const obj5 = { type: sender(1992).CollectiblesItemType.AVATAR_DECORATION, sender: null };
    const P2 = sender(5741).P;
    obj5.sender = P2.not(sender(5741).P.nullish);
    const withResult1 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t.iJ8823);
    });
    const obj6 = { type: sender(1992).CollectiblesItemType.PROFILE_EFFECT, sender: null };
    const P3 = sender(5741).P;
    obj6.sender = P3.not(sender(5741).P.nullish);
    const withResult2 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    });
    const obj7 = { type: sender(1992).CollectiblesItemType.NAMEPLATE, sender: null };
    const P4 = sender(5741).P;
    obj7.sender = P4.not(sender(5741).P.nullish);
    const withResult3 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    });
    const obj8 = { type: sender(1992).CollectiblesItemType.PROFILE_FRAME, sender: null };
    const P5 = sender(5741).P;
    obj8.sender = P5.not(sender(5741).P.nullish);
    const withResult4 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    }).with(obj7, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender });
    });
    const obj9 = { type: sender(1992).CollectiblesItemType.AVATAR_DECORATION, sender: sender(5741).P.nullish };
    const withResult5 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    }).with(obj7, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender });
    }).with(obj8, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender });
    });
    const obj10 = { type: sender(1992).CollectiblesItemType.PROFILE_EFFECT, sender: sender(5741).P.nullish };
    const withResult6 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    }).with(obj7, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender });
    }).with(obj8, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender });
    }).with(obj9, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t["2ZO6CC"]);
    });
    const obj11 = { type: sender(1992).CollectiblesItemType.NAMEPLATE, sender: sender(5741).P.nullish };
    const withResult7 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    }).with(obj7, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender });
    }).with(obj8, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender });
    }).with(obj9, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t["2ZO6CC"]);
    }).with(obj10, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t["2NxdjX"]);
    });
    const obj12 = { type: sender(1992).CollectiblesItemType.PROFILE_FRAME, sender: sender(5741).P.nullish };
    const withResult8 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    }).with(obj7, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender });
    }).with(obj8, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender });
    }).with(obj9, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t["2ZO6CC"]);
    }).with(obj10, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t["2NxdjX"]);
    }).with(obj11, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t.v7F232);
    });
    subscriptionGiftStartHeaderText = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    }).with(obj7, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender });
    }).with(obj8, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender });
    }).with(obj9, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t["2ZO6CC"]);
    }).with(obj10, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t["2NxdjX"]);
    }).with(obj11, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t.v7F232);
    }).with(obj12, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t["1+tgC0"]);
    }).otherwise(() => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t["2BWscv"]);
    });
    const withResult9 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    }).with(obj7, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender });
    }).with(obj8, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender });
    }).with(obj9, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t["2ZO6CC"]);
    }).with(obj10, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t["2NxdjX"]);
    }).with(obj11, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t.v7F232);
    }).with(obj12, () => {
      const intl = sender(1126).intl;
      return intl.string(sender(1126).t["1+tgC0"]);
    });
  }
  obj = sender(6917);
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, ScrollView: closure_7, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: closure_11, GiftCodeModalStates: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28 }, bodyWithMessage: { flex: 0 }, nameplateContainer: { width: "100%" }, nameplateContainerOffCenter: { paddingBottom: 56 }, message: { gap: 8 }, text: { textAlign: "center", paddingHorizontal: 32 }, footer: { paddingHorizontal: 24, paddingBottom: 12 }, confettiBackground: { justifyContent: "center", width: "100%", position: "absolute", top: 0, left: 0, opacity: 0.4, height: 275 }, confettiImage: null, emojiContainer: null, imageWrapper: null, collectiblesAsset: null, collectiblesAssetBundle: null, giftCardAsset: null, linkAccountIcon: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.width = "100%";
obj4.height = 275;
obj2.confettiImage = obj4;
obj2.emojiContainer = { justifyContent: "center", alignItems: "center" };
obj2.imageWrapper = { position: "relative", width: "100%", alignItems: "center", justifyContent: "center" };
obj2.collectiblesAsset = { margin: 40 };
obj2.collectiblesAssetBundle = { margin: 20, alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" };
obj2.giftCardAsset = { marginTop: 20, marginBottom: 40 };
obj2.linkAccountIcon = { marginRight: 4 };
let closure_16 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GiftCodeRedeemStart(giftCode) {
  const cResult = giftCode(soundId[16]).c(119);
  giftCode = giftCode.giftCode;
  const customMessage = giftCode.customMessage;
  soundId = giftCode.soundId;
  const emojiName = giftCode.emojiName;
  const user = giftCode.user;
  let obj = giftCode(soundId[16]);
  closure_5 = firstProfileEffect();
  const tmp4 = firstProfileEffect();
  const navigation = giftCode(soundId[17]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [stateFromStores1];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== giftCode.code) {
    class S {
      constructor() {
        return closure_8.getIsAccepting(giftCode.code);
      }
    }
    cResult[1] = giftCode.code;
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        return closure_8.getIsAccepting(giftCode.code);
      }
    }
  }
  let obj2 = giftCode(soundId[17]);
  const stateFromStores = giftCode(soundId[18]).useStateFromStores(first, S);
  let tmpResult = giftCode(soundId[18]);
  const items1 = [closure_9];
  stateFromStores1 = giftCode(soundId[18]).useStateFromStores(items1, () => UserUtilsDefault.getName(UserStore.getUser(giftCode.userId)));
  if (stateFromStores1 == null) {
    class S {
      constructor() {
        return closure_8.getIsAccepting(giftCode.code);
      }
    }
  }
  const tmpResult9 = giftCode(soundId[18]);
  closure_9 = customMessage(soundId[20])(giftCode.code, user);
  const tmp12 = customMessage(soundId[20])(giftCode.code, user);
  const getOrFetchSubscriptionPlan = giftCode(soundId[21]).useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const tmpResult10 = giftCode(soundId[21]);
  const getOrFetchApplication = giftCode(soundId[22]).useGetOrFetchApplication(giftCode.applicationId);
  const tmpResult11 = giftCode(soundId[22]);
  const tmpResult12 = giftCode(soundId[23]);
  if (tmpResult13.isCollectiblesGiftCode(giftCode)) {
    class S {
      constructor() {
        return closure_8.getIsAccepting(giftCode.code);
      }
    }
  }
  const product = tmpResult12.useFetchCollectiblesProduct(null, true).product;
  if (product != null) {
    class S {
      constructor() {
        return closure_8.getIsAccepting(giftCode.code);
      }
    }
  }
  c13 = undefined;
  if (product != null) {
    class S {
      constructor() {
        return closure_8.getIsAccepting(giftCode.code);
      }
    }
  }
  tmpResult13 = giftCode(soundId[24]);
  const isBundle = undefined === giftCode(soundId[12]).CollectiblesItemType.BUNDLE;
  if (cResult[3] !== product) {
    class S {
      constructor() {
        return closure_8.getIsAccepting(giftCode.code);
      }
    }
    if (product == null) {
      class S {
        constructor() {
          return closure_8.getIsAccepting(giftCode.code);
        }
      }
      tmp18[0] = [];
    }
    cResult[3] = product;
    cResult[4] = tmp18;
  } else {
    class S {
      constructor() {
        return closure_8.getIsAccepting(giftCode.code);
      }
    }
  }
  let tmp15 = undefined === giftCode(soundId[12]).CollectiblesItemType.BUNDLE;
  const shopProductItems = giftCode(soundId[25]).useShopProductItems(tmp18);
  const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstNameplate = shopProductItems.firstNameplate;
  let tmp20 = null != customMessage;
  if (tmp20) {
    class S {
      constructor() {
        return closure_8.getIsAccepting(giftCode.code);
      }
    }
    tmp20 = customMessage.length > 0;
  }
  closure_18 = tmp20;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_8.getIsAccepting(giftCode.code);
      }
    }
    const items2 = [getOrFetchSubscriptionPlan];
    cResult[5] = items2;
    const tmp21 = items2;
  } else {
    class S {
      constructor() {
        return closure_8.getIsAccepting(giftCode.code);
      }
    }
  }
  if (cResult[6] !== giftCode.skuId) {
    class U {
      constructor() {
        return closure_10.get(giftCode.skuId);
      }
    }
    cResult[6] = giftCode.skuId;
    cResult[7] = U;
  } else {
    class U {
      constructor() {
        return closure_10.get(giftCode.skuId);
      }
    }
  }
  const tmpResult14 = giftCode(soundId[25]);
  const stateFromStores2 = giftCode(soundId[18]).useStateFromStores(tmp21, U);
  const tmp24 = customMessage(soundId[26])(getOrFetchApplication);
  const fetched = tmp24.fetched;
  const hasAlreadyLinked = tmp24.hasAlreadyLinked;
  const canStartAuthorization = tmp24.canStartAuthorization;
  const startAuthorization = tmp24.startAuthorization;
  const tmpResult15 = giftCode(soundId[18]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = giftCode(soundId[27]).useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  const tmpResult16 = giftCode(soundId[27]);
  const analyticsLocations = customMessage(soundId[28])(tmp11(tmp2[29]).GIFT_CODE_MODAL).analyticsLocations;
  if (cResult[8] === analyticsLocations) {
    class U {
      constructor() {
        return closure_10.get(giftCode.skuId);
      }
    }
  }
  cResult[8] = analyticsLocations;
  cResult[9] = canStartAuthorization;
  cResult[10] = giftCode.applicationId;
  cResult[11] = giftCode.skuId;
  cResult[12] = { analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization };
  let obj3 = { analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization };
  const tmp11Result = customMessage(soundId[28]);
}) : (function GiftCodeRedeemStart(giftCode) {
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
  let tmp = c16();
  closure_5 = tmp;
  closure_6 = giftCode(soundId[17]).useNavigation();
  let obj = giftCode(soundId[17]);
  let items = [closure_8];
  const stateFromStores = giftCode(soundId[18]).useStateFromStores(items, () => GiftCodeStore.getIsAccepting(giftCode.code));
  let obj2 = giftCode(soundId[18]);
  const items1 = [stateFromStores1];
  let str = giftCode(soundId[18]).useStateFromStores(items1, () => UserUtilsDefault.getName(UserStore.getUser(giftCode.userId)));
  if (str == null) {
    str = "";
  }
  const tmp6 = customMessage(soundId[20])(giftCode.code, user);
  message = tmp6;
  let obj3 = giftCode(soundId[18]);
  const getOrFetchSubscriptionPlan = giftCode(soundId[21]).useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const tmp2Result = giftCode(soundId[21]);
  const getOrFetchApplication = giftCode(soundId[22]).useGetOrFetchApplication(giftCode.applicationId);
  const tmp2Result9 = giftCode(soundId[22]);
  const tmp2Result10 = giftCode(soundId[23]);
  let skuId = null;
  if (tmp2Result11.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = tmp2Result10.useFetchCollectiblesProduct(skuId, true).product;
  let first;
  if (product != null) {
    first = product.items[0];
  }
  let type;
  if (product != null) {
    type = product.type;
  }
  tmp2Result11 = giftCode(soundId[24]);
  let tmp12 = product;
  if (product == null) {
    const obj4 = { items: [] };
    tmp12 = obj4;
  }
  const shopProductItems = giftCode(soundId[25]).useShopProductItems(tmp12);
  let tmp27Result2 = null != customMessage;
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  if (tmp27Result2) {
    tmp27Result2 = customMessage.length > 0;
  }
  closure_8 = tmp27Result2;
  const tmp2Result12 = giftCode(soundId[25]);
  const items2 = [fetched];
  stateFromStores1 = giftCode(soundId[18]).useStateFromStores(items2, () => SKUStore.get(giftCode.skuId));
  const tmp16 = customMessage(soundId[26])(getOrFetchApplication);
  fetched = tmp16.fetched;
  hasAlreadyLinked = tmp16.hasAlreadyLinked;
  canStartAuthorization = tmp16.canStartAuthorization;
  startAuthorization = tmp16.startAuthorization;
  const tmp2Result13 = giftCode(soundId[18]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = giftCode(soundId[27]).useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  const tmp2Result14 = giftCode(soundId[27]);
  analyticsLocations = customMessage(soundId[28])(tmp5(tmp3[29]).GIFT_CODE_MODAL).analyticsLocations;
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
  const tmp5Result = customMessage(soundId[28]);
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
  if (tmp27Result2) {
    bodyWithMessage = tmp.bodyWithMessage;
  }
  const obj7 = { contentContainerStyle: items8, alwaysBounceVertical: false, children: null };
  items8[1] = bodyWithMessage;
  const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.text, accessibilityRole: "header", children: null };
  const obj9 = { isSubscription: giftCode.isSubscription, subscriptionPlan: getOrFetchSubscriptionPlan, sender: str, itemType: null, isBundle: null, sku: null };
  let type1;
  if (first != null) {
    type1 = first.type;
  }
  const tmp33 = type === giftCode(soundId[12]).CollectiblesItemType.BUNDLE;
  obj9.itemType = type1;
  obj9.isBundle = tmp33;
  obj9.sku = stateFromStores1;
  obj8.children = ref(obj9);
  const items9 = [startAuthorization(giftCode(soundId[33]).Text, obj8), , , ];
  const obj10 = { style: tmp.imageWrapper, children: null };
  let tmp27Result = null != emojiName;
  if (tmp27Result) {
    const obj11 = { style: tmp.confettiBackground, children: null };
    const obj12 = { source: tmp2(tmp3[47]), style: tmp.confettiImage };
    const items10 = [tmp30(closure_5, obj12), ];
    const obj13 = { style: tmp.emojiContainer, children: null };
    const obj14 = { emojiName, randomizeSizing: true };
    obj13.children = tmp30(tmp5(tmp3[48]), obj14);
    items10[1] = tmp30(tmp34, obj13);
    obj11.children = items10;
    tmp27Result = tmp27(tmp34, obj11);
  }
  obj10.children = tmp27Result;
  items9[1] = startAuthorization(closure_6, obj10);
  if (null == first) {
    if (null != getOrFetchApplication) {
      if (tmp2Result15.isGameItemSKU(stateFromStores1)) {
        const obj15 = { sku: stateFromStores1, application: getOrFetchApplication, sender: str, hasAccountLinked: hasAlreadyLinked, canStartAuthorization, mobileAccountLinkingDisabled: socialLayerStorefrontMobileAccountLinkingDisabled };
        let tmp30Result = tmp30(tmp5(tmp3[34]), obj15);
      }
      items9[2] = tmp30Result;
      if (tmp27Result2) {
        const obj16 = { style: tmp.message, children: null };
        const obj17 = { variant: "eyebrow", color: "text-default", style: tmp.text, children: null };
        const intl = tmp2(tmp3[10]).intl;
        const obj18 = { sender: str };
        obj17.children = intl.format(tmp2(tmp3[10]).t["6yrIzU"], obj18);
        const items11 = [tmp30(tmp2(tmp3[33]).Text, obj17), ];
        let str3 = "heading-xxl/semibold";
        if (customMessage.length > 110) {
          str3 = "heading-xl/semibold";
        }
        const obj19 = { variant: str3, style: tmp.text, children: customMessage };
        items11[1] = tmp30(tmp2(tmp3[33]).Text, obj19);
        obj16.children = items11;
        tmp27Result2 = tmp27(tmp34, obj16);
      }
      items9[3] = tmp27Result2;
      obj7.children = items9;
      const items12 = [tmp27(tmp28, obj7), ];
      const obj20 = { style: tmp.footer, children: null };
      if (giftCode.isClaimed) {
        const obj21 = { text: null, size: "md", onPress: null };
        const intl6 = tmp2(tmp3[10]).intl;
        obj21.text = intl6.string(tmp2(tmp3[10]).t.XiOHRX);
        obj21.onPress = function onPress() {
          return closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.SUCCESS, { giftCode });
        };
        let tmp30Result4 = tmp30(tmp2(tmp3[42]).Button, obj21);
      } else if (null != tmp6) {
        const obj22 = { text: null, size: "md", onPress: null };
        const intl5 = tmp2(tmp3[10]).intl;
        obj22.text = intl5.string(tmp2(tmp3[10]).t["3nWhcJ"]);
        obj22.onPress = function onPress() {
          GiftCodeUtils.trackStep({ step: constants2.ERROR, giftCode, customMessage, emojiName, soundId });
          closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.ERROR, { message });
        };
        tmp30Result4 = tmp30(tmp2(tmp3[42]).Button, obj22);
      } else {
        if (tmp2Result16.isGameItemSKU(stateFromStores1)) {
          if (!hasAlreadyLinked) {
            if (canStartAuthorization) {
              if (!socialLayerStorefrontMobileAccountLinkingDisabled) {
                let obj23 = { text: null, size: "md", icon: null, onPress: null };
                const intl2 = tmp2(tmp3[10]).intl;
                obj23.text = intl2.string(tmp2(tmp3[10]).t["VDAhr+"]);
                const obj24 = { size: "xs", color: tmp5(tmp3[14]).colors.WHITE, style: tmp.linkAccountIcon };
                obj23.icon = tmp30(tmp2(tmp3[45]).ExperimentalGameControllerLinkIcon, obj24);
                obj23.onPress = function onPress() {
                  AnalyticsUtilsDefault.track(constants.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, { location_stack: analyticsLocations, sku_id: giftCode.skuId, application_id: giftCode.applicationId, is_gift: true });
                  startAuthorization({ analyticsLocations });
                };
              }
              tmp30Result4 = tmp30(tmp40, obj23);
            }
            const obj25 = { text: null, size: "md", onPress: null };
            const intl3 = tmp2(tmp3[10]).intl;
            obj25.text = intl3.string(tmp2(tmp3[10]).t.cpT0Cq);
            obj25.onPress = function onPress() {
              customMessage(soundId[44]).pop();
            };
            obj23 = obj25;
          }
        }
        const obj26 = { disabled: stateFromStores, text: null, size: "md", onPress: null };
        const intl4 = tmp2(tmp3[10]).intl;
        const string = intl4.string;
        let rTeOBK = tmp2(tmp3[10]).t;
        if (stateFromStores) {
          rTeOBK = rTeOBK.rTeOBK;
          let stringResult = string(rTeOBK);
        } else {
          stringResult = string(rTeOBK["3nWhcJ"]);
        }
        obj26.text = stringResult;
        obj26.onPress = function onPress() {
          actions_GiftCodeActionCreatorsDefault.redeemGiftCode({
            code: giftCode.code,
            onRedeemed() {
              giftCode(soundId[8]).trackStep({ step: canStartAuthorization.SUCCESS, giftCode, customMessage, emojiName, soundId });
              closure_1_6.push(giftCode(soundId[43]).GiftCodeModalScreens.SUCCESS, { giftCode });
            },
            onError(error) {
              giftCode(soundId[8]).trackStep({ step: canStartAuthorization.ERROR, giftCode, customMessage, emojiName, soundId });
              const obj3 = { message: null };
              const obj = giftCode(soundId[8]);
              const obj2 = { step: canStartAuthorization.ERROR, giftCode, customMessage, emojiName, soundId };
              obj3.message = giftCode(soundId[8]).getGiftCodeRedeemError(error, user);
              closure_1_6.push(giftCode(soundId[43]).GiftCodeModalScreens.ERROR, obj3);
            }
          });
        };
        tmp30(tmp2(tmp3[42]).Button, obj26);
        tmp2Result16 = tmp2(tmp3[9]);
      }
      obj20.children = tmp30Result4;
      items12[1] = tmp30(tmp34, obj20);
      obj6.children = items12;
      return tmp27(tmp2(tmp3[49]).SafeAreaPaddingView, obj6);
    }
  }
  if (null == first) {
    if (null != getOrFetchApplication) {
      if (null == giftCode.giftStyle) {
        const obj27 = { game: getOrFetchApplication, size: tmp2(tmp3[35]).GameIconSizes.LARGE, skuId: giftCode.skuId };
        tmp30Result = tmp30(tmp5(tmp3[35]), obj27);
        const tmp5Result2 = tmp5(tmp3[35]);
      }
    }
  }
  if (tmp33) {
    if (null != product) {
      const obj28 = { style: tmp.collectiblesAssetBundle, onLayout: callback, children: null };
      let tmp30Result6 = null != tmp25;
      if (tmp30Result6) {
        const obj29 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp25 };
        tmp30Result6 = tmp30(tmp5(tmp3[36]), obj29);
      }
      obj28.children = tmp30Result6;
      let obj30 = obj28;
    }
    tmp30Result = tmp30(tmp34, obj30);
  }
  obj30 = { style: giftCode.isSubscription ? tmp.giftCardAsset : tmp.collectiblesAsset, children: null };
  const tmp24 = emojiName(user.useState(), 2);
  tmp28 = message;
  const match = giftCode(soundId[11]).match(first);
  const str2 = giftCode(soundId[11]);
  const obj31 = { type: giftCode(soundId[12]).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match.with({ type: giftCode(soundId[12]).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => __initData2(native.Avatar, { source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]), avatarDecoration, size: native.AvatarSizes.GIFT_START, animate: true }));
  const obj32 = { type: giftCode(soundId[12]).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with({ type: giftCode(soundId[12]).CollectiblesItemType.PROFILE_EFFECT }, (profileEffect) => __initData2(ProfileEffectUserPreviewDefault, { user, profileEffect }));
  const obj33 = { type: giftCode(soundId[12]).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with({ type: giftCode(soundId[12]).CollectiblesItemType.PROFILE_FRAME }, (profileFrame) => __initData2(ProfileFrameUserPreviewDefault, { user, profileFrame }));
  const obj34 = { type: giftCode(soundId[12]).CollectiblesItemType.NAMEPLATE };
  obj30.children = withResult2.with({ type: giftCode(soundId[12]).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
    const items = [closure_5.nameplateContainer, ];
    let prop;
    if (!closure_8) {
      prop = closure_5.nameplateContainerOffCenter;
    }
    const obj = { style: items, children: __initData2(NameplatePreview.NameplatePreview, { user, nameplate }) };
    items[1] = prop;
    return __initData2(timestampProducer, obj);
  }).otherwise(() => __initData2(GiftBoxAnimationDefault, { giftStyle: giftCode.giftStyle }));
});