// discord_app/modules/quests/native/QuestHomeSortingFilteringBottomSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import shared from "../../../design/shared.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import ButtonGroup from "../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function FilterFooter(inline) {
  let flag = inline.inline;
  ({ onConfirm, onReset, onLayout } = inline);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_9();
  if (flag) {
    let footerInline = tmp.footerInline;
  } else {
    footerInline = [,];
    ({ footer: arr[0], content: arr[1] } = tmp);
  }
  const obj = { style: footerInline, onLayout, children: null };
  const obj2 = { bottom: true, children: null };
  const obj3 = { direction: "vertical", style: tmp.footerButtonGroup, children: null };
  const obj4 = { size: "lg", grow: true, text: null, onPress: null };
  const intl = util.intl;
  obj4.text = intl.string(util.t.i4jeWR);
  obj4.onPress = onConfirm;
  const items = [React5(components_Button_Button.Button, obj4)];
  const obj5 = { size: "lg", grow: true, text: null, onPress: null, variant: "secondary" };
  const intl2 = util.intl;
  obj5.text = intl2.string(util.t.yBZMsQ);
  obj5.onPress = onReset;
  items[1] = React5(components_Button_Button.Button, obj5);
  obj3.children = items;
  obj2.children = React6(ButtonGroup.ButtonGroup, obj3);
  obj.children = React5(common_SafeAreaView.SafeAreaPaddingView, obj2);
  return React5(View, obj);
}
const View = fn(17).View;
const QuestHomeSortMethods = fn(5525).QuestHomeSortMethods;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  content: { paddingHorizontal: nativeDefault.space.PX_16 },
  bodyContainer: { flex: 1, minHeight: 0 },
  footerInline: null,
  footer: null,
  footerButtonGroup: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.footerInline = { paddingTop: nativeDefault.space.PX_16 };
let obj4 = { paddingTop: nativeDefault.space.PX_16 };
obj2.footer = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.footerButtonGroup = { paddingBottom: 0 };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeSortingFilteringBottomSheet.tsx");

export default function QuestHomeSortingFilteringBottomSheet(onSortMethodChange) {
  onSortMethodChange = onSortMethodChange.onSortMethodChange;
  const onFiltersChange = onSortMethodChange.onFiltersChange;
  ({ initialSortMethod, initialFilters } = onSortMethodChange);
  const tmp = closure_9();
  let isScreenReaderEnabled = onSortMethodChange(defaultValue[11]).useIsScreenReaderEnabled();
  const tmp5 = _slicedToArray(first1.useState(initialSortMethod), 2);
  defaultValue = tmp5[0];
  _slicedToArray = tmp7;
  [first1, closure_5] = first1.useState(initialFilters);
  const tmp10 = _slicedToArray(first1.useState(0), 2);
  closure_6 = tmp10[1];
  const ref = first1.useRef(null);
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
  let obj = onSortMethodChange(defaultValue[11]);
  const questHomeSortOptions = onSortMethodChange(defaultValue[14]).useQuestHomeSortOptions();
  const obj2 = onSortMethodChange(defaultValue[14]);
  const questHomeFilterOptions = onSortMethodChange(defaultValue[14]).useQuestHomeFilterOptions();
  const obj4 = { header: null, footer: null, scrollable: true, startExpanded: true, children: null };
  const obj5 = { title: null };
  let intl = onSortMethodChange(defaultValue[10]).intl;
  obj5.title = intl.string(onSortMethodChange(defaultValue[10]).t.UdhTtk);
  obj4.header = ref(onSortMethodChange(defaultValue[16]).BottomSheetTitleHeader, obj5);
  let tmp15Result = null;
  if (!isScreenReaderEnabled) {
    const obj6 = { onConfirm: callback2, onReset: callback1, onLayout: callback };
    tmp15Result = tmp15(FilterFooter, obj6);
  }
  obj4.footer = tmp15Result;
  let tmp19;
  if (!isScreenReaderEnabled) {
    const obj7 = { paddingBottom: tmp10[0] };
    tmp19 = obj7;
  }
  const obj8 = { contentContainerStyle: tmp19, style: null, children: null };
  const items1 = [,];
  ({ content: arr4[0], bodyContainer: arr4[1] } = tmp);
  obj8.style = items1;
  const obj9 = { spacing: onFiltersChange(defaultValue[6]).space.PX_32, children: null };
  const obj10 = { groupRef: ref, hasIcons: false, defaultValue, onChange: tmp5[1], title: null, children: null };
  const intl2 = tmp2(tmp3[10]).intl;
  obj10.title = intl2.string(onSortMethodChange(defaultValue[10]).t.tZXJIS);
  obj10.children = questHomeSortOptions.map((label, index) =>
    ref(onSortMethodChange(first[20]).TableRadioRow, { label: label.label, value: label.value }, index),
  );
  const items2 = [
    ref(onSortMethodChange(defaultValue[19]).TableRadioGroup, obj10),
    questHomeFilterOptions.map((heading, index) => {
      let obj = { title: heading.heading, hasIcons: false, children: null };
      const options = heading.options;
      obj.children = options.map((item, index) => {
        const obj = {
          label: onSortMethodChange(11429).getFilterTypeText(item.filter),
          onPress(arg0) {
            return closure_2_8(closure_0, arg0);
          },
          checked: closure_4.some((group) => group.group === item.group && group.filter === arr.filter),
        };
        return ref(onSortMethodChange(5685).TableCheckboxRow, obj, index);
      });
      return React5(TableRowGroup.TableRowGroup, obj, index);
    }),
  ];
  obj9.children = items2;
  const items3 = [closure_8(onSortMethodChange(defaultValue[18]).Stack, obj9)];
  if (isScreenReaderEnabled) {
    const obj11 = { onConfirm: callback2, onReset: callback1, inline: true };
    isScreenReaderEnabled = tmp15(FilterFooter, obj11);
  }
  items3[1] = isScreenReaderEnabled;
  obj8.children = items3;
  obj4.children = closure_8(onSortMethodChange(defaultValue[17]).BottomSheetScrollView, obj8);
  return ref(onSortMethodChange(defaultValue[15]).BottomSheet, obj4);
}
