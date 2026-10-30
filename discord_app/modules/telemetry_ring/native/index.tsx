// === Module 1245: TelemetryRingLifecycle ===

// Module 1245 (TelemetryRingLifecycle)
import telemetry_ring_TelemetryRingLifecycleDefault from "telemetry_ring/TelemetryRingLifecycle" /* 1246 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1998 */;
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment" /* 1999 */;
import TelemetryRingNative from "TelemetryRingNative" /* 2002 */;
import SentryTelemetryDefault from "SentryTelemetry" /* 15918 */;
import NormalTelemetryDefault from "NormalTelemetry" /* 15919 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = telemetry_ring_TelemetryRingLifecycleDefault;
export const ZoomedInTelemetry = ZoomedInTelemetryDefault;
export const SentryTelemetry = SentryTelemetryDefault;
export const NormalTelemetry = NormalTelemetryDefault;
export const isZoomedExperimentEnabled = ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryRingNative.TelemetryChannel;