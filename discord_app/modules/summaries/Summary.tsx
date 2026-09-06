// === Module 11348: Summary ===

// Module 11348 (Summary)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/summaries/Summary.tsx");

export const SummarySources = { SOURCE_0: 0, [0]: "SOURCE_0", SOURCE_1: 1, [1]: "SOURCE_1" };
export const SummaryType = { UNSET: 0, [0]: "UNSET", SOURCE_1: 1, [1]: "SOURCE_1", SOURCE_2: 2, [2]: "SOURCE_2" };
export const createSummaryFromServer = function createSummaryFromServer(summary, channelId) {
  const obj = { id: summary.id, topic: summary.topic, summShort: summary.summ_short, people: Array.from(new Set(summary.people)), startId: null, endId: null, count: null, channelId, source: null, type: null };
  ({ start_id: obj.startId, end_id: obj.endId, count: obj.count } = summary);
  ({ source: obj.source, type: obj.type } = summary);
  return obj;
};