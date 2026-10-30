// === Module 10272: StickersPremiumUpsellAlert ===

// Module 10272 (StickersPremiumUpsellAlert)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import Text_Text from "Text/Text" /* 5619 */;
import Pressables from "Pressables" /* 6974 */;
import openPremiumModalDefault from "openPremiumModal" /* 9884 */;
import _modDef10273 from "module_10273" /* 10273 */;
import _modDef10274 from "module_10274" /* 10274 */;
import _modDef10275 from "module_10275" /* 10275 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7590 */;

require = fn;
function PerkRow(perk) {
  perk = perk.perk;
  const tmp = closure_16();
  items = [tmp.perkRow, ];
  let lastPerkRow;
  if (perk.isLastPerk) {
    lastPerkRow = tmp.lastPerkRow;
  }
  const obj = { style: items, children: null };
  items[1] = lastPerkRow;
  const items1 = [map1(native.Icon, { style: tmp.perkIcon, source: perk.icon, disableColor: null == perk.color, color: perk.color }), map1(Text_Text.Text, { style: tmp.perkText, variant: "text-md/medium", color: "interactive-text-active", children: perk.description() })];
  obj.children = items1;
  return closure_1_14(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1072);
({ AnalyticEvents: closure_7, AnalyticsSections: closure_8, AnalyticsObjects: closure_9 } = Constants);
const PremiumConstants = fn(1386);
({ SubscriptionPlans: c10, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_11, PRICE_PLACEHOLDER: closure_12 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let items = [
  {
    icon: _modDef10273,
    description() {
      const intl = util.intl;
      return intl.string(util.t.uAfKTe);
    },
    color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE
  },
,

];
let obj = {
  icon: _modDef10273,
  description() {
    const intl = util.intl;
    return intl.string(util.t.uAfKTe);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE
};
items[1] = {
  icon: _modDef10274,
  description() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.aVSVBO, { numFreeGuildSubscriptions });
  }
};
let obj2 = {
  icon: _modDef10274,
  description() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.aVSVBO, { numFreeGuildSubscriptions });
  }
};
items[2] = {
  icon: _modDef10275,
  description() {
    const intl = util.intl;
    return intl.string(util.t.pqHIf7);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_GREEN
};
const createStyles = fn(5009);
let obj5 = { alert: { paddingTop: 18 }, shortHeightAlert: { height: 500 }, content: { alignItems: "center" }, closeContainer: { flexDirection: "row-reverse", width: "100%", marginBottom: 16 }, description: { textAlign: "center", lineHeight: 20 }, perks: null, perkRow: null, lastPerkRow: null, perkIcon: null, perkText: null, imageHeader: null };
let obj3 = {
  icon: _modDef10275,
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
let closure_16 = createStyles.createStyles(obj5);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/premium/StickersPremiumUpsellAlert.tsx");

export default function StickersPremiumUpsellAlert(arg0) {
  ({ onClose, analyticsLocation: require } = arg0);
  let analyticsLocations;
  const tmp = closure_16();
  const effect = noop.useEffect(() => {
    if (!ready.isReady()) {
      const products = analyticsLocations(dependencyMap[14]).loadProducts();
      const obj = analyticsLocations(dependencyMap[14]);
    }
  }, []);
  const tmp5 = analyticsLocations(9887)(PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
  let priceString;
  if (tmp5 != null) {
    priceString = tmp5.priceString;
  }
  analyticsLocations = tmp3(7320)().analyticsLocations;
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
    obj3.section = React6.STICKER_PREMIUM_TIER_2_UPSELL_MODAL;
    obj3.object = constants2.BUTTON_CTA;
    obj2.location = obj3;
    AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj2);
    openPremiumModalDefault({ analyticsLocations });
  };
  obj.onClose = onClose;
  obj.onCancel = onClose;
  items = [tmp.alert, ];
  let shortHeightAlert = null;
  if (analyticsLocations(1492)().height <= 580) {
    shortHeightAlert = tmp.shortHeightAlert;
  }
  items[1] = shortHeightAlert;
  obj.style = items;
  let obj2 = { style: tmp.closeContainer, children: null };
  let obj3 = { accessibilityRole: "button", accessibilityLabel: "close", onPress: onClose, children: null };
  const tmp3Result = analyticsLocations(6025);
  obj3.children = closure_13(native.Icon, { source: analyticsLocations(8351) });
  obj2.children = closure_13(Pressables.PressableOpacity, obj3);
  const items1 = [closure_13(closure_4, obj2), ];
  const obj5 = {
    style: tmp.content,
    onStartShouldSetResponder() {
      return true;
    },
    children: null
  };
  const obj6 = { source: null, style: null };
  const obj4 = { source: analyticsLocations(8351) };
  obj6.source = analyticsLocations(10276);
  obj6.style = tmp.imageHeader;
  const items2 = [closure_13(analyticsLocations(5712), obj6), , ];
  const obj7 = { style: tmp.description, variant: "text-md/medium", children: null };
  const intl3 = util.intl;
  if (priceString == null) {
    priceString = closure_12;
  }
  const obj8 = { children: null };
  obj7.children = intl3.format(util.t.TBsJfQ, { monthlyPrice: priceString });
  items2[1] = closure_13(Text_Text.Text, obj7);
  const tmp3Result2 = analyticsLocations(5712);
  items2[2] = closure_13(closure_4, { style: tmp.perks, children: items.map((perk, index) => closure_1_13(PerkRow, { perk, isLastPerk: index === length.length - 1 }, index)) });
  obj5.children = items2;
  obj8.children = closure_14(closure_4, obj5);
  items1[1] = closure_13(closure_5, obj8);
  obj.children = items1;
  return closure_14(tmp3Result, obj);
};