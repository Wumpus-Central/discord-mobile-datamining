// === Module 1243: TelemetryRingLifecycle ===

// Module 1243 (TelemetryRingLifecycle)
import telemetry_ring_TelemetryRingLifecycleDefault from "telemetry_ring/TelemetryRingLifecycle" /* 1244 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 2122 */;
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 2123 */;
import TelemetryRingNative from "TelemetryRingNative" /* 2126 */;
import SentryTelemetryDefault from "SentryTelemetry" /* 15250 */;
import NormalTelemetryDefault from "NormalTelemetry" /* 15251 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = telemetry_ring_TelemetryRingLifecycleDefault;
export const ZoomedInTelemetry = ZoomedInTelemetryDefault;
export const SentryTelemetry = SentryTelemetryDefault;
export const NormalTelemetry = NormalTelemetryDefault;
export const isZoomedExperimentEnabled = ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryRingNative.TelemetryChannel;