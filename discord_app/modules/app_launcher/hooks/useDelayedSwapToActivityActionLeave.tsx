// discord_app/modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx
import closure_2 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx",
);

export const useDelayedSwapToActivityActionLeave = function useDelayedSwapToActivityActionLeave(activityAction) {
  closure_0 = activityAction;
  let tmp = callback(React.useState(activityAction), 2);
  closure_1 = tmp[1];
  const items = [activityAction];
  const layoutEffect = React.useLayoutEffect(() => {
    if (activityAction === activityAction(11858).ActivityAction.LEAVE) {
      const _setTimeout = setTimeout;
      activityAction = setTimeout(() => callback(closure_0), 100);
      return () => clearTimeout(closure_0);
    } else {
      dependencyMap(tmp);
    }
    tmp = activityAction;
  }, items);
  return tmp[0];
};
