// discord_app/components_native/common/FastImageApngExperiment.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import NativeImageManagerModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeImageManagerModule.tsx";
import ApexExperiment from "../../modules/experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_3 = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-10-android-fastimage-apng",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
let result = size.fileFinishedImporting("components_native/common/FastImageApngExperiment.tsx");

export const initializeFastImageApngExperiment = function initializeFastImageApngExperiment() {
  if (obj.isAndroid()) {
    const initialized = initializeDefault.initialized;
    initialized.then(() => {
      const result = NativeImageManagerModuleDefault.setFastImageApngEnabled(
        config.getConfig({ location: "loaded" }).enabled,
      );
    });
  }
  obj = PlatformUtils;
};
