// === Module 1481: ImageUtils ===

// Module 1481 (ImageUtils)
import _modDef38 from "module_38" /* 38 */;
import quantizeDefault from "quantize" /* 1482 */;
import utils_ImageUtils from "utils/ImageUtils" /* 1483 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import module_12 from "module_12" /* 12 */;
import size_mod from "module_2" /* 2 */;

let closure_3;

function fit(size) {
  let height;
  let height1;
  let maxHeight;
  let maxWidth;
  let minWidth;
  let width;
  let width1;
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
    width1 = Math.max(Math.round(bound * num2), minWidth);
    const _Math7 = Math;
    const _Math8 = Math;
    height1 = Math.max(Math.round(bound1 * num2), num);
  } else {
    width1 = width;
    height1 = height;
  }
  return { width: width1, height: height1 };
}
function getPalette(width, arg1, arg2) {
  const element = <canvas />;
  const context = element.getContext("2d");
  if (null == context) {
    return items;
  } else {
    let paletteResult;
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
    const obj3 = quantizeDefault(items, arg1);
    if (typeof obj3 === "boolean") {
      paletteResult = items;
    } else {
      paletteResult = obj3.palette();
    }
    return paletteResult;
  }
}
let obj = function _dataUrlToFile() {
  obj = _asyncToGenerator(async (arg0, type, arg2) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
    let c4 = 0;
    c5 = 0;
    return (async function(arg0, value, arg2) {
      let obj4;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp3;
              closure_0 = type;
              type = closure_2;
              closure_2 = undefined;
              c4 = 1;
              c5 = 1;
              const obj5 = { value: obj4.arrayBuffer(), done: false };
              obj4 = dataUrlToBlob(closure_0);
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_2 = value;
            const _File = File;
            items = [closure_2];
            const self = this;
            const self2 = this;
            obj = { type };
            const file = new File(items, closure_0, obj);
            c5 = 3;
            return { value: file, done: true };
          }
        } catch (tmp17) {
          c5 = 3;
          throw tmp17;
        }
      }
    })();
  });
  return obj(...arguments);
};
function dataUrlToBlob(arg0) {
  let atobResult;
  let length;
  const first = arg0.split(",")[0];
  if (first.indexOf("base64") >= 0) {
    const _atob = atob;
    atobResult = atob(arg0.split(",")[1]);
  } else {
    const _btoa = btoa;
    atobResult = btoa(arg0.split(",")[1]);
  }
  const str = arg0.split(",")[0];
  const str2 = str.split(":")[1];
  const first1 = str2.split(";")[0];
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
  obj = { type: first1 };
  const blob = new Blob(items, obj);
  return blob;
}
obj = function _isPNGAnimated() {
  obj = _asyncToGenerator(async function(arg0) {
    let c2;
    let c3;
    let first;
    let closure_0 = arg0;
    let closure_1 = tmp;
    const obj6 = closure_0;
    if (closure_0.type != null) {
      first = str7.split(";")[0];
    }
    if ("image/png" !== first) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("File is not a PNG");
      throw error;
    }
    await obj6.text();
    closure_0 = value;
    closure_1 = closure_0.indexOf("IDAT");
    let tmp8 = closure_1 > 0;
    if (tmp8) {
      const substr = closure_0.substring(0, closure_1);
      tmp8 = -1 !== substr.indexOf("acTL");
    }
    return tmp8;
  });
  return obj(...arguments);
};
let c5 = 2000;
let c6 = 1.6;
let items = [[0, 0, 0]];
module_12.memoize((src) => {
  const promise = new Promise((arg0, arg1) => {
    src = arg0;
    let closure_1 = arg1;
    let image = new globalThis.Image();
    image.crossOrigin = "Anonymous";
    image.onerror = (arg0) => {
      closure_1(arg0);
      image.onload = null;
      image.onerror = null;
      image = null;
    };
    image.onload = () => {
      closure_0(closure_2_8(image, 5, 10));
      image.onload = null;
      image.onerror = null;
      image = null;
    };
    image.src = src;
  });
  return promise;
});
let size = size_mod;
let result = size.fileFinishedImporting("utils/ImageUtils.tsx");

