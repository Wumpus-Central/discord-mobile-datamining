import { resolveAssetSource } from "00081_resolveAssetSource.js";
import { ImageLoader } from "00329_ImageLoader.js";
import { getImageSourcesFromImageProps } from "00331_getImageSourcesFromImageProps.js";
// _runtime/00328__queryCache.js
import resolveAssetSource from "resolveAssetSource";
import "noop";
import { use } from "noop";
import { jsx } from "jsxProd";
import set from "set";

const require = arg1;
function _queryCache() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c1 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          v0 = 2;
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            obj = v0(outer1_2[3]);
            v0 = 3;
            const obj1 = { value: null, done: true };
            obj1[0] = obj.queryCache(closure_0);
            return obj1;
          }
        } catch (tmp7) {
          v0 = tmp;
          throw tmp7;
        }
      }
    })();
  });
  const _queryCache = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c6 = 1;
let closure_8 = { uri: "Array", width: "call", height: "format" };
function _BaseImage(arg0) {
  let accessibilityLabel;
  let accessibilityLabelledBy;
  let accessibilityState;
  let accessible;
  let alt;
  let children;
  let crossOrigin;
  let defaultSource;
  let headers;
  let height;
  let height2;
  let height3;
  let loadingIndicatorSource;
  let onError;
  let onLoad;
  let onLoadEnd;
  let onLoadStart;
  let ref;
  let referrerPolicy;
  let resizeMode;
  let source;
  let src;
  let srcSet;
  let style;
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let width;
  let width2;
  let width3;
  ({ alt, accessible, aria-labelledby: tmp, aria-busy: tmp2, aria-checked: tmp3, aria-disabled: tmp4, aria-expanded: tmp5, aria-label: tmp7, aria-selected: tmp8, accessibilityLabel, accessibilityLabelledBy, accessibilityState, defaultSource, loadingIndicatorSource, style, onLoadStart, onLoad, onLoadEnd, onError, width, height } = arg0);
  ({ ref, aria-hidden: tmp6, children, source, src, crossOrigin, referrerPolicy, srcSet, resizeMode } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = getImageSourcesFromImageProps /* getImageSourcesFromImageProps */;
  const arr = obj.getImageSourcesFromImageProps({ crossOrigin, referrerPolicy, src, srcSet, width, height, source }) || closure_8;
  const tmp13 = resolveAssetSource(defaultSource);
  const tmp14 = resolveAssetSource(loadingIndicatorSource);
  if (null != children) {
    const _Error2 = Error;
    const error = new Error("The <Image> component cannot contain children. If you want to render content on top of the image, consider using the <ImageBackground> component or absolute positioning.");
    throw error;
  } else {
    if (null != defaultSource) {
      if (null != loadingIndicatorSource) {
        const _Error = Error;
        const error1 = new Error("The <Image> component cannot have defaultSource and loadingIndicatorSource at the same time. Please use either defaultSource or loadingIndicatorSource.");
        throw error1;
      }
    }
    const _Array = Array;
    if (Array.isArray(arr)) {
      ({ headers, width: width3, height: height3 } = arr[0]);
      if (null != headers) {
        merged.headers = headers;
      }
      let tmp18 = 1 === arr.length;
      if (tmp18) {
        obj = { width: null, height: null };
        obj[0] = width3;
        obj[1] = height3;
        tmp18 = obj;
      }
      const items = [tmp18, closure_9.base, style];
      merged.style = items;
      merged.source = arr;
    } else {
      ({ width: width2, height: height2 } = arr);
      if ("" === arr.uri) {
        const _console = console;
        console.warn("source.uri should not be an empty string");
      }
      if (width2 == null) {
        width2 = width;
      }
      obj = { width: null, height: null };
      obj[0] = width2;
      if (height2 == null) {
        height2 = height;
      }
      obj[1] = height2;
      const items1 = [obj, closure_9.base, style];
      merged.style = items1;
      const items2 = [arr];
      merged.source = items2;
    }
    if (null != onLoadStart) {
      merged.shouldNotifyLoadEvents = true;
      merged.onLoadStart = onLoadStart;
    }
    if (null != onLoad) {
      merged.shouldNotifyLoadEvents = true;
      merged.onLoad = onLoad;
    }
    if (null != onLoadEnd) {
      merged.shouldNotifyLoadEvents = true;
      merged.onLoadEnd = onLoadEnd;
    }
    if (null != onError) {
      merged.shouldNotifyLoadEvents = true;
      merged.onError = onError;
    }
    if (tmp20) {
      merged.defaultSource = tmp13;
    }
    if (tmp21) {
      merged.loadingIndicatorSrc = tmp14;
    }
    if (null != tmp7) {
      merged.accessibilityLabel = tmp7;
    } else if (null != accessibilityLabel) {
      merged.accessibilityLabel = accessibilityLabel;
    } else if (null != alt) {
      merged.accessibilityLabel = alt;
    }
    if (null != tmp) {
      merged.accessibilityLabelledBy = tmp;
    } else if (null != accessibilityLabelledBy) {
      merged.accessibilityLabelledBy = accessibilityLabelledBy;
    }
    if (null != alt) {
      merged.accessible = true;
    } else if (null != accessible) {
      merged.accessible = accessible;
    }
    if (!tmp22) {
      if (tmp2 == null) {
        let busy;
        if (accessibilityState != null) {
          busy = accessibilityState.busy;
        }
      }
      const obj1 = { busy: null, checked: null, disabled: null, expanded: null, selected: null };
      obj1[0] = tmp2;
      if (tmp3 == null) {
        let checked;
        if (accessibilityState != null) {
          checked = accessibilityState.checked;
        }
      }
      obj1[1] = tmp3;
      if (tmp4 == null) {
        let disabled;
        if (accessibilityState != null) {
          disabled = accessibilityState.disabled;
        }
      }
      obj1[2] = tmp4;
      if (tmp5 == null) {
        let expanded;
        if (accessibilityState != null) {
          expanded = accessibilityState.expanded;
        }
      }
      obj1[3] = tmp5;
      if (tmp8 == null) {
        let selected;
        if (accessibilityState != null) {
          selected = accessibilityState.selected;
        }
      }
      obj1[4] = tmp8;
      merged.accessibilityState = obj1;
    }
    if (true === tmp6) {
      merged.importantForAccessibility = "no-hide-descendants";
    }
    const tmp28 = tmp12(148)(style);
    let tmp10Result = tmp10(332);
    let objectFit;
    if (tmp28 != null) {
      objectFit = tmp28.objectFit;
    }
    let str4 = tmp10Result.convertObjectFitToResizeMode(objectFit) || resizeMode;
    if (!str4) {
      resizeMode = undefined;
      if (tmp28 != null) {
        resizeMode = tmp28.resizeMode;
      }
      str4 = resizeMode;
    }
    if (!str4) {
      str4 = "cover";
    }
    merged.resizeMode = str4;
    tmp10Result = tmp10(333);
    const tmp33 = use(tmp12(336));
    if (null !== tmp33) {
      merged.internal_analyticTag = tmp33;
    }
    const obj2 = {};
    tmp20 = null != tmp13 && null != tmp13.uri;
    tmp21 = null != tmp14 && null != tmp14.uri;
    tmp22 = null == accessibilityState && null == tmp2 && null == tmp3 && null == tmp4 && null == tmp5 && null == tmp8;
    const wrapRefWithImageAttachedCallbacks = tmp10Result.useWrapRefWithImageAttachedCallbacks(ref);
    const merged1 = Object.assign(merged);
    obj2.ref = wrapRefWithImageAttachedCallbacks;
    return jsx(tmp12(337), {});
  }
}
set = set.unstable_getImageComponentDecorator();
let resultResult = _BaseImage;
if (null != set) {
  resultResult = set(_BaseImage);
}
resultResult.displayName = "Image";
resultResult.getSize = function getSize(arg0, fn) {
  let closure_0 = arg0;
  const importDefault = fn;
  const size = ImageLoader.getSize(arg0);
  if (typeof fn !== "function") {
    return size;
  } else {
    fn = arg2;
    if (!arg2) {
      fn = () => {
        console.warn(`Failed to get size for image: ${closure_0}`);
      };
    }
    size.then((width) => callback(width.width, width.height)).catch(fn);
  }
  const obj = ImageLoader;
};
resultResult.getSizeWithHeaders = function getSizeWithHeaders(arg0, arg1, fn) {
  let closure_0 = arg0;
  const importDefault = fn;
  const sizeWithHeaders = ImageLoader.getSizeWithHeaders(arg0, arg1);
  if (typeof fn !== "function") {
    return sizeWithHeaders;
  } else {
    fn = arg3;
    if (!arg3) {
      fn = () => {
        console.warn(`Failed to get size for image: ${closure_0}`);
      };
    }
    sizeWithHeaders.then((width) => callback(width.width, width.height)).catch(fn);
  }
  const obj = ImageLoader;
};
resultResult.prefetch = function prefetch(closure_0) {
  let closure_6 = tmp + 1;
  if (arg1) {
    arg1(tmp);
  }
  return ImageLoader.prefetchImage(closure_0, +closure_6);
};
resultResult.prefetchWithMetadata = function prefetchWithMetadata(arg0, arg1, arg2, arg3) {
  let closure_6 = tmp + 1;
  if (arg3) {
    arg3(tmp);
  }
  return ImageLoader.prefetchImage(arg0, +closure_6);
};
resultResult.abortPrefetch = function abortPrefetch(_requestId) {
  ImageLoader.abortRequest(_requestId);
};
resultResult.queryCache = function queryCache(closure_0) {
  const self = this;
  const apply = _queryCache.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
resultResult.resolveAssetSource = require("resolveAssetSource");
let closure_9 = require("get hairlineWidth").create({ base: { overflow: "hidden" } });

export default resultResult;