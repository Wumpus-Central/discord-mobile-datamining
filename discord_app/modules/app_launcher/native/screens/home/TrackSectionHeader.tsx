// discord_app/modules/app_launcher/native/screens/home/TrackSectionHeader.tsx
import discord_common_AnalyticsUtils from "../../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import useTrackImpressionDefault from "../../../../app_analytics/useTrackImpression.tsx";
import AppLauncherStore from "../../../AppLauncherStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/TrackSectionHeader.tsx");

export default function TrackSectionHeader(viewed) {
  viewed = viewed.viewed;
  ({ sectionName, numItems, numVisibleItems, children } = viewed);
  const obj = {
    type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW,
    name: discord_common_AnalyticsUtils.ImpressionNames.APP_LAUNCHER_SECTION,
    properties: null,
  };
  const tmp = useTrackImpressionDefault;
  obj.properties = {
    section_name: sectionName,
    num_items: numItems,
    num_visible_items: numVisibleItems,
    source: AppLauncherStore.entrypoint(),
  };
  const items = [viewed];
  tmp(obj, { disableTrack: !viewed }, items);
  return children;
}
