// === Module 8795: useProfileFrameLayerAsset ===

// Module 8795 (useProfileFrameLayerAsset)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
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
        size = size.getSize(closure_0, (arg0, arg1) => {
          if (arg0 > 0) {
            const result = map.set(c0, arg1 / arg0);
            set.delete(c0);
            closure_0(arg1 / arg0);
          } else {
            set.add(c0);
            closure_0(null);
          }
        }, () => {
          set.add(c0);
          closure_0(null);
        });
      });
      const cleanupPromise = promise.finally(() => map.delete(c0));
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
let closure_15 = async function _preloadLayer(arg0) {
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
        return { value: closure_131_1(closure_131_2[6]).preload({ uri: closure_130_3, timeoutMs: 30000 }), done: false };
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
const UserProfileThemeTypes = fn(7377).UserProfileThemeTypes;
const map = new Map();
const map1 = new Map();
const set = new Set();
const set1 = new Set();
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/useProfileFrameLayerAsset.tsx");

export default function useProfileFrameLayerAsset(width) {
  width = width.width;
  let collectiblesItemAssetUrl;
  c1 = undefined;
  let ratio;
  ({ skuId, layer } = width);
  let obj = collectiblesItemAssetUrl(ratio[5]);
  collectiblesItemAssetUrl = obj.getCollectiblesItemAssetUrl({ skuId, assetFormat: collectiblesItemAssetUrl(ratio[5]).CollectiblesItemAssetFormat.STATIC, assetId: layer.id });
  const obj2 = { skuId, assetFormat: collectiblesItemAssetUrl(ratio[5]).CollectiblesItemAssetFormat.STATIC, assetId: layer.id };
  [tmp3, c1] = noop.useState(null);
  value = undefined;
  if (null != collectiblesItemAssetUrl) {
    value = map.get(collectiblesItemAssetUrl);
  }
  ratio = value;
  if (null != tmp3) {
    ratio = value;
    if (tmp3.baseUrl === collectiblesItemAssetUrl) {
      ratio = tmp3.ratio;
    }
  }
  const items = [collectiblesItemAssetUrl, ratio];
  const effect = noop.useEffect(() => {
    if (null != c0) {
      if ("" !== tmp) {
        if (null == ratio) {
          c0 = tmp;
          value = closure_1_9.get(tmp);
          if (null != value) {
            let resolved = Promise.resolve(value);
          } else {
            resolved = map.get(tmp);
            if (null == resolved) {
              const promise = new Promise((arg0) => {
                closure_0 = arg0;
                size = size.getSize(closure_0, (arg0, arg1) => {
                  if (arg0 > 0) {
                    const result = map.set(c0, arg1 / arg0);
                    set.delete(c0);
                    closure_0(arg1 / arg0);
                  } else {
                    set.add(c0);
                    closure_0(null);
                  }
                }, () => {
                  set.add(c0);
                  closure_0(null);
                });
              });
              const cleanupPromise = promise.finally(() => map.delete(c0));
              let result = map.set(tmp, cleanupPromise);
              resolved = cleanupPromise;
            }
          }
          resolved.then((ratio) => {
            let tmp = c0;
            if (!c0) {
              tmp = null == ratio;
            }
            if (!tmp) {
              const obj = { baseUrl: collectiblesItemAssetUrl, ratio };
              c1(obj);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
    }
  }, items);
  let imageHeight = 0;
  if (null != ratio) {
    imageHeight = ratio * width;
  }
  let assetUrl = null;
  if (null != collectiblesItemAssetUrl) {
    assetUrl = null;
    if (null != ratio) {
      const _Math = Math;
      const rounded = Math.round(width * closure_7.get());
      const _Math2 = Math;
      const _HermesInternal = HermesInternal;
      assetUrl = "" + collectiblesItemAssetUrl + "?width=" + rounded + "&height=" + Math.round(rounded * ratio);
    }
  }
  return { assetUrl, imageHeight };
};
export function isProfileFrameLayerShown(anchor, profileThemeType, fn) {
  let tmp = null != fn;
  if (tmp) {
    tmp = !fn(anchor);
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
export function usePreloadLayerImages(frame) {
  frame = frame.frame;
  ({ containerWidth, profileThemeType } = frame);
  const filterLayer = frame.filterLayer;
  let num;
  let combined;
  closure_7 = undefined;
  c8 = undefined;
  const isProfileFrameLayerPreloadEnabled = frame(filterLayer[7]).useIsProfileFrameLayerPreloadEnabled("usePreloadLayerImages");
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
        return obj.getCollectiblesItemAssetUrl({ skuId: skuId.skuId, assetFormat: frame(filterLayer[5]).CollectiblesItemAssetFormat.STATIC, assetId: assetId.id });
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
      num = containerWidth + 2 * profileThemeType(filterLayer[8])(frame, containerWidth).overflowHorizontal;
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
          Promise.all(memo.map((item) => (function preloadLayer() {
            const self = this;
            const apply = closure_1_15.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(item, num))).then(markSettled);
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
}