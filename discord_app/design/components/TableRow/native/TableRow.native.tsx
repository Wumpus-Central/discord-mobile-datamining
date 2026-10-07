// discord_app/design/components/TableRow/native/TableRow.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useToken from "../../../tokens/native/useToken.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import useFontScale from "../../../../modules/screen/native/useFontScale.tsx";
import TableRowDivider from "TableRowDivider.native.tsx";
import TableRowGroupContext from "TableRowGroupContext.native.tsx";
import Card from "../../Card/native/Card.native.tsx";
import TableRowArrow from "TableRowArrow.native.tsx";
import TableRowTrailingText from "TableRowTrailingText.native.tsx";
import DragIcon from "../../Icon/native/redesign/generated/DragIcon.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = [
  "label",
  "subLabel",
  "icon",
  "trailing",
  "arrow",
  "onPress",
  "disabled",
  "start",
  "end",
  "labelLineClamp",
  "subLabelLineClamp",
  "variant",
  "draggable",
  "dragHandlePressableProps",
  "height",
];
get_ActivityIndicator = fn(17);
({ Pressable: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const style = { padding: 0 };
const createStyles = fn(4896);
let closure_12 = createStyles.createStyles((arg0, arg1, arg2) => {
  const obj = {
    padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
    minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    opacity: null,
    borderRadius: null,
  };
  let num = 1;
  if (arg0) {
    num = 0.5;
  }
  const obj2 = {
    row: null,
    iconContainer: null,
    trailing: null,
    content: null,
    labels: null,
    trailingText: null,
    dragHandle: null,
  };
  obj.opacity = num;
  obj.borderRadius = nativeDefault.radii.md;
  obj2.row = obj;
  obj2.iconContainer = {
    minWidth: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE,
    marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
    alignItems: "center",
    justifyContent: "center",
  };
  obj2.trailing = { marginStart: 18 };
  let str = "row";
  if (arg2) {
    str = "column";
  }
  const obj4 = { flexShrink: 1, flexGrow: 1, flexDirection: str, alignItems: null, justifyContent: "space-between" };
  let str2 = "center";
  if (arg2) {
    str2 = "stretch";
  }
  obj4.alignItems = str2;
  obj2.content = obj4;
  let str3 = "100%";
  if (arg1) {
    str3 = "100%";
  }
  const obj5 = { width: str3, flexGrow: null, flexShrink: null, maxWidth: null };
  let num2;
  if (arg1) {
    if (!arg2) {
      num2 = 1;
    }
  }
  obj5.flexGrow = num2;
  let num3 = 1;
  if (arg1) {
    num3 = 1;
  }
  obj5.flexShrink = num3;
  let str4;
  if (arg1) {
    if (!arg2) {
      str4 = "70%";
    }
  }
  obj5.maxWidth = str4;
  obj2.labels = obj5;
  let num4 = 18;
  if (arg2) {
    num4 = 0;
  }
  obj2.trailingText = { flexShrink: 1, marginStart: num4 };
  obj2.dragHandle = { marginEnd: 8 };
  return obj2;
});
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(42);
      if (cResult[0] !== arg0) {
        ({
          label,
          subLabel,
          icon,
          trailing,
          arrow,
          onPress,
          disabled,
          start,
          end,
          labelLineClamp,
          subLabelLineClamp,
          variant,
          draggable,
          dragHandlePressableProps,
          height,
        } = arg0);
        const tmp22 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = arrow;
        cResult[2] = tmp22;
        cResult[3] = dragHandlePressableProps;
        cResult[4] = draggable;
        cResult[5] = end;
        cResult[6] = height;
        cResult[7] = icon;
        cResult[8] = label;
        cResult[9] = labelLineClamp;
        cResult[10] = onPress;
        cResult[11] = start;
        cResult[12] = subLabel;
        cResult[13] = subLabelLineClamp;
        cResult[14] = disabled;
        cResult[15] = variant;
        cResult[16] = trailing;
        let tmp19 = trailing;
        let tmp18 = variant;
        let tmp17 = disabled;
        let tmp16 = subLabelLineClamp;
        let tmp15 = subLabel;
        let tmp14 = start;
        let tmp13 = onPress;
        let tmp12 = labelLineClamp;
        let tmp11 = label;
        let tmp10 = icon;
        let tmp9 = height;
        let tmp8 = end;
        let tmp7 = draggable;
        let tmp6 = dragHandlePressableProps;
        let tmp5 = tmp22;
        let tmp4 = arrow;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        tmp9 = cResult[6];
        tmp10 = cResult[7];
        tmp11 = cResult[8];
        tmp12 = cResult[9];
        tmp13 = cResult[10];
        tmp14 = cResult[11];
        tmp15 = cResult[12];
        tmp16 = cResult[13];
        tmp17 = cResult[14];
        tmp18 = cResult[15];
        tmp19 = cResult[16];
      }
      let str = "default";
      if (undefined !== tmp18) {
        str = tmp18;
      }
      const context = noop.useContext(TableRowGroupContext.TableRowGroupContext);
      let tmp25 = !context;
      if (!context) {
        tmp25 = true === tmp14;
      }
      let tmp26 = !context;
      if (!context) {
        tmp26 = true === tmp8;
      }
      let tmp27 = !context;
      if (!context) {
        tmp27 = !tmp26;
      }
      const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
      if (cResult[17] === tmp4) {
        if (cResult[18] === tmp23) {
          if (cResult[19] === tmp6) {
            if (cResult[20] === tmp7) {
              if (cResult[21] === tmp9) {
                if (cResult[22] === tmp10) {
                  if (cResult[23] === tmp11) {
                    if (cResult[24] === tmp12) {
                      if (cResult[25] === tmp15) {
                        if (cResult[26] === tmp16) {
                          if (cResult[27] === tmp19) {
                            if (cResult[28] === str) {
                              let tmp30 = cResult[29];
                            }
                            if (cResult[30] === token) {
                              if (cResult[31] === tmp5) {
                                if (cResult[32] === tmp23) {
                                  if (cResult[33] === tmp26) {
                                    if (cResult[34] === tmp25) {
                                      if (cResult[35] === tmp13) {
                                        if (cResult[36] === tmp30) {
                                          let tmp32 = cResult[37];
                                        }
                                        if (cResult[38] === tmp32) {
                                          if (cResult[39] === tmp28) {
                                            if (cResult[40] === tmp27) {
                                              let tmp39 = cResult[41];
                                            }
                                            return tmp39;
                                          }
                                        }
                                        let tmp40 = tmp32;
                                        if (tmp27) {
                                          const obj2 = { children: null };
                                          const items = [tmp32];
                                          const obj3 = { adjustSpacingForIcon: tmp28 };
                                          items[1] = closure_1_8(TableRowDivider.TableRowDivider, obj3);
                                          obj2.children = items;
                                          tmp40 = v65535(options, obj2);
                                        }
                                        cResult[38] = tmp32;
                                        cResult[39] = tmp28;
                                        cResult[40] = tmp27;
                                        cResult[41] = tmp40;
                                        tmp39 = tmp40;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj4 = {
                              radius: token,
                              shadow: "none",
                              border: "none",
                              variant: "muted",
                              start: tmp25,
                              end: tmp26,
                              onPress: tmp13,
                              disabled: tmp23,
                              style,
                            };
                            const merged = Object.assign(tmp5);
                            obj4.children = tmp30;
                            const tmp38 = closure_1_8(Card.InternalCard, obj4);
                            cResult[30] = token;
                            cResult[31] = tmp5;
                            cResult[32] = tmp23;
                            cResult[33] = tmp26;
                            cResult[34] = tmp25;
                            cResult[35] = tmp13;
                            cResult[36] = tmp30;
                            cResult[37] = tmp38;
                            tmp32 = tmp38;
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
      const tmp31 = closure_1_8(closure_13, {
        height: tmp9,
        label: tmp11,
        subLabel: tmp15,
        icon: tmp10,
        trailing: tmp19,
        arrow: tmp4,
        disabled: undefined !== tmp17 && tmp17,
        labelLineClamp: tmp12,
        subLabelLineClamp: tmp16,
        variant: str,
        draggable: tmp7,
        dragHandlePressableProps: tmp6,
      });
      cResult[17] = tmp4;
      cResult[18] = undefined !== tmp17 && tmp17;
      cResult[19] = tmp6;
      cResult[20] = tmp7;
      cResult[21] = tmp9;
      cResult[22] = tmp10;
      cResult[23] = tmp11;
      cResult[24] = tmp12;
      cResult[25] = tmp15;
      cResult[26] = tmp16;
      cResult[27] = tmp19;
      cResult[28] = str;
      cResult[29] = tmp31;
      tmp30 = tmp31;
      const tmpResult = useToken;
    }
  : (arg0) => {
      ({ icon, disabled } = arg0);
      ({ label, subLabel, trailing, arrow, onPress } = arg0);
      if (disabled === undefined) {
        disabled = false;
      }
      ({ variant, start, end, labelLineClamp, subLabelLineClamp } = arg0);
      if (variant === undefined) {
        variant = "default";
      }
      ({ draggable, dragHandlePressableProps, height } = arg0);
      const merged = Object.assign(
        arg0,
        Object.assign({
          label: 0,
          subLabel: 0,
          icon: 0,
          trailing: 0,
          arrow: 0,
          onPress: 0,
          disabled: 0,
          start: 0,
          end: 0,
          labelLineClamp: 0,
          subLabelLineClamp: 0,
          variant: 0,
          draggable: 0,
          dragHandlePressableProps: 0,
          height: 0,
        }),
      );
      const context = noop.useContext(TableRowGroupContext.TableRowGroupContext);
      let tmp5 = !context;
      if (!context) {
        tmp5 = true === end;
      }
      const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
      const obj = {
        radius: token,
        shadow: "none",
        border: "none",
        variant: "muted",
        start: null,
        end: null,
        onPress: null,
        disabled: null,
        style: null,
      };
      let tmp8 = !context;
      if (!context) {
        tmp8 = true === start;
      }
      obj.start = tmp8;
      obj.end = tmp5;
      obj.onPress = onPress;
      obj.disabled = disabled;
      obj.style = style;
      const merged1 = Object.assign(merged);
      obj.children = closure_1_8(closure_13, {
        height,
        label,
        subLabel,
        icon,
        trailing,
        arrow,
        disabled,
        labelLineClamp,
        subLabelLineClamp,
        variant,
        draggable,
        dragHandlePressableProps,
      });
      const tmp7Result = closure_1_8(Card.InternalCard, obj);
      let tmp11 = tmp7Result;
      if (!context) {
        tmp11 = tmp7Result;
        if (!tmp5) {
          const obj2 = { children: null };
          const items = [tmp7Result];
          const obj3 = { adjustSpacingForIcon: null != icon };
          items[1] = closure_1_8(TableRowDivider.TableRowDivider, obj3);
          obj2.children = items;
          tmp11 = v65535(options, obj2);
        }
      }
      return tmp11;
    };
tmp4.Icon = fn(6006).TableRowIcon;
tmp4.Arrow = fn(6007).TableRowArrow;
tmp4.TrailingText = fn(6009).TableRowTrailingText;
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (disabled) => {
      const cResult = c.c(53);
      ({
        label,
        labelLineClamp,
        subLabel,
        subLabelLineClamp,
        icon,
        trailing,
        arrow,
        variant,
        draggable,
        dragHandlePressableProps,
        borderRadius,
        height,
      } = disabled);
      let str = "default";
      if (undefined !== variant) {
        str = variant;
      }
      const fontScale = useFontScale.useFontScale();
      if (cResult[0] !== fontScale) {
        if (tmpResult4.isAndroid()) {
          let tmp8 = fontScale > 1.2;
        } else {
          tmp8 = fontScale > 1.5;
        }
        cResult[0] = fontScale;
        cResult[1] = tmp8;
        tmpResult4 = PlatformUtils;
      } else {
        const tmp11 = closure_12(true === disabled.disabled, null != trailing, cResult[1]);
        const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
        const tmpResult5 = useToken;
        const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
        if (cResult[2] === borderRadius) {
          if (cResult[3] === height) {
            let tmp15 = cResult[4];
          }
          if (cResult[5] === tmp11.row) {
            if (cResult[6] === tmp15) {
              let tmp16 = cResult[7];
            }
            if (cResult[8] === dragHandlePressableProps) {
              if (cResult[9] === tmp4) {
                if (cResult[10] === tmp11.dragHandle) {
                  let tmp17 = cResult[11];
                }
                if (cResult[12] === tmp5) {
                  if (cResult[13] === icon) {
                    if (cResult[14] === tmp11.iconContainer) {
                      let tmp24 = cResult[15];
                    }
                    if (cResult[16] === label) {
                      if (cResult[17] === token1) {
                        if (cResult[18] === labelLineClamp) {
                          if (cResult[19] === token) {
                            if (cResult[20] === str) {
                              let tmp29 = cResult[21];
                            }
                            if (cResult[22] === subLabel) {
                              if (cResult[23] === subLabelLineClamp) {
                                if (cResult[24] === str) {
                                  let tmp32 = cResult[25];
                                }
                                if (cResult[26] === tmp11.labels) {
                                  if (cResult[27] === tmp29) {
                                    if (cResult[28] === tmp32) {
                                      if (cResult[29] === tmp28) {
                                        if (cResult[30] === str2) {
                                          let tmp36 = cResult[31];
                                        }
                                        if (cResult[32] === tmp11.trailing) {
                                          if (cResult[33] === tmp11.trailingText) {
                                            if (cResult[34] === trailing) {
                                              let tmp40 = cResult[35];
                                            }
                                            if (cResult[36] === tmp11.content) {
                                              if (cResult[37] === tmp36) {
                                                if (cResult[38] === tmp40) {
                                                  let tmp44 = cResult[39];
                                                }
                                                if (cResult[40] === tmp11.trailing) {
                                                  if (cResult[41] === trailing) {
                                                    if (cResult[42] === trailing) {
                                                      let tmp48 = cResult[43];
                                                    }
                                                    if (cResult[44] !== arrow) {
                                                      let tmp53 = arrow;
                                                      if (arrow) {
                                                        tmp53 = closure_1_8(TableRowArrow.TableRowArrow, {});
                                                      }
                                                      cResult[44] = arrow;
                                                      cResult[45] = tmp53;
                                                      let tmp52 = tmp53;
                                                    } else {
                                                      tmp52 = cResult[45];
                                                    }
                                                    if (cResult[46] === tmp44) {
                                                      if (cResult[47] === tmp48) {
                                                        if (cResult[48] === tmp52) {
                                                          if (cResult[49] === tmp16) {
                                                            if (cResult[50] === tmp17) {
                                                              if (cResult[51] === tmp24) {
                                                                let tmp55 = cResult[52];
                                                              }
                                                              return tmp55;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    const obj3 = { style: tmp16, children: null };
                                                    const items = [tmp17, tmp24, tmp44, tmp48, tmp52];
                                                    obj3.children = items;
                                                    const tmp58 = v65535(React5, obj3);
                                                    cResult[46] = tmp44;
                                                    cResult[47] = tmp48;
                                                    cResult[48] = tmp52;
                                                    cResult[49] = tmp16;
                                                    cResult[50] = tmp17;
                                                    cResult[51] = tmp24;
                                                    cResult[52] = tmp58;
                                                    tmp55 = tmp58;
                                                  }
                                                }
                                                let tmp49 = null != trailing && null == trailing;
                                                if (tmp49) {
                                                  const obj4 = { style: tmp11.trailing, children: trailing };
                                                  tmp49 = closure_1_8(React5, obj4);
                                                }
                                                cResult[40] = tmp11.trailing;
                                                cResult[41] = trailing;
                                                cResult[42] = trailing;
                                                cResult[43] = tmp49;
                                                tmp48 = tmp49;
                                              }
                                            }
                                            const obj5 = { style: tmp11.content, children: null };
                                            const items1 = [tmp36, tmp40];
                                            obj5.children = items1;
                                            const tmp47 = v65535(React5, obj5);
                                            cResult[36] = tmp11.content;
                                            cResult[37] = tmp36;
                                            cResult[38] = tmp40;
                                            cResult[39] = tmp47;
                                            tmp44 = tmp47;
                                          }
                                        }
                                        let tmp41 = null != trailing;
                                        if (tmp41) {
                                          const obj6 = { style: null, children: null };
                                          const items2 = [,];
                                          ({ trailing: arr3[0], trailingText: arr3[1] } = tmp11);
                                          obj6.style = items2;
                                          obj6.children = trailing;
                                          tmp41 = closure_1_8(React5, obj6);
                                        }
                                        cResult[32] = tmp11.trailing;
                                        cResult[33] = tmp11.trailingText;
                                        cResult[34] = trailing;
                                        cResult[35] = tmp41;
                                        tmp40 = tmp41;
                                      }
                                    }
                                  }
                                }
                                const obj7 = {
                                  style: tmp11.labels,
                                  accessible: tmp28,
                                  accessibilityRole: str2,
                                  children: null,
                                };
                                const items3 = [tmp29, tmp32];
                                obj7.children = items3;
                                const tmp39 = v65535(React5, obj7);
                                cResult[26] = tmp11.labels;
                                cResult[27] = tmp29;
                                cResult[28] = tmp32;
                                cResult[29] = tmp28;
                                cResult[30] = str2;
                                cResult[31] = tmp39;
                                tmp36 = tmp39;
                              }
                            }
                            let tmp33 = null != subLabel;
                            if (tmp33) {
                              let tmp35Result = subLabel;
                              if (!noop.isValidElement(subLabel)) {
                                let str5 = "text-subtle";
                                if ("danger" === str) {
                                  str5 = "text-feedback-critical";
                                }
                                const obj8 = {
                                  variant: "text-xs/medium",
                                  color: str5,
                                  lineClamp: subLabelLineClamp,
                                  includeFontPadding: true,
                                  children: subLabel,
                                };
                                tmp35Result = closure_1_8(Text_Text.Text, obj8);
                              }
                              tmp33 = tmp35Result;
                            }
                            cResult[22] = subLabel;
                            cResult[23] = subLabelLineClamp;
                            cResult[24] = str;
                            cResult[25] = tmp33;
                            tmp32 = tmp33;
                          }
                        }
                      }
                    }
                    let tmp31Result = label;
                    if (!noop.isValidElement(label)) {
                      const obj9 = {
                        variant: token,
                        color: null,
                        lineClamp: null,
                        includeFontPadding: true,
                        children: null,
                      };
                      let str3 = "text-feedback-critical";
                      if ("danger" !== str) {
                        str3 = token1;
                      }
                      obj9.color = str3;
                      obj9.lineClamp = labelLineClamp;
                      obj9.children = label;
                      tmp31Result = closure_1_8(Text_Text.Text, obj9);
                    }
                    cResult[16] = label;
                    cResult[17] = token1;
                    cResult[18] = labelLineClamp;
                    cResult[19] = token;
                    cResult[20] = str;
                    cResult[21] = tmp31Result;
                    tmp29 = tmp31Result;
                  }
                }
                let tmp25 = tmp5;
                if (tmp5) {
                  const obj10 = { style: tmp11.iconContainer, children: icon };
                  tmp25 = closure_1_8(React5, obj10);
                }
                cResult[12] = tmp5;
                cResult[13] = icon;
                cResult[14] = tmp11.iconContainer;
                cResult[15] = tmp25;
                tmp24 = tmp25;
              }
            }
            let tmp18 = tmp4;
            if (tmp4) {
              const obj11 = {};
              const merged = Object.assign(dragHandlePressableProps);
              const obj12 = { size: "xs", style: tmp11.dragHandle };
              obj11.children = closure_1_8(DragIcon.DragIcon, obj12);
              tmp18 = closure_1_8(timestampProducer, obj11);
            }
            cResult[8] = dragHandlePressableProps;
            cResult[9] = tmp4;
            cResult[10] = tmp11.dragHandle;
            cResult[11] = tmp18;
            tmp17 = tmp18;
          }
          const items4 = [tmp11.row, tmp15];
          cResult[5] = tmp11.row;
          cResult[6] = tmp15;
          cResult[7] = items4;
          tmp16 = items4;
        }
        const obj13 = { borderRadius, height };
        cResult[2] = borderRadius;
        cResult[3] = height;
        cResult[4] = obj13;
        tmp15 = obj13;
        const tmpResult6 = useToken;
      }
      const tmpResult = useFontScale;
    }
  : (draggable) => {
      ({ label, subLabel, icon, trailing, arrow, variant } = draggable);
      ({ labelLineClamp, subLabelLineClamp, disabled } = draggable);
      if (variant === undefined) {
        variant = "default";
      }
      let flag = draggable.draggable;
      if (flag === undefined) {
        flag = false;
      }
      const dragHandlePressableProps = draggable.dragHandlePressableProps;
      ({ borderRadius, height } = draggable);
      let tmp;
      if (noop.isValidElement(trailing)) {
        if (trailing.type === TableRowTrailingText.TableRowTrailingText) {
          tmp = trailing;
        }
      }
      const fontScale = useFontScale.useFontScale();
      if (obj3.isAndroid()) {
        let tmp7 = fontScale > 1.2;
      } else {
        tmp7 = fontScale > 1.5;
      }
      const tmp8 = closure_12(true === disabled, null != tmp, tmp7);
      obj3 = PlatformUtils;
      const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
      const tmp4Result = useToken;
      const obj4 = { style: null, children: null };
      const items = [tmp8.row, { borderRadius, height }];
      obj4.style = items;
      let tmp13 = flag;
      const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
      if (flag) {
        const obj5 = {};
        const merged = Object.assign(dragHandlePressableProps);
        const obj6 = { size: "xs", style: tmp8.dragHandle };
        obj5.children = closure_1_8(DragIcon.DragIcon, obj6);
        tmp13 = closure_1_8(timestampProducer, obj5);
      }
      const items1 = [tmp13, , , ,];
      let tmp19 = null != icon;
      if (tmp19) {
        const obj7 = { style: tmp8.iconContainer, children: icon };
        tmp19 = closure_1_8(React5, obj7);
      }
      items1[1] = tmp19;
      const obj8 = { style: tmp8.content, children: null };
      const obj9 = { style: tmp8.labels, accessible: flag, accessibilityRole: null, children: null };
      let str;
      if (flag) {
        str = "text";
      }
      obj9.accessibilityRole = str;
      let tmp23Result = label;
      if (!noop.isValidElement(label)) {
        const obj10 = { variant: token, color: null, lineClamp: null, includeFontPadding: true, children: null };
        let str2 = "text-feedback-critical";
        if ("danger" !== variant) {
          str2 = token1;
        }
        obj10.color = str2;
        obj10.lineClamp = labelLineClamp;
        obj10.children = label;
        tmp23Result = closure_1_8(Text_Text.Text, obj10);
      }
      const items2 = [tmp23Result];
      let tmp24 = null != subLabel;
      if (tmp24) {
        let tmp26Result = subLabel;
        if (!noop.isValidElement(subLabel)) {
          let str4 = "text-subtle";
          if ("danger" === variant) {
            str4 = "text-feedback-critical";
          }
          const obj11 = {
            variant: "text-xs/medium",
            color: str4,
            lineClamp: subLabelLineClamp,
            includeFontPadding: true,
            children: subLabel,
          };
          tmp26Result = closure_1_8(Text_Text.Text, obj11);
        }
        tmp24 = tmp26Result;
      }
      items2[1] = tmp24;
      obj9.children = items2;
      const items3 = [v65535(React5, obj9)];
      let tmp27 = null != tmp;
      if (tmp27) {
        const obj12 = { style: null, children: null };
        const items4 = [,];
        ({ trailing: arr5[0], trailingText: arr5[1] } = tmp8);
        obj12.style = items4;
        obj12.children = tmp;
        tmp27 = closure_1_8(React5, obj12);
      }
      items3[1] = tmp27;
      obj8.children = items3;
      items1[2] = v65535(React5, obj8);
      let tmp29 = null != trailing && null == tmp;
      if (tmp29) {
        const obj13 = { style: tmp8.trailing, children: trailing };
        tmp29 = closure_1_8(React5, obj13);
      }
      items1[3] = tmp29;
      if (arrow) {
        arrow = closure_1_8(TableRowArrow.TableRowArrow, {});
      }
      items1[4] = arrow;
      obj4.children = items1;
      return v65535(React5, obj4);
    };
let closure_13 = tmp5;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRow.native.tsx");

export const TableRow = tmp4;
export const TableRowInner = tmp5;
