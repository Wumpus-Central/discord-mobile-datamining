// === Module 1259: TelemetryRingLifecycle ===

// Module 1259 (TelemetryRingLifecycle)
import telemetry_ring_TelemetryRingLifecycleDefault from "telemetry_ring/TelemetryRingLifecycle" /* 1260 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 2005 */;
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 2006 */;
import TelemetryRingNative from "TelemetryRingNative" /* 2009 */;
import SentryTelemetryDefault from "SentryTelemetry" /* 15356 */;
import NormalTelemetryDefault from "NormalTelemetry" /* 15357 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = telemetry_ring_TelemetryRingLifecycleDefault;
export const ZoomedInTelemetry = ZoomedInTelemetryDefault;
export const SentryTelemetry = SentryTelemetryDefault;
export const NormalTelemetry = NormalTelemetryDefault;
export const isZoomedExperimentEnabled = ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryRingNative.TelemetryChannel;