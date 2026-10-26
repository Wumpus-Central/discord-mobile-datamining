// === Module 13898: GiftingBadgeLevelUpProgress ===

// Module 13898 (GiftingBadgeLevelUpProgress)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef2632 from "module_2632" /* 2632 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10505 */;
import noop from "module_19" /* 19 */;

const util = format(1128);
const Text_Text = format(5234);
const GiftingBadgesUtils = format(10502);
require = fn;
const View = fn(17).View;
let closure_4 = fn(8681).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4971);
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
  let formatResult2 = dependencyMap;
  const cResult = c.c(57);
  ({ progress, currentTier, newTier, style } = arg0);
  let str = closure_7();
  if (cResult[0] !== currentTier) {
    const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(currentTier);
    cResult[0] = currentTier;
    cResult[1] = giftingBadgeTierIconUrl;
    let tmp3 = giftingBadgeTierIconUrl;
    const formatResult = GiftingBadgesUtils;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== newTier) {
    const giftingBadgeTierIconUrl1 = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(newTier);
    cResult[2] = newTier;
    cResult[3] = giftingBadgeTierIconUrl1;
    let tmp5 = giftingBadgeTierIconUrl1;
    const formatResult1 = GiftingBadgesUtils;
  } else {
    tmp5 = cResult[3];
  }
  if (cResult[4] === tmp3) {
    if (cResult[5] === newTier) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === progress) {
          if (cResult[8] === style) {
            if (cResult[9] === str.barRow) {
              if (cResult[10] === str.container) {
                if (cResult[11] === str.labels) {
                  if (cResult[12] === str.progressBarFill) {
                    if (cResult[13] === str.progressBarTrack) {
                      if (cResult[43] === cResult[14]) {
                        if (cResult[44] === tmp10) {
                          if (cResult[45] === tmp11) {
                            if (cResult[46] === tmp12) {
                              let tmp46 = cResult[47];
                            }
                            if (cResult[48] === tmp8) {
                              if (cResult[49] === tmp46) {
                                if (cResult[50] === tmp13) {
                                  let tmp49 = cResult[51];
                                }
                                if (cResult[52] === tmp9) {
                                  if (cResult[53] === tmp49) {
                                    if (cResult[54] === tmp14) {
                                      if (cResult[55] === tmp15) {
                                        let tmp52 = cResult[56];
                                      }
                                      return tmp52;
                                    }
                                  }
                                }
                                const obj2 = { style: tmp14, children: null };
                                const items = [tmp15, tmp49];
                                obj2.children = items;
                                const tmp54 = timestampProducer(tmp9, obj2);
                                cResult[52] = tmp9;
                                cResult[53] = tmp49;
                                cResult[54] = tmp14;
                                cResult[55] = tmp15;
                                cResult[56] = tmp54;
                                tmp52 = tmp54;
                              }
                            }
                            const obj3 = { style: tmp13, children: tmp46 };
                            const tmp51 = hasOwnProperty(tmp8, obj3);
                            cResult[48] = tmp8;
                            cResult[49] = tmp46;
                            cResult[50] = tmp13;
                            cResult[51] = tmp51;
                            tmp49 = tmp51;
                          }
                        }
                      }
                      const obj4 = { variant: cResult[17], color: cResult[18], children: cResult[19] };
                      const tmp48 = hasOwnProperty(cResult[14], obj4);
                      cResult[43] = cResult[14];
                      cResult[44] = cResult[17];
                      cResult[45] = cResult[18];
                      cResult[46] = cResult[19];
                      cResult[47] = tmp48;
                      tmp46 = tmp48;
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
  const tmp16 = closure_4(newTier);
  let num5 = 100;
  if (tmp16 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num5 = Math.min(Math.max(progress / tmp16 * 100, 0), 100);
  }
  if (cResult[23] === style) {
    if (cResult[24] === str.container) {
      let tmp19 = cResult[25];
    }
    if (cResult[26] !== tmp3) {
      let tmp20 = null != tmp3;
      if (tmp20) {
        const obj5 = { icon: tmp3, size: 24 };
        tmp20 = hasOwnProperty(GiftingBadgeIconDefault, obj5);
      }
      cResult[26] = tmp3;
      cResult[27] = tmp20;
      let intl = tmp20;
    } else {
      intl = cResult[27];
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + num5 + "%";
    if (cResult[28] !== combined) {
      const obj6 = { width: combined };
      cResult[28] = combined;
      cResult[29] = obj6;
      let tmp25 = obj6;
    } else {
      tmp25 = cResult[29];
    }
    if (cResult[30] === str.progressBarFill) {
      if (cResult[31] === tmp25) {
        let tmp26 = cResult[32];
      }
      if (cResult[33] === str.progressBarTrack) {
        if (cResult[34] === tmp26) {
          let tmp29 = cResult[35];
        }
        if (cResult[36] !== tmp5) {
          let tmp32 = null != tmp5;
          if (tmp32) {
            const obj7 = { icon: tmp5, size: 24 };
            tmp32 = hasOwnProperty(GiftingBadgeIconDefault, obj7);
          }
          cResult[36] = tmp5;
          cResult[37] = tmp32;
          let labels = tmp32;
        } else {
          labels = cResult[37];
        }
        if (cResult[38] === str.barRow) {
          if (cResult[39] === intl) {
            if (cResult[40] === tmp29) {
              if (cResult[41] === labels) {
                let tmp35 = cResult[42];
              }
              labels = str.labels;
              const Text = Text_Text.Text;
              intl = util.intl;
              format = intl.format;
              const obj8 = { count: progress, threshold: tmp16 };
              formatResult2 = format(_modDef2632.iIpfQe, obj8);
              cResult[4] = tmp3;
              cResult[5] = newTier;
              cResult[6] = tmp5;
              cResult[7] = progress;
              cResult[8] = style;
              cResult[9] = str.barRow;
              cResult[10] = str.container;
              cResult[11] = str.labels;
              cResult[12] = str.progressBarFill;
              cResult[13] = str.progressBarTrack;
              cResult[14] = Text;
              cResult[15] = View;
              cResult[16] = View;
              str = "text-xs/normal";
              cResult[17] = "text-xs/normal";
              style = "text-muted";
              cResult[18] = "text-muted";
              cResult[19] = formatResult2;
              cResult[20] = labels;
              cResult[21] = tmp19;
              cResult[22] = tmp35;
            }
          }
        }
        const obj9 = { style: str.barRow, children: null };
        const items1 = [intl, tmp29, labels];
        obj9.children = items1;
        const tmp37 = timestampProducer(View, obj9);
        cResult[38] = str.barRow;
        cResult[39] = intl;
        cResult[40] = tmp29;
        cResult[41] = labels;
        cResult[42] = tmp37;
        tmp35 = tmp37;
      }
      const obj10 = { style: str.progressBarTrack, children: tmp26 };
      const tmp31 = hasOwnProperty(View, obj10);
      cResult[33] = str.progressBarTrack;
      cResult[34] = tmp26;
      cResult[35] = tmp31;
      tmp29 = tmp31;
    }
    const obj11 = { style: null };
    const items2 = [str.progressBarFill, tmp25];
    obj11.style = items2;
    const tmp28 = hasOwnProperty(View, obj11);
    cResult[30] = str.progressBarFill;
    cResult[31] = tmp25;
    cResult[32] = tmp28;
    tmp26 = tmp28;
  }
  const items3 = [str.container, style];
  cResult[23] = style;
  cResult[24] = str.container;
  cResult[25] = items3;
  tmp19 = items3;
}) : (function GiftingBadgeLevelUpProgress(style) {
  ({ progress, currentTier, newTier } = style);
  const tmp = closure_7();
  const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(currentTier);
  const giftingBadgeTierIconUrl1 = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(newTier);
  const tmp6 = closure_4(newTier);
  let num = 100;
  if (tmp6 > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(progress / tmp6 * 100, 0), 100);
  }
  const obj2 = { style: null, children: null };
  const items = [tmp.container, style.style];
  obj2.style = items;
  const obj3 = { style: tmp.barRow, children: null };
  let tmp10 = null != giftingBadgeTierIconUrl;
  if (tmp10) {
    const obj4 = { icon: giftingBadgeTierIconUrl, size: 24 };
    tmp10 = hasOwnProperty(GiftingBadgeIconDefault, obj4);
  }
  const items1 = [tmp10, , ];
  const obj5 = { style: tmp.progressBarTrack, children: null };
  const obj6 = { style: null };
  const items2 = [tmp.progressBarFill, ];
  const tmp2Result = GiftingBadgesUtils;
  items2[1] = { width: "" + num + "%" };
  obj6.style = items2;
  obj5.children = hasOwnProperty(View, obj6);
  items1[1] = hasOwnProperty(View, obj5);
  let tmp13Result = null != giftingBadgeTierIconUrl1;
  if (tmp13Result) {
    const obj8 = { icon: giftingBadgeTierIconUrl1, size: 24 };
    tmp13Result = hasOwnProperty(GiftingBadgeIconDefault, obj8);
  }
  items1[2] = tmp13Result;
  obj3.children = items1;
  const items3 = [timestampProducer(View, obj3), ];
  const obj9 = { style: tmp.labels, children: null };
  const obj10 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj10.children = intl.format(_modDef2632.iIpfQe, { count: progress, threshold: tmp6 });
  obj9.children = hasOwnProperty(Text_Text.Text, obj10);
  items3[1] = hasOwnProperty(View, obj9);
  obj2.children = items3;
  return timestampProducer(View, obj2);
});