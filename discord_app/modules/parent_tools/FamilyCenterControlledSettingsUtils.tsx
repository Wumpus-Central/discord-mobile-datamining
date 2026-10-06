// === Module 14645: FamilyCenterControlledSettingsUtils ===

// Module 14645 (FamilyCenterControlledSettingsUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 6811 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 6814 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 14642 */;
import size from "module_2" /* 2 */;

function getGoreContentSettingOrDefault(arg0) {
  let goreContentFriendDm;
  let goreContentNonFriendDm;
  const ParentalControlledGoreContent = ParentalControlledUserSettings.ParentalControlledGoreContent;
  let controlledSetting = ParentalControlledGoreContent.getControlledSetting(arg0);
  if (controlledSetting == null) {
    controlledSetting = {};
  }
  ({ goreContentNonFriendDm, goreContentFriendDm } = controlledSetting);
  const tmp3 = null != goreContentNonFriendDm && goreContentNonFriendDm !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  if (!tmp3) {
    const tmpResult = SensitiveMediaGoreRedactionSettingsUtils;
    goreContentNonFriendDm = tmpResult.resolveGoreSettingWithDefaultsForTeen({ isDm: true });
  }
  const obj = { goreContentNonFriendDm, goreContentFriendDm, goreContentGuilds: preloaded_user_settings.ExplicitContentRedaction.BLUR };
  const tmp4 = null != goreContentFriendDm && goreContentFriendDm !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  if (!tmp4) {
    const tmpResult2 = SensitiveMediaGoreRedactionSettingsUtils;
    goreContentFriendDm = tmpResult2.resolveGoreSettingWithDefaultsForTeen({ isDm: true, isFriend: true });
  }
  return obj;
}
function getExplicitContentSettingOrDefault(teenId) {
  let isFriend;
  let prop;
  let prop1;
  let setting;
  const ParentalControlledExplicitContent = ParentalControlledUserSettings.ParentalControlledExplicitContent;
  const controlledSetting = ParentalControlledExplicitContent.getControlledSetting(teenId);
  const obj = { teenId, setting: prop };
  prop = undefined;
  if (controlledSetting != null) {
    prop = controlledSetting.explicitContentNonFriendDm;
  }
  ({ setting, isFriend, teenId } = obj);
  if (isFriend === undefined) {
    isFriend = false;
  }
  const tmp5 = null != setting && setting !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  if (!tmp5) {
    let tmp8;
    const ParentalControlledLegacyExplicitContent = ParentalControlledUserSettings.ParentalControlledLegacyExplicitContent;
    const controlledSetting1 = ParentalControlledLegacyExplicitContent.getControlledSetting(teenId);
    const tmpResult = SensitiveMediaExplicitRedactionSettingsUtils;
    if (isFriend) {
      tmp8 = tmpResult.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM[controlledSetting1];
    } else {
      tmp8 = tmpResult.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM[controlledSetting1];
    }
    setting = tmp8;
  }
  const obj2 = { explicitContentNonFriendDm: setting, explicitContentFriendDm: prop1, explicitContentGuilds: preloaded_user_settings.ExplicitContentRedaction.BLUR };
  prop1 = undefined;
  if (controlledSetting != null) {
    prop1 = controlledSetting.explicitContentFriendDm;
  }
  const tmp10 = null != prop1 && prop1 !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  if (!tmp10) {
    const ParentalControlledLegacyExplicitContent2 = ParentalControlledUserSettings.ParentalControlledLegacyExplicitContent;
    const controlledSetting2 = ParentalControlledLegacyExplicitContent2.getControlledSetting(teenId);
    prop1 = SensitiveMediaExplicitRedactionSettingsUtils.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM[controlledSetting2];
  }
  return obj2;
}
let result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterControlledSettingsUtils.tsx");

export const isSetAndNotDefault = function isSetAndNotDefault(goreContentFriendDm) {
  const tmp = null != goreContentFriendDm && goreContentFriendDm !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  return tmp;
};
export { getGoreContentSettingOrDefault };
export const updateGoreContentSetting = function updateGoreContentSetting(selectedTeenId, arg1) {
  const tmp = getGoreContentSettingOrDefault(selectedTeenId);
  const ParentalControlledGoreContent = ParentalControlledUserSettings.ParentalControlledGoreContent;
  const updateControlledSetting = ParentalControlledGoreContent.updateControlledSetting;
  const obj = {};
  const merged = Object.assign(tmp);
  const merged1 = Object.assign(arg1);
  const result = updateControlledSetting(selectedTeenId, obj);
};
export const resolveExplicitContentSettingWithDefaultsForTeen = function resolveExplicitContentSettingWithDefaultsForTeen(teenId) {
  let isFriend;
  let setting;
  ({ setting, isFriend } = teenId);
  teenId = teenId.teenId;
  if (isFriend === undefined) {
    isFriend = false;
  }
  const tmp = null != setting && setting !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  if (tmp) {
    return setting;
  } else {
    let tmp8;
    const ParentalControlledLegacyExplicitContent = ParentalControlledUserSettings.ParentalControlledLegacyExplicitContent;
    const controlledSetting = ParentalControlledLegacyExplicitContent.getControlledSetting(teenId);
    const tmp7 = SensitiveMediaExplicitRedactionSettingsUtils;
    if (isFriend) {
      tmp8 = tmp7.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM[controlledSetting];
    } else {
      tmp8 = tmp7.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM[controlledSetting];
    }
    return tmp8;
  }
};
export { getExplicitContentSettingOrDefault };
export const updateExplicitContentSetting = function updateExplicitContentSetting(selectedTeenId, arg1) {
  const tmp = getExplicitContentSettingOrDefault(selectedTeenId);
  const ParentalControlledExplicitContent = ParentalControlledUserSettings.ParentalControlledExplicitContent;
  const updateControlledSetting = ParentalControlledExplicitContent.updateControlledSetting;
  const obj = {};
  const merged = Object.assign(tmp);
  const merged1 = Object.assign(arg1);
  const result = updateControlledSetting(selectedTeenId, obj);
};