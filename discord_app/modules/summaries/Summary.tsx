// === Module 10985: SummarySources ===

// Module 10985 (SummarySources)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/summaries/Summary.tsx");

export const SummarySources = { SOURCE_0: 0, [0]: "SOURCE_0", SOURCE_1: 1, [1]: "SOURCE_1" };
export const SummaryType = { UNSET: 0, [0]: "UNSET", SOURCE_1: 1, [1]: "SOURCE_1", SOURCE_2: 2, [2]: "SOURCE_2" };
export const createSummaryFromServer = function createSummaryFromServer(summary, channelId) {
  const obj = { id: summary.id, topic: summary.topic, summShort: summary.summ_short, people: Array.from(new Set(summary.people)), startId: null, endId: null, count: null, channelId, source: null, type: null };
  ({ start_id: obj[4], end_id: obj[5], count: obj[6] } = summary);
  ({ source: obj[8], type: obj[9] } = summary);
  return obj;
};