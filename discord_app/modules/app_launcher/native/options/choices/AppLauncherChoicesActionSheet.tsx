// === Module 12357: AppLauncherChoicesActionSheet ===

// Module 12357 (AppLauncherChoicesActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 6779 */;
import _mod7294 from "module_7294" /* 7294 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function FlashListWrapper(scrollable) {
  const merged = Object.assign(scrollable, Object.assign({ scrollable: 0 }));
  const tmp3 = _mod7294;
  if (scrollable.scrollable) {
    const obj2 = { preserveScrollMomentum: true };
    const merged1 = Object.assign(merged);
    let tmp2Result = timestampProducer(tmp3.BottomSheetFlashList, obj2);
  } else {
    const obj = { scrollEnabled: false };
    const merged2 = Object.assign(merged);
    tmp2Result = timestampProducer(tmp3.FlashList, obj);
  }
  return tmp2Result;
}
const DEFAULT_CONTENT_PADDING = fn(1496).DEFAULT_CONTENT_PADDING;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx");

export default function AppLauncherChoicesActionSheet(option) {
  option = option.option;
  const onChoiceSelect = option.onChoiceSelect;
  data = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_5 = undefined;
  ({ initChoiceIndex, onDismiss } = option);
  const bottom = onChoiceSelect(data[5])().bottom;
  let sum = bottom;
  if (!obj.isIOS()) {
    sum = bottom + closure_5;
  }
  [data, _slicedToArray] = first1.useState(() => {
    let choices = option.choices;
    if (choices == null) {
      choices = [];
    }
    return choices.map((choice, originalIndex) => ({ choice, originalIndex }));
  });
  [first1, closure_5] = first1.useState(initChoiceIndex);
  const items = [option.choices];
  const items1 = [onChoiceSelect, first1, data];
  const callback = first1.useCallback((query) => {
    const obj2 = { query, choices: null, limit: null };
    let choices = option.choices;
    if (choices == null) {
      choices = [];
    }
    obj2.choices = choices;
    closure_3(AutocompleteUtilsDefault.queryChoice(obj2));
  }, items);
  const callback1 = first1.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let tmp = null != first;
    if (tmp) {
      tmp = index === first.length - 1;
    }
    return closure_1_6(option(first[8]).TableRadioRow, {
      start: 0 === index,
      end: tmp,
      label: item.choice.displayName,
      value: item.originalIndex,
      legacyCompat_selected: first1 === item.originalIndex,
      legacyCompat_onPress() {
        closure_5(item.originalIndex);
        onChoiceSelect(item.choice, item.originalIndex);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
    });
  }, items1);
  let tmp11 = null != option.choices;
  if (tmp11) {
    let choices = option.choices;
    let length;
    if (choices != null) {
      length = choices.length;
    }
    let num = 5;
    if (tmp10) {
      num = 10;
    }
    tmp11 = length >= num;
  }
  let obj2 = { option, startExpanded: tmp11, onDismiss, scrollable: tmp11, children: null };
  let tmp14 = tmp11;
  if (tmp11) {
    const obj3 = { onChange: callback };
    tmp14 = closure_6(tmp2(tmp[12]).AppLauncherListSearchBar, obj3);
  }
  const items2 = [tmp14, ];
  if (0 === data.length) {
    let tmp18 = closure_6(tmp2(tmp[12]).AppLauncherListEmptyState, {});
  } else {
    const obj4 = { scrollable: tmp11, contentContainerStyle: null, scrollIndicatorInsets: null, keyExtractor: null, data: null, renderItem: null, accessibilityRole: "radiogroup" };
    const obj5 = { paddingBottom: sum };
    obj4.contentContainerStyle = obj5;
    const obj6 = { bottom: sum };
    obj4.scrollIndicatorInsets = obj6;
    obj4.keyExtractor = function keyExtractor(choice) {
      return "" + choice.choice.name + "_" + choice.originalIndex;
    };
    obj4.data = data;
    obj4.renderItem = callback1;
    tmp18 = closure_6(FlashListWrapper, obj4);
  }
  items2[1] = tmp18;
  obj2.children = items2;
  return closure_7(option(data[11]).AppLauncherCommandOptionActionSheet, obj2);
};