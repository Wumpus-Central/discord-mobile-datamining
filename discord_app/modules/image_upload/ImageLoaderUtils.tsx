// discord_app/modules/image_upload/ImageLoaderUtils.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import URLUtilsDefault from "../../utils/URLUtils.tsx";
import AttachmentImageLadderExperiment from "AttachmentImageLadderExperiment.tsx";
import AttachmentImageLadder from "AttachmentImageLadder.tsx";
import LRUCacheDefault from "../../../_runtime/01444_LRUCache.js";
import _modDef1478 from "../../../_runtime/metro/01478__.js";
import ImageUtils from "../../utils/ImageUtils.tsx";
import react_nativeDefault from "../../utils/getDevicePixelRatio.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import Constants from "../../Constants.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

let c3, set;

let hasOwnProperty;
let metroRequire;
function handleImageLoad(arg0, callbacks, arg2) {
  let c0 = true;
  let closure_1 = callbacks;
  callbacks = callbacks.callbacks;
  closure_10.del(callbacks.url);
  if (null != callbacks) {
    const item = callbacks.forEach((fn) => fn(c0, size));
  }
}
function getSrcWithWidthAndHeight(quality) {
  let format;
  let height;
  let sourceHeight;
  let sourceWidth;
  let src;
  let targetHeight;
  let targetWidth;
  let tmp15Result2;
  let tmp6;
  let tmp8;
  let tmp9;
  let width;
  function getAttachmentLadderConfig(arg0) {
    try {
      const obj = { location: "ImageLoaderUtils.getSrcWithWidthAndHeight" };
      const attachmentImageLadderConfig = AttachmentImageLadderExperiment.getAttachmentImageLadderConfig(obj);
      let tmp5 = null;
      if (true === attachmentImageLadderConfig.enabled) {
        tmp5 = attachmentImageLadderConfig;
      }
      return tmp5;
    } catch (err) {
      return null;
    }
  }
  ({ src, sourceWidth, sourceHeight, format } = quality);
  ({ targetWidth, targetHeight } = quality);
  if (format === undefined) {
    format = null;
  }
  quality = quality.quality;
  if (quality === undefined) {
    quality = null;
  }
  let flag = quality.animated;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = quality.srcIsAnimated;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (!src.startsWith("data:image")) {
    let obj = URLUtilsDefault;
    if (!obj.isDiscordCdnUrl(src)) {
      let tmp5 = _slicedToArray(src.split("?"), 2);
      const items = [,];
      [arr[0], tmp6] = tmp5;
      const tmp2Result = _modDef1478;
      items[1] = tmp2Result.parse(tmp6);
      [tmp8, tmp9] = items;
      _slicedToArray(items, 2);
      if (null != format) {
        tmp9.format = format;
      }
      if (null != quality) {
        tmp9.quality = quality;
      }
      if (flag) {
        flag = flag2;
      }
      if (flag) {
        const isMatch = re7.test(src) || re8.test(src);
        flag = isMatch;
      }
      if (flag) {
        tmp9.animated = true;
      }
      if (re8.test(src)) {
        tmp9.format = "webp";
      }
      const size1 = { width: targetWidth, height: targetHeight, maxWidth: maxHeight, maxHeight };
      const obj3 = ImageUtils;
      ({ width, height } = obj3.fit(size1));
      obj3.fit(size1);
      if (width !== sourceWidth) {
        const tmp18 = getAttachmentLadderConfig("ImageLoaderUtils.getSrcWithWidthAndHeight");
        size = { width, height };
        if (null != tmp18) {
          const obj2 = {
            targetWidth: width,
            targetHeight: height,
            sourceWidth,
            sourceHeight,
            maxUpscale: tmp15Result2.getSnapDownMaxUpscale(tmp18, react_nativeDefault()),
          };
          const snapAttachmentDimensions = AttachmentImageLadder.snapAttachmentDimensions;
          AttachmentImageLadder;
          tmp15Result2 = AttachmentImageLadder;
          size = snapAttachmentDimensions(obj2);
        }
        const tmp20 = size.width === sourceWidth && size.height === sourceHeight;
        if (!tmp20) {
          tmp9.width = size.width | 0;
          tmp9.height = size.height | 0;
        }
      }
      let text = tmp8;
      const tmp2Result3 = _modDef12;
      if (!tmp2Result3.isEmpty(tmp9)) {
        _modDef1478;
        text = `${tmp8}?${obj8.stringify(tmp9)}`;
      }
      return text;
    }
  }
  return src;
}
({ NOOP: hasOwnProperty, MEDIA_PROXY_MAX_TARGET_RESOLUTION: metroRequire } = Constants);
const re7 = /\.webp($|\?|#)/i;
const re8 = /\.avif($|\?|#)/i;
let closure_9 = [
  16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024,
  1280, 1536, 2048, 3072, 4096,
];
let closure_10 = new LRUCacheDefault({ max: 1000 });
const tmp3 = new LRUCacheDefault({ max: 1000 });
let size = size_mod;
let result = size.fileFinishedImporting("modules/image_upload/ImageLoaderUtils.tsx");

export const getDevicePixelRatio = react_nativeDefault;
export const isImageLoaded = function isImageLoaded(arg0) {
  const value = closure_10.get(arg0);
  return null != value && value.loaded;
};
export const loadImage = function loadImage(url, bind) {
  let image;
  const f134902 = async () => {
    let c2;
    let closure_1;
    let tmp;
    if (c3 === 2) {
      let num13 = 3;
      let num14 = 3;
      c3 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      let tmp19 = value;
      let tmp20 = arg0;
      let num15 = 3;
      if (tmp3 === 3) {
        let num12 = 1;
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let num = 2;
          c3 = 2;
          let tmp4 = backoff;
          let num2 = 0;
          if (0 === backoff) {
            let num7 = 1;
            if (arg0 === 1) {
              let num10 = 3;
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              let num9 = 3;
              c3 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              backoff = tmp;
              let tmp17 = backoff;
              let obj2 = tmp(backoff[6]);
              backoff = 1;
              let num8 = 1;
              c3 = 1;
              let obj5 = { value: obj2.isOnline(), done: false };
              return obj5;
            }
          } else {
            let num16 = 1;
            if (arg0 === 1) {
              let num6 = 3;
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              let num5 = 3;
              c3 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              let num3 = 5;
              if (closure_129_2.fails < 5) {
                let tmp12 = backoff;
                let failResult = closure_129_2.fail(f154177);
              } else {
                let flag = true;
                let tmp11 = closure_1_11(true, closure_129_0, closure_129_1);
              }
              let num4 = 3;
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } catch (tmp18) {
          let num11 = 3;
          c3 = 3;
          throw tmp18;
        }
      }
    }
  };
  let closure_0 = url;
  let value = closure_10.get(url);
  let obj3 = value;
  if (null != value) {
    let fn;
    if (value.loaded) {
      if (null != bind) {
        const obj2 = image(1468);
        const awaitOnlineResult = obj2.awaitOnline();
        awaitOnlineResult.then(() => {
          let url;
          const tmp2 = null != obj3 && null != obj3.callbacks;
          if (tmp2) {
            const callbacks = obj3.callbacks;
            const item = callbacks.forEach((fn) => {
              if (null != obj3) {
                fn(false, tmp);
              } else {
                const obj = { url, loaded: true };
                fn(true, obj);
              }
            });
          }
        });
      }
      fn = closure_5;
    }
    return fn;
  }
  if (null == value) {
    obj3 = { url, loaded: false };
    const result = closure_10.set(url, obj3);
    const self5 = this;
    const self6 = this;
    image = new globalThis.Image();
    let backoff;
    if (null == obj3.backoff) {
      let tmp2 = image;
      const self = this;
      const self2 = this;
      obj3.backoff = new image(569)();
      const tmp4 = new image(569)();
    }
    backoff = obj3.backoff;
    image.onerror = _asyncToGenerator(f134902);
    image.onload = () => {
      let callbacks;
      let url;
      backoff = backoff.backoff;
      if (null != backoff) {
        backoff.succeed();
      }
      let c0 = false;
      ({ callbacks, url } = backoff);
      const size = { url, loaded: true, width: image.width, height: image.height };
      const result = closure_2_10.set(url, size);
      if (null != callbacks) {
        const item = callbacks.forEach((fn) => fn(c0, size));
      }
    };
    image.src = obj3.url;
    value = obj3;
  }
  if (null != bind) {
    const bindResult = bind.bind(null);
    if (null == value.callbacks) {
      const _Set = Set;
      const self3 = this;
      const self4 = this;
      value.callbacks = new Set();
      set = new Set();
    }
    let callbacks = value.callbacks;
    callbacks.add(bindResult);
  }
  fn = () => {
    const tmp2 = null != bindResult && null != obj3;
    if (tmp2) {
      if (null != obj3.callbacks) {
        const callbacks = obj3.callbacks;
        callbacks.delete(bindResult);
      }
      if (null != obj3.backoff) {
        const backoff = obj3.backoff;
        backoff.cancel();
      }
    }
  };
};
export const getBestMediaProxySize = function getBestMediaProxySize(size, arg1) {
  let closure_0 = size;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    const found = closure_9.filter((item) => item <= closure_0);
    const arr = found.pop();
    if (null != arr) {
      if (size / arr <= 1.25) {
        return arr;
      }
    }
  }
  let found1 = closure_9.find((item) => closure_0 <= item);
  if (found1 == null) {
    found1 = closure_9[closure_9.length - 1];
  }
  return found1;
};
export { getSrcWithWidthAndHeight };
export const getImageSrc = function getImageSrc(src) {
  let height;
  let maxHeight;
  let maxWidth;
  let ratio;
  let width;
  ({ width, height, maxWidth, maxHeight, ratio } = src);
  src = src.src;
  if (ratio === undefined) {
    ratio = 1;
  }
  let format = src.format;
  if (format === undefined) {
    format = null;
  }
  let quality = src.quality;
  if (quality === undefined) {
    quality = null;
  }
  let flag = src.animated;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = src.srcIsAnimated;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let rounded1 = height;
  let rounded = width;
  if (ratio < 1) {
    const _Math = Math;
    rounded = Math.round(width * ratio);
    const _Math2 = Math;
    rounded1 = Math.round(height * ratio);
  }
  let bound = rounded;
  if (null != maxWidth) {
    const _Math3 = Math;
    bound = Math.min(rounded, maxWidth);
  }
  let bound1 = rounded1;
  if (null != maxHeight) {
    const _Math4 = Math;
    bound1 = Math.min(rounded1, maxHeight);
  }
  const tmp10 = react_nativeDefault();
  const obj = {
    src,
    sourceWidth: width,
    sourceHeight: height,
    targetWidth: bound * tmp10,
    targetHeight: bound1 * tmp10,
    format,
    quality,
    animated: flag,
    srcIsAnimated: flag2,
  };
  return getSrcWithWidthAndHeight(obj);
};
