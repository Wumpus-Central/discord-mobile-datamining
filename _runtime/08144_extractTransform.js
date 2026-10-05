// === Module 8144: extractTransform ===

// Module 8144 (extractTransform)
import _mod8145 from "module_8145" /* 8145 */;
import _mod8146 from "module_8146" /* 8146 */;
import _mod8147 from "module_8147" /* 8147 */;

function appendTransformProps(arg0) {
  let originX;
  let originY;
  let rotation;
  let scaleX;
  let scaleY;
  let skewX;
  let skewY;
  let x;
  let y;
  ({ originX, originY } = arg0);
  ({ x, y, scaleX, scaleY, rotation, skewX, skewY } = arg0);
  const obj = _mod8145;
  obj.appendTransform(x + originX, y + originY, scaleX, scaleY, rotation, skewX, skewY, originX, originY);
}
function universal2axis(origin, originX, originY, arg3) {
  let num = origin;
  let num2 = origin;
  if (typeof origin !== "number") {
    if (typeof origin === "string") {
      const parts = origin.split(/\s*,\s*/);
      if (2 === parts.length) {
        num2 = +parts[0];
        num = +parts[1];
      } else if (1 === parts.length) {
        num = +parts[0];
        num2 = num;
      }
    } else {
      const _Array = Array;
      if (Array.isArray(origin)) {
        let tmp2;
        let tmp;
        if (2 === origin.length) {
          tmp2 = +origin[0];
          tmp = +origin[1];
        } else if (1 === origin.length) {
          tmp = +origin[0];
          tmp2 = tmp;
        }
        num = tmp;
        num2 = tmp2;
      }
    }
  }
  if (!isNaN(+originX)) {
    num2 = tmp3;
  }
  if (!isNaN(+originY)) {
    num = tmp4;
  }
  if (!num2) {
    num2 = arg3;
  }
  if (!num2) {
    num2 = 0;
  }
  const items = [num2, ];
  if (!num) {
    num = arg3;
  }
  if (!num) {
    num = 0;
  }
  items[1] = num;
  return items;
}
function transformsArrayToProps(arr) {
  const obj = {};
  if (arr != null) {
    const item = arr.forEach((item) => {
      const keys = Object.keys(item);
      if (1 !== keys.length) {
        const _console = console;
        console.error("You must specify exactly one property per transform object.");
      }
      const first = keys[0];
      obj[first] = item[first];
    });
  }
  return obj;
}
function props2transform(transform) {
  let origin;
  let originX;
  let originY;
  let rotation;
  let scale;
  let scaleX;
  let scaleY;
  let skew;
  let skewX;
  let skewY;
  let translate;
  let translateX;
  let translateY;
  let x;
  let y;
  const tmp = transform;
  if (tmp) {
    ({ rotation, translate, translateX, translateY, origin, originX, originY, scale, scaleX, scaleY, skew, skewX, skewY, x, y } = transform);
    if (null == rotation) {
      if (null == translate) {
        if (null == translateX) {
          if (null == translateY) {
            if (null == origin) {
              if (null == originX) {
                if (null == originY) {
                  if (null == scale) {
                    if (null == scaleX) {
                      if (null == scaleY) {
                        if (null == skew) {
                          if (null == skewX) {
                            if (null == skewY) {
                              if (null == x) {
                                if (null == y) {
                                  return null;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const _Array = Array;
    let isArray = Array.isArray(x);
    if (!isArray) {
      const _Array2 = Array;
      isArray = Array.isArray(y);
    }
    if (isArray) {
      const _console = console;
      console.warn("Passing SvgLengthList to x or y attribute where SvgLength expected");
    }
    if (!translateX) {
      const _Array3 = Array;
      let first = x;
      if (Array.isArray(x)) {
        first = x[0];
      }
      translateX = first;
    }
    if (!translateY) {
      const _Array4 = Array;
      let first1 = y;
      if (Array.isArray(y)) {
        first1 = y[0];
      }
      translateY = first1;
    }
    const tmp7Result = universal2axis(translate, translateX, translateY);
    const tmp7Result4 = universal2axis(origin, originX, originY);
    let num4 = 0;
    const tmp7Result5 = universal2axis(scale, scaleX, scaleY, 1);
    const tmp7Result6 = universal2axis(skew, skewX, skewY);
    if (null != rotation) {
      num4 = +rotation || 0;
    }
    const point = { rotation: num4, originX: null, originY: null, scaleX: null, scaleY: null, skewX: null, skewY: null, x: null, y: null };
    [obj.originX, obj.originY] = tmp7Result4;
    [obj.scaleX, obj.scaleY] = tmp7Result5;
    [obj.skewX, obj.skewY] = tmp7Result6;
    [obj.x, obj.y] = tmp7Result;
    return point;
  } else {
    return null;
  }
}
function transformToMatrix(arg0, arr) {
  if (!arg0) {
    if (!arr) {
      return null;
    }
  }
  const obj = _mod8145;
  obj.reset();
  if (arg0) {
    appendTransformProps(arg0);
  }
  if (arr) {
    const _Array = Array;
    if (Array.isArray(arr)) {
      if (typeof arr[0] === "number") {
        const tmp2Result = _mod8145;
        tmp2Result.append(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
      } else {
        const tmp23 = props2transform(transformsArrayToProps(arr));
        if (tmp23) {
          appendTransformProps(tmp23);
        }
      }
    } else if (typeof arr === "string") {
      try {
        const tmp2Result4 = _mod8146;
        const parsed = tmp2Result4.parse(arr);
        const tmp2Result5 = _mod8145;
        tmp2Result5.append(parsed[0], parsed[3], parsed[1], parsed[4], parsed[2], parsed[5]);
      } catch (tmp13) {
        const _console = console;
        console.error(tmp13);
      }
    } else {
      const tmp20 = props2transform(arr);
      if (tmp20) {
        appendTransformProps(tmp20);
      }
    }
  }
  const tmp2Result6 = _mod8145;
  return tmp2Result6.toArray();
}

export default function extractTransform(transform) {
  if (Array.isArray(transform)) {
    if (typeof transform[0] === "number") {
      return transform;
    }
  }
  if (typeof transform === "string") {
    try {
      const obj = _mod8146;
      const parsed = obj.parse(transform);
      const items = [, , , , , ];
      [arr[0], arr[2], arr[4], arr[1], arr[3], arr[5]] = parsed;
      return items;
    } catch (tmp5) {
      const _console = console;
      console.error(tmp5);
      return _mod8145.identity;
    }
  } else {
    transform = undefined;
    const tmp11 = props2transform(transform);
    if (transform != null) {
      transform = transform.transform;
    }
    return transformToMatrix(tmp11, transform);
  }
};
export { transformsArrayToProps };
export { props2transform };
export { transformToMatrix };
export const extractTransformSvgView = function extractTransformSvgView(transform) {
  if (typeof transform.transform === "string") {
    const obj = _mod8147;
    transform = obj.parse(transform.transform);
  } else {
    transform = transform.transform;
  }
  return transform;
};