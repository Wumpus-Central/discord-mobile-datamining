// === Module 16822: UserProfileWidgetAddActionSheet ===

// Module 16822 (UserProfileWidgetAddActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import Text_Text from "Text/Text" /* 5763 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8908 */;
import WidgetUtils from "WidgetUtils" /* 12571 */;
import useStableAddableWidgetsDefault from "useStableAddableWidgets" /* 16826 */;
import UserProfileAddableWidgetCategories from "UserProfileAddableWidgetCategories" /* 16831 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

require = fn;
function WidgetCategoryEmptyState(tabName) {
  const tmp = closure_10();
  const obj = { style: tmp.emptyState, children: null };
  const obj2 = { variant: "body-md/medium", color: "text-subtle", style: tmp.emptyStateText, children: null };
  const intl = util.intl;
  obj2.children = intl.formatToPlainString(util.t.mcdIFp, { tabName: tabName.tabName });
  obj.children = React5(Text_Text.Text, obj2);
  return React5(View, obj);
}
function WidgetOptionsPage(widgets) {
  widgets = widgets.widgets;
  let stateFromStores;
  const tmp = closure_10();
  const tmp3 = stateFromStores;
  items = [AuthenticationStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => id.getId());
  const items1 = [stateFromStores];
  importDefault = noop.useCallback((getProfileEditAnalyticsOptions) => {
    WidgetUtils.addWidgetToPending(getProfileEditAnalyticsOptions);
    const merged = Object.assign(getProfileEditAnalyticsOptions.getProfileEditAnalyticsOptions());
    const result = UserProfileAnalyticsUtils.trackUserProfileEditAction({ userId: stateFromStores, action: constants.WIDGET_ADDED });
    const obj3 = { userId: stateFromStores, action: constants.WIDGET_ADDED };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  if (0 === widgets.length) {
    let obj2 = { tabName: widgets.tabName };
    let tmp6 = closure_8(WidgetCategoryEmptyState, obj2);
  } else {
    let obj3 = { contentContainerStyle: null, children: null };
    const items2 = [tmp.list, ];
    const obj4 = { paddingBottom: useSafeAreaInsetsDefault().bottom };
    items2[1] = obj4;
    obj3.contentContainerStyle = items2;
    obj3.children = widgets.map((widget) => {
      closure_0 = widget;
      const obj = {
        widget,
        onPress() {
          return closure_1(closure_0);
        },
        padding: closure_1(575).space.PX_12
      };
      return closure_1_8(closure_1(16823), obj, widget.getUniqueKey());
    });
    tmp6 = closure_8(tmp3(5402).BottomSheetScrollView, obj3);
  }
  return tmp6;
}
const View = fn(17).View;
let closure_7 = fn(8900).TrackUserProfileEditActions;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5143);
let obj2 = { container: { flex: 1, gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 }, list: null, emptyState: null, emptyStateText: null };
let obj3 = { flex: 1, gap: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
obj2.list = { gap: nativeDefault.space.PX_12 };
let obj4 = { gap: nativeDefault.space.PX_12 };
obj2.emptyState = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.emptyStateText = { textAlign: "center" };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetAddActionSheet.tsx");

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
  const tmp = closure_10();
  const obj2 = { pageWidth: tmp2[0], items: null };
  const obj = require("SegmentedControlState");
  const items1 = [{ id: "interests", label: stringResult, page: closure_8(WidgetOptionsPage, { widgets: interestsWidgets, tabName: stringResult }) }, ];
  const obj3 = { id: "interests", label: stringResult, page: closure_8(WidgetOptionsPage, { widgets: interestsWidgets, tabName: stringResult }) };
  items1[1] = { id: "gameStats", label: stringResult1, page: closure_8(WidgetOptionsPage, { widgets: applicationWidgets, tabName: stringResult1 }) };
  obj2.items = items1;
  const segmentedControlState = obj.useSegmentedControlState(obj2);
  const callback = noop.useCallback((nativeEvent) => {
    closure_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj5 = { header: null, scrollable: true, startExpanded: true, children: null };
  const obj6 = { title: null };
  const intl3 = require("util").intl;
  obj6.title = intl3.string(require("util").t["grUgR+"]);
  obj5.header = closure_8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj6);
  const obj7 = { style: tmp.container, onLayout: callback, children: null };
  const obj4 = { id: "gameStats", label: stringResult1, page: closure_8(WidgetOptionsPage, { widgets: applicationWidgets, tabName: stringResult1 }) };
  const items2 = [closure_8(View, { children: closure_8(require("Tabs/Tabs").Tabs, { state: segmentedControlState }) }), closure_8(require("SegmentedControlPages").SegmentedControlPages, { state: segmentedControlState })];
  obj7.children = items2;
  obj5.children = closure_9(View, obj7);
  return closure_8(require("ActionSheet").ActionSheet, obj5);
};