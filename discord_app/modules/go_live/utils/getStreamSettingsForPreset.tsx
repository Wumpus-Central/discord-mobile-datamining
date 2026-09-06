// === Module 9953: getApplicationStreamPresetValues ===

// Module 9953 (getApplicationStreamPresetValues)
import set from "set" /* 2 */;
import set2 from "set" /* 1115 */;
import _modDef9954 from "module_9954" /* 9954 */;
import canStreamWithSettingsDefault from "canStreamWithSettings" /* 9955 */;
import RESOLUTION_720 from "RESOLUTION_720" /* 4607 */;

function getApplicationStreamPresetValues() {
  let obj = _modDef9954;
  obj = { [closure_4.PRESET_DOCUMENTS]: items };
  obj = { resolution: closure_5.RESOLUTION_SOURCE, fps: closure_3.FPS_15 };
  items = [obj, { resolution: closure_5.RESOLUTION_SOURCE, fps: closure_3.FPS_5 }];
  const items1 = [{ resolution: obj.getConfig({ location: "getApplicationStreamPresetValues" }).videoPresetResolutionMax, fps: closure_3.FPS_60 }, { resolution: closure_5.RESOLUTION_1080, fps: closure_3.FPS_60 }, { resolution: closure_5.RESOLUTION_720, fps: closure_3.FPS_60 }, { resolution: closure_5.RESOLUTION_720, fps: closure_3.FPS_30 }];
  obj[constants.PRESET_VIDEO] = items1;
  obj[constants.PRESET_AUTO] = [];
  obj[constants.PRESET_CUSTOM] = [];
  const items2 = [{ resolution: closure_5.RESOLUTION_720, fps: closure_3.FPS_30 }];
  obj[constants.PRESET_MOBILE_DEFAULT] = items2;
  const items3 = [{ resolution: closure_5.RESOLUTION_480, fps: closure_3.FPS_30 }];
  obj[constants.PRESET_MOBILE_PERFORMANCE] = items3;
  const items4 = [{ resolution: closure_5.RESOLUTION_1080, fps: closure_3.FPS_60 }];
  obj[constants.PRESET_MOBILE_HIGH_QUALITY] = items4;
  return obj;
}
function getStreamSettingsForPreset(arg0, user, guildPremiumTier, arg3) {
  const tmp = getApplicationStreamPresetValues()[arg0];
  if (null == tmp) {
    return null;
  } else {
    for (const item10011 of tmp) {
      let tmp3 = item10011;
      let tmp5 = dependencyMap;
      let tmp4 = importDefault;
      let tmp6 = arg0;
      let tmp7 = arg1;
      let tmp8 = arg2;
      if (canStreamWithSettingsDefault(arg0, item10011.resolution, item10011.fps, arg1, arg2)) {
        let tmp9 = constants;
        if (arg0 === constants.PRESET_VIDEO) {
          let tmp26 = require;
          if (set2.isPlatformEmbedded) {
            let tmp26Result = tmp26(1115);
            if (tmp26Result.isDesktop()) {
              let tmp10 = arg3;
              let str = "getStreamSettingsForPreset";
              let tmp11 = tmp4(4698)("getStreamSettingsForPreset", arg1, arg3);
              let tmp12 = tmp11;
              let maxResolution;
              if (tmp11 != null) {
                maxResolution = tmp11.maxResolution;
              }
              if (null != maxResolution) {
                let tmp14 = tmp11;
                if (null != tmp12.maxFPS) {
                  let tmp15 = item10011;
                  let tmp16 = closure_5;
                  if (tmp3.resolution !== closure_5.RESOLUTION_SOURCE) {
                    let tmp17 = item10011;
                    let tmp18 = tmp11;
                    if (tmp3.resolution < tmp12.maxResolution) {
                      let tmp19 = item10011;
                      let tmp20 = tmp11;
                      if (tmp3.fps <= tmp12.maxFPS) {
                        let tmp23 = tmp11;
                        let items = [, ];
                        ({ maxResolution: arr2[0], maxFPS: arr2[1] } = tmp12);
                        let tmp24 = obj2;
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
        let tmp21 = item10011;
        let items1 = [, ];
        ({ resolution: arr[0], fps: arr[1] } = tmp3);
        let tmp22 = obj2;
        obj2.return();
        return items1;
      }
    }
    return null;
  }
}
({ ApplicationStreamFPS: c3, ApplicationStreamPresets: c4, ApplicationStreamResolutions: c5 } = RESOLUTION_720);
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
  return null != getStreamSettingsForPreset(arg0, user, guildPremiumTier, arg3);
};