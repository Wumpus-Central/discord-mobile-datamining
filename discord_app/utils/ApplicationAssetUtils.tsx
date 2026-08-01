// === Module 7921: updateAssets ===

// Module 7921 (updateAssets)
import _slicedToArray from "_slicedToArray";
import timestamp from "timestamp";
import handleFetchEmbeddedActivityShelfSuccess from "handleFetchEmbeddedActivityShelfSuccess";
import ME from "ME";

let PlatformTypes;
let closure_6;
const require = arg1;
function updateAssets(closure_0) {
  const self = this;
  const apply = _updateAssets.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateAssets() {
  const self = this;
  const tmp = callback2((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const table = tmp2;
              body = tmp5;
              body = undefined;
              const HTTP = callback(outer1_2[6]).HTTP;
              const obj1 = { url: null, oldFormErrors: true, rejectWithError: false };
              obj1[0] = outer1_6.APPLICATION_ASSETS(callback);
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            body = body.body;
            obj = body(table[7]);
            const obj4 = { type: "APPLICATION_ASSETS_UPDATE", applicationId: null, assets: null };
            obj4[1] = callback;
            obj4[2] = body;
            obj.dispatch(obj4);
            c4 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = applicationAssets.getApplicationAssets(callback);
            return obj5;
          }
        } catch (tmp19) {
          c4 = tmp;
          throw tmp19;
        }
      }
    })();
  });
  const _updateAssets = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getApplicationAssetsMap(closure_0) {
  const applicationAssets = store.getApplicationAssets(closure_0);
  if (null != applicationAssets) {
    const _Date = Date;
    if (Date.now() - applicationAssets.lastUpdated <= 3600000) {
      let resolved = Promise.resolve(applicationAssets);
    }
    return resolved;
  }
  resolved = updateAssets(closure_0);
}
function getAssets() {
  const self = this;
  const apply = _getAssets.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getAssets() {
  const self = this;
  const tmp = callback2((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp2;
              let assets;
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_15(assets);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            assets = arg1;
            assets = undefined;
            if (assets != null) {
              assets = assets.assets;
            }
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = assets;
            return obj;
          }
        } catch (tmp11) {
          c3 = tmp;
          throw tmp11;
        }
      }
    })();
  });
  const _getAssets = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _resolveExternalAssets() {
  const self = this;
  let tmp = callback2((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (function*(arg0, body) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        while (true) {
          let num = 2;
          c9 = 2;
          let tmp4 = c8;
          if (0 === c8) {
            if (arg0 === 1) {
              let num7 = 3;
              c9 = 3;
              throw body;
            } else if (arg0 === 2) {
              let num6 = 3;
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let handleFetchEmbeddedActivityShelfSuccess = tmp;
              let timestamp = tmp4;
              let tmp30 = c1;
              body = undefined;
              c1 = undefined;
              let url;
              let external_asset_path;
              let tmp29 = body;
              let found = c1.filter((arg0) => {
                let tmp = null != arg0;
                if (tmp) {
                  tmp = null == closure_12.get(arg0);
                }
                return tmp;
              });
              if (0 !== found.length) {
                let tmp11 = callback;
                let tmp12 = outer1_2;
                let HTTP = callback(outer1_2[6]).HTTP;
                let obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: false };
                let tmp13 = outer1_6;
                obj1[0] = outer1_6.APPLICATION_EXTERNAL_ASSETS(tmp29);
                let obj2 = { urls: null };
                obj2[0] = found;
                obj1[1] = obj2;
                c8 = 1;
                let num5 = 1;
                c9 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = HTTP.post(obj1);
                return obj3;
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              let num3 = 3;
              c9 = 3;
              throw body;
            } else if (arg0 === 2) {
              let num2 = 3;
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let tmp18 = timestamp;
              body = body.body;
              let tmp19 = body;
              external_asset_path = body;
              let tmp20 = body;
              external_asset_path = body;
              url = body[Symbol.iterator]();
              let tmp8 = external_asset_path;
              let tmp9 = url;
              while (url !== undefined) {
                let tmp21 = timestamp;
                let tmp22 = handleFetchEmbeddedActivityShelfSuccess;
                let c7 = 1;
                c1 = tmp10;
                let tmp23 = c1;
                url = c1.url;
                let tmp24 = c1;
                external_asset_path = c1.external_asset_path;
                let tmp25 = closure_12;
                let tmp26 = url;
                let tmp27 = external_asset_path;
                let result = closure_12.set(url, external_asset_path);
                c7 = 0;
                continue;
              }
            }
          } else {
            let tmp5 = closure_6;
            let tmp6 = closure_6;
            c7 = 0;
            let tmp7 = url;
            url.return();
            throw closure_6;
          }
          let num4 = 3;
          c9 = 3;
          return { value: "HermesInternal", done: null };
        }
      }
    })();
  });
  const _resolveExternalAssets = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function updateUrlAssetIds(arr) {
  let num = 0;
  if (arr.filter((str) => {
    let startsWithResult;
    if (str != null) {
      startsWithResult = str.startsWith("http:");
    }
    if (!startsWithResult) {
      let startsWithResult1;
      if (str != null) {
        startsWithResult1 = str.startsWith("https:");
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
        let tmp4 = num3;
        let tmp5 = num4;
        let sum = num4;
        if (null != tmp3) {
          let tmp7 = map;
          let value = map.get(tmp3);
          sum = num4;
          if (null != value) {
            let tmp9 = closure_11;
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
      let tmp2 = num;
      let tmp3 = flag;
      let tmp4 = flag;
      if (null != tmp) {
        tmp4 = flag;
        if (null == arg1[num]) {
          let _Object = Object;
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
function fetchAssetIds(id, closure_10) {
  const self = this;
  const apply = _fetchAssetIds.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchAssetIds() {
  let self = this;
  const tmp = callback2((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    const iter = (function*(arg0, arg1) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let length = tmp5;
              let _slicedToArray = tmp2;
              let num13;
              if (num13 === undefined) {
                num13 = 1;
              }
              _slicedToArray = undefined;
              length = undefined;
              c5 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                let obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                const obj2 = { type: "APPLICATION_ASSETS_FETCH", applicationId: null };
                obj2[1] = closure_0;
                lib(num13[7]).dispatch(obj2);
                _slicedToArray = [];
                length = lib.filter((str) => {
                  let startsWithResult;
                  if (str != null) {
                    startsWithResult = str.startsWith("http:");
                  }
                  if (!startsWithResult) {
                    let startsWithResult1;
                    if (str != null) {
                      startsWithResult1 = str.startsWith("https:");
                    }
                    startsWithResult = startsWithResult1;
                  }
                  return startsWithResult;
                });
                if (length.length > 0) {
                  c5 = 3;
                  c6 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = (function resolveExternalAssets(closure_0, timestamp) {
                    const self = this;
                    const apply = closure_18.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(closure_0, length);
                  return obj3;
                }
                const obj15 = lib(num13[7]);
              }
            } else if (2 === tmp5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                c5 = arg1;
                let obj5 = { type: "APPLICATION_ASSETS_UPDATE", applicationId: null, assets: null };
                obj5[1] = closure_0;
                obj5[2] = c5;
                lib(num13[7]).dispatch(obj5);
                if (callback4(lib, _slicedToArray, c5, num13)) {
                  callback(closure_0).then(() => outer1_21(closure_0, closure_1, num13 - 1));
                  const promise = callback(closure_0);
                } else {
                  obj1 = lib(num13[7]);
                  const obj6 = { type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: null };
                  obj6[1] = closure_0;
                  obj1.dispatch(obj6);
                }
                c6 = 3;
                const obj13 = lib(num13[7]);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            if (callback3(lib, _slicedToArray)) {
              obj5 = lib(num13[7]);
              const obj7 = { type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: null };
              obj7[1] = closure_0;
              obj5.dispatch(obj7);
              c6 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = _slicedToArray;
              return obj8;
            } else {
              c5 = 2;
              c6 = 1;
              const obj9 = { value: null, done: false };
              obj9[0] = callback2(closure_0);
              return obj9;
            }
          }
        } catch (tmp32) {
          c6 = tmp;
          throw tmp32;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _fetchAssetIds = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: closure_6, PlatformTypes } = ME);
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
    const match = str.match(closure_9);
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
    const match = str.match(closure_10);
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
      importDefault(38)(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured");
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
let result = require("handleFetchEmbeddedActivityShelfSuccess").fileFinishedImporting("utils/ApplicationAssetUtils.tsx");

export const getAssetFromImageURL = function getAssetFromImageURL(SPOTIFY, url) {
  const str = closure_11[SPOTIFY].serialize(url);
  let combined = null;
  if (str) {
    const _HermesInternal = HermesInternal;
    combined = "" + SPOTIFY + ":" + str.toString();
  }
  return combined;
};
export const getAssetImage = function getAssetImage(application_id, media_assets_large_image, items, applicationId) {
  let tmp21;
  let tmp22;
  let str = applicationId;
  if (applicationId === undefined) {
    str = "png";
  }
  if (null != media_assets_large_image) {
    if (media_assets_large_image.includes(":")) {
      [tmp21, tmp22] = callback(media_assets_large_image.split(":"), 2);
      if (tmp21 === PlatformTypes.TWITCH) {
        if (null != items) {
          if (typeof items !== "Object") {
            const deserializeResult = closure_11[tmp23.TWITCH].deserialize(tmp22, items);
            const obj5 = closure_11[tmp23.TWITCH];
          }
        }
        const obj3 = new importDefault(3)("ApplicationAssetUtils");
        obj3.warn("getAssetImage: size must === [number, number] for Twitch");
      } else {
        const _Object = Object;
        const call = hasOwnProperty.call;
        let deserializeResult1;
        if (typeof call === "unknown" ? hasOwnProperty(tmp21) : call(closure_11, tmp21)) {
          deserializeResult1 = tmp25[tmp21].deserialize(tmp22);
          const obj2 = tmp25[tmp21];
        }
        return deserializeResult1;
      }
      const tmp20 = callback(media_assets_large_image.split(":"), 2);
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
      if (typeof applyResult !== "__REMOTEDEV__") {
        const _HermesInternal3 = HermesInternal;
        str4 = "?size=" + require(1450) /* handleImageLoad */.getBestMediaProxySize(applyResult);
        const obj4 = require(1450) /* handleImageLoad */;
      }
      const _window = window;
      if (null != window.GLOBAL_ENV.CDN_HOST) {
        const _location = location;
        const _window2 = window;
        const _HermesInternal2 = HermesInternal;
        let combined = "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/app-assets/" + application_id + "/" + media_assets_large_image + "." + str + str4;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "" + require(530) /* sendRequest */.getAPIBaseURL() + "/applications/" + application_id + "/app-assets/" + media_assets_large_image + "." + str + str4;
        const obj = require(530) /* sendRequest */;
      }
      return combined;
    }
  }
};
export { getAssets };
export { fetchAssetIds };
export const getAssetIds = function getAssetIds(id, closure_10) {
  const items = [];
  let num = 0;
  if (closure_10.filter((str) => {
    let startsWithResult;
    if (str != null) {
      startsWithResult = str.startsWith("http:");
    }
    if (!startsWithResult) {
      let startsWithResult1;
      if (str != null) {
        startsWithResult1 = str.startsWith("https:");
      }
      startsWithResult = startsWithResult1;
    }
    return startsWithResult;
  }).length > 0) {
    let num3 = 0;
    let num4 = 0;
    num = 0;
    if (0 < closure_10.length) {
      do {
        let tmp3 = closure_10[num3];
        let tmp4 = num3;
        let tmp5 = num4;
        let sum = num4;
        if (null != tmp3) {
          let tmp7 = map;
          let value = map.get(tmp3);
          sum = num4;
          if (null != value) {
            let tmp9 = closure_11;
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
      } while (num3 < closure_10.length);
    }
  }
  if (num === closure_10.length) {
    return items;
  } else {
    const applicationAssets = store.getApplicationAssets(id);
    let assets;
    if (applicationAssets != null) {
      assets = applicationAssets.assets;
    }
    if (null != assets) {
      for (let num6 = 0; num6 < closure_10.length; num6 = num6 + 1) {
        let tmp13 = closure_10[num6];
        let tmp14 = num6;
        if (null != tmp13) {
          if (null == items[num6]) {
            let _Object = Object;
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