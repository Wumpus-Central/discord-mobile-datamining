// discord_app/modules/messages/YYTextReplacementExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { name: "2026-01-yytext-replacement-ios", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/YYTextReplacementExperiment.tsx");

export const shouldEnableYYTextReplacement = function shouldEnableYYTextReplacement(location) {
  return config.getConfig({ location: location.location }).enabled;
};
