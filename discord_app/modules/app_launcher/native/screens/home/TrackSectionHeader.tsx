// discord_app/modules/app_launcher/native/screens/home/TrackSectionHeader.tsx
import handleDismissWithDismissed from "handleDismissWithDismissed";
import { encodeProperties } from "../../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import { trackImpression } from "../../../../app_analytics/useTrackImpression.tsx";

const require = arg1;
const result = require("encodeProperties").fileFinishedImporting("modules/app_launcher/native/screens/home/TrackSectionHeader.tsx");

export default function TrackSectionHeader(viewed) {
  let children;
  let numItems;
  let numVisibleItems;
  let sectionName;
  viewed = viewed.viewed;
  ({ sectionName, numItems, numVisibleItems, children } = viewed);
  let obj = { type: null, name: null, properties: null };
  obj[0] = encodeProperties /* encodeProperties */.ImpressionTypes.VIEW;
  obj[1] = encodeProperties /* encodeProperties */.ImpressionNames.APP_LAUNCHER_SECTION;
  obj = { section_name: sectionName, num_items: numItems, num_visible_items: numVisibleItems, source: handleDismissWithDismissed.entrypoint() };
  obj[2] = obj;
  obj = { disableTrack: !viewed };
  const items = [viewed];
  trackImpression(obj, obj, items);
  return children;
};