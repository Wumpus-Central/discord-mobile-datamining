// === Module 11445: SelectComponentActionSheet ===

// Module 11445 (SelectComponentActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react_native2 from "react-native" /* 4600 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import FormCheckbox2 from "FormCheckbox" /* 5998 */;
import TableRow2 from "TableRow" /* 6000 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6653 */;
import CheckmarkSmallBoldIcon from "CheckmarkSmallBoldIcon" /* 8991 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, announceResult, hideActionSheetResult, tmp3;

let c10;
let c9;
let items;
let metroImportAll;
let obj2;
let obj3;
let rect;
let size;
const View = react_native.View;
let closure_7 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { selectionOptionItemIconWrapper: obj2, tagListIconWrapper: size, tagListIcon: rect, textInputWrapper: obj3 };
obj2 = { width: nativeDefault.space.PX_32, alignItems: "center" };
createStyles = createStyles.createStyles;
size = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
rect = { transform: items, top: -nativeDefault.space.PX_4, left: -nativeDefault.space.PX_4 };
items = [{ scale: 0.75 }];
obj3 = { paddingHorizontal: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((renderIcon) => {
  let intl3;
  let items;
  let labelComponent;
  let onPressOptionItem;
  let selectButtonDisabled;
  let selectedOptions;
  let selectionActionComponent;
  let submitSelection;
  let tmp21Result;
  let tmp = renderIcon;
  let obj = renderIcon(onPressOptionItem[9]);
  const cResult = obj.c(29);
  renderIcon = renderIcon.renderIcon;
  ({ selectionActionComponent, labelComponent, selectButtonDisabled, selectedOptions } = renderIcon);
  ({ submitSelection, onPressOptionItem } = renderIcon);
  const onRemoveOptionItem = renderIcon.onRemoveOptionItem;
  const onQueryChange = renderIcon.onQueryChange;
  const tmp4 = closure_11();
  let closure_5 = tmp4;
  const ref = onRemoveOptionItem.useRef(null);
  if (cResult[0] === renderIcon) {
    if (cResult[1] === selectedOptions) {
      let arr;
      if (cResult[2] === tmp4) {
        arr = cResult[3];
      }
      let label;
      const tmp6 = cResult[4];
      if (labelComponent != null) {
        label = labelComponent.label;
      }
      if (tmp6 === label) {
        let tmp8;
        if (cResult[5] === selectionActionComponent.placeholder) {
          tmp8 = cResult[6];
        }
        if (cResult[7] === selectionActionComponent.maxValues > 1) {
          let tmp11;
          if (cResult[8] === selectionActionComponent.minValues) {
            tmp11 = cResult[9];
          }
          if (cResult[10] === selectionActionComponent.maxValues > 1) {
            if (cResult[11] === selectButtonDisabled) {
              let tmp13;
              if (cResult[12] === submitSelection) {
                tmp13 = cResult[13];
              }
              if (cResult[14] === tmp8) {
                if (cResult[15] === tmp11) {
                  let tmp16;
                  if (cResult[16] === tmp13) {
                    tmp16 = cResult[17];
                  }
                  if (cResult[18] === selectionActionComponent.maxValues > 1) {
                    if (cResult[19] === onPressOptionItem) {
                      if (cResult[20] === onQueryChange) {
                        if (cResult[21] === onRemoveOptionItem) {
                          if (cResult[22] === selectedOptions) {
                            if (cResult[23] === tmp4) {
                              let tmp19;
                              if (cResult[24] === arr) {
                                tmp19 = cResult[25];
                              }
                              if (cResult[26] === tmp16) {
                                let tmp26;
                                if (cResult[27] === tmp19) {
                                  tmp26 = cResult[28];
                                }
                                return tmp26;
                              }
                              let obj2 = { children: items };
                              items = [tmp16, tmp19];
                              const tmp29 = closure_10(closure_9, obj2);
                              cResult[26] = tmp16;
                              cResult[27] = tmp19;
                              cResult[28] = tmp29;
                              tmp26 = tmp29;
                            }
                          }
                        }
                      }
                    }
                  }
                  let tmp21Result2 = null;
                  if (null != onQueryChange) {
                    tmp21Result2 = null;
                    if (null != arr) {
                      let obj3 = {
                        inActionSheet: true,
                        style: tmp4.textInputWrapper,
                        icon: tmp21Result,
                        tags: arr,
                        onRemove(arg0) {
                                              let tmp;
                                              if (selectedOptions != null) {
                                                tmp = selectedOptions[arg0];
                                              }
                                              if (null != tmp) {
                                                let tmp2 = onRemoveOptionItem;
                                                if (null == onRemoveOptionItem) {
                                                  tmp2 = onPressOptionItem;
                                                }
                                                tmp2(arg0, tmp);
                                              }
                                            },
                        onChangeText(arg0) {
                                              const current = ref.current;
                                              if (current != null) {
                                                current.scrollTo({ y: 0, animated: false });
                                              }
                                              onQueryChange(arg0);
                                            }
                      };
                      tmp21Result = undefined;
                      const tmp23 = selectedOptions(onPressOptionItem[13]);
                      if (selectionActionComponent.maxValues > 1) {
                        if (0 !== arr.length) {
                          tmp21Result = closure_8(onQueryChange, {});
                        }
                      }
                      tmp21Result2 = closure_8(tmp23, obj3);
                    }
                  }
                  cResult[18] = selectionActionComponent.maxValues > 1;
                  cResult[19] = onPressOptionItem;
                  cResult[20] = onQueryChange;
                  cResult[21] = onRemoveOptionItem;
                  cResult[22] = selectedOptions;
                  cResult[23] = tmp4;
                  cResult[24] = arr;
                  cResult[25] = tmp21Result2;
                  tmp19 = tmp21Result2;
                }
              }
              const obj4 = { title: tmp8, subtitle: tmp11, trailing: tmp13 };
              const tmp18 = closure_8(tmp(onPressOptionItem[12]).BottomSheetTitleHeader, obj4);
              cResult[14] = tmp8;
              cResult[15] = tmp11;
              cResult[16] = tmp13;
              cResult[17] = tmp18;
              tmp16 = tmp18;
            }
          }
          let tmp15Result;
          if (selectionActionComponent.maxValues > 1) {
            let str = "primary";
            const Button = tmp(onPressOptionItem[11]).Button;
            if (selectButtonDisabled) {
              str = "secondary";
            }
            const obj5 = { size: "sm", variant: str, disabled: selectButtonDisabled, onPress: submitSelection, text: intl3.string(tmp(onPressOptionItem[10]).t.XqMe3N) };
            intl3 = tmp(onPressOptionItem[10]).intl;
            tmp15Result = closure_8(Button, obj5);
          }
          cResult[10] = selectionActionComponent.maxValues > 1;
          cResult[11] = selectButtonDisabled;
          cResult[12] = submitSelection;
          cResult[13] = tmp15Result;
          tmp13 = tmp15Result;
        }
        let formatToPlainStringResult;
        if (selectionActionComponent.maxValues > 1) {
          if (selectionActionComponent.minValues > 0) {
            const intl2 = tmp(onPressOptionItem[10]).intl;
            const obj6 = { count: selectionActionComponent.minValues };
            formatToPlainStringResult = intl2.formatToPlainString(tmp(onPressOptionItem[10]).t.Jmwzdx, obj6);
          }
        }
        cResult[7] = selectionActionComponent.maxValues > 1;
        cResult[8] = selectionActionComponent.minValues;
        cResult[9] = formatToPlainStringResult;
        tmp11 = formatToPlainStringResult;
      }
      let label1;
      if (labelComponent != null) {
        label1 = labelComponent.label;
      }
      if (label1 == null) {
        label1 = selectionActionComponent.placeholder;
      }
      if (label1 == null) {
        const intl = tmp(onPressOptionItem[10]).intl;
        label1 = intl.string(tmp(onPressOptionItem[10]).t.Otr6W2);
      }
      let label2;
      if (labelComponent != null) {
        label2 = labelComponent.label;
      }
      cResult[4] = label2;
      cResult[5] = selectionActionComponent.placeholder;
      cResult[6] = label1;
      tmp8 = label1;
    }
  }
  let mapped;
  if (selectedOptions != null) {
    mapped = selectedOptions.map((id) => {
      let obj2;
      let obj3;
      const obj = { id: id.value, text: id.label, icon: metroImportAll(View, obj2) };
      obj2 = { style: closure_5.tagListIconWrapper, children: metroImportAll(View, obj3) };
      obj3 = { style: closure_5.tagListIcon, children: renderIcon(id) };
      return obj;
    });
  }
  if (mapped == null) {
    mapped = [];
  }
  cResult[0] = renderIcon;
  cResult[1] = selectedOptions;
  cResult[2] = tmp4;
  cResult[3] = mapped;
  arr = mapped;
}) : ((renderIcon) => {
  let formatToPlainStringResult;
  let intl3;
  let labelComponent;
  let onQueryChange;
  let selectButtonDisabled;
  let selectedOptions;
  let selectionActionComponent;
  let tmp5Result;
  let tmp5Result3;
  renderIcon = renderIcon.renderIcon;
  ({ selectionActionComponent, labelComponent, selectButtonDisabled, selectedOptions } = renderIcon);
  ({ onPressOptionItem: dependencyMap, onRemoveOptionItem: react, onQueryChange } = renderIcon);
  const submitSelection = renderIcon.submitSelection;
  let tmp = closure_11();
  let closure_5 = tmp;
  let tmp2 = selectionActionComponent.maxValues > 1;
  const ref = react.useRef(null);
  const items = [selectedOptions, tmp, renderIcon];
  const memo = react.useMemo(() => {
    let mapped;
    if (selectedOptions != null) {
      mapped = selectedOptions.map((id) => {
        let obj2;
        let obj3;
        const obj = { id: id.value, text: id.label, icon: closure_2_8(onQueryChange, obj2) };
        obj2 = { style: closure_1_5.tagListIconWrapper, children: closure_2_8(onQueryChange, obj3) };
        obj3 = { style: closure_1_5.tagListIcon, children: renderIcon(id) };
        return obj;
      });
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  }, items);
  let label;
  const BottomSheetTitleHeader = renderIcon(6651).BottomSheetTitleHeader;
  if (labelComponent != null) {
    label = labelComponent.label;
  }
  if (label == null) {
    label = selectionActionComponent.placeholder;
  }
  if (label == null) {
    const intl = tmp6(1126).intl;
    label = intl.string(tmp6(1126).t.Otr6W2);
  }
  let obj = { title: label, subtitle: formatToPlainStringResult, trailing: tmp5Result };
  formatToPlainStringResult = undefined;
  if (tmp2) {
    if (selectionActionComponent.minValues > 0) {
      const intl2 = tmp6(1126).intl;
      let obj2 = { count: selectionActionComponent.minValues };
      formatToPlainStringResult = intl2.formatToPlainString(tmp6(1126).t.Jmwzdx, obj2);
    }
  }
  tmp5Result = undefined;
  if (tmp2) {
    let str = "primary";
    const Button = tmp6(5601).Button;
    if (selectButtonDisabled) {
      str = "secondary";
    }
    let obj3 = { size: "sm", variant: str, disabled: selectButtonDisabled, onPress: submitSelection, text: intl3.string(renderIcon(1126).t.XqMe3N) };
    intl3 = tmp6(1126).intl;
    tmp5Result = closure_8(Button, obj3);
  }
  const children = [closure_8(BottomSheetTitleHeader, obj), ];
  let tmp5Result4 = null;
  if (null != onQueryChange) {
    tmp5Result4 = null;
    if (null != memo) {
      const obj4 = {
        inActionSheet: true,
        style: tmp.textInputWrapper,
        icon: tmp5Result3,
        tags: memo,
        onRemove(arg0) {
              let tmp;
              if (selectedOptions != null) {
                tmp = selectedOptions[arg0];
              }
              if (null != tmp) {
                let tmp2 = react;
                if (null == react) {
                  tmp2 = dependencyMap;
                }
                tmp2(arg0, tmp);
              }
            },
        onChangeText(arg0) {
              const current = ref.current;
              if (current != null) {
                current.scrollTo({ y: 0, animated: false });
              }
              onQueryChange(arg0);
            }
      };
      tmp5Result3 = undefined;
      const tmp13 = selectedOptions(9270);
      if (tmp2) {
        if (0 !== memo.length) {
          tmp5Result3 = closure_8(onQueryChange, {});
        }
      }
      tmp5Result4 = closure_8(tmp13, obj4);
    }
  }
  children[1] = tmp5Result4;
  return closure_10(closure_9, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((item) => {
  let clearable;
  let disabled;
  let end;
  let iconContainerStyle;
  let index;
  let itemAccessibilityLabel;
  let items;
  let renderDescription;
  let renderIcon;
  let renderOptionSuffix;
  let selected;
  let skipIcon;
  let start;
  const obj = react2;
  const cResult = obj.c(44);
  item = item.item;
  const onPressOptionItem = item.onPressOptionItem;
  ({ clearable, selected, disabled, index } = item);
  ({ start, end, iconContainerStyle, itemAccessibilityLabel, skipIcon, renderDescription, renderIcon, renderOptionSuffix } = item);
  const multi = item.multi;
  const tmp4 = closure_11();
  let flag = selected;
  if (selected == null) {
    flag = false;
  }
  if (cResult[0] === disabled) {
    let tmp5;
    if (cResult[1] === flag) {
      tmp5 = cResult[2];
    }
    let flag2 = selected;
    const tmpResult = react_native2;
    const checkboxA11yNative = tmpResult.useCheckboxA11yNative(tmp5);
    if (selected == null) {
      flag2 = false;
    }
    if (cResult[3] === disabled) {
      let tmp7;
      if (cResult[4] === flag2) {
        tmp7 = cResult[5];
      }
      const tmpResult2 = react_native2;
      let radioA11yNative = tmpResult2.useRadioA11yNative(tmp7);
      if (multi) {
        radioA11yNative = checkboxA11yNative;
      }
      if (cResult[6] === item) {
        let tmp9;
        let tmp12;
        if (cResult[7] === itemAccessibilityLabel) {
          tmp9 = cResult[8];
        }
        if (cResult[9] === iconContainerStyle) {
          if (cResult[10] === item) {
            if (cResult[11] === renderIcon) {
              if (cResult[12] === skipIcon) {
                let tmp11;
                let renderDescriptionResult;
                if (cResult[13] === tmp4) {
                  tmp11 = cResult[14];
                }
                if (cResult[15] === item) {
                  let tmp16;
                  if (cResult[16] === renderDescription) {
                    tmp16 = cResult[17];
                  }
                  if (cResult[18] === index) {
                    if (cResult[19] === item) {
                      let tmp18;
                      let tmp20;
                      if (cResult[20] === onPressOptionItem) {
                        tmp18 = cResult[21];
                      }
                      class D {
                        constructor() {
                          return onPressOptionItem(index, item);
                        }
                      }
                      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj2 = { flexDirection: "row" };
                        class D {
                          constructor() {
                            return onPressOptionItem(index, item);
                          }
                        }
                        tmp20 = obj2;
                      } else {
                        tmp20 = cResult[22];
                      }
                      if (cResult[23] === item) {
                        let tmp21;
                        if (cResult[24] === renderOptionSuffix) {
                          tmp21 = cResult[25];
                        }
                        if (cResult[26] === clearable) {
                          let tmp23;
                          if (cResult[27] === selected) {
                            tmp23 = cResult[28];
                          }
                          if (cResult[29] === tmp21) {
                            let tmp25;
                            if (cResult[30] === tmp23) {
                              tmp25 = cResult[31];
                            }
                            if (cResult[32] === radioA11yNative.accessibilityRole) {
                              if (cResult[33] === radioA11yNative.accessibilityState) {
                                if (cResult[34] === disabled) {
                                  if (cResult[35] === end) {
                                    if (cResult[36] === item.label) {
                                      if (cResult[37] === start) {
                                        if (cResult[38] === tmp25) {
                                          if (cResult[39] === tmp9) {
                                            if (cResult[40] === tmp11) {
                                              if (cResult[41] === tmp16) {
                                                let tmp28;
                                                if (cResult[42] === tmp18) {
                                                  tmp28 = cResult[43];
                                                }
                                                return tmp28;
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
                            class D {
                              constructor() {
                                return onPressOptionItem(index, item);
                              }
                            }
                            const obj3 = { accessibilityRole: radioA11yNative.accessibilityRole, accessibilityLabel: tmp9, accessibilityState: radioA11yNative.accessibilityState, start, end, disabled, icon: tmp11, label: item.label, labelLineClamp: 1, subLabel: tmp16, subLabelLineClamp: 1, onPress: tmp18, trailing: tmp25 };
                            const tmp29 = metroImportAll(TableRow2.TableRow, obj3);
                            cResult[32] = radioA11yNative.accessibilityRole;
                            cResult[33] = radioA11yNative.accessibilityState;
                            cResult[34] = disabled;
                            cResult[35] = end;
                            cResult[36] = item.label;
                            cResult[37] = start;
                            cResult[38] = tmp25;
                            cResult[39] = tmp9;
                            cResult[40] = tmp11;
                            cResult[41] = tmp16;
                            cResult[42] = tmp18;
                            cResult[43] = tmp29;
                            tmp28 = tmp29;
                          }
                          class D {
                            constructor() {
                              return onPressOptionItem(index, item);
                            }
                          }
                          const obj4 = { style: tmp20, children: items };
                          items = [tmp21, tmp23];
                          const tmp27 = authStore(View, obj4);
                          cResult[29] = tmp21;
                          cResult[30] = tmp23;
                          cResult[31] = tmp27;
                          tmp25 = tmp27;
                        }
                        class D {
                          constructor() {
                            return onPressOptionItem(index, item);
                          }
                        }
                        cResult[26] = clearable;
                        cResult[27] = selected;
                        cResult[28] = tmp24;
                        tmp23 = tmp24;
                      }
                      let renderOptionSuffixResult;
                      if (renderOptionSuffix != null) {
                        renderOptionSuffixResult = renderOptionSuffix(item);
                      }
                      cResult[23] = item;
                      cResult[24] = renderOptionSuffix;
                      cResult[25] = renderOptionSuffixResult;
                      tmp21 = renderOptionSuffixResult;
                    }
                  }
                  class D {
                    constructor() {
                      return onPressOptionItem(index, item);
                    }
                  }
                  cResult[18] = index;
                  cResult[19] = item;
                  cResult[20] = onPressOptionItem;
                  cResult[21] = D;
                  tmp18 = D;
                }
                if (renderDescription != null) {
                  renderDescriptionResult = renderDescription(item);
                }
                cResult[15] = item;
                cResult[16] = renderDescription;
                cResult[17] = renderDescriptionResult;
                tmp16 = renderDescriptionResult;
              }
            }
          }
        }
        if (!skipIcon) {
          class D {
            constructor() {
              return onPressOptionItem(index, item);
            }
          }
          const items1 = [tmp4.selectionOptionItemIconWrapper, iconContainerStyle];
          tmp15[0] = items1;
          tmp15[1] = renderIcon(item);
          tmp12 = metroImportAll(View, tmp15);
        }
        cResult[9] = iconContainerStyle;
        cResult[10] = item;
        cResult[11] = renderIcon;
        cResult[12] = skipIcon;
        cResult[13] = tmp4;
        cResult[14] = tmp12;
        tmp11 = tmp12;
      }
      let result;
      if (itemAccessibilityLabel != null) {
        result = itemAccessibilityLabel(item);
      }
      cResult[6] = item;
      cResult[7] = itemAccessibilityLabel;
      cResult[8] = result;
      tmp9 = result;
    }
    const obj5 = { selected: flag2, disabled };
    cResult[3] = disabled;
    cResult[4] = flag2;
    cResult[5] = obj5;
    tmp7 = obj5;
  }
  const obj6 = { checked: flag, disabled };
  cResult[0] = disabled;
  cResult[1] = flag;
  cResult[2] = obj6;
  tmp5 = obj6;
}) : ((item) => {
  let clearable;
  let closure_129_1;
  let closure_129_2;
  let disabled;
  let end;
  let iconContainerStyle;
  let itemAccessibilityLabel;
  let items;
  let items1;
  let multi;
  let obj3;
  let renderDescription;
  let renderDescriptionResult;
  let renderIcon;
  let renderOptionSuffix;
  let result;
  let selected;
  let skipIcon;
  let start;
  let tmp8Result;
  let tmp8Result2;
  item = item.item;
  ({ onPressOptionItem: closure_129_1, selected, disabled, index: closure_129_2, itemAccessibilityLabel, renderDescription, renderOptionSuffix } = item);
  ({ clearable, start, end, iconContainerStyle, skipIcon, multi, renderIcon } = item);
  let flag = selected;
  const tmp = closure_11();
  const useCheckboxA11yNative = react_native2.useCheckboxA11yNative;
  react_native2;
  if (selected == null) {
    flag = false;
  }
  const checkboxA11yNative = useCheckboxA11yNative({ checked: flag, disabled });
  let flag2 = selected;
  const useRadioA11yNative = react_native2.useRadioA11yNative;
  react_native2;
  if (selected == null) {
    flag2 = false;
  }
  let radioA11yNative = useRadioA11yNative({ selected: flag2, disabled });
  if (multi) {
    radioA11yNative = checkboxA11yNative;
  }
  const obj = {
    accessibilityRole: radioA11yNative.accessibilityRole,
    accessibilityLabel: result,
    accessibilityState: radioA11yNative.accessibilityState,
    start,
    end,
    disabled,
    icon: tmp8Result,
    label: item.label,
    labelLineClamp: 1,
    subLabel: renderDescriptionResult,
    subLabelLineClamp: 1,
    onPress() {
      return closure_1_1(closure_1_2, item);
    },
    trailing: authStore(View, obj3)
  };
  result = undefined;
  const TableRow = TableRow2.TableRow;
  if (itemAccessibilityLabel != null) {
    result = itemAccessibilityLabel(item);
  }
  tmp8Result = null;
  if (!skipIcon) {
    const obj2 = { style: items, children: renderIcon(item) };
    items = [tmp.selectionOptionItemIconWrapper, iconContainerStyle];
    tmp8Result = metroImportAll(View, obj2);
  }
  renderDescriptionResult = undefined;
  if (renderDescription != null) {
    renderDescriptionResult = renderDescription(item);
  }
  let renderOptionSuffixResult;
  obj3 = { style: { flexDirection: "row" }, children: items1 };
  if (renderOptionSuffix != null) {
    renderOptionSuffixResult = renderOptionSuffix(item);
  }
  items1 = [renderOptionSuffixResult, ];
  if (clearable) {
    const FormCheckbox = FormCheckbox2.FormCheckbox;
    if (!selected) {
      selected = false;
    }
    const obj4 = { checked: selected };
    tmp8Result2 = metroImportAll(FormCheckbox, obj4);
  } else {
    tmp8Result2 = null;
    if (true === selected) {
      tmp8Result2 = metroImportAll(CheckmarkSmallBoldIcon.CheckmarkSmallBoldIcon, { color: "text-brand" });
    }
  }
  items1[1] = tmp8Result2;
  return metroImportAll(TableRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectionActionComponent) => {
  let allowEmpty;
  let expanded;
  let first;
  let iconContainerStyle;
  let itemAccessibilityLabel;
  let labelComponent;
  let multi;
  let onPressOptionItem;
  let onQueryChange;
  let onRemoveOptionItem;
  let options;
  let renderHeaderIcon;
  let selectedCount;
  let selectedOptions;
  let submitSelection;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp6;
  let tmp8;
  let tmp = selectionActionComponent;
  let obj = selectionActionComponent(selectedCount[9]);
  const cResult = obj.c(51);
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  ({ labelComponent, onPressOptionItem } = selectionActionComponent);
  ({ selectedOptions, selectedCount } = selectionActionComponent);
  const renderIcon = selectionActionComponent.renderIcon;
  ({ renderHeaderIcon, iconContainerStyle } = selectionActionComponent);
  const skipIcon = selectionActionComponent.skipIcon;
  const renderDescription = selectionActionComponent.renderDescription;
  const renderOptionSuffix = selectionActionComponent.renderOptionSuffix;
  ({ onQueryChange, options } = selectionActionComponent);
  const itemStyle = selectionActionComponent.itemStyle;
  const isSelected = selectionActionComponent.isSelected;
  ({ submitSelection, itemAccessibilityLabel } = selectionActionComponent);
  const channelId = selectionActionComponent.channelId;
  ({ expanded, onRemoveOptionItem, allowEmpty } = selectionActionComponent);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { isKeyboardAwareOnAndroid: false };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = onPressOptionItem(selectedCount[18])(first).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
        announce = AccessibilityAnnouncer.announce;
        intl = selectionActionComponent(selectedCount[10]).intl;
        announceResult = announce(intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]));
        return;
      }
    }
    const items = [];
    cResult[1] = X;
    cResult[2] = items;
    tmp6 = items;
  } else {
    class X {
      constructor() {
        AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
        announce = AccessibilityAnnouncer.announce;
        intl = selectionActionComponent(selectedCount[10]).intl;
        announceResult = announce(intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]));
        return;
      }
    }
    tmp6 = cResult[2];
  }
  const effect = renderIcon.useEffect(X, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
        announce = AccessibilityAnnouncer.announce;
        intl = selectionActionComponent(selectedCount[10]).intl;
        announceResult = announce(intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]));
        return;
      }
    }
    const safeAreaInsets = obj3.getSafeAreaInsets();
    cResult[3] = safeAreaInsets;
    tmp8 = safeAreaInsets;
  } else {
    class X {
      constructor() {
        AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
        announce = AccessibilityAnnouncer.announce;
        intl = selectionActionComponent(selectedCount[10]).intl;
        announceResult = announce(intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]));
        return;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
        announce = AccessibilityAnnouncer.announce;
        intl = selectionActionComponent(selectedCount[10]).intl;
        announceResult = announce(intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]));
        return;
      }
    }
    const windowDimensions = obj4.getWindowDimensions();
    cResult[4] = windowDimensions;
    tmp10 = windowDimensions;
  } else {
    class X {
      constructor() {
        AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
        announce = AccessibilityAnnouncer.announce;
        intl = selectionActionComponent(selectedCount[10]).intl;
        announceResult = announce(intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]));
        return;
      }
    }
  }
  const diff = tmp10.height - tmp(selectedCount[22]).NAV_BAR_HEIGHT_MULTILINE - tmp8.top;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
        announce = AccessibilityAnnouncer.announce;
        intl = selectionActionComponent(selectedCount[10]).intl;
        announceResult = announce(intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]));
        return;
      }
    }
    const items1 = [renderDescription];
    class G {
      constructor() {
        return renderDescription.getChannelId();
      }
    }
    cResult[5] = items1;
    cResult[6] = G;
    tmp14 = G;
    tmp13 = items1;
  } else {
    class X {
      constructor() {
        AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
        announce = AccessibilityAnnouncer.announce;
        intl = selectionActionComponent(selectedCount[10]).intl;
        announceResult = announce(intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]));
        return;
      }
    }
    tmp14 = cResult[6];
  }
  const tmpResult = tmp(selectedCount[23]);
  const stateFromStores = tmpResult.useStateFromStores(tmp13, tmp14);
  if (cResult[7] !== channelId) {
    class X {
      constructor() {
        AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
        announce = AccessibilityAnnouncer.announce;
        intl = selectionActionComponent(selectedCount[10]).intl;
        announceResult = announce(intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]));
        return;
      }
    }
    let channel = skipIcon.getChannel(channelId);
    class G {
      constructor() {
        return renderDescription.getChannelId();
      }
    }
    cResult[8] = channel;
  } else {
    class X {
      constructor() {
        AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
        announce = AccessibilityAnnouncer.announce;
        intl = selectionActionComponent(selectedCount[10]).intl;
        announceResult = announce(intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]));
        return;
      }
    }
  }
  channel = tmp16;
  if (cResult[9] === tmp16) {
    class X {
      constructor() {
        AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
        announce = AccessibilityAnnouncer.announce;
        intl = selectionActionComponent(selectedCount[10]).intl;
        announceResult = announce(intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]));
        return;
      }
    }
  }
  class U {
    constructor() {
      obj = closure_15;
      isGuildVoiceResult = undefined;
      if (closure_15 != null) {
        isGuildVoiceResult = obj.isGuildVoice();
      }
      if (!isGuildVoiceResult) {
        tmp2 = channelId;
        isGuildVoiceResult = null == channelId;
      }
      if (!isGuildVoiceResult) {
        tmp3 = closure_14;
        tmp4 = channelId;
        isGuildVoiceResult = closure_14 === channelId;
      }
      if (!isGuildVoiceResult) {
        tmp5 = closure_1;
        tmp6 = closure_2;
        obj2 = closure_1(closure_2[24]);
        hideActionSheetResult = obj2.hideActionSheet();
      }
      return;
    }
  }
  const items2 = [stateFromStores, channelId, tmp16];
  cResult[9] = tmp16;
  cResult[10] = channelId;
  cResult[11] = stateFromStores;
  cResult[12] = items2;
  cResult[13] = U;
}) : ((selectionActionComponent) => {
  let BottomSheetFlatList;
  let expanded;
  let iconContainerStyle;
  let labelComponent;
  let obj3;
  let obj4;
  let obj5;
  let onQueryChange;
  let onRemoveOptionItem;
  let renderHeaderIcon;
  let selectedOptions;
  let str;
  let submitSelection;
  let tmp13;
  let tmp14;
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const onPressOptionItem = selectionActionComponent.onPressOptionItem;
  const selectedCount = selectionActionComponent.selectedCount;
  const renderIcon = selectionActionComponent.renderIcon;
  ({ renderHeaderIcon, iconContainerStyle } = selectionActionComponent);
  const skipIcon = selectionActionComponent.skipIcon;
  const renderDescription = selectionActionComponent.renderDescription;
  const renderOptionSuffix = selectionActionComponent.renderOptionSuffix;
  const options = selectionActionComponent.options;
  const itemStyle = selectionActionComponent.itemStyle;
  const isSelected = selectionActionComponent.isSelected;
  const itemAccessibilityLabel = selectionActionComponent.itemAccessibilityLabel;
  const channelId = selectionActionComponent.channelId;
  const allowEmpty = selectionActionComponent.allowEmpty;
  let tmp = onPressOptionItem;
  ({ labelComponent, selectedOptions, onQueryChange, submitSelection, expanded, onRemoveOptionItem } = selectionActionComponent);
  const insets = onPressOptionItem(selectedCount[18])({ isKeyboardAwareOnAndroid: false }).insets;
  const effect = renderIcon.useEffect(() => {
    const AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = selectionActionComponent(selectedCount[10]).intl;
    announce(intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]));
  }, []);
  const memo = renderIcon.useMemo(() => {
    const obj = selectionActionComponent(selectedCount[20]);
    const safeAreaInsets = obj.getSafeAreaInsets();
    const obj2 = selectionActionComponent(selectedCount[21]);
    return renderOptionSuffix * (obj2.getWindowDimensions().height - selectionActionComponent(selectedCount[22]).NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top);
  }, []);
  let tmp5 = selectionActionComponent;
  let obj = selectionActionComponent(selectedCount[23]);
  const items = [renderDescription];
  const stateFromStores = obj.useStateFromStores(items, () => renderDescription.getChannelId());
  const channel = skipIcon.getChannel(channelId);
  const items1 = [stateFromStores, channelId, channel];
  const effect1 = renderIcon.useEffect(() => {
    let isGuildVoiceResult;
    if (channel != null) {
      isGuildVoiceResult = channel.isGuildVoice();
    }
    if (!isGuildVoiceResult) {
      isGuildVoiceResult = null == channelId;
    }
    if (!isGuildVoiceResult) {
      isGuildVoiceResult = stateFromStores === channelId;
    }
    if (!isGuildVoiceResult) {
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  }, items1);
  const items2 = [selectionActionComponent];
  const memo1 = renderIcon.useMemo(() => selectionActionComponent.maxValues > 1, items2);
  const items3 = [isSelected, memo1, allowEmpty, selectionActionComponent.maxValues, itemStyle, selectedCount, options.length, onPressOptionItem, renderIcon, iconContainerStyle, skipIcon, renderDescription, renderOptionSuffix, itemAccessibilityLabel];
  const callback = renderIcon.useCallback((arg0) => {
    let index;
    let item;
    let tmp5;
    let tmp6;
    ({ item, index } = arg0);
    const tmp = isSelected(item, index);
    const obj = { itemStyle, item, index, start: 0 === index, end: index === options.length - 1, clearable: tmp5, selected: tmp, disabled: tmp6, onPressOptionItem, iconContainerStyle, skipIcon, renderDescription, renderIcon, renderOptionSuffix, itemAccessibilityLabel, multi: memo1 };
    tmp6 = memo1 && selectedCount >= selectionActionComponent.maxValues && !tmp;
    tmp5 = memo1 || allowEmpty;
    if (!tmp6) {
      tmp6 = !memo1 && tmp && !allowEmpty;
      const tmp9 = !memo1 && tmp && !allowEmpty;
    }
    return metroImportAll(closure_13, obj);
  }, items3);
  let obj2 = { scrollable: true, ref: renderIcon.useRef(null), startHeight: memo, startExpanded: expanded, header: options(tmp13, obj3), children: options(BottomSheetFlatList, obj4) };
  obj3 = { selectionActionComponent, labelComponent, selectButtonDisabled: tmp14, selectedOptions, submitSelection, onQueryChange, onPressOptionItem, onRemoveOptionItem, renderIcon: renderHeaderIcon };
  tmp14 = selectedCount > selectionActionComponent.maxValues;
  renderIcon.useRef(null);
  BottomSheet = selectionActionComponent(selectedCount[26]).BottomSheet;
  tmp13 = channelId;
  if (!tmp14) {
    let tmp15;
    if (0 === selectedCount) {
      tmp15 = !allowEmpty;
    } else {
      tmp15 = selectedCount < selectionActionComponent.minValues;
    }
    tmp14 = tmp15;
  }
  if (renderHeaderIcon == null) {
    renderHeaderIcon = renderIcon;
  }
  obj4 = {
    keyExtractor(arg0, arg1) {
      return "" + arg1;
    },
    data: options,
    renderItem: callback,
    contentContainerStyle: obj5,
    keyboardShouldPersistTaps: "always",
    accessibilityRole: str
  };
  obj5 = { paddingHorizontal: tmp(selectedCount[7]).space.PX_16, paddingBottom: tmp(selectedCount[7]).space.PX_16 + insets.bottom };
  BottomSheetFlatList = tmp5(tmp2[25]).BottomSheetFlatList;
  str = "radiogroup";
  if (memo1) {
    str = "none";
  }
  return options(BottomSheet, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/interaction_components/native/components/SelectComponentActionSheet.tsx");

export default tmp4;