// discord_app/modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx
import _slicedToArray from "_slicedToArray";
import getGiftingBadgeProgressPercent from "getGiftingBadgeProgressPercent";
import get_ActivityIndicator from "GiftIcon";
import map from "map";
import { getSingleRequirementThreshold as closure_8 } from "map";
import jsxProd from "ChevronSmallDownIcon";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { QUICK_SWITCHER } from "../../../app_analytics/AnalyticsLocation.tsx";
import { context } from "../../../app_analytics/useAnalyticsLocations.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";

let c10;
let c5;
let c9;
let closure_6;
let unpackModuleId;
const require = arg1;
function GiftingBadgeIntro(analyticsLocation) {
  analyticsLocation = analyticsLocation.analyticsLocation;
  let importDefault;
  let analyticsLocations;
  const tmp3 = callback4(importDefault(analyticsLocations[7])("UserSettingsGiftingBadgeProgress"));
  importDefault = tmp3;
  analyticsLocations = importDefault(analyticsLocations[8])(importDefault(analyticsLocations[9]).USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  let obj = analyticsLocation(analyticsLocations[10]);
  let items = [map];
  const stateFromStores = obj.useStateFromStores(items, () => {
    badgeById = badgeById.getBadgeById(analyticsLocation(analyticsLocations[11]).BadgeId.GIFTING);
    let tiers;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    return tiers;
  });
  let tmp6 = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp3.wrapper;
    obj = { style: null, children: null };
    obj[0] = tmp3.introContent;
    let obj1 = { variant: "text-xs/normal", color: "text-muted", children: null };
    let intl = tmp5(tmp2[13]).intl;
    obj1[2] = intl.string(tmp(tmp2[14])["4Yp0mI"]);
    obj[1] = callback2(tmp5(tmp2[12]).Text, obj1);
    let items1 = [callback2(closure_6, obj), , ];
    let obj2 = { style: null, children: null };
    obj2[0] = tmp3.introGrid;
    obj2[1] = stateFromStores.map((simple_icon_url) => {
      let obj = { style: _undefined.introGridItem, children: null };
      let tmp4 = null != simple_icon_url.simple_icon_url;
      if (tmp4) {
        obj = { icon: null, size: 44 };
        obj[0] = simple_icon_url.simple_icon_url;
        tmp4 = outer1_9(_undefined(analyticsLocations[15]), obj);
      }
      const items = [tmp4, ];
      obj = { style: _undefined.badgeCopy, children: null };
      let str = simple_icon_url.name;
      if (str == null) {
        str = "";
      }
      const items1 = [outer1_9(analyticsLocation(analyticsLocations[12]).Text, { variant: "text-sm/semibold", color: "text-subtle", children: str }), ];
      const obj1 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = tmp9(tmp10[13]).intl;
      const obj2 = { count: null };
      obj2[0] = outer1_8(simple_icon_url);
      obj1[2] = intl.format(_undefined(analyticsLocations[14]).qvx9E4, obj2);
      items1[1] = outer1_9(analyticsLocation(analyticsLocations[12]).Text, obj1);
      obj[1] = items1;
      items[1] = outer1_10(outer1_6, obj);
      obj[1] = items;
      return outer1_10(outer1_6, obj, simple_icon_url.key);
    });
    items1[1] = callback2(closure_6, obj2);
    const obj3 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj4 = { size: "sm", color: null };
    obj4[1] = tmp(tmp2[6]).unsafe_rawColors.WHITE;
    obj3[1] = callback2(tmp5(tmp2[17]).GiftIcon, obj4);
    const intl2 = tmp5(tmp2[13]).intl;
    obj3[2] = intl2.string(tmp(tmp2[14]).DZnomS);
    obj3[3] = function onPress() {
      let obj = analyticsLocation(analyticsLocations[18]);
      obj = { analyticsLocation, analyticsLocations };
      obj.openGiftModal(obj);
    };
    items1[2] = callback2(tmp5(tmp2[16]).Button, obj3);
    obj[1] = items1;
    tmp6 = callback3(closure_6, obj);
  }
  return tmp6;
}
({ Pressable: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles((arg0) => {
  let obj = { backgroundColor: Themes.colors.BACKGROUND_MOD_MUTED, borderRadius: null, padding: null, gap: null };
  let num = 0;
  if (arg0) {
    num = tmp(712).radii.md;
  }
  obj = { wrapper: null, progressContainer: null, progressRow: null, progressTitleText: null, progressBarContainer: null, progressBarTrack: null, progressBarFill: null, progressLabels: null, divider: null, dropdownRow: null, badgesRow: null, badgeItem: null, badgeItemActive: null, badgeCopy: null, footerText: null, introContent: null, introGrid: null, introGridItem: null };
  obj[1] = num;
  obj[2] = Themes.space.PX_16;
  obj[3] = Themes.space.PX_16;
  obj[0] = obj;
  obj = { gap: tmp(712).space.PX_8 };
  obj[1] = obj;
  obj[2] = { flexDirection: "row", alignItems: "center", gap: Themes.space.PX_4 };
  obj[3] = { flex: 1 };
  const obj1 = { flexDirection: "row", alignItems: "center", gap: Themes.space.PX_4 };
  obj[4] = { paddingHorizontal: Themes.space.PX_8 };
  const obj2 = { paddingHorizontal: Themes.space.PX_8 };
  obj[5] = { height: 6, borderRadius: Themes.radii.round, backgroundColor: Themes.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
  const obj3 = { height: 6, borderRadius: Themes.radii.round, backgroundColor: Themes.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
  obj[6] = { height: 6, borderRadius: Themes.radii.round, backgroundColor: Themes.unsafe_rawColors.BRAND_500 };
  const obj4 = { height: 6, borderRadius: Themes.radii.round, backgroundColor: Themes.unsafe_rawColors.BRAND_500 };
  obj[7] = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: Themes.space.PX_16, marginTop: Themes.space.PX_4 };
  const obj5 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: Themes.space.PX_16, marginTop: Themes.space.PX_4 };
  obj[8] = { height: 1, backgroundColor: Themes.colors.BACKGROUND_MOD_NORMAL };
  obj[9] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  const obj6 = { height: 1, backgroundColor: Themes.colors.BACKGROUND_MOD_NORMAL };
  obj[10] = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: Themes.space.PX_4 };
  const obj7 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: Themes.space.PX_4 };
  obj[11] = { width: "33.33%", alignItems: "center", justifyContent: "center", padding: Themes.space.PX_8, gap: Themes.space.PX_8 };
  const obj8 = { width: "33.33%", alignItems: "center", justifyContent: "center", padding: Themes.space.PX_8, gap: Themes.space.PX_8 };
  obj[12] = { backgroundColor: Themes.colors.BACKGROUND_MOD_MUTED, borderRadius: Themes.radii.md, borderWidth: 1, borderColor: Themes.colors.BORDER_MUTED };
  obj[13] = { alignItems: "center", gap: 2 };
  const obj9 = { backgroundColor: Themes.colors.BACKGROUND_MOD_MUTED, borderRadius: Themes.radii.md, borderWidth: 1, borderColor: Themes.colors.BORDER_MUTED };
  obj[14] = { textAlign: "center", marginBottom: Themes.space.PX_16 };
  const obj10 = { textAlign: "center", marginBottom: Themes.space.PX_16 };
  obj[15] = { paddingHorizontal: Themes.space.PX_8, gap: Themes.space.PX_4 };
  const obj11 = { paddingHorizontal: Themes.space.PX_8, gap: Themes.space.PX_4 };
  obj[16] = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: Themes.space.PX_4, paddingHorizontal: Themes.space.PX_16 };
  const obj12 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: Themes.space.PX_4, paddingHorizontal: Themes.space.PX_16 };
  obj[17] = { width: "33.33%", alignItems: "center", justifyContent: "center", padding: Themes.space.PX_8, gap: Themes.space.PX_8 };
  return obj;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx");

