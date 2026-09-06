// discord_common/js/packages/application-widget-renderer/src/resolvedValuesFromUserApplicationIdentityProfile.tsx
import resolvedValues from "resolvedValues.tsx";
import ProfileDataDynamicType from "../../../shared/shared-constants/ProfileDataDynamicType.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";

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
      let tmp6 = _slicedToArray(tmp3, 2);
      [tmp7, tmp8] = tmp6;
      let tmp9 = tmp8;
      if (typeof tmp8 === "string") {
        obj = { type: null, value: null };
        obj.type = resolvedValues.ResolvedValueType.STRING;
        obj.value = tmp9;
        obj[tmp7] = obj;
      } else if (typeof tmp9 === "number") {
        obj = { type: null, value: null };
        obj.type = resolvedValues.ResolvedValueType.NUMBER;
        obj.value = tmp9;
        obj[tmp7] = obj;
      } else if (typeof tmp9 === "object") {
        if ("url" in tmp9) {
          if ("proxy_url" in tmp9) {
            if ("loading_state" in tmp9) {
              if (isVisualUnfurledMedia(tmp9)) {
                let obj1 = { type: null, media: null };
                obj1.type = resolvedValues.ResolvedValueType.MEDIA;
                let size = { url: null, width: null, height: null };
                ({ proxy_url: obj3.url, width: obj3.width, height: obj3.height } = tmp9);
                obj1.media = size;
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
      let tmp5 = require;
      if (nextResult.type === ProfileDataDynamicType.ProfileDataDynamicType.STRING) {
        obj = { type: tmp5(8929).ResolvedValueType.STRING, value: iter.value };
        obj[iter.name] = obj;
      } else if (iter.type === tmp5(9012).ProfileDataDynamicType.NUMBER) {
        obj = { type: tmp5(8929).ResolvedValueType.NUMBER, value: iter.value };
        obj[iter.name] = obj;
      } else if (iter.type === tmp5(9012).ProfileDataDynamicType.MEDIA) {
        if (isVisualUnfurledMedia(iter.value)) {
          let obj1 = { type: tmp5(8929).ResolvedValueType.MEDIA, media: null };
          let size = { url: iter.value.proxy_url, width: iter.value.width, height: iter.value.height };
          obj1.media = size;
          obj[iter.name] = obj1;
        }
        continue;
      }
      continue;
    }
    return obj;
  }
}
let size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/application-widget-renderer/src/resolvedValuesFromUserApplicationIdentityProfile.tsx",
);

export default function resolvedValuesFromUserApplicationIdentityProfile(profile) {
  if (null == profile) {
    let obj = {};
  } else {
    obj = {};
    if (null != profile.username) {
      obj = { type: resolvedValues.ResolvedValueType.STRING, value: profile.username };
      obj.username = obj;
    }
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(resolvedValuesFromPrimary(profile));
    const merged2 = Object.assign(resolvedValuesFromDynamic(profile));
  }
  return obj;
}
export const UnfurledMediaLoadingState = {
  UNKNOWN: 0,
  [0]: "UNKNOWN",
  LOADING: 1,
  [1]: "LOADING",
  LOADED_SUCCESS: 2,
  [2]: "LOADED_SUCCESS",
  LOADED_NOT_FOUND: 3,
  [3]: "LOADED_NOT_FOUND",
};
