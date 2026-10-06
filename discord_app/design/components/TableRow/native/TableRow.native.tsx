// === Module 6000: TableRow ===

// Module 6000 (TableRow)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useToken from "useToken" /* 4586 */;
import Text_Text from "Text/Text" /* 4892 */;
import useFontScale from "useFontScale" /* 5609 */;
import TableRowDivider from "TableRowDivider" /* 5995 */;
import react3 from "react" /* 6001 */;
import Card_Card from "Card/Card" /* 6002 */;
import TableRowIcon from "TableRowIcon" /* 6006 */;
import TableRowArrow from "TableRowArrow" /* 6007 */;
import TableRowTrailingText from "TableRowTrailingText" /* 6009 */;
import DragIcon from "DragIcon" /* 6010 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let closure_3 = ["label", "subLabel", "icon", "trailing", "arrow", "onPress", "disabled", "start", "end", "labelLineClamp", "subLabelLineClamp", "variant", "draggable", "dragHandlePressableProps", "height"];
({ Pressable: metroRequire, View: metroImportDefault } = react_native);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
const style = { padding: 0 };
let closure_12 = createStyles.createStyles((arg0, arg1, arg2) => {
  let num;
  let num2;
  let num3;
  let num4;
  let obj4;
  let obj5;
  let str2;
  let str4;
  const obj = { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", opacity: num, borderRadius: nativeDefault.radii.md };
  num = 1;
  if (arg0) {
    num = 0.5;
  }
  let str = "row";
  const obj2 = { row: obj, iconContainer: { minWidth: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" }, trailing: { marginStart: 18 }, content: obj4, labels: obj5, trailingText: { flexShrink: 1, marginStart: num4 }, dragHandle: { marginEnd: 8 } };
  ({ minWidth: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING, alignItems: "center", justifyContent: "center" });
  if (arg2) {
    str = "column";
  }
  obj4 = { flexShrink: 1, flexGrow: 1, flexDirection: str, alignItems: str2, justifyContent: "space-between" };
  str2 = "center";
  if (arg2) {
    str2 = "stretch";
  }
  let str3 = "100%";
  if (arg1) {
    str3 = "100%";
  }
  obj5 = { width: str3, flexGrow: num2, flexShrink: num3, maxWidth: str4 };
  num2 = undefined;
  if (arg1) {
    if (!arg2) {
      num2 = 1;
    }
  }
  num3 = 1;
  if (arg1) {
    num3 = 1;
  }
  str4 = undefined;
  if (arg1) {
    if (!arg2) {
      str4 = "70%";
    }
  }
  num4 = 18;
  if (arg2) {
    num4 = 0;
  }
  return obj2;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arrow;
  let disabled;
  let dragHandlePressableProps;
  let draggable;
  let end;
  let height;
  let icon;
  let items;
  let label;
  let labelLineClamp;
  let onPress;
  let start;
  let subLabel;
  let subLabelLineClamp;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let trailing;
  let variant;
  const obj = react2;
  const cResult = obj.c(42);
  if (cResult[0] !== arg0) {
    ({ label, subLabel, icon, trailing, arrow, onPress, disabled, start, end, labelLineClamp, subLabelLineClamp, variant, draggable, dragHandlePressableProps, height } = arg0);
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
    tmp19 = trailing;
    tmp18 = variant;
    tmp17 = disabled;
    tmp16 = subLabelLineClamp;
    tmp15 = subLabel;
    tmp14 = start;
    tmp13 = onPress;
    tmp12 = labelLineClamp;
    tmp11 = label;
    tmp10 = icon;
    tmp9 = height;
    tmp8 = end;
    tmp7 = draggable;
    tmp6 = dragHandlePressableProps;
    tmp5 = tmp22;
    tmp4 = arrow;
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
  const context = react.useContext(react3.TableRowGroupContext);
  const tmpResult = useToken;
  const token = tmpResult.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
  if (cResult[17] === tmp4) {
    if (cResult[18] === (undefined !== tmp17 && tmp17)) {
      if (cResult[19] === tmp6) {
        if (cResult[20] === tmp7) {
          if (cResult[21] === tmp9) {
            if (cResult[22] === tmp10) {
              if (cResult[23] === tmp11) {
                if (cResult[24] === tmp12) {
                  if (cResult[25] === tmp15) {
                    if (cResult[26] === tmp16) {
                      if (cResult[27] === tmp19) {
                        let tmp30;
                        if (cResult[28] === str) {
                          tmp30 = cResult[29];
                        }
                        if (cResult[30] === token) {
                          if (cResult[31] === tmp5) {
                            if (cResult[32] === (undefined !== tmp17 && tmp17)) {
                              if (cResult[33] === (!context && true === tmp8)) {
                                if (cResult[34] === (!context && true === tmp14)) {
                                  if (cResult[35] === tmp13) {
                                    let tmp32;
                                    if (cResult[36] === tmp30) {
                                      tmp32 = cResult[37];
                                    }
                                    if (cResult[38] === tmp32) {
                                      if (cResult[39] === null != tmp10) {
                                        let tmp39;
                                        if (cResult[40] === (!context && !(!context && true === tmp8))) {
                                          tmp39 = cResult[41];
                                        }
                                        return tmp39;
                                      }
                                    }
                                    let tmp40 = tmp32;
                                    if (!context && !(!context && true === tmp8)) {
                                      const obj2 = { children: items };
                                      items = [tmp32, ];
                                      const obj3 = { adjustSpacingForIcon: null != tmp10 };
                                      items[1] = metroImportAll(TableRowDivider.TableRowDivider, obj3);
                                      tmp40 = authStore(React4, obj2);
                                    }
                                    cResult[38] = tmp32;
                                    cResult[39] = null != tmp10;
                                    cResult[40] = !context && !(!context && true === tmp8);
                                    cResult[41] = tmp40;
                                    tmp39 = tmp40;
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj4 = { radius: token, shadow: "none", border: "none", variant: "muted", start: !context && true === tmp14, end: !context && true === tmp8, onPress: tmp13, disabled: undefined !== tmp17 && tmp17, style, children: tmp30 };
                        const InternalCard = Card_Card.InternalCard;
                        const merged = Object.assign(tmp5);
                        const tmp38 = metroImportAll(InternalCard, obj4);
                        cResult[30] = token;
                        cResult[31] = tmp5;
                        cResult[32] = undefined !== tmp17 && tmp17;
                        cResult[33] = !context && true === tmp8;
                        cResult[34] = !context && true === tmp14;
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
  const tmp31 = metroImportAll(closure_13, { height: tmp9, label: tmp11, subLabel: tmp15, icon: tmp10, trailing: tmp19, arrow: tmp4, disabled: undefined !== tmp17 && tmp17, labelLineClamp: tmp12, subLabelLineClamp: tmp16, variant: str, draggable: tmp7, dragHandlePressableProps: tmp6 });
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
}) : ((arg0) => {
  let arrow;
  let disabled;
  let dragHandlePressableProps;
  let draggable;
  let end;
  let height;
  let icon;
  let items;
  let label;
  let labelLineClamp;
  let onPress;
  let start;
  let subLabel;
  let subLabelLineClamp;
  let tmp8;
  let trailing;
  let variant;
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
  const merged = Object.assign(arg0, Object.assign({ label: 0, subLabel: 0, icon: 0, trailing: 0, arrow: 0, onPress: 0, disabled: 0, start: 0, end: 0, labelLineClamp: 0, subLabelLineClamp: 0, variant: 0, draggable: 0, dragHandlePressableProps: 0, height: 0 }));
  const context = react.useContext(react3.TableRowGroupContext);
  const tmp2Result = useToken;
  const token = tmp2Result.useToken(nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS);
  const obj = { radius: token, shadow: "none", border: "none", variant: "muted", start: tmp8, end: !context && true === end, onPress, disabled, style, children: metroImportAll(closure_13, { height, label, subLabel, icon, trailing, arrow, disabled, labelLineClamp, subLabelLineClamp, variant, draggable, dragHandlePressableProps }) };
  tmp8 = !context;
  const InternalCard = Card_Card.InternalCard;
  if (!context) {
    tmp8 = true === start;
  }
  const merged1 = Object.assign(merged);
  const tmp7Result = metroImportAll(InternalCard, obj);
  let tmp11 = tmp7Result;
  if (!context) {
    tmp11 = tmp7Result;
    if (!(!context && true === end)) {
      const obj2 = { children: items };
      items = [tmp7Result, ];
      const obj3 = { adjustSpacingForIcon: null != icon };
      items[1] = metroImportAll(TableRowDivider.TableRowDivider, obj3);
      tmp11 = authStore(React4, obj2);
    }
  }
  return tmp11;
});
tmp4.Icon = TableRowIcon.TableRowIcon;
tmp4.Arrow = TableRowArrow.TableRowArrow;
tmp4.TrailingText = TableRowTrailingText.TableRowTrailingText;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((disabled) => {
  let arrow;
  let borderRadius;
  let dragHandlePressableProps;
  let draggable;
  let height;
  let icon;
  let items;
  let items1;
  let items2;
  let items3;
  let label;
  let labelLineClamp;
  let obj12;
  let str3;
  let subLabel;
  let subLabelLineClamp;
  let tmp8;
  let trailing;
  let variant;
  const obj = react2;
  const cResult = obj.c(53);
  ({ label, labelLineClamp, subLabel, subLabelLineClamp, icon, trailing, arrow, variant, draggable, dragHandlePressableProps, borderRadius, height } = disabled);
  let str = "default";
  disabled = disabled.disabled;
  if (undefined !== variant) {
    str = variant;
  }
  let tmp6;
  if (react.isValidElement(trailing)) {
    if (trailing.type === TableRowTrailingText.TableRowTrailingText) {
      tmp6 = trailing;
    }
  }
  const tmpResult = useFontScale;
  const fontScale = tmpResult.useFontScale();
  if (cResult[0] !== fontScale) {
    let tmp9;
    const tmpResult4 = PlatformUtils;
    if (tmpResult4.isAndroid()) {
      tmp9 = fontScale > 1.2;
    } else {
      tmp9 = fontScale > 1.5;
    }
    cResult[0] = fontScale;
    cResult[1] = tmp9;
    tmp8 = tmp9;
  } else {
    tmp8 = cResult[1];
  }
  const tmp10 = closure_12(true === disabled, null != tmp6, tmp8);
  const tmpResult5 = useToken;
  const token = tmpResult5.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const tmpResult6 = useToken;
  const token1 = tmpResult6.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
  if (cResult[2] === borderRadius) {
    let tmp13;
    if (cResult[3] === height) {
      tmp13 = cResult[4];
    }
    if (cResult[5] === tmp10.row) {
      let tmp14;
      if (cResult[6] === tmp13) {
        tmp14 = cResult[7];
      }
      if (cResult[8] === dragHandlePressableProps) {
        if (cResult[9] === (undefined !== draggable && draggable)) {
          let tmp15;
          if (cResult[10] === tmp10.dragHandle) {
            tmp15 = cResult[11];
          }
          if (cResult[12] === null != icon) {
            if (cResult[13] === icon) {
              let tmp22;
              if (cResult[14] === tmp10.iconContainer) {
                tmp22 = cResult[15];
              }
              if (cResult[16] === label) {
                if (cResult[17] === token1) {
                  if (cResult[18] === labelLineClamp) {
                    if (cResult[19] === token) {
                      let tmp27;
                      if (cResult[20] === str) {
                        tmp27 = cResult[21];
                      }
                      if (cResult[22] === subLabel) {
                        if (cResult[23] === subLabelLineClamp) {
                          let tmp30;
                          if (cResult[24] === str) {
                            tmp30 = cResult[25];
                          }
                          if (cResult[26] === tmp10.labels) {
                            if (cResult[27] === tmp27) {
                              if (cResult[28] === tmp30) {
                                if (cResult[29] === (undefined !== draggable && draggable || undefined)) {
                                  let tmp34;
                                  if (cResult[30] === str2) {
                                    tmp34 = cResult[31];
                                  }
                                  if (cResult[32] === tmp10.trailing) {
                                    if (cResult[33] === tmp10.trailingText) {
                                      let tmp38;
                                      if (cResult[34] === tmp6) {
                                        tmp38 = cResult[35];
                                      }
                                      if (cResult[36] === tmp10.content) {
                                        if (cResult[37] === tmp34) {
                                          let tmp42;
                                          if (cResult[38] === tmp38) {
                                            tmp42 = cResult[39];
                                          }
                                          if (cResult[40] === tmp10.trailing) {
                                            if (cResult[41] === trailing) {
                                              let tmp46;
                                              let tmp50;
                                              if (cResult[42] === tmp6) {
                                                tmp46 = cResult[43];
                                              }
                                              if (cResult[44] !== arrow) {
                                                const tmp51 = arrow && metroImportAll(TableRowArrow.TableRowArrow, {});
                                                cResult[44] = arrow;
                                                cResult[45] = tmp51;
                                                tmp50 = tmp51;
                                              } else {
                                                tmp50 = cResult[45];
                                              }
                                              if (cResult[46] === tmp42) {
                                                if (cResult[47] === tmp46) {
                                                  if (cResult[48] === tmp50) {
                                                    if (cResult[49] === tmp14) {
                                                      if (cResult[50] === tmp15) {
                                                        let tmp53;
                                                        if (cResult[51] === tmp22) {
                                                          tmp53 = cResult[52];
                                                        }
                                                        return tmp53;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              const obj3 = { style: tmp14, children: items };
                                              items = [tmp15, tmp22, tmp42, tmp46, tmp50];
                                              const tmp56 = authStore(metroImportDefault, obj3);
                                              cResult[46] = tmp42;
                                              cResult[47] = tmp46;
                                              cResult[48] = tmp50;
                                              cResult[49] = tmp14;
                                              cResult[50] = tmp15;
                                              cResult[51] = tmp22;
                                              cResult[52] = tmp56;
                                              tmp53 = tmp56;
                                            }
                                          }
                                          let tmp47 = null != trailing && null == tmp6;
                                          if (tmp47) {
                                            const obj4 = { style: tmp10.trailing, children: trailing };
                                            tmp47 = metroImportAll(metroImportDefault, obj4);
                                          }
                                          cResult[40] = tmp10.trailing;
                                          cResult[41] = trailing;
                                          cResult[42] = tmp6;
                                          cResult[43] = tmp47;
                                          tmp46 = tmp47;
                                        }
                                      }
                                      const obj5 = { style: tmp10.content, children: items1 };
                                      items1 = [tmp34, tmp38];
                                      const tmp45 = authStore(metroImportDefault, obj5);
                                      cResult[36] = tmp10.content;
                                      cResult[37] = tmp34;
                                      cResult[38] = tmp38;
                                      cResult[39] = tmp45;
                                      tmp42 = tmp45;
                                    }
                                  }
                                  let tmp39 = null != tmp6;
                                  if (tmp39) {
                                    const obj6 = { style: items2, children: tmp6 };
                                    items2 = [, ];
                                    ({ trailing: arr3[0], trailingText: arr3[1] } = tmp10);
                                    tmp39 = metroImportAll(metroImportDefault, obj6);
                                  }
                                  cResult[32] = tmp10.trailing;
                                  cResult[33] = tmp10.trailingText;
                                  cResult[34] = tmp6;
                                  cResult[35] = tmp39;
                                  tmp38 = tmp39;
                                }
                              }
                            }
                          }
                          const obj7 = { style: tmp10.labels, accessible: undefined !== draggable && draggable || undefined, accessibilityRole: str2, children: items3 };
                          items3 = [tmp27, tmp30];
                          const tmp37 = authStore(metroImportDefault, obj7);
                          cResult[26] = tmp10.labels;
                          cResult[27] = tmp27;
                          cResult[28] = tmp30;
                          cResult[29] = undefined !== draggable && draggable || undefined;
                          cResult[30] = str2;
                          cResult[31] = tmp37;
                          tmp34 = tmp37;
                        }
                      }
                      let tmp31 = null != subLabel;
                      if (tmp31) {
                        let tmp33Result = subLabel;
                        if (!react.isValidElement(subLabel)) {
                          let str5 = "text-subtle";
                          const Text2 = Text_Text.Text;
                          if ("danger" === str) {
                            str5 = "text-feedback-critical";
                          }
                          const obj8 = { variant: "text-xs/medium", color: str5, lineClamp: subLabelLineClamp, includeFontPadding: true, children: subLabel };
                          tmp33Result = metroImportAll(Text2, obj8);
                        }
                        tmp31 = tmp33Result;
                      }
                      cResult[22] = subLabel;
                      cResult[23] = subLabelLineClamp;
                      cResult[24] = str;
                      cResult[25] = tmp31;
                      tmp30 = tmp31;
                    }
                  }
                }
              }
              let tmp29Result = label;
              if (!react.isValidElement(label)) {
                const obj9 = { variant: token, color: str3, lineClamp: labelLineClamp, includeFontPadding: true, children: label };
                str3 = "text-feedback-critical";
                const Text = Text_Text.Text;
                if ("danger" !== str) {
                  str3 = token1;
                }
                tmp29Result = metroImportAll(Text, obj9);
              }
              cResult[16] = label;
              cResult[17] = token1;
              cResult[18] = labelLineClamp;
              cResult[19] = token;
              cResult[20] = str;
              cResult[21] = tmp29Result;
              tmp27 = tmp29Result;
            }
          }
          let tmp23 = tmp5;
          if (tmp23) {
            const obj10 = { style: tmp10.iconContainer, children: icon };
            tmp23 = metroImportAll(metroImportDefault, obj10);
          }
          cResult[12] = null != icon;
          cResult[13] = icon;
          cResult[14] = tmp10.iconContainer;
          cResult[15] = tmp23;
          tmp22 = tmp23;
        }
      }
      let tmp16 = tmp4;
      if (tmp16) {
        const obj11 = { children: metroImportAll(DragIcon.DragIcon, obj12) };
        const merged = Object.assign(dragHandlePressableProps);
        obj12 = { size: "xs", style: tmp10.dragHandle };
        tmp16 = metroImportAll(metroRequire, obj11);
      }
      cResult[8] = dragHandlePressableProps;
      cResult[9] = undefined !== draggable && draggable;
      cResult[10] = tmp10.dragHandle;
      cResult[11] = tmp16;
      tmp15 = tmp16;
    }
    const items4 = [tmp10.row, tmp13];
    cResult[5] = tmp10.row;
    cResult[6] = tmp13;
    cResult[7] = items4;
    tmp14 = items4;
  }
  const obj13 = { borderRadius, height };
  cResult[2] = borderRadius;
  cResult[3] = height;
  cResult[4] = obj13;
  tmp13 = obj13;
}) : ((draggable) => {
  let arrow;
  let borderRadius;
  let disabled;
  let height;
  let icon;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let label;
  let labelLineClamp;
  let obj6;
  let str;
  let str2;
  let subLabel;
  let subLabelLineClamp;
  let tmp7;
  let trailing;
  let variant;
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
  if (react.isValidElement(trailing)) {
    if (trailing.type === TableRowTrailingText.TableRowTrailingText) {
      tmp = trailing;
    }
  }
  const obj2 = useFontScale;
  const fontScale = obj2.useFontScale();
  const obj3 = PlatformUtils;
  if (obj3.isAndroid()) {
    tmp7 = fontScale > 1.2;
  } else {
    tmp7 = fontScale > 1.5;
  }
  const tmp8 = closure_12(true === disabled, null != tmp, tmp7);
  const tmp4Result = useToken;
  const token = tmp4Result.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const obj4 = { style: items, children: items1 };
  items = [tmp8.row, { borderRadius, height }];
  let tmp13 = flag;
  const tmp4Result2 = useToken;
  const token1 = tmp4Result2.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
  if (flag) {
    const obj5 = { children: metroImportAll(DragIcon.DragIcon, obj6) };
    const merged = Object.assign(dragHandlePressableProps);
    obj6 = { size: "xs", style: tmp8.dragHandle };
    tmp13 = metroImportAll(metroRequire, obj5);
  }
  items1 = [tmp13, , , , ];
  let tmp19 = null != icon;
  if (tmp19) {
    const obj7 = { style: tmp8.iconContainer, children: icon };
    tmp19 = metroImportAll(metroImportDefault, obj7);
  }
  items1[1] = tmp19;
  const obj9 = { style: tmp8.labels, accessible: flag || undefined, accessibilityRole: str, children: items2 };
  str = undefined;
  const obj8 = { style: tmp8.content, children: items3 };
  if (flag) {
    str = "text";
  }
  let tmp22Result = label;
  if (!react.isValidElement(label)) {
    const obj10 = { variant: token, color: str2, lineClamp: labelLineClamp, includeFontPadding: true, children: label };
    str2 = "text-feedback-critical";
    const Text = Text_Text.Text;
    if ("danger" !== variant) {
      str2 = token1;
    }
    tmp22Result = metroImportAll(Text, obj10);
  }
  items2 = [tmp22Result, ];
  let tmp23 = null != subLabel;
  if (tmp23) {
    let tmp25Result = subLabel;
    if (!react.isValidElement(subLabel)) {
      let str4 = "text-subtle";
      const Text2 = Text_Text.Text;
      if ("danger" === variant) {
        str4 = "text-feedback-critical";
      }
      const obj11 = { variant: "text-xs/medium", color: str4, lineClamp: subLabelLineClamp, includeFontPadding: true, children: subLabel };
      tmp25Result = metroImportAll(Text2, obj11);
    }
    tmp23 = tmp25Result;
  }
  items2[1] = tmp23;
  items3 = [authStore(metroImportDefault, obj9), ];
  let tmp26 = null != tmp;
  if (tmp26) {
    const obj12 = { style: items4, children: tmp };
    items4 = [, ];
    ({ trailing: arr5[0], trailingText: arr5[1] } = tmp8);
    tmp26 = metroImportAll(metroImportDefault, obj12);
  }
  items3[1] = tmp26;
  items1[2] = authStore(metroImportDefault, obj8);
  let tmp28 = null != trailing && null == tmp;
  if (tmp28) {
    const obj13 = { style: tmp8.trailing, children: trailing };
    tmp28 = metroImportAll(metroImportDefault, obj13);
  }
  items1[3] = tmp28;
  if (arrow) {
    arrow = metroImportAll(TableRowArrow.TableRowArrow, {});
  }
  items1[4] = arrow;
  return authStore(metroImportDefault, obj4);
});
let closure_13 = tmp5;
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRow.native.tsx");

export const TableRow = tmp4;
export const TableRowInner = tmp5;