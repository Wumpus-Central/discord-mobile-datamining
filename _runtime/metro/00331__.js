// _runtime/metro/00331__.js
import _slicedToArray from "00032__.js";

export const getImageSourcesFromImageProps = function getImageSourcesFromImageProps(source) {
  let tmp = width(height[1])(source.source);
  ({ referrerPolicy, src, srcSet, width } = source);
  height = source.height;
  let headers = {};
  if ("use-credentials" === source.crossOrigin) {
    headers["Access-Control-Allow-Credentials"] = "true";
  }
  if (null != referrerPolicy) {
    headers["Referrer-Policy"] = referrerPolicy;
  }
  if (null != srcSet) {
    const items = [];
    const parts = srcSet.split(", ");
    closure_4 = true;
    const item = parts.forEach((item) => {
      const tmp = _slicedToArray(item.split(" "), 2);
      let str = "1x";
      if (undefined !== tmp[1]) {
        str = tmp2;
      }
      if (str.endsWith("x")) {
        const _parseInt = parseInt;
        const parsed = parseInt(str.split("x")[0], 10);
        const _isNaN = isNaN;
        if (!isNaN(parsed)) {
          closure_4 = 1 !== parsed && closure_4;
          const size = { headers, scale: parsed, uri: tmp[0], width, height };
          items.push(size);
        }
      } else {
        const _console = console;
        console.warn("The provided format for scale is not supported yet. Please use scales like 1x, 2x, etc.");
      }
    });
    let tmp8 = closure_4;
    if (closure_4) {
      tmp8 = null != src;
    }
    if (tmp8) {
      let size = { headers, scale: 1, uri: src, width, height };
      items.push(size);
    }
    let tmp2 = items;
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
        const _Object = Object;
        tmp2 = tmp;
        if (Object.keys(headers).length > 0) {
          headers = {};
          const merged = Object.assign(tmp);
          headers.headers = headers;
          const items2 = [headers];
          tmp2 = items2;
        }
      }
    }
  }
  return tmp2;
};
