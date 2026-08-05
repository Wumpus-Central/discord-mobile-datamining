// discord_app/modules/go_live/utils/canStreamWithSettings.tsx
import RESOLUTION_720 from "RESOLUTION_720";

let c3;
let c4;
({ ApplicationStreamSettingRequirements: c3, ApplicationStreamPresets: c4 } = RESOLUTION_720);
const result = require("canUseStreamSetting").fileFinishedImporting("modules/go_live/utils/canStreamWithSettings.tsx");

export default function canStreamWithSettings(arg0, arg1, arg2, arg3, arg4, arg5) {
  if (arg0 === constants.PRESET_AUTO) {
    return require("../GoLiveAutoQualityExperiment.tsx") /* getGoLiveAutoQualityExperimentConfig */.getGoLiveAutoQualityExperimentConfig({ location: "canStreamWithSettings" }).allowAutoQuality;
  } else {
    const iter = dependencyMap[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (null == nextResult.preset) {
        let tmp6 = nextResult;
        if (arg1 === tmp4.resolution) {
          let tmp7 = nextResult;
          if (arg2 === tmp4.fps) {
            let tmp8 = importDefault;
            let tmp9 = dependencyMap;
            let tmp10 = nextResult;
            let tmp11 = arg3;
            let tmp12 = arg4;
            let tmp13 = arg5;
            if (require("canUseStreamSetting.tsx")(tmp4, arg3, arg4, arg5)) {
              let tmp14 = iter;
              iter.return();
              let flag = true;
              return true;
            }
          }
        }
      } else {
        let tmp5 = nextResult;
      }
      continue;
    }
    return false;
  }
};