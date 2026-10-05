// === Module 331: _slicedToArray ===

// Module 331 (_slicedToArray)
import _slicedToArray from "_slicedToArray" /* 32 */;

let size;


export const getImageSourcesFromImageProps = function getImageSourcesFromImageProps(source) {
  let height;
  let referrerPolicy;
  let src;
  let srcSet;
  let tmp2;
  let width;
  let tmp = width(height[1])(source.source);
  ({ referrerPolicy, src, srcSet, width } = source);
  height = source.height;
  const headers = {};
  if ("use-credentials" === source.crossOrigin) {
    let str = "true";
    headers["Access-Control-Allow-Credentials"] = "true";
  }
  if (null != referrerPolicy) {
    headers["Referrer-Policy"] = referrerPolicy;
  }
  if (null != srcSet) {
    const items = [];
    const parts = srcSet.split(", ");
    let closure_4 = true;
    const item = parts.forEach((item) => {
      const tmp = _slicedToArray(item.split(" "), 2);
      let str = "1x";
      const first = tmp[0];
      if (undefined !== tmp[1]) {
        str = tmp3;
      }
      if (str.endsWith("x")) {
        const _parseInt = parseInt;
        const parsed = parseInt(str.split("x")[0], 10);
        const _isNaN = isNaN;
        if (!isNaN(parsed)) {
          closure_4 = 1 !== parsed && closure_4;
          size = { headers, scale: parsed, uri: first, width, height };
          items.push(size);
        }
      } else {
        const _console = console;
        console.warn("The provided format for scale is not supported yet. Please use scales like 1x, 2x, etc.");
      }
    });
    const tmp8 = closure_4 && null != src;
    if (tmp8) {
      size = { headers, scale: 1, uri: src, width, height };
      items.push(size);
    }
    tmp2 = items;
    if (0 === items.length) {
      let _console = console;
      console.warn("The provided value for srcSet is not valid.");
      tmp2 = items;
    }
  } else if (null != src) {
    const size1 = { uri: src, headers, width, height };
    const items1 = [size1];
    tmp2 = items1;
  } else {
    tmp2 = tmp;
    if (null != tmp) {
      tmp2 = tmp;
      if (tmp.uri) {
        const tmp3 = globalThis;
        const _Object = Object;
        tmp2 = tmp;
        if (Object.keys(headers).length > 0) {
          const obj2 = { headers };
          const merged = Object.assign(tmp);
          const items2 = [obj2];
          tmp2 = items2;
        }
      }
    }
  }
  return tmp2;
};