export default function UserSettingsGiftingBadgeProgress(analyticsLocation) {
  let badgeProgress;
  let c2;
  let currentTier;
  let nextTier;
  let tiers;
  let tmp5;
  analyticsLocation = analyticsLocation.analyticsLocation;
  let importDefault;
  let dependencyMap;
  let analyticsLocations;
  currentTier = undefined;
  const tmp3 = callback4(useIsMobileVisualRefreshExperimentEnabled("UserSettingsGiftingBadgeProgress"));
  importDefault = tmp3;
  [tmp5, c2] = analyticsLocations(currentTier.useState(false), 2);
  const tmp4 = analyticsLocations(currentTier.useState(false), 2);
  analyticsLocations = context(QUICK_SWITCHER.USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  let obj = analyticsLocation(589);
  let items = [map];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let getBadgeById;
    let getCurrentTier;
    let getNextTier;
    let getRemainingToNextTier;
    singleRequirementProgress = singleRequirementProgress.getSingleRequirementProgress(analyticsLocation(_undefined2[11]).BadgeId.GIFTING);
    let num;
    if (singleRequirementProgress != null) {
      num = singleRequirementProgress.current;
    }
    if (num == null) {
      num = 0;
    }
    const obj = { badgeProgress: num, currentTier: getCurrentTier(analyticsLocation(_undefined2[11]).BadgeId.GIFTING), nextTier: getNextTier(analyticsLocation(_undefined2[11]).BadgeId.GIFTING), giftsRemaining: getRemainingToNextTier(analyticsLocation(_undefined2[11]).BadgeId.GIFTING), tiers: null };
    ({ getCurrentTier, getNextTier, getRemainingToNextTier, getBadgeById } = singleRequirementProgress);
    const badgeById = getBadgeById(tmp2(tmp3[11]).BadgeId.GIFTING);
    let tiers;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    if (tiers == null) {
      tiers = [];
    }
    obj[4] = tiers;
    return obj;
  });
  ({ badgeProgress, currentTier } = stateFromStoresObject);
  ({ nextTier, tiers } = stateFromStoresObject);
  if (0 === badgeProgress) {
    obj = { analyticsLocation: null };
    obj[0] = analyticsLocation;
    return callback2(GiftingBadgeIntro, obj);
  } else {
    let tmp21 = callback(currentTier);
    const tmp27 = callback(nextTier);
    const giftingBadgeProgressPercent = tmp7(12773).getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier);
    if (null != nextTier) {
      const intl2 = tmp7(1236).intl;
      obj = { count: null, nextTier: null };
      obj[0] = tmp9;
      let str2;
      if (nextTier != null) {
        str2 = nextTier.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      obj[1] = str2;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp(2380).XTX3OO, obj);
    } else {
      let intl = tmp7(1236).intl;
      let str;
      if (currentTier != null) {
        str = currentTier.name;
      }
      if (str == null) {
        str = "";
      }
      let obj1 = { currentTier: null };
      obj1[0] = str;
      formatToPlainStringResult = intl.formatToPlainString(tmp(2380).LnsdbK, obj1);
    }
    let obj2 = { style: null, children: null };
    obj2[0] = tmp3.wrapper;
    const obj3 = { style: null, children: null };
    obj3[0] = tmp3.progressContainer;
    const obj4 = { style: null, children: null };
    obj4[0] = tmp3.progressRow;
    let simple_icon_url;
    if (currentTier != null) {
      simple_icon_url = currentTier.simple_icon_url;
    }
    let tmp14 = null != simple_icon_url;
    if (tmp14) {
      const obj5 = { icon: null, size: 36, style: null };
      obj5[0] = currentTier.simple_icon_url;
      obj5[2] = { margin: 4 };
      tmp14 = callback2(tmp(9974), obj5);
    }
    let items1 = [tmp14, , ];
    const obj6 = { style: null, variant: "text-md/medium", color: "text-strong", children: null };
    obj6[0] = tmp3.progressTitleText;
    obj6[3] = formatToPlainStringResult;
    items1[1] = callback2(tmp7(4298).Text, obj6);
    let simple_icon_url1;
    if (nextTier != null) {
      simple_icon_url1 = nextTier.simple_icon_url;
    }
    let tmp16Result = null != simple_icon_url1;
    if (tmp16Result) {
      const obj7 = { icon: null, size: 36, style: null };
      obj7[0] = nextTier.simple_icon_url;
      obj7[2] = { margin: 4 };
      tmp16Result = tmp16(tmp(9974), obj7);
    }
    items1[2] = tmp16Result;
    obj4[1] = items1;
    let items2 = [closure_10(closure_6, obj4), ];
    const obj8 = { style: null, children: null };
    obj8[0] = tmp3.progressBarContainer;
    const obj9 = { style: null, children: null };
    obj9[0] = tmp3.progressBarTrack;
    const obj10 = { style: null };
    const items3 = [tmp3.progressBarFill, ];
    const obj11 = { width: null };
    const _HermesInternal = HermesInternal;
    obj11[0] = "" + giftingBadgeProgressPercent + "%";
    items3[1] = obj11;
    obj10[0] = items3;
    obj9[1] = callback2(closure_6, obj10);
    const items4 = [callback2(closure_6, obj9), ];
    const obj12 = { style: null, children: null };
    obj12[0] = tmp3.progressLabels;
    const intl3 = tmp7(1236).intl;
    let tmp20 = tmp21;
    if (null != nextTier) {
      tmp20 = tmp27;
    }
    const obj13 = { threshold: null, count: null };
    obj13[0] = tmp20;
    if (null != nextTier) {
      tmp21 = badgeProgress;
    }
    const obj14 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    obj13[1] = tmp21;
    obj14[2] = intl3.format(tmp(2380).iIpfQe, obj13);
    obj12[1] = callback2(tmp7(4298).Text, obj14);
    items4[1] = callback2(closure_6, obj12);
    obj8[1] = items4;
    items2[1] = closure_10(closure_6, obj8);
    obj3[1] = items2;
    const items5 = [closure_10(closure_6, obj3), , , , ];
    const obj15 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj16 = { size: "sm", color: null };
    obj16[1] = tmp(712).unsafe_rawColors.WHITE;
    obj15[1] = callback2(tmp7(9510).GiftIcon, obj16);
    const intl4 = tmp7(1236).intl;
    obj15[2] = intl4.string(tmp(2380).DZnomS);
    obj15[3] = function onPress() {
      let obj = analyticsLocation(_undefined2[18]);
      obj = { analyticsLocation, analyticsLocations };
      obj.openGiftModal(obj);
    };
    items5[1] = callback2(tmp7(4712).Button, obj15);
    const obj17 = { style: null };
    obj17[0] = tmp3.divider;
    items5[2] = callback2(closure_6, obj17);
    const obj18 = { style: null, onPress: null, children: null };
    obj18[0] = tmp3.dropdownRow;
    obj18[1] = function onPress() {
      return _undefined2((arg0) => !arg0);
    };
    const obj19 = { variant: "text-sm/medium", color: "text-strong", children: null };
    const intl5 = tmp7(1236).intl;
    obj19[2] = intl5.string(tmp(2380).WZ4cXA);
    const items6 = [callback2(tmp7(4298).Text, obj19), ];
    if (tmp11Result) {
      let ChevronSmallDownIcon = tmp7(12775).ChevronSmallUpIcon;
    } else {
      ChevronSmallDownIcon = tmp7(9413).ChevronSmallDownIcon;
    }
    const obj20 = { color: null };
    obj20[0] = tmp(712).colors.INTERACTIVE_ICON_DEFAULT;
    items6[1] = callback2(ChevronSmallDownIcon, obj20);
    obj18[2] = items6;
    items5[3] = closure_10(closure_5, obj18);
    if (tmp11Result) {
      const obj21 = { children: null };
      const obj22 = { style: null, children: null };
      obj22[0] = tmp3.badgesRow;
      obj22[1] = tiers.map((key) => {
        const items = [_undefined.badgeItem, ];
        key = undefined;
        if (currentTier != null) {
          key = currentTier.key;
        }
        let obj = { style: items, children: null };
        items[1] = key.key === key && _undefined.badgeItemActive;
        let tmp6 = null != key.simple_icon_url;
        if (tmp6) {
          obj = { icon: null, size: 36 };
          obj[0] = key.simple_icon_url;
          tmp6 = outer1_9(_undefined(_undefined2[15]), obj);
        }
        const items1 = [tmp6, ];
        obj = { style: tmp3.badgeCopy, children: null };
        let str = key.name;
        if (str == null) {
          str = "";
        }
        const items2 = [outer1_9(analyticsLocation(_undefined2[12]).Text, { variant: "text-sm/semibold", color: "text-strong", children: str }), ];
        const obj1 = { variant: "text-xs/normal", color: "text-subtle", children: null };
        const intl = tmp11(tmp12[13]).intl;
        const obj2 = { count: null };
        obj2[0] = outer1_8(key);
        obj1[2] = intl.format(_undefined(_undefined2[14]).qvx9E4, obj2);
        items2[1] = outer1_9(analyticsLocation(_undefined2[12]).Text, obj1);
        obj[1] = items2;
        items1[1] = outer1_10(outer1_6, obj);
        obj[1] = items1;
        return outer1_10(outer1_6, obj, key.key);
      });
      const items7 = [tmp16(tmp12, obj22), ];
      const obj23 = { style: null, variant: "text-xs/normal", color: "text-muted", children: null };
      obj23[0] = tmp3.footerText;
      const intl6 = tmp7(1236).intl;
      obj23[3] = intl6.string(tmp(2380)["4Yp0mI"]);
      items7[1] = tmp16(tmp7(4298).Text, obj23);
      obj21[0] = items7;
      tmp11Result = tmp11(closure_11, obj21);
    }
    items5[4] = tmp11Result;
    obj2[1] = items5;
    return closure_10(closure_6, obj2);
  }
  let tmp6 = context;
};