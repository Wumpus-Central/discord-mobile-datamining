// === Module 16901: OrbWalletCards ===

// Module 16901 (OrbWalletCards)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2172 from "module_2172" /* 2172 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import useToken from "useToken" /* 5596 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import Card from "Card" /* 6977 */;
import _modDef7038 from "module_7038" /* 7038 */;
import XSmallIcon from "XSmallIcon" /* 7054 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7326 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import IconButton from "IconButton" /* 8028 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 11416 */;
import _modDef12329 from "module_12329" /* 12329 */;
import SvgCss from "SvgCss" /* 12821 */;
import OrbWalletUtils from "OrbWalletUtils" /* 16890 */;
import VirtualCurrencyAnalyticsUtil from "VirtualCurrencyAnalyticsUtil" /* 16892 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import OrbChallengesStore from "OrbChallengesStore" /* 15625 */;

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
  const items = [backdrop, , , ];
  obj2 = { style: tmp.primaryCardContent, children: null };
  const obj3 = { style: tmp.primaryCardGraphic, accessible: true, accessibilityRole: "image", accessibilityLabel: graphicAccessibilityLabel, children: null };
  size = { asset: graphic.asset, width: graphic.width, height: graphic.height };
  obj3.children = closure_1_11(SvgCss.LocalSvg, size);
  const items1 = [closure_1_11(timestampProducer, obj3), ];
  const obj4 = { style: tmp.primaryCardText, children: null };
  const items2 = [closure_1_11(Text_Text.Text, { variant: "text-md/semibold", color: "text-strong", accessibilityRole: "header", children: title }), closure_1_11(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: subTextDescription })];
  obj4.children = items2;
  items1[1] = closure_1_12(timestampProducer, obj4);
  obj2.children = items1;
  items[1] = closure_1_12(timestampProducer, obj2);
  items[2] = closure_1_11(components_Button_Button.Button, { text: buttonText, size: str, icon: buttonIcon, variant: buttonVariant, loading: flag, onPress: onCtaPress });
  const obj5 = { style: tmp.primaryCardCloseButton, children: null };
  const obj6 = { variant: "icon-only", size: "sm", icon: closure_1_11(XSmallIcon.XSmallIcon, { size: "xxs", color: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT }), accessibilityLabel: null, onPress: null };
  const intl = util.intl;
  obj6.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj6.onPress = onClose;
  obj5.children = closure_1_11(IconButton.IconButton, obj6);
  items[3] = closure_1_11(timestampProducer, obj5);
  obj.children = items;
  return closure_1_12(Card.Card, obj);
}
function OrbWalletNitroGlow() {
  const tmp = closure_15();
  const token = useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  let items = [token, token1];
  const memo = noop.useMemo(() => {
    const items = [token, token1];
    return items;
  }, items);
  const obj3 = { style: tmp.nitroGlow, pointerEvents: "none", maskElement: null, children: null };
  obj3.maskElement = closure_1_11(LinearGradientDefault, { style: hasOwnProperty.absoluteFill, colors: ["black", "transparent"], start: obj2.VERTICAL_START, end: obj2.VERTICAL_END });
  obj3.children = closure_1_11(LinearGradientDefault, { style: hasOwnProperty.absoluteFill, colors: memo, start: obj2.HORIZONTAL_START, end: obj2.HORIZONTAL_END });
  return closure_1_11(_modDef7038, obj3);
}
function OrbWalletShopPrimaryCard() {
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.ORB_WALLET_PRIMARY_CARD).analyticsLocations;
  const items = [analyticsLocations];
  const callback = noop.useCallback(() => OrbWalletUtils.navigateToShopFromOrbWallet({ analyticsLocations }), items);
  const ORB_WALLET_SHOP_CTA = AnalyticsLocationDefault.ORB_WALLET_SHOP_CTA;
  closure_129_0 = ORB_WALLET_SHOP_CTA;
  closure_129_1 = callback;
  const orbWalletAnalyticsPage = analyticsLocations(16890).useOrbWalletAnalyticsPage();
  closure_129_2 = orbWalletAnalyticsPage;
  const obj = analyticsLocations(16890);
  const items1 = [analyticsLocations(4847).DismissibleContent.ORB_WALLET_SHOP_CTA_CARD];
  const tmp7 = _slicedToArray(analyticsLocations(7569).useSelectedDismissibleContent(items1, { groupName: constants2.ORB_WALLET, bypassAutoDismiss: true }), 2);
  closure_129_3 = tmp8;
  const items2 = [orbWalletAnalyticsPage, ORB_WALLET_SHOP_CTA, callback, tmp7[1]];
  [][0] = tmp7[1];
  const callback1 = noop.useCallback(() => {
    const obj = VirtualCurrencyAnalyticsUtil;
    obj.trackOrbsClick({ pageType: orbWalletAnalyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET_PRIMARY_CARD, ctaObject: ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA });
    openNitroCheckoutFromOrbWallet();
    closure_3(constants.TAKE_ACTION);
  }, items2);
  let tmp11 = null;
  if (null != tmp7[0]) {
    const obj4 = { title: null, graphic: null, graphicAccessibilityLabel: null, subTextDescription: null, buttonText: null, buttonIcon: null, buttonVariant: "primary", buttonSize: "sm", onCtaPress: null, onClose: null };
    const intl = tmp5(1113).intl;
    obj4.title = intl.string(_modDef2172.v8QrJf);
    obj4.graphic = size1;
    const intl2 = tmp5(1113).intl;
    obj4.graphicAccessibilityLabel = intl2.string(_modDef2172.qa1xyr);
    const intl3 = tmp5(1113).intl;
    obj4.subTextDescription = intl3.string(_modDef2172.HACucK);
    const intl4 = tmp5(1113).intl;
    obj4.buttonText = intl4.string(_modDef2172["7raRgL"]);
    obj4.buttonIcon = _modDef12329;
    obj4.onCtaPress = callback1;
    obj4.onClose = tmp10;
    tmp11 = closure_11(BaseOrbWalletPrimaryCard, obj4);
  }
  return tmp11;
}
function OrbWalletNitroUpsellPrimaryCard() {
  const items = [OrbChallengesStore];
  const stateFromStores = ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA(orbWalletAnalyticsPage[29]).useStateFromStores(items, () => OrbChallengesStore.nitroGatedOrbMultiplier);
  let obj = ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA(orbWalletAnalyticsPage[29]);
  openNitroCheckoutFromOrbWallet = ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA(orbWalletAnalyticsPage[21]).useOpenNitroCheckoutFromOrbWallet(openNitroCheckoutFromOrbWallet(orbWalletAnalyticsPage[24]).ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA);
  ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA = openNitroCheckoutFromOrbWallet(orbWalletAnalyticsPage[24]).ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA;
  orbWalletAnalyticsPage = undefined;
  _slicedToArray = undefined;
  obj2 = ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA(orbWalletAnalyticsPage[21]);
  orbWalletAnalyticsPage = ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA(orbWalletAnalyticsPage[21]).useOrbWalletAnalyticsPage();
  const obj3 = ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA(orbWalletAnalyticsPage[21]);
  const items1 = [ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA(orbWalletAnalyticsPage[26]).DismissibleContent.ORB_WALLET_NITRO_UPSELL_CTA_CARD];
  const tmp7 = _slicedToArray(ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA(orbWalletAnalyticsPage[22]).useSelectedDismissibleContent(items1, { groupName: constants2.ORB_WALLET, bypassAutoDismiss: true }), 2);
  _slicedToArray = tmp8;
  const items2 = [orbWalletAnalyticsPage, ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA, openNitroCheckoutFromOrbWallet, tmp7[1]];
  [][0] = tmp7[1];
  const callback = noop.useCallback(() => {
    const obj = VirtualCurrencyAnalyticsUtil;
    obj.trackOrbsClick({ pageType: orbWalletAnalyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET_PRIMARY_CARD, ctaObject: ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA });
    openNitroCheckoutFromOrbWallet();
    closure_3(constants.TAKE_ACTION);
  }, items2);
  let tmp11 = null;
  if (null != tmp7[0]) {
    tmp11 = null;
    if (null != stateFromStores) {
      const obj6 = { title: null, graphic: null, backdrop: null, graphicAccessibilityLabel: null, subTextDescription: null, buttonText: null, buttonIcon: null, buttonVariant: "expressive", onCtaPress: null, onClose: null };
      const intl = tmp(tmp2[17]).intl;
      obj6.title = intl.string(tmp4(tmp2[27]).ZqCAos);
      obj6.graphic = size;
      obj6.backdrop = closure_11(OrbWalletNitroGlow, {});
      const intl2 = tmp(tmp2[17]).intl;
      obj6.graphicAccessibilityLabel = intl2.string(tmp4(tmp2[27]).FkfrRH);
      const intl3 = tmp(tmp2[17]).intl;
      const obj7 = { multiplier: stateFromStores };
      obj6.subTextDescription = intl3.format(tmp4(tmp2[27])["Ba/7wO"], obj7);
      const intl4 = tmp(tmp2[17]).intl;
      obj6.buttonText = intl4.string(tmp4(tmp2[27]).U9UQJE);
      obj6.buttonIcon = tmp4(tmp2[30]);
      obj6.onCtaPress = callback;
      obj6.onClose = tmp10;
      tmp11 = closure_11(BaseOrbWalletPrimaryCard, obj6);
    }
  }
  return tmp11;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const DismissibleContentConstants = fn(4860);
({ ContentDismissActionType: closure_8, DismissibleContentGroupName: closure_9 } = DismissibleContentConstants);
const PremiumTypes = fn(1385).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const OrbWalletPrimaryCardType = { NITRO_UPSELL: "nitro_upsell", SHOP_ORBS: "shop_orbs" };
let obj2 = { NITRO_GLOW_HEIGHT: 72, HORIZONTAL_START: { x: 0, y: 0.5 }, HORIZONTAL_END: { x: 1, y: 0.5 }, VERTICAL_START: { x: 0.5, y: 0 }, VERTICAL_END: { x: 0.5, y: 1 } };
const createStyles = fn(5014);
let obj4 = { primaryCard: { gap: nativeDefault.space.PX_16, overflow: "hidden" }, nitroGlow: { position: "absolute", top: 0, left: 0, right: 0, height: obj2.NITRO_GLOW_HEIGHT }, primaryCardContent: null, primaryCardGraphic: null, primaryCardText: null, primaryCardCloseButton: null };
let obj5 = { gap: nativeDefault.space.PX_16, overflow: "hidden" };
obj4.primaryCardContent = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingEnd: nativeDefault.space.PX_24 };
obj4.primaryCardGraphic = { width: 56, height: 56, alignItems: "center", justifyContent: "center" };
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingEnd: nativeDefault.space.PX_24 };
obj4.primaryCardText = { flex: 1, gap: nativeDefault.space.PX_4 };
let obj7 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj4.primaryCardCloseButton = { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4 };
let closure_15 = createStyles.createStyles(obj4);
let size = { asset: fn(16902), width: 56, height: 37 };
const size1 = { asset: fn(16903), width: 50, height: 37 };
size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletCards.tsx");

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
export function OrbWalletPrimaryCard(orbBalance) {
  orbBalance = orbBalance.orbBalance;
  const obj = useIsPremiumSubscriber;
  if (obj.useIsPremiumSubscriber(PremiumTypes.TIER_2)) {
    let SHOP_ORBS = null;
    if (null != orbBalance) {
      SHOP_ORBS = null;
      if (orbBalance >= 1400) {
        SHOP_ORBS = obj.SHOP_ORBS;
      }
    }
    let NITRO_UPSELL = SHOP_ORBS;
  } else {
    NITRO_UPSELL = obj.NITRO_UPSELL;
  }
  if (obj.SHOP_ORBS === NITRO_UPSELL) {
    return closure_1_11(OrbWalletShopPrimaryCard, {});
  } else if (tmp5.NITRO_UPSELL === NITRO_UPSELL) {
    return closure_1_11(OrbWalletNitroUpsellPrimaryCard, {});
  } else {
    return null;
  }
}