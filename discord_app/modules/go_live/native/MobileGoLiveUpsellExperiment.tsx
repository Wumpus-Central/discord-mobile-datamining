// discord_app/modules/go_live/native/MobileGoLiveUpsellExperiment.tsx
import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { showMobileGoLiveUpsell: true, goLiveUpsellVariant: "one-step" } };
obj[2] = { showMobileGoLiveUpsell: true, goLiveUpsellVariant: "two-step" };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-mobile-go-live-upsell", kind: "user", defaultConfig: { showMobileGoLiveUpsell: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/go_live/native/MobileGoLiveUpsellExperiment.tsx");

export default apexExperiment;