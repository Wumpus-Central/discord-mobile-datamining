// discord_app/modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
const result = require("useActivityAction").fileFinishedImporting("modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx");

export const useDelayedSwapToActivityActionLeave = function useDelayedSwapToActivityActionLeave(activityAction) {
  let closure_0 = activityAction;
  let tmp = callback(React.useState(activityAction), 2);
  let closure_1 = tmp[1];
  const items = [activityAction];
  const layoutEffect = React.useLayoutEffect(() => {
    if (activityAction === activityAction(11443).ActivityAction.LEAVE) {
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