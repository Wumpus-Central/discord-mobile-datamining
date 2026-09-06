// discord_app/modules/telemetry_ring/native/index.tsx
import telemetry_ring_TelemetryRingLifecycleDefault from "TelemetryRingLifecycle.tsx";
import ZoomedInTelemetryDefault from "channels/ZoomedInTelemetry.tsx";
import ZoomedInAnalyticsExperiment from "ZoomedInAnalyticsExperiment.tsx";
import TelemetryRingNative from "TelemetryRingNative.android.tsx";
import SentryTelemetryDefault from "channels/SentryTelemetry.tsx";
import NormalTelemetryDefault from "channels/NormalTelemetry.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = telemetry_ring_TelemetryRingLifecycleDefault;
export const ZoomedInTelemetry = ZoomedInTelemetryDefault;
export const SentryTelemetry = SentryTelemetryDefault;
export const NormalTelemetry = NormalTelemetryDefault;
export const isZoomedExperimentEnabled = ZoomedInAnalyticsExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryRingNative.TelemetryChannel;
