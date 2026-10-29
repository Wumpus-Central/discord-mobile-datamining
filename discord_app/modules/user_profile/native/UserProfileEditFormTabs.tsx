// discord_app/modules/user_profile/native/UserProfileEditFormTabs.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ChatInputUtils from "../../../utils/native/ChatInputUtils.tsx";
import UserProfileSharedStylesDefault from "UserProfileSharedStyles.tsx";
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard.tsx";
import useUserProfileWidgetsDefault from "../hooks/useUserProfileWidgets.tsx";
import UserProfileEditFormMainPageContextDefault from "UserProfileEditFormMainPageContext.tsx";
import UserProfileWidgetEditingHeaderDefault from "UserProfileWidgetEditingHeader.tsx";
import UserProfileWidgetsEmptyStateDefault from "UserProfileWidgetsEmptyState.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const PROFILE_SIDE_PADDING = fn(7364).PROFILE_SIDE_PADDING;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5005);
let obj = {
  tabbedContainer: { marginTop: nativeDefault.space.PX_24, marginHorizontal: -PROFILE_SIDE_PADDING },
  page: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: -PROFILE_SIDE_PADDING };
obj.page = {
  paddingHorizontal: PROFILE_SIDE_PADDING,
  paddingTop: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_16,
};
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MainPage() {
      const cResult = c.c(3);
      const tmp2 = closure_9();
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
    }
  : function MainPage() {
      const tmp = closure_9();
      return timestampProducer(View, {
        style: closure_9().page,
        children: noop.useContext(UserProfileEditFormMainPageContextDefault),
      });
    };
