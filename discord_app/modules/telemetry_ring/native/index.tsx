// discord_app/modules/telemetry_ring/native/index.tsx
const result = require("shouldRun").fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = require("_updateZoomedInExport");
export const ZoomedInTelemetry = require("shouldRun");
export const SentryTelemetry = require("snapshotForBreadcrumbs");
export const NormalTelemetry = require("NormalTelemetryImpl");
export const isZoomedExperimentEnabled = require("apexExperiment").isZoomedExperimentEnabled;
export const TelemetryChannel = require("TelemetryChannel").TelemetryChannel;