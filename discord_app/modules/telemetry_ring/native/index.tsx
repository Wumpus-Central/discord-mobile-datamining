// === Module 1234: TelemetryRingLifecycle ===

// Module 1234 (TelemetryRingLifecycle)
import telemetry_ring_TelemetryRingLifecycleDefault from "telemetry_ring/TelemetryRingLifecycle" /* 1235 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1899 */;
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 1900 */;
import TelemetryRingNative from "TelemetryRingNative" /* 1903 */;
import SentryTelemetryDefault from "SentryTelemetry" /* 14080 */;
import NormalTelemetryDefault from "NormalTelemetry" /* 14081 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = telemetry_ring_TelemetryRingLifecycleDefault;
export const ZoomedInTelemetry = ZoomedInTelemetryDefault;
export const SentryTelemetry = SentryTelemetryDefault;
export const NormalTelemetry = NormalTelemetryDefault;
export const isZoomedExperimentEnabled = ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryRingNative.TelemetryChannel;