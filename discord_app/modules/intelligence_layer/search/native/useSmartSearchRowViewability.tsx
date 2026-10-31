// discord_app/modules/intelligence_layer/search/native/useSmartSearchRowViewability.tsx
import useChatLayoutDefault from "../../../chat/native/useChatLayout.tsx";
import SearchSessionAnalyticsManagerDefault from "../../../search/managers/native/SearchSessionAnalyticsManager.tsx";
import SmartSearchAnalyticsManagerDefault from "../SmartSearchAnalyticsManager.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchRowViewability.tsx");

export function useSmartSearchRowViewability() {
  const currentNavigationRouteName = stateFromStores(5198).useCurrentNavigationRouteName();
  const context = noop.useContext(stateFromStores(13983).SwipeForMemberListContext);
  const obj = stateFromStores(5198);
  const isFocused = stateFromStores(1498).useIsFocused();
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const obj3 = stateFromStores(1498);
  let tmp6 = null != stateFromStores(5198).coerceChannelRoute({ name: currentNavigationRouteName });
  if (!tmp6) {
    if (isChatLockedOpen) {
      const obj5 = { name: currentNavigationRouteName };
      isChatLockedOpen = null != tmp(5198).coerceGuildsRoute(obj5);
      const tmpResult = tmp(5198);
    }
    tmp6 = isChatLockedOpen;
  }
  let tmp7 = isFocused;
  if (null != context) {
    tmp7 = context.isPanelActive && tmp6;
    const tmp8 = context.isPanelActive && tmp6;
  }
  closure_129_0 = tmp7;
  const items = [tmp7];
  const effect = noop.useEffect(() => {
    const result = SmartSearchAnalyticsManagerDefault.setIsNavigationFocused(
      stateFromStores,
      SearchSessionAnalyticsManagerDefault,
    );
  }, items);
  const obj4 = stateFromStores(5198);
  const items1 = [AppStateStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items1, () => {
    state = state.getState();
    return state === stateFromStores(dependencyMap[9]).AppStates.ACTIVE;
  });
  const items2 = [stateFromStores];
  const effect1 = noop.useEffect(() => {
    SmartSearchAnalyticsManagerDefault.setIsAppActive(stateFromStores, SearchSessionAnalyticsManagerDefault);
  }, items2);
  const effect2 = noop.useEffect(
    () => () => {
      closure_1_1(13895).setIsRowViewable(false, closure_1_1(13893));
    },
    [],
  );
  const tmpResult2 = stateFromStores(504);
}
