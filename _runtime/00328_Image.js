// _runtime/00328_Image.js
import react2 from "00019_react.js";
import Fragment from "react/00021_Fragment.js";
import resolveAssetSourceDefault from "00081_resolveAssetSource.js";
import flattenStyleDefault from "00148_flattenStyle.js";
import ImageLoaderDefault from "00329_ImageLoader.js";
import _slicedToArray from "metro/00331__slicedToArray.js";
import convertObjectFitToResizeMode2 from "00332_convertObjectFitToResizeMode.js";
import reactDefault from "00336_react.js";
import _modDef337 from "metro/00337__.js";
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";
import unstable_setImageComponentDecorator_mod from "00333_unstable_setImageComponentDecorator.js";
import get_hairlineWidth from "00254_get_hairlineWidth.js";

let c1, size;

let obj = function _queryCache() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c1 = 3;
          const obj4 = { value: obj.queryCache(closure_0), done: true };
          obj = ImageLoaderDefault;
          return obj4;
        }
      } catch (tmp6) {
        c1 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
const use = react2.use;
const jsx = Fragment.jsx;
let closure_6 = 1;
let closure_8 = { uri: "duration", width: "toCharArray$esjava$1", height: "toCharArray$esjava$1" };
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
  ({
    alt,
    accessible,
    "aria-labelledby": tmp,
    "aria-busy": tmp2,
    "aria-checked": tmp3,
    "aria-disabled": tmp4,
    "aria-expanded": tmp5,
    "aria-label": tmp7,
    "aria-selected": tmp8,
    accessibilityLabel,
    accessibilityLabelledBy,
    accessibilityState,
    defaultSource,
    loadingIndicatorSource,
    style,
    onLoadStart,
    onLoad,
    onLoadEnd,
    onError,
    width,
    height,
  } = arg0);
  ({ ref, "aria-hidden": tmp6, children, source, src, crossOrigin, referrerPolicy, srcSet, resizeMode } = arg0);
  const merged = Object.assign(
    arg0,
    Object.assign({
      ref: 0,
      alt: 0,
      accessible: 0,
      "aria-labelledby": 0,
      "aria-busy": 0,
      "aria-checked": 0,
      "aria-disabled": 0,
      "aria-expanded": 0,
      "aria-hidden": 0,
      "aria-label": 0,
      "aria-selected": 0,
      accessibilityLabel: 0,
      accessibilityLabelledBy: 0,
      accessibilityState: 0,
      defaultSource: 0,
      loadingIndicatorSource: 0,
      children: 0,
      source: 0,
      src: 0,
      style: 0,
      crossOrigin: 0,
      referrerPolicy: 0,
      srcSet: 0,
      onLoadStart: 0,
      onLoad: 0,
      onLoadEnd: 0,
      onError: 0,
      width: 0,
      height: 0,
      resizeMode: 0,
    }),
  );
  obj = _slicedToArray;
  const arr =
    obj.getImageSourcesFromImageProps({ crossOrigin, referrerPolicy, src, srcSet, width, height, source }) || closure_8;
  const tmp13 = resolveAssetSourceDefault(defaultSource);
  const tmp14 = resolveAssetSourceDefault(loadingIndicatorSource);
  if (null != children) {
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const error = new Error(
      "The <Image> component cannot contain children. If you want to render content on top of the image, consider using the <ImageBackground> component or absolute positioning.",
    );
    throw error;
  } else {
    if (null != defaultSource) {
      if (null != loadingIndicatorSource) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error1 = new Error(
          "The <Image> component cannot have defaultSource and loadingIndicatorSource at the same time. Please use either defaultSource or loadingIndicatorSource.",
        );
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
        size = { width: width3, height: height3 };
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
      const size1 = { width: width2, height: height2 };
      if (height2 == null) {
        height2 = height;
      }
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
    const tmp20 = null != tmp13 && null != tmp13.uri;
    if (tmp20) {
      merged.defaultSource = tmp13;
    }
    const tmp21 = null != tmp14 && null != tmp14.uri;
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
    const tmp22 =
      null == accessibilityState && null == tmp2 && null == tmp3 && null == tmp4 && null == tmp5 && null == tmp8;
    if (!tmp22) {
      if (tmp2 == null) {
        let busy;
        if (accessibilityState != null) {
          busy = accessibilityState.busy;
        }
      }
      const obj2 = { busy: tmp2, checked: tmp3, disabled: tmp4, expanded: tmp5, selected: tmp8 };
      if (tmp3 == null) {
        let checked;
        if (accessibilityState != null) {
          checked = accessibilityState.checked;
        }
      }
      if (tmp4 == null) {
        let disabled;
        if (accessibilityState != null) {
          disabled = accessibilityState.disabled;
        }
      }
      if (tmp5 == null) {
        let expanded;
        if (accessibilityState != null) {
          expanded = accessibilityState.expanded;
        }
      }
      if (tmp8 == null) {
        let selected;
        if (accessibilityState != null) {
          selected = accessibilityState.selected;
        }
      }
      merged.accessibilityState = obj2;
    }
    if (true === tmp6) {
      merged.importantForAccessibility = "no-hide-descendants";
    }
    const tmp28 = flattenStyleDefault(style);
    let objectFit;
    const convertObjectFitToResizeMode = convertObjectFitToResizeMode2.convertObjectFitToResizeMode;
    convertObjectFitToResizeMode2;
    if (tmp28 != null) {
      objectFit = tmp28.objectFit;
    }
    let str4 = convertObjectFitToResizeMode(objectFit) || resizeMode;
    if (!str4) {
      let resizeMode1;
      if (tmp28 != null) {
        resizeMode1 = tmp28.resizeMode;
      }
      str4 = resizeMode1;
    }
    if (!str4) {
      str4 = "cover";
    }
    merged.resizeMode = str4;
    const tmp10Result2 = unstable_setImageComponentDecorator;
    const wrapRefWithImageAttachedCallbacks = tmp10Result2.useWrapRefWithImageAttachedCallbacks(ref);
    const tmp34 = use(reactDefault);
    if (null !== tmp34) {
      merged.internal_analyticTag = tmp34;
    }
    _modDef337;
    const merged1 = Object.assign(merged);
    return <tmp12Result ref={wrapRefWithImageAttachedCallbacks} />;
  }
}
let unstable_setImageComponentDecorator = unstable_setImageComponentDecorator_mod;
unstable_setImageComponentDecorator = unstable_setImageComponentDecorator.unstable_getImageComponentDecorator();
let resultResult = _BaseImage;
if (null != unstable_setImageComponentDecorator) {
  resultResult = unstable_setImageComponentDecorator(_BaseImage);
}
resultResult.displayName = "Image";
resultResult.getSize = function getSize(arg0, fn, arg2) {
  const f81032 = (width) => closure_1(width.width, width.height);
  let closure_0 = arg0;
  let closure_1 = fn;
  obj = ImageLoaderDefault;
  size = obj.getSize(arg0);
  if (typeof fn !== "function") {
    return size;
  } else {
    fn = arg2;
    const _catch = size.then(f81032).catch;
    size.then(f81032);
    if (!arg2) {
      fn = () => {
        console.warn(`Failed to get size for image: ${closure_0}`);
      };
    }
    _catch(fn);
  }
};
resultResult.getSizeWithHeaders = function getSizeWithHeaders(arg0, arg1, fn, arg3) {
  const f81034 = (width) => closure_1(width.width, width.height);
  let closure_0 = arg0;
  let closure_1 = fn;
  obj = ImageLoaderDefault;
  const sizeWithHeaders = obj.getSizeWithHeaders(arg0, arg1);
  if (typeof fn !== "function") {
    return sizeWithHeaders;
  } else {
    fn = arg3;
    const _catch = sizeWithHeaders.then(f81034).catch;
    sizeWithHeaders.then(f81034);
    if (!arg3) {
      fn = () => {
        console.warn(`Failed to get size for image: ${closure_0}`);
      };
    }
    _catch(fn);
  }
};
resultResult.prefetch = function prefetch(arg0, fn) {
  closure_6 = tmp + 1;
  if (fn) {
    fn(+closure_6);
  }
  obj = ImageLoaderDefault;
  return obj.prefetchImage(arg0, +closure_6);
};
resultResult.prefetchWithMetadata = function prefetchWithMetadata(arg0, arg1, arg2, fn) {
  closure_6 = tmp + 1;
  if (fn) {
    fn(+closure_6);
  }
  obj = ImageLoaderDefault;
  return obj.prefetchImage(arg0, +closure_6);
};
resultResult.abortPrefetch = function abortPrefetch(_requestId) {
  obj = ImageLoaderDefault;
  obj.abortRequest(_requestId);
};
resultResult.queryCache = function queryCache(arg0) {
  return obj(...arguments);
};
resultResult.resolveAssetSource = resolveAssetSourceDefault;
let closure_9 = get_hairlineWidth.create({ base: { overflow: "hidden" } });

export default resultResult;
