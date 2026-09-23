// === Module 10749: StickersPremiumUpsellAlert ===

// Module 10749 (StickersPremiumUpsellAlert)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Text_Text from "Text/Text" /* 4823 */;
import Pressables from "Pressables" /* 5425 */;
import openPremiumModalDefault from "openPremiumModal" /* 9585 */;
import _modDef10750 from "module_10750" /* 10750 */;
import _modDef10751 from "module_10751" /* 10751 */;
import _modDef10752 from "module_10752" /* 10752 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7568 */;

require = fn;
function PerkRow(perk) {
  perk = perk.perk;
  const tmp = closure_17();
  items = [tmp.perkRow, ];
  let lastPerkRow;
  if (perk.isLastPerk) {
    lastPerkRow = tmp.lastPerkRow;
  }
  const obj = { style: items, children: null };
  items[1] = lastPerkRow;
  const items1 = [closure_1_14(native.Icon, { style: tmp.perkIcon, source: perk.icon, disableColor: null == perk.color, color: perk.color }), closure_1_14(Text_Text.Text, { style: tmp.perkText, variant: "text-md/medium", color: "interactive-text-active", children: perk.description() })];
  obj.children = items1;
  return __initData(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9, AnalyticsObjects: c10 } = Constants);
const PremiumConstants = fn(1374);
({ SubscriptionPlans: closure_11, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_12, PRICE_PLACEHOLDER: map1 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let items = [
  {
    icon: _modDef10750,
    description() {
      const intl = util.intl;
      return intl.string(util.t.uAfKTe);
    },
    color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE
  },
,

];
let obj = {
  icon: _modDef10750,
  description() {
    const intl = util.intl;
    return intl.string(util.t.uAfKTe);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE
};
items[1] = {
  icon: _modDef10751,
  description() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.aVSVBO, { numFreeGuildSubscriptions });
  }
};
let obj2 = {
  icon: _modDef10751,
  description() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.aVSVBO, { numFreeGuildSubscriptions });
  }
};
items[2] = {
  icon: _modDef10752,
  description() {
    const intl = util.intl;
    return intl.string(util.t.pqHIf7);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_GREEN
};
const createStyles = fn(4827);
let obj5 = { alert: { paddingTop: 18 }, shortHeightAlert: { height: 500 }, content: { alignItems: "center" }, closeContainer: { flexDirection: "row-reverse", width: "100%", marginBottom: 16 }, description: { textAlign: "center", lineHeight: 20 }, perks: null, perkRow: null, lastPerkRow: null, perkIcon: null, perkText: null, imageHeader: null };
let obj3 = {
  icon: _modDef10752,
  description() {
    const intl = util.intl;
    return intl.string(util.t.pqHIf7);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_GREEN
};
obj5.perks = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 16, marginBottom: 0, paddingHorizontal: 12, paddingVertical: 8, width: "100%" };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 16, marginBottom: 0, paddingHorizontal: 12, paddingVertical: 8, width: "100%" };
obj5.perkRow = { paddingVertical: 10, borderBottomColor: nativeDefault.unsafe_rawColors.PRIMARY_560, borderBottomWidth: 1, flexDirection: "row", alignItems: "center" };
obj5.lastPerkRow = { borderBottomWidth: 0 };
obj5.perkIcon = { width: 24, marginRight: 20 };
obj5.perkText = { lineHeight: 20, flexShrink: 1 };
obj5.imageHeader = { marginBottom: 12 };
let closure_17 = createStyles.createStyles(obj5);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/premium/StickersPremiumUpsellAlert.tsx");

export default function StickersPremiumUpsellAlert(arg0) {
  ({ onClose, analyticsLocation: require } = arg0);
  let analyticsLocations;
  const tmp = closure_17();
  const effect = noop.useEffect(() => {
    if (!ready.isReady()) {
      analyticsLocations(dependencyMap[14]).wait(() => analyticsLocations(closure_1_2[15]).loadProducts());
      const obj = analyticsLocations(dependencyMap[14]);
    }
  }, []);
  const tmp5 = analyticsLocations(9555)(PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
  let priceString;
  if (tmp5 != null) {
    priceString = tmp5.priceString;
  }
  analyticsLocations = tmp3(7493)().analyticsLocations;
  let obj = { cancelText: null, confirmColor: null, confirmText: null, onConfirm: null, onClose: null, onCancel: null, style: null, children: null };
  const intl = util.intl;
  obj.cancelText = intl.string(util.t.f3Pet9);
  obj.confirmColor = native.ButtonColors.GREEN;
  const intl2 = util.intl;
  obj.confirmText = intl2.string(util.t.o3Tnif);
  obj.onConfirm = function onConfirm() {
    const obj2 = { location: null };
    const obj3 = {};
    const merged = Object.assign(require);
    obj3.section = React7.STICKER_PREMIUM_TIER_2_UPSELL_MODAL;
    obj3.object = constants2.BUTTON_CTA;
    obj2.location = obj3;
    AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj2);
    openPremiumModalDefault({ analyticsLocations });
  };
  obj.onClose = onClose;
  obj.onCancel = onClose;
  items = [tmp.alert, ];
  let shortHeightAlert = null;
  if (analyticsLocations(1478)().height <= 580) {
    shortHeightAlert = tmp.shortHeightAlert;
  }
  items[1] = shortHeightAlert;
  obj.style = items;
  let obj2 = { style: tmp.closeContainer, children: null };
  let obj3 = { accessibilityRole: "button", accessibilityLabel: "close", onPress: onClose, children: null };
  const tmp3Result = analyticsLocations(5290);
  obj3.children = closure_14(native.Icon, { source: analyticsLocations(7323) });
  obj2.children = closure_14(Pressables.PressableOpacity, obj3);
  const items1 = [closure_14(closure_4, obj2), ];
  const obj5 = {
    style: tmp.content,
    onStartShouldSetResponder() {
      return true;
    },
    children: null
  };
  const obj4 = { source: analyticsLocations(7323) };
  const items2 = [closure_14(closure_5, { source: analyticsLocations(10753), style: tmp.imageHeader }), , ];
  const obj7 = { style: tmp.description, variant: "text-md/medium", children: null };
  const intl3 = util.intl;
  if (priceString == null) {
    priceString = closure_13;
  }
  const obj8 = { children: null };
  obj7.children = intl3.format(util.t.TBsJfQ, { monthlyPrice: priceString });
  items2[1] = closure_14(Text_Text.Text, obj7);
  const obj6 = { source: analyticsLocations(10753), style: tmp.imageHeader };
  items2[2] = closure_14(closure_4, { style: tmp.perks, children: items.map((perk, index) => closure_1_14(PerkRow, { perk, isLastPerk: index === length.length - 1 }, index)) });
  obj5.children = items2;
  obj8.children = closure_15(closure_4, obj5);
  items1[1] = closure_14(closure_6, obj8);
  obj.children = items1;
  return closure_15(tmp3Result, obj);
};