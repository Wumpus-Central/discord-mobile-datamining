// === Module 1210: TelemetryRingLifecycle ===

// Module 1210 (TelemetryRingLifecycle)
import obj132 from "obj132" /* 2 */;
import _updateZoomedInExportDefault from "_updateZoomedInExport" /* 1211 */;
import shouldRunDefault from "shouldRun" /* 13558 */;
import apexExperiment from "apexExperiment" /* 13559 */;
import TelemetryChannel from "TelemetryChannel" /* 13562 */;
import snapshotForBreadcrumbsDefault from "snapshotForBreadcrumbs" /* 13565 */;
import NormalTelemetryImplDefault from "NormalTelemetryImpl" /* 13566 */;

const result = obj132.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = _updateZoomedInExportDefault;
export const ZoomedInTelemetry = shouldRunDefault;
export const SentryTelemetry = snapshotForBreadcrumbsDefault;
export const NormalTelemetry = NormalTelemetryImplDefault;
export const isZoomedExperimentEnabled = apexExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryChannel.TelemetryChannel;