// _runtime/00891_mergeOptions.js
import _mod682 from "metro/00682__.js";
import _slicedToArray from "metro/00032__.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

function mergeOptions(tags, tags2) {
  closure_0 = tags;
  closure_1 = tags2;
  obj = {};
  const merged = Object.assign(tags);
  const merged1 = Object.assign(tags2);
  obj = {};
  const merged2 = Object.assign(tags.tags);
  const merged3 = Object.assign(tags2.tags);
  obj.tags = obj;
  obj.onFormOpen = function onFormOpen() {
    const onFormOpen = obj.onFormOpen;
    if (onFormOpen != null) {
      onFormOpen();
    }
    const onFormOpen2 = closure_0.onFormOpen;
    if (onFormOpen2 != null) {
      onFormOpen2();
    }
  };
  obj.onFormClose = function onFormClose() {
    const onFormClose = obj.onFormClose;
    if (onFormClose != null) {
      onFormClose();
    }
    const onFormClose2 = closure_0.onFormClose;
    if (onFormClose2 != null) {
      onFormClose2();
    }
  };
  obj.onSubmitSuccess = function onSubmitSuccess(arg0, arg1) {
    const onSubmitSuccess = obj.onSubmitSuccess;
    if (onSubmitSuccess != null) {
      onSubmitSuccess(arg0, arg1);
    }
    const onSubmitSuccess2 = closure_0.onSubmitSuccess;
    if (onSubmitSuccess2 != null) {
      onSubmitSuccess2(arg0, arg1);
    }
  };
  obj.onSubmitError = function onSubmitError(arg0) {
    const onSubmitError = obj.onSubmitError;
    if (onSubmitError != null) {
      onSubmitError(arg0);
    }
    const onSubmitError2 = closure_0.onSubmitError;
    if (onSubmitError2 != null) {
      onSubmitError2(arg0);
    }
  };
  obj.onFormSubmitted = function onFormSubmitted() {
    const onFormSubmitted = obj.onFormSubmitted;
    if (onFormSubmitted != null) {
      onFormSubmitted();
    }
    const onFormSubmitted2 = closure_0.onFormSubmitted;
    if (onFormSubmitted2 != null) {
      onFormSubmitted2();
    }
  };
  obj = {};
  const merged4 = Object.assign(tags.themeDark);
  const merged5 = Object.assign(tags2.themeDark);
  obj.themeDark = obj;
  const merged6 = Object.assign(tags.themeLight);
  const merged7 = Object.assign(tags2.themeLight);
  obj.themeLight = {};
  return obj;
}
function v$1(__s, __s2) {
  for (const key10004 in arg1) {
    arg0[key10004] = arg1[key10004];
    continue;
  }
  return __s;
}
function p$1(__e) {
  const parentNode = __e.parentNode;
  if (parentNode) {
    parentNode.removeChild(__e);
  }
}
function y$1(span, arg1, formTitle) {
  let tmp2;
  let tmp3;
  obj = {};
  let tmp4;
  let tmp5;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp4 = tmp2;
    tmp5 = tmp3;
    while (keys[tmp] !== undefined) {
      if ("key" == tmp9) {
        tmp3 = arg1[tmp9];
        continue;
      } else {
        if ("ref" == tmp9) {
          tmp2 = arg1[tmp9];
          continue;
        } else {
          obj[tmp9] = arg1[tmp9];
          continue;
        }
        continue;
      }
      continue;
    }
  }
  if (arguments.length > 2) {
    if (arguments.length <= 3) {
      obj.children = formTitle;
    } else {
      const call = slice.call;
      if (typeof call === "unknown") {
        let callResult = tmp11(2);
      } else {
        callResult = call(arguments, 2);
      }
      tmp11 = slice;
    }
  }
  if (typeof span === "function") {
    if (null != span.defaultProps) {
      const keys1 = Object.keys();
      if (keys1 !== undefined) {
        while (keys1[3] !== undefined) {
          if (undefined !== obj[tmp16]) {
            continue;
          } else {
            obj[tmp16] = span.defaultProps[tmp16];
            continue;
          }
          continue;
        }
      }
    }
  }
  const element = { type: span, props: obj, key: tmp5, ref: tmp4, __k: null, __: null, __b: 0, __e: null, __d: "Array", __c: "Array", constructor: -1, __v: 0, __i: "5.9.4", __u: 24 };
  const sum = sum2 + 1;
  sum2 = sum;
  element.__v = sum;
  if (null != obj.vnode) {
    obj.vnode(element);
  }
  return element;
}
function g$1(children) {
  return children.children;
}
class b$1 {
  constructor(arg0, arg1) {
    return;
  }
  setState(arg0, arg1) {
    self = this;
    if (null != this.__s) {
      if (self.__s !== self.state) {
        __s = self.__s;
      }
      tmp = global;
      tmp2 = global;
      if (typeof global === "function") {
        obj = {};
        tmp16 = __s;
        for (const key10012 in __s) {
          tmp17 = key10012;
          obj[key10012] = __s[key10012];
          continue;
        }
        tmp2 = global(obj, self.props);
      }
      if (tmp2) {
        tmp3 = tmp2;
        for (const key10017 in tmp2) {
          tmp18 = key10017;
          __s[key10017] = tmp2[key10017];
          continue;
        }
      }
      tmp4 = null != tmp2 && self.__v;
      if (tmp4) {
        tmp5 = require;
        if (require) {
          _sb = self._sb;
          arr = _sb.push(require);
        }
        ___d = self.__d;
        flag = !___d;
        if (!___d) {
          flag2 = true;
          self.__d = true;
          flag = true;
        }
        if (flag) {
          tmp7 = closure_15;
          flag = closure_15.push(self);
        }
        if (flag) {
          tmp8 = C$1;
          tmp9 = +C$1.__r;
          C$1.__r = tmp9 + 1;
          flag = !tmp9;
        }
        if (!flag) {
          tmp10 = debounceRendering;
          tmp11 = closure_13;
          flag = debounceRendering !== closure_13.debounceRendering;
        }
        if (flag) {
          tmp12 = closure_13;
          debounceRendering = closure_13.debounceRendering;
          if (!debounceRendering) {
            debounceRendering = setTimeout;
          }
          tmp13 = C$1;
          debounceRenderingResult = debounceRendering(C$1);
        }
      }
      return;
    }
    __s = {};
    state = self.state;
    for (const key10009 in state) {
      tmp15 = key10009;
      __s[key10009] = state[key10009];
      continue;
    }
    self.__s = __s;
    return;
  }
  forceUpdate(arg0) {
    self = this;
    if (this.__v) {
      tmp = global;
      flag = true;
      self.__e = true;
      if (global) {
        __h = self.__h;
        arr = __h.push(global);
      }
      ___d = self.__d;
      flag2 = !___d;
      if (!___d) {
        self.__d = true;
        flag2 = true;
      }
      if (flag2) {
        tmp3 = closure_15;
        flag2 = closure_15.push(self);
      }
      if (flag2) {
        tmp4 = C$1;
        tmp5 = +C$1.__r;
        C$1.__r = tmp5 + 1;
        flag2 = !tmp5;
      }
      if (!flag2) {
        tmp6 = debounceRendering;
        tmp7 = closure_13;
        flag2 = debounceRendering !== closure_13.debounceRendering;
      }
      if (flag2) {
        tmp8 = closure_13;
        debounceRendering = closure_13.debounceRendering;
        if (!debounceRendering) {
          debounceRendering = setTimeout;
        }
        tmp9 = C$1;
        debounceRenderingResult = debounceRendering(C$1);
      }
    }
    return;
  }
}
function m$1(__2, arg1) {
  let tmp2;
  let sum = arg1;
  if (null == arg1) {
    let tmp5 = null;
    if (__2.__) {
      tmp5 = m$1(__2.__, __2.__i + 1);
    }
    return tmp5;
  } else {
    if (sum < __2.__k.length) {
      while (true) {
        tmp2 = __2.__k[sum];
        if (null != tmp2) {
          if (null != tmp2.__e) {
            break;
          }
        }
        sum = sum + 1;
      }
      return tmp2.__e;
    }
    let tmp4 = null;
    if (typeof __2.type === "function") {
      tmp4 = m$1(__2);
    }
    return tmp4;
  }
}
function k$1(__2) {
  let tmp;
  const __ = __2.__;
  if (null != __) {
    if (null != __.__c) {
      __.__c.base = null;
      __.__e = null;
      let num = 0;
      if (0 < __.__k.length) {
        while (true) {
          tmp = __.__k[num];
          if (null != tmp) {
            if (null != tmp.__e) {
              break;
            }
          }
          num = num + 1;
        }
        const __e = tmp.__e;
        __.__c.base = __e;
        __.__e = __e;
      }
      return k$1(__);
    }
  }
}
class C$1 {
  constructor() {
    items = [];
    items1 = [];
    sorted = closure_15.sort(H);
    arr = closure_15.shift();
    tmp4 = undefined;
    if (arr) {
      tmp5 = tmp3;
      tmp6 = arr;
      tmp7 = tmp3;
      while (!arr.__d) {
        tmp49 = closure_15;
        arr = closure_15.shift();
        tmp3 = tmp5;
        tmp4 = tmp5;
      }
      arr3 = closure_15;
      length = closure_15.length;
      __v = arr.__v;
      __e = __v.__e;
      __P = arr.__P;
      tmp8 = undefined;
      if (__P) {
        obj = {};
        tmp9 = __v;
        for (const key10028 in __v) {
          tmp58 = key10028;
          obj[key10028] = __v[key10028];
          continue;
        }
        obj.__v = __v.__v + 1;
        obj2 = closure_13;
        if (closure_13.vnode) {
          vnodeResult = obj2.vnode(obj);
        }
        __n = arr.__n;
        tmp12 = null;
        tmp11 = M;
        if (32 & __v.__u) {
          items2 = [];
          items2[0] = __e;
          tmp12 = items2;
        }
        tmp13 = __e;
        if (null == __e) {
          tmp59 = null;
          if (!__v.__) {
            tmp13 = null;
          } else {
            __ = __v.__;
            sum = __v.__i + 1;
            if (sum < __.__k.length) {
              while (true) {
                tmp15 = __.__k[sum];
                tmp16 = sum;
                if (null == tmp15) {
                  sum = sum + 1;
                  __e2 = tmp15.__e;
                  break;
                } else if (null != tmp15.__e) {
                  break;
                }
              }
            }
            tmp17 = null;
            if (typeof __.type === "function") {
              tmp60 = m$1;
              tmp17 = m$1(__);
            }
          }
        }
        tmp18 = __P;
        tmp19 = obj;
        tmp20 = __v;
        tmp21 = __n;
        tmp22 = tmp12;
        tmp23 = items;
        tmp24 = tmp13;
        tmp25 = items1;
        tmp11Result = tmp11(__P, obj, __v, __n, undefined !== __P.ownerSVGElement, tmp12, items, tmp13, 32 & __v.__u, items1);
        obj.__.__k[obj.__i] = obj;
        obj.__d = undefined;
        tmp8 = obj;
        if (obj.__e != __e) {
          __3 = obj.__;
          tmp8 = obj;
          if (null != __3) {
            tmp8 = obj;
            if (null != __3.__c) {
              __3.__c.base = null;
              __3.__e = null;
              num = 0;
              if (0 < __3.__k.length) {
                while (true) {
                  tmp27 = __3.__k[num];
                  tmp28 = num;
                  if (null != tmp27) {
                    if (null != tmp27.__e) {
                      break;
                    }
                  }
                  num = num + 1;
                }
                __e3 = tmp27.__e;
                __3.__c.base = __e3;
                __3.__e = __e3;
              }
              __2 = __3.__;
              tmp8 = obj;
              if (null != __2) {
                tmp8 = obj;
                if (null != __2.__c) {
                  __2.__c.base = null;
                  __2.__e = null;
                  num2 = 0;
                  if (0 >= __2.__k.length) {
                    tmp29 = k$1;
                    tmp31 = k$1(__2);
                    tmp32 = obj;
                  } else {
                    while (true) {
                      tmp29 = __2.__k[num2];
                      tmp30 = num2;
                      if (null == tmp29) {
                        num2 = num2 + 1;
                      } else if (null != tmp29.__e) {
                        break;
                      }
                      break;
                    }
                  }
                  __e4 = tmp29.__e;
                  __2.__c.base = __e4;
                  __2.__e = __e4;
                }
              }
            }
          }
        }
      }
      if (!tmp8) {
        tmp8 = tmp3;
      }
      if (0 !== length) {
        if (arr3.length <= length) {
          __c = tmp8;
          if (tmp8) {
            tmp33 = closure_13;
            __c = closure_13.__c;
          }
          tmp34 = tmp8;
          if (__c) {
            tmp35 = closure_13;
            tmp36 = closure_20;
            __cResult = closure_13.__c(tmp8, closure_20);
            tmp34 = tmp8;
          }
        }
        tmp48 = tmp34;
      }
      __h = items;
      num3 = 0;
      if (0 < items1.length) {
        do {
          tmp38 = N;
          sum1 = num3 + 1;
          sum2 = sum1 + 1;
          tmp41 = N(items1[num3], items1[sum1], items1[sum2]);
          num3 = sum2 + 1;
          length2 = items1.length;
        } while (num3 < length2);
      }
      obj3 = closure_13;
      if (closure_13.__c) {
        tmp42 = __h;
        __cResult1 = obj3.__c(tmp8, __h);
      }
      tmp44 = __h;
      someResult = __h.some((__h) => {
        closure_0 = __h;
        try {
          __h = __h.__h;
          __h.__h = [];
          __h.some((call) => {
            call = call.call;
            if (typeof call === "unknown") {
              call();
            } else {
              call(closure_0);
            }
          });
        } catch (tmp4) {
          closure_2_13.__e(tmp4, tmp.__v);
        }
      });
      items.length = 0;
      items1.length = 0;
      tmp46 = H;
      sorted1 = arr3.sort(H);
    }
    if (tmp4) {
      closure_129_0 = items;
      num4 = 0;
      if (0 < items1.length) {
        do {
          tmp50 = N;
          sum3 = num4 + 1;
          sum4 = sum3 + 1;
          tmp53 = N(items1[num4], items1[sum3], items1[sum4]);
          num4 = sum4 + 1;
          length3 = items1.length;
        } while (num4 < length3);
      }
      obj4 = closure_13;
      if (closure_13.__c) {
        tmp54 = closure_129_0;
        __cResult2 = obj4.__c(tmp4, closure_129_0);
      }
      tmp56 = closure_129_0;
      someResult1 = closure_129_0.some((__h) => {
        closure_0 = __h;
        try {
          __h = __h.__h;
          __h.__h = [];
          __h.some((call) => {
            call = call.call;
            if (typeof call === "unknown") {
              call();
            } else {
              call(closure_0);
            }
          });
        } catch (tmp4) {
          closure_2_13.__e(tmp4, tmp.__v);
        }
      });
    }
    C$1.__r = 0;
    return;
  }
}
function P$1(insertBefore, arg1, __k, __k2, arg4, arg5, arg6, arg7, __d, arg9, arr) {
  let tmp63;
  __k = __k2;
  if (__k2) {
    __k = __k2.__k;
  }
  if (!__k) {
    __k = items;
  }
  __k.__d = __d;
  let length2 = arg1.length;
  __k.__k = [];
  let num = 0;
  let tmp = length3;
  let num2 = 0;
  let tmp2 = length3;
  if (0 < length2) {
    do {
      let vnodeResult2 = arg1[num2];
      let tmp7 = null;
      if (null != vnodeResult2) {
        tmp7 = null;
        if (typeof vnodeResult2 !== "boolean") {
          tmp7 = null;
          if (typeof vnodeResult2 !== "function") {
            if (typeof vnodeResult2 !== "string") {
              if (typeof vnodeResult2 !== "number") {
                if (typeof vnodeResult2 !== "bigint") {
                  let _String = String;
                  if (vnodeResult2.constructor != String) {
                    if (isArray(vnodeResult2)) {
                      obj = { children: vnodeResult2 };
                      let element = { type: g$1, props: obj, key: null, ref: null, __k: null, __: null, __b: 0, __e: null, __d: "Array", __c: "Array", constructor: -1, __v: 0, __i: "5.9.4", __u: 24 };
                      let sum = sum2 + 1;
                      sum2 = sum;
                      element.__v = sum;
                      let obj4 = obj;
                      if (null != obj.vnode) {
                        let vnodeResult = obj4.vnode(element);
                      }
                    } else if (undefined === vnodeResult2.constructor) {
                      if (vnodeResult2.__b > 0) {
                        let ref = null;
                        ({ type: type2, props, key: key2 } = vnodeResult2);
                        if (vnodeResult2.ref) {
                          ref = vnodeResult2.ref;
                        }
                        let __v = vnodeResult2.__v;
                        let element1 = { type: type2, props, key: key2, ref, __k: null, __: null, __b: 0, __e: null, __d: "Array", __c: "Array", constructor: -1, __v: 0, __i: "5.9.4", __u: 24 };
                        let tmp10 = __v;
                        if (null == __v) {
                          let sum1 = sum2 + 1;
                          sum2 = sum1;
                          tmp10 = sum1;
                        }
                        element1.__v = tmp10;
                        let tmp13 = null == __v;
                        if (tmp13) {
                          tmp13 = null != obj.vnode;
                        }
                        if (tmp13) {
                          let vnodeResult1 = obj.vnode(element1);
                        }
                      }
                    }
                  }
                }
              }
            }
            let element2 = { type: null, props: vnodeResult2, key: null, ref: null, __k: null, __: null, __b: 0, __e: null, __d: "Array", __c: "Array", constructor: -1, __v: 0, __i: "5.9.4", __u: 24 };
            let tmp21 = vnodeResult2;
            if (null == vnodeResult2) {
              sum2 = sum2 + 1;
              tmp21 = sum2;
            }
            element2.__v = tmp21;
            let tmp24 = null == vnodeResult2;
            if (tmp24) {
              tmp24 = null != obj.vnode;
            }
            if (tmp24) {
              vnodeResult2 = obj.vnode(element2);
            }
          }
        }
      }
      __k.__k[num2] = tmp7;
      if (null != tmp7) {
        tmp7.__ = __k;
        tmp7.__b = __k.__b + 1;
        let sum3 = num2 + num;
        ({ key, type } = tmp7);
        let diff = sum3 - 1;
        let sum4 = sum3 + 1;
        let tmp38 = __k[sum3];
        let num3 = sum3;
        if (null !== tmp38) {
          if (tmp38) {
            let __u = tmp38.key;
            if (key == __u) {
              num3 = sum3;
            }
          }
          if (null == tmp38) {
            let num4 = 0;
          } else {
            num4 = 1;
          }
          num3 = -1;
          if (tmp > num4) {
            let tmp39 = sum4;
            let tmp40 = diff;
            if (0 <= diff) {
              while (true) {
                let diff1 = tmp40;
                if (0 <= tmp40) {
                  let tmp44 = __k[tmp40];
                  if (tmp44) {
                    __u = tmp44.__u;
                    if (!(131072 & __u)) {
                      if (key == tmp44.key) {
                        num3 = tmp40;
                        if (type === tmp44.type) {
                          break;
                        }
                      }
                      break;
                    }
                  }
                  diff1 = tmp40 - 1;
                }
                let sum5 = tmp39;
                if (tmp39 < __k.length) {
                  let tmp46 = __k[tmp39];
                  if (tmp46) {
                    __u = tmp46.__u;
                    if (!(131072 & __u)) {
                      if (key == tmp46.key) {
                        num3 = tmp39;
                        if (type === tmp46.type) {
                          break;
                        }
                      }
                      break;
                    }
                  }
                  sum5 = tmp39 + 1;
                }
                tmp39 = sum5;
                tmp40 = diff1;
                if (0 <= diff1) {
                  continue;
                } else {
                  tmp39 = sum5;
                  tmp40 = diff1;
                  num3 = -1;
                  if (sum5 >= __k.length) {
                    break;
                  }
                }
                continue;
              }
            } else {
              tmp39 = sum4;
              tmp40 = diff;
              num3 = -1;
            }
          }
        }
        tmp7.__i = num3;
        let tmp47 = tmp;
        let tmp48 = null;
        if (-1 !== num3) {
          let diff2 = tmp - 1;
          let tmp50 = __k[num3];
          tmp47 = diff2;
          tmp48 = tmp50;
          if (tmp50) {
            tmp50.__u = tmp50.__u | 131072;
            tmp47 = diff2;
            tmp48 = tmp50;
          }
        }
        if (null != tmp48) {
          if (null !== tmp48.__v) {
            let tmp28 = num;
            let diff4 = tmp47;
            if (num3 !== sum3) {
              if (num3 === sum4) {
                let num5 = num + 1;
              } else if (sum3 < num3) {
                if (tmp47 > length2 - sum3) {
                  num5 = num + (num3 - sum3);
                } else {
                  num5 = num - 1;
                }
              } else {
                num5 = 0;
                if (num3 < sum3) {
                  num5 = 0;
                  if (num3 === diff) {
                    num5 = num3 - sum3;
                  }
                }
              }
              tmp28 = num5;
              diff4 = tmp47;
              if (num3 !== num2 + num5) {
                tmp7.__u = tmp7.__u | 65536;
                tmp28 = num5;
                diff4 = tmp47;
              }
            }
          }
        }
        let diff3 = num;
        if (-1 === num3) {
          diff3 = num - 1;
        }
        tmp28 = diff3;
        diff4 = tmp47;
        if (typeof tmp7.type !== "function") {
          tmp7.__u = tmp7.__u | 65536;
          tmp28 = diff3;
          diff4 = tmp47;
        }
      } else {
        let tmp113 = __k[num2];
        let __e = tmp113;
        if (tmp113) {
          __e = null == tmp113.key;
        }
        if (__e) {
          __e = tmp113.__e;
        }
        tmp28 = num;
        diff4 = tmp;
        if (__e) {
          if (tmp113.__e == __k.__d) {
            if (!tmp113.__) {
              __k.__d = null;
            } else {
              let __ = tmp113.__;
              let sum6 = tmp113.__i + 1;
              if (sum6 < __.__k.length) {
                while (true) {
                  __u = __.__k[sum6];
                  if (null == __u) {
                    sum6 = sum6 + 1;
                    let __e2 = __u.__e;
                    break;
                  } else if (null != __u.__e) {
                    break;
                  }
                }
              }
              if (typeof __.type === "function") {
                let tmp32 = m$1(__);
              }
            }
          }
          let tmp34 = O(tmp113, tmp113, false);
          __k[num2] = null;
          diff4 = tmp - 1;
          tmp28 = num;
        }
      }
      num2 = num2 + 1;
      num = tmp28;
      tmp = diff4;
      tmp2 = diff4;
    } while (num2 < length2);
  }
  if (tmp2) {
    for (let num6 = 0; num6 < length3; num6 = num6 + 1) {
      let tmp52 = __k[num6];
      let tmp53 = null != tmp52;
      if (tmp53) {
        tmp53 = !(131072 & tmp52.__u);
      }
      if (tmp53) {
        if (tmp52.__e == __k.__d) {
          if (!tmp52.__) {
            __k.__d = null;
          } else {
            let __2 = tmp52.__;
            let sum7 = tmp52.__i + 1;
            if (sum7 < __2.__k.length) {
              while (true) {
                length2 = __2.__k[sum7];
                if (null == length2) {
                  sum7 = sum7 + 1;
                  let __e3 = length2.__e;
                  break;
                } else if (null != length2.__e) {
                  break;
                }
              }
            }
            if (typeof __2.type === "function") {
              let tmp57 = m$1(__2);
            }
          }
        }
        let tmp59 = O(tmp52, tmp52);
      }
    }
  }
  let ___d = __k.__d;
  let num7 = 0;
  let tmp61;
  let tmp62 = ___d;
  if (0 < arg1.length) {
    while (true) {
      tmp63 = __k.__k[num7];
      let tmp64 = null != tmp63;
      let tmp65 = tmp60;
      let tmp67 = ___d;
      if (tmp64) {
        tmp64 = typeof tmp63 !== "boolean";
      }
      if (tmp64) {
        tmp64 = typeof tmp63 !== "function";
      }
      if (tmp64) {
        break;
      } else {
        num7 = num7 + 1;
        tmp60 = tmp65;
        ___d = tmp67;
        tmp61 = tmp65;
        tmp62 = tmp67;
      }
    }
    if (-1 === tmp63.__i) {
      let tmp70 = closure_19;
    } else {
      tmp70 = __k[tmp63.__i] || closure_19;
    }
    tmp63.__i = num7;
    M(insertBefore, tmp63, tmp70, arg4, arg5, arg6, arg7, tmp67, arg9, arr);
    const __e4 = tmp63.__e;
    if (tmp83) {
      if (tmp70.ref) {
        N(tmp70.ref, null, tmp63);
      }
      __c = tmp63.__c;
      if (!__c) {
        __c = __e4;
      }
      arr.push(tmp63.ref, __c, tmp63);
    }
    if (tmp87) {
      tmp65 = __e4;
    }
    if (!(65536 & tmp63.__u)) {
      if (tmp70.__k !== tmp63.__k) {
        if (typeof tmp63.type !== "function") {
          let ___d2 = tmp67;
          if (__e4) {
            ___d2 = __e4.nextSibling;
          }
          tmp63.__d = undefined;
          tmp63.__u = tmp63.__u & -196609;
        }
        ___d2 = tmp63.__d;
      }
    }
    if (typeof tmp63.type === "function") {
      const __k1 = tmp63.__k;
      if (__k1) {
        let num8 = 0;
        let tmp93 = tmp67;
        if (0 < __k1.length) {
          tmp67 = __k1[num8];
          let tmp95 = tmp93;
          while (!tmp67) {
            if (__k1) {
              num8 = num8 + 1;
              tmp93 = tmp95;
            }
            continue;
          }
          __k1[num8].__ = tmp63;
          if (typeof __k1[num8].type === "function") {
            __k2 = tmp97.__k;
            if (__k2) {
              let num9 = 0;
              let tmp103 = tmp95;
              if (0 < __k2.length) {
                while (true) {
                  tmp95 = __k2[num9];
                  let tmp106 = tmp103;
                  if (tmp95) {
                    __k2[num9].__ = tmp97;
                    tmp106 = $(__k2[num9], tmp103, insertBefore);
                  }
                  if (!__k2) {
                    break;
                  } else {
                    num9 = num9 + 1;
                    tmp103 = tmp106;
                    if (num9 >= __k2.length) {
                      break;
                    }
                  }
                }
              }
            }
          } else {
            let __e6 = tmp95;
            if (tmp97.__e != tmp95) {
              let tmp98 = tmp95;
              if (!tmp95) {
                tmp98 = null;
              }
              insertBefore.insertBefore(tmp97.__e, tmp98);
              __e6 = tmp97.__e;
            }
            while (true) {
              let nextSibling2 = __e6;
              if (__e6) {
                nextSibling2 = __e6.nextSibling;
              }
              if (null == nextSibling2) {
                break;
              } else {
                __e6 = nextSibling2;
                if (8 === nextSibling2.nodeType) {
                  continue;
                } else {
                  break;
                }
                break;
              }
            }
          }
        }
      }
    } else {
      let __e5 = tmp67;
      if (tmp63.__e != tmp67) {
        let tmp88 = tmp67;
        if (!tmp67) {
          tmp88 = null;
        }
        insertBefore.insertBefore(tmp63.__e, tmp88);
        __e5 = tmp63.__e;
      }
      while (true) {
        let nextSibling = __e5;
        if (__e5) {
          nextSibling = __e5.nextSibling;
        }
        if (null == nextSibling) {
          break;
        } else {
          __e5 = nextSibling;
          if (8 === nextSibling.nodeType) {
            continue;
          } else {
            break;
          }
          break;
        }
      }
    }
    tmp83 = tmp63.ref && tmp70.ref != tmp63.ref;
    tmp87 = null == tmp65 && null != __e4;
  }
  __k.__d = tmp62;
  __k.__e = tmp61;
}
function $(type, arg1, insertBefore) {
  let nextSibling;
  if (typeof type.type === "function") {
    const __k = type.__k;
    let tmp4 = arg1;
    if (__k) {
      let num = 0;
      let tmp5 = arg1;
      tmp4 = arg1;
      if (0 < __k.length) {
        while (true) {
          let tmp8 = tmp5;
          if (__k[num]) {
            __k[num].__ = type;
            tmp8 = $(__k[num], tmp5, insertBefore);
          }
          tmp4 = tmp8;
          if (!__k) {
            break;
          } else {
            num = num + 1;
            tmp5 = tmp8;
            tmp4 = tmp8;
            if (num >= __k.length) {
              break;
            }
          }
        }
      }
    }
    return tmp4;
  } else {
    let __e = arg1;
    if (type.__e != arg1) {
      let tmp = arg1;
      if (!arg1) {
        tmp = null;
      }
      insertBefore.insertBefore(type.__e, tmp);
      __e = type.__e;
    }
    while (true) {
      nextSibling = __e;
      if (__e) {
        nextSibling = __e.nextSibling;
      }
      if (null == nextSibling) {
        break;
      } else {
        __e = nextSibling;
        if (8 !== nextSibling.nodeType) {
          break;
        }
      }
    }
    return nextSibling;
  }
}
function T$1(style, key10064, num) {
  if ("-" === key10064[0]) {
    let str3 = "";
    if (null != num) {
      str3 = num;
    }
    style.setProperty(key10064, str3);
  } else {
    let str = "";
    if (null != num) {
      let text = num;
      if (typeof num === "number") {
        text = num;
        if (!re21.test(key10064)) {
          text = `${num}px`;
        }
      }
      str = text;
    }
    style[key10064] = str;
  }
}
function A$1(iter, checked, cssText, checked2, flag) {
  let str = checked2;
  if ("style" === checked) {
    if (typeof cssText === "string") {
      iter.style.cssText = cssText;
    } else {
      if (typeof str === "string") {
        iter.style.cssText = "";
        str = "";
      }
      if (str) {
        for (const key10064 in str) {
          let tmp13 = arg2;
          if (arg2) {
            tmp13 = key10064 in arg2;
          }
          if (tmp13) {
            continue;
          } else {
            let tmp15 = T$1(arg0.style, key10064, "");
            continue;
          }
          continue;
        }
      }
      if (cssText) {
        for (const key10072 in arg2) {
          let tmp17 = str;
          if (str) {
            tmp17 = arg2[key10072] === str[key10072];
          }
          if (tmp17) {
            continue;
          } else {
            let tmp19 = T$1(arg0.style, key10072, arg2[key10072]);
            continue;
          }
          continue;
        }
      }
    }
  } else {
    if ("o" === checked[0]) {
      if ("n" === checked[1]) {
        const str11 = checked.replace(/(PointerCapture)$|Capture$/i, "$1");
        if (str11.toLowerCase() in iter) {
          const formatted = str11.toLowerCase();
          let substr = formatted.slice(2);
        } else {
          substr = str11.slice(2);
        }
        if (!iter.l) {
          iter.l = {};
        }
        iter.l[substr + (checked !== str11)] = cssText;
        if (cssText) {
          if (str) {
            cssText.u = str.u;
          } else {
            const _Date = Date;
            cssText.u = Date.now();
            const listener = iter.addEventListener(substr, tmp8 ? L : D$1, tmp8);
          }
        } else {
          const removed = iter.removeEventListener(substr, tmp8 ? L : D$1, tmp8);
        }
      }
    }
    if (flag) {
      let replaced = checked.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      const str7 = checked.replace(/xlink(H|:h)/, "h");
    } else {
      replaced = checked;
      if ("width" !== checked) {
        replaced = checked;
        if ("height" !== checked) {
          replaced = checked;
          if ("href" !== checked) {
            replaced = checked;
            if ("list" !== checked) {
              replaced = checked;
              if ("form" !== checked) {
                replaced = checked;
                if ("tabIndex" !== checked) {
                  replaced = checked;
                  if ("download" !== checked) {
                    replaced = checked;
                    if ("rowSpan" !== checked) {
                      replaced = checked;
                      if ("colSpan" !== checked) {
                        replaced = checked;
                        if ("role" !== checked) {
                          replaced = checked;
                          if (checked in iter) {
                            try {
                              let str5 = "";
                              if (null != cssText) {
                                str5 = cssText;
                              }
                              iter[checked] = str5;
                            } catch (err) {
                              replaced = tmp;
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
    if (typeof cssText !== "function") {
      if (null == cssText) {
        iter.removeAttribute(replaced);
      } else {
        const attr = iter.setAttribute(replaced, cssText);
      }
    }
  }
}
function D$1(dependencyMap) {
  if (this.l) {
    if (!dependencyMap.t) {
      const _Date = Date;
      dependencyMap.t = Date.now();
    }
    let eventResult = dependencyMap;
    if (obj.event) {
      eventResult = obj.event(dependencyMap);
    }
    return tmp.l[dependencyMap.type + false](eventResult);
  }
}
function L(dependencyMap) {
  if (this.l) {
    const l = tmp.l;
    let eventResult = dependencyMap;
    if (obj.event) {
      eventResult = obj.event(dependencyMap);
    }
    return l[dependencyMap.type + true](eventResult);
  }
}
function M(__P, type, __u, __s2, flag, items, arr, arg7, arg8, arg9) {
  let length;
  let length2;
  let sum;
  let sum1;
  let __ = type;
  let tmp5 = __s2;
  type = type.type;
  if (undefined !== type.constructor) {
    return null;
  } else {
    let tmp9 = items;
    let tmp8 = arg7;
    let tmp7 = arg8;
    if (128 & __u.__u) {
      tmp7 = 32 & __u.__u;
      const __e = __u.__e;
      type.__e = __e;
      items = [__e];
      tmp8 = __e;
      tmp9 = items;
    }
    const __b = __s.__b;
    if (__b) {
      tmp11(type);
    }
    if (typeof type === "function") {
      try {
        const props = type.props;
        const contextType = type.contextType;
        __s = contextType;
        if (contextType) {
          if (__s) {
            __ = __s.props.value;
          } else {
            __ = tmp26.__;
          }
        } else {
          if (__u.__c) {
            __c = __u.__c;
            type.__c = __c;
            let obj1 = __c;
            __s = __c;
            const __E = __c.__E;
            __c.__ = __E;
            const tmp6 = __E;
          } else {
            if ("prototype" in type) {
              if (type.prototype.render) {
                type = new type(props, tmp35);
                obj1 = type;
                __s = type;
                type.__c = type;
              }
              if (__s) {
                __s.sub(obj1);
              }
              obj1.props = props;
              if (!obj1.state) {
                obj1.state = {};
              }
              obj1.context = tmp35;
              obj1.__n = tmp5;
              obj1.__d = true;
              flag = true;
              obj1.__h = [];
              obj1._sb = [];
            }
            __s = Object.create(b$1.prototype);
            new b$1(props, tmp35);
            obj1 = __s;
            type.__c = __s;
            __s.constructor = type;
            __s.render = q$1;
          }
          if (null == obj1.__s) {
            obj1.__s = obj1.state;
          }
          if (null != type.getDerivedStateFromProps) {
            if (obj1.__s == obj1.state) {
              __s = {};
              v$1(__s, obj1.__s);
              obj1.__s = __s;
            }
            v$1(obj1.__s, type.getDerivedStateFromProps(props, obj1.__s));
          }
          const props2 = obj1.props;
          const state = obj1.state;
          obj1.__v = type;
          let tmp74 = null == type.getDerivedStateFromProps;
          if (flag) {
            if (tmp74) {
              tmp74 = null != obj1.componentWillMount;
            }
            if (tmp74) {
              obj1.componentWillMount();
            }
            if (null != obj1.componentDidMount) {
              __h = obj1.__h;
              arr = __h.push(obj1.componentDidMount);
            }
          } else {
            let tmp75 = tmp74;
            if (tmp74) {
              tmp75 = props !== tmp71;
            }
            if (tmp75) {
              tmp75 = null != obj1.componentWillReceiveProps;
            }
            if (tmp75) {
              const result = obj1.componentWillReceiveProps(props, tmp35);
            }
            if (!obj1.__e) {
              if (type.__v !== __u.__v) {
                obj1.props = props;
                obj1.state = obj1.__s;
                obj1.__d = false;
              }
              ({ __e: type.__e, __k: type.__k } = __u);
              const __k = type.__k;
              const item = __k.forEach((item) => {
                if (item) {
                  item.__ = __;
                }
              });
              let num3 = 0;
              if (0 < obj1._sb.length) {
                do {
                  let __h1 = obj1.__h;
                  arr = __h1.push(obj1._sb[num3]);
                  sum = num3 + 1;
                  num3 = sum;
                  length = obj1._sb.length;
                } while (sum < length);
              }
              obj1._sb = [];
              if (obj1.__h.length) {
                arr.push(obj1);
              }
            }
            if (null != obj1.componentWillUpdate) {
              obj1.componentWillUpdate(props, obj1.__s, tmp35);
            }
            if (null != obj1.componentDidUpdate) {
              const __h2 = obj1.__h;
              __h2.push(() => {
                obj.componentDidUpdate(props2, state, closure_4);
              });
            }
          }
          obj1.context = tmp5;
          obj1.props = props;
          obj1.__P = __P;
          obj1.__e = false;
          const ___r = __s.__r;
          let num5 = 0;
          if ("prototype" in type) {
            if (type.prototype.render) {
              obj1.state = obj1.__s;
              obj1.__d = false;
              if (___r) {
                ___r(type);
              }
              let element = obj1.render(obj1.props, obj1.state, obj1.context);
              let num7 = 0;
              if (0 < obj1._sb.length) {
                do {
                  let __h3 = obj1.__h;
                  let arr3 = __h3.push(obj1._sb[num7]);
                  sum1 = num7 + 1;
                  num7 = sum1;
                  length2 = obj1._sb.length;
                } while (sum1 < length2);
              }
              obj1._sb = [];
            }
            obj1.state = obj1.__s;
            if (null != obj1.getChildContext) {
              obj1 = {};
              v$1(obj1, tmp5);
              v$1(obj1, obj1.getChildContext());
              tmp5 = obj1;
            }
            if (!flag) {
              flag = null == obj1.getSnapshotBeforeUpdate;
            }
            if (!flag) {
              const snapshotBeforeUpdate = obj1.getSnapshotBeforeUpdate(props2, state);
            }
            if (null != element) {
              if (element.type === g$1) {
                if (null == element.key) {
                  let children = element.props.children;
                }
                if (tmp140(children)) {
                  let items1 = children;
                } else {
                  items1 = [children];
                }
                tmp139(__P, items1, type, __u, tmp5, flag, tmp9, arr, tmp8, tmp7, arg9);
                obj1.base = type.__e;
                type.__u = type.__u & -161;
                if (obj1.__h.length) {
                  arr.push(obj1);
                }
                if (tmp6) {
                  obj1.__ = null;
                  obj1.__E = null;
                }
              }
            }
            children = element;
          }
          while (true) {
            obj1.__d = false;
            if (___r) {
              let ___rResult1 = ___r(type);
            }
            element = obj1.render(obj1.props, obj1.state, obj1.context);
            obj1.state = obj1.__s;
            if (!obj1.__d) {
              break;
            } else {
              sum2 = num5 + 1;
              num5 = sum2;
              if (sum2 < 25) {
                continue;
              } else {
                break;
              }
              break;
            }
          }
        }
      } catch (tmp162) {
        let tmp163 = null;
        tmp.__v = null;
        if (!tmp4) {
          if (tmp163 == arr) {
            ({ __e: tmp.__e, __k: tmp.__k } = tmp2);
          }
          tmp163 = __s;
          __s.__e(tmp162, tmp, tmp2);
        }
        tmp.__e = tmp3;
        let num9 = 32;
        if (tmp4) {
          num9 = 160;
        }
        tmp.__u = tmp.__u | num9;
        arr[arr.indexOf(tmp3)] = tmp163;
      }
    } else {
      if (null == tmp9) {
        if (type.__v === __u.__v) {
          ({ __k: type.__k, __e: type.__e } = __u);
        }
      }
      type.__e = z$1(__u.__e, type, __u, tmp5, flag, tmp9, arr, tmp7, arg9);
    }
    const diffed = __s.diffed;
    if (diffed) {
      diffed(type);
    }
  }
}
function z$1(__e, type, props, __s2, flag, items, arr, arg7, arg8) {
  let length;
  let tmp;
  let tmp30;
  let tmp73;
  ({ props, type } = type);
  if ("svg" === type) {
    flag = true;
  }
  let iter = __e;
  if (null != items) {
    let num = 0;
    let num3 = 3;
    iter = __e;
    if (0 < items.length) {
      while (true) {
        tmp = items[num];
        if (tmp) {
          if ("setAttribute" in tmp === type) {
            if (type) {
              let tmp3 = tmp.localName === type;
            } else {
              tmp3 = num3 === tmp.nodeType;
            }
            if (tmp3) {
              break;
            }
          }
        }
        num = num + 1;
        iter = __e;
      }
      items[num] = null;
      iter = tmp;
    }
  }
  let tmp4 = arg7;
  if (null != iter) {
    if (null === type) {
      let tmp91 = props.props === props;
      if (!tmp91) {
        if (tmp4) {
          tmp4 = iter.data === props;
        }
        tmp91 = tmp4;
      }
      if (!tmp91) {
        iter.data = props;
      }
    } else if (!items) {
      let iter2 = tmp10;
      if (!tmp4) {
        iter2 = tmp10;
        if (null != items) {
          obj = {};
          num3 = 0;
          iter2 = obj;
          if (0 < iter.attributes.length) {
            do {
              let iter3 = iter.attributes[num3];
              obj[iter3.name] = iter3.value;
              num3 = num3 + 1;
              iter2 = obj;
              length = iter.attributes.length;
            } while (num3 < length);
          }
        }
      }
      const keys = Object.keys();
      if (keys !== undefined) {
        while (keys[num3] !== undefined) {
          let tmp95 = iter2[tmp16];
          if ("children" == tmp16) {
            continue;
          } else {
            if ("dangerouslySetInnerHTML" != tmp16) {
              let tmp18 = "key" === tmp16 || tmp16 in props;
              if (!tmp18) {
                let tmp25 = A$1(iter, tmp94, null, tmp95, flag);
              }
            }
            continue;
          }
          continue;
        }
      }
      let tmp34;
      const keys1 = Object.keys();
      if (keys1 !== undefined) {
        tmp34 = tmp30;
        while (keys1[num3] !== undefined) {
          let tmp97 = props[tmp40];
          if ("children" == tmp40) {
            continue;
          } else {
            tmp30 = tmp97;
            if ("dangerouslySetInnerHTML" == tmp40) {
              continue;
            } else {
              tmp30 = tmp39;
              if ("value" == tmp40) {
                continue;
              } else {
                tmp30 = tmp39;
                if ("checked" == tmp40) {
                  continue;
                } else {
                  let tmp41 = "key" === tmp40;
                  if (!tmp41) {
                    let tmp42 = tmp4;
                    if (tmp4) {
                      tmp42 = typeof tmp97 !== "function";
                    }
                    tmp41 = tmp42;
                  }
                  if (!tmp41) {
                    tmp41 = iter2[tmp40] === tmp97;
                  }
                  tmp30 = tmp39;
                  if (tmp41) {
                    continue;
                  } else {
                    let tmp48 = A$1(iter, tmp96, tmp97, iter2[tmp40], flag);
                    tmp30 = tmp39;
                    continue;
                  }
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
      }
      if (tmp34) {
        let tmp75 = tmp4;
        if (!tmp4) {
          let tmp76 = tmp13;
          if (tmp13) {
            tmp76 = tmp34.__html === tmp13.__html || tmp34.__html === iter.innerHTML;
            const tmp77 = tmp34.__html === tmp13.__html || tmp34.__html === iter.innerHTML;
          }
          tmp75 = tmp76;
        }
        if (!tmp75) {
          iter.innerHTML = tmp34.__html;
        }
        type.__k = [];
      } else {
        if (tmp13) {
          iter.innerHTML = "";
        }
        items = isArray(tmp33);
        let tmp51 = tmp33;
        if (!items) {
          items = [tmp33];
          tmp51 = items;
        }
        let tmp52 = flag;
        if (flag) {
          tmp52 = "foreignObject" !== type;
        }
        if (items) {
          const first = items[0];
        } else if (props.__k) {
          let num5 = 0;
          if (0 < props.__k.length) {
            while (true) {
              items = props.__k[num5];
              if (null == items) {
                num5 = num5 + 1;
                __e = items.__e;
                break;
              } else if (null != items.__e) {
                break;
              }
            }
          }
          if (typeof props.type === "function") {
            if (props.__) {
              const tmp57 = m$1(props.__, props.__i + 1);
            }
          }
        }
        P$1(iter, tmp51, type, props, __s2, tmp52, items, arr, first, tmp4, arg8);
        if (null != items) {
          let diff = tmp98 - 1;
          if (+items.length) {
            do {
              if (null != items[diff]) {
                let tmp71 = items[diff];
                let parentNode = tmp71.parentNode;
                if (parentNode) {
                  let removeChildResult = parentNode.removeChild(tmp71);
                }
              }
              tmp73 = +diff;
              diff = tmp73 - 1;
            } while (tmp73);
          }
        }
      }
      if (!tmp4) {
        let tmp78 = undefined !== tmp32;
        if (tmp78) {
          let tmp79 = tmp32 !== iter.value;
          if (!tmp79) {
            tmp79 = "progress" === type && !tmp32;
            const tmp80 = "progress" === type && !tmp32;
          }
          if (!tmp79) {
            tmp79 = "option" === type && tmp32 !== iter2.value;
            const tmp81 = "option" === type && tmp32 !== iter2.value;
          }
          tmp78 = tmp79;
        }
        if (tmp78) {
          A$1(iter, "value", tmp32, iter2.value, false);
        }
        if (tmp86) {
          A$1(iter, "checked", tmp31, iter2.checked, false);
        }
        tmp86 = undefined !== tmp31 && tmp31 !== iter.checked;
      }
    } else {
      const call = slice.call;
      const childNodes = iter.childNodes;
      typeof call === "unknown" ? slice() : call(childNodes);
    }
    return iter;
  } else if (null === type) {
    const _document = document;
    return document.createTextNode(props);
  } else {
    const _document2 = document;
    if (flag) {
      let elementNS = _document2.createElementNS("http://www.w3.org/2000/svg", type);
    } else {
      let is = props.is;
      if (is) {
        is = props;
      }
      elementNS = <type {......is} />;
    }
  }
}
function N(fn, current, __v) {
  try {
    if (typeof fn === "function") {
      fn(current);
    } else {
      fn.current = current;
    }
  } catch (tmp4) {
    obj.__e(tmp4, __v);
  }
}
function O(ref, __v, arg2) {
  if (obj.unmount) {
    obj.unmount(ref);
  }
  if (ref.ref) {
    if (!tmp2) {
      N(ref, null, __v);
    }
    tmp2 = ref.current && ref.current !== ref.__e;
  }
  __c = ref.__c;
  if (null == __c) {
    let tmp9 = arg2;
    const __k = ref.__k;
    if (__k) {
      for (let num = 0; num < __k.length; num = num + 1) {
        if (__k[num]) {
          let tmp12 = tmp9;
          let tmp11 = O;
          if (!tmp9) {
            tmp12 = typeof ref.type !== "function";
          }
          let tmp11Result = tmp11(__k[num], __v, tmp12);
        }
      }
    }
    if (!tmp9) {
      tmp9 = null == ref.__e;
    }
    if (!tmp9) {
      p$1(ref.__e);
    }
    ref.__d = undefined;
    ref.__e = undefined;
    ref.__ = undefined;
  } else {
    if (__c.componentWillUnmount) {
      try {
        __c.componentWillUnmount();
      } catch (tmp7) {
        obj.__e(tmp7, __v);
      }
    }
    __c.__P = null;
    __c.base = null;
    ref.__c = undefined;
  }
}
function q$1(arg0, arg1, arg2) {
  return this.constructor(arg0, arg2);
}
let fn = function y(t, fn, fn2) {
  closure_42 = tmp + 1;
  if (obj.__h) {
    let num = c46;
    if (!c46) {
      num = 2;
    }
    obj.__h(__c, tmp, num);
  }
  c46 = 0;
  let __H = __c.__H;
  if (!__H) {
    obj = { __: [], __h: [] };
    __c.__H = obj;
    __H = obj;
  }
  if (+closure_42 >= __H.__.length) {
    let __ = __H.__;
    obj = { __V };
    __.push(obj);
  }
  closure_0 = tmp7;
  __H.__[+closure_42].t = t;
  if (!__H.__[+closure_42].__c) {
    if (fn2) {
      let tmp10 = fn2(fn);
    } else {
      tmp10 = fn;
      if (typeof fn === "function") {
        tmp10 = fn(undefined);
      }
    }
    items = [
      tmp10,
      (arg0) => {
          if (closure_0.__N) {
            let first = obj.__N[0];
          } else {
            first = obj.__[0];
          }
          const tResult = closure_0.t(first, arg0);
          if (first !== tResult) {
            items = [tResult, obj.__[1]];
            obj.__N = items;
            __c = obj.__c;
            __c.setState({});
          }
        }
    ];
    tmp7.__ = items;
    tmp7.__c = __c;
    if (!__c.u) {
      const shouldComponentUpdate = function f(arg0, arg1, arg2) {
        if (closure_0.__c.__H) {
          const self = this;
          const __ = tmp.__c.__H.__;
          const found = __.filter((__c) => __c.__c);
          if (found.every((__N) => !__N.__N)) {
            if (!closure_2) {
              return !closure_2;
            } else {
              const call2 = closure_2.call;
              if (typeof call2 === "unknown") {
                let call2Result = tmp14(arg0, arg1, arg2);
              } else {
                call2Result = call2(self, arg0, arg1, arg2);
              }
            }
          } else {
            c0 = false;
            const item = found.forEach((__N) => {
              if (__N.__N) {
                __N.__ = __N.__N;
                __N.__N = undefined;
                if (__N.__[0] !== __N.__[0]) {
                  c0 = true;
                }
              }
            });
            let tmp7 = !c0;
            if (!c0) {
              tmp7 = tmp.__c.props === arg0;
            }
            let tmp8 = !tmp7;
            if (!tmp7) {
              if (!closure_2) {
                tmp8 = !closure_2;
              } else {
                const call = closure_2.call;
                if (typeof call === "unknown") {
                  let callResult = tmp10(arg0, arg1, arg2);
                } else {
                  callResult = call(self, arg0, arg1, arg2);
                }
              }
            }
            return tmp8;
          }
        } else {
          return true;
        }
      };
      __c.u = true;
      closure_2 = __c.shouldComponentUpdate;
      const componentWillUpdate = __c.componentWillUpdate;
      __c.componentWillUpdate = function(D, keys, length) {
        const self = this;
        if (this.__e) {
          closure_2 = undefined;
          fn(D, keys, length);
        }
        if (componentWillUpdate) {
          const call = tmp4.call;
          if (typeof call === "unknown") {
            tmp4(D, keys, length);
          } else {
            call(self, D, keys, length);
          }
        }
      };
      __c.shouldComponentUpdate = shouldComponentUpdate;
    }
  }
  return __H.__[+closure_42].__N || __H.__[+closure_42].__;
};
class A {
  constructor(arg0, arg1) {
    tmp = +closure_42;
    closure_42 = tmp + 1;
    obj = closure_49;
    if (closure_49.__h) {
      num = c46;
      tmp2 = c43;
      if (!c46) {
        num = 4;
      }
      __hResult = obj.__h(tmp2, tmp, num);
    }
    c46 = 0;
    __H = c43.__H;
    if (!__H) {
      tmp4 = c43;
      obj = { __: null, __h: null };
      obj.__ = [];
      obj.__h = [];
      c43.__H = obj;
      __H = obj;
    }
    if (tmp >= __H.__.length) {
      __ = __H.__;
      obj1 = { __V: null };
      tmp5 = closure_48;
      obj1.__V = closure_48;
      arr = __.push(obj1);
    }
    tmp7 = __H.__[tmp];
    __s = obj.__s;
    tmp8 = !__s;
    if (!__s) {
      __H = tmp7.__H;
      someResult = !__H;
      if (__H) {
        someResult = __H.length !== require.length;
      }
      if (!someResult) {
        someResult = require.some((item, index) => item !== __H[index]);
      }
      tmp8 = someResult;
    }
    if (tmp8) {
      tmp10 = global;
      tmp7.__ = global;
      tmp7.i = require;
      tmp11 = c43;
      __h = c43.__h;
      arr1 = __h.push(tmp7);
    }
    return;
  }
}
const fn2 = function q(__h, i) {
  closure_42 = tmp + 1;
  if (obj.__h) {
    let num = c46;
    if (!c46) {
      num = 7;
    }
    obj.__h(__c, tmp, num);
  }
  c46 = 0;
  let __H = __c.__H;
  if (!__H) {
    obj = { __: [], __h: [] };
    __c.__H = obj;
    __H = obj;
  }
  if (+closure_42 >= __H.__.length) {
    let __ = __H.__;
    obj = { __V };
    __.push(obj);
  }
  __H = tmp7.__H;
  let someResult = !__H;
  if (__H) {
    someResult = __H.length !== i.length;
  }
  if (!someResult) {
    someResult = i.some((item, index) => item !== __H[index]);
  }
  if (someResult) {
    tmp7.__V = __h();
    tmp7.i = i;
    tmp7.__h = __h;
    __ = tmp7.__V;
  } else {
    __ = tmp7.__;
  }
  return __;
};
function j() {
  let arr = closure_47.shift();
  if (arr) {
    if (arr.__P) {
      if (arr.__H) {
        try {
          __h = arr.__H.__h;
          const item = __h.forEach(z);
          const __h1 = arr.__H.__h;
          const item1 = __h1.forEach(B);
          arr.__H.__h = [];
        } catch (tmp8) {
          tmp.__H.__h = [];
          obj.__e(tmp8, tmp.__v);
        }
      }
    }
    arr = closure_47.shift();
  }
}
function w(arg0) {
  closure_0 = arg0;
  fn = function r() {
    clearTimeout(closure_2);
    if (closure_60) {
      const _cancelAnimationFrame = cancelAnimationFrame;
      cancelAnimationFrame(closure_1);
    }
    const timerId = setTimeout(closure_0);
  };
  const timeout = setTimeout(fn, 100);
  if (closure_60) {
    _requestAnimationFrame = requestAnimationFrame;
    closure_1 = requestAnimationFrame(fn);
  }
}
function z(__c) {
  __c = __c.__c;
  if (typeof __c === "function") {
    __c.__c = undefined;
    __c();
  }
}
function B(arg0) {
  arg0.__c = arg0.__();
}
function D(arg0, fn) {
  let tmp = fn;
  if (typeof fn === "function") {
    tmp = fn(arg0);
  }
  return tmp;
}
function DialogHeader(options) {
  options = options.options;
  const tmp = fn2(() => {
    obj = { __html: null };
    const elementNS = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const entries = Object.entries({ width: "32", height: "30", viewBox: "0 0 72 66", fill: "inherit" });
    const item = entries.forEach((item) => {
      [tmp, tmp2] = item;
      obj3.setAttributeNS(null, tmp, tmp2);
    });
    const elementNS1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const entries1 = Object.entries({ transform: "translate(11, 11)", d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z" });
    const item1 = entries1.forEach((item) => {
      [tmp, tmp2] = item;
      obj3.setAttributeNS(null, tmp, tmp2);
    });
    elementNS.appendChild(elementNS1);
    obj.__html = elementNS.outerHTML;
    return obj;
  }, []);
  let tmp2Result = null;
  if (options.showBranding) {
    obj = { class: "brand-link", target: "_blank", href: "https://sentry.io/welcome/", title: "Powered by Sentry", rel: "noopener noreferrer", dangerouslySetInnerHTML: tmp };
    tmp2Result = tmp2("a", obj);
  }
  return y$1("h2", { class: "dialog__header" }, y$1("span", { class: "dialog__title" }, options.formTitle), tmp2Result);
}
function retrieveStringValue(get, arg1) {
  const str = get.get(arg1);
  let str2 = "";
  if (typeof str === "string") {
    str2 = str.trim();
  }
  return str2;
}
function Form(onSubmitError) {
  ({ options, defaultEmail, defaultName, onSubmit: f107815, onSubmitSuccess } = onSubmitError);
  onSubmitError = onSubmitError.onSubmitError;
  let screenshotInput = onSubmitError.screenshotInput;
  c4 = undefined;
  emailLabel = undefined;
  c10 = undefined;
  c11 = undefined;
  c14 = undefined;
  closure_15 = undefined;
  ({ tags: c4, addScreenshotButtonLabel, emailLabel } = options);
  const isEmailRequired = options.isEmailRequired;
  const isNameRequired = options.isNameRequired;
  const messageLabel = options.messageLabel;
  const nameLabel = options.nameLabel;
  const isRequiredLabel = options.isRequiredLabel;
  ({ onFormClose, showEmail, showName } = onSubmitError);
  ({ removeScreenshotButtonLabel, cancelButtonLabel, emailPlaceholder, messagePlaceholder, namePlaceholder, submitButtonLabel } = options);
  [tmp5, c10] = onSubmitError(fn(D, false), 2);
  const tmp = fn;
  let tmp2 = D;
  let tmp3 = onSubmitError;
  const tmp4 = onSubmitError(fn(D, false), 2);
  [tmp7, c11] = onSubmitError(fn(D, null), 2);
  c46 = 1;
  const tmp8 = onSubmitError(fn(D, false), 2);
  const first = tmp8[0];
  closure_13 = tmp8[1];
  let input;
  if (screenshotInput != null) {
    input = screenshotInput.input;
  }
  const tmp6 = onSubmitError(fn(D, null), 2);
  [tmp12, c14] = tmp3(tmp(tmp2, null), 2);
  f107815 = (arg0) => {
    _undefined2(arg0);
    closure_13(false);
  };
  items = [emailLabel, isEmailRequired, isNameRequired, messageLabel, nameLabel];
  f107815 = (name) => {
    let tmp2 = isEmailRequired;
    let tmp3 = isNameRequired;
    if (isNameRequired) {
      tmp3 = !name.name;
    }
    items = [];
    if (tmp3) {
      items.push(nameLabel);
    }
    if (tmp2) {
      tmp2 = !name.email;
    }
    if (tmp2) {
      items.push(emailLabel);
    }
    if (!name.message) {
      items.push(messageLabel);
    }
    if (items.length > 0) {
      const _HermesInternal = HermesInternal;
      _undefined("Please enter in the following required fields: " + items.join(", "));
    } else {
      _undefined(null);
    }
    return 0 === items.length;
  };
  c46 = 8;
  const tmp13 = fn2;
  const tmp3Result = tmp3(tmp(tmp2, null), 2);
  closure_15 = fn2(() => f71260, items);
  f107815 = screenshotInput(function*(arg0, value) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            _undefined(true);
            let tags = 1;
            closure_0.preventDefault();
            if (closure_0.target instanceof globalThis.HTMLFormElement) {
              const _FormData = FormData;
              const formData = new FormData(tmp87.target);
              closure_129_0 = formData;
              let valueResult;
              if (screenshotInput) {
                if (first) {
                  valueResult = screenshotInput.value();
                }
              }
              c5 = 2;
              c6 = 1;
              const obj1 = { value: valueResult, done: false };
              return obj1;
            } else {
              tags = 0;
              _undefined(false);
              c6 = 3;
              return { value: "HermesInternal", done: null };
            }
            tmp87 = closure_0;
          }
        } else if (1 === tmp8) {
          tags = 0;
          _undefined(false);
          throw screenshotInput;
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            tags = 0;
            _undefined(false);
            c6 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_129_1 = value;
            const obj3 = { name: retrieveStringValue(closure_129_0, "name"), email: retrieveStringValue(closure_129_0, "email"), message: retrieveStringValue(closure_129_0, "message"), attachments: null };
            let tmp40;
            if (closure_129_1) {
              items = [closure_129_1];
              tmp40 = items;
            }
            obj3.attachments = tmp40;
            closure_129_2 = obj3;
            if (closure_1_15(closure_129_2)) {
              tags = 2;
              const obj4 = { name: closure_129_2.name, email: closure_129_2.email, message: closure_129_2.message, source: "widget", tags };
              const obj5 = { attachments: closure_129_2.attachments };
              c5 = 4;
              c6 = 1;
              const obj6 = { value: closure_0(obj4, obj5), done: false };
              return obj6;
            } else {
              tags = 0;
              _undefined(false);
              c6 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
        } else {
          if (3 === tmp8) {
            tags = 1;
            closure_129_4 = screenshotInput;
            if (messageLabel) {
              const debug = f107815(onSubmitSuccess[2]).debug;
              debug.error(closure_129_4);
            }
            _undefined(closure_129_4);
            tmp3(closure_129_4);
            tags = 0;
            _undefined(false);
            c6 = 3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_3 = value;
            tmp5(closure_129_2, closure_129_3);
            tags = 1;
          }
          tags = 0;
          _undefined(false);
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp72) {
        screenshotInput = tmp72;
        if (tmp4 === tags) {
          c6 = tmp2;
          throw tmp72;
        } else if (tmp === tmp74) {
          c5 = tmp;
        } else {
          c5 = tmp2;
        }
      }
    }
  });
  if (screenshotInput) {
    screenshotInput = first;
  }
  const items1 = [screenshotInput, onSubmitSuccess, onSubmitError];
  f107815 = function(arg0) {
    const self = this;
    const apply = f107815.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  c46 = 8;
  obj = { class: "form", onSubmit: tmp13(() => f71260, items1) };
  let tmp15Result = null;
  if (input) {
    tmp15Result = null;
    if (first) {
      obj = { onError: tmp14 };
      tmp15Result = tmp15(input, obj);
    }
  }
  obj = { class: "form__right", "data-sentry-feedback": true, disabled };
  tmp15Result = null;
  if (tmp7) {
    tmp15Result = tmp15("div", { class: "form__error-container" }, tmp7);
  }
  if (showName) {
    let obj1 = { label: nameLabel, isRequiredLabel, isRequired: isNameRequired };
    let obj2 = { class: "form__input", defaultValue: defaultName, id: "name", name: "name", placeholder: namePlaceholder, required: isNameRequired, type: "text" };
    let tmp15Result2 = tmp15("label", { for: "name", class: "form__label" }, tmp15(LabelText, obj1), tmp15("input", obj2));
    const tmp15Result1 = tmp15(LabelText, obj1);
  } else {
    let obj3 = { "aria-hidden": true, value: defaultName, name: "name", type: "hidden" };
    tmp15Result2 = tmp15("input", obj3);
  }
  if (showEmail) {
    let obj4 = { label: emailLabel, isRequiredLabel, isRequired: isEmailRequired };
    let obj5 = { class: "form__input", defaultValue: defaultEmail, id: "email", name: "email", placeholder: emailPlaceholder, required: isEmailRequired, type: "email" };
    let tmp15Result4 = tmp15("label", { for: "email", class: "form__label" }, tmp15(LabelText, obj4), tmp15("input", obj5));
    const tmp15Result3 = tmp15(LabelText, obj4);
  } else {
    let obj6 = { "aria-hidden": true, value: defaultEmail, name: "email", type: "hidden" };
    tmp15Result4 = tmp15("input", obj6);
  }
  tmp14 = fn2(() => f71260, []);
  const tmp15Result5 = y$1(LabelText, { label: messageLabel, isRequiredLabel, isRequired: true });
  let tmp15Result9 = null;
  if (input) {
    const obj7 = {
      class: "btn btn--default",
      disabled,
      type: "button",
      onClick() {
          _undefined2(null);
          closure_13((arg0) => !arg0);
        }
    };
    if (first) {
      addScreenshotButtonLabel = removeScreenshotButtonLabel;
    }
    const tmp15Result7 = tmp15("button", obj7, addScreenshotButtonLabel);
    let tmp15Result8 = null;
    if (tmp12) {
      tmp15Result8 = tmp15("div", { class: "form__error-container" }, tmp12.message);
    }
    tmp15Result9 = tmp15("label", { for: "screenshot", class: "form__label" }, tmp15Result7, tmp15Result8);
  }
  const tmp15Result6 = y$1("label", { for: "message", class: "form__label" }, y$1(LabelText, { label: messageLabel, isRequiredLabel, isRequired: true }), y$1("textarea", { autoFocus: true, class: "form__input form__input--textarea", id: "message", name: "message", placeholder: messagePlaceholder, required: true, rows: 5 }));
  const tmp15Result10 = y$1("div", { class: "form__top" }, tmp15Result, tmp15Result2, tmp15Result4, y$1("label", { for: "message", class: "form__label" }, y$1(LabelText, { label: messageLabel, isRequiredLabel, isRequired: true }), y$1("textarea", { autoFocus: true, class: "form__input form__input--textarea", id: "message", name: "message", placeholder: messagePlaceholder, required: true, rows: 5 })), tmp15Result9);
  return y$1("form", obj, tmp15Result, y$1("fieldset", obj, tmp15Result10, y$1("div", { class: "btn-group" }, y$1("button", { class: "btn btn--primary", disabled, type: "submit" }, submitButtonLabel), y$1("button", { class: "btn btn--default", disabled, type: "button", onClick }, cancelButtonLabel))));
}
function LabelText(arg0) {
  ({ label, isRequired } = arg0);
  if (isRequired) {
    isRequired = tmp2("span", { class: "form__label__text--required" }, tmp);
  }
  return y$1("span", { class: "form__label__text" }, label, isRequired);
}
function Dialog(onFormSubmitted) {
  onFormSubmitted = onFormSubmitted.onFormSubmitted;
  const merged = Object.assign(onFormSubmitted, Object.assign({ open: 0, onFormSubmitted: 0 }));
  let first;
  const options = merged.options;
  const tmp3 = first(fn(D, null), 2);
  first = tmp3[0];
  closure_3 = tmp3[1];
  items = [first];
  let f71260 = () => {
    if (first) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp);
      closure_3(null);
    }
    f71260();
  };
  [][0] = onFormSubmitted;
  f71260 = (arg0, arg1) => {
    merged.onSubmitSuccess(arg0, arg1);
    closure_3(setTimeout(() => {
      closure_1_0();
      closure_1_3(null);
    }, 5000));
  };
  c46 = 8;
  const tmp2 = fn2(() => {
    obj = { __html: null };
    const _document = f71260(merged[2]).GLOBAL_OBJ.document;
    const elementNS = _document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const entries = Object.entries({ width: "16", height: "17", viewBox: "0 0 16 17", fill: "inherit" });
    const item = entries.forEach((item) => {
      [tmp, tmp2] = item;
      obj3.setAttributeNS(null, tmp, tmp2);
    });
    const _document2 = f71260(merged[2]).GLOBAL_OBJ.document;
    const elementNS1 = _document2.createElementNS("http://www.w3.org/2000/svg", "g");
    const entries1 = Object.entries({ clipPath: "url(#clip0_57_156)" });
    const item1 = entries1.forEach((item) => {
      [tmp, tmp2] = item;
      obj3.setAttributeNS(null, tmp, tmp2);
    });
    const _document3 = f71260(merged[2]).GLOBAL_OBJ.document;
    const elementNS2 = _document3.createElementNS("http://www.w3.org/2000/svg", "path");
    const entries2 = Object.entries({ "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z" });
    const item2 = entries2.forEach((item) => {
      [tmp, tmp2] = item;
      obj3.setAttributeNS(null, tmp, tmp2);
    });
    const _document4 = f71260(merged[2]).GLOBAL_OBJ.document;
    const elementNS3 = _document4.createElementNS("http://www.w3.org/2000/svg", "path");
    const entries3 = Object.entries({ d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z" });
    const item3 = entries3.forEach((item) => {
      [tmp, tmp2] = item;
      obj3.setAttributeNS(null, tmp, tmp2);
    });
    elementNS.appendChild(elementNS1).append(elementNS3, elementNS2);
    const _document5 = f71260(merged[2]).GLOBAL_OBJ.document;
    const elementNS4 = _document5.createElementNS("http://www.w3.org/2000/svg", "defs");
    const _document6 = f71260(merged[2]).GLOBAL_OBJ.document;
    const elementNS5 = _document6.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    const entries4 = Object.entries({ id: "clip0_57_156" });
    const item4 = entries4.forEach((item) => {
      [tmp, tmp2] = item;
      obj3.setAttributeNS(null, tmp, tmp2);
    });
    const _document7 = f71260(merged[2]).GLOBAL_OBJ.document;
    const elementNS6 = _document7.createElementNS("http://www.w3.org/2000/svg", "rect");
    const entries5 = Object.entries({ width: "16", height: "16", fill: "white", transform: "translate(0 0.5)" });
    const item5 = entries5.forEach((item) => {
      [tmp, tmp2] = item;
      obj3.setAttributeNS(null, tmp, tmp2);
    });
    elementNS5.appendChild(elementNS6);
    elementNS4.appendChild(elementNS5);
    const appendChildResult = elementNS.appendChild(elementNS1);
    const appendChildResult3 = elementNS.appendChild(elementNS4);
    elementNS.appendChild(elementNS4).appendChild(elementNS5).appendChild(elementNS6);
    obj.__html = elementNS.outerHTML;
    return obj;
  }, []);
  if (first) {
    obj = { class: "success__position", onClick: tmp5 };
    obj = { class: "success__icon", dangerouslySetInnerHTML: tmp2 };
    let tmp7Result = tmp7("div", obj, tmp7("div", { class: "success__content" }, options.successMessageText, tmp7("span", obj)));
  } else {
    obj = { class: "dialog", onClick: options.onFormClose, open: onFormSubmitted.open };
    const obj1 = {
      class: "dialog__content",
      onClick(stopPropagation) {
          stopPropagation.stopPropagation();
        }
    };
    const obj2 = { options };
    const obj3 = {};
    tmp7Result = tmp7(DialogHeader, obj2);
    const merged1 = Object.assign(merged);
    obj3.onSubmitSuccess = tmp6;
    tmp7Result = tmp7("dialog", obj, tmp7("div", { class: "dialog__position" }, tmp7("div", obj1, tmp7Result, tmp7(Form, obj3))));
  }
  return y$1(g$1, null, tmp7Result);
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const document = _mod682.GLOBAL_OBJ.document;
const navigator = _mod682.GLOBAL_OBJ.navigator;
let c6 = "Report a Bug";
function sendFeedback(message) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = { includeReplay: true };
  }
  let client;
  closure_1 = undefined;
  if (message.message) {
    client = _mod682.getClient();
    if (client) {
      let length = message.tags;
      if (length) {
        const _Object = Object;
        length = Object.keys(message.tags).length;
      }
      if (length) {
        let tmp6Result = tmp6(682);
        const currentScope = tmp6Result.getCurrentScope();
        currentScope.setTags(message.tags);
      }
      tmp6Result = tmp6(682);
      obj = { source: "api", url: tmp6(682).getLocationHref() };
      const merged = Object.assign(message);
      closure_1 = tmp6Result.captureFeedback(obj, obj);
      const promise = new Promise((arg0, arg1) => {
        client = arg0;
        closure_1 = arg1;
        const timeout = setTimeout(() => closure_1("Unable to determine if Feedback was correctly sent."), 30000);
        closure_3 = client.on("afterSendEvent", (event_id, statusCode) => {
          if (event_id.event_id === closure_1) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_2);
            closure_3();
            statusCode = undefined;
            if (statusCode != null) {
              statusCode = statusCode.statusCode;
            }
            if (statusCode) {
              if (statusCode.statusCode >= 200) {
                if (statusCode.statusCode < 300) {
                  let tmp10Result = closure_0(tmp);
                }
                return tmp10Result;
              }
            }
            let statusCode1;
            if (statusCode != null) {
              statusCode1 = statusCode.statusCode;
            }
            let str = "Unable to send feedback. This could be because of network issues, or because you are using an ad-blocker.";
            if (403 === statusCode1) {
              str = "Unable to send feedback. This could be because this domain is not in your list of allowed domains.";
            }
            tmp10Result = closure_1(str);
          }
        });
      });
      return promise;
    } else {
      const _Error2 = Error;
      const error = new Error("No client setup, cannot send feedback.");
      throw error;
    }
  } else {
    const _Error = Error;
    const error1 = new Error("Unable to submit feedback with empty message");
    throw error1;
  }
}
let __SENTRY_DEBUG__ = typeof globalThis.__SENTRY_DEBUG__ === "undefined";
if (typeof globalThis.__SENTRY_DEBUG__ !== "undefined") {
  __SENTRY_DEBUG__ = globalThis.__SENTRY_DEBUG__;
}
let closure_10 = { foreground: "#2b2233", background: "#ffffff", accentForeground: "white", accentBackground: "rgba(88, 74, 192, 1)", successColor: "#268d75", errorColor: "#df3338", border: "1.5px solid rgba(41, 35, 47, 0.13)", boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)", outline: "1px auto var(--accent-background)", interactiveFilter: "brightness(95%)" };
let closure_11 = { foreground: "#ebe6ef", background: "#29232f", accentForeground: "white", accentBackground: "rgba(88, 74, 192, 1)", successColor: "#2da98c", errorColor: "#f55459", border: "1.5px solid rgba(235, 230, 239, 0.15)", boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)", outline: "1px auto var(--accent-background)", interactiveFilter: "brightness(150%)" };
let closure_19 = {};
let items = [];
const re21 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const slice = items.slice;
let obj = {
  __e(require, __v, arg2, arg3) {
    let __ = __v.__;
    let tmp = require;
    let tmp2 = require;
    if (__) {
      __c = __.__c;
      let tmp5 = tmp;
      if (__c) {
        tmp5 = tmp;
        if (!__c.__) {
          try {
            let constructor = __c.constructor;
            obj = constructor;
            if (constructor) {
              constructor = null != obj.getDerivedStateFromError;
            }
            if (constructor) {
              __c.setState(obj.getDerivedStateFromError(tmp));
              let ___d = __c.__d;
            }
            if (null != __c.componentDidCatch) {
              obj = arg3;
              if (!arg3) {
                obj = {};
              }
              __c.componentDidCatch(tmp, obj);
              ___d = __c.__d;
            }
            if (___d) {
              __c.__E = __c;
              return __c;
            } else {
              tmp5 = tmp;
            }
          } catch (tmp5) {
          }
        }
      }
      __ = __.__;
      tmp = tmp5;
      tmp2 = tmp5;
    }
    throw tmp2;
  }
};
let sum2 = 0;
b$1.prototype.render = g$1;
const __initData = [];
if (typeof Promise === "function") {
  let _setTimeout = then.bind(Promise.resolve());
} else {
  _setTimeout = setTimeout;
}
function H(__v, __v2) {
  return __v.__v.__b - __v2.__v.__b;
}
C$1.__r = 0;
let c46 = 0;
let closure_47 = [];
const __V = [];
({ __b: closure_50, __r: closure_51, diffed: closure_52, __c: closure_53, unmount: closure_54, __: closure_55 } = obj);
obj.__b = (arg0) => {
  c43 = null;
  if (closure_1_50) {
    tmp(arg0);
  }
};
obj.__ = (arg0, __k) => {
  if (tmp) {
    arg0.__m = __k.__k.__m;
  }
  if (closure_1_55) {
    tmp2(arg0, __k);
  }
};
obj.__r = (__c) => {
  if (closure_1_51) {
    tmp(__c);
  }
  closure_42 = 0;
  __c = __c.__c;
  c43 = __c;
  const __H = __c.__H;
  if (__H) {
    if (c44 === c43) {
      __H.__h = [];
      c43.__h = [];
      const __ = __H.__;
      const item = __.forEach((__N) => {
        if (__N.__N) {
          __N.__ = __N.__N;
        }
        __N.__V = __V;
        __N.i = undefined;
        __N.__N = undefined;
      });
    } else {
      __h = __H.__h;
      const item1 = __h.forEach(z);
      const __h1 = __H.__h;
      const item2 = __h1.forEach(B);
      __H.__h = [];
      closure_42 = 0;
    }
  }
  c44 = c43;
};
obj.diffed = (__c) => {
  if (closure_1_52) {
    tmp(__c);
  }
  __c = __c.__c;
  let __H = __c;
  if (__c) {
    __H = __c.__H;
  }
  if (__H) {
    if (__c.__H.__h.length) {
      let tmp4 = 1 !== closure_47.push(__c);
      if (tmp4) {
        tmp4 = _requestAnimationFrame === obj.requestAnimationFrame;
      }
      if (!tmp4) {
        _requestAnimationFrame = obj.requestAnimationFrame;
        if (!_requestAnimationFrame) {
          _requestAnimationFrame = w;
        }
        const result = _requestAnimationFrame(j);
      }
    }
    const __ = __c.__H.__;
    const item = __.forEach((item) => {
      if (item.i) {
        item.__H = item.i;
      }
      if (item.__V !== __V) {
        item.__ = item.__V;
      }
      item.i = undefined;
      item.__V = __V;
    });
  }
  c43 = null;
  c44 = null;
};
obj.__c = (arg0, arr) => {
  closure_0 = arr;
  arr.some((__h) => {
    try {
      __h = __h.__h;
      const item = __h.forEach(z);
      const __h1 = __h.__h;
      __h.__h = __h1.filter((item) => {
        const __ = item.__;
        if (__) {
          item.__c = item.__();
        }
        return !__;
      });
    } catch (tmp4) {
      closure_0.some((__h) => {
        if (__h.__h) {
          __h.__h = [];
        }
      });
      closure_0 = [];
      obj.__e(tmp4, tmp.__v);
    }
  });
  if (closure_53) {
    tmp2(arg0, closure_0);
  }
};
obj.unmount = (__c) => {
  if (closure_54) {
    tmp(__c);
  }
  __c = __c.__c;
  let __H = __c;
  if (__c) {
    __H = __c.__H;
  }
  if (__H) {
    const __ = __c.__H.__;
    const item = __.forEach((item) => {
      try {
        z(item);
      } catch (tmp4) {
        closure_0 = tmp4;
      }
    });
    __c.__H = undefined;
    if (require) {
      obj.__e(require, __c.__v);
    }
  }
};
let closure_60 = typeof requestAnimationFrame === "function";
const fn3 = function p(keys) {
  c46 = 1;
  return fn(D, keys);
};
const fn4 = function x(arg0, arg1) {
  closure_0 = arg0;
  c46 = 8;
  return fn2(() => f71260, arg1);
};
let merged = Object.assign({ useCallback: null, useContext: null, useDebugValue: null, useEffect: null, useErrorBoundary: null, useId: null, useImperativeHandle: null, useLayoutEffect: null, useMemo: null, useReducer: null, useRef: null, useState: null });
merged[0] = fn4;
merged[1] = function P(c) {
  obj = __c.context[c.__c];
  closure_42 = tmp + 1;
  if (obj.__h) {
    let num = c46;
    if (!c46) {
      num = 9;
    }
    obj.__h(__c, tmp, num);
  }
  c46 = 0;
  let __H = __c.__H;
  if (!__H) {
    obj = { __: [], __h: [] };
    __c.__H = obj;
    __H = obj;
  }
  if (+closure_42 >= __H.__.length) {
    let __ = __H.__;
    obj = { __V };
    __.push(obj);
  }
  __H.__[+closure_42].c = c;
  if (obj) {
    if (null == tmp7.__) {
      tmp7.__ = true;
      obj.sub(__c);
    }
    __ = obj.props.value;
  } else {
    __ = c.__;
  }
  return __;
};
merged[2] = function V(arg0, fn) {
  if (obj.useDebugValue) {
    let tmp3 = arg0;
    if (fn) {
      tmp3 = fn(arg0);
    }
    const debugValue = obj.useDebugValue(tmp3);
  }
};
merged[3] = function _(__, i) {
  closure_42 = tmp + 1;
  if (obj.__h) {
    let num = c46;
    if (!c46) {
      num = 3;
    }
    obj.__h(__c, tmp, num);
  }
  c46 = 0;
  let __H = __c.__H;
  if (!__H) {
    obj = { __: [], __h: [] };
    __c.__H = obj;
    __H = obj;
  }
  if (+closure_42 >= __H.__.length) {
    __ = __H.__;
    obj = { __V };
    __.push(obj);
  }
  const __s = obj.__s;
  let tmp8 = !__s;
  if (!__s) {
    __H = tmp7.__H;
    let someResult = !__H;
    if (__H) {
      someResult = __H.length !== i.length;
    }
    if (!someResult) {
      someResult = i.some((item, index) => item !== __H[index]);
    }
    tmp8 = someResult;
  }
  if (tmp8) {
    tmp7.__ = __;
    tmp7.i = i;
    __h = __c.__H.__h;
    __h.push(tmp7);
  }
};
merged[4] = function b(__) {
  closure_42 = tmp + 1;
  if (obj.__h) {
    let num = c46;
    if (!c46) {
      num = 10;
    }
    obj.__h(__c, tmp, num);
  }
  c46 = 0;
  let __H = __c.__H;
  if (!__H) {
    obj = { __: [], __h: [] };
    __c.__H = obj;
    __H = obj;
  }
  if (+closure_42 >= __H.__.length) {
    __ = __H.__;
    obj = { __V };
    __.push(obj);
  }
  constants = tmp7;
  c46 = 1;
  const tmp8 = fn(D, undefined);
  dependencyMap = tmp8;
  __H.__[+closure_42].__ = __;
  if (!__c.componentDidCatch) {
    __c.componentDidCatch = (tmpResult, arg1) => {
      if (constants.__) {
        constants.__(tmpResult, arg1);
      }
      5(tmpResult);
    };
  }
  items = [
    tmp8[0],
    () => {
      5(undefined);
    }
  ];
  return items;
};
merged[5] = function g() {
  closure_42 = tmp + 1;
  if (obj.__h) {
    let num = c46;
    if (!c46) {
      num = 11;
    }
    obj.__h(__c, tmp, num);
  }
  c46 = 0;
  let __H = __c.__H;
  if (!__H) {
    obj = { __: [], __h: [] };
    __c.__H = obj;
    __H = obj;
  }
  if (+closure_42 >= __H.__.length) {
    let __ = __H.__;
    obj = { __V };
    __.push(obj);
  }
  if (!__H.__[+closure_42].__) {
    const __v = __c.__v;
    let tmp10 = __v;
    if (null !== __v) {
      tmp10 = __v;
      if (!__v.__m) {
        let tmp11 = __v;
        tmp10 = __v;
        if (null !== __v.__) {
          __ = tmp11.__;
          tmp10 = __;
          while (null !== __) {
            tmp10 = __;
            if (__.__m) {
              break;
            } else {
              tmp11 = __;
              tmp10 = __;
              if (null === __.__) {
                break;
              }
            }
          }
        }
      }
    }
    let __m = tmp10.__m;
    if (!__m) {
      items = [0, 0];
      tmp10.__m = items;
      __m = items;
    }
    __m[1] = +__m[1] + 1;
    tmp7.__ = `P${__m[0]}-${+__m[1]}`;
  }
  return __H.__[+closure_42].__;
};
merged[6] = function T(arg0, arg1, arr) {
  closure_0 = arg0;
  closure_1 = arg1;
  c46 = 6;
  let combined = arr;
  if (null != arr) {
    combined = arr.concat(arg0);
  }
  A(() => {
    if (typeof closure_0 === "function") {
      tmp(closure_1());
      fn = () => closure_1_0(null);
    } else if (tmp) {
      tmp.current = closure_1();
      fn = () => {
        closure_1_0.current = null;
        return null;
      };
    }
    return fn;
  }, combined);
};
merged[7] = A;
merged[8] = fn2;
merged[9] = fn;
merged[10] = function F(current) {
  c46 = 5;
  return fn2(() => ({ current }), []);
};
merged[11] = fn3;
let closure_65 = Object.defineProperty(merged, Symbol.toStringTag, { value: "Module" });

export const buildFeedbackIntegration = (arg0) => {
  ({ lazyLoadIntegration: require, getModalIntegration: dependencyMap, getScreenshotIntegration: _slicedToArray } = arg0);
  return () => {
    obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let str = obj.id;
    if (str === undefined) {
      str = "sentry-feedback";
    }
    let flag = obj.autoInject;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = obj.showBranding;
    if (flag2 === undefined) {
      flag2 = true;
    }
    let flag3 = obj.isEmailRequired;
    if (flag3 === undefined) {
      flag3 = false;
    }
    let flag4 = obj.isNameRequired;
    if (flag4 === undefined) {
      flag4 = false;
    }
    let flag5 = obj.showEmail;
    if (flag5 === undefined) {
      flag5 = true;
    }
    let flag6 = obj.showName;
    if (flag6 === undefined) {
      flag6 = true;
    }
    let flag7 = obj.enableScreenshot;
    if (flag7 === undefined) {
      flag7 = true;
    }
    let useSentryUser = obj.useSentryUser;
    if (useSentryUser === undefined) {
      useSentryUser = { email: "email", name: "username" };
    }
    const styleNonce = obj.styleNonce;
    closure_0 = styleNonce;
    const scriptNonce = obj.scriptNonce;
    ({ colorScheme, tags } = obj);
    if (colorScheme === undefined) {
      colorScheme = "system";
    }
    let themeLight = obj.themeLight;
    if (themeLight === undefined) {
      themeLight = {};
    }
    let themeDark = obj.themeDark;
    if (themeDark === undefined) {
      themeDark = {};
    }
    let str2 = obj.addScreenshotButtonLabel;
    if (str2 === undefined) {
      str2 = "Add a screenshot";
    }
    let str3 = obj.cancelButtonLabel;
    if (str3 === undefined) {
      str3 = "Cancel";
    }
    let str4 = obj.confirmButtonLabel;
    if (str4 === undefined) {
      str4 = "Confirm";
    }
    let str5 = obj.emailLabel;
    if (str5 === undefined) {
      str5 = "Email";
    }
    let str6 = obj.emailPlaceholder;
    if (str6 === undefined) {
      str6 = "your.email@example.org";
    }
    let str7 = obj.formTitle;
    if (str7 === undefined) {
      str7 = "Report a Bug";
    }
    let str8 = obj.isRequiredLabel;
    if (str8 === undefined) {
      str8 = "(required)";
    }
    let str9 = obj.messageLabel;
    if (str9 === undefined) {
      str9 = "Description";
    }
    let str10 = obj.messagePlaceholder;
    if (str10 === undefined) {
      str10 = "What's the bug? What did you expect?";
    }
    let str11 = obj.nameLabel;
    if (str11 === undefined) {
      str11 = "Name";
    }
    let str12 = obj.namePlaceholder;
    if (str12 === undefined) {
      str12 = "Your Name";
    }
    let str13 = obj.removeScreenshotButtonLabel;
    if (str13 === undefined) {
      str13 = "Remove screenshot";
    }
    let str14 = obj.submitButtonLabel;
    if (str14 === undefined) {
      str14 = "Send Bug Report";
    }
    let str15 = obj.successMessageText;
    if (str15 === undefined) {
      str15 = "Thank you for your report!";
    }
    let triggerLabel = obj.triggerLabel;
    if (triggerLabel === undefined) {
      triggerLabel = closure_1_6;
    }
    let str16 = obj.triggerAriaLabel;
    if (str16 === undefined) {
      str16 = "";
    }
    let str17 = obj.highlightToolText;
    if (str17 === undefined) {
      str17 = "Highlight";
    }
    let str18 = obj.hideToolText;
    if (str18 === undefined) {
      str18 = "Hide";
    }
    let str19 = obj.removeHighlightText;
    if (str19 === undefined) {
      str19 = "Remove";
    }
    closure_2 = { id: str, autoInject: flag, showBranding: flag2, isEmailRequired: flag3, isNameRequired: flag4, showEmail: flag5, showName: flag6, enableScreenshot: flag7, useSentryUser, tags, styleNonce, scriptNonce, colorScheme, themeDark, themeLight, triggerLabel, triggerAriaLabel: str16, cancelButtonLabel: str3, submitButtonLabel: str14, confirmButtonLabel: str4, formTitle: str7, emailLabel: str5, emailPlaceholder: str6, messageLabel: str9, messagePlaceholder: str10, nameLabel: str11, namePlaceholder: str12, successMessageText: str15, isRequiredLabel: str8, addScreenshotButtonLabel: str2, removeScreenshotButtonLabel: str13, highlightToolText: str17, hideToolText: str18, removeHighlightText: str19, onFormClose: obj.onFormClose, onFormOpen: obj.onFormOpen, onSubmitError: obj.onSubmitError, onSubmitSuccess: obj.onSubmitSuccess, onFormSubmitted: obj.onFormSubmitted };
    c3 = null;
    closure_4 = [];
    function _createShadow(id) {
      if (!c3) {
        const element = <div />;
        const _String = String;
        element.id = String(id.id);
        const body = document.body;
        body.appendChild(element);
        const attachShadowResult = element.attachShadow({ mode: "open" });
        c3 = attachShadowResult;
        ({ colorScheme, themeDark, themeLight, styleNonce } = id);
        const element1 = <style />;
        let str3 = "";
        let str5 = "";
        if ("system" !== colorScheme) {
          const _HermesInternal = HermesInternal;
          str5 = "color-scheme: only " + colorScheme + ";";
        }
        if ("dark" === colorScheme) {
          obj = {};
          const merged = Object.assign(closure_11);
          const merged1 = Object.assign(themeDark);
        } else {
          obj = {};
          const merged2 = Object.assign(closure_10);
          const merged3 = Object.assign(themeLight);
        }
        const _HermesInternal2 = HermesInternal;
        const combined = "\n  --foreground: " + obj.foreground + ";\n  --background: " + obj.background + ";\n  --accent-foreground: " + obj.accentForeground + ";\n  --accent-background: " + obj.accentBackground + ";\n  --success-color: " + obj.successColor + ";\n  --error-color: " + obj.errorColor + ";\n  --border: " + obj.border + ";\n  --box-shadow: " + obj.boxShadow + ";\n  --outline: " + obj.outline + ";\n  --interactive-filter: " + obj.interactiveFilter + ";\n  ";
        if ("system" === colorScheme) {
          const obj1 = {};
          const merged4 = Object.assign(closure_11);
          const merged5 = Object.assign(themeDark);
          const _HermesInternal4 = HermesInternal;
          const _HermesInternal5 = HermesInternal;
          str3 = "\n@media (prefers-color-scheme: dark) {\n  :host {\n    color-scheme: only dark;\n\n    " + "\n  --foreground: " + obj1.foreground + ";\n  --background: " + obj1.background + ";\n  --accent-foreground: " + obj1.accentForeground + ";\n  --accent-background: " + obj1.accentBackground + ";\n  --success-color: " + obj1.successColor + ";\n  --error-color: " + obj1.errorColor + ";\n  --border: " + obj1.border + ";\n  --box-shadow: " + obj1.boxShadow + ";\n  --outline: " + obj1.outline + ";\n  --interactive-filter: " + obj1.interactiveFilter + ";\n  " + "\n  }\n}";
        }
        const _HermesInternal3 = HermesInternal;
        element1.textContent = "\n:host {\n  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;\n  --font-size: 14px;\n  --z-index: 100000;\n\n  --page-margin: 16px;\n  --inset: auto 0 0 auto;\n  --actor-inset: var(--inset);\n\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n\n  " + str5 + "\n\n  " + combined + "\n}\n\n" + str3 + "\n";
        if (styleNonce) {
          const attr = element1.setAttribute("nonce", styleNonce);
        }
        attachShadowResult.appendChild(element1);
      }
      return c3;
    }
    closure_0 = asyncGeneratorStep(async (arg0, value) => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp8 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp6;
              closure_129_0 = closure_0;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              closure_129_3 = undefined;
              closure_129_4 = undefined;
              closure_129_5 = undefined;
              let enableScreenshot = closure_0.enableScreenshot;
              if (enableScreenshot) {
                enableScreenshot = (function isScreenshotSupported() {
                  let isMatch = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent.userAgent);
                  if (!isMatch) {
                    let tmp3 = /Macintosh/i.test(tmp.userAgent) && tmp.maxTouchPoints;
                    if (tmp3) {
                      tmp3 = tmp.maxTouchPoints > 1;
                    }
                    isMatch = tmp3;
                    const obj2 = /Macintosh/i;
                  }
                  if (!isMatch) {
                    isMatch = !globalThis.isSecureContext;
                  }
                  return !isMatch;
                })();
              }
              closure_129_3 = enableScreenshot;
              c3 = 1;
              if (scriptNonce) {
                let tmp11 = scriptNonce();
                closure_129_1 = tmp11();
                let obj3 = _mod682;
                obj3.addIntegration(closure_129_1);
                c3 = 2;
                let tmp36;
                if (closure_129_3) {
                  if (tmp4) {
                    let tmp10 = tmp4();
                    tmp36 = tmp10;
                  } else {
                    c4 = 4;
                    v3 = 1;
                    const obj1 = { value: closure_0("feedbackScreenshotIntegration", closure_1), done: false };
                    return obj1;
                  }
                }
                closure_129_4 = tmp36;
                if (closure_129_4) {
                  closure_129_2 = closure_129_4();
                  let obj5 = _mod682;
                  obj5.addIntegration(closure_129_2);
                }
                c3 = 0;
                let obj2 = { options: null, screenshotIntegration: null, sendFeedback: null, shadow: null };
                obj3 = {};
                const merged = Object.assign(closure_129_0);
                obj3.onFormClose = function onFormClose() {
                  if (userAgent != null) {
                    userAgent.close();
                  }
                  const onFormClose = closure_1_0.onFormClose;
                  if (onFormClose != null) {
                    onFormClose();
                  }
                };
                obj3.onFormSubmitted = function onFormSubmitted() {
                  if (userAgent != null) {
                    userAgent.close();
                  }
                  const onFormSubmitted = closure_1_0.onFormSubmitted;
                  if (onFormSubmitted != null) {
                    onFormSubmitted();
                  }
                };
                obj2.options = obj3;
                obj2.screenshotIntegration = closure_129_2;
                obj2.sendFeedback = sendFeedback;
                obj2.shadow = v3(closure_129_0);
                closure_129_5 = closure_129_1.createDialog(obj2);
                v3 = 3;
              } else {
                c4 = 3;
                v3 = 1;
                const obj4 = { value: closure_0("feedbackModalIntegration", closure_1), done: false };
                return obj4;
              }
            }
          } else if (1 !== tmp9) {
            if (2 === tmp9) {
              c3 = 0;
              if (__SENTRY_DEBUG__) {
                const debug = _mod682.debug;
                debug.error("[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.");
              }
            } else if (3 === tmp9) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else {
                tmp11 = value;
                if (arg0 === 2) {
                  c3 = 0;
                  v3 = 3;
                  obj5 = { value, done: true };
                  return obj5;
                }
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else {
              tmp10 = value;
              if (arg0 === 2) {
                c3 = 0;
                v3 = 3;
                obj = { value, done: true };
                return obj;
              }
            }
          }
          c3 = 0;
          if (__SENTRY_DEBUG__) {
            const debug2 = _mod682.debug;
            debug2.error("[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`.");
          }
          const _Error = Error;
          const error = new Error("[Feedback] Missing feedback modal integration!");
          throw error;
        } catch (tmp59) {
          if (tmp5 === c3) {
            v3 = tmp3;
            throw tmp59;
          } else if (tmp2 === tmp60) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    function _loadAndRenderDialog(arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function _attachTo(el, arg1) {
      obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      c2 = undefined;
      let handleClick;
      let unsubscribe;
      let element = obj;
      obj = {};
      let merged = Object.assign(c2);
      const merged1 = Object.assign(obj);
      obj = {};
      const merged2 = Object.assign(c2.tags);
      const merged3 = Object.assign(obj.tags);
      obj.tags = obj;
      obj.onFormOpen = function onFormOpen() {
        const onFormOpen = obj.onFormOpen;
        if (onFormOpen != null) {
          onFormOpen();
        }
        const onFormOpen2 = closure_0.onFormOpen;
        if (onFormOpen2 != null) {
          onFormOpen2();
        }
      };
      obj.onFormClose = function onFormClose() {
        const onFormClose = obj.onFormClose;
        if (onFormClose != null) {
          onFormClose();
        }
        const onFormClose2 = closure_0.onFormClose;
        if (onFormClose2 != null) {
          onFormClose2();
        }
      };
      obj.onSubmitSuccess = function onSubmitSuccess(arg0, arg1) {
        const onSubmitSuccess = obj.onSubmitSuccess;
        if (onSubmitSuccess != null) {
          onSubmitSuccess(arg0, arg1);
        }
        const onSubmitSuccess2 = closure_0.onSubmitSuccess;
        if (onSubmitSuccess2 != null) {
          onSubmitSuccess2(arg0, arg1);
        }
      };
      obj.onSubmitError = function onSubmitError(arg0) {
        const onSubmitError = obj.onSubmitError;
        if (onSubmitError != null) {
          onSubmitError(arg0);
        }
        const onSubmitError2 = closure_0.onSubmitError;
        if (onSubmitError2 != null) {
          onSubmitError2(arg0);
        }
      };
      obj.onFormSubmitted = function onFormSubmitted() {
        const onFormSubmitted = obj.onFormSubmitted;
        if (onFormSubmitted != null) {
          onFormSubmitted();
        }
        const onFormSubmitted2 = closure_0.onFormSubmitted;
        if (onFormSubmitted2 != null) {
          onFormSubmitted2();
        }
      };
      const merged4 = Object.assign(c2.themeDark);
      const merged5 = Object.assign(obj.themeDark);
      obj.themeDark = {};
      const merged6 = Object.assign(c2.themeLight);
      const merged7 = Object.assign(obj.themeLight);
      obj.themeLight = {};
      closure_0 = obj;
      if (typeof el === "string") {
        element = document.querySelector(el);
      } else {
        element = null;
        if (typeof el.addEventListener === "function") {
          element = el;
        }
      }
      if (element) {
        c2 = null;
        closure_0 = asyncGeneratorStep(async (arg0, value) => {
          if (_null === 2) {
            _null = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              obj = { value, done: true };
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              _null = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  _null = 3;
                  throw value;
                } else if (arg0 === 2) {
                  _null = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  let onFormSubmitted = tmp2;
                  if (_null) {
                    _null.appendToDom();
                    _null.open();
                    _null = 3;
                  } else {
                    const obj1 = {};
                    const merged = Object.assign(onFormSubmitted);
                    obj1.onFormSubmitted = function onFormSubmitted() {
                      if (closure_1_2 != null) {
                        closure_1_2.removeFromDom();
                      }
                      onFormSubmitted = onFormSubmitted.onFormSubmitted;
                      if (onFormSubmitted != null) {
                        onFormSubmitted();
                      }
                    };
                    c1 = 1;
                    _null = 1;
                    const obj2 = { value: _loadAndRenderDialog(obj1), done: false };
                    return obj2;
                  }
                }
              } else if (arg0 === 1) {
                _null = 3;
                throw value;
              } else if (arg0 !== 2) {
                _null = value;
              }
              _null = 3;
              obj = { value, done: true };
              return obj;
            } catch (tmp15) {
              _null = tmp;
              throw tmp15;
            }
          }
        });
        handleClick = function handleClick() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        const listener = element.addEventListener("click", handleClick);
        unsubscribe = function unsubscribe() {
          unsubscribe = unsubscribe.filter((item) => item !== unsubscribe);
          if (_null != null) {
            _null.removeFromDom();
          }
          _null = null;
          const removed = element.removeEventListener("click", handleClick);
        };
        unsubscribe.push(unsubscribe);
        return unsubscribe;
      } else {
        if (__SENTRY_DEBUG__) {
          const debug = _mod682.debug;
          debug.error("[Feedback] Unable to attach to target element");
        }
        const _Error = Error;
        const error = new Error("Unable to attach to target element");
        throw error;
      }
      let obj1 = {};
      let obj2 = {};
    }
    function _createActor(id) {
      obj = id;
      if (id === undefined) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(closure_2);
      const merged1 = Object.assign(obj);
      obj = {};
      const merged2 = Object.assign(closure_2.tags);
      const merged3 = Object.assign(obj.tags);
      obj.tags = obj;
      obj.onFormOpen = function onFormOpen() {
        const onFormOpen = obj.onFormOpen;
        if (onFormOpen != null) {
          onFormOpen();
        }
        const onFormOpen2 = closure_0.onFormOpen;
        if (onFormOpen2 != null) {
          onFormOpen2();
        }
      };
      obj.onFormClose = function onFormClose() {
        const onFormClose = obj.onFormClose;
        if (onFormClose != null) {
          onFormClose();
        }
        const onFormClose2 = closure_0.onFormClose;
        if (onFormClose2 != null) {
          onFormClose2();
        }
      };
      obj.onSubmitSuccess = function onSubmitSuccess(arg0, arg1) {
        const onSubmitSuccess = obj.onSubmitSuccess;
        if (onSubmitSuccess != null) {
          onSubmitSuccess(arg0, arg1);
        }
        const onSubmitSuccess2 = closure_0.onSubmitSuccess;
        if (onSubmitSuccess2 != null) {
          onSubmitSuccess2(arg0, arg1);
        }
      };
      obj.onSubmitError = function onSubmitError(arg0) {
        const onSubmitError = obj.onSubmitError;
        if (onSubmitError != null) {
          onSubmitError(arg0);
        }
        const onSubmitError2 = closure_0.onSubmitError;
        if (onSubmitError2 != null) {
          onSubmitError2(arg0);
        }
      };
      obj.onFormSubmitted = function onFormSubmitted() {
        const onFormSubmitted = obj.onFormSubmitted;
        if (onFormSubmitted != null) {
          onFormSubmitted();
        }
        const onFormSubmitted2 = closure_0.onFormSubmitted;
        if (onFormSubmitted2 != null) {
          onFormSubmitted2();
        }
      };
      const merged4 = Object.assign(closure_2.themeDark);
      const merged5 = Object.assign(obj.themeDark);
      obj.themeDark = {};
      const merged6 = Object.assign(closure_2.themeLight);
      const merged7 = Object.assign(obj.themeLight);
      obj.themeLight = {};
      ({ triggerLabel, triggerAriaLabel } = obj);
      let obj3 = _createShadow(obj);
      let element2;
      const element = <button />;
      element.type = "button";
      element.className = "widget__actor";
      element.ariaHidden = "false";
      if (!triggerAriaLabel) {
        triggerAriaLabel = triggerLabel;
      }
      if (!triggerAriaLabel) {
        triggerAriaLabel = c6;
      }
      element.ariaLabel = triggerAriaLabel;
      const _document = _mod682.GLOBAL_OBJ.document;
      const elementNS = _document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const entries = Object.entries({ width: "20", height: "20", viewBox: "0 0 20 20", fill: "var(--actor-color, var(--foreground))" });
      const item = entries.forEach((item) => {
        [tmp, tmp2] = item;
        obj3.setAttributeNS(null, tmp, tmp2);
      });
      const _document2 = _mod682.GLOBAL_OBJ.document;
      const elementNS1 = _document2.createElementNS("http://www.w3.org/2000/svg", "g");
      const entries1 = Object.entries({ clipPath: "url(#clip0_57_80)" });
      const item1 = entries1.forEach((item) => {
        [tmp, tmp2] = item;
        obj3.setAttributeNS(null, tmp, tmp2);
      });
      const _document3 = _mod682.GLOBAL_OBJ.document;
      const elementNS2 = _document3.createElementNS("http://www.w3.org/2000/svg", "path");
      const entries2 = Object.entries({ "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z" });
      const item2 = entries2.forEach((item) => {
        [tmp, tmp2] = item;
        obj3.setAttributeNS(null, tmp, tmp2);
      });
      elementNS.appendChild(elementNS1).appendChild(elementNS2);
      const _document4 = _mod682.GLOBAL_OBJ.document;
      const elementNS3 = _document4.createElementNS("http://www.w3.org/2000/svg", "defs");
      const _document5 = _mod682.GLOBAL_OBJ.document;
      const elementNS4 = _document5.createElementNS("http://www.w3.org/2000/svg", "clipPath");
      const entries3 = Object.entries({ id: "clip0_57_80" });
      const item3 = entries3.forEach((item) => {
        [tmp, tmp2] = item;
        obj3.setAttributeNS(null, tmp, tmp2);
      });
      const _document6 = _mod682.GLOBAL_OBJ.document;
      const elementNS5 = _document6.createElementNS("http://www.w3.org/2000/svg", "rect");
      obj3 = elementNS5;
      const entries4 = Object.entries({ width: "20", height: "20", fill: "white" });
      const item4 = entries4.forEach((item) => {
        [tmp, tmp2] = item;
        obj3.setAttributeNS(null, tmp, tmp2);
      });
      elementNS4.appendChild(elementNS5);
      elementNS3.appendChild(elementNS4);
      const appendChildResult = elementNS.appendChild(elementNS1);
      const obj1 = {};
      const obj2 = {};
      const appendChildResult4 = elementNS.appendChild(elementNS3);
      elementNS.appendChild(elementNS3).appendChild(elementNS4).appendChild(elementNS5);
      element.appendChild(elementNS);
      if (triggerLabel) {
        const element1 = <span />;
        element1.appendChild(obj6.createTextNode(triggerLabel));
        element.appendChild(element1);
      }
      element2 = <style />;
      element2.textContent = "\n.widget__actor {\n  position: fixed;\n  z-index: var(--z-index);\n  margin: var(--page-margin);\n  inset: var(--actor-inset);\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 600;\n  line-height: 1.14em;\n  text-decoration: none;\n\n  background: var(--actor-background, var(--background));\n  border-radius: var(--actor-border-radius, 1.7em/50%);\n  border: var(--actor-border, var(--border));\n  box-shadow: var(--actor-box-shadow, var(--box-shadow));\n  color: var(--actor-color, var(--foreground));\n  fill: var(--actor-color, var(--foreground));\n  cursor: pointer;\n  opacity: 1;\n  transition: transform 0.2s ease-in-out;\n  transform: translate(0, 0) scale(1);\n}\n.widget__actor[aria-hidden=\"true\"] {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n  transform: translate(0, 16px) scale(0.98);\n}\n\n.widget__actor:hover {\n  background: var(--actor-hover-background, var(--background));\n  filter: var(--interactive-filter);\n}\n\n.widget__actor svg {\n  width: 1.14em;\n  height: 1.14em;\n}\n\n@media (max-width: 600px) {\n  .widget__actor span {\n    display: none;\n  }\n}\n";
      if (closure_0) {
        const attr = element2.setAttribute("nonce", tmp9);
      }
      obj3 = {
        el: element,
        appendToDom() {
          obj3.appendChild(element2);
          obj3.appendChild(element);
        },
        removeFromDom() {
          element.remove();
          element2.remove();
        },
        show() {
          element.ariaHidden = "false";
        },
        hide() {
          element.ariaHidden = "true";
        }
      };
      const obj4 = {};
      const merged8 = Object.assign(obj);
      obj4.onFormOpen = function onFormOpen() {
        obj3.hide();
      };
      obj4.onFormClose = function onFormClose() {
        obj3.show();
      };
      obj4.onFormSubmitted = function onFormSubmitted() {
        obj3.show();
      };
      _attachTo(obj3.el, obj4);
      return obj3;
    }
    obj = {
      name: "Feedback",
      setupOnce() {
        let autoInject = _mod682.isBrowser();
        if (autoInject) {
          autoInject = closure_2.autoInject;
        }
        if (autoInject) {
          if ("loading" === document.readyState) {
            const listener = obj2.addEventListener("DOMContentLoaded", () => _createActor().appendToDom());
          } else {
            _createActor().appendToDom();
            const obj3 = _createActor();
          }
          obj2 = document;
        }
      },
      attachTo: _attachTo,
      createWidget(id) {
        let tags = id;
        if (id === undefined) {
          tags = {};
        }
        closure_0 = closure_2;
        tags = {};
        const merged = Object.assign(closure_2);
        const merged1 = Object.assign(tags);
        tags = {};
        const merged2 = Object.assign(closure_2.tags);
        const merged3 = Object.assign(tags.tags);
        tags.tags = tags;
        tags.onFormOpen = function onFormOpen() {
          const onFormOpen = obj.onFormOpen;
          if (onFormOpen != null) {
            onFormOpen();
          }
          const onFormOpen2 = closure_0.onFormOpen;
          if (onFormOpen2 != null) {
            onFormOpen2();
          }
        };
        tags.onFormClose = function onFormClose() {
          const onFormClose = obj.onFormClose;
          if (onFormClose != null) {
            onFormClose();
          }
          const onFormClose2 = closure_0.onFormClose;
          if (onFormClose2 != null) {
            onFormClose2();
          }
        };
        tags.onSubmitSuccess = function onSubmitSuccess(arg0, arg1) {
          const onSubmitSuccess = obj.onSubmitSuccess;
          if (onSubmitSuccess != null) {
            onSubmitSuccess(arg0, arg1);
          }
          const onSubmitSuccess2 = closure_0.onSubmitSuccess;
          if (onSubmitSuccess2 != null) {
            onSubmitSuccess2(arg0, arg1);
          }
        };
        tags.onSubmitError = function onSubmitError(arg0) {
          const onSubmitError = obj.onSubmitError;
          if (onSubmitError != null) {
            onSubmitError(arg0);
          }
          const onSubmitError2 = closure_0.onSubmitError;
          if (onSubmitError2 != null) {
            onSubmitError2(arg0);
          }
        };
        tags.onFormSubmitted = function onFormSubmitted() {
          const onFormSubmitted = obj.onFormSubmitted;
          if (onFormSubmitted != null) {
            onFormSubmitted();
          }
          const onFormSubmitted2 = closure_0.onFormSubmitted;
          if (onFormSubmitted2 != null) {
            onFormSubmitted2();
          }
        };
        const merged4 = Object.assign(closure_2.themeDark);
        const merged5 = Object.assign(tags.themeDark);
        tags.themeDark = {};
        const merged6 = Object.assign(closure_2.themeLight);
        const merged7 = Object.assign(tags.themeLight);
        tags.themeLight = {};
        const obj6 = _createActor(tags);
        obj6.appendToDom();
        return obj6;
      },
      createForm() {
        if (arg0 === undefined) {
          obj = {};
        }
        return (async (arg0, value) => {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              obj = { value, done: true };
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c0 = 2;
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c0 = 3;
                obj = { value: null, done: true };
                obj.value = _loadAndRenderDialog(mergeOptions(closure_1_2, obj));
                return obj;
              }
            } catch (tmp8) {
              c0 = tmp;
              throw tmp8;
            }
          }
        })();
      },
      remove() {
        if (_null) {
          const parentElement = _null.parentElement;
          if (parentElement != null) {
            parentElement.remove();
          }
          _null = null;
        }
        const item = closure_4.forEach((fn) => fn());
        closure_4 = [];
      }
    };
    return obj;
  };
};
export () => ({
  name: "FeedbackModal",
  setupOnce() {

  },
  createDialog(options) {
    options = options.options;
    ({ screenshotIntegration, sendFeedback: closure_1 } = options);
    closure_5 = undefined;
    let element;
    let overflow;
    let input;
    let renderContent;
    const shadow = options.shadow;
    const useSentryUser = options.useSentryUser;
    obj = options(682);
    const currentScope = obj.getCurrentScope();
    let user = currentScope.getUser();
    const isolationScope = options(682).getIsolationScope();
    const user1 = isolationScope.getUser();
    const obj3 = options(682);
    const globalScope = options(682).getGlobalScope();
    const user2 = globalScope.getUser();
    if (!user) {
      let tmp5 = user2;
      if (user1) {
        const _Object2 = Object;
        tmp5 = user2;
        if (Object.keys(user1).length) {
          tmp5 = user1;
        }
      }
      user = tmp5;
    } else {
      const _Object = Object;
    }
    closure_5 = <div />;
    const styleNonce = options.styleNonce;
    element = <style />;
    element.textContent = "\n:host {\n  --dialog-inset: var(--inset);\n}\n\n\n.dialog {\n  position: fixed;\n  z-index: var(--z-index);\n  margin: 0;\n  inset: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  height: 100vh;\n  width: 100vw;\n\n  color: var(--dialog-color, var(--foreground));\n  fill: var(--dialog-color, var(--foreground));\n  line-height: 1.75em;\n\n  background-color: rgba(0, 0, 0, 0.05);\n  border: none;\n  inset: 0;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.dialog__position {\n  position: fixed;\n  z-index: var(--z-index);\n  inset: var(--dialog-inset);\n  padding: var(--page-margin);\n  display: flex;\n  max-height: calc(100vh - (2 * var(--page-margin)));\n}\n@media (max-width: 600px) {\n  .dialog__position {\n    inset: var(--page-margin);\n    padding: 0;\n  }\n}\n\n.dialog__position:has(.editor) {\n  inset: var(--page-margin);\n  padding: 0;\n}\n\n.dialog:not([open]) {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n.dialog:not([open]) .dialog__content {\n  transform: translate(0, -16px) scale(0.98);\n}\n\n.dialog__content {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: var(--dialog-padding, 24px);\n  max-width: 100%;\n  width: 100%;\n  max-height: 100%;\n  overflow: auto;\n\n  background: var(--dialog-background, var(--background));\n  border-radius: var(--dialog-border-radius, 20px);\n  border: var(--dialog-border, var(--border));\n  box-shadow: var(--dialog-box-shadow, var(--box-shadow));\n  transform: translate(0, 0) scale(1);\n  transition: transform 0.2s ease-in-out;\n}\n\n\n\n.dialog__header {\n  display: flex;\n  gap: 4px;\n  justify-content: space-between;\n  font-weight: var(--dialog-header-weight, 600);\n  margin: 0;\n}\n.dialog__title {\n  align-self: center;\n  width: var(--form-width, 272px);\n}\n\n@media (max-width: 600px) {\n  .dialog__title {\n    width: auto;\n  }\n}\n\n.dialog__position:has(.editor) .dialog__title {\n  width: auto;\n}\n\n\n.brand-link {\n  display: inline-flex;\n}\n.brand-link:focus-visible {\n  outline: var(--outline);\n}\n\n\n.form {\n  display: flex;\n  overflow: auto;\n  flex-direction: row;\n  gap: 16px;\n  flex: 1 0;\n}\n\n.form fieldset {\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n\n.form__right {\n  flex: 0 0 auto;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 20px;\n  width: var(--form-width, 100%);\n}\n\n.dialog__position:has(.editor) .form__right {\n  width: var(--form-width, 272px);\n}\n\n.form__top {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.form__error-container {\n  color: var(--error-color);\n  fill: var(--error-color);\n}\n\n.form__label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0px;\n}\n\n.form__label__text {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n\n.form__label__text--required {\n  font-size: 0.85em;\n}\n\n.form__input {\n  font-family: inherit;\n  line-height: inherit;\n  background: transparent;\n  box-sizing: border-box;\n  border: var(--input-border, var(--border));\n  border-radius: var(--input-border-radius, 6px);\n  color: var(--input-color, inherit);\n  fill: var(--input-color, inherit);\n  font-size: var(--input-font-size, inherit);\n  font-weight: var(--input-font-weight, 500);\n  padding: 6px 12px;\n}\n\n.form__input::placeholder {\n  opacity: 0.65;\n  color: var(--input-placeholder-color, inherit);\n  filter: var(--interactive-filter);\n}\n\n.form__input:focus-visible {\n  outline: var(--input-focus-outline, var(--outline));\n}\n\n.form__input--textarea {\n  font-family: inherit;\n  resize: vertical;\n}\n\n.error {\n  color: var(--error-color);\n  fill: var(--error-color);\n}\n\n\n.btn-group {\n  display: grid;\n  gap: 8px;\n}\n\n.btn {\n  line-height: inherit;\n  border: var(--button-border, var(--border));\n  border-radius: var(--button-border-radius, 6px);\n  cursor: pointer;\n  font-family: inherit;\n  font-size: var(--button-font-size, inherit);\n  font-weight: var(--button-font-weight, 600);\n  padding: var(--button-padding, 6px 16px);\n}\n.btn[disabled] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.btn--primary {\n  color: var(--button-primary-color, var(--accent-foreground));\n  fill: var(--button-primary-color, var(--accent-foreground));\n  background: var(--button-primary-background, var(--accent-background));\n  border: var(--button-primary-border, var(--border));\n  border-radius: var(--button-primary-border-radius, 6px);\n  font-weight: var(--button-primary-font-weight, 500);\n}\n.btn--primary:hover {\n  color: var(--button-primary-hover-color, var(--accent-foreground));\n  fill: var(--button-primary-hover-color, var(--accent-foreground));\n  background: var(--button-primary-hover-background, var(--accent-background));\n  filter: var(--interactive-filter);\n}\n.btn--primary:focus-visible {\n  background: var(--button-primary-hover-background, var(--accent-background));\n  filter: var(--interactive-filter);\n  outline: var(--button-primary-focus-outline, var(--outline));\n}\n\n.btn--default {\n  color: var(--button-color, var(--foreground));\n  fill: var(--button-color, var(--foreground));\n  background: var(--button-background, var(--background));\n  border: var(--button-border, var(--border));\n  border-radius: var(--button-border-radius, 6px);\n  font-weight: var(--button-font-weight, 500);\n}\n.btn--default:hover {\n  color: var(--button-color, var(--foreground));\n  fill: var(--button-color, var(--foreground));\n  background: var(--button-hover-background, var(--background));\n  filter: var(--interactive-filter);\n}\n.btn--default:focus-visible {\n  background: var(--button-hover-background, var(--background));\n  filter: var(--interactive-filter);\n  outline: var(--button-focus-outline, var(--outline));\n}\n\n\n.success__position {\n  position: fixed;\n  inset: var(--dialog-inset);\n  padding: var(--page-margin);\n  z-index: var(--z-index);\n}\n.success__content {\n  background: var(--success-background, var(--background));\n  border: var(--success-border, var(--border));\n  border-radius: var(--success-border-radius, 1.7em/50%);\n  box-shadow: var(--success-box-shadow, var(--box-shadow));\n  font-weight: var(--success-font-weight, 600);\n  color: var(--success-color);\n  fill: var(--success-color);\n  padding: 12px 24px;\n  line-height: 1.75em;\n\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n  gap: 6px;\n  cursor: default;\n}\n\n.success__icon {\n  display: flex;\n}\n\n";
    if (styleNonce) {
      const attr = element.setAttribute("nonce", styleNonce);
    }
    overflow = "";
    obj = {};
    Object.defineProperty(obj, "el", { get: () => closure_5, set: undefined });
    obj.appendToDom = function appendToDom() {
      let hasItem = shadow.contains(element);
      if (!hasItem) {
        hasItem = obj.contains(closure_5);
      }
      if (!hasItem) {
        obj.appendChild(element);
        obj.appendChild(closure_5);
      }
    };
    obj.removeFromDom = function removeFromDom() {
      closure_5.remove();
      element.remove();
      document.body.style.overflow = overflow;
    };
    obj.open = function open() {
      renderContent(true);
      const onFormOpen = options.onFormOpen;
      if (onFormOpen != null) {
        onFormOpen();
      }
      const client = _mod682.getClient();
      if (client != null) {
        client.emit("openFeedbackWidget");
      }
      overflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    };
    obj.close = function close() {
      renderContent(false);
      document.body.style.overflow = overflow;
    };
    input = undefined;
    if (screenshotIntegration != null) {
      obj = { h, hooks, dialog: null, options: null };
      obj.dialog = obj;
      obj.options = options;
      input = screenshotIntegration.createInput(obj);
    }
    renderContent = function renderContent(open) {
      let length;
      obj = { options, screenshotInput: input, showName: null, showEmail: null, defaultName: null, defaultEmail: null, onFormClose: null, onSubmit: null, onSubmitSuccess: null, onSubmitError: null, onFormSubmitted: null, open: null };
      let isNameRequired = options.showName;
      if (!isNameRequired) {
        isNameRequired = tmp3.isNameRequired;
      }
      obj.showName = isNameRequired;
      obj.showEmail = options.showEmail || options.isEmailRequired;
      let str = useSentryUser;
      if (useSentryUser) {
        let tmp7;
        if (user != null) {
          tmp7 = tmp5[tmp4.name];
        }
        str = tmp7;
      }
      if (!str) {
        str = "";
      }
      obj.defaultName = String(str);
      let str2 = tmp4;
      if (useSentryUser) {
        let tmp10;
        if (user != null) {
          tmp10 = tmp8[tmp4.email];
        }
        str2 = tmp10;
      }
      if (!str2) {
        str2 = "";
      }
      obj.defaultEmail = String(str2);
      obj.onFormClose = function onFormClose() {
        renderContent(false);
        const onFormClose = __h.onFormClose;
        if (onFormClose != null) {
          onFormClose();
        }
      };
      obj.onSubmit = onSubmit;
      obj.onSubmitSuccess = function onSubmitSuccess(arg0, arg1) {
        renderContent(false);
        const onSubmitSuccess = __h.onSubmitSuccess;
        if (onSubmitSuccess != null) {
          onSubmitSuccess(arg0, arg1);
        }
      };
      obj.onSubmitError = function onSubmitError(arg0) {
        const onSubmitError = __h.onSubmitError;
        if (onSubmitError != null) {
          onSubmitError(arg0);
        }
      };
      obj.onFormSubmitted = function onFormSubmitted() {
        const onFormSubmitted = __h.onFormSubmitted;
        if (onFormSubmitted != null) {
          onFormSubmitted();
        }
      };
      obj.open = open;
      let tmpResult = tmp(Dialog, obj);
      if (closure_2_13.__) {
        closure_2_13.__(tmpResult, tmp12);
      }
      const __k = tmp12.__k;
      items = [tmpResult];
      tmpResult = tmp(g$1, null, items);
      closure_5.__k = tmpResult;
      let tmp16 = __k;
      if (!__k) {
        tmp16 = closure_2_19;
      }
      let tmp18 = null;
      if (!__k) {
        if (!tmp12.firstChild) {
          tmp18 = null;
        } else {
          let call = slice.call;
          const childNodes = tmp12.childNodes;
          typeof call === "unknown" ? slice() : call(childNodes);
        }
      }
      const items1 = [];
      const items2 = [];
      closure_2_37(closure_5, tmpResult, tmp16, closure_2_19, undefined !== closure_5.ownerSVGElement, tmp18, items1, __k ? __k.__e : closure_5.firstChild, false, items2);
      tmpResult.__d = undefined;
      __h = items1;
      let num = 0;
      if (0 < items2.length) {
        do {
          let sum = num + 1;
          let sum1 = sum + 1;
          let tmp27 = closure_2_39(items2[num], items2[sum], items2[sum1]);
          num = sum1 + 1;
          length = items2.length;
        } while (num < length);
      }
      if (closure_2_13.__c) {
        closure_2_13.__c(tmpResult, __h);
      }
      __h.some((__h) => {
        closure_0 = __h;
        try {
          __h = __h.__h;
          __h.__h = [];
          __h.some((call) => {
            call = call.call;
            if (typeof call === "unknown") {
              call();
            } else {
              call(closure_0);
            }
          });
        } catch (tmp4) {
          closure_2_13.__e(tmp4, tmp.__v);
        }
      });
    };
    return obj;
  }
})
export () => ({
  name: "FeedbackScreenshot",
  setupOnce() {

  },
  createInput(dialog) {
    ({ h, hooks, options } = dialog);
    let element = <canvas />;
    hooks = element;
    closure_7 = undefined;
    let style;
    let ScreenshotEditor;
    closure_129_0 = hooks;
    function useTakeScreenshot(arg0) {

    }
    function Toolbar(action) {
      action = action.action;
      ({ setAction: hooks, options } = action);
      let str = "";
      let str2 = "";
      if ("highlight" === action) {
        str2 = "editor__tool--active";
      }
      obj = {
        type: "button",
        class: `editor__tool ${str2}`,
        onClick() {
          let str = "highlight";
          if ("highlight" === action) {
            str = "";
          }
          hooks(str);
        }
      };
      if ("hide" === action) {
        str = "editor__tool--active";
      }
      obj = { class: "editor__tool-bar" };
      obj = {
        type: "button",
        class: `editor__tool ${str}`,
        onClick() {
          let str = "hide";
          if ("hide" === action) {
            str = "";
          }
          hooks(str);
        }
      };
      return closure_0("div", { class: "editor__tool-container" }, closure_0("div", obj, closure_0("button", obj, options.highlightToolText), closure_0("button", obj, options.hideToolText)));
    }
    closure_0 = h;
    function IconClose() {
      const tmp = closure_0("circle", { r: "7", cx: "8", cy: "8", fill: "white" });
      const tmp2 = closure_0("path", { strokeWidth: "1.5", d: "M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z" });
      return closure_0("svg", { "data-test-id": "icon-close", viewBox: "0 0 16 16", fill: "#2B2233", height: "25px", width: "25px" }, tmp, tmp2, closure_0("path", { strokeWidth: "1.5", d: "M5.34,11.41a.71.71,0,0,1-.53-.22.74.74,0,0,1,0-1.06l5.32-5.32a.75.75,0,0,1,1.06,1.06L5.87,11.19A.74.74,0,0,1,5.34,11.41Z" }), closure_0("path", { strokeWidth: "1.5", d: "M10.66,11.41a.74.74,0,0,1-.53-.22L4.81,5.87A.75.75,0,0,1,5.87,4.81l5.32,5.32a.74.74,0,0,1,0,1.06A.71.71,0,0,1,10.66,11.41Z" }));
    }
    const styleNonce = options.styleNonce;
    const element1 = <style />;
    element1.textContent = "\n.editor {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n}\n\n.editor__image-container {\n  justify-items: center;\n  padding: 15px;\n  position: relative;\n  height: 100%;\n  border-radius: var(--menu-border-radius, 6px);\n\n  background-color: " + "#1A141F" + ";\n  background-image: repeating-linear-gradient(\n      -145deg,\n      transparent,\n      transparent 8px,\n      " + "#1A141F" + " 8px,\n      " + "#1A141F" + " 11px\n    ),\n    repeating-linear-gradient(\n      -45deg,\n      transparent,\n      transparent 15px,\n      " + "#302735" + " 15px,\n      " + "#302735" + " 16px\n    );\n}\n\n.editor__canvas-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.editor__canvas-container > * {\n  object-fit: contain;\n  position: absolute;\n}\n\n.editor__tool-container {\n  padding-top: 8px;\n  display: flex;\n  justify-content: center;\n}\n\n.editor__tool-bar {\n  display: flex;\n  gap: 8px;\n}\n\n.editor__tool {\n  display: flex;\n  padding: 8px 12px;\n  justify-content: center;\n  align-items: center;\n  border: var(--button-border, var(--border));\n  border-radius: var(--button-border-radius, 6px);\n  background: var(--button-background, var(--background));\n  color: var(--button-color, var(--foreground));\n}\n\n.editor__tool--active {\n  background: var(--button-primary-background, var(--accent-background));\n  color: var(--button-primary-color, var(--accent-foreground));\n}\n\n.editor__rect {\n  position: absolute;\n  z-index: 2;\n}\n\n.editor__rect button {\n  opacity: 0;\n  position: absolute;\n  top: -12px;\n  right: -12px;\n  cursor: pointer;\n  padding: 0;\n  z-index: 3;\n  border: none;\n  background: none;\n}\n\n.editor__rect:hover button {\n  opacity: 1;\n}\n";
    if (styleNonce) {
      const attr = element1.setAttribute("nonce", styleNonce);
    }
    obj = {
      input: function Wrapper(onError) {
        callback1 = undefined;
        [tmp2, callback1] = element(callback1.useState(), 2);
        callback = callback1.useCallback(() => {
          style.display = "none";
        }, []);
        callback1 = callback1.useCallback((arg0, dpi) => {
          const size = <canvas />;
          if (size) {
            const context = size.getContext("2d", { alpha: false });
            if (context) {
              context.scale(dpi, dpi);
              ({ videoWidth: size.width, videoHeight: size.height } = arg0);
              context.drawImage(arg0, 0, 0, size.width, size.height);
              obj = { canvas: size, dpi };
              callback1(obj);
            }
          }
          ({ videoWidth: element.width, videoHeight: element.height } = arg0);
        }, []);
        const callback2 = callback1.useCallback(() => {
          style.display = "block";
        }, []);
        if (typeof useTakeScreenshot === "function") {
          options = tmp6;
          obj = callback;
          let num = closure_0(hooks[2]).GLOBAL_OBJ.devicePixelRatio;
          if (num == null) {
            num = 1;
          }
          [tmp12, callback] = element(callback.useState(num), 2);
          const effect = obj.useEffect(() => {
            function onChange() {
              onChange(callback(callback1[2]).GLOBAL_OBJ.devicePixelRatio);
            }
            const matchMediaResult = globalThis.matchMedia("(resolution: " + callback(callback1[2]).GLOBAL_OBJ.devicePixelRatio + "dppx)");
            callback1 = matchMediaResult;
            const listener = matchMediaResult.addEventListener("change", onChange);
            return () => {
              const removed = matchMediaResult.removeEventListener("change", onChange);
            };
          }, []);
          useTakeScreenshot = tmp12;
          const effect1 = obj.useEffect(() => {
            closure_0 = tmp6(function*(arg0, value) {
              if (c3 === 2) {
                c3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  obj = { value, done: true };
                  return obj;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  c3 = 2;
                  if (0 === v2) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c1 = 0;
                      closure_128_0 = undefined;
                      closure_128_1 = undefined;
                      tmp2();
                      mediaDevices = mediaDevices.mediaDevices;
                      const obj1 = { video: null, audio: false, monitorTypeSurfaces: "exclude", preferCurrentTab: true, selfBrowserSurface: "include", surfaceSwitching: "exclude" };
                      const size = { width: tmp2(682).GLOBAL_OBJ.innerWidth * React, height: tmp2(682).GLOBAL_OBJ.innerHeight * React };
                      obj1.video = size;
                      v2 = 1;
                      c3 = 1;
                      const obj2 = { value: mediaDevices.getDisplayMedia(obj1), done: false };
                      return obj2;
                    }
                  } else if (1 === tmp5) {
                    if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      closure_128_0 = value;
                      closure_128_1 = <video />;
                      const promise = new Promise(() => { ... });
                      v2 = 2;
                      c3 = 1;
                      const obj4 = { value: promise, done: false };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    v2();
                    c3 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp17) {
                  c3 = tmp;
                  throw tmp17;
                }
              }
            });
            (function takeScreenshot() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })().catch(tmp6);
          }, []);
          if (tmp2) {
            obj = { screenshot: tmp2 };
            let tmp15Result = tmp15(ScreenshotEditor, obj);
          } else {
            tmp15Result = tmp15("div", null);
          }
          return tmp15Result;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        const tmp = element(callback1.useState(), 2);
      },
      value: null
    };
    closure_7 = { __html: element1.innerText };
    style = dialog.dialog.el.style;
    ScreenshotEditor = function ScreenshotEditor(screenshot) {
      screenshot = screenshot.screenshot;
      let action;
      let tmp = element(action.useState("highlight"), 2);
      action = tmp[0];
      const tmp3 = element(action.useState([]), 2);
      const first1 = tmp3[0];
      options = tmp3[1];
      const ref = action.useRef(null);
      const ref1 = action.useRef(null);
      const ref2 = action.useRef(null);
      const ref3 = action.useRef(null);
      const tmp8 = element(action.useState(1), 2);
      const first2 = tmp8[0];
      closure_9 = tmp8[1];
      items = [options.id];
      const memo = action.useMemo(() => {
        element = useTakeScreenshot.getElementById(id.id);
        if (element) {
          const computedStyle = globalThis.getComputedStyle(element);
          let propertyValue = computedStyle.getPropertyValue("--button-primary-background");
          if (!propertyValue) {
            propertyValue = computedStyle.getPropertyValue("--accent-background");
          }
          return propertyValue;
        } else {
          return "white";
        }
      }, items);
      const items1 = [screenshot];
      const layoutEffect = action.useLayoutEffect(() => {
        function handleResize() {
          const current = ref.current;
          if (current) {
            const canvas = screenshot.canvas;
            if (canvas) {
              if (canvas.getContext("2d", { alpha: false })) {
                const _Math = Math;
                closure_9(Math.min(current.clientWidth / canvas.width, current.clientHeight / canvas.height));
              }
            }
            if (!tmp5) {
              _setTimeout = setTimeout;
              const timerId = setTimeout(handleResize, 0);
            }
            tmp5 = 0 !== current.clientHeight && 0 !== current.clientWidth;
          }
        }
        let current = ref.current;
        if (current) {
          let canvas = handleResize.canvas;
          if (canvas) {
            if (canvas.getContext("2d", { alpha: false })) {
              let _Math = Math;
              closure_9(Math.min(current.clientWidth / canvas.width, current.clientHeight / canvas.height));
            }
          }
          if (!tmp5) {
            _setTimeout = setTimeout;
            let timerId = setTimeout(handleResize, 0);
          }
          tmp5 = 0 !== current.clientHeight && 0 !== current.clientWidth;
        }
        let GLOBAL_OBJ = screenshot(hooks[2]).GLOBAL_OBJ;
        const listener = GLOBAL_OBJ.addEventListener("resize", handleResize);
        return () => {
          const GLOBAL_OBJ = _mod682.GLOBAL_OBJ;
          const removed = GLOBAL_OBJ.removeEventListener("resize", handleResize);
        };
      }, items1);
      const items2 = [screenshot];
      closure_11 = action.useCallback((getContext, mapped) => {
        if (getContext) {
          const context = getContext.getContext("2d", { alpha: true });
          if (context) {
            context.scale(mapped, mapped);
            getContext.width = screenshot.canvas.width;
            getContext.height = screenshot.canvas.height;
          }
        }
      }, items2);
      const items3 = [screenshot];
      const effect = action.useEffect(() => {
        closure_11(ref1.current, screenshot.dpi);
        const current = ref1.current;
        const canvas = screenshot.canvas;
        if (current) {
          const context = current.getContext("2d", { alpha: true });
          if (context) {
            context.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, current.width, current.height);
          }
        }
      }, items3);
      const items4 = [first1, memo];
      const effect1 = action.useEffect(() => {
        closure_11(ref2.current, screenshot.dpi);
        const current = ref2.current;
        if (current) {
          const context = current.getContext("2d", { alpha: true });
          if (context) {
            context.clearRect(0, 0, current.width, current.height);
          }
        }
        const current2 = ref2.current;
        let context1 = memo;
        if (current2) {
          context1 = current2.getContext("2d", { alpha: true });
          if (context1) {
            if (arr.length) {
              context1.fillStyle = "rgba(0, 0, 0, 0.25)";
              context1.fillRect(0, 0, current2.width, current2.height);
            }
            const item = arr.forEach((type) => {
              type = type.type;
              if ("highlight" === type) {
                obj.shadowColor = "rgba(0, 0, 0, 0.7)";
                obj.shadowBlur = 50;
                obj.fillStyle = tmp;
                obj.fillRect(type.x - 1, type.y - 1, type.w + 2, type.h + 2);
                obj.clearRect(type.x, type.y, type.w, type.h);
              } else if ("hide" === type) {
                obj.fillStyle = "rgb(0, 0, 0)";
                obj.fillRect(type.x, type.y, type.w, type.h);
              }
            });
          }
        }
      }, items4);
      const items5 = [first1, screenshot, memo];
      const effect2 = action.useEffect(() => {
        const size = element;
        closure_11(element, screenshot.dpi);
        const canvas = screenshot.canvas;
        if (element) {
          const context = size.getContext("2d", { alpha: true });
          if (context) {
            context.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, size.width, size.height);
          }
        }
        const size2 = <canvas />;
        if (size2) {
          const context1 = size2.getContext("2d", { alpha: true });
          if (context1) {
            context1.scale(tmp.dpi, tmp.dpi);
            size2.width = tmp.canvas.width;
            size2.height = tmp.canvas.height;
            let context2 = memo;
            if (size2) {
              context2 = size2.getContext("2d", { alpha: true });
              if (context2) {
                if (arr.length) {
                  context2.fillStyle = "rgba(0, 0, 0, 0.25)";
                  context2.fillRect(0, 0, size2.width, size2.height);
                }
                const item = arr.forEach((type) => {
                  type = type.type;
                  if ("highlight" === type) {
                    obj.shadowColor = "rgba(0, 0, 0, 0.7)";
                    obj.shadowBlur = 50;
                    obj.fillStyle = tmp;
                    obj.fillRect(type.x - 1, type.y - 1, type.w + 2, type.h + 2);
                    obj.clearRect(type.x, type.y, type.w, type.h);
                  } else if ("hide" === type) {
                    obj.fillStyle = "rgb(0, 0, 0)";
                    obj.fillRect(type.x, type.y, type.w, type.h);
                  }
                });
              }
            }
            if (size) {
              const context3 = size.getContext("2d", { alpha: true });
              if (context3) {
                context3.drawImage(size2, 0, 0, size2.width, size2.height, 0, 0, size.width, size.height);
              }
            }
          }
        }
      }, items5);
      closure_12 = action.useCallback((arg0) => {
        closure_0 = arg0;
        return (preventDefault) => {
          preventDefault.preventDefault();
          preventDefault.stopPropagation();
          closure_3(() => { ... });
        };
      }, []);
      let size = { width: `${screenshot.canvas.width * tmp9}px`, height: `${screenshot.canvas.height * tmp9}px` };
      function handleStopPropagation(stopPropagation) {
        stopPropagation.stopPropagation();
      }
      obj = { nonce: options.styleNonce, dangerouslySetInnerHTML: ref3 };
      obj = { class: "editor__canvas-container", ref };
      const tmp15 = screenshot("style", obj);
      const obj1 = {
        ref: ref3,
        onMouseDown(offsetX) {
          if (point) {
            if (ref3.current) {
              let current = tmp2.current;
              const boundingClientRect = current.getBoundingClientRect();
              point = { type: tmp, x: offsetX.offsetX / first2, y: offsetX.offsetY / first2 };
              function getDrawCommand(arg0, arg1) {

              }
              function handleMouseMove(event) {
                const current = ref2.current;
                if (current) {
                  const context = current.getContext("2d", { alpha: true });
                  if (context) {
                    context.clearRect(0, 0, current.width, current.height);
                  }
                }
                const current2 = ref2.current;
                items = [];
                if (typeof getDrawCommand === "function") {
                  const result = (event.clientX - closure_0.x) / first2;
                  const result1 = (event.clientY - closure_0.y) / first2;
                  point = { type: null, x: null, y: null, w: null, h: null };
                  point.type = point.type;
                  const _Math = Math;
                  point.x = Math.min(point.x, result);
                  const _Math2 = Math;
                  point.y = Math.min(point.y, result1);
                  const _Math3 = Math;
                  point.w = Math.abs(result - point.x);
                  const _Math4 = Math;
                  point.h = Math.abs(result1 - point.y);
                  items[tmp5] = point;
                  let context1 = tmp4;
                  if (current2) {
                    context1 = current2.getContext("2d", { alpha: true });
                    if (context1) {
                      if (items.length) {
                        context1.fillStyle = "rgba(0, 0, 0, 0.25)";
                        context1.fillRect(0, 0, current2.width, current2.height);
                      }
                      const item = items.forEach(() => { ... });
                    }
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
                tmp4 = memo;
              }
              function handleMouseUp(event) {
                if (typeof getDrawCommand === "function") {
                  const result = (event.clientX - closure_0.x) / first2;
                  const result1 = (event.clientY - closure_0.y) / first2;
                  point = { type: null, x: null, y: null, w: null, h: null };
                  point.type = point.type;
                  const _Math = Math;
                  point.x = Math.min(point.x, result);
                  const _Math2 = Math;
                  point.y = Math.min(point.y, result1);
                  const _Math3 = Math;
                  point.w = Math.abs(result - point.x);
                  const _Math4 = Math;
                  point.h = Math.abs(result1 - point.y);
                  if (tmp7) {
                    handleMouseMove(() => { ... });
                  }
                  const removed = React.removeEventListener("mousemove", handleMouseMove);
                  const removed1 = React.removeEventListener("mouseup", handleMouseUp);
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              const listener = useTakeScreenshot.addEventListener("mousemove", handleMouseMove);
              const listener1 = useTakeScreenshot.addEventListener("mouseup", handleMouseUp);
            }
          }
        },
        style: size
      };
      const tmp16 = screenshot("canvas", { ref: ref1, id: "background", style: size });
      const obj2 = { options, action, setAction: tmp[1] };
      const tmp17 = screenshot("canvas", { ref: ref2, id: "foreground", style: size });
      return screenshot("div", { class: "editor" }, tmp15, screenshot("div", { class: "editor__image-container" }, screenshot("div", obj, tmp16, screenshot("canvas", { ref: ref2, id: "foreground", style: size }), screenshot("div", obj1, first1.map((item, key) => {
        obj = { key, class: "editor__rect", style: null };
        const size = { top: `${item.y * first2}px`, left: `${item.x * first2}px`, width: `${item.w * first2}px`, height: `${item.h * first2}px` };
        obj.style = size;
        obj = { "aria-label": options.removeHighlightText, onClick: closure_12(key), onMouseDown: handleStopPropagation, onMouseUp: handleStopPropagation, type: "button" };
        return screenshot("div", obj, screenshot("button", obj, screenshot(IconClose, null)));
      })))), screenshot(ref1, obj2));
    };
    closure_0 = options(function*(arg0, value) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp2;
              closure_130_0 = undefined;
              const promise = new Promise((arg0) => {
                closure_1_1.toBlob(arg0, "image/png");
              });
              c3 = 1;
              c4 = 1;
              const obj1 = { value: promise, done: false };
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else {
              closure_130_0 = value;
              if (closure_130_0) {
                value = {};
                const _Uint8Array = Uint8Array;
                c3 = 2;
                c4 = 1;
                const obj3 = { value: closure_130_0.arrayBuffer(), done: false };
                return obj3;
              } else {
                c4 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const tmp11 = new Uint8Array(value);
            value.data = tmp11;
            value.filename = "screenshot.png";
            value.contentType = "application/png";
            c4 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp23) {
          c4 = tmp;
          throw tmp23;
        }
      }
    });
    obj.value = function value() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return obj;
  }
})
export const getFeedback = function getFeedback() {
  const client = _mod682.getClient();
  let integrationByName;
  if (client != null) {
    integrationByName = client.getIntegrationByName("Feedback");
  }
  return integrationByName;
};
export { sendFeedback };