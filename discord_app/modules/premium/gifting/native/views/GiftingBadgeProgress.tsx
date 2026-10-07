// === Module 10780: GiftingBadgeProgress ===

// Module 10780 (GiftingBadgeProgress)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef2617 from "module_2617" /* 2617 */;
import Text_Text from "Text/Text" /* 4892 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10488 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10494 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(7874).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((percent) => {
  const cResult = c.c(8);
  const tmp2 = closure_8();
  const combined = "" + Math.min(Math.max(percent.percent, 0), 100) + "%";
  if (cResult[0] !== combined) {
    const obj2 = { width: combined };
    cResult[0] = combined;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp2.progressBarFill) {
    if (cResult[3] === tmp4) {
      let tmp5 = cResult[4];
    }
    if (cResult[5] === tmp2.progressBarTrack) {
      if (cResult[6] === tmp5) {
        let tmp7 = cResult[7];
      }
      return tmp7;
    }
    const obj3 = { style: tmp2.progressBarTrack, children: tmp5 };
    const tmp10 = hasOwnProperty(View, obj3);
    cResult[5] = tmp2.progressBarTrack;
    cResult[6] = tmp5;
    cResult[7] = tmp10;
    tmp7 = tmp10;
  }
  const obj4 = { style: null };
  const items = [tmp2.progressBarFill, tmp4];
  obj4.style = items;
  const tmp6 = hasOwnProperty(View, obj4);
  cResult[2] = tmp2.progressBarFill;
  cResult[3] = tmp4;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : ((percent) => {
  const tmp = closure_8();
  const obj = { style: tmp.progressBarTrack, children: null };
  const obj2 = { style: null };
  const items = [tmp.progressBarFill, { width: "" + Math.min(Math.max(percent.percent, 0), 100) + "%" }];
  obj2.style = items;
  obj.children = hasOwnProperty(View, obj2);
  return hasOwnProperty(View, obj);
});
const createStyles = fn(4896);
let obj3 = { container: { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_16 }, content: null, progressBarTrack: null, progressBarFill: null, labels: null };
let obj4 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_16 };
obj3.content = { flex: 1, paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
let obj5 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
obj3.progressBarTrack = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
let obj6 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, overflow: "hidden" };
obj3.progressBarFill = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj7 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj3.labels = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj3);
ReactCompilerGating = fn(558);
let obj8 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgress.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(50);
  ({ progress, currentTier, nextTier, iconSize, title } = arg0);
  let num = 24;
  if (undefined !== iconSize) {
    num = iconSize;
  }
  const tmp4 = closure_8();
  const isGiftingBadgeComplexArtEnabled = GiftingBadgesUtils.useIsGiftingBadgeComplexArtEnabled("GiftingBadgeProgress");
  if (cResult[0] === currentTier) {
    if (cResult[1] === isGiftingBadgeComplexArtEnabled) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === isGiftingBadgeComplexArtEnabled) {
      if (cResult[4] === nextTier) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === num) {
          if (cResult[8] === nextTier) {
            if (cResult[9] === progress) {
              if (cResult[10] === tmp4.container) {
                if (cResult[11] === tmp4.content) {
                  if (cResult[12] === tmp4.labels) {
                    if (cResult[13] === title) {
                      let tmp10 = cResult[14];
                      let tmp11 = cResult[15];
                      let tmp12 = cResult[16];
                      let tmp13 = cResult[17];
                      let tmp14 = cResult[18];
                      let tmp15 = cResult[19];
                      let tmp16 = cResult[20];
                      let tmp17 = cResult[21];
                      let tmp18 = cResult[22];
                      let tmp19 = cResult[23];
                    }
                    if (cResult[31] === tmp10) {
                      if (cResult[32] === tmp14) {
                        if (cResult[33] === tmp15) {
                          let tmp40 = cResult[34];
                        }
                        if (cResult[35] === tmp11) {
                          if (cResult[36] === tmp40) {
                            if (cResult[37] === tmp16) {
                              if (cResult[38] === tmp17) {
                                if (cResult[39] === tmp18) {
                                  let tmp43 = cResult[40];
                                }
                                if (cResult[41] === num) {
                                  if (cResult[42] === tmp8) {
                                    let tmp46 = cResult[43];
                                  }
                                  if (cResult[44] === tmp12) {
                                    if (cResult[45] === tmp13) {
                                      if (cResult[46] === tmp43) {
                                        if (cResult[47] === tmp46) {
                                          if (cResult[48] === tmp19) {
                                            let tmp51 = cResult[49];
                                          }
                                          return tmp51;
                                        }
                                      }
                                    }
                                  }
                                  const obj2 = { style: tmp19, children: null };
                                  const items = [tmp13, tmp43, tmp46];
                                  obj2.children = items;
                                  const tmp53 = timestampProducer(tmp12, obj2);
                                  cResult[44] = tmp12;
                                  cResult[45] = tmp13;
                                  cResult[46] = tmp43;
                                  cResult[47] = tmp46;
                                  cResult[48] = tmp19;
                                  cResult[49] = tmp53;
                                  tmp51 = tmp53;
                                }
                                let tmp48 = null != tmp8;
                                if (tmp48) {
                                  const obj3 = { icon: tmp8, size: num };
                                  tmp48 = hasOwnProperty(GiftingBadgeIconDefault, obj3);
                                }
                                cResult[41] = num;
                                cResult[42] = tmp8;
                                cResult[43] = tmp48;
                                tmp46 = tmp48;
                              }
                            }
                          }
                        }
                        const obj4 = { style: tmp16, children: null };
                        const items1 = [tmp17, tmp18, tmp40];
                        obj4.children = items1;
                        const tmp45 = timestampProducer(tmp11, obj4);
                        cResult[35] = tmp11;
                        cResult[36] = tmp40;
                        cResult[37] = tmp16;
                        cResult[38] = tmp17;
                        cResult[39] = tmp18;
                        cResult[40] = tmp45;
                        tmp43 = tmp45;
                      }
                    }
                    const obj5 = { style: tmp14, children: tmp15 };
                    const tmp42 = hasOwnProperty(tmp10, obj5);
                    cResult[31] = tmp10;
                    cResult[32] = tmp14;
                    cResult[33] = tmp15;
                    cResult[34] = tmp42;
                    tmp40 = tmp42;
                  }
                }
              }
            }
          }
        }
      }
      const tmp21 = closure_4(nextTier);
      let tmp23 = null != nextTier;
      if (tmp23) {
        tmp23 = tmp21 > 0;
      }
      let num7 = 100;
      if (tmp23) {
        const _Math = Math;
        const _Math2 = Math;
        num7 = Math.min(Math.max(progress / tmp21 * 100, 0), 100);
      }
      const container = tmp4.container;
      if (cResult[24] === tmp6) {
        if (cResult[25] === num) {
          let tmp26 = cResult[26];
        }
        const content = tmp4.content;
        if (cResult[27] !== title) {
          let tmp31 = null != title;
          if (tmp31) {
            const obj6 = { variant: "text-md/semibold", children: title };
            tmp31 = hasOwnProperty(Text_Text.Text, obj6);
          }
          cResult[27] = title;
          cResult[28] = tmp31;
          let tmp30 = tmp31;
        } else {
          tmp30 = cResult[28];
        }
        if (cResult[29] !== num7) {
          const obj7 = { percent: num7 };
          const tmp36 = hasOwnProperty(closure_7, obj7);
          cResult[29] = num7;
          cResult[30] = tmp36;
          let tmp33 = tmp36;
        } else {
          tmp33 = cResult[30];
        }
        const labels = tmp4.labels;
        let tmp37 = null != nextTier;
        if (tmp37) {
          const obj8 = { variant: "text-xs/normal", color: "text-muted", children: null };
          const intl = util.intl;
          const obj9 = { count: progress, threshold: tmp21 };
          obj8.children = intl.format(_modDef2617.iIpfQe, obj9);
          tmp37 = hasOwnProperty(Text_Text.Text, obj8);
        }
        cResult[6] = tmp6;
        cResult[7] = num;
        cResult[8] = nextTier;
        cResult[9] = progress;
        cResult[10] = tmp4.container;
        cResult[11] = tmp4.content;
        cResult[12] = tmp4.labels;
        cResult[13] = title;
        cResult[14] = View;
        cResult[15] = View;
        cResult[16] = View;
        cResult[17] = tmp26;
        cResult[18] = labels;
        cResult[19] = tmp37;
        cResult[20] = content;
        cResult[21] = tmp30;
        cResult[22] = tmp33;
        cResult[23] = container;
        tmp15 = tmp37;
        tmp19 = container;
        tmp18 = tmp33;
        tmp17 = tmp30;
        tmp16 = content;
        tmp14 = labels;
        tmp13 = tmp26;
        tmp12 = View;
        tmp11 = View;
        tmp10 = View;
      }
      let tmp27 = null != tmp6;
      if (tmp27) {
        const obj10 = { icon: tmp6, size: num };
        tmp27 = hasOwnProperty(GiftingBadgeIconDefault, obj10);
      }
      cResult[24] = tmp6;
      cResult[25] = num;
      cResult[26] = tmp27;
      tmp26 = tmp27;
    }
    const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled);
    cResult[3] = isGiftingBadgeComplexArtEnabled;
    cResult[4] = nextTier;
    cResult[5] = giftingBadgeTierIconUrl;
    tmp8 = giftingBadgeTierIconUrl;
    const tmpResult3 = GiftingBadgesUtils;
  }
  const tmpResult = GiftingBadgesUtils;
  const giftingBadgeTierIconUrl1 = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
  cResult[0] = currentTier;
  cResult[1] = isGiftingBadgeComplexArtEnabled;
  cResult[2] = giftingBadgeTierIconUrl1;
  tmp6 = giftingBadgeTierIconUrl1;
  const tmpResult4 = GiftingBadgesUtils;
}) : ((title) => {
  ({ progress, nextTier, iconSize } = title);
  if (iconSize === undefined) {
    iconSize = 24;
  }
  title = title.title;
  const tmp = closure_8();
  const isGiftingBadgeComplexArtEnabled = GiftingBadgesUtils.useIsGiftingBadgeComplexArtEnabled("GiftingBadgeProgress");
  const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(title.currentTier, isGiftingBadgeComplexArtEnabled);
  const giftingBadgeTierIconUrl1 = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled);
  const tmp7 = closure_4(nextTier);
  let tmp8 = null != nextTier;
  if (tmp8) {
    tmp8 = tmp7 > 0;
  }
  let num2 = 100;
  if (tmp8) {
    const _Math = Math;
    const _Math2 = Math;
    num2 = Math.min(Math.max(progress / tmp7 * 100, 0), 100);
  }
  const obj4 = { style: tmp.container, children: null };
  let tmp12 = null != giftingBadgeTierIconUrl;
  if (tmp12) {
    const obj5 = { icon: giftingBadgeTierIconUrl, size: iconSize };
    tmp12 = hasOwnProperty(GiftingBadgeIconDefault, obj5);
  }
  const items = [tmp12, , ];
  const obj6 = { style: tmp.content, children: null };
  let tmp15 = null != title;
  if (tmp15) {
    const obj7 = { variant: "text-md/semibold", children: title };
    tmp15 = hasOwnProperty(Text_Text.Text, obj7);
  }
  const items1 = [tmp15, hasOwnProperty(closure_7, { percent: num2 }), ];
  const obj8 = { style: tmp.labels, children: null };
  let tmp17Result = null != nextTier;
  if (tmp17Result) {
    const obj9 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl = util.intl;
    const obj10 = { count: progress, threshold: tmp7 };
    obj9.children = intl.format(_modDef2617.iIpfQe, obj10);
    tmp17Result = hasOwnProperty(Text_Text.Text, obj9);
  }
  obj8.children = tmp17Result;
  items1[2] = hasOwnProperty(View, obj8);
  obj6.children = items1;
  items[1] = timestampProducer(View, obj6);
  let tmp17Result2 = null != giftingBadgeTierIconUrl1;
  if (tmp17Result2) {
    const obj11 = { icon: giftingBadgeTierIconUrl1, size: iconSize };
    tmp17Result2 = hasOwnProperty(GiftingBadgeIconDefault, obj11);
  }
  items[2] = tmp17Result2;
  obj4.children = items;
  return timestampProducer(View, obj4);
});