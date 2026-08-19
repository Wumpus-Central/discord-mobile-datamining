// === Module 14655: track ===

// Module 14655 (track)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("actions/AnalyticsTrackingActionCreators.tsx");

export const track = function track(event, properties) {
  const obj = { type: "TRACK", event, properties };
  obj.dispatch(obj);
};