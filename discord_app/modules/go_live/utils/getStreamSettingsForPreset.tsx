// === Module 9633: getStreamSettingsForPreset ===

// Module 9633 (getStreamSettingsForPreset)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import getFrontierTuningConfigIfEligibleDefault from "getFrontierTuningConfigIfEligible" /* 5028 */;
import canStreamWithSettingsDefault from "canStreamWithSettings" /* 9634 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 4937 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
function getApplicationStreamPresetValues() {
  const items = [, ];
  const obj = { resolution: hasOwnProperty.RESOLUTION_SOURCE, fps: _false.FPS_15 };
  items[0] = obj;
  items[1] = { resolution: hasOwnProperty.RESOLUTION_SOURCE, fps: _false.FPS_5 };
  const items1 = [, , , ];
  const obj2 = { resolution: hasOwnProperty.RESOLUTION_1440, fps: _false.FPS_60 };
  items1[0] = obj2;
  items1[1] = { resolution: hasOwnProperty.RESOLUTION_1080, fps: _false.FPS_60 };
  items1[2] = { resolution: hasOwnProperty.RESOLUTION_720, fps: _false.FPS_60 };
  items1[3] = { resolution: hasOwnProperty.RESOLUTION_720, fps: _false.FPS_30 };
  const items2 = [];
  const obj3 = { resolution: hasOwnProperty.RESOLUTION_720, fps: _false.FPS_30 };
  items2[0] = obj3;
  const items3 = [];
  const obj4 = { resolution: hasOwnProperty.RESOLUTION_480, fps: _false.FPS_30 };
  items3[0] = obj4;
  const items4 = [];
  const obj5 = { resolution: hasOwnProperty.RESOLUTION_1080, fps: _false.FPS_60 };
  items4[0] = obj5;
  return { [closure_1_4.PRESET_DOCUMENTS]: items, [closure_1_4.PRESET_VIDEO]: items1, [closure_1_4.PRESET_AUTO]: [], [closure_1_4.PRESET_CUSTOM]: [], [closure_1_4.PRESET_MOBILE_DEFAULT]: items2, [closure_1_4.PRESET_MOBILE_PERFORMANCE]: items3, [closure_1_4.PRESET_MOBILE_HIGH_QUALITY]: items4 };
}
function getStreamSettingsForPreset(arg0, user, guildPremiumTier, arg3) {
  const tmp = getApplicationStreamPresetValues()[arg0];
  if (null == tmp) {
    return null;
  } else {
    for (const item10011 of tmp) {
      if (canStreamWithSettingsDefault(arg0, item10011.resolution, item10011.fps, user, guildPremiumTier)) {
        if (arg0 === constants.PRESET_VIDEO) {
          if (PlatformUtils.isPlatformEmbedded) {
            let tmp26Result = PlatformUtils;
            if (tmp26Result.isDesktop()) {
              let str = "getStreamSettingsForPreset";
              let tmp11 = getFrontierTuningConfigIfEligibleDefault("getStreamSettingsForPreset", user, arg3);
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
                        let items = [, ];
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
        let items1 = [, ];
        ({ resolution: arr[0], fps: arr[1] } = item10011);
        obj2.return();
        return items1;
      }
    }
    return null;
  }
}
({ ApplicationStreamFPS: c3, ApplicationStreamPresets: closure_4, ApplicationStreamResolutions: hasOwnProperty } = StreamSettingsConstants);
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