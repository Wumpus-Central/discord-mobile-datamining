// discord_app/modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AppLauncherNativeConstants from "../../AppLauncherNativeConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AutocompleteUtilsDefault from "../../../../../utils/AutocompleteUtils.tsx";
import defaultMVCPConfig from "../../../../../../discord_common/js/packages/flash-list/index.js";
import Form from "../../../../../design/void/Form/native/index.tsx";
import _slicedToArray_mod from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react_mod from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let dependencyMap, item, obj1, option, scrollable, tmp2;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
const f109170 = (choice, originalIndex) => ({ choice, originalIndex });
let length = ["scrollable"];
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { listItemContainer: { overflow: "hidden" }, listItem: obj2, firstItem: obj3, lastItem: obj4, divider: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { borderTopLeftRadius: nativeDefault.radii.xl, borderTopRightRadius: nativeDefault.radii.xl };
obj4 = { borderBottomLeftRadius: nativeDefault.radii.xl, borderBottomRightRadius: nativeDefault.radii.xl };
obj5 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (scrollable) => {
      let tmp10Result;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(6);
      if (cResult[0] !== scrollable) {
        scrollable = scrollable.scrollable;
        const tmp8 = _objectWithoutProperties(scrollable, length);
        cResult[0] = scrollable;
        cResult[1] = tmp8;
        cResult[2] = scrollable;
        tmp5 = scrollable;
        tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      if (cResult[3] === tmp4) {
        let tmp9;
        if (cResult[4] === tmp5) {
          tmp9 = cResult[5];
        }
        return tmp9;
      }
      const tmpResult = defaultMVCPConfig;
      if (tmp5) {
        const BottomSheetFlashList = tmpResult.BottomSheetFlashList;
        const obj2 = { preserveScrollMomentum: true };
        const merged = Object.assign(tmp4);
        tmp10Result = React4(BottomSheetFlashList, obj2);
      } else {
        const FlashList = tmpResult.FlashList;
        const obj3 = { scrollEnabled: false };
        const merged1 = Object.assign(tmp4);
        tmp10Result = React4(FlashList, obj3);
      }
      cResult[3] = tmp4;
      cResult[4] = tmp5;
      cResult[5] = tmp10Result;
      tmp9 = tmp10Result;
    }
  : (scrollable) => {
      let tmp2Result;
      scrollable = scrollable.scrollable;
      const merged = Object.assign(scrollable, Object.assign({ scrollable: 0 }));
      const tmp3 = defaultMVCPConfig;
      if (scrollable) {
        const BottomSheetFlashList = tmp3.BottomSheetFlashList;
        const obj2 = { preserveScrollMomentum: true };
        const merged1 = Object.assign(merged);
        tmp2Result = React4(BottomSheetFlashList, obj2);
      } else {
        const FlashList = tmp3.FlashList;
        const obj = { scrollEnabled: false };
        const merged2 = Object.assign(merged);
        tmp2Result = React4(FlashList, obj);
      }
      return tmp2Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (option) => {
      let closure_2;
      let closure_4;
      let closure_6;
      let first;
      let first1;
      let tmp8;
      const tmp = option;
      let obj = option(576);
      const cResult = obj.c(32);
      option = option.option;
      const onChoiceSelect = option.onChoiceSelect;
      const initChoiceIndex = option.initChoiceIndex;
      const tmp4 = closure_11();
      dependencyMap = tmp4;
      const bottom = onChoiceSelect(1618)().bottom;
      if (cResult[0] !== bottom) {
        let sum = bottom;
        const tmpResult = tmp(1369);
        if (!tmpResult.isIOS()) {
          sum = bottom + DEFAULT_CONTENT_PADDING;
        }
        cResult[0] = bottom;
        cResult[1] = sum;
      }
      if (cResult[2] !== option.choices) {
        const fn = function f() {
          let choices = option.choices;
          if (choices == null) {
            choices = [];
          }
          return choices.map(f109170);
        };
        cResult[2] = option.choices;
        cResult[3] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[3];
      }
      [first, _slicedToArray] = react.useState(tmp8);
      [first1, react] = react.useState(initChoiceIndex);
      if (cResult[4] !== option.choices) {
        class A {
          constructor(query) {
            let choices;
            const obj = { query, choices, limit: null };
            choices = option.choices;
            const queryChoice = AutocompleteUtilsDefault.queryChoice;
            AutocompleteUtilsDefault;
            if (choices == null) {
              choices = [];
            }
            closure_4(queryChoice(obj));
          }
        }
        cResult[4] = option.choices;
        cResult[5] = A;
      } else {
        class A {
          constructor(query) {
            let choices;
            const obj = { query, choices, limit: null };
            choices = option.choices;
            const queryChoice = AutocompleteUtilsDefault.queryChoice;
            AutocompleteUtilsDefault;
            if (choices == null) {
              choices = [];
            }
            closure_4(queryChoice(obj));
          }
        }
      }
      if (cResult[6] === first) {
        class A {
          constructor(query) {
            let choices;
            const obj = { query, choices, limit: null };
            choices = option.choices;
            const queryChoice = AutocompleteUtilsDefault.queryChoice;
            AutocompleteUtilsDefault;
            if (choices == null) {
              choices = [];
            }
            closure_4(queryChoice(obj));
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
          items = [, ,];
          items[0] = closure_2.listItemContainer;
          firstItem = 0 === index;
          tmp = closure_5;
          originalIndex = item.originalIndex;
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
          tmp5 = tmp === originalIndex;
          obj1 = {
            style: null,
            label: item.choice.displayName,
            align: "right",
            selected: tmp5,
            onPress() {
              closure_6(item.originalIndex);
              onChoiceSelect(item.choice, item.originalIndex);
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            },
          };
          items1 = [];
          items1[0] = tmp4.listItem;
          obj1.style = items1;
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
    }
  : (option) => {
      let closure_2;
      let closure_4;
      let closure_6;
      let data;
      let first1;
      let initChoiceIndex;
      let items3;
      let obj5;
      let obj6;
      let onDismiss;
      let tmp20;
      option = option.option;
      const onChoiceSelect = option.onChoiceSelect;
      data = undefined;
      _slicedToArray = undefined;
      first1 = undefined;
      react = undefined;
      ({ initChoiceIndex, onDismiss } = option);
      const tmp = closure_11();
      dependencyMap = tmp;
      const bottom = onChoiceSelect(1618)().bottom;
      let obj = option(1369);
      let sum = bottom;
      if (!obj.isIOS()) {
        sum = bottom + DEFAULT_CONTENT_PADDING;
      }
      [data, _slicedToArray] = react.useState(() => {
        let choices = option.choices;
        if (choices == null) {
          choices = [];
        }
        return choices.map(f109170);
      });
      [first1, react] = react.useState(initChoiceIndex);
      let items = [option.choices];
      let items1 = [onChoiceSelect, first1, tmp, data];
      const callback = react.useCallback((query) => {
        let choices;
        const obj = { query, choices, limit: null };
        choices = option.choices;
        const queryChoice = AutocompleteUtilsDefault.queryChoice;
        AutocompleteUtilsDefault;
        if (choices == null) {
          choices = [];
        }
        closure_4(queryChoice(obj));
      }, items);
      const items2 = [tmp.divider];
      const callback1 = react.useCallback((item) => {
        let items1;
        let obj2;
        item = item.item;
        const index = item.index;
        let lastItem = null != first && index === first.length - 1;
        const items = [closure_2.listItemContainer, ,];
        let firstItem = 0 === index;
        const originalIndex = item.originalIndex;
        if (firstItem) {
          firstItem = closure_2.firstItem;
        }
        items[1] = firstItem;
        if (lastItem) {
          lastItem = closure_2.lastItem;
        }
        let obj = { style: items, children: closure_1_9(option(closure_2[14]).FormRadioRow, obj2) };
        items[2] = lastItem;
        obj2 = {
          style: items1,
          label: item.choice.displayName,
          align: "right",
          selected: first1 === originalIndex,
          onPress() {
            closure_6(item.originalIndex);
            onChoiceSelect(item.choice, item.originalIndex);
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          },
        };
        items1 = [closure_2.listItem];
        return closure_1_9(View, obj);
      }, items1);
      const callback2 = react.useCallback(() => {
        const obj = { style: closure_2.divider };
        return React4(Form.FormDivider, obj);
      }, items2);
      let tmp13 = null != option.choices;
      if (tmp13) {
        let choices = option.choices;
        let length1;
        if (choices != null) {
          length1 = choices.length;
        }
        let num = 5;
        if (tmp12) {
          num = 10;
        }
        tmp13 = length1 >= num;
      }
      let obj2 = { option, startExpanded: tmp13, onDismiss, scrollable: tmp13, children: items3 };
      let tmp16 = tmp13;
      length = data.length;
      const AppLauncherCommandOptionActionSheet = tmp3(11791).AppLauncherCommandOptionActionSheet;
      if (tmp13) {
        const obj3 = { onChange: callback };
        tmp16 = closure_9(tmp3(11789).AppLauncherListSearchBar, obj3);
      }
      items3 = [tmp16];
      if (0 === length) {
        tmp20 = closure_9(tmp3(11789).AppLauncherListEmptyState, {});
      } else {
        const obj4 = {
          scrollable: tmp13,
          contentContainerStyle: obj5,
          scrollIndicatorInsets: obj6,
          keyExtractor(choice) {
            return "" + choice.choice.name + "_" + choice.originalIndex;
          },
          data,
          renderItem: callback1,
          ItemSeparatorComponent: callback2,
          accessibilityRole: "radiogroup",
        };
        obj5 = { paddingBottom: sum };
        obj6 = { bottom: sum };
        tmp20 = closure_9(closure_12, obj4);
      }
      items3[1] = tmp20;
      return closure_10(AppLauncherCommandOptionActionSheet, obj2);
    };
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx",
);

export default tmp4;
