// discord_app/modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ExperimentBuckets from "../../ExperimentConstants.tsx";
import registeredExperimentIds from "../Helpers.tsx";

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.CONNECTION_OPEN_MOBILE, { location: "app open mobile" });
const result = obj132.fileFinishedImporting("modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx");

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;