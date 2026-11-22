// === Module 16305: OrbWalletCards ===

// Module 16305 (OrbWalletCards)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef2375 from "module_2375" /* 2375 */;
import LinearGradientDefault from "LinearGradient" /* 5468 */;
import useToken from "useToken" /* 5477 */;
import Text_Text from "Text/Text" /* 5504 */;
import components_Button_Button from "components/Button/Button" /* 5511 */;
import Card from "Card" /* 7047 */;
import _modDef7135 from "module_7135" /* 7135 */;
import XSmallIcon from "XSmallIcon" /* 7151 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7539 */;
import IconButton from "IconButton" /* 7591 */;
import _modDef8840 from "module_8840" /* 8840 */;
import _modDef13008 from "module_13008" /* 13008 */;
import VirtualCurrencyAnalyticsUtil from "VirtualCurrencyAnalyticsUtil" /* 16298 */;
import OrbWalletUtils from "OrbWalletUtils" /* 16300 */;
import LocalSvgDefault from "LocalSvg" /* 16308 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import OrbChallengesStore from "OrbChallengesStore" /* 15017 */;

require = fn;
function BaseOrbWalletPrimaryCard(buttonSize) {
  ({ graphic, buttonVariant } = buttonSize);
  ({ title, graphicAccessibilityLabel, backdrop, subTextDescription, buttonText, buttonIcon } = buttonSize);
  if (buttonVariant === undefined) {
    buttonVariant = "secondary";
  }
  let str = buttonSize.buttonSize;
  if (str === undefined) {
    str = "md";
  }
  let flag = buttonSize.buttonLoading;
  if (flag === undefined) {
    flag = false;
  }
  ({ onCtaPress, onClose } = buttonSize);
  const tmp = closure_15();
  const obj = { variant: "secondary", border: "faint", radius: 16, style: tmp.primaryCard, children: null };
  items = [backdrop, , , ];
  obj2 = { style: tmp.primaryCardContent, children: null };
  const obj3 = { style: tmp.primaryCardGraphic, accessible: true, accessibilityRole: "image", accessibilityLabel: graphicAccessibilityLabel, children: null };
  size = { asset: graphic.asset, width: graphic.width, height: graphic.height };
  obj3.children = closure_1_11(LocalSvgDefault, size);
  const items1 = [closure_1_11(timestampProducer, obj3), ];
  const obj4 = { style: tmp.primaryCardText, children: null };
  const items2 = [closure_1_11(Text_Text.Text, { variant: "body-md/semibold", color: "text-strong", accessibilityRole: "header", children: title }), closure_1_11(Text_Text.Text, { variant: "body-sm/normal", color: "text-default", children: subTextDescription })];
  obj4.children = items2;
  items1[1] = application_id(timestampProducer, obj4);
  obj2.children = items1;
  items[1] = application_id(timestampProducer, obj2);
  items[2] = closure_1_11(components_Button_Button.Button, { text: buttonText, size: str, icon: buttonIcon, variant: buttonVariant, loading: flag, onPress: onCtaPress });
  const obj5 = { style: tmp.primaryCardCloseButton, children: null };
  const obj6 = { variant: "icon-only", size: "sm", icon: closure_1_11(XSmallIcon.XSmallIcon, { size: "xxs", color: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT }), accessibilityLabel: null, onPress: null };
  const intl = util.intl;
  obj6.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj6.onPress = onClose;
  obj5.children = closure_1_11(IconButton.IconButton, obj6);
  items[3] = closure_1_11(timestampProducer, obj5);
  obj.children = items;
  return application_id(Card.Card, obj);
}
function OrbWalletNitroGlow() {
  const tmp = closure_15();
  const token = useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  items = [token, token1];
  const memo = noop.useMemo(() => {
    items = [token, token1];
    return items;
  }, items);
  const obj3 = { style: tmp.nitroGlow, pointerEvents: "none", maskElement: null, children: null };
  obj3.maskElement = closure_1_11(LinearGradientDefault, { style: hasOwnProperty.absoluteFill, colors: ["black", "transparent"], start: obj2.VERTICAL_START, end: obj2.VERTICAL_END });
  obj3.children = closure_1_11(LinearGradientDefault, { style: hasOwnProperty.absoluteFill, colors: memo, start: obj2.HORIZONTAL_START, end: obj2.HORIZONTAL_END });
  return closure_1_11(_modDef7135, obj3);
}
function OrbWalletShopPrimaryCard(arg0) {
  const obj = { title: null, graphic: null, graphicAccessibilityLabel: null, subTextDescription: null, buttonText: null, buttonIcon: null, buttonVariant: "primary", buttonSize: "sm", onCtaPress: null, onClose: null };
  ({ onCtaPress, onClose } = arg0);
  const intl = util.intl;
  obj.title = intl.string(_modDef2375.v8QrJf);
  obj.graphic = size1;
  const intl2 = util.intl;
  obj.graphicAccessibilityLabel = intl2.string(_modDef2375.qa1xyr);
  const intl3 = util.intl;
  obj.subTextDescription = intl3.string(_modDef2375.HACucK);
  const intl4 = util.intl;
  obj.buttonText = intl4.string(_modDef2375["7raRgL"]);
  obj.buttonIcon = _modDef13008;
  obj.onCtaPress = onCtaPress;
  obj.onClose = onClose;
  return closure_1_11(BaseOrbWalletPrimaryCard, obj);
}
function OrbWalletNitroUpsellPrimaryCard(arg0) {
  const obj = { title: null, graphic: null, backdrop: null, graphicAccessibilityLabel: null, subTextDescription: null, buttonText: null, buttonIcon: null, buttonVariant: "expressive", onCtaPress: null, onClose: null };
  ({ onCtaPress, onClose, multiplier } = arg0);
  const intl = util.intl;
  obj.title = intl.string(_modDef2375.ZqCAos);
  obj.graphic = size;
  obj.backdrop = closure_1_11(OrbWalletNitroGlow, {});
  const intl2 = util.intl;
  obj.graphicAccessibilityLabel = intl2.string(_modDef2375.FkfrRH);
  const intl3 = util.intl;
  obj.subTextDescription = intl3.format(_modDef2375.BzzCNE, { multiplier });
  const intl4 = util.intl;
  obj.buttonText = intl4.string(_modDef2375.U9UQJE);
  obj.buttonIcon = _modDef8840;
  obj.onCtaPress = onCtaPress;
  obj.onClose = onClose;
  return closure_1_11(BaseOrbWalletPrimaryCard, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const DismissibleContentConstants = fn(4759);
({ ContentDismissActionType: closure_8, DismissibleContentGroupName: closure_9 } = DismissibleContentConstants);
const PremiumTypes = fn(1388).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const OrbWalletPrimaryCardType = { NITRO_UPSELL: "nitro_upsell", SHOP_ORBS: "shop_orbs" };
let obj2 = { NITRO_GLOW_HEIGHT: 72, HORIZONTAL_START: { x: 0, y: 0.5 }, HORIZONTAL_END: { x: 1, y: 0.5 }, VERTICAL_START: { x: 0.5, y: 0 }, VERTICAL_END: { x: 0.5, y: 1 } };
const createStyles = fn(4913);
let obj4 = { primaryCard: { gap: nativeDefault.space.PX_16, overflow: "hidden" }, nitroGlow: { position: "absolute", top: 0, left: 0, right: 0, height: obj2.NITRO_GLOW_HEIGHT }, primaryCardContent: null, primaryCardGraphic: null, primaryCardText: null, primaryCardCloseButton: null };
let obj5 = { gap: nativeDefault.space.PX_16, overflow: "hidden" };
obj4.primaryCardContent = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingEnd: nativeDefault.space.PX_24 };
obj4.primaryCardGraphic = { width: 56, height: 56, alignItems: "center", justifyContent: "center" };
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingEnd: nativeDefault.space.PX_24 };
obj4.primaryCardText = { flex: 1, gap: nativeDefault.space.PX_4 };
const obj7 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj4.primaryCardCloseButton = { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4 };
let closure_15 = createStyles.createStyles(obj4);
let size = { asset: fn(16306), width: 56, height: 37 };
const size1 = { asset: fn(16307), width: 50, height: 37 };
size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletCards.tsx");

