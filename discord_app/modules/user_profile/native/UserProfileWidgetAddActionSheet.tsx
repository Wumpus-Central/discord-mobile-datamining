// === Module 15156: UserProfileWidgetAddActionSheet ===

// Module 15156 (UserProfileWidgetAddActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import Text_Text from "Text/Text" /* 5781 */;
import UserProfileWidgetOptionAddButtonDefault from "UserProfileWidgetOptionAddButton" /* 15146 */;
import useAddProfileWidgetDefault from "useAddProfileWidget" /* 15155 */;
import useStableAddableWidgetsDefault from "useStableAddableWidgets" /* 15157 */;
import UserProfileAddableWidgetCategories from "UserProfileAddableWidgetCategories" /* 15158 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function WidgetCategoryEmptyState(tabName) {
  const tmp = closure_8();
  const obj = { style: tmp.emptyState, children: null };
  const obj2 = { variant: "body-md/medium", color: "text-subtle", style: tmp.emptyStateText, children: null };
  const intl = util.intl;
  obj2.children = intl.formatToPlainString(util.t.mcdIFp, { tabName: tabName.tabName });
  obj.children = timestampProducer(Text_Text.Text, obj2);
  return timestampProducer(View, obj);
}
function WidgetOptionsPage(widgets) {
  widgets = widgets.widgets;
  _require = useAddProfileWidgetDefault();
  if (0 === widgets.length) {
    const obj2 = { tabName: widgets.tabName };
    let tmp5 = closure_6(WidgetCategoryEmptyState, obj2);
  } else {
    let obj = { contentContainerStyle: null, children: null };
    items = [tmp.list, ];
    const obj3 = { paddingBottom: useSafeAreaInsetsDefault().bottom };
    items[1] = obj3;
    obj.contentContainerStyle = items;
    obj.children = widgets.map((widget) => {
      const obj = {
        widget,
        onPress() {
          return widget(widget);
        },
        padding: nativeDefault.space.PX_12
      };
      return closure_1_6(UserProfileWidgetOptionAddButtonDefault, obj, widget.getUniqueKey());
    });
    tmp5 = closure_6(require("BottomSheetModal").BottomSheetScrollView, obj);
  }
  return tmp5;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5170);
let obj2 = { container: { flex: 1, gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 }, list: null, emptyState: null, emptyStateText: null };
let obj3 = { flex: 1, gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
obj2.list = { gap: nativeDefault.space.PX_12 };
let obj4 = { gap: nativeDefault.space.PX_12 };
obj2.emptyState = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.emptyStateText = { textAlign: "center" };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetAddActionSheet.tsx");

export default function UserProfileWidgetAddActionSheet() {
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  _require = tmp2[1];
  const tmp3 = useStableAddableWidgetsDefault();
  importDefault = tmp3;
  items = [tmp3];
  const memo = noop.useMemo(() => UserProfileAddableWidgetCategories.partitionAddableWidgets(closure_1), items);
  ({ interestsWidgets, applicationWidgets } = memo);
  const intl = require("util").intl;
  const stringResult = intl.string(require("util").t.NpchGq);
  const intl2 = require("util").intl;
  const stringResult1 = intl2.string(require("util").t.EKR8Ps);
  const tmp = closure_8();
  const obj2 = { pageWidth: tmp2[0], items: null };
  const obj = require("SegmentedControlState");
  const items1 = [{ id: "interests", label: stringResult, page: closure_6(WidgetOptionsPage, { widgets: interestsWidgets, tabName: stringResult }) }, ];
  const obj3 = { id: "interests", label: stringResult, page: closure_6(WidgetOptionsPage, { widgets: interestsWidgets, tabName: stringResult }) };
  items1[1] = { id: "gameStats", label: stringResult1, page: closure_6(WidgetOptionsPage, { widgets: applicationWidgets, tabName: stringResult1 }) };
  obj2.items = items1;
  const segmentedControlState = obj.useSegmentedControlState(obj2);
  const callback = noop.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj5 = { header: null, scrollable: true, startExpanded: true, children: null };
  const obj6 = { title: null };
  const intl3 = require("util").intl;
  obj6.title = intl3.string(require("util").t["grUgR+"]);
  obj5.header = closure_6(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj6);
  const obj7 = { style: tmp.container, onLayout: callback, children: null };
  const obj4 = { id: "gameStats", label: stringResult1, page: closure_6(WidgetOptionsPage, { widgets: applicationWidgets, tabName: stringResult1 }) };
  const items2 = [closure_6(View, { children: closure_6(require("Tabs/Tabs").Tabs, { state: segmentedControlState }) }), closure_6(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState })];
  obj7.children = items2;
  obj5.children = closure_7(View, obj7);
  return closure_6(require("ActionSheet").ActionSheet, obj5);
};