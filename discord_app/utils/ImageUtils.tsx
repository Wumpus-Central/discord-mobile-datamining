// === Module 1471: fit ===

// Module 1471 (fit)
import set from "set";
import importDefaultResult from "apply";

const require = arg1;
function fit(minHeight) {
  let height;
  let maxHeight;
  let maxWidth;
  let minWidth;
  let width;
  ({ width, height, maxWidth, maxHeight, minWidth } = minHeight);
  if (minWidth === undefined) {
    minWidth = 0;
  }
  let num = minHeight.minHeight;
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
function getPalette(width) {
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
        let tmp16 = num12;
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
    const obj3 = importDefault(1472)(items, arg1);
    if (typeof obj3 === "T") {
      let paletteResult = items;
    } else {
      paletteResult = obj3.palette();
    }
    return paletteResult;
  }
}
function _dataUrlToFile() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let set = tmp4;
              let closure_0 = closure_1;
              closure_1 = closure_2;
              closure_2 = undefined;
              let obj3 = outer1_10(closure_0);
              c4 = 1;
              c5 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj3.arrayBuffer();
              return obj1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_2 = arg1;
            const _File = File;
            const items = [closure_2];
            obj = { type: null };
            obj[0] = closure_1;
            const file = new File(items, closure_0, obj);
            c5 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = file;
            return obj3;
          }
        } catch (tmp20) {
          c5 = tmp;
          throw tmp20;
        }
      }
    })();
  });
  const _dataUrlToFile = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
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
  const items = [uint8Array];
  const str2 = arg0.split(",")[0].split(":")[1];
  const blob = new Blob(items, { type: arg0.split(",")[0].split(":")[1].split(";")[0] });
  return blob;
}
function _isPNGAnimated() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
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
              let closure_1 = tmp2;
              let first;
              let closure_0;
              closure_1 = undefined;
              if (closure_0.type != null) {
                first = str7.split(";")[0];
              }
              if ("image/png" !== first) {
                const _Error = Error;
                const error = new Error("File is not a PNG");
                throw error;
              } else {
                c2 = 1;
                c3 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = obj6.text();
                return obj1;
              }
              obj6 = closure_0;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = arg1;
            closure_1 = closure_0.indexOf("IDAT");
            let tmp9 = closure_1 > 0;
            if (tmp9) {
              const substr = closure_0.substring(0, closure_1);
              tmp9 = -1 !== substr.indexOf("acTL");
            }
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = tmp9;
            return obj;
          }
        } catch (tmp19) {
          c3 = tmp;
          throw tmp19;
        }
      }
    })();
  });
  const _isPNGAnimated = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c5 = 2000;
let c6 = 1.6;
let items = [[0, 0, 0]];
require("apply").memoize((arg0) => {
  let closure_0 = arg0;
  return new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const image = new globalThis.Image();
    image.crossOrigin = "Anonymous";
    image.onerror = (arg0) => {
      callback2(arg0);
      c2.onload = null;
      c2.onerror = null;
      c2 = null;
    };
    image.onload = () => {
      callback(outer1_8(c2, 5, 10));
      c2.onload = null;
      c2.onerror = null;
      c2 = null;
    };
    image.src = closure_0;
  });
});
let result = require("getSrcWithWidthAndHeight").fileFinishedImporting("utils/ImageUtils.tsx");

export { fit };
export const IMAGE_MAX_ZOOM = 2000;
export const zoomFit = function zoomFit(width, height) {
  const rounded = Math.round(0.65 * window.innerHeight);
  const bound = Math.min(rounded, Math.round(window.innerHeight));
  const rounded1 = Math.round(0.75 * window.innerWidth);
  const bound1 = Math.min(rounded1, Math.round(window.innerWidth));
  const obj = { width, height, maxWidth: null, maxHeight: null };
  const bound2 = Math.min(bound, c5);
  obj[2] = Math.min(bound1, c5);
  obj[3] = bound2;
  return fit(obj);
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
    num2 = window.innerWidth * c6 / arg2;
  }
  let tmp6 = null != arg3;
  if (tmp6) {
    const _window3 = window;
    tmp6 = arg3 * bound > window.innerHeight * c6;
  }
  let num3 = 2;
  if (tmp6) {
    const _window4 = window;
    num3 = window.innerHeight * c6 / arg3;
  }
  const bound1 = Math.min(bound, num2, num3);
  return parseFloat(bound1.toFixed(2));
};
export const getRatio = function getRatio(height) {
  let maxHeight;
  let maxWidth;
  let width;
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
export const getPaletteForAvatar = function getPaletteForAvatar(closure_0) {
  return require(1473) /* getSrcWithWidthAndHeight */.default.getPaletteForAvatarMobile(closure_0);
};
export const readFileAsBase64 = function readFileAsBase64(arg0) {
  let closure_0 = arg0;
  return new Promise((closure_0) => {
    let closure_1 = arg1;
    const fileReader = new FileReader();
    const asDataURL = fileReader.readAsDataURL(closure_0);
    fileReader.onload = () => {
      callback2(fileReader[4])(typeof fileReader.result === "y", "Result must be a string");
      callback(fileReader.result);
    };
    fileReader.onerror = (arg0) => callback2(arg0);
  });
};
export const dataUriFileSize = function dataUriFileSize(str) {
  const parts = str.split(";base64,");
  importDefault(38)(2 === parts.length, "Input data is not a valid image.");
  return atob(parts[1]).length;
};
export const dataUrlToFile = function dataUrlToFile() {
  const self = this;
  const apply = _dataUrlToFile.apply;
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
  const apply = _isPNGAnimated.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const preloadImage = function preloadImage(arg0) {
  let closure_0 = arg0;
  return new Promise((arg0, arg1) => {
    const image = new globalThis.Image();
    const listener = image.addEventListener("load", arg0);
    const listener1 = image.addEventListener("error", arg1);
    image.src = closure_0;
  });
};