// === Module 16833: VibegrationsDebugSnapshot ===

// Module 16833 (VibegrationsDebugSnapshot)
import VibegrationsDebugStore from "VibegrationsDebugStore" /* 16832 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 16754 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsDebugSnapshot.tsx");

export const vibegrationsDebugSnapshot = function vibegrationsDebugSnapshot(projectId) {
  const obj = { captured_at: new Date().toISOString(), project_id: projectId, status: VibegrationsDebugStore.getStatus(projectId), last_turn_usage: VibegrationsDebugStore.getLastTurnUsage(projectId), last_compaction: VibegrationsDebugStore.getLastCompaction(projectId), last_compaction_decline: VibegrationsDebugStore.getLastCompactionDecline(projectId), model_calls: VibegrationsDebugStore.getModelCalls(projectId), logs: VibegrationsProjectStore.getLogs(projectId) };
  return JSON.stringify(obj, null, 2);
};