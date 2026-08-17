// discord_app/modules/premium_marketing/native/components/BuyNitroTriggerPointEffect.tsx
import set from "../../../../../_runtime/00002_set.js";
import useCommonTriggerPoint from "../../../experiments/trigger_points/useCommonTriggerPoint.tsx";
import commonTriggerPointConfiguration from "../../../experiments/trigger_points/OpenNitroTriggerPoint.tsx";

const result = set.fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroTriggerPointEffect.tsx");

export const BuyNitroTriggerPointEffect = function BuyNitroTriggerPointEffect() {
  const commonTriggerPoint = useCommonTriggerPoint.useCommonTriggerPoint(commonTriggerPointConfiguration.OpenNitroTriggerPoint);
  return null;
};