// === Module 12269: ConjureDebugSnapshot ===

// Module 12269 (ConjureDebugSnapshot)
import ConjureDebugLogStore from "ConjureDebugLogStore" /* 10911 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10906 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugSnapshot.tsx");

export const conjureDebugSnapshot = function conjureDebugSnapshot(projectId) {
  const obj = { captured_at: new Date().toISOString(), project_id: projectId, status: ConjureDebugStore.getStatus(projectId), last_turn_usage: ConjureDebugStore.getLastTurnUsage(projectId), last_compaction: ConjureDebugStore.getLastCompaction(projectId), last_compaction_decline: ConjureDebugStore.getLastCompactionDecline(projectId), timing_traces: ConjureDebugStore.getTimingTraces(projectId), logs: ConjureDebugLogStore.getLogs(projectId) };
  return JSON.stringify(obj, null, 2);
};