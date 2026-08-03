import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { DEFAULT_CONTENT_PADDING } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
function FlashListWrapper(scrollable) {
  const merged = Object.assign(scrollable, Object.create(null));
  const tmp3 = require(6679) /* noop */;
  if (scrollable.scrollable) {
    let obj = { preserveScrollMomentum: true };
    const merged1 = Object.assign(merged);
    let tmp2Result = tmp2(tmp3.BottomSheetFlashList, obj);
  } else {
    obj = { scrollEnabled: false };
    const merged2 = Object.assign(merged);
    tmp2Result = tmp2(tmp3.FlashList, obj);
  }
  return tmp2Result;
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { listItemContainer: { overflow: "hidden" }, listItem: null, firstItem: null, lastItem: null, divider: null };
createCacheKey = { backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { borderTopLeftRadius: require("Themes").radii.xl, borderTopRightRadius: require("Themes").radii.xl };
let obj1 = { borderTopLeftRadius: require("Themes").radii.xl, borderTopRightRadius: require("Themes").radii.xl };
createCacheKey[3] = { borderBottomLeftRadius: require("Themes").radii.xl, borderBottomRightRadius: require("Themes").radii.xl };
let obj2 = { borderBottomLeftRadius: require("Themes").radii.xl, borderBottomRightRadius: require("Themes").radii.xl };
createCacheKey[4] = { backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginLeft: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginLeft: 16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx");

export default function AppLauncherChoicesActionSheet(option) {
  let initChoiceIndex;
  let onDismiss;
  option = option.option;
  const onChoiceSelect = option.onChoiceSelect;
  let dependencyMap;
  let first;
  let React;
  let first1;
  let closure_6;
  ({ initChoiceIndex, onDismiss } = option);
  const tmp = createCacheKey();
  dependencyMap = tmp;
  const bottom = onChoiceSelect(1581)().bottom;
  let obj = option(500);
  let sum = bottom;
  if (!obj.isIOS()) {
    sum = bottom + closure_6;
  }
  const tmp6 = first(React.useState(() => {
    let choices = option.choices;
    if (choices == null) {
      choices = [];
    }
    return choices.map((choice, originalIndex) => ({ choice, originalIndex }));
  }), 2);
  first = tmp6[0];
  React = tmp6[1];
  const tmp7 = first(React.useState(initChoiceIndex), 2);
  first1 = tmp7[0];
  closure_6 = tmp7[1];
  let items = [option.choices];
  let items1 = [onChoiceSelect, first1, tmp, first];
  const callback = React.useCallback((query) => {
    let obj = onChoiceSelect(_undefined[10]);
    obj = { query, choices: null, limit: null };
    let choices = option.choices;
    if (choices == null) {
      choices = [];
    }
    obj[1] = choices;
    callback(obj.queryChoice(obj));
  }, items);
  const items2 = [tmp.divider];
  const callback1 = React.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let lastItem = null != first;
    if (lastItem) {
      lastItem = index === first.length - 1;
    }
    const items = [_undefined.listItemContainer, , ];
    let firstItem = 0 === index;
    if (firstItem) {
      firstItem = tmp4.firstItem;
    }
    items[1] = firstItem;
    if (lastItem) {
      lastItem = tmp4.lastItem;
    }
    obj = { style: items, children: tmp2(option(_undefined[11]).FormRadioRow, obj) };
    items[2] = lastItem;
    obj = {
      style: items1,
      label: item.choice.displayName,
      align: "right",
      selected: first1 === item.originalIndex,
      onPress() {
        outer1_6(item.originalIndex);
        outer1_1(item.choice, item.originalIndex);
        onChoiceSelect(table[12]).hideActionSheet();
      }
    };
    items1 = [_undefined.listItem];
    return outer1_7(first1, obj);
  }, items1);
  const callback2 = React.useCallback(() => outer1_7(option(_undefined[11]).FormDivider, { style: _undefined.divider }), items2);
  let tmp13 = null != option.choices;
  if (tmp13) {
    let choices = option.choices;
    let length;
    if (choices != null) {
      length = choices.length;
    }
    let num = 5;
    if (tmp12) {
      num = 10;
    }
    tmp13 = length >= num;
  }
  obj = { option, startExpanded: tmp13, onDismiss, scrollable: tmp13, children: null };
  let tmp16 = tmp13;
  if (tmp13) {
    obj = { onChange: null };
    obj[0] = callback;
    tmp16 = callback(tmp3(11358).AppLauncherListSearchBar, obj);
  }
  const items3 = [tmp16, ];
  if (0 === first.length) {
    let tmp20 = callback(tmp3(11358).AppLauncherListEmptyState, {});
  } else {
    const obj1 = { scrollable: null, contentContainerStyle: null, scrollIndicatorInsets: null, keyExtractor: null, data: null, renderItem: null, ItemSeparatorComponent: null, accessibilityRole: "radiogroup" };
    obj1[0] = tmp13;
    const obj2 = { paddingBottom: null };
    obj2[0] = sum;
    obj1[1] = obj2;
    const obj3 = { bottom: null };
    obj3[0] = sum;
    obj1[2] = obj3;
    obj1[3] = function keyExtractor(choice) {
      return "" + choice.choice.name + "_" + choice.originalIndex;
    };
    obj1[4] = first;
    obj1[5] = callback1;
    obj1[6] = callback2;
    tmp20 = callback(FlashListWrapper, obj1);
  }
  items3[1] = tmp20;
  obj[4] = items3;
  return closure_8(option(11357).AppLauncherCommandOptionActionSheet, obj);
};