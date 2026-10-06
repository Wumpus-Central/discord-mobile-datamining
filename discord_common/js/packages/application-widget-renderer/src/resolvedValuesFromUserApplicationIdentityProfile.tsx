// === Module 8714: resolvedValuesFromUserApplicationIdentityProfile ===

// Module 8714 (resolvedValuesFromUserApplicationIdentityProfile)
import resolvedValues from "resolvedValues" /* 8632 */;
import ProfileDataDynamicType from "ProfileDataDynamicType" /* 8715 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size_mod from "module_2" /* 2 */;

function isVisualUnfurledMedia(value) {
  return null != value.width && value.width > 0 && null != value.height && value.height > 0;
}
function resolvedValuesFromPrimary(data) {
  let tmp7;
  let tmp8;
  data = data.data;
  let primary;
  if (data != null) {
    primary = data.primary;
  }
  const obj = {};
  if (null == primary) {
    return obj;
  } else {
    const _Object = Object;
    const entries = Object.entries(primary);
    const tmp29 = entries[Symbol.iterator]();
    while (tmp29 !== undefined) {
      let tmp6 = _slicedToArray(tmp3, 2);
      [tmp7, tmp8] = tmp6;
      if (typeof tmp8 === "string") {
        let obj2 = { type: resolvedValues.ResolvedValueType.STRING, value: tmp8 };
        obj[tmp7] = obj2;
      } else if (typeof tmp8 === "number") {
        let obj4 = { type: resolvedValues.ResolvedValueType.NUMBER, value: tmp8 };
        obj[tmp7] = obj4;
      } else if (typeof tmp8 === "object") {
        if ("url" in tmp8) {
          if ("proxy_url" in tmp8) {
            if ("loading_state" in tmp8) {
              if (isVisualUnfurledMedia(tmp8)) {
                let obj5 = { type: resolvedValues.ResolvedValueType.MEDIA, media: size };
                size = { url: null, width: null, height: null };
                ({ proxy_url: obj3.url, width: obj3.width, height: obj3.height } = tmp8);
                obj[tmp7] = obj5;
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
  const obj = {};
  if (null == dynamic) {
    return obj;
  } else {
    const iter2 = dynamic[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      let iter = nextResult;
      if (nextResult.type === ProfileDataDynamicType.ProfileDataDynamicType.STRING) {
        let obj2 = { type: resolvedValues.ResolvedValueType.STRING, value: iter.value };
        let name3 = iter.name;
        obj[name3] = obj2;
      } else if (iter.type === ProfileDataDynamicType.ProfileDataDynamicType.NUMBER) {
        let obj3 = { type: resolvedValues.ResolvedValueType.NUMBER, value: iter.value };
        let name2 = iter.name;
        obj[name2] = obj3;
      } else if (iter.type === ProfileDataDynamicType.ProfileDataDynamicType.MEDIA) {
        if (isVisualUnfurledMedia(iter.value)) {
          let obj4 = { type: resolvedValues.ResolvedValueType.MEDIA, media: size };
          let name = iter.name;
          size = { url: iter.value.proxy_url, width: iter.value.width, height: iter.value.height };
          obj[name] = obj4;
        }
        continue;
      }
      continue;
    }
    return obj;
  }
}
let size = size_mod;
const result = size.fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/resolvedValuesFromUserApplicationIdentityProfile.tsx");

export default function resolvedValuesFromUserApplicationIdentityProfile(profile) {
  let obj2;
  if (null == profile) {
    obj2 = {};
  } else {
    const obj3 = {};
    if (null != profile.username) {
      obj3.username = { type: resolvedValues.ResolvedValueType.STRING, value: profile.username };
      const obj = { type: resolvedValues.ResolvedValueType.STRING, value: profile.username };
    }
    obj2 = {};
    const merged = Object.assign(obj3);
    const merged1 = Object.assign(resolvedValuesFromPrimary(profile));
    const merged2 = Object.assign(resolvedValuesFromDynamic(profile));
  }
  return obj2;
};
export const UnfurledMediaLoadingState = { UNKNOWN: 0, [0]: "UNKNOWN", LOADING: 1, [1]: "LOADING", LOADED_SUCCESS: 2, [2]: "LOADED_SUCCESS", LOADED_NOT_FOUND: 3, [3]: "LOADED_NOT_FOUND" };