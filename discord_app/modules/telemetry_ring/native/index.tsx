// === Module 1234: TelemetryRingLifecycle ===

// Module 1234 (TelemetryRingLifecycle)
import set from "set" /* 2 */;
import _updateZoomedInExportDefault from "_updateZoomedInExport" /* 1235 */;
import shouldRunDefault from "shouldRun" /* 1899 */;
import apexExperiment from "apexExperiment" /* 1900 */;
import TelemetryChannel from "TelemetryChannel" /* 1903 */;
import snapshotForBreadcrumbsDefault from "snapshotForBreadcrumbs" /* 14080 */;
import NormalTelemetryImplDefault from "NormalTelemetryImpl" /* 14081 */;

const result = set.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = _updateZoomedInExportDefault;
export const ZoomedInTelemetry = shouldRunDefault;
export const SentryTelemetry = snapshotForBreadcrumbsDefault;
export const NormalTelemetry = NormalTelemetryImplDefault;
export const isZoomedExperimentEnabled = apexExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryChannel.TelemetryChannel;