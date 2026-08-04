// discord_app/modules/summaries/Summary.tsx
const result = require("set").fileFinishedImporting("modules/summaries/Summary.tsx");

export const SummarySources = { SOURCE_0: 0, [0]: "SOURCE_0", SOURCE_1: 1, [1]: "SOURCE_1" };
export const SummaryType = { UNSET: 0, [0]: "UNSET", SOURCE_1: 1, [1]: "SOURCE_1", SOURCE_2: 2, [2]: "SOURCE_2" };
export const createSummaryFromServer = function createSummaryFromServer(summary, channelId) {
  const obj = { id: summary.id, topic: summary.topic, summShort: summary.summ_short, people: null, startId: null, endId: null, count: null, channelId: null, source: null, type: null };
  obj[3] = Array.from(new Set(summary.people));
  ({ start_id: obj[4], end_id: obj[5], count: obj[6] } = summary);
  obj[7] = channelId;
  ({ source: obj[8], type: obj[9] } = summary);
  return obj;
};