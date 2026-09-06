// === Module 11822: SelectComponentActionSheet ===

// Module 11822 (SelectComponentActionSheet)
import nativeDefault from "native" /* 576 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4277 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import TableRow from "TableRow" /* 5605 */;
import FormCheckbox from "FormCheckbox" /* 5617 */;
import CheckmarkSmallBoldIcon from "CheckmarkSmallBoldIcon" /* 9439 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
function SelectionHeader(renderIcon) {
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
        let obj = { id: id.value, text: id.label, icon: null };
        obj = { style: closure_1_5.tagListIconWrapper, children: null };
        obj = { style: closure_1_5.tagListIcon, children: renderIcon(id) };
        obj.children = closure_2_8(onQueryChange, obj);
        obj.icon = closure_2_8(onQueryChange, obj);
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
    const intl = tmp6(1114).intl;
    label = intl.string(tmp6(1114).t.Otr6W2);
  }
  let obj = { title: label, subtitle: null, trailing: null };
  let formatToPlainStringResult;
  if (selectionActionComponent.maxValues > 1) {
    if (selectionActionComponent.minValues > 0) {
      const intl2 = tmp6(1114).intl;
      obj = { count: selectionActionComponent.minValues };
      formatToPlainStringResult = intl2.formatToPlainString(tmp6(1114).t.Jmwzdx, obj);
    }
  }
  obj.subtitle = formatToPlainStringResult;
  let tmp5Result;
  if (selectionActionComponent.maxValues > 1) {
    let str = "primary";
    if (selectButtonDisabled) {
      str = "secondary";
    }
    obj = { size: "sm", variant: str, disabled: selectButtonDisabled, onPress: renderIcon.submitSelection, text: null };
    const intl3 = tmp6(1114).intl;
    obj.text = intl3.string(tmp6(1114).t.XqMe3N);
    tmp5Result = closure_8(tmp6(4975).Button, obj);
  }
  obj.trailing = tmp5Result;
  const children = [closure_8(renderIcon(7149).BottomSheetTitleHeader, obj), ];
  let tmp5Result1 = null;
  if (null != onQueryChange) {
    tmp5Result1 = null;
    if (null != memo) {
      const obj1 = { inActionSheet: true, style: tmp.textInputWrapper, icon: null, tags: null, onRemove: null, onChangeText: null };
      tmp5Result = undefined;
      if (tmp2) {
        if (0 !== memo.length) {
          tmp5Result = closure_8(onQueryChange, {});
        }
      }
      obj1.icon = tmp5Result;
      obj1.tags = memo;
      obj1.onRemove = function onRemove(arg0) {
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
      obj1.onChangeText = function onChangeText(arg0) {
        const current = ref.current;
        if (current != null) {
          current.scrollTo({ y: 0, animated: false });
        }
        onQueryChange(arg0);
      };
      tmp5Result1 = closure_8(selectedOptions(9755), obj1);
      const tmp13 = selectedOptions(9755);
    }
  }
  children[1] = tmp5Result1;
  return closure_10(closure_9, { children });
}
function SelectionOptionItem(item) {
  item = item.item;
  ({ onPressOptionItem: importDefault, selected, disabled, index: dependencyMap, itemAccessibilityLabel, renderDescription, renderOptionSuffix } = item);
  ({ clearable, start, end, iconContainerStyle, skipIcon, multi, renderIcon } = item);
  let obj = useA11yRolesNative;
  let flag = selected;
  if (selected == null) {
    flag = false;
  }
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: flag, disabled });
  const tmp = closure_11();
  let flag2 = selected;
  if (selected == null) {
    flag2 = false;
  }
  let radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: flag2, disabled });
  if (multi) {
    radioA11yNative = checkboxA11yNative;
  }
  obj = { accessibilityRole: radioA11yNative.accessibilityRole, accessibilityLabel: null, accessibilityState: null, start: null, end: null, disabled: null, icon: null, label: null, labelLineClamp: 1, subLabel: null, subLabelLineClamp: 1, onPress: null, trailing: null };
  let result;
  if (itemAccessibilityLabel != null) {
    result = itemAccessibilityLabel(item);
  }
  obj.accessibilityLabel = result;
  obj.accessibilityState = radioA11yNative.accessibilityState;
  obj.start = start;
  obj.end = end;
  obj.disabled = disabled;
  let tmp6Result = null;
  if (!skipIcon) {
    obj = { style: null, children: null };
    const items = [tmp.selectionOptionItemIconWrapper, iconContainerStyle];
    obj.style = items;
    obj.children = renderIcon(item);
    tmp6Result = React6(View, obj);
  }
  obj.icon = tmp6Result;
  obj.label = item.label;
  let renderDescriptionResult;
  if (renderDescription != null) {
    renderDescriptionResult = renderDescription(item);
  }
  obj.subLabel = renderDescriptionResult;
  obj.onPress = function onPress() {
    return importDefault(dependencyMap, item);
  };
  const obj1 = { style: { flexDirection: "row" }, children: null };
  let renderOptionSuffixResult;
  if (renderOptionSuffix != null) {
    renderOptionSuffixResult = renderOptionSuffix(item);
  }
  const items1 = [renderOptionSuffixResult, ];
  if (clearable) {
    if (!selected) {
      selected = false;
    }
    const obj2 = { checked: selected };
    tmp6Result = React6(FormCheckbox.FormCheckbox, obj2);
  } else {
    tmp6Result = null;
    if (true === selected) {
      tmp6Result = React6(CheckmarkSmallBoldIcon.CheckmarkSmallBoldIcon, { color: "text-brand" });
    }
  }
  items1[1] = tmp6Result;
  obj1.children = items1;
  obj.trailing = closure_1_10(View, obj1);
  return React6(TableRow.TableRow, obj);
}
const View = fn(17).View;
let closure_7 = fn(7151).ACTION_SHEET_START_HEIGHT_RATIO;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { selectionOptionItemIconWrapper: null, tagListIconWrapper: null, tagListIcon: null, textInputWrapper: null };
createStyles = { width: nativeDefault.space.PX_32, alignItems: "center" };
createStyles.selectionOptionItemIconWrapper = createStyles;
let size = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
createStyles.tagListIconWrapper = size;
const rect = { transform: null, top: -nativeDefault.space.PX_4, left: -nativeDefault.space.PX_4 };
let items = [{ scale: 0.75 }];
rect.transform = items;
createStyles.tagListIcon = rect;
createStyles.textInputWrapper = { paddingHorizontal: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/native/components/SelectComponentActionSheet.tsx");

export default function SelectComponentActionSheet(selectionActionComponent) {
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
  ({ labelComponent, selectedOptions, onQueryChange, submitSelection, expanded, onRemoveOptionItem } = selectionActionComponent);
  const effect = renderIcon.useEffect(() => {
    const AccessibilityAnnouncer = selectionActionComponent(selectedCount[17]).AccessibilityAnnouncer;
    const intl = selectionActionComponent(selectedCount[9]).intl;
    AccessibilityAnnouncer.announce(intl.string(selectionActionComponent(selectedCount[9]).t["7gxe9o"]));
  }, []);
  const memo = renderIcon.useMemo(() => {
    const safeAreaInsets = selectionActionComponent(selectedCount[18]).getSafeAreaInsets();
    const obj = selectionActionComponent(selectedCount[18]);
    return renderOptionSuffix * (selectionActionComponent(selectedCount[19]).getWindowDimensions().height - selectionActionComponent(selectedCount[20]).NAV_BAR_HEIGHT_MULTILINE - safeAreaInsets.top);
  }, []);
  let obj = selectionActionComponent(selectedCount[21]);
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
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items1);
  const items2 = [selectionActionComponent];
  const memo1 = renderIcon.useMemo(() => selectionActionComponent.maxValues > 1, items2);
  const items3 = [isSelected, memo1, allowEmpty, selectionActionComponent.maxValues, itemStyle, selectedCount, options.length, onPressOptionItem, renderIcon, iconContainerStyle, skipIcon, renderDescription, renderOptionSuffix, itemAccessibilityLabel];
  const callback = renderIcon.useCallback((arg0) => {
    ({ item, index } = arg0);
    const tmp = isSelected(item, index);
    const obj = { itemStyle, item, index, start: 0 === index, end: index === options.length - 1, clearable: null, selected: null, disabled: null, onPressOptionItem: null, iconContainerStyle: null, skipIcon: null, renderDescription: null, renderIcon: null, renderOptionSuffix: null, itemAccessibilityLabel: null, multi: null };
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
    return React6(SelectionOptionItem, obj);
  }, items3);
  obj = { scrollable: true, ref: renderIcon.useRef(null), startHeight: memo, startExpanded: expanded, header: null, children: null };
  obj = { selectionActionComponent, labelComponent, selectButtonDisabled: null, selectedOptions: null, submitSelection: null, onQueryChange: null, onPressOptionItem: null, onRemoveOptionItem: null, renderIcon: null };
  if (selectedCount > selectionActionComponent.maxValues) {
    obj.selectButtonDisabled = tmp15;
    obj.selectedOptions = selectedOptions;
    obj.submitSelection = submitSelection;
    obj.onQueryChange = onQueryChange;
    obj.onPressOptionItem = onPressOptionItem;
    obj.onRemoveOptionItem = onRemoveOptionItem;
    if (renderHeaderIcon == null) {
      renderHeaderIcon = renderIcon;
    }
    obj.renderIcon = renderHeaderIcon;
    obj.header = tmp12(tmp14, obj);
    const obj1 = {
      keyExtractor(arg0, arg1) {
          return "" + arg1;
        },
      data: options,
      renderItem: callback,
      contentContainerStyle: null,
      keyboardShouldPersistTaps: "always",
      accessibilityRole: null
    };
    let obj2 = { paddingHorizontal: tmp(tmp2[7]).space.PX_16, paddingBottom: tmp(tmp2[7]).space.PX_16 + onPressOptionItem(selectedCount[16])({ isKeyboardAwareOnAndroid: false }).insets.bottom };
    obj1.contentContainerStyle = obj2;
    let str = "radiogroup";
    if (memo1) {
      str = "none";
    }
    obj1.accessibilityRole = str;
    obj.children = tmp12(selectionActionComponent(tmp2[24]).BottomSheetFlatList, obj1);
    return tmp12(tmp13, obj);
  } else if (0 === selectedCount) {
    let tmp16 = !allowEmpty;
  } else {
    tmp16 = selectedCount < selectionActionComponent.minValues;
  }
};