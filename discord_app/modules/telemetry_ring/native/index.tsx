// === Module 1244: TelemetryRingLifecycle ===

// Module 1244 (TelemetryRingLifecycle)
import telemetry_ring_TelemetryRingLifecycleDefault from "telemetry_ring/TelemetryRingLifecycle" /* 1245 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1990 */;
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 1991 */;
import TelemetryRingNative from "TelemetryRingNative" /* 1994 */;
import SentryTelemetryDefault from "SentryTelemetry" /* 13912 */;
import NormalTelemetryDefault from "NormalTelemetry" /* 13913 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = telemetry_ring_TelemetryRingLifecycleDefault;
export const ZoomedInTelemetry = ZoomedInTelemetryDefault;
export const SentryTelemetry = SentryTelemetryDefault;
export const NormalTelemetry = NormalTelemetryDefault;
export const isZoomedExperimentEnabled = ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryRingNative.TelemetryChannel;