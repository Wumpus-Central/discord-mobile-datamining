// === Module 16902: UserProfileEditFormTabs ===

// Module 16902 (UserProfileEditFormTabs)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import ChatInputUtils from "ChatInputUtils" /* 5325 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7854 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8894 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9075 */;
import UserProfileWidgetsEmptyStateDefault from "UserProfileWidgetsEmptyState" /* 15218 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 15232 */;
import UserProfileTabPagesDefault from "UserProfileTabPages" /* 15303 */;
import UserProfileEditFormMainPageContextDefault from "UserProfileEditFormMainPageContext" /* 16901 */;
import UserProfileWidgetEditingHeaderDefault from "UserProfileWidgetEditingHeader" /* 16903 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function MainPage() {
  const tmp = closure_9();
  return timestampProducer(View, { style: closure_9().page, children: noop.useContext(UserProfileEditFormMainPageContextDefault) });
}
const View = fn(17).View;
const PROFILE_SIDE_PADDING = fn(7440).PROFILE_SIDE_PADDING;
const jsxProd = fn(21);
({ jsx: closure_6, Fragment: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5142);
let obj = { tabbedContainer: { marginTop: nativeDefault.space.PX_24, marginHorizontal: -PROFILE_SIDE_PADDING }, page: null };
let obj3 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: -PROFILE_SIDE_PADDING };
obj.page = { paddingHorizontal: PROFILE_SIDE_PADDING, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
let closure_11 = { code: "(function UserProfileEditFormTabsTsx1(){let[tabsState,BOARD_TAB_INDEX]=this.__closure;return tabsState.visiblePageRange.get()[1]>=BOARD_TAB_INDEX;})" };
let closure_12 = { code: "(function UserProfileEditFormTabsTsx2(isOnScreen){let[isBoardTabOnScreen]=this.__closure;return isBoardTabOnScreen.set(isOnScreen);})" };
let obj4 = { paddingHorizontal: PROFILE_SIDE_PADDING, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTabs.tsx");

export default noop.memo(function UserProfileEditFormTabs(userId) {
  userId = userId.userId;
  _require = userId;
  const containerBackground = userId.containerBackground;
  importDefault = containerBackground;
  first = undefined;
  closure_5 = undefined;
  let arr;
  closure_7 = undefined;
  ({ initialTab, hasCustomProfileTheme, scrollPosition, scrollViewRef, isBoardTabOnScreen } = userId);
  const tmp = closure_9();
  dependencyMap = tmp;
  const tmp4 = UserProfileSharedStylesDefault();
  _slicedToArray = tmp4;
  const tmp5 = useMeasuredLayoutDefault();
  const width = tmp5.width;
  let num = 0;
  ({ ref, onLayout } = tmp5);
  if (undefined !== width) {
    num = width;
  }
  let num2 = 0;
  if ("board" === initialTab) {
    num2 = 1;
  }
  [first, closure_5] = first.useState(num2);
  arr = tmp2(15203)(userId);
  closure_7 = tmp8;
  let items1 = [arr];
  const memo = first.useMemo(() => arr.filter(UserProfileGameWidgetTypes.isGameWidget), items1);
  const fetchSuggestedGames = require("SuggestedGameHooks").useFetchSuggestedGames(true, memo);
  let items2 = [userId, first, arr.length > 0, containerBackground, tmp.page, tmp4.card];
  const callback = first.useCallback((arg0) => {
    ChatInputUtils.dismissKeyboard();
    closure_5(arg0);
  }, []);
  const memo1 = first.useMemo(() => {
    const obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = timestampProducer(MainPage, {});
    items = [obj, ];
    const obj2 = { id: "board", label: null, page: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.laViwx);
    const obj3 = { style: page.page, children: null };
    if (closure_7) {
      const obj4 = { children: null };
      const items1 = [timestampProducer(UserProfileWidgetEditingHeaderDefault, {}), ];
      const obj5 = { userId, isVisible: 1 === first, isEditing: true, cardStyle: null };
      const items2 = [card.card, ];
      const obj6 = { backgroundColor };
      items2[1] = obj6;
      obj5.cardStyle = items2;
      items1[1] = timestampProducer(UserProfileWidgetsBoardDefault, obj5);
      obj4.children = items1;
      let tmp2Result = React5(metroImportDefault, obj4);
    } else {
      tmp2Result = timestampProducer(UserProfileWidgetsEmptyStateDefault, {});
    }
    obj3.children = tmp2Result;
    obj2.page = timestampProducer(View, obj3);
    items[1] = obj2;
    return items;
  }, items2);
  let obj = require("SuggestedGameHooks");
  const tmp10 = _require;
  const measuredTabItems = require("UserProfileTabPages").useMeasuredTabItems(memo1);
  ({ items, pageHeights } = measuredTabItems);
  let obj2 = require("UserProfileTabPages");
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState({ pageWidth: num, defaultIndex: num2, items, onPageChange: callback });
  let obj3 = require("SegmentedControlState");
  const items3 = [closure_11, segmentedControlState, 1];
  _require = undefined;
  importDefault = undefined;
  [tmp16, tmp17, tmp18] = items3;
  class UserProfileEditFormTabsTsx1 {
    constructor() {
      visiblePageRange = closure_0.visiblePageRange;
      return visiblePageRange.get()[1] >= closure_1;
    }
  }
  const items4 = [tmp17, tmp18];
  UserProfileEditFormTabsTsx1.__closure = items4;
  UserProfileEditFormTabsTsx1.__workletHash = 15064395793601;
  UserProfileEditFormTabsTsx1.__initData = tmp16;
  const items5 = [closure_12, isBoardTabOnScreen];
  _require = undefined;
  [tmp19, tmp20] = items5;
  class UserProfileEditFormTabsTsx2 {
    constructor(arg0) {
      return closure_0.set(userId);
    }
  }
  const items6 = [tmp20];
  UserProfileEditFormTabsTsx2.__closure = items6;
  UserProfileEditFormTabsTsx2.__workletHash = 6535287831650;
  UserProfileEditFormTabsTsx2.__initData = tmp19;
  const animatedReaction = require("module_1652").useAnimatedReaction(UserProfileEditFormTabsTsx1, UserProfileEditFormTabsTsx2);
  let obj5 = { style: tmp.tabbedContainer, ref, onLayout, children: null };
  let obj6 = { state: segmentedControlState, variant: null };
  let str;
  if (hasCustomProfileTheme) {
    str = "overlay";
  }
  obj6.variant = str;
  const items7 = [arr(tmp10(12350).Tabs, obj6), arr(UserProfileTabPagesDefault, { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef })];
  obj5.children = items7;
  return closure_8(closure_5, obj5);
});