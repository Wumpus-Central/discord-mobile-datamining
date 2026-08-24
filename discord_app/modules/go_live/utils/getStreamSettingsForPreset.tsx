// discord_app/modules/go_live/utils/getStreamSettingsForPreset.tsx
import set from "../../../../_runtime/00002_set.js";
import _modDef10973 from "../GoLiveVideoPresetResolutionExperiment.tsx";
import canStreamWithSettingsDefault from "canStreamWithSettings.tsx";
import RESOLUTION_720 from "../StreamSettingsConstants.tsx";

function getApplicationStreamPresetValues() {
  let obj = _modDef10973;
  obj = { [closure_3.PRESET_DOCUMENTS]: items };
  obj = { resolution: closure_4.RESOLUTION_SOURCE, fps: closure_2.FPS_15 };
  items = [obj, { resolution: closure_4.RESOLUTION_SOURCE, fps: closure_2.FPS_5 }];
  const items1 = [{ resolution: obj.getConfig({ location: "getApplicationStreamPresetValues" }).videoPresetResolutionMax, fps: closure_2.FPS_60 }, { resolution: closure_4.RESOLUTION_1080, fps: closure_2.FPS_60 }, { resolution: closure_4.RESOLUTION_720, fps: closure_2.FPS_60 }, { resolution: closure_4.RESOLUTION_720, fps: closure_2.FPS_30 }];
  obj[constants.PRESET_VIDEO] = items1;
  obj[constants.PRESET_AUTO] = [];
  obj[constants.PRESET_CUSTOM] = [];
  const items2 = [{ resolution: closure_4.RESOLUTION_720, fps: closure_2.FPS_30 }];
  obj[constants.PRESET_MOBILE_DEFAULT] = items2;
  const items3 = [{ resolution: closure_4.RESOLUTION_480, fps: closure_2.FPS_30 }];
  obj[constants.PRESET_MOBILE_PERFORMANCE] = items3;
  const items4 = [{ resolution: closure_4.RESOLUTION_1080, fps: closure_2.FPS_60 }];
  obj[constants.PRESET_MOBILE_HIGH_QUALITY] = items4;
  return obj;
}
function getStreamSettingsForPreset(arg0, user, guildPremiumTier) {
  const tmp = getApplicationStreamPresetValues()[arg0];
  if (null == tmp) {
    return null;
  } else {
    for (const item10012 of tmp) {
      let tmp4 = item10012;
      let tmp5 = importDefault;
      let tmp6 = dependencyMap;
      let tmp7 = arg0;
      let tmp8 = arg1;
      let tmp9 = arg2;
      if (canStreamWithSettingsDefault(arg0, item10012.resolution, item10012.fps, arg1, arg2)) {
        let tmp10 = item10012;
        let items = [, ];
        ({ resolution: arr[0], fps: arr[1] } = tmp4);
        let tmp11 = obj;
        obj.return();
        return items;
      }
    }
    return null;
  }
}
({ ApplicationStreamFPS: obj1, ApplicationStreamPresets: c3, ApplicationStreamResolutions: c4 } = RESOLUTION_720);
const result = set.fileFinishedImporting("modules/go_live/utils/getStreamSettingsForPreset.tsx");

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
export const canStreamWithPreset = function canStreamWithPreset(arg0, user, guildPremiumTier) {
  return null != getStreamSettingsForPreset(arg0, user, guildPremiumTier);
};