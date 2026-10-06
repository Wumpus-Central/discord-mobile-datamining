// discord_app/modules/conjure/debug/native/ConjureDebugPrimitives.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import _modDef3753 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ConjureDebugFormat from "../ConjureDebugFormat.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
({ ActivityIndicator: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  toolbar: obj2,
  toolbarStatus: { flex: 1 },
  section: obj3,
  statRow: obj4,
  statRowHead: obj5,
  statLabel: { flexShrink: 1 },
  statValue: { flexShrink: 1, textAlign: "right" },
  meterTrack: obj6,
  meterFill: obj7,
  meterFillCritical: obj8,
};
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { gap: nativeDefault.space.PX_4 };
obj5 = {
  flexDirection: "row",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_12,
};
obj6 = {
  height: 4,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  overflow: "hidden",
};
obj7 = { height: "100%", backgroundColor: nativeDefault.colors.TEXT_BRAND };
obj8 = { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let INVO50;
      let fetchState;
      let formatToPlainString;
      let generatedAt;
      let intl2;
      let items;
      let obj7;
      let onRefresh;
      let tmp9;
      let tmpResult;
      const obj = react2;
      const cResult = obj.c(13);
      ({ generatedAt, fetchState, onRefresh } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] === fetchState) {
        let tmp6;
        if (cResult[1] === generatedAt) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === tmp4.toolbarStatus) {
          let tmp14;
          let tmp19;
          let tmp22;
          if (cResult[4] === tmp6) {
            tmp14 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = intl4.intl;
            const stringResult = intl3.string(_modDef3753.oKEgiu);
            cResult[6] = stringResult;
            tmp19 = stringResult;
          } else {
            tmp19 = cResult[6];
          }
          if (cResult[7] !== onRefresh) {
            const obj2 = { variant: "secondary", size: "sm", text: tmp19, onPress: onRefresh };
            const tmp24 = hasOwnProperty(components_Button_Button.Button, obj2);
            cResult[7] = onRefresh;
            cResult[8] = tmp24;
            tmp22 = tmp24;
          } else {
            tmp22 = cResult[8];
          }
          if (cResult[9] === tmp4.toolbar) {
            if (cResult[10] === tmp14) {
              let tmp25;
              if (cResult[11] === tmp22) {
                tmp25 = cResult[12];
              }
              return tmp25;
            }
          }
          const obj3 = { style: tmp5, children: items };
          items = [tmp14, tmp22];
          const tmp28 = metroRequire(React3, obj3);
          cResult[9] = tmp4.toolbar;
          cResult[10] = tmp14;
          cResult[11] = tmp22;
          cResult[12] = tmp28;
          tmp25 = tmp28;
        }
        const obj4 = { style: tmp4.toolbarStatus, children: tmp6 };
        const tmp17 = hasOwnProperty(React3, obj4);
        cResult[3] = tmp4.toolbarStatus;
        cResult[4] = tmp6;
        cResult[5] = tmp17;
        tmp14 = tmp17;
      }
      if ("loading" === fetchState) {
        tmp9 = hasOwnProperty(_false, { size: "small" });
      } else if ("failed" === fetchState) {
        const obj5 = {
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: intl2.string(_modDef3753.ZVByPX),
        };
        const Text2 = Text_Text.Text;
        intl2 = intl4.intl;
        tmp9 = hasOwnProperty(Text2, obj5);
      } else {
        tmp9 = null;
        if (null != generatedAt) {
          const obj6 = { variant: "text-xs/normal", color: "text-muted", children: formatToPlainString(INVO50, obj7) };
          const Text = Text_Text.Text;
          const intl = intl4.intl;
          formatToPlainString = intl.formatToPlainString;
          obj7 = { time: tmpResult.formatObservedAt(generatedAt) };
          INVO50 = _modDef3753.INVO50;
          tmpResult = ConjureDebugFormat;
          tmp9 = hasOwnProperty(Text, obj6);
        }
      }
      cResult[0] = fetchState;
      cResult[1] = generatedAt;
      cResult[2] = tmp9;
      tmp6 = tmp9;
    }
  : (onRefresh) => {
      let INVO50;
      let fetchState;
      let formatToPlainString;
      let generatedAt;
      let intl2;
      let intl3;
      let items;
      let obj5;
      let obj6;
      let tmp4Result;
      ({ generatedAt, fetchState } = onRefresh);
      onRefresh = onRefresh.onRefresh;
      const tmp = closure_7();
      const obj = { style: tmp.toolbar, children: items };
      const obj2 = { style: tmp.toolbarStatus, children: tmp4Result };
      if ("loading" === fetchState) {
        tmp4Result = hasOwnProperty(_false, { size: "small" });
      } else if ("failed" === fetchState) {
        const obj3 = {
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: intl2.string(_modDef3753.ZVByPX),
        };
        const Text2 = Text_Text.Text;
        intl2 = intl4.intl;
        tmp4Result = hasOwnProperty(Text2, obj3);
      } else {
        tmp4Result = null;
        if (null != generatedAt) {
          const obj4 = { variant: "text-xs/normal", color: "text-muted", children: formatToPlainString(INVO50, obj6) };
          const Text = Text_Text.Text;
          const intl = intl4.intl;
          formatToPlainString = intl.formatToPlainString;
          obj6 = { time: obj5.formatObservedAt(generatedAt) };
          INVO50 = _modDef3753.INVO50;
          obj5 = ConjureDebugFormat;
          tmp4Result = hasOwnProperty(Text, obj4);
        }
      }
      items = [hasOwnProperty(React3, obj2)];
      const obj7 = { variant: "secondary", size: "sm", text: intl3.string(_modDef3753.oKEgiu), onPress: onRefresh };
      const Button = components_Button_Button.Button;
      intl3 = intl4.intl;
      items[1] = hasOwnProperty(Button, obj7);
      return metroRequire(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let items;
      let title;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(6);
      ({ title, children } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] !== title) {
        const obj2 = { variant: "text-xs/semibold", color: "text-muted", children: title };
        const tmp7 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[0] = title;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === children) {
        if (cResult[3] === tmp4.section) {
          let tmp8;
          if (cResult[4] === tmp5) {
            tmp8 = cResult[5];
          }
          return tmp8;
        }
      }
      const obj3 = { style: tmp4.section, children: items };
      items = [tmp5, children];
      const tmp9 = metroRequire(React3, obj3);
      cResult[2] = children;
      cResult[3] = tmp4.section;
      cResult[4] = tmp5;
      cResult[5] = tmp9;
      tmp8 = tmp9;
    }
  : (arg0) => {
      let children;
      let items;
      let title;
      ({ title, children } = arg0);
      const obj = { style: closure_7().section, children: items };
      items = [
        hasOwnProperty(Text_Text.Text, { variant: "text-xs/semibold", color: "text-muted", children: title }),
        children,
      ];
      return metroRequire(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      children = children.children;
      if (cResult[0] !== children) {
        const obj2 = { variant: "text-sm/normal", color: "text-muted", children };
        const tmp6 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[0] = children;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (children) =>
      hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: children.children });
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let critical;
      let hint;
      let items;
      let items1;
      let label;
      let tmp6;
      let value;
      const obj = react2;
      const cResult = obj.c(19);
      ({ label, value, hint, critical } = arg0);
      const tmp4 = undefined !== critical && critical;
      const tmp5 = closure_7();
      if (cResult[0] !== label) {
        const obj2 = { variant: "text-sm/normal", color: "text-muted", children: label };
        const tmp8 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[0] = label;
        cResult[1] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === tmp5.statLabel) {
        let tmp9;
        if (cResult[3] === tmp6) {
          tmp9 = cResult[4];
        }
        let str = "text-default";
        if (tmp4) {
          str = "text-feedback-critical";
        }
        if (cResult[5] === tmp5.statValue) {
          if (cResult[6] === str) {
            let tmp11;
            if (cResult[7] === value) {
              tmp11 = cResult[8];
            }
            if (cResult[9] === tmp5.statRowHead) {
              if (cResult[10] === tmp9) {
                let tmp14;
                let tmp18;
                if (cResult[11] === tmp11) {
                  tmp14 = cResult[12];
                }
                if (cResult[13] !== hint) {
                  let tmp19 = null;
                  if (null != hint) {
                    const obj3 = { variant: "text-xs/normal", color: "text-muted", children: hint };
                    tmp19 = hasOwnProperty(Text_Text.Text, obj3);
                  }
                  cResult[13] = hint;
                  cResult[14] = tmp19;
                  tmp18 = tmp19;
                } else {
                  tmp18 = cResult[14];
                }
                if (cResult[15] === tmp5.statRow) {
                  if (cResult[16] === tmp14) {
                    let tmp21;
                    if (cResult[17] === tmp18) {
                      tmp21 = cResult[18];
                    }
                    return tmp21;
                  }
                }
                const obj4 = { style: tmp5.statRow, children: items };
                items = [tmp14, tmp18];
                const tmp24 = metroRequire(React3, obj4);
                cResult[15] = tmp5.statRow;
                cResult[16] = tmp14;
                cResult[17] = tmp18;
                cResult[18] = tmp24;
                tmp21 = tmp24;
              }
            }
            const obj5 = { style: tmp5.statRowHead, children: items1 };
            items1 = [tmp9, tmp11];
            const tmp17 = metroRequire(React3, obj5);
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
      const obj7 = { style: tmp5.statLabel, children: tmp6 };
      const tmp10 = hasOwnProperty(React3, obj7);
      cResult[2] = tmp5.statLabel;
      cResult[3] = tmp6;
      cResult[4] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
      let critical;
      let hint;
      let items;
      let items1;
      let label;
      let value;
      ({ hint, critical } = arg0);
      ({ label, value } = arg0);
      if (critical === undefined) {
        critical = false;
      }
      const tmp = closure_7();
      const obj2 = { style: tmp.statRowHead, children: items };
      items = [,];
      const obj = { style: tmp.statRow, children: items1 };
      const obj3 = {
        style: tmp.statLabel,
        children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: label }),
      };
      items[0] = hasOwnProperty(React3, obj3);
      let str = "text-default";
      const Text = Text_Text.Text;
      if (critical) {
        str = "text-feedback-critical";
      }
      const obj4 = { variant: "text-sm/medium", color: str, style: tmp.statValue, children: value };
      items[1] = hasOwnProperty(Text, obj4);
      items1 = [metroRequire(React3, obj2)];
      let tmp4Result = null;
      if (null != hint) {
        const obj5 = { variant: "text-xs/normal", color: "text-muted", children: hint };
        tmp4Result = hasOwnProperty(Text_Text.Text, obj5);
      }
      items1[1] = tmp4Result;
      return metroRequire(React3, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let formatValue;
      let items;
      let items1;
      let items2;
      let label;
      let max;
      let used;
      const obj = react2;
      const cResult = obj.c(35);
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
        let tmp6;
        if (cResult[1] === used) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === formatValue) {
          let tmp8;
          let tmp12;
          let tmp13;
          if (cResult[4] === max) {
            tmp8 = cResult[5];
          }
          const _HermesInternal = HermesInternal;
          const combined = "" + tmp6 + " / " + tmp8;
          if (cResult[6] !== combined) {
            const obj2 = { text: combined };
            cResult[6] = combined;
            cResult[7] = obj2;
            tmp12 = obj2;
          } else {
            tmp12 = cResult[7];
          }
          if (cResult[8] !== label) {
            const obj3 = { variant: "text-sm/normal", color: "text-muted", children: label };
            const tmp15 = hasOwnProperty(Text_Text.Text, obj3);
            cResult[8] = label;
            cResult[9] = tmp15;
            tmp13 = tmp15;
          } else {
            tmp13 = cResult[9];
          }
          if (cResult[10] === tmp4.statLabel) {
            let tmp16;
            if (cResult[11] === tmp13) {
              tmp16 = cResult[12];
            }
            let str3 = "text-default";
            if (meterFillCritical) {
              str3 = "text-feedback-critical";
            }
            if (cResult[13] === str3) {
              let tmp20;
              if (cResult[14] === combined) {
                tmp20 = cResult[15];
              }
              if (cResult[16] === tmp4.statRowHead) {
                if (cResult[17] === tmp16) {
                  let tmp23;
                  let tmp28;
                  if (cResult[18] === tmp20) {
                    tmp23 = cResult[19];
                  }
                  if (meterFillCritical) {
                    meterFillCritical = tmp4.meterFillCritical;
                  }
                  const text = `${100 * num}%`;
                  if (cResult[20] !== `${100 * num}%`) {
                    const obj4 = { width: text };
                    cResult[20] = text;
                    cResult[21] = obj4;
                    tmp28 = obj4;
                  } else {
                    tmp28 = cResult[21];
                  }
                  if (cResult[22] === tmp4.meterFill) {
                    if (cResult[23] === tmp28) {
                      let tmp29;
                      if (cResult[24] === meterFillCritical) {
                        tmp29 = cResult[25];
                      }
                      if (cResult[26] === tmp4.meterTrack) {
                        let tmp33;
                        if (cResult[27] === tmp29) {
                          tmp33 = cResult[28];
                        }
                        if (cResult[29] === label) {
                          if (cResult[30] === tmp4.statRow) {
                            if (cResult[31] === tmp33) {
                              if (cResult[32] === tmp12) {
                                let tmp37;
                                if (cResult[33] === tmp23) {
                                  tmp37 = cResult[34];
                                }
                                return tmp37;
                              }
                            }
                          }
                        }
                        const obj5 = {
                          style: tmp4.statRow,
                          accessibilityRole: "progressbar",
                          accessibilityLabel: label,
                          accessibilityValue: tmp12,
                          children: items,
                        };
                        items = [tmp23, tmp33];
                        const tmp40 = metroRequire(React3, obj5);
                        cResult[29] = label;
                        cResult[30] = tmp4.statRow;
                        cResult[31] = tmp33;
                        cResult[32] = tmp12;
                        cResult[33] = tmp23;
                        cResult[34] = tmp40;
                        tmp37 = tmp40;
                      }
                      const obj6 = { style: tmp4.meterTrack, children: tmp29 };
                      const tmp36 = hasOwnProperty(React3, obj6);
                      cResult[26] = tmp4.meterTrack;
                      cResult[27] = tmp29;
                      cResult[28] = tmp36;
                      tmp33 = tmp36;
                    }
                  }
                  const obj7 = { style: items1 };
                  items1 = [tmp4.meterFill, meterFillCritical, tmp28];
                  const tmp32 = hasOwnProperty(React3, obj7);
                  cResult[22] = tmp4.meterFill;
                  cResult[23] = tmp28;
                  cResult[24] = meterFillCritical;
                  cResult[25] = tmp32;
                  tmp29 = tmp32;
                }
              }
              const obj8 = { style: tmp4.statRowHead, children: items2 };
              items2 = [tmp16, tmp20];
              const tmp26 = metroRequire(React3, obj8);
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
          const tmp19 = hasOwnProperty(React3, obj10);
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
    }
  : (arg0) => {
      let formatValue;
      let items;
      let items1;
      let items2;
      let label;
      let max;
      let used;
      ({ label, used, max, formatValue } = arg0);
      const tmp = closure_7();
      let num = 0;
      if (max > 0) {
        const _Math = Math;
        const _Math2 = Math;
        num = Math.min(1, Math.max(0, used / max));
      }
      let meterFillCritical = num >= 0.9;
      const formatValueResult = formatValue(used);
      const combined = "" + formatValueResult + " / " + formatValue(max);
      const obj2 = { style: tmp.statRowHead, children: items };
      items = [,];
      const obj = {
        style: tmp.statRow,
        accessibilityRole: "progressbar",
        accessibilityLabel: label,
        accessibilityValue: { text: combined },
        children: items1,
      };
      const obj3 = {
        style: tmp.statLabel,
        children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: label }),
      };
      items[0] = hasOwnProperty(React3, obj3);
      let str = "text-default";
      const Text = Text_Text.Text;
      if (meterFillCritical) {
        str = "text-feedback-critical";
      }
      items[1] = hasOwnProperty(Text, { variant: "text-sm/medium", color: str, children: combined });
      items1 = [metroRequire(React3, obj2)];
      const obj4 = { style: tmp.meterTrack, children: hasOwnProperty(React3, { style: items2 }) };
      items2 = [tmp.meterFill, ,];
      if (meterFillCritical) {
        meterFillCritical = tmp.meterFillCritical;
      }
      items2[1] = meterFillCritical;
      const obj5 = { width: `${100 * num}%` };
      items2[2] = obj5;
      items1[1] = hasOwnProperty(React3, obj4);
      return metroRequire(React3, obj);
    };
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugPrimitives.tsx");

export const DebugSnapshotToolbar = tmp6;
export const DebugSection = tmp7;
export const DebugNote = tmp8;
export const DebugStatRow = tmp9;
export const DebugMeter = tmp10;
