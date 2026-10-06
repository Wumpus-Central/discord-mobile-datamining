// === Module 16670: ConjureNativeStatusLine ===

// Module 16670 (ConjureNativeStatusLine)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import MagicWandIcon from "MagicWandIcon" /* 12515 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let line;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let items = [nativeDefault.colors.TEXT_BRAND, nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, nativeDefault.colors.TEXT_FEEDBACK_WARNING, nativeDefault.colors.TEXT_FEEDBACK_INFO];
let length = items.length;
let createStyles = createStyles_mod;
let obj = { row: obj2, glyphGutter: { width: 40, marginRight: 12, alignItems: "center" }, label: { flex: 1 }, trailing: obj3, chevron: obj4 };
obj2 = { flexDirection: "row", alignItems: "flex-start", paddingVertical: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 0, marginLeft: nativeDefault.space.PX_8 };
obj4 = { flexShrink: 0, marginLeft: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((line) => {
  let ChevronSmallRightIcon;
  let TEXT_BRAND;
  let crestColor;
  let epoch;
  let expanded;
  let failed;
  let glyph;
  let inGutter;
  let live;
  let onToggle;
  let presentation;
  let settled;
  let tint;
  let trailing;
  let obj = line(glyph[6]);
  const cResult = obj.c(28);
  line = line.line;
  ({ live, settled, failed, presentation, tint, inGutter, trailing } = line);
  glyph = line.glyph;
  ({ crestColor, epoch, expanded, onToggle } = line);
  let str = "headline";
  const tmp4 = undefined !== settled && settled;
  if (undefined !== presentation) {
    str = presentation;
  }
  let closure_3 = tmp6;
  let num = 0;
  if (undefined !== epoch) {
    num = epoch;
  }
  const tmp8 = closure_8();
  const row = tmp8;
  if (undefined !== failed && failed) {
    TEXT_BRAND = trailing(tmp2[3]).colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_BRAND = tint;
    if (tint == null) {
      TEXT_BRAND = trailing(tmp2[3]).colors.TEXT_BRAND;
    }
  }
  let str2 = "text-feedback-critical";
  if (!(undefined !== failed && failed)) {
    let str3 = "text-muted";
    if (!tmp4) {
      let str4 = "text-default";
      if ("detail" === str) {
        str4 = "text-subtle";
      }
      str3 = str4;
    }
    str2 = str3;
  }
  const useToken = line(glyph[7]).useToken;
  line(glyph[7]);
  if ("detail" === str) {
    tint = trailing(tmp2[3]).colors.TEXT_DEFAULT;
  } else if (tint == null) {
    tint = trailing(tmp2[3]).colors.TEXT_BRAND;
  }
  if ("detail" === str) {
    crestColor = useToken(tint);
  }
  if (undefined !== expanded && expanded) {
    ChevronSmallRightIcon = tmp(tmp2[8]).ChevronSmallDownIcon;
  } else {
    ChevronSmallRightIcon = tmp(tmp2[9]).ChevronSmallRightIcon;
  }
  closure_8 = tmp18;
  if (cResult[0] === ChevronSmallRightIcon) {
    if (cResult[1] === null != onToggle) {
      if (cResult[2] === glyph) {
        if (cResult[3] === TEXT_BRAND) {
          if (cResult[4] === (undefined !== inGutter && inGutter)) {
            if (cResult[5] === line) {
              if (cResult[6] === tmp8.chevron) {
                if (cResult[7] === tmp8.glyphGutter) {
                  if (cResult[8] === tmp8.label) {
                    if (cResult[9] === tmp8.row) {
                      if (cResult[10] === tmp8.trailing) {
                        if (cResult[11] === str2) {
                          let tmp19;
                          if (cResult[12] === trailing) {
                            tmp19 = cResult[13];
                          }
                          if (cResult[14] === crestColor) {
                            if (cResult[15] === num) {
                              if (cResult[16] === live) {
                                let tmp20;
                                if (cResult[17] === tmp19) {
                                  tmp20 = cResult[18];
                                }
                                let tmp24 = tmp20;
                                if (null != onToggle) {
                                  let tmp25;
                                  let tmp26;
                                  if (cResult[19] !== (undefined !== expanded && expanded)) {
                                    let obj2 = { expanded: undefined !== expanded && expanded };
                                    cResult[19] = undefined !== expanded && expanded;
                                    cResult[20] = obj2;
                                    tmp25 = obj2;
                                  } else {
                                    tmp25 = cResult[20];
                                  }
                                  if (cResult[21] !== line) {
                                    const intl = tmp(tmp2[13]).intl;
                                    let obj3 = { activity: line };
                                    const formatToPlainStringResult = intl.formatToPlainString(trailing(glyph[14]).yByAPh, obj3);
                                    cResult[21] = line;
                                    cResult[22] = formatToPlainStringResult;
                                    tmp26 = formatToPlainStringResult;
                                  } else {
                                    tmp26 = cResult[22];
                                  }
                                  if (cResult[23] === tmp20) {
                                    if (cResult[24] === onToggle) {
                                      if (cResult[25] === tmp26) {
                                        let tmp29;
                                        if (cResult[26] === tmp25) {
                                          tmp29 = cResult[27];
                                        }
                                        tmp24 = tmp29;
                                      }
                                    }
                                  }
                                  let obj4 = { accessibilityRole: "button", accessibilityState: tmp25, accessibilityLabel: tmp26, hitSlop: 8, onPress: onToggle, children: tmp20 };
                                  const tmp31 = TEXT_BRAND(line(glyph[15]).PressableOpacity, obj4);
                                  cResult[23] = tmp20;
                                  cResult[24] = onToggle;
                                  cResult[25] = tmp26;
                                  cResult[26] = tmp25;
                                  cResult[27] = tmp31;
                                  tmp29 = tmp31;
                                }
                                return tmp24;
                              }
                            }
                          }
                          let obj5 = { renderFace: tmp19, live, tint: crestColor, epoch: num };
                          const tmp23 = TEXT_BRAND(trailing(glyph[12]), obj5);
                          cResult[14] = crestColor;
                          cResult[15] = num;
                          cResult[16] = live;
                          cResult[17] = tmp19;
                          cResult[18] = tmp23;
                          tmp20 = tmp23;
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
  const fn = function n() {
    let Text;
    let obj5;
    let obj8;
    let tmp6Result;
    let tmp6Result2 = null;
    const obj = { style: row.row, children: items };
    if (closure_3) {
      const obj2 = { style: row.glyphGutter, children: tmp6Result };
      tmp6Result = glyph;
      if (undefined === glyph) {
        const obj3 = { size: "refresh_sm", color: TEXT_BRAND };
        tmp6Result = hasOwnProperty(MagicWandIcon.MagicWandIcon, obj3);
      }
      tmp6Result2 = hasOwnProperty(View, obj2);
    }
    items = [tmp6Result2, , , ];
    let str = "text-sm/normal";
    const obj4 = { style: row.label, children: hasOwnProperty(Text, obj5) };
    Text = Text_Text.Text;
    if (closure_3) {
      str = "text-md/normal";
    }
    obj5 = { variant: str, color: str2, children: line };
    items[1] = hasOwnProperty(View, obj4);
    let tmp11Result = null;
    if (null != trailing) {
      const obj6 = { style: row.trailing, children: tmp13 };
      tmp11Result = hasOwnProperty(View, obj6);
    }
    items[2] = tmp11Result;
    let tmp11Result2 = null;
    if (closure_8) {
      const obj7 = { style: row.chevron, children: hasOwnProperty(ChevronSmallRightIcon, obj8) };
      obj8 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      tmp11Result2 = hasOwnProperty(View, obj7);
    }
    items[3] = tmp11Result2;
    return metroRequire(View, obj);
  };
  cResult[0] = ChevronSmallRightIcon;
  cResult[1] = null != onToggle;
  cResult[2] = glyph;
  cResult[3] = TEXT_BRAND;
  cResult[4] = undefined !== inGutter && inGutter;
  cResult[5] = line;
  cResult[6] = tmp8.chevron;
  cResult[7] = tmp8.glyphGutter;
  cResult[8] = tmp8.label;
  cResult[9] = tmp8.row;
  cResult[10] = tmp8.trailing;
  cResult[11] = str2;
  cResult[12] = trailing;
  cResult[13] = fn;
  tmp19 = fn;
}) : ((line) => {
  let crestColor;
  let epoch;
  let inGutter;
  let intl;
  let obj2;
  let obj3;
  let tint;
  line = line.line;
  let flag = line.settled;
  const live = line.live;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = line.failed;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let str = line.presentation;
  if (str === undefined) {
    str = "headline";
  }
  ({ tint, inGutter } = line);
  if (inGutter === undefined) {
    inGutter = false;
  }
  const trailing = line.trailing;
  const glyph = line.glyph;
  ({ crestColor, epoch } = line);
  if (epoch === undefined) {
    epoch = 0;
  }
  let flag3 = line.expanded;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const onToggle = line.onToggle;
  let TEXT_BRAND;
  let str2;
  let ChevronSmallRightIcon;
  closure_8 = undefined;
  const tmp = closure_8();
  const row = tmp;
  if (flag2) {
    TEXT_BRAND = inGutter(trailing[3]).colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_BRAND = tint;
    if (tint == null) {
      TEXT_BRAND = inGutter(trailing[3]).colors.TEXT_BRAND;
    }
  }
  str2 = "text-feedback-critical";
  if (!flag2) {
    let str3 = "text-muted";
    if (!flag) {
      let str4 = "text-default";
      if ("detail" === str) {
        str4 = "text-subtle";
      }
      str3 = str4;
    }
    str2 = str3;
  }
  const useToken = line(trailing[7]).useToken;
  line(trailing[7]);
  if ("detail" === str) {
    const tmp13 = inGutter;
    tint = inGutter(tmp9[3]).colors.TEXT_DEFAULT;
  } else if (tint == null) {
    tint = inGutter(tmp9[3]).colors.TEXT_BRAND;
  }
  if ("detail" === str) {
    crestColor = useToken(tint);
  }
  if (flag3) {
    ChevronSmallRightIcon = tmp8(tmp9[8]).ChevronSmallDownIcon;
  } else {
    ChevronSmallRightIcon = tmp8(tmp9[9]).ChevronSmallRightIcon;
  }
  closure_8 = tmp15;
  items = [ChevronSmallRightIcon, null != onToggle, glyph, TEXT_BRAND, inGutter, line, tmp, str2, trailing];
  const callback = glyph.useCallback(() => {
    let Text;
    let obj5;
    let obj8;
    let tmp6Result;
    let tmp6Result2 = null;
    const obj = { style: row.row, children: items };
    if (inGutter) {
      const obj2 = { style: row.glyphGutter, children: tmp6Result };
      tmp6Result = glyph;
      if (undefined === glyph) {
        const obj3 = { size: "refresh_sm", color: TEXT_BRAND };
        tmp6Result = hasOwnProperty(MagicWandIcon.MagicWandIcon, obj3);
      }
      tmp6Result2 = hasOwnProperty(View, obj2);
    }
    items = [tmp6Result2, , , ];
    let str = "text-sm/normal";
    const obj4 = { style: row.label, children: hasOwnProperty(Text, obj5) };
    Text = Text_Text.Text;
    if (inGutter) {
      str = "text-md/normal";
    }
    obj5 = { variant: str, color: str2, children: line };
    items[1] = hasOwnProperty(View, obj4);
    let tmp11Result = null;
    if (null != trailing) {
      const obj6 = { style: row.trailing, children: tmp13 };
      tmp11Result = hasOwnProperty(View, obj6);
    }
    items[2] = tmp11Result;
    let tmp11Result2 = null;
    if (closure_8) {
      const obj7 = { style: row.chevron, children: hasOwnProperty(ChevronSmallRightIcon, obj8) };
      obj8 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      tmp11Result2 = hasOwnProperty(View, obj7);
    }
    items[3] = tmp11Result2;
    return metroRequire(View, obj);
  }, items);
  const tmp19 = TEXT_BRAND(inGutter(trailing[12]), { renderFace: callback, live, tint: crestColor, epoch });
  let tmp17Result = tmp19;
  const tmp17 = TEXT_BRAND;
  const tmp18 = inGutter;
  if (null != onToggle) {
    let obj = { accessibilityRole: "button", accessibilityState: obj2, accessibilityLabel: intl.formatToPlainString(tmp18(trailing[14]).yByAPh, obj3), hitSlop: 8, onPress: onToggle, children: tmp19 };
    obj2 = { expanded: flag3 };
    const PressableOpacity = tmp8(tmp9[15]).PressableOpacity;
    intl = tmp8(tmp9[13]).intl;
    obj3 = { activity: line };
    tmp17Result = tmp17(PressableOpacity, obj);
  }
  return tmp17Result;
});
function laneTintIndexFor(key) {
  let length;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < key.length) {
    do {
      num3 = (31 * num3 + key.charCodeAt(num2)) % 2147483647;
      num2 = num2 + 1;
      num = num3;
      length = key.length;
    } while (num2 < length);
  }
  return num % items.length;
}
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureNativeStatusLine.tsx");

export default tmp4;
export const LANE_TINT_COUNT = length;
export { laneTintIndexFor };
export const laneTintFor = function laneTintFor(str) {
  let length;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < str.length) {
    do {
      num3 = (31 * num3 + str.charCodeAt(num2)) % 2147483647;
      num2 = num2 + 1;
      num = num3;
      length = str.length;
    } while (num2 < length);
  }
  return items[num % items.length];
};
export const MESSAGE_AVATAR_SIZE = 40;
export const MESSAGE_EDGE_INSET = 12;
export const MESSAGE_AVATAR_GAP = 12;
export const MESSAGE_CONTENT_INSET = 64;