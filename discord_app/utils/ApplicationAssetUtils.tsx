// discord_app/utils/ApplicationAssetUtils.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import _modDef38 from "../../_runtime/metro/00038__.js";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ImageLoaderUtils from "../modules/image_upload/ImageLoaderUtils.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import ApplicationAssetsStore from "../modules/applications/ApplicationAssetsStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let c5, c9, hasOwnProperty;

let PlatformTypes;
let metroRequire;
const f95580 = (item) => {
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
};
function updateAssets() {
  return obj(...arguments);
}
let obj = function _updateAssets() {
  obj = _asyncToGenerator(async (applicationId) => {
    let closure_1;
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      const HTTP = HTTPUtils.HTTP;
      const get = HTTP.get;
      const obj4 = { url: closure_2_6.APPLICATION_ASSETS(applicationId), oldFormErrors: true, rejectWithError: false };
      await get(obj4);
      const body = value.body;
      const obj7 = { type: "APPLICATION_ASSETS_UPDATE", applicationId, assets: body };
      obj = closure_130_1(closure_130_2[7]);
      obj.dispatch(obj7);
      return closure_130_5.getApplicationAssets(applicationId);
    })();
  });
  return obj(...arguments);
};
function getApplicationAssetsMap(id) {
  const applicationAssets = ApplicationAssetsStore.getApplicationAssets(id);
  if (null != applicationAssets) {
    let resolved;
    const _Date = Date;
    if (Date.now() - applicationAssets.lastUpdated <= 3600000) {
      resolved = Promise.resolve(applicationAssets);
    }
    return resolved;
  }
  resolved = updateAssets(id);
}
function getAssets() {
  return obj(...arguments);
}
obj = function _getAssets() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let assets = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async (arg0) => {
      await getApplicationAssetsMap(assets);
      assets = value;
      if (assets != null) {
        assets = assets.assets;
      }
      return assets;
    })();
  });
  return obj(...arguments);
};
obj = function _resolveExternalAssets() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let obj4;
    let tmp;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      while (true) {
        let body;
        let c1;
        let url;
        let external_asset_path;
        c9 = 2;
        let tmp4 = c8;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_5 = tmp;
            let closure_4 = tmp4;
            body = undefined;
            c1 = undefined;
            url = undefined;
            external_asset_path = undefined;
            let found = closure_1.filter((item) => {
              const tmp = null != item && null == closure_1_12.get(item);
              return tmp;
            });
            if (0 !== found.length) {
              let HTTP = HTTPUtils.HTTP;
              let request = {
                url: metroRequire.APPLICATION_EXTERNAL_ASSETS(closure_0),
                body: obj4,
                oldFormErrors: true,
                rejectWithError: false,
              };
              let post = HTTP.post;
              obj4 = { urls: found };
              c8 = 1;
              c9 = 1;
              let obj5 = { value: post(request), done: false };
              return obj5;
            }
          }
        } else {
          let closure_2;
          if (1 === tmp4) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              body = value.body;
              let closure_3 = body;
              closure_2 = body[Symbol.iterator]();
              while (closure_2 !== undefined) {
                c1 = tmp10;
                url = c1.url;
                external_asset_path = c1.external_asset_path;
                let result = closure_133_12.set(url, external_asset_path);
                let c7 = 0;
                continue;
              }
            }
          } else {
            c7 = 0;
            closure_2.return();
            throw closure_1_6;
          }
        }
        c9 = 3;
        return { value: "IconComponent", done: null };
      }
    }
  });
  return obj(...arguments);
};
function updateUrlAssetIds(arr, arg1) {
  let num = 0;
  if (arr.filter(f95580).length > 0) {
    let num3 = 0;
    let num4 = 0;
    num = 0;
    if (0 < arr.length) {
      do {
        let tmp3 = arr[num3];
        let sum = num4;
        if (null != tmp3) {
          let value = map.get(tmp3);
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
          let tmp5 = hasOwnProperty.call(arg2, tmp) && arg2[tmp];
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
  return obj(...arguments);
}
obj = function _fetchAssetIds() {
  obj = _asyncToGenerator(async (applicationId, arg1) => {
    let num13;
    let value;
    function resolveExternalAssets() {
      return closure_1_18(...arguments);
    }
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (1 === c5) {
      if (applicationId === 1) {
        let c6 = 3;
        throw value;
      } else if (applicationId === 2) {
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const obj6 = { type: "APPLICATION_ASSETS_FETCH", applicationId };
        const obj16 = closure_132_1(closure_132_2[7]);
        obj16.dispatch(obj6);
        value = [];
        let length = closure_1.filter((item) => {
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
        if (length.length > 0) {
          c5 = 3;
          c6 = 1;
          const obj8 = { value: resolveExternalAssets(applicationId, length), done: false };
          return obj8;
        }
      }
    } else if (2 === c5) {
      if (applicationId === 1) {
        c6 = 3;
        throw value;
      } else if (applicationId === 2) {
        c6 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        let nextPromise;
        const assets = value;
        const obj10 = { type: "APPLICATION_ASSETS_UPDATE", applicationId, assets };
        const obj14 = closure_132_1(closure_132_2[7]);
        obj14.dispatch(obj10);
        if (closure_132_20(closure_1, value, assets, num13)) {
          const promise = closure_132_13(applicationId);
          nextPromise = promise.then(() => closure_2_21(applicationId, closure_1_1, closure_1_2 - 1));
        } else {
          const obj11 = { type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId };
          const obj2 = closure_132_1(closure_132_2[7]);
          obj2.dispatch(obj11);
          nextPromise = value;
        }
        c6 = 3;
        const obj12 = { value: nextPromise, done: true };
        return obj12;
      }
    } else if (applicationId === 1) {
      c6 = 3;
      throw value;
    } else if (applicationId === 2) {
      c6 = 3;
      obj = { value, done: true };
      return obj;
    }
    if (closure_132_19(closure_1, value)) {
      const obj13 = { type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId };
      const obj7 = closure_132_1(closure_132_2[7]);
      obj7.dispatch(obj13);
      return value;
    }
    await closure_132_16(applicationId);
    length = tmp4;
    value = tmp;
    num13 = closure_2;
    if (closure_2 === undefined) {
      num13 = 1;
    }
    return "Set";
  });
  return obj(...arguments);
};
({ Endpoints: metroRequire, PlatformTypes } = Constants);
let c8 = "https://i.scdn.co/image/";
const re9 = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/;
const re10 = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/;
obj = {
  deserialize(arg0) {
    return "" + c8 + encodeURIComponent(arg0);
  },
  serialize(arg0) {
    return arg0.split(c8)[1];
  },
};
let obj2 = {
  deserialize(arg0, arg1) {
    return (
      "https://static-cdn.jtvnw.net/previews-ttv/live_user_" +
      encodeURIComponent(arg0) +
      "-" +
      arg1[0] +
      "x" +
      arg1[1] +
      ".jpg"
    );
  },
  serialize(str) {
    const match = str.match(re9);
    let tmp2 = null;
    if (null != match) {
      tmp2 = match[1];
    }
    return tmp2;
  },
};
let obj3 = {
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
  },
};
let obj4 = {
  deserialize(str) {
    _modDef38(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured");
    try {
      const _URL = URL;
      const _location = location;
      const _window = window;
      const self = this;
      const self2 = this;
      const uRL = new URL(str, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT);
      const formatted = str.toLowerCase();
      let endsWithResult = formatted.endsWith(".gif");
      const formatted1 = str.toLowerCase();
      const endsWithResult1 = formatted1.endsWith(".webp");
      const formatted2 = str.toLowerCase();
      const endsWithResult2 = formatted2.endsWith(".avif");
      const tmp9 = endsWithResult || endsWithResult2;
      if (tmp9) {
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
      const self3 = this;
      const self4 = this;
      const _HermesInternal = HermesInternal;
      const obj4 = new LoggerDefault("ApplicationAssetUtils");
      obj4.warn("getAssetImage: invalid media proxy asset path: " + str);
    }
  },
  serialize(arg0) {
    return arg0;
  },
};
let closure_11 = {
  [PlatformTypes.SPOTIFY]: obj,
  [PlatformTypes.TWITCH]: obj2,
  [PlatformTypes.YOUTUBE]: obj3,
  mp: obj4,
};
const map = new Map();
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
export const getAssetImage = function getAssetImage(application_id, large_image, items) {
  let tmp22;
  let tmp23;
  let str = format;
  if (format === undefined) {
    str = "png";
  }
  if (null != large_image) {
    if (large_image.includes(":")) {
      let deserializeResult1;
      [tmp22, tmp23] = large_image.split(":");
      _slicedToArray(large_image.split(":"), 2);
      if (tmp22 === PlatformTypes.TWITCH) {
        if (null != items) {
          let deserializeResult;
          if (typeof items !== "number") {
            const deserializer2 = closure_11[tmp24.TWITCH];
            deserializeResult = deserializer2.deserialize(tmp23, items);
          }
          deserializeResult1 = deserializeResult;
        }
        const self = this;
        const self2 = this;
        const obj2 = new LoggerDefault("ApplicationAssetUtils");
        obj2.warn("getAssetImage: size must === [number, number] for Twitch");
      } else {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        if (hasOwnProperty.call(closure_11, tmp22)) {
          const deserializer = closure_11[tmp22];
          deserializeResult1 = deserializer.deserialize(tmp23);
        }
      }
      return deserializeResult1;
    }
  }
  if (null != application_id) {
    if (null != large_image) {
      let combined;
      const _Array = Array;
      let applyResult = items;
      if (Array.isArray(items)) {
        const _Math = Math;
        items = [];
        HermesBuiltin.arraySpread(items, items, 0);
        const _Math2 = Math;
        applyResult = HermesBuiltin.apply(max, items, Math);
      }
      let str4 = "";
      if (typeof applyResult === "number") {
        const _HermesInternal3 = HermesInternal;
        const obj3 = ImageLoaderUtils;
        str4 = "?size=" + obj3.getBestMediaProxySize(applyResult);
      }
      const _window = window;
      if (null != window.GLOBAL_ENV.CDN_HOST) {
        const _location = location;
        const _window2 = window;
        const _HermesInternal2 = HermesInternal;
        combined =
          "" +
          location.protocol +
          "//" +
          window.GLOBAL_ENV.CDN_HOST +
          "/app-assets/" +
          application_id +
          "/" +
          large_image +
          "." +
          str +
          str4;
      } else {
        const _HermesInternal = HermesInternal;
        obj = HTTPUtils;
        combined =
          "" +
          obj.getAPIBaseURL() +
          "/applications/" +
          application_id +
          "/app-assets/" +
          large_image +
          "." +
          str +
          str4;
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
  if (arr.filter(f95580).length > 0) {
    let num3 = 0;
    let num4 = 0;
    num = 0;
    if (0 < arr.length) {
      do {
        let tmp3 = arr[num3];
        let sum = num4;
        if (null != tmp3) {
          let value = map.get(tmp3);
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
      let num6;
      for (let num6 = 0; num6 < arr.length; num6 = num6 + 1) {
        let tmp13 = arr[num6];
        if (null != tmp13) {
          if (null == items[num6]) {
            let _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            let tmp15 = hasOwnProperty.call(assets, tmp13) && assets[tmp13];
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
