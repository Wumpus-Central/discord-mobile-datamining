// discord_app/modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import SensitiveMediaExplicitRedactionSettingsUtils from "../SensitiveMediaExplicitRedactionSettingsUtils.tsx";
import SensitiveMediaGoreRedactionSettingsUtils from "../SensitiveMediaGoreRedactionSettingsUtils.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx",
);

export const useExplicitContentSettingOrDefault = function useExplicitContentSettingOrDefault() {
  let obj = useStateFromStores;
  const items = [UserSettingsProtoStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const textAndImages = settings.settings.textAndImages;
    let prop;
    if (textAndImages != null) {
      prop = textAndImages.explicitContentSettings;
    }
    if (prop == null) {
      prop = SensitiveMediaExplicitRedactionSettingsUtils.getExplicitContentSettingOrDefault();
    }
    return prop;
  });
  let prop;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.explicitContentGuilds;
  }
  obj = {
    explicitContentGuilds: SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults({
      setting: prop,
    }),
    explicitContentNonFriendDm: null,
    explicitContentFriendDm: null,
  };
  let tmpResult = SensitiveMediaExplicitRedactionSettingsUtils;
  let prop1;
  if (stateFromStoresObject != null) {
    prop1 = stateFromStoresObject.explicitContentNonFriendDm;
  }
  obj.explicitContentNonFriendDm = tmpResult.resolveExplicitContentSettingWithDefaults({ setting: prop1, isDm: true });
  tmpResult = SensitiveMediaExplicitRedactionSettingsUtils;
  let prop2;
  if (stateFromStoresObject != null) {
    prop2 = stateFromStoresObject.explicitContentFriendDm;
  }
  obj.explicitContentFriendDm = tmpResult.resolveExplicitContentSettingWithDefaults({
    setting: prop2,
    isDm: true,
    isFriend: true,
  });
  return obj;
};
export const useGoreContentSettingOrDefault = function useGoreContentSettingOrDefault() {
  let obj = useStateFromStores;
  const items = [UserSettingsProtoStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const textAndImages = settings.settings.textAndImages;
    let goreContentSettings;
    if (textAndImages != null) {
      goreContentSettings = textAndImages.goreContentSettings;
    }
    if (goreContentSettings == null) {
      goreContentSettings = SensitiveMediaGoreRedactionSettingsUtils.getGoreContentSettingOrDefault();
    }
    return goreContentSettings;
  });
  let goreContentGuilds;
  if (stateFromStoresObject != null) {
    goreContentGuilds = stateFromStoresObject.goreContentGuilds;
  }
  obj = {
    goreContentGuilds: SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults({
      setting: goreContentGuilds,
    }),
    goreContentNonFriendDm: null,
    goreContentFriendDm: null,
  };
  let tmpResult = SensitiveMediaGoreRedactionSettingsUtils;
  let prop;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.goreContentNonFriendDm;
  }
  obj.goreContentNonFriendDm = tmpResult.resolveGoreSettingWithDefaults({ setting: prop, isDm: true });
  tmpResult = SensitiveMediaGoreRedactionSettingsUtils;
  let goreContentFriendDm;
  if (stateFromStoresObject != null) {
    goreContentFriendDm = stateFromStoresObject.goreContentFriendDm;
  }
  obj.goreContentFriendDm = tmpResult.resolveGoreSettingWithDefaults({
    setting: goreContentFriendDm,
    isDm: true,
    isFriend: true,
  });
  return obj;
};
