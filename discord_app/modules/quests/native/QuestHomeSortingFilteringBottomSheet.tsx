// === Module 14807: QuestHomeSortingFilteringBottomSheet ===

// Module 14807 (QuestHomeSortingFilteringBottomSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import shared from "shared" /* 4729 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ButtonGroup2 from "ButtonGroup" /* 5592 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import TableRowGroup2 from "TableRowGroup" /* 6074 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6619 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, onSortMethodChange, ref;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const QuestHomeSortMethods = QuestConstants.QuestHomeSortMethods;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, bodyContainer: { flex: 1, minHeight: 0 }, footerInline: obj3, footer: obj4, footerButtonGroup: { paddingBottom: 0 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16 };
obj4 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_9 = createStyles(obj);
let closure_10 = [];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let footerInline;
  let inline;
  let items;
  let obj6;
  let onConfirm;
  let onLayout;
  let onReset;
  const obj = react2;
  const cResult = obj.c(19);
  ({ onConfirm, onReset, onLayout, inline } = arg0);
  const tmp5 = closure_9();
  if (cResult[0] === (undefined !== inline && inline)) {
    if (cResult[1] === tmp5.content) {
      if (cResult[2] === tmp5.footer) {
        let tmp6;
        let tmp8;
        let tmp10;
        let tmp13;
        let tmp15;
        if (cResult[3] === tmp5.footerInline) {
          tmp6 = cResult[4];
        }
        const _Symbol = Symbol;
        const footerButtonGroup = tmp5.footerButtonGroup;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl3.intl;
          const stringResult = intl.string(intl3.t.i4jeWR);
          cResult[5] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] !== onConfirm) {
          const obj2 = { size: "lg", grow: true, text: tmp8, onPress: onConfirm };
          const tmp12 = metroImportDefault(components_Button_Button.Button, obj2);
          cResult[6] = onConfirm;
          cResult[7] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[7];
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl3.intl;
          const stringResult1 = intl2.string(intl3.t.yBZMsQ);
          cResult[8] = stringResult1;
          tmp13 = stringResult1;
        } else {
          tmp13 = cResult[8];
        }
        if (cResult[9] !== onReset) {
          const obj3 = { size: "lg", grow: true, text: tmp13, onPress: onReset, variant: "secondary" };
          const tmp17 = metroImportDefault(components_Button_Button.Button, obj3);
          cResult[9] = onReset;
          cResult[10] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[10];
        }
        if (cResult[11] === tmp5.footerButtonGroup) {
          if (cResult[12] === tmp10) {
            let tmp18;
            if (cResult[13] === tmp15) {
              tmp18 = cResult[14];
            }
            if (cResult[15] === onLayout) {
              if (cResult[16] === tmp6) {
                let tmp22;
                if (cResult[17] === tmp18) {
                  tmp22 = cResult[18];
                }
                return tmp22;
              }
            }
            const obj4 = { style: tmp6, onLayout, children: tmp18 };
            const tmp25 = metroImportDefault(View, obj4);
            cResult[15] = onLayout;
            cResult[16] = tmp6;
            cResult[17] = tmp18;
            cResult[18] = tmp25;
            tmp22 = tmp25;
          }
        }
        const obj5 = { bottom: true, children: metroImportAll(ButtonGroup2.ButtonGroup, obj6) };
        const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
        obj6 = { direction: "vertical", style: footerButtonGroup, children: items };
        items = [tmp10, tmp15];
        const tmp21 = metroImportDefault(SafeAreaPaddingView, obj5);
        cResult[11] = tmp5.footerButtonGroup;
        cResult[12] = tmp10;
        cResult[13] = tmp15;
        cResult[14] = tmp21;
        tmp18 = tmp21;
      }
    }
  }
  if (undefined !== inline && inline) {
    footerInline = tmp5.footerInline;
  } else {
    footerInline = [, ];
    ({ footer: arr[0], content: arr[1] } = tmp5);
  }
  cResult[0] = undefined !== inline && inline;
  cResult[1] = tmp5.content;
  cResult[2] = tmp5.footer;
  cResult[3] = tmp5.footerInline;
  cResult[4] = footerInline;
  tmp6 = footerInline;
}) : ((inline) => {
  let ButtonGroup;
  let SafeAreaPaddingView;
  let footerInline;
  let intl;
  let intl2;
  let items;
  let obj2;
  let obj3;
  let onConfirm;
  let onLayout;
  let onReset;
  let flag = inline.inline;
  ({ onConfirm, onReset, onLayout } = inline);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_9();
  if (flag) {
    footerInline = tmp.footerInline;
  } else {
    footerInline = [, ];
    ({ footer: arr[0], content: arr[1] } = tmp);
  }
  const obj = { style: footerInline, onLayout, children: metroImportDefault(SafeAreaPaddingView, obj2) };
  obj2 = { bottom: true, children: metroImportAll(ButtonGroup, obj3) };
  SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj3 = { direction: "vertical", style: tmp.footerButtonGroup, children: items };
  ButtonGroup = ButtonGroup2.ButtonGroup;
  const obj4 = { size: "lg", grow: true, text: intl.string(intl3.t.i4jeWR), onPress: onConfirm };
  const Button = components_Button_Button.Button;
  intl = intl3.intl;
  items = [metroImportDefault(Button, obj4), ];
  const obj5 = { size: "lg", grow: true, text: intl2.string(intl3.t.yBZMsQ), onPress: onReset, variant: "secondary" };
  const Button2 = components_Button_Button.Button;
  intl2 = intl3.intl;
  items[1] = metroImportDefault(Button2, obj5);
  return metroImportDefault(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onSortMethodChange) => {
  let closure_3;
  let closure_5;
  let first;
  let first1;
  let initialFilters;
  let initialSortMethod;
  let tmp11;
  let obj = onSortMethodChange(first[8]);
  const cResult = obj.c(44);
  onSortMethodChange = onSortMethodChange.onSortMethodChange;
  const onFiltersChange = onSortMethodChange.onFiltersChange;
  ({ initialSortMethod, initialFilters } = onSortMethodChange);
  closure_9();
  let obj2 = onSortMethodChange(first[13]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  [first, _slicedToArray] = first1.useState(initialSortMethod);
  [first1, View] = first1.useState(initialFilters);
  [r10036, QuestHomeSortMethods] = first1.useState(0);
  _slicedToArray(first1.useState(0), 2);
  ref = first1.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function a(nativeEvent) {
      QuestHomeSortMethods(nativeEvent.nativeEvent.layout.height);
    };
    cResult[0] = fn;
    let first2 = fn;
  } else {
    first2 = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(arg0, arg1) {
        closure_0 = onSortMethodChange;
        closure_1 = arg1;
        tmp = closure_5((arr) => {
          let found;
          if (closure_1) {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arr, 0)] = group;
            found = items;
          } else {
            found = arr.filter(() => { /* body not rendered: F153029 */ });
          }
          return found;
        });
        return;
      }
    }
    cResult[1] = A;
    tmp11 = A;
  } else {
    class A {
      constructor(arg0, arg1) {
        closure_0 = onSortMethodChange;
        closure_1 = arg1;
        tmp = closure_5((arr) => {
          let found;
          if (closure_1) {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arr, 0)] = group;
            found = items;
          } else {
            found = arr.filter(() => { /* body not rendered: F153029 */ });
          }
          return found;
        });
        return;
      }
    }
  }
  A = tmp11;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        closure_3(QuestHomeSortMethods.SUGGESTED);
        closure_5(closure_10);
        const current = ref.current;
        if (current != null) {
          current.setValue(QuestHomeSortMethods.SUGGESTED);
        }
        const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = intl3.intl;
        announce(intl.string(intl3.t.bK5N8u));
      }
    }
    cResult[2] = M;
  } else {
    class M {
      constructor() {
        closure_3(QuestHomeSortMethods.SUGGESTED);
        closure_5(closure_10);
        const current = ref.current;
        if (current != null) {
          current.setValue(QuestHomeSortMethods.SUGGESTED);
        }
        const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = intl3.intl;
        announce(intl.string(intl3.t.bK5N8u));
      }
    }
  }
  if (cResult[3] === onFiltersChange) {
    class M {
      constructor() {
        closure_3(QuestHomeSortMethods.SUGGESTED);
        closure_5(closure_10);
        const current = ref.current;
        if (current != null) {
          current.setValue(QuestHomeSortMethods.SUGGESTED);
        }
        const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = intl3.intl;
        announce(intl.string(intl3.t.bK5N8u));
      }
    }
  }
  class L {
    constructor() {
      onSortMethodChange(first);
      onFiltersChange(first1);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("QuestHomeSortingFilteringBottomSheet");
    }
  }
  cResult[3] = onFiltersChange;
  cResult[4] = onSortMethodChange;
  cResult[5] = first1;
  cResult[6] = first;
  cResult[7] = L;
}) : ((onSortMethodChange) => {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let closure_3;
  let closure_5;
  let closure_6;
  let defaultValue;
  let first1;
  let first2;
  let initialFilters;
  let initialSortMethod;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let obj5;
  let obj8;
  let tmp16Result;
  onSortMethodChange = onSortMethodChange.onSortMethodChange;
  const onFiltersChange = onSortMethodChange.onFiltersChange;
  ({ initialSortMethod, initialFilters } = onSortMethodChange);
  const tmp = closure_9();
  let obj = onSortMethodChange(defaultValue[13]);
  let isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const tmp5 = _slicedToArray(first1.useState(initialSortMethod), 2);
  defaultValue = tmp5[0];
  _slicedToArray = tmp7;
  [first1, closure_5] = first1.useState(initialFilters);
  [first2, closure_6] = first1.useState(0);
  ref = first1.useRef(null);
  const callback = first1.useCallback((nativeEvent) => {
    closure_6(nativeEvent.nativeEvent.layout.height);
  }, []);
  let closure_8 = first1.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    closure_5((arr) => {
      let found;
      if (closure_1) {
        const items = [];
        items[HermesBuiltin.arraySpread(items, arr, 0)] = group;
        found = items;
      } else {
        found = arr.filter((group) => !(group.group === group.group && group.filter === arr.filter));
      }
      return found;
    });
  }, []);
  const callback1 = first1.useCallback(() => {
    closure_3(QuestHomeSortMethods.SUGGESTED);
    closure_5(closure_10);
    const current = ref.current;
    if (current != null) {
      current.setValue(QuestHomeSortMethods.SUGGESTED);
    }
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl3.intl;
    announce(intl.string(intl3.t.bK5N8u));
  }, []);
  let items = [onSortMethodChange, onFiltersChange, defaultValue, first1];
  const callback2 = first1.useCallback(() => {
    onSortMethodChange(first);
    onFiltersChange(first1);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("QuestHomeSortingFilteringBottomSheet");
  }, items);
  let obj2 = onSortMethodChange(defaultValue[16]);
  const questHomeSortOptions = obj2.useQuestHomeSortOptions();
  const obj3 = onSortMethodChange(defaultValue[16]);
  const questHomeFilterOptions = obj3.useQuestHomeFilterOptions();
  const obj4 = { header: ref(BottomSheetTitleHeader, obj5), footer: tmp16Result, scrollable: true, startExpanded: true, children: closure_8(BottomSheetScrollView, obj8) };
  BottomSheet = onSortMethodChange(defaultValue[25]).BottomSheet;
  obj5 = { title: intl.string(onSortMethodChange(defaultValue[9]).t.UdhTtk) };
  BottomSheetTitleHeader = onSortMethodChange(defaultValue[17]).BottomSheetTitleHeader;
  intl = onSortMethodChange(defaultValue[9]).intl;
  tmp16Result = null;
  if (!isScreenReaderEnabled) {
    const obj6 = { onConfirm: callback2, onReset: callback1, onLayout: callback };
    tmp16Result = tmp16(closure_11, obj6);
  }
  let tmp20;
  BottomSheetScrollView = tmp2(tmp3[24]).BottomSheetScrollView;
  if (!isScreenReaderEnabled) {
    tmp20 = { paddingBottom: first2 };
    const obj7 = { paddingBottom: first2 };
  }
  obj8 = { contentContainerStyle: tmp20, style: items1, children: items3 };
  items1 = [, ];
  ({ content: arr4[0], bodyContainer: arr4[1] } = tmp);
  const obj9 = { spacing: onFiltersChange(defaultValue[6]).space.PX_32, children: items2 };
  const Stack = tmp2(tmp3[23]).Stack;
  const obj10 = {
    groupRef: ref,
    hasIcons: false,
    defaultValue,
    onChange: tmp5[1],
    title: intl2.string(onSortMethodChange(defaultValue[9]).t.tZXJIS),
    children: questHomeSortOptions.map((label, index) => {
      const obj = { label: label.label, value: label.value };
      return ref(onSortMethodChange(first[18]).TableRadioRow, obj, index);
    })
  };
  const TableRadioGroup = tmp2(tmp3[19]).TableRadioGroup;
  intl2 = tmp2(tmp3[9]).intl;
  items2 = [
    ref(TableRadioGroup, obj10),
    questHomeFilterOptions.map((heading, index) => {
      let options;
      let obj = {
        title: heading.heading,
        hasIcons: false,
        children: options.map((item, index) => {
          let obj2;
          const obj = {
            label: obj2.getFilterTypeText(item.filter),
            onPress(arg0) {
              return closure_2_8(item, arg0);
            },
            checked: closure_4.some((group) => group.group === item.group && group.filter === arr.filter)
          };
          const TableCheckboxRow = onSortMethodChange(defaultValue[21]).TableCheckboxRow;
          obj2 = onSortMethodChange(defaultValue[22]);
          return ref(TableCheckboxRow, obj, index);
        })
      };
      options = heading.options;
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      return metroImportDefault(TableRowGroup, obj, index);
    })
  ];
  items3 = [closure_8(Stack, obj9), ];
  if (isScreenReaderEnabled) {
    const obj11 = { onConfirm: callback2, onReset: callback1, inline: true };
    isScreenReaderEnabled = tmp16(closure_11, obj11);
  }
  items3[1] = isScreenReaderEnabled;
  return ref(BottomSheet, obj4);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeSortingFilteringBottomSheet.tsx");

export default tmp4;