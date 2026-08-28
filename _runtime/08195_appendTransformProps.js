// _runtime/08195_appendTransformProps.js
import append from "08196_append.js";
import peg$SyntaxError from "08197_peg_SyntaxError.js";
import peg$SyntaxError2 from "08198_peg_SyntaxError.js";

require = arg1;
const dependencyMap = arg6;
function appendTransformProps(arg0) {
  ({ originX, originY } = arg0);
  ({ x, y, scaleX, scaleY, rotation, skewX, skewY } = arg0);
  append.appendTransform(x + originX, y + originY, scaleX, scaleY, rotation, skewX, skewY, originX, originY);
}
function universal2axis(num) {
  let num2 = num;
  if (typeof num !== "number") {
    if (typeof num === "string") {
      const parts = num.split(/\s*,\s*/);
      if (2 === parts.length) {
        num2 = +parts[0];
        num = +parts[1];
      } else if (1 === parts.length) {
        num = +parts[0];
        num2 = num;
      }
    } else {
      const _Array = Array;
      if (Array.isArray(num)) {
        if (2 === num.length) {
          let tmp2 = +num[0];
          let tmp = +num[1];
        } else if (1 === num.length) {
          tmp = +num[0];
          tmp2 = tmp;
        }
        num = tmp;
        num2 = tmp2;
      }
    }
  }
  if (!isNaN(+arg1)) {
    num2 = tmp3;
  }
  if (!isNaN(+arg2)) {
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
    const item = arr.forEach((arg0) => {
      const keys = Object.keys(arg0);
      if (1 !== keys.length) {
        const _console = console;
        console.error("You must specify exactly one property per transform object.");
      }
      const first = keys[0];
      obj[first] = arg0[first];
    });
  }
  return obj;
}
function props2transform(arr) {
  if (arr) {
    ({ rotation, translate, translateX, translateY, origin, originX, originY, scale, scaleX, scaleY, skew, skewX, skewY, x, y } = arr);
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
    let tmp6Result = tmp6(translate, translateX, translateY);
    tmp6Result = tmp6(origin, originX, originY);
    const tmp6Result1 = universal2axis(scale, scaleX, scaleY, 1);
    let num4 = 0;
    if (null != rotation) {
      num4 = +rotation || 0;
      const tmp16 = +rotation || 0;
    }
    const obj = { rotation: null, originX: null, originY: null, scaleX: null, scaleY: null, skewX: null, skewY: null, x: null, y: null };
    obj[0] = num4;
    [obj[1], obj[2]] = tmp6Result;
    [obj[3], obj[4]] = tmp6Result1;
    [obj[5], obj[6]] = universal2axis(skew, skewX, skewY);
    [obj[7], obj[8]] = tmp6Result;
    return obj;
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
  append.reset();
  if (arg0) {
    appendTransformProps(arg0);
  }
  if (arr) {
    const _Array = Array;
    if (Array.isArray(arr)) {
      if (typeof arr[0] === "number") {
        let tmp3Result = tmp3(8196);
        tmp3Result.append(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
      } else {
        const tmp24 = props2transform(transformsArrayToProps(arr));
        if (tmp24) {
          appendTransformProps(tmp24);
        }
      }
    } else if (typeof arr === "string") {
      try {
        tmp3Result = tmp3(8197);
        const parsed = tmp3Result.parse(arr);
        const tmp3Result1 = tmp3(8196);
        tmp3Result1.append(parsed[0], parsed[3], parsed[1], parsed[4], parsed[2], parsed[5]);
      } catch (tmp14) {
        const _console = tmp.console;
        _console.error(tmp14);
      }
    } else {
      const tmp21 = props2transform(arr);
      if (tmp21) {
        appendTransformProps(tmp21);
      }
    }
  }
  const obj = append;
  return append.toArray();
}
arg5.default = function extractTransform(arr) {
  if (Array.isArray(arr)) {
    if (typeof arr[0] === "number") {
      return arr;
    }
  }
  if (typeof arr === "string") {
    try {
      const parsed = peg$SyntaxError.parse(arr);
      const items = [, , , , , ];
      [arr[0], arr[2], arr[4], arr[1], arr[3], arr[5]] = parsed;
      return items;
    } catch (tmp6) {
      const _console = tmp.console;
      _console.error(tmp6);
      return append.identity;
    }
  } else {
    let transform;
    if (arr != null) {
      transform = arr.transform;
    }
    return transformToMatrix(props2transform(arr), transform);
  }
};
arg5.transformsArrayToProps = transformsArrayToProps;
arg5.props2transform = props2transform;
arg5.transformToMatrix = transformToMatrix;
arg5.extractTransformSvgView = function extractTransformSvgView(transform) {
  if (typeof transform.transform === "string") {
    transform = peg$SyntaxError2.parse(transform.transform);
    const obj = peg$SyntaxError2;
  } else {
    transform = transform.transform;
  }
  return transform;
};