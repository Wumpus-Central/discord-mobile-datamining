// discord_app/modules/interaction_components/native/components/SelectComponentActionSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import FormCheckbox from "../../../../design/components/Forms/native/FormCheckbox.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import CheckmarkSmallBoldIcon from "../../../../design/components/Icon/native/redesign/generated/CheckmarkSmallBoldIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";

require = fn;
const View = fn(17).View;
let closure_7 = fn(6653).ACTION_SHEET_START_HEIGHT_RATIO;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  selectionOptionItemIconWrapper: { width: nativeDefault.space.PX_32, alignItems: "center" },
  tagListIconWrapper: null,
  tagListIcon: null,
  textInputWrapper: null,
};
let size = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj2.tagListIconWrapper = size;
const rect = { transform: null, top: -nativeDefault.space.PX_4, left: -nativeDefault.space.PX_4 };
let items = [{ scale: 0.75 }];
rect.transform = items;
obj2.tagListIcon = rect;
let obj3 = { width: nativeDefault.space.PX_32, alignItems: "center" };
obj2.textInputWrapper = {
  paddingHorizontal: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_16,
  marginHorizontal: nativeDefault.space.PX_16,
};
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (renderIcon) => {
      const cResult = renderIcon(onPressOptionItem[9]).c(29);
      renderIcon = renderIcon.renderIcon;
      ({ selectionActionComponent, labelComponent, selectButtonDisabled, selectedOptions } = renderIcon);
      ({ submitSelection, onPressOptionItem } = renderIcon);
      const onRemoveOptionItem = renderIcon.onRemoveOptionItem;
      const onQueryChange = renderIcon.onQueryChange;
      const tmp4 = closure_11();
      closure_5 = tmp4;
      onRemoveOptionItem.useRef(null);
      if (cResult[0] === renderIcon) {
        if (cResult[1] === selectedOptions) {
          if (cResult[2] === tmp4) {
            let arr = cResult[3];
          }
          let label;
          if (labelComponent != null) {
            label = labelComponent.label;
          }
          if (cResult[4] === label) {
            if (cResult[5] === selectionActionComponent.placeholder) {
              let tmp7 = cResult[6];
            }
            if (cResult[7] === tmp5) {
              if (cResult[8] === selectionActionComponent.minValues) {
                let tmp10 = cResult[9];
              }
              if (cResult[10] === tmp5) {
                if (cResult[11] === selectButtonDisabled) {
                  if (cResult[12] === submitSelection) {
                    let tmp12 = cResult[13];
                  }
                  if (cResult[14] === tmp7) {
                    if (cResult[15] === tmp10) {
                      if (cResult[16] === tmp12) {
                        let tmp15 = cResult[17];
                      }
                      if (cResult[18] === tmp5) {
                        if (cResult[19] === onPressOptionItem) {
                          if (cResult[20] === onQueryChange) {
                            if (cResult[21] === onRemoveOptionItem) {
                              if (cResult[22] === selectedOptions) {
                                if (cResult[23] === tmp4) {
                                  if (cResult[24] === arr) {
                                    let tmp18 = cResult[25];
                                  }
                                  if (cResult[26] === tmp15) {
                                    if (cResult[27] === tmp18) {
                                      let tmp25 = cResult[28];
                                    }
                                    return tmp25;
                                  }
                                  let obj2 = { children: null };
                                  const items = [tmp15, tmp18];
                                  obj2.children = items;
                                  const tmp28 = closure_10(closure_9, obj2);
                                  cResult[26] = tmp15;
                                  cResult[27] = tmp18;
                                  cResult[28] = tmp28;
                                  tmp25 = tmp28;
                                }
                              }
                            }
                          }
                        }
                      }
                      let tmp20Result2 = null;
                      if (null != onQueryChange) {
                        tmp20Result2 = null;
                        if (null != arr) {
                          const obj3 = {
                            inActionSheet: true,
                            style: tmp4.textInputWrapper,
                            icon: null,
                            tags: null,
                            onRemove: null,
                            onChangeText: null,
                          };
                          let tmp20Result;
                          if (tmp5) {
                            if (0 !== arr.length) {
                              tmp20Result = closure_8(onQueryChange, {});
                            }
                          }
                          obj3.icon = tmp20Result;
                          obj3.tags = arr;
                          obj3.onRemove = function onRemove(arg0) {
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
                          };
                          obj3.onChangeText = function onChangeText(arg0) {
                            const current = ref.current;
                            if (current != null) {
                              current.scrollTo({ y: 0, animated: false });
                            }
                            onQueryChange(arg0);
                          };
                          tmp20Result2 = closure_8(selectedOptions(onPressOptionItem[13]), obj3);
                          const tmp22 = selectedOptions(onPressOptionItem[13]);
                        }
                      }
                      cResult[18] = tmp5;
                      cResult[19] = onPressOptionItem;
                      cResult[20] = onQueryChange;
                      cResult[21] = onRemoveOptionItem;
                      cResult[22] = selectedOptions;
                      cResult[23] = tmp4;
                      cResult[24] = arr;
                      cResult[25] = tmp20Result2;
                      tmp18 = tmp20Result2;
                    }
                  }
                  const obj4 = { title: tmp7, subtitle: tmp10, trailing: tmp12 };
                  const tmp17 = closure_8(tmp(onPressOptionItem[12]).BottomSheetTitleHeader, obj4);
                  cResult[14] = tmp7;
                  cResult[15] = tmp10;
                  cResult[16] = tmp12;
                  cResult[17] = tmp17;
                  tmp15 = tmp17;
                }
              }
              let tmp14Result;
              if (tmp5) {
                let str = "primary";
                if (selectButtonDisabled) {
                  str = "secondary";
                }
                const obj5 = {
                  size: "sm",
                  variant: str,
                  disabled: selectButtonDisabled,
                  onPress: submitSelection,
                  text: null,
                };
                const intl3 = tmp(onPressOptionItem[10]).intl;
                obj5.text = intl3.string(tmp(onPressOptionItem[10]).t.XqMe3N);
                tmp14Result = closure_8(tmp(onPressOptionItem[11]).Button, obj5);
              }
              cResult[10] = tmp5;
              cResult[11] = selectButtonDisabled;
              cResult[12] = submitSelection;
              cResult[13] = tmp14Result;
              tmp12 = tmp14Result;
            }
            let formatToPlainStringResult;
            if (tmp5) {
              if (selectionActionComponent.minValues > 0) {
                const intl2 = tmp(onPressOptionItem[10]).intl;
                const obj6 = { count: selectionActionComponent.minValues };
                formatToPlainStringResult = intl2.formatToPlainString(tmp(onPressOptionItem[10]).t.Jmwzdx, obj6);
              }
            }
            cResult[7] = tmp5;
            cResult[8] = selectionActionComponent.minValues;
            cResult[9] = formatToPlainStringResult;
            tmp10 = formatToPlainStringResult;
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
          tmp7 = label1;
        }
      }
      let mapped;
      if (selectedOptions != null) {
        mapped = selectedOptions.map((id) => {
          const obj = { id: id.value, text: id.label, icon: null };
          const obj2 = {
            style: closure_5.tagListIconWrapper,
            children: closure_2_8(View, { style: closure_5.tagListIcon, children: renderIcon(id) }),
          };
          obj.icon = closure_2_8(View, obj2);
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
      let obj = renderIcon(onPressOptionItem[9]);
    }
  : (renderIcon) => {
      renderIcon = renderIcon.renderIcon;
      ({ selectionActionComponent, labelComponent, selectButtonDisabled, selectedOptions } = renderIcon);
      ({ onPressOptionItem: dependencyMap, onRemoveOptionItem: noop, onQueryChange } = renderIcon);
      let tmp = closure_11();
      closure_5 = tmp;
      noop.useRef(null);
      const items = [selectedOptions, tmp, renderIcon];
      const memo = noop.useMemo(() => {
        let mapped;
        if (selectedOptions != null) {
          mapped = selectedOptions.map((id) => {
            const obj = { id: id.value, text: id.label, icon: null };
            const obj2 = {
              style: closure_1_5.tagListIconWrapper,
              children: closure_2_8(onQueryChange, { style: closure_1_5.tagListIcon, children: renderIcon(id) }),
            };
            obj.icon = closure_2_8(onQueryChange, obj2);
            return obj;
          });
        }
        if (mapped == null) {
          mapped = [];
        }
        return mapped;
      }, items);
      let label;
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
      let obj = { title: label, subtitle: null, trailing: null };
      let formatToPlainStringResult;
      if (selectionActionComponent.maxValues > 1) {
        if (selectionActionComponent.minValues > 0) {
          const intl2 = tmp6(1126).intl;
          let obj2 = { count: selectionActionComponent.minValues };
          formatToPlainStringResult = intl2.formatToPlainString(tmp6(1126).t.Jmwzdx, obj2);
        }
      }
      obj.subtitle = formatToPlainStringResult;
      let tmp5Result;
      if (selectionActionComponent.maxValues > 1) {
        let str = "primary";
        if (selectButtonDisabled) {
          str = "secondary";
        }
        const obj3 = {
          size: "sm",
          variant: str,
          disabled: selectButtonDisabled,
          onPress: renderIcon.submitSelection,
          text: null,
        };
        const intl3 = tmp6(1126).intl;
        obj3.text = intl3.string(tmp6(1126).t.XqMe3N);
        tmp5Result = closure_8(tmp6(5601).Button, obj3);
      }
      obj.trailing = tmp5Result;
      const children = [closure_8(renderIcon(6651).BottomSheetTitleHeader, obj)];
      let tmp5Result4 = null;
      if (null != onQueryChange) {
        tmp5Result4 = null;
        if (null != memo) {
          const obj4 = {
            inActionSheet: true,
            style: tmp.textInputWrapper,
            icon: null,
            tags: null,
            onRemove: null,
            onChangeText: null,
          };
          let tmp5Result3;
          if (tmp2) {
            if (0 !== memo.length) {
              tmp5Result3 = closure_8(onQueryChange, {});
            }
          }
          obj4.icon = tmp5Result3;
          obj4.tags = memo;
          obj4.onRemove = function onRemove(arg0) {
            let tmp;
            if (selectedOptions != null) {
              tmp = selectedOptions[arg0];
            }
            if (null != tmp) {
              let tmp2 = noop;
              if (null == noop) {
                tmp2 = dependencyMap;
              }
              tmp2(arg0, tmp);
            }
          };
          obj4.onChangeText = function onChangeText(arg0) {
            const current = ref.current;
            if (current != null) {
              current.scrollTo({ y: 0, animated: false });
            }
            onQueryChange(arg0);
          };
          tmp5Result4 = closure_8(selectedOptions(9270), obj4);
          const tmp13 = selectedOptions(9270);
        }
      }
      children[1] = tmp5Result4;
      return closure_10(closure_9, { children });
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (item) => {
      const cResult = c.c(44);
      item = item.item;
      const onPressOptionItem = item.onPressOptionItem;
      ({ clearable, selected, disabled, index } = item);
      ({
        start,
        end,
        iconContainerStyle,
        itemAccessibilityLabel,
        skipIcon,
        renderDescription,
        renderIcon,
        renderOptionSuffix,
      } = item);
      const tmp4 = closure_11();
      let flag = selected;
      if (selected == null) {
        flag = false;
      }
      if (cResult[0] === disabled) {
        if (cResult[1] === flag) {
          let tmp5 = cResult[2];
        }
        let flag2 = selected;
        const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative(tmp5);
        if (selected == null) {
          flag2 = false;
        }
        if (cResult[3] === disabled) {
          if (cResult[4] === flag2) {
            let tmp7 = cResult[5];
          }
          let radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp7);
          if (item.multi) {
            radioA11yNative = checkboxA11yNative;
          }
          if (cResult[6] === item) {
            if (cResult[7] === itemAccessibilityLabel) {
              let tmp9 = cResult[8];
            }
            if (cResult[9] === iconContainerStyle) {
              if (cResult[10] === item) {
                if (cResult[11] === renderIcon) {
                  if (cResult[12] === skipIcon) {
                    if (cResult[13] === tmp4) {
                      let tmp11 = cResult[14];
                    }
                    if (cResult[15] === item) {
                      if (cResult[16] === renderDescription) {
                        let tmp16 = cResult[17];
                      }
                      if (cResult[18] === index) {
                        if (cResult[19] === item) {
                          if (cResult[20] === onPressOptionItem) {
                            let tmp18 = cResult[21];
                          }
                          class D {
                            constructor() {
                              return onPressOptionItem(index, item);
                            }
                          }
                          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                            class D {
                              constructor() {
                                return onPressOptionItem(index, item);
                              }
                            }
                            let tmp20 = { flexDirection: "row" };
                            const obj2 = { flexDirection: "row" };
                          } else {
                            tmp20 = cResult[22];
                          }
                          if (cResult[23] === item) {
                            if (cResult[24] === renderOptionSuffix) {
                              let tmp21 = cResult[25];
                            }
                            if (cResult[26] === clearable) {
                              if (cResult[27] === selected) {
                                if (cResult[29] === tmp21) {
                                  if (cResult[30] === tmp23) {
                                    let tmp26 = cResult[31];
                                  }
                                  if (cResult[32] === radioA11yNative.accessibilityRole) {
                                    if (cResult[33] === radioA11yNative.accessibilityState) {
                                      if (cResult[34] === disabled) {
                                        if (cResult[35] === end) {
                                          if (cResult[36] === item.label) {
                                            if (cResult[37] === start) {
                                              if (cResult[38] === tmp26) {
                                                if (cResult[39] === tmp9) {
                                                  if (cResult[40] === tmp11) {
                                                    if (cResult[41] === tmp16) {
                                                      if (cResult[42] === tmp18) {
                                                        let tmp29 = cResult[43];
                                                      }
                                                      return tmp29;
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
                                  const obj3 = {
                                    accessibilityRole: radioA11yNative.accessibilityRole,
                                    accessibilityLabel: tmp9,
                                    accessibilityState: radioA11yNative.accessibilityState,
                                    start,
                                    end,
                                    disabled,
                                    icon: tmp11,
                                    label: item.label,
                                    labelLineClamp: 1,
                                    subLabel: tmp16,
                                    subLabelLineClamp: 1,
                                    onPress: tmp18,
                                    trailing: tmp26,
                                  };
                                  const tmp30 = closure_1_8(TableRow.TableRow, obj3);
                                  cResult[32] = radioA11yNative.accessibilityRole;
                                  cResult[33] = radioA11yNative.accessibilityState;
                                  cResult[34] = disabled;
                                  cResult[35] = end;
                                  cResult[36] = item.label;
                                  cResult[37] = start;
                                  cResult[38] = tmp26;
                                  cResult[39] = tmp9;
                                  cResult[40] = tmp11;
                                  cResult[41] = tmp16;
                                  cResult[42] = tmp18;
                                  cResult[43] = tmp30;
                                  tmp29 = tmp30;
                                }
                                class D {
                                  constructor() {
                                    return onPressOptionItem(index, item);
                                  }
                                }
                                const obj4 = { style: tmp20, children: null };
                                const items = [tmp21, cResult[28]];
                                obj4.children = items;
                                const tmp28 = v65535(View, obj4);
                                cResult[29] = tmp21;
                                cResult[30] = cResult[28];
                                cResult[31] = tmp28;
                                tmp26 = tmp28;
                              }
                            }
                            class D {
                              constructor() {
                                return onPressOptionItem(index, item);
                              }
                            }
                            cResult[26] = clearable;
                            cResult[27] = selected;
                            cResult[28] = tmp24;
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
                      const renderDescriptionResult = renderDescription(item);
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
              const tmp12 = closure_1_8(View, tmp15);
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
          const tmpResult2 = useA11yRolesNative;
        }
        const obj5 = { selected: flag2, disabled };
        cResult[3] = disabled;
        cResult[4] = flag2;
        cResult[5] = obj5;
        tmp7 = obj5;
        const tmpResult = useA11yRolesNative;
      }
      const obj6 = { checked: flag, disabled };
      cResult[0] = disabled;
      cResult[1] = flag;
      cResult[2] = obj6;
      tmp5 = obj6;
    }
  : (item) => {
      item = item.item;
      ({
        onPressOptionItem: importDefault,
        selected,
        disabled,
        index: dependencyMap,
        itemAccessibilityLabel,
        renderDescription,
        renderOptionSuffix,
      } = item);
      ({ clearable, start, end, iconContainerStyle, skipIcon, multi, renderIcon } = item);
      const tmp = closure_11();
      let flag = selected;
      if (selected == null) {
        flag = false;
      }
      const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked: flag, disabled });
      let flag2 = selected;
      if (selected == null) {
        flag2 = false;
      }
      let radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: flag2, disabled });
      if (multi) {
        radioA11yNative = checkboxA11yNative;
      }
      const obj2 = {
        accessibilityRole: radioA11yNative.accessibilityRole,
        accessibilityLabel: null,
        accessibilityState: null,
        start: null,
        end: null,
        disabled: null,
        icon: null,
        label: null,
        labelLineClamp: 1,
        subLabel: null,
        subLabelLineClamp: 1,
        onPress: null,
        trailing: null,
      };
      let result;
      if (itemAccessibilityLabel != null) {
        result = itemAccessibilityLabel(item);
      }
      obj2.accessibilityLabel = result;
      obj2.accessibilityState = radioA11yNative.accessibilityState;
      obj2.start = start;
      obj2.end = end;
      obj2.disabled = disabled;
      let tmp6Result = null;
      if (!skipIcon) {
        const obj3 = { style: null, children: null };
        const items = [tmp.selectionOptionItemIconWrapper, iconContainerStyle];
        obj3.style = items;
        obj3.children = renderIcon(item);
        tmp6Result = closure_1_8(View, obj3);
      }
      obj2.icon = tmp6Result;
      obj2.label = item.label;
      let renderDescriptionResult;
      if (renderDescription != null) {
        renderDescriptionResult = renderDescription(item);
      }
      obj2.subLabel = renderDescriptionResult;
      obj2.onPress = function onPress() {
        return importDefault(dependencyMap, item);
      };
      const obj4 = { style: { flexDirection: "row" }, children: null };
      let renderOptionSuffixResult;
      if (renderOptionSuffix != null) {
        renderOptionSuffixResult = renderOptionSuffix(item);
      }
      const items1 = [renderOptionSuffixResult];
      if (clearable) {
        if (!selected) {
          selected = false;
        }
        const obj5 = { checked: selected };
        let tmp6Result2 = closure_1_8(FormCheckbox.FormCheckbox, obj5);
      } else {
        tmp6Result2 = null;
        if (true === selected) {
          tmp6Result2 = closure_1_8(CheckmarkSmallBoldIcon.CheckmarkSmallBoldIcon, { color: "text-brand" });
        }
      }
      items1[1] = tmp6Result2;
      obj4.children = items1;
      obj2.trailing = v65535(View, obj4);
      return closure_1_8(TableRow.TableRow, obj2);
    };
ReactCompilerGating = fn(558);
let obj4 = {
  paddingHorizontal: nativeDefault.space.PX_4,
  marginTop: nativeDefault.space.PX_16,
  marginHorizontal: nativeDefault.space.PX_16,
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/interaction_components/native/components/SelectComponentActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (selectionActionComponent) => {
      const cResult = selectionActionComponent(selectedCount[9]).c(51);
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
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const insets = onPressOptionItem(selectedCount[18])(first).insets;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor() {
            AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
            intl = selectionActionComponent(selectedCount[10]).intl;
            announceResult = AccessibilityAnnouncer.announce(
              intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]),
            );
            return;
          }
        }
        const items = [];
        cResult[1] = X;
        cResult[2] = items;
        let tmp6 = items;
      } else {
        class X {
          constructor() {
            AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
            intl = selectionActionComponent(selectedCount[10]).intl;
            announceResult = AccessibilityAnnouncer.announce(
              intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]),
            );
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
            intl = selectionActionComponent(selectedCount[10]).intl;
            announceResult = AccessibilityAnnouncer.announce(
              intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]),
            );
            return;
          }
        }
        const safeAreaInsets = obj3.getSafeAreaInsets();
        cResult[3] = safeAreaInsets;
        const tmp8 = safeAreaInsets;
      } else {
        class X {
          constructor() {
            AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
            intl = selectionActionComponent(selectedCount[10]).intl;
            announceResult = AccessibilityAnnouncer.announce(
              intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]),
            );
            return;
          }
        }
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor() {
            AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
            intl = selectionActionComponent(selectedCount[10]).intl;
            announceResult = AccessibilityAnnouncer.announce(
              intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]),
            );
            return;
          }
        }
        const windowDimensions = obj4.getWindowDimensions();
        cResult[4] = windowDimensions;
        const tmp10 = windowDimensions;
      } else {
        class X {
          constructor() {
            AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
            intl = selectionActionComponent(selectedCount[10]).intl;
            announceResult = AccessibilityAnnouncer.announce(
              intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]),
            );
            return;
          }
        }
      }
      const diff = tmp10.height - tmp(selectedCount[22]).NAV_BAR_HEIGHT_MULTILINE - tmp8.top;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor() {
            AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
            intl = selectionActionComponent(selectedCount[10]).intl;
            announceResult = AccessibilityAnnouncer.announce(
              intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]),
            );
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
        let tmp14 = G;
        const tmp13 = items1;
      } else {
        class X {
          constructor() {
            AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
            intl = selectionActionComponent(selectedCount[10]).intl;
            announceResult = AccessibilityAnnouncer.announce(
              intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]),
            );
            return;
          }
        }
        tmp14 = cResult[6];
      }
      let obj = selectionActionComponent(selectedCount[9]);
      const stateFromStores = selectionActionComponent(selectedCount[23]).useStateFromStores(tmp13, tmp14);
      if (cResult[7] !== channelId) {
        class X {
          constructor() {
            AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
            intl = selectionActionComponent(selectedCount[10]).intl;
            announceResult = AccessibilityAnnouncer.announce(
              intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]),
            );
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
            intl = selectionActionComponent(selectedCount[10]).intl;
            announceResult = AccessibilityAnnouncer.announce(
              intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]),
            );
            return;
          }
        }
      }
      channel = tmp16;
      if (cResult[9] === tmp16) {
        class X {
          constructor() {
            AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
            intl = selectionActionComponent(selectedCount[10]).intl;
            announceResult = AccessibilityAnnouncer.announce(
              intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]),
            );
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
      const tmpResult = selectionActionComponent(selectedCount[23]);
    }
  : (selectionActionComponent) => {
      selectionActionComponent = selectionActionComponent.selectionActionComponent;
      const onPressOptionItem = selectionActionComponent.onPressOptionItem;
      const selectedCount = selectionActionComponent.selectedCount;
      const renderIcon = selectionActionComponent.renderIcon;
      ({ renderHeaderIcon, iconContainerStyle } = selectionActionComponent);
      const skipIcon = selectionActionComponent.skipIcon;
      const renderDescription = selectionActionComponent.renderDescription;
      const renderOptionSuffix = selectionActionComponent.renderOptionSuffix;
      options = selectionActionComponent.options;
      const itemStyle = selectionActionComponent.itemStyle;
      const isSelected = selectionActionComponent.isSelected;
      const itemAccessibilityLabel = selectionActionComponent.itemAccessibilityLabel;
      const channelId = selectionActionComponent.channelId;
      const allowEmpty = selectionActionComponent.allowEmpty;
      ({ labelComponent, selectedOptions, onQueryChange, submitSelection, expanded, onRemoveOptionItem } =
        selectionActionComponent);
      const effect = renderIcon.useEffect(() => {
        const AccessibilityAnnouncer = selectionActionComponent(selectedCount[19]).AccessibilityAnnouncer;
        const intl = selectionActionComponent(selectedCount[10]).intl;
        AccessibilityAnnouncer.announce(intl.string(selectionActionComponent(selectedCount[10]).t["7gxe9o"]));
      }, []);
      const memo = renderIcon.useMemo(() => {
        const safeAreaInsets = selectionActionComponent(selectedCount[20]).getSafeAreaInsets();
        const obj = selectionActionComponent(selectedCount[20]);
        return (
          renderOptionSuffix *
          (selectionActionComponent(selectedCount[21]).getWindowDimensions().height -
            selectionActionComponent(selectedCount[22]).NAV_BAR_HEIGHT_MULTILINE -
            safeAreaInsets.top)
        );
      }, []);
      const items = [renderDescription];
      const stateFromStores = selectionActionComponent(selectedCount[23]).useStateFromStores(items, () =>
        renderDescription.getChannelId(),
      );
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
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
      }, items1);
      const items2 = [selectionActionComponent];
      const memo1 = renderIcon.useMemo(() => selectionActionComponent.maxValues > 1, items2);
      const items3 = [
        isSelected,
        memo1,
        allowEmpty,
        selectionActionComponent.maxValues,
        itemStyle,
        selectedCount,
        options.length,
        onPressOptionItem,
        renderIcon,
        iconContainerStyle,
        skipIcon,
        renderDescription,
        renderOptionSuffix,
        itemAccessibilityLabel,
      ];
      const callback = renderIcon.useCallback((arg0) => {
        ({ item, index } = arg0);
        const tmp = isSelected(item, index);
        const obj = {
          itemStyle,
          item,
          index,
          start: 0 === index,
          end: index === options.length - 1,
          clearable: null,
          selected: null,
          disabled: null,
          onPressOptionItem: null,
          iconContainerStyle: null,
          skipIcon: null,
          renderDescription: null,
          renderIcon: null,
          renderOptionSuffix: null,
          itemAccessibilityLabel: null,
          multi: null,
        };
        let tmp5 = memo1;
        if (!memo1) {
          tmp5 = allowEmpty;
        }
        obj.clearable = tmp5;
        obj.selected = tmp;
        let tmp6 = memo1;
        if (memo1) {
          tmp6 = selectedCount >= selectionActionComponent.maxValues;
        }
        if (tmp6) {
          tmp6 = !tmp;
        }
        if (!tmp6) {
          let tmp9 = !memo1;
          if (!memo1) {
            tmp9 = tmp;
          }
          if (tmp9) {
            tmp9 = !allowEmpty;
          }
          tmp6 = tmp9;
        }
        obj.disabled = tmp6;
        obj.onPressOptionItem = onPressOptionItem;
        obj.iconContainerStyle = iconContainerStyle;
        obj.skipIcon = skipIcon;
        obj.renderDescription = renderDescription;
        obj.renderIcon = renderIcon;
        obj.renderOptionSuffix = renderOptionSuffix;
        obj.itemAccessibilityLabel = itemAccessibilityLabel;
        obj.multi = memo1;
        return closure_2_8(closure_13, obj);
      }, items3);
      let obj = selectionActionComponent(selectedCount[23]);
      let tmp5 = selectionActionComponent;
      let obj2 = {
        scrollable: true,
        ref: renderIcon.useRef(null),
        startHeight: memo,
        startExpanded: expanded,
        header: null,
        children: null,
      };
      const obj3 = {
        selectionActionComponent,
        labelComponent,
        selectButtonDisabled: null,
        selectedOptions: null,
        submitSelection: null,
        onQueryChange: null,
        onPressOptionItem: null,
        onRemoveOptionItem: null,
        renderIcon: null,
      };
      if (selectedCount > selectionActionComponent.maxValues) {
        obj3.selectButtonDisabled = tmp15;
        obj3.selectedOptions = selectedOptions;
        obj3.submitSelection = submitSelection;
        obj3.onQueryChange = onQueryChange;
        obj3.onPressOptionItem = onPressOptionItem;
        obj3.onRemoveOptionItem = onRemoveOptionItem;
        if (renderHeaderIcon == null) {
          renderHeaderIcon = renderIcon;
        }
        obj3.renderIcon = renderHeaderIcon;
        obj2.header = tmp12(tmp14, obj3);
        const obj4 = {
          keyExtractor(arg0, arg1) {
            return "" + arg1;
          },
          data: options,
          renderItem: callback,
          contentContainerStyle: null,
          keyboardShouldPersistTaps: "always",
          accessibilityRole: null,
        };
        const obj5 = {
          paddingHorizontal: tmp(tmp2[7]).space.PX_16,
          paddingBottom:
            tmp(tmp2[7]).space.PX_16 +
            onPressOptionItem(selectedCount[18])({ isKeyboardAwareOnAndroid: false }).insets.bottom,
        };
        obj4.contentContainerStyle = obj5;
        let str = "radiogroup";
        if (memo1) {
          str = "none";
        }
        obj4.accessibilityRole = str;
        obj2.children = tmp12(tmp5(tmp2[25]).BottomSheetFlatList, obj4);
        return tmp12(tmp13, obj2);
      } else if (0 === selectedCount) {
        let tmp16 = !allowEmpty;
      } else {
        tmp16 = selectedCount < selectionActionComponent.minValues;
      }
    };
