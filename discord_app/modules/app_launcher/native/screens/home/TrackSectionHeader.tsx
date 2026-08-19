// === Module 11273: TrackSectionHeader ===

// Module 11273 (TrackSectionHeader)
import encodeProperties from "encodeProperties" /* 503 */;
import trackImpressionDefault from "trackImpression" /* 9177 */;
import handleDismissWithDismissed from "handleDismissWithDismissed" /* 11264 */;

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