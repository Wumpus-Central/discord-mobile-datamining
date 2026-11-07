// discord_app/modules/user_profile/native/UserProfileWidgetAddActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ConjureMobileExperiment from "../../conjure/experiments/ConjureMobileExperiment.tsx";
import UserProfileWidgetOptionAddButtonDefault from "UserProfileWidgetOptionAddButton.tsx";
import useAddProfileWidgetDefault from "../hooks/native/useAddProfileWidget.tsx";
import ConjureCustomWidget from "../../conjure/custom_widget/ConjureCustomWidget.tsx";
import UserProfileWidgetOptionConjureButtonDefault from "UserProfileWidgetOptionConjureButton.tsx";
import useStableAddableWidgetsDefault from "../hooks/useStableAddableWidgets.tsx";
import UserProfileAddableWidgetCategories from "../UserProfileAddableWidgetCategories.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function WidgetCategoryEmptyState(tabName) {
  const tmp = closure_9();
  const obj = { style: tmp.emptyState, children: null };
  const obj2 = { variant: "body-md/medium", color: "text-subtle", style: tmp.emptyStateText, children: null };
  const intl = util.intl;
  obj2.children = intl.formatToPlainString(util.t.mcdIFp, { tabName: tabName.tabName });
  obj.children = timestampProducer(Text_Text.Text, obj2);
  return timestampProducer(View, obj);
}
function WidgetOptionsList(widgets) {
  widgets = widgets.widgets;
  _require = useAddProfileWidgetDefault();
  let obj = { contentContainerStyle: null, children: null };
  items = [closure_9().list, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj.contentContainerStyle = items;
  const items1 = [
    widgets.map((widget) => {
      const obj = {
        widget,
        onPress() {
          return widget(widget);
        },
        padding: nativeDefault.space.PX_12,
      };
      return closure_1_6(UserProfileWidgetOptionAddButtonDefault, obj, widget.getUniqueKey());
    }),
    widgets.children,
  ];
  obj.children = items1;
  return closure_7(require("BottomSheetModal").BottomSheetScrollView, obj);
}
function InterestsOptionsPage(widgets) {
  widgets = widgets.widgets;
  const canConjureCustomWidget = ConjureCustomWidget.useCanConjureCustomWidget(UserProfileWidgetAddActionSheet);
  let isConjureMobileEnabled = ConjureMobileExperiment.useIsConjureMobileEnabled(
    canConjureCustomWidget,
    UserProfileWidgetAddActionSheet,
  );
  if (0 === widgets.length) {
    if (!isConjureMobileEnabled) {
      const obj3 = { tabName: widgets.tabName };
      let tmp7Result = timestampProducer(WidgetCategoryEmptyState, obj3);
    }
    return tmp7Result;
  }
  const obj4 = { widgets, children: null };
  if (isConjureMobileEnabled) {
    isConjureMobileEnabled = timestampProducer(UserProfileWidgetOptionConjureButtonDefault, {});
  }
  obj4.children = isConjureMobileEnabled;
  tmp7Result = timestampProducer(WidgetOptionsList, obj4);
}
function GameStatsOptionsPage(widgets) {
  widgets = widgets.widgets;
  if (0 === widgets.length) {
    const obj2 = { tabName: tmp };
    let tmp4 = timestampProducer(WidgetCategoryEmptyState, obj2);
  } else {
    const obj = { widgets };
    tmp4 = timestampProducer(WidgetOptionsList, obj);
  }
  return tmp4;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const UserProfileWidgetAddActionSheet = "UserProfileWidgetAddActionSheet";
const createStyles = fn(5140);
let obj2 = {
  container: { flex: 1, gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 },
  tabs: null,
  list: null,
  emptyState: null,
  emptyStateText: null,
};
let obj3 = { flex: 1, gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
obj2.tabs = { marginHorizontal: -nativeDefault.space.PX_16 };
let obj4 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj2.list = { gap: nativeDefault.space.PX_12 };
let obj5 = { gap: nativeDefault.space.PX_12 };
obj2.emptyState = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.emptyStateText = { textAlign: "center" };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetAddActionSheet.tsx");

export default function UserProfileWidgetAddActionSheet() {
  const tmp = closure_9();
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
  const obj2 = { pageWidth: tmp2[0], items: null };
  const obj = require("SegmentedControlState");
  const items1 = [
    {
      id: "interests",
      label: stringResult,
      page: closure_6(InterestsOptionsPage, { widgets: interestsWidgets, tabName: stringResult }),
    },
  ];
  const obj3 = {
    id: "interests",
    label: stringResult,
    page: closure_6(InterestsOptionsPage, { widgets: interestsWidgets, tabName: stringResult }),
  };
  items1[1] = {
    id: "gameStats",
    label: stringResult1,
    page: closure_6(GameStatsOptionsPage, { widgets: applicationWidgets, tabName: stringResult1 }),
  };
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
  const obj4 = {
    id: "gameStats",
    label: stringResult1,
    page: closure_6(GameStatsOptionsPage, { widgets: applicationWidgets, tabName: stringResult1 }),
  };
  const items2 = [
    closure_6(View, {
      style: tmp.tabs,
      children: closure_6(require("Tabs/Tabs").Tabs, { state: segmentedControlState }),
    }),
    closure_6(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState }),
  ];
  obj7.children = items2;
  obj5.children = closure_7(View, obj7);
  return closure_6(require("ActionSheet").ActionSheet, obj5);
}
