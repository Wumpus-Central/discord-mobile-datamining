// discord_app/modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx
import CollectiblesAssetUtils from "../../utils/CollectiblesAssetUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function measureProfileFrameLayer(arg0) {
  closure_0 = arg0;
  value = map.get(arg0);
  if (null != value) {
    return Promise.resolve(value);
  } else {
    value2 = map1.get(arg0);
    if (null == value2) {
      const promise = new Promise((arg0) => {
        closure_0 = arg0;
        size = size.getSize(
          closure_0,
          (arg0, arg1) => {
            if (arg0 > 0) {
              const result = map.set(closure_0, arg1 / arg0);
              set2.delete(closure_0);
              closure_0(arg1 / arg0);
            } else {
              set2.add(closure_0);
              closure_0(null);
            }
          },
          () => {
            set2.add(closure_0);
            closure_0(null);
          },
        );
      });
      const cleanupPromise = promise.finally(() => set.delete(closure_0));
      const result = map1.set(arg0, cleanupPromise);
      value2 = cleanupPromise;
    }
    return value2;
  }
}
function getProfileFrameLayerAssetUrl(arg0, arg1, arg2) {
  const rounded = Math.round(arg2 * React5.get());
  return "" + arg0 + "?width=" + rounded + "&height=" + Math.round(rounded * arg1);
}
function preloadLayer() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_16 = async function _preloadLayer(arg0) {
  closure_2 = tmp2;
  closure_130_0 = closure_0;
  closure_130_1 = closure_1;
  await measureProfileFrameLayer(closure_0);
  if (1 === tmp5) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else {
      closure_130_2 = value;
      if (null != closure_130_2) {
        closure_130_3 = closure_131_14(closure_130_0, closure_130_2, closure_130_1);
        c4 = 2;
        c5 = 1;
        return {
          value: closure_131_1(closure_131_2[8]).preload({ uri: closure_130_3, timeoutMs: 30000 }),
          done: false,
        };
      } else {
        c5 = 3;
      }
    }
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_131_11.add(closure_130_3);
  }
  return value;
};
get_ActivityIndicator = fn(17);
({ Image: metroRequire, PixelRatio: closure_7 } = get_ActivityIndicator);
const UserProfileThemeTypes = fn(6714).UserProfileThemeTypes;
const map = new Map();
const map1 = new Map();
const set = new Set();
const set1 = new Set();
fn(558);
const ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(16);
      ({ skuId, layer, width } = arg0);
      if (cResult[0] === layer) {
        if (cResult[1] === skuId) {
          let tmp4 = cResult[2];
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
        const tmp9 = _slicedToArray(noop.useReducer(P, 0), 2)[1];
        closure_1 = tmp9;
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
          const effect = noop.useEffect(tmp10, tmp12);
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
          value = undefined;
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
          let hasItem = null == closure_0;
          if (!hasItem) {
            hasItem = "" === tmp;
          }
          if (!hasItem) {
            hasItem = map.has(tmp);
          }
          if (!hasItem) {
            closure_0 = tmp;
            value = map.get(tmp);
            if (null != value) {
              let resolved = Promise.resolve(value);
            } else {
              resolved = map1.get(tmp);
              if (null == resolved) {
                const promise = new Promise((arg0) => {
                  closure_0 = arg0;
                  size = size.getSize(
                    closure_0,
                    (arg0, arg1) => {
                      if (arg0 > 0) {
                        const result = map.set(closure_0, arg1 / arg0);
                        set2.delete(closure_0);
                        closure_0(arg1 / arg0);
                      } else {
                        set2.add(closure_0);
                        closure_0(null);
                      }
                    },
                    () => {
                      set2.add(closure_0);
                      closure_0(null);
                    },
                  );
                });
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
      const obj = require("c");
      const tmpResult = require("CollectiblesAssetUtils");
      const collectiblesItemAssetUrl = tmpResult.getCollectiblesItemAssetUrl({
        skuId,
        assetFormat: require("CollectiblesAssetUtils").CollectiblesItemAssetFormat.STATIC,
        assetId: layer.id,
      });
      cResult[0] = layer;
      cResult[1] = skuId;
      cResult[2] = collectiblesItemAssetUrl;
      tmp4 = collectiblesItemAssetUrl;
      const obj3 = {
        skuId,
        assetFormat: require("CollectiblesAssetUtils").CollectiblesItemAssetFormat.STATIC,
        assetId: layer.id,
      };
    }
  : (width) => {
      width = width.width;
      let collectiblesItemAssetUrl;
      ({ skuId, layer } = width);
      const obj = collectiblesItemAssetUrl(1974);
      collectiblesItemAssetUrl = obj.getCollectiblesItemAssetUrl({
        skuId,
        assetFormat: collectiblesItemAssetUrl(1974).CollectiblesItemAssetFormat.STATIC,
        assetId: layer.id,
      });
      closure_1 = _slicedToArray(
        noop.useReducer((arg0) => arg0 + 1, 0),
        2,
      )[1];
      const items = [collectiblesItemAssetUrl];
      const effect = noop.useEffect(() => {
        let hasItem = null == collectiblesItemAssetUrl;
        if (!hasItem) {
          hasItem = "" === collectiblesItemAssetUrl;
        }
        if (!hasItem) {
          hasItem = map.has(collectiblesItemAssetUrl);
        }
        if (!hasItem) {
          closure_0 = collectiblesItemAssetUrl;
          value = map.get(collectiblesItemAssetUrl);
          if (null != value) {
            let resolved = Promise.resolve(value);
          } else {
            resolved = map1.get(collectiblesItemAssetUrl);
            if (null == resolved) {
              const promise = new Promise((arg0) => {
                closure_0 = arg0;
                size = size.getSize(
                  closure_0,
                  (arg0, arg1) => {
                    if (arg0 > 0) {
                      const result = map.set(closure_0, arg1 / arg0);
                      set2.delete(closure_0);
                      closure_0(arg1 / arg0);
                    } else {
                      set2.add(closure_0);
                      closure_0(null);
                    }
                  },
                  () => {
                    set2.add(closure_0);
                    closure_0(null);
                  },
                );
              });
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
      value = undefined;
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
          const _Math = Math;
          const rounded = Math.round(width * closure_7.get());
          const _Math2 = Math;
          const _HermesInternal = HermesInternal;
          assetUrl = "" + collectiblesItemAssetUrl + "?width=" + rounded + "&height=" + Math.round(rounded * value);
        }
      }
      return { assetUrl, imageHeight };
    };
function isProfileFrameLayerShown(anchor, profileThemeType, layers) {
  let tmp = null != layers;
  if (tmp) {
    tmp = !layers(anchor);
  }
  let tmp2 = !tmp;
  if (!tmp) {
    let tmp5 = profileThemeType === UserProfileThemeTypes.PREVIEW;
    if (!tmp5) {
      let tmp6 = "top" === anchor.anchor;
      if (tmp6) {
        tmp6 = "staple" === anchor.type;
      }
      tmp5 = tmp6;
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx");

export default tmp7;
export { isProfileFrameLayerShown };
export const usePreloadLayerImages = ReactCompilerGating.isReactCompilerEnabled()
  ? (frame) => {
      const cResult = frame(skuId[7]).c(27);
      frame = frame.frame;
      ({ containerWidth, profileThemeType } = frame);
      skuId = frame.filterLayer;
      let obj = frame(skuId[7]);
      let tmp = skuId;
      const isProfileFrameLayerPreloadEnabled = frame(skuId[9]).useIsProfileFrameLayerPreloadEnabled(
        "usePreloadLayerImages",
      );
      if (null != frame) {
        if (cResult[6] === skuId) {
          if (cResult[7] === profileThemeType) {
            let tmp5 = cResult[8];
          }
          if (cResult[9] !== frame.skuId) {
            const fn2 = function v(assetId) {
              const obj = CollectiblesAssetUtils;
              return obj.getCollectiblesItemAssetUrl({
                skuId: frame.skuId,
                assetFormat: CollectiblesAssetUtils.CollectiblesItemAssetFormat.STATIC,
                assetId: assetId.id,
              });
            };
            cResult[9] = frame.skuId;
            cResult[10] = fn2;
            let tmp6 = fn2;
          } else {
            tmp6 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const fn3 = function p(arg0) {
              let tmp = null != arg0;
              if (tmp) {
                tmp = "" !== arg0;
              }
              return tmp;
            };
            cResult[11] = fn3;
            let tmp8 = fn3;
          } else {
            tmp8 = cResult[11];
          }
          const layers = frame.layers;
          const found = layers.filter(tmp5);
          const mapped = found.map(tmp6);
          const found1 = mapped.filter(tmp8);
          cResult[1] = skuId;
          ({ layers: tmp2[2], skuId } = frame);
          cResult[3] = skuId;
          cResult[4] = profileThemeType;
          cResult[5] = found1;
        }
        const fn = function h(anchor) {
          let tmp3 = null != skuId;
          if (tmp3) {
            tmp3 = !tmp2(anchor);
          }
          let tmp4 = !tmp3;
          if (!tmp3) {
            let tmp6 = profileThemeType === UserProfileThemeTypes.PREVIEW;
            if (!tmp6) {
              let tmp7 = "top" === anchor.anchor;
              if (tmp7) {
                tmp7 = "staple" === anchor.type;
              }
              tmp6 = tmp7;
            }
            tmp4 = tmp6;
          }
          return tmp4;
        };
        cResult[6] = skuId;
        cResult[7] = profileThemeType;
        cResult[8] = fn;
        tmp5 = fn;
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[12] === containerWidth) {
          if (cResult[13] === frame) {
            let tmp12 = cResult[14];
          }
          noop = tmp12;
          let skuId1;
          if (frame != null) {
            skuId1 = frame.skuId;
          }
          let _HermesInternal = HermesInternal;
          const combined = "" + skuId1 + ":" + tmp12;
          closure_7 = first(noop.useState(null), 2)[1];
          if (cResult[15] === first) {
            if (cResult[16] === tmp12) {
              let tmp20 = cResult[17];
            }
            closure_8 = tmp20;
            if (cResult[18] === first) {
              if (cResult[19] === isProfileFrameLayerPreloadEnabled) {
                if (cResult[20] === tmp20) {
                  if (cResult[21] === combined) {
                    if (cResult[22] === tmp12) {
                      let tmp22 = cResult[23];
                      let tmp23 = cResult[24];
                    }
                    const effect = obj4.useEffect(tmp22, tmp23);
                    let tmp25 = !isProfileFrameLayerPreloadEnabled;
                    class E {
                      constructor() {
                        if (closure_3) {
                          tmp = closure_5;
                          num = 0;
                          if (closure_5 > 0) {
                            tmp2 = closure_8;
                            if (!closure_8) {
                              flag = false;
                              c0 = false;
                              markSettled = function markSettled() {
                                if (!c0) {
                                  closure_7(combined);
                                }
                              };
                              tmp3 = globalThis;
                              _setTimeout = setTimeout;
                              num2 = 3000;
                              closure_1 = setTimeout(markSettled, 3000);
                              _Promise = Promise;
                              tmp4 = closure_4;
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
                    if (!tmp25) {
                      tmp25 = tmp19 === combined;
                    }
                    if (cResult[25] !== tmp25) {
                      const obj3 = { settled: tmp25 };
                      class E {
                        constructor() {
                          if (closure_3) {
                            tmp = closure_5;
                            num = 0;
                            if (closure_5 > 0) {
                              tmp2 = closure_8;
                              if (!closure_8) {
                                flag = false;
                                c0 = false;
                                markSettled = function markSettled() {
                                  if (!c0) {
                                    closure_7(combined);
                                  }
                                };
                                tmp3 = globalThis;
                                _setTimeout = setTimeout;
                                num2 = 3000;
                                closure_1 = setTimeout(markSettled, 3000);
                                _Promise = Promise;
                                tmp4 = closure_4;
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
                      let tmp26 = obj3;
                    } else {
                      tmp26 = cResult[26];
                    }
                    return tmp26;
                  }
                }
              }
            }
            class E {
              constructor() {
                if (closure_3) {
                  tmp = closure_5;
                  num = 0;
                  if (closure_5 > 0) {
                    tmp2 = closure_8;
                    if (!closure_8) {
                      flag = false;
                      c0 = false;
                      markSettled = function markSettled() {
                        if (!c0) {
                          closure_7(combined);
                        }
                      };
                      tmp3 = globalThis;
                      _setTimeout = setTimeout;
                      num2 = 3000;
                      closure_1 = setTimeout(markSettled, 3000);
                      _Promise = Promise;
                      tmp4 = closure_4;
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
            const items1 = [isProfileFrameLayerPreloadEnabled, first, tmp12, combined, tmp20];
            cResult[18] = first;
            cResult[19] = isProfileFrameLayerPreloadEnabled;
            cResult[20] = tmp20;
            cResult[21] = combined;
            cResult[22] = tmp12;
            cResult[23] = E;
            cResult[24] = items1;
            tmp23 = items1;
            tmp22 = E;
          }
          const tmp21 =
            tmp12 > 0 &&
            first.every((item) => {
              let flag = true;
              if (!set1.has(item)) {
                value = map.get(item);
                let hasItem = null != value;
                if (hasItem) {
                  const _Math = Math;
                  const rounded = Math.round(closure_5 * React5.get());
                  const _Math2 = Math;
                  const _HermesInternal = HermesInternal;
                  hasItem = set.has("" + item + "?width=" + rounded + "&height=" + Math.round(rounded * value));
                }
                flag = hasItem;
              }
              return flag;
            });
          cResult[15] = first;
          cResult[16] = tmp12;
          cResult[17] = tmp21;
          tmp20 = tmp21;
          obj4 = noop;
          const tmp18 = first(noop.useState(null), 2);
        }
        let num14 = 0;
        if (null != frame) {
          num14 = 0;
          if (containerWidth > 0) {
            num14 = containerWidth + 2 * profileThemeType(tmp[10])(frame, containerWidth).overflowHorizontal;
          }
        }
        cResult[12] = containerWidth;
        cResult[13] = frame;
        cResult[14] = num14;
        tmp12 = num14;
      }
    }
  : (frame) => {
      frame = frame.frame;
      ({ containerWidth, profileThemeType } = frame);
      const filterLayer = frame.filterLayer;
      let num;
      let combined;
      closure_7 = undefined;
      c8 = undefined;
      const isProfileFrameLayerPreloadEnabled = frame(filterLayer[9]).useIsProfileFrameLayerPreloadEnabled(
        "usePreloadLayerImages",
      );
      let items = [frame, profileThemeType, filterLayer];
      const memo = num.useMemo(() => {
        if (null == frame) {
          let items = [];
        } else {
          const layers = tmp.layers;
          const found = layers.filter((anchor) => {
            let tmp3 = null != filterLayer;
            if (tmp3) {
              tmp3 = !tmp2(anchor);
            }
            let tmp4 = !tmp3;
            if (!tmp3) {
              let tmp6 = profileThemeType === constants.PREVIEW;
              if (!tmp6) {
                let tmp7 = "top" === anchor.anchor;
                if (tmp7) {
                  tmp7 = "staple" === anchor.type;
                }
                tmp6 = tmp7;
              }
              tmp4 = tmp6;
            }
            return tmp4;
          });
          const mapped = found.map((assetId) => {
            const obj = frame(filterLayer[5]);
            return obj.getCollectiblesItemAssetUrl({
              skuId: skuId.skuId,
              assetFormat: frame(filterLayer[5]).CollectiblesItemAssetFormat.STATIC,
              assetId: assetId.id,
            });
          });
          items = mapped.filter((item) => {
            let tmp = null != item;
            if (tmp) {
              tmp = "" !== item;
            }
            return tmp;
          });
        }
        return items;
      }, items);
      num = 0;
      if (null != frame) {
        num = 0;
        if (containerWidth > 0) {
          num = containerWidth + 2 * profileThemeType(filterLayer[10])(frame, containerWidth).overflowHorizontal;
        }
      }
      let skuId;
      if (frame != null) {
        skuId = frame.skuId;
      }
      combined = "" + skuId + ":" + num;
      let tmp6 = memo(num.useState(null), 2);
      closure_7 = tmp6[1];
      let everyResult = num > 0;
      if (everyResult) {
        everyResult = memo.every((item) => {
          let flag = true;
          if (!set1.has(item)) {
            value = map.get(item);
            let hasItem = null != value;
            if (hasItem) {
              const _Math = Math;
              const rounded = Math.round(num * React5.get());
              const _Math2 = Math;
              const _HermesInternal = HermesInternal;
              hasItem = set.has("" + item + "?width=" + rounded + "&height=" + Math.round(rounded * value));
            }
            flag = hasItem;
          }
          return flag;
        });
      }
      c8 = everyResult;
      const items1 = [isProfileFrameLayerPreloadEnabled, memo, num, combined, everyResult];
      const effect = obj2.useEffect(() => {
        if (isProfileFrameLayerPreloadEnabled) {
          if (0 > 0) {
            if (!c8) {
              function markSettled() {
                if (!c0) {
                  closure_7(combined);
                }
              }
              c0 = false;
              const _setTimeout = setTimeout;
              const timeout = setTimeout(markSettled, 3000);
              Promise.all(memo.map((item) => preloadLayer(item, num))).then(markSettled);
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
        settled = tmp6[0] === combined;
      }
      return { settled };
    };
