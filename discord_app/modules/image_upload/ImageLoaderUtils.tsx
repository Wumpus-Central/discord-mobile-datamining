// === Module 1430: ImageLoaderUtils ===

// Module 1430 (ImageLoaderUtils)
import _modDef12 from "module_12" /* 12 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import AttachmentImageLadderExperiment from "AttachmentImageLadderExperiment" /* 1431 */;
import AttachmentImageLadder from "AttachmentImageLadder" /* 1432 */;
import privDefault from "priv" /* 1437 */;
import _modDef1471 from "module_1471" /* 1471 */;
import ImageUtils from "ImageUtils" /* 1474 */;
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 1878 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function handleImageLoad(arg0, callbacks, arg2) {
  c0 = true;
  closure_1 = callbacks;
  callbacks = callbacks.callbacks;
  closure_10.del(callbacks.url);
  if (null != callbacks) {
    const item = callbacks.forEach((fn) => fn(c0, size));
  }
}
function getSrcWithWidthAndHeight(quality) {
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
      const items = [, ];
      [arr[0], tmp6] = _slicedToArray(src.split("?"), 2);
      let tmp2Result = _modDef1471;
      items[1] = tmp2Result.parse(tmp6);
      let tmp5 = _slicedToArray(src.split("?"), 2);
      [tmp8, tmp9] = _slicedToArray(items, 2);
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
        let isMatch = re7.test(src);
        if (!isMatch) {
          isMatch = re8.test(src);
        }
        flag = isMatch;
      }
      if (flag) {
        tmp9.animated = true;
      }
      if (re8.test(src)) {
        tmp9.format = "webp";
      }
      const tmp7 = _slicedToArray(items, 2);
      let size = { width: targetWidth, height: targetHeight, maxWidth: maxHeight, maxHeight };
      ({ width, height } = ImageUtils.fit(size));
      if (width !== sourceWidth) {
        const tmp18 = (function getAttachmentLadderConfig(arg0) {
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
        })("ImageLoaderUtils.getSrcWithWidthAndHeight");
        size = { width, height };
        if (null != tmp18) {
          obj = { targetWidth: width, targetHeight: height, sourceWidth, sourceHeight, maxUpscale: null };
          const tmp15Result = AttachmentImageLadder;
          obj.maxUpscale = tmp15Result.getSnapDownMaxUpscale(tmp18, getDevicePixelRatioDefault());
          size = tmp15Result.snapAttachmentDimensions(obj);
        }
        if (!tmp19) {
          tmp9.width = size.width | 0;
          tmp9.height = size.height | 0;
        }
        tmp19 = size.width === sourceWidth && size.height === sourceHeight;
      }
      tmp2Result = _modDef12;
      let text = tmp8;
      if (!tmp2Result.isEmpty(tmp9)) {
        _modDef1471;
        text = `${tmp8}?${obj9.stringify(tmp9)}`;
      }
      return text;
    }
  }
  return src;
}
const Constants = fn(1074);
({ NOOP: hasOwnProperty, MEDIA_PROXY_MAX_TARGET_RESOLUTION: metroRequire } = Constants);
const re7 = /\.webp($|\?|#)/i;
const re8 = /\.avif($|\?|#)/i;
let closure_9 = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096];
let closure_10 = new privDefault({ max: 1000 });
let size = fn(2);
let result = size.fileFinishedImporting("modules/image_upload/ImageLoaderUtils.tsx");

export const getDevicePixelRatio = getDevicePixelRatioDefault;
export const isImageLoaded = function isImageLoaded(arg0) {
  value = closure_10.get(arg0);
  return null != value && value.loaded;
};
export const loadImage = function loadImage(url, bind) {
  value = closure_10.get(url);
  let obj = value;
  if (null != value) {
    if (value.loaded) {
      if (null != bind) {
        const obj2 = image(obj[6]);
        image(obj[6]).awaitOnline().then(() => {
          if (tmp2) {
            const callbacks = obj.callbacks;
            const item = callbacks.forEach((fn) => {
              if (null != closure_1_2) {
                fn(false, tmp);
              } else {
                obj = { url, loaded: true };
                fn(true, obj);
              }
            });
          }
          tmp2 = null != obj && null != obj.callbacks;
        });
        const awaitOnlineResult = image(obj[6]).awaitOnline();
      }
      let fn = closure_5;
    }
    return fn;
  }
  if (null == value) {
    obj = { url, loaded: false };
    const result = obj.set(url, obj);
    image = new globalThis.Image();
    closure_129_0 = obj;
    closure_129_1 = image;
    let backoff;
    if (null == obj.backoff) {
      const tmp6 = new image(obj[5])();
      obj.backoff = tmp6;
    }
    backoff = obj.backoff;
    image.onerror = asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          c3 = 2;
          if (0 === backoff) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              backoff = tmp2;
              let obj1 = tmp2(backoff[6]);
              backoff = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.isOnline();
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (closure_129_2.fails < 5) {
              closure_129_2.fail(() => {
                image = new globalThis.Image();
                backoff = undefined;
                if (null == backoff.backoff) {
                  let tmp7 = new closure_1(c2[5])();
                  tmp.backoff = tmp7;
                }
                backoff = tmp.backoff;
                image.onerror = closure_2_4(async () => {
                  if (c3 === 2) {
                    c3 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp4 === 3) {
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
                      c3 = 2;
                      if (0 === backoff) {
                        if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c3 = 3;
                          obj = { value, done: true };
                          return obj;
                        } else {
                          backoff = tmp2;
                          let obj1 = tmp2(backoff[6]);
                          backoff = 1;
                          c3 = 1;
                          obj1 = { value: null, done: false };
                          obj1.value = obj1.isOnline();
                          return obj1;
                        }
                      } else if (arg0 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        if (closure_129_2.fails < 5) {
                          closure_129_2.fail(() => {
                            image = new globalThis.Image();
                            backoff = undefined;
                            if (null == backoff.backoff) {
                              let tmp7 = new closure_1(c2[5])();
                              tmp.backoff = tmp7;
                            }
                            backoff = tmp.backoff;
                            image.onerror = closure_2_4(/* F108420 */ function() { ... });
                            image.onload = function onload() { ... };
                            image.src = backoff.url;
                          });
                        } else {
                          closure_1_11(true, closure_129_0, closure_129_1);
                        }
                        c3 = 3;
                      }
                    } catch (tmp19) {
                      c3 = tmp;
                      throw tmp19;
                    }
                  }
                });
                image.onload = () => {
                  backoff = backoff.backoff;
                  if (null != backoff) {
                    backoff.succeed();
                  }
                  c0 = false;
                  ({ callbacks, url } = backoff);
                  const size = { url, loaded: true, width: image.width, height: image.height };
                  const result = closure_2_10.set(url, size);
                  if (null != callbacks) {
                    const item = callbacks.forEach((fn) => fn(c0, size));
                  }
                };
                image.src = backoff.url;
              });
            } else {
              closure_1_11(true, closure_129_0, closure_129_1);
            }
            c3 = 3;
          }
        } catch (tmp19) {
          c3 = tmp;
          throw tmp19;
        }
      }
    });
    image.onload = () => {
      backoff = backoff.backoff;
      if (null != backoff) {
        backoff.succeed();
      }
      c0 = false;
      ({ callbacks, url } = backoff);
      const size = { url, loaded: true, width: image.width, height: image.height };
      const result = closure_2_10.set(url, size);
      if (null != callbacks) {
        const item = callbacks.forEach((fn) => fn(c0, size));
      }
    };
    image.src = obj.url;
    value = obj;
  }
  if (null != bind) {
    const bindResult = bind.bind(null);
    image = bindResult;
    if (null == value.callbacks) {
      const _Set = Set;
      const set = new Set();
      value.callbacks = set;
    }
    let callbacks = value.callbacks;
    callbacks.add(bindResult);
  }
  fn = () => {
    let tmp2 = null != image;
    if (tmp2) {
      tmp2 = null != obj;
    }
    if (tmp2) {
      if (null != obj.callbacks) {
        const callbacks = obj.callbacks;
        callbacks.delete(image);
      }
      if (null != obj.backoff) {
        const backoff = obj.backoff;
        backoff.cancel();
      }
    }
  };
};
export const getBestMediaProxySize = function getBestMediaProxySize(size, arg1) {
  closure_0 = size;
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
export const getImageSrc = function getImageSrc(format) {
  ({ width, height, maxWidth, maxHeight, ratio } = format);
  if (ratio === undefined) {
    ratio = 1;
  }
  format = format.format;
  if (format === undefined) {
    format = null;
  }
  let quality = format.quality;
  if (quality === undefined) {
    quality = null;
  }
  let flag = format.animated;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = format.srcIsAnimated;
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
  const tmp10 = getDevicePixelRatioDefault();
  return getSrcWithWidthAndHeight({ src: format.src, sourceWidth: width, sourceHeight: height, targetWidth: bound * tmp10, targetHeight: bound1 * tmp10, format, quality, animated: flag, srcIsAnimated: flag2 });
};