// discord_app/modules/go_live/utils/getStreamSettingsForPreset.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import getFrontierTuningConfigIfEligibleDefault from "getFrontierTuningConfigIfEligible.tsx";
import GoLiveVideoPresetResolutionExperimentDefault from "../GoLiveVideoPresetResolutionExperiment.tsx";
import canStreamWithSettingsDefault from "canStreamWithSettings.tsx";
import StreamSettingsConstants from "../StreamSettingsConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function getApplicationStreamPresetValues() {
  let obj = { [closure_1_4.PRESET_DOCUMENTS]: items };
  obj = { resolution: hasOwnProperty.RESOLUTION_SOURCE, fps: React3.FPS_15 };
  items = [obj, { resolution: hasOwnProperty.RESOLUTION_SOURCE, fps: React3.FPS_5 }];
  const items1 = [
    {
      resolution: obj.getConfig({ location: "getApplicationStreamPresetValues" }).videoPresetResolutionMax,
      fps: React3.FPS_60,
    },
    { resolution: hasOwnProperty.RESOLUTION_1080, fps: React3.FPS_60 },
    { resolution: hasOwnProperty.RESOLUTION_720, fps: React3.FPS_60 },
    { resolution: hasOwnProperty.RESOLUTION_720, fps: React3.FPS_30 },
  ];
  obj[constants.PRESET_VIDEO] = items1;
  obj[constants.PRESET_AUTO] = [];
  obj[constants.PRESET_CUSTOM] = [];
  const items2 = [{ resolution: hasOwnProperty.RESOLUTION_720, fps: React3.FPS_30 }];
  obj[constants.PRESET_MOBILE_DEFAULT] = items2;
  const items3 = [{ resolution: hasOwnProperty.RESOLUTION_480, fps: React3.FPS_30 }];
  obj[constants.PRESET_MOBILE_PERFORMANCE] = items3;
  const items4 = [{ resolution: hasOwnProperty.RESOLUTION_1080, fps: React3.FPS_60 }];
  obj[constants.PRESET_MOBILE_HIGH_QUALITY] = items4;
  return obj;
}
function getStreamSettingsForPreset(arg0, user, guildPremiumTier, arg3) {
  const tmp = getApplicationStreamPresetValues()[arg0];
  if (null == tmp) {
    return null;
  } else {
    for (const item10011 of tmp) {
      if (canStreamWithSettingsDefault(arg0, item10011.resolution, item10011.fps, arg1, arg2)) {
        if (arg0 === constants.PRESET_VIDEO) {
          if (PlatformUtils.isPlatformEmbedded) {
            let tmp26Result = PlatformUtils;
            if (tmp26Result.isDesktop()) {
              let str = "getStreamSettingsForPreset";
              let tmp11 = getFrontierTuningConfigIfEligibleDefault("getStreamSettingsForPreset", arg1, arg3);
              let tmp12 = tmp11;
              let maxResolution;
              if (tmp11 != null) {
                maxResolution = tmp11.maxResolution;
              }
              if (null != maxResolution) {
                if (null != tmp12.maxFPS) {
                  if (item10011.resolution !== hasOwnProperty.RESOLUTION_SOURCE) {
                    if (item10011.resolution < tmp12.maxResolution) {
                      if (item10011.fps <= tmp12.maxFPS) {
                        let items = [,];
                        ({ maxResolution: arr2[0], maxFPS: arr2[1] } = tmp12);
                        obj2.return();
                        return items;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        let items1 = [,];
        ({ resolution: arr[0], fps: arr[1] } = item10011);
        obj2.return();
        return items1;
      }
    }
    return null;
  }
}
({
  ApplicationStreamFPS: c3,
  ApplicationStreamPresets: closure_4,
  ApplicationStreamResolutions: hasOwnProperty,
} = StreamSettingsConstants);
const result = size.fileFinishedImporting("modules/go_live/utils/getStreamSettingsForPreset.tsx");

export default getStreamSettingsForPreset;
export { getApplicationStreamPresetValues };
export const getMaxSettingsForPreset = function getMaxSettingsForPreset(PRESET_MOBILE_DEFAULT) {
  const tmp = getApplicationStreamPresetValues()[PRESET_MOBILE_DEFAULT];
  let first;
  if (tmp != null) {
    first = tmp[0];
  }
  if (first == null) {
    first = null;
  }
  return first;
};
export const canStreamWithPreset = function canStreamWithPreset(arg0, user, guildPremiumTier, arg3) {
  return null != getStreamSettingsForPreset(arg0, user, guildPremiumTier, arg3);
};
