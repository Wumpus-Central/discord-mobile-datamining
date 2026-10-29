// _runtime/09392_combineFuncs.js
import cloneNode from "09378_cloneNode.js";
import find from "09391_find.js";

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;
function combineFuncs(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0) => {
    let tmp = closure_0(arg0);
    if (!tmp) {
      tmp = closure_1(arg0);
    }
    return tmp;
  };
}
let closure_2 = {
  tag_name(fn) {
    _require = fn;
    if (typeof fn === "function") {
      fn = (name) => {
        let isTagResult = cloneNode.isTag(name);
        if (isTagResult) {
          isTagResult = closure_0(name.name);
        }
        return isTagResult;
      };
    } else if ("*" === fn) {
      fn = require("cloneNode").isTag;
    } else {
      fn = (name) => {
        let isTagResult = cloneNode.isTag(name);
        if (isTagResult) {
          isTagResult = name.name === closure_0;
        }
        return isTagResult;
      };
    }
    return fn;
  },
  tag_type(fn) {
    closure_0 = fn;
    return typeof fn === "function" ? (type) => closure_0(type.type) : (type) => type.type === closure_0;
  },
  tag_contains(fn) {
    closure_0 = fn;
    return typeof fn === "function"
      ? (data) => {
          let isTextResult = cloneNode.isText(data);
          if (isTextResult) {
            isTextResult = closure_0(data.data);
          }
          return isTextResult;
        }
      : (data) => {
          let isTextResult = cloneNode.isText(data);
          if (isTextResult) {
            isTextResult = data.data === closure_0;
          }
          return isTextResult;
        };
  },
};

export function testElement(arg0, arg1) {
  closure_0 = arg0;
  const keys = Object.keys(arg0);
  const mapped = keys.map((item) => {
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    if (typeof call === "unknown" ? hasOwnProperty(item) : call(dependencyMap, item)) {
      let tmp3 = dependencyMap[item](tmp);
    } else {
      closure_1 = tmp;
      tmp3 =
        typeof tmp === "function"
          ? (arg0) => {
              let isTagResult = item(9378).isTag(arg0);
              if (isTagResult) {
                isTagResult = closure_1(arg0.attribs[item]);
              }
              return isTagResult;
            }
          : (arg0) => {
              let isTagResult = item(9378).isTag(arg0);
              if (isTagResult) {
                isTagResult = arg0.attribs[item] === closure_1;
              }
              return isTagResult;
            };
    }
    return tmp3;
  });
  let reduced = null;
  if (0 !== mapped.length) {
    reduced = mapped.reduce(combineFuncs);
  }
  let reducedResult = !reduced;
  if (reduced) {
    reducedResult = reduced(arg1);
  }
  return reducedResult;
}
export function getElements(arg0, arg1, arg2, arg3) {
  let num = arg3;
  if (undefined === arg3) {
    num = Infinity;
  }
  _require = arg0;
  const keys = Object.keys(arg0);
  const mapped = keys.map((item) => {
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    if (typeof call === "unknown" ? hasOwnProperty(item) : call(dependencyMap, item)) {
      let tmp3 = dependencyMap[item](tmp);
    } else {
      closure_1 = tmp;
      tmp3 =
        typeof tmp === "function"
          ? (arg0) => {
              let isTagResult = item(9378).isTag(arg0);
              if (isTagResult) {
                isTagResult = closure_1(arg0.attribs[item]);
              }
              return isTagResult;
            }
          : (arg0) => {
              let isTagResult = item(9378).isTag(arg0);
              if (isTagResult) {
                isTagResult = arg0.attribs[item] === closure_1;
              }
              return isTagResult;
            };
    }
    return tmp3;
  });
  let reduced = null;
  if (0 !== mapped.length) {
    reduced = mapped.reduce(combineFuncs);
  }
  if (reduced) {
    let found = require("find").filter(reduced, arg1, arg2, num);
  } else {
    found = [];
  }
  return found;
}
export function getElementById(fn, arg1, arg2) {
  let flag = arg2;
  if (undefined === arg2) {
    flag = true;
  }
  let tmp = arg1;
  if (!Array.isArray(arg1)) {
    const items = [arg1];
    tmp = items;
  }
  const id = "id";
  dependencyMap = fn;
  return id(9391).findOne(
    typeof fn === "function"
      ? (arg0) => {
          let isTagResult = item(9378).isTag(arg0);
          if (isTagResult) {
            isTagResult = closure_1(arg0.attribs[item]);
          }
          return isTagResult;
        }
      : (arg0) => {
          let isTagResult = item(9378).isTag(arg0);
          if (isTagResult) {
            isTagResult = arg0.attribs[item] === closure_1;
          }
          return isTagResult;
        },
    tmp,
    flag,
  );
}
export function getElementsByTagName(trimmed4, children, arg2, arg3) {
  let flag = arg2;
  if (undefined === arg2) {
    flag = true;
  }
  let num = arg3;
  if (undefined === arg3) {
    num = Infinity;
  }
  return find.filter(closure_2.tag_name(trimmed4), children, flag, num);
}
export function getElementsByClassName(fn, arg1, arg2, arg3) {
  let flag = arg2;
  if (undefined === arg2) {
    flag = true;
  }
  let num = arg3;
  if (undefined === arg3) {
    num = Infinity;
  }
  const _class = "class";
  dependencyMap = fn;
  return _class(9391).filter(
    typeof fn === "function"
      ? (arg0) => {
          let isTagResult = item(9378).isTag(arg0);
          if (isTagResult) {
            isTagResult = closure_1(arg0.attribs[item]);
          }
          return isTagResult;
        }
      : (arg0) => {
          let isTagResult = item(9378).isTag(arg0);
          if (isTagResult) {
            isTagResult = arg0.attribs[item] === closure_1;
          }
          return isTagResult;
        },
    arg1,
    flag,
    num,
  );
}
export function getElementsByTagType(fn, arg1, arg2, arg3) {
  let flag = arg2;
  if (undefined === arg2) {
    flag = true;
  }
  let num = arg3;
  if (undefined === arg3) {
    num = Infinity;
  }
  return find.filter(closure_2.tag_type(fn), arg1, flag, num);
}
