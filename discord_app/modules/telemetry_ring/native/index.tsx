// === Module 1257: TelemetryRingLifecycle ===

// Module 1257 (TelemetryRingLifecycle)
import telemetry_ring_TelemetryRingLifecycleDefault from "telemetry_ring/TelemetryRingLifecycle" /* 1258 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 2003 */;
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 2004 */;
import TelemetryRingNative from "TelemetryRingNative" /* 2007 */;
import SentryTelemetryDefault from "SentryTelemetry" /* 14311 */;
import NormalTelemetryDefault from "NormalTelemetry" /* 14312 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = telemetry_ring_TelemetryRingLifecycleDefault;
export const ZoomedInTelemetry = ZoomedInTelemetryDefault;
export const SentryTelemetry = SentryTelemetryDefault;
export const NormalTelemetry = NormalTelemetryDefault;
export const isZoomedExperimentEnabled = ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryRingNative.TelemetryChannel;