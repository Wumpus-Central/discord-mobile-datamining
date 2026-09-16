// === Module 12243: useTrackAppLauncherItemImpressionOnFirstView ===

// Module 12243 (useTrackAppLauncherItemImpressionOnFirstView)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import useTrackImpression from "useTrackImpression" /* 8908 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useTrackAppLauncherItemImpressionOnFirstView.tsx");

export const useTrackAppLauncherItemImpressionOnFirstView = function useTrackAppLauncherItemImpressionOnFirstView() {
  entrypoint = entrypoint(11361).useAppLauncherContext().entrypoint;
  let obj = entrypoint(11361);
  dependencyMap = noop.useRef(new Set());
  const set = new Set();
  const focusEffect = entrypoint(1485).useFocusEffect(noop.useCallback(() => {
    const current = ref.current;
    current.clear();
  }, []));
  let obj3 = { trackAppLauncherItemImpressionOnFirstView: null };
  const items = [entrypoint];
  obj3.trackAppLauncherItemImpressionOnFirstView = noop.useCallback((itemKey) => {
    itemKey = itemKey.itemKey;
    const current = ref.current;
    ({ sectionName, sectionPosition, sectionOverallPosition, applicationId, commandId, applicationFlags } = itemKey);
    if (!current.has(itemKey)) {
      const current2 = ref.current;
      current2.add(itemKey);
      const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.APP_LAUNCHER_ITEM, properties: null };
      const obj3 = { source: entrypoint, section_name: sectionName, section_position: sectionPosition, section_overall_position: sectionOverallPosition, application_id: applicationId, command_id: commandId, application_flags: applicationFlags };
      obj2.properties = obj3;
      useTrackImpression.trackImpression(obj2);
    }
  }, items);
  return obj3;
};