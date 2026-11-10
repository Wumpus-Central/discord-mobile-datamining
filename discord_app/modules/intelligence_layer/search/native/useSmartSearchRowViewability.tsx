// === Module 19139: useSmartSearchRowViewability ===

// Module 19139 (useSmartSearchRowViewability)
import useChatLayoutDefault from "useChatLayout" /* 5319 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 14168 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 14170 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 2117 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchRowViewability.tsx");

export function useSmartSearchRowViewability() {
  const currentNavigationRouteName = stateFromStores(5316).useCurrentNavigationRouteName();
  const context = noop.useContext(stateFromStores(14258).SwipeForMemberListContext);
  const obj = stateFromStores(5316);
  const isFocused = stateFromStores(1500).useIsFocused();
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const obj3 = stateFromStores(1500);
  let tmp6 = null != stateFromStores(5316).coerceChannelRoute({ name: currentNavigationRouteName });
  if (!tmp6) {
    if (isChatLockedOpen) {
      const obj5 = { name: currentNavigationRouteName };
      isChatLockedOpen = null != tmp(5316).coerceGuildsRoute(obj5);
      const tmpResult = tmp(5316);
    }
    tmp6 = isChatLockedOpen;
  }
  let tmp7 = isFocused;
  if (null != context) {
    tmp7 = context.isPanelActive && tmp6;
    const tmp8 = context.isPanelActive && tmp6;
  }
  closure_129_0 = tmp7;
  items = [tmp7];
  const effect = noop.useEffect(() => {
    const result = SmartSearchAnalyticsManagerDefault.setIsNavigationFocused(stateFromStores, SearchSessionAnalyticsManagerDefault);
  }, items);
  const obj4 = stateFromStores(5316);
  const items1 = [AppStateStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items1, () => {
    state = state.getState();
    return state === stateFromStores(dependencyMap[9]).AppStates.ACTIVE;
  });
  const items2 = [stateFromStores];
  const effect1 = noop.useEffect(() => {
    SmartSearchAnalyticsManagerDefault.setIsAppActive(stateFromStores, SearchSessionAnalyticsManagerDefault);
  }, items2);
  const effect2 = noop.useEffect(() => () => {
    closure_1_1(14170).setIsRowViewable(false, closure_1_1(14168));
  }, []);
  const tmpResult2 = stateFromStores(504);
}