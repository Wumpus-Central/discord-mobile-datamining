// === Module 12363: useTrackSearchItems ===

// Module 12363 (useTrackSearchItems)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/useTrackSearchItems.tsx");

export const useTrackSearchItems = function useTrackSearchItems(callback3, memo1, current) {
  _require = callback3;
  dependencyMap = memo1;
  noop = current;
  const entrypoint = require("AppLauncherContext").useAppLauncherContext().entrypoint;
  closure_4 = noop.useRef({});
  noop.useRef(current);
  let obj2 = { handleViewableItemsChanged: null };
  const items = [entrypoint, callback3, memo1, current];
  obj2.handleViewableItemsChanged = noop.useCallback((viewableItems) => {
    viewableItems = viewableItems.viewableItems;
    if (ref.current !== current) {
      ref.current = current;
      ref.current = {};
    }
    const item = viewableItems.forEach((isViewable) => {
      if (isViewable.isViewable) {
        const tmp2 = callback3(isViewable.item);
        if (null != tmp2) {
          if (null == ref.current[tmp2]) {
            ref.current[tmp2] = true;
            ({ applicationId, commandId } = dependencyMap(isViewable.item));
            const tmp5 = dependencyMap(isViewable.item);
            const obj2 = { type: closure_0(1249).ImpressionTypes.VIEW, name: closure_0(1249).ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM, properties: null };
            const obj3 = { location: closure_0(7768).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, application_id: applicationId, command_id: commandId, search_results_position: isViewable.index, query, source };
            obj2.properties = obj3;
            closure_0(9053).trackImpression(obj2, false);
            const obj = closure_0(9053);
          }
        }
      }
    });
  }, items);
  return obj2;
};