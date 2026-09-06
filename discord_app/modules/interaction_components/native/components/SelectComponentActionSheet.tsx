// === Module 11822: SelectionHeader ===

// Module 11822 (SelectionHeader)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1957 */;
import closure_6 from "handleConnectionOpen" /* 2011 */;
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_7 } from "ACTION_SHEET_START_HEIGHT_RATIO" /* 7151 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
function SelectionHeader(renderIcon) {
  renderIcon = renderIcon.renderIcon;
  ({ selectionActionComponent, labelComponent, selectButtonDisabled, selectedOptions } = renderIcon);
  ({ onPressOptionItem: dependencyMap, onRemoveOptionItem: closure_3, onQueryChange } = renderIcon);
  closure_5 = undefined;
  closure_6 = undefined;
  let tmp = callback();
  closure_5 = tmp;
  closure_6 = React.useRef(null);
  const items = [selectedOptions, tmp, renderIcon];
  const memo = React.useMemo(() => {
    let mapped;
    if (selectedOptions != null) {
      mapped = selectedOptions.map((id) => {
        let obj = { id: id.value, text: id.label, icon: null };
        obj = { style: closure_5.tagListIconWrapper, children: null };
        obj = { style: closure_5.tagListIcon, children: callback(id) };
        obj[1] = closure_1_8(closure_1_4, obj);
        obj[2] = closure_1_8(closure_1_4, obj);
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
      obj = { count: null };
      obj[0] = selectionActionComponent.minValues;
      formatToPlainStringResult = intl2.formatToPlainString(tmp6(1114).t.Jmwzdx, obj);
    }
  }
  obj[1] = formatToPlainStringResult;
  let tmp5Result;
  if (selectionActionComponent.maxValues > 1) {
    let str = "primary";
    if (selectButtonDisabled) {
      str = "secondary";
    }
    obj = { size: "sm", variant: null, disabled: null, onPress: null, text: null };
    obj[1] = str;
    obj[2] = selectButtonDisabled;
    obj[3] = renderIcon.submitSelection;
    const intl3 = tmp6(1114).intl;
    obj[4] = intl3.string(tmp6(1114).t.XqMe3N);
    tmp5Result = tmp5(tmp6(4975).Button, obj);
  }
  obj[2] = tmp5Result;
  const children = [closure_8(renderIcon(7149).BottomSheetTitleHeader, obj), ];
  let tmp5Result1 = null;
  if (null != onQueryChange) {
    tmp5Result1 = null;
    if (null != memo) {
      obj1 = { inActionSheet: true, style: null, icon: null, tags: null, onRemove: null, onChangeText: null };
      obj1[1] = tmp.textInputWrapper;
      tmp5Result = undefined;
      if (tmp2) {
        if (0 !== memo.length) {
          tmp5Result = tmp5(onQueryChange, {});
        }
      }
      obj1[2] = tmp5Result;
      obj1[3] = memo;
      obj1[4] = function onRemove(arg0) {
        let tmp;
        if (selectedOptions != null) {
          tmp = selectedOptions[arg0];
        }
        if (null != tmp) {
          let tmp2 = closure_3;
          if (null == closure_3) {
            tmp2 = closure_2;
          }
          tmp2(arg0, tmp);
        }
      };
      obj1[5] = function onChangeText(arg0) {
        const current = ref.current;
        if (current != null) {
          current.scrollTo({ y: 0, animated: false });
        }
        onQueryChange(arg0);
      };
      tmp5Result1 = tmp5(selectedOptions(9755), obj1);
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
  let obj = item(4277);
  let flag = selected;
  if (selected == null) {
    flag = false;
  }
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: flag, disabled });
  const tmp = callback();
  let flag2 = selected;
  if (selected == null) {
    flag2 = false;
  }
  let radioA11yNative = item(4277).useRadioA11yNative({ selected: flag2, disabled });
  if (multi) {
    radioA11yNative = checkboxA11yNative;
  }
  obj = { accessibilityRole: radioA11yNative.accessibilityRole, accessibilityLabel: null, accessibilityState: null, start: null, end: null, disabled: null, icon: null, label: null, labelLineClamp: 1, subLabel: null, subLabelLineClamp: 1, onPress: null, trailing: null };
  let result;
  if (itemAccessibilityLabel != null) {
    result = itemAccessibilityLabel(item);
  }
  obj[1] = result;
  obj[2] = radioA11yNative.accessibilityState;
  obj[3] = start;
  obj[4] = end;
  obj[5] = disabled;
  let tmp6Result = null;
  if (!skipIcon) {
    obj = { style: null, children: null };
    const items = [tmp.selectionOptionItemIconWrapper, iconContainerStyle];
    obj[0] = items;
    obj[1] = renderIcon(item);
    tmp6Result = tmp6(View, obj);
  }
  obj[6] = tmp6Result;
  obj[7] = item.label;
  let renderDescriptionResult;
  if (renderDescription != null) {
    renderDescriptionResult = renderDescription(item);
  }
  obj[9] = renderDescriptionResult;
  obj[11] = function onPress() {
    return callback(closure_2, item);
  };
  obj1 = { style: { flexDirection: "row" }, children: null };
  let renderOptionSuffixResult;
  if (renderOptionSuffix != null) {
    renderOptionSuffixResult = renderOptionSuffix(item);
  }
  const items1 = [renderOptionSuffixResult, ];
  if (clearable) {
    if (!selected) {
      selected = false;
    }
    const obj2 = { checked: null };
    obj2[0] = selected;
    tmp6Result = tmp6(tmp2(5617).FormCheckbox, obj2);
  } else {
    tmp6Result = null;
    if (true === selected) {
      tmp6Result = tmp6(tmp2(9439).CheckmarkSmallBoldIcon, { color: "text-brand" });
    }
  }
  items1[1] = tmp6Result;
  obj1[1] = items1;
  obj[12] = closure_10(View, obj1);
  return closure_8(item(5605).TableRow, obj);
}
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { selectionOptionItemIconWrapper: null, tagListIconWrapper: null, tagListIcon: null, textInputWrapper: null };
createCacheKey = { width: ThemesDefault.space.PX_32, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: ThemesDefault.space.PX_16, height: ThemesDefault.space.PX_16 };
let obj1 = { width: ThemesDefault.space.PX_16, height: ThemesDefault.space.PX_16 };
let items = [{ scale: 0.75 }];
createCacheKey[2] = { transform: items, top: -ThemesDefault.space.PX_4, left: -ThemesDefault.space.PX_4 };
let obj2 = { transform: items, top: -ThemesDefault.space.PX_4, left: -ThemesDefault.space.PX_4 };
createCacheKey[3] = { paddingHorizontal: ThemesDefault.space.PX_4, marginTop: ThemesDefault.space.PX_16, marginHorizontal: ThemesDefault.space.PX_16 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const obj3 = { paddingHorizontal: ThemesDefault.space.PX_4, marginTop: ThemesDefault.space.PX_16, marginHorizontal: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/interaction_components/native/components/SelectComponentActionSheet.tsx");

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
  let stateFromStores;
  let channel;
  let memo1;
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
  stateFromStores = obj.useStateFromStores(items, () => renderDescription.getChannelId());
  channel = skipIcon.getChannel(channelId);
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
      onPressOptionItem(selectedCount[22]).hideActionSheet();
      const obj2 = onPressOptionItem(selectedCount[22]);
    }
  }, items1);
  const items2 = [selectionActionComponent];
  memo1 = renderIcon.useMemo(() => selectionActionComponent.maxValues > 1, items2);
  const items3 = [isSelected, memo1, allowEmpty, selectionActionComponent.maxValues, itemStyle, selectedCount, options.length, onPressOptionItem, renderIcon, iconContainerStyle, skipIcon, renderDescription, renderOptionSuffix, itemAccessibilityLabel];
  const callback = renderIcon.useCallback((arg0) => {
    ({ item, index } = arg0);
    const tmp = isSelected(item, index);
    const obj = { itemStyle, item, index, start: 0 === index, end: index === options.length - 1, clearable: null, selected: null, disabled: null, onPressOptionItem: null, iconContainerStyle: null, skipIcon: null, renderDescription: null, renderIcon: null, renderOptionSuffix: null, itemAccessibilityLabel: null, multi: null };
    let tmp5 = memo1;
    if (!memo1) {
      tmp5 = allowEmpty;
    }
    obj[5] = tmp5;
    obj[6] = tmp;
    let tmp6 = tmp4;
    if (memo1) {
      tmp6 = selectedCount >= selectionActionComponent.maxValues;
    }
    if (tmp6) {
      tmp6 = !tmp;
    }
    if (!tmp6) {
      let tmp9 = !tmp4;
      if (!tmp4) {
        tmp9 = tmp;
      }
      if (tmp9) {
        tmp9 = !allowEmpty;
      }
      tmp6 = tmp9;
    }
    obj[7] = tmp6;
    obj[8] = onPressOptionItem;
    obj[9] = iconContainerStyle;
    obj[10] = skipIcon;
    obj[11] = renderDescription;
    obj[12] = renderIcon;
    obj[13] = renderOptionSuffix;
    obj[14] = itemAccessibilityLabel;
    obj[15] = memo1;
    return options(allowEmpty, obj);
  }, items3);
  obj = { scrollable: true, ref: renderIcon.useRef(null), startHeight: memo, startExpanded: expanded, header: null, children: null };
  obj = { selectionActionComponent, labelComponent, selectButtonDisabled: null, selectedOptions: null, submitSelection: null, onQueryChange: null, onPressOptionItem: null, onRemoveOptionItem: null, renderIcon: null };
  if (selectedCount > selectionActionComponent.maxValues) {
    obj[2] = tmp15;
    obj[3] = selectedOptions;
    obj[4] = submitSelection;
    obj[5] = onQueryChange;
    obj[6] = onPressOptionItem;
    obj[7] = onRemoveOptionItem;
    if (renderHeaderIcon == null) {
      renderHeaderIcon = renderIcon;
    }
    obj[8] = renderHeaderIcon;
    obj[4] = tmp12(tmp14, obj);
    obj1 = { keyExtractor: null, data: null, renderItem: null, contentContainerStyle: null, keyboardShouldPersistTaps: "always", accessibilityRole: null };
    obj1[0] = function keyExtractor(arg0, arg1) {
      return "" + arg1;
    };
    obj1[1] = options;
    obj1[2] = callback;
    let obj2 = { paddingHorizontal: null, paddingBottom: null };
    obj2[0] = tmp(tmp2[7]).space.PX_16;
    obj2[1] = tmp(tmp2[7]).space.PX_16 + onPressOptionItem(selectedCount[16])({ isKeyboardAwareOnAndroid: false }).insets.bottom;
    obj1[3] = obj2;
    let str = "radiogroup";
    if (memo1) {
      str = "none";
    }
    obj1[5] = str;
    obj[5] = tmp12(selectionActionComponent(tmp2[24]).BottomSheetFlatList, obj1);
    return tmp12(tmp13, obj);
  } else if (0 === selectedCount) {
    let tmp16 = !allowEmpty;
  } else {
    tmp16 = selectedCount < selectionActionComponent.minValues;
  }
};