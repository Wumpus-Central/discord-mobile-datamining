// === Module 11680: TrackSectionHeader ===

// Module 11680 (TrackSectionHeader)
import encodeProperties from "encodeProperties" /* 503 */;
import trackImpressionDefault from "trackImpression" /* 9497 */;
import closure_3 from "handleDismissWithDismissed" /* 11671 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/home/TrackSectionHeader.tsx");

export default function TrackSectionHeader(viewed) {
  viewed = viewed.viewed;
  ({ sectionName, numItems, numVisibleItems, children } = viewed);
  let obj = { type: encodeProperties.ImpressionTypes.VIEW, name: encodeProperties.ImpressionNames.APP_LAUNCHER_SECTION, properties: null };
  obj = { section_name: sectionName, num_items: numItems, num_visible_items: numVisibleItems, source: closure_3.entrypoint() };
  obj[2] = obj;
  obj = { disableTrack: !viewed };
  const items = [viewed];
  trackImpressionDefault(obj, obj, items);
  return children;
};