// === Module 7894: useProfileFrameLayerAsset ===

// Module 7894 (useProfileFrameLayerAsset)
import CollectiblesAssetUtils from "CollectiblesAssetUtils" /* 1974 */;
import Constants from "Constants" /* 6707 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _Promise, _require, c4, c5, frame, nextPromise, num2;

let metroImportDefault;
let metroRequire;
const f95860 = (arg0) => {
  closure_0 = arg0;
  size = size.getSize(closure_0, (arg0, arg1) => {
    if (arg0 > 0) {
      const result = closure_3_9.set(closure_0, arg1 / arg0);
      set2.delete(closure_0);
      closure_0(arg1 / arg0);
    } else {
      set2.add(closure_0);
      closure_0(null);
    }
  }, () => {
    set2.add(closure_0);
    closure_0(null);
  });
};
function measureProfileFrameLayer(arg0) {
  let closure_0 = arg0;
  const value = map.get(arg0);
  if (null != value) {
    return Promise.resolve(value);
  } else {
    let value2 = map1.get(arg0);
    if (null == value2) {
      const self = this;
      const self2 = this;
      const promise = new Promise(f95860);
      const cleanupPromise = promise.finally(() => set.delete(closure_0));
      const result = map1.set(arg0, cleanupPromise);
      value2 = cleanupPromise;
    }
    return value2;
  }
}
function getProfileFrameLayerAssetUrl(arg0, arg1, arg2) {
  const rounded = Math.round(arg2 * metroImportDefault.get());
  return "" + arg0 + "?width=" + rounded + "&height=" + Math.round(rounded * arg1);
}
function preloadLayer() {
  return obj(...arguments);
}
let obj = function _preloadLayer() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let obj2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_2;
        let uri;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = undefined;
            uri = undefined;
            c4 = 1;
            c5 = 1;
            const obj5 = { value: measureProfileFrameLayer(closure_0), done: false };
            return obj5;
          }
        } else {
          if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_2 = value;
              if (null != closure_2) {
                uri = closure_131_14(closure_0, closure_2, closure_1);
                const obj7 = { uri, timeoutMs: 30000 };
                c4 = 2;
                c5 = 1;
                const obj8 = { value: obj2.preload(obj7), done: false };
                obj2 = closure_131_1(closure_131_2[8]);
                return obj8;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_131_11.add(uri);
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp22) {
        c5 = 3;
        throw tmp22;
      }
    }
  });
  return obj(...arguments);
};
let react = react_mod;
({ Image: metroRequire, PixelRatio: metroImportDefault } = react_native);
const UserProfileThemeTypes = Constants.UserProfileThemeTypes;
const map = new Map();
const map1 = new Map();
const set = new Set();
const set1 = new Set();
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let layer;
  let skuId;
  let tmp10;
  let tmp23;
  let width;
  const tmp = _require;
  obj = require("react");
  const cResult = obj.c(16);
  ({ skuId, layer, width } = arg0);
  if (cResult[0] === layer) {
    let tmp4;
    if (cResult[1] === skuId) {
      tmp4 = cResult[2];
    }
    _require = tmp4;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor(arg0) {
          return arg0 + 1;
        }
      }
      cResult[3] = P;
    } else {
      class P {
        constructor(arg0) {
          return arg0 + 1;
        }
      }
    }
    const tmp9 = _slicedToArray(react.useReducer(P, 0), 2)[1];
    let closure_1 = tmp9;
    if (cResult[4] === tmp4) {
      class P {
        constructor(arg0) {
          return arg0 + 1;
        }
      }
      if (cResult[7] !== tmp4) {
        class P {
          constructor(arg0) {
            return arg0 + 1;
          }
        }
        tmp12[0] = tmp4;
        cResult[7] = tmp4;
        cResult[8] = tmp12;
      } else {
        class P {
          constructor(arg0) {
            return arg0 + 1;
          }
        }
      }
      const effect = react.useEffect(tmp10, tmp12);
      if (cResult[9] === tmp4) {
        class P {
          constructor(arg0) {
            return arg0 + 1;
          }
        }
        if (cResult[13] === tmp15) {
          class P {
            constructor(arg0) {
              return arg0 + 1;
            }
          }
          return tmp23;
        }
        const obj2 = { assetUrl: tmp15, imageHeight: tmp14 };
        cResult[13] = tmp15;
        cResult[14] = tmp14;
        cResult[15] = obj2;
        tmp23 = obj2;
      }
      let value;
      if (null != tmp4) {
        class P {
          constructor(arg0) {
            return arg0 + 1;
          }
        }
        value = map.get(tmp4);
      }
      if (null != value) {
        class P {
          constructor(arg0) {
            return arg0 + 1;
          }
        }
      }
      let combined = null;
      if (null != tmp4) {
        class P {
          constructor(arg0) {
            return arg0 + 1;
          }
        }
        if (null != value) {
          class P {
            constructor(arg0) {
              return arg0 + 1;
            }
          }
          const rounded = Math.round(width * closure_7.get());
          const _Math = Math;
          const _HermesInternal = HermesInternal;
          combined = "" + tmp4 + "?width=" + rounded + "&height=" + Math.round(rounded * value);
        }
      }
      cResult[9] = tmp4;
      cResult[10] = width;
      cResult[11] = 0;
      cResult[12] = combined;
    }
    const fn = function h() {
      const hasItem = null == closure_0 || "" === tmp || map.has(tmp);
      if (!hasItem) {
        let resolved;
        closure_0 = tmp;
        const value = map.get(tmp);
        if (null != value) {
          resolved = Promise.resolve(value);
        } else {
          resolved = map1.get(tmp);
          if (null == resolved) {
            const self = this;
            const self2 = this;
            const promise = new Promise(f95860);
            const cleanupPromise = promise.finally(() => set.delete(closure_0));
            const result = map1.set(tmp, cleanupPromise);
            resolved = cleanupPromise;
          }
        }
        resolved.then((result) => {
          if (null != result) {
            closure_1_1();
          }
        });
      }
    };
    cResult[4] = tmp4;
    cResult[5] = tmp9;
    cResult[6] = fn;
    tmp10 = fn;
  }
  const tmpResult = tmp(1974);
  const obj3 = { skuId, assetFormat: tmp(1974).CollectiblesItemAssetFormat.STATIC, assetId: layer.id };
  const collectiblesItemAssetUrl = tmpResult.getCollectiblesItemAssetUrl(obj3);
  cResult[0] = layer;
  cResult[1] = skuId;
  cResult[2] = collectiblesItemAssetUrl;
  tmp4 = collectiblesItemAssetUrl;
}) : ((width) => {
  let layer;
  let skuId;
  width = width.width;
  let collectiblesItemAssetUrl;
  ({ skuId, layer } = width);
  obj = collectiblesItemAssetUrl(1974);
  const obj2 = { skuId, assetFormat: collectiblesItemAssetUrl(1974).CollectiblesItemAssetFormat.STATIC, assetId: layer.id };
  collectiblesItemAssetUrl = obj.getCollectiblesItemAssetUrl(obj2);
  let closure_1 = _slicedToArray(react.useReducer((arg0) => arg0 + 1, 0), 2)[1];
  const items = [collectiblesItemAssetUrl];
  const effect = react.useEffect(function() {
    const hasItem = null == collectiblesItemAssetUrl || "" === collectiblesItemAssetUrl || map.has(collectiblesItemAssetUrl);
    if (!hasItem) {
      let resolved;
      let closure_0 = collectiblesItemAssetUrl;
      const value = map.get(collectiblesItemAssetUrl);
      if (null != value) {
        resolved = Promise.resolve(value);
      } else {
        resolved = map1.get(collectiblesItemAssetUrl);
        if (null == resolved) {
          const self = this;
          const self2 = this;
          const promise = new Promise(f95860);
          const cleanupPromise = promise.finally(() => set.delete(closure_0));
          let result = map1.set(collectiblesItemAssetUrl, cleanupPromise);
          resolved = cleanupPromise;
        }
      }
      resolved.then((result) => {
        if (null != result) {
          closure_1_1();
        }
      });
    }
  }, items);
  let value;
  if (null != collectiblesItemAssetUrl) {
    value = map.get(collectiblesItemAssetUrl);
  }
  let imageHeight = 0;
  if (null != value) {
    imageHeight = value * width;
  }
  let assetUrl = null;
  if (null != collectiblesItemAssetUrl) {
    assetUrl = null;
    if (null != value) {
      const tmp6 = globalThis;
      const _Math = Math;
      const rounded = Math.round(width * closure_7.get());
      const _Math2 = Math;
      const _HermesInternal = HermesInternal;
      assetUrl = "" + collectiblesItemAssetUrl + "?width=" + rounded + "&height=" + Math.round(rounded * value);
    }
  }
  return { assetUrl, imageHeight };
});
ReactCompilerGating = ReactCompilerGating_mod;
function isProfileFrameLayerShown(anchor, profileThemeType, filterLayer) {
  let tmp2 = !(null != filterLayer && !filterLayer(anchor));
  const tmp = null != filterLayer && !filterLayer(anchor);
  if (tmp2) {
    let tmp5 = profileThemeType === UserProfileThemeTypes.PREVIEW;
    if (!tmp5) {
      tmp5 = "top" === anchor.anchor && "staple" === anchor.type;
      const tmp6 = "top" === anchor.anchor && "staple" === anchor.type;
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((frame) => {
  let closure_5;
  let containerWidth;
  let filterLayer;
  let first;
  let profileThemeType;
  const tmp = filterLayer;
  obj = frame(filterLayer[7]);
  const cResult = obj.c(27);
  frame = frame.frame;
  ({ containerWidth, profileThemeType } = frame);
  filterLayer = frame.filterLayer;
  let obj2 = frame(filterLayer[9]);
  const isProfileFrameLayerPreloadEnabled = obj2.useIsProfileFrameLayerPreloadEnabled("usePreloadLayerImages");
  if (null != frame) {
    let tmp5;
    if (cResult[1] === filterLayer) {
      if (cResult[2] === frame.layers) {
        if (cResult[3] === frame.skuId) {
          if (cResult[4] === profileThemeType) {
            tmp5 = cResult[5];
          }
          first = tmp5;
        }
      }
    }
    if (cResult[6] === filterLayer) {
      let tmp6;
      let tmp7;
      let tmp9;
      if (cResult[7] === profileThemeType) {
        tmp6 = cResult[8];
      }
      if (cResult[9] !== frame.skuId) {
        const fn2 = function v(assetId) {
          const skuId = frame.skuId;
          obj = CollectiblesAssetUtils;
          const obj2 = { skuId, assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC, assetId: assetId.id };
          return obj.getCollectiblesItemAssetUrl(obj2);
        };
        cResult[9] = frame.skuId;
        cResult[10] = fn2;
        tmp7 = fn2;
      } else {
        tmp7 = cResult[10];
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function p(arg0) {
          return null != arg0 && "" !== arg0;
        };
        cResult[11] = fn3;
        tmp9 = fn3;
      } else {
        tmp9 = cResult[11];
      }
      const layers = frame.layers;
      const found = layers.filter(tmp6);
      const mapped = found.map(tmp7);
      const found1 = mapped.filter(tmp9);
      cResult[1] = filterLayer;
      cResult[2] = frame.layers;
      cResult[3] = frame.skuId;
      cResult[4] = profileThemeType;
      cResult[5] = found1;
      tmp5 = found1;
    }
    const fn = function h(anchor) {
      let tmp4 = !(null != filterLayer && !tmp2(anchor));
      const tmp3 = null != filterLayer && !tmp2(anchor);
      if (tmp4) {
        let tmp6 = profileThemeType === UserProfileThemeTypes.PREVIEW;
        if (!tmp6) {
          tmp6 = "top" === anchor.anchor && "staple" === anchor.type;
          const tmp7 = "top" === anchor.anchor && "staple" === anchor.type;
        }
        tmp4 = tmp6;
      }
      return tmp4;
    };
    cResult[6] = filterLayer;
    cResult[7] = profileThemeType;
    cResult[8] = fn;
    tmp6 = fn;
  } else {
    let tmp4 = globalThis;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [];
      cResult[0] = items;
      first = items;
    } else {
      first = cResult[0];
    }
  }
  if (cResult[12] === containerWidth) {
    let tmp11;
    if (cResult[13] === frame) {
      tmp11 = cResult[14];
    }
    react = tmp11;
    let skuId;
    if (frame != null) {
      skuId = frame.skuId;
    }
    let _HermesInternal = HermesInternal;
    const combined = "" + skuId + ":" + tmp11;
    let closure_7 = first(react.useState(null), 2)[1];
    first(react.useState(null), 2);
    const obj4 = react;
    if (cResult[15] === first) {
      let tmp19;
      if (cResult[16] === tmp11) {
        tmp19 = cResult[17];
      }
      let closure_8 = tmp19;
      if (cResult[18] === first) {
        if (cResult[19] === isProfileFrameLayerPreloadEnabled) {
          if (cResult[20] === tmp19) {
            if (cResult[21] === combined) {
              let tmp21;
              let tmp22;
              let tmp25;
              if (cResult[22] === tmp11) {
                tmp21 = cResult[23];
                tmp22 = cResult[24];
              }
              const effect = obj4.useEffect(tmp21, tmp22);
              let tmp24 = !isProfileFrameLayerPreloadEnabled;
              class E {
                constructor() {
                  tmp = closure_3;
                  if (tmp) {
                    tmp2 = closure_5;
                    num = 0;
                    if (closure_5 > 0) {
                      tmp3 = closure_8;
                      if (!tmp3) {
                        flag = false;
                        c0 = false;
                        markSettled = function markSettled() {
                          if (!c0) {
                            closure_7(combined);
                          }
                        };
                        tmp4 = globalThis;
                        _setTimeout = setTimeout;
                        num2 = 3000;
                        closure_1 = setTimeout(markSettled, 3000);
                        _Promise = Promise;
                        tmp5 = closure_4;
                        allPromises = Promise.all(closure_4.map((item) => preloadLayer(item, closure_1_5)));
                        nextPromise = allPromises.then(markSettled);
                        return () => {
                          c0 = true;
                          clearTimeout(closure_1);
                        };
                      }
                    }
                  }
                  return;
                }
              }
              if (!tmp24) {
                tmp24 = tmp18 === combined;
              }
              if (cResult[25] !== tmp24) {
                const obj3 = { settled: tmp24 };
                class E {
                  constructor() {
                    tmp = closure_3;
                    if (tmp) {
                      tmp2 = closure_5;
                      num = 0;
                      if (closure_5 > 0) {
                        tmp3 = closure_8;
                        if (!tmp3) {
                          flag = false;
                          c0 = false;
                          markSettled = function markSettled() {
                            if (!c0) {
                              closure_7(combined);
                            }
                          };
                          tmp4 = globalThis;
                          _setTimeout = setTimeout;
                          num2 = 3000;
                          closure_1 = setTimeout(markSettled, 3000);
                          _Promise = Promise;
                          tmp5 = closure_4;
                          allPromises = Promise.all(closure_4.map((item) => preloadLayer(item, closure_1_5)));
                          nextPromise = allPromises.then(markSettled);
                          return () => {
                            c0 = true;
                            clearTimeout(closure_1);
                          };
                        }
                      }
                    }
                    return;
                  }
                }
                cResult[26] = obj3;
                tmp25 = obj3;
              } else {
                tmp25 = cResult[26];
              }
              return tmp25;
            }
          }
        }
      }
      class E {
        constructor() {
          tmp = closure_3;
          if (tmp) {
            tmp2 = closure_5;
            num = 0;
            if (closure_5 > 0) {
              tmp3 = closure_8;
              if (!tmp3) {
                flag = false;
                c0 = false;
                markSettled = function markSettled() {
                  if (!c0) {
                    closure_7(combined);
                  }
                };
                tmp4 = globalThis;
                _setTimeout = setTimeout;
                num2 = 3000;
                closure_1 = setTimeout(markSettled, 3000);
                _Promise = Promise;
                tmp5 = closure_4;
                allPromises = Promise.all(closure_4.map((item) => preloadLayer(item, closure_1_5)));
                nextPromise = allPromises.then(markSettled);
                return () => {
                  c0 = true;
                  clearTimeout(closure_1);
                };
              }
            }
          }
          return;
        }
      }
      const items1 = [isProfileFrameLayerPreloadEnabled, first, tmp11, combined, tmp19];
      cResult[18] = first;
      cResult[19] = isProfileFrameLayerPreloadEnabled;
      cResult[20] = tmp19;
      cResult[21] = combined;
      cResult[22] = tmp11;
      cResult[23] = E;
      cResult[24] = items1;
      tmp22 = items1;
      tmp21 = E;
    }
    const tmp20 = tmp11 > 0 && first.every((item) => {
      let flag = true;
      if (!set1.has(item)) {
        const value = map.get(item);
        let hasItem = null != value;
        if (hasItem) {
          const _Math = Math;
          const has = set.has;
          const rounded = Math.round(closure_5 * metroImportDefault.get());
          const _Math2 = Math;
          const _HermesInternal = HermesInternal;
          hasItem = has("" + item + "?width=" + rounded + "&height=" + Math.round(rounded * value));
        }
        flag = hasItem;
      }
      return flag;
    });
    cResult[15] = first;
    cResult[16] = tmp11;
    cResult[17] = tmp20;
    tmp19 = tmp20;
  }
  let num13 = 0;
  if (null != frame) {
    num13 = 0;
    if (containerWidth > 0) {
      num13 = containerWidth + 2 * profileThemeType(tmp[10])(frame, containerWidth).overflowHorizontal;
    }
  }
  cResult[12] = containerWidth;
  cResult[13] = frame;
  cResult[14] = num13;
  tmp11 = num13;
}) : ((frame) => {
  let containerWidth;
  let profileThemeType;
  frame = frame.frame;
  ({ containerWidth, profileThemeType } = frame);
  const filterLayer = frame.filterLayer;
  let num;
  let combined;
  let closure_7;
  let c8;
  const tmp = filterLayer;
  obj = frame(filterLayer[9]);
  const isProfileFrameLayerPreloadEnabled = obj.useIsProfileFrameLayerPreloadEnabled("usePreloadLayerImages");
  let obj2 = num;
  let items = [frame, profileThemeType, filterLayer];
  const memo = num.useMemo(() => {
    let items;
    if (null == frame) {
      items = [];
    } else {
      const layers = tmp.layers;
      const found = layers.filter((anchor) => {
        let tmp4 = !(null != filterLayer && !tmp2(anchor));
        const tmp3 = null != filterLayer && !tmp2(anchor);
        if (tmp4) {
          let tmp6 = profileThemeType === constants.PREVIEW;
          if (!tmp6) {
            tmp6 = "top" === anchor.anchor && "staple" === anchor.type;
            const tmp7 = "top" === anchor.anchor && "staple" === anchor.type;
          }
          tmp4 = tmp6;
        }
        return tmp4;
      });
      const mapped = found.map((assetId) => {
        skuId = skuId.skuId;
        obj = frame(filterLayer[5]);
        const obj2 = { skuId, assetFormat: frame(filterLayer[5]).CollectiblesItemAssetFormat.STATIC, assetId: assetId.id };
        return obj.getCollectiblesItemAssetUrl(obj2);
      });
      items = mapped.filter((item) => null != item && "" !== item);
    }
    return items;
  }, items);
  num = 0;
  if (null != frame) {
    num = 0;
    if (containerWidth > 0) {
      let tmp3 = profileThemeType;
      num = containerWidth + 2 * profileThemeType(tmp[10])(frame, containerWidth).overflowHorizontal;
    }
  }
  let skuId;
  if (frame != null) {
    skuId = frame.skuId;
  }
  combined = "" + skuId + ":" + num;
  let tmp6 = memo(obj2.useState(null), 2);
  closure_7 = tmp6[1];
  let everyResult = num > 0;
  const first = tmp6[0];
  if (everyResult) {
    everyResult = memo.every((item) => {
      let flag = true;
      if (!set1.has(item)) {
        const value = map.get(item);
        let hasItem = null != value;
        if (hasItem) {
          const _Math = Math;
          const has = set.has;
          const rounded = Math.round(num * metroImportDefault.get());
          const _Math2 = Math;
          const _HermesInternal = HermesInternal;
          hasItem = has("" + item + "?width=" + rounded + "&height=" + Math.round(rounded * value));
        }
        flag = hasItem;
      }
      return flag;
    });
  }
  c8 = everyResult;
  const items1 = [isProfileFrameLayerPreloadEnabled, memo, num, combined, everyResult];
  const effect = obj2.useEffect(() => {
    let closure_1;
    if (isProfileFrameLayerPreloadEnabled) {
      num = 0;
      if (num > 0) {
        if (!c8) {
          function markSettled() {
            if (!c0) {
              closure_7(combined);
            }
          }
          let c0 = false;
          const _setTimeout = setTimeout;
          const timeout = setTimeout(markSettled, 3000);
          const allPromises = Promise.all(memo.map((item) => preloadLayer(item, num)));
          allPromises.then(markSettled);
          return () => {
            c0 = true;
            clearTimeout(closure_1);
          };
        }
      }
    }
  }, items1);
  let settled = !isProfileFrameLayerPreloadEnabled;
  if (isProfileFrameLayerPreloadEnabled) {
    settled = everyResult;
  }
  if (!settled) {
    settled = first === combined;
  }
  return { settled };
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx");

export default tmp7;
export { isProfileFrameLayerShown };
export const usePreloadLayerImages = tmp8;