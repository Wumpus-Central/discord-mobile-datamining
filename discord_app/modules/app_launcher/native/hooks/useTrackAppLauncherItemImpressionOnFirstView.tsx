// discord_app/modules/app_launcher/native/hooks/useTrackAppLauncherItemImpressionOnFirstView.tsx
import closure_2 from "../../../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/app_launcher/native/hooks/useTrackAppLauncherItemImpressionOnFirstView.tsx",
);

export const useTrackAppLauncherItemImpressionOnFirstView = function useTrackAppLauncherItemImpressionOnFirstView() {
  let obj = entrypoint(9063);
  entrypoint = obj.useAppLauncherContext().entrypoint;
  dependencyMap = React.useRef(new Set());
  const set = new Set();
  const focusEffect = entrypoint(1499).useFocusEffect(
    React.useCallback(() => {
      const current = ref.current;
      current.clear();
    }, []),
  );
  obj = {
    trackAppLauncherItemImpressionOnFirstView: React.useCallback((itemKey) => {
      itemKey = itemKey.itemKey;
      const current = ref.current;
      ({ sectionName, sectionPosition, sectionOverallPosition, applicationId, commandId, applicationFlags } = itemKey);
      if (!current.has(itemKey)) {
        const current2 = ref.current;
        current2.add(itemKey);
        let obj = entrypoint(ref[3]);
        obj = { type: null, name: null, properties: null };
        obj[0] = entrypoint(ref[4]).ImpressionTypes.VIEW;
        obj[1] = entrypoint(ref[4]).ImpressionNames.APP_LAUNCHER_ITEM;
        obj = {
          source: null,
          section_name: null,
          section_position: null,
          section_overall_position: null,
          application_id: null,
          command_id: null,
          application_flags: null,
        };
        obj[0] = entrypoint;
        obj[1] = sectionName;
        obj[2] = sectionPosition;
        obj[3] = sectionOverallPosition;
        obj[4] = applicationId;
        obj[5] = commandId;
        obj[6] = applicationFlags;
        obj[2] = obj;
        obj.trackImpression(obj);
      }
    }, items),
  };
  items = [entrypoint];
  return obj;
};
