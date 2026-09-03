// discord_app/modules/stickers/native/premium/StickersPremiumUpsellAlert.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../../design/void/Pressables/native/Pressables.tsx";
import registerAssetDefault from "../../../../../_runtime/10427_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/10428_registerAsset.js";
import registerAssetDefault3 from "../../../../../_runtime/10429_registerAsset.js";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../../stores/native/IAPStore.android.tsx";
import ME from "../../../../Constants.tsx";
import GuildFeatures from "../../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function PerkRow(perk) {
  perk = perk.perk;
  const tmp = callback2();
  items = [tmp.perkRow];
  let lastPerkRow;
  if (perk.isLastPerk) {
    lastPerkRow = tmp.lastPerkRow;
  }
  let obj = { style: items, children: null };
  items[1] = lastPerkRow;
  obj = { style: tmp.perkIcon, source: perk.icon, disableColor: null == perk.color, color: perk.color };
  const items1 = [callback(Button.Icon, obj)];
  obj = {
    style: tmp.perkText,
    variant: "text-md/medium",
    color: "interactive-text-active",
    children: perk.description(),
  };
  items1[1] = callback(Text.Text, obj);
  obj[1] = items1;
  return closure_15(closure_4, obj);
}
({ View: c4, Image: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_8, AnalyticsSections: c9, AnalyticsObjects: c10 } = ME);
({
  SubscriptionPlans: unpackModuleId,
  NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_12,
  PRICE_PLACEHOLDER: map1,
} = GuildFeatures);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let obj = {
  icon: registerAssetDefault,
  description() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.uAfKTe);
  },
  color: ThemesDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE,
};
let items = [obj, ,];
obj = {
  icon: registerAssetDefault2,
  description() {
    const intl = getSystemLocale.intl;
    return intl.formatToPlainString(getSystemLocale.t.aVSVBO, { numFreeGuildSubscriptions: closure_12 });
  },
};
items[1] = obj;
obj = {
  icon: registerAssetDefault3,
  description() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.pqHIf7);
  },
  color: ThemesDefault.unsafe_rawColors.PREMIUM_PERK_GREEN,
};
items[2] = obj;
let obj1 = {
  alert: { paddingTop: 18 },
  shortHeightAlert: { height: 500 },
  content: { alignItems: "center" },
  closeContainer: { flexDirection: "row-reverse", width: "100%", marginBottom: 16 },
  description: { textAlign: "center", lineHeight: 20 },
  perks: {
    backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: ThemesDefault.radii.sm,
    marginTop: 16,
    marginBottom: 0,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: "100%",
  },
  perkRow: null,
  lastPerkRow: null,
  perkIcon: null,
  perkText: null,
  imageHeader: null,
};
createCacheKey = {
  paddingVertical: 10,
  borderBottomColor: ThemesDefault.unsafe_rawColors.PRIMARY_560,
  borderBottomWidth: 1,
  flexDirection: "row",
  alignItems: "center",
};
obj1[6] = createCacheKey;
obj1[7] = { borderBottomWidth: 0 };
obj1[8] = { width: 24, marginRight: 20 };
obj1[9] = { lineHeight: 20, flexShrink: 1 };
obj1[10] = { marginBottom: 12 };
let closure_17 = createCacheKey.createStyles(obj1);
let obj2 = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: ThemesDefault.radii.sm,
  marginTop: 16,
  marginBottom: 0,
  paddingHorizontal: 12,
  paddingVertical: 8,
  width: "100%",
};
const result = require("set").fileFinishedImporting("modules/stickers/native/premium/StickersPremiumUpsellAlert.tsx");

export default function StickersPremiumUpsellAlert(arg0) {
  ({ onClose, analyticsLocation: require } = arg0);
  let analyticsLocations;
  const tmp = callback2();
  const effect = React.useEffect(() => {
    if (!ready.isReady()) {
      analyticsLocations(table[14]).wait(() => callback(table[15]).loadProducts());
      const obj = analyticsLocations(table[14]);
    }
  }, []);
  const tmp5 = analyticsLocations(8232)(PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
  let priceString;
  if (tmp5 != null) {
    priceString = tmp5.priceString;
  }
  analyticsLocations = tmp3(5962)().analyticsLocations;
  let obj = {
    cancelText: null,
    confirmColor: null,
    confirmText: null,
    onConfirm: null,
    onClose: null,
    onCancel: null,
    style: null,
    children: null,
  };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.f3Pet9);
  obj[1] = Button.ButtonColors.GREEN;
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.o3Tnif);
  obj[3] = function onConfirm() {
    let obj = analyticsLocations(closure_1_2[20]);
    obj = { location: null };
    obj = {};
    const merged = Object.assign(closure_0);
    obj.section = closure_1_9.STICKER_PREMIUM_TIER_2_UPSELL_MODAL;
    obj.object = closure_1_10.BUTTON_CTA;
    obj[0] = obj;
    obj.track(closure_1_8.PREMIUM_PROMOTION_OPENED, obj);
    analyticsLocations(closure_1_2[21])({ analyticsLocations });
  };
  obj[4] = onClose;
  obj[5] = onClose;
  items = [tmp.alert];
  let shortHeightAlert = null;
  if (analyticsLocations(1492)().height <= 580) {
    shortHeightAlert = tmp.shortHeightAlert;
  }
  items[1] = shortHeightAlert;
  obj[6] = items;
  obj = { style: tmp.closeContainer, children: null };
  obj = { accessibilityRole: "button", accessibilityLabel: "close", onPress: onClose, children: null };
  const tmp3Result = analyticsLocations(4948);
  obj[3] = callback(Button.Icon, { source: analyticsLocations(7776) });
  obj[1] = callback(PressableBase.PressableOpacity, obj);
  const items1 = [callback(closure_4, obj)];
  const obj2 = {
    style: tmp.content,
    onStartShouldSetResponder() {
      return true;
    },
    children: null,
  };
  obj1 = { source: analyticsLocations(7776) };
  const items2 = [callback(closure_5, { source: analyticsLocations(10430), style: tmp.imageHeader }), ,];
  const obj4 = { style: tmp.description, variant: "text-md/medium", children: null };
  const intl3 = tmp9(1233).intl;
  if (priceString == null) {
    priceString = closure_13;
  }
  const obj5 = { children: null };
  obj4[2] = intl3.format(getSystemLocale.t.TBsJfQ, { monthlyPrice: priceString });
  items2[1] = callback(Text.Text, obj4);
  const obj3 = { source: analyticsLocations(10430), style: tmp.imageHeader };
  const tmp13 = closure_6;
  items2[2] = callback(closure_4, {
    style: tmp.perks,
    children: items.map((perk) => callback(closure_18, { perk, isLastPerk: arg1 === length.length - 1 }, arg1)),
  });
  obj2[2] = items2;
  obj5[0] = closure_15(closure_4, obj2);
  items1[1] = callback(tmp13, obj5);
  obj[7] = items1;
  return closure_15(tmp3Result, obj);
}
