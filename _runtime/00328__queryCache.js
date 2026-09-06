// === Module 328: _queryCache ===

// Module 328 (_queryCache)
import resolveAssetSourceDefault from "resolveAssetSource" /* 81 */;
import flattenStyleDefault from "flattenStyle" /* 148 */;
import ImageLoaderDefault from "ImageLoader" /* 329 */;
import _mod331 from "module_331" /* 331 */;
import convertObjectFitToResizeMode from "convertObjectFitToResizeMode" /* 332 */;
import unstable_setImageComponentDecorator2 from "unstable_setImageComponentDecorator" /* 333 */;
import _modDef336 from "module_336" /* 336 */;
import _modDef337 from "module_337" /* 337 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import get_hairlineWidth from "get hairlineWidth" /* 254 */;

require = fn;
let closure_7 = async function _queryCache(arg0) {
  if (c1 === 2) {
    c1 = 3;
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
    try {
      c1 = 2;
      if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        obj = ImageLoaderDefault;
        c1 = 3;
        const obj1 = { value: obj.queryCache(closure_0), done: true };
        return obj1;
      }
    } catch (tmp7) {
      c1 = tmp;
      throw tmp7;
    }
  }
};
const use = fn(19).use;
const jsx = fn(21).jsx;
let closure_6 = 1;
let closure_8 = { uri: "Array", width: "call", height: "o" };
function _BaseImage(arg0) {
  ({ alt, accessible, aria-labelledby: tmp, aria-busy: tmp2, aria-checked: tmp3, aria-disabled: tmp4, aria-expanded: tmp5, aria-label: tmp7, aria-selected: tmp8, accessibilityLabel, accessibilityLabelledBy, accessibilityState, defaultSource, loadingIndicatorSource, style, onLoadStart, onLoad, onLoadEnd, onError, width, height } = arg0);
  ({ ref, aria-hidden: tmp6, children, source, src, crossOrigin, referrerPolicy, srcSet, resizeMode } = arg0);
  const merged = Object.assign(arg0, Object.assign({ ref: 0, alt: 0, accessible: 0, "aria-labelledby": 0, "aria-busy": 0, "aria-checked": 0, "aria-disabled": 0, "aria-expanded": 0, "aria-hidden": 0, "aria-label": 0, "aria-selected": 0, accessibilityLabel: 0, accessibilityLabelledBy: 0, accessibilityState: 0, defaultSource: 0, loadingIndicatorSource: 0, children: 0, source: 0, src: 0, style: 0, crossOrigin: 0, referrerPolicy: 0, srcSet: 0, onLoadStart: 0, onLoad: 0, onLoadEnd: 0, onError: 0, width: 0, height: 0, resizeMode: 0 }));
  let obj = _mod331;
  const arr = obj.getImageSourcesFromImageProps({ crossOrigin, referrerPolicy, src, srcSet, width, height, source }) || closure_8;
  const tmp13 = resolveAssetSourceDefault(defaultSource);
  const tmp14 = resolveAssetSourceDefault(loadingIndicatorSource);
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
        const size = { width: width3, height: height3 };
        tmp18 = size;
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
      const size1 = { width: width2, height: null };
      if (height2 == null) {
        height2 = height;
      }
      size1.height = height2;
      const items1 = [size1, closure_9.base, style];
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
      obj = { busy: tmp2, checked: null, disabled: null, expanded: null, selected: null };
      if (tmp3 == null) {
        let checked;
        if (accessibilityState != null) {
          checked = accessibilityState.checked;
        }
      }
      obj.checked = tmp3;
      if (tmp4 == null) {
        let disabled;
        if (accessibilityState != null) {
          disabled = accessibilityState.disabled;
        }
      }
      obj.disabled = tmp4;
      if (tmp5 == null) {
        let expanded;
        if (accessibilityState != null) {
          expanded = accessibilityState.expanded;
        }
      }
      obj.expanded = tmp5;
      if (tmp8 == null) {
        let selected;
        if (accessibilityState != null) {
          selected = accessibilityState.selected;
        }
      }
      obj.selected = tmp8;
      merged.accessibilityState = obj;
    }
    if (true === tmp6) {
      merged.importantForAccessibility = "no-hide-descendants";
    }
    const tmp28 = flattenStyleDefault(style);
    let tmp10Result = convertObjectFitToResizeMode;
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
    tmp10Result = unstable_setImageComponentDecorator2;
    const tmp33 = use(_modDef336);
    if (null !== tmp33) {
      merged.internal_analyticTag = tmp33;
    }
    obj = {};
    tmp20 = null != tmp13 && null != tmp13.uri;
    tmp21 = null != tmp14 && null != tmp14.uri;
    tmp22 = null == accessibilityState && null == tmp2 && null == tmp3 && null == tmp4 && null == tmp5 && null == tmp8;
    const wrapRefWithImageAttachedCallbacks = tmp10Result.useWrapRefWithImageAttachedCallbacks(ref);
    const merged1 = Object.assign(merged);
    obj.ref = wrapRefWithImageAttachedCallbacks;
    return jsx(_modDef337, {});
  }
}
let unstable_setImageComponentDecorator = fn(333);
unstable_setImageComponentDecorator = unstable_setImageComponentDecorator.unstable_getImageComponentDecorator();
let resultResult = _BaseImage;
if (null != unstable_setImageComponentDecorator) {
  resultResult = unstable_setImageComponentDecorator(_BaseImage);
}
resultResult.displayName = "Image";
resultResult.getSize = function getSize(arg0, fn, arg2) {
  closure_0 = arg0;
  closure_1 = fn;
  const size = ImageLoaderDefault.getSize(arg0);
  if (typeof fn !== "function") {
    return size;
  } else {
    fn = arg2;
    if (!arg2) {
      fn = () => {
        console.warn(`Failed to get size for image: ${closure_0}`);
      };
    }
    size.then((width) => closure_1(width.width, width.height)).catch(fn);
  }
};
resultResult.getSizeWithHeaders = function getSizeWithHeaders(arg0, arg1, fn, arg3) {
  closure_0 = arg0;
  closure_1 = fn;
  const sizeWithHeaders = ImageLoaderDefault.getSizeWithHeaders(arg0, arg1);
  if (typeof fn !== "function") {
    return sizeWithHeaders;
  } else {
    fn = arg3;
    if (!arg3) {
      fn = () => {
        console.warn(`Failed to get size for image: ${closure_0}`);
      };
    }
    sizeWithHeaders.then((width) => closure_1(width.width, width.height)).catch(fn);
  }
};
resultResult.prefetch = function prefetch(arg0, fn) {
  closure_6 = tmp + 1;
  if (fn) {
    fn(tmp);
  }
  return ImageLoaderDefault.prefetchImage(arg0, +closure_6);
};
resultResult.prefetchWithMetadata = function prefetchWithMetadata(arg0, arg1, arg2, fn) {
  closure_6 = tmp + 1;
  if (fn) {
    fn(tmp);
  }
  return ImageLoaderDefault.prefetchImage(arg0, +closure_6);
};
resultResult.abortPrefetch = function abortPrefetch(_requestId) {
  ImageLoaderDefault.abortRequest(_requestId);
};
resultResult.queryCache = function queryCache(arg0) {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
resultResult.resolveAssetSource = resolveAssetSourceDefault;
let closure_9 = get_hairlineWidth.create({ base: { overflow: "hidden" } });

export default resultResult;