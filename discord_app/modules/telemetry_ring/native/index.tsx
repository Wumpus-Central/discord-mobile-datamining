// === Module 1210: TelemetryRingLifecycle ===

// Module 1210 (TelemetryRingLifecycle)
import set from "set" /* 2 */;
import _updateZoomedInExportDefault from "_updateZoomedInExport" /* 1211 */;
import shouldRunDefault from "shouldRun" /* 13651 */;
import apexExperiment from "apexExperiment" /* 13652 */;
import TelemetryChannel from "TelemetryChannel" /* 13655 */;
import snapshotForBreadcrumbsDefault from "snapshotForBreadcrumbs" /* 13658 */;
import NormalTelemetryImplDefault from "NormalTelemetryImpl" /* 13659 */;

const result = set.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = _updateZoomedInExportDefault;
export const ZoomedInTelemetry = shouldRunDefault;
export const SentryTelemetry = snapshotForBreadcrumbsDefault;
export const NormalTelemetry = NormalTelemetryImplDefault;
export const isZoomedExperimentEnabled = apexExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryChannel.TelemetryChannel;