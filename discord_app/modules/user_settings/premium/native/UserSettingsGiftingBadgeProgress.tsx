// discord_app/modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2493 from "../../../premium/gifting/GiftingBadge.messages.js";
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
  let tmp4 = require("useAnalyticsLocations");
  let items = [BadgeDirectoryStore];
  const stateFromStores = analyticsLocation(analyticsLocations[9]).useStateFromStores(items, () => {
    badgeById = badgeById.getBadgeById(analyticsLocation(analyticsLocations[10]).BadgeId.GIFTING);
    let tiers;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    return tiers;
  });
  let tmp6 = null;
  if (null != stateFromStores) {
    let obj2 = { style: tmp.wrapper, children: null };
    let obj3 = { style: tmp.introContent, children: null };
    let obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
    let intl = tmp5(tmp3[12]).intl;
    obj4.children = intl.string(tmp2(tmp3[13])["4Yp0mI"]);
    obj3.children = closure_9(tmp5(tmp3[11]).Text, obj4);
    let items1 = [closure_9(closure_6, obj3), ,];
    const obj5 = {
      style: tmp.introGrid,
      children: stateFromStores.map((simple_icon_url) => {
        const obj = { style: introGridItem.introGridItem, children: null };
        let tmp4 = null != simple_icon_url.simple_icon_url;
        if (tmp4) {
          const obj2 = { icon: simple_icon_url.simple_icon_url, size: 44 };
          tmp4 = React7(GiftingBadgeIconDefault, obj2);
        }
        const items = [tmp4];
        const obj3 = { style: introGridItem.badgeCopy, children: null };
        let str = simple_icon_url.name;
        if (str == null) {
          str = "";
        }
        const items1 = [React7(Text_Text.Text, { variant: "text-sm/semibold", color: "text-subtle", children: str })];
        const obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
        const intl = util.intl;
        obj4.children = intl.format(_modDef2493.qvx9E4, { count: closure_8(simple_icon_url) });
        items1[1] = React7(Text_Text.Text, obj4);
        obj3.children = items1;
        items[1] = closure_2_10(timestampProducer, obj3);
        obj.children = items;
        return closure_2_10(timestampProducer, obj, simple_icon_url.key);
      }),
    };
    items1[1] = closure_9(closure_6, obj5);
    const obj6 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj7 = { size: "sm", color: tmp2(tmp3[6]).unsafe_rawColors.WHITE };
    obj6.icon = closure_9(tmp5(tmp3[16]).GiftIcon, obj7);
    const intl2 = tmp5(tmp3[12]).intl;
    obj6.text = intl2.string(tmp2(tmp3[13]).DZnomS);
    obj6.onPress = function onPress() {
      utils_openGiftModal.openGiftModal({ analyticsLocation, analyticsLocations });
    };
    items1[2] = closure_9(tmp5(tmp3[15]).Button, obj6);
    obj2.children = items1;
    tmp6 = closure_10(closure_6, obj2);
  }
  return tmp6;
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_8 = fn(8312).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4639);
let closure_12 = createStyles.createStyles(() => {
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
  const tmp = closure_12();
  importDefault = tmp;
  [tmp3, c2] = analyticsLocations(currentTier.useState(false), 2);
  const tmp2 = analyticsLocations(currentTier.useState(false), 2);
  analyticsLocations = useAnalyticsLocationsDefault(
    AnalyticsLocationDefault.USER_SETTINGS_GIFT_INVENTORY,
  ).analyticsLocations;
  let items = [BadgeDirectoryStore];
  const stateFromStoresObject = analyticsLocation(504).useStateFromStoresObject(items, () => {
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
    const obj2 = {
      badgeProgress: num,
      currentTier: singleRequirementProgress.getCurrentTier(analyticsLocation(_undefined[10]).BadgeId.GIFTING),
      nextTier: singleRequirementProgress.getNextTier(analyticsLocation(_undefined[10]).BadgeId.GIFTING),
      giftsRemaining: singleRequirementProgress.getRemainingToNextTier(
        analyticsLocation(_undefined[10]).BadgeId.GIFTING,
      ),
      tiers: null,
    };
    const badgeById = obj.getBadgeById(analyticsLocation(_undefined[10]).BadgeId.GIFTING);
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
  ({ nextTier, tiers } = stateFromStoresObject);
  if (0 === badgeProgress) {
    let obj2 = { analyticsLocation };
    return closure_9(GiftingBadgeIntro, obj2);
  } else {
    let tmp21 = closure_8(currentTier);
    const tmp27 = closure_8(nextTier);
    const giftingBadgeProgressPercent = tmp7(13663).getGiftingBadgeProgressPercent(
      badgeProgress,
      currentTier,
      nextTier,
    );
    if (null != nextTier) {
      const intl2 = tmp7(1115).intl;
      let obj3 = { count: tmp9, nextTier: null };
      let str2;
      if (nextTier != null) {
        str2 = nextTier.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      obj3.nextTier = str2;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp4(2493).XTX3OO, obj3);
    } else {
      let intl = tmp7(1115).intl;
      let str;
      if (currentTier != null) {
        str = currentTier.name;
      }
      if (str == null) {
        str = "";
      }
      let obj4 = { currentTier: str };
      formatToPlainStringResult = intl.formatToPlainString(tmp4(2493).LnsdbK, obj4);
    }
    const obj5 = { style: tmp.wrapper, children: null };
    const obj6 = { style: tmp.progressContainer, children: null };
    const obj7 = { style: tmp.progressRow, children: null };
    let simple_icon_url;
    if (currentTier != null) {
      simple_icon_url = currentTier.simple_icon_url;
    }
    let tmp14 = null != simple_icon_url;
    if (tmp14) {
      const obj8 = { icon: currentTier.simple_icon_url, size: 36, style: { margin: 4 } };
      tmp14 = closure_9(tmp4(10882), obj8);
    }
    let items1 = [tmp14, ,];
    const obj9 = {
      style: tmp.progressTitleText,
      variant: "text-md/medium",
      color: "text-strong",
      children: formatToPlainStringResult,
    };
    items1[1] = closure_9(tmp7(4635).Text, obj9);
    let simple_icon_url1;
    if (nextTier != null) {
      simple_icon_url1 = nextTier.simple_icon_url;
    }
    let tmp16Result = null != simple_icon_url1;
    if (tmp16Result) {
      const obj10 = { icon: nextTier.simple_icon_url, size: 36, style: { margin: 4 } };
      tmp16Result = closure_9(tmp4(10882), obj10);
    }
    items1[2] = tmp16Result;
    obj7.children = items1;
    let items2 = [closure_10(closure_6, obj7)];
    const obj11 = { style: tmp.progressBarContainer, children: null };
    const obj12 = { style: tmp.progressBarTrack, children: null };
    const obj13 = { style: null };
    const items3 = [tmp.progressBarFill];
    const obj14 = { width: null };
    const _HermesInternal = HermesInternal;
    obj14.width = "" + giftingBadgeProgressPercent + "%";
    items3[1] = obj14;
    obj13.style = items3;
    obj12.children = closure_9(closure_6, obj13);
    const items4 = [closure_9(closure_6, obj12)];
    const obj15 = { style: tmp.progressLabels, children: null };
    const intl3 = tmp7(1115).intl;
    let tmp20 = tmp21;
    if (null != nextTier) {
      tmp20 = tmp27;
    }
    const obj16 = { threshold: tmp20, count: null };
    if (null != nextTier) {
      tmp21 = badgeProgress;
    }
    const obj17 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    obj16.count = tmp21;
    obj17.children = intl3.format(tmp4(2493).iIpfQe, obj16);
    obj15.children = closure_9(tmp7(4635).Text, obj17);
    items4[1] = closure_9(closure_6, obj15);
    obj11.children = items4;
    items2[1] = closure_10(closure_6, obj11);
    obj6.children = items2;
    const items5 = [closure_10(closure_6, obj6), , , ,];
    const obj18 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj19 = { size: "sm", color: tmp4(576).unsafe_rawColors.WHITE };
    obj18.icon = closure_9(tmp7(11169).GiftIcon, obj19);
    const intl4 = tmp7(1115).intl;
    obj18.text = intl4.string(tmp4(2493).DZnomS);
    obj18.onPress = function onPress() {
      utils_openGiftModal.openGiftModal({ analyticsLocation, analyticsLocations });
    };
    items5[1] = closure_9(tmp7(5059).Button, obj18);
    const obj20 = { style: tmp.divider };
    items5[2] = closure_9(closure_6, obj20);
    const obj21 = {
      style: tmp.dropdownRow,
      onPress() {
        return _undefined((arg0) => !arg0);
      },
      children: null,
    };
    const obj22 = { variant: "text-sm/medium", color: "text-strong", children: null };
    const intl5 = tmp7(1115).intl;
    obj22.children = intl5.string(tmp4(2493).WZ4cXA);
    const items6 = [closure_9(tmp7(4635).Text, obj22)];
    if (tmp11Result) {
      let ChevronSmallDownIcon = tmp7(13666).ChevronSmallUpIcon;
    } else {
      ChevronSmallDownIcon = tmp7(11292).ChevronSmallDownIcon;
    }
    const obj23 = { color: tmp4(576).colors.INTERACTIVE_ICON_DEFAULT };
    items6[1] = closure_9(ChevronSmallDownIcon, obj23);
    obj21.children = items6;
    items5[3] = closure_10(closure_5, obj21);
    if (tmp11Result) {
      const obj24 = { children: null };
      const obj25 = {
        style: tmp.badgesRow,
        children: tiers.map((key) => {
          const items = [badgeItem.badgeItem];
          key = undefined;
          if (currentTier != null) {
            key = currentTier.key;
          }
          const obj = { style: items, children: null };
          items[1] = key.key === key && badgeItem.badgeItemActive;
          let tmp6 = null != key.simple_icon_url;
          if (tmp6) {
            const obj2 = { icon: key.simple_icon_url, size: 36 };
            tmp6 = React7(GiftingBadgeIconDefault, obj2);
          }
          const items1 = [tmp6];
          const obj3 = { style: badgeItem.badgeCopy, children: null };
          let str = key.name;
          if (str == null) {
            str = "";
          }
          const items2 = [React7(Text_Text.Text, { variant: "text-sm/semibold", color: "text-strong", children: str })];
          const obj4 = { variant: "text-xs/normal", color: "text-subtle", children: null };
          const intl = util.intl;
          obj4.children = intl.format(_modDef2493.qvx9E4, { count: closure_8(key) });
          items2[1] = React7(Text_Text.Text, obj4);
          obj3.children = items2;
          items1[1] = closure_2_10(timestampProducer, obj3);
          obj.children = items1;
          return closure_2_10(timestampProducer, obj, key.key);
        }),
      };
      const items7 = [closure_9(closure_6, obj25)];
      const obj26 = { style: tmp.footerText, variant: "text-xs/normal", color: "text-muted", children: null };
      const intl6 = tmp7(1115).intl;
      obj26.children = intl6.string(tmp4(2493)["4Yp0mI"]);
      items7[1] = closure_9(tmp7(4635).Text, obj26);
      obj24.children = items7;
      tmp11Result = closure_10(closure_11, obj24);
    }
    items5[4] = tmp11Result;
    obj5.children = items5;
    return closure_10(closure_6, obj5);
  }
  let obj = analyticsLocation(504);
}
