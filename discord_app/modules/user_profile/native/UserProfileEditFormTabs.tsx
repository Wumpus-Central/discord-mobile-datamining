// === Module 15993: UserProfileEditFormTabs ===

// Module 15993 (UserProfileEditFormTabs)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import ChatInputUtils from "ChatInputUtils" /* 5160 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8732 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 14415 */;
import UserProfileEditFormMainPageContextDefault from "UserProfileEditFormMainPageContext" /* 15992 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const PROFILE_SIDE_PADDING = fn(7306).PROFILE_SIDE_PADDING;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4972);
let obj = { container: { marginTop: nativeDefault.space.PX_16, marginHorizontal: -PROFILE_SIDE_PADDING }, page: { paddingHorizontal: PROFILE_SIDE_PADDING }, boardPage: null };
let obj3 = { marginTop: nativeDefault.space.PX_16, marginHorizontal: -PROFILE_SIDE_PADDING };
obj.boardPage = { paddingTop: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function MainPage() {
  const cResult = c.c(3);
  const tmp2 = closure_8();
  const context = noop.useContext(UserProfileEditFormMainPageContextDefault);
  if (cResult[0] === context) {
    if (cResult[1] === tmp2.page) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = timestampProducer(View, { style: tmp2.page, children: context });
  cResult[0] = context;
  cResult[1] = tmp2.page;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function MainPage() {
  const tmp = closure_8();
  return timestampProducer(View, { style: closure_8().page, children: noop.useContext(UserProfileEditFormMainPageContextDefault) });
});
let closure_10 = { code: "function UserProfileEditFormTabsTsx1(){const{tabsState,BOARD_TAB_INDEX}=this.__closure;return tabsState.visiblePageRange.get()[1]>=BOARD_TAB_INDEX;}" };
let closure_11 = { code: "function UserProfileEditFormTabsTsx2(isOnScreen){const{isBoardTabOnScreen}=this.__closure;return isBoardTabOnScreen.set(isOnScreen);}" };
const __initData = { code: "function UserProfileEditFormTabsTsx3(){const{tabsState,BOARD_TAB_INDEX}=this.__closure;return tabsState.visiblePageRange.get()[1]>=BOARD_TAB_INDEX;}" };
const __initData2 = { code: "function UserProfileEditFormTabsTsx4(isOnScreen){const{isBoardTabOnScreen}=this.__closure;return isBoardTabOnScreen.set(isOnScreen);}" };
ReactCompilerGating = fn(558);
let obj4 = { paddingTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTabs.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditFormTabs(arg0) {
  const cResult = isBoardTabOnScreen(576).c(34);
  ({ userId, containerBackground, scrollPosition, scrollViewRef, isBoardTabOnScreen } = arg0);
  const tmp4 = closure_8();
  const tmp6 = UserProfileSharedStylesDefault();
  const obj = isBoardTabOnScreen(576);
  [r10028, importDefault] = noop.useState(0);
  const tmp8 = _slicedToArray(noop.useState(0), 2);
  dependencyMap = tmp8[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(nativeEvent) {
      importDefault(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor(arg0) {
        obj = closure_0(closure_2[11]);
        dismissKeyboardResult = obj.dismissKeyboard();
        tmp2 = closure_2(arg0);
        return;
      }
    }
    cResult[1] = H;
  } else {
    class H {
      constructor(arg0) {
        obj = closure_0(closure_2[11]);
        dismissKeyboardResult = obj.dismissKeyboard();
        tmp2 = closure_2(arg0);
        return;
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor(arg0) {
        obj = closure_0(closure_2[11]);
        dismissKeyboardResult = obj.dismissKeyboard();
        tmp2 = closure_2(arg0);
        return;
      }
    }
    const intl = isBoardTabOnScreen(1125).intl;
    tmp12[1] = intl.string(isBoardTabOnScreen(1125).t.LXw470);
    tmp12[2] = closure_6(closure_9, {});
    cResult[2] = tmp12;
  } else {
    class H {
      constructor(arg0) {
        obj = closure_0(closure_2[11]);
        dismissKeyboardResult = obj.dismissKeyboard();
        tmp2 = closure_2(arg0);
        return;
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor(arg0) {
        obj = closure_0(closure_2[11]);
        dismissKeyboardResult = obj.dismissKeyboard();
        tmp2 = closure_2(arg0);
        return;
      }
    }
    const stringResult = obj2.string(isBoardTabOnScreen(1125).t.laViwx);
    cResult[3] = stringResult;
  } else {
    class H {
      constructor(arg0) {
        obj = closure_0(closure_2[11]);
        dismissKeyboardResult = obj.dismissKeyboard();
        tmp2 = closure_2(arg0);
        return;
      }
    }
  }
  if (cResult[4] === tmp4.boardPage) {
    class H {
      constructor(arg0) {
        obj = closure_0(closure_2[11]);
        dismissKeyboardResult = obj.dismissKeyboard();
        tmp2 = closure_2(arg0);
        return;
      }
    }
    if (cResult[7] !== containerBackground) {
      class H {
        constructor(arg0) {
          obj = closure_0(closure_2[11]);
          dismissKeyboardResult = obj.dismissKeyboard();
          tmp2 = closure_2(arg0);
          return;
        }
      }
      tmp18[0] = containerBackground;
      cResult[7] = containerBackground;
      cResult[8] = tmp18;
    } else {
      class H {
        constructor(arg0) {
          obj = closure_0(closure_2[11]);
          dismissKeyboardResult = obj.dismissKeyboard();
          tmp2 = closure_2(arg0);
          return;
        }
      }
    }
    if (cResult[9] === tmp6.card) {
      class H {
        constructor(arg0) {
          obj = closure_0(closure_2[11]);
          dismissKeyboardResult = obj.dismissKeyboard();
          tmp2 = closure_2(arg0);
          return;
        }
      }
      if (cResult[12] === 1 === tmp8[0]) {
        class H {
          constructor(arg0) {
            obj = closure_0(closure_2[11]);
            dismissKeyboardResult = obj.dismissKeyboard();
            tmp2 = closure_2(arg0);
            return;
          }
        }
      }
      const obj3 = { userId, isVisible: 1 === tmp8[0], cardStyle: tmp19 };
      const tmp23 = closure_6(UserProfileWidgetsBoardDefault, obj3);
      cResult[12] = 1 === tmp8[0];
      cResult[13] = tmp19;
      cResult[14] = userId;
      cResult[15] = tmp23;
    }
    const items = [tmp6.card, tmp18];
    cResult[9] = tmp6.card;
    cResult[10] = tmp18;
    cResult[11] = items;
  }
  const items1 = [, ];
  ({ page: arr[0], boardPage: arr[1] } = tmp4);
  cResult[4] = tmp4.boardPage;
  cResult[5] = tmp4.page;
  cResult[6] = items1;
  const tmp7 = _slicedToArray(noop.useState(0), 2);
}) : (function UserProfileEditFormTabs(userId) {
  userId = userId.userId;
  const containerBackground = userId.containerBackground;
  const isBoardTabOnScreen = userId.isBoardTabOnScreen;
  c5 = undefined;
  first = undefined;
  closure_7 = undefined;
  let segmentedControlState;
  ({ hasCustomProfileTheme, scrollPosition, scrollViewRef } = userId);
  const tmp = segmentedControlState();
  _slicedToArray = tmp;
  const tmp4 = containerBackground(isBoardTabOnScreen[10])();
  noop = tmp4;
  [tmp6, c5] = noop.useState(0);
  [first, closure_7] = noop.useState(0);
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  let items1 = [userId, first, containerBackground, , , ];
  ({ page: arr[3], boardPage: arr[4] } = tmp);
  items1[5] = tmp4.card;
  const callback1 = noop.useCallback((arg0) => {
    ChatInputUtils.dismissKeyboard();
    closure_7(arg0);
  }, []);
  const memo = noop.useMemo(() => {
    const obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = timestampProducer(closure_9, {});
    const items = [obj, ];
    const obj2 = { id: "board", label: null, page: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.laViwx);
    const obj3 = { style: null, children: null };
    const items1 = [, ];
    ({ page: arr2[0], boardPage: arr2[1] } = closure_3);
    obj3.style = items1;
    const obj4 = { userId, isVisible: 1 === first, cardStyle: null };
    const items2 = [card.card, { backgroundColor: containerBackground }];
    obj4.cardStyle = items2;
    obj3.children = timestampProducer(UserProfileWidgetsBoardDefault, obj4);
    obj2.page = timestampProducer(View, obj3);
    items[1] = obj2;
    return items;
  }, items1);
  const tmp2 = containerBackground;
  const tmp3 = isBoardTabOnScreen;
  const tmp5 = _slicedToArray(noop.useState(0), 2);
  const measuredTabItems = userId(isBoardTabOnScreen[14]).useMeasuredTabItems(memo);
  ({ items, pageHeights } = measuredTabItems);
  let obj = userId(isBoardTabOnScreen[14]);
  segmentedControlState = userId(isBoardTabOnScreen[15]).useSegmentedControlState({ pageWidth: tmp6, items, onPageChange: callback1 });
  let obj2 = userId(isBoardTabOnScreen[15]);
  const fn = function y() {
    const visiblePageRange = segmentedControlState.visiblePageRange;
    return visiblePageRange.get()[1] >= 1;
  };
  fn.__closure = { tabsState: segmentedControlState, BOARD_TAB_INDEX: 1 };
  fn.__workletHash = 12896262225722;
  fn.__initData = __initData;
  const fn2 = function v(arg0) {
    return isBoardTabOnScreen.set(arg0);
  };
  fn2.__closure = { isBoardTabOnScreen };
  fn2.__workletHash = 11446268141917;
  fn2.__initData = __initData2;
  const animatedReaction = userId(isBoardTabOnScreen[16]).useAnimatedReaction(fn, fn2);
  let obj4 = { style: tmp.container, onLayout: callback, children: null };
  const obj5 = { state: segmentedControlState, variant: null };
  let str;
  if (hasCustomProfileTheme) {
    str = "overlay";
  }
  obj5.variant = str;
  let items2 = [first(userId(isBoardTabOnScreen[17]).Tabs, obj5), first(tmp2(tmp3[14]), { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef })];
  obj4.children = items2;
  return closure_7(c5, obj4);
}));