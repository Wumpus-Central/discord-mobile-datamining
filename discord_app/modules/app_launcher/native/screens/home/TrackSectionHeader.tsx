// === Module 12096: TrackSectionHeader ===

// Module 12096 (TrackSectionHeader)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8768 */;
import AppLauncherStore from "AppLauncherStore" /* 9408 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/TrackSectionHeader.tsx");

export default function TrackSectionHeader(viewed) {
  viewed = viewed.viewed;
  ({ sectionName, numItems, numVisibleItems, children } = viewed);
  let obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.APP_LAUNCHER_SECTION, properties: null };
  obj = { section_name: sectionName, num_items: numItems, num_visible_items: numVisibleItems, source: AppLauncherStore.entrypoint() };
  obj.properties = obj;
  obj = { disableTrack: !viewed };
  const items = [viewed];
  useTrackImpressionDefault(obj, obj, items);
  return children;
};