// discord_app/modules/parent_tools/FamilyCenterControlledSettingsUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import resolveExplicitContentSettingWithDefaults from "../explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx";
import resolveGoreSettingWithDefaults from "../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";
import result2 from "../user_settings/family_center/ParentalControlledUserSettings.tsx";

function getGoreContentSettingOrDefault(arg0) {
  const ParentalControlledGoreContent = result2.ParentalControlledGoreContent;
  let controlledSetting = ParentalControlledGoreContent.getControlledSetting(arg0);
  if (controlledSetting == null) {
    controlledSetting = {};
  }
  ({ goreContentNonFriendDm, goreContentFriendDm } = controlledSetting);
  if (!tmp3) {
    let tmpResult = resolveGoreSettingWithDefaults;
    goreContentNonFriendDm = tmpResult.resolveGoreSettingWithDefaultsForTeen({ isDm: true });
  }
  const obj = { goreContentNonFriendDm, goreContentFriendDm: null, goreContentGuilds: null };
  tmp3 = null != goreContentNonFriendDm && goreContentNonFriendDm !== create.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  if (!tmp4) {
    tmpResult = resolveGoreSettingWithDefaults;
    goreContentFriendDm = tmpResult.resolveGoreSettingWithDefaultsForTeen({ isDm: true, isFriend: true });
  }
  obj[1] = goreContentFriendDm;
  obj[2] = create.ExplicitContentRedaction.BLUR;
  return obj;
}
function getExplicitContentSettingOrDefault(teenId) {
  const ParentalControlledExplicitContent = result2.ParentalControlledExplicitContent;
  const controlledSetting = ParentalControlledExplicitContent.getControlledSetting(teenId);
  let obj = { teenId, setting: null };
  let prop;
  if (controlledSetting != null) {
    prop = controlledSetting.explicitContentNonFriendDm;
  }
  obj[1] = prop;
  ({ setting, isFriend, teenId } = obj);
  if (isFriend === undefined) {
    isFriend = false;
  }
  if (tmp5) {
    obj = { explicitContentNonFriendDm: null, explicitContentFriendDm: null, explicitContentGuilds: null };
    obj[0] = setting;
    let prop1;
    if (controlledSetting != null) {
      prop1 = controlledSetting.explicitContentFriendDm;
    }
    if (!tmp10) {
      const ParentalControlledLegacyExplicitContent2 = result2.ParentalControlledLegacyExplicitContent;
      const controlledSetting1 = ParentalControlledLegacyExplicitContent2.getControlledSetting(teenId);
      prop1 = resolveExplicitContentSettingWithDefaults.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM[controlledSetting1];
    }
    obj[1] = prop1;
    obj[2] = create.ExplicitContentRedaction.BLUR;
    return obj;
  } else {
    const ParentalControlledLegacyExplicitContent = result2.ParentalControlledLegacyExplicitContent;
    const controlledSetting2 = ParentalControlledLegacyExplicitContent.getControlledSetting(teenId);
    let TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM = resolveExplicitContentSettingWithDefaults;
    if (isFriend) {
      TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM = TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM;
    }
  }
  tmp5 = null != setting && setting !== create.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
}
let result = obj132.fileFinishedImporting("modules/parent_tools/FamilyCenterControlledSettingsUtils.tsx");

export const isSetAndNotDefault = function isSetAndNotDefault(goreContentFriendDm) {
  let tmp = null != goreContentFriendDm;
  if (tmp) {
    tmp = goreContentFriendDm !== create.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  return tmp;
};
export { getGoreContentSettingOrDefault };
export const updateGoreContentSetting = function updateGoreContentSetting(selectedTeenId) {
  const ParentalControlledGoreContent = result2.ParentalControlledGoreContent;
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
    tmp = setting !== create.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
  }
  if (tmp) {
    return setting;
  } else {
    const ParentalControlledLegacyExplicitContent = result2.ParentalControlledLegacyExplicitContent;
    const controlledSetting = ParentalControlledLegacyExplicitContent.getControlledSetting(teenId.teenId);
    const tmp7 = resolveExplicitContentSettingWithDefaults;
    if (isFriend) {
      let tmp8 = tmp7.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM[controlledSetting];
    } else {
      tmp8 = tmp7.TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM[controlledSetting];
    }
    return tmp8;
  }
};
export { getExplicitContentSettingOrDefault };
export const updateExplicitContentSetting = function updateExplicitContentSetting(selectedTeenId) {
  const ParentalControlledExplicitContent = result2.ParentalControlledExplicitContent;
  const merged = Object.assign(getExplicitContentSettingOrDefault(selectedTeenId));
  const merged1 = Object.assign(arg1);
  const result = ParentalControlledExplicitContent.updateControlledSetting(selectedTeenId, {});
};