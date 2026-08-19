// === Module 10933: getApplicationStreamPresetValues ===

// Module 10933 (getApplicationStreamPresetValues)
import obj132 from "obj132" /* 2 */;
import _modDef10934 from "module_10934" /* 10934 */;
import canStreamWithSettingsDefault from "canStreamWithSettings" /* 10935 */;
import RESOLUTION_720 from "RESOLUTION_720" /* 4524 */;

function getApplicationStreamPresetValues() {
  const obj = { resolution: closure_4.RESOLUTION_SOURCE, fps: closure_2.FPS_15 };
  const items = [obj, { resolution: closure_4.RESOLUTION_SOURCE, fps: closure_2.FPS_5 }];
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
      if (canStreamWithSettingsDefault(arg0, item10012.resolution, item10012.fps, arg1, arg2)) {
        let items = [, ];
        ({ resolution: arr[0], fps: arr[1] } = item10012);
        obj.return();
        return items;
      }
    }
    return null;
  }
}
({ ApplicationStreamFPS: obj1, ApplicationStreamPresets: c3, ApplicationStreamResolutions: c4 } = RESOLUTION_720);
const result = obj132.fileFinishedImporting("modules/go_live/utils/getStreamSettingsForPreset.tsx");

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