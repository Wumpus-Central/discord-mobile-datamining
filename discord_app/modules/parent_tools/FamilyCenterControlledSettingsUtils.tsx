// === Module 15158: FamilyCenterControlledSettingsUtils ===

// Module 15158 (FamilyCenterControlledSettingsUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 7626 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7629 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15155 */;
import size from "module_2" /* 2 */;

function getGoreContentSettingOrDefault(arg0) {
  const ParentalControlledGoreContent = ParentalControlledUserSettings.ParentalControlledGoreContent;
  let controlledSetting = ParentalControlledGoreContent.getControlledSetting(arg0);
  if (controlledSetting == null) {
    controlledSetting = {};
  }
  ({ goreContentNonFriendDm, goreContentFriendDm } = controlledSetting);
  if (!tmp3) {
    goreContentNonFriendDm = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaultsForTeen({ isDm: true });
    const tmpResult = SensitiveMediaGoreRedactionSettingsUtils;
  }
  const obj = { goreContentNonFriendDm, goreContentFriendDm: null, goreContentGuilds: null };
  tmp3 = null != goreContentNonFriendDm && goreContentNonFriendDm !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  if (!tmp4) {
    goreContentFriendDm = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaultsForTeen({ isDm: true, isFriend: true });
    const tmpResult2 = SensitiveMediaGoreRedactionSettingsUtils;
  }
  obj.goreContentFriendDm = goreContentFriendDm;
  obj.goreContentGuilds = preloaded_user_settings.ExplicitContentRedaction.BLUR;
  return obj;
}
function getExplicitContentSettingOrDefault(teenId) {
  const ParentalControlledExplicitContent = ParentalControlledUserSettings.ParentalControlledExplicitContent;
  const controlledSetting = ParentalControlledExplicitContent.getControlledSetting(teenId);
  const obj = { teenId, setting: null };
  let prop;
  if (controlledSetting != null) {
    prop = controlledSetting.explicitContentNonFriendDm;
  }
  obj.setting = prop;
  ({ setting, isFriend, teenId } = obj);
  if (isFriend === undefined) {
    isFriend = false;
  }
  if (tmp5) {
    const obj2 = { explicitContentNonFriendDm: setting, explicitContentFriendDm: null, explicitContentGuilds: null };
    let prop1;
    if (controlledSetting != null) {
      prop1 = controlledSetting.explicitContentFriendDm;
    }
    if (!tmp10) {
      const ParentalControlledLegacyExplicitContent2 = ParentalControlledUserSettings.ParentalControlledLegacyExplicitContent;
      const controlledSetting1 = ParentalControlledLegacyExplicitContent2.getControlledSetting(teenId);
      prop1 = SensitiveMediaExplicitRedactionSettingsUtils.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM[controlledSetting1];
    }
    obj2.explicitContentFriendDm = prop1;
    obj2.explicitContentGuilds = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    return obj2;
  } else {
    const ParentalControlledLegacyExplicitContent = ParentalControlledUserSettings.ParentalControlledLegacyExplicitContent;
    const controlledSetting2 = ParentalControlledLegacyExplicitContent.getControlledSetting(teenId);
    let TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM = SensitiveMediaExplicitRedactionSettingsUtils;
    if (isFriend) {
      TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM = TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM;
    }
  }
  tmp5 = null != setting && setting !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
}
let result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterControlledSettingsUtils.tsx");

export const isSetAndNotDefault = function isSetAndNotDefault(goreContentFriendDm) {
  let tmp = null != goreContentFriendDm;
  if (tmp) {
    tmp = goreContentFriendDm !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  return tmp;
};
export { getGoreContentSettingOrDefault };
export const updateGoreContentSetting = function updateGoreContentSetting(selectedTeenId, arg1) {
  const ParentalControlledGoreContent = ParentalControlledUserSettings.ParentalControlledGoreContent;
  const merged = Object.assign(getGoreContentSettingOrDefault(selectedTeenId));
  const merged1 = Object.assign(arg1);
  const result = ParentalControlledGoreContent.updateControlledSetting(selectedTeenId, {});
};
export const resolveExplicitContentSettingWithDefaultsForTeen = function resolveExplicitContentSettingWithDefaultsForTeen(teenId) {
  ({ setting, isFriend } = teenId);
  if (isFriend === undefined) {
    isFriend = false;
  }
  let tmp = null != setting;
  if (tmp) {
    tmp = setting !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  if (tmp) {
    return setting;
  } else {
    const ParentalControlledLegacyExplicitContent = ParentalControlledUserSettings.ParentalControlledLegacyExplicitContent;
    const controlledSetting = ParentalControlledLegacyExplicitContent.getControlledSetting(teenId.teenId);
    const tmp7 = SensitiveMediaExplicitRedactionSettingsUtils;
    if (isFriend) {
      let tmp8 = tmp7.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM[controlledSetting];
    } else {
      tmp8 = tmp7.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM[controlledSetting];
    }
    return tmp8;
  }
};
export { getExplicitContentSettingOrDefault };
export const updateExplicitContentSetting = function updateExplicitContentSetting(selectedTeenId, arg1) {
  const ParentalControlledExplicitContent = ParentalControlledUserSettings.ParentalControlledExplicitContent;
  const merged = Object.assign(getExplicitContentSettingOrDefault(selectedTeenId));
  const merged1 = Object.assign(arg1);
  const result = ParentalControlledExplicitContent.updateControlledSetting(selectedTeenId, {});
};