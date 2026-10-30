// discord_app/modules/conjure/experiments/ConjureMcpUiExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { name: "2026-10-conjure-mcp-ui", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null, 2: { enabled: false } };
obj2[2] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/conjure/experiments/ConjureMcpUiExperiment.tsx");

export function useIsConjureMcpUiEnabled(ConjureChatScene) {
  return closure_0.useConfig({ location: ConjureChatScene }).enabled;
}
