// === Module 13913: GiftingBadgeProgress ===

// Module 13913 (GiftingBadgeProgress)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import _modDef2631 from "module_2631" /* 2631 */;
import Text_Text from "Text/Text" /* 5235 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10505 */;
import GiftingBadgeIconDefault from "GiftingBadgeIcon" /* 10508 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(8681).getSingleRequirementThreshold;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingBadgeProgressBar(percent) {
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
}) : (function GiftingBadgeProgressBar(percent) {
  const tmp = closure_8();
  const obj = { style: tmp.progressBarTrack, children: null };
  const obj2 = { style: null };
  const items = [tmp.progressBarFill, { width: "" + Math.min(Math.max(percent.percent, 0), 100) + "%" }];
  obj2.style = items;
  obj.children = hasOwnProperty(View, obj2);
  return hasOwnProperty(View, obj);
});
const createStyles = fn(4972);
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

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingBadgeProgress(arg0) {
  const cResult = c.c(48);
  ({ progress, currentTier, nextTier, iconSize, title } = arg0);
  let num = 24;
  if (undefined !== iconSize) {
    num = iconSize;
  }
  const tmp4 = closure_8();
  if (cResult[0] !== currentTier) {
    const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(currentTier);
    cResult[0] = currentTier;
    cResult[1] = giftingBadgeTierIconUrl;
    let tmp5 = giftingBadgeTierIconUrl;
    const tmpResult = GiftingBadgesUtils;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== nextTier) {
    const giftingBadgeTierIconUrl1 = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(nextTier);
    cResult[2] = nextTier;
    cResult[3] = giftingBadgeTierIconUrl1;
    let tmp7 = giftingBadgeTierIconUrl1;
    const tmpResult2 = GiftingBadgesUtils;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    if (cResult[5] === num) {
      if (cResult[6] === nextTier) {
        if (cResult[7] === progress) {
          if (cResult[8] === tmp4.container) {
            if (cResult[9] === tmp4.content) {
              if (cResult[10] === tmp4.labels) {
                if (cResult[11] === title) {
                  let tmp9 = cResult[12];
                  let tmp10 = cResult[13];
                  let tmp11 = cResult[14];
                  let tmp12 = cResult[15];
                  let tmp13 = cResult[16];
                  let tmp14 = cResult[17];
                  let tmp15 = cResult[18];
                  let tmp16 = cResult[19];
                  let tmp17 = cResult[20];
                  let tmp18 = cResult[21];
                }
                if (cResult[29] === tmp9) {
                  if (cResult[30] === tmp13) {
                    if (cResult[31] === tmp14) {
                      let tmp37 = cResult[32];
                    }
                    if (cResult[33] === tmp10) {
                      if (cResult[34] === tmp37) {
                        if (cResult[35] === tmp15) {
                          if (cResult[36] === tmp16) {
                            if (cResult[37] === tmp17) {
                              let tmp40 = cResult[38];
                            }
                            if (cResult[39] === num) {
                              if (cResult[40] === tmp7) {
                                let tmp43 = cResult[41];
                              }
                              if (cResult[42] === tmp11) {
                                if (cResult[43] === tmp12) {
                                  if (cResult[44] === tmp40) {
                                    if (cResult[45] === tmp43) {
                                      if (cResult[46] === tmp18) {
                                        let tmp48 = cResult[47];
                                      }
                                      return tmp48;
                                    }
                                  }
                                }
                              }
                              const obj2 = { style: tmp18, children: null };
                              const items = [tmp12, tmp40, tmp43];
                              obj2.children = items;
                              const tmp50 = timestampProducer(tmp11, obj2);
                              cResult[42] = tmp11;
                              cResult[43] = tmp12;
                              cResult[44] = tmp40;
                              cResult[45] = tmp43;
                              cResult[46] = tmp18;
                              cResult[47] = tmp50;
                              tmp48 = tmp50;
                            }
                            let tmp45 = null != tmp7;
                            if (tmp45) {
                              const obj3 = { icon: tmp7, size: num };
                              tmp45 = hasOwnProperty(GiftingBadgeIconDefault, obj3);
                            }
                            cResult[39] = num;
                            cResult[40] = tmp7;
                            cResult[41] = tmp45;
                            tmp43 = tmp45;
                          }
                        }
                      }
                    }
                    const obj4 = { style: tmp15, children: null };
                    const items1 = [tmp16, tmp17, tmp37];
                    obj4.children = items1;
                    const tmp42 = timestampProducer(tmp10, obj4);
                    cResult[33] = tmp10;
                    cResult[34] = tmp37;
                    cResult[35] = tmp15;
                    cResult[36] = tmp16;
                    cResult[37] = tmp17;
                    cResult[38] = tmp42;
                    tmp40 = tmp42;
                  }
                }
                const obj5 = { style: tmp13, children: tmp14 };
                const tmp39 = hasOwnProperty(tmp9, obj5);
                cResult[29] = tmp9;
                cResult[30] = tmp13;
                cResult[31] = tmp14;
                cResult[32] = tmp39;
                tmp37 = tmp39;
              }
            }
          }
        }
      }
    }
  }
  const tmp19 = closure_4(nextTier);
  let tmp20 = null != nextTier;
  if (tmp20) {
    tmp20 = tmp19 > 0;
  }
  let num7 = 100;
  if (tmp20) {
    const _Math = Math;
    const _Math2 = Math;
    num7 = Math.min(Math.max(progress / tmp19 * 100, 0), 100);
  }
  const container = tmp4.container;
  if (cResult[22] === tmp5) {
    if (cResult[23] === num) {
      let tmp23 = cResult[24];
    }
    const content = tmp4.content;
    if (cResult[25] !== title) {
      let tmp28 = null != title;
      if (tmp28) {
        const obj6 = { variant: "text-md/semibold", children: title };
        tmp28 = hasOwnProperty(Text_Text.Text, obj6);
      }
      cResult[25] = title;
      cResult[26] = tmp28;
      let tmp27 = tmp28;
    } else {
      tmp27 = cResult[26];
    }
    if (cResult[27] !== num7) {
      const obj7 = { percent: num7 };
      const tmp33 = hasOwnProperty(closure_7, obj7);
      cResult[27] = num7;
      cResult[28] = tmp33;
      let tmp30 = tmp33;
    } else {
      tmp30 = cResult[28];
    }
    const labels = tmp4.labels;
    let tmp34 = null != nextTier;
    if (tmp34) {
      const obj8 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = util.intl;
      const obj9 = { count: progress, threshold: tmp19 };
      obj8.children = intl.format(_modDef2631.iIpfQe, obj9);
      tmp34 = hasOwnProperty(Text_Text.Text, obj8);
    }
    cResult[4] = tmp5;
    cResult[5] = num;
    cResult[6] = nextTier;
    cResult[7] = progress;
    cResult[8] = tmp4.container;
    cResult[9] = tmp4.content;
    cResult[10] = tmp4.labels;
    cResult[11] = title;
    cResult[12] = View;
    cResult[13] = View;
    cResult[14] = View;
    cResult[15] = tmp23;
    cResult[16] = labels;
    cResult[17] = tmp34;
    cResult[18] = content;
    cResult[19] = tmp27;
    cResult[20] = tmp30;
    cResult[21] = container;
    tmp14 = tmp34;
    tmp18 = container;
    tmp17 = tmp30;
    tmp16 = tmp27;
    tmp15 = content;
    tmp13 = labels;
    tmp12 = tmp23;
    tmp11 = View;
    tmp10 = View;
    tmp9 = View;
  }
  let tmp24 = null != tmp5;
  if (tmp24) {
    const obj10 = { icon: tmp5, size: num };
    tmp24 = hasOwnProperty(GiftingBadgeIconDefault, obj10);
  }
  cResult[22] = tmp5;
  cResult[23] = num;
  cResult[24] = tmp24;
  tmp23 = tmp24;
}) : (function GiftingBadgeProgress(title) {
  ({ progress, nextTier, iconSize } = title);
  if (iconSize === undefined) {
    iconSize = 24;
  }
  title = title.title;
  const tmp = closure_8();
  const giftingBadgeTierIconUrl = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(title.currentTier);
  const giftingBadgeTierIconUrl1 = GiftingBadgesUtils.getGiftingBadgeTierIconUrl(nextTier);
  const tmp6 = closure_4(nextTier);
  let tmp7 = null != nextTier;
  if (tmp7) {
    tmp7 = tmp6 > 0;
  }
  let num2 = 100;
  if (tmp7) {
    const _Math = Math;
    const _Math2 = Math;
    num2 = Math.min(Math.max(progress / tmp6 * 100, 0), 100);
  }
  const obj3 = { style: tmp.container, children: null };
  let tmp11 = null != giftingBadgeTierIconUrl;
  if (tmp11) {
    const obj4 = { icon: giftingBadgeTierIconUrl, size: iconSize };
    tmp11 = hasOwnProperty(GiftingBadgeIconDefault, obj4);
  }
  const items = [tmp11, , ];
  const obj5 = { style: tmp.content, children: null };
  let tmp14 = null != title;
  if (tmp14) {
    const obj6 = { variant: "text-md/semibold", children: title };
    tmp14 = hasOwnProperty(Text_Text.Text, obj6);
  }
  const items1 = [tmp14, hasOwnProperty(closure_7, { percent: num2 }), ];
  const obj7 = { style: tmp.labels, children: null };
  let tmp16Result = null != nextTier;
  if (tmp16Result) {
    const obj8 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl = util.intl;
    const obj9 = { count: progress, threshold: tmp6 };
    obj8.children = intl.format(_modDef2631.iIpfQe, obj9);
    tmp16Result = hasOwnProperty(Text_Text.Text, obj8);
  }
  obj7.children = tmp16Result;
  items1[2] = hasOwnProperty(View, obj7);
  obj5.children = items1;
  items[1] = timestampProducer(View, obj5);
  let tmp16Result2 = null != giftingBadgeTierIconUrl1;
  if (tmp16Result2) {
    const obj10 = { icon: giftingBadgeTierIconUrl1, size: iconSize };
    tmp16Result2 = hasOwnProperty(GiftingBadgeIconDefault, obj10);
  }
  items[2] = tmp16Result2;
  obj3.children = items;
  return timestampProducer(View, obj3);
});