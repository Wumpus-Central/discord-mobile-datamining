// discord_app/modules/intelligence_layer/search/native/useSmartSearchRowViewability.tsx
import useChatLayoutDefault from "../../../chat/native/useChatLayout.tsx";
import SearchSessionAnalyticsManagerDefault from "../../../search/managers/native/SearchSessionAnalyticsManager.tsx";
import SmartSearchAnalyticsManagerDefault from "../SmartSearchAnalyticsManager.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";

const require = fn;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSmartSearchRowNavigationState() {
      const cResult = require("c").c(6);
      const obj = require("c");
      const tmp = _require;
      const currentNavigationRouteName = require("NavigationRouteUtils").useCurrentNavigationRouteName();
      const context = noop.useContext(require("SwipeForMemberListContext").SwipeForMemberListContext);
      const obj2 = require("NavigationRouteUtils");
      const isFocused = require("Link").useIsFocused();
      const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
      if (cResult[0] === currentNavigationRouteName) {
        if (cResult[1] === isChatLockedOpen) {
          let tmp7 = cResult[2];
        }
        let tmp11 = isFocused;
        if (null != context) {
          tmp11 = context.isPanelActive && tmp7;
          const tmp12 = context.isPanelActive && tmp7;
        }
        _require = tmp11;
        if (cResult[3] !== tmp11) {
          class S {
            constructor() {
              obj = closure_1(closure_2[8]);
              result = obj.setIsNavigationFocused(closure_0, closure_1(closure_2[9]));
              return;
            }
          }
          const items = [tmp11];
          cResult[3] = tmp11;
          cResult[4] = S;
          cResult[5] = items;
          let tmp14 = items;
        } else {
          class S {
            constructor() {
              obj = closure_1(closure_2[8]);
              result = obj.setIsNavigationFocused(closure_0, closure_1(closure_2[9]));
              return;
            }
          }
          tmp14 = cResult[5];
        }
        const effect = noop.useEffect(S, tmp14);
      }
      const obj4 = require("Link");
      let tmp8 = null != tmp(5187).coerceChannelRoute({ name: currentNavigationRouteName });
      if (!tmp8) {
        class S {
          constructor() {
            obj = closure_1(closure_2[8]);
            result = obj.setIsNavigationFocused(closure_0, closure_1(closure_2[9]));
            return;
          }
        }
        if (isChatLockedOpen) {
          class S {
            constructor() {
              obj = closure_1(closure_2[8]);
              result = obj.setIsNavigationFocused(closure_0, closure_1(closure_2[9]));
              return;
            }
          }
          const obj5 = { name: currentNavigationRouteName };
          const tmp9 = null != obj6.coerceGuildsRoute(obj5);
        }
        tmp8 = tmp9;
      }
      cResult[0] = currentNavigationRouteName;
      cResult[1] = isChatLockedOpen;
      cResult[2] = tmp8;
      tmp7 = tmp8;
      const tmpResult = tmp(5187);
    }
  : function useSmartSearchRowNavigationState() {
      const currentNavigationRouteName = require("NavigationRouteUtils").useCurrentNavigationRouteName();
      const context = noop.useContext(require("SwipeForMemberListContext").SwipeForMemberListContext);
      const obj = require("NavigationRouteUtils");
      const tmp = _require;
      const isFocused = require("Link").useIsFocused();
      let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
      const obj3 = require("Link");
      let tmp6 = null != require("NavigationRouteUtils").coerceChannelRoute({ name: currentNavigationRouteName });
      if (!tmp6) {
        if (isChatLockedOpen) {
          const obj5 = { name: currentNavigationRouteName };
          isChatLockedOpen = null != tmp(5187).coerceGuildsRoute(obj5);
          const tmpResult = tmp(5187);
        }
        tmp6 = isChatLockedOpen;
      }
      let tmp7 = isFocused;
      if (null != context) {
        tmp7 = context.isPanelActive && tmp6;
        const tmp8 = context.isPanelActive && tmp6;
      }
      _require = tmp7;
      const items = [tmp7];
      const effect = noop.useEffect(() => {
        const result = SmartSearchAnalyticsManagerDefault.setIsNavigationFocused(
          closure_0,
          SearchSessionAnalyticsManagerDefault,
        );
      }, items);
      const obj4 = require("NavigationRouteUtils");
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchRowViewability.tsx");

export const useSmartSearchRowViewability = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSmartSearchRowViewability() {
      const cResult = stateFromStores(576).c(7);
      closure_5();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AppStateStore];
        const fn = function c() {
          state = state.getState();
          return state === stateFromStores(dependencyMap[10]).AppStates.ACTIVE;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        const fn2 = function l() {
          SmartSearchAnalyticsManagerDefault.setIsAppActive(stateFromStores, SearchSessionAnalyticsManagerDefault);
        };
        const items1 = [stateFromStores];
        cResult[2] = stateFromStores;
        cResult[3] = fn2;
        cResult[4] = items1;
        let tmp10 = items1;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      const effect = noop.useEffect(tmp9, tmp10);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function f() {
          return () => {
            closure_1_1(13713).setIsRowViewable(false, closure_1_1(13711));
          };
        };
        const items2 = [];
        cResult[5] = fn3;
        cResult[6] = items2;
        let tmp13 = items2;
        let tmp12 = fn3;
      } else {
        tmp12 = cResult[5];
        tmp13 = cResult[6];
      }
      const effect1 = noop.useEffect(tmp12, tmp13);
      const tmpResult = stateFromStores(504);
    }
  : function useSmartSearchRowViewability() {
      closure_5();
      const items = [AppStateStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
        state = state.getState();
        return state === stateFromStores(dependencyMap[10]).AppStates.ACTIVE;
      });
      const items1 = [stateFromStores];
      const effect = noop.useEffect(() => {
        SmartSearchAnalyticsManagerDefault.setIsAppActive(stateFromStores, SearchSessionAnalyticsManagerDefault);
      }, items1);
      const effect1 = noop.useEffect(
        () => () => {
          closure_1_1(13713).setIsRowViewable(false, closure_1_1(13711));
        },
        [],
      );
    };
