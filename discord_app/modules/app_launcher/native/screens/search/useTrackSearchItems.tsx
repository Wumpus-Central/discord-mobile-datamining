// discord_app/modules/app_launcher/native/screens/search/useTrackSearchItems.tsx
import closure_2 from "../../../../../../_runtime/00019_noop.js";
import { context } from "../../AppLauncherContext.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/search/useTrackSearchItems.tsx");

export const useTrackSearchItems = function useTrackSearchItems(callback3, memo1, first) {
  const _require = callback3;
  dependencyMap = memo1;
  const React = first;
  let obj = _context;
  const entrypoint = obj.useAppLauncherContext().entrypoint;
  closure_4 = React.useRef({});
  closure_5 = React.useRef(first);
  obj = {
    handleViewableItemsChanged: React.useCallback((viewableItems) => {
      viewableItems = viewableItems.viewableItems;
      if (ref.current !== closure_2) {
        ref.current = closure_2;
        closure_4.current = {};
      }
      const item = viewableItems.forEach((isViewable) => {
        if (isViewable.isViewable) {
          const tmp2 = callback(isViewable.item);
          if (null != tmp2) {
            if (null == ref.current[tmp2]) {
              ref.current[tmp2] = true;
              ({ applicationId, commandId } = callback2(isViewable.item));
              let obj = closure_1_0(closure_1_1[2]);
              obj = { type: null, name: null, properties: null };
              obj[0] = closure_1_0(closure_1_1[3]).ImpressionTypes.VIEW;
              obj[1] = closure_1_0(closure_1_1[3]).ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM;
              obj = { location: null, application_id: null, command_id: null, search_results_position: null, query: null, source: null };
              obj[0] = closure_1_0(closure_1_1[4]).ApplicationCommandTriggerLocations.APP_LAUNCHER_HOME_SEARCH;
              obj[1] = applicationId;
              obj[2] = commandId;
              obj[3] = isViewable.index;
              obj[4] = closure_2;
              obj[5] = closure_3;
              obj[2] = obj;
              obj.trackImpression(obj, false);
              const tmp5 = callback2(isViewable.item);
            }
          }
        }
      });
    }, items)
  };
  items = [entrypoint, callback3, memo1, first];
  return obj;
};