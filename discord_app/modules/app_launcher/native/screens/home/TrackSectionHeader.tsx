// discord_app/modules/app_launcher/native/screens/home/TrackSectionHeader.tsx
import encodeProperties from "../../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import trackImpressionDefault from "../../../../app_analytics/useTrackImpression.tsx";
import handleDismissWithDismissed from "../../../AppLauncherStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/screens/home/TrackSectionHeader.tsx");

export default function TrackSectionHeader(viewed) {
  viewed = viewed.viewed;
  ({ sectionName, numItems, numVisibleItems, children } = viewed);
  let obj = { section_name: sectionName, num_items: numItems, num_visible_items: numVisibleItems, source: closure_3.entrypoint() };
  obj[2] = obj;
  obj = { disableTrack: !viewed };
  const items = [viewed];
  trackImpressionDefault(obj, obj, items);
  return children;
};