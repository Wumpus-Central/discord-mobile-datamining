// === Module 11965: SelectComponentActionSheet ===

// Module 11965 (SelectComponentActionSheet)
import nativeDefault from "native" /* 576 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4356 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import TableRow from "TableRow" /* 5691 */;
import FormCheckbox from "FormCheckbox" /* 5703 */;
import CheckmarkSmallBoldIcon from "CheckmarkSmallBoldIcon" /* 9582 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;

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
        const obj = { id: id.value, text: id.label, icon: null };
        const obj2 = { style: closure_1_5.tagListIconWrapper, children: closure_2_8(onQueryChange, { style: closure_1_5.tagListIcon, children: renderIcon(id) }) };
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
    const intl = tmp6(1115).intl;
    label = intl.string(tmp6(1115).t.Otr6W2);
  }
  let obj = { title: label, subtitle: null, trailing: null };
  let formatToPlainStringResult;
  if (selectionActionComponent.maxValues > 1) {
    if (selectionActionComponent.minValues > 0) {
      const intl2 = tmp6(1115).intl;
      let obj2 = { count: selectionActionComponent.minValues };
      formatToPlainStringResult = intl2.formatToPlainString(tmp6(1115).t.Jmwzdx, obj2);
    }
  }
  obj.subtitle = formatToPlainStringResult;
  let tmp5Result;
  if (selectionActionComponent.maxValues > 1) {
    let str = "primary";
    if (selectButtonDisabled) {
      str = "secondary";
    }
    const obj3 = { size: "sm", variant: str, disabled: selectButtonDisabled, onPress: renderIcon.submitSelection, text: null };
    const intl3 = tmp6(1115).intl;
    obj3.text = intl3.string(tmp6(1115).t.XqMe3N);
    tmp5Result = closure_8(tmp6(5060).Button, obj3);
  }
  obj.trailing = tmp5Result;
  const children = [closure_8(renderIcon(7259).BottomSheetTitleHeader, obj), ];
  let tmp5Result4 = null;
  if (null != onQueryChange) {
    tmp5Result4 = null;
    if (null != memo) {
      const obj4 = { inActionSheet: true, style: tmp.textInputWrapper, icon: null, tags: null, onRemove: null, onChangeText: null };
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
      tmp5Result4 = closure_8(selectedOptions(9895), obj4);
      const tmp13 = selectedOptions(9895);
    }
  }
  children[1] = tmp5Result4;
  return closure_10(closure_9, { children });
}
function SelectionOptionItem(item) {
  item = item.item;
  ({ onPressOptionItem: importDefault, selected, disabled, index: dependencyMap, itemAccessibilityLabel, renderDescription, renderOptionSuffix } = item);
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
  const obj2 = { accessibilityRole: radioA11yNative.accessibilityRole, accessibilityLabel: null, accessibilityState: null, start: null, end: null, disabled: null, icon: null, label: null, labelLineClamp: 1, subLabel: null, subLabelLineClamp: 1, onPress: null, trailing: null };
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
    tmp6Result = React6(View, obj3);
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
  const items1 = [renderOptionSuffixResult, ];
  if (clearable) {
    if (!selected) {
      selected = false;
    }
    const obj5 = { checked: selected };
    let tmp6Result2 = React6(FormCheckbox.FormCheckbox, obj5);
  } else {
    tmp6Result2 = null;
    if (true === selected) {
      tmp6Result2 = React6(CheckmarkSmallBoldIcon.CheckmarkSmallBoldIcon, { color: "text-brand" });
    }
  }
  items1[1] = tmp6Result2;
  obj4.children = items1;
  obj2.trailing = closure_1_10(View, obj4);
  return React6(TableRow.TableRow, obj2);
}
const View = fn(17).View;
let closure_7 = fn(7261).ACTION_SHEET_START_HEIGHT_RATIO;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { selectionOptionItemIconWrapper: { width: nativeDefault.space.PX_32, alignItems: "center" }, tagListIconWrapper: null, tagListIcon: null, textInputWrapper: null };
let size = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj2.tagListIconWrapper = size;
const rect = { transform: null, top: -nativeDefault.space.PX_4, left: -nativeDefault.space.PX_4 };
let items = [{ scale: 0.75 }];
rect.transform = items;
obj2.tagListIcon = rect;
let obj3 = { width: nativeDefault.space.PX_32, alignItems: "center" };
obj2.textInputWrapper = { paddingHorizontal: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
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
  const items = [renderDescription];
  const stateFromStores = selectionActionComponent(selectedCount[21]).useStateFromStores(items, () => renderDescription.getChannelId());
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
  let obj = selectionActionComponent(selectedCount[21]);
  let tmp5 = selectionActionComponent;
  let obj2 = { scrollable: true, ref: renderIcon.useRef(null), startHeight: memo, startExpanded: expanded, header: null, children: null };
  const obj3 = { selectionActionComponent, labelComponent, selectButtonDisabled: null, selectedOptions: null, submitSelection: null, onQueryChange: null, onPressOptionItem: null, onRemoveOptionItem: null, renderIcon: null };
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
      accessibilityRole: null
    };
    const obj5 = { paddingHorizontal: tmp(tmp2[7]).space.PX_16, paddingBottom: tmp(tmp2[7]).space.PX_16 + onPressOptionItem(selectedCount[16])({ isKeyboardAwareOnAndroid: false }).insets.bottom };
    obj4.contentContainerStyle = obj5;
    let str = "radiogroup";
    if (memo1) {
      str = "none";
    }
    obj4.accessibilityRole = str;
    obj2.children = tmp12(tmp5(tmp2[24]).BottomSheetFlatList, obj4);
    return tmp12(tmp13, obj2);
  } else if (0 === selectedCount) {
    let tmp16 = !allowEmpty;
  } else {
    tmp16 = selectedCount < selectionActionComponent.minValues;
  }
};