let closure_11 = {
  code: "function UserProfileEditFormTabsTsx1(){const{tabsState,BOARD_TAB_INDEX}=this.__closure;return tabsState.visiblePageRange.get()[1]>=BOARD_TAB_INDEX;}",
};
let closure_12 = {
  code: "function UserProfileEditFormTabsTsx2(isOnScreen){const{isBoardTabOnScreen}=this.__closure;return isBoardTabOnScreen.set(isOnScreen);}",
};
const __initData = {
  code: "function UserProfileEditFormTabsTsx3(){const{tabsState,BOARD_TAB_INDEX}=this.__closure;return tabsState.visiblePageRange.get()[1]>=BOARD_TAB_INDEX;}",
};
const __initData2 = {
  code: "function UserProfileEditFormTabsTsx4(isOnScreen){const{isBoardTabOnScreen}=this.__closure;return isBoardTabOnScreen.set(isOnScreen);}",
};
ReactCompilerGating = fn(558);
let obj4 = {
  paddingHorizontal: PROFILE_SIDE_PADDING,
  paddingTop: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_16,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTabs.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function UserProfileEditFormTabs(arg0) {
        const cResult = isBoardTabOnScreen(576).c(28);
        ({ userId, containerBackground, scrollPosition, scrollViewRef, isBoardTabOnScreen } = arg0);
        closure_9();
        let card = UserProfileSharedStylesDefault();
        const obj = isBoardTabOnScreen(576);
        [r10028, importDefault] = noop.useState(0);
        const tmp6 = _slicedToArray(noop.useState(0), 2);
        [tmp8, dependencyMap] = noop.useState(0);
        const tmp9 = useUserProfileWidgetsDefault(userId).length > 0;
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
              obj = closure_0(closure_2[12]);
              dismissKeyboardResult = obj.dismissKeyboard();
              tmp2 = closure_2(arg0);
              return;
            }
          }
          cResult[1] = H;
        } else {
          class H {
            constructor(arg0) {
              obj = closure_0(closure_2[12]);
              dismissKeyboardResult = obj.dismissKeyboard();
              tmp2 = closure_2(arg0);
              return;
            }
          }
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor(arg0) {
              obj = closure_0(closure_2[12]);
              dismissKeyboardResult = obj.dismissKeyboard();
              tmp2 = closure_2(arg0);
              return;
            }
          }
          const intl = isBoardTabOnScreen(1125).intl;
          tmp13[1] = intl.string(isBoardTabOnScreen(1125).t.LXw470);
          tmp13[2] = closure_6(closure_10, {});
          cResult[2] = tmp13;
        } else {
          class H {
            constructor(arg0) {
              obj = closure_0(closure_2[12]);
              dismissKeyboardResult = obj.dismissKeyboard();
              tmp2 = closure_2(arg0);
              return;
            }
          }
        }
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor(arg0) {
              obj = closure_0(closure_2[12]);
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
              obj = closure_0(closure_2[12]);
              dismissKeyboardResult = obj.dismissKeyboard();
              tmp2 = closure_2(arg0);
              return;
            }
          }
        }
        if (cResult[4] === tmp8) {
          class H {
            constructor(arg0) {
              obj = closure_0(closure_2[12]);
              dismissKeyboardResult = obj.dismissKeyboard();
              tmp2 = closure_2(arg0);
              return;
            }
          }
        }
        if (tmp9) {
          class H {
            constructor(arg0) {
              obj = closure_0(closure_2[12]);
              dismissKeyboardResult = obj.dismissKeyboard();
              tmp2 = closure_2(arg0);
              return;
            }
          }
          const obj3 = { children: null };
          const items = [closure_6(UserProfileWidgetEditingHeaderDefault, {})];
          const obj4 = { userId, isVisible: 1 === tmp8, cardStyle: null };
          const items1 = [card.card];
          const obj5 = { backgroundColor: containerBackground };
          items1[1] = obj5;
          obj4.cardStyle = items1;
          items[1] = closure_6(UserProfileWidgetsBoardDefault, obj4);
          obj3.children = items;
          let tmp18 = closure_8(closure_7, obj3);
        } else {
          class H {
            constructor(arg0) {
              obj = closure_0(closure_2[12]);
              dismissKeyboardResult = obj.dismissKeyboard();
              tmp2 = closure_2(arg0);
              return;
            }
          }
          tmp18 = closure_6(UserProfileWidgetsEmptyStateDefault, {});
        }
        cResult[4] = tmp8;
        cResult[5] = containerBackground;
        cResult[6] = tmp9;
        card = card.card;
        cResult[7] = card;
        cResult[8] = userId;
        cResult[9] = tmp18;
        const tmp7 = _slicedToArray(noop.useState(0), 2);
      }
    : function UserProfileEditFormTabs(userId) {
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
        const tmp9 = containerBackground(isBoardTabOnScreen[11])(userId).length > 0;
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
          obj.page = timestampProducer(closure_10, {});
          const items = [obj];
          const obj2 = { id: "board", label: null, page: null };
          const intl2 = util.intl;
          obj2.label = intl2.string(util.t.laViwx);
          const obj3 = { style: page.page, children: null };
          if (closure_8) {
            const obj4 = { children: null };
            const items1 = [timestampProducer(UserProfileWidgetEditingHeaderDefault, {})];
            const obj5 = { userId, isVisible: 1 === first, cardStyle: null };
            const items2 = [card.card];
            const obj6 = { backgroundColor: containerBackground };
            items2[1] = obj6;
            obj5.cardStyle = items2;
            items1[1] = timestampProducer(UserProfileWidgetsBoardDefault, obj5);
            obj4.children = items1;
            let tmp2Result = closure_2_8(React5, obj4);
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
        const measuredTabItems = userId(isBoardTabOnScreen[17]).useMeasuredTabItems(memo);
        ({ items, pageHeights } = measuredTabItems);
        let obj = userId(isBoardTabOnScreen[17]);
        segmentedControlState = userId(isBoardTabOnScreen[18]).useSegmentedControlState({
          pageWidth: tmp6,
          items,
          onPageChange: callback1,
        });
        let obj2 = userId(isBoardTabOnScreen[18]);
        class B {
          constructor() {
            visiblePageRange = closure_9.visiblePageRange;
            return visiblePageRange.get()[1] >= 1;
          }
        }
        B.__closure = { tabsState: segmentedControlState, BOARD_TAB_INDEX: 1 };
        B.__workletHash = 12896262225722;
        B.__initData = __initData;
        const fn = function y(arg0) {
          return isBoardTabOnScreen.set(arg0);
        };
        fn.__closure = { isBoardTabOnScreen };
        fn.__workletHash = 11446268141917;
        fn.__initData = __initData2;
        const animatedReaction = userId(isBoardTabOnScreen[19]).useAnimatedReaction(B, fn);
        let obj4 = { style: tmp.tabbedContainer, onLayout: callback, children: null };
        let obj5 = { state: segmentedControlState, variant: null };
        let str;
        if (hasCustomProfileTheme) {
          str = "overlay";
        }
        obj5.variant = str;
        let items2 = [
          first(userId(isBoardTabOnScreen[20]).Tabs, obj5),
          first(tmp2(tmp3[17]), { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef }),
        ];
        obj4.children = items2;
        return closure_8(c5, obj4);
      },
);
