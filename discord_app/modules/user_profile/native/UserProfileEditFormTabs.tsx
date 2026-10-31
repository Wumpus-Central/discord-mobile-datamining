// === Module 16549: UserProfileEditFormTabs ===

// Module 16549 (UserProfileEditFormTabs)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import ChatInputUtils from "ChatInputUtils" /* 5207 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 14946 */;
import UserProfileEditFormMainPageContextDefault from "UserProfileEditFormMainPageContext" /* 16548 */;
import UserProfileWidgetEditingHeaderDefault from "UserProfileWidgetEditingHeader" /* 16550 */;
import UserProfileWidgetsEmptyStateDefault from "UserProfileWidgetsEmptyState" /* 16551 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function MainPage() {
  const tmp = closure_9();
  return timestampProducer(View, { style: closure_9().page, children: noop.useContext(UserProfileEditFormMainPageContextDefault) });
}
const View = fn(17).View;
const PROFILE_SIDE_PADDING = fn(7377).PROFILE_SIDE_PADDING;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
let obj = { tabbedContainer: { marginTop: nativeDefault.space.PX_24, marginHorizontal: -PROFILE_SIDE_PADDING }, page: null };
let obj3 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: -PROFILE_SIDE_PADDING };
obj.page = { paddingHorizontal: PROFILE_SIDE_PADDING, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function UserProfileEditFormTabsTsx1(){const{tabsState,BOARD_TAB_INDEX}=this.__closure;return tabsState.visiblePageRange.get()[1]>=BOARD_TAB_INDEX;}" };
const __initData2 = { code: "function UserProfileEditFormTabsTsx2(isOnScreen){const{isBoardTabOnScreen}=this.__closure;return isBoardTabOnScreen.set(isOnScreen);}" };
let obj4 = { paddingHorizontal: PROFILE_SIDE_PADDING, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTabs.tsx");

export default noop.memo(function UserProfileEditFormTabs(userId) {
  userId = userId.userId;
  const containerBackground = userId.containerBackground;
  const isBoardTabOnScreen = userId.isBoardTabOnScreen;
  c5 = undefined;
  first = undefined;
  closure_7 = undefined;
  let segmentedControlState;
  ({ hasCustomProfileTheme, scrollPosition, scrollViewRef, parentPagerGesture } = userId);
  const tmp = segmentedControlState();
  _slicedToArray = tmp;
  const tmp4 = containerBackground(isBoardTabOnScreen[8])();
  noop = tmp4;
  [tmp6, c5] = noop.useState(0);
  [first, closure_7] = noop.useState(0);
  const tmp9 = containerBackground(isBoardTabOnScreen[9])(userId).length > 0;
  closure_8 = tmp9;
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  let items1 = [userId, first, tmp9, containerBackground, tmp.page, tmp4.card];
  const callback1 = noop.useCallback((arg0) => {
    ChatInputUtils.dismissKeyboard();
    closure_7(arg0);
  }, []);
  const memo = noop.useMemo(() => {
    const obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = timestampProducer(MainPage, {});
    const items = [obj, ];
    const obj2 = { id: "board", label: null, page: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.laViwx);
    const obj3 = { style: page.page, children: null };
    if (closure_8) {
      const obj4 = { children: null };
      const items1 = [timestampProducer(UserProfileWidgetEditingHeaderDefault, {}), ];
      const obj5 = { userId, isVisible: 1 === first, cardStyle: null };
      const items2 = [card.card, ];
      const obj6 = { backgroundColor: containerBackground };
      items2[1] = obj6;
      obj5.cardStyle = items2;
      items1[1] = timestampProducer(UserProfileWidgetsBoardDefault, obj5);
      obj4.children = items1;
      let tmp2Result = React6(React5, obj4);
    } else {
      tmp2Result = timestampProducer(UserProfileWidgetsEmptyStateDefault, {});
    }
    obj3.children = tmp2Result;
    obj2.page = timestampProducer(View, obj3);
    items[1] = obj2;
    return items;
  }, items1);
  const tmp2 = containerBackground;
  const tmp3 = isBoardTabOnScreen;
  const tmp5 = _slicedToArray(noop.useState(0), 2);
  const measuredTabItems = userId(isBoardTabOnScreen[15]).useMeasuredTabItems(memo);
  ({ items, pageHeights } = measuredTabItems);
  let obj = userId(isBoardTabOnScreen[15]);
  segmentedControlState = userId(isBoardTabOnScreen[16]).useSegmentedControlState({ pageWidth: tmp6, items, onPageChange: callback1 });
  let obj2 = userId(isBoardTabOnScreen[16]);
  class D {
    constructor() {
      visiblePageRange = closure_9.visiblePageRange;
      return visiblePageRange.get()[1] >= 1;
    }
  }
  D.__closure = { tabsState: segmentedControlState, BOARD_TAB_INDEX: 1 };
  D.__workletHash = 1895109232888;
  D.__initData = __initData;
  class B {
    constructor(arg0) {
      return isBoardTabOnScreen.set(userId);
    }
  }
  B.__closure = { isBoardTabOnScreen };
  B.__workletHash = 8467778586139;
  B.__initData = __initData2;
  const animatedReaction = userId(isBoardTabOnScreen[17]).useAnimatedReaction(D, B);
  let obj4 = { style: tmp.tabbedContainer, onLayout: callback, children: null };
  let obj5 = { state: segmentedControlState, variant: null };
  let str;
  if (hasCustomProfileTheme) {
    str = "overlay";
  }
  obj5.variant = str;
  let items2 = [first(userId(isBoardTabOnScreen[18]).Tabs, obj5), first(tmp2(tmp3[15]), { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef, parentPagerGesture })];
  obj4.children = items2;
  return closure_8(c5, obj4);
});