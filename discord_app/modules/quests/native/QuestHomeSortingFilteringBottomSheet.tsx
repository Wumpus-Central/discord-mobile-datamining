// === Module 14842: FilterFooter ===

// Module 14842 (FilterFooter)
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Button from "Button" /* 4929 */;
import ButtonGroup from "ButtonGroup" /* 5385 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5562 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { QuestHomeSortMethods } from "QuestsExperimentLocations" /* 5396 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function FilterFooter(inline) {
  let flag = inline.inline;
  ({ onConfirm, onReset, onLayout } = inline);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback3();
  if (flag) {
    let footerInline = tmp.footerInline;
  } else {
    footerInline = [, ];
    ({ footer: arr[0], content: arr[1] } = tmp);
  }
  let obj = { style: footerInline, onLayout, children: null };
  obj = { bottom: true, children: null };
  obj = { direction: "vertical", style: tmp.footerButtonGroup, children: null };
  obj1 = { size: "lg", grow: true, text: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj1[2] = intl.string(getSystemLocale.t.i4jeWR);
  obj1[3] = onConfirm;
  const items = [closure_7(Button.Button, obj1), ];
  const obj2 = { size: "lg", grow: true, text: null, onPress: null, variant: "secondary" };
  const intl2 = getSystemLocale.intl;
  obj2[2] = intl2.string(getSystemLocale.t.yBZMsQ);
  obj2[3] = onReset;
  items[1] = closure_7(Button.Button, obj2);
  obj[2] = items;
  obj[1] = callback2(ButtonGroup.ButtonGroup, obj);
  obj[2] = closure_7(SafeAreaPaddingView.SafeAreaPaddingView, obj);
  return closure_7(View, obj);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { content: null, bodyContainer: null, footerInline: null, footer: null, footerButtonGroup: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, minHeight: 0 };
createCacheKey[2] = { paddingTop: ThemesDefault.space.PX_16 };
let obj1 = { paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[4] = { paddingBottom: 0 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = [];
let obj2 = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("set").fileFinishedImporting("modules/quests/native/QuestHomeSortingFilteringBottomSheet.tsx");

export default function QuestHomeSortingFilteringBottomSheet(onSortMethodChange) {
  onSortMethodChange = onSortMethodChange.onSortMethodChange;
  const onFiltersChange = onSortMethodChange.onFiltersChange;
  ({ initialSortMethod, initialFilters } = onSortMethodChange);
  let obj = onSortMethodChange(first[11]);
  let isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const tmp5 = callback(first1.useState(initialSortMethod), 2);
  first = tmp5[0];
  callback = tmp7;
  const tmp8 = callback(first1.useState(initialFilters), 2);
  first1 = tmp8[0];
  closure_5 = tmp8[1];
  const tmp10 = callback(first1.useState(0), 2);
  closure_6 = tmp10[1];
  const ref = first1.useRef(null);
  callback = first1.useCallback((nativeEvent) => {
    lib(nativeEvent.nativeEvent.layout.height);
  }, []);
  closure_8 = first1.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    callback2((arr) => {
      if (closure_1) {
        const items = [];
        items[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
        let found = items;
      } else {
        found = arr.filter((group) => !(group.group === group.group && group.filter === arr.filter));
      }
      return found;
    });
  }, []);
  const callback1 = first1.useCallback(() => {
    callback(lib.SUGGESTED);
    callback2(closure_1_10);
    const current = ref.current;
    if (current != null) {
      current.setValue(lib.SUGGESTED);
    }
    const AccessibilityAnnouncer = onSortMethodChange(first[12]).AccessibilityAnnouncer;
    const intl = onSortMethodChange(first[10]).intl;
    AccessibilityAnnouncer.announce(intl.string(onSortMethodChange(first[10]).t.bK5N8u));
  }, []);
  let items = [onSortMethodChange, onFiltersChange, first, first1];
  const callback2 = first1.useCallback(() => {
    onSortMethodChange(first);
    onFiltersChange(first1);
    onFiltersChange(first[13]).hideActionSheet("QuestHomeSortingFilteringBottomSheet");
  }, items);
  obj1 = onSortMethodChange(first[14]);
  const questHomeSortOptions = obj1.useQuestHomeSortOptions();
  let obj2 = onSortMethodChange(first[14]);
  const questHomeFilterOptions = obj2.useQuestHomeFilterOptions();
  obj = { header: null, footer: null, scrollable: true, startExpanded: true, children: null };
  obj = { title: null };
  let intl = onSortMethodChange(first[10]).intl;
  obj[0] = intl.string(onSortMethodChange(first[10]).t.UdhTtk);
  obj[0] = ref(onSortMethodChange(first[16]).BottomSheetTitleHeader, obj);
  let tmp15Result = null;
  if (!isScreenReaderEnabled) {
    obj1 = { onConfirm: null, onReset: null, onLayout: null };
    obj1[0] = callback2;
    obj1[1] = callback1;
    obj1[2] = callback;
    tmp15Result = tmp15(FilterFooter, obj1);
  }
  obj[1] = tmp15Result;
  let tmp19;
  if (!isScreenReaderEnabled) {
    obj2 = { paddingBottom: null };
    obj2[0] = tmp10[0];
    tmp19 = obj2;
  }
  const obj3 = { contentContainerStyle: tmp19, style: items1, children: null };
  items1 = [, ];
  ({ content: arr4[0], bodyContainer: arr4[1] } = callback3());
  const obj4 = { spacing: onFiltersChange(first[6]).space.PX_32, children: null };
  const obj5 = { groupRef: ref, hasIcons: false, defaultValue: first, onChange: tmp5[1], title: null, children: null };
  const intl2 = tmp2(tmp3[10]).intl;
  obj5[4] = intl2.string(onSortMethodChange(first[10]).t.tZXJIS);
  obj5[5] = questHomeSortOptions.map((label) => ref(onSortMethodChange(first[20]).TableRadioRow, { label: label.label, value: label.value }, arg1));
  const items2 = [
    ref(onSortMethodChange(first[19]).TableRadioGroup, obj5),
    questHomeFilterOptions.map((heading) => {
      const options = heading.options;
      return ref(onSortMethodChange(first[21]).TableRowGroup, {
        title: heading.heading,
        hasIcons: false,
        children: options.map((arg0, arg1) => {
          closure_0 = arg0;
          const obj = {
            label: closure_1_0(closure_1_2[23]).getFilterTypeText(arg0.filter),
            onPress(arg0) {
              return closure_1_8(closure_0, arg0);
            },
            checked: closure_4.some((group) => group.group === group.group && group.filter === arr.filter)
          };
          return closure_1_7(closure_1_0(closure_1_2[22]).TableCheckboxRow, obj, arg1);
        })
      }, arg1);
    })
  ];
  obj4[1] = items2;
  const items3 = [closure_8(onSortMethodChange(first[18]).Stack, obj4), ];
  if (isScreenReaderEnabled) {
    const obj6 = { onConfirm: null, onReset: null, inline: true };
    obj6[0] = callback2;
    obj6[1] = callback1;
    isScreenReaderEnabled = tmp15(FilterFooter, obj6);
  }
  items3[1] = isScreenReaderEnabled;
  obj3[2] = items3;
  obj[4] = closure_8(onSortMethodChange(first[17]).BottomSheetScrollView, obj3);
  return ref(onSortMethodChange(first[15]).BottomSheet, obj);
};