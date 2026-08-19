// === Module 12275: isVisualUnfurledMedia ===

// Module 12275 (isVisualUnfurledMedia)
import resolveFieldValue from "resolveFieldValue" /* 12193 */;
import ProfileDataDynamicType from "ProfileDataDynamicType" /* 12276 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

require = fn;
function isVisualUnfurledMedia(value) {
  let tmp = null != value.width;
  if (tmp) {
    tmp = value.width > 0;
  }
  if (tmp) {
    tmp = null != value.height;
  }
  if (tmp) {
    tmp = value.height > 0;
  }
  return tmp;
}
function resolvedValuesFromPrimary(data) {
  data = data.data;
  let primary;
  if (data != null) {
    primary = data.primary;
  }
  let obj = {};
  if (null == primary) {
    return obj;
  } else {
    const _Object = Object;
    const entries = Object.entries(primary);
    const tmp29 = entries[Symbol.iterator]();
    while (tmp29 !== undefined) {
      let tmp6 = callback(tmp3, 2);
      [tmp7, tmp8] = tmp6;
      if (typeof tmp8 === "string") {
        obj = { type: null, value: null };
        obj[0] = resolveFieldValue.ResolvedValueType.STRING;
        obj[1] = tmp8;
        obj[tmp7] = obj;
      } else if (typeof tmp8 === "number") {
        obj = { type: null, value: null };
        obj[0] = resolveFieldValue.ResolvedValueType.NUMBER;
        obj[1] = tmp8;
        obj[tmp7] = obj;
      } else if (typeof tmp8 === "object") {
        if ("url" in tmp8) {
          if ("proxy_url" in tmp8) {
            if ("loading_state" in tmp8) {
              if (isVisualUnfurledMedia(tmp8)) {
                obj1 = { type: null, media: null };
                obj1[0] = resolveFieldValue.ResolvedValueType.MEDIA;
                let obj2 = { url: null, width: null, height: null };
                ({ proxy_url: obj3[0], width: obj3[1], height: obj3[2] } = tmp8);
                obj1[1] = obj2;
                obj[tmp7] = obj1;
              }
              continue;
            }
          }
        }
      }
      continue;
    }
    return obj;
  }
}
function resolvedValuesFromDynamic(data) {
  data = data.data;
  let dynamic;
  if (data != null) {
    dynamic = data.dynamic;
  }
  let obj = {};
  if (null == dynamic) {
    return obj;
  } else {
    const iter2 = dynamic[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let iter = nextResult;
      if (nextResult.type === ProfileDataDynamicType.ProfileDataDynamicType.STRING) {
        obj = { type: null, value: null };
        obj[0] = resolveFieldValue.ResolvedValueType.STRING;
        obj[1] = iter.value;
        obj[iter.name] = obj;
      } else if (iter.type === ProfileDataDynamicType.ProfileDataDynamicType.NUMBER) {
        obj = { type: null, value: null };
        obj[0] = resolveFieldValue.ResolvedValueType.NUMBER;
        obj[1] = iter.value;
        obj[iter.name] = obj;
      } else if (iter.type === ProfileDataDynamicType.ProfileDataDynamicType.MEDIA) {
        if (isVisualUnfurledMedia(iter.value)) {
          obj1 = { type: null, media: null };
          obj1[0] = resolveFieldValue.ResolvedValueType.MEDIA;
          let obj2 = { url: null, width: null, height: null };
          obj2[0] = iter.value.proxy_url;
          obj2[1] = iter.value.width;
          obj2[2] = iter.value.height;
          obj1[1] = obj2;
          obj[iter.name] = obj1;
        }
        continue;
      }
      continue;
    }
    return obj;
  }
}
const result = require("obj132").fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/resolvedValuesFromUserApplicationIdentityProfile.tsx");

export default function resolvedValuesFromUserApplicationIdentityProfile(profile) {
  if (null == profile) {
    let obj = {};
  } else {
    obj = {};
    if (null != profile.username) {
      obj = { type: null, value: null };
      obj[0] = resolveFieldValue.ResolvedValueType.STRING;
      obj[1] = profile.username;
      obj.username = obj;
    }
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(resolvedValuesFromPrimary(profile));
    const merged2 = Object.assign(resolvedValuesFromDynamic(profile));
  }
  return obj;
};
export const UnfurledMediaLoadingState = { UNKNOWN: 0, [0]: "UNKNOWN", LOADING: 1, [1]: "LOADING", LOADED_SUCCESS: 2, [2]: "LOADED_SUCCESS", LOADED_NOT_FOUND: 3, [3]: "LOADED_NOT_FOUND" };