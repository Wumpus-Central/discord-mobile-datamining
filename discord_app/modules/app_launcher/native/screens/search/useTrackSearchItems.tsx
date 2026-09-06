// === Module 12106: useTrackSearchItems ===

// Module 12106 (useTrackSearchItems)
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/useTrackSearchItems.tsx");

export const useTrackSearchItems = function useTrackSearchItems(callback3, memo1, current) {
  _require = callback3;
  dependencyMap = memo1;
  noop = current;
  let obj = require("AppLauncherContext");
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  closure_4 = noop.useRef({});
  noop.useRef(current);
  obj = { handleViewableItemsChanged: null };
  const items = [entrypoint, callback3, memo1, current];
  obj.handleViewableItemsChanged = noop.useCallback((viewableItems) => {
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
            closure_0(8768);
            let obj = { type: closure_0(1250).ImpressionTypes.VIEW, name: closure_0(1250).ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM, properties: null };
            obj = { location: closure_0(7523).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH, application_id: applicationId, command_id: commandId, search_results_position: isViewable.index, query, source };
            obj.properties = obj;
            obj.trackImpression(obj, false);
            const tmp5 = dependencyMap(isViewable.item);
          }
        }
      }
    });
  }, items);
  return obj;
};