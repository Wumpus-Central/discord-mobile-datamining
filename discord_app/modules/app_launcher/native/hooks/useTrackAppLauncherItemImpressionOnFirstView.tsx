// === Module 12101: useTrackAppLauncherItemImpressionOnFirstView ===

// Module 12101 (useTrackAppLauncherItemImpressionOnFirstView)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import useTrackImpression from "useTrackImpression" /* 8768 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useTrackAppLauncherItemImpressionOnFirstView.tsx");

export const useTrackAppLauncherItemImpressionOnFirstView = function useTrackAppLauncherItemImpressionOnFirstView() {
  let obj = entrypoint(11215);
  entrypoint = obj.useAppLauncherContext().entrypoint;
  dependencyMap = noop.useRef(new Set());
  const set = new Set();
  const focusEffect = entrypoint(1484).useFocusEffect(noop.useCallback(() => {
    const current = ref.current;
    current.clear();
  }, []));
  obj = { trackAppLauncherItemImpressionOnFirstView: null };
  const items = [entrypoint];
  obj.trackAppLauncherItemImpressionOnFirstView = noop.useCallback((itemKey) => {
    itemKey = itemKey.itemKey;
    const current = ref.current;
    ({ sectionName, sectionPosition, sectionOverallPosition, applicationId, commandId, applicationFlags } = itemKey);
    if (!current.has(itemKey)) {
      const current2 = ref.current;
      current2.add(itemKey);
      let obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.APP_LAUNCHER_ITEM, properties: null };
      obj = { source: entrypoint, section_name: sectionName, section_position: sectionPosition, section_overall_position: sectionOverallPosition, application_id: applicationId, command_id: commandId, application_flags: applicationFlags };
      obj.properties = obj;
      obj.trackImpression(obj);
    }
  }, items);
  return obj;
};