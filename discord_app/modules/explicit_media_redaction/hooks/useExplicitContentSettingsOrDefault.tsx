// === Module 14633: useExplicitContentSettingsOrDefault ===

// Module 14633 (useExplicitContentSettingsOrDefault)
import useStateFromStores from "useStateFromStores" /* 573 */;
import react from "react" /* 576 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 6801 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 6804 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let settings;
  let tmp12;
  let tmp15;
  let tmp4;
  let tmp5;
  let tmp9;
  let obj = react;
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    const fn = function o() {
      const textAndImages = settings.settings.textAndImages;
      let prop;
      if (textAndImages != null) {
        prop = textAndImages.explicitContentSettings;
      }
      if (prop == null) {
        const obj = SensitiveMediaExplicitRedactionSettingsUtils;
        prop = obj.getExplicitContentSettingOrDefault();
      }
      return prop;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = useStateFromStores;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  let prop;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.explicitContentGuilds;
  }
  if (cResult[2] !== prop) {
    const obj2 = { setting: prop };
    const tmpResult4 = SensitiveMediaExplicitRedactionSettingsUtils;
    const explicitContentSettingWithDefaults = tmpResult4.resolveExplicitContentSettingWithDefaults(obj2);
    cResult[2] = prop;
    cResult[3] = explicitContentSettingWithDefaults;
    tmp9 = explicitContentSettingWithDefaults;
  } else {
    tmp9 = cResult[3];
  }
  let prop1;
  if (stateFromStoresObject != null) {
    prop1 = stateFromStoresObject.explicitContentNonFriendDm;
  }
  if (cResult[4] !== prop1) {
    const obj3 = { setting: prop1, isDm: true };
    const tmpResult5 = SensitiveMediaExplicitRedactionSettingsUtils;
    const explicitContentSettingWithDefaults1 = tmpResult5.resolveExplicitContentSettingWithDefaults(obj3);
    cResult[4] = prop1;
    cResult[5] = explicitContentSettingWithDefaults1;
    tmp12 = explicitContentSettingWithDefaults1;
  } else {
    tmp12 = cResult[5];
  }
  let prop2;
  if (stateFromStoresObject != null) {
    prop2 = stateFromStoresObject.explicitContentFriendDm;
  }
  if (cResult[6] !== prop2) {
    const obj4 = { setting: prop2, isDm: true, isFriend: true };
    const tmpResult6 = SensitiveMediaExplicitRedactionSettingsUtils;
    const explicitContentSettingWithDefaults2 = tmpResult6.resolveExplicitContentSettingWithDefaults(obj4);
    cResult[6] = prop2;
    cResult[7] = explicitContentSettingWithDefaults2;
    tmp15 = explicitContentSettingWithDefaults2;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] === tmp9) {
    if (cResult[9] === tmp12) {
      let tmp17;
      if (cResult[10] === tmp15) {
        tmp17 = cResult[11];
      }
      return tmp17;
    }
  }
  const obj5 = { explicitContentGuilds: tmp9, explicitContentNonFriendDm: tmp12, explicitContentFriendDm: tmp15 };
  cResult[8] = tmp9;
  cResult[9] = tmp12;
  cResult[10] = tmp15;
  cResult[11] = obj5;
  tmp17 = obj5;
}) : (() => {
  let prop1;
  let prop2;
  let resolveExplicitContentSettingWithDefaults2;
  let resolveExplicitContentSettingWithDefaults3;
  let settings;
  let obj = useStateFromStores;
  const items = [UserSettingsProtoStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const textAndImages = settings.settings.textAndImages;
    let prop;
    if (textAndImages != null) {
      prop = textAndImages.explicitContentSettings;
    }
    if (prop == null) {
      const obj = SensitiveMediaExplicitRedactionSettingsUtils;
      prop = obj.getExplicitContentSettingOrDefault();
    }
    return prop;
  });
  let prop;
  const resolveExplicitContentSettingWithDefaults = SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults;
  SensitiveMediaExplicitRedactionSettingsUtils;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.explicitContentGuilds;
  }
  const obj2 = { explicitContentGuilds: resolveExplicitContentSettingWithDefaults({ setting: prop }), explicitContentNonFriendDm: resolveExplicitContentSettingWithDefaults2({ setting: prop1, isDm: true }), explicitContentFriendDm: resolveExplicitContentSettingWithDefaults3({ setting: prop2, isDm: true, isFriend: true }) };
  prop1 = undefined;
  resolveExplicitContentSettingWithDefaults2 = SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults;
  SensitiveMediaExplicitRedactionSettingsUtils;
  if (stateFromStoresObject != null) {
    prop1 = stateFromStoresObject.explicitContentNonFriendDm;
  }
  prop2 = undefined;
  resolveExplicitContentSettingWithDefaults3 = SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults;
  SensitiveMediaExplicitRedactionSettingsUtils;
  if (stateFromStoresObject != null) {
    prop2 = stateFromStoresObject.explicitContentFriendDm;
  }
  return obj2;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let settings;
  let tmp12;
  let tmp15;
  let tmp4;
  let tmp5;
  let tmp9;
  let obj = react;
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    const fn = function o() {
      const textAndImages = settings.settings.textAndImages;
      let goreContentSettings;
      if (textAndImages != null) {
        goreContentSettings = textAndImages.goreContentSettings;
      }
      if (goreContentSettings == null) {
        const obj = SensitiveMediaGoreRedactionSettingsUtils;
        goreContentSettings = obj.getGoreContentSettingOrDefault();
      }
      return goreContentSettings;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = useStateFromStores;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  let goreContentGuilds;
  if (stateFromStoresObject != null) {
    goreContentGuilds = stateFromStoresObject.goreContentGuilds;
  }
  if (cResult[2] !== goreContentGuilds) {
    const obj2 = { setting: goreContentGuilds };
    const tmpResult4 = SensitiveMediaGoreRedactionSettingsUtils;
    const goreSettingWithDefaults = tmpResult4.resolveGoreSettingWithDefaults(obj2);
    cResult[2] = goreContentGuilds;
    cResult[3] = goreSettingWithDefaults;
    tmp9 = goreSettingWithDefaults;
  } else {
    tmp9 = cResult[3];
  }
  let prop;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.goreContentNonFriendDm;
  }
  if (cResult[4] !== prop) {
    const obj3 = { setting: prop, isDm: true };
    const tmpResult5 = SensitiveMediaGoreRedactionSettingsUtils;
    const goreSettingWithDefaults1 = tmpResult5.resolveGoreSettingWithDefaults(obj3);
    cResult[4] = prop;
    cResult[5] = goreSettingWithDefaults1;
    tmp12 = goreSettingWithDefaults1;
  } else {
    tmp12 = cResult[5];
  }
  let goreContentFriendDm;
  if (stateFromStoresObject != null) {
    goreContentFriendDm = stateFromStoresObject.goreContentFriendDm;
  }
  if (cResult[6] !== goreContentFriendDm) {
    const obj4 = { setting: goreContentFriendDm, isDm: true, isFriend: true };
    const tmpResult6 = SensitiveMediaGoreRedactionSettingsUtils;
    const goreSettingWithDefaults2 = tmpResult6.resolveGoreSettingWithDefaults(obj4);
    cResult[6] = goreContentFriendDm;
    cResult[7] = goreSettingWithDefaults2;
    tmp15 = goreSettingWithDefaults2;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] === tmp9) {
    if (cResult[9] === tmp12) {
      let tmp17;
      if (cResult[10] === tmp15) {
        tmp17 = cResult[11];
      }
      return tmp17;
    }
  }
  const obj5 = { goreContentGuilds: tmp9, goreContentNonFriendDm: tmp12, goreContentFriendDm: tmp15 };
  cResult[8] = tmp9;
  cResult[9] = tmp12;
  cResult[10] = tmp15;
  cResult[11] = obj5;
  tmp17 = obj5;
}) : (() => {
  let goreContentFriendDm;
  let prop;
  let resolveGoreSettingWithDefaults2;
  let resolveGoreSettingWithDefaults3;
  let settings;
  let obj = useStateFromStores;
  const items = [UserSettingsProtoStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const textAndImages = settings.settings.textAndImages;
    let goreContentSettings;
    if (textAndImages != null) {
      goreContentSettings = textAndImages.goreContentSettings;
    }
    if (goreContentSettings == null) {
      const obj = SensitiveMediaGoreRedactionSettingsUtils;
      goreContentSettings = obj.getGoreContentSettingOrDefault();
    }
    return goreContentSettings;
  });
  let goreContentGuilds;
  const resolveGoreSettingWithDefaults = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults;
  SensitiveMediaGoreRedactionSettingsUtils;
  if (stateFromStoresObject != null) {
    goreContentGuilds = stateFromStoresObject.goreContentGuilds;
  }
  const obj2 = { goreContentGuilds: resolveGoreSettingWithDefaults({ setting: goreContentGuilds }), goreContentNonFriendDm: resolveGoreSettingWithDefaults2({ setting: prop, isDm: true }), goreContentFriendDm: resolveGoreSettingWithDefaults3({ setting: goreContentFriendDm, isDm: true, isFriend: true }) };
  prop = undefined;
  resolveGoreSettingWithDefaults2 = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults;
  SensitiveMediaGoreRedactionSettingsUtils;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.goreContentNonFriendDm;
  }
  goreContentFriendDm = undefined;
  resolveGoreSettingWithDefaults3 = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults;
  SensitiveMediaGoreRedactionSettingsUtils;
  if (stateFromStoresObject != null) {
    goreContentFriendDm = stateFromStoresObject.goreContentFriendDm;
  }
  return obj2;
});
const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx");

export const useExplicitContentSettingOrDefault = tmp2;
export const useGoreContentSettingOrDefault = tmp3;