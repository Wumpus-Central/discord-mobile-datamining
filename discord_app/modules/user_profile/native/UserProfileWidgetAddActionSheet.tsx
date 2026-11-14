// === Module 15828: UserProfileWidgetAddActionSheet ===

// Module 15828 (UserProfileWidgetAddActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import BottomSheetModal from "BottomSheetModal" /* 5570 */;
import Text_Text from "Text/Text" /* 5929 */;
import ConjureMobileExperiment from "ConjureMobileExperiment" /* 10516 */;
import useConjureServerWidgetOffersDefault from "useConjureServerWidgetOffers" /* 15808 */;
import turnOnConjureServerWidgetDefault from "turnOnConjureServerWidget" /* 15815 */;
import UserProfileWidgetOptionAddButtonDefault from "UserProfileWidgetOptionAddButton" /* 15819 */;
import UserProfileAddableWidgetCategories from "UserProfileAddableWidgetCategories" /* 15823 */;
import useAddProfileWidgetDefault from "useAddProfileWidget" /* 15824 */;
import ConjureCustomWidget from "ConjureCustomWidget" /* 15825 */;
import UserProfileWidgetOptionConjureButtonDefault from "UserProfileWidgetOptionConjureButton" /* 15826 */;
import useStableAddableWidgetsDefault from "useStableAddableWidgets" /* 15829 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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
function WidgetOptionsScrollView(children) {
  const obj = { contentContainerStyle: null, children: children.children };
  items = [closure_9().list, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj.contentContainerStyle = items;
  return timestampProducer(BottomSheetModal.BottomSheetScrollView, obj);
}
function WidgetOptionsList(widgets) {
  widgets = widgets.widgets;
  closure_0 = useAddProfileWidgetDefault();
  let obj = { children: null };
  items = [
    widgets.map((widget) => {
      const obj = {
        widget,
        onPress() {
          return widget(widget);
        },
        padding: nativeDefault.space.PX_12
      };
      return closure_1_6(UserProfileWidgetOptionAddButtonDefault, obj, widget.getUniqueKey());
    }),
    widgets.children
  ];
  obj.children = items;
  return closure_7(WidgetOptionsScrollView, obj);
}
function InterestsOptionsPage(widgets) {
  widgets = widgets.widgets;
  const canConjureCustomWidget = ConjureCustomWidget.useCanConjureCustomWidget(UserProfileWidgetAddActionSheet);
  let isConjureMobileEnabled = ConjureMobileExperiment.useIsConjureMobileEnabled(canConjureCustomWidget, UserProfileWidgetAddActionSheet);
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
function hideSheet() {
  ActionSheetActionCreatorsDefault.hideActionSheet("UserProfileWidgetAddActionSheet");
}
function ServerWidgetOptionRow(widget) {
  widget = widget.widget;
  const getOrFetchApplication = widget(7259).useGetOrFetchApplication(widget.applicationId);
  let str;
  if (getOrFetchApplication != null) {
    str = getOrFetchApplication.name;
  }
  if (str == null) {
    str = "";
  }
  const obj2 = { icon: null, label: null, subLabel: null, onPress: null };
  const obj = widget(7259);
  obj2.icon = closure_6(widget(7443).TableRow.Icon, { IconComponent: widget(13466).CirclePlusIcon });
  obj2.label = str;
  const intl = tmp(1113).intl;
  obj2.subLabel = intl.formatToPlainString(_modDef4131.ZZywee, { applicationName: str });
  obj2.onPress = function onPress() {
    return turnOnConjureServerWidgetDefault(widget.applicationId, hideSheet);
  };
  return closure_6(widget(7443).TableRow, obj2);
}
function ServerWidgetsOptionsPage(offers) {
  offers = offers.offers;
  if (0 === offers.length) {
    const obj2 = { tabName: tmp };
    let tmp4 = timestampProducer(WidgetCategoryEmptyState, obj2);
  } else {
    const obj = {
      children: offers.map((widgets) => {
          widgets = widgets.widgets;
          ({ guildId, guildName } = widgets);
          return closure_1_6(require("TableRowGroup").TableRowGroup, { title: guildName, hasIcons: true, children: widgets.map((widget) => closure_1_6(closure_1_16, { widget }, widget.getUniqueKey())) }, guildId);
        })
    };
    tmp4 = timestampProducer(WidgetOptionsScrollView, obj);
  }
  return tmp4;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const UserProfileWidgetAddActionSheet = "UserProfileWidgetAddActionSheet";
const createStyles = fn(5306);
let obj2 = { container: { flex: 1, gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 }, tabs: null, list: null, emptyState: null, emptyStateText: null };
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
  const tmp5 = useStableAddableWidgetsDefault();
  importDefault = tmp5;
  items = [tmp5];
  const memo = noop.useMemo(() => UserProfileAddableWidgetCategories.partitionAddableWidgets(closure_1), items);
  ({ interestsWidgets, applicationWidgets } = memo);
  const arr2 = useConjureServerWidgetOffersDefault();
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  const first = tmp7[0];
  let tmp9 = arr2.length > 0;
  if (tmp9) {
    tmp9 = !first;
  }
  if (tmp9) {
    tmp7[1](true);
  }
  const intl = require("util").intl;
  const stringResult = intl.string(require("util").t.NpchGq);
  const intl2 = require("util").intl;
  const stringResult1 = intl2.string(require("util").t.EKR8Ps);
  const intl3 = require("util").intl;
  const stringResult2 = intl3.string(_modDef4131.OUrOHL);
  const obj3 = { pageWidth: tmp2[0], items: null };
  const obj2 = require("SegmentedControlState");
  const items1 = [{ id: "interests", label: stringResult, page: closure_6(InterestsOptionsPage, { widgets: interestsWidgets, tabName: stringResult }) }, ];
  const obj4 = { id: "interests", label: stringResult, page: closure_6(InterestsOptionsPage, { widgets: interestsWidgets, tabName: stringResult }) };
  items1[1] = { id: "gameStats", label: stringResult1, page: closure_6(GameStatsOptionsPage, { widgets: applicationWidgets, tabName: stringResult1 }) };
  if (first) {
    const obj6 = { id: "fromYourServers", label: stringResult2, page: null };
    const obj7 = { offers: arr2, tabName: stringResult2 };
    obj6.page = closure_6(ServerWidgetsOptionsPage, obj7);
    const items2 = [obj6];
    let items3 = items2;
  } else {
    items3 = [];
  }
  HermesBuiltin.arraySpread(items3, 2);
  obj3.items = items1;
  const segmentedControlState = obj2.useSegmentedControlState(obj3);
  const callback = noop.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj8 = { header: null, scrollable: true, startExpanded: true, children: null };
  const obj9 = { title: null };
  const intl4 = tmp11(1113).intl;
  obj9.title = intl4.string(require("util").t["grUgR+"]);
  obj8.header = closure_6(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj9);
  const obj10 = { style: tmp.container, onLayout: callback, children: null };
  const obj5 = { id: "gameStats", label: stringResult1, page: closure_6(GameStatsOptionsPage, { widgets: applicationWidgets, tabName: stringResult1 }) };
  const items4 = [closure_6(View, { style: tmp.tabs, children: closure_6(require("Tabs/Tabs").Tabs, { state: segmentedControlState }) }), closure_6(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState, bounces: false })];
  obj10.children = items4;
  obj8.children = closure_7(View, obj10);
  return closure_6(require("ActionSheet").ActionSheet, obj8);
};