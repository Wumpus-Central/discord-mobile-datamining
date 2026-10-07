// discord_app/modules/quests/native/QuestHomeSortingFilteringBottomSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import shared from "../../../design/shared.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ButtonGroup from "../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const QuestHomeSortMethods = fn(5630).QuestHomeSortMethods;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, bodyContainer: { flex: 1, minHeight: 0 }, footerInline: null, footer: null, footerButtonGroup: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.footerInline = { paddingTop: nativeDefault.space.PX_16 };
let obj4 = { paddingTop: nativeDefault.space.PX_16 };
obj2.footer = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.footerButtonGroup = { paddingBottom: 0 };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = [];
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(19);
  ({ onConfirm, onReset, onLayout, inline } = arg0);
  footerInline = undefined !== inline && inline;
  const tmp4 = closure_9();
  if (cResult[0] === footerInline) {
    if (cResult[1] === tmp4.content) {
      if (cResult[2] === tmp4.footer) {
        if (cResult[3] === tmp4.footerInline) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.i4jeWR);
            cResult[5] = stringResult;
            let tmp7 = stringResult;
          } else {
            tmp7 = cResult[5];
          }
          if (cResult[6] !== onConfirm) {
            const obj2 = { size: "lg", grow: true, text: tmp7, onPress: onConfirm };
            const tmp11 = ref(components_Button_Button.Button, obj2);
            cResult[6] = onConfirm;
            cResult[7] = tmp11;
            let tmp9 = tmp11;
          } else {
            tmp9 = cResult[7];
          }
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = util.intl;
            const stringResult1 = intl2.string(util.t.yBZMsQ);
            cResult[8] = stringResult1;
            let tmp12 = stringResult1;
          } else {
            tmp12 = cResult[8];
          }
          if (cResult[9] !== onReset) {
            const obj3 = { size: "lg", grow: true, text: tmp12, onPress: onReset, variant: "secondary" };
            const tmp16 = ref(components_Button_Button.Button, obj3);
            cResult[9] = onReset;
            cResult[10] = tmp16;
            let tmp14 = tmp16;
          } else {
            tmp14 = cResult[10];
          }
          if (cResult[11] === tmp4.footerButtonGroup) {
            if (cResult[12] === tmp9) {
              if (cResult[13] === tmp14) {
                let tmp17 = cResult[14];
              }
              if (cResult[15] === onLayout) {
                if (cResult[16] === tmp5) {
                  if (cResult[17] === tmp17) {
                    let tmp21 = cResult[18];
                  }
                  return tmp21;
                }
              }
              const obj4 = { style: tmp5, onLayout, children: tmp17 };
              const tmp24 = ref(View, obj4);
              cResult[15] = onLayout;
              cResult[16] = tmp5;
              cResult[17] = tmp17;
              cResult[18] = tmp24;
              tmp21 = tmp24;
            }
          }
          const obj5 = { bottom: true, children: null };
          const obj6 = { direction: "vertical", style: tmp4.footerButtonGroup, children: null };
          const items = [tmp9, tmp14];
          obj6.children = items;
          obj5.children = closure_1_8(ButtonGroup.ButtonGroup, obj6);
          const tmp20 = ref(common_SafeAreaView.SafeAreaPaddingView, obj5);
          cResult[11] = tmp4.footerButtonGroup;
          cResult[12] = tmp9;
          cResult[13] = tmp14;
          cResult[14] = tmp20;
          tmp17 = tmp20;
        }
      }
    }
  }
  if (footerInline) {
    let footerInline1 = tmp4.footerInline;
  } else {
    footerInline1 = [, ];
    ({ footer: arr[0], content: arr[1] } = tmp4);
  }
  cResult[0] = footerInline;
  cResult[1] = tmp4.content;
  ({ footer: tmp3[2], footerInline } = tmp4);
  cResult[3] = footerInline;
  cResult[4] = footerInline1;
}) : ((inline) => {
  let flag = inline.inline;
  ({ onConfirm, onReset, onLayout } = inline);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_9();
  if (flag) {
    let footerInline = tmp.footerInline;
  } else {
    footerInline = [, ];
    ({ footer: arr[0], content: arr[1] } = tmp);
  }
  const obj = { style: footerInline, onLayout, children: null };
  const obj2 = { bottom: true, children: null };
  const obj3 = { direction: "vertical", style: tmp.footerButtonGroup, children: null };
  const obj4 = { size: "lg", grow: true, text: null, onPress: null };
  const intl = util.intl;
  obj4.text = intl.string(util.t.i4jeWR);
  obj4.onPress = onConfirm;
  const items = [ref(components_Button_Button.Button, obj4), ];
  const obj5 = { size: "lg", grow: true, text: null, onPress: null, variant: "secondary" };
  const intl2 = util.intl;
  obj5.text = intl2.string(util.t.yBZMsQ);
  obj5.onPress = onReset;
  items[1] = ref(components_Button_Button.Button, obj5);
  obj3.children = items;
  obj2.children = closure_1_8(ButtonGroup.ButtonGroup, obj3);
  obj.children = ref(common_SafeAreaView.SafeAreaPaddingView, obj2);
  return ref(View, obj);
});
ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeSortingFilteringBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onSortMethodChange) => {
  const cResult = onSortMethodChange(first[8]).c(44);
  onSortMethodChange = onSortMethodChange.onSortMethodChange;
  const onFiltersChange = onSortMethodChange.onFiltersChange;
  ({ initialSortMethod, initialFilters } = onSortMethodChange);
  closure_9();
  let obj = onSortMethodChange(first[8]);
  const isScreenReaderEnabled = onSortMethodChange(first[13]).useIsScreenReaderEnabled();
  [first, _slicedToArray] = first1.useState(initialSortMethod);
  [first1, View] = first1.useState(initialFilters);
  const obj2 = onSortMethodChange(first[13]);
  [r10036, QuestHomeSortMethods] = first1.useState(0);
  first1.useRef(null);
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
          if (closure_1) {
            const items = [];
            items[HermesBuiltin.arraySpread(arr, 0)] = group;
            let found = items;
          } else {
            found = arr.filter(() => { ... });
          }
          return found;
        });
        return;
      }
    }
    cResult[1] = A;
  } else {
    class A {
      constructor(arg0, arg1) {
        closure_0 = onSortMethodChange;
        closure_1 = arg1;
        tmp = closure_5((arr) => {
          if (closure_1) {
            const items = [];
            items[HermesBuiltin.arraySpread(arr, 0)] = group;
            let found = items;
          } else {
            found = arr.filter(() => { ... });
          }
          return found;
        });
        return;
      }
    }
  }
  closure_8 = A;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        tmp = QuestHomeSortMethods;
        tmp2 = closure_3(QuestHomeSortMethods.SUGGESTED);
        tmp3 = closure_5(closure_10);
        current = closure_7.current;
        if (current != null) {
          setValueResult = current.setValue(tmp.SUGGESTED);
        }
        AccessibilityAnnouncer = closure_0(closure_2[14]).AccessibilityAnnouncer;
        intl = closure_0(closure_2[9]).intl;
        announceResult = AccessibilityAnnouncer.announce(intl.string(closure_0(closure_2[9]).t.bK5N8u));
        return;
      }
    }
    cResult[2] = M;
  } else {
    class M {
      constructor() {
        tmp = QuestHomeSortMethods;
        tmp2 = closure_3(QuestHomeSortMethods.SUGGESTED);
        tmp3 = closure_5(closure_10);
        current = closure_7.current;
        if (current != null) {
          setValueResult = current.setValue(tmp.SUGGESTED);
        }
        AccessibilityAnnouncer = closure_0(closure_2[14]).AccessibilityAnnouncer;
        intl = closure_0(closure_2[9]).intl;
        announceResult = AccessibilityAnnouncer.announce(intl.string(closure_0(closure_2[9]).t.bK5N8u));
        return;
      }
    }
  }
  if (cResult[3] === onFiltersChange) {
    class M {
      constructor() {
        tmp = QuestHomeSortMethods;
        tmp2 = closure_3(QuestHomeSortMethods.SUGGESTED);
        tmp3 = closure_5(closure_10);
        current = closure_7.current;
        if (current != null) {
          setValueResult = current.setValue(tmp.SUGGESTED);
        }
        AccessibilityAnnouncer = closure_0(closure_2[14]).AccessibilityAnnouncer;
        intl = closure_0(closure_2[9]).intl;
        announceResult = AccessibilityAnnouncer.announce(intl.string(closure_0(closure_2[9]).t.bK5N8u));
        return;
      }
    }
  }
  class L {
    constructor() {
      tmp = onSortMethodChange(closure_2);
      tmp2 = onFiltersChange(closure_4);
      obj = closure_1(closure_2[15]);
      hideActionSheetResult = obj.hideActionSheet("QuestHomeSortingFilteringBottomSheet");
      return;
    }
  }
  cResult[3] = onFiltersChange;
  cResult[4] = onSortMethodChange;
  cResult[5] = first1;
  cResult[6] = first;
  cResult[7] = L;
  const tmp8 = _slicedToArray(first1.useState(0), 2);
}) : ((onSortMethodChange) => {
  onSortMethodChange = onSortMethodChange.onSortMethodChange;
  const onFiltersChange = onSortMethodChange.onFiltersChange;
  ({ initialSortMethod, initialFilters } = onSortMethodChange);
  const tmp = closure_9();
  let isScreenReaderEnabled = onSortMethodChange(defaultValue[13]).useIsScreenReaderEnabled();
  const tmp5 = _slicedToArray(first1.useState(initialSortMethod), 2);
  defaultValue = tmp5[0];
  _slicedToArray = tmp7;
  [first1, closure_5] = first1.useState(initialFilters);
  const tmp10 = _slicedToArray(first1.useState(0), 2);
  closure_6 = tmp10[1];
  ref = first1.useRef(null);
  const callback = first1.useCallback((nativeEvent) => {
    closure_6(nativeEvent.nativeEvent.layout.height);
  }, []);
  closure_8 = first1.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_5((arr) => {
      if (closure_1) {
        const items = [];
        items[HermesBuiltin.arraySpread(arr, 0)] = group;
        let found = items;
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
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t.bK5N8u));
  }, []);
  let items = [onSortMethodChange, onFiltersChange, defaultValue, first1];
  const callback2 = first1.useCallback(() => {
    onSortMethodChange(first);
    onFiltersChange(first1);
    ActionSheetActionCreatorsDefault.hideActionSheet("QuestHomeSortingFilteringBottomSheet");
  }, items);
  let obj = onSortMethodChange(defaultValue[13]);
  const questHomeSortOptions = onSortMethodChange(defaultValue[16]).useQuestHomeSortOptions();
  const obj2 = onSortMethodChange(defaultValue[16]);
  const questHomeFilterOptions = onSortMethodChange(defaultValue[16]).useQuestHomeFilterOptions();
  const obj4 = { header: null, footer: null, scrollable: true, startExpanded: true, children: null };
  const obj5 = { title: null };
  let intl = onSortMethodChange(defaultValue[9]).intl;
  obj5.title = intl.string(onSortMethodChange(defaultValue[9]).t.UdhTtk);
  obj4.header = ref(onSortMethodChange(defaultValue[17]).BottomSheetTitleHeader, obj5);
  let tmp15Result = null;
  if (!isScreenReaderEnabled) {
    const obj6 = { onConfirm: callback2, onReset: callback1, onLayout: callback };
    tmp15Result = tmp15(closure_11, obj6);
  }
  obj4.footer = tmp15Result;
  let tmp19;
  if (!isScreenReaderEnabled) {
    const obj7 = { paddingBottom: tmp10[0] };
    tmp19 = obj7;
  }
  const obj8 = { contentContainerStyle: tmp19, style: null, children: null };
  const items1 = [, ];
  ({ content: arr4[0], bodyContainer: arr4[1] } = tmp);
  obj8.style = items1;
  const obj9 = { spacing: onFiltersChange(defaultValue[6]).space.PX_32, children: null };
  const obj10 = { groupRef: ref, hasIcons: false, defaultValue, onChange: tmp5[1], title: null, children: null };
  const intl2 = tmp2(tmp3[9]).intl;
  obj10.title = intl2.string(onSortMethodChange(defaultValue[9]).t.tZXJIS);
  obj10.children = questHomeSortOptions.map((label, index) => ref(onSortMethodChange(first[18]).TableRadioRow, { label: label.label, value: label.value }, index));
  const items2 = [
    ref(onSortMethodChange(defaultValue[19]).TableRadioGroup, obj10),
    questHomeFilterOptions.map((heading, index) => {
      let obj = { title: heading.heading, hasIcons: false, children: null };
      options = heading.options;
      obj.children = options.map((item, index) => {
        const obj = {
          label: onSortMethodChange(10023).getFilterTypeText(item.filter),
          onPress(arg0) {
            return closure_2_8(closure_0, arg0);
          },
          checked: closure_4.some((group) => group.group === item.group && group.filter === arr.filter)
        };
        return ref(onSortMethodChange(5997).TableCheckboxRow, obj, index);
      });
      return ref(TableRowGroup.TableRowGroup, obj, index);
    })
  ];
  obj9.children = items2;
  const items3 = [closure_8(onSortMethodChange(defaultValue[23]).Stack, obj9), ];
  if (isScreenReaderEnabled) {
    const obj11 = { onConfirm: callback2, onReset: callback1, inline: true };
    isScreenReaderEnabled = tmp15(closure_11, obj11);
  }
  items3[1] = isScreenReaderEnabled;
  obj8.children = items3;
  obj4.children = closure_8(onSortMethodChange(defaultValue[24]).BottomSheetScrollView, obj8);
  return ref(onSortMethodChange(defaultValue[25]).BottomSheet, obj4);
});