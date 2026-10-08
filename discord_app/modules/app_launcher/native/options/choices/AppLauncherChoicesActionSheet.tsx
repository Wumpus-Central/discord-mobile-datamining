// discord_app/modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AutocompleteUtilsDefault from "../../../../../utils/AutocompleteUtils.tsx";
import Form from "../../../../../design/void/Form/native/index.tsx";
import _mod8600 from "../../../../../../discord_common/js/packages/flash-list/index.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const DEFAULT_CONTENT_PADDING = fn(1501).DEFAULT_CONTENT_PADDING;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { listItemContainer: { overflow: "hidden" }, listItem: { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT }, firstItem: null, lastItem: null, divider: null };
let obj3 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
obj2.firstItem = { borderTopLeftRadius: nativeDefault.radii.xl, borderTopRightRadius: nativeDefault.radii.xl };
let obj4 = { borderTopLeftRadius: nativeDefault.radii.xl, borderTopRightRadius: nativeDefault.radii.xl };
obj2.lastItem = { borderBottomLeftRadius: nativeDefault.radii.xl, borderBottomRightRadius: nativeDefault.radii.xl };
let obj5 = { borderBottomLeftRadius: nativeDefault.radii.xl, borderBottomRightRadius: nativeDefault.radii.xl };
obj2.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16 };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function FlashListWrapper(scrollable) {
  const cResult = c.c(6);
  if (cResult[0] !== scrollable) {
    scrollable = scrollable.scrollable;
    const tmp8 = _objectWithoutProperties(scrollable, closure_3);
    cResult[0] = scrollable;
    cResult[1] = tmp8;
    cResult[2] = scrollable;
    let tmp5 = scrollable;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === tmp5) {
      return cResult[5];
    }
  }
  let obj2 = _mod8600;
  if (tmp5) {
    obj2 = { preserveScrollMomentum: true };
    const merged = Object.assign(tmp4);
    let tmp9Result = options(obj2.BottomSheetFlashList, obj2);
  } else {
    const obj3 = { scrollEnabled: false };
    const merged1 = Object.assign(tmp4);
    tmp9Result = options(obj2.FlashList, obj3);
  }
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = tmp9Result;
}) : (function FlashListWrapper(scrollable) {
  const merged = Object.assign(scrollable, Object.assign({ scrollable: 0 }));
  const tmp3 = _mod8600;
  if (scrollable.scrollable) {
    const obj2 = { preserveScrollMomentum: true };
    const merged1 = Object.assign(merged);
    let tmp2Result = options(tmp3.BottomSheetFlashList, obj2);
  } else {
    const obj = { scrollEnabled: false };
    const merged2 = Object.assign(merged);
    tmp2Result = options(tmp3.FlashList, obj);
  }
  return tmp2Result;
});
ReactCompilerGating = fn(558);
let obj6 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherChoicesActionSheet(option) {
  const cResult = option(576).c(32);
  option = option.option;
  const onChoiceSelect = option.onChoiceSelect;
  const tmp4 = closure_11();
  dependencyMap = tmp4;
  const bottom = onChoiceSelect(1630)().bottom;
  if (cResult[0] !== bottom) {
    let sum = bottom;
    if (!tmpResult.isIOS()) {
      sum = bottom + DEFAULT_CONTENT_PADDING;
    }
    cResult[0] = bottom;
    cResult[1] = sum;
    tmpResult = tmp(1381);
  }
  if (cResult[2] !== option.choices) {
    class A {
      constructor() {
        choices = option.choices;
        if (choices == null) {
          choices = [];
        }
        return choices.map(/* F109717 */ function() { ... });
      }
    }
    cResult[2] = option.choices;
    cResult[3] = A;
  } else {
    class A {
      constructor() {
        choices = option.choices;
        if (choices == null) {
          choices = [];
        }
        return choices.map(/* F109717 */ function() { ... });
      }
    }
  }
  [first, _slicedToArray] = noop.useState(A);
  [first1, noop] = noop.useState(option.initChoiceIndex);
  if (cResult[4] !== option.choices) {
    class R {
      constructor(arg0) {
        obj = closure_1(closure_2[13]);
        obj1 = { query: option, choices: null, limit: null };
        choices = option.choices;
        if (choices == null) {
          choices = [];
        }
        obj1.choices = choices;
        tmp = closure_4(obj.queryChoice(obj1));
        return;
      }
    }
    cResult[4] = option.choices;
    cResult[5] = R;
  } else {
    class R {
      constructor(arg0) {
        obj = closure_1(closure_2[13]);
        obj1 = { query: option, choices: null, limit: null };
        choices = option.choices;
        if (choices == null) {
          choices = [];
        }
        obj1.choices = choices;
        tmp = closure_4(obj.queryChoice(obj1));
        return;
      }
    }
  }
  if (cResult[6] === first) {
    class R {
      constructor(arg0) {
        obj = closure_1(closure_2[13]);
        obj1 = { query: option, choices: null, limit: null };
        choices = option.choices;
        if (choices == null) {
          choices = [];
        }
        obj1.choices = choices;
        tmp = closure_4(obj.queryChoice(obj1));
        return;
      }
    }
  }
  class N {
    constructor(arg0) {
      item = option.item;
      index = option.index;
      lastItem = null != closure_3;
      if (lastItem) {
        num = 1;
        lastItem = index === closure_3.length - 1;
      }
      tmp2 = closure_1_9;
      tmp4 = closure_2;
      items = [, , ];
      items[0] = closure_2.listItemContainer;
      firstItem = 0 === index;
      tmp = closure_5;
      tmp3 = closure_1_7;
      if (firstItem) {
        firstItem = tmp4.firstItem;
      }
      items[1] = firstItem;
      if (lastItem) {
        lastItem = tmp4.lastItem;
      }
      obj = { style: items, children: null };
      items[2] = lastItem;
      tmp5 = tmp === item.originalIndex;
      obj1 = { style: tmp4.listItem, label: item.choice.displayName, align: "right", selected: tmp5, onPress() { ... } };
      obj.children = tmp2(option(closure_2[14]).FormRadioRow, obj1);
      return tmp2(tmp3, obj);
    }
  }
  cResult[6] = first;
  cResult[7] = onChoiceSelect;
  cResult[8] = first1;
  cResult[9] = tmp4.firstItem;
  cResult[10] = tmp4.lastItem;
  cResult[11] = tmp4.listItem;
  cResult[12] = tmp4.listItemContainer;
  cResult[13] = N;
  let obj = option(576);
  tmp = option;
}) : (function AppLauncherChoicesActionSheet(option) {
  option = option.option;
  const onChoiceSelect = option.onChoiceSelect;
  data = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  noop = undefined;
  ({ initChoiceIndex, onDismiss } = option);
  const tmp = closure_11();
  dependencyMap = tmp;
  const bottom = onChoiceSelect(1630)().bottom;
  let sum = bottom;
  if (!obj.isIOS()) {
    sum = bottom + DEFAULT_CONTENT_PADDING;
  }
  [data, _slicedToArray] = noop.useState(() => {
    let choices = option.choices;
    if (choices == null) {
      choices = [];
    }
    return choices.map((choice, originalIndex) => ({ choice, originalIndex }));
  });
  [first1, noop] = noop.useState(initChoiceIndex);
  let items = [option.choices];
  const items1 = [onChoiceSelect, first1, tmp, data];
  const callback = noop.useCallback((query) => {
    const obj2 = { query, choices: null, limit: null };
    let choices = option.choices;
    if (choices == null) {
      choices = [];
    }
    obj2.choices = choices;
    closure_4(AutocompleteUtilsDefault.queryChoice(obj2));
  }, items);
  const items2 = [tmp.divider];
  const callback1 = noop.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let lastItem = null != first;
    if (lastItem) {
      lastItem = index === first.length - 1;
    }
    const items = [closure_2.listItemContainer, , ];
    let firstItem = 0 === index;
    if (firstItem) {
      firstItem = closure_2.firstItem;
    }
    items[1] = firstItem;
    if (lastItem) {
      lastItem = closure_2.lastItem;
    }
    const obj = {
      style: items,
      children: closure_1_9(option(closure_2[14]).FormRadioRow, {
        style: closure_2.listItem,
        label: item.choice.displayName,
        align: "right",
        selected: first1 === item.originalIndex,
        onPress() {
          closure_6(item.originalIndex);
          onChoiceSelect(item.choice, item.originalIndex);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
      })
    };
    items[2] = lastItem;
    return closure_1_9(View, obj);
  }, items1);
  const callback2 = noop.useCallback(() => options(Form.FormDivider, { style: closure_2.divider }), items2);
  let tmp13 = null != option.choices;
  if (tmp13) {
    let choices = option.choices;
    length = undefined;
    if (choices != null) {
      length = choices.length;
    }
    let num = 5;
    if (tmp12) {
      num = 10;
    }
    tmp13 = length >= num;
  }
  let obj2 = { option, startExpanded: tmp13, onDismiss, scrollable: tmp13, children: null };
  let tmp16 = tmp13;
  if (tmp13) {
    const obj3 = { onChange: callback };
    tmp16 = closure_9(tmp3(11870).AppLauncherListSearchBar, obj3);
  }
  const items3 = [tmp16, ];
  if (0 === data.length) {
    let tmp20 = closure_9(tmp3(11870).AppLauncherListEmptyState, {});
  } else {
    const obj4 = { scrollable: tmp13, contentContainerStyle: null, scrollIndicatorInsets: null, keyExtractor: null, data: null, renderItem: null, ItemSeparatorComponent: null, accessibilityRole: "radiogroup" };
    const obj5 = { paddingBottom: sum };
    obj4.contentContainerStyle = obj5;
    const obj6 = { bottom: sum };
    obj4.scrollIndicatorInsets = obj6;
    obj4.keyExtractor = function keyExtractor(choice) {
      return "" + choice.choice.name + "_" + choice.originalIndex;
    };
    obj4.data = data;
    obj4.renderItem = callback1;
    obj4.ItemSeparatorComponent = callback2;
    tmp20 = closure_9(closure_12, obj4);
  }
  items3[1] = tmp20;
  obj2.children = items3;
  return closure_10(option(11872).AppLauncherCommandOptionActionSheet, obj2);
});