// === Module 16933: ConjureNativeStatusLine ===

// Module 16933 (ConjureNativeStatusLine)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5086 */;
import MagicWandIcon from "MagicWandIcon" /* 12611 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let items = [nativeDefault.colors.TEXT_BRAND, nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, nativeDefault.colors.TEXT_FEEDBACK_WARNING, nativeDefault.colors.TEXT_FEEDBACK_INFO];
const createStyles = fn(5090);
let obj2 = { row: { flexDirection: "row", alignItems: "flex-start", paddingVertical: nativeDefault.space.PX_4 }, glyphGutter: { width: 40, marginRight: 12, alignItems: "center" }, label: { flex: 1 }, trailing: null, chevron: null };
let obj3 = { flexDirection: "row", alignItems: "flex-start", paddingVertical: nativeDefault.space.PX_4 };
obj2.trailing = { flexShrink: 0, marginLeft: nativeDefault.space.PX_8 };
let obj4 = { flexShrink: 0, marginLeft: nativeDefault.space.PX_8 };
obj2.chevron = { flexShrink: 0, marginLeft: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { flexShrink: 0, marginLeft: nativeDefault.space.PX_4 };
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureNativeStatusLine.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeStatusLine(line) {
  let PressableOpacity = line;
  let tmp = glyph;
  const cResult = line(glyph[6]).c(28);
  line = line.line;
  ({ live, settled, failed, presentation, tint, inGutter, trailing } = line);
  glyph = line.glyph;
  ({ crestColor, epoch, expanded, onToggle } = line);
  let str = "headline";
  if (undefined !== presentation) {
    str = presentation;
  }
  closure_3 = tmp5;
  let num = 0;
  if (undefined !== epoch) {
    num = epoch;
  }
  const tmp7 = closure_8();
  const row = tmp7;
  if (undefined !== failed && failed) {
    let TEXT_BRAND = trailing(tmp[3]).colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_BRAND = tint;
    if (tint == null) {
      TEXT_BRAND = trailing(tmp[3]).colors.TEXT_BRAND;
    }
  }
  let str2 = "text-feedback-critical";
  if (!(undefined !== failed && failed)) {
    let str3 = "text-muted";
    if (!tmp3) {
      let str4 = "text-default";
      if (tmp11) {
        str4 = "text-subtle";
      }
      str3 = str4;
    }
    str2 = str3;
  }
  let obj = line(glyph[6]);
  tmp3 = undefined !== settled && settled;
  if ("detail" === str) {
    tint = trailing(tmp[3]).colors.TEXT_DEFAULT;
  } else if (tint == null) {
    tint = trailing(tmp[3]).colors.TEXT_BRAND;
  }
  if ("detail" === str) {
    crestColor = PressableOpacityResult.useToken(tint);
  }
  if (undefined !== expanded && expanded) {
    let ChevronSmallRightIcon = PressableOpacity(tmp[8]).ChevronSmallDownIcon;
  } else {
    ChevronSmallRightIcon = PressableOpacity(tmp[9]).ChevronSmallRightIcon;
  }
  closure_8 = tmp16;
  if (cResult[0] === ChevronSmallRightIcon) {
    if (cResult[1] === tmp16) {
      if (cResult[2] === glyph) {
        if (cResult[3] === TEXT_BRAND) {
          if (cResult[4] === tmp5) {
            if (cResult[5] === line) {
              if (cResult[6] === tmp7.chevron) {
                if (cResult[7] === tmp7.glyphGutter) {
                  if (cResult[8] === tmp7.label) {
                    if (cResult[9] === tmp7.row) {
                      if (cResult[10] === tmp7.trailing) {
                        if (cResult[11] === str2) {
                          if (cResult[12] === trailing) {
                            let tmp17 = cResult[13];
                          }
                          if (cResult[14] === crestColor) {
                            if (cResult[15] === num) {
                              if (cResult[16] === live) {
                                if (cResult[17] === tmp17) {
                                  let tmp18 = cResult[18];
                                }
                                if (null == onToggle) {
                                  return tmp18;
                                } else {
                                  if (cResult[19] !== tmp6) {
                                    let obj2 = { expanded: tmp6 };
                                    cResult[19] = tmp6;
                                    cResult[20] = obj2;
                                    let tmp23 = obj2;
                                  } else {
                                    tmp23 = cResult[20];
                                  }
                                  if (cResult[21] !== line) {
                                    const intl = PressableOpacity(tmp[13]).intl;
                                    let obj3 = { activity: line };
                                    const formatToPlainStringResult = intl.formatToPlainString(trailing(tmp[14]).yByAPh, obj3);
                                    cResult[21] = line;
                                    cResult[22] = formatToPlainStringResult;
                                    let tmp24 = formatToPlainStringResult;
                                  } else {
                                    tmp24 = cResult[22];
                                  }
                                  if (cResult[23] === tmp18) {
                                    if (cResult[24] === onToggle) {
                                      if (cResult[25] === tmp24) {
                                      }
                                    }
                                  }
                                  PressableOpacity = PressableOpacity(tmp[15]).PressableOpacity;
                                  let obj4 = { accessibilityRole: "button", accessibilityState: tmp23, accessibilityLabel: tmp24, hitSlop: 8, onPress: onToggle, children: tmp18 };
                                  tmp = TEXT_BRAND(PressableOpacity, obj4);
                                  cResult[23] = tmp18;
                                  cResult[24] = onToggle;
                                  cResult[25] = tmp24;
                                  cResult[26] = tmp23;
                                  cResult[27] = tmp;
                                }
                              }
                            }
                          }
                          const obj5 = { renderFace: tmp17, live, tint: crestColor, epoch: num };
                          const tmp21 = TEXT_BRAND(trailing(tmp[12]), obj5);
                          cResult[14] = crestColor;
                          cResult[15] = num;
                          cResult[16] = live;
                          cResult[17] = tmp17;
                          cResult[18] = tmp21;
                          tmp18 = tmp21;
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
    const obj = { style: row.row, children: null };
    let tmp6Result2 = null;
    if (closure_3) {
      const obj2 = { style: row.glyphGutter, children: null };
      let tmp6Result = glyph;
      if (undefined === glyph) {
        const obj3 = { size: "refresh_sm", color: TEXT_BRAND };
        tmp6Result = hasOwnProperty(MagicWandIcon.MagicWandIcon, obj3);
      }
      obj2.children = tmp6Result;
      tmp6Result2 = hasOwnProperty(View, obj2);
    }
    items = [tmp6Result2, , , ];
    const obj4 = { style: row.label, children: null };
    let str = "text-sm/normal";
    if (closure_3) {
      str = "text-md/normal";
    }
    obj4.children = hasOwnProperty(Text_Text.Text, { variant: str, color: str2, children: line });
    items[1] = hasOwnProperty(View, obj4);
    let tmp11Result = null;
    if (null != trailing) {
      const obj6 = { style: row.trailing, children: tmp13 };
      tmp11Result = hasOwnProperty(View, obj6);
    }
    items[2] = tmp11Result;
    let tmp11Result2 = null;
    if (closure_8) {
      const obj7 = { style: row.chevron, children: null };
      const obj8 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      obj7.children = hasOwnProperty(ChevronSmallRightIcon, obj8);
      tmp11Result2 = hasOwnProperty(View, obj7);
    }
    items[3] = tmp11Result2;
    obj.children = items;
    return timestampProducer(View, obj);
  };
  cResult[0] = ChevronSmallRightIcon;
  cResult[1] = null != onToggle;
  cResult[2] = glyph;
  cResult[3] = TEXT_BRAND;
  cResult[4] = undefined !== inGutter && inGutter;
  cResult[5] = line;
  cResult[6] = tmp7.chevron;
  cResult[7] = tmp7.glyphGutter;
  cResult[8] = tmp7.label;
  cResult[9] = tmp7.row;
  cResult[10] = tmp7.trailing;
  cResult[11] = str2;
  cResult[12] = trailing;
  cResult[13] = fn;
  tmp17 = fn;
}) : (function ConjureNativeStatusLine(live) {
  const line = live.line;
  let flag = live.settled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = live.failed;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let str = live.presentation;
  if (str === undefined) {
    str = "headline";
  }
  ({ tint, inGutter } = live);
  if (inGutter === undefined) {
    inGutter = false;
  }
  const trailing = live.trailing;
  const glyph = live.glyph;
  ({ crestColor, epoch } = live);
  if (epoch === undefined) {
    epoch = 0;
  }
  let flag3 = live.expanded;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const onToggle = live.onToggle;
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
      if (tmp7) {
        str4 = "text-subtle";
      }
      str3 = str4;
    }
    str2 = str3;
  }
  if ("detail" === str) {
    tint = inGutter(tmp9[3]).colors.TEXT_DEFAULT;
  } else if (tint == null) {
    tint = inGutter(tmp9[3]).colors.TEXT_BRAND;
  }
  if ("detail" === str) {
    crestColor = obj.useToken(tint);
  }
  if (flag3) {
    ChevronSmallRightIcon = tmp8(tmp9[8]).ChevronSmallDownIcon;
  } else {
    ChevronSmallRightIcon = tmp8(tmp9[9]).ChevronSmallRightIcon;
  }
  closure_8 = tmp14;
  items = [ChevronSmallRightIcon, null != onToggle, glyph, TEXT_BRAND, inGutter, line, tmp, str2, trailing];
  const callback = glyph.useCallback(() => {
    const obj = { style: row.row, children: null };
    let tmp6Result2 = null;
    if (inGutter) {
      const obj2 = { style: row.glyphGutter, children: null };
      let tmp6Result = glyph;
      if (undefined === glyph) {
        const obj3 = { size: "refresh_sm", color: TEXT_BRAND };
        tmp6Result = hasOwnProperty(MagicWandIcon.MagicWandIcon, obj3);
      }
      obj2.children = tmp6Result;
      tmp6Result2 = hasOwnProperty(View, obj2);
    }
    items = [tmp6Result2, , , ];
    const obj4 = { style: row.label, children: null };
    let str = "text-sm/normal";
    if (inGutter) {
      str = "text-md/normal";
    }
    obj4.children = hasOwnProperty(Text_Text.Text, { variant: str, color: str2, children: line });
    items[1] = hasOwnProperty(View, obj4);
    let tmp11Result = null;
    if (null != trailing) {
      const obj6 = { style: row.trailing, children: tmp13 };
      tmp11Result = hasOwnProperty(View, obj6);
    }
    items[2] = tmp11Result;
    let tmp11Result2 = null;
    if (closure_8) {
      const obj7 = { style: row.chevron, children: null };
      const obj8 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      obj7.children = hasOwnProperty(ChevronSmallRightIcon, obj8);
      tmp11Result2 = hasOwnProperty(View, obj7);
    }
    items[3] = tmp11Result2;
    obj.children = items;
    return timestampProducer(View, obj);
  }, items);
  const tmp18 = TEXT_BRAND(inGutter(trailing[12]), { renderFace: callback, live: live.live, tint: crestColor, epoch });
  let tmp16Result = tmp18;
  if (null != onToggle) {
    let obj2 = { accessibilityRole: "button", accessibilityState: null, accessibilityLabel: null, hitSlop: 8, onPress: null, children: null };
    let obj3 = { expanded: flag3 };
    obj2.accessibilityState = obj3;
    const intl = tmp8(tmp9[13]).intl;
    let obj4 = { activity: line };
    obj2.accessibilityLabel = intl.formatToPlainString(inGutter(tmp9[14]).yByAPh, obj4);
    obj2.onPress = onToggle;
    obj2.children = tmp18;
    tmp16Result = TEXT_BRAND(tmp8(tmp9[15]).PressableOpacity, obj2);
  }
  return tmp16Result;
});
export const LANE_TINT_COUNT = items.length;
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