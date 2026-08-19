// === Module 11283: useTrackSearchItems ===

// Module 11283 (useTrackSearchItems)
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/screens/search/useTrackSearchItems.tsx");

export const useTrackSearchItems = function useTrackSearchItems(callback3, memo1, stateFromStores) {
  const _require = callback3;
  dependencyMap = memo1;
  const React = stateFromStores;
  let obj = _require(9565);
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  closure_4 = React.useRef({});
  closure_5 = React.useRef(stateFromStores);
  obj = {
    handleViewableItemsChanged: React.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      if (ref.current !== closure_2) {
        ref.current = closure_2;
        closure_4.current = {};
      }
      const item = viewableItems.forEach((item, index) => {
        if (item.isViewable) {
          const tmp2 = callback(item.item);
          if (null != tmp2) {
            if (null == ref.current[tmp2]) {
              ref.current[tmp2] = true;
              ({ applicationId, commandId } = callback2(item.item));
              callback3(memo1[2]);
              let obj = { type: null, name: null, properties: null };
              obj[0] = callback3(memo1[3]).ImpressionTypes.VIEW;
              obj[1] = callback3(memo1[3]).ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM;
              obj = { location: null, application_id: null, command_id: null, search_results_position: null, query: null, source: null };
              obj[0] = callback3(memo1[4]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH;
              obj[1] = applicationId;
              obj[2] = commandId;
              obj[3] = item.index;
              obj[4] = closure_2;
              obj[5] = closure_3;
              obj[2] = obj;
              obj.trackImpression(obj, false);
              const tmp5 = callback2(item.item);
            }
          }
        }
      });
    }, items)
  };
  items = [entrypoint, callback3, memo1, stateFromStores];
  return obj;
};