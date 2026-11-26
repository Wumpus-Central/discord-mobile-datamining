// discord_app/modules/tabs/TabsExperiment.tsx
import utils_PlatformUtils from "../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-07-desktop-channel-tabs",
  kind: "user",
  defaultConfig: { enabled: false, newTabExperience: "popout" },
  variations: null,
};
let obj2 = {
  1: null,
  2: { enabled: true, newTabExperience: "popout" },
  3: { enabled: true, newTabExperience: "friends" },
};
obj2[3] = { enabled: true, newTabExperience: "quickswitcher" };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/tabs/TabsExperiment.tsx");

export default apexExperiment;
export function useTabsExperimentEnabled(location) {
  const obj2 = { autoTrackExposure: utils_PlatformUtils.isDesktop() };
  let enabled = apexExperiment.useConfig({ location }, obj2).enabled;
  if (enabled) {
    enabled = utils_PlatformUtils.isDesktop();
    const tmpResult = utils_PlatformUtils;
  }
  return enabled;
}
export function getTabsExperimentEnabled(navigateActiveTabHistory) {
  let enabled = utils_PlatformUtils.isDesktop();
  if (enabled) {
    const obj2 = { location: navigateActiveTabHistory };
    enabled = apexExperiment.getConfig(obj2).enabled;
  }
  return enabled;
}
