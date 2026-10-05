// === Module 10972: BadgeProgressSection ===

// Module 10972 (BadgeProgressSection)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import BadgeArtImageDefault from "BadgeArtImage" /* 10882 */;
import BadgeDetailsUtils from "BadgeDetailsUtils" /* 10897 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { section: obj2, row: obj3, content: obj4, track: obj5, fill: obj6 };
obj2 = { gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj4 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj5 = { height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, overflow: "hidden" };
obj6 = { height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let badge;
  let currentArtUrl;
  let helperText;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let nextArtUrl;
  let numberFormat;
  let obj10;
  let obj11;
  let progress;
  let threshold;
  let tmp20;
  let viewerBadge;
  const obj = react2;
  const cResult = obj.c(37);
  ({ badge, viewerBadge } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === badge) {
    if (cResult[1] === tmp4.content) {
      if (cResult[2] === tmp4.fill) {
        if (cResult[3] === tmp4.row) {
          if (cResult[4] === tmp4.section) {
            if (cResult[5] === tmp4.track) {
              let tmp5;
              let tmp6;
              let tmp7;
              let tmp8;
              let tmp9;
              let tmp10;
              let tmp11;
              let tmp12;
              let tmp13;
              let tmp14;
              let tmp15;
              if (cResult[6] === viewerBadge) {
                tmp5 = cResult[7];
                tmp6 = cResult[8];
                tmp7 = cResult[9];
                tmp8 = cResult[10];
                tmp9 = cResult[11];
                tmp10 = cResult[12];
                tmp11 = cResult[13];
                tmp12 = cResult[14];
                tmp13 = cResult[15];
                tmp14 = cResult[16];
                tmp15 = cResult[17];
              }
              if (cResult[19] === tmp5) {
                if (cResult[20] === tmp9) {
                  if (cResult[21] === tmp10) {
                    let tmp31;
                    let tmp34;
                    if (cResult[22] === tmp11) {
                      tmp31 = cResult[23];
                    }
                    if (cResult[24] !== tmp8) {
                      let tmp36 = null != tmp8;
                      if (tmp36) {
                        const obj2 = { url: tmp8, height: 48 };
                        tmp36 = React3(BadgeArtImageDefault, obj2);
                      }
                      cResult[24] = tmp8;
                      cResult[25] = tmp36;
                      tmp34 = tmp36;
                    } else {
                      tmp34 = cResult[25];
                    }
                    if (cResult[26] === tmp6) {
                      if (cResult[27] === tmp12) {
                        if (cResult[28] === tmp13) {
                          if (cResult[29] === tmp31) {
                            let tmp39;
                            if (cResult[30] === tmp34) {
                              tmp39 = cResult[31];
                            }
                            if (cResult[32] === tmp7) {
                              if (cResult[33] === tmp39) {
                                if (cResult[34] === tmp14) {
                                  let tmp42;
                                  if (cResult[35] === tmp15) {
                                    tmp42 = cResult[36];
                                  }
                                  return tmp42;
                                }
                              }
                            }
                            const obj3 = { style: tmp14, children: items };
                            items = [tmp15, tmp39];
                            const tmp44 = hasOwnProperty(tmp7, obj3);
                            cResult[32] = tmp7;
                            cResult[33] = tmp39;
                            cResult[34] = tmp14;
                            cResult[35] = tmp15;
                            cResult[36] = tmp44;
                            tmp42 = tmp44;
                          }
                        }
                      }
                    }
                    const obj4 = { style: tmp12, children: items1 };
                    items1 = [tmp13, tmp31, tmp34];
                    const tmp41 = hasOwnProperty(tmp6, obj4);
                    cResult[26] = tmp6;
                    cResult[27] = tmp12;
                    cResult[28] = tmp13;
                    cResult[29] = tmp31;
                    cResult[30] = tmp34;
                    cResult[31] = tmp41;
                    tmp39 = tmp41;
                  }
                }
              }
              const obj5 = { style: tmp9, children: items2 };
              items2 = [tmp10, tmp11];
              const tmp33 = hasOwnProperty(tmp5, obj5);
              cResult[19] = tmp5;
              cResult[20] = tmp9;
              cResult[21] = tmp10;
              cResult[22] = tmp11;
              cResult[23] = tmp33;
              tmp31 = tmp33;
            }
          }
        }
      }
    }
  }
  const tmpResult = BadgeDetailsUtils;
  const badgeProgressDisplay = tmpResult.getBadgeProgressDisplay(badge, viewerBadge);
  ({ progress, threshold, currentArtUrl, nextArtUrl, helperText } = badgeProgressDisplay);
  let num = 0;
  if (null != threshold) {
    let num2;
    if (progress != null) {
      num2 = progress.current;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let num3;
    if (progress != null) {
      num3 = progress.floor;
    }
    if (num3 == null) {
      num3 = 0;
    }
    const diff = threshold - num3;
    let num5 = 1;
    if (diff > 0) {
      const _Math = Math;
      const _Math2 = Math;
      num5 = Math.min(Math.max((num2 - num3) / diff, 0), 1);
    }
    num = num5;
  }
  const section = tmp4.section;
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { variant: "text-sm/medium", color: "text-default", children: intl.string(intl3.t["2m/g2c"]) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    const tmp22 = React3(Text, obj6);
    cResult[18] = tmp22;
    tmp20 = tmp22;
  } else {
    tmp20 = cResult[18];
  }
  const row = tmp4.row;
  let tmp23 = null != currentArtUrl;
  if (tmp23) {
    const obj7 = { url: currentArtUrl, height: 48 };
    tmp23 = React3(BadgeArtImageDefault, obj7);
  }
  const content = tmp4.content;
  let tmp26 = null != helperText;
  if (tmp26) {
    const obj8 = { variant: "text-sm/medium", "aria-hidden": null != threshold, children: helperText };
    tmp26 = React3(Text_Text.Text, obj8);
  }
  let tmp29Result = null != threshold;
  if (tmp29Result) {
    const obj9 = { style: tmp4.track, accessible: true, accessibilityRole: "progressbar", accessibilityLabel: helperText, accessibilityValue: obj10, children: React3(View, obj11) };
    if (helperText == null) {
      const intl2 = intl3.intl;
      helperText = intl2.string(intl3.t.Uwhb1l);
    }
    const _Intl = Intl;
    const self = this;
    const self2 = this;
    obj10 = { text: numberFormat.format(num) };
    numberFormat = new Intl.NumberFormat(intl3.intl.currentLocale, { style: "percent" });
    obj11 = { style: items3 };
    items3 = [tmp4.fill, ];
    const obj12 = { width: `${100 * num}%` };
    items3[1] = obj12;
    tmp29Result = React3(View, obj9);
  }
  cResult[0] = badge;
  cResult[1] = tmp4.content;
  cResult[2] = tmp4.fill;
  cResult[3] = tmp4.row;
  cResult[4] = tmp4.section;
  cResult[5] = tmp4.track;
  cResult[6] = viewerBadge;
  cResult[7] = View;
  cResult[8] = View;
  cResult[9] = View;
  cResult[10] = nextArtUrl;
  cResult[11] = content;
  cResult[12] = tmp26;
  cResult[13] = tmp29Result;
  cResult[14] = row;
  cResult[15] = tmp23;
  cResult[16] = section;
  cResult[17] = tmp20;
  tmp11 = tmp29Result;
  tmp15 = tmp20;
  tmp14 = section;
  tmp13 = tmp23;
  tmp12 = row;
  tmp10 = tmp26;
  tmp9 = content;
  tmp8 = nextArtUrl;
  tmp7 = View;
  tmp6 = View;
  tmp5 = View;
}) : (function(arg0) {
  let badge;
  let currentArtUrl;
  let helperText;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let nextArtUrl;
  let numberFormat;
  let obj10;
  let obj9;
  let progress;
  let threshold;
  let viewerBadge;
  ({ badge, viewerBadge } = arg0);
  const tmp = closure_6();
  const obj = BadgeDetailsUtils;
  const badgeProgressDisplay = obj.getBadgeProgressDisplay(badge, viewerBadge);
  ({ progress, threshold, currentArtUrl, nextArtUrl, helperText } = badgeProgressDisplay);
  let num = 0;
  if (null != threshold) {
    let num2;
    if (progress != null) {
      num2 = progress.current;
    }
    if (num2 == null) {
      num2 = 0;
    }
    let num3;
    if (progress != null) {
      num3 = progress.floor;
    }
    if (num3 == null) {
      num3 = 0;
    }
    const diff = threshold - num3;
    let num5 = 1;
    if (diff > 0) {
      const _Math = Math;
      const _Math2 = Math;
      num5 = Math.min(Math.max((num2 - num3) / diff, 0), 1);
    }
    num = num5;
  }
  const obj2 = { style: tmp.section, children: items };
  const obj3 = { variant: "text-sm/medium", color: "text-default", children: intl.string(intl3.t["2m/g2c"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [React3(Text, obj3), ];
  let tmp9Result = null != currentArtUrl;
  const obj4 = { style: tmp.row, children: items1 };
  if (tmp9Result) {
    const obj5 = { url: currentArtUrl, height: 48 };
    tmp9Result = React3(BadgeArtImageDefault, obj5);
  }
  items1 = [tmp9Result, , ];
  let tmp9Result4 = null != helperText;
  const obj6 = { style: tmp.content, children: items2 };
  if (tmp9Result4) {
    const obj7 = { variant: "text-sm/medium", "aria-hidden": null != threshold, children: helperText };
    tmp9Result4 = React3(Text_Text.Text, obj7);
  }
  items2 = [tmp9Result4, ];
  let tmp9Result5 = null != threshold;
  if (tmp9Result5) {
    const obj8 = { style: tmp.track, accessible: true, accessibilityRole: "progressbar", accessibilityLabel: helperText, accessibilityValue: obj9, children: React3(View, obj10) };
    if (helperText == null) {
      const intl2 = intl3.intl;
      helperText = intl2.string(intl3.t.Uwhb1l);
    }
    const _Intl = Intl;
    const self = this;
    const self2 = this;
    obj9 = { text: numberFormat.format(num) };
    numberFormat = new Intl.NumberFormat(intl3.intl.currentLocale, { style: "percent" });
    obj10 = { style: items3 };
    items3 = [tmp.fill, ];
    const obj11 = { width: `${100 * num}%` };
    items3[1] = obj11;
    tmp9Result5 = React3(View, obj8);
  }
  items2[1] = tmp9Result5;
  items1[1] = hasOwnProperty(View, obj6);
  let tmp9Result6 = null != nextArtUrl;
  if (tmp9Result6) {
    const obj12 = { url: nextArtUrl, height: 48 };
    tmp9Result6 = React3(BadgeArtImageDefault, obj12);
  }
  items1[2] = tmp9Result6;
  items[1] = hasOwnProperty(View, obj4);
  return hasOwnProperty(View, obj2);
});
const result = size.fileFinishedImporting("modules/badges/native/BadgeProgressSection.tsx");

export default tmp5;