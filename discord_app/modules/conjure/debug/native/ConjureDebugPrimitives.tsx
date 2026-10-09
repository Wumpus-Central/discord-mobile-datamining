// === Module 17210: ConjureDebugPrimitives ===

// Module 17210 (ConjureDebugPrimitives)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import ConjureDebugFormat from "ConjureDebugFormat" /* 17207 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = { toolbar: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 }, toolbarStatus: { flex: 1 }, section: null, statRow: null, statRowHead: null, statLabel: null, statValue: null, meterTrack: null, meterFill: null, meterFillCritical: null };
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.statRow = { gap: nativeDefault.space.PX_4 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj2.statRowHead = { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
obj2.statLabel = { flexShrink: 1 };
obj2.statValue = { flexShrink: 1, textAlign: "right" };
let obj6 = { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
obj2.meterTrack = { height: 4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, overflow: "hidden" };
let obj7 = { height: 4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, overflow: "hidden" };
obj2.meterFill = { height: "100%", backgroundColor: nativeDefault.colors.TEXT_BRAND };
let obj8 = { height: "100%", backgroundColor: nativeDefault.colors.TEXT_BRAND };
obj2.meterFillCritical = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_7 = createStyles.createStyles(obj2);
fn(558);
let obj9 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function DebugSnapshotToolbar(arg0) {
  const cResult = c.c(13);
  ({ generatedAt, fetchState, onRefresh } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === fetchState) {
    if (cResult[1] === generatedAt) {
      if (cResult[3] === tmp4.toolbarStatus) {
        if (cResult[4] === tmp6) {
          let tmp14 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = util.intl;
          const stringResult = intl3.string(_modDef3827.oKEgiu);
          cResult[6] = stringResult;
          let tmp19 = stringResult;
        } else {
          tmp19 = cResult[6];
        }
        if (cResult[7] !== onRefresh) {
          const obj2 = { variant: "secondary", size: "sm", text: tmp19, onPress: onRefresh };
          const tmp24 = hasOwnProperty(components_Button_Button.Button, obj2);
          cResult[7] = onRefresh;
          cResult[8] = tmp24;
          let tmp22 = tmp24;
        } else {
          tmp22 = cResult[8];
        }
        if (cResult[9] === tmp4.toolbar) {
          if (cResult[10] === tmp14) {
            if (cResult[11] === tmp22) {
              let tmp25 = cResult[12];
            }
            return tmp25;
          }
        }
        const obj3 = { style: tmp5, children: null };
        const items = [tmp14, tmp22];
        obj3.children = items;
        const tmp28 = timestampProducer(React4, obj3);
        cResult[9] = tmp4.toolbar;
        cResult[10] = tmp14;
        cResult[11] = tmp22;
        cResult[12] = tmp28;
        tmp25 = tmp28;
      }
      const obj4 = { style: tmp4.toolbarStatus, children: cResult[2] };
      const tmp17 = hasOwnProperty(React4, obj4);
      cResult[3] = tmp4.toolbarStatus;
      cResult[4] = cResult[2];
      cResult[5] = tmp17;
      tmp14 = tmp17;
    }
  }
  if ("loading" === fetchState) {
    let tmp9 = hasOwnProperty(React3, { size: "small" });
  } else if ("failed" === fetchState) {
    const obj5 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl2 = util.intl;
    obj5.children = intl2.string(_modDef3827.ZVByPX);
    tmp9 = hasOwnProperty(Text_Text.Text, obj5);
  } else {
    tmp9 = null;
    if (null != generatedAt) {
      const obj6 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = util.intl;
      const obj7 = { time: ConjureDebugFormat.formatObservedAt(generatedAt) };
      obj6.children = intl.formatToPlainString(_modDef3827.INVO50, obj7);
      tmp9 = hasOwnProperty(Text_Text.Text, obj6);
      const tmpResult = ConjureDebugFormat;
    }
  }
  cResult[0] = fetchState;
  cResult[1] = generatedAt;
  cResult[2] = tmp9;
}) : (function DebugSnapshotToolbar(onRefresh) {
  ({ generatedAt, fetchState } = onRefresh);
  const tmp = closure_7();
  const obj = { style: tmp.toolbar, children: null };
  const obj2 = { style: tmp.toolbarStatus, children: null };
  if ("loading" === fetchState) {
    let tmp4Result = hasOwnProperty(React3, { size: "small" });
  } else if ("failed" === fetchState) {
    const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl2 = util.intl;
    obj3.children = intl2.string(_modDef3827.ZVByPX);
    tmp4Result = hasOwnProperty(Text_Text.Text, obj3);
  } else {
    tmp4Result = null;
    if (null != generatedAt) {
      const obj4 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = util.intl;
      const obj6 = { time: ConjureDebugFormat.formatObservedAt(generatedAt) };
      obj4.children = intl.formatToPlainString(_modDef3827.INVO50, obj6);
      tmp4Result = hasOwnProperty(Text_Text.Text, obj4);
    }
  }
  obj2.children = tmp4Result;
  const items = [hasOwnProperty(React4, obj2), ];
  const obj7 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl3 = util.intl;
  obj7.text = intl3.string(_modDef3827.oKEgiu);
  obj7.onPress = onRefresh.onRefresh;
  items[1] = hasOwnProperty(components_Button_Button.Button, obj7);
  obj.children = items;
  return timestampProducer(React4, obj);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function DebugSection(arg0) {
  const cResult = c.c(6);
  ({ title, children } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== title) {
    const obj2 = { variant: "text-xs/semibold", color: "text-muted", children: title };
    const tmp7 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[0] = title;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === children) {
    if (cResult[3] === tmp4.section) {
      if (cResult[4] === tmp5) {
        let tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  const obj3 = { style: tmp4.section, children: null };
  const items = [tmp5, children];
  obj3.children = items;
  const tmp9 = timestampProducer(React4, obj3);
  cResult[2] = children;
  cResult[3] = tmp4.section;
  cResult[4] = tmp5;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : (function DebugSection(arg0) {
  ({ title, children } = arg0);
  const obj = { style: closure_7().section, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: title }), children];
  obj.children = items;
  return timestampProducer(React4, obj);
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function DebugNote(children) {
  const cResult = c.c(2);
  children = children.children;
  if (cResult[0] !== children) {
    const obj2 = { variant: "text-sm/normal", color: "text-muted", children };
    const tmp6 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[0] = children;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function DebugNote(children) {
  return hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: children.children });
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function DebugStatRow(arg0) {
  const cResult = c.c(19);
  ({ label, value, hint, critical } = arg0);
  const tmp5 = closure_7();
  if (cResult[0] !== label) {
    const obj2 = { variant: "text-sm/normal", color: "text-muted", children: label };
    const tmp8 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[0] = label;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp5.statLabel) {
    if (cResult[3] === tmp6) {
      let tmp9 = cResult[4];
    }
    let str = "text-default";
    if (tmp4) {
      str = "text-feedback-critical";
    }
    if (cResult[5] === tmp5.statValue) {
      if (cResult[6] === str) {
        if (cResult[7] === value) {
          let tmp11 = cResult[8];
        }
        if (cResult[9] === tmp5.statRowHead) {
          if (cResult[10] === tmp9) {
            if (cResult[11] === tmp11) {
              let tmp14 = cResult[12];
            }
            if (cResult[13] !== hint) {
              let tmp19 = null;
              if (null != hint) {
                const obj3 = { variant: "text-xs/normal", color: "text-muted", children: hint };
                tmp19 = hasOwnProperty(Text_Text.Text, obj3);
              }
              cResult[13] = hint;
              cResult[14] = tmp19;
              let tmp18 = tmp19;
            } else {
              tmp18 = cResult[14];
            }
            if (cResult[15] === tmp5.statRow) {
              if (cResult[16] === tmp14) {
                if (cResult[17] === tmp18) {
                  let tmp21 = cResult[18];
                }
                return tmp21;
              }
            }
            const obj4 = { style: tmp5.statRow, children: null };
            const items = [tmp14, tmp18];
            obj4.children = items;
            const tmp24 = timestampProducer(React4, obj4);
            cResult[15] = tmp5.statRow;
            cResult[16] = tmp14;
            cResult[17] = tmp18;
            cResult[18] = tmp24;
            tmp21 = tmp24;
          }
        }
        const obj5 = { style: tmp5.statRowHead, children: null };
        const items1 = [tmp9, tmp11];
        obj5.children = items1;
        const tmp17 = timestampProducer(React4, obj5);
        cResult[9] = tmp5.statRowHead;
        cResult[10] = tmp9;
        cResult[11] = tmp11;
        cResult[12] = tmp17;
        tmp14 = tmp17;
      }
    }
    const obj6 = { variant: "text-sm/medium", color: str, style: tmp5.statValue, children: value };
    const tmp13 = hasOwnProperty(Text_Text.Text, obj6);
    cResult[5] = tmp5.statValue;
    cResult[6] = str;
    cResult[7] = value;
    cResult[8] = tmp13;
    tmp11 = tmp13;
  }
  const tmp10 = hasOwnProperty(React4, { style: tmp5.statLabel, children: tmp6 });
  cResult[2] = tmp5.statLabel;
  cResult[3] = tmp6;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  const obj7 = { style: tmp5.statLabel, children: tmp6 };
  tmp4 = undefined !== critical && critical;
}) : (function DebugStatRow(arg0) {
  ({ hint, critical } = arg0);
  ({ label, value } = arg0);
  if (critical === undefined) {
    critical = false;
  }
  const tmp = closure_7();
  const obj = { style: tmp.statRow, children: null };
  const obj2 = { style: tmp.statRowHead, children: null };
  const items = [hasOwnProperty(React4, { style: tmp.statLabel, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: label }) }), ];
  let str = "text-default";
  if (critical) {
    str = "text-feedback-critical";
  }
  items[1] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: str, style: tmp.statValue, children: value });
  obj2.children = items;
  const items1 = [timestampProducer(React4, obj2), ];
  let tmp4Result = null;
  if (null != hint) {
    const obj5 = { variant: "text-xs/normal", color: "text-muted", children: hint };
    tmp4Result = hasOwnProperty(Text_Text.Text, obj5);
  }
  items1[1] = tmp4Result;
  obj.children = items1;
  return timestampProducer(React4, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugPrimitives.tsx");

export const DebugSnapshotToolbar = tmp5;
export const DebugSection = tmp6;
export const DebugNote = tmp7;
export const DebugStatRow = tmp8;
export const DebugMeter = ReactCompilerGating.isReactCompilerEnabled() ? (function DebugMeter(arg0) {
  const cResult = c.c(35);
  ({ label, used, max, formatValue } = arg0);
  const tmp4 = closure_7();
  let num = 0;
  if (max > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(1, Math.max(0, used / max));
  }
  let meterFillCritical = num >= 0.9;
  if (cResult[0] === formatValue) {
    if (cResult[1] === used) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === formatValue) {
      if (cResult[4] === max) {
        let tmp8 = cResult[5];
      }
      const _HermesInternal = HermesInternal;
      const combined = "" + tmp6 + " / " + tmp8;
      if (cResult[6] !== combined) {
        const obj2 = { text: combined };
        cResult[6] = combined;
        cResult[7] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[7];
      }
      if (cResult[8] !== label) {
        const obj3 = { variant: "text-sm/normal", color: "text-muted", children: label };
        const tmp15 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[8] = label;
        cResult[9] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[9];
      }
      if (cResult[10] === tmp4.statLabel) {
        if (cResult[11] === tmp13) {
          let tmp16 = cResult[12];
        }
        let str3 = "text-default";
        if (meterFillCritical) {
          str3 = "text-feedback-critical";
        }
        if (cResult[13] === str3) {
          if (cResult[14] === combined) {
            let tmp20 = cResult[15];
          }
          if (cResult[16] === tmp4.statRowHead) {
            if (cResult[17] === tmp16) {
              if (cResult[18] === tmp20) {
                let tmp23 = cResult[19];
              }
              if (meterFillCritical) {
                meterFillCritical = tmp4.meterFillCritical;
              }
              const text = `${100 * num}%`;
              if (cResult[20] !== `${100 * num}%`) {
                const obj4 = { width: text };
                cResult[20] = text;
                cResult[21] = obj4;
                let tmp28 = obj4;
              } else {
                tmp28 = cResult[21];
              }
              if (cResult[22] === tmp4.meterFill) {
                if (cResult[23] === tmp28) {
                  if (cResult[24] === meterFillCritical) {
                    let tmp29 = cResult[25];
                  }
                  if (cResult[26] === tmp4.meterTrack) {
                    if (cResult[27] === tmp29) {
                      let tmp33 = cResult[28];
                    }
                    if (cResult[29] === label) {
                      if (cResult[30] === tmp4.statRow) {
                        if (cResult[31] === tmp33) {
                          if (cResult[32] === tmp12) {
                            if (cResult[33] === tmp23) {
                              let tmp37 = cResult[34];
                            }
                            return tmp37;
                          }
                        }
                      }
                    }
                    const obj5 = { style: tmp4.statRow, accessibilityRole: "progressbar", accessibilityLabel: label, accessibilityValue: tmp12, children: null };
                    const items = [tmp23, tmp33];
                    obj5.children = items;
                    const tmp40 = timestampProducer(React4, obj5);
                    cResult[29] = label;
                    cResult[30] = tmp4.statRow;
                    cResult[31] = tmp33;
                    cResult[32] = tmp12;
                    cResult[33] = tmp23;
                    cResult[34] = tmp40;
                    tmp37 = tmp40;
                  }
                  const obj6 = { style: tmp4.meterTrack, children: tmp29 };
                  const tmp36 = hasOwnProperty(React4, obj6);
                  cResult[26] = tmp4.meterTrack;
                  cResult[27] = tmp29;
                  cResult[28] = tmp36;
                  tmp33 = tmp36;
                }
              }
              const obj7 = { style: null };
              const items1 = [tmp4.meterFill, meterFillCritical, tmp28];
              obj7.style = items1;
              const tmp32 = hasOwnProperty(React4, obj7);
              cResult[22] = tmp4.meterFill;
              cResult[23] = tmp28;
              cResult[24] = meterFillCritical;
              cResult[25] = tmp32;
              tmp29 = tmp32;
            }
          }
          const obj8 = { style: tmp4.statRowHead, children: null };
          const items2 = [tmp16, tmp20];
          obj8.children = items2;
          const tmp26 = timestampProducer(React4, obj8);
          cResult[16] = tmp4.statRowHead;
          cResult[17] = tmp16;
          cResult[18] = tmp20;
          cResult[19] = tmp26;
          tmp23 = tmp26;
        }
        const obj9 = { variant: "text-sm/medium", color: str3, children: combined };
        const tmp22 = hasOwnProperty(Text_Text.Text, obj9);
        cResult[13] = str3;
        cResult[14] = combined;
        cResult[15] = tmp22;
        tmp20 = tmp22;
      }
      const obj10 = { style: tmp4.statLabel, children: tmp13 };
      const tmp19 = hasOwnProperty(React4, obj10);
      cResult[10] = tmp4.statLabel;
      cResult[11] = tmp13;
      cResult[12] = tmp19;
      tmp16 = tmp19;
    }
    const formatValueResult = formatValue(max);
    cResult[3] = formatValue;
    cResult[4] = max;
    cResult[5] = formatValueResult;
    tmp8 = formatValueResult;
  }
  const formatValueResult1 = formatValue(used);
  cResult[0] = formatValue;
  cResult[1] = used;
  cResult[2] = formatValueResult1;
  tmp6 = formatValueResult1;
}) : (function DebugMeter(arg0) {
  ({ label, used, max, formatValue } = arg0);
  const tmp = closure_7();
  let num = 0;
  if (max > 0) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(1, Math.max(0, used / max));
  }
  let meterFillCritical = num >= 0.9;
  const combined = "" + formatValue(used) + " / " + formatValue(max);
  const obj = { style: tmp.statRow, accessibilityRole: "progressbar", accessibilityLabel: label, accessibilityValue: { text: combined }, children: null };
  const obj2 = { style: tmp.statRowHead, children: null };
  const formatValueResult = formatValue(used);
  const items = [hasOwnProperty(React4, { style: tmp.statLabel, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: label }) }), ];
  let str = "text-default";
  if (meterFillCritical) {
    str = "text-feedback-critical";
  }
  items[1] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: str, children: combined });
  obj2.children = items;
  const items1 = [timestampProducer(React4, obj2), ];
  const obj4 = { style: tmp.meterTrack, children: null };
  const items2 = [tmp.meterFill, , ];
  if (meterFillCritical) {
    meterFillCritical = tmp.meterFillCritical;
  }
  items2[1] = meterFillCritical;
  items2[2] = { width: `${100 * num}%` };
  obj4.children = hasOwnProperty(React4, { style: items2 });
  items1[1] = hasOwnProperty(React4, obj4);
  obj.children = items1;
  return timestampProducer(React4, obj);
});