// === Module 16774: ConjureDebugSnapshot ===

// Module 16774 (ConjureDebugSnapshot)
import ConjureProjectStore from "ConjureProjectStore" /* 8734 */;
import ConjureDebugStore from "ConjureDebugStore" /* 16773 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugSnapshot.tsx");

export const conjureDebugSnapshot = function conjureDebugSnapshot(projectId) {
  const obj = { captured_at: new Date().toISOString(), project_id: projectId, status: ConjureDebugStore.getStatus(projectId), last_turn_usage: ConjureDebugStore.getLastTurnUsage(projectId), last_compaction: ConjureDebugStore.getLastCompaction(projectId), last_compaction_decline: ConjureDebugStore.getLastCompactionDecline(projectId), model_calls: ConjureDebugStore.getModelCalls(projectId), logs: ConjureProjectStore.getLogs(projectId) };
  return JSON.stringify(obj, null, 2);
};