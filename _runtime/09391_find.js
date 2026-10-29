// _runtime/09391_find.js
import cloneNode from "09378_cloneNode.js";

require = arg1;
const dependencyMap = arg6;
function find(fn, arg1, arg2, arg3) {
  const items = [];
  let tmp = arg1;
  if (!Array.isArray(arg1)) {
    const items1 = [arg1];
    tmp = items1;
  }
  let tmp2 = arg3;
  const items2 = [tmp];
  const items3 = [0];
  while (true) {
    if (items3[0] >= items2[0].length) {
      if (1 === items3.length) {
        return items;
      } else {
        let arr = items2.shift();
        let arr2 = items3.shift();
        continue;
      }
    } else {
      let tmp13 = +items3[0];
      items3[0] = tmp13 + 1;
      let tmp14 = items2[0][tmp13];
      let diff = tmp2;
      if (fn(tmp14)) {
        let arr3 = items.push(tmp14);
        diff = tmp2 - 1;
        if (diff <= 0) {
          break;
        }
      }
      let hasChildrenResult = arg2;
      if (arg2) {
        hasChildrenResult = cloneNode.hasChildren(tmp14);
      }
      if (hasChildrenResult) {
        hasChildrenResult = tmp14.children.length > 0;
      }
      tmp2 = diff;
      if (!hasChildrenResult) {
        continue;
      } else {
        let arr4 = items3.unshift(0);
        let arr9 = items2.unshift(tmp14.children);
        tmp2 = diff;
        continue;
      }
      continue;
    }
  }
  return items;
}
function findOne(fn, arg1, arg2) {
  let tmp;
  let flag = arg2;
  if (undefined === arg2) {
    flag = true;
  }
  let arr = arg1;
  if (!Array.isArray(arg1)) {
    const items = [arg1];
    arr = items;
  }
  let num = 0;
  if (0 < arr.length) {
    while (true) {
      tmp = arr[num];
      if (cloneNode.isTag(tmp)) {
        if (fn(tmp)) {
          break;
        }
      }
      if (flag) {
        if (cloneNode.hasChildren(tmp)) {
          if (tmp.children.length > 0) {
            let tmp6 = findOne(fn, tmp.children, true);
            if (tmp6) {
              return tmp6;
            }
          }
        }
      }
      num = num + 1;
    }
    return tmp;
  }
  return null;
}

export function filter(arg0, arg1, arg2, arg3) {
  let flag = arg2;
  if (undefined === arg2) {
    flag = true;
  }
  let num = arg3;
  if (undefined === arg3) {
    num = Infinity;
  }
  let tmp2 = arg1;
  if (!Array.isArray(arg1)) {
    const items = [arg1];
    tmp2 = items;
  }
  return find(arg0, tmp2, flag, num);
}
export { find };
export function findOneChild(arg0, arr) {
  return arr.find(arg0);
}
export { findOne };
export function existsOne(arg0, arg1) {
  closure_0 = arg0;
  let obj = arg1;
  if (!Array.isArray(arg1)) {
    const items = [arg1];
    obj = items;
  }
  return obj.some((children) => {
    let isTagResult = closure_2_0(closure_2_1[0]).isTag(children);
    if (isTagResult) {
      isTagResult = closure_1_0(children);
    }
    if (!isTagResult) {
      let hasChildrenResult = closure_2_0(closure_2_1[0]).hasChildren(children);
      if (hasChildrenResult) {
        children = children.children;
        closure_0 = closure_1_0;
        let _Array = Array;
        let obj = children;
        if (!Array.isArray(children)) {
          let items = [children];
          obj = items;
        }
        hasChildrenResult = obj.some((children) => {
          let isTagResult = closure_2_0(closure_2_1[0]).isTag(children);
          if (isTagResult) {
            isTagResult = closure_1_0(children);
          }
          if (!isTagResult) {
            let hasChildrenResult = closure_2_0(closure_2_1[0]).hasChildren(children);
            if (hasChildrenResult) {
              children = children.children;
              closure_0 = closure_1_0;
              let _Array = Array;
              let obj = children;
              if (!Array.isArray(children)) {
                let items = [children];
                obj = items;
              }
              hasChildrenResult = obj.some((children) => {
                let isTagResult = closure_2_0(closure_2_1[0]).isTag(children);
                if (isTagResult) {
                  isTagResult = closure_1_0(children);
                }
                if (!isTagResult) {
                  let hasChildrenResult = closure_2_0(closure_2_1[0]).hasChildren(children);
                  if (hasChildrenResult) {
                    children = children.children;
                    closure_0 = closure_1_0;
                    let _Array = Array;
                    let obj = children;
                    if (!Array.isArray(children)) {
                      let items = [children];
                      obj = items;
                    }
                    hasChildrenResult = obj.some((children) => {
                      let isTagResult = closure_2_0(closure_2_1[0]).isTag(children);
                      if (isTagResult) {
                        isTagResult = closure_1_0(children);
                      }
                      if (!isTagResult) {
                        let hasChildrenResult = closure_2_0(closure_2_1[0]).hasChildren(children);
                        if (hasChildrenResult) {
                          children = children.children;
                          closure_0 = closure_1_0;
                          let _Array = Array;
                          let obj = children;
                          if (!Array.isArray(children)) {
                            let items = [children];
                            obj = items;
                          }
                          hasChildrenResult = obj.some(/* F105242 */ function() { ... });
                        }
                        isTagResult = hasChildrenResult;
                      }
                      return isTagResult;
                    });
                  }
                  isTagResult = hasChildrenResult;
                }
                return isTagResult;
              });
            }
            isTagResult = hasChildrenResult;
          }
          return isTagResult;
        });
      }
      isTagResult = hasChildrenResult;
    }
    return isTagResult;
  });
}
export function findAll(fn, arg1) {
  const items = [];
  let tmp = arg1;
  if (!Array.isArray(arg1)) {
    const items1 = [arg1];
    tmp = items1;
  }
  const items2 = [tmp];
  const items3 = [0];
  while (true) {
    if (items3[0] >= items2[0].length) {
      if (1 === items2.length) {
        break;
      } else {
        let arr = items2.shift();
        let arr2 = items3.shift();
        continue;
      }
    } else {
      let tmp9 = +items3[0];
      items3[0] = tmp9 + 1;
      let tmp10 = items2[0][tmp9];
      let tmp2 = cloneNode.isTag(tmp10) && fn(tmp10);
      if (tmp2) {
        let arr3 = items.push(tmp10);
      }
      let tmp4 = cloneNode.hasChildren(tmp10) && tmp10.children.length > 0;
      if (!tmp4) {
        continue;
      } else {
        let arr4 = items3.unshift(0);
        let arr9 = items2.unshift(tmp10.children);
        continue;
      }
      continue;
    }
  }
  return items;
}