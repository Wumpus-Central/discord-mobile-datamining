// discord_app/utils/ImageUtils.tsx
import _modDef38 from "../../_runtime/metro/00038__.js";
import PQueueDefault from "../../_runtime/01475_PQueue.js";
import utils_ImageUtils from "native/ImageUtils.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import apply from "../../_runtime/metro/00012__.js";

require = fn;
function fit(size) {
  ({ width, height, maxWidth, maxHeight, minWidth } = size);
  if (minWidth === undefined) {
    minWidth = 0;
  }
  let num = size.minHeight;
  if (num === undefined) {
    num = 0;
  }
  if (width !== maxWidth) {
    let num2 = 1;
    let num3 = 1;
    if (width > maxWidth) {
      num3 = maxWidth / width;
    }
    const _Math = Math;
    const _Math2 = Math;
    const _Math3 = Math;
    const _Math4 = Math;
    const bound = Math.max(Math.round(width * num3), minWidth);
    const bound1 = Math.max(Math.round(height * num3), num);
    if (bound1 > maxHeight) {
      num2 = maxHeight / bound1;
    }
    const _Math5 = Math;
    const _Math6 = Math;
    width = Math.max(Math.round(bound * num2), minWidth);
    const _Math7 = Math;
    const _Math8 = Math;
    height = Math.max(Math.round(bound1 * num2), num);
  }
  return { width, height };
}
function getPalette(width, arg1, arg2) {
  const element = <canvas />;
  const context = element.getContext("2d");
  if (null == context) {
    return items;
  } else {
    let num2 = 128;
    let num = 128;
    if (0 !== width.width) {
      num = width.width;
    }
    element.width = num;
    if (0 !== width.height) {
      num2 = width.height;
    }
    element.height = num2;
    context.drawImage(width, 0, 0, num, num2);
    const data = context.getImageData(0, 0, num, num2).data;
    const result = num * num2;
    items = [];
    let num12 = 0;
    if (0 < result) {
      do {
        let result1 = 4 * num12;
        let tmp11 = data[result1];
        let tmp12 = data[result1 + 1];
        let tmp13 = data[result1 + 2];
        let tmp14 = data[result1 + 3];
        let tmp15 = undefined === tmp14;
        if (!tmp15) {
          tmp15 = tmp14 >= 125;
        }
        if (tmp15) {
          let tmp17 = tmp11 > 250 && tmp12 > 250 && tmp13 > 250;
          if (!tmp17) {
            let items1 = [tmp11, tmp12, tmp13];
            let arr = items.push(items1);
          }
        }
        num12 = num12 + arg2;
      } while (num12 < result);
    }
    const obj3 = PQueueDefault(items, arg1);
    if (typeof obj3 === "boolean") {
      let paletteResult = items;
    } else {
      paletteResult = obj3.palette();
    }
    return paletteResult;
  }
}
let closure_9 = async function _dataUrlToFile() {
  closure_3 = tmp4;
  closure_131_0 = closure_1;
  closure_131_1 = closure_2;
  closure_131_2 = await dataUrlToBlob(closure_0).arrayBuffer();
  const _File = File;
  items = [closure_131_2];
  const file = new File(items, closure_131_0, { type: closure_131_1 });
  return file;
};
function dataUrlToBlob(arg0) {
  let length;
  const first = arg0.split(",")[0];
  if (first.indexOf("base64") >= 0) {
    const _atob = atob;
    let atobResult = atob(arg0.split(",")[1]);
  } else {
    const _btoa = btoa;
    atobResult = btoa(arg0.split(",")[1]);
  }
  const str = arg0.split(",")[0];
  const uint8Array = new Uint8Array(atobResult.length);
  let num = 0;
  if (0 < atobResult.length) {
    do {
      uint8Array[num] = atobResult.charCodeAt(num);
      num = num + 1;
      length = atobResult.length;
    } while (num < length);
  }
  items = [uint8Array];
  const str2 = arg0.split(",")[0].split(":")[1];
  const blob = new Blob(items, { type: arg0.split(",")[0].split(":")[1].split(";")[0] });
  return blob;
}
let closure_11 = async function _isPNGAnimated(arg0) {
  let type = arg0;
  c2 = 0;
  c3 = 0;
  return (async (arg0, value) => {
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
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            let first;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            if (type.type != null) {
              first = str7.split(";")[0];
            }
            if ("image/png" !== first) {
              const _Error = Error;
              const error = new Error("File is not a PNG");
              throw error;
            } else {
              c2 = 1;
              c3 = 1;
              const obj1 = { value: obj6.text(), done: false };
              return obj1;
            }
            obj6 = type;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_129_0 = value;
          closure_129_1 = closure_129_0.indexOf("IDAT");
          let tmp9 = closure_129_1 > 0;
          if (tmp9) {
            const substr = closure_129_0.substring(0, closure_129_1);
            tmp9 = -1 !== substr.indexOf("acTL");
          }
          c3 = 3;
          obj = { value: tmp9, done: true };
          return obj;
        }
      } catch (tmp19) {
        c3 = tmp;
        throw tmp19;
      }
    }
  })();
};
let c5 = 2000;
let c6 = 1.6;
let items = [[0, 0, 0]];
apply.memoize(
  (src) =>
    new Promise((arg0, arg1) => {
      src = arg0;
      closure_1 = arg1;
      const image = new globalThis.Image();
      c2 = image;
      image.crossOrigin = "Anonymous";
      c2.onerror = (arg0) => {
        closure_1(arg0);
        c2.onload = null;
        c2.onerror = null;
        c2 = null;
      };
      c2.onload = () => {
        closure_0(getPalette(c2, 5, 10));
        c2.onload = null;
        c2.onerror = null;
        c2 = null;
      };
      c2.src = src;
    }),
);
let size = fn(2);
let result = size.fileFinishedImporting("utils/ImageUtils.tsx");

