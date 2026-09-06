// discord_app/modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AutocompleteUtilsDefault from "../../../../../utils/AutocompleteUtils.tsx";
import Form from "../../../../../design/void/Form/native/index.tsx";
import _mod8874 from "../../../../../../discord_common/js/packages/flash-list/index.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function FlashListWrapper(scrollable) {
  const merged = Object.assign(scrollable, Object.assign({ scrollable: 0 }));
  const tmp3 = _mod8874;
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
const View = fn(17).View;
const DEFAULT_CONTENT_PADDING = fn(1482).DEFAULT_CONTENT_PADDING;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  listItemContainer: { overflow: "hidden" },
  listItem: null,
  firstItem: null,
  lastItem: null,
  divider: null,
};
createStyles = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
createStyles.listItem = createStyles;
createStyles.firstItem = { borderTopLeftRadius: nativeDefault.radii.xl, borderTopRightRadius: nativeDefault.radii.xl };
let obj1 = { borderTopLeftRadius: nativeDefault.radii.xl, borderTopRightRadius: nativeDefault.radii.xl };
createStyles.lastItem = {
  borderBottomLeftRadius: nativeDefault.radii.xl,
  borderBottomRightRadius: nativeDefault.radii.xl,
};
let obj2 = { borderBottomLeftRadius: nativeDefault.radii.xl, borderBottomRightRadius: nativeDefault.radii.xl };
createStyles.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx",
);

export default function AppLauncherChoicesActionSheet(option) {
  option = option.option;
  const onChoiceSelect = option.onChoiceSelect;
  let data;
  noop = undefined;
  let first1;
  closure_6 = undefined;
  ({ initChoiceIndex, onDismiss } = option);
  const tmp = closure_9();
  dependencyMap = tmp;
  const bottom = onChoiceSelect(1611)().bottom;
  let obj = option(1115);
  let sum = bottom;
  if (!obj.isIOS()) {
    sum = bottom + closure_6;
  }
  const tmp6 = data(
    noop.useState(() => {
      let choices = option.choices;
      if (choices == null) {
        choices = [];
      }
      return choices.map((choice, originalIndex) => ({ choice, originalIndex }));
    }),
    2,
  );
  data = tmp6[0];
  noop = tmp6[1];
  const tmp7 = data(noop.useState(initChoiceIndex), 2);
  first1 = tmp7[0];
  closure_6 = tmp7[1];
  let items = [option.choices];
  let items1 = [onChoiceSelect, first1, tmp, data];
  const callback = noop.useCallback((query) => {
    const obj = { query, choices: null, limit: null };
    let choices = option.choices;
    if (choices == null) {
      choices = [];
    }
    obj.choices = choices;
    closure_4(obj.queryChoice(obj));
  }, items);
  const items2 = [tmp.divider];
  const callback1 = noop.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let lastItem = null != first;
    if (lastItem) {
      lastItem = index === first.length - 1;
    }
    const items = [closure_2.listItemContainer, ,];
    let firstItem = 0 === index;
    if (firstItem) {
      firstItem = tmp4.firstItem;
    }
    items[1] = firstItem;
    if (lastItem) {
      lastItem = tmp4.lastItem;
    }
    let obj = { style: items, children: null };
    items[2] = lastItem;
    obj = {
      style: null,
      label: item.choice.displayName,
      align: "right",
      selected: first1 === item.originalIndex,
      onPress() {
        closure_6(item.originalIndex);
        onChoiceSelect(item.choice, item.originalIndex);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      },
    };
    const items1 = [closure_2.listItem];
    obj.style = items1;
    obj.children = closure_1_7(option(closure_2[11]).FormRadioRow, obj);
    return closure_1_7(first1, obj);
  }, items1);
  const callback2 = noop.useCallback(() => React5(Form.FormDivider, { style: closure_2.divider }), items2);
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
    obj = { onChange: callback };
    tmp16 = closure_7(tmp3(12167).AppLauncherListSearchBar, obj);
  }
  const items3 = [tmp16];
  if (0 === data.length) {
    let tmp20 = closure_7(tmp3(12167).AppLauncherListEmptyState, {});
  } else {
    const obj1 = {
      scrollable: tmp13,
      contentContainerStyle: null,
      scrollIndicatorInsets: null,
      keyExtractor: null,
      data: null,
      renderItem: null,
      ItemSeparatorComponent: null,
      accessibilityRole: "radiogroup",
    };
    const obj2 = { paddingBottom: sum };
    obj1.contentContainerStyle = obj2;
    const obj3 = { bottom: sum };
    obj1.scrollIndicatorInsets = obj3;
    obj1.keyExtractor = function keyExtractor(choice) {
      return "" + choice.choice.name + "_" + choice.originalIndex;
    };
    obj1.data = data;
    obj1.renderItem = callback1;
    obj1.ItemSeparatorComponent = callback2;
    tmp20 = closure_7(FlashListWrapper, obj1);
  }
  items3[1] = tmp20;
  obj.children = items3;
  return closure_8(option(12166).AppLauncherCommandOptionActionSheet, obj);
}
