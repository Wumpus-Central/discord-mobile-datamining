// discord_app/modules/vibegrations/lib/VibegrationsDebugSnapshot.tsx
import VibegrationsDebugStore from "../stores/VibegrationsDebugStore.tsx";
import VibegrationsProjectStore from "../stores/VibegrationsProjectStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsDebugSnapshot.tsx");

export const vibegrationsDebugSnapshot = function vibegrationsDebugSnapshot(projectId) {
  const obj = {
    captured_at: new Date().toISOString(),
    project_id: projectId,
    status: VibegrationsDebugStore.getStatus(projectId),
    last_turn_usage: VibegrationsDebugStore.getLastTurnUsage(projectId),
    last_compaction: VibegrationsDebugStore.getLastCompaction(projectId),
    last_compaction_decline: VibegrationsDebugStore.getLastCompactionDecline(projectId),
    model_calls: VibegrationsDebugStore.getModelCalls(projectId),
    logs: VibegrationsProjectStore.getLogs(projectId),
  };
  return JSON.stringify(obj, null, 2);
};