export { fit };
export const IMAGE_MAX_ZOOM = 2000;
export const zoomFit = function zoomFit(width, height) {
  const rounded = Math.round(0.65 * window.innerHeight);
  const bound = Math.min(rounded, Math.round(window.innerHeight));
  const rounded1 = Math.round(0.75 * window.innerWidth);
  const bound1 = Math.min(rounded1, Math.round(window.innerWidth));
  const size = { width, height, maxWidth: null, maxHeight: null };
  const bound2 = Math.min(bound, c5);
  size.maxWidth = Math.min(bound1, c5);
  size.maxHeight = bound2;
  return fit(size);
};
export const zoomScale = function zoomScale(arg0, arg1, arg2, arg3) {
  let num = 0;
  if (null != arg0) {
    num = 0;
    if (0 !== arg0) {
      num = 0;
      if (null != arg1) {
        num = 0;
        if (0 !== arg1) {
          num = arg0 / arg2;
        }
      }
    }
  }
  const bound = Math.max(2, num);
  let tmp3 = null != arg2;
  if (tmp3) {
    const _window = window;
    tmp3 = arg2 * bound > window.innerWidth * c6;
  }
  let num2 = 2;
  if (tmp3) {
    const _window2 = window;
    num2 = (window.innerWidth * c6) / arg2;
  }
  let tmp6 = null != arg3;
  if (tmp6) {
    const _window3 = window;
    tmp6 = arg3 * bound > window.innerHeight * c6;
  }
  let num3 = 2;
  if (tmp6) {
    const _window4 = window;
    num3 = (window.innerHeight * c6) / arg3;
  }
  const bound1 = Math.min(bound, num2, num3);
  return parseFloat(bound1.toFixed(2));
};
export const getRatio = function getRatio(height) {
  ({ width, maxWidth, maxHeight } = height);
  let num = 1;
  if (width > maxWidth) {
    num = maxWidth / width;
  }
  const rounded = Math.round(width * num);
  const rounded1 = Math.round(height.height * num);
  let num2 = 1;
  if (rounded1 > maxHeight) {
    num2 = maxHeight / rounded1;
  }
  return Math.min(num * num2, 1);
};
export const getCoverRatio = function getCoverRatio(arg0) {
  ({ width, height } = arg0);
  if (width === height) {
    return 1;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    return Math.min(Math.max(tmp / width, tmp2 / height), 1);
  }
};
export const hasDimensions = function hasDimensions(arg0) {
  ({ width, height } = arg0);
  let tmp = null != width;
  if (tmp) {
    tmp = 0 !== width;
  }
  if (tmp) {
    tmp = null != height;
  }
  if (tmp) {
    tmp = 0 !== height;
  }
  return tmp;
};
export const makeCssUrlString = function makeCssUrlString(arg0) {
  let str = "none";
  if (null != arg0) {
    str = "none";
    if ("" !== arg0) {
      const _HermesInternal = HermesInternal;
      str = "url(" + arg0 + ")";
    }
  }
  return str;
};
export { getPalette };
export const getPaletteForAvatar = function getPaletteForAvatar(automodAvatarURL) {
  return utils_ImageUtils.default.getPaletteForAvatarMobile(automodAvatarURL);
};
export const readFileAsBase64 = function readFileAsBase64(result) {
  closure_0 = result;
  return new Promise((data, arg1) => {
    closure_1 = arg1;
    const fileReader = new FileReader();
    const asDataURL = fileReader.readAsDataURL(data);
    fileReader.onload = () => {
      _modDef38(typeof fileReader.result === "string", "Result must be a string");
      data(fileReader.result);
    };
    fileReader.onerror = (arg0) => closure_1(arg0);
  });
};
export const dataUriFileSize = function dataUriFileSize(str) {
  const parts = str.split(";base64,");
  _modDef38(2 === parts.length, "Input data is not a valid image.");
  return atob(parts[1]).length;
};
export const dataUrlToFile = function dataUrlToFile() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { dataUrlToBlob };
export const isPNGAnimated = function isPNGAnimated() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const preloadImage = function preloadImage(src) {
  return new Promise((arg0, arg1) => {
    const image = new globalThis.Image();
    const listener = image.addEventListener("load", arg0);
    const listener1 = image.addEventListener("error", arg1);
    image.src = src;
  });
};