export { fit };
export const IMAGE_MAX_ZOOM = 2000;
export const zoomFit = function zoomFit(width, height) {
  let bound;
  let min2Result;
  const rounded = Math.round(0.65 * window.innerHeight);
  const min2 = Math.min;
  const minResult = min(rounded, Math.round(window.innerHeight));
  const rounded1 = Math.round(0.75 * window.innerWidth);
  size = { width, height, maxWidth: Math.min(min2Result, c5), maxHeight: bound };
  min2Result = min2(rounded1, Math.round(window.innerWidth));
  bound = Math.min(minResult, c5);
  return fit(size);
};
export const zoomScale = function zoomScale(arg0, arg1, arg2, arg3) {
  let num = 0;
  const _Math = Math;
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
  const maxResult = max(2, num);
  let tmp3 = null != arg2;
  if (tmp3) {
    const _window = window;
    tmp3 = arg2 * maxResult > window.innerWidth * c6;
  }
  let num2 = 2;
  if (tmp3) {
    const _window2 = window;
    num2 = window.innerWidth * c6 / arg2;
  }
  let tmp6 = null != arg3;
  if (tmp6) {
    const _window3 = window;
    tmp6 = arg3 * maxResult > window.innerHeight * c6;
  }
  let num3 = 2;
  if (tmp6) {
    const _window4 = window;
    num3 = window.innerHeight * c6 / arg3;
  }
  const bound = Math.min(maxResult, num2, num3);
  return parseFloat(bound.toFixed(2));
};
export const getRatio = function getRatio(height) {
  let maxHeight;
  let maxWidth;
  let width;
  ({ width, maxWidth, maxHeight } = height);
  let num = 1;
  height = height.height;
  if (width > maxWidth) {
    num = maxWidth / width;
  }
  const rounded = Math.round(width * num);
  const rounded1 = Math.round(height * num);
  let num2 = 1;
  if (rounded1 > maxHeight) {
    num2 = maxHeight / rounded1;
  }
  return Math.min(num * num2, 1);
};
export const getCoverRatio = function getCoverRatio(arg0) {
  let height;
  let width;
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
  let height;
  let width;
  ({ width, height } = arg0);
  return null != width && 0 !== width && null != height && 0 !== height;
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
export const getPaletteForAvatar = function getPaletteForAvatar(src) {
  const _default = utils_ImageUtils.default;
  return _default.getPaletteForAvatarMobile(src);
};
export const readFileAsBase64 = function readFileAsBase64(value) {
  let closure_0 = value;
  const promise = new Promise((data, arg1) => {
    let closure_0 = data;
    let closure_1 = arg1;
    const fileReader = new FileReader();
    const asDataURL = fileReader.readAsDataURL(closure_0);
    fileReader.onload = () => {
      closure_2_1(closure_2_2[4])(typeof fileReader.result === "string", "Result must be a string");
      closure_0(fileReader.result);
    };
    fileReader.onerror = (arg0) => closure_1(arg0);
  });
  return promise;
};
export const dataUriFileSize = function dataUriFileSize(base64) {
  const parts = base64.split(";base64,");
  _modDef38(2 === parts.length, "Input data is not a valid image.");
  return atob(parts[1]).length;
};
export const dataUrlToFile = function dataUrlToFile() {
  return obj(...arguments);
};
export { dataUrlToBlob };
export const isPNGAnimated = function isPNGAnimated() {
  return obj(...arguments);
};
export const preloadImage = function preloadImage(src) {
  const promise = new Promise((arg0, arg1) => {
    const image = new globalThis.Image();
    const listener = image.addEventListener("load", arg0);
    const listener1 = image.addEventListener("error", arg1);
    image.src = src;
  });
  return promise;
};