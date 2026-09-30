// discord_app/modules/design/DesignSystemsNotificationComponentsExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-09-design-systems-notification-components",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/design/DesignSystemsNotificationComponentsExperiment.tsx");

export default apexExperiment;
export const useDesignSystemsNotificationComponents = function useDesignSystemsNotificationComponents(
  ToastDurationSettingNative,
) {
  return apexExperiment.useConfig({ location: ToastDurationSettingNative }).enabled;
};
