// discord_app/modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2492 from "../../../premium/gifting/GiftingBadge.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import utils_openGiftModal from "../../../premium/native/utils/openGiftModal.tsx";
import GiftingBadgeIconDefault from "../../../premium/gifting/native/views/GiftingBadgeIcon.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../../badges/BadgeDirectoryStore.tsx";

require = fn;
function GiftingBadgeIntro(analyticsLocation) {
  analyticsLocation = analyticsLocation.analyticsLocation;
  let analyticsLocations;
  const tmp = closure_12();
  importDefault = tmp;
  analyticsLocations = require("useAnalyticsLocations")(
    require("AnalyticsLocation").USER_SETTINGS_GIFT_INVENTORY,
  ).analyticsLocations;
  let obj = analyticsLocation(analyticsLocations[9]);
  let items = [BadgeDirectoryStore];
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
    obj = { style: tmp.wrapper, children: null };
    obj = { style: tmp.introContent, children: null };
    let obj1 = { variant: "text-xs/normal", color: "text-muted", children: null };
    let intl = tmp5(tmp3[12]).intl;
    obj1.children = intl.string(tmp2(tmp3[13])["4Yp0mI"]);
    obj.children = closure_9(tmp5(tmp3[11]).Text, obj1);
    let items1 = [closure_9(closure_6, obj), ,];
    const obj2 = {
      style: tmp.introGrid,
      children: stateFromStores.map((simple_icon_url) => {
        let obj = { style: introGridItem.introGridItem, children: null };
        let tmp4 = null != simple_icon_url.simple_icon_url;
        if (tmp4) {
          obj = { icon: simple_icon_url.simple_icon_url, size: 44 };
          tmp4 = React7(GiftingBadgeIconDefault, obj);
        }
        const items = [tmp4];
        obj = { style: introGridItem.badgeCopy, children: null };
        let str = simple_icon_url.name;
        if (str == null) {
          str = "";
        }
        const items1 = [React7(Text_Text.Text, { variant: "text-sm/semibold", color: "text-subtle", children: str })];
        const obj1 = { variant: "text-xs/normal", color: "text-muted", children: null };
        const intl = tmp9(1114).intl;
        obj1.children = intl.format(_modDef2492.qvx9E4, { count: closure_8(simple_icon_url) });
        items1[1] = React7(Text_Text.Text, obj1);
        obj.children = items1;
        items[1] = closure_2_10(timestampProducer, obj);
        obj.children = items;
        return closure_2_10(timestampProducer, obj, simple_icon_url.key);
      }),
    };
    items1[1] = closure_9(closure_6, obj2);
    const obj3 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj4 = { size: "sm", color: tmp2(tmp3[6]).unsafe_rawColors.WHITE };
    obj3.icon = closure_9(tmp5(tmp3[16]).GiftIcon, obj4);
    const intl2 = tmp5(tmp3[12]).intl;
    obj3.text = intl2.string(tmp2(tmp3[13]).DZnomS);
    obj3.onPress = function onPress() {
      const obj = { analyticsLocation, analyticsLocations };
      obj.openGiftModal(obj);
    };
    items1[2] = closure_9(tmp5(tmp3[15]).Button, obj3);
    obj.children = items1;
    tmp6 = closure_10(closure_6, obj);
  }
  return tmp6;
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_8 = fn(8192).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles(() => {
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
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    borderRadius: nativeDefault.radii.md,
    padding: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_16,
  };
  obj.wrapper = obj;
  obj = { gap: nativeDefault.space.PX_8 };
  obj.progressContainer = obj;
  obj.progressRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.progressTitleText = { flex: 1 };
  const obj1 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.progressBarContainer = { paddingHorizontal: nativeDefault.space.PX_8 };
  const obj2 = { paddingHorizontal: nativeDefault.space.PX_8 };
  obj.progressBarTrack = {
    height: 6,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
    overflow: "hidden",
  };
  const obj3 = {
    height: 6,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
    overflow: "hidden",
  };
  obj.progressBarFill = {
    height: 6,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500,
  };
  const obj4 = {
    height: 6,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500,
  };
  obj.progressLabels = {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: nativeDefault.space.PX_16,
    marginTop: nativeDefault.space.PX_4,
  };
  const obj5 = {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: nativeDefault.space.PX_16,
    marginTop: nativeDefault.space.PX_4,
  };
  obj.divider = { height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
  obj.dropdownRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  const obj6 = { height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
  obj.badgesRow = {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: nativeDefault.space.PX_4,
  };
  const obj7 = {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: nativeDefault.space.PX_4,
  };
  obj.badgeItem = {
    width: "33.33%",
    alignItems: "center",
    justifyContent: "center",
    padding: nativeDefault.space.PX_8,
    gap: nativeDefault.space.PX_8,
  };
  const obj8 = {
    width: "33.33%",
    alignItems: "center",
    justifyContent: "center",
    padding: nativeDefault.space.PX_8,
    gap: nativeDefault.space.PX_8,
  };
  obj.badgeItemActive = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    borderRadius: nativeDefault.radii.md,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
  };
  obj.badgeCopy = { alignItems: "center", gap: 2 };
  const obj9 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    borderRadius: nativeDefault.radii.md,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
  };
  obj.footerText = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
  const obj10 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
  obj.introContent = { paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
  const obj11 = { paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
  obj.introGrid = {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: nativeDefault.space.PX_4,
    paddingHorizontal: nativeDefault.space.PX_16,
  };
  const obj12 = {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: nativeDefault.space.PX_4,
    paddingHorizontal: nativeDefault.space.PX_16,
  };
  obj.introGridItem = {
    width: "33.33%",
    alignItems: "center",
    justifyContent: "center",
    padding: nativeDefault.space.PX_8,
    gap: nativeDefault.space.PX_8,
  };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx");

export default function UserSettingsGiftingBadgeProgress(analyticsLocation) {
  analyticsLocation = analyticsLocation.analyticsLocation;
  dependencyMap = undefined;
  let analyticsLocations;
  currentTier = undefined;
  const tmp = closure_12();
  importDefault = tmp;
  [tmp3, c2] = analyticsLocations(currentTier.useState(false), 2);
  const tmp2 = analyticsLocations(currentTier.useState(false), 2);
  analyticsLocations = useAnalyticsLocationsDefault(
    AnalyticsLocationDefault.USER_SETTINGS_GIFT_INVENTORY,
  ).analyticsLocations;
  let obj = analyticsLocation(504);
  let items = [BadgeDirectoryStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = singleRequirementProgress;
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
    obj = {
      badgeProgress: num,
      currentTier: obj.getCurrentTier(tmp(tmp2[10]).BadgeId.GIFTING),
      nextTier: obj.getNextTier(tmp(tmp2[10]).BadgeId.GIFTING),
      giftsRemaining: obj.getRemainingToNextTier(tmp(tmp2[10]).BadgeId.GIFTING),
      tiers: null,
    };
    const badgeById = obj.getBadgeById(tmp(tmp2[10]).BadgeId.GIFTING);
    let tiers;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    if (tiers == null) {
      tiers = [];
    }
    obj.tiers = tiers;
    return obj;
  });
  ({ badgeProgress, currentTier } = stateFromStoresObject);
  ({ nextTier, tiers } = stateFromStoresObject);
  if (0 === badgeProgress) {
    obj = { analyticsLocation };
    return closure_9(GiftingBadgeIntro, obj);
  } else {
    let tmp21 = closure_8(currentTier);
    const tmp27 = closure_8(nextTier);
    const giftingBadgeProgressPercent = tmp7(13571).getGiftingBadgeProgressPercent(
      badgeProgress,
      currentTier,
      nextTier,
    );
    if (null != nextTier) {
      const intl2 = tmp7(1114).intl;
      obj = { count: tmp9, nextTier: null };
      let str2;
      if (nextTier != null) {
        str2 = nextTier.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      obj.nextTier = str2;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp4(2492).XTX3OO, obj);
    } else {
      let intl = tmp7(1114).intl;
      let str;
      if (currentTier != null) {
        str = currentTier.name;
      }
      if (str == null) {
        str = "";
      }
      let obj1 = { currentTier: str };
      formatToPlainStringResult = intl.formatToPlainString(tmp4(2492).LnsdbK, obj1);
    }
    const obj2 = { style: tmp.wrapper, children: null };
    const obj3 = { style: tmp.progressContainer, children: null };
    const obj4 = { style: tmp.progressRow, children: null };
    let simple_icon_url;
    if (currentTier != null) {
      simple_icon_url = currentTier.simple_icon_url;
    }
    let tmp14 = null != simple_icon_url;
    if (tmp14) {
      const obj5 = { icon: currentTier.simple_icon_url, size: 36, style: { margin: 4 } };
      tmp14 = closure_9(tmp4(10749), obj5);
    }
    let items1 = [tmp14, ,];
    const obj6 = {
      style: tmp.progressTitleText,
      variant: "text-md/medium",
      color: "text-strong",
      children: formatToPlainStringResult,
    };
    items1[1] = closure_9(tmp7(4556).Text, obj6);
    let simple_icon_url1;
    if (nextTier != null) {
      simple_icon_url1 = nextTier.simple_icon_url;
    }
    let tmp16Result = null != simple_icon_url1;
    if (tmp16Result) {
      const obj7 = { icon: nextTier.simple_icon_url, size: 36, style: { margin: 4 } };
      tmp16Result = tmp16(tmp4(10749), obj7);
    }
    items1[2] = tmp16Result;
    obj4.children = items1;
    let items2 = [closure_10(closure_6, obj4)];
    const obj8 = { style: tmp.progressBarContainer, children: null };
    const obj9 = { style: tmp.progressBarTrack, children: null };
    const obj10 = { style: null };
    const items3 = [tmp.progressBarFill];
    const obj11 = { width: null };
    const _HermesInternal = HermesInternal;
    obj11.width = "" + giftingBadgeProgressPercent + "%";
    items3[1] = obj11;
    obj10.style = items3;
    obj9.children = closure_9(closure_6, obj10);
    const items4 = [closure_9(closure_6, obj9)];
    const obj12 = { style: tmp.progressLabels, children: null };
    const intl3 = tmp7(1114).intl;
    let tmp20 = tmp21;
    if (null != nextTier) {
      tmp20 = tmp27;
    }
    const obj13 = { threshold: tmp20, count: null };
    if (null != nextTier) {
      tmp21 = badgeProgress;
    }
    const obj14 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    obj13.count = tmp21;
    obj14.children = intl3.format(tmp4(2492).iIpfQe, obj13);
    obj12.children = closure_9(tmp7(4556).Text, obj14);
    items4[1] = closure_9(closure_6, obj12);
    obj8.children = items4;
    items2[1] = closure_10(closure_6, obj8);
    obj3.children = items2;
    const items5 = [closure_10(closure_6, obj3), , , ,];
    const obj15 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj16 = { size: "sm", color: tmp4(576).unsafe_rawColors.WHITE };
    obj15.icon = closure_9(tmp7(11030).GiftIcon, obj16);
    const intl4 = tmp7(1114).intl;
    obj15.text = intl4.string(tmp4(2492).DZnomS);
    obj15.onPress = function onPress() {
      const obj = { analyticsLocation, analyticsLocations };
      obj.openGiftModal(obj);
    };
    items5[1] = closure_9(tmp7(4975).Button, obj15);
    const obj17 = { style: tmp.divider };
    items5[2] = closure_9(closure_6, obj17);
    const obj18 = {
      style: tmp.dropdownRow,
      onPress() {
        return _undefined((arg0) => !arg0);
      },
      children: null,
    };
    const obj19 = { variant: "text-sm/medium", color: "text-strong", children: null };
    const intl5 = tmp7(1114).intl;
    obj19.children = intl5.string(tmp4(2492).WZ4cXA);
    const items6 = [closure_9(tmp7(4556).Text, obj19)];
    if (tmp11Result) {
      let ChevronSmallDownIcon = tmp7(13573).ChevronSmallUpIcon;
    } else {
      ChevronSmallDownIcon = tmp7(11153).ChevronSmallDownIcon;
    }
    const obj20 = { color: tmp4(576).colors.INTERACTIVE_ICON_DEFAULT };
    items6[1] = closure_9(ChevronSmallDownIcon, obj20);
    obj18.children = items6;
    items5[3] = closure_10(closure_5, obj18);
    if (tmp11Result) {
      const obj21 = { children: null };
      const obj22 = {
        style: tmp.badgesRow,
        children: tiers.map((key) => {
          const items = [badgeItem.badgeItem];
          key = undefined;
          if (currentTier != null) {
            key = currentTier.key;
          }
          let obj = { style: items, children: null };
          items[1] = key.key === key && badgeItem.badgeItemActive;
          let tmp6 = null != key.simple_icon_url;
          if (tmp6) {
            obj = { icon: key.simple_icon_url, size: 36 };
            tmp6 = React7(GiftingBadgeIconDefault, obj);
          }
          const items1 = [tmp6];
          obj = { style: tmp3.badgeCopy, children: null };
          let str = key.name;
          if (str == null) {
            str = "";
          }
          const items2 = [React7(Text_Text.Text, { variant: "text-sm/semibold", color: "text-strong", children: str })];
          const obj1 = { variant: "text-xs/normal", color: "text-subtle", children: null };
          const intl = tmp11(1114).intl;
          obj1.children = intl.format(_modDef2492.qvx9E4, { count: closure_8(key) });
          items2[1] = React7(Text_Text.Text, obj1);
          obj.children = items2;
          items1[1] = closure_2_10(timestampProducer, obj);
          obj.children = items1;
          return closure_2_10(timestampProducer, obj, key.key);
        }),
      };
      const items7 = [tmp16(tmp12, obj22)];
      const obj23 = { style: tmp.footerText, variant: "text-xs/normal", color: "text-muted", children: null };
      const intl6 = tmp7(1114).intl;
      obj23.children = intl6.string(tmp4(2492)["4Yp0mI"]);
      items7[1] = tmp16(tmp7(4556).Text, obj23);
      obj21.children = items7;
      tmp11Result = tmp11(closure_11, obj21);
    }
    items5[4] = tmp11Result;
    obj2.children = items5;
    return closure_10(closure_6, obj2);
  }
}
