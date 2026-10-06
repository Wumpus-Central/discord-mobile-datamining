// === Module 10781: GiftingBadgeLevelUpProgress ===

// Module 10781 (GiftingBadgeLevelUpProgress)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import _modDef2617 from "module_2617" /* 2617 */;
import Text_Text from "Text/Text" /* 4892 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7874 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10488 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10494 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
let closure_4 = BadgeDirectoryStore.getSingleRequirementThreshold;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, barRow: obj3, progressBarTrack: obj4, progressBarFill: obj5, labels: { flexDirection: "row", justifyContent: "flex-end" } };
obj2 = { gap: nativeDefault.space.PX_4, width: "100%" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flex: 1, height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
obj5 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_7 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let currentTier;
  let items;
  let items1;
  let items2;
  let newTier;
  let progress;
  let style;
  const obj = react2;
  const cResult = obj.c(59);
  ({ progress, currentTier, newTier, style } = arg0);
  const tmp4 = closure_7();
  const obj2 = GiftingBadgesUtils;
  const isGiftingBadgeComplexArtEnabled = obj2.useIsGiftingBadgeComplexArtEnabled("GiftingBadgeLevelUpProgress");
  if (cResult[0] === isGiftingBadgeComplexArtEnabled) {
    let tmp6;
    if (cResult[1] === currentTier) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === isGiftingBadgeComplexArtEnabled) {
      let tmp8;
      let tmp16;
      let tmp15;
      let tmp14;
      let tmp13;
      let str2;
      let str;
      let tmp12;
      let tmp11;
      let tmp10;
      if (cResult[4] === newTier) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === newTier) {
          if (cResult[8] === tmp8) {
            if (cResult[9] === progress) {
              if (cResult[10] === style) {
                if (cResult[11] === tmp4.barRow) {
                  if (cResult[12] === tmp4.container) {
                    if (cResult[13] === tmp4.labels) {
                      if (cResult[14] === tmp4.progressBarFill) {
                        if (cResult[15] === tmp4.progressBarTrack) {
                          tmp10 = cResult[16];
                          tmp11 = cResult[17];
                          tmp12 = cResult[18];
                          str = cResult[19];
                          str2 = cResult[20];
                          tmp13 = cResult[21];
                          tmp14 = cResult[22];
                          tmp15 = cResult[23];
                          tmp16 = cResult[24];
                        }
                        if (cResult[45] === tmp10) {
                          if (cResult[46] === str) {
                            if (cResult[47] === str2) {
                              let tmp44;
                              if (cResult[48] === tmp13) {
                                tmp44 = cResult[49];
                              }
                              if (cResult[50] === tmp11) {
                                if (cResult[51] === tmp44) {
                                  let tmp47;
                                  if (cResult[52] === tmp14) {
                                    tmp47 = cResult[53];
                                  }
                                  if (cResult[54] === tmp12) {
                                    if (cResult[55] === tmp47) {
                                      if (cResult[56] === tmp15) {
                                        let tmp50;
                                        if (cResult[57] === tmp16) {
                                          tmp50 = cResult[58];
                                        }
                                        return tmp50;
                                      }
                                    }
                                  }
                                  const obj3 = { style: tmp15, children: items };
                                  items = [tmp16, tmp47];
                                  const tmp52 = metroRequire(tmp12, obj3);
                                  cResult[54] = tmp12;
                                  cResult[55] = tmp47;
                                  cResult[56] = tmp15;
                                  cResult[57] = tmp16;
                                  cResult[58] = tmp52;
                                  tmp50 = tmp52;
                                }
                              }
                              const obj4 = { style: tmp14, children: tmp44 };
                              const tmp49 = hasOwnProperty(tmp11, obj4);
                              cResult[50] = tmp11;
                              cResult[51] = tmp44;
                              cResult[52] = tmp14;
                              cResult[53] = tmp49;
                              tmp47 = tmp49;
                            }
                          }
                        }
                        const obj5 = { variant: str, color: str2, children: tmp13 };
                        const tmp46 = hasOwnProperty(tmp10, obj5);
                        cResult[45] = tmp10;
                        cResult[46] = str;
                        cResult[47] = str2;
                        cResult[48] = tmp13;
                        cResult[49] = tmp46;
                        tmp44 = tmp46;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const tmp18 = closure_4(newTier);
      let num6 = 100;
      if (tmp18 > 0) {
        const _Math = Math;
        const _Math2 = Math;
        num6 = Math.min(Math.max(progress / tmp18 * 100, 0), 100);
      }
      if (cResult[25] === style) {
        let tmp21;
        let tmp22;
        let tmp28;
        if (cResult[26] === tmp4.container) {
          tmp21 = cResult[27];
        }
        if (cResult[28] !== tmp6) {
          let tmp23 = null != tmp6;
          if (tmp23) {
            const obj6 = { icon: tmp6, size: 24 };
            tmp23 = hasOwnProperty(GiftingBadgeIconDefault, obj6);
          }
          cResult[28] = tmp6;
          cResult[29] = tmp23;
          tmp22 = tmp23;
        } else {
          tmp22 = cResult[29];
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + num6 + "%";
        if (cResult[30] !== combined) {
          const obj7 = { width: combined };
          cResult[30] = combined;
          cResult[31] = obj7;
          tmp28 = obj7;
        } else {
          tmp28 = cResult[31];
        }
        if (cResult[32] === tmp4.progressBarFill) {
          let tmp29;
          if (cResult[33] === tmp28) {
            tmp29 = cResult[34];
          }
          if (cResult[35] === tmp4.progressBarTrack) {
            let tmp32;
            let tmp35;
            if (cResult[36] === tmp29) {
              tmp32 = cResult[37];
            }
            if (cResult[38] !== tmp8) {
              let tmp36 = null != tmp8;
              if (tmp36) {
                const obj8 = { icon: tmp8, size: 24 };
                tmp36 = hasOwnProperty(GiftingBadgeIconDefault, obj8);
              }
              cResult[38] = tmp8;
              cResult[39] = tmp36;
              tmp35 = tmp36;
            } else {
              tmp35 = cResult[39];
            }
            if (cResult[40] === tmp4.barRow) {
              if (cResult[41] === tmp22) {
                if (cResult[42] === tmp32) {
                  let tmp39;
                  if (cResult[43] === tmp35) {
                    tmp39 = cResult[44];
                  }
                  const labels = tmp4.labels;
                  const Text = Text_Text.Text;
                  const intl = intl2.intl;
                  const obj9 = { count: progress, threshold: tmp18 };
                  const formatResult = intl.format(_modDef2617.iIpfQe, obj9);
                  cResult[6] = tmp6;
                  cResult[7] = newTier;
                  cResult[8] = tmp8;
                  cResult[9] = progress;
                  cResult[10] = style;
                  cResult[11] = tmp4.barRow;
                  cResult[12] = tmp4.container;
                  cResult[13] = tmp4.labels;
                  cResult[14] = tmp4.progressBarFill;
                  cResult[15] = tmp4.progressBarTrack;
                  cResult[16] = Text;
                  cResult[17] = View;
                  cResult[18] = View;
                  cResult[19] = "text-xs/normal";
                  cResult[20] = "text-muted";
                  cResult[21] = formatResult;
                  cResult[22] = labels;
                  cResult[23] = tmp21;
                  cResult[24] = tmp39;
                  tmp16 = tmp39;
                  tmp15 = tmp21;
                  tmp14 = labels;
                  tmp13 = formatResult;
                  str2 = "text-muted";
                  str = "text-xs/normal";
                  tmp12 = View;
                  tmp11 = View;
                  tmp10 = Text;
                }
              }
            }
            const obj10 = { style: tmp4.barRow, children: items1 };
            items1 = [tmp22, tmp32, tmp35];
            const tmp41 = metroRequire(View, obj10);
            cResult[40] = tmp4.barRow;
            cResult[41] = tmp22;
            cResult[42] = tmp32;
            cResult[43] = tmp35;
            cResult[44] = tmp41;
            tmp39 = tmp41;
          }
          const obj11 = { style: tmp4.progressBarTrack, children: tmp29 };
          const tmp34 = hasOwnProperty(View, obj11);
          cResult[35] = tmp4.progressBarTrack;
          cResult[36] = tmp29;
          cResult[37] = tmp34;
          tmp32 = tmp34;
        }
        const obj12 = { style: items2 };
        items2 = [tmp4.progressBarFill, tmp28];
        const tmp31 = hasOwnProperty(View, obj12);
        cResult[32] = tmp4.progressBarFill;
        cResult[33] = tmp28;
        cResult[34] = tmp31;
        tmp29 = tmp31;
      }
      const items3 = [tmp4.container, style];
      cResult[25] = style;
      cResult[26] = tmp4.container;
      cResult[27] = items3;
      tmp21 = items3;
    }
    const tmpResult = GiftingBadgesUtils;
    const giftingBadgeTierIconUrl = tmpResult.getGiftingBadgeTierIconUrl(newTier, isGiftingBadgeComplexArtEnabled);
    cResult[3] = isGiftingBadgeComplexArtEnabled;
    cResult[4] = newTier;
    cResult[5] = giftingBadgeTierIconUrl;
    tmp8 = giftingBadgeTierIconUrl;
  }
  const tmpResult2 = GiftingBadgesUtils;
  const giftingBadgeTierIconUrl1 = tmpResult2.getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
  cResult[0] = isGiftingBadgeComplexArtEnabled;
  cResult[1] = currentTier;
  cResult[2] = giftingBadgeTierIconUrl1;
  tmp6 = giftingBadgeTierIconUrl1;
}) : ((style) => {
  let Text;
  let currentTier;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let newTier;
  let obj10;
  let obj6;
  let progress;
  ({ progress, currentTier, newTier } = style);
  style = style.style;
  const tmp = closure_7();
  const obj = GiftingBadgesUtils;
  const isGiftingBadgeComplexArtEnabled = obj.useIsGiftingBadgeComplexArtEnabled("GiftingBadgeLevelUpProgress");
  const getGiftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl;
  GiftingBadgesUtils;
  const giftingBadgeTierIconUrl = getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
  const tmp2Result = GiftingBadgesUtils;
  const giftingBadgeTierIconUrl1 = tmp2Result.getGiftingBadgeTierIconUrl(newTier, isGiftingBadgeComplexArtEnabled);
  const tmp8 = closure_4(newTier);
  let num = 100;
  if (tmp8 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(progress / tmp8 * 100, 0), 100);
  }
  const obj2 = { style: items, children: items3 };
  items = [tmp.container, style];
  let tmp12 = null != giftingBadgeTierIconUrl;
  const obj3 = { style: tmp.barRow, children: items1 };
  if (tmp12) {
    const obj4 = { icon: giftingBadgeTierIconUrl, size: 24 };
    tmp12 = hasOwnProperty(GiftingBadgeIconDefault, obj4);
  }
  items1 = [tmp12, , ];
  const obj5 = { style: tmp.progressBarTrack, children: hasOwnProperty(View, obj6) };
  obj6 = { style: items2 };
  items2 = [tmp.progressBarFill, { width: "" + num + "%" }];
  ({ width: "" + num + "%" });
  items1[1] = hasOwnProperty(View, obj5);
  let tmp15Result = null != giftingBadgeTierIconUrl1;
  if (tmp15Result) {
    const obj8 = { icon: giftingBadgeTierIconUrl1, size: 24 };
    tmp15Result = hasOwnProperty(GiftingBadgeIconDefault, obj8);
  }
  items1[2] = tmp15Result;
  items3 = [metroRequire(View, obj3), ];
  const obj9 = { style: tmp.labels, children: hasOwnProperty(Text, obj10) };
  obj10 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(_modDef2617.iIpfQe, { count: progress, threshold: tmp8 }) };
  Text = Text_Text.Text;
  intl = intl2.intl;
  items3[1] = hasOwnProperty(View, obj9);
  return metroRequire(View, obj2);
});
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx");

export default tmp5;