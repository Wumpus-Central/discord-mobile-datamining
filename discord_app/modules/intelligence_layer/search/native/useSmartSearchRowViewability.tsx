// === Module 18779: useSmartSearchRowViewability ===

// Module 18779 (useSmartSearchRowViewability)
import useChatLayoutDefault from "useChatLayout" /* 5092 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13221 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13223 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 2118 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchRowViewability.tsx");

export function useSmartSearchRowViewability() {
  const currentNavigationRouteName = stateFromStores(5089).useCurrentNavigationRouteName();
  const context = noop.useContext(stateFromStores(13307).SwipeForMemberListContext);
  const obj = stateFromStores(5089);
  const isFocused = stateFromStores(1501).useIsFocused();
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const obj3 = stateFromStores(1501);
  let tmp6 = null != stateFromStores(5089).coerceChannelRoute({ name: currentNavigationRouteName });
  if (!tmp6) {
    if (isChatLockedOpen) {
      const obj5 = { name: currentNavigationRouteName };
      isChatLockedOpen = null != tmp(5089).coerceGuildsRoute(obj5);
      const tmpResult = tmp(5089);
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
  const obj4 = stateFromStores(5089);
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
    closure_1_1(13223).setIsRowViewable(false, closure_1_1(13221));
  }, []);
  const tmpResult2 = stateFromStores(504);
}