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
  let obj = { style: footerInline, onLayout, children: null };
  obj = { bottom: true, children: null };
  obj = { direction: "vertical", style: tmp.footerButtonGroup, children: null };
  const obj1 = { size: "lg", grow: true, text: null, onPress: null };
  const intl = util.intl;
  obj1.text = intl.string(util.t.i4jeWR);
  obj1.onPress = onConfirm;
  const items = [React5(components_Button_Button.Button, obj1)];
  const obj2 = { size: "lg", grow: true, text: null, onPress: null, variant: "secondary" };
  const intl2 = util.intl;
  obj2.text = intl2.string(util.t.yBZMsQ);
  obj2.onPress = onReset;
  items[1] = React5(components_Button_Button.Button, obj2);
  obj.children = items;
  obj.children = React6(ButtonGroup.ButtonGroup, obj);
  obj.children = React5(common_SafeAreaView.SafeAreaPaddingView, obj);
  return React5(View, obj);
}
const View = fn(17).View;
const QuestHomeSortMethods = fn(5444).QuestHomeSortMethods;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { content: null, bodyContainer: null, footerInline: null, footer: null, footerButtonGroup: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.content = createStyles;
createStyles.bodyContainer = { flex: 1, minHeight: 0 };
createStyles.footerInline = { paddingTop: nativeDefault.space.PX_16 };
let obj1 = { paddingTop: nativeDefault.space.PX_16 };
createStyles.footer = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.footerButtonGroup = { paddingBottom: 0 };
let closure_9 = createStyles.createStyles(createStyles);
let closure_10 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeSortingFilteringBottomSheet.tsx");

export default function QuestHomeSortingFilteringBottomSheet(onSortMethodChange) {
  onSortMethodChange = onSortMethodChange.onSortMethodChange;
  const onFiltersChange = onSortMethodChange.onFiltersChange;
  ({ initialSortMethod, initialFilters } = onSortMethodChange);
  let obj = onSortMethodChange(defaultValue[11]);
  let isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const tmp5 = _slicedToArray(first1.useState(initialSortMethod), 2);
  defaultValue = tmp5[0];
  _slicedToArray = tmp7;
  const tmp8 = _slicedToArray(first1.useState(initialFilters), 2);
  first1 = tmp8[0];
  closure_5 = tmp8[1];
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
  let obj1 = onSortMethodChange(defaultValue[14]);
  const questHomeSortOptions = obj1.useQuestHomeSortOptions();
  let obj2 = onSortMethodChange(defaultValue[14]);
  const questHomeFilterOptions = obj2.useQuestHomeFilterOptions();
  obj = { header: null, footer: null, scrollable: true, startExpanded: true, children: null };
  obj = { title: null };
  let intl = onSortMethodChange(defaultValue[10]).intl;
  obj.title = intl.string(onSortMethodChange(defaultValue[10]).t.UdhTtk);
  obj.header = ref(onSortMethodChange(defaultValue[16]).BottomSheetTitleHeader, obj);
  let tmp15Result = null;
  if (!isScreenReaderEnabled) {
    obj1 = { onConfirm: callback2, onReset: callback1, onLayout: callback };
    tmp15Result = tmp15(FilterFooter, obj1);
  }
  obj.footer = tmp15Result;
  let tmp19;
  if (!isScreenReaderEnabled) {
    obj2 = { paddingBottom: tmp10[0] };
    tmp19 = obj2;
  }
  const obj3 = { contentContainerStyle: tmp19, style: null, children: null };
  const items1 = [,];
  ({ content: arr4[0], bodyContainer: arr4[1] } = closure_9());
  obj3.style = items1;
  const obj4 = { spacing: onFiltersChange(defaultValue[6]).space.PX_32, children: null };
  const obj5 = { groupRef: ref, hasIcons: false, defaultValue, onChange: tmp5[1], title: null, children: null };
  const intl2 = tmp2(tmp3[10]).intl;
  obj5.title = intl2.string(onSortMethodChange(defaultValue[10]).t.tZXJIS);
  obj5.children = questHomeSortOptions.map((label, index) =>
    ref(onSortMethodChange(first[20]).TableRadioRow, { label: label.label, value: label.value }, index),
  );
  const items2 = [
    ref(onSortMethodChange(defaultValue[19]).TableRadioGroup, obj5),
    questHomeFilterOptions.map((heading, index) => {
      let obj = { title: heading.heading, hasIcons: false, children: null };
      const options = heading.options;
      obj.children = options.map((item, index) => {
        const obj = {
          label: onSortMethodChange(11295).getFilterTypeText(item.filter),
          onPress(arg0) {
            return closure_2_8(closure_0, arg0);
          },
          checked: closure_4.some((group) => group.group === item.group && group.filter === arr.filter),
        };
        return ref(onSortMethodChange(5604).TableCheckboxRow, obj, index);
      });
      return React5(TableRowGroup.TableRowGroup, obj, index);
    }),
  ];
  obj4.children = items2;
  const items3 = [closure_8(onSortMethodChange(defaultValue[18]).Stack, obj4)];
  if (isScreenReaderEnabled) {
    const obj6 = { onConfirm: callback2, onReset: callback1, inline: true };
    isScreenReaderEnabled = tmp15(FilterFooter, obj6);
  }
  items3[1] = isScreenReaderEnabled;
  obj3.children = items3;
  obj.children = closure_8(onSortMethodChange(defaultValue[17]).BottomSheetScrollView, obj3);
  return ref(onSortMethodChange(defaultValue[15]).BottomSheet, obj);
}
