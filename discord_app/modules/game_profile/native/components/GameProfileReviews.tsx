// discord_app/modules/game_profile/native/components/GameProfileReviews.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import GameDetectionTypes from "../../../game_detection/GameDetectionTypes.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import useSteamWebsiteUrl2 from "../../hooks/useSteamWebsiteUrl.tsx";
import SteamReleaseStatus from "../../../../../discord_common/js/shared/shared-constants/SteamReleaseStatus.tsx";
import calculateSteamReviewScoreDescription2 from "../../../game_detection/calculateSteamReviewScoreDescription.tsx";
import GameProfileReviewUtils from "../../GameProfileReviewUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
({ View: closure_4, Pressable: hasOwnProperty, Image: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 32;
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  headerText: obj3,
  reviewContainer: obj4,
  reviewRow: obj5,
  reviewRowNotLast: obj6,
  steamNameContainer: obj7,
  steamRatingContainer: obj8,
  steamScoreDescription: { flexShrink: 1 },
  opencriticRightContainer: obj9,
  opencriticTopCriticContainer: size,
  opencriticTopCriticImage: { width: 32, height: 32 },
  opencriticTopCriticRatingContainer: {
    position: "absolute",
    top: 0,
    left: 1,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  linkText: { textDecorationLine: "underline" },
};
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj4 = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
};
obj5 = {
  height: 56,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: nativeDefault.space.PX_12,
};
obj6 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj8 = {
  flexDirection: "row",
  alignItems: "flex-end",
  flexShrink: 1,
  paddingLeft: nativeDefault.space.PX_32,
  gap: nativeDefault.space.PX_4,
};
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
size = {
  width: 32,
  height: 32,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  alignItems: "center",
  justifyContent: "center",
};
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (url) => {
      let closure_2;
      let isRecentRating;
      let items;
      let items1;
      let items3;
      let num;
      let rating;
      let ratingCount;
      let showBorderBottom;
      let str;
      let str2;
      let str6;
      let title;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp16;
      let tmp17;
      let tmp18;
      let tmp19;
      let tmp8;
      let tmp9;
      let trackAction;
      const obj = url(576);
      const cResult = obj.c(70);
      url = url.url;
      ({ showBorderBottom, trackAction } = url);
      ({ title, rating, ratingCount, isRecentRating } = url);
      const tmp4 = closure_10();
      const alwaysShowLinkDecorations = react.useContext(
        url(4602).AccessibilityPreferencesContext,
      ).alwaysShowLinkDecorations;
      const tmp6 = trackAction(8361);
      const tmp6Result = tmp6(trackAction(4571).openURL);
      dependencyMap = tmp6Result;
      if (cResult[0] === alwaysShowLinkDecorations) {
        if (cResult[1] === isRecentRating) {
          if (cResult[2] === tmp6Result) {
            if (cResult[3] === rating) {
              if (cResult[4] === ratingCount) {
                if (cResult[5] === showBorderBottom) {
                  if (cResult[6] === tmp4.linkText) {
                    if (cResult[7] === tmp4.reviewRow) {
                      if (cResult[8] === tmp4.reviewRowNotLast) {
                        if (cResult[9] === tmp4.steamNameContainer) {
                          if (cResult[10] === tmp4.steamRatingContainer) {
                            if (cResult[11] === tmp4.steamScoreDescription) {
                              if (cResult[12] === title) {
                                if (cResult[13] === trackAction) {
                                  if (cResult[14] === url) {
                                    tmp8 = cResult[15];
                                    tmp9 = cResult[16];
                                    tmp10 = cResult[17];
                                    tmp11 = cResult[18];
                                    str = cResult[19];
                                    tmp12 = cResult[20];
                                    tmp13 = cResult[21];
                                    tmp14 = cResult[22];
                                    num = cResult[23];
                                    tmp15 = cResult[24];
                                    tmp16 = cResult[25];
                                    tmp17 = cResult[26];
                                    tmp18 = cResult[27];
                                    str2 = cResult[28];
                                    tmp19 = cResult[29];
                                  }
                                  if (cResult[47] === tmp8) {
                                    if (cResult[48] === str) {
                                      if (cResult[49] === tmp14) {
                                        if (cResult[50] === num) {
                                          if (cResult[51] === tmp15) {
                                            let tmp43;
                                            if (cResult[52] === tmp16) {
                                              tmp43 = cResult[53];
                                            }
                                            if (cResult[54] === ratingCount) {
                                              let tmp46;
                                              if (cResult[55] === tmp11) {
                                                tmp46 = cResult[56];
                                              }
                                              if (cResult[57] === tmp9) {
                                                if (cResult[58] === tmp43) {
                                                  if (cResult[59] === tmp46) {
                                                    let tmp50;
                                                    if (cResult[60] === tmp17) {
                                                      tmp50 = cResult[61];
                                                    }
                                                    if (cResult[62] === tmp10) {
                                                      if (cResult[63] === tmp12) {
                                                        if (cResult[64] === tmp13) {
                                                          if (cResult[65] === tmp50) {
                                                            if (cResult[66] === tmp18) {
                                                              if (cResult[67] === str2) {
                                                                let tmp53;
                                                                if (cResult[68] === tmp19) {
                                                                  tmp53 = cResult[69];
                                                                }
                                                                return tmp53;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    const obj2 = {
                                                      onPress: tmp18,
                                                      accessibilityRole: str2,
                                                      accessibilityLabel: tmp19,
                                                      style: tmp12,
                                                      children: items,
                                                    };
                                                    items = [tmp13, tmp50];
                                                    const tmp55 = closure_8(tmp10, obj2);
                                                    cResult[62] = tmp10;
                                                    cResult[63] = tmp12;
                                                    cResult[64] = tmp13;
                                                    cResult[65] = tmp50;
                                                    cResult[66] = tmp18;
                                                    cResult[67] = str2;
                                                    cResult[68] = tmp19;
                                                    cResult[69] = tmp55;
                                                    tmp53 = tmp55;
                                                  }
                                                }
                                              }
                                              const obj3 = { style: tmp17, children: items1 };
                                              items1 = [tmp43, tmp46];
                                              const tmp52 = closure_8(tmp9, obj3);
                                              cResult[57] = tmp9;
                                              cResult[58] = tmp43;
                                              cResult[59] = tmp46;
                                              cResult[60] = tmp17;
                                              cResult[61] = tmp52;
                                              tmp50 = tmp52;
                                            }
                                            let tmp48 =
                                              null != ratingCount &&
                                              tmp11 !== tmp(2027).SteamReviewScoreDescription.NO_USER_REVIEWS;
                                            if (tmp48) {
                                              const obj4 = {
                                                variant: "text-sm/medium",
                                                color: "text-subtle",
                                                children: str6.toString(),
                                              };
                                              const Text2 = tmp(4892).Text;
                                              const intl2 = tmp(1126).intl;
                                              const format = intl2.format;
                                              const obj5 = { rating_count: ratingCount.toLocaleString() };
                                              const sgIoin = tmp(1126).t.sgIoin;
                                              str6 = format(sgIoin, obj5);
                                              tmp48 = closure_7(Text2, obj4);
                                            }
                                            cResult[54] = ratingCount;
                                            cResult[55] = tmp11;
                                            cResult[56] = tmp48;
                                            tmp46 = tmp48;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj6 = {
                                    variant: str,
                                    color: tmp14,
                                    lineClamp: num,
                                    style: tmp15,
                                    children: tmp16,
                                  };
                                  const tmp45 = closure_7(tmp8, obj6);
                                  cResult[47] = tmp8;
                                  cResult[48] = str;
                                  cResult[49] = tmp14;
                                  cResult[50] = num;
                                  cResult[51] = tmp15;
                                  cResult[52] = tmp16;
                                  cResult[53] = tmp45;
                                  tmp43 = tmp45;
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
      const tmpResult = url(8408);
      const result = tmpResult.calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating);
      const tmpResult3 = url(8409);
      const steamReviewScoreDescriptionColor = tmpResult3.getSteamReviewScoreDescriptionColor(result);
      if (cResult[30] === tmp6Result) {
        if (cResult[31] === trackAction) {
          let tmp22;
          let tmp25;
          if (cResult[32] === url) {
            tmp22 = cResult[33];
          }
          const _Symbol = Symbol;
          if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(url(1126).t.YNC5Di);
            cResult[34] = stringResult;
            tmp25 = stringResult;
          } else {
            tmp25 = cResult[34];
          }
          if (cResult[35] === tmp4.reviewRow) {
            let tmp28;
            let tmp29;
            let tmp32;
            if (cResult[36] === (showBorderBottom && tmp4.reviewRowNotLast)) {
              tmp28 = cResult[37];
            }
            const _Symbol2 = Symbol;
            if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
              const obj7 = { size: "sm", color: trackAction(587).colors.ICON_STRONG };
              const SteamNeutralIcon = tmp(8371).SteamNeutralIcon;
              const tmp31 = closure_7(SteamNeutralIcon, obj7);
              cResult[38] = tmp31;
              tmp29 = tmp31;
            } else {
              tmp29 = cResult[38];
            }
            if (cResult[39] !== title) {
              const obj8 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: title };
              const tmp34 = closure_7(url(4892).Text, obj8);
              cResult[39] = title;
              cResult[40] = tmp34;
              tmp32 = tmp34;
            } else {
              tmp32 = cResult[40];
            }
            if (cResult[41] === tmp4.steamNameContainer) {
              let tmp35;
              if (cResult[42] === tmp32) {
                tmp35 = cResult[43];
              }
              const steamRatingContainer = tmp4.steamRatingContainer;
              const Text = tmp(4892).Text;
              let linkText;
              if (alwaysShowLinkDecorations) {
                linkText = tmp4.linkText;
              }
              if (cResult[44] === tmp4.steamScoreDescription) {
                let tmp41;
                if (cResult[45] === linkText) {
                  tmp41 = cResult[46];
                }
                const tmpResult4 = url(8409);
                const steamReviewScoreDescriptionIntl = tmpResult4.getSteamReviewScoreDescriptionIntl(result);
                cResult[0] = alwaysShowLinkDecorations;
                cResult[1] = isRecentRating;
                cResult[2] = tmp6Result;
                cResult[3] = rating;
                cResult[4] = ratingCount;
                cResult[5] = showBorderBottom;
                cResult[6] = tmp4.linkText;
                cResult[7] = tmp4.reviewRow;
                cResult[8] = tmp4.reviewRowNotLast;
                cResult[9] = tmp4.steamNameContainer;
                cResult[10] = tmp4.steamRatingContainer;
                cResult[11] = tmp4.steamScoreDescription;
                cResult[12] = title;
                cResult[13] = trackAction;
                class M {
                  constructor() {
                    tmp = trackAction(closure_0(closure_2[12]).GameProfileTrackActionActions.SteamReviews);
                    tmp2 = closure_2(url);
                    return;
                  }
                }
                cResult[14] = url;
                cResult[15] = Text;
                cResult[16] = closure_4;
                cResult[17] = closure_5;
                cResult[18] = result;
                cResult[19] = "text-sm/medium";
                cResult[20] = tmp28;
                cResult[21] = tmp35;
                cResult[22] = steamReviewScoreDescriptionColor;
                cResult[23] = 1;
                cResult[24] = tmp41;
                cResult[25] = steamReviewScoreDescriptionIntl;
                cResult[26] = steamRatingContainer;
                cResult[27] = tmp22;
                cResult[28] = "link";
                cResult[29] = tmp25;
                tmp15 = tmp41;
                tmp19 = tmp25;
                str2 = "link";
                tmp18 = tmp22;
                tmp17 = steamRatingContainer;
                tmp16 = steamReviewScoreDescriptionIntl;
                num = 1;
                tmp14 = steamReviewScoreDescriptionColor;
                tmp13 = tmp35;
                tmp12 = tmp28;
                str = "text-sm/medium";
                tmp11 = result;
                tmp10 = closure_5;
                tmp9 = closure_4;
                tmp8 = Text;
              }
              const items2 = [tmp4.steamScoreDescription, linkText];
              cResult[44] = tmp4.steamScoreDescription;
              cResult[45] = linkText;
              cResult[46] = items2;
              tmp41 = items2;
            }
            const obj9 = { style: tmp4.steamNameContainer, children: items3 };
            items3 = [tmp29, tmp32];
            const tmp38 = closure_8(closure_4, obj9);
            cResult[41] = tmp4.steamNameContainer;
            cResult[42] = tmp32;
            cResult[43] = tmp38;
            tmp35 = tmp38;
          }
          const items4 = [tmp4.reviewRow, showBorderBottom && tmp4.reviewRowNotLast];
          cResult[35] = tmp4.reviewRow;
          cResult[36] = showBorderBottom && tmp4.reviewRowNotLast;
          cResult[37] = items4;
          tmp28 = items4;
        }
      }
      class M {
        constructor() {
          tmp = trackAction(closure_0(closure_2[12]).GameProfileTrackActionActions.SteamReviews);
          tmp2 = closure_2(url);
          return;
        }
      }
      cResult[30] = tmp6Result;
      cResult[31] = trackAction;
      cResult[32] = url;
      cResult[33] = M;
      tmp22 = M;
    }
  : (url) => {
      let closure_2;
      let intl;
      let isRecentRating;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let rating;
      let showBorderBottom;
      let str;
      let title;
      let tmp2Result;
      let trackAction;
      url = url.url;
      ({ showBorderBottom, trackAction } = url);
      const ratingCount = url.ratingCount;
      ({ title, rating, isRecentRating } = url);
      const tmp = closure_10();
      const alwaysShowLinkDecorations = react.useContext(
        url(4602).AccessibilityPreferencesContext,
      ).alwaysShowLinkDecorations;
      const tmp5 = trackAction(8361);
      const tmp5Result = tmp5(trackAction(4571).openURL);
      dependencyMap = tmp5Result;
      const obj = url(8408);
      const result = obj.calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating);
      const items = [tmp5Result, url, trackAction];
      const obj2 = url(8409);
      const steamReviewScoreDescriptionColor = obj2.getSteamReviewScoreDescriptionColor(result);
      const obj3 = {
        onPress: react.useCallback(() => {
          trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamReviews);
          closure_2(url);
        }, items),
        accessibilityRole: "link",
        accessibilityLabel: intl.string(url(1126).t.YNC5Di),
        style: items1,
        children: items3,
      };
      intl = url(1126).intl;
      items1 = [tmp.reviewRow];
      if (showBorderBottom) {
        showBorderBottom = tmp.reviewRowNotLast;
      }
      items1[1] = showBorderBottom;
      const obj4 = { style: tmp.steamNameContainer, children: items2 };
      const obj5 = { size: "sm", color: trackAction(587).colors.ICON_STRONG };
      const SteamNeutralIcon = tmp2(8371).SteamNeutralIcon;
      items2 = [
        closure_7(SteamNeutralIcon, obj5),
        closure_7(tmp2(4892).Text, {
          variant: "heading-sm/medium",
          color: "mobile-text-heading-primary",
          children: title,
        }),
      ];
      items3 = [closure_8(closure_4, obj4)];
      const obj6 = { style: tmp.steamRatingContainer, children: items5 };
      const obj7 = {
        variant: "text-sm/medium",
        color: steamReviewScoreDescriptionColor,
        lineClamp: 1,
        style: items4,
        children: tmp2Result.getSteamReviewScoreDescriptionIntl(result),
      };
      items4 = [tmp.steamScoreDescription];
      let linkText;
      const Text = tmp2(4892).Text;
      if (alwaysShowLinkDecorations) {
        linkText = tmp.linkText;
      }
      items4[1] = linkText;
      tmp2Result = url(8409);
      items5 = [closure_7(Text, obj7)];
      let tmp12Result = null != ratingCount && result !== tmp2(2027).SteamReviewScoreDescription.NO_USER_REVIEWS;
      if (tmp12Result) {
        const obj8 = { variant: "text-sm/medium", color: "text-subtle", children: str.toString() };
        const Text2 = tmp2(4892).Text;
        const intl2 = tmp2(1126).intl;
        const format = intl2.format;
        const obj9 = { rating_count: ratingCount.toLocaleString() };
        const sgIoin = tmp2(1126).t.sgIoin;
        str = format(sgIoin, obj9);
        tmp12Result = closure_7(Text2, obj8);
      }
      items5[1] = tmp12Result;
      items3[1] = closure_8(closure_4, obj6);
      return closure_8(closure_5, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (trackAction) => {
      let Text2;
      let backgroundColor;
      let closure_2;
      let foregroundColor;
      let game;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      let items2;
      let items3;
      let obj10;
      let obj12;
      let obj13;
      let tier;
      let tmp7;
      let tmpResult5;
      let tmpResult6;
      let topCriticRating;
      let url;
      const obj = url(576);
      const cResult = obj.c(35);
      ({ game, url } = trackAction);
      trackAction = trackAction.trackAction;
      const tmp4 = closure_10();
      const reviews = game.reviews;
      let opencritic;
      const first = cResult[0];
      if (reviews != null) {
        opencritic = reviews.opencritic;
      }
      if (first !== opencritic) {
        const reviews2 = game.reviews;
        let opencritic1;
        if (reviews2 != null) {
          opencritic1 = reviews2.opencritic;
        }
        if (opencritic1 == null) {
          opencritic1 = {
            topCriticRating: "duration",
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
        tmp7 = opencritic1;
      } else {
        tmp7 = cResult[1];
      }
      ({ tier, topCriticRating } = tmp7);
      if (topCriticRating == null) {
        topCriticRating = -1;
      }
      let num3 = tmp7.topCriticRatingCount;
      if (num3 == null) {
        num3 = -1;
      }
      const tmp11 = trackAction(8361);
      const tmp11Result = tmp11(trackAction(4571).openURL);
      dependencyMap = tmp11Result;
      const tmp10 = trackAction;
      if (cResult[2] === tmp11Result) {
        if (cResult[3] === trackAction) {
          let tmp13;
          let tmp14;
          let tmp16;
          let tmp18;
          let tmp20;
          if (cResult[4] === url) {
            tmp13 = cResult[5];
          }
          if (cResult[6] !== tier) {
            let str = "";
            if (null != tier) {
              const tmpResult = url(8410);
              str = tmpResult.getOpenCriticTierText(tier);
            }
            cResult[6] = tier;
            cResult[7] = str;
            tmp14 = str;
          } else {
            tmp14 = cResult[7];
          }
          if (cResult[8] !== tier) {
            let openCriticCircleRatingColor;
            if (null != tier) {
              const tmpResult4 = url(8410);
              openCriticCircleRatingColor = tmpResult4.getOpenCriticCircleRatingColor(tier);
            } else {
              openCriticCircleRatingColor = { foregroundColor: "", backgroundColor: "" };
            }
            cResult[8] = tier;
            cResult[9] = openCriticCircleRatingColor;
            tmp16 = openCriticCircleRatingColor;
          } else {
            tmp16 = cResult[9];
          }
          ({ foregroundColor, backgroundColor } = tmp16);
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = url(1126).intl;
            const stringResult = intl.string(url(1126).t.aLNBAw);
            cResult[10] = stringResult;
            tmp18 = stringResult;
          } else {
            tmp18 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = {
              variant: "heading-sm/medium",
              color: "mobile-text-heading-primary",
              children: intl2.string(url(1126).t["UxvER+"]),
            };
            const Text = url(4892).Text;
            intl2 = url(1126).intl;
            const tmp22 = closure_7(Text, obj2);
            cResult[11] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[11];
          }
          if (cResult[12] === tmp4.opencriticTopCriticContainer) {
            if (cResult[13] === tmp4.opencriticTopCriticImage) {
              if (cResult[14] === tier) {
                let tmp23;
                if (cResult[15] === tmp14) {
                  tmp23 = cResult[16];
                }
                if (cResult[17] === backgroundColor) {
                  if (cResult[18] === foregroundColor) {
                    if (cResult[19] === (null != tier && topCriticRating > 0 && num3 > 0)) {
                      if (cResult[20] === topCriticRating) {
                        if (cResult[21] === tmp4.opencriticTopCriticContainer) {
                          let tmp28;
                          let tmp34;
                          if (cResult[22] === tmp4.opencriticTopCriticRatingContainer) {
                            tmp28 = cResult[23];
                          }
                          if (cResult[24] !== ((topCriticRating <= 0 || num3 <= 0) && null == tier)) {
                            let tmp35 = null;
                            if ((topCriticRating <= 0 || num3 <= 0) && null == tier) {
                              const obj3 = {
                                variant: "text-xs/medium",
                                color: tmpResult5.getSteamReviewScoreDescriptionColor(
                                  url(2027).SteamReviewScoreDescription.NO_USER_REVIEWS,
                                ),
                                children: intl4.string(url(1126).t["0xYzpO"]),
                              };
                              const Text3 = url(4892).Text;
                              tmpResult5 = url(8409);
                              intl4 = url(1126).intl;
                              tmp35 = closure_7(Text3, obj3);
                            }
                            cResult[24] = (topCriticRating <= 0 || num3 <= 0) && null == tier;
                            cResult[25] = tmp35;
                            tmp34 = tmp35;
                          } else {
                            tmp34 = cResult[25];
                          }
                          if (cResult[26] === tmp4.opencriticRightContainer) {
                            if (cResult[27] === tmp23) {
                              if (cResult[28] === tmp28) {
                                let tmp37;
                                if (cResult[29] === tmp34) {
                                  tmp37 = cResult[30];
                                }
                                if (cResult[31] === tmp13) {
                                  if (cResult[32] === tmp4.reviewRow) {
                                    let tmp41;
                                    if (cResult[33] === tmp37) {
                                      tmp41 = cResult[34];
                                    }
                                    return tmp41;
                                  }
                                }
                                const obj4 = {
                                  onPress: tmp13,
                                  accessibilityRole: "link",
                                  accessibilityLabel: tmp18,
                                  style: tmp4.reviewRow,
                                  children: items,
                                };
                                items = [tmp20, tmp37];
                                const tmp44 = closure_8(closure_5, obj4);
                                cResult[31] = tmp13;
                                cResult[32] = tmp4.reviewRow;
                                cResult[33] = tmp37;
                                cResult[34] = tmp44;
                                tmp41 = tmp44;
                              }
                            }
                          }
                          const obj5 = { style: tmp4.opencriticRightContainer, children: items1 };
                          items1 = [tmp23, tmp28, tmp34];
                          const tmp40 = closure_8(closure_4, obj5);
                          cResult[26] = tmp4.opencriticRightContainer;
                          cResult[27] = tmp23;
                          cResult[28] = tmp28;
                          cResult[29] = tmp34;
                          cResult[30] = tmp40;
                          tmp37 = tmp40;
                        }
                      }
                    }
                  }
                }
                let tmp29 = null;
                if (null != tier && topCriticRating > 0 && num3 > 0) {
                  const obj6 = {
                    style: items2,
                    accessibilityLabel: intl3.string(url(1126).t.Ub4YR1),
                    accessibilityRole: "image",
                    children: items3,
                  };
                  items2 = [tmp4.opencriticTopCriticContainer];
                  const obj7 = { backgroundColor };
                  items2[1] = obj7;
                  intl3 = url(1126).intl;
                  const obj8 = { rating: topCriticRating, strokeColor: foregroundColor, size };
                  items3 = [closure_7(tmp10(8416), obj8)];
                  const obj9 = { style: tmp4.opencriticTopCriticRatingContainer, children: closure_7(Text2, obj10) };
                  const _Math = Math;
                  obj10 = {
                    variant: "text-xs/bold",
                    color: "text-overlay-light",
                    children: Math.floor(topCriticRating),
                  };
                  Text2 = url(4892).Text;
                  items3[1] = closure_7(closure_4, obj9);
                  tmp29 = closure_8(closure_4, obj6);
                }
                cResult[17] = backgroundColor;
                cResult[18] = foregroundColor;
                cResult[19] = null != tier && topCriticRating > 0 && num3 > 0;
                cResult[20] = topCriticRating;
                cResult[21] = tmp4.opencriticTopCriticContainer;
                cResult[22] = tmp4.opencriticTopCriticRatingContainer;
                cResult[23] = tmp29;
                tmp28 = tmp29;
              }
            }
          }
          let tmp24 = null;
          if (null != tier) {
            const obj11 = {
              style: tmp4.opencriticTopCriticContainer,
              accessibilityLabel: tmp14,
              accessibilityRole: "image",
              children: closure_7(closure_6, obj12),
            };
            obj12 = {
              source: obj13,
              style: tmp4.opencriticTopCriticImage,
              accessible: true,
              accessibilityLabel: tmp14,
            };
            obj13 = { uri: tmpResult6.getOpenCriticTierImage(tier) };
            tmpResult6 = url(8410);
            tmp24 = closure_7(closure_4, obj11);
          }
          cResult[12] = tmp4.opencriticTopCriticContainer;
          cResult[13] = tmp4.opencriticTopCriticImage;
          cResult[14] = tier;
          cResult[15] = tmp14;
          cResult[16] = tmp24;
          tmp23 = tmp24;
        }
      }
      const fn = function b() {
        trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.OpenCriticReviews);
        closure_2(url);
      };
      cResult[2] = tmp11Result;
      cResult[3] = trackAction;
      cResult[4] = url;
      cResult[5] = fn;
      tmp13 = fn;
    }
  : (url) => {
      let Text2;
      let backgroundColor;
      let closure_2;
      let foregroundColor;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj13;
      let obj7;
      let obj8;
      let openCriticCircleRatingColor;
      let tier;
      let tmp11Result;
      let tmp11Result2;
      let tmp12Result2;
      let topCriticRating;
      url = url.url;
      const trackAction = url.trackAction;
      dependencyMap = undefined;
      const game = url.game;
      const tmp = closure_10();
      const reviews = game.reviews;
      let opencritic;
      if (reviews != null) {
        opencritic = reviews.opencritic;
      }
      if (opencritic == null) {
        opencritic = {
          topCriticRating: "duration",
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
      const tmp4 = trackAction(8361);
      const tmp4Result = tmp4(trackAction(4571).openURL);
      dependencyMap = tmp4Result;
      const items = [tmp4Result, url, trackAction];
      let str = "";
      const callback = react.useCallback(() => {
        trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.OpenCriticReviews);
        closure_2(url);
      }, items);
      const tmp2 = trackAction;
      if (null != tier) {
        const obj2 = url(8410);
        str = obj2.getOpenCriticTierText(tier);
      }
      if (null != tier) {
        const obj4 = url(8410);
        openCriticCircleRatingColor = obj4.getOpenCriticCircleRatingColor(tier);
      } else {
        openCriticCircleRatingColor = { foregroundColor: "", backgroundColor: "" };
      }
      ({ foregroundColor, backgroundColor } = openCriticCircleRatingColor);
      const obj = {
        onPress: callback,
        accessibilityRole: "link",
        accessibilityLabel: intl.string(url(1126).t.aLNBAw),
        style: tmp.reviewRow,
        children: items1,
      };
      intl = url(1126).intl;
      const obj3 = {
        variant: "heading-sm/medium",
        color: "mobile-text-heading-primary",
        children: intl2.string(url(1126).t["UxvER+"]),
      };
      const Text = url(4892).Text;
      intl2 = url(1126).intl;
      items1 = [closure_7(Text, obj3)];
      let tmp12Result = null;
      const obj5 = { style: tmp.opencriticRightContainer, children: items2 };
      if (null != tier) {
        const obj6 = {
          style: tmp.opencriticTopCriticContainer,
          accessibilityLabel: str,
          accessibilityRole: "image",
          children: closure_7(closure_6, obj7),
        };
        obj7 = { source: obj8, style: tmp.opencriticTopCriticImage, accessible: true, accessibilityLabel: str };
        obj8 = { uri: tmp11Result.getOpenCriticTierImage(tier) };
        tmp11Result = url(8410);
        tmp12Result = closure_7(closure_4, obj6);
      }
      items2 = [tmp12Result, ,];
      let tmp9Result = null;
      if (null != tier) {
        tmp9Result = null;
        if (topCriticRating > 0) {
          tmp9Result = null;
          if (num > 0) {
            const obj9 = {
              style: items3,
              accessibilityLabel: intl3.string(url(1126).t.Ub4YR1),
              accessibilityRole: "image",
              children: items4,
            };
            items3 = [tmp.opencriticTopCriticContainer];
            const obj10 = { backgroundColor };
            items3[1] = obj10;
            intl3 = tmp11(1126).intl;
            const obj11 = { rating: topCriticRating, strokeColor: foregroundColor, size };
            items4 = [closure_7(tmp2(8416), obj11)];
            const obj12 = { style: tmp.opencriticTopCriticRatingContainer, children: closure_7(Text2, obj13) };
            const _Math = Math;
            obj13 = { variant: "text-xs/bold", color: "text-overlay-light", children: Math.floor(topCriticRating) };
            Text2 = tmp11(4892).Text;
            items4[1] = closure_7(closure_4, obj12);
            tmp9Result = closure_8(closure_4, obj9);
          }
        }
      }
      items2[1] = tmp9Result;
      if (topCriticRating <= 0) {
        tmp12Result2 = null;
        if (null == tier) {
          const obj14 = {
            variant: "text-xs/medium",
            color: tmp11Result2.getSteamReviewScoreDescriptionColor(
              url(2027).SteamReviewScoreDescription.NO_USER_REVIEWS,
            ),
            children: intl4.string(url(1126).t["0xYzpO"]),
          };
          const Text3 = tmp11(4892).Text;
          tmp11Result2 = url(8409);
          intl4 = tmp11(1126).intl;
          tmp12Result2 = closure_7(Text3, obj14);
        }
      } else {
        tmp12Result2 = null;
      }
      items2[2] = tmp12Result2;
      items1[1] = closure_8(closure_4, obj5);
      return closure_8(closure_5, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let container;
      let game;
      let headerText;
      let intl2;
      let intl3;
      let items;
      let items1;
      let opencriticUrl;
      let recentRating2;
      let recentRatingCount2;
      let trackAction;
      const obj = react2;
      const cResult = obj.c(35);
      ({ game, trackAction } = arg0);
      const tmp4 = closure_10();
      let id;
      const useSteamWebsiteUrl = useSteamWebsiteUrl2.useSteamWebsiteUrl;
      useSteamWebsiteUrl2;
      if (game != null) {
        id = game.id;
      }
      const steamWebsiteUrl = useSteamWebsiteUrl(id);
      if (game != null) {
        opencriticUrl = game.opencriticUrl;
      }
      if (null == game) {
        return null;
      } else {
        const tmp8 =
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
          let tmp12;
          let rating;
          let ratingCount;
          let tmp25;
          let tmp27;
          if (cResult[1] === recentRatingCount) {
            tmp12 = cResult[2];
          }
          const tmp14 = tmp8 && tmp12 !== GameDetectionTypes.SteamReviewScoreDescription.NO_USER_REVIEWS;
          const tmpResult = GameProfileReviewUtils;
          const result = tmpResult.canShowLocalizedSteamReview(steam);
          if (result) {
            let localizedRating;
            if (steam != null) {
              localizedRating = steam.localizedRating;
            }
            rating = localizedRating;
          } else if (steam != null) {
            rating = steam.rating;
          }
          if (result) {
            let localizedRatingCount;
            if (steam != null) {
              localizedRatingCount = steam.localizedRatingCount;
            }
            ratingCount = localizedRatingCount;
          } else if (steam != null) {
            ratingCount = steam.ratingCount;
          }
          const t = intl5.t;
          const tmp20 = result ? t["aWb+V4"] : t["8e4LiB"];
          const reviews2 = game.reviews;
          let opencritic;
          if (reviews2 != null) {
            opencritic = reviews2.opencritic;
          }
          if (!tmp8) {
            if (!tmp14) {
              if (!(null != opencritic && null != opencriticUrl)) {
                return null;
              }
            }
          }
          const _Symbol = Symbol;
          ({ container, headerText } = tmp4);
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl5.intl;
            const stringResult = intl.string(intl5.t.GaAQXP);
            cResult[3] = stringResult;
            tmp25 = stringResult;
          } else {
            tmp25 = cResult[3];
          }
          if (cResult[4] !== tmp4.headerText) {
            const obj2 = {
              variant: "heading-sm/semibold",
              color: "mobile-text-heading-primary",
              style: headerText,
              children: tmp25,
            };
            const tmp29 = metroImportDefault(Text_Text.Text, obj2);
            cResult[4] = tmp4.headerText;
            cResult[5] = tmp29;
            tmp27 = tmp29;
          } else {
            tmp27 = cResult[5];
          }
          if (cResult[6] === (tmp8 || (null != opencritic && null != opencriticUrl))) {
            if (cResult[7] === tmp14) {
              let recentRating1;
              const tmp30 = cResult[8];
              if (steam != null) {
                recentRating1 = steam.recentRating;
              }
              if (tmp30 === recentRating1) {
                let recentRatingCount1;
                const tmp32 = cResult[9];
                if (steam != null) {
                  recentRatingCount1 = steam.recentRatingCount;
                }
                if (tmp32 === recentRatingCount1) {
                  if (cResult[10] === steamWebsiteUrl) {
                    let tmp34;
                    if (cResult[11] === trackAction) {
                      tmp34 = cResult[12];
                    }
                    if (cResult[13] === (null != opencritic && null != opencriticUrl)) {
                      if (cResult[14] === rating) {
                        if (cResult[15] === ratingCount) {
                          if (cResult[16] === tmp20) {
                            if (cResult[17] === tmp8) {
                              if (cResult[18] === steamWebsiteUrl) {
                                let tmp42;
                                if (cResult[19] === trackAction) {
                                  tmp42 = cResult[20];
                                }
                                if (cResult[21] === game) {
                                  if (cResult[22] === opencriticUrl) {
                                    if (cResult[23] === (null != opencritic && null != opencriticUrl)) {
                                      let tmp46;
                                      if (cResult[24] === trackAction) {
                                        tmp46 = cResult[25];
                                      }
                                      if (cResult[26] === tmp4.reviewContainer) {
                                        if (cResult[27] === tmp46) {
                                          if (cResult[28] === tmp34) {
                                            let tmp50;
                                            if (cResult[29] === tmp42) {
                                              tmp50 = cResult[30];
                                            }
                                            if (cResult[31] === tmp4.container) {
                                              if (cResult[32] === tmp50) {
                                                let tmp54;
                                                if (cResult[33] === tmp27) {
                                                  tmp54 = cResult[34];
                                                }
                                                return tmp54;
                                              }
                                            }
                                            const obj3 = { style: container, children: items };
                                            items = [tmp27, tmp50];
                                            const tmp57 = metroImportAll(React3, obj3);
                                            cResult[31] = tmp4.container;
                                            cResult[32] = tmp50;
                                            cResult[33] = tmp27;
                                            cResult[34] = tmp57;
                                            tmp54 = tmp57;
                                          }
                                        }
                                      }
                                      const obj4 = { style: tmp4.reviewContainer, children: items1 };
                                      items1 = [tmp34, tmp42, tmp46];
                                      const tmp53 = metroImportAll(React3, obj4);
                                      cResult[26] = tmp4.reviewContainer;
                                      cResult[27] = tmp46;
                                      cResult[28] = tmp34;
                                      cResult[29] = tmp42;
                                      cResult[30] = tmp53;
                                      tmp50 = tmp53;
                                    }
                                  }
                                }
                                let tmp47 = null;
                                if (null != opencritic && null != opencriticUrl) {
                                  tmp47 = null;
                                  if (null != opencriticUrl) {
                                    const obj5 = { game, url: opencriticUrl, trackAction };
                                    tmp47 = metroImportDefault(closure_12, obj5);
                                  }
                                }
                                cResult[21] = game;
                                cResult[22] = opencriticUrl;
                                cResult[23] = null != opencritic && null != opencriticUrl;
                                cResult[24] = trackAction;
                                cResult[25] = tmp47;
                                tmp46 = tmp47;
                              }
                            }
                          }
                        }
                      }
                    }
                    let tmp43 = null;
                    if (tmp8) {
                      tmp43 = null;
                      if (null != steamWebsiteUrl) {
                        const obj6 = {
                          url: steamWebsiteUrl,
                          showBorderBottom: null != opencritic && null != opencriticUrl,
                          trackAction,
                          title: intl3.string(tmp20),
                          rating,
                          ratingCount,
                          isRecentRating: false,
                        };
                        intl3 = intl5.intl;
                        tmp43 = metroImportDefault(closure_11, obj6);
                      }
                    }
                    cResult[13] = null != opencritic && null != opencriticUrl;
                    cResult[14] = rating;
                    cResult[15] = ratingCount;
                    cResult[16] = tmp20;
                    cResult[17] = tmp8;
                    cResult[18] = steamWebsiteUrl;
                    cResult[19] = trackAction;
                    cResult[20] = tmp43;
                    tmp42 = tmp43;
                  }
                }
              }
            }
          }
          let tmp36Result = null;
          if (tmp14) {
            tmp36Result = null;
            if (null != steamWebsiteUrl) {
              const obj7 = {
                url: steamWebsiteUrl,
                showBorderBottom: tmp8 || (null != opencritic && null != opencriticUrl),
                trackAction,
                title: intl2.string(intl5.t.MQGNsN),
                rating: recentRating2,
                ratingCount: recentRatingCount2,
                isRecentRating: true,
              };
              intl2 = intl5.intl;
              recentRating2 = undefined;
              if (steam != null) {
                recentRating2 = steam.recentRating;
              }
              recentRatingCount2 = undefined;
              if (steam != null) {
                recentRatingCount2 = steam.recentRatingCount;
              }
              tmp36Result = metroImportDefault(closure_11, obj7);
            }
          }
          cResult[6] = tmp8 || (null != opencritic && null != opencriticUrl);
          cResult[7] = tmp14;
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
          cResult[12] = tmp36Result;
          tmp34 = tmp36Result;
        }
        const tmpResult2 = calculateSteamReviewScoreDescription2;
        const result1 = tmpResult2.calculateSteamReviewScoreDescription(recentRating, recentRatingCount, true);
        cResult[0] = recentRating;
        cResult[1] = recentRatingCount;
        cResult[2] = result1;
        tmp12 = result1;
      }
    }
  : (arg0) => {
      let game;
      let intl;
      let intl2;
      let intl3;
      let items;
      let items1;
      let opencriticUrl;
      let recentRating1;
      let recentRatingCount1;
      let tmp26;
      let trackAction;
      ({ game, trackAction } = arg0);
      const tmp = closure_10();
      let id;
      const useSteamWebsiteUrl = useSteamWebsiteUrl2.useSteamWebsiteUrl;
      useSteamWebsiteUrl2;
      if (game != null) {
        id = game.id;
      }
      const steamWebsiteUrl = useSteamWebsiteUrl(id);
      if (game != null) {
        opencriticUrl = game.opencriticUrl;
      }
      if (null == game) {
        return null;
      } else {
        let rating;
        let ratingCount;
        const tmp7 =
          game.steamReleaseStatus !== SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED &&
          null != steamWebsiteUrl;
        const reviews = game.reviews;
        let steam;
        if (reviews != null) {
          steam = reviews.steam;
        }
        const calculateSteamReviewScoreDescription =
          calculateSteamReviewScoreDescription2.calculateSteamReviewScoreDescription;
        calculateSteamReviewScoreDescription2;
        if (steam != null) {
          const recentRating = steam.recentRating;
        }
        if (steam != null) {
          const recentRatingCount = steam.recentRatingCount;
        }
        const tmp11 = tmp7 && tmp10 !== GameDetectionTypes.SteamReviewScoreDescription.NO_USER_REVIEWS;
        const tmp2Result2 = GameProfileReviewUtils;
        const result = tmp2Result2.canShowLocalizedSteamReview(steam);
        if (result) {
          let localizedRating;
          if (steam != null) {
            localizedRating = steam.localizedRating;
          }
          rating = localizedRating;
        } else if (steam != null) {
          rating = steam.rating;
        }
        if (result) {
          let localizedRatingCount;
          if (steam != null) {
            localizedRatingCount = steam.localizedRatingCount;
          }
          ratingCount = localizedRatingCount;
        } else if (steam != null) {
          ratingCount = steam.ratingCount;
        }
        const t = intl5.t;
        const reviews2 = game.reviews;
        let opencritic;
        const tmp17 = result ? t["aWb+V4"] : t["8e4LiB"];
        if (reviews2 != null) {
          opencritic = reviews2.opencritic;
        }
        if (!tmp7) {
          let tmp21Result;
          if (!tmp11) {
            tmp21Result = null;
          }
          return tmp21Result;
        }
        const obj = { style: tmp.container, children: items };
        const obj2 = {
          variant: "heading-sm/semibold",
          color: "mobile-text-heading-primary",
          style: tmp.headerText,
          children: intl.string(intl5.t.GaAQXP),
        };
        const Text = Text_Text.Text;
        intl = intl5.intl;
        items = [metroImportDefault(Text, obj2)];
        let tmp23Result = null;
        const obj3 = { style: tmp.reviewContainer, children: items1 };
        if (tmp11) {
          tmp23Result = null;
          if (null != steamWebsiteUrl) {
            const obj4 = {
              url: steamWebsiteUrl,
              showBorderBottom: tmp26,
              trackAction,
              title: intl2.string(intl5.t.MQGNsN),
              rating: recentRating1,
              ratingCount: recentRatingCount1,
              isRecentRating: true,
            };
            tmp26 = tmp7 || tmp19;
            intl2 = intl5.intl;
            recentRating1 = undefined;
            if (steam != null) {
              recentRating1 = steam.recentRating;
            }
            recentRatingCount1 = undefined;
            if (steam != null) {
              recentRatingCount1 = steam.recentRatingCount;
            }
            tmp23Result = metroImportDefault(closure_11, obj4);
          }
        }
        items1 = [tmp23Result, ,];
        let tmp23Result3 = null;
        if (tmp7) {
          tmp23Result3 = null;
          if (null != steamWebsiteUrl) {
            const obj5 = {
              url: steamWebsiteUrl,
              showBorderBottom: null != opencritic && null != opencriticUrl,
              trackAction,
              title: intl3.string(tmp17),
              rating,
              ratingCount,
              isRecentRating: false,
            };
            intl3 = intl5.intl;
            tmp23Result3 = metroImportDefault(closure_11, obj5);
          }
        }
        items1[1] = tmp23Result3;
        let tmp23Result4 = null;
        if (null != opencritic && null != opencriticUrl) {
          tmp23Result4 = null;
          if (null != opencriticUrl) {
            const obj6 = { game, url: opencriticUrl, trackAction };
            tmp23Result4 = metroImportDefault(closure_12, obj6);
          }
        }
        items1[2] = tmp23Result4;
        items[1] = metroImportAll(React3, obj3);
        tmp21Result = metroImportAll(React3, obj);
      }
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReviews.tsx");

export default tmp5;
