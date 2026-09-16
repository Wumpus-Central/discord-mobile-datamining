// === Module 14936: useExplicitContentSettingsOrDefault ===

// Module 14936 (useExplicitContentSettingsOrDefault)
import useStateFromStores from "useStateFromStores" /* 563 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 7408 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7411 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx");

export const useExplicitContentSettingOrDefault = function useExplicitContentSettingOrDefault() {
  const items = [UserSettingsProtoStore];
  const stateFromStoresObject = useStateFromStores.useStateFromStoresObject(items, () => {
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
  const obj3 = { explicitContentGuilds: SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults({ setting: prop }), explicitContentNonFriendDm: null, explicitContentFriendDm: null };
  let prop1;
  if (stateFromStoresObject != null) {
    prop1 = stateFromStoresObject.explicitContentNonFriendDm;
  }
  obj3.explicitContentNonFriendDm = SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults({ setting: prop1, isDm: true });
  const tmpResult = SensitiveMediaExplicitRedactionSettingsUtils;
  let prop2;
  if (stateFromStoresObject != null) {
    prop2 = stateFromStoresObject.explicitContentFriendDm;
  }
  obj3.explicitContentFriendDm = SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults({ setting: prop2, isDm: true, isFriend: true });
  return obj3;
};
export const useGoreContentSettingOrDefault = function useGoreContentSettingOrDefault() {
  const items = [UserSettingsProtoStore];
  const stateFromStoresObject = useStateFromStores.useStateFromStoresObject(items, () => {
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
  const obj3 = { goreContentGuilds: SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults({ setting: goreContentGuilds }), goreContentNonFriendDm: null, goreContentFriendDm: null };
  let prop;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.goreContentNonFriendDm;
  }
  obj3.goreContentNonFriendDm = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults({ setting: prop, isDm: true });
  const tmpResult = SensitiveMediaGoreRedactionSettingsUtils;
  let goreContentFriendDm;
  if (stateFromStoresObject != null) {
    goreContentFriendDm = stateFromStoresObject.goreContentFriendDm;
  }
  obj3.goreContentFriendDm = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults({ setting: goreContentFriendDm, isDm: true, isFriend: true });
  return obj3;
};