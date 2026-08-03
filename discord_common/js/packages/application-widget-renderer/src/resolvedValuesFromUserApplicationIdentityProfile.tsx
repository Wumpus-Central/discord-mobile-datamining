// === Module 12167: isVisualUnfurledMedia ===

// Module 12167 (isVisualUnfurledMedia)
import _slicedToArray from "_slicedToArray";

const require = arg1;
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
  let tmp7;
  let tmp8;
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
      let tmp5 = callback;
      let tmp6 = callback(tmp3, 2);
      [tmp7, tmp8] = tmp6;
      let tmp9 = tmp8;
      if (typeof tmp8 === "y") {
        let tmp22 = tmp7;
        obj = { type: null, value: null };
        let tmp23 = require;
        let tmp24 = dependencyMap;
        obj[0] = require(12085) /* resolveFieldValue */.ResolvedValueType.STRING;
        let tmp25 = tmp8;
        obj[1] = tmp9;
        obj[tmp7] = obj;
      } else {
        let tmp30 = tmp8;
        if (typeof tmp9 === "Object") {
          let tmp18 = tmp7;
          obj = { type: null, value: null };
          let tmp19 = require;
          let tmp20 = dependencyMap;
          obj[0] = require(12085) /* resolveFieldValue */.ResolvedValueType.NUMBER;
          let tmp21 = tmp8;
          obj[1] = tmp9;
          obj[tmp7] = obj;
        } else {
          let tmp31 = tmp8;
          if (typeof tmp9 !== "window") {
            let tmp32 = tmp8;
            if ("url" in tmp9) {
              let tmp10 = tmp8;
              if ("proxy_url" in tmp9) {
                let tmp11 = tmp8;
                if ("loading_state" in tmp9) {
                  let tmp12 = isVisualUnfurledMedia;
                  let tmp13 = tmp8;
                  if (isVisualUnfurledMedia(tmp9)) {
                    let tmp14 = tmp7;
                    let obj1 = { type: null, media: null };
                    let tmp15 = require;
                    let tmp16 = dependencyMap;
                    obj1[0] = require(12085) /* resolveFieldValue */.ResolvedValueType.MEDIA;
                    let obj2 = { url: null, width: null, height: null };
                    let tmp17 = tmp8;
                    ({ proxy_url: obj3[0], width: obj3[1], height: obj3[2] } = tmp9);
                    obj1[1] = obj2;
                    obj[tmp7] = obj1;
                  }
                  continue;
                }
              }
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
      let tmp6 = dependencyMap;
      if (nextResult.type === require(12168) /* ProfileDataDynamicType */.ProfileDataDynamicType.STRING) {
        let tmp9 = nextResult;
        obj = { type: null, value: null };
        obj[0] = tmp5(12085).ResolvedValueType.STRING;
        obj[1] = iter.value;
        obj[iter.name] = obj;
      } else {
        let tmp11 = nextResult;
        if (iter.type === tmp5(12168).ProfileDataDynamicType.NUMBER) {
          let tmp8 = nextResult;
          obj = { type: null, value: null };
          obj[0] = tmp5(12085).ResolvedValueType.NUMBER;
          obj[1] = iter.value;
          obj[iter.name] = obj;
        } else {
          let tmp12 = nextResult;
          if (iter.type === tmp5(12168).ProfileDataDynamicType.MEDIA) {
            let tmp13 = isVisualUnfurledMedia;
            let tmp14 = nextResult;
            if (isVisualUnfurledMedia(iter.value)) {
              let tmp7 = nextResult;
              let obj1 = { type: null, media: null };
              obj1[0] = tmp5(12085).ResolvedValueType.MEDIA;
              let obj2 = { url: null, width: null, height: null };
              obj2[0] = iter.value.proxy_url;
              obj2[1] = iter.value.width;
              obj2[2] = iter.value.height;
              obj1[1] = obj2;
              obj[iter.name] = obj1;
            }
            continue;
          }
        }
      }
      continue;
    }
    return obj;
  }
}
const result = require("ProfileDataDynamicType").fileFinishedImporting("../discord_common/js/packages/application-widget-renderer/src/resolvedValuesFromUserApplicationIdentityProfile.tsx");

export default function resolvedValuesFromUserApplicationIdentityProfile(profile) {
  if (null == profile) {
    let obj = {};
  } else {
    obj = {};
    if (null != profile.username) {
      obj = { type: null, value: null };
      obj[0] = require(12085) /* resolveFieldValue */.ResolvedValueType.STRING;
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