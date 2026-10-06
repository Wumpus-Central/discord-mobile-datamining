// === Module 13397: UserSettingsGiftingBadgeProgress ===

// Module 13397 (UserSettingsGiftingBadgeProgress)
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import _modDef2617 from "module_2617" /* 2617 */;
import Text_Text from "Text/Text" /* 4892 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6664 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import BadgeDirectoryStore2 from "BadgeDirectoryStore" /* 7874 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10405 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10488 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10494 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const BadgeDirectoryStore = BadgeDirectoryStore2;
let analyticsLocation, dependencyMap, importDefault, singleRequirementProgress;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
let closure_8 = BadgeDirectoryStore2.getSingleRequirementThreshold;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
const UserSettingsGiftingBadgeProgress = "UserSettingsGiftingBadgeProgress";
let closure_13 = createStyles.createStyles(() => {
  const obj = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, progressContainer: { gap: nativeDefault.space.PX_8 }, progressRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, progressTitleText: { flex: 1 }, progressBarContainer: { paddingHorizontal: nativeDefault.space.PX_8 }, progressBarTrack: { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" }, progressBarFill: { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500 }, progressLabels: { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_4 }, divider: { height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL }, dropdownRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, badgesRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: nativeDefault.space.PX_4 }, badgeItem: { width: "33.33%", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, badgeItemActive: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED }, badgeCopy: { alignItems: "center", gap: 2 }, footerText: { textAlign: "center", marginBottom: nativeDefault.space.PX_16 }, introContent: { paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 }, introGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 }, introGridItem: { width: "33.33%", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 });
  ({ gap: nativeDefault.space.PX_8 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
  ({ paddingHorizontal: nativeDefault.space.PX_8 });
  ({ height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" });
  ({ height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500 });
  ({ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_4 });
  ({ height: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL });
  ({ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: nativeDefault.space.PX_4 });
  ({ width: "33.33%", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED });
  ({ textAlign: "center", marginBottom: nativeDefault.space.PX_16 });
  ({ paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 });
  ({ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 });
  ({ width: "33.33%", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((analyticsLocation) => {
  let intl;
  let introGridItem;
  let isGiftingBadgeComplexArtEnabled;
  let items1;
  let tmp8;
  let tmp9;
  let obj = analyticsLocation(isGiftingBadgeComplexArtEnabled[8]);
  const cResult = obj.c(27);
  analyticsLocation = analyticsLocation.analyticsLocation;
  const tmp4 = closure_13();
  importDefault = tmp4;
  let obj2 = analyticsLocation(isGiftingBadgeComplexArtEnabled[9]);
  isGiftingBadgeComplexArtEnabled = obj2.useIsGiftingBadgeComplexArtEnabled(UserSettingsGiftingBadgeProgress);
  let tmp7 = require("useAnalyticsLocations");
  const analyticsLocations = tmp7(require("AnalyticsLocation").USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [BadgeDirectoryStore];
    const fn = function o() {
      badgeById = badgeById.getBadgeById(analyticsLocation(isGiftingBadgeComplexArtEnabled[12]).BadgeId.GIFTING);
      let tiers;
      if (badgeById != null) {
        tiers = badgeById.tiers;
      }
      return tiers;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  let tmpResult = tmp(tmp2[13]);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp11;
    let tmp14;
    let tmp19;
    const _Symbol2 = Symbol;
    const wrapper = tmp4.wrapper;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      let obj3 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(require("module_2617")["4Yp0mI"]) };
      let Text = tmp(tmp2[14]).Text;
      intl = tmp(tmp2[15]).intl;
      const tmp13 = closure_9(Text, obj3);
      cResult[2] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[2];
    }
    if (cResult[3] !== tmp4.introContent) {
      let obj4 = { style: tmp4.introContent, children: tmp11 };
      const tmp17 = closure_9(closure_6, obj4);
      cResult[3] = tmp4.introContent;
      cResult[4] = tmp17;
      tmp14 = tmp17;
    } else {
      tmp14 = cResult[4];
    }
    if (cResult[5] === isGiftingBadgeComplexArtEnabled) {
      if (cResult[6] === tmp4.badgeCopy) {
        if (cResult[7] === tmp4.introGridItem) {
          if (cResult[8] === stateFromStores) {
            tmp19 = cResult[9];
          }
          if (cResult[14] === tmp4.introGrid) {
            let tmp22;
            let tmp27;
            let tmp26;
            if (cResult[15] === tmp19) {
              tmp22 = cResult[16];
            }
            const _Symbol = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              let obj5 = { size: "sm", color: require("native").unsafe_rawColors.WHITE };
              const GiftIcon = tmp(tmp2[18]).GiftIcon;
              const tmp29 = closure_9(GiftIcon, obj5);
              const intl2 = tmp(tmp2[15]).intl;
              const stringResult = intl2.string(require("module_2617").DZnomS);
              cResult[17] = stringResult;
              cResult[18] = tmp29;
              tmp27 = tmp29;
              tmp26 = stringResult;
            } else {
              tmp26 = cResult[17];
              tmp27 = cResult[18];
            }
            if (cResult[19] === analyticsLocation) {
              let tmp31;
              if (cResult[20] === analyticsLocations) {
                tmp31 = cResult[21];
              }
              if (cResult[22] === tmp4.wrapper) {
                if (cResult[23] === tmp31) {
                  if (cResult[24] === tmp14) {
                    let tmp34;
                    if (cResult[25] === tmp22) {
                      tmp34 = cResult[26];
                    }
                    return tmp34;
                  }
                }
              }
              let obj6 = { style: wrapper, children: items1 };
              items1 = [tmp14, tmp22, tmp31];
              const tmp37 = closure_10(closure_6, obj6);
              cResult[22] = tmp4.wrapper;
              cResult[23] = tmp31;
              cResult[24] = tmp14;
              cResult[25] = tmp22;
              cResult[26] = tmp37;
              tmp34 = tmp37;
            }
            const obj7 = {
              variant: "primary",
              icon: tmp27,
              text: tmp26,
              onPress() {
                          const obj = utils_openGiftModal;
                          const obj2 = { analyticsLocation, analyticsLocations };
                          obj.openGiftModal(obj2);
                        },
              grow: true
            };
            const tmp33 = closure_9(analyticsLocation(isGiftingBadgeComplexArtEnabled[19]).Button, obj7);
            cResult[19] = analyticsLocation;
            cResult[20] = analyticsLocations;
            cResult[21] = tmp33;
            tmp31 = tmp33;
          }
          const obj8 = { style: tmp18, children: tmp19 };
          const tmp25 = closure_9(closure_6, obj8);
          cResult[14] = tmp4.introGrid;
          cResult[15] = tmp19;
          cResult[16] = tmp25;
          tmp22 = tmp25;
        }
      }
    }
    if (cResult[10] === isGiftingBadgeComplexArtEnabled) {
      if (cResult[11] === tmp4.badgeCopy) {
        let tmp20;
        if (cResult[12] === tmp4.introGridItem) {
          tmp20 = cResult[13];
        }
        const mapped = stateFromStores.map(tmp20);
        cResult[5] = isGiftingBadgeComplexArtEnabled;
        cResult[6] = tmp4.badgeCopy;
        cResult[7] = tmp4.introGridItem;
        cResult[8] = stateFromStores;
        cResult[9] = mapped;
        tmp19 = mapped;
      }
    }
    const fn2 = function w(name) {
      let format;
      let items;
      let items1;
      let obj6;
      let qvx9E4;
      let tmpResult;
      const obj = GiftingBadgesUtils;
      const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(name, isGiftingBadgeComplexArtEnabled);
      let tmp7 = null != giftingBadgeTierIconUrl;
      const obj2 = { style: introGridItem.introGridItem, children: items };
      if (tmp7) {
        const obj3 = { icon: giftingBadgeTierIconUrl, size: 44 };
        tmp7 = React4(GiftingBadgeIconDefault, obj3);
      }
      items = [tmp7, ];
      const obj4 = { style: introGridItem.badgeCopy, accessible: true, accessibilityLabel: tmpResult.getGiftingBadgeAccessibilityLabel(name), children: items1 };
      let str = name.name;
      tmpResult = GiftingBadgesUtils;
      const Text = Text_Text.Text;
      if (str == null) {
        str = "";
      }
      items1 = [React4(Text, { variant: "text-sm/semibold", color: "text-subtle", children: str }), ];
      const obj5 = { variant: "text-xs/normal", color: "text-muted", children: format(qvx9E4, obj6) };
      const Text2 = Text_Text.Text;
      const intl = intl7.intl;
      format = intl.format;
      obj6 = { count: closure_8(name) };
      qvx9E4 = _modDef2617.qvx9E4;
      items1[1] = React4(Text2, obj5);
      items[1] = authStore(metroRequire, obj4);
      return authStore(metroRequire, obj2, name.key);
    };
    cResult[10] = isGiftingBadgeComplexArtEnabled;
    cResult[11] = tmp4.badgeCopy;
    cResult[12] = tmp4.introGridItem;
    cResult[13] = fn2;
    tmp20 = fn2;
  }
}) : ((analyticsLocation) => {
  let GiftIcon;
  let Text;
  let closure_2;
  let intl;
  let intl2;
  let introGridItem;
  let items1;
  let obj5;
  let obj8;
  analyticsLocation = analyticsLocation.analyticsLocation;
  const tmp = closure_13();
  importDefault = tmp;
  let obj = analyticsLocation(10488);
  dependencyMap = obj.useIsGiftingBadgeComplexArtEnabled(UserSettingsGiftingBadgeProgress);
  const tmp5 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp5(AnalyticsLocationDefault.USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  let obj2 = analyticsLocation(504);
  let items = [BadgeDirectoryStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    badgeById = badgeById.getBadgeById(analyticsLocation(closure_2[12]).BadgeId.GIFTING);
    let tiers;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    return tiers;
  });
  let tmp6 = null;
  if (null != stateFromStores) {
    let obj3 = { style: tmp.wrapper, children: items1 };
    let obj4 = { style: tmp.introContent, children: closure_9(Text, obj5) };
    obj5 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(_modDef2617["4Yp0mI"]) };
    Text = tmp2(4892).Text;
    intl = tmp2(1126).intl;
    items1 = [closure_9(closure_6, obj4), , ];
    let obj6 = {
      style: tmp.introGrid,
      children: stateFromStores.map((name) => {
          let format;
          let items;
          let items1;
          let obj6;
          let qvx9E4;
          let tmpResult;
          const obj = GiftingBadgesUtils;
          const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(name, closure_2);
          let tmp7 = null != giftingBadgeTierIconUrl;
          const obj2 = { style: introGridItem.introGridItem, children: items };
          if (tmp7) {
            const obj3 = { icon: giftingBadgeTierIconUrl, size: 44 };
            tmp7 = React4(GiftingBadgeIconDefault, obj3);
          }
          items = [tmp7, ];
          const obj4 = { style: introGridItem.badgeCopy, accessible: true, accessibilityLabel: tmpResult.getGiftingBadgeAccessibilityLabel(name), children: items1 };
          let str = name.name;
          tmpResult = GiftingBadgesUtils;
          const Text = Text_Text.Text;
          if (str == null) {
            str = "";
          }
          items1 = [React4(Text, { variant: "text-sm/semibold", color: "text-subtle", children: str }), ];
          const obj5 = { variant: "text-xs/normal", color: "text-muted", children: format(qvx9E4, obj6) };
          const Text2 = Text_Text.Text;
          const intl = intl7.intl;
          format = intl.format;
          obj6 = { count: closure_8(name) };
          qvx9E4 = _modDef2617.qvx9E4;
          items1[1] = React4(Text2, obj5);
          items[1] = authStore(metroRequire, obj4);
          return authStore(metroRequire, obj2, name.key);
        })
    };
    items1[1] = closure_9(closure_6, obj6);
    const obj7 = {
      variant: "primary",
      icon: closure_9(GiftIcon, obj8),
      text: intl2.string(_modDef2617.DZnomS),
      onPress() {
          const obj = utils_openGiftModal;
          const obj2 = { analyticsLocation, analyticsLocations };
          obj.openGiftModal(obj2);
        },
      grow: true
    };
    const Button = tmp2(5601).Button;
    obj8 = { size: "sm", color: nativeDefault.unsafe_rawColors.WHITE };
    GiftIcon = tmp2(10779).GiftIcon;
    intl2 = tmp2(1126).intl;
    items1[2] = closure_9(Button, obj7);
    tmp6 = closure_10(closure_6, obj3);
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((analyticsLocation) => {
  let analyticsLocations;
  let badgeItem;
  let badgeProgress;
  let currentTier;
  let giftsRemaining;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let nextTier;
  let tiers;
  let tmp10;
  let tmp6;
  let tmp9;
  let obj = analyticsLocation(576);
  const cResult = obj.c(119);
  analyticsLocation = analyticsLocation.analyticsLocation;
  const tmp4 = closure_13();
  importDefault = tmp4;
  [tmp6, dependencyMap] = analyticsLocations(currentTier.useState(false), 2);
  analyticsLocations(currentTier.useState(false), 2);
  let tmp8 = useAnalyticsLocationsDefault;
  analyticsLocations = tmp8(AnalyticsLocationDefault.USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [BadgeDirectoryStore];
    const fn = function h() {
      let tiers;
      singleRequirementProgress = singleRequirementProgress.getSingleRequirementProgress(analyticsLocation(dependencyMap[12]).BadgeId.GIFTING);
      let num;
      if (singleRequirementProgress != null) {
        num = singleRequirementProgress.current;
      }
      if (num == null) {
        num = 0;
      }
      const obj2 = { badgeProgress: num, currentTier: singleRequirementProgress.getCurrentTier(analyticsLocation(dependencyMap[12]).BadgeId.GIFTING), nextTier: singleRequirementProgress.getNextTier(analyticsLocation(dependencyMap[12]).BadgeId.GIFTING), giftsRemaining: singleRequirementProgress.getRemainingToNextTier(analyticsLocation(dependencyMap[12]).BadgeId.GIFTING), tiers };
      const badgeById = obj.getBadgeById(analyticsLocation(dependencyMap[12]).BadgeId.GIFTING);
      tiers = undefined;
      if (badgeById != null) {
        tiers = badgeById.tiers;
      }
      if (tiers == null) {
        tiers = [];
      }
      return obj2;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp9 = items;
    tmp10 = fn;
  } else {
    [tmp9, tmp10] = cResult;
  }
  let tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp9, tmp10);
  ({ badgeProgress, currentTier } = stateFromStoresObject);
  ({ nextTier, giftsRemaining, tiers } = stateFromStoresObject);
  const tmpResult3 = analyticsLocation(10488);
  const isGiftingBadgeComplexArtEnabled = tmpResult3.useIsGiftingBadgeComplexArtEnabled(UserSettingsGiftingBadgeProgress);
  if (0 === badgeProgress) {
    let tmp78;
    if (cResult[2] !== analyticsLocation) {
      let obj2 = { analyticsLocation };
      const tmp81 = closure_9(closure_14, obj2);
      cResult[2] = analyticsLocation;
      cResult[3] = tmp81;
      tmp78 = tmp81;
    } else {
      tmp78 = cResult[3];
    }
    return tmp78;
  } else {
    if (cResult[4] === badgeProgress) {
      if (cResult[5] === currentTier) {
        if (cResult[6] === giftsRemaining) {
          if (cResult[7] === isGiftingBadgeComplexArtEnabled) {
            if (cResult[8] === nextTier) {
              if (cResult[9] === tmp4.progressBarContainer) {
                if (cResult[10] === tmp4.progressBarFill) {
                  if (cResult[11] === tmp4.progressBarTrack) {
                    if (cResult[12] === tmp4.progressContainer) {
                      if (cResult[13] === tmp4.progressLabels) {
                        if (cResult[14] === tmp4.progressRow) {
                          if (cResult[15] === tmp4.progressTitleText) {
                            if (cResult[68] === tmp14) {
                              if (cResult[69] === tmp21) {
                                if (cResult[70] === tmp22) {
                                  let tmp34;
                                  if (cResult[71] === tmp23) {
                                    tmp34 = cResult[72];
                                  }
                                  if (cResult[73] === tmp15) {
                                    if (cResult[74] === tmp34) {
                                      let tmp37;
                                      if (cResult[75] === tmp24) {
                                        tmp37 = cResult[76];
                                      }
                                      if (cResult[77] === tmp16) {
                                        if (cResult[78] === tmp37) {
                                          if (cResult[79] === tmp25) {
                                            let tmp40;
                                            if (cResult[80] === tmp26) {
                                              tmp40 = cResult[81];
                                            }
                                            if (cResult[82] === tmp17) {
                                              if (cResult[83] === tmp19) {
                                                if (cResult[84] === tmp40) {
                                                  let tmp47;
                                                  let tmp46;
                                                  const _Symbol = Symbol;
                                                  if (cResult[87] === Symbol.for("react.memo_cache_sentinel")) {
                                                    let obj3 = { size: "sm", color: nativeDefault.unsafe_rawColors.WHITE };
                                                    const GiftIcon = tmp(10779).GiftIcon;
                                                    const tmp49 = closure_9(GiftIcon, obj3);
                                                    let intl = tmp(1126).intl;
                                                    const stringResult = intl.string(_modDef2617.DZnomS);
                                                    cResult[87] = tmp49;
                                                    cResult[88] = stringResult;
                                                    tmp47 = stringResult;
                                                    tmp46 = tmp49;
                                                  } else {
                                                    tmp46 = cResult[87];
                                                    tmp47 = cResult[88];
                                                  }
                                                  if (cResult[89] === analyticsLocation) {
                                                    let tmp59;
                                                    if (cResult[92] !== tmp4.divider) {
                                                      let obj4 = { style: tmp4.divider };
                                                      cResult[92] = tmp4.divider;
                                                      cResult[93] = closure_9(closure_6, obj4);
                                                      const tmp57 = closure_9(closure_6, obj4);
                                                    }
                                                    const _Symbol2 = Symbol;
                                                    if (cResult[94] === Symbol.for("react.memo_cache_sentinel")) {
                                                      class J {
                                                        constructor() {
                                                          return closure_2((arg0) => !arg0);
                                                        }
                                                      }
                                                      cResult[94] = J;
                                                    } else {
                                                      class J {
                                                        constructor() {
                                                          return closure_2((arg0) => !arg0);
                                                        }
                                                      }
                                                    }
                                                    const _Symbol3 = Symbol;
                                                    if (cResult[95] === Symbol.for("react.memo_cache_sentinel")) {
                                                      class J {
                                                        constructor() {
                                                          return closure_2((arg0) => !arg0);
                                                        }
                                                      }
                                                      let obj5 = { variant: "text-sm/medium", color: "text-strong", children: intl2.string(_modDef2617.WZ4cXA) };
                                                      let Text = tmp(4892).Text;
                                                      intl2 = tmp(1126).intl;
                                                      const tmp60 = closure_9(Text, obj5);
                                                      cResult[95] = tmp60;
                                                      tmp59 = tmp60;
                                                    } else {
                                                      class J {
                                                        constructor() {
                                                          return closure_2((arg0) => !arg0);
                                                        }
                                                      }
                                                    }
                                                    if (cResult[96] !== tmp6) {
                                                      class J {
                                                        constructor() {
                                                          return closure_2((arg0) => !arg0);
                                                        }
                                                      }
                                                      if (tmp6) {
                                                        class J {
                                                          constructor() {
                                                            return closure_2((arg0) => !arg0);
                                                          }
                                                        }
                                                      } else {
                                                        class J {
                                                          constructor() {
                                                            return closure_2((arg0) => !arg0);
                                                          }
                                                        }
                                                      }
                                                      let obj6 = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
                                                      cResult[96] = tmp6;
                                                      cResult[97] = tmp62(tmp63, obj6);
                                                      const tmp62Result = tmp62(tmp63, obj6);
                                                    } else {
                                                      class J {
                                                        constructor() {
                                                          return closure_2((arg0) => !arg0);
                                                        }
                                                      }
                                                    }
                                                    if (cResult[98] === tmp4.dropdownRow) {
                                                      class J {
                                                        constructor() {
                                                          return closure_2((arg0) => !arg0);
                                                        }
                                                      }
                                                      const tmp69 = cResult[101];
                                                      if (currentTier != null) {
                                                        class J {
                                                          constructor() {
                                                            return closure_2((arg0) => !arg0);
                                                          }
                                                        }
                                                      }
                                                      if (tmp69 === undefined) {
                                                        class J {
                                                          constructor() {
                                                            return closure_2((arg0) => !arg0);
                                                          }
                                                        }
                                                      }
                                                      let tmp73 = tmp6;
                                                      if (tmp73) {
                                                        class J {
                                                          constructor() {
                                                            return closure_2((arg0) => !arg0);
                                                          }
                                                        }
                                                        const obj7 = { children: items1 };
                                                        const obj8 = {
                                                          style: tmp4.badgesRow,
                                                          children: tiers.map((key) => {
                                                                                                                  let format;
                                                                                                                  let items1;
                                                                                                                  let items2;
                                                                                                                  let obj6;
                                                                                                                  let qvx9E4;
                                                                                                                  let tmpResult;
                                                                                                                  const obj = GiftingBadgesUtils;
                                                                                                                  const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(key, isGiftingBadgeComplexArtEnabled);
                                                                                                                  const items = [badgeItem.badgeItem, ];
                                                                                                                  let key1;
                                                                                                                  if (currentTier != null) {
                                                                                                                    key1 = currentTier.key;
                                                                                                                  }
                                                                                                                  const obj2 = { style: items, children: items1 };
                                                                                                                  const tmp8 = key.key === key1 && badgeItem.badgeItemActive;
                                                                                                                  items[1] = tmp8;
                                                                                                                  let tmp9 = null != giftingBadgeTierIconUrl;
                                                                                                                  if (tmp9) {
                                                                                                                    const obj3 = { icon: giftingBadgeTierIconUrl, size: 36 };
                                                                                                                    tmp9 = React4(GiftingBadgeIconDefault, obj3);
                                                                                                                  }
                                                                                                                  items1 = [tmp9, ];
                                                                                                                  const obj4 = { style: badgeItem.badgeCopy, accessible: true, accessibilityLabel: tmpResult.getGiftingBadgeAccessibilityLabel(key.key), children: items2 };
                                                                                                                  let str = key.name;
                                                                                                                  tmpResult = GiftingBadgesUtils;
                                                                                                                  const Text = Text_Text.Text;
                                                                                                                  if (str == null) {
                                                                                                                    str = "";
                                                                                                                  }
                                                                                                                  items2 = [React4(Text, { variant: "text-sm/semibold", color: "text-strong", children: str }), ];
                                                                                                                  const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: format(qvx9E4, obj6) };
                                                                                                                  const Text2 = Text_Text.Text;
                                                                                                                  const intl = intl7.intl;
                                                                                                                  format = intl.format;
                                                                                                                  obj6 = { count: closure_8(key.key) };
                                                                                                                  qvx9E4 = _modDef2617.qvx9E4;
                                                                                                                  items2[1] = React4(Text2, obj5);
                                                                                                                  items1[1] = authStore(metroRequire, obj4);
                                                                                                                  return authStore(metroRequire, obj2, key.key.key);
                                                                                                                })
                                                        };
                                                        items1 = [closure_9(closure_6, obj8), ];
                                                        const obj9 = { style: tmp4.footerText, variant: "text-xs/normal", color: "text-muted", children: intl3.string(_modDef2617["4Yp0mI"]) };
                                                        let Text2 = tmp(4892).Text;
                                                        intl3 = tmp(1126).intl;
                                                        items1[1] = closure_9(Text2, obj9);
                                                        tmp73 = closure_10(closure_11, obj7);
                                                      }
                                                      if (currentTier != null) {
                                                        class J {
                                                          constructor() {
                                                            return closure_2((arg0) => !arg0);
                                                          }
                                                        }
                                                      }
                                                      cResult[101] = undefined;
                                                      cResult[102] = tmp6;
                                                      cResult[103] = isGiftingBadgeComplexArtEnabled;
                                                      cResult[104] = tmp4.badgeCopy;
                                                      cResult[105] = tmp4.badgeItem;
                                                      cResult[106] = tmp4.badgeItemActive;
                                                      cResult[107] = tmp4.badgesRow;
                                                      cResult[108] = tmp4.footerText;
                                                      cResult[109] = tiers;
                                                      cResult[110] = tmp73;
                                                    }
                                                    const obj10 = { style: tmp4.dropdownRow, onPress: J, children: items2 };
                                                    items2 = [tmp59, tmp61];
                                                    cResult[98] = tmp4.dropdownRow;
                                                    cResult[99] = tmp61;
                                                    cResult[100] = closure_10(isGiftingBadgeComplexArtEnabled, obj10);
                                                    const tmp68 = closure_10(isGiftingBadgeComplexArtEnabled, obj10);
                                                  }
                                                  const obj11 = {
                                                    variant: "primary",
                                                    icon: tmp46,
                                                    text: tmp47,
                                                    onPress() {
                                                                                                      const obj = utils_openGiftModal;
                                                                                                      const obj2 = { analyticsLocation, analyticsLocations };
                                                                                                      obj.openGiftModal(obj2);
                                                                                                    },
                                                    grow: true
                                                  };
                                                  cResult[89] = analyticsLocation;
                                                  cResult[90] = analyticsLocations;
                                                  cResult[91] = closure_9(analyticsLocation(5601).Button, obj11);
                                                  const tmp53 = closure_9(analyticsLocation(5601).Button, obj11);
                                                }
                                              }
                                            }
                                            const obj12 = { style: tmp27, children: items3 };
                                            items3 = [tmp19, tmp40];
                                            cResult[82] = tmp17;
                                            cResult[83] = tmp19;
                                            cResult[84] = tmp40;
                                            cResult[85] = tmp27;
                                            cResult[86] = closure_10(tmp17, obj12);
                                            const tmp45 = closure_10(tmp17, obj12);
                                          }
                                        }
                                      }
                                      const obj13 = { style: tmp25, children: items4 };
                                      items4 = [tmp26, tmp37];
                                      const tmp42 = closure_10(tmp16, obj13);
                                      cResult[77] = tmp16;
                                      cResult[78] = tmp37;
                                      cResult[79] = tmp25;
                                      cResult[80] = tmp26;
                                      cResult[81] = tmp42;
                                      tmp40 = tmp42;
                                    }
                                  }
                                  const obj14 = { style: tmp24, children: tmp34 };
                                  const tmp39 = closure_9(tmp15, obj14);
                                  cResult[73] = tmp15;
                                  cResult[74] = tmp34;
                                  cResult[75] = tmp24;
                                  cResult[76] = tmp39;
                                  tmp37 = tmp39;
                                }
                              }
                            }
                            const obj15 = { variant: tmp21, color: tmp22, children: tmp23 };
                            const tmp36 = closure_9(tmp14, obj15);
                            cResult[68] = tmp14;
                            cResult[69] = tmp21;
                            cResult[70] = tmp22;
                            cResult[71] = tmp23;
                            cResult[72] = tmp36;
                            tmp34 = tmp36;
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
    }
    closure_8(currentTier);
    if (cResult[31] !== nextTier) {
      class J {
        constructor() {
          return closure_2((arg0) => !arg0);
        }
      }
      cResult[31] = nextTier;
      cResult[32] = tmp31;
    } else {
      class J {
        constructor() {
          return closure_2((arg0) => !arg0);
        }
      }
    }
    if (cResult[33] === badgeProgress) {
      class J {
        constructor() {
          return closure_2((arg0) => !arg0);
        }
      }
    }
    const tmpResult4 = analyticsLocation(10488);
    const giftingBadgeProgressPercent = tmpResult4.getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier);
    cResult[33] = badgeProgress;
    cResult[34] = currentTier;
    cResult[35] = nextTier;
    cResult[36] = giftingBadgeProgressPercent;
  }
}) : ((analyticsLocation) => {
  let GiftIcon;
  let Text;
  let _undefined;
  let badgeItem;
  let badgeProgress;
  let c2;
  let currentTier;
  let giftsRemaining;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let nextTier;
  let obj14;
  let obj18;
  let obj20;
  let str2;
  let tiers;
  let tmp11Result;
  let tmp3;
  analyticsLocation = analyticsLocation.analyticsLocation;
  dependencyMap = undefined;
  let analyticsLocations;
  currentTier = undefined;
  const tmp = closure_13();
  importDefault = tmp;
  [tmp3, c2] = analyticsLocations(currentTier.useState(false), 2);
  analyticsLocations(currentTier.useState(false), 2);
  const tmp6 = useAnalyticsLocationsDefault;
  analyticsLocations = tmp6(AnalyticsLocationDefault.USER_SETTINGS_GIFT_INVENTORY).analyticsLocations;
  let obj = analyticsLocation(504);
  let items = [BadgeDirectoryStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let tiers;
    singleRequirementProgress = singleRequirementProgress.getSingleRequirementProgress(analyticsLocation(c2[12]).BadgeId.GIFTING);
    let num;
    if (singleRequirementProgress != null) {
      num = singleRequirementProgress.current;
    }
    if (num == null) {
      num = 0;
    }
    const obj2 = { badgeProgress: num, currentTier: singleRequirementProgress.getCurrentTier(analyticsLocation(c2[12]).BadgeId.GIFTING), nextTier: singleRequirementProgress.getNextTier(analyticsLocation(c2[12]).BadgeId.GIFTING), giftsRemaining: singleRequirementProgress.getRemainingToNextTier(analyticsLocation(c2[12]).BadgeId.GIFTING), tiers };
    const badgeById = obj.getBadgeById(analyticsLocation(c2[12]).BadgeId.GIFTING);
    tiers = undefined;
    if (badgeById != null) {
      tiers = badgeById.tiers;
    }
    if (tiers == null) {
      tiers = [];
    }
    return obj2;
  });
  ({ badgeProgress, currentTier } = stateFromStoresObject);
  ({ nextTier, tiers, giftsRemaining } = stateFromStoresObject);
  let obj2 = analyticsLocation(10488);
  const isGiftingBadgeComplexArtEnabled = obj2.useIsGiftingBadgeComplexArtEnabled(UserSettingsGiftingBadgeProgress);
  if (0 === badgeProgress) {
    let obj3 = { analyticsLocation };
    return closure_9(closure_14, obj3);
  } else {
    let formatToPlainString2Result;
    let ChevronSmallDownIcon;
    let tmp19 = closure_8(currentTier);
    const tmp25 = closure_8(nextTier);
    const tmp7Result = analyticsLocation(10488);
    const giftingBadgeProgressPercent = tmp7Result.getGiftingBadgeProgressPercent(badgeProgress, currentTier, nextTier);
    const tmp7Result3 = analyticsLocation(10488);
    let giftingBadgeTierIconUrl = tmp7Result3.getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
    const tmp7Result4 = analyticsLocation(10488);
    const giftingBadgeTierIconUrl1 = tmp7Result4.getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled);
    if (null != nextTier) {
      const intl2 = tmp7(1126).intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      let obj4 = { count: giftsRemaining, nextTier: str2 };
      str2 = undefined;
      const XTX3OO = tmp4(2617).XTX3OO;
      if (nextTier != null) {
        str2 = nextTier.name;
      }
      if (str2 == null) {
        str2 = "";
      }
      formatToPlainString2Result = formatToPlainString2(XTX3OO, obj4);
    } else {
      let intl = tmp7(1126).intl;
      const formatToPlainString = intl.formatToPlainString;
      let str;
      const LnsdbK = tmp4(2617).LnsdbK;
      if (currentTier != null) {
        str = currentTier.name;
      }
      if (str == null) {
        str = "";
      }
      let obj5 = { currentTier: str };
      formatToPlainString2Result = formatToPlainString(LnsdbK, obj5);
    }
    let obj6 = { style: tmp.wrapper, children: items5 };
    let tmp13 = null != giftingBadgeTierIconUrl;
    const obj7 = { style: tmp.progressContainer, children: items2 };
    const obj8 = { style: tmp.progressRow, children: items1 };
    if (tmp13) {
      const obj9 = { icon: giftingBadgeTierIconUrl, size: 36, style: { margin: 4 } };
      tmp13 = closure_9(tmp4(10494), obj9);
    }
    items1 = [tmp13, , ];
    const obj10 = { style: tmp.progressTitleText, variant: "text-md/medium", color: "text-strong", children: formatToPlainString2Result };
    items1[1] = closure_9(analyticsLocation(4892).Text, obj10);
    let tmp15Result = null != giftingBadgeTierIconUrl1;
    if (tmp15Result) {
      const obj11 = { icon: giftingBadgeTierIconUrl1, size: 36, style: { margin: 4 } };
      tmp15Result = closure_9(tmp4(10494), obj11);
    }
    items1[2] = tmp15Result;
    items2 = [closure_10(closure_6, obj8), ];
    const obj12 = { style: tmp.progressBarContainer, children: items4 };
    const obj13 = { style: tmp.progressBarTrack, children: closure_9(closure_6, obj14) };
    obj14 = { style: items3 };
    items3 = [tmp.progressBarFill, ];
    const _HermesInternal = HermesInternal;
    items3[1] = { width: "" + giftingBadgeProgressPercent + "%" };
    const obj15 = { width: "" + giftingBadgeProgressPercent + "%" };
    items4 = [closure_9(closure_6, obj13), ];
    const obj16 = { style: tmp.progressLabels, children: closure_9(Text, obj18) };
    Text = tmp7(4892).Text;
    const intl3 = tmp7(1126).intl;
    let format = intl3.format;
    let tmp18 = tmp19;
    const iIpfQe = tmp4(2617).iIpfQe;
    if (null != nextTier) {
      tmp18 = tmp25;
    }
    const obj17 = { threshold: tmp18, count: tmp19 };
    if (null != nextTier) {
      tmp19 = badgeProgress;
    }
    obj18 = { variant: "text-xs/normal", color: "text-subtle", children: format(iIpfQe, obj17) };
    items4[1] = closure_9(closure_6, obj16);
    items2[1] = closure_10(closure_6, obj12);
    items5 = [closure_10(closure_6, obj7), , , , ];
    const obj19 = {
      variant: "primary",
      icon: closure_9(GiftIcon, obj20),
      text: intl4.string(_modDef2617.DZnomS),
      onPress() {
          const obj = utils_openGiftModal;
          const obj2 = { analyticsLocation, analyticsLocations };
          obj.openGiftModal(obj2);
        },
      grow: true
    };
    const Button = tmp7(5601).Button;
    obj20 = { size: "sm", color: nativeDefault.unsafe_rawColors.WHITE };
    GiftIcon = tmp7(10779).GiftIcon;
    intl4 = tmp7(1126).intl;
    items5[1] = closure_9(Button, obj19);
    const obj21 = { style: tmp.divider };
    items5[2] = closure_9(closure_6, obj21);
    const obj22 = {
      style: tmp.dropdownRow,
      onPress() {
          return c2((arg0) => !arg0);
        },
      children: items6
    };
    const obj23 = { variant: "text-sm/medium", color: "text-strong", children: intl5.string(_modDef2617.WZ4cXA) };
    let Text2 = tmp7(4892).Text;
    intl5 = tmp7(1126).intl;
    items6 = [closure_9(Text2, obj23), ];
    const tmp20 = isGiftingBadgeComplexArtEnabled;
    if (tmp11Result) {
      ChevronSmallDownIcon = tmp7(13398).ChevronSmallUpIcon;
    } else {
      ChevronSmallDownIcon = tmp7(10857).ChevronSmallDownIcon;
    }
    const obj24 = { color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    items6[1] = closure_9(ChevronSmallDownIcon, obj24);
    items5[3] = closure_10(tmp20, obj22);
    if (tmp11Result) {
      const obj25 = { children: items7 };
      const obj26 = {
        style: tmp.badgesRow,
        children: tiers.map((key) => {
              let format;
              let items1;
              let items2;
              let obj6;
              let qvx9E4;
              let tmpResult;
              const obj = GiftingBadgesUtils;
              const giftingBadgeTierIconUrl = obj.getGiftingBadgeTierIconUrl(key, isGiftingBadgeComplexArtEnabled);
              const items = [badgeItem.badgeItem, ];
              let key1;
              if (currentTier != null) {
                key1 = currentTier.key;
              }
              const obj2 = { style: items, children: items1 };
              const tmp8 = key.key === key1 && badgeItem.badgeItemActive;
              items[1] = tmp8;
              let tmp9 = null != giftingBadgeTierIconUrl;
              if (tmp9) {
                const obj3 = { icon: giftingBadgeTierIconUrl, size: 36 };
                tmp9 = React4(GiftingBadgeIconDefault, obj3);
              }
              items1 = [tmp9, ];
              const obj4 = { style: badgeItem.badgeCopy, accessible: true, accessibilityLabel: tmpResult.getGiftingBadgeAccessibilityLabel(key.key), children: items2 };
              let str = key.name;
              tmpResult = GiftingBadgesUtils;
              const Text = Text_Text.Text;
              if (str == null) {
                str = "";
              }
              items2 = [React4(Text, { variant: "text-sm/semibold", color: "text-strong", children: str }), ];
              const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: format(qvx9E4, obj6) };
              const Text2 = Text_Text.Text;
              const intl = intl7.intl;
              format = intl.format;
              obj6 = { count: closure_8(key.key) };
              qvx9E4 = _modDef2617.qvx9E4;
              items2[1] = React4(Text2, obj5);
              items1[1] = authStore(metroRequire, obj4);
              return authStore(metroRequire, obj2, key.key.key);
            })
      };
      items7 = [closure_9(closure_6, obj26), ];
      const obj27 = { style: tmp.footerText, variant: "text-xs/normal", color: "text-muted", children: intl6.string(_modDef2617["4Yp0mI"]) };
      const Text3 = tmp7(4892).Text;
      intl6 = tmp7(1126).intl;
      items7[1] = closure_9(Text3, obj27);
      tmp11Result = closure_10(closure_11, obj25);
    }
    items5[4] = tmp11Result;
    return closure_10(closure_6, obj6);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx");

export default tmp4;