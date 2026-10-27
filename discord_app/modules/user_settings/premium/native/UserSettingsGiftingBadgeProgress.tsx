// === Module 14920: UserSettingsGiftingBadgeProgress ===

// Module 14920 (UserSettingsGiftingBadgeProgress)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import _modDef2631 from "module_2631" /* 2631 */;
import Text_Text from "Text/Text" /* 5235 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7255 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7280 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10448 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10505 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10508 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8681 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_8 = fn(8681).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4972);
let closure_12 = createStyles.createStyles(() => {
  const obj = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, progressContainer: null, progressRow: null, progressTitleText: null, progressBarContainer: null, progressBarTrack: null, progressBarFill: null, progressLabels: null, divider: null, dropdownRow: null, badgesRow: null, badgeItem: null, badgeItemActive: null, badgeCopy: null, footerText: null, introContent: null, introGrid: null, introGridItem: null };
  const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
  obj.progressContainer = { gap: nativeDefault.space.PX_8 };
  const obj3 = { gap: nativeDefault.space.PX_8 };
  obj.progressRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.progressTitleText = { flex: 1 };
  const obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.progressBarContainer = { paddingHorizontal: nativeDefault.space.PX_8 };
  const obj5 = { paddingHorizontal: nativeDefault.space.PX_8 };
  obj.progressBarTrack = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
  const obj6 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
  obj.progressBarFill = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500 };
  const obj7 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500 };
  obj.progressLabels = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_4 };
  const obj8 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_4 };
  obj.divider = { height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
  obj.dropdownRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  const obj9 = { height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
  obj.badgesRow = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: nativeDefault.space.PX_4 };
  const obj10 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: nativeDefault.space.PX_4 };
  obj.badgeItem = { width: "33.33%", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
  const obj11 = { width: "33.33%", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
  obj.badgeItemActive = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
  obj.badgeCopy = { alignItems: "center", gap: 2 };
  const obj12 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
  obj.footerText = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
  const obj13 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
  obj.introContent = { paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
  const obj14 = { paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
  obj.introGrid = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
  const obj15 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
  obj.introGridItem = { width: "33.33%", alignItems: "center", justifyContent: "center", paddingVertical: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingBadgeIntro(analyticsLocation) {
  const cResult = analyticsLocation(analyticsLocations[8]).c(25);
  analyticsLocation = analyticsLocation.analyticsLocation;
  const tmp4 = closure_12();
  importDefault = tmp4;
  let obj = analyticsLocation(analyticsLocations[8]);
  analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [BadgeDirectoryStore];
    const fn = function o() {
      badgeById = badgeById.getBadgeById(analyticsLocation(analyticsLocations[11]).BadgeId.GIFTING);
      let tiers;
      if (badgeById != null) {
        tiers = badgeById.tiers;
      }
      return tiers;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmp6 = require("useAnalyticsLocations");
  const stateFromStores = analyticsLocation(analyticsLocations[12]).useStateFromStores(tmp7, tmp8);
  if (null == stateFromStores) {
    return null;
  } else {
    const _Symbol2 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { variant: "text-xs/normal", color: "text-muted", children: null };
      let intl = tmp(tmp2[14]).intl;
      obj2.children = intl.string(tmp5(tmp2[15])["4Yp0mI"]);
      const tmp12 = closure_9(tmp(tmp2[13]).Text, obj2);
      cResult[2] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[2];
    }
    if (cResult[3] !== tmp4.introContent) {
      let obj3 = { style: tmp4.introContent, children: tmp10 };
      const tmp16 = closure_9(closure_6, obj3);
      cResult[3] = tmp4.introContent;
      cResult[4] = tmp16;
      let tmp13 = tmp16;
    } else {
      tmp13 = cResult[4];
    }
    if (cResult[5] === tmp4.badgeCopy) {
      if (cResult[6] === tmp4.introGridItem) {
        if (cResult[7] === stateFromStores) {
          if (cResult[12] === tmp4.introGrid) {
            if (cResult[13] === tmp18) {
              let tmp22 = cResult[14];
            }
            const _Symbol = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              let obj4 = { size: "sm", color: tmp5(tmp2[6]).unsafe_rawColors.WHITE };
              const tmp29 = closure_9(tmp(tmp2[18]).GiftIcon, obj4);
              const intl2 = tmp(tmp2[14]).intl;
              const stringResult = intl2.string(tmp5(tmp2[15]).DZnomS);
              cResult[15] = stringResult;
              cResult[16] = tmp29;
              let tmp27 = tmp29;
              let tmp26 = stringResult;
            } else {
              tmp26 = cResult[15];
              tmp27 = cResult[16];
            }
            if (cResult[17] === analyticsLocation) {
              if (cResult[18] === analyticsLocations) {
                let tmp31 = cResult[19];
              }
              if (cResult[20] === tmp4.wrapper) {
                if (cResult[21] === tmp31) {
                  if (cResult[22] === tmp13) {
                    if (cResult[23] === tmp22) {
                      let tmp34 = cResult[24];
                    }
                    return tmp34;
                  }
                }
              }
              let obj5 = { style: tmp4.wrapper, children: null };
              let items1 = [tmp13, tmp22, tmp31];
              obj5.children = items1;
              const tmp37 = closure_10(closure_6, obj5);
              cResult[20] = tmp4.wrapper;
              cResult[21] = tmp31;
              cResult[22] = tmp13;
              cResult[23] = tmp22;
              cResult[24] = tmp37;
              tmp34 = tmp37;
            }
            const obj6 = {
              variant: "primary",
              icon: tmp27,
              text: tmp26,
              onPress() {
                          utils_openGiftModal.openGiftModal({ analyticsLocation, analyticsLocations });
                        },
              grow: true
            };
            const tmp33 = closure_9(tmp(tmp2[19]).Button, obj6);
            cResult[17] = analyticsLocation;
            cResult[18] = analyticsLocations;
            cResult[19] = tmp33;
            tmp31 = tmp33;
          }
          const obj7 = { style: tmp17, children: cResult[8] };
          const tmp25 = closure_9(closure_6, obj7);
          cResult[12] = tmp4.introGrid;
          cResult[13] = cResult[8];
          cResult[14] = tmp25;
          tmp22 = tmp25;
        }
      }
    }
    if (cResult[9] === tmp4.badgeCopy) {
      if (cResult[10] === tmp4.introGridItem) {
        let tmp19 = cResult[11];
      }
      const mapped = stateFromStores.map(tmp19);
      cResult[5] = tmp4.badgeCopy;
      cResult[6] = tmp4.introGridItem;
      cResult[7] = stateFromStores;
      cResult[8] = mapped;
    }
    const fn2 = function v(name) {
      const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(name);
      const obj2 = { style: introGridItem.introGridItem, children: null };
      let tmp7 = null != giftingBadgeTierIconUrl;
      if (tmp7) {
        const obj3 = { icon: giftingBadgeTierIconUrl, size: 44 };
        tmp7 = React6(GiftingBadgeIconDefault, obj3);
      }
      const items = [tmp7, ];
      const obj4 = { style: introGridItem.badgeCopy, accessible: true, accessibilityLabel: null, children: null };
      obj4.accessibilityLabel = GiftingBadgesUtils.getGiftingBadgeAccessibilityLabel(name);
      let str = name.name;
      if (str == null) {
        str = "";
      }
      const items1 = [React6(Text_Text.Text, { variant: "text-sm/semibold", color: "text-subtle", children: str }), ];
      const obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = util.intl;
      const tmpResult = GiftingBadgesUtils;
      obj5.children = intl.format(_modDef2631.qvx9E4, { count: closure_8(name) });
      items1[1] = React6(Text_Text.Text, obj5);
      obj4.children = items1;
      items[1] = v65535(timestampProducer, obj4);
      obj2.children = items;
      return v65535(timestampProducer, obj2, name.key);
    };
    cResult[9] = tmp4.badgeCopy;
    cResult[10] = tmp4.introGridItem;
    cResult[11] = fn2;
    tmp19 = fn2;
  }
  let tmpResult = analyticsLocation(analyticsLocations[12]);
}) : (function GiftingBadgeIntro(analyticsLocation) {
  analyticsLocation = analyticsLocation.analyticsLocation;
  let analyticsLocations;
  const tmp = closure_12();
  importDefault = tmp;
  analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  const tmp4 = require("useAnalyticsLocations");
  let items = [BadgeDirectoryStore];
  const stateFromStores = analyticsLocation(analyticsLocations[12]).useStateFromStores(items, () => {
    badgeById = badgeById.getBadgeById(analyticsLocation(analyticsLocations[11]).BadgeId.GIFTING);
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
    let intl = tmp5(tmp3[14]).intl;
    obj4.children = intl.string(tmp2(tmp3[15])["4Yp0mI"]);
    obj3.children = closure_9(tmp5(tmp3[13]).Text, obj4);
    let items1 = [closure_9(closure_6, obj3), , ];
    let obj5 = {
      style: tmp.introGrid,
      children: stateFromStores.map((name) => {
          const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(name);
          const obj2 = { style: introGridItem.introGridItem, children: null };
          let tmp7 = null != giftingBadgeTierIconUrl;
          if (tmp7) {
            const obj3 = { icon: giftingBadgeTierIconUrl, size: 44 };
            tmp7 = React6(GiftingBadgeIconDefault, obj3);
          }
          const items = [tmp7, ];
          const obj4 = { style: introGridItem.badgeCopy, accessible: true, accessibilityLabel: null, children: null };
          obj4.accessibilityLabel = GiftingBadgesUtils.getGiftingBadgeAccessibilityLabel(name);
          let str = name.name;
          if (str == null) {
            str = "";
          }
          const items1 = [React6(Text_Text.Text, { variant: "text-sm/semibold", color: "text-subtle", children: str }), ];
          const obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
          const intl = util.intl;
          const tmpResult = GiftingBadgesUtils;
          obj5.children = intl.format(_modDef2631.qvx9E4, { count: closure_8(name) });
          items1[1] = React6(Text_Text.Text, obj5);
          obj4.children = items1;
          items[1] = v65535(timestampProducer, obj4);
          obj2.children = items;
          return v65535(timestampProducer, obj2, name.key);
        })
    };
    items1[1] = closure_9(closure_6, obj5);
    const obj6 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj7 = { size: "sm", color: tmp2(tmp3[6]).unsafe_rawColors.WHITE };
    obj6.icon = closure_9(tmp5(tmp3[18]).GiftIcon, obj7);
    const intl2 = tmp5(tmp3[14]).intl;
    obj6.text = intl2.string(tmp2(tmp3[15]).DZnomS);
    obj6.onPress = function onPress() {
      utils_openGiftModal.openGiftModal({ analyticsLocation, analyticsLocations });
    };
    items1[2] = closure_9(tmp5(tmp3[19]).Button, obj6);
    obj2.children = items1;
    tmp6 = closure_10(closure_6, obj2);
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsGiftingBadgeProgress(analyticsLocation) {
  const cResult = analyticsLocation(576).c(115);
  analyticsLocation = analyticsLocation.analyticsLocation;
  const tmp4 = closure_12();
  importDefault = tmp4;
  let obj = analyticsLocation(576);
  [tmp6, dependencyMap] = analyticsLocations(currentTier.useState(false), 2);
  const tmp5 = analyticsLocations(currentTier.useState(false), 2);
  analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [BadgeDirectoryStore];
    const fn = function f() {
      singleRequirementProgress = singleRequirementProgress.getSingleRequirementProgress(analyticsLocation(8673).BadgeId.GIFTING);
      let num;
      if (singleRequirementProgress != null) {
        num = singleRequirementProgress.current;
      }
      if (num == null) {
        num = 0;
      }
      const obj2 = { badgeProgress: num, currentTier: singleRequirementProgress.getCurrentTier(analyticsLocation(8673).BadgeId.GIFTING), nextTier: singleRequirementProgress.getNextTier(analyticsLocation(8673).BadgeId.GIFTING), giftsRemaining: singleRequirementProgress.getRemainingToNextTier(analyticsLocation(8673).BadgeId.GIFTING), tiers: null };
      const badgeById = obj.getBadgeById(analyticsLocation(8673).BadgeId.GIFTING);
      let tiers;
      if (badgeById != null) {
        tiers = badgeById.tiers;
      }
      if (tiers == null) {
        tiers = [];
      }
      obj2.tiers = tiers;
      return obj2;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const stateFromStoresObject = analyticsLocation(504).useStateFromStoresObject(tmp9, tmp10);
  ({ badgeProgress, currentTier } = stateFromStoresObject);
  ({ nextTier, giftsRemaining, tiers } = stateFromStoresObject);
  if (0 === badgeProgress) {
    if (cResult[2] !== analyticsLocation) {
      let obj2 = { analyticsLocation };
      const tmp119 = closure_9(closure_13, obj2);
      cResult[2] = analyticsLocation;
      cResult[3] = tmp119;
      let tmp116 = tmp119;
    } else {
      tmp116 = cResult[3];
    }
    return tmp116;
  } else {
    if (cResult[4] === badgeProgress) {
      if (cResult[5] === currentTier) {
        if (cResult[6] === giftsRemaining) {
          if (cResult[7] === nextTier) {
            if (cResult[8] === tmp4.progressBarContainer) {
              if (cResult[9] === tmp4.progressBarFill) {
                if (cResult[10] === tmp4.progressBarTrack) {
                  if (cResult[11] === tmp4.progressContainer) {
                    if (cResult[12] === tmp4.progressLabels) {
                      if (cResult[13] === tmp4.progressRow) {
                        if (cResult[14] === tmp4.progressTitleText) {
                          if (cResult[15] === tmp4.wrapper) {
                            let tmp13 = cResult[16];
                            let tmp14 = cResult[17];
                            let tmp15 = cResult[18];
                            let tmp16 = cResult[19];
                            let tmp17 = cResult[20];
                            let tmp18 = cResult[21];
                            let tmp19 = cResult[22];
                            let str = cResult[23];
                            let str2 = cResult[24];
                            let tmp20 = cResult[25];
                            let tmp21 = cResult[26];
                            let tmp22 = cResult[27];
                            let tmp23 = cResult[28];
                            let tmp24 = cResult[29];
                          }
                          if (cResult[65] === tmp13) {
                            if (cResult[66] === str) {
                              if (cResult[67] === str2) {
                                if (cResult[68] === tmp20) {
                                  let tmp68 = cResult[69];
                                }
                                if (cResult[70] === tmp14) {
                                  if (cResult[71] === tmp68) {
                                    if (cResult[72] === tmp21) {
                                      let tmp71 = cResult[73];
                                    }
                                    if (cResult[74] === tmp15) {
                                      if (cResult[75] === tmp71) {
                                        if (cResult[76] === tmp22) {
                                          if (cResult[77] === tmp23) {
                                            let tmp74 = cResult[78];
                                          }
                                          if (cResult[79] === tmp16) {
                                            if (cResult[80] === tmp18) {
                                              if (cResult[81] === tmp74) {
                                                if (cResult[82] === tmp24) {
                                                  let tmp77 = cResult[83];
                                                }
                                                const _Symbol = Symbol;
                                                if (cResult[84] === Symbol.for("react.memo_cache_sentinel")) {
                                                  let obj3 = { size: "sm", color: tmp7(587).unsafe_rawColors.WHITE };
                                                  const tmp83 = closure_9(tmp(12897).GiftIcon, obj3);
                                                  const intl4 = tmp(1125).intl;
                                                  const stringResult = intl4.string(tmp7(2631).DZnomS);
                                                  cResult[84] = tmp83;
                                                  cResult[85] = stringResult;
                                                  let tmp81 = stringResult;
                                                  let tmp80 = tmp83;
                                                } else {
                                                  tmp80 = cResult[84];
                                                  tmp81 = cResult[85];
                                                }
                                                if (cResult[86] === analyticsLocation) {
                                                  if (cResult[87] === analyticsLocations) {
                                                    let tmp85 = cResult[88];
                                                  }
                                                  if (cResult[89] !== tmp4.divider) {
                                                    let obj4 = { style: tmp4.divider };
                                                    const tmp91 = closure_9(closure_6, obj4);
                                                    cResult[89] = tmp4.divider;
                                                    cResult[90] = tmp91;
                                                    let tmp88 = tmp91;
                                                  } else {
                                                    tmp88 = cResult[90];
                                                  }
                                                  const _Symbol2 = Symbol;
                                                  if (cResult[91] === Symbol.for("react.memo_cache_sentinel")) {
                                                    const fn2 = function $() {
                                                      return dependencyMap((arg0) => !arg0);
                                                    };
                                                    cResult[91] = fn2;
                                                    let tmp92 = fn2;
                                                  } else {
                                                    tmp92 = cResult[91];
                                                  }
                                                  const _Symbol3 = Symbol;
                                                  if (cResult[92] === Symbol.for("react.memo_cache_sentinel")) {
                                                    let obj5 = { variant: "text-sm/medium", color: "text-strong", children: null };
                                                    const intl5 = tmp(1125).intl;
                                                    obj5.children = intl5.string(tmp7(2631).WZ4cXA);
                                                    const tmp95 = closure_9(tmp(5235).Text, obj5);
                                                    cResult[92] = tmp95;
                                                    let tmp93 = tmp95;
                                                  } else {
                                                    tmp93 = cResult[92];
                                                  }
                                                  if (cResult[93] !== tmp6) {
                                                    if (tmp6) {
                                                      let ChevronSmallDownIcon = tmp(14921).ChevronSmallUpIcon;
                                                    } else {
                                                      ChevronSmallDownIcon = tmp(11083).ChevronSmallDownIcon;
                                                    }
                                                    const obj6 = { color: tmp7(587).colors.INTERACTIVE_ICON_DEFAULT };
                                                    const tmp97Result = closure_9(ChevronSmallDownIcon, obj6);
                                                    cResult[93] = tmp6;
                                                    cResult[94] = tmp97Result;
                                                  } else {
                                                    if (cResult[95] === tmp4.dropdownRow) {
                                                      if (cResult[96] === tmp96) {
                                                        let tmp100 = cResult[97];
                                                      }
                                                      let key;
                                                      if (currentTier != null) {
                                                        key = currentTier.key;
                                                      }
                                                      if (cResult[98] === key) {
                                                        if (cResult[99] === tmp6) {
                                                          if (cResult[100] === tmp4.badgeCopy) {
                                                            if (cResult[101] === tmp4.badgeItem) {
                                                              if (cResult[102] === tmp4.badgeItemActive) {
                                                                if (cResult[103] === tmp4.badgesRow) {
                                                                  if (cResult[104] === tmp4.footerText) {
                                                                    if (cResult[105] === tiers) {
                                                                      let tmp106 = cResult[106];
                                                                    }
                                                                    if (cResult[107] === tmp17) {
                                                                      if (cResult[108] === tmp19) {
                                                                        if (cResult[109] === tmp77) {
                                                                          if (cResult[110] === tmp85) {
                                                                            if (cResult[111] === tmp88) {
                                                                              if (cResult[112] === tmp100) {
                                                                                if (cResult[113] === tmp106) {
                                                                                  let tmp113 = cResult[114];
                                                                                }
                                                                                return tmp113;
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    const obj7 = { style: tmp19, children: null };
                                                                    let items1 = [tmp77, tmp85, tmp88, tmp100, tmp106];
                                                                    obj7.children = items1;
                                                                    const tmp115 = closure_10(tmp17, obj7);
                                                                    cResult[107] = tmp17;
                                                                    cResult[108] = tmp19;
                                                                    cResult[109] = tmp77;
                                                                    cResult[110] = tmp85;
                                                                    cResult[111] = tmp88;
                                                                    cResult[112] = tmp100;
                                                                    cResult[113] = tmp106;
                                                                    cResult[114] = tmp115;
                                                                    tmp113 = tmp115;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                      let tmp107 = tmp6;
                                                      if (tmp6) {
                                                        const obj8 = { children: null };
                                                        const obj9 = {
                                                          style: tmp4.badgesRow,
                                                          children: tiers.map((key) => {
                                                                                                                  const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(key);
                                                                                                                  const items = [badgeItem.badgeItem, ];
                                                                                                                  key = undefined;
                                                                                                                  if (currentTier != null) {
                                                                                                                    key = currentTier.key;
                                                                                                                  }
                                                                                                                  const obj2 = { style: items, children: null };
                                                                                                                  items[1] = key.key === key && badgeItem.badgeItemActive;
                                                                                                                  let tmp9 = null != giftingBadgeTierIconUrl;
                                                                                                                  if (tmp9) {
                                                                                                                    const obj3 = { icon: giftingBadgeTierIconUrl, size: 36 };
                                                                                                                    tmp9 = React6(GiftingBadgeIconDefault, obj3);
                                                                                                                  }
                                                                                                                  const items1 = [tmp9, ];
                                                                                                                  const obj4 = { style: badgeItem.badgeCopy, accessible: true, accessibilityLabel: null, children: null };
                                                                                                                  const tmp8 = key.key === key && badgeItem.badgeItemActive;
                                                                                                                  obj4.accessibilityLabel = GiftingBadgesUtils.getGiftingBadgeAccessibilityLabel(key);
                                                                                                                  let str = key.name;
                                                                                                                  if (str == null) {
                                                                                                                    str = "";
                                                                                                                  }
                                                                                                                  const items2 = [React6(Text_Text.Text, { variant: "text-sm/semibold", color: "text-strong", children: str }), ];
                                                                                                                  const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: null };
                                                                                                                  const intl = util.intl;
                                                                                                                  const tmpResult = GiftingBadgesUtils;
                                                                                                                  obj5.children = intl.format(_modDef2631.qvx9E4, { count: closure_8(key) });
                                                                                                                  items2[1] = React6(Text_Text.Text, obj5);
                                                                                                                  obj4.children = items2;
                                                                                                                  items1[1] = v65535(timestampProducer, obj4);
                                                                                                                  obj2.children = items1;
                                                                                                                  return v65535(timestampProducer, obj2, key.key);
                                                                                                                })
                                                        };
                                                        let items2 = [closure_9(closure_6, obj9), ];
                                                        const obj10 = { style: tmp4.footerText, variant: "text-xs/normal", color: "text-muted", children: null };
                                                        const intl6 = tmp(1125).intl;
                                                        obj10.children = intl6.string(tmp7(2631)["4Yp0mI"]);
                                                        items2[1] = closure_9(tmp(5235).Text, obj10);
                                                        obj8.children = items2;
                                                        tmp107 = closure_10(closure_11, obj8);
                                                      }
                                                      let key1;
                                                      if (currentTier != null) {
                                                        key1 = currentTier.key;
                                                      }
                                                      cResult[98] = key1;
                                                      cResult[99] = tmp6;
                                                      cResult[100] = tmp4.badgeCopy;
                                                      cResult[101] = tmp4.badgeItem;
                                                      cResult[102] = tmp4.badgeItemActive;
                                                      cResult[103] = tmp4.badgesRow;
                                                      cResult[104] = tmp4.footerText;
                                                      cResult[105] = tiers;
                                                      cResult[106] = tmp107;
                                                      tmp106 = tmp107;
                                                    }
                                                    const obj11 = { style: tmp4.dropdownRow, onPress: tmp92, children: null };
                                                    const items3 = [tmp93, cResult[94]];
                                                    obj11.children = items3;
                                                    const tmp103 = closure_10(closure_5, obj11);
                                                    cResult[95] = tmp4.dropdownRow;
                                                    cResult[96] = cResult[94];
                                                    cResult[97] = tmp103;
                                                    tmp100 = tmp103;
                                                  }
                                                }
                                                const obj12 = {
                                                  variant: "primary",
                                                  icon: tmp80,
                                                  text: tmp81,
                                                  onPress() {
                                                                                                  utils_openGiftModal.openGiftModal({ analyticsLocation, analyticsLocations });
                                                                                                },
                                                  grow: true
                                                };
                                                const tmp87 = closure_9(tmp(5245).Button, obj12);
                                                cResult[86] = analyticsLocation;
                                                cResult[87] = analyticsLocations;
                                                cResult[88] = tmp87;
                                                tmp85 = tmp87;
                                              }
                                            }
                                          }
                                          const obj13 = { style: tmp24, children: null };
                                          const items4 = [tmp18, tmp74];
                                          obj13.children = items4;
                                          const tmp79 = closure_10(tmp16, obj13);
                                          cResult[79] = tmp16;
                                          cResult[80] = tmp18;
                                          cResult[81] = tmp74;
                                          cResult[82] = tmp24;
                                          cResult[83] = tmp79;
                                          tmp77 = tmp79;
                                        }
                                      }
                                    }
                                    const obj14 = { style: tmp22, children: null };
                                    const items5 = [tmp23, tmp71];
                                    obj14.children = items5;
                                    const tmp76 = closure_10(tmp15, obj14);
                                    cResult[74] = tmp15;
                                    cResult[75] = tmp71;
                                    cResult[76] = tmp22;
                                    cResult[77] = tmp23;
                                    cResult[78] = tmp76;
                                    tmp74 = tmp76;
                                  }
                                }
                                const obj15 = { style: tmp21, children: tmp68 };
                                const tmp73 = closure_9(tmp14, obj15);
                                cResult[70] = tmp14;
                                cResult[71] = tmp68;
                                cResult[72] = tmp21;
                                cResult[73] = tmp73;
                                tmp71 = tmp73;
                              }
                            }
                          }
                          const obj16 = { variant: str, color: str2, children: tmp20 };
                          const tmp70 = closure_9(tmp13, obj16);
                          cResult[65] = tmp13;
                          cResult[66] = str;
                          cResult[67] = str2;
                          cResult[68] = tmp20;
                          cResult[69] = tmp70;
                          tmp68 = tmp70;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    let tmp26 = closure_8(currentTier);
    if (cResult[30] !== nextTier) {
      const tmp25Result = closure_8(nextTier);
      cResult[30] = nextTier;
      cResult[31] = tmp25Result;
      let tmp27 = tmp25Result;
    } else {
      tmp27 = cResult[31];
    }
    if (cResult[32] === badgeProgress) {
      if (cResult[33] === currentTier) {
        if (cResult[34] === nextTier) {
          let tmp29 = cResult[35];
        }
        if (cResult[36] !== currentTier) {
          let giftingBadgeTierIconUrl = tmp(10505).getGiftingBadgeTierIconUrl(currentTier);
          cResult[36] = currentTier;
          cResult[37] = giftingBadgeTierIconUrl;
          let tmp31 = giftingBadgeTierIconUrl;
          const tmpResult4 = tmp(10505);
        } else {
          tmp31 = cResult[37];
        }
        if (cResult[38] !== nextTier) {
          const giftingBadgeTierIconUrl1 = tmp(10505).getGiftingBadgeTierIconUrl(nextTier);
          cResult[38] = nextTier;
          cResult[39] = giftingBadgeTierIconUrl1;
          let tmp33 = giftingBadgeTierIconUrl1;
          const tmpResult5 = tmp(10505);
        } else {
          tmp33 = cResult[39];
        }
        if (null != nextTier) {
          if (cResult[40] === giftsRemaining) {
            let name;
            if (nextTier != null) {
              name = nextTier.name;
            }
          }
          const intl2 = tmp(1125).intl;
          const obj17 = { count: giftsRemaining, nextTier: null };
          let str4;
          if (nextTier != null) {
            str4 = nextTier.name;
          }
          if (str4 == null) {
            str4 = "";
          }
          obj17.nextTier = str4;
          const formatToPlainStringResult = intl2.formatToPlainString(tmp7(2631).XTX3OO, obj17);
          cResult[40] = giftsRemaining;
          let name1;
          if (nextTier != null) {
            name1 = nextTier.name;
          }
          cResult[41] = name1;
          cResult[42] = formatToPlainStringResult;
        } else {
          let name2;
          if (currentTier != null) {
            name2 = currentTier.name;
          }
          if (cResult[43] !== name2) {
            let intl = tmp(1125).intl;
            let str3;
            if (currentTier != null) {
              str3 = currentTier.name;
            }
            if (str3 == null) {
              str3 = "";
            }
            const obj18 = { currentTier: str3 };
            const formatToPlainStringResult1 = intl.formatToPlainString(tmp7(2631).LnsdbK, obj18);
            let name3;
            if (currentTier != null) {
              name3 = currentTier.name;
            }
            cResult[43] = name3;
            cResult[44] = formatToPlainStringResult1;
            let tmp37 = formatToPlainStringResult1;
          } else {
            tmp37 = cResult[44];
          }
          ({ wrapper, progressContainer } = tmp4);
          if (cResult[45] !== tmp31) {
            let tmp47 = null != tmp31;
            if (tmp47) {
              const obj19 = { icon: tmp31, size: 36, style: { margin: 4 } };
              tmp47 = closure_9(tmp7(10508), obj19);
            }
            cResult[45] = tmp31;
            cResult[46] = tmp47;
            let tmp46 = tmp47;
          } else {
            tmp46 = cResult[46];
          }
          if (cResult[47] === tmp4.progressTitleText) {
            if (cResult[48] === tmp37) {
              let tmp49 = cResult[49];
            }
            if (cResult[50] !== tmp33) {
              let tmp53 = null != tmp33;
              if (tmp53) {
                const obj20 = { icon: tmp33, size: 36, style: { margin: 4 } };
                tmp53 = closure_9(tmp7(10508), obj20);
              }
              cResult[50] = tmp33;
              cResult[51] = tmp53;
              let tmp52 = tmp53;
            } else {
              tmp52 = cResult[51];
            }
            if (cResult[52] === tmp4.progressRow) {
              if (cResult[53] === tmp46) {
                if (cResult[54] === tmp49) {
                  if (cResult[55] === tmp52) {
                    let tmp55 = cResult[56];
                  }
                  const progressBarContainer = tmp4.progressBarContainer;
                  const _HermesInternal = HermesInternal;
                  const combined = "" + tmp29 + "%";
                  if (cResult[57] !== combined) {
                    const obj21 = { width: combined };
                    cResult[57] = combined;
                    cResult[58] = obj21;
                    let tmp59 = obj21;
                  } else {
                    tmp59 = cResult[58];
                  }
                  if (cResult[59] === tmp4.progressBarFill) {
                    if (cResult[60] === tmp59) {
                      let tmp60 = cResult[61];
                    }
                    if (cResult[62] === tmp4.progressBarTrack) {
                      if (cResult[63] === tmp60) {
                        let tmp63 = cResult[64];
                      }
                      const progressLabels = tmp4.progressLabels;
                      const Text = tmp(5235).Text;
                      const intl3 = tmp(1125).intl;
                      let tmp66 = tmp26;
                      if (null != nextTier) {
                        tmp66 = tmp27;
                      }
                      const obj22 = { threshold: tmp66, count: null };
                      if (null != nextTier) {
                        tmp26 = badgeProgress;
                      }
                      obj22.count = tmp26;
                      const formatResult = intl3.format(tmp7(2631).iIpfQe, obj22);
                      cResult[4] = badgeProgress;
                      cResult[5] = currentTier;
                      cResult[6] = giftsRemaining;
                      cResult[7] = nextTier;
                      cResult[8] = tmp4.progressBarContainer;
                      cResult[9] = tmp4.progressBarFill;
                      cResult[10] = tmp4.progressBarTrack;
                      cResult[11] = tmp4.progressContainer;
                      cResult[12] = tmp4.progressLabels;
                      cResult[13] = tmp4.progressRow;
                      cResult[14] = tmp4.progressTitleText;
                      cResult[15] = tmp4.wrapper;
                      cResult[16] = Text;
                      cResult[17] = closure_6;
                      cResult[18] = closure_6;
                      cResult[19] = closure_6;
                      cResult[20] = closure_6;
                      cResult[21] = tmp55;
                      cResult[22] = wrapper;
                      cResult[23] = "text-xs/normal";
                      cResult[24] = "text-subtle";
                      cResult[25] = formatResult;
                      cResult[26] = progressLabels;
                      cResult[27] = progressBarContainer;
                      cResult[28] = tmp63;
                      cResult[29] = progressContainer;
                      tmp24 = progressContainer;
                      tmp23 = tmp63;
                      tmp22 = progressBarContainer;
                      tmp21 = progressLabels;
                      tmp20 = formatResult;
                      str2 = "text-subtle";
                      str = "text-xs/normal";
                      tmp19 = wrapper;
                      tmp18 = tmp55;
                      tmp17 = closure_6;
                      tmp16 = closure_6;
                      tmp15 = closure_6;
                      tmp14 = closure_6;
                      tmp13 = Text;
                    }
                    const obj23 = { style: tmp4.progressBarTrack, children: tmp60 };
                    const tmp65 = closure_9(closure_6, obj23);
                    cResult[62] = tmp4.progressBarTrack;
                    cResult[63] = tmp60;
                    cResult[64] = tmp65;
                    tmp63 = tmp65;
                  }
                  const obj24 = { style: null };
                  const items6 = [tmp4.progressBarFill, tmp59];
                  obj24.style = items6;
                  const tmp62 = closure_9(closure_6, obj24);
                  cResult[59] = tmp4.progressBarFill;
                  cResult[60] = tmp59;
                  cResult[61] = tmp62;
                  tmp60 = tmp62;
                }
              }
            }
            const obj25 = { style: tmp4.progressRow, children: null };
            const items7 = [tmp46, tmp49, tmp52];
            obj25.children = items7;
            const tmp57 = closure_10(closure_6, obj25);
            cResult[52] = tmp4.progressRow;
            cResult[53] = tmp46;
            cResult[54] = tmp49;
            cResult[55] = tmp52;
            cResult[56] = tmp57;
            tmp55 = tmp57;
          }
          const obj26 = { style: tmp4.progressTitleText, variant: "text-md/medium", color: "text-strong", children: tmp37 };
          const tmp51 = closure_9(tmp(5235).Text, obj26);
          cResult[47] = tmp4.progressTitleText;
          cResult[48] = tmp37;
          cResult[49] = tmp51;
          tmp49 = tmp51;
        }
      }
    }
    const giftingBadgeProgressPercent = tmp(10505).getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier);
    cResult[32] = badgeProgress;
    cResult[33] = currentTier;
    cResult[34] = nextTier;
    cResult[35] = giftingBadgeProgressPercent;
    tmp29 = giftingBadgeProgressPercent;
    const tmpResult6 = tmp(10505);
  }
  let tmpResult = analyticsLocation(504);
}) : (function UserSettingsGiftingBadgeProgress(analyticsLocation) {
  analyticsLocation = analyticsLocation.analyticsLocation;
  dependencyMap = undefined;
  let analyticsLocations;
  currentTier = undefined;
  const tmp = closure_12();
  importDefault = tmp;
  [tmp3, c2] = analyticsLocations(currentTier.useState(false), 2);
  const tmp2 = analyticsLocations(currentTier.useState(false), 2);
  analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  let items = [BadgeDirectoryStore];
  const stateFromStoresObject = analyticsLocation(504).useStateFromStoresObject(items, () => {
    singleRequirementProgress = singleRequirementProgress.getSingleRequirementProgress(analyticsLocation(_undefined[11]).BadgeId.GIFTING);
    let num;
    if (singleRequirementProgress != null) {
      num = singleRequirementProgress.current;
    }
    if (num == null) {
      num = 0;
    }
    const obj2 = { badgeProgress: num, currentTier: singleRequirementProgress.getCurrentTier(analyticsLocation(_undefined[11]).BadgeId.GIFTING), nextTier: singleRequirementProgress.getNextTier(analyticsLocation(_undefined[11]).BadgeId.GIFTING), giftsRemaining: singleRequirementProgress.getRemainingToNextTier(analyticsLocation(_undefined[11]).BadgeId.GIFTING), tiers: null };
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
  ({ nextTier, tiers } = stateFromStoresObject);
  if (0 === badgeProgress) {
    let obj2 = { analyticsLocation };
    return closure_9(closure_13, obj2);
  } else {
    let tmp19 = closure_8(currentTier);
    const tmp25 = closure_8(nextTier);
    const giftingBadgeProgressPercent = tmp7(10505).getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier);
    const tmp7Result = tmp7(10505);
    let giftingBadgeTierIconUrl = tmp7(10505).getGiftingBadgeTierIconUrl(currentTier);
    const tmp7Result3 = tmp7(10505);
    const giftingBadgeTierIconUrl1 = tmp7(10505).getGiftingBadgeTierIconUrl(nextTier);
    if (null != nextTier) {
      const intl2 = tmp7(1125).intl;
      let obj3 = { count: tmp9, nextTier: null };
      let str2;
      if (nextTier != null) {
        str2 = nextTier.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      obj3.nextTier = str2;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp4(2631).XTX3OO, obj3);
    } else {
      let intl = tmp7(1125).intl;
      let str;
      if (currentTier != null) {
        str = currentTier.name;
      }
      if (str == null) {
        str = "";
      }
      let obj4 = { currentTier: str };
      formatToPlainStringResult = intl.formatToPlainString(tmp4(2631).LnsdbK, obj4);
    }
    let obj5 = { style: tmp.wrapper, children: null };
    const obj6 = { style: tmp.progressContainer, children: null };
    const obj7 = { style: tmp.progressRow, children: null };
    let tmp13 = null != giftingBadgeTierIconUrl;
    if (tmp13) {
      const obj8 = { icon: giftingBadgeTierIconUrl, size: 36, style: { margin: 4 } };
      tmp13 = closure_9(tmp4(10508), obj8);
    }
    let items1 = [tmp13, , ];
    const obj9 = { style: tmp.progressTitleText, variant: "text-md/medium", color: "text-strong", children: formatToPlainStringResult };
    items1[1] = closure_9(tmp7(5235).Text, obj9);
    let tmp15Result = null != giftingBadgeTierIconUrl1;
    if (tmp15Result) {
      const obj10 = { icon: giftingBadgeTierIconUrl1, size: 36, style: { margin: 4 } };
      tmp15Result = closure_9(tmp4(10508), obj10);
    }
    items1[2] = tmp15Result;
    obj7.children = items1;
    let items2 = [closure_10(closure_6, obj7), ];
    const obj11 = { style: tmp.progressBarContainer, children: null };
    const obj12 = { style: tmp.progressBarTrack, children: null };
    const obj13 = { style: null };
    const items3 = [tmp.progressBarFill, ];
    const obj14 = { width: null };
    const _HermesInternal = HermesInternal;
    obj14.width = "" + giftingBadgeProgressPercent + "%";
    items3[1] = obj14;
    obj13.style = items3;
    obj12.children = closure_9(closure_6, obj13);
    const items4 = [closure_9(closure_6, obj12), ];
    const obj15 = { style: tmp.progressLabels, children: null };
    const intl3 = tmp7(1125).intl;
    let tmp18 = tmp19;
    if (null != nextTier) {
      tmp18 = tmp25;
    }
    const obj16 = { threshold: tmp18, count: null };
    if (null != nextTier) {
      tmp19 = badgeProgress;
    }
    const obj17 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    obj16.count = tmp19;
    obj17.children = intl3.format(tmp4(2631).iIpfQe, obj16);
    obj15.children = closure_9(tmp7(5235).Text, obj17);
    items4[1] = closure_9(closure_6, obj15);
    obj11.children = items4;
    items2[1] = closure_10(closure_6, obj11);
    obj6.children = items2;
    const items5 = [closure_10(closure_6, obj6), , , , ];
    const obj18 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
    const obj19 = { size: "sm", color: tmp4(587).unsafe_rawColors.WHITE };
    obj18.icon = closure_9(tmp7(12897).GiftIcon, obj19);
    const intl4 = tmp7(1125).intl;
    obj18.text = intl4.string(tmp4(2631).DZnomS);
    obj18.onPress = function onPress() {
      utils_openGiftModal.openGiftModal({ analyticsLocation, analyticsLocations });
    };
    items5[1] = closure_9(tmp7(5245).Button, obj18);
    const obj20 = { style: tmp.divider };
    items5[2] = closure_9(closure_6, obj20);
    const obj21 = {
      style: tmp.dropdownRow,
      onPress() {
          return _undefined((arg0) => !arg0);
        },
      children: null
    };
    const obj22 = { variant: "text-sm/medium", color: "text-strong", children: null };
    const intl5 = tmp7(1125).intl;
    obj22.children = intl5.string(tmp4(2631).WZ4cXA);
    const items6 = [closure_9(tmp7(5235).Text, obj22), ];
    if (tmp11Result) {
      let ChevronSmallDownIcon = tmp7(14921).ChevronSmallUpIcon;
    } else {
      ChevronSmallDownIcon = tmp7(11083).ChevronSmallDownIcon;
    }
    const obj23 = { color: tmp4(587).colors.INTERACTIVE_ICON_DEFAULT };
    items6[1] = closure_9(ChevronSmallDownIcon, obj23);
    obj21.children = items6;
    items5[3] = closure_10(closure_5, obj21);
    if (tmp11Result) {
      const obj24 = { children: null };
      const obj25 = {
        style: tmp.badgesRow,
        children: tiers.map((key) => {
              const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(key);
              const items = [badgeItem.badgeItem, ];
              key = undefined;
              if (currentTier != null) {
                key = currentTier.key;
              }
              const obj2 = { style: items, children: null };
              items[1] = key.key === key && badgeItem.badgeItemActive;
              let tmp9 = null != giftingBadgeTierIconUrl;
              if (tmp9) {
                const obj3 = { icon: giftingBadgeTierIconUrl, size: 36 };
                tmp9 = React6(GiftingBadgeIconDefault, obj3);
              }
              const items1 = [tmp9, ];
              const obj4 = { style: badgeItem.badgeCopy, accessible: true, accessibilityLabel: null, children: null };
              const tmp8 = key.key === key && badgeItem.badgeItemActive;
              obj4.accessibilityLabel = GiftingBadgesUtils.getGiftingBadgeAccessibilityLabel(key);
              let str = key.name;
              if (str == null) {
                str = "";
              }
              const items2 = [React6(Text_Text.Text, { variant: "text-sm/semibold", color: "text-strong", children: str }), ];
              const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: null };
              const intl = util.intl;
              const tmpResult = GiftingBadgesUtils;
              obj5.children = intl.format(_modDef2631.qvx9E4, { count: closure_8(key) });
              items2[1] = React6(Text_Text.Text, obj5);
              obj4.children = items2;
              items1[1] = v65535(timestampProducer, obj4);
              obj2.children = items1;
              return v65535(timestampProducer, obj2, key.key);
            })
      };
      const items7 = [closure_9(closure_6, obj25), ];
      const obj26 = { style: tmp.footerText, variant: "text-xs/normal", color: "text-muted", children: null };
      const intl6 = tmp7(1125).intl;
      obj26.children = intl6.string(tmp4(2631)["4Yp0mI"]);
      items7[1] = closure_9(tmp7(5235).Text, obj26);
      obj24.children = items7;
      tmp11Result = closure_10(closure_11, obj24);
    }
    items5[4] = tmp11Result;
    obj5.children = items5;
    return closure_10(closure_6, obj5);
  }
  let obj = analyticsLocation(504);
});