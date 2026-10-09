// discord_app/modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2661 from "../../../premium/gifting/GiftingBadge.messages.js";
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
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_8 = fn(8300).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const UserSettingsGiftingBadgeProgress = "UserSettingsGiftingBadgeProgress";
const createStyles = fn(5091);
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
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GiftingBadgeIntro(analyticsLocation) {
      const cResult = analyticsLocation(introGridItem[8]).c(27);
      analyticsLocation = analyticsLocation.analyticsLocation;
      const tmp4 = closure_13();
      importDefault = tmp4;
      let obj = analyticsLocation(introGridItem[8]);
      introGridItem = analyticsLocation(introGridItem[9]).useIsGiftingBadgeComplexArtEnabled(
        UserSettingsGiftingBadgeProgress,
      );
      let obj2 = analyticsLocation(introGridItem[9]);
      const analyticsLocations = require("useAnalyticsLocations")(
        require("AnalyticsLocation").USER_SETTINGS_GIFT_INVENTORY,
      ).analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [BadgeDirectoryStore];
        const fn = function o() {
          badgeById = badgeById.getBadgeById(analyticsLocation(introGridItem[12]).BadgeId.GIFTING);
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
      const stateFromStores = analyticsLocation(introGridItem[13]).useStateFromStores(tmp7, tmp8);
      if (null == stateFromStores) {
        return null;
      } else {
        const _Symbol2 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          let obj3 = { variant: "text-xs/normal", color: "text-muted", children: null };
          let intl = tmp(tmp2[15]).intl;
          obj3.children = intl.string(tmp5(tmp2[16])["4Yp0mI"]);
          const tmp12 = closure_9(tmp(tmp2[14]).Text, obj3);
          cResult[2] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[2];
        }
        if (cResult[3] !== tmp4.introContent) {
          let obj4 = { style: tmp4.introContent, children: tmp10 };
          const tmp16 = closure_9(closure_6, obj4);
          cResult[3] = tmp4.introContent;
          cResult[4] = tmp16;
          let tmp13 = tmp16;
        } else {
          tmp13 = cResult[4];
        }
        if (cResult[5] === introGridItem) {
          if (cResult[6] === tmp4.badgeCopy) {
            if (cResult[7] === tmp4.introGridItem) {
              if (cResult[8] === stateFromStores) {
                if (cResult[14] === tmp4.introGrid) {
                  if (cResult[15] === tmp18) {
                    let tmp22 = cResult[16];
                  }
                  const _Symbol = Symbol;
                  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                    let obj5 = { size: "sm", color: tmp5(tmp2[6]).unsafe_rawColors.WHITE };
                    const tmp29 = closure_9(tmp(tmp2[18]).GiftIcon, obj5);
                    const intl2 = tmp(tmp2[15]).intl;
                    const stringResult = intl2.string(tmp5(tmp2[16]).DZnomS);
                    cResult[17] = stringResult;
                    cResult[18] = tmp29;
                    let tmp27 = tmp29;
                    let tmp26 = stringResult;
                  } else {
                    tmp26 = cResult[17];
                    tmp27 = cResult[18];
                  }
                  if (cResult[19] === analyticsLocation) {
                    if (cResult[20] === analyticsLocations) {
                      let tmp31 = cResult[21];
                    }
                    if (cResult[22] === tmp4.wrapper) {
                      if (cResult[23] === tmp31) {
                        if (cResult[24] === tmp13) {
                          if (cResult[25] === tmp22) {
                            let tmp34 = cResult[26];
                          }
                          return tmp34;
                        }
                      }
                    }
                    const obj6 = { style: tmp4.wrapper, children: null };
                    let items1 = [tmp13, tmp22, tmp31];
                    obj6.children = items1;
                    const tmp37 = closure_10(closure_6, obj6);
                    cResult[22] = tmp4.wrapper;
                    cResult[23] = tmp31;
                    cResult[24] = tmp13;
                    cResult[25] = tmp22;
                    cResult[26] = tmp37;
                    tmp34 = tmp37;
                  }
                  const obj7 = {
                    variant: "primary",
                    icon: tmp27,
                    text: tmp26,
                    onPress() {
                      utils_openGiftModal.openGiftModal({ analyticsLocation, analyticsLocations });
                    },
                    grow: true,
                  };
                  const tmp33 = closure_9(tmp(tmp2[19]).Button, obj7);
                  cResult[19] = analyticsLocation;
                  cResult[20] = analyticsLocations;
                  cResult[21] = tmp33;
                  tmp31 = tmp33;
                }
                const obj8 = { style: tmp17, children: cResult[9] };
                const tmp25 = closure_9(closure_6, obj8);
                cResult[14] = tmp4.introGrid;
                cResult[15] = cResult[9];
                cResult[16] = tmp25;
                tmp22 = tmp25;
              }
            }
          }
        }
        if (cResult[10] === introGridItem) {
          if (cResult[11] === tmp4.badgeCopy) {
            if (cResult[12] === tmp4.introGridItem) {
              let tmp19 = cResult[13];
            }
            const mapped = stateFromStores.map(tmp19);
            cResult[5] = introGridItem;
            ({ badgeCopy: tmp3[6], introGridItem } = tmp4);
            cResult[7] = introGridItem;
            cResult[8] = stateFromStores;
            cResult[9] = mapped;
          }
        }
        const fn2 = function w(name) {
          const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(name, introGridItem);
          const obj2 = { style: introGridItem.introGridItem, children: null };
          let tmp7 = null != giftingBadgeTierIconUrl;
          if (tmp7) {
            const obj3 = { icon: giftingBadgeTierIconUrl, size: 44 };
            tmp7 = options(GiftingBadgeIconDefault, obj3);
          }
          const items = [tmp7];
          const obj4 = { style: introGridItem.badgeCopy, accessible: true, accessibilityLabel: null, children: null };
          obj4.accessibilityLabel = GiftingBadgesUtils.getGiftingBadgeAccessibilityLabel(name);
          let str = name.name;
          if (str == null) {
            str = "";
          }
          const items1 = [
            options(Text_Text.Text, { variant: "text-sm/semibold", color: "text-subtle", children: str }),
          ];
          const obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
          const intl = util.intl;
          const tmpResult = GiftingBadgesUtils;
          obj5.children = intl.format(_modDef2661.qvx9E4, { count: closure_8(name) });
          items1[1] = options(Text_Text.Text, obj5);
          obj4.children = items1;
          items[1] = collapsed(timestampProducer, obj4);
          obj2.children = items;
          return collapsed(timestampProducer, obj2, name.key);
        };
        cResult[10] = introGridItem;
        cResult[11] = tmp4.badgeCopy;
        cResult[12] = tmp4.introGridItem;
        cResult[13] = fn2;
        tmp19 = fn2;
      }
      let tmpResult = analyticsLocation(introGridItem[13]);
    }
  : function GiftingBadgeIntro(analyticsLocation) {
      analyticsLocation = analyticsLocation.analyticsLocation;
      const tmp = closure_13();
      importDefault = tmp;
      dependencyMap = analyticsLocation(10070).useIsGiftingBadgeComplexArtEnabled(UserSettingsGiftingBadgeProgress);
      let obj = analyticsLocation(10070);
      const analyticsLocations = useAnalyticsLocationsDefault(
        AnalyticsLocationDefault.USER_SETTINGS_GIFT_INVENTORY,
      ).analyticsLocations;
      let items = [BadgeDirectoryStore];
      const stateFromStores = analyticsLocation(504).useStateFromStores(items, () => {
        badgeById = badgeById.getBadgeById(analyticsLocation(closure_2[12]).BadgeId.GIFTING);
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
        let intl = tmp2(1126).intl;
        obj5.children = intl.string(tmp4(2661)["4Yp0mI"]);
        obj4.children = closure_9(tmp2(5087).Text, obj5);
        let items1 = [closure_9(closure_6, obj4), ,];
        const obj6 = {
          style: tmp.introGrid,
          children: stateFromStores.map((name) => {
            const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(name, closure_2);
            const obj2 = { style: introGridItem.introGridItem, children: null };
            let tmp7 = null != giftingBadgeTierIconUrl;
            if (tmp7) {
              const obj3 = { icon: giftingBadgeTierIconUrl, size: 44 };
              tmp7 = options(GiftingBadgeIconDefault, obj3);
            }
            const items = [tmp7];
            const obj4 = { style: introGridItem.badgeCopy, accessible: true, accessibilityLabel: null, children: null };
            obj4.accessibilityLabel = GiftingBadgesUtils.getGiftingBadgeAccessibilityLabel(name);
            let str = name.name;
            if (str == null) {
              str = "";
            }
            const items1 = [
              options(Text_Text.Text, { variant: "text-sm/semibold", color: "text-subtle", children: str }),
            ];
            const obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
            const intl = util.intl;
            const tmpResult = GiftingBadgesUtils;
            obj5.children = intl.format(_modDef2661.qvx9E4, { count: closure_8(name) });
            items1[1] = options(Text_Text.Text, obj5);
            obj4.children = items1;
            items[1] = collapsed(timestampProducer, obj4);
            obj2.children = items;
            return collapsed(timestampProducer, obj2, name.key);
          }),
        };
        items1[1] = closure_9(closure_6, obj6);
        const obj7 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
        const obj8 = { size: "sm", color: tmp4(587).unsafe_rawColors.WHITE };
        obj7.icon = closure_9(tmp2(11490).GiftIcon, obj8);
        const intl2 = tmp2(1126).intl;
        obj7.text = intl2.string(tmp4(2661).DZnomS);
        obj7.onPress = function onPress() {
          utils_openGiftModal.openGiftModal({ analyticsLocation, analyticsLocations });
        };
        items1[2] = closure_9(tmp2(5376).Button, obj7);
        obj3.children = items1;
        tmp6 = closure_10(closure_6, obj3);
      }
      return tmp6;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsGiftingBadgeProgress.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserSettingsGiftingBadgeProgress(analyticsLocation) {
      const cResult = analyticsLocation(576).c(119);
      analyticsLocation = analyticsLocation.analyticsLocation;
      const tmp4 = closure_13();
      importDefault = tmp4;
      let obj = analyticsLocation(576);
      [tmp6, dependencyMap] = analyticsLocations(currentTier.useState(false), 2);
      const tmp5 = analyticsLocations(currentTier.useState(false), 2);
      analyticsLocations = useAnalyticsLocationsDefault(
        AnalyticsLocationDefault.USER_SETTINGS_GIFT_INVENTORY,
      ).analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [BadgeDirectoryStore];
        const fn = function h() {
          singleRequirementProgress = singleRequirementProgress.getSingleRequirementProgress(
            analyticsLocation(8292).BadgeId.GIFTING,
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
            currentTier: singleRequirementProgress.getCurrentTier(analyticsLocation(8292).BadgeId.GIFTING),
            nextTier: singleRequirementProgress.getNextTier(analyticsLocation(8292).BadgeId.GIFTING),
            giftsRemaining: singleRequirementProgress.getRemainingToNextTier(analyticsLocation(8292).BadgeId.GIFTING),
            tiers: null,
          };
          const badgeById = obj.getBadgeById(analyticsLocation(8292).BadgeId.GIFTING);
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
      let tmpResult = analyticsLocation(504);
      const isGiftingBadgeComplexArtEnabled = analyticsLocation(10070).useIsGiftingBadgeComplexArtEnabled(
        UserSettingsGiftingBadgeProgress,
      );
      if (0 === badgeProgress) {
        if (cResult[2] !== analyticsLocation) {
          let obj2 = { analyticsLocation };
          const tmp81 = closure_9(closure_14, obj2);
          cResult[2] = analyticsLocation;
          cResult[3] = tmp81;
          let tmp78 = tmp81;
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
                                      if (cResult[71] === tmp23) {
                                        let tmp34 = cResult[72];
                                      }
                                      if (cResult[73] === tmp15) {
                                        if (cResult[74] === tmp34) {
                                          if (cResult[75] === tmp24) {
                                            let tmp37 = cResult[76];
                                          }
                                          if (cResult[77] === tmp16) {
                                            if (cResult[78] === tmp37) {
                                              if (cResult[79] === tmp25) {
                                                if (cResult[80] === tmp26) {
                                                  let tmp40 = cResult[81];
                                                }
                                                if (cResult[82] === tmp17) {
                                                  if (cResult[83] === tmp19) {
                                                    if (cResult[84] === tmp40) {
                                                      const _Symbol = Symbol;
                                                      if (cResult[87] === Symbol.for("react.memo_cache_sentinel")) {
                                                        let obj3 = {
                                                          size: "sm",
                                                          color: tmp7(587).unsafe_rawColors.WHITE,
                                                        };
                                                        const tmp49 = closure_9(tmp(11490).GiftIcon, obj3);
                                                        let intl = tmp(1126).intl;
                                                        const stringResult = intl.string(tmp7(2661).DZnomS);
                                                        cResult[87] = tmp49;
                                                        cResult[88] = stringResult;
                                                        let tmp47 = stringResult;
                                                        let tmp46 = tmp49;
                                                      } else {
                                                        tmp46 = cResult[87];
                                                        tmp47 = cResult[88];
                                                      }
                                                      if (cResult[89] === analyticsLocation) {
                                                        if (cResult[92] !== tmp4.divider) {
                                                          let obj4 = { style: tmp4.divider };
                                                          const tmp57 = closure_9(closure_6, obj4);
                                                          cResult[92] = tmp4.divider;
                                                          cResult[93] = tmp57;
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
                                                          let obj5 = {
                                                            variant: "text-sm/medium",
                                                            color: "text-strong",
                                                            children: null,
                                                          };
                                                          const intl2 = tmp(1126).intl;
                                                          obj5.children = intl2.string(tmp7(2661).WZ4cXA);
                                                          const tmp60 = closure_9(tmp(5087).Text, obj5);
                                                          cResult[95] = tmp60;
                                                          const tmp59 = tmp60;
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
                                                          const obj6 = {
                                                            color: tmp7(587).colors.INTERACTIVE_ICON_DEFAULT,
                                                          };
                                                          const tmp62Result = tmp62(tmp63, obj6);
                                                          cResult[96] = tmp6;
                                                          cResult[97] = tmp62Result;
                                                        } else {
                                                          class J {
                                                            constructor() {
                                                              return closure_2((arg0) => !arg0);
                                                            }
                                                          }
                                                          if (cResult[98] === tmp4.dropdownRow) {
                                                            class J {
                                                              constructor() {
                                                                return closure_2((arg0) => !arg0);
                                                              }
                                                            }
                                                            if (currentTier != null) {
                                                              class J {
                                                                constructor() {
                                                                  return closure_2((arg0) => !arg0);
                                                                }
                                                              }
                                                            }
                                                            if (cResult[101] === undefined) {
                                                              class J {
                                                                constructor() {
                                                                  return closure_2((arg0) => !arg0);
                                                                }
                                                              }
                                                            }
                                                            let tmp73 = tmp6;
                                                            if (tmp6) {
                                                              class J {
                                                                constructor() {
                                                                  return closure_2((arg0) => !arg0);
                                                                }
                                                              }
                                                              const obj7 = { children: null };
                                                              const obj8 = {
                                                                style: tmp4.badgesRow,
                                                                children: tiers.map((key) => {
                                                                  const giftingBadgeTierIconUrl =
                                                                    GiftingBadgesUtils.getGiftingBadgeTierIconUrl(
                                                                      key,
                                                                      isGiftingBadgeComplexArtEnabled,
                                                                    );
                                                                  const items = [badgeItem.badgeItem];
                                                                  key = undefined;
                                                                  if (currentTier != null) {
                                                                    key = currentTier.key;
                                                                  }
                                                                  const obj2 = { style: items, children: null };
                                                                  items[1] =
                                                                    key.key === key && badgeItem.badgeItemActive;
                                                                  let tmp9 = null != giftingBadgeTierIconUrl;
                                                                  if (tmp9) {
                                                                    const obj3 = {
                                                                      icon: giftingBadgeTierIconUrl,
                                                                      size: 36,
                                                                    };
                                                                    tmp9 = options(GiftingBadgeIconDefault, obj3);
                                                                  }
                                                                  const items1 = [tmp9];
                                                                  const obj4 = {
                                                                    style: badgeItem.badgeCopy,
                                                                    accessible: true,
                                                                    accessibilityLabel: null,
                                                                    children: null,
                                                                  };
                                                                  const tmp8 =
                                                                    key.key === key && badgeItem.badgeItemActive;
                                                                  obj4.accessibilityLabel =
                                                                    GiftingBadgesUtils.getGiftingBadgeAccessibilityLabel(
                                                                      key,
                                                                    );
                                                                  let str = key.name;
                                                                  if (str == null) {
                                                                    str = "";
                                                                  }
                                                                  const items2 = [
                                                                    options(Text_Text.Text, {
                                                                      variant: "text-sm/semibold",
                                                                      color: "text-strong",
                                                                      children: str,
                                                                    }),
                                                                  ];
                                                                  const obj5 = {
                                                                    variant: "text-xs/normal",
                                                                    color: "text-subtle",
                                                                    children: null,
                                                                  };
                                                                  const intl = util.intl;
                                                                  const tmpResult = GiftingBadgesUtils;
                                                                  obj5.children = intl.format(_modDef2661.qvx9E4, {
                                                                    count: closure_8(key),
                                                                  });
                                                                  items2[1] = options(Text_Text.Text, obj5);
                                                                  obj4.children = items2;
                                                                  items1[1] = collapsed(timestampProducer, obj4);
                                                                  obj2.children = items1;
                                                                  return collapsed(timestampProducer, obj2, key.key);
                                                                }),
                                                              };
                                                              let items1 = [closure_9(closure_6, obj8)];
                                                              const obj9 = {
                                                                style: tmp4.footerText,
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: null,
                                                              };
                                                              const intl3 = tmp(1126).intl;
                                                              obj9.children = intl3.string(tmp7(2661)["4Yp0mI"]);
                                                              items1[1] = closure_9(tmp(5087).Text, obj9);
                                                              obj7.children = items1;
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
                                                          const obj10 = {
                                                            style: tmp4.dropdownRow,
                                                            onPress: J,
                                                            children: null,
                                                          };
                                                          let items2 = [tmp59, tmp61];
                                                          obj10.children = items2;
                                                          const tmp69 = closure_10(
                                                            isGiftingBadgeComplexArtEnabled,
                                                            obj10,
                                                          );
                                                          cResult[98] = tmp4.dropdownRow;
                                                          cResult[99] = tmp61;
                                                          cResult[100] = tmp69;
                                                        }
                                                      }
                                                      const obj11 = {
                                                        variant: "primary",
                                                        icon: tmp46,
                                                        text: tmp47,
                                                        onPress() {
                                                          utils_openGiftModal.openGiftModal({
                                                            analyticsLocation,
                                                            analyticsLocations,
                                                          });
                                                        },
                                                        grow: true,
                                                      };
                                                      const tmp53 = closure_9(tmp(5376).Button, obj11);
                                                      cResult[89] = analyticsLocation;
                                                      cResult[90] = analyticsLocations;
                                                      cResult[91] = tmp53;
                                                    }
                                                  }
                                                }
                                                const obj12 = { style: tmp27, children: null };
                                                const items3 = [tmp19, tmp40];
                                                obj12.children = items3;
                                                const tmp45 = closure_10(tmp17, obj12);
                                                cResult[82] = tmp17;
                                                cResult[83] = tmp19;
                                                cResult[84] = tmp40;
                                                cResult[85] = tmp27;
                                                cResult[86] = tmp45;
                                              }
                                            }
                                          }
                                          const obj13 = { style: tmp25, children: null };
                                          const items4 = [tmp26, tmp37];
                                          obj13.children = items4;
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
        const giftingBadgeProgressPercent = tmp(10070).getGiftingBadgeProgressPercent(
          badgeProgress,
          currentTier,
          nextTier,
        );
        cResult[33] = badgeProgress;
        cResult[34] = currentTier;
        cResult[35] = nextTier;
        cResult[36] = giftingBadgeProgressPercent;
        const tmpResult4 = tmp(10070);
      }
      const tmpResult3 = analyticsLocation(10070);
    }
  : function UserSettingsGiftingBadgeProgress(analyticsLocation) {
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
          analyticsLocation(_undefined[12]).BadgeId.GIFTING,
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
          currentTier: singleRequirementProgress.getCurrentTier(analyticsLocation(_undefined[12]).BadgeId.GIFTING),
          nextTier: singleRequirementProgress.getNextTier(analyticsLocation(_undefined[12]).BadgeId.GIFTING),
          giftsRemaining: singleRequirementProgress.getRemainingToNextTier(
            analyticsLocation(_undefined[12]).BadgeId.GIFTING,
          ),
          tiers: null,
        };
        const badgeById = obj.getBadgeById(analyticsLocation(_undefined[12]).BadgeId.GIFTING);
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
      const isGiftingBadgeComplexArtEnabled = analyticsLocation(10070).useIsGiftingBadgeComplexArtEnabled(
        UserSettingsGiftingBadgeProgress,
      );
      if (0 === badgeProgress) {
        let obj3 = { analyticsLocation };
        return closure_9(closure_14, obj3);
      } else {
        let tmp19 = closure_8(currentTier);
        const tmp25 = closure_8(nextTier);
        const giftingBadgeProgressPercent = tmp7(10070).getGiftingBadgeProgressPercent(
          badgeProgress,
          currentTier,
          nextTier,
        );
        const tmp7Result = tmp7(10070);
        let giftingBadgeTierIconUrl = tmp7(10070).getGiftingBadgeTierIconUrl(
          currentTier,
          isGiftingBadgeComplexArtEnabled,
        );
        const tmp7Result3 = tmp7(10070);
        const giftingBadgeTierIconUrl1 = tmp7(10070).getGiftingBadgeTierIconUrl(
          nextTier,
          isGiftingBadgeComplexArtEnabled,
        );
        if (null != nextTier) {
          const intl2 = tmp7(1126).intl;
          let obj4 = { count: giftsRemaining, nextTier: null };
          let str2;
          if (nextTier != null) {
            str2 = nextTier.name;
          }
          if (str2 == null) {
            str2 = "";
          }
          obj4.nextTier = str2;
          let formatToPlainStringResult = intl2.formatToPlainString(tmp4(2661).XTX3OO, obj4);
        } else {
          let intl = tmp7(1126).intl;
          let str;
          if (currentTier != null) {
            str = currentTier.name;
          }
          if (str == null) {
            str = "";
          }
          let obj5 = { currentTier: str };
          formatToPlainStringResult = intl.formatToPlainString(tmp4(2661).LnsdbK, obj5);
        }
        const obj6 = { style: tmp.wrapper, children: null };
        const obj7 = { style: tmp.progressContainer, children: null };
        const obj8 = { style: tmp.progressRow, children: null };
        let tmp13 = null != giftingBadgeTierIconUrl;
        if (tmp13) {
          const obj9 = { icon: giftingBadgeTierIconUrl, size: 36, style: { margin: 4 } };
          tmp13 = closure_9(tmp4(10076), obj9);
        }
        let items1 = [tmp13, ,];
        const obj10 = {
          style: tmp.progressTitleText,
          variant: "text-md/medium",
          color: "text-strong",
          children: formatToPlainStringResult,
        };
        items1[1] = closure_9(tmp7(5087).Text, obj10);
        let tmp15Result = null != giftingBadgeTierIconUrl1;
        if (tmp15Result) {
          const obj11 = { icon: giftingBadgeTierIconUrl1, size: 36, style: { margin: 4 } };
          tmp15Result = closure_9(tmp4(10076), obj11);
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
        const intl3 = tmp7(1126).intl;
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
        obj18.children = intl3.format(tmp4(2661).iIpfQe, obj17);
        obj16.children = closure_9(tmp7(5087).Text, obj18);
        items4[1] = closure_9(closure_6, obj16);
        obj12.children = items4;
        items2[1] = closure_10(closure_6, obj12);
        obj7.children = items2;
        const items5 = [closure_10(closure_6, obj7), , , ,];
        const obj19 = { variant: "primary", icon: null, text: null, onPress: null, grow: true };
        const obj20 = { size: "sm", color: tmp4(587).unsafe_rawColors.WHITE };
        obj19.icon = closure_9(tmp7(11490).GiftIcon, obj20);
        const intl4 = tmp7(1126).intl;
        obj19.text = intl4.string(tmp4(2661).DZnomS);
        obj19.onPress = function onPress() {
          utils_openGiftModal.openGiftModal({ analyticsLocation, analyticsLocations });
        };
        items5[1] = closure_9(tmp7(5376).Button, obj19);
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
        const intl5 = tmp7(1126).intl;
        obj23.children = intl5.string(tmp4(2661).WZ4cXA);
        const items6 = [closure_9(tmp7(5087).Text, obj23)];
        if (tmp11Result) {
          let ChevronSmallDownIcon = tmp7(13790).ChevronSmallUpIcon;
        } else {
          ChevronSmallDownIcon = tmp7(10498).ChevronSmallDownIcon;
        }
        const obj24 = { color: tmp4(587).colors.INTERACTIVE_ICON_DEFAULT };
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
                tmp9 = options(GiftingBadgeIconDefault, obj3);
              }
              const items1 = [tmp9];
              const obj4 = { style: badgeItem.badgeCopy, accessible: true, accessibilityLabel: null, children: null };
              const tmp8 = key.key === key && badgeItem.badgeItemActive;
              obj4.accessibilityLabel = GiftingBadgesUtils.getGiftingBadgeAccessibilityLabel(key);
              let str = key.name;
              if (str == null) {
                str = "";
              }
              const items2 = [
                options(Text_Text.Text, { variant: "text-sm/semibold", color: "text-strong", children: str }),
              ];
              const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: null };
              const intl = util.intl;
              const tmpResult = GiftingBadgesUtils;
              obj5.children = intl.format(_modDef2661.qvx9E4, { count: closure_8(key) });
              items2[1] = options(Text_Text.Text, obj5);
              obj4.children = items2;
              items1[1] = collapsed(timestampProducer, obj4);
              obj2.children = items1;
              return collapsed(timestampProducer, obj2, key.key);
            }),
          };
          const items7 = [closure_9(closure_6, obj26)];
          const obj27 = { style: tmp.footerText, variant: "text-xs/normal", color: "text-muted", children: null };
          const intl6 = tmp7(1126).intl;
          obj27.children = intl6.string(tmp4(2661)["4Yp0mI"]);
          items7[1] = closure_9(tmp7(5087).Text, obj27);
          obj25.children = items7;
          tmp11Result = closure_10(closure_11, obj25);
        }
        items5[4] = tmp11Result;
        obj6.children = items5;
        return closure_10(closure_6, obj6);
      }
      let obj2 = analyticsLocation(10070);
    };
