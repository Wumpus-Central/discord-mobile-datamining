// === Module 10408: StickersPremiumUpsellAlert ===

// Module 10408 (StickersPremiumUpsellAlert)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import openPremiumModalDefault from "openPremiumModal" /* 9392 */;
import _modDef10409 from "module_10409" /* 10409 */;
import _modDef10410 from "module_10410" /* 10410 */;
import _modDef10411 from "module_10411" /* 10411 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7237 */;

require = fn;
function PerkRow(perk) {
  perk = perk.perk;
  const tmp = closure_17();
  items = [tmp.perkRow, ];
  let lastPerkRow;
  if (perk.isLastPerk) {
    lastPerkRow = tmp.lastPerkRow;
  }
  let obj = { style: items, children: null };
  items[1] = lastPerkRow;
  obj = { style: tmp.perkIcon, source: perk.icon, disableColor: null == perk.color, color: perk.color };
  const items1 = [closure_1_14(native.Icon, obj), ];
  obj = { style: tmp.perkText, variant: "text-md/medium", color: "interactive-text-active", children: perk.description() };
  items1[1] = closure_1_14(Text_Text.Text, obj);
  obj.children = items1;
  return __initData(React4, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9, AnalyticsObjects: c10 } = Constants);
const PremiumConstants = fn(1373);
({ SubscriptionPlans: closure_11, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_12, PRICE_PLACEHOLDER: map1 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let obj = {
  icon: _modDef10409,
  description() {
    const intl = util.intl;
    return intl.string(util.t.uAfKTe);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE
};
let items = [obj, , ];
obj = {
  icon: _modDef10410,
  description() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.aVSVBO, { numFreeGuildSubscriptions });
  }
};
items[1] = obj;
obj = {
  icon: _modDef10411,
  description() {
    const intl = util.intl;
    return intl.string(util.t.pqHIf7);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_GREEN
};
items[2] = obj;
fn(4560);
let obj1 = { alert: { paddingTop: 18 }, shortHeightAlert: { height: 500 }, content: { alignItems: "center" }, closeContainer: { flexDirection: "row-reverse", width: "100%", marginBottom: 16 }, description: { textAlign: "center", lineHeight: 20 }, perks: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 16, marginBottom: 0, paddingHorizontal: 12, paddingVertical: 8, width: "100%" }, perkRow: null, lastPerkRow: null, perkIcon: null, perkText: null, imageHeader: null };
const createStyles = { paddingVertical: 10, borderBottomColor: nativeDefault.unsafe_rawColors.PRIMARY_560, borderBottomWidth: 1, flexDirection: "row", alignItems: "center" };
obj1.perkRow = createStyles;
obj1.lastPerkRow = { borderBottomWidth: 0 };
obj1.perkIcon = { width: 24, marginRight: 20 };
obj1.perkText = { lineHeight: 20, flexShrink: 1 };
obj1.imageHeader = { marginBottom: 12 };
let closure_17 = createStyles.createStyles(obj1);
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
  const tmp5 = analyticsLocations(9364)(PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
  let priceString;
  if (tmp5 != null) {
    priceString = tmp5.priceString;
  }
  analyticsLocations = tmp3(7162)().analyticsLocations;
  let obj = { cancelText: null, confirmColor: null, confirmText: null, onConfirm: null, onClose: null, onCancel: null, style: null, children: null };
  const intl = util.intl;
  obj.cancelText = intl.string(util.t.f3Pet9);
  obj.confirmColor = native.ButtonColors.GREEN;
  const intl2 = util.intl;
  obj.confirmText = intl2.string(util.t.o3Tnif);
  obj.onConfirm = function onConfirm() {
    let obj = { location: null };
    obj = {};
    const merged = Object.assign(require);
    obj.section = React7.STICKER_PREMIUM_TIER_2_UPSELL_MODAL;
    obj.object = constants2.BUTTON_CTA;
    obj.location = obj;
    obj.track(constants.PREMIUM_PROMOTION_OPENED, obj);
    openPremiumModalDefault({ analyticsLocations });
  };
  obj.onClose = onClose;
  obj.onCancel = onClose;
  items = [tmp.alert, ];
  let shortHeightAlert = null;
  if (analyticsLocations(1477)().height <= 580) {
    shortHeightAlert = tmp.shortHeightAlert;
  }
  items[1] = shortHeightAlert;
  obj.style = items;
  obj = { style: tmp.closeContainer, children: null };
  obj = { accessibilityRole: "button", accessibilityLabel: "close", onPress: onClose, children: null };
  const tmp3Result = analyticsLocations(4994);
  obj.children = closure_14(native.Icon, { source: analyticsLocations(6992) });
  obj.children = closure_14(Pressables.PressableOpacity, obj);
  const items1 = [closure_14(closure_4, obj), ];
  const obj2 = {
    style: tmp.content,
    onStartShouldSetResponder() {
      return true;
    },
    children: null
  };
  const obj1 = { source: analyticsLocations(6992) };
  const items2 = [closure_14(closure_5, { source: analyticsLocations(10412), style: tmp.imageHeader }), , ];
  const obj4 = { style: tmp.description, variant: "text-md/medium", children: null };
  const intl3 = util.intl;
  if (priceString == null) {
    priceString = closure_13;
  }
  const obj5 = { children: null };
  obj4.children = intl3.format(util.t.TBsJfQ, { monthlyPrice: priceString });
  items2[1] = closure_14(Text_Text.Text, obj4);
  const obj3 = { source: analyticsLocations(10412), style: tmp.imageHeader };
  items2[2] = closure_14(closure_4, { style: tmp.perks, children: items.map((perk, index) => closure_1_14(PerkRow, { perk, isLastPerk: index === length.length - 1 }, index)) });
  obj2.children = items2;
  obj5.children = closure_15(closure_4, obj2);
  items1[1] = closure_14(closure_6, obj5);
  obj.children = items1;
  return closure_15(tmp3Result, obj);
};