// discord_app/modules/app_launcher/native/hooks/useTrackAppLauncherItemImpressionOnFirstView.tsx
import noop from "noop";

const require = arg1;
const result = require("createStandardNavigationFactories").fileFinishedImporting("modules/app_launcher/native/hooks/useTrackAppLauncherItemImpressionOnFirstView.tsx");

export const useTrackAppLauncherItemImpressionOnFirstView = function useTrackAppLauncherItemImpressionOnFirstView() {
  let obj = entrypoint(9466);
  entrypoint = obj.useAppLauncherContext().entrypoint;
  const dependencyMap = React.useRef(new Set());
  const set = new Set();
  const focusEffect = entrypoint(1481).useFocusEffect(React.useCallback(() => {
    const current = ref.current;
    current.clear();
  }, []));
  obj = {
    trackAppLauncherItemImpressionOnFirstView: React.useCallback((itemKey) => {
      let applicationFlags;
      let applicationId;
      let commandId;
      let sectionName;
      let sectionOverallPosition;
      let sectionPosition;
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
        obj = { source: null, section_name: null, section_position: null, section_overall_position: null, application_id: null, command_id: null, application_flags: null };
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
    }, items)
  };
  items = [entrypoint];
  return obj;
};