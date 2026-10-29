// discord_app/modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx
import c from "../../../../../../_runtime/00576_c.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AutocompleteUtilsDefault from "../../../../../utils/AutocompleteUtils.tsx";
import _mod7280 from "../../../../../../discord_common/js/packages/flash-list/index.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["scrollable"];
const DEFAULT_CONTENT_PADDING = fn(1502).DEFAULT_CONTENT_PADDING;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FlashListWrapper(scrollable) {
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
      let obj2 = _mod7280;
      if (tmp5) {
        obj2 = { preserveScrollMomentum: true };
        const merged = Object.assign(tmp4);
        let tmp9Result = closure_1_8(obj2.BottomSheetFlashList, obj2);
      } else {
        const obj3 = { scrollEnabled: false };
        const merged1 = Object.assign(tmp4);
        tmp9Result = closure_1_8(obj2.FlashList, obj3);
      }
      cResult[3] = tmp4;
      cResult[4] = tmp5;
      cResult[5] = tmp9Result;
    }
  : function FlashListWrapper(scrollable) {
      const merged = Object.assign(scrollable, Object.assign({ scrollable: 0 }));
      const tmp3 = _mod7280;
      if (scrollable.scrollable) {
        const obj2 = { preserveScrollMomentum: true };
        const merged1 = Object.assign(merged);
        let tmp2Result = closure_1_8(tmp3.BottomSheetFlashList, obj2);
      } else {
        const obj = { scrollEnabled: false };
        const merged2 = Object.assign(merged);
        tmp2Result = closure_1_8(tmp3.FlashList, obj);
      }
      return tmp2Result;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppLauncherChoicesActionSheet(option) {
      const cResult = option(data[6]).c(25);
      option = option.option;
      const onChoiceSelect = option.onChoiceSelect;
      ({ onDismiss, initChoiceIndex } = option);
      const bottom = onChoiceSelect(data[8])().bottom;
      if (cResult[0] !== bottom) {
        let sum = bottom;
        if (!tmpResult.isIOS()) {
          sum = bottom + DEFAULT_CONTENT_PADDING;
        }
        cResult[0] = bottom;
        cResult[1] = sum;
        let tmp4 = sum;
        tmpResult = tmp(tmp2[9]);
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== option.choices) {
        const fn = function v() {
          let choices = option.choices;
          if (choices == null) {
            choices = [];
          }
          return choices.map((choice, originalIndex) => ({ choice, originalIndex }));
        };
        cResult[2] = option.choices;
        cResult[3] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[3];
      }
      const tmp8 = first1(noop.useState(tmp7), 2);
      data = tmp8[0];
      closure_3 = tmp8[1];
      const tmp10 = first1(noop.useState(initChoiceIndex), 2);
      first1 = tmp10[0];
      closure_5 = tmp10[1];
      if (cResult[4] !== option.choices) {
        const fn2 = function y(query) {
          const obj2 = { query, choices: null, limit: null };
          let choices = option.choices;
          if (choices == null) {
            choices = [];
          }
          obj2.choices = choices;
          closure_3(AutocompleteUtilsDefault.queryChoice(obj2));
        };
        cResult[4] = option.choices;
        cResult[5] = fn2;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === data) {
        if (cResult[7] === onChoiceSelect) {
          if (cResult[8] === first1) {
            let tmp13 = cResult[9];
          }
          let tmp16 = null != option.choices;
          if (tmp16) {
            let choices = option.choices;
            let length;
            if (choices != null) {
              length = choices.length;
            }
            let num7 = 5;
            if (tmp14) {
              num7 = 10;
            }
            tmp16 = length >= num7;
          }
          if (cResult[10] === tmp12) {
            if (cResult[11] === tmp16) {
              let tmp19 = cResult[12];
            }
            if (cResult[13] === data) {
              if (cResult[14] === tmp4) {
                if (cResult[15] === tmp13) {
                  if (cResult[16] === tmp16) {
                    if (cResult[17] === tmp22) {
                      if (cResult[19] === onDismiss) {
                        if (cResult[20] === option) {
                          if (cResult[21] === tmp16) {
                            if (cResult[22] === tmp19) {
                              if (cResult[23] === tmp23) {
                                let tmp28 = cResult[24];
                              }
                              return tmp28;
                            }
                          }
                        }
                      }
                      let obj2 = { option, startExpanded: tmp16, onDismiss, scrollable: tmp16, children: null };
                      const items = [tmp19, cResult[18]];
                      obj2.children = items;
                      const tmp30 = closure_9(tmp(tmp2[15]).AppLauncherCommandOptionActionSheet, obj2);
                      cResult[19] = onDismiss;
                      cResult[20] = option;
                      cResult[21] = tmp16;
                      cResult[22] = tmp19;
                      cResult[23] = cResult[18];
                      cResult[24] = tmp30;
                      tmp28 = tmp30;
                    }
                  }
                }
              }
            }
            if (0 === tmp18) {
              let tmp24Result = closure_8(tmp(tmp2[14]).AppLauncherListEmptyState, {});
            } else {
              const obj3 = {
                scrollable: tmp16,
                contentContainerStyle: null,
                scrollIndicatorInsets: null,
                keyExtractor: null,
                data: null,
                renderItem: null,
                accessibilityRole: "radiogroup",
              };
              const obj4 = { paddingBottom: tmp4 };
              obj3.contentContainerStyle = obj4;
              const obj5 = { bottom: tmp4 };
              obj3.scrollIndicatorInsets = obj5;
              obj3.keyExtractor = function keyExtractor(choice) {
                return "" + choice.choice.name + "_" + choice.originalIndex;
              };
              obj3.data = data;
              obj3.renderItem = tmp13;
              tmp24Result = closure_8(closure_10, obj3);
            }
            cResult[13] = data;
            cResult[14] = tmp4;
            cResult[15] = tmp13;
            cResult[16] = tmp16;
            cResult[17] = 0 === tmp18;
            cResult[18] = tmp24Result;
          }
          let tmp20 = tmp16;
          if (tmp16) {
            const obj6 = { onChange: tmp12 };
            tmp20 = closure_8(tmp(tmp2[14]).AppLauncherListSearchBar, obj6);
          }
          cResult[10] = tmp12;
          cResult[11] = tmp16;
          cResult[12] = tmp20;
          tmp19 = tmp20;
        }
      }
      class O {
        constructor(arg0) {
          item = option.item;
          index = option.index;
          tmp = null != closure_2;
          if (tmp) {
            num = 1;
            tmp = index === closure_2.length - 1;
          }
          obj = {
            start: 0 === index,
            end: tmp,
            label: item.choice.displayName,
            value: item.originalIndex,
            legacyCompat_selected: closure_4 === item.originalIndex,
            legacyCompat_onPress() {
              closure_5(item.originalIndex);
              onChoiceSelect(item.choice, item.originalIndex);
              ActionSheetActionCreatorsDefault.hideActionSheet();
            },
          };
          return closure_1_8(option(closure_2[11]).TableRadioRow, obj);
        }
      }
      cResult[6] = data;
      cResult[7] = onChoiceSelect;
      cResult[8] = first1;
      cResult[9] = O;
      tmp13 = O;
      const obj = option(data[6]);
    }
  : function AppLauncherChoicesActionSheet(option) {
      option = option.option;
      const onChoiceSelect = option.onChoiceSelect;
      let data;
      closure_3 = undefined;
      let first1;
      closure_5 = undefined;
      ({ initChoiceIndex, onDismiss } = option);
      const bottom = onChoiceSelect(data[8])().bottom;
      let sum = bottom;
      if (!obj.isIOS()) {
        sum = bottom + DEFAULT_CONTENT_PADDING;
      }
      const tmp5 = first1(
        noop.useState(() => {
          let choices = option.choices;
          if (choices == null) {
            choices = [];
          }
          return choices.map((choice, originalIndex) => ({ choice, originalIndex }));
        }),
        2,
      );
      data = tmp5[0];
      closure_3 = tmp5[1];
      const tmp6 = first1(noop.useState(initChoiceIndex), 2);
      first1 = tmp6[0];
      closure_5 = tmp6[1];
      const items = [option.choices];
      const items1 = [onChoiceSelect, first1, data];
      const callback = noop.useCallback((query) => {
        const obj2 = { query, choices: null, limit: null };
        let choices = option.choices;
        if (choices == null) {
          choices = [];
        }
        obj2.choices = choices;
        closure_3(AutocompleteUtilsDefault.queryChoice(obj2));
      }, items);
      const callback1 = noop.useCallback((item) => {
        item = item.item;
        const index = item.index;
        let tmp = null != first;
        if (tmp) {
          tmp = index === first.length - 1;
        }
        return closure_1_8(option(first[11]).TableRadioRow, {
          start: 0 === index,
          end: tmp,
          label: item.choice.displayName,
          value: item.originalIndex,
          legacyCompat_selected: first1 === item.originalIndex,
          legacyCompat_onPress() {
            closure_5(item.originalIndex);
            onChoiceSelect(item.choice, item.originalIndex);
            ActionSheetActionCreatorsDefault.hideActionSheet();
          },
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
        tmp14 = closure_8(tmp2(tmp[14]).AppLauncherListSearchBar, obj3);
      }
      const items2 = [tmp14];
      if (0 === data.length) {
        let tmp18 = closure_8(tmp2(tmp[14]).AppLauncherListEmptyState, {});
      } else {
        const obj4 = {
          scrollable: tmp11,
          contentContainerStyle: null,
          scrollIndicatorInsets: null,
          keyExtractor: null,
          data: null,
          renderItem: null,
          accessibilityRole: "radiogroup",
        };
        const obj5 = { paddingBottom: sum };
        obj4.contentContainerStyle = obj5;
        const obj6 = { bottom: sum };
        obj4.scrollIndicatorInsets = obj6;
        obj4.keyExtractor = function keyExtractor(choice) {
          return "" + choice.choice.name + "_" + choice.originalIndex;
        };
        obj4.data = data;
        obj4.renderItem = callback1;
        tmp18 = closure_8(closure_10, obj4);
      }
      items2[1] = tmp18;
      obj2.children = items2;
      return closure_9(option(data[15]).AppLauncherCommandOptionActionSheet, obj2);
    };
