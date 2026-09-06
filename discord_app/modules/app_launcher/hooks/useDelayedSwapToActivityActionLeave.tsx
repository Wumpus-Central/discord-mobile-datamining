// discord_app/modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useDelayedSwapToActivityActionLeave.tsx");

export const useDelayedSwapToActivityActionLeave = function useDelayedSwapToActivityActionLeave(activityAction) {
  let tmp = _slicedToArray(noop.useState(activityAction), 2);
  dependencyMap = tmp[1];
  const items = [activityAction];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (activityAction === activityAction(12057).ActivityAction.LEAVE) {
      const _setTimeout = setTimeout;
      activityAction = setTimeout(() => dependencyMap(closure_0), 100);
      return () => clearTimeout(closure_0);
    } else {
      dependencyMap(tmp);
    }
    tmp = activityAction;
  }, items);
  return tmp[0];
};
