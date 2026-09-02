// discord_app/modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx
import defaultAreStatesEqual from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import resolveExplicitContentSettingWithDefaults from "../SensitiveMediaExplicitRedactionSettingsUtils.tsx";
import resolveGoreSettingWithDefaults from "../SensitiveMediaGoreRedactionSettingsUtils.tsx";
import closure_2 from "../../user_settings/UserSettingsProtoStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx",
);

export const useExplicitContentSettingOrDefault = function useExplicitContentSettingOrDefault() {
  let obj = defaultAreStatesEqual;
  const items = [closure_2];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const textAndImages = settings.settings.textAndImages;
    let prop;
    if (textAndImages != null) {
      prop = textAndImages.explicitContentSettings;
    }
    if (prop == null) {
      prop = callback(table[2]).getExplicitContentSettingOrDefault();
      const obj = callback(table[2]);
    }
    return prop;
  });
  let prop;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.explicitContentGuilds;
  }
  obj = {
    explicitContentGuilds: resolveExplicitContentSettingWithDefaults.resolveExplicitContentSettingWithDefaults({
      setting: prop,
    }),
    explicitContentNonFriendDm: null,
    explicitContentFriendDm: null,
  };
  let tmpResult = tmp(6152);
  let prop1;
  if (stateFromStoresObject != null) {
    prop1 = stateFromStoresObject.explicitContentNonFriendDm;
  }
  obj[1] = tmpResult.resolveExplicitContentSettingWithDefaults({ setting: prop1, isDm: true });
  tmpResult = tmp(6152);
  let prop2;
  if (stateFromStoresObject != null) {
    prop2 = stateFromStoresObject.explicitContentFriendDm;
  }
  obj[2] = tmpResult.resolveExplicitContentSettingWithDefaults({ setting: prop2, isDm: true, isFriend: true });
  return obj;
};
export const useGoreContentSettingOrDefault = function useGoreContentSettingOrDefault() {
  let obj = defaultAreStatesEqual;
  const items = [closure_2];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const textAndImages = settings.settings.textAndImages;
    let goreContentSettings;
    if (textAndImages != null) {
      goreContentSettings = textAndImages.goreContentSettings;
    }
    if (goreContentSettings == null) {
      goreContentSettings = callback(table[3]).getGoreContentSettingOrDefault();
      const obj = callback(table[3]);
    }
    return goreContentSettings;
  });
  let goreContentGuilds;
  if (stateFromStoresObject != null) {
    goreContentGuilds = stateFromStoresObject.goreContentGuilds;
  }
  obj = {
    goreContentGuilds: resolveGoreSettingWithDefaults.resolveGoreSettingWithDefaults({ setting: goreContentGuilds }),
    goreContentNonFriendDm: null,
    goreContentFriendDm: null,
  };
  let tmpResult = tmp(6154);
  let prop;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.goreContentNonFriendDm;
  }
  obj[1] = tmpResult.resolveGoreSettingWithDefaults({ setting: prop, isDm: true });
  tmpResult = tmp(6154);
  let goreContentFriendDm;
  if (stateFromStoresObject != null) {
    goreContentFriendDm = stateFromStoresObject.goreContentFriendDm;
  }
  obj[2] = tmpResult.resolveGoreSettingWithDefaults({ setting: goreContentFriendDm, isDm: true, isFriend: true });
  return obj;
};
