// discord_app/modules/premium/powerups/experiments/ServerThemeApexShadowExperiment.tsx
import ApexExperiment from "../../../experiments/apex/index.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "guild",
  name: "2026-06-server-theme-apex-shadow",
  defaultConfig: { enabled: false, inExperiment: false, gatesApex: false },
  variations: {
    0: { enabled: false, inExperiment: true, gatesApex: false },
    1: { enabled: true, inExperiment: true, gatesApex: false },
    2: { enabled: false, inExperiment: true, gatesApex: true },
    3: { enabled: true, inExperiment: true, gatesApex: true },
  },
});
const result = size.fileFinishedImporting("modules/premium/powerups/experiments/ServerThemeApexShadowExperiment.tsx");

export const ServerThemeApexShadowExperiment = apexExperiment;
