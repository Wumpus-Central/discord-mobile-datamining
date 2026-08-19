// === Module 14177: useExplicitContentSettingOrDefault ===

// Module 14177 (useExplicitContentSettingOrDefault)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import resolveExplicitContentSettingWithDefaults from "resolveExplicitContentSettingWithDefaults" /* 5023 */;
import resolveGoreSettingWithDefaults from "resolveGoreSettingWithDefaults" /* 5025 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx");

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
  obj = { explicitContentGuilds: resolveExplicitContentSettingWithDefaults.resolveExplicitContentSettingWithDefaults({ setting: prop }), explicitContentNonFriendDm: null, explicitContentFriendDm: null };
  let tmpResult = resolveExplicitContentSettingWithDefaults;
  let prop1;
  if (stateFromStoresObject != null) {
    prop1 = stateFromStoresObject.explicitContentNonFriendDm;
  }
  obj[1] = tmpResult.resolveExplicitContentSettingWithDefaults({ setting: prop1, isDm: true });
  tmpResult = resolveExplicitContentSettingWithDefaults;
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
  obj = { goreContentGuilds: resolveGoreSettingWithDefaults.resolveGoreSettingWithDefaults({ setting: goreContentGuilds }), goreContentNonFriendDm: null, goreContentFriendDm: null };
  let tmpResult = resolveGoreSettingWithDefaults;
  let prop;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.goreContentNonFriendDm;
  }
  obj[1] = tmpResult.resolveGoreSettingWithDefaults({ setting: prop, isDm: true });
  tmpResult = resolveGoreSettingWithDefaults;
  let goreContentFriendDm;
  if (stateFromStoresObject != null) {
    goreContentFriendDm = stateFromStoresObject.goreContentFriendDm;
  }
  obj[2] = tmpResult.resolveGoreSettingWithDefaults({ setting: goreContentFriendDm, isDm: true, isFriend: true });
  return obj;
};