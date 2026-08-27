// === Module 1469: handleImageLoad ===

// Module 1469 (handleImageLoad)
import privDefault from "priv" /* 1405 */;
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1487 */;
import fit from "fit" /* 1491 */;
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 1896 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import ME from "ME" /* 676 */;

require = arg1;
function handleImageLoad(arg0, callbacks) {
  c0 = true;
  closure_1 = callbacks;
  callbacks = callbacks.callbacks;
  store.del(callbacks.url);
  if (null != callbacks) {
    const item = callbacks.forEach((arg0) => arg0(c0, obj));
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
    let obj = isDiscordProxiedAssetUrlDefault;
    if (!obj.isDiscordCdnUrl(src)) {
      const items = [, ];
      [arr[0], tmp6] = callback(src.split("?"), 2);
      let tmp2Result = tmp2(1484);
      items[1] = tmp2Result.parse(tmp6);
      let tmp5 = callback(src.split("?"), 2);
      [tmp8, tmp9] = callback(items, 2);
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
        let isMatch = regex.test(src);
        if (!isMatch) {
          isMatch = regex2.test(src);
        }
        flag = isMatch;
      }
      if (flag) {
        tmp9.animated = true;
      }
      if (regex2.test(src)) {
        tmp9.format = "webp";
      }
      const tmp7 = callback(items, 2);
      obj = { width: null, height: null, maxWidth: null, maxHeight: null };
      obj[0] = targetWidth;
      obj[1] = targetHeight;
      obj[2] = closure_6;
      obj[3] = closure_6;
      const obj3 = fit;
      ({ width, height } = fit.fit(obj));
      if (width !== sourceWidth) {
        const tmp18 = (function getAttachmentLadderConfig(arg0) {
          try {
            const obj = { location: null };
            obj[0] = "ImageLoaderUtils.getSrcWithWidthAndHeight";
            const attachmentImageLadderConfig = callback(table[3]).getAttachmentImageLadderConfig(obj);
            let tmp5 = null;
            if (true === attachmentImageLadderConfig.enabled) {
              tmp5 = attachmentImageLadderConfig;
            }
            return tmp5;
          } catch (err) {
            return null;
          }
        })("ImageLoaderUtils.getSrcWithWidthAndHeight");
        let size = { width: null, height: null };
        size[0] = width;
        size[1] = height;
        if (null != tmp18) {
          let tmp15Result = tmp15(1471);
          obj = { targetWidth: null, targetHeight: null, sourceWidth: null, sourceHeight: null, maxUpscale: null };
          obj[0] = width;
          obj[1] = height;
          obj[2] = sourceWidth;
          obj[3] = sourceHeight;
          tmp15Result = tmp15(1471);
          obj[4] = tmp15Result.getSnapDownMaxUpscale(tmp18, tmp2(1896)());
          size = tmp15Result.snapAttachmentDimensions(obj);
        }
        if (!tmp19) {
          tmp9.width = size.width | 0;
          tmp9.height = size.height | 0;
        }
        tmp19 = size.width === sourceWidth && size.height === sourceHeight;
      }
      tmp2Result = tmp2(12);
      let text = tmp8;
      if (!tmp2Result.isEmpty(tmp9)) {
        tmp2(1484);
        text = `${tmp8}?${obj9.stringify(tmp9)}`;
      }
      return text;
    }
  }
  return src;
}
({ NOOP: c5, MEDIA_PROXY_MAX_TARGET_RESOLUTION: closure_6 } = ME);
const re7 = /\.webp($|\?|#)/i;
const re8 = /\.avif($|\?|#)/i;
let closure_9 = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096];
let closure_10 = new privDefault({ max: 1000 });
const tmp3 = new privDefault({ max: 1000 });
let result = require("set").fileFinishedImporting("modules/image_upload/ImageLoaderUtils.tsx");

export const getDevicePixelRatio = getDevicePixelRatioDefault;
export const isImageLoaded = function isImageLoaded(arg0) {
  const value = store.get(arg0);
  return null != value && value.loaded;
};
export const loadImage = function loadImage(arg0, bind) {
  let obj = arg0;
  obj = store;
  let value = store.get(arg0);
  let backoff = value;
  if (null != value) {
    if (value.loaded) {
      if (null != bind) {
        const obj2 = image(backoff[6]);
        image(backoff[6]).awaitOnline().then(() => {
          if (tmp2) {
            const callbacks = tmp.callbacks;
            const item = callbacks.forEach((arg0) => {
              if (null != closure_2) {
                arg0(false, tmp);
              } else {
                obj = { url: null, loaded: true };
                obj[0] = closure_0;
                arg0(true, obj);
              }
            });
          }
        });
        const awaitOnlineResult = image(backoff[6]).awaitOnline();
      }
      let fn = closure_5;
    }
    return fn;
  }
  if (null == value) {
    obj = { url: null, loaded: false };
    obj[0] = arg0;
    backoff = obj;
    const result = obj.set(arg0, obj);
    image = undefined;
    image = new globalThis.Image();
    backoff = undefined;
    if (null == obj.backoff) {
      const tmp6 = new image(backoff[5])();
      obj.backoff = tmp6;
    }
    backoff = obj.backoff;
    image.onerror = callback2(function*() {
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
              closure_1 = tmp2;
              closure_0 = tmp2;
              let obj1 = closure_1_1(c2[6]);
              c2 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.isOnline();
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            if (c2.fails < 5) {
              c2.fail(() => {
                image = new globalThis.Image();
                backoff = undefined;
                if (null == tmp2.backoff) {
                  let tmp7 = new tmp22(table[5])();
                  tmp.backoff = tmp7;
                }
                backoff = tmp.backoff;
                image.onerror = closure_1_4(function*() {
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
                          closure_1 = tmp2;
                          closure_0 = tmp2;
                          let obj1 = closure_1_1(c2[6]);
                          c2 = 1;
                          c3 = 1;
                          obj1 = { value: null, done: false };
                          obj1[0] = obj1.isOnline();
                          return obj1;
                        }
                      } else if (arg0 === 1) {
                        c3 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        if (c2.fails < 5) {
                          c2.fail(() => {
                            image = new globalThis.Image();
                            backoff = undefined;
                            if (null == tmp2.backoff) {
                              let tmp7 = new tmp22(table[5])();
                              tmp.backoff = tmp7;
                            }
                            backoff = tmp.backoff;
                            image.onerror = closure_1_4(/* F105471 */ function() { ... });
                            image.onload = function onload() { ... };
                            image.src = tmp2.url;
                          });
                        } else {
                          closure_1_11(true, closure_0, closure_1);
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
                  backoff = false;
                  let obj = tmp;
                  ({ callbacks, url } = backoff);
                  obj = { url, loaded: true, width: obj.width, height: obj.height };
                  const result = closure_1_10.set(url, obj);
                  if (null != callbacks) {
                    const item = callbacks.forEach((arg0) => arg0(c0, obj));
                  }
                };
                image.src = tmp2.url;
              });
            } else {
              closure_1_11(true, closure_0, closure_1);
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
      backoff = false;
      let obj = tmp;
      ({ callbacks, url } = backoff);
      obj = { url, loaded: true, width: obj.width, height: obj.height };
      const result = closure_1_10.set(url, obj);
      if (null != callbacks) {
        const item = callbacks.forEach((arg0) => arg0(c0, obj));
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
      tmp2 = null != backoff;
    }
    if (tmp2) {
      if (null != backoff.callbacks) {
        const callbacks = tmp4.callbacks;
        callbacks.delete(image);
      }
      if (null != backoff.backoff) {
        backoff = tmp4.backoff;
        backoff.cancel();
      }
    }
  };
};
export const getBestMediaProxySize = function getBestMediaProxySize(size, closure_12) {
  closure_0 = size;
  let flag = closure_12;
  if (closure_12 === undefined) {
    flag = false;
  }
  if (flag) {
    const found = closure_9.filter((arg0) => arg0 <= closure_0);
    const arr = found.pop();
    if (null != arr) {
      if (size / arr <= 1.25) {
        return arr;
      }
    }
  }
  let found1 = closure_9.find((arg0) => closure_0 <= arg0);
  if (found1 == null) {
    found1 = arr2[arr2.length - 1];
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