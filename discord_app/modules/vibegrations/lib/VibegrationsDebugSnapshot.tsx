// === Module 16375: VibegrationsDebugSnapshot ===

// Module 16375 (VibegrationsDebugSnapshot)
import VibegrationsDebugStore from "VibegrationsDebugStore" /* 16374 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8487 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsDebugSnapshot.tsx");

export const vibegrationsDebugSnapshot = function vibegrationsDebugSnapshot(projectId) {
  const obj = { captured_at: new Date().toISOString(), project_id: projectId, status: VibegrationsDebugStore.getStatus(projectId), last_turn_usage: VibegrationsDebugStore.getLastTurnUsage(projectId), last_compaction: VibegrationsDebugStore.getLastCompaction(projectId), last_compaction_decline: VibegrationsDebugStore.getLastCompactionDecline(projectId), model_calls: VibegrationsDebugStore.getModelCalls(projectId), logs: VibegrationsProjectStore.getLogs(projectId) };
  return JSON.stringify(obj, null, 2);
};