// === Module 12726: GiftingBadgeLevelUpProgress ===

// Module 12726 (GiftingBadgeLevelUpProgress)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef2664 from "module_2664" /* 2664 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10099 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10105 */;
import noop from "module_19" /* 19 */;

const util = format(1126);
const Text_Text = format(5088);
require = fn;
const View = fn(17).View;
let closure_4 = fn(8316).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { gap: nativeDefault.space.PX_4, width: "100%" }, barRow: null, progressBarTrack: null, progressBarFill: null, labels: null };
let obj3 = { gap: nativeDefault.space.PX_4, width: "100%" };
obj2.barRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.progressBarTrack = { flex: 1, height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
let obj5 = { flex: 1, height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
obj2.progressBarFill = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.labels = { flexDirection: "row", justifyContent: "flex-end" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingBadgeLevelUpProgress(arg0) {
  let format = require;
  let formatResult = dependencyMap;
  const cResult = c.c(59);
  ({ progress, currentTier, newTier, style } = arg0);
  let str = closure_7();
  const isGiftingBadgeComplexArtEnabled = GiftingBadgesUtils.useIsGiftingBadgeComplexArtEnabled("GiftingBadgeLevelUpProgress");
  if (cResult[0] === isGiftingBadgeComplexArtEnabled) {
    if (cResult[1] === currentTier) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === isGiftingBadgeComplexArtEnabled) {
      if (cResult[4] === newTier) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === tmp4) {
        if (cResult[7] === newTier) {
          if (cResult[8] === tmp6) {
            if (cResult[9] === progress) {
              if (cResult[10] === style) {
                if (cResult[11] === str.barRow) {
                  if (cResult[12] === str.container) {
                    if (cResult[13] === str.labels) {
                      if (cResult[14] === str.progressBarFill) {
                        if (cResult[15] === str.progressBarTrack) {
                          if (cResult[45] === cResult[16]) {
                            if (cResult[46] === tmp11) {
                              if (cResult[47] === tmp12) {
                                if (cResult[48] === tmp13) {
                                  let tmp48 = cResult[49];
                                }
                                if (cResult[50] === tmp9) {
                                  if (cResult[51] === tmp48) {
                                    if (cResult[52] === tmp14) {
                                      let tmp51 = cResult[53];
                                    }
                                    if (cResult[54] === tmp10) {
                                      if (cResult[55] === tmp51) {
                                        if (cResult[56] === tmp15) {
                                          if (cResult[57] === tmp16) {
                                            let tmp54 = cResult[58];
                                          }
                                          return tmp54;
                                        }
                                      }
                                    }
                                    const obj3 = { style: tmp15, children: null };
                                    const items = [tmp16, tmp51];
                                    obj3.children = items;
                                    const tmp56 = timestampProducer(tmp10, obj3);
                                    cResult[54] = tmp10;
                                    cResult[55] = tmp51;
                                    cResult[56] = tmp15;
                                    cResult[57] = tmp16;
                                    cResult[58] = tmp56;
                                    tmp54 = tmp56;
                                  }
                                }
                                const obj4 = { style: tmp14, children: tmp48 };
                                const tmp53 = hasOwnProperty(tmp9, obj4);
                                cResult[50] = tmp9;
                                cResult[51] = tmp48;
                                cResult[52] = tmp14;
                                cResult[53] = tmp53;
                                tmp51 = tmp53;
                              }
                            }
                          }
                          const obj5 = { variant: cResult[19], color: cResult[20], children: cResult[21] };
                          const tmp50 = hasOwnProperty(cResult[16], obj5);
                          cResult[45] = cResult[16];
                          cResult[46] = cResult[19];
                          cResult[47] = cResult[20];
                          cResult[48] = cResult[21];
                          cResult[49] = tmp50;
                          tmp48 = tmp50;
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
      const tmp18 = closure_4(newTier);
      let num6 = 100;
      if (tmp18 > 0) {
        const _Math = Math;
        const _Math2 = Math;
        num6 = Math.min(Math.max(progress / tmp18 * 100, 0), 100);
      }
      if (cResult[25] === style) {
        if (cResult[26] === str.container) {
          let tmp21 = cResult[27];
        }
        if (cResult[28] !== tmp4) {
          let tmp22 = null != tmp4;
          if (tmp22) {
            const obj6 = { icon: tmp4, size: 24 };
            tmp22 = hasOwnProperty(GiftingBadgeIconDefault, obj6);
          }
          cResult[28] = tmp4;
          cResult[29] = tmp22;
          let intl = tmp22;
        } else {
          intl = cResult[29];
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + num6 + "%";
        if (cResult[30] !== combined) {
          const obj7 = { width: combined };
          cResult[30] = combined;
          cResult[31] = obj7;
          let tmp27 = obj7;
        } else {
          tmp27 = cResult[31];
        }
        if (cResult[32] === str.progressBarFill) {
          if (cResult[33] === tmp27) {
            let tmp28 = cResult[34];
          }
          if (cResult[35] === str.progressBarTrack) {
            if (cResult[36] === tmp28) {
              let tmp31 = cResult[37];
            }
            if (cResult[38] !== tmp6) {
              let tmp34 = null != tmp6;
              if (tmp34) {
                const obj8 = { icon: tmp6, size: 24 };
                tmp34 = hasOwnProperty(GiftingBadgeIconDefault, obj8);
              }
              cResult[38] = tmp6;
              cResult[39] = tmp34;
              let labels = tmp34;
            } else {
              labels = cResult[39];
            }
            if (cResult[40] === str.barRow) {
              if (cResult[41] === intl) {
                if (cResult[42] === tmp31) {
                  if (cResult[43] === labels) {
                    let tmp37 = cResult[44];
                  }
                  labels = str.labels;
                  const Text = Text_Text.Text;
                  intl = util.intl;
                  format = intl.format;
                  const obj9 = { count: progress, threshold: tmp18 };
                  formatResult = format(_modDef2664.iIpfQe, obj9);
                  cResult[6] = tmp4;
                  cResult[7] = newTier;
                  cResult[8] = tmp6;
                  cResult[9] = progress;
                  cResult[10] = style;
                  cResult[11] = str.barRow;
                  cResult[12] = str.container;
                  cResult[13] = str.labels;
                  cResult[14] = str.progressBarFill;
                  cResult[15] = str.progressBarTrack;
                  cResult[16] = Text;
                  cResult[17] = View;
                  cResult[18] = View;
                  str = "text-xs/normal";
                  cResult[19] = "text-xs/normal";
                  style = "text-muted";
                  cResult[20] = "text-muted";
                  cResult[21] = formatResult;
                  cResult[22] = labels;
                  cResult[23] = tmp21;
                  cResult[24] = tmp37;
                }
              }
            }
            const obj10 = { style: str.barRow, children: null };
            const items1 = [intl, tmp31, labels];
            obj10.children = items1;
            const tmp39 = timestampProducer(View, obj10);
            cResult[40] = str.barRow;
            cResult[41] = intl;
            cResult[42] = tmp31;
            cResult[43] = labels;
            cResult[44] = tmp39;
            tmp37 = tmp39;
          }
          const obj11 = { style: str.progressBarTrack, children: tmp28 };
          const tmp33 = hasOwnProperty(View, obj11);
          cResult[35] = str.progressBarTrack;
          cResult[36] = tmp28;
          cResult[37] = tmp33;
          tmp31 = tmp33;
        }
        const obj12 = { style: null };
        const items2 = [str.progressBarFill, tmp27];
        obj12.style = items2;
        const tmp30 = hasOwnProperty(View, obj12);
        cResult[32] = str.progressBarFill;
        cResult[33] = tmp27;
        cResult[34] = tmp30;
        tmp28 = tmp30;
      }
      const items3 = [str.container, style];
      cResult[25] = style;
      cResult[26] = str.container;
      cResult[27] = items3;
      tmp21 = items3;
    }
    const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(newTier, isGiftingBadgeComplexArtEnabled);
    cResult[3] = isGiftingBadgeComplexArtEnabled;
    cResult[4] = newTier;
    cResult[5] = giftingBadgeTierIconUrl;
    tmp6 = giftingBadgeTierIconUrl;
    const formatResult1 = GiftingBadgesUtils;
  }
  const giftingBadgeTierIconUrl1 = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
  cResult[0] = isGiftingBadgeComplexArtEnabled;
  cResult[1] = currentTier;
  cResult[2] = giftingBadgeTierIconUrl1;
  tmp4 = giftingBadgeTierIconUrl1;
  const formatResult2 = GiftingBadgesUtils;
}) : (function GiftingBadgeLevelUpProgress(style) {
  ({ progress, currentTier, newTier } = style);
  const tmp = closure_7();
  const isGiftingBadgeComplexArtEnabled = GiftingBadgesUtils.useIsGiftingBadgeComplexArtEnabled("GiftingBadgeLevelUpProgress");
  const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
  const giftingBadgeTierIconUrl1 = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(newTier, isGiftingBadgeComplexArtEnabled);
  const tmp7 = closure_4(newTier);
  let num = 100;
  if (tmp7 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(progress / tmp7 * 100, 0), 100);
  }
  const obj3 = { style: null, children: null };
  const items = [tmp.container, style.style];
  obj3.style = items;
  const obj4 = { style: tmp.barRow, children: null };
  let tmp11 = null != giftingBadgeTierIconUrl;
  if (tmp11) {
    const obj5 = { icon: giftingBadgeTierIconUrl, size: 24 };
    tmp11 = hasOwnProperty(GiftingBadgeIconDefault, obj5);
  }
  const items1 = [tmp11, , ];
  const obj6 = { style: tmp.progressBarTrack, children: null };
  const obj7 = { style: null };
  const items2 = [tmp.progressBarFill, ];
  const tmp2Result = GiftingBadgesUtils;
  items2[1] = { width: "" + num + "%" };
  obj7.style = items2;
  obj6.children = hasOwnProperty(View, obj7);
  items1[1] = hasOwnProperty(View, obj6);
  let tmp14Result = null != giftingBadgeTierIconUrl1;
  if (tmp14Result) {
    const obj9 = { icon: giftingBadgeTierIconUrl1, size: 24 };
    tmp14Result = hasOwnProperty(GiftingBadgeIconDefault, obj9);
  }
  items1[2] = tmp14Result;
  obj4.children = items1;
  const items3 = [timestampProducer(View, obj4), ];
  const obj10 = { style: tmp.labels, children: null };
  const obj11 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj11.children = intl.format(_modDef2664.iIpfQe, { count: progress, threshold: tmp7 });
  obj10.children = hasOwnProperty(Text_Text.Text, obj11);
  items3[1] = hasOwnProperty(View, obj10);
  obj3.children = items3;
  return timestampProducer(View, obj3);
});