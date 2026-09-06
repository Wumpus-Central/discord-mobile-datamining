// === Module 12096: TrackSectionHeader ===

// Module 12096 (TrackSectionHeader)
import encodeProperties from "encodeProperties" /* 1250 */;
import trackImpressionDefault from "trackImpression" /* 8768 */;
import closure_3 from "handleDismissWithDismissed" /* 9408 */;

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