export { OrbWalletPrimaryCardType };
export function getWalletPrimaryCardType(isPremiumSubscriber, balance) {
  if (isPremiumSubscriber) {
    let SHOP_ORBS = null;
    if (null != balance) {
      SHOP_ORBS = null;
      if (balance >= 1400) {
        SHOP_ORBS = obj.SHOP_ORBS;
      }
    }
    let NITRO_UPSELL = SHOP_ORBS;
  } else {
    NITRO_UPSELL = obj.NITRO_UPSELL;
  }
  return NITRO_UPSELL;
}
export function useOrbWalletPrimaryCard(balance) {
  let obj = orbWalletAnalyticsPage(16300);
  orbWalletAnalyticsPage = obj.useOrbWalletAnalyticsPage();
  const isPremiumSubscriber = orbWalletAnalyticsPage(14202).useIsPremiumSubscriber(PremiumTypes.TIER_2);
  obj2 = orbWalletAnalyticsPage(14202);
  items = [OrbChallengesStore];
  const stateFromStores = orbWalletAnalyticsPage(504).useStateFromStores(items, () => OrbChallengesStore.nitroGatedOrbMultiplier);
  if (isPremiumSubscriber) {
    let SHOP_ORBS = null;
    if (null != balance) {
      SHOP_ORBS = null;
      if (balance >= 1400) {
        SHOP_ORBS = obj.SHOP_ORBS;
      }
    }
    let NITRO_UPSELL = SHOP_ORBS;
  } else {
    NITRO_UPSELL = obj.NITRO_UPSELL;
  }
  if (NITRO_UPSELL === obj.SHOP_ORBS) {
    let prop = tmp(4746).DismissibleContent.ORB_WALLET_SHOP_CTA_CARD_MOBILE;
  } else {
    prop = null;
    if (NITRO_UPSELL === tmp11.NITRO_UPSELL) {
      prop = null;
      if (null != stateFromStores) {
        prop = tmp(4746).DismissibleContent.ORB_WALLET_NITRO_UPSELL_CTA_CARD_MOBILE;
      }
    }
  }
  let obj3 = orbWalletAnalyticsPage(504);
  if (null != prop) {
    const items1 = [prop];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const tmp14 = analyticsLocations(orbWalletAnalyticsPage(9080).useSelectedDismissibleContent(items2, { groupName: constants2.ORB_WALLET, bypassAutoDismiss: true }), 2);
  dependencyMap = tmp15;
  let tmp16 = null;
  if (null != tmp14[0]) {
    tmp16 = NITRO_UPSELL;
  }
  const obj4 = { groupName: constants2.ORB_WALLET, bypassAutoDismiss: true };
  let tmpResult = orbWalletAnalyticsPage(9080);
  analyticsLocations = NITRO_UPSELL(7520)(NITRO_UPSELL(7539).ORB_WALLET_PRIMARY_CARD).analyticsLocations;
  const tmp18 = NITRO_UPSELL(7520);
  const openNitroCheckoutFromOrbWallet = orbWalletAnalyticsPage(16300).useOpenNitroCheckoutFromOrbWallet(NITRO_UPSELL(7539).ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA);
  if (NITRO_UPSELL === obj.SHOP_ORBS) {
    let ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA = tmp17(7539).ORB_WALLET_SHOP_CTA;
  } else {
    ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA = tmp17(7539).ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA;
  }
  const obj5 = { onCtaPress: null, onClose: null, visibleCardType: tmp16, nitroGatedOrbMultiplier: stateFromStores };
  const items3 = [orbWalletAnalyticsPage, ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA, NITRO_UPSELL, analyticsLocations, openNitroCheckoutFromOrbWallet, tmp14[1]];
  obj5.onCtaPress = openNitroCheckoutFromOrbWallet.useCallback(() => {
    const obj = VirtualCurrencyAnalyticsUtil;
    obj.trackOrbsClick({ pageType: orbWalletAnalyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET_PRIMARY_CARD, ctaObject: ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA });
    if (NITRO_UPSELL === obj.SHOP_ORBS) {
      const obj3 = { analyticsLocations };
      const result = OrbWalletUtils.navigateToShopFromOrbWallet(obj3);
      const tmpResult = OrbWalletUtils;
    } else {
      openNitroCheckoutFromOrbWallet();
    }
    closure_2(constants.TAKE_ACTION);
    obj2 = { pageType: orbWalletAnalyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET_PRIMARY_CARD, ctaObject: ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA };
  }, items3);
  const items4 = [tmp14[1]];
  obj5.onClose = openNitroCheckoutFromOrbWallet.useCallback(() => closure_2(constants.DISMISS), items4);
  return obj5;
}
export function OrbWalletPrimaryCard(arg0) {
  ({ visibleCardType, nitroGatedOrbMultiplier } = arg0);
  const merged = Object.assign(arg0, Object.assign({ visibleCardType: 0, nitroGatedOrbMultiplier: 0 }));
  if (obj.SHOP_ORBS === visibleCardType) {
    obj2 = {};
    const merged1 = Object.assign(merged);
    return closure_1_11(OrbWalletShopPrimaryCard, obj2);
  } else if (tmp2.NITRO_UPSELL === visibleCardType) {
    let tmp3 = null;
    if (null != nitroGatedOrbMultiplier) {
      obj = {};
      const merged2 = Object.assign(merged);
      obj.multiplier = nitroGatedOrbMultiplier;
      tmp3 = closure_1_11(OrbWalletNitroUpsellPrimaryCard, obj);
    }
    return tmp3;
  } else {
    return null;
  }
}