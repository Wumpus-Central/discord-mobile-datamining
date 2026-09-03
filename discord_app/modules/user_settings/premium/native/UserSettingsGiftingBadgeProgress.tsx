// discord_app/modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import contextDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import QUICK_SWITCHERDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../badges/BadgeDirectoryStore.tsx";
import { getSingleRequirementThreshold as closure_8 } from "../../../badges/BadgeDirectoryStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function GiftingBadgeIntro(analyticsLocation) {
  analyticsLocation = analyticsLocation.analyticsLocation;
  importDefault = undefined;
  let analyticsLocations;
  const tmp = callback4();
  importDefault = tmp;
  analyticsLocations = importDefault(analyticsLocations[7])(
    importDefault(analyticsLocations[8]).USER_SETTINGS_GIFT_INVENTORY,
  ).analyticsLocations;
  let obj = analyticsLocation(analyticsLocations[9]);
  let items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    badgeById = badgeById.getBadgeById(analyticsLocation(analyticsLocations[10]).BadgeId.GIFTING);
    let tiers;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    return tiers;
  });
  let tmp6 = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp.wrapper;
    obj = { style: null, children: null };
    obj[0] = tmp.introContent;
    obj1 = { variant: "text-xs/normal", color: "text-muted", children: null };
    let intl = tmp5(tmp3[12]).intl;
    obj1[2] = intl.string(tmp2(tmp3[13])["4Yp0mI"]);
    obj[1] = callback2(tmp5(tmp3[11]).Text, obj1);
    let items1 = [callback2(closure_6, obj), ,];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.introGrid;
    obj2[1] = stateFromStores.map((simple_icon_url) => {
      let obj = { style: lib.introGridItem, children: null };
      let tmp4 = null != simple_icon_url.simple_icon_url;
      if (tmp4) {
        obj = { icon: null, size: 44 };
        obj[0] = simple_icon_url.simple_icon_url;
        tmp4 = closure_1_9(lib(analyticsLocations[14]), obj);
      }
      const items = [tmp4];
      obj = { style: lib.badgeCopy, children: null };
      let str = simple_icon_url.name;
      if (str == null) {
        str = "";
      }
      const items1 = [
        closure_1_9(analyticsLocation(analyticsLocations[11]).Text, {
          variant: "text-sm/semibold",
          color: "text-subtle",
          children: str,
        }),
      ];
      obj1 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = tmp9(tmp10[12]).intl;
      obj1[2] = intl.format(lib(analyticsLocations[13]).qvx9E4, { count: closure_1_8(simple_icon_url) });
      items1[1] = closure_1_9(analyticsLocation(analyticsLocations[11]).Text, obj1);
      obj[1] = items1;
      items[1] = closure_1_10(closure_1_6, obj);
      obj[1] = items;
      return closure_1_10(closure_1_6, obj, simple_icon_url.key);
    });
    items1[1] = callback2(closure_6, obj2);
    const obj3 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj4 = { size: "sm", color: null };
    obj4[1] = tmp2(tmp3[6]).unsafe_rawColors.WHITE;
    obj3[1] = callback2(tmp5(tmp3[16]).GiftIcon, obj4);
    const intl2 = tmp5(tmp3[12]).intl;
    obj3[2] = intl2.string(tmp2(tmp3[13]).DZnomS);
    obj3[3] = function onPress() {
      let obj = analyticsLocation(analyticsLocations[17]);
      obj = { analyticsLocation, analyticsLocations };
      obj.openGiftModal(obj);
    };
    items1[2] = callback2(tmp5(tmp3[15]).Button, obj3);
    obj[1] = items1;
    tmp6 = callback3(closure_6, obj);
  }
  return tmp6;
}
({ Pressable: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles(() => {
  let obj = {
    wrapper: null,
    progressContainer: null,
    progressRow: null,
    progressTitleText: null,
    progressBarContainer: null,
    progressBarTrack: null,
    progressBarFill: null,
    progressLabels: null,
    divider: null,
    dropdownRow: null,
    badgesRow: null,
    badgeItem: null,
    badgeItemActive: null,
    badgeCopy: null,
    footerText: null,
    introContent: null,
    introGrid: null,
    introGridItem: null,
  };
  obj = {
    backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED,
    borderRadius: ThemesDefault.radii.md,
    padding: ThemesDefault.space.PX_16,
    gap: ThemesDefault.space.PX_16,
  };
  obj[0] = obj;
  obj = { gap: ThemesDefault.space.PX_8 };
  obj[1] = obj;
  obj[2] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
  obj[3] = { flex: 1 };
  obj1 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
  obj[4] = { paddingHorizontal: ThemesDefault.space.PX_8 };
  const obj2 = { paddingHorizontal: ThemesDefault.space.PX_8 };
  obj[5] = {
    height: 6,
    borderRadius: ThemesDefault.radii.round,
    backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL,
    overflow: "hidden",
  };
  const obj3 = {
    height: 6,
    borderRadius: ThemesDefault.radii.round,
    backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL,
    overflow: "hidden",
  };
  obj[6] = {
    height: 6,
    borderRadius: ThemesDefault.radii.round,
    backgroundColor: ThemesDefault.unsafe_rawColors.BRAND_500,
  };
  const obj4 = {
    height: 6,
    borderRadius: ThemesDefault.radii.round,
    backgroundColor: ThemesDefault.unsafe_rawColors.BRAND_500,
  };
  obj[7] = {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: ThemesDefault.space.PX_16,
    marginTop: ThemesDefault.space.PX_4,
  };
  const obj5 = {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: ThemesDefault.space.PX_16,
    marginTop: ThemesDefault.space.PX_4,
  };
  obj[8] = { height: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
  obj[9] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  const obj6 = { height: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
  obj[10] = {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: ThemesDefault.space.PX_4,
  };
  const obj7 = {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: ThemesDefault.space.PX_4,
  };
  obj[11] = {
    width: "33.33%",
    alignItems: "center",
    justifyContent: "center",
    padding: ThemesDefault.space.PX_8,
    gap: ThemesDefault.space.PX_8,
  };
  const obj8 = {
    width: "33.33%",
    alignItems: "center",
    justifyContent: "center",
    padding: ThemesDefault.space.PX_8,
    gap: ThemesDefault.space.PX_8,
  };
  obj[12] = {
    backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED,
    borderRadius: ThemesDefault.radii.md,
    borderWidth: 1,
    borderColor: ThemesDefault.colors.BORDER_MUTED,
  };
  obj[13] = { alignItems: "center", gap: 2 };
  const obj9 = {
    backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED,
    borderRadius: ThemesDefault.radii.md,
    borderWidth: 1,
    borderColor: ThemesDefault.colors.BORDER_MUTED,
  };
  obj[14] = { textAlign: "center", marginBottom: ThemesDefault.space.PX_16 };
  const obj10 = { textAlign: "center", marginBottom: ThemesDefault.space.PX_16 };
  obj[15] = { paddingHorizontal: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_4 };
  const obj11 = { paddingHorizontal: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_4 };
  obj[16] = {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: ThemesDefault.space.PX_4,
    paddingHorizontal: ThemesDefault.space.PX_16,
  };
  const obj12 = {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: ThemesDefault.space.PX_4,
    paddingHorizontal: ThemesDefault.space.PX_16,
  };
  obj[17] = {
    width: "33.33%",
    alignItems: "center",
    justifyContent: "center",
    padding: ThemesDefault.space.PX_8,
    gap: ThemesDefault.space.PX_8,
  };
  return obj;
});
const result = require("set").fileFinishedImporting(
  "modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx",
);

export default function UserSettingsGiftingBadgeProgress(analyticsLocation) {
  analyticsLocation = analyticsLocation.analyticsLocation;
  importDefault = undefined;
  dependencyMap = undefined;
  let analyticsLocations;
  currentTier = undefined;
  const tmp = callback4();
  importDefault = tmp;
  [tmp3, c2] = analyticsLocations(currentTier.useState(false), 2);
  const tmp2 = analyticsLocations(currentTier.useState(false), 2);
  analyticsLocations = contextDefault(QUICK_SWITCHERDefault.USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  let obj = analyticsLocation(586);
  let items = [closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    singleRequirementProgress = singleRequirementProgress.getSingleRequirementProgress(
      analyticsLocation(_undefined[10]).BadgeId.GIFTING,
    );
    let num;
    if (singleRequirementProgress != null) {
      num = singleRequirementProgress.current;
    }
    if (num == null) {
      num = 0;
    }
    const obj = {
      badgeProgress: num,
      currentTier: getCurrentTier(analyticsLocation(_undefined[10]).BadgeId.GIFTING),
      nextTier: getNextTier(analyticsLocation(_undefined[10]).BadgeId.GIFTING),
      giftsRemaining: getRemainingToNextTier(analyticsLocation(_undefined[10]).BadgeId.GIFTING),
      tiers: null,
    };
    ({ getCurrentTier, getNextTier, getRemainingToNextTier, getBadgeById } = singleRequirementProgress);
    const badgeById = getBadgeById(tmp2(tmp3[10]).BadgeId.GIFTING);
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
    const giftingBadgeProgressPercent = tmp7(13465).getGiftingBadgeProgressPercent(
      badgeProgress,
      currentTier,
      nextTier,
    );
    if (null != nextTier) {
      const intl2 = tmp7(1233).intl;
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
      let formatToPlainStringResult = intl2.formatToPlainString(tmp4(2464).XTX3OO, obj);
    } else {
      let intl = tmp7(1233).intl;
      let str;
      if (currentTier != null) {
        str = currentTier.name;
      }
      if (str == null) {
        str = "";
      }
      obj1 = { currentTier: null };
      obj1[0] = str;
      formatToPlainStringResult = intl.formatToPlainString(tmp4(2464).LnsdbK, obj1);
    }
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.wrapper;
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.progressContainer;
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.progressRow;
    let simple_icon_url;
    if (currentTier != null) {
      simple_icon_url = currentTier.simple_icon_url;
    }
    let tmp14 = null != simple_icon_url;
    if (tmp14) {
      const obj5 = { icon: null, size: 36, style: null };
      obj5[0] = currentTier.simple_icon_url;
      obj5[2] = { margin: 4 };
      tmp14 = callback2(tmp4(10747), obj5);
    }
    let items1 = [tmp14, ,];
    const obj6 = { style: null, variant: "text-md/medium", color: "text-strong", children: null };
    obj6[0] = tmp.progressTitleText;
    obj6[3] = formatToPlainStringResult;
    items1[1] = callback2(tmp7(4474).Text, obj6);
    let simple_icon_url1;
    if (nextTier != null) {
      simple_icon_url1 = nextTier.simple_icon_url;
    }
    let tmp16Result = null != simple_icon_url1;
    if (tmp16Result) {
      const obj7 = { icon: null, size: 36, style: null };
      obj7[0] = nextTier.simple_icon_url;
      obj7[2] = { margin: 4 };
      tmp16Result = tmp16(tmp4(10747), obj7);
    }
    items1[2] = tmp16Result;
    obj4[1] = items1;
    let items2 = [closure_10(closure_6, obj4)];
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.progressBarContainer;
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.progressBarTrack;
    const obj10 = { style: null };
    const items3 = [tmp.progressBarFill];
    const obj11 = { width: null };
    const _HermesInternal = HermesInternal;
    obj11[0] = "" + giftingBadgeProgressPercent + "%";
    items3[1] = obj11;
    obj10[0] = items3;
    obj9[1] = callback2(closure_6, obj10);
    const items4 = [callback2(closure_6, obj9)];
    const obj12 = { style: null, children: null };
    obj12[0] = tmp.progressLabels;
    const intl3 = tmp7(1233).intl;
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
    obj14[2] = intl3.format(tmp4(2464).iIpfQe, obj13);
    obj12[1] = callback2(tmp7(4474).Text, obj14);
    items4[1] = callback2(closure_6, obj12);
    obj8[1] = items4;
    items2[1] = closure_10(closure_6, obj8);
    obj3[1] = items2;
    const items5 = [closure_10(closure_6, obj3), , , ,];
    const obj15 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj16 = { size: "sm", color: null };
    obj16[1] = tmp4(709).unsafe_rawColors.WHITE;
    obj15[1] = callback2(tmp7(10998).GiftIcon, obj16);
    const intl4 = tmp7(1233).intl;
    obj15[2] = intl4.string(tmp4(2464).DZnomS);
    obj15[3] = function onPress() {
      let obj = analyticsLocation(_undefined[17]);
      obj = { analyticsLocation, analyticsLocations };
      obj.openGiftModal(obj);
    };
    items5[1] = callback2(tmp7(4929).Button, obj15);
    const obj17 = { style: null };
    obj17[0] = tmp.divider;
    items5[2] = callback2(closure_6, obj17);
    const obj18 = { style: null, onPress: null, children: null };
    obj18[0] = tmp.dropdownRow;
    obj18[1] = function onPress() {
      return _undefined((arg0) => !arg0);
    };
    const obj19 = { variant: "text-sm/medium", color: "text-strong", children: null };
    const intl5 = tmp7(1233).intl;
    obj19[2] = intl5.string(tmp4(2464).WZ4cXA);
    const items6 = [callback2(tmp7(4474).Text, obj19)];
    if (tmp11Result) {
      let ChevronSmallDownIcon = tmp7(13467).ChevronSmallUpIcon;
    } else {
      ChevronSmallDownIcon = tmp7(8953).ChevronSmallDownIcon;
    }
    const obj20 = { color: null };
    obj20[0] = tmp4(709).colors.INTERACTIVE_ICON_DEFAULT;
    items6[1] = callback2(ChevronSmallDownIcon, obj20);
    obj18[2] = items6;
    items5[3] = closure_10(closure_5, obj18);
    if (tmp11Result) {
      const obj21 = { children: null };
      const obj22 = { style: null, children: null };
      obj22[0] = tmp.badgesRow;
      obj22[1] = tiers.map((key) => {
        const items = [lib.badgeItem];
        key = undefined;
        if (currentTier != null) {
          key = currentTier.key;
        }
        let obj = { style: items, children: null };
        items[1] = key.key === key && lib.badgeItemActive;
        let tmp6 = null != key.simple_icon_url;
        if (tmp6) {
          obj = { icon: null, size: 36 };
          obj[0] = key.simple_icon_url;
          tmp6 = closure_1_9(lib(_undefined[14]), obj);
        }
        const items1 = [tmp6];
        obj = { style: tmp3.badgeCopy, children: null };
        let str = key.name;
        if (str == null) {
          str = "";
        }
        const items2 = [
          closure_1_9(analyticsLocation(_undefined[11]).Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: str,
          }),
        ];
        obj1 = { variant: "text-xs/normal", color: "text-subtle", children: null };
        const intl = tmp11(tmp12[12]).intl;
        obj1[2] = intl.format(lib(_undefined[13]).qvx9E4, { count: closure_1_8(key) });
        items2[1] = closure_1_9(analyticsLocation(_undefined[11]).Text, obj1);
        obj[1] = items2;
        items1[1] = closure_1_10(closure_1_6, obj);
        obj[1] = items1;
        return closure_1_10(closure_1_6, obj, key.key);
      });
      const items7 = [tmp16(tmp12, obj22)];
      const obj23 = { style: null, variant: "text-xs/normal", color: "text-muted", children: null };
      obj23[0] = tmp.footerText;
      const intl6 = tmp7(1233).intl;
      obj23[3] = intl6.string(tmp4(2464)["4Yp0mI"]);
      items7[1] = tmp16(tmp7(4474).Text, obj23);
      obj21[0] = items7;
      tmp11Result = tmp11(closure_11, obj21);
    }
    items5[4] = tmp11Result;
    obj2[1] = items5;
    return closure_10(closure_6, obj2);
  }
  let tmp6 = contextDefault;
}
