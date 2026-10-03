// discord_app/modules/game_profile/native/components/GameProfileReviews.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import GameDetectionTypes from "../../../game_detection/GameDetectionTypes.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import useSteamWebsiteUrl from "../../hooks/useSteamWebsiteUrl.tsx";
import SteamReleaseStatus from "../../../../../discord_common/js/shared/shared-constants/SteamReleaseStatus.tsx";
import calculateSteamReviewScoreDescription2 from "../../../game_detection/calculateSteamReviewScoreDescription.tsx";
import GameProfileReviewUtils from "../../GameProfileReviewUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 32;
const createStyles = fn(4890);
let obj2 = {
  container: { gap: nativeDefault.space.PX_8 },
  headerText: null,
  reviewContainer: null,
  reviewRow: null,
  reviewRowNotLast: null,
  steamNameContainer: null,
  steamRatingContainer: null,
  steamScoreDescription: null,
  opencriticRightContainer: null,
  opencriticTopCriticContainer: null,
  opencriticTopCriticImage: null,
  opencriticTopCriticRatingContainer: null,
  linkText: null,
};
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.headerText = { paddingHorizontal: nativeDefault.space.PX_8 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj2.reviewContainer = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
};
let obj5 = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
};
obj2.reviewRow = {
  height: 56,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: nativeDefault.space.PX_12,
};
let obj6 = {
  height: 56,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: nativeDefault.space.PX_12,
};
obj2.reviewRowNotLast = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj7 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.steamNameContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.steamRatingContainer = {
  flexDirection: "row",
  alignItems: "flex-end",
  flexShrink: 1,
  paddingLeft: nativeDefault.space.PX_32,
  gap: nativeDefault.space.PX_4,
};
obj2.steamScoreDescription = { flexShrink: 1 };
let obj9 = {
  flexDirection: "row",
  alignItems: "flex-end",
  flexShrink: 1,
  paddingLeft: nativeDefault.space.PX_32,
  gap: nativeDefault.space.PX_4,
};
obj2.opencriticRightContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let size = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignItems: "center",
  justifyContent: "center",
};
obj2.opencriticTopCriticContainer = size;
obj2.opencriticTopCriticImage = { width: 32, height: 32 };
obj2.opencriticTopCriticRatingContainer = {
  position: "absolute",
  top: 0,
  left: 1,
  right: 0,
  bottom: 0,
  alignItems: "center",
  justifyContent: "center",
};
obj2.linkText = { textDecorationLine: "underline" };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (url) => {
      const cResult = str(576).c(70);
      str = url.url;
      ({ showBorderBottom: steamRatingContainer, trackAction } = url);
      ({ title, rating, ratingCount, isRecentRating } = url);
      let steamScoreDescription = closure_10();
      const alwaysShowLinkDecorations = noop.useContext(
        str(4596).AccessibilityPreferencesContext,
      ).alwaysShowLinkDecorations;
      const obj = str(576);
      const tmp4 = trackAction;
      const tmp5Result = trackAction(8328)(trackAction(4565).openURL);
      dependencyMap = tmp5Result;
      if (cResult[0] === alwaysShowLinkDecorations) {
        if (cResult[1] === isRecentRating) {
          if (cResult[2] === tmp5Result) {
            if (cResult[3] === rating) {
              if (cResult[4] === ratingCount) {
                if (cResult[5] === steamRatingContainer) {
                  if (cResult[6] === steamScoreDescription.linkText) {
                    if (cResult[7] === steamScoreDescription.reviewRow) {
                      if (cResult[8] === steamScoreDescription.reviewRowNotLast) {
                        if (cResult[9] === steamScoreDescription.steamNameContainer) {
                          if (cResult[10] === steamScoreDescription.steamRatingContainer) {
                            if (cResult[11] === steamScoreDescription.steamScoreDescription) {
                              if (cResult[12] === title) {
                                if (cResult[13] === trackAction) {
                                  if (cResult[14] === str) {
                                    if (cResult[47] === cResult[15]) {
                                      if (cResult[48] === tmp11) {
                                        if (cResult[49] === tmp14) {
                                          if (cResult[50] === tmp15) {
                                            if (cResult[51] === tmp16) {
                                              if (cResult[52] === tmp17) {
                                                let tmp56 = cResult[53];
                                              }
                                              if (cResult[54] === ratingCount) {
                                                if (cResult[55] === tmp10) {
                                                  let tmp59 = cResult[56];
                                                }
                                                if (cResult[57] === tmp8) {
                                                  if (cResult[58] === tmp56) {
                                                    if (cResult[59] === tmp59) {
                                                      if (cResult[60] === tmp18) {
                                                        let tmp63 = cResult[61];
                                                      }
                                                      if (cResult[62] === tmp9) {
                                                        if (cResult[63] === tmp12) {
                                                          if (cResult[64] === tmp13) {
                                                            if (cResult[65] === tmp63) {
                                                              if (cResult[66] === tmp19) {
                                                                if (cResult[67] === tmp20) {
                                                                  if (cResult[68] === tmp21) {
                                                                    let tmp66 = cResult[69];
                                                                  }
                                                                  return tmp66;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                      const obj2 = {
                                                        onPress: tmp19,
                                                        accessibilityRole: tmp20,
                                                        accessibilityLabel: tmp21,
                                                        style: tmp12,
                                                        children: null,
                                                      };
                                                      const items = [tmp13, tmp63];
                                                      obj2.children = items;
                                                      const tmp68 = closure_8(tmp9, obj2);
                                                      cResult[62] = tmp9;
                                                      cResult[63] = tmp12;
                                                      cResult[64] = tmp13;
                                                      cResult[65] = tmp63;
                                                      cResult[66] = tmp19;
                                                      cResult[67] = tmp20;
                                                      cResult[68] = tmp21;
                                                      cResult[69] = tmp68;
                                                      tmp66 = tmp68;
                                                    }
                                                  }
                                                }
                                                const obj3 = { style: tmp18, children: null };
                                                const items1 = [tmp56, tmp59];
                                                obj3.children = items1;
                                                const tmp65 = closure_8(tmp8, obj3);
                                                cResult[57] = tmp8;
                                                cResult[58] = tmp56;
                                                cResult[59] = tmp59;
                                                cResult[60] = tmp18;
                                                cResult[61] = tmp65;
                                                tmp63 = tmp65;
                                              }
                                              let tmp61 =
                                                null != ratingCount &&
                                                tmp10 !== tmp(2027).SteamReviewScoreDescription.NO_USER_REVIEWS;
                                              if (tmp61) {
                                                const obj4 = {
                                                  variant: "text-sm/medium",
                                                  color: "text-subtle",
                                                  children: null,
                                                };
                                                const intl2 = tmp(1126).intl;
                                                const obj5 = { rating_count: ratingCount.toLocaleString() };
                                                obj4.children = intl2.format(tmp(1126).t.sgIoin, obj5).toString();
                                                tmp61 = closure_7(tmp(4886).Text, obj4);
                                                const str5 = intl2.format(tmp(1126).t.sgIoin, obj5);
                                              }
                                              cResult[54] = ratingCount;
                                              cResult[55] = tmp10;
                                              cResult[56] = tmp61;
                                              tmp59 = tmp61;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const obj6 = {
                                      variant: cResult[19],
                                      color: cResult[22],
                                      lineClamp: cResult[23],
                                      style: cResult[24],
                                      children: cResult[25],
                                    };
                                    const tmp58 = closure_7(cResult[15], obj6);
                                    cResult[47] = cResult[15];
                                    cResult[48] = cResult[19];
                                    cResult[49] = cResult[22];
                                    class M {
                                      constructor() {
                                        tmp = trackAction(
                                          closure_0(closure_2[12]).GameProfileTrackActionActions.SteamReviews,
                                        );
                                        tmp2 = closure_2(url);
                                        return;
                                      }
                                    }
                                    cResult[51] = cResult[24];
                                    cResult[52] = cResult[25];
                                    cResult[53] = tmp58;
                                    tmp56 = tmp58;
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
          }
        }
      }
      const tmp5 = trackAction(8328);
      const result = str(8375).calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating);
      const tmpResult = str(8375);
      const steamReviewScoreDescriptionColor = str(8376).getSteamReviewScoreDescriptionColor(result);
      if (cResult[30] === tmp5Result) {
        if (cResult[31] === trackAction) {
          if (cResult[32] === str) {
            let tmp24 = cResult[33];
          }
          const _Symbol = Symbol;
          if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.YNC5Di);
            cResult[34] = stringResult;
            let tmp27 = stringResult;
          } else {
            tmp27 = cResult[34];
          }
          let reviewRowNotLast = steamRatingContainer;
          if (steamRatingContainer) {
            reviewRowNotLast = steamScoreDescription.reviewRowNotLast;
          }
          if (cResult[35] === steamScoreDescription.reviewRow) {
            if (cResult[36] === reviewRowNotLast) {
              let tmp29 = cResult[37];
            }
            const _Symbol2 = Symbol;
            if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
              const obj7 = { size: "sm", color: tmp4(587).colors.ICON_STRONG };
              const tmp32 = closure_7(tmp(8338).SteamNeutralIcon, obj7);
              cResult[38] = tmp32;
              let tmp30 = tmp32;
            } else {
              tmp30 = cResult[38];
            }
            if (cResult[39] !== title) {
              const obj8 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: title };
              const tmp35 = closure_7(tmp(4886).Text, obj8);
              cResult[39] = title;
              cResult[40] = tmp35;
              let tmp33 = tmp35;
            } else {
              tmp33 = cResult[40];
            }
            if (cResult[41] === steamScoreDescription.steamNameContainer) {
              if (cResult[42] === tmp33) {
                let tmp36 = cResult[43];
              }
              const steamRatingContainer2 = steamScoreDescription.steamRatingContainer;
              const Text = tmp(4886).Text;
              let linkText;
              if (alwaysShowLinkDecorations) {
                linkText = steamScoreDescription.linkText;
              }
              if (cResult[44] === steamScoreDescription.steamScoreDescription) {
                if (cResult[45] === linkText) {
                  let tmp42 = cResult[46];
                }
                linkText = tmp(8376);
                const steamReviewScoreDescriptionIntl = linkText.getSteamReviewScoreDescriptionIntl(result);
                cResult[0] = alwaysShowLinkDecorations;
                cResult[1] = isRecentRating;
                cResult[2] = tmp5Result;
                cResult[3] = rating;
                cResult[4] = ratingCount;
                cResult[5] = steamRatingContainer;
                cResult[6] = steamScoreDescription.linkText;
                cResult[7] = steamScoreDescription.reviewRow;
                cResult[8] = steamScoreDescription.reviewRowNotLast;
                ({ steamNameContainer: tmp3[9], steamRatingContainer } = steamScoreDescription);
                cResult[10] = steamRatingContainer;
                steamScoreDescription = steamScoreDescription.steamScoreDescription;
                cResult[11] = steamScoreDescription;
                cResult[12] = title;
                class M {
                  constructor() {
                    tmp = trackAction(closure_0(closure_2[12]).GameProfileTrackActionActions.SteamReviews);
                    tmp2 = closure_2(url);
                    return;
                  }
                }
                cResult[13] = trackAction;
                cResult[14] = str;
                cResult[15] = Text;
                cResult[16] = closure_4;
                cResult[17] = closure_5;
                cResult[18] = result;
                str = "text-sm/medium";
                cResult[19] = "text-sm/medium";
                cResult[20] = tmp29;
                cResult[21] = tmp36;
                cResult[22] = steamReviewScoreDescriptionColor;
                cResult[23] = 1;
                cResult[24] = tmp42;
                cResult[25] = steamReviewScoreDescriptionIntl;
                cResult[26] = steamRatingContainer2;
                cResult[27] = tmp24;
                trackAction = "link";
                cResult[28] = "link";
                cResult[29] = tmp27;
              }
              const items2 = [steamScoreDescription.steamScoreDescription, linkText];
              cResult[44] = steamScoreDescription.steamScoreDescription;
              cResult[45] = linkText;
              cResult[46] = items2;
              tmp42 = items2;
            }
            const obj9 = { style: steamScoreDescription.steamNameContainer, children: null };
            const items3 = [tmp30, tmp33];
            obj9.children = items3;
            const tmp39 = closure_8(closure_4, obj9);
            cResult[41] = steamScoreDescription.steamNameContainer;
            cResult[42] = tmp33;
            cResult[43] = tmp39;
            tmp36 = tmp39;
          }
          const items4 = [steamScoreDescription.reviewRow, reviewRowNotLast];
          cResult[35] = steamScoreDescription.reviewRow;
          cResult[36] = reviewRowNotLast;
          cResult[37] = items4;
          tmp29 = items4;
        }
      }
      class M {
        constructor() {
          tmp = trackAction(closure_0(closure_2[12]).GameProfileTrackActionActions.SteamReviews);
          tmp2 = closure_2(url);
          return;
        }
      }
      cResult[30] = tmp5Result;
      cResult[31] = trackAction;
      cResult[32] = str;
      cResult[33] = M;
      tmp24 = M;
      const tmpResult2 = str(8376);
    }
  : (url) => {
      url = url.url;
      ({ showBorderBottom, trackAction } = url);
      const ratingCount = url.ratingCount;
      ({ title, rating, isRecentRating } = url);
      const tmp = closure_10();
      const tmp5Result = trackAction(8328)(trackAction(4565).openURL);
      dependencyMap = tmp5Result;
      const tmp5 = trackAction(8328);
      const result = url(8375).calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating);
      const obj = url(8375);
      const items = [tmp5Result, url, trackAction];
      const steamReviewScoreDescriptionColor = url(8376).getSteamReviewScoreDescriptionColor(result);
      const obj3 = {
        onPress: noop.useCallback(() => {
          trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamReviews);
          closure_2(url);
        }, items),
        accessibilityRole: "link",
        accessibilityLabel: null,
        style: null,
        children: null,
      };
      const intl = url(1126).intl;
      obj3.accessibilityLabel = intl.string(url(1126).t.YNC5Di);
      const items1 = [tmp.reviewRow];
      if (showBorderBottom) {
        showBorderBottom = tmp.reviewRowNotLast;
      }
      items1[1] = showBorderBottom;
      obj3.style = items1;
      const obj4 = { style: tmp.steamNameContainer, children: null };
      const obj2 = url(8376);
      const items2 = [
        closure_7(url(8338).SteamNeutralIcon, { size: "sm", color: trackAction(587).colors.ICON_STRONG }),
        closure_7(url(4886).Text, {
          variant: "heading-sm/medium",
          color: "mobile-text-heading-primary",
          children: title,
        }),
      ];
      obj4.children = items2;
      const items3 = [closure_8(closure_4, obj4)];
      const obj6 = { style: tmp.steamRatingContainer, children: null };
      const obj7 = {
        variant: "text-sm/medium",
        color: steamReviewScoreDescriptionColor,
        lineClamp: 1,
        style: null,
        children: null,
      };
      const items4 = [tmp.steamScoreDescription];
      let linkText;
      if (noop.useContext(url(4596).AccessibilityPreferencesContext).alwaysShowLinkDecorations) {
        linkText = tmp.linkText;
      }
      items4[1] = linkText;
      obj7.style = items4;
      const obj5 = { size: "sm", color: trackAction(587).colors.ICON_STRONG };
      obj7.children = url(8376).getSteamReviewScoreDescriptionIntl(result);
      const items5 = [closure_7(url(4886).Text, obj7)];
      let tmp12Result = null != ratingCount && result !== tmp2(2027).SteamReviewScoreDescription.NO_USER_REVIEWS;
      if (tmp12Result) {
        const obj8 = { variant: "text-sm/medium", color: "text-subtle", children: null };
        const intl2 = tmp2(1126).intl;
        const obj9 = { rating_count: ratingCount.toLocaleString() };
        obj8.children = intl2.format(tmp2(1126).t.sgIoin, obj9).toString();
        tmp12Result = closure_7(tmp2(4886).Text, obj8);
        const str = intl2.format(tmp2(1126).t.sgIoin, obj9);
      }
      items5[1] = tmp12Result;
      obj6.children = items5;
      items3[1] = closure_8(closure_4, obj6);
      obj3.children = items3;
      return closure_8(closure_5, obj3);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (trackAction) => {
      const cResult = url(576).c(35);
      ({ game, url } = trackAction);
      trackAction = trackAction.trackAction;
      const tmp4 = closure_10();
      const reviews = game.reviews;
      let opencritic;
      if (reviews != null) {
        opencritic = reviews.opencritic;
      }
      if (cResult[0] !== opencritic) {
        const reviews2 = game.reviews;
        let opencritic1;
        if (reviews2 != null) {
          opencritic1 = reviews2.opencritic;
        }
        if (opencritic1 == null) {
          opencritic1 = {
            topCriticRating: "done",
            topCriticRatingCount: "toCharArray$esjava$1",
            tier: "toCharArray$esjava$1",
          };
        }
        const reviews3 = game.reviews;
        let opencritic2;
        if (reviews3 != null) {
          opencritic2 = reviews3.opencritic;
        }
        cResult[0] = opencritic2;
        cResult[1] = opencritic1;
        let tmp6 = opencritic1;
      } else {
        tmp6 = cResult[1];
      }
      ({ tier, topCriticRating } = tmp6);
      if (topCriticRating == null) {
        topCriticRating = -1;
      }
      let num3 = tmp6.topCriticRatingCount;
      if (num3 == null) {
        num3 = -1;
      }
      const obj = url(576);
      const tmp9 = trackAction;
      const tmp10Result = trackAction(8328)(trackAction(4565).openURL);
      dependencyMap = tmp10Result;
      if (cResult[2] === tmp10Result) {
        if (cResult[3] === trackAction) {
          if (cResult[4] === url) {
            let tmp12 = cResult[5];
          }
          if (cResult[6] !== tier) {
            let str = "";
            if (null != tier) {
              str = url(8377).getOpenCriticTierText(tier);
              const tmpResult = url(8377);
            }
            cResult[6] = tier;
            cResult[7] = str;
            let tmp13 = str;
          } else {
            tmp13 = cResult[7];
          }
          if (cResult[8] !== tier) {
            if (null != tier) {
              let openCriticCircleRatingColor = url(8377).getOpenCriticCircleRatingColor(tier);
              const tmpResult4 = url(8377);
            } else {
              openCriticCircleRatingColor = { foregroundColor: "", backgroundColor: "" };
            }
            cResult[8] = tier;
            cResult[9] = openCriticCircleRatingColor;
          } else {
            ({ foregroundColor, backgroundColor } = cResult[9]);
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = url(1126).intl;
              const stringResult = intl.string(url(1126).t.aLNBAw);
              cResult[10] = stringResult;
              let tmp17 = stringResult;
            } else {
              tmp17 = cResult[10];
            }
            const _Symbol2 = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: null };
              const intl2 = url(1126).intl;
              obj2.children = intl2.string(url(1126).t["UxvER+"]);
              const tmp21 = closure_7(url(4886).Text, obj2);
              cResult[11] = tmp21;
              let tmp19 = tmp21;
            } else {
              tmp19 = cResult[11];
            }
            if (cResult[12] === tmp4.opencriticTopCriticContainer) {
              if (cResult[13] === tmp4.opencriticTopCriticImage) {
                if (cResult[14] === tier) {
                  if (cResult[15] === tmp13) {
                    let tmp22 = cResult[16];
                  }
                  if (cResult[17] === backgroundColor) {
                    if (cResult[18] === foregroundColor) {
                      if (cResult[19] === tmp14) {
                        if (cResult[20] === topCriticRating) {
                          if (cResult[21] === tmp4.opencriticTopCriticContainer) {
                            if (cResult[22] === tmp4.opencriticTopCriticRatingContainer) {
                              let tmp27 = cResult[23];
                            }
                            if (cResult[24] !== tmp8) {
                              let tmp34 = null;
                              if (tmp8) {
                                const obj3 = {
                                  variant: "text-xs/medium",
                                  color: url(8376).getSteamReviewScoreDescriptionColor(
                                    url(2027).SteamReviewScoreDescription.NO_USER_REVIEWS,
                                  ),
                                  children: null,
                                };
                                const intl4 = url(1126).intl;
                                obj3.children = intl4.string(url(1126).t["0xYzpO"]);
                                tmp34 = closure_7(url(4886).Text, obj3);
                                const tmpResult5 = url(8376);
                              }
                              cResult[24] = tmp8;
                              cResult[25] = tmp34;
                              let tmp33 = tmp34;
                            } else {
                              tmp33 = cResult[25];
                            }
                            if (cResult[26] === tmp4.opencriticRightContainer) {
                              if (cResult[27] === tmp22) {
                                if (cResult[28] === tmp27) {
                                  if (cResult[29] === tmp33) {
                                    let tmp36 = cResult[30];
                                  }
                                  if (cResult[31] === tmp12) {
                                    if (cResult[32] === tmp4.reviewRow) {
                                      if (cResult[33] === tmp36) {
                                        let tmp40 = cResult[34];
                                      }
                                      return tmp40;
                                    }
                                  }
                                  const obj4 = {
                                    onPress: tmp12,
                                    accessibilityRole: "link",
                                    accessibilityLabel: tmp17,
                                    style: tmp4.reviewRow,
                                    children: null,
                                  };
                                  const items = [tmp19, tmp36];
                                  obj4.children = items;
                                  const tmp43 = closure_8(closure_5, obj4);
                                  cResult[31] = tmp12;
                                  cResult[32] = tmp4.reviewRow;
                                  cResult[33] = tmp36;
                                  cResult[34] = tmp43;
                                  tmp40 = tmp43;
                                }
                              }
                            }
                            const obj5 = { style: tmp4.opencriticRightContainer, children: null };
                            const items1 = [tmp22, tmp27, tmp33];
                            obj5.children = items1;
                            const tmp39 = closure_8(closure_4, obj5);
                            cResult[26] = tmp4.opencriticRightContainer;
                            cResult[27] = tmp22;
                            cResult[28] = tmp27;
                            cResult[29] = tmp33;
                            cResult[30] = tmp39;
                            tmp36 = tmp39;
                          }
                        }
                      }
                    }
                  }
                  let tmp28 = null;
                  if (tmp14) {
                    const obj6 = { style: null, accessibilityLabel: null, accessibilityRole: "image", children: null };
                    const items2 = [tmp4.opencriticTopCriticContainer];
                    const obj7 = { backgroundColor };
                    items2[1] = obj7;
                    obj6.style = items2;
                    const intl3 = url(1126).intl;
                    obj6.accessibilityLabel = intl3.string(url(1126).t.Ub4YR1);
                    const obj8 = { rating: topCriticRating, strokeColor: foregroundColor, size };
                    const items3 = [closure_7(tmp9(8383), obj8)];
                    const obj9 = { style: tmp4.opencriticTopCriticRatingContainer, children: null };
                    const obj10 = { variant: "text-xs/bold", color: "text-overlay-light", children: null };
                    const _Math = Math;
                    obj10.children = Math.floor(topCriticRating);
                    obj9.children = closure_7(url(4886).Text, obj10);
                    items3[1] = closure_7(closure_4, obj9);
                    obj6.children = items3;
                    tmp28 = closure_8(closure_4, obj6);
                  }
                  cResult[17] = backgroundColor;
                  cResult[18] = foregroundColor;
                  cResult[19] = tmp14;
                  cResult[20] = topCriticRating;
                  cResult[21] = tmp4.opencriticTopCriticContainer;
                  cResult[22] = tmp4.opencriticTopCriticRatingContainer;
                  cResult[23] = tmp28;
                  tmp27 = tmp28;
                }
              }
            }
            let tmp23 = null;
            if (null != tier) {
              const obj11 = {
                style: tmp4.opencriticTopCriticContainer,
                accessibilityLabel: tmp13,
                accessibilityRole: "image",
                children: null,
              };
              const obj12 = { source: null, style: null, accessible: true, accessibilityLabel: null };
              const obj13 = { uri: url(8377).getOpenCriticTierImage(tier) };
              obj12.source = obj13;
              obj12.style = tmp4.opencriticTopCriticImage;
              obj12.accessibilityLabel = tmp13;
              obj11.children = closure_7(closure_6, obj12);
              tmp23 = closure_7(closure_4, obj11);
              const tmpResult6 = url(8377);
            }
            cResult[12] = tmp4.opencriticTopCriticContainer;
            cResult[13] = tmp4.opencriticTopCriticImage;
            cResult[14] = tier;
            cResult[15] = tmp13;
            cResult[16] = tmp23;
            tmp22 = tmp23;
          }
        }
      }
      const fn = function b() {
        trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.OpenCriticReviews);
        closure_2(url);
      };
      cResult[2] = tmp10Result;
      cResult[3] = trackAction;
      cResult[4] = url;
      cResult[5] = fn;
      tmp12 = fn;
      const tmp10 = trackAction(8328);
    }
  : (url) => {
      url = url.url;
      const trackAction = url.trackAction;
      dependencyMap = undefined;
      const tmp = closure_10();
      const reviews = url.game.reviews;
      let opencritic;
      if (reviews != null) {
        opencritic = reviews.opencritic;
      }
      if (opencritic == null) {
        opencritic = {
          topCriticRating: "done",
          topCriticRatingCount: "toCharArray$esjava$1",
          tier: "toCharArray$esjava$1",
        };
      }
      ({ tier, topCriticRating } = opencritic);
      if (topCriticRating == null) {
        topCriticRating = -1;
      }
      let num = opencritic.topCriticRatingCount;
      if (num == null) {
        num = -1;
      }
      const tmp4Result = trackAction(8328)(trackAction(4565).openURL);
      dependencyMap = tmp4Result;
      const items = [tmp4Result, url, trackAction];
      let str = "";
      const callback = noop.useCallback(() => {
        trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.OpenCriticReviews);
        closure_2(url);
      }, items);
      if (null != tier) {
        str = url(8377).getOpenCriticTierText(tier);
        const obj2 = url(8377);
      }
      if (null != tier) {
        let openCriticCircleRatingColor = url(8377).getOpenCriticCircleRatingColor(tier);
        const obj4 = url(8377);
      } else {
        openCriticCircleRatingColor = { foregroundColor: "", backgroundColor: "" };
      }
      const obj = {
        onPress: callback,
        accessibilityRole: "link",
        accessibilityLabel: null,
        style: null,
        children: null,
      };
      ({ foregroundColor, backgroundColor } = openCriticCircleRatingColor);
      const intl = url(1126).intl;
      obj.accessibilityLabel = intl.string(url(1126).t.aLNBAw);
      obj.style = tmp.reviewRow;
      const obj3 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: null };
      const intl2 = url(1126).intl;
      obj3.children = intl2.string(url(1126).t["UxvER+"]);
      const items1 = [closure_7(url(4886).Text, obj3)];
      const obj5 = { style: tmp.opencriticRightContainer, children: null };
      let tmp12Result = null;
      if (null != tier) {
        const obj6 = {
          style: tmp.opencriticTopCriticContainer,
          accessibilityLabel: str,
          accessibilityRole: "image",
          children: null,
        };
        const obj7 = { source: null, style: null, accessible: true, accessibilityLabel: null };
        const obj8 = { uri: tmp11(8377).getOpenCriticTierImage(tier) };
        obj7.source = obj8;
        obj7.style = tmp.opencriticTopCriticImage;
        obj7.accessibilityLabel = str;
        obj6.children = closure_7(closure_6, obj7);
        tmp12Result = closure_7(closure_4, obj6);
        const tmp11Result = tmp11(8377);
      }
      const items2 = [tmp12Result, ,];
      let tmp9Result = null;
      if (null != tier) {
        tmp9Result = null;
        if (topCriticRating > 0) {
          tmp9Result = null;
          if (num > 0) {
            const obj9 = { style: null, accessibilityLabel: null, accessibilityRole: "image", children: null };
            const items3 = [tmp.opencriticTopCriticContainer];
            const obj10 = { backgroundColor };
            items3[1] = obj10;
            obj9.style = items3;
            const intl3 = tmp11(1126).intl;
            obj9.accessibilityLabel = intl3.string(tmp11(1126).t.Ub4YR1);
            const obj11 = { rating: topCriticRating, strokeColor: foregroundColor, size };
            const items4 = [closure_7(trackAction(8383), obj11)];
            const obj12 = { style: tmp.opencriticTopCriticRatingContainer, children: null };
            const obj13 = { variant: "text-xs/bold", color: "text-overlay-light", children: null };
            const _Math = Math;
            obj13.children = Math.floor(topCriticRating);
            obj12.children = closure_7(tmp11(4886).Text, obj13);
            items4[1] = closure_7(closure_4, obj12);
            obj9.children = items4;
            tmp9Result = closure_8(closure_4, obj9);
          }
        }
      }
      items2[1] = tmp9Result;
      if (topCriticRating <= 0) {
        let tmp12Result2 = null;
        if (null == tier) {
          const obj14 = {
            variant: "text-xs/medium",
            color: tmp11(8376).getSteamReviewScoreDescriptionColor(
              tmp11(2027).SteamReviewScoreDescription.NO_USER_REVIEWS,
            ),
            children: null,
          };
          const intl4 = tmp11(1126).intl;
          obj14.children = intl4.string(tmp11(1126).t["0xYzpO"]);
          tmp12Result2 = closure_7(tmp11(4886).Text, obj14);
          const tmp11Result2 = tmp11(8376);
        }
      } else {
        tmp12Result2 = null;
      }
      items2[2] = tmp12Result2;
      obj5.children = items2;
      items1[1] = closure_8(closure_4, obj5);
      obj.children = items1;
      return closure_8(closure_5, obj);
    };
ReactCompilerGating = fn(558);
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReviews.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(35);
      ({ game, trackAction } = arg0);
      const tmp4 = closure_10();
      let id;
      if (game != null) {
        id = game.id;
      }
      const steamWebsiteUrl = useSteamWebsiteUrl.useSteamWebsiteUrl(id);
      if (game != null) {
        const opencriticUrl = game.opencriticUrl;
      }
      if (null == game) {
        return null;
      } else {
        const tmp7 =
          game.steamReleaseStatus !== SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED &&
          null != steamWebsiteUrl;
        const reviews = game.reviews;
        let steam;
        if (reviews != null) {
          steam = reviews.steam;
        }
        let recentRating;
        if (steam != null) {
          recentRating = steam.recentRating;
        }
        let recentRatingCount;
        if (steam != null) {
          recentRatingCount = steam.recentRatingCount;
        }
        if (cResult[0] === recentRating) {
          if (cResult[1] === recentRatingCount) {
            let tmp11 = cResult[2];
          }
          let tmp13 = tmp7;
          if (tmp7) {
            tmp13 = tmp11 !== GameDetectionTypes.SteamReviewScoreDescription.NO_USER_REVIEWS;
          }
          const result = GameProfileReviewUtils.canShowLocalizedSteamReview(steam);
          if (result) {
            let localizedRating;
            if (!tmp15) {
              localizedRating = steam.localizedRating;
            }
            let rating = localizedRating;
          } else if (!tmp15) {
            rating = steam.rating;
          }
          if (result) {
            let localizedRatingCount;
            if (!tmp17) {
              localizedRatingCount = steam.localizedRatingCount;
            }
            let ratingCount = localizedRatingCount;
          } else if (!tmp17) {
            ratingCount = steam.ratingCount;
          }
          const t = util.t;
          const tmp19 = result ? t["aWb+V4"] : t["8e4LiB"];
          const reviews2 = game.reviews;
          let opencritic;
          if (reviews2 != null) {
            opencritic = reviews2.opencritic;
          }
          if (!tmp7) {
            if (!tmp13) {
              if (!tmp21) {
                return null;
              }
            }
          }
          let tmp22 = tmp7;
          if (!tmp7) {
            tmp22 = tmp21;
          }
          const _Symbol = Symbol;
          ({ container, headerText } = tmp4);
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.GaAQXP);
            cResult[3] = stringResult;
            let tmp24 = stringResult;
          } else {
            tmp24 = cResult[3];
          }
          if (cResult[4] !== tmp4.headerText) {
            const obj3 = {
              variant: "heading-sm/semibold",
              color: "mobile-text-heading-primary",
              style: headerText,
              children: tmp24,
            };
            const tmp28 = React5(Text_Text.Text, obj3);
            cResult[4] = tmp4.headerText;
            cResult[5] = tmp28;
            let tmp26 = tmp28;
          } else {
            tmp26 = cResult[5];
          }
          if (cResult[6] === tmp22) {
            if (cResult[7] === tmp13) {
              let recentRating1;
              if (steam != null) {
                recentRating1 = steam.recentRating;
              }
              if (cResult[8] === recentRating1) {
                let recentRatingCount1;
                if (steam != null) {
                  recentRatingCount1 = steam.recentRatingCount;
                }
                if (cResult[9] === recentRatingCount1) {
                  if (cResult[10] === steamWebsiteUrl) {
                    if (cResult[11] === trackAction) {
                      let tmp31 = cResult[12];
                    }
                    if (cResult[13] === tmp21) {
                      if (cResult[14] === rating) {
                        if (cResult[15] === ratingCount) {
                          if (cResult[16] === tmp19) {
                            if (cResult[17] === tmp7) {
                              if (cResult[18] === steamWebsiteUrl) {
                                if (cResult[19] === trackAction) {
                                  let tmp39 = cResult[20];
                                }
                                if (cResult[21] === game) {
                                  if (cResult[22] === opencriticUrl) {
                                    if (cResult[23] === tmp21) {
                                      if (cResult[24] === trackAction) {
                                        let tmp43 = cResult[25];
                                      }
                                      if (cResult[26] === tmp4.reviewContainer) {
                                        if (cResult[27] === tmp43) {
                                          if (cResult[28] === tmp31) {
                                            if (cResult[29] === tmp39) {
                                              let tmp47 = cResult[30];
                                            }
                                            if (cResult[31] === tmp4.container) {
                                              if (cResult[32] === tmp47) {
                                                if (cResult[33] === tmp26) {
                                                  let tmp51 = cResult[34];
                                                }
                                                return tmp51;
                                              }
                                            }
                                            const obj4 = { style: container, children: null };
                                            const items = [tmp26, tmp47];
                                            obj4.children = items;
                                            const tmp54 = closure_1_8(React4, obj4);
                                            cResult[31] = tmp4.container;
                                            cResult[32] = tmp47;
                                            cResult[33] = tmp26;
                                            cResult[34] = tmp54;
                                            tmp51 = tmp54;
                                          }
                                        }
                                      }
                                      const obj5 = { style: tmp4.reviewContainer, children: null };
                                      const items1 = [tmp31, tmp39, tmp43];
                                      obj5.children = items1;
                                      const tmp50 = closure_1_8(React4, obj5);
                                      cResult[26] = tmp4.reviewContainer;
                                      cResult[27] = tmp43;
                                      cResult[28] = tmp31;
                                      cResult[29] = tmp39;
                                      cResult[30] = tmp50;
                                      tmp47 = tmp50;
                                    }
                                  }
                                }
                                let tmp44 = null;
                                if (tmp21) {
                                  tmp44 = null;
                                  if (null != opencriticUrl) {
                                    const obj6 = { game, url: opencriticUrl, trackAction };
                                    tmp44 = React5(closure_12, obj6);
                                  }
                                }
                                cResult[21] = game;
                                cResult[22] = opencriticUrl;
                                cResult[23] = tmp21;
                                cResult[24] = trackAction;
                                cResult[25] = tmp44;
                                tmp43 = tmp44;
                              }
                            }
                          }
                        }
                      }
                    }
                    let tmp40 = null;
                    if (tmp7) {
                      tmp40 = null;
                      if (null != steamWebsiteUrl) {
                        const obj7 = {
                          url: steamWebsiteUrl,
                          showBorderBottom: tmp21,
                          trackAction,
                          title: null,
                          rating: null,
                          ratingCount: null,
                          isRecentRating: false,
                        };
                        const intl3 = util.intl;
                        obj7.title = intl3.string(tmp19);
                        obj7.rating = rating;
                        obj7.ratingCount = ratingCount;
                        tmp40 = React5(closure_11, obj7);
                      }
                    }
                    cResult[13] = tmp21;
                    cResult[14] = rating;
                    cResult[15] = ratingCount;
                    cResult[16] = tmp19;
                    cResult[17] = tmp7;
                    cResult[18] = steamWebsiteUrl;
                    cResult[19] = trackAction;
                    cResult[20] = tmp40;
                    tmp39 = tmp40;
                  }
                }
              }
            }
          }
          let tmp33Result = null;
          if (tmp13) {
            tmp33Result = null;
            if (null != steamWebsiteUrl) {
              const obj8 = {
                url: steamWebsiteUrl,
                showBorderBottom: tmp22,
                trackAction,
                title: null,
                rating: null,
                ratingCount: null,
                isRecentRating: true,
              };
              const intl2 = util.intl;
              obj8.title = intl2.string(util.t.MQGNsN);
              let recentRating2;
              if (steam != null) {
                recentRating2 = steam.recentRating;
              }
              obj8.rating = recentRating2;
              let recentRatingCount2;
              if (steam != null) {
                recentRatingCount2 = steam.recentRatingCount;
              }
              obj8.ratingCount = recentRatingCount2;
              tmp33Result = React5(closure_11, obj8);
            }
          }
          cResult[6] = tmp22;
          cResult[7] = tmp13;
          let recentRating3;
          if (steam != null) {
            recentRating3 = steam.recentRating;
          }
          cResult[8] = recentRating3;
          let recentRatingCount3;
          if (steam != null) {
            recentRatingCount3 = steam.recentRatingCount;
          }
          cResult[9] = recentRatingCount3;
          cResult[10] = steamWebsiteUrl;
          cResult[11] = trackAction;
          cResult[12] = tmp33Result;
          tmp31 = tmp33Result;
          const tmpResult = GameProfileReviewUtils;
        }
        const result1 = calculateSteamReviewScoreDescription2.calculateSteamReviewScoreDescription(
          recentRating,
          recentRatingCount,
          true,
        );
        cResult[0] = recentRating;
        cResult[1] = recentRatingCount;
        cResult[2] = result1;
        tmp11 = result1;
        const tmpResult2 = calculateSteamReviewScoreDescription2;
      }
    }
  : (arg0) => {
      ({ game, trackAction } = arg0);
      const tmp = closure_10();
      let id;
      if (game != null) {
        id = game.id;
      }
      const steamWebsiteUrl = useSteamWebsiteUrl.useSteamWebsiteUrl(id);
      if (game != null) {
        const opencriticUrl = game.opencriticUrl;
      }
      if (null == game) {
        return null;
      } else {
        const tmp6 =
          game.steamReleaseStatus !== SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED &&
          null != steamWebsiteUrl;
        const reviews = game.reviews;
        let steam;
        if (reviews != null) {
          steam = reviews.steam;
        }
        const calculateSteamReviewScoreDescription =
          calculateSteamReviewScoreDescription2.calculateSteamReviewScoreDescription;
        if (steam != null) {
          const recentRating = steam.recentRating;
        }
        if (steam != null) {
          const recentRatingCount = steam.recentRatingCount;
        }
        let tmp10 = tmp6;
        if (tmp6) {
          tmp10 = tmp9 !== GameDetectionTypes.SteamReviewScoreDescription.NO_USER_REVIEWS;
        }
        const tmp2Result = calculateSteamReviewScoreDescription2;
        const result = GameProfileReviewUtils.canShowLocalizedSteamReview(steam);
        if (result) {
          let localizedRating;
          if (!tmp12) {
            localizedRating = steam.localizedRating;
          }
          let rating = localizedRating;
        } else if (!tmp12) {
          rating = steam.rating;
        }
        if (result) {
          let localizedRatingCount;
          if (!tmp14) {
            localizedRatingCount = steam.localizedRatingCount;
          }
          let ratingCount = localizedRatingCount;
        } else if (!tmp14) {
          ratingCount = steam.ratingCount;
        }
        const t = util.t;
        const reviews2 = game.reviews;
        let opencritic;
        if (reviews2 != null) {
          opencritic = reviews2.opencritic;
        }
        if (!tmp6) {
          if (!tmp10) {
            let tmp20Result = null;
          }
          return tmp20Result;
        }
        const obj2 = { style: tmp.container, children: null };
        const obj3 = {
          variant: "heading-sm/semibold",
          color: "mobile-text-heading-primary",
          style: tmp.headerText,
          children: null,
        };
        const intl = util.intl;
        obj3.children = intl.string(util.t.GaAQXP);
        const items = [React5(Text_Text.Text, obj3)];
        const obj4 = { style: tmp.reviewContainer, children: null };
        let tmp22Result = null;
        if (tmp10) {
          tmp22Result = null;
          if (null != steamWebsiteUrl) {
            const obj5 = {
              url: steamWebsiteUrl,
              showBorderBottom: null,
              trackAction: null,
              title: null,
              rating: null,
              ratingCount: null,
              isRecentRating: true,
            };
            let tmp25 = tmp6;
            if (!tmp6) {
              tmp25 = tmp18;
            }
            obj5.showBorderBottom = tmp25;
            obj5.trackAction = trackAction;
            const intl2 = util.intl;
            obj5.title = intl2.string(util.t.MQGNsN);
            let recentRating1;
            if (steam != null) {
              recentRating1 = steam.recentRating;
            }
            obj5.rating = recentRating1;
            let recentRatingCount1;
            if (steam != null) {
              recentRatingCount1 = steam.recentRatingCount;
            }
            obj5.ratingCount = recentRatingCount1;
            tmp22Result = React5(closure_11, obj5);
          }
        }
        const items1 = [tmp22Result, ,];
        let tmp22Result3 = null;
        if (tmp6) {
          tmp22Result3 = null;
          if (null != steamWebsiteUrl) {
            const obj6 = {
              url: steamWebsiteUrl,
              showBorderBottom: tmp18,
              trackAction,
              title: null,
              rating: null,
              ratingCount: null,
              isRecentRating: false,
            };
            const intl3 = util.intl;
            obj6.title = intl3.string(tmp16);
            obj6.rating = rating;
            obj6.ratingCount = ratingCount;
            tmp22Result3 = React5(closure_11, obj6);
          }
        }
        items1[1] = tmp22Result3;
        let tmp22Result4 = null;
        if (null != opencritic && null != opencriticUrl) {
          tmp22Result4 = null;
          if (null != opencriticUrl) {
            const obj7 = { game, url: opencriticUrl, trackAction };
            tmp22Result4 = React5(closure_12, obj7);
          }
        }
        items1[2] = tmp22Result4;
        obj4.children = items1;
        items[1] = closure_1_8(React4, obj4);
        obj2.children = items;
        tmp20Result = closure_1_8(React4, obj2);
        tmp16 = result ? t["aWb+V4"] : t["8e4LiB"];
        const tmp2Result2 = GameProfileReviewUtils;
      }
    };
