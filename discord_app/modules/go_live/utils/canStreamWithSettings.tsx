// === Module 10935: canStreamWithSettings ===

// Module 10935 (canStreamWithSettings)
import obj132 from "obj132" /* 2 */;
import getGoLiveAutoQualityExperimentConfig from "getGoLiveAutoQualityExperimentConfig" /* 10936 */;
import canUseStreamSettingDefault from "canUseStreamSetting" /* 10937 */;
import RESOLUTION_720 from "RESOLUTION_720" /* 4524 */;

({ ApplicationStreamSettingRequirements: c3, ApplicationStreamPresets: c4 } = RESOLUTION_720);
const result = obj132.fileFinishedImporting("modules/go_live/utils/canStreamWithSettings.tsx");

export default function canStreamWithSettings(arg0, arg1, arg2, arg3, arg4, arg5) {
  if (arg0 === constants.PRESET_AUTO) {
    return getGoLiveAutoQualityExperimentConfig.getGoLiveAutoQualityExperimentConfig({ location: "canStreamWithSettings" }).allowAutoQuality;
  } else {
    const iter = dependencyMap[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (null == nextResult.preset) {
        if (arg1 === tmp4.resolution) {
          if (arg2 === tmp4.fps) {
            if (canUseStreamSettingDefault(tmp4, arg3, arg4, arg5)) {
              iter.return();
              let flag = true;
              return true;
            }
          }
        }
      }
      continue;
    }
    return false;
  }
};