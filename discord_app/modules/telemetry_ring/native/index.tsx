// discord_app/modules/telemetry_ring/native/index.tsx
import set from "../../../../_runtime/00002_set.js";
import _updateZoomedInExportDefault from "TelemetryRingLifecycle.tsx";
import shouldRunDefault from "channels/ZoomedInTelemetry.tsx";
import apexExperiment from "ZoomedInAnalyticsExperiment.tsx";
import TelemetryChannel from "TelemetryRingNative.android.tsx";
import snapshotForBreadcrumbsDefault from "channels/SentryTelemetry.tsx";
import NormalTelemetryImplDefault from "channels/NormalTelemetry.tsx";

const result = set.fileFinishedImporting("modules/telemetry_ring/native/index.tsx");

export const TelemetryRingLifecycle = _updateZoomedInExportDefault;
export const ZoomedInTelemetry = shouldRunDefault;
export const SentryTelemetry = snapshotForBreadcrumbsDefault;
export const NormalTelemetry = NormalTelemetryImplDefault;
export const isZoomedExperimentEnabled = apexExperiment.isZoomedExperimentEnabled;
export const TelemetryChannel = TelemetryChannel.TelemetryChannel;
