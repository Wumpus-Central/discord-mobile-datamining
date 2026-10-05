// discord_app/modules/conjure/debug/ConjureDebugSnapshot.tsx
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import ConjureDebugStore from "ConjureDebugStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugSnapshot.tsx");

export const conjureDebugSnapshot = function conjureDebugSnapshot(projectId) {
  let date;
  const obj = {
    captured_at: date.toISOString(),
    project_id: projectId,
    status: ConjureDebugStore.getStatus(projectId),
    last_turn_usage: ConjureDebugStore.getLastTurnUsage(projectId),
    last_compaction: ConjureDebugStore.getLastCompaction(projectId),
    last_compaction_decline: ConjureDebugStore.getLastCompactionDecline(projectId),
    model_calls: ConjureDebugStore.getModelCalls(projectId),
    logs: ConjureProjectStore.getLogs(projectId),
  };
  date = new Date();
  return stringify(obj, null, 2);
};
