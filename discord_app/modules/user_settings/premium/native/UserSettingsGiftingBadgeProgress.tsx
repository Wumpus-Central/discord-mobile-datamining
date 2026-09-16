// discord_app/modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2493 from "../../../premium/gifting/GiftingBadge.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import utils_openGiftModal from "../../../premium/native/utils/openGiftModal.tsx";
import GiftingBadgesUtils from "../../../premium/gifting/GiftingBadgesUtils.tsx";
import GiftingBadgeIconDefault from "../../../premium/gifting/native/views/GiftingBadgeIcon.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../../badges/BadgeDirectoryStore.tsx";

require = fn;
function GiftingBadgeIntro(analyticsLocation) {
  analyticsLocation = analyticsLocation.analyticsLocation;
  const tmp = closure_13();
  importDefault = tmp;
  dependencyMap = analyticsLocation(10888).useIsGiftingBadgeComplexArtEnabled(UserSettingsGiftingBadgeProgress);
  let obj = analyticsLocation(10888);
  const analyticsLocations = useAnalyticsLocationsDefault(
    AnalyticsLocationDefault.USER_SETTINGS_GIFT_INVENTORY,
  ).analyticsLocations;
  let items = [BadgeDirectoryStore];
  const stateFromStores = analyticsLocation(504).useStateFromStores(items, () => {
    badgeById = badgeById.getBadgeById(analyticsLocation(closure_2[11]).BadgeId.GIFTING);
    let tiers;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    return tiers;
  });
  let tmp6 = null;
  if (null != stateFromStores) {
    let obj3 = { style: tmp.wrapper, children: null };
    let obj4 = { style: tmp.introContent, children: null };
    let obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
    let intl = tmp2(1115).intl;
    obj5.children = intl.string(tmp4(2493)["4Yp0mI"]);
    obj4.children = closure_9(tmp2(4634).Text, obj5);
    let items1 = [closure_9(closure_6, obj4), ,];
    const obj6 = {
      style: tmp.introGrid,
      children: stateFromStores.map((name) => {
        const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(name, closure_2);
        const obj2 = { style: introGridItem.introGridItem, children: null };
        let tmp7 = null != giftingBadgeTierIconUrl;
        if (tmp7) {
          const obj3 = { icon: giftingBadgeTierIconUrl, size: 44 };
          tmp7 = React7(GiftingBadgeIconDefault, obj3);
        }
        const items = [tmp7];
        const obj4 = { style: introGridItem.badgeCopy, children: null };
        let str = name.name;
        if (str == null) {
          str = "";
        }
        const items1 = [React7(Text_Text.Text, { variant: "text-sm/semibold", color: "text-subtle", children: str })];
        const obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
        const intl = util.intl;
        obj5.children = intl.format(_modDef2493.qvx9E4, { count: closure_8(name) });
        items1[1] = React7(Text_Text.Text, obj5);
        obj4.children = items1;
        items[1] = closure_2_10(timestampProducer, obj4);
        obj2.children = items;
        return closure_2_10(timestampProducer, obj2, name.key);
      }),
    };
    items1[1] = closure_9(closure_6, obj6);
    const obj7 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj8 = { size: "sm", color: tmp4(576).unsafe_rawColors.WHITE };
    obj7.icon = closure_9(tmp2(11183).GiftIcon, obj8);
    const intl2 = tmp2(1115).intl;
    obj7.text = intl2.string(tmp4(2493).DZnomS);
    obj7.onPress = function onPress() {
      utils_openGiftModal.openGiftModal({ analyticsLocation, analyticsLocations });
    };
    items1[2] = closure_9(tmp2(5060).Button, obj7);
    obj3.children = items1;
    tmp6 = closure_10(closure_6, obj3);
  }
  return tmp6;
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_8 = fn(8321).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const UserSettingsGiftingBadgeProgress = "UserSettingsGiftingBadgeProgress";
const createStyles = fn(4638);
let closure_13 = createStyles.createStyles(() => {
  const obj = {
    wrapper: {
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
      borderRadius: nativeDefault.radii.md,
      padding: nativeDefault.space.PX_16,
      gap: nativeDefault.space.PX_16,
    },
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
  const obj2 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    borderRadius: nativeDefault.radii.md,
    padding: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_16,
  };
  obj.progressContainer = { gap: nativeDefault.space.PX_8 };
  const obj3 = { gap: nativeDefault.space.PX_8 };
  obj.progressRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.progressTitleText = { flex: 1 };
  const obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.progressBarContainer = { paddingHorizontal: nativeDefault.space.PX_8 };
  const obj5 = { paddingHorizontal: nativeDefault.space.PX_8 };
  obj.progressBarTrack = {
    height: 6,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
    overflow: "hidden",
  };
  const obj6 = {
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
  const obj7 = {
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
  const obj8 = {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: nativeDefault.space.PX_16,
    marginTop: nativeDefault.space.PX_4,
  };
  obj.divider = { height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
  obj.dropdownRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  const obj9 = { height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
  obj.badgesRow = {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: nativeDefault.space.PX_4,
  };
  const obj10 = {
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
  const obj11 = {
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
  const obj12 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    borderRadius: nativeDefault.radii.md,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
  };
  obj.footerText = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
  const obj13 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
  obj.introContent = { paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
  const obj14 = { paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
  obj.introGrid = {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: nativeDefault.space.PX_4,
    paddingHorizontal: nativeDefault.space.PX_16,
  };
  const obj15 = {
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
  const tmp = closure_13();
  importDefault = tmp;
  [tmp3, c2] = analyticsLocations(currentTier.useState(false), 2);
  const tmp2 = analyticsLocations(currentTier.useState(false), 2);
  analyticsLocations = useAnalyticsLocationsDefault(
    AnalyticsLocationDefault.USER_SETTINGS_GIFT_INVENTORY,
  ).analyticsLocations;
  let items = [BadgeDirectoryStore];
  const stateFromStoresObject = analyticsLocation(504).useStateFromStoresObject(items, () => {
    singleRequirementProgress = singleRequirementProgress.getSingleRequirementProgress(
      analyticsLocation(_undefined[11]).BadgeId.GIFTING,
    );
    let num;
    if (singleRequirementProgress != null) {
      num = singleRequirementProgress.current;
    }
    if (num == null) {
      num = 0;
    }
    const obj2 = {
      badgeProgress: num,
      currentTier: singleRequirementProgress.getCurrentTier(analyticsLocation(_undefined[11]).BadgeId.GIFTING),
      nextTier: singleRequirementProgress.getNextTier(analyticsLocation(_undefined[11]).BadgeId.GIFTING),
      giftsRemaining: singleRequirementProgress.getRemainingToNextTier(
        analyticsLocation(_undefined[11]).BadgeId.GIFTING,
      ),
      tiers: null,
    };
    const badgeById = obj.getBadgeById(analyticsLocation(_undefined[11]).BadgeId.GIFTING);
    let tiers;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    if (tiers == null) {
      tiers = [];
    }
    obj2.tiers = tiers;
    return obj2;
  });
  ({ badgeProgress, currentTier } = stateFromStoresObject);
  ({ nextTier, tiers, giftsRemaining } = stateFromStoresObject);
  let obj = analyticsLocation(504);
  const isGiftingBadgeComplexArtEnabled = analyticsLocation(10888).useIsGiftingBadgeComplexArtEnabled(
    UserSettingsGiftingBadgeProgress,
  );
  if (0 === badgeProgress) {
    let obj3 = { analyticsLocation };
    return closure_9(GiftingBadgeIntro, obj3);
  } else {
    let tmp19 = closure_8(currentTier);
    const tmp25 = closure_8(nextTier);
    const giftingBadgeProgressPercent = tmp7(10888).getGiftingBadgeProgressPercent(
      badgeProgress,
      currentTier,
      nextTier,
    );
    const tmp7Result = tmp7(10888);
    let giftingBadgeTierIconUrl = tmp7(10888).getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
    const tmp7Result3 = tmp7(10888);
    const giftingBadgeTierIconUrl1 = tmp7(10888).getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled);
    if (null != nextTier) {
      const intl2 = tmp7(1115).intl;
      let obj4 = { count: giftsRemaining, nextTier: null };
      let str2;
      if (nextTier != null) {
        str2 = nextTier.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      obj4.nextTier = str2;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp4(2493).XTX3OO, obj4);
    } else {
      let intl = tmp7(1115).intl;
      let str;
      if (currentTier != null) {
        str = currentTier.name;
      }
      if (str == null) {
        str = "";
      }
      let obj5 = { currentTier: str };
      formatToPlainStringResult = intl.formatToPlainString(tmp4(2493).LnsdbK, obj5);
    }
    const obj6 = { style: tmp.wrapper, children: null };
    const obj7 = { style: tmp.progressContainer, children: null };
    const obj8 = { style: tmp.progressRow, children: null };
    let tmp13 = null != giftingBadgeTierIconUrl;
    if (tmp13) {
      const obj9 = { icon: giftingBadgeTierIconUrl, size: 36, style: { margin: 4 } };
      tmp13 = closure_9(tmp4(10893), obj9);
    }
    let items1 = [tmp13, ,];
    const obj10 = {
      style: tmp.progressTitleText,
      variant: "text-md/medium",
      color: "text-strong",
      children: formatToPlainStringResult,
    };
    items1[1] = closure_9(tmp7(4634).Text, obj10);
    let tmp15Result = null != giftingBadgeTierIconUrl1;
    if (tmp15Result) {
      const obj11 = { icon: giftingBadgeTierIconUrl1, size: 36, style: { margin: 4 } };
      tmp15Result = closure_9(tmp4(10893), obj11);
    }
    items1[2] = tmp15Result;
    obj8.children = items1;
    let items2 = [closure_10(closure_6, obj8)];
    const obj12 = { style: tmp.progressBarContainer, children: null };
    const obj13 = { style: tmp.progressBarTrack, children: null };
    const obj14 = { style: null };
    const items3 = [tmp.progressBarFill];
    const obj15 = { width: null };
    const _HermesInternal = HermesInternal;
    obj15.width = "" + giftingBadgeProgressPercent + "%";
    items3[1] = obj15;
    obj14.style = items3;
    obj13.children = closure_9(closure_6, obj14);
    const items4 = [closure_9(closure_6, obj13)];
    const obj16 = { style: tmp.progressLabels, children: null };
    const intl3 = tmp7(1115).intl;
    let tmp18 = tmp19;
    if (null != nextTier) {
      tmp18 = tmp25;
    }
    const obj17 = { threshold: tmp18, count: null };
    if (null != nextTier) {
      tmp19 = badgeProgress;
    }
    const obj18 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    obj17.count = tmp19;
    obj18.children = intl3.format(tmp4(2493).iIpfQe, obj17);
    obj16.children = closure_9(tmp7(4634).Text, obj18);
    items4[1] = closure_9(closure_6, obj16);
    obj12.children = items4;
    items2[1] = closure_10(closure_6, obj12);
    obj7.children = items2;
    const items5 = [closure_10(closure_6, obj7), , , ,];
    const obj19 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj20 = { size: "sm", color: tmp4(576).unsafe_rawColors.WHITE };
    obj19.icon = closure_9(tmp7(11183).GiftIcon, obj20);
    const intl4 = tmp7(1115).intl;
    obj19.text = intl4.string(tmp4(2493).DZnomS);
    obj19.onPress = function onPress() {
      utils_openGiftModal.openGiftModal({ analyticsLocation, analyticsLocations });
    };
    items5[1] = closure_9(tmp7(5060).Button, obj19);
    const obj21 = { style: tmp.divider };
    items5[2] = closure_9(closure_6, obj21);
    const obj22 = {
      style: tmp.dropdownRow,
      onPress() {
        return _undefined((arg0) => !arg0);
      },
      children: null,
    };
    const obj23 = { variant: "text-sm/medium", color: "text-strong", children: null };
    const intl5 = tmp7(1115).intl;
    obj23.children = intl5.string(tmp4(2493).WZ4cXA);
    const items6 = [closure_9(tmp7(4634).Text, obj23)];
    if (tmp11Result) {
      let ChevronSmallDownIcon = tmp7(13675).ChevronSmallUpIcon;
    } else {
      ChevronSmallDownIcon = tmp7(11306).ChevronSmallDownIcon;
    }
    const obj24 = { color: tmp4(576).colors.INTERACTIVE_ICON_DEFAULT };
    items6[1] = closure_9(ChevronSmallDownIcon, obj24);
    obj22.children = items6;
    items5[3] = closure_10(isGiftingBadgeComplexArtEnabled, obj22);
    if (tmp11Result) {
      const obj25 = { children: null };
      const obj26 = {
        style: tmp.badgesRow,
        children: tiers.map((key) => {
          const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(
            key,
            isGiftingBadgeComplexArtEnabled,
          );
          const items = [badgeItem.badgeItem];
          key = undefined;
          if (currentTier != null) {
            key = currentTier.key;
          }
          const obj2 = { style: items, children: null };
          items[1] = key.key === key && badgeItem.badgeItemActive;
          let tmp9 = null != giftingBadgeTierIconUrl;
          if (tmp9) {
            const obj3 = { icon: giftingBadgeTierIconUrl, size: 36 };
            tmp9 = React7(GiftingBadgeIconDefault, obj3);
          }
          const items1 = [tmp9];
          const obj4 = { style: badgeItem.badgeCopy, children: null };
          let str = key.name;
          if (str == null) {
            str = "";
          }
          const items2 = [React7(Text_Text.Text, { variant: "text-sm/semibold", color: "text-strong", children: str })];
          const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: null };
          const intl = util.intl;
          const tmp8 = key.key === key && badgeItem.badgeItemActive;
          obj5.children = intl.format(_modDef2493.qvx9E4, { count: closure_8(key) });
          items2[1] = React7(Text_Text.Text, obj5);
          obj4.children = items2;
          items1[1] = closure_2_10(timestampProducer, obj4);
          obj2.children = items1;
          return closure_2_10(timestampProducer, obj2, key.key);
        }),
      };
      const items7 = [closure_9(closure_6, obj26)];
      const obj27 = { style: tmp.footerText, variant: "text-xs/normal", color: "text-muted", children: null };
      const intl6 = tmp7(1115).intl;
      obj27.children = intl6.string(tmp4(2493)["4Yp0mI"]);
      items7[1] = closure_9(tmp7(4634).Text, obj27);
      obj25.children = items7;
      tmp11Result = closure_10(closure_11, obj25);
    }
    items5[4] = tmp11Result;
    obj6.children = items5;
    return closure_10(closure_6, obj6);
  }
  let obj2 = analyticsLocation(10888);
}
