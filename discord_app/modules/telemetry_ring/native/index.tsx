// === Module 1233: TelemetryRingLifecycle ===

// Module 1233 (TelemetryRingLifecycle)
import telemetry_ring_TelemetryRingLifecycleDefault from "telemetry_ring/TelemetryRingLifecycle" /* 1234 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1984 */;
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 1985 */;
import TelemetryRingNative from "TelemetryRingNative" /* 1988 */;
import SentryTelemetryDefault from "SentryTelemetry" /* 13623 */;
import NormalTelemetryDefault from "NormalTelemetry" /* 13624 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = telemetry_ring_TelemetryRingLifecycleDefault;
export const ZoomedInTelemetry = ZoomedInTelemetryDefault;
export const SentryTelemetry = SentryTelemetryDefault;
export const NormalTelemetry = NormalTelemetryDefault;
export const isZoomedExperimentEnabled = ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryRingNative.TelemetryChannel;