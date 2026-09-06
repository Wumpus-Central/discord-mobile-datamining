// discord_app/utils/ApplicationAssetUtils.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import _modDef38 from "../../_runtime/metro/00038__.js";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ImageLoaderUtils from "../modules/image_upload/ImageLoaderUtils.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationAssetsStore from "../modules/applications/ApplicationAssetsStore.tsx";

require = fn;
function updateAssets() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _updateAssets() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  closure_129_0 = closure_0;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: closure_2_6.APPLICATION_ASSETS(closure_0), oldFormErrors: true, rejectWithError: false });
  const body = value.body;
  { url: timestampProducer.APPLICATION_ASSETS(closure_0), oldFormErrors: true, rejectWithError: false };
  closure_130_1(closure_130_2[7]).dispatch({ type: "APPLICATION_ASSETS_UPDATE", applicationId: closure_129_0, assets: body });
  return closure_130_5.getApplicationAssets(closure_129_0);
};
function getApplicationAssetsMap(id) {
  const applicationAssets = ApplicationAssetsStore.getApplicationAssets(id);
  if (null != applicationAssets) {
    const _Date = Date;
    if (Date.now() - applicationAssets.lastUpdated <= 3600000) {
      let resolved = Promise.resolve(applicationAssets);
    }
    return resolved;
  }
  resolved = updateAssets(id);
}
function getAssets() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_17 = async function _getAssets() {
  closure_1 = tmp2;
  await getApplicationAssetsMap(closure_0);
  closure_129_0 = value;
  if (closure_129_0 != null) {
    const assets = closure_129_0.assets;
  }
  return assets;
};
let closure_18 = async function _resolveExternalAssets(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    while (true) {
      c9 = 2;
      let tmp4 = c8;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp;
          closure_4 = tmp4;
          let body;
          closure_132_1 = undefined;
          let url;
          let external_asset_path;
          let found = importDefault.filter((item) => {
            let tmp = null != item;
            if (tmp) {
              tmp = null == closure_1_12.get(item);
            }
            return tmp;
          });
          if (0 !== found.length) {
            let HTTP = HTTPUtils.HTTP;
            let request = { url: timestampProducer.APPLICATION_EXTERNAL_ASSETS(closure_0), body: null, oldFormErrors: true, rejectWithError: false };
            let obj1 = { urls: found };
            request.body = obj1;
            c8 = 1;
            c9 = 1;
            let obj2 = { value: HTTP.post(request), done: false };
            return obj2;
          }
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          body = value.body;
          closure_3 = body;
          dependencyMap = body[Symbol.iterator]();
          while (dependencyMap !== undefined) {
            closure_132_1 = tmp10;
            url = closure_132_1.url;
            external_asset_path = closure_132_1.external_asset_path;
            let result = closure_133_12.set(url, external_asset_path);
            c7 = 0;
            continue;
          }
        }
      } else {
        c7 = 0;
        dependencyMap.return();
        throw closure_1_6;
      }
      c9 = 3;
      return { value: "HermesInternal", done: null };
    }
  }
};
function updateUrlAssetIds(arr, arg1) {
  let num = 0;
  if (arr.filter((item) => {
    let startsWithResult;
    if (item != null) {
      startsWithResult = item.startsWith("http:");
    }
    if (!startsWithResult) {
      let startsWithResult1;
      if (item != null) {
        startsWithResult1 = item.startsWith("https:");
      }
      startsWithResult = startsWithResult1;
    }
    return startsWithResult;
  }).length > 0) {
    let num3 = 0;
    let num4 = 0;
    num = 0;
    if (0 < arr.length) {
      do {
        let tmp3 = arr[num3];
        let sum = num4;
        if (null != tmp3) {
          value = map.get(tmp3);
          sum = num4;
          if (null != value) {
            let mp = closure_11.mp;
            let str4 = mp.serialize(value);
            let combined = null;
            if (str4) {
              let _HermesInternal = HermesInternal;
              combined = "" + "mp" + ":" + str4.toString();
            }
            arg1[num3] = combined;
            sum = num4 + 1;
          }
        }
        num3 = num3 + 1;
        num4 = sum;
        num = sum;
      } while (num3 < arr.length);
    }
  }
  return num === arr.length;
}
function updateNonUrlAssetIds(arg0, arg1, arg2, arg3) {
  let flag = false;
  let num = 0;
  let flag2 = false;
  if (0 < arg0.length) {
    do {
      let tmp = arg0[num];
      let tmp4 = flag;
      if (null != tmp) {
        tmp4 = flag;
        if (null == arg1[num]) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          let call = hasOwnProperty.call;
          let tmp5 = (typeof call === "unknown" ? hasOwnProperty(tmp) : call(arg2, tmp)) && arg2[tmp];
          let flag3 = flag;
          if (tmp5) {
            arg1[num] = tmp5.id;
            tmp4 = flag3;
          } else if (null == arg3) {
            arg1[num] = null;
            tmp4 = flag;
          } else {
            flag3 = true;
          }
        }
      }
      num = num + 1;
      flag = tmp4;
      flag2 = tmp4;
    } while (num < arg0.length);
  }
  return flag2;
}
function fetchAssetIds() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_22 = async function _fetchAssetIds(arg0) {
  if (1 === tmp5) {
    if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 3;
      let obj1 = { value, done: true };
      return obj1;
    } else {
      closure_132_1(closure_132_2[7]).dispatch({ type: "APPLICATION_ASSETS_FETCH", applicationId: closure_131_0 });
      closure_131_3 = [];
      closure_131_4 = closure_131_1.filter((item) => {
        let startsWithResult;
        if (item != null) {
          startsWithResult = item.startsWith("http:");
        }
        if (!startsWithResult) {
          let startsWithResult1;
          if (item != null) {
            startsWithResult1 = item.startsWith("https:");
          }
          startsWithResult = startsWithResult1;
        }
        return startsWithResult;
      });
      if (closure_131_4.length > 0) {
        c5 = 3;
        c6 = 1;
        return {
          value: (function resolveExternalAssets() {
                  const self = this;
                  const apply = closure_1_18.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_131_0, closure_131_4),
          done: false
        };
      }
      closure_132_1(closure_132_2[7]);
    }
  } else if (2 === tmp5) {
    if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 3;
      return { value, done: true };
    } else {
      closure_131_5 = value;
      let obj5 = { type: "APPLICATION_ASSETS_UPDATE", applicationId: closure_131_0, assets: closure_131_5 };
      closure_132_1(closure_132_2[7]).dispatch(obj5);
      if (closure_132_20(closure_131_1, closure_131_3, closure_131_5, closure_131_2)) {
        closure_132_13(closure_131_0).then(() => closure_2_21(closure_1_0, closure_1_1, closure_1_2 - 1));
        closure_132_13(closure_131_0);
      } else {
        obj1 = closure_132_1(closure_132_2[7]);
        obj1.dispatch({ type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: closure_131_0 });
      }
      c6 = 3;
      closure_132_1(closure_132_2[7]);
    }
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 === 2) {
    c6 = 3;
    return { value, done: true };
  }
  if (closure_132_19(closure_131_1, closure_131_3)) {
    obj5 = closure_132_1(closure_132_2[7]);
    obj5.dispatch({ type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: closure_131_0 });
    return closure_131_3;
  }
  await closure_132_16(closure_131_0);
  closure_3 = tmp2;
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  let num13 = closure_2;
  if (closure_2 === undefined) {
    num13 = 1;
  }
  closure_131_2 = num13;
  return "PX_16";
};
const Constants = fn(1074);
({ Endpoints: metroRequire, PlatformTypes } = Constants);
let c8 = "https://i.scdn.co/image/";
const re9 = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/;
const re10 = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/;
let obj = {
  deserialize(arg0) {
    return "" + c8 + encodeURIComponent(arg0);
  },
  serialize(arg0) {
    return arg0.split(c8)[1];
  }
};
obj = {
  deserialize(arg0, arg1) {
    return "https://static-cdn.jtvnw.net/previews-ttv/live_user_" + encodeURIComponent(arg0) + "-" + arg1[0] + "x" + arg1[1] + ".jpg";
  },
  serialize(str) {
    const match = str.match(re9);
    let tmp2 = null;
    if (null != match) {
      tmp2 = match[1];
    }
    return tmp2;
  }
};
obj = {
  deserialize(arg0) {
    return "https://i.ytimg.com/vi/" + encodeURIComponent(arg0) + "/hqdefault_live.jpg";
  },
  serialize(str) {
    const match = str.match(re10);
    let tmp2 = null;
    if (null != match) {
      tmp2 = match[1];
    }
    return tmp2;
  }
};
let closure_11 = {
  [PlatformTypes.SPOTIFY]: obj,
  [PlatformTypes.TWITCH]: obj,
  [PlatformTypes.YOUTUBE]: obj,
  mp: {
    deserialize(str) {
      _modDef38(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured");
      try {
        const _URL = URL;
        const _location = location;
        const _window = window;
        const uRL = new URL(str, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT);
        const formatted = str.toLowerCase();
        let endsWithResult = formatted.endsWith(".gif");
        const formatted1 = str.toLowerCase();
        const formatted2 = str.toLowerCase();
        const endsWithResult2 = formatted2.endsWith(".avif");
        let tmp14 = endsWithResult;
        if (!endsWithResult) {
          tmp14 = endsWithResult2;
        }
        if (tmp14) {
          const searchParams = str.searchParams;
          const result = searchParams.set("format", "webp");
        }
        if (!endsWithResult) {
          endsWithResult = endsWithResult1;
        }
        if (!endsWithResult) {
          endsWithResult = endsWithResult2;
        }
        if (endsWithResult) {
          const searchParams2 = str.searchParams;
          const result1 = searchParams2.set("animated", "true");
        }
        return uRL.toString();
      } catch (err) {
        const obj4 = new tmp3(tmp2[5])("ApplicationAssetUtils");
        obj4.warn("getAssetImage: invalid media proxy asset path: " + tmp5);
      }
    },
    serialize(arg0) {
      return arg0;
    }
  }
};
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("utils/ApplicationAssetUtils.tsx");

export const getAssetFromImageURL = function getAssetFromImageURL(SPOTIFY, url) {
  const serializer = closure_11[SPOTIFY];
  const str = serializer.serialize(url);
  let combined = null;
  if (str) {
    const _HermesInternal = HermesInternal;
    combined = "" + SPOTIFY + ":" + str.toString();
  }
  return combined;
};
export const getAssetImage = function getAssetImage(application_id, media_assets_large_image, items) {
  let str = png;
  if (png === undefined) {
    str = "png";
  }
  if (null != media_assets_large_image) {
    if (media_assets_large_image.includes(":")) {
      [tmp21, tmp22] = _slicedToArray(media_assets_large_image.split(":"), 2);
      if (tmp21 === PlatformTypes.TWITCH) {
        if (null != items) {
          if (typeof items !== "number") {
            const deserializer2 = closure_11[tmp23.TWITCH];
            const deserializeResult = deserializer2.deserialize(tmp22, items);
          }
        }
        const obj2 = new LoggerDefault("ApplicationAssetUtils");
        obj2.warn("getAssetImage: size must === [number, number] for Twitch");
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        const call = hasOwnProperty.call;
        let deserializeResult1;
        if (typeof call === "unknown" ? hasOwnProperty(tmp21) : call(closure_11, tmp21)) {
          const deserializer = closure_11[tmp21];
          deserializeResult1 = deserializer.deserialize(tmp22);
        }
        return deserializeResult1;
      }
      const tmp20 = _slicedToArray(media_assets_large_image.split(":"), 2);
    }
  }
  if (null != application_id) {
    if (null != media_assets_large_image) {
      const _Array = Array;
      let applyResult = items;
      if (Array.isArray(items)) {
        const _Math = Math;
        items = [];
        HermesBuiltin.arraySpread(items, 0);
        const _Math2 = Math;
        applyResult = HermesBuiltin.apply(items, Math);
      }
      let str4 = "";
      if (typeof applyResult === "number") {
        const _HermesInternal3 = HermesInternal;
        str4 = "?size=" + ImageLoaderUtils.getBestMediaProxySize(applyResult);
      }
      const _window = window;
      if (null != window.GLOBAL_ENV.CDN_HOST) {
        const _location = location;
        const _window2 = window;
        const _HermesInternal2 = HermesInternal;
        let combined = "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/app-assets/" + application_id + "/" + media_assets_large_image + "." + str + str4;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + HTTPUtils.getAPIBaseURL() + "/applications/" + application_id + "/app-assets/" + media_assets_large_image + "." + str + str4;
      }
      return combined;
    }
  }
};
export { getAssets };
export { fetchAssetIds };
export const getAssetIds = function getAssetIds(id, arr) {
  const items = [];
  let num = 0;
  if (arr.filter((item) => {
    let startsWithResult;
    if (item != null) {
      startsWithResult = item.startsWith("http:");
    }
    if (!startsWithResult) {
      let startsWithResult1;
      if (item != null) {
        startsWithResult1 = item.startsWith("https:");
      }
      startsWithResult = startsWithResult1;
    }
    return startsWithResult;
  }).length > 0) {
    let num3 = 0;
    let num4 = 0;
    num = 0;
    if (0 < arr.length) {
      do {
        let tmp3 = arr[num3];
        let sum = num4;
        if (null != tmp3) {
          value = map.get(tmp3);
          sum = num4;
          if (null != value) {
            let mp = closure_11.mp;
            let str4 = mp.serialize(value);
            let combined = null;
            if (str4) {
              let _HermesInternal = HermesInternal;
              combined = "" + "mp" + ":" + str4.toString();
            }
            items[num3] = combined;
            sum = num4 + 1;
          }
        }
        num3 = num3 + 1;
        num4 = sum;
        num = sum;
      } while (num3 < arr.length);
    }
  }
  if (num === arr.length) {
    return items;
  } else {
    const applicationAssets = ApplicationAssetsStore.getApplicationAssets(id);
    let assets;
    if (applicationAssets != null) {
      assets = applicationAssets.assets;
    }
    if (null != assets) {
      for (let num6 = 0; num6 < arr.length; num6 = num6 + 1) {
        let tmp13 = arr[num6];
        if (null != tmp13) {
          if (null == items[num6]) {
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            let call = hasOwnProperty.call;
            let tmp15 = (typeof call === "unknown" ? hasOwnProperty(tmp13) : call(assets, tmp13)) && assets[tmp13];
            if (tmp15) {
              items[num6] = tmp15.id;
            } else {
              items[num6] = null;
            }
          }
        }
      }
    }
    return items;
  }
};