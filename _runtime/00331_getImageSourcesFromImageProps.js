// === Module 331: getImageSourcesFromImageProps ===

// Module 331 (getImageSourcesFromImageProps)
import _slicedToArray from "_slicedToArray";


export const getImageSourcesFromImageProps = function getImageSourcesFromImageProps(source) {
  let referrerPolicy;
  let src;
  let srcSet;
  let width;
  let tmp = width(height[1])(source.source);
  ({ referrerPolicy, src, srcSet, width } = source);
  height = source.height;
  let obj = {};
  if ("use-credentials" === source.crossOrigin) {
    obj["Access-Control-Allow-Credentials"] = "true";
  }
  if (null != referrerPolicy) {
    obj["Referrer-Policy"] = referrerPolicy;
  }
  if (null != srcSet) {
    const items = [];
    const parts = srcSet.split(", ");
    let c4 = true;
    const item = parts.forEach((str) => {
      const tmp = obj(str.split(" "), 2);
      str = "1x";
      if (undefined !== tmp[1]) {
        str = tmp2;
      }
      if (str.endsWith("x")) {
        const _parseInt = parseInt;
        const parsed = parseInt(str.split("x")[0], 10);
        const _isNaN = isNaN;
        if (!isNaN(parsed)) {
          closure_4 = 1 !== parsed && closure_4;
          obj = { headers: null, scale: null, uri: null, width: null, height: null };
          obj[0] = obj;
          obj[1] = parsed;
          obj[2] = tmp[0];
          obj[3] = width;
          obj[4] = height;
          items.push(obj);
        }
      } else {
        const _console = console;
        console.warn("The provided format for scale is not supported yet. Please use scales like 1x, 2x, etc.");
      }
    });
    let tmp8 = c4;
    if (c4) {
      tmp8 = null != src;
    }
    if (tmp8) {
      obj = { headers: null, scale: 1, uri: null, width: null, height: null };
      obj[0] = obj;
      obj[2] = src;
      obj[3] = width;
      obj[4] = height;
      items.push(obj);
    }
    let tmp2 = items;
    if (0 === items.length) {
      let _console = console;
      console.warn("The provided value for srcSet is not valid.");
      tmp2 = items;
    }
  } else if (null != src) {
    obj = { uri: null, headers: null, width: null, height: null };
    obj[0] = src;
    obj[1] = obj;
    obj[2] = width;
    obj[3] = height;
    const items1 = [obj];
    tmp2 = items1;
  } else {
    tmp2 = tmp;
    if (null != tmp) {
      tmp2 = tmp;
      if (tmp.uri) {
        const _Object = Object;
        tmp2 = tmp;
        if (Object.keys(obj).length > 0) {
          const obj1 = {};
          const merged = Object.assign(tmp);
          obj1.headers = obj;
          const items2 = [obj1];
          tmp2 = items2;
        }
      }
    }
  }
  return tmp2;
};