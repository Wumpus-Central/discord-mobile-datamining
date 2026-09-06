// discord_app/modules/parent_tools/FamilyCenterControlledSettingsUtils.tsx
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import SensitiveMediaExplicitRedactionSettingsUtils from "../explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx";
import SensitiveMediaGoreRedactionSettingsUtils from "../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";
import ParentalControlledUserSettings from "../user_settings/family_center/ParentalControlledUserSettings.tsx";
import size from "../../../_runtime/metro/00002__.js";

function getGoreContentSettingOrDefault(arg0) {
  const ParentalControlledGoreContent = ParentalControlledUserSettings.ParentalControlledGoreContent;
  let controlledSetting = ParentalControlledGoreContent.getControlledSetting(arg0);
  if (controlledSetting == null) {
    controlledSetting = {};
  }
  ({ goreContentNonFriendDm, goreContentFriendDm } = controlledSetting);
  if (!tmp3) {
    let tmpResult = SensitiveMediaGoreRedactionSettingsUtils;
    goreContentNonFriendDm = tmpResult.resolveGoreSettingWithDefaultsForTeen({ isDm: true });
  }
  const obj = { goreContentNonFriendDm, goreContentFriendDm: null, goreContentGuilds: null };
  tmp3 =
    null != goreContentNonFriendDm &&
    goreContentNonFriendDm !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  if (!tmp4) {
    tmpResult = SensitiveMediaGoreRedactionSettingsUtils;
    goreContentFriendDm = tmpResult.resolveGoreSettingWithDefaultsForTeen({ isDm: true, isFriend: true });
  }
  obj.goreContentFriendDm = goreContentFriendDm;
  obj.goreContentGuilds = preloaded_user_settings.ExplicitContentRedaction.BLUR;
  return obj;
}
function getExplicitContentSettingOrDefault(teenId) {
  const ParentalControlledExplicitContent = ParentalControlledUserSettings.ParentalControlledExplicitContent;
  const controlledSetting = ParentalControlledExplicitContent.getControlledSetting(teenId);
  let obj = { teenId, setting: null };
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
    obj = { explicitContentNonFriendDm: setting, explicitContentFriendDm: null, explicitContentGuilds: null };
    let prop1;
    if (controlledSetting != null) {
      prop1 = controlledSetting.explicitContentFriendDm;
    }
    if (!tmp10) {
      const ParentalControlledLegacyExplicitContent2 =
        ParentalControlledUserSettings.ParentalControlledLegacyExplicitContent;
      const controlledSetting1 = ParentalControlledLegacyExplicitContent2.getControlledSetting(teenId);
      prop1 =
        SensitiveMediaExplicitRedactionSettingsUtils
          .TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM[controlledSetting1];
    }
    obj.explicitContentFriendDm = prop1;
    obj.explicitContentGuilds = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    return obj;
  } else {
    const ParentalControlledLegacyExplicitContent =
      ParentalControlledUserSettings.ParentalControlledLegacyExplicitContent;
    const controlledSetting2 = ParentalControlledLegacyExplicitContent.getControlledSetting(teenId);
    let TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM =
      SensitiveMediaExplicitRedactionSettingsUtils;
    if (isFriend) {
      TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM =
        TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM;
    }
  }
  tmp5 =
    null != setting && setting !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
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
export const resolveExplicitContentSettingWithDefaultsForTeen =
  function resolveExplicitContentSettingWithDefaultsForTeen(teenId) {
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
      const ParentalControlledLegacyExplicitContent =
        ParentalControlledUserSettings.ParentalControlledLegacyExplicitContent;
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
