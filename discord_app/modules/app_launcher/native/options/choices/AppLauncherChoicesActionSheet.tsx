// === Module 11394: FlashListWrapper ===

// Module 11394 (FlashListWrapper)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 8068 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { DEFAULT_CONTENT_PADDING } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1499 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
function FlashListWrapper(scrollable) {
  const merged = Object.assign(scrollable, Object.create(null));
  const tmp3 = noop;
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
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { listItemContainer: { overflow: "hidden" }, listItem: null, firstItem: null, lastItem: null, divider: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.CARD_BACKGROUND_DEFAULT };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { borderTopLeftRadius: ThemesDefault.radii.xl, borderTopRightRadius: ThemesDefault.radii.xl };
let obj1 = { borderTopLeftRadius: ThemesDefault.radii.xl, borderTopRightRadius: ThemesDefault.radii.xl };
createCacheKey[3] = { borderBottomLeftRadius: ThemesDefault.radii.xl, borderBottomRightRadius: ThemesDefault.radii.xl };
let obj2 = { borderBottomLeftRadius: ThemesDefault.radii.xl, borderBottomRightRadius: ThemesDefault.radii.xl };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginLeft: 16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj3 = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginLeft: 16 };
const result = require("set").fileFinishedImporting("modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx");

export default function AppLauncherChoicesActionSheet(option) {
  option = option.option;
  const onChoiceSelect = option.onChoiceSelect;
  dependencyMap = undefined;
  let first;
  let React;
  let first1;
  closure_6 = undefined;
  ({ initChoiceIndex, onDismiss } = option);
  const tmp = callback2();
  dependencyMap = tmp;
  const bottom = onChoiceSelect(1629)().bottom;
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
    let obj = onChoiceSelect(closure_2[10]);
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
    const items = [closure_2.listItemContainer, , ];
    let firstItem = 0 === index;
    if (firstItem) {
      firstItem = tmp4.firstItem;
    }
    items[1] = firstItem;
    if (lastItem) {
      lastItem = tmp4.lastItem;
    }
    obj = { style: items, children: tmp2(option(closure_2[11]).FormRadioRow, obj) };
    items[2] = lastItem;
    obj = {
      style: items1,
      label: item.choice.displayName,
      align: "right",
      selected: first1 === item.originalIndex,
      onPress() {
        closure_1_6(item.originalIndex);
        closure_1_1(item.choice, item.originalIndex);
        onChoiceSelect(table[12]).hideActionSheet();
      }
    };
    items1 = [closure_2.listItem];
    return closure_1_7(first1, obj);
  }, items1);
  callback2 = React.useCallback(() => closure_1_7(option(closure_2[11]).FormDivider, { style: closure_2.divider }), items2);
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
    tmp16 = callback(tmp3(11396).AppLauncherListSearchBar, obj);
  }
  const items3 = [tmp16, ];
  if (0 === first.length) {
    let tmp20 = callback(tmp3(11396).AppLauncherListEmptyState, {});
  } else {
    obj1 = { scrollable: null, contentContainerStyle: null, scrollIndicatorInsets: null, keyExtractor: null, data: null, renderItem: null, ItemSeparatorComponent: null, accessibilityRole: "radiogroup" };
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
  return closure_8(option(11395).AppLauncherCommandOptionActionSheet, obj);
};