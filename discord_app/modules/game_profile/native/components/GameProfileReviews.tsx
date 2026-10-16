// === Module 9160: GameProfileReviews ===

// Module 9160 (GameProfileReviews)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import LinkingDefault from "Linking" /* 4865 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4893 */;
import Text_Text from "Text/Text" /* 5150 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9104 */;
import useOpenExternalUrlFromGameProfileDefault from "useOpenExternalUrlFromGameProfile" /* 9113 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 32;
const createStyles = fn(5154);
let obj2 = { container: { gap: nativeDefault.space.PX_8 }, headerText: null, reviewContainer: null, reviewRowContainer: null, reviewRowContainerNotLast: null, reviewRow: null, reviewNameContainer: null, ratingContainer: null, ratingDescription: null, opencriticRightContainer: null, opencriticTopCriticContainer: null, opencriticTopCriticImage: null, opencriticTopCriticRatingContainer: null, linkText: null };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.headerText = { paddingHorizontal: nativeDefault.space.PX_8 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj2.reviewContainer = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
obj2.reviewRowContainer = { height: 56 };
let obj5 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
obj2.reviewRowContainerNotLast = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj6 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.reviewRow = { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_12 };
let obj7 = { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_12 };
obj2.reviewNameContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.ratingContainer = { flexDirection: "row", alignItems: "flex-end", flexShrink: 1, paddingLeft: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_4 };
obj2.ratingDescription = { flexShrink: 1 };
let obj9 = { flexDirection: "row", alignItems: "flex-end", flexShrink: 1, paddingLeft: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_4 };
obj2.opencriticRightContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", justifyContent: "center" };
obj2.opencriticTopCriticContainer = size;
obj2.opencriticTopCriticImage = { width: 32, height: 32 };
obj2.opencriticTopCriticRatingContainer = { position: "absolute", top: 0, left: 1, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" };
obj2.linkText = { textDecorationLine: "underline" };
let closure_9 = createStyles.createStyles(obj2);
let obj11 = { appStore: fn(7776).AppleNeutralIcon, googlePlay: fn(9161).GooglePlayNeutralIcon };
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function SteamReviewRow(url) {
  const cResult = str(576).c(65);
  str = url.url;
  let str2 = url.trackAction;
  ({ title, rating: reviewNameContainer, ratingCount, isRecentRating } = url);
  let reviewRow = closure_9();
  const alwaysShowLinkDecorations = noop.useContext(str(4893).AccessibilityPreferencesContext).alwaysShowLinkDecorations;
  const obj = str(576);
  const tmp4 = str2;
  const tmp5Result = str2(9113)(str2(4865).openURL);
  dependencyMap = tmp5Result;
  if (cResult[0] === alwaysShowLinkDecorations) {
    if (cResult[1] === isRecentRating) {
      if (cResult[2] === tmp5Result) {
        if (cResult[3] === reviewNameContainer) {
          if (cResult[4] === ratingCount) {
            if (cResult[5] === reviewRow.linkText) {
              if (cResult[6] === reviewRow.ratingContainer) {
                if (cResult[7] === reviewRow.ratingDescription) {
                  if (cResult[8] === reviewRow.reviewNameContainer) {
                    if (cResult[9] === reviewRow.reviewRow) {
                      if (cResult[10] === title) {
                        if (cResult[11] === str2) {
                          if (cResult[12] === str) {
                            if (cResult[42] === cResult[13]) {
                              if (cResult[43] === tmp11) {
                                if (cResult[44] === tmp14) {
                                  if (cResult[45] === tmp15) {
                                    if (cResult[46] === tmp16) {
                                      if (cResult[47] === tmp17) {
                                        let tmp55 = cResult[48];
                                      }
                                      if (cResult[49] === ratingCount) {
                                        if (cResult[50] === tmp10) {
                                          let tmp58 = cResult[51];
                                        }
                                        if (cResult[52] === tmp8) {
                                          if (cResult[53] === tmp55) {
                                            if (cResult[54] === tmp58) {
                                              if (cResult[55] === tmp18) {
                                                let tmp62 = cResult[56];
                                              }
                                              if (cResult[57] === tmp9) {
                                                if (cResult[58] === tmp12) {
                                                  if (cResult[59] === tmp13) {
                                                    if (cResult[60] === tmp62) {
                                                      if (cResult[61] === tmp19) {
                                                        if (cResult[62] === tmp20) {
                                                          if (cResult[63] === tmp21) {
                                                            let tmp65 = cResult[64];
                                                          }
                                                          return tmp65;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              const obj2 = { onPress: tmp19, accessibilityRole: tmp20, accessibilityLabel: tmp21, style: tmp12, children: null };
                                              const items = [tmp13, tmp62];
                                              obj2.children = items;
                                              const tmp67 = closure_7(tmp9, obj2);
                                              cResult[57] = tmp9;
                                              cResult[58] = tmp12;
                                              cResult[59] = tmp13;
                                              cResult[60] = tmp62;
                                              cResult[61] = tmp19;
                                              cResult[62] = tmp20;
                                              cResult[63] = tmp21;
                                              cResult[64] = tmp67;
                                              tmp65 = tmp67;
                                            }
                                          }
                                        }
                                        const obj3 = { style: tmp18, children: null };
                                        const items1 = [tmp55, tmp58];
                                        obj3.children = items1;
                                        const tmp64 = closure_7(tmp8, obj3);
                                        cResult[52] = tmp8;
                                        cResult[53] = tmp55;
                                        cResult[54] = tmp58;
                                        cResult[55] = tmp18;
                                        cResult[56] = tmp64;
                                        tmp62 = tmp64;
                                      }
                                      let tmp60 = null != ratingCount && tmp10 !== tmp(2043).SteamReviewScoreDescription.NO_USER_REVIEWS;
                                      if (tmp60) {
                                        const obj4 = { variant: "text-sm/medium", color: "text-subtle", children: null };
                                        const intl2 = tmp(1128).intl;
                                        const obj5 = { rating_count: ratingCount.toLocaleString() };
                                        obj4.children = intl2.format(tmp(1128).t.sgIoin, obj5).toString();
                                        tmp60 = closure_6(tmp(5150).Text, obj4);
                                        const str6 = intl2.format(tmp(1128).t.sgIoin, obj5);
                                      }
                                      cResult[49] = ratingCount;
                                      cResult[50] = tmp10;
                                      cResult[51] = tmp60;
                                      tmp58 = tmp60;
                                    }
                                  }
                                }
                              }
                            }
                            const obj6 = { variant: cResult[17], color: cResult[20], lineClamp: cResult[21], style: cResult[22], children: cResult[23] };
                            const tmp57 = closure_6(cResult[13], obj6);
                            cResult[42] = cResult[13];
                            cResult[43] = cResult[17];
                            cResult[44] = cResult[20];
                            cResult[45] = cResult[21];
                            cResult[46] = cResult[22];
                            cResult[47] = cResult[23];
                            cResult[48] = tmp57;
                            tmp55 = tmp57;
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
  const tmp5 = str2(9113);
  const result = str(9163).calculateSteamReviewScoreDescription(reviewNameContainer, ratingCount, isRecentRating);
  const tmpResult = str(9163);
  const steamReviewScoreDescriptionColor = str(9164).getSteamReviewScoreDescriptionColor(result);
  if (cResult[28] === tmp5Result) {
    if (cResult[29] === str2) {
      if (cResult[30] === str) {
        let tmp24 = cResult[31];
      }
      const _Symbol = Symbol;
      if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1128).intl;
        const stringResult = intl.string(tmp(1128).t.YNC5Di);
        cResult[32] = stringResult;
        let tmp27 = stringResult;
      } else {
        tmp27 = cResult[32];
      }
      const reviewRow2 = reviewRow.reviewRow;
      const _Symbol2 = Symbol;
      if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { size: "sm", color: tmp4(587).colors.ICON_STRONG };
        const tmp31 = closure_6(tmp(9123).SteamNeutralIcon, obj7);
        cResult[33] = tmp31;
        let tmp29 = tmp31;
      } else {
        tmp29 = cResult[33];
      }
      if (cResult[34] !== title) {
        const obj8 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: title };
        const tmp34 = closure_6(tmp(5150).Text, obj8);
        cResult[34] = title;
        cResult[35] = tmp34;
        let tmp32 = tmp34;
      } else {
        tmp32 = cResult[35];
      }
      if (cResult[36] === reviewRow.reviewNameContainer) {
        if (cResult[37] === tmp32) {
          let tmp35 = cResult[38];
        }
        const ratingContainer = reviewRow.ratingContainer;
        const Text = tmp(5150).Text;
        let linkText;
        if (alwaysShowLinkDecorations) {
          linkText = reviewRow.linkText;
        }
        if (cResult[39] === reviewRow.ratingDescription) {
          if (cResult[40] === linkText) {
            let tmp41 = cResult[41];
          }
          linkText = tmp(9164);
          const steamReviewScoreDescriptionIntl = linkText.getSteamReviewScoreDescriptionIntl(result);
          cResult[0] = alwaysShowLinkDecorations;
          cResult[1] = isRecentRating;
          cResult[2] = tmp5Result;
          cResult[3] = reviewNameContainer;
          cResult[4] = ratingCount;
          cResult[5] = reviewRow.linkText;
          cResult[6] = reviewRow.ratingContainer;
          ({ ratingDescription: tmp3[7], reviewNameContainer } = reviewRow);
          cResult[8] = reviewNameContainer;
          reviewRow = reviewRow.reviewRow;
          cResult[9] = reviewRow;
          cResult[10] = title;
          cResult[11] = str2;
          cResult[12] = str;
          cResult[13] = Text;
          cResult[14] = closure_4;
          cResult[15] = closure_5;
          cResult[16] = result;
          str = "text-sm/medium";
          cResult[17] = "text-sm/medium";
          cResult[18] = reviewRow2;
          cResult[19] = tmp35;
          cResult[20] = steamReviewScoreDescriptionColor;
          cResult[21] = 1;
          cResult[22] = tmp41;
          cResult[23] = steamReviewScoreDescriptionIntl;
          cResult[24] = ratingContainer;
          cResult[25] = tmp24;
          str2 = "link";
          cResult[26] = "link";
          cResult[27] = tmp27;
        }
        const items2 = [reviewRow.ratingDescription, linkText];
        cResult[39] = reviewRow.ratingDescription;
        cResult[40] = linkText;
        cResult[41] = items2;
        tmp41 = items2;
      }
      const obj9 = { style: reviewRow.reviewNameContainer, children: null };
      const items3 = [tmp29, tmp32];
      obj9.children = items3;
      const tmp38 = closure_7(closure_4, obj9);
      cResult[36] = reviewRow.reviewNameContainer;
      cResult[37] = tmp32;
      cResult[38] = tmp38;
      tmp35 = tmp38;
    }
  }
  const fn = function j() {
    str2(GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamReviews);
    closure_2(str);
  };
  cResult[28] = tmp5Result;
  cResult[29] = str2;
  cResult[30] = str;
  cResult[31] = fn;
  tmp24 = fn;
  const tmpResult2 = str(9164);
}) : (function SteamReviewRow(url) {
  url = url.url;
  const trackAction = url.trackAction;
  const ratingCount = url.ratingCount;
  ({ title, rating, isRecentRating } = url);
  const tmp = closure_9();
  const tmp4Result = trackAction(9113)(trackAction(4865).openURL);
  dependencyMap = tmp4Result;
  const tmp4 = trackAction(9113);
  const result = url(9163).calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating);
  const obj = url(9163);
  const items = [tmp4Result, url, trackAction];
  const steamReviewScoreDescriptionColor = url(9164).getSteamReviewScoreDescriptionColor(result);
  const obj3 = {
    onPress: noop.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamReviews);
      closure_2(url);
    }, items),
    accessibilityRole: "link",
    accessibilityLabel: null,
    style: null,
    children: null
  };
  const intl = url(1128).intl;
  obj3.accessibilityLabel = intl.string(url(1128).t.YNC5Di);
  obj3.style = tmp.reviewRow;
  const obj4 = { style: tmp.reviewNameContainer, children: null };
  const obj2 = url(9164);
  const items1 = [closure_6(url(9123).SteamNeutralIcon, { size: "sm", color: trackAction(587).colors.ICON_STRONG }), closure_6(url(5150).Text, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: title })];
  obj4.children = items1;
  const items2 = [closure_7(closure_4, obj4), ];
  const obj6 = { style: tmp.ratingContainer, children: null };
  const obj7 = { variant: "text-sm/medium", color: steamReviewScoreDescriptionColor, lineClamp: 1, style: null, children: null };
  const items3 = [tmp.ratingDescription, ];
  let linkText;
  if (noop.useContext(url(4893).AccessibilityPreferencesContext).alwaysShowLinkDecorations) {
    linkText = tmp.linkText;
  }
  items3[1] = linkText;
  obj7.style = items3;
  const obj5 = { size: "sm", color: trackAction(587).colors.ICON_STRONG };
  obj7.children = url(9164).getSteamReviewScoreDescriptionIntl(result);
  const items4 = [closure_6(url(5150).Text, obj7), ];
  let tmp11Result = null != ratingCount && result !== tmp2(2043).SteamReviewScoreDescription.NO_USER_REVIEWS;
  if (tmp11Result) {
    const obj8 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    const intl2 = tmp2(1128).intl;
    const obj9 = { rating_count: ratingCount.toLocaleString() };
    obj8.children = intl2.format(tmp2(1128).t.sgIoin, obj9).toString();
    tmp11Result = closure_6(tmp2(5150).Text, obj8);
    const str = intl2.format(tmp2(1128).t.sgIoin, obj9);
  }
  items4[1] = tmp11Result;
  obj6.children = items4;
  items2[1] = closure_7(closure_4, obj6);
  obj3.children = items2;
  return closure_7(closure_5, obj3);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function OpenCriticReview(trackAction) {
  const cResult = url(576).c(35);
  ({ game, url } = trackAction);
  trackAction = trackAction.trackAction;
  const tmp4 = closure_9();
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
      opencritic1 = { topCriticRating: "Array", topCriticRatingCount: "unicodeVersion", tier: "colors" };
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
  const tmp10Result = trackAction(9113)(trackAction(4865).openURL);
  dependencyMap = tmp10Result;
  if (cResult[2] === tmp10Result) {
    if (cResult[3] === trackAction) {
      if (cResult[4] === url) {
        let tmp12 = cResult[5];
      }
      if (cResult[6] !== tier) {
        let str = "";
        if (null != tier) {
          str = url(9165).getOpenCriticTierText(tier);
          const tmpResult = url(9165);
        }
        cResult[6] = tier;
        cResult[7] = str;
        let tmp13 = str;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] !== tier) {
        if (null != tier) {
          let openCriticCircleRatingColor = url(9165).getOpenCriticCircleRatingColor(tier);
          const tmpResult4 = url(9165);
        } else {
          openCriticCircleRatingColor = { foregroundColor: "", backgroundColor: "" };
        }
        cResult[8] = tier;
        cResult[9] = openCriticCircleRatingColor;
      } else {
        ({ foregroundColor, backgroundColor } = cResult[9]);
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = url(1128).intl;
          const stringResult = intl.string(url(1128).t.aLNBAw);
          cResult[10] = stringResult;
          let tmp17 = stringResult;
        } else {
          tmp17 = cResult[10];
        }
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: null };
          const intl2 = url(1128).intl;
          obj2.children = intl2.string(url(1128).t["UxvER+"]);
          const tmp21 = closure_6(url(5150).Text, obj2);
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
                            const obj3 = { variant: "text-xs/medium", color: url(9164).getSteamReviewScoreDescriptionColor(url(2043).SteamReviewScoreDescription.NO_USER_REVIEWS), children: null };
                            const intl4 = url(1128).intl;
                            obj3.children = intl4.string(url(1128).t["0xYzpO"]);
                            tmp34 = closure_6(url(5150).Text, obj3);
                            const tmpResult5 = url(9164);
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
                              const obj4 = { onPress: tmp12, accessibilityRole: "link", accessibilityLabel: tmp17, style: tmp4.reviewRow, children: null };
                              const items = [tmp19, tmp36];
                              obj4.children = items;
                              const tmp43 = closure_7(closure_5, obj4);
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
                        const tmp39 = closure_7(closure_4, obj5);
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
                const items2 = [tmp4.opencriticTopCriticContainer, ];
                const obj7 = { backgroundColor };
                items2[1] = obj7;
                obj6.style = items2;
                const intl3 = url(1128).intl;
                obj6.accessibilityLabel = intl3.string(url(1128).t.Ub4YR1);
                const obj8 = { rating: topCriticRating, strokeColor: foregroundColor, size };
                const items3 = [closure_6(tmp9(9171), obj8), ];
                const obj9 = { style: tmp4.opencriticTopCriticRatingContainer, children: null };
                const obj10 = { variant: "text-xs/bold", color: "text-overlay-light", children: null };
                const _Math = Math;
                obj10.children = Math.floor(topCriticRating);
                obj9.children = closure_6(url(5150).Text, obj10);
                items3[1] = closure_6(closure_4, obj9);
                obj6.children = items3;
                tmp28 = closure_7(closure_4, obj6);
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
          obj11 = { style: tmp4.opencriticTopCriticContainer, accessibilityLabel: tmp13, accessibilityRole: "image", children: null };
          const obj12 = { source: null, style: null, accessible: true, accessibilityLabel: null };
          const obj13 = { uri: null };
          const tmp9Result = tmp9(5091);
          obj13.uri = url(9165).getOpenCriticTierImage(tier);
          obj12.source = obj13;
          obj12.style = tmp4.opencriticTopCriticImage;
          obj12.accessibilityLabel = tmp13;
          obj11.children = closure_6(tmp9Result, obj12);
          tmp23 = closure_6(closure_4, obj11);
          const tmpResult6 = url(9165);
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
  const fn = function y() {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.OpenCriticReviews);
    closure_2(url);
  };
  cResult[2] = tmp10Result;
  cResult[3] = trackAction;
  cResult[4] = url;
  cResult[5] = fn;
  tmp12 = fn;
  const tmp10 = trackAction(9113);
}) : (function OpenCriticReview(url) {
  url = url.url;
  const trackAction = url.trackAction;
  dependencyMap = undefined;
  const tmp = closure_9();
  const reviews = url.game.reviews;
  let opencritic;
  if (reviews != null) {
    opencritic = reviews.opencritic;
  }
  if (opencritic == null) {
    opencritic = { topCriticRating: "Array", topCriticRatingCount: "unicodeVersion", tier: "colors" };
  }
  ({ tier, topCriticRating } = opencritic);
  if (topCriticRating == null) {
    topCriticRating = -1;
  }
  let num = opencritic.topCriticRatingCount;
  if (num == null) {
    num = -1;
  }
  const tmp4Result = trackAction(9113)(trackAction(4865).openURL);
  dependencyMap = tmp4Result;
  const items = [tmp4Result, url, trackAction];
  let str = "";
  const callback = noop.useCallback(() => {
    trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.OpenCriticReviews);
    closure_2(url);
  }, items);
  if (null != tier) {
    str = url(9165).getOpenCriticTierText(tier);
    const obj2 = url(9165);
  }
  if (null != tier) {
    let openCriticCircleRatingColor = url(9165).getOpenCriticCircleRatingColor(tier);
    const obj4 = url(9165);
  } else {
    openCriticCircleRatingColor = { foregroundColor: "", backgroundColor: "" };
  }
  const obj = { onPress: callback, accessibilityRole: "link", accessibilityLabel: null, style: null, children: null };
  ({ foregroundColor, backgroundColor } = openCriticCircleRatingColor);
  const intl = url(1128).intl;
  obj.accessibilityLabel = intl.string(url(1128).t.aLNBAw);
  obj.style = tmp.reviewRow;
  const obj3 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: null };
  const intl2 = url(1128).intl;
  obj3.children = intl2.string(url(1128).t["UxvER+"]);
  const items1 = [closure_6(url(5150).Text, obj3), ];
  const obj5 = { style: tmp.opencriticRightContainer, children: null };
  let tmp12Result = null;
  if (null != tier) {
    const obj6 = { style: tmp.opencriticTopCriticContainer, accessibilityLabel: str, accessibilityRole: "image", children: null };
    const obj7 = { source: null, style: null, accessible: true, accessibilityLabel: null };
    const obj8 = { uri: null };
    const tmp2Result = tmp2(5091);
    obj8.uri = tmp11(9165).getOpenCriticTierImage(tier);
    obj7.source = obj8;
    obj7.style = tmp.opencriticTopCriticImage;
    obj7.accessibilityLabel = str;
    obj6.children = closure_6(tmp2Result, obj7);
    tmp12Result = closure_6(closure_4, obj6);
    const tmp11Result = tmp11(9165);
  }
  const items2 = [tmp12Result, , ];
  let tmp9Result = null;
  if (null != tier) {
    tmp9Result = null;
    if (topCriticRating > 0) {
      tmp9Result = null;
      if (num > 0) {
        const obj9 = { style: null, accessibilityLabel: null, accessibilityRole: "image", children: null };
        const items3 = [tmp.opencriticTopCriticContainer, ];
        const obj10 = { backgroundColor };
        items3[1] = obj10;
        obj9.style = items3;
        const intl3 = tmp11(1128).intl;
        obj9.accessibilityLabel = intl3.string(tmp11(1128).t.Ub4YR1);
        obj11 = { rating: topCriticRating, strokeColor: foregroundColor, size };
        const items4 = [closure_6(tmp2(9171), obj11), ];
        const obj12 = { style: tmp.opencriticTopCriticRatingContainer, children: null };
        const obj13 = { variant: "text-xs/bold", color: "text-overlay-light", children: null };
        const _Math = Math;
        obj13.children = Math.floor(topCriticRating);
        obj12.children = closure_6(tmp11(5150).Text, obj13);
        items4[1] = closure_6(closure_4, obj12);
        obj9.children = items4;
        tmp9Result = closure_7(closure_4, obj9);
      }
    }
  }
  items2[1] = tmp9Result;
  if (topCriticRating <= 0) {
    let tmp12Result2 = null;
    if (null == tier) {
      const obj14 = { variant: "text-xs/medium", color: tmp11(9164).getSteamReviewScoreDescriptionColor(tmp11(2043).SteamReviewScoreDescription.NO_USER_REVIEWS), children: null };
      const intl4 = tmp11(1128).intl;
      obj14.children = intl4.string(tmp11(1128).t["0xYzpO"]);
      tmp12Result2 = closure_6(tmp11(5150).Text, obj14);
      const tmp11Result2 = tmp11(9164);
    }
  } else {
    tmp12Result2 = null;
  }
  items2[2] = tmp12Result2;
  obj5.children = items2;
  items1[1] = closure_7(closure_4, obj5);
  obj.children = items1;
  return closure_7(closure_5, obj);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function MobileStoreReviewRow(arg0) {
  const cResult = c.c(31);
  ({ review, trackAction } = arg0);
  const tmp4 = closure_9();
  const tmp6Result = useOpenExternalUrlFromGameProfileDefault(LinkingDefault.openURL);
  closure_1 = tmp6Result;
  const action = review.action;
  const url = review.url;
  if (cResult[0] === action) {
    if (cResult[1] === tmp6Result) {
      if (cResult[2] === trackAction) {
        if (cResult[3] === url) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] !== tmp8) {
          const obj2 = { size: "sm", color: nativeDefault.colors.ICON_STRONG };
          const tmp12 = timestampProducer(tmp8, obj2);
          cResult[5] = tmp8;
          cResult[6] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[6];
        }
        if (cResult[7] !== review.title) {
          const obj3 = { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: review.title };
          const tmp15 = timestampProducer(Text_Text.Text, obj3);
          cResult[7] = review.title;
          cResult[8] = tmp15;
          let tmp13 = tmp15;
        } else {
          tmp13 = cResult[8];
        }
        if (cResult[9] === tmp4.reviewNameContainer) {
          if (cResult[10] === tmp10) {
            if (cResult[11] === tmp13) {
              let tmp16 = cResult[12];
            }
            let linkText;
            if (noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).alwaysShowLinkDecorations) {
              linkText = tmp4.linkText;
            }
            if (cResult[13] === tmp4.ratingDescription) {
              if (cResult[14] === linkText) {
                let tmp21 = cResult[15];
              }
              if (cResult[16] === review.ratingText) {
                if (cResult[17] === tmp21) {
                  let tmp22 = cResult[18];
                }
                if (cResult[19] !== review.ratingCountText) {
                  const obj4 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, children: review.ratingCountText };
                  const tmp27 = timestampProducer(Text_Text.Text, obj4);
                  cResult[19] = review.ratingCountText;
                  cResult[20] = tmp27;
                  let tmp25 = tmp27;
                } else {
                  tmp25 = cResult[20];
                }
                if (cResult[21] === tmp4.ratingContainer) {
                  if (cResult[22] === tmp22) {
                    if (cResult[23] === tmp25) {
                      let tmp28 = cResult[24];
                    }
                    if (cResult[25] === tmp9) {
                      if (cResult[26] === review.accessibilityLabel) {
                        if (cResult[27] === tmp4.reviewRow) {
                          if (cResult[28] === tmp16) {
                            if (cResult[29] === tmp28) {
                              let tmp32 = cResult[30];
                            }
                            return tmp32;
                          }
                        }
                      }
                    }
                    const obj5 = { onPress: tmp9, accessibilityRole: "link", accessibilityLabel: review.accessibilityLabel, style: tmp4.reviewRow, children: null };
                    const items = [tmp16, tmp28];
                    obj5.children = items;
                    const tmp35 = React5(hasOwnProperty, obj5);
                    cResult[25] = tmp9;
                    cResult[26] = review.accessibilityLabel;
                    cResult[27] = tmp4.reviewRow;
                    cResult[28] = tmp16;
                    cResult[29] = tmp28;
                    cResult[30] = tmp35;
                    tmp32 = tmp35;
                  }
                }
                const obj6 = { style: tmp4.ratingContainer, children: null };
                const items1 = [tmp22, tmp25];
                obj6.children = items1;
                const tmp31 = React5(React4, obj6);
                cResult[21] = tmp4.ratingContainer;
                cResult[22] = tmp22;
                cResult[23] = tmp25;
                cResult[24] = tmp31;
                tmp28 = tmp31;
              }
              const obj7 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", lineClamp: 1, style: tmp21, children: review.ratingText };
              const tmp24 = timestampProducer(Text_Text.Text, obj7);
              cResult[16] = review.ratingText;
              cResult[17] = tmp21;
              cResult[18] = tmp24;
              tmp22 = tmp24;
            }
            const items2 = [tmp4.ratingDescription, linkText];
            cResult[13] = tmp4.ratingDescription;
            cResult[14] = linkText;
            cResult[15] = items2;
            tmp21 = items2;
          }
        }
        const obj8 = { style: tmp4.reviewNameContainer, children: null };
        const items3 = [tmp10, tmp13];
        obj8.children = items3;
        const tmp19 = React5(React4, obj8);
        cResult[9] = tmp4.reviewNameContainer;
        cResult[10] = tmp10;
        cResult[11] = tmp13;
        cResult[12] = tmp19;
        tmp16 = tmp19;
      }
    }
  }
  const fn = function l() {
    trackAction(action);
    closure_1(url);
  };
  cResult[0] = action;
  cResult[1] = tmp6Result;
  cResult[2] = trackAction;
  cResult[3] = url;
  cResult[4] = fn;
  tmp9 = fn;
}) : (function MobileStoreReviewRow(arg0) {
  ({ review, trackAction } = arg0);
  const tmp = closure_9();
  const tmp4Result = useOpenExternalUrlFromGameProfileDefault(LinkingDefault.openURL);
  closure_1 = tmp4Result;
  const action = review.action;
  const url = review.url;
  const items = [action, tmp4Result, trackAction, url];
  const obj = {
    onPress: noop.useCallback(() => {
      trackAction(action);
      closure_1(url);
    }, items),
    accessibilityRole: "link",
    accessibilityLabel: review.accessibilityLabel,
    style: tmp.reviewRow,
    children: null
  };
  const obj2 = { style: tmp.reviewNameContainer, children: null };
  const items1 = [timestampProducer(obj11[review.key], { size: "sm", color: nativeDefault.colors.ICON_STRONG }), timestampProducer(Text_Text.Text, { variant: "heading-sm/medium", color: "mobile-text-heading-primary", children: review.title })];
  obj2.children = items1;
  const items2 = [React5(React4, obj2), ];
  const obj5 = { style: tmp.ratingContainer, children: null };
  const items3 = [tmp.ratingDescription, ];
  let linkText;
  if (noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).alwaysShowLinkDecorations) {
    linkText = tmp.linkText;
  }
  items3[1] = linkText;
  const items4 = [timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", lineClamp: 1, style: items3, children: review.ratingText }), timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, children: review.ratingCountText })];
  obj5.children = items4;
  items2[1] = React5(React4, obj5);
  obj.children = items2;
  return React5(hasOwnProperty, obj);
});
ReactCompilerGating = fn(558);
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileReviews.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileReviews(arg0) {
  const cResult = require("c").c(49);
  ({ game, trackAction } = arg0);
  const tmp4 = closure_9();
  _require = tmp4;
  const obj = require("c");
  const steamWebsiteUrl = require("useSteamWebsiteUrl").useSteamWebsiteUrl(game.id);
  const opencriticUrl = game.opencriticUrl;
  const obj2 = require("useSteamWebsiteUrl");
  const gameProfileReviewDisplayData = require("useGameProfileReviewDisplayData").useGameProfileReviewDisplayData(game, steamWebsiteUrl);
  const obj3 = require("useGameProfileReviewDisplayData");
  const gameProfileMobileStoreReviews = require("useGameProfileMobileStoreReviews").useGameProfileMobileStoreReviews(gameProfileReviewDisplayData.mobileStoreReviews);
  ({ steamReview, showSteamReview, showRecentSteamReview, primarySteamRating, primarySteamRatingCount, primarySteamTitleKey } = gameProfileReviewDisplayData);
  if (cResult[0] === game) {
    if (cResult[1] === gameProfileMobileStoreReviews) {
      let tmp8 = cResult[2];
    }
    if (cResult[3] === game) {
      if (cResult[4] === gameProfileMobileStoreReviews) {
        if (cResult[5] === opencriticUrl) {
          if (cResult[6] === primarySteamRating) {
            if (cResult[7] === primarySteamRatingCount) {
              if (cResult[8] === primarySteamTitleKey) {
                if (cResult[9] === tmp8) {
                  if (cResult[10] === showRecentSteamReview) {
                    if (cResult[11] === showSteamReview) {
                      let recentRating;
                      if (steamReview != null) {
                        recentRating = steamReview.recentRating;
                      }
                      if (cResult[12] === recentRating) {
                        let recentRatingCount;
                        if (steamReview != null) {
                          recentRatingCount = steamReview.recentRatingCount;
                        }
                        if (cResult[13] === recentRatingCount) {
                          if (cResult[14] === steamWebsiteUrl) {
                            if (cResult[15] === trackAction) {
                              let items1 = cResult[16];
                            }
                            if (0 === arr.length) {
                              return null;
                            } else {
                              const _Symbol2 = Symbol;
                              ({ container, headerText } = tmp4);
                              if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                                const intl3 = require("util").intl;
                                const stringResult = intl3.string(require("util").t.GaAQXP);
                                cResult[35] = stringResult;
                                let tmp42 = stringResult;
                              } else {
                                tmp42 = cResult[35];
                              }
                              if (cResult[36] !== tmp4.headerText) {
                                const obj5 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: headerText, children: tmp42 };
                                const tmp50 = closure_6(require("Text/Text").Text, obj5);
                                cResult[36] = tmp4.headerText;
                                cResult[37] = tmp50;
                                let tmp46 = tmp50;
                              } else {
                                tmp46 = cResult[37];
                              }
                              if (cResult[38] === arr) {
                                if (cResult[39] === tmp4.reviewRowContainer) {
                                  if (cResult[40] === tmp4.reviewRowContainerNotLast) {
                                    let tmp52 = cResult[41];
                                  }
                                  if (cResult[42] === tmp4.reviewContainer) {
                                    if (cResult[43] === tmp52) {
                                      let tmp54 = cResult[44];
                                    }
                                    if (cResult[45] === tmp4.container) {
                                      if (cResult[46] === tmp46) {
                                        if (cResult[47] === tmp54) {
                                          let tmp58 = cResult[48];
                                        }
                                        return tmp58;
                                      }
                                    }
                                    const obj6 = { style: container, children: null };
                                    const items = [tmp46, tmp54];
                                    obj6.children = items;
                                    const tmp61 = closure_7(closure_4, obj6);
                                    cResult[45] = tmp4.container;
                                    cResult[46] = tmp46;
                                    cResult[47] = tmp54;
                                    cResult[48] = tmp61;
                                    tmp58 = tmp61;
                                  }
                                  const obj7 = { style: tmp51, children: tmp52 };
                                  const tmp57 = closure_6(closure_4, obj7);
                                  cResult[42] = tmp4.reviewContainer;
                                  cResult[43] = tmp52;
                                  cResult[44] = tmp57;
                                  tmp54 = tmp57;
                                }
                              }
                              const mapped = arr.map((item, index) => {
                                const style = [closure_0.reviewRowContainer, ];
                                let reviewRowContainerNotLast = index < items1.length - 1;
                                ({ key, row } = item);
                                if (reviewRowContainerNotLast) {
                                  reviewRowContainerNotLast = closure_0.reviewRowContainerNotLast;
                                }
                                style[1] = reviewRowContainerNotLast;
                                return timestampProducer(React4, { style, children }, key);
                              });
                              cResult[38] = arr;
                              cResult[39] = tmp4.reviewRowContainer;
                              cResult[40] = tmp4.reviewRowContainerNotLast;
                              cResult[41] = mapped;
                              tmp52 = mapped;
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
    items1 = [];
    if (showRecentSteamReview) {
      if (null != steamWebsiteUrl) {
        const _Symbol = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1128).intl;
          const stringResult1 = intl.string(tmp(1128).t.MQGNsN);
          cResult[17] = stringResult1;
          let tmp14 = stringResult1;
        } else {
          tmp14 = cResult[17];
        }
        let recentRating1;
        if (steamReview != null) {
          recentRating1 = steamReview.recentRating;
        }
        let recentRatingCount1;
        if (steamReview != null) {
          recentRatingCount1 = steamReview.recentRatingCount;
        }
        if (cResult[18] === steamWebsiteUrl) {
          if (cResult[19] === recentRating1) {
            if (cResult[20] === recentRatingCount1) {
              if (cResult[21] === trackAction) {
                let tmp18 = cResult[22];
              }
              items1.push(tmp18);
            }
          }
        }
        const obj8 = { key: "steam-recent", row: null };
        const obj9 = { url: steamWebsiteUrl, trackAction, title: tmp14, rating: recentRating1, ratingCount: recentRatingCount1, isRecentRating: true };
        obj8.row = closure_6(closure_11, obj9);
        cResult[18] = steamWebsiteUrl;
        cResult[19] = recentRating1;
        cResult[20] = recentRatingCount1;
        cResult[21] = trackAction;
        cResult[22] = obj8;
        tmp18 = obj8;
      }
    }
    if (showSteamReview) {
      if (null != steamWebsiteUrl) {
        if (cResult[23] !== primarySteamTitleKey) {
          const intl2 = tmp(1128).intl;
          const stringResult2 = intl2.string(primarySteamTitleKey);
          cResult[23] = primarySteamTitleKey;
          cResult[24] = stringResult2;
          let tmp23 = stringResult2;
        } else {
          tmp23 = cResult[24];
        }
        if (cResult[25] === primarySteamRating) {
          if (cResult[26] === primarySteamRatingCount) {
            if (cResult[27] === steamWebsiteUrl) {
              if (cResult[28] === tmp23) {
                if (cResult[29] === trackAction) {
                  let tmp25 = cResult[30];
                }
                items1.push(tmp25);
              }
            }
          }
        }
        const obj10 = { key: "steam-primary", row: null };
        obj11 = { url: steamWebsiteUrl, trackAction, title: tmp23, rating: primarySteamRating, ratingCount: primarySteamRatingCount, isRecentRating: false };
        obj10.row = closure_6(closure_11, obj11);
        cResult[25] = primarySteamRating;
        cResult[26] = primarySteamRatingCount;
        cResult[27] = steamWebsiteUrl;
        cResult[28] = tmp23;
        cResult[29] = trackAction;
        cResult[30] = obj10;
        tmp25 = obj10;
      }
    }
    for (const item10125 of gameProfileMobileStoreReviews) {
      let obj12 = { key: item10125.key, row: null };
      let obj13 = { review: item10125, trackAction };
      obj12.row = closure_6(closure_13, obj13);
      let arr7 = items1.push(obj12);
      continue;
    }
    if (tmp8) {
      if (null != opencriticUrl) {
        if (cResult[31] === game) {
          if (cResult[32] === opencriticUrl) {
            if (cResult[33] === trackAction) {
              let tmp35 = cResult[34];
            }
            items1.push(tmp35);
          }
        }
        const obj14 = { key: "opencritic", row: null };
        const obj15 = { game, url: opencriticUrl, trackAction };
        obj14.row = closure_6(closure_12, obj15);
        cResult[31] = game;
        cResult[32] = opencriticUrl;
        cResult[33] = trackAction;
        cResult[34] = obj14;
        tmp35 = obj14;
      }
    }
    cResult[3] = game;
    cResult[4] = gameProfileMobileStoreReviews;
    cResult[5] = opencriticUrl;
    cResult[6] = primarySteamRating;
    cResult[7] = primarySteamRatingCount;
    cResult[8] = primarySteamTitleKey;
    cResult[9] = tmp8;
    cResult[10] = showRecentSteamReview;
    cResult[11] = showSteamReview;
    let recentRating2;
    if (steamReview != null) {
      recentRating2 = steamReview.recentRating;
    }
    cResult[12] = recentRating2;
    let recentRatingCount2;
    if (steamReview != null) {
      recentRatingCount2 = steamReview.recentRatingCount;
    }
    cResult[13] = recentRatingCount2;
    cResult[14] = steamWebsiteUrl;
    cResult[15] = trackAction;
    cResult[16] = items1;
  }
  const obj4 = require("useGameProfileMobileStoreReviews");
  const result = require("GameProfileReviewUtils").canShowOpenCriticReview(game, gameProfileMobileStoreReviews);
  cResult[0] = game;
  cResult[1] = gameProfileMobileStoreReviews;
  cResult[2] = result;
  tmp8 = result;
  const tmpResult = require("GameProfileReviewUtils");
}) : (function GameProfileReviews(arg0) {
  ({ game, trackAction } = arg0);
  const tmp = closure_9();
  _require = tmp;
  const steamWebsiteUrl = require("useSteamWebsiteUrl").useSteamWebsiteUrl(game.id);
  const opencriticUrl = game.opencriticUrl;
  const obj = require("useSteamWebsiteUrl");
  const gameProfileReviewDisplayData = require("useGameProfileReviewDisplayData").useGameProfileReviewDisplayData(game, steamWebsiteUrl);
  const obj2 = require("useGameProfileReviewDisplayData");
  const gameProfileMobileStoreReviews = require("useGameProfileMobileStoreReviews").useGameProfileMobileStoreReviews(gameProfileReviewDisplayData.mobileStoreReviews);
  ({ steamReview, showSteamReview, showRecentSteamReview, primarySteamRating, primarySteamRatingCount, primarySteamTitleKey } = gameProfileReviewDisplayData);
  const obj3 = require("useGameProfileMobileStoreReviews");
  let result = require("GameProfileReviewUtils").canShowOpenCriticReview(game, gameProfileMobileStoreReviews);
  const items = [];
  if (showRecentSteamReview) {
    showRecentSteamReview = null != steamWebsiteUrl;
  }
  if (showRecentSteamReview) {
    const obj5 = { url: steamWebsiteUrl, trackAction, title: null, rating: null, ratingCount: null, isRecentRating: true };
    const intl = tmp2(1128).intl;
    obj5.title = intl.string(tmp2(1128).t.MQGNsN);
    let recentRating;
    if (steamReview != null) {
      recentRating = steamReview.recentRating;
    }
    obj5.rating = recentRating;
    let recentRatingCount;
    if (steamReview != null) {
      recentRatingCount = steamReview.recentRatingCount;
    }
    const obj6 = { key: "steam-recent", row: null };
    obj5.ratingCount = recentRatingCount;
    obj6.row = closure_6(closure_11, obj5);
    items.push(obj6);
  }
  if (showSteamReview) {
    showSteamReview = null != steamWebsiteUrl;
  }
  if (showSteamReview) {
    const obj7 = { key: "steam-primary", row: null };
    const obj8 = { url: steamWebsiteUrl, trackAction, title: null, rating: null, ratingCount: null, isRecentRating: false };
    const intl2 = tmp2(1128).intl;
    obj8.title = intl2.string(primarySteamTitleKey);
    obj8.rating = primarySteamRating;
    obj8.ratingCount = primarySteamRatingCount;
    obj7.row = closure_6(closure_11, obj8);
    items.push(obj7);
  }
  for (const item10072 of gameProfileMobileStoreReviews) {
    let obj9 = { key: item10072.key, row: null };
    let obj10 = { review: item10072, trackAction };
    obj9.row = closure_6(closure_13, obj10);
    let arr6 = items.push(obj9);
    continue;
  }
  if (result) {
    result = null != opencriticUrl;
  }
  if (result) {
    obj11 = { key: "opencritic", row: null };
    const obj12 = { game, url: opencriticUrl, trackAction };
    obj11.row = closure_6(closure_12, obj12);
    items.push(obj11);
  }
  let tmp26 = null;
  if (0 !== items.length) {
    const obj13 = { style: tmp.container, children: null };
    const obj14 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: null };
    const intl3 = require("util").intl;
    obj14.children = intl3.string(require("util").t.GaAQXP);
    const items1 = [closure_6(require("Text/Text").Text, obj14), ];
    const obj15 = {
      style: tmp.reviewContainer,
      children: items.map((item, index) => {
          const style = [closure_0.reviewRowContainer, ];
          let reviewRowContainerNotLast = index < items.length - 1;
          ({ key, row } = item);
          if (reviewRowContainerNotLast) {
            reviewRowContainerNotLast = closure_0.reviewRowContainerNotLast;
          }
          style[1] = reviewRowContainerNotLast;
          return timestampProducer(React4, { style, children }, key);
        })
    };
    items1[1] = closure_6(closure_4, obj15);
    obj13.children = items1;
    tmp26 = closure_7(closure_4, obj13);
  }
  return tmp26;
});