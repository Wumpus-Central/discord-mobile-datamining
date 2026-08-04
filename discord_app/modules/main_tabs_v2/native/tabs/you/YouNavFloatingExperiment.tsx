// discord_app/modules/main_tabs_v2/native/tabs/you/YouNavFloatingExperiment.tsx
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-you-nav-floating", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const enabled = apexExperiment.getConfig({ location: "you-nav-floating" }).enabled;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouNavFloatingExperiment.tsx");

export function isYouNavFloating() {
  return enabled;
}