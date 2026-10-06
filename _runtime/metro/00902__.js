// === Module 902: ? ===

// Module 902
import _mod693 from "module_693" /* 693 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let _requestAnimationFrame, c44, c5, closure_12, closure_42, debounceRendering, mediaDevices, parentElement, size, srcObject;

let closure_50;
let closure_51;
let closure_52;
let closure_53;
let closure_54;
let closure_55;
const f82288 = (__h) => {
  let closure_0 = __h;
  try {
    __h = __h.__h;
    __h.__h = [];
    __h.some((call) => {
      call.call(closure_0);
    });
  } catch (tmp3) {
    closure_2_13.__e(tmp3, __h.__v);
  }
};
function mergeOptions(tags, tags2) {
  let obj2;
  let obj3;
  let obj4;
  let closure_0 = tags;
  let closure_1 = tags2;
  obj = {
    tags: obj2,
    onFormOpen() {
      const onFormOpen = obj.onFormOpen;
      if (onFormOpen != null) {
        onFormOpen();
      }
      const onFormOpen2 = closure_0.onFormOpen;
      if (onFormOpen2 != null) {
        onFormOpen2();
      }
    },
    onFormClose() {
      const onFormClose = obj.onFormClose;
      if (onFormClose != null) {
        onFormClose();
      }
      const onFormClose2 = closure_0.onFormClose;
      if (onFormClose2 != null) {
        onFormClose2();
      }
    },
    onSubmitSuccess(arg0, arg1) {
      const onSubmitSuccess = obj.onSubmitSuccess;
      if (onSubmitSuccess != null) {
        onSubmitSuccess(arg0, arg1);
      }
      const onSubmitSuccess2 = closure_0.onSubmitSuccess;
      if (onSubmitSuccess2 != null) {
        onSubmitSuccess2(arg0, arg1);
      }
    },
    onSubmitError(arg0) {
      const onSubmitError = obj.onSubmitError;
      if (onSubmitError != null) {
        onSubmitError(arg0);
      }
      const onSubmitError2 = closure_0.onSubmitError;
      if (onSubmitError2 != null) {
        onSubmitError2(arg0);
      }
    },
    onFormSubmitted() {
      const onFormSubmitted = obj.onFormSubmitted;
      if (onFormSubmitted != null) {
        onFormSubmitted();
      }
      const onFormSubmitted2 = closure_0.onFormSubmitted;
      if (onFormSubmitted2 != null) {
        onFormSubmitted2();
      }
    },
    themeDark: obj3,
    themeLight: obj4
  };
  const merged = Object.assign(tags);
  const merged1 = Object.assign(tags2);
  obj2 = {};
  const merged2 = Object.assign(tags.tags);
  const merged3 = Object.assign(tags2.tags);
  obj3 = {};
  const merged4 = Object.assign(tags.themeDark);
  const merged5 = Object.assign(tags2.themeDark);
  obj4 = {};
  const merged6 = Object.assign(tags.themeLight);
  const merged7 = Object.assign(tags2.themeLight);
  return obj;
}
function v$1(__s, __s2) {
  for (const key10004 in __s2) {
    __s[key10004] = __s2[key10004];
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
    let callResult = formTitle;
    if (arguments.length > 3) {
      callResult = slice.call(arguments, 2);
    }
    obj.children = callResult;
  }
  if (typeof span === "function") {
    if (null != span.defaultProps) {
      const keys1 = Object.keys();
      if (keys1 !== undefined) {
        while (keys1[3] !== undefined) {
          if (undefined !== obj[tmp12]) {
            continue;
          } else {
            obj[tmp12] = span.defaultProps[tmp12];
            continue;
          }
          continue;
        }
      }
    }
  }
  const element = { type: span, props: obj, key: tmp5, ref: tmp4, __k: null, __: null, __b: 0, __e: null, __d: "Array", __c: "Array", constructor: -1, __v: sum, __i: "m\u00E9n\u011B ne\u017E sekunda", __u: "p\u0159ed m\u00E9n\u011B ne\u017E sekundou" };
  sum = sum + 1;
  const obj3 = obj;
  if (null != obj.vnode) {
    obj3.vnode(element);
  }
  return element;
}
function g$1(children) {
  return children.children;
}
class b$1 {
  constructor(props, arg1) {

  }
  setState(fn, arg1) {
    let __s;
    const self = this;
    if (null != this.__s) {
      if (self.__s !== self.state) {
        __s = self.__s;
      }
      let tmp2 = fn;
      if (typeof fn === "function") {
        obj = {};
        for (const key10012 in __s) {
          obj[key10012] = __s[key10012];
          continue;
        }
        tmp2 = fn(obj, self.props);
      }
      if (tmp2) {
        for (const key10017 in tmp2) {
          __s[key10017] = tmp2[key10017];
          continue;
        }
      }
      const tmp4 = null != tmp2 && self.__v;
      if (tmp4) {
        const tmp5 = arg1;
        if (tmp5) {
          const _sb = self._sb;
          _sb.push(arg1);
        }
        let flag = !self.__d;
        if (flag) {
          self.__d = true;
          flag = true;
        }
        if (flag) {
          flag = closure_15.push(self);
        }
        if (flag) {
          C$1.__r = +C$1.__r + 1;
          flag = !tmp9;
        }
        if (!flag) {
          flag = debounceRendering !== obj.debounceRendering;
        }
        if (flag) {
          debounceRendering = obj.debounceRendering || _setTimeout;
          debounceRendering(C$1);
        }
      }
    }
    __s = {};
    const state = self.state;
    for (const key10009 in state) {
      __s[key10009] = state[key10009];
      continue;
    }
    self.__s = __s;
  }
  forceUpdate(arg0) {
    const self = this;
    if (this.__v) {
      self.__e = true;
      if (arg0) {
        const __h = self.__h;
        __h.push(arg0);
      }
      let flag2 = !self.__d;
      if (flag2) {
        self.__d = true;
        flag2 = true;
      }
      if (flag2) {
        flag2 = closure_15.push(self);
      }
      if (flag2) {
        C$1.__r = +C$1.__r + 1;
        flag2 = !tmp5;
      }
      if (!flag2) {
        flag2 = debounceRendering !== obj.debounceRendering;
      }
      if (flag2) {
        debounceRendering = obj.debounceRendering || _setTimeout;
        debounceRendering(C$1);
      }
    }
  }
}
function m$1(__2, arg1) {
  let tmp2;
  sum = arg1;
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
    let length2;
    let length3;
    let tmp3;
    items = [];
    const items1 = [];
    const sorted = closure_15.sort(H);
    let arr = closure_15.shift();
    let tmp4;
    while (arr) {
      let tmp7 = tmp3;
      if (arr.__d) {
        let sum2;
        let length = closure_15.length;
        let __v = arr.__v;
        let __e = __v.__e;
        let __P = arr.__P;
        let tmp8;
        if (__P) {
          obj = { __v: __v.__v + 1, __d: undefined };
          for (const key10028 in __v) {
            obj[key10028] = __v[key10028];
            continue;
          }
          let obj2 = obj;
          if (obj.vnode) {
            let vnodeResult = obj2.vnode(obj);
          }
          let __n = arr.__n;
          let tmp12 = null;
          let ownerSVGElement = __P.ownerSVGElement;
          if (32 & __v.__u) {
            let items2 = [__e];
            tmp12 = items2;
          }
          let tmp13 = __e;
          if (null == __e) {
            let __e1 = null;
            if (__v.__) {
              let __ = __v.__;
              sum = __v.__i + 1;
              if (sum < __.__k.length) {
                let tmp15;
                while (true) {
                  tmp15 = __.__k[sum];
                  if (null != tmp15) {
                    if (null != tmp15.__e) {
                      break;
                    }
                  }
                  sum = sum + 1;
                }
                __e1 = tmp15.__e;
              }
              if (typeof __.type === "function") {
                let tmp17 = m$1(__);
              }
            }
            tmp13 = __e1;
          }
          let tmp11Result = M(__P, obj, __v, __n, undefined !== ownerSVGElement, tmp12, items, tmp13, 32 & __v.__u, items1);
          obj.__.__k[obj.__i] = obj;
          tmp8 = obj;
          if (obj.__e != __e) {
            let __3 = obj.__;
            tmp8 = obj;
            if (null != __3) {
              tmp8 = obj;
              if (null != __3.__c) {
                __3.__c.base = null;
                __3.__e = null;
                let num = 0;
                if (0 < __3.__k.length) {
                  let tmp28;
                  while (true) {
                    tmp28 = __3.__k[num];
                    sum2 = num;
                    if (null != tmp28) {
                      if (null != tmp28.__e) {
                        break;
                      }
                    }
                    num = sum2 + 1;
                  }
                  let __e2 = tmp28.__e;
                  __3.__c.base = __e2;
                  __3.__e = __e2;
                }
                let __2 = __3.__;
                tmp8 = obj;
                if (null != __2) {
                  tmp8 = obj;
                  if (null != __2.__c) {
                    __2.__c.base = null;
                    __2.__e = null;
                    let num2 = 0;
                    if (0 < __2.__k.length) {
                      let tmp30;
                      while (true) {
                        tmp30 = __2.__k[num2];
                        sum2 = num2;
                        if (null != tmp30) {
                          if (null != tmp30.__e) {
                            break;
                          }
                        }
                        num2 = sum2 + 1;
                      }
                      let __e3 = tmp30.__e;
                      __2.__c.base = __e3;
                      __2.__e = __e3;
                    }
                    let tmp32 = k$1(__2);
                    tmp8 = obj;
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
          let tmp34;
          if (closure_15.length <= length) {
            __c = tmp8;
            if (__c) {
              __c = obj.__c;
            }
            tmp34 = tmp8;
            if (__c) {
              let __cResult = obj.__c(tmp8, items);
              tmp34 = tmp8;
            }
          }
          tmp7 = tmp34;
        }
        let num3 = 0;
        if (0 < items1.length) {
          do {
            let sum1 = num3 + 1;
            sum2 = sum1 + 1;
            let tmp40 = N(items1[num3], items1[sum1], items1[sum2]);
            num3 = sum2 + 1;
            length2 = items1.length;
          } while (num3 < length2);
        }
        let obj3 = obj;
        if (obj.__c) {
          let __cResult1 = obj3.__c(tmp8, items);
        }
        let someResult = items.some(f82288);
        items.length = 0;
        items1.length = 0;
        let sorted1 = closure_15.sort(H);
      }
      arr = closure_15.shift();
      tmp3 = tmp7;
      tmp4 = tmp7;
    }
    if (tmp4) {
      let num4 = 0;
      if (0 < items1.length) {
        do {
          let sum3 = num4 + 1;
          let sum4 = sum3 + 1;
          let tmp51 = N(items1[num4], items1[sum3], items1[sum4]);
          num4 = sum4 + 1;
          length3 = items1.length;
        } while (num4 < length3);
      }
      const obj4 = obj;
      if (obj.__c) {
        obj4.__c(tmp4, items);
      }
      items.some(f82288);
    }
    C$1.__r = 0;
  }
}
function P$1(insertBefore, items, __k, __k2, __s2, arg5, callResult, arr, __d, flag2, arg10) {
  let key;
  let key2;
  let props;
  let tmp10;
  let tmp21;
  let tmp65;
  let type;
  let type2;
  __k.__d = __d;
  __k.__k = [];
  let num = 0;
  let tmp = length3;
  let num2 = 0;
  let tmp2 = length3;
  if (0 < items.length) {
    do {
      let tmp29;
      let diff4;
      let tmp3 = items[num2];
      let tmp7 = null;
      __k = __k.__k;
      if (null != tmp3) {
        tmp7 = null;
        if (typeof tmp3 !== "boolean") {
          tmp7 = null;
          if (typeof tmp3 !== "function") {
            let tmp8;
            if (typeof tmp3 !== "string") {
              if (typeof tmp3 !== "number") {
                if (typeof tmp3 !== "bigint") {
                  let _String = String;
                  if (tmp3.constructor != String) {
                    if (isArray(tmp3)) {
                      obj = { children: tmp3 };
                      let element = { type: g$1, props: obj, key: null, ref: null, __k: null, __: null, __b: 0, __e: null, __d: "Array", __c: "Array", constructor: -1, __v: sum, __i: "m\u00E9n\u011B ne\u017E sekunda", __u: "p\u0159ed m\u00E9n\u011B ne\u017E sekundou" };
                      sum = sum + 1;
                      let obj4 = obj;
                      tmp8 = element;
                      if (null != obj.vnode) {
                        let vnodeResult = obj4.vnode(element);
                        tmp8 = element;
                      }
                    } else {
                      tmp8 = tmp3;
                      if (undefined === tmp3.constructor) {
                        tmp8 = tmp3;
                        if (tmp3.__b > 0) {
                          let ref1 = null;
                          ({ type: type2, props, key: key2 } = tmp3);
                          if (tmp3.ref) {
                            ref1 = tmp3.ref;
                          }
                          let __v = tmp3.__v;
                          let element1 = { type: type2, props, key: key2, ref: ref1, __k: null, __: null, __b: 0, __e: null, __d: "Array", __c: "Array", constructor: -1, __v: tmp10, __i: "m\u00E9n\u011B ne\u017E sekunda", __u: "p\u0159ed m\u00E9n\u011B ne\u017E sekundou" };
                          tmp10 = __v;
                          if (null == __v) {
                            let sum1 = sum + 1;
                            sum = sum1;
                            tmp10 = sum1;
                          }
                          let tmp13 = null == __v;
                          if (tmp13) {
                            tmp13 = null != obj.vnode;
                          }
                          tmp8 = element1;
                          if (tmp13) {
                            let vnodeResult1 = obj.vnode(element1);
                            tmp8 = element1;
                          }
                        }
                      }
                    }
                  }
                  tmp7 = tmp8;
                }
              }
            }
            let element2 = { type: null, props: tmp3, key: null, ref: null, __k: null, __: null, __b: 0, __e: null, __d: "Array", __c: "Array", constructor: -1, __v: tmp21, __i: "m\u00E9n\u011B ne\u017E sekunda", __u: "p\u0159ed m\u00E9n\u011B ne\u017E sekundou" };
            tmp21 = tmp3;
            if (null == tmp3) {
              let sum2 = sum + 1;
              sum = sum2;
              tmp21 = sum2;
            }
            let tmp24 = null == tmp3;
            if (tmp24) {
              tmp24 = null != obj.vnode;
            }
            tmp8 = element2;
            if (tmp24) {
              let vnodeResult2 = obj.vnode(element2);
              tmp8 = element2;
            }
          }
        }
      }
      __k[num2] = tmp7;
      if (null != tmp7) {
        tmp7.__ = __k;
        tmp7.__b = __k.__b + 1;
        let sum3 = num2 + num;
        ({ key, type } = tmp7);
        let diff = sum3 - 1;
        let sum4 = sum3 + 1;
        let tmp41 = arr[sum3];
        let num3 = sum3;
        if (null !== tmp41) {
          let num4;
          if (tmp41) {
            if (key == tmp41.key) {
              num3 = sum3;
            }
          }
          if (null == tmp41) {
            num4 = 0;
          } else {
            num4 = 1;
          }
          num3 = -1;
          if (tmp > num4) {
            let tmp42 = sum4;
            let tmp43 = diff;
            if (0 <= diff) {
              while (true) {
                let diff1 = tmp43;
                if (0 <= tmp43) {
                  let tmp47 = arr[tmp43];
                  if (tmp47) {
                    if (!(131072 & tmp47.__u)) {
                      if (key == tmp47.key) {
                        num3 = tmp43;
                        if (type === tmp47.type) {
                          break;
                        }
                      }
                      break;
                    }
                  }
                  diff1 = tmp43 - 1;
                }
                let sum5 = tmp42;
                if (tmp42 < arr.length) {
                  let tmp49 = arr[tmp42];
                  if (tmp49) {
                    if (!(131072 & tmp49.__u)) {
                      if (key == tmp49.key) {
                        num3 = tmp42;
                        if (type === tmp49.type) {
                          break;
                        }
                      }
                      break;
                    }
                  }
                  sum5 = tmp42 + 1;
                }
                tmp42 = sum5;
                tmp43 = diff1;
                if (0 <= diff1) {
                  continue;
                } else {
                  tmp42 = sum5;
                  tmp43 = diff1;
                  num3 = -1;
                  if (sum5 >= arr.length) {
                    break;
                  }
                }
                continue;
              }
            } else {
              tmp42 = sum4;
              tmp43 = diff;
              num3 = -1;
            }
          }
        }
        tmp7.__i = num3;
        let tmp50 = tmp;
        let tmp51 = null;
        if (-1 !== num3) {
          let diff2 = tmp - 1;
          let tmp53 = arr[num3];
          tmp50 = diff2;
          tmp51 = tmp53;
          if (tmp51) {
            tmp53.__u = tmp53.__u | 131072;
            tmp50 = diff2;
            tmp51 = tmp53;
          }
        }
        if (null != tmp51) {
          if (null !== tmp51.__v) {
            tmp29 = num;
            diff4 = tmp50;
            if (num3 !== sum3) {
              let num5;
              if (num3 === sum4) {
                num5 = num + 1;
              } else if (sum3 < num3) {
                if (tmp50 > length2 - sum3) {
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
              tmp29 = num5;
              diff4 = tmp50;
              if (num3 !== num2 + num5) {
                tmp7.__u = tmp7.__u | 65536;
                tmp29 = num5;
                diff4 = tmp50;
              }
            }
          }
        }
        let diff3 = num;
        if (-1 === num3) {
          diff3 = num - 1;
        }
        tmp29 = diff3;
        diff4 = tmp50;
        if (typeof tmp7.type !== "function") {
          tmp7.__u = tmp7.__u | 65536;
          tmp29 = diff3;
          diff4 = tmp50;
        }
      } else {
        let tmp116 = arr[num2];
        let tmp28 = tmp116 && null == tmp116.key && tmp116.__e;
        tmp29 = num;
        diff4 = tmp;
        if (tmp28) {
          if (tmp116.__e == __k.__d) {
            let __e1 = null;
            if (tmp116.__) {
              let __ = tmp116.__;
              let sum6 = tmp116.__i + 1;
              if (sum6 < __.__k.length) {
                let tmp32;
                while (true) {
                  tmp32 = __.__k[sum6];
                  if (null != tmp32) {
                    if (null != tmp32.__e) {
                      break;
                    }
                  }
                  sum6 = sum6 + 1;
                }
                __e1 = tmp32.__e;
              }
              if (typeof __.type === "function") {
                let tmp34 = m$1(__);
              }
            }
            __k.__d = __e1;
          }
          let tmp37 = O(tmp116, tmp116, false);
          arr[num2] = null;
          diff4 = tmp - 1;
          tmp29 = num;
        }
      }
      num2 = num2 + 1;
      num = tmp29;
      tmp = diff4;
      tmp2 = diff4;
    } while (num2 < items.length);
  }
  if (tmp2) {
    let num6;
    for (let num6 = 0; num6 < length3; num6 = num6 + 1) {
      let tmp55 = arr[num6];
      let tmp56 = null != tmp55;
      if (tmp56) {
        tmp56 = !(131072 & tmp55.__u);
      }
      if (tmp56) {
        if (tmp55.__e == __k.__d) {
          let __e6 = null;
          if (tmp55.__) {
            let __2 = tmp55.__;
            let sum7 = tmp55.__i + 1;
            if (sum7 < __2.__k.length) {
              let tmp59;
              while (true) {
                tmp59 = __2.__k[sum7];
                if (null != tmp59) {
                  if (null != tmp59.__e) {
                    break;
                  }
                }
                sum7 = sum7 + 1;
              }
              __e6 = tmp59.__e;
            }
            if (typeof __2.type === "function") {
              let tmp61 = m$1(__2);
            }
          }
          __k.__d = __e6;
        }
        let tmp64 = O(tmp55, tmp55);
      }
    }
  }
  let ___d = __k.__d;
  let num7 = 0;
  let tmp66;
  let tmp67 = ___d;
  if (0 < items.length) {
    do {
      let tmp68 = __k.__k[num7];
      let tmp69 = null != tmp68;
      let tmp70 = tmp65;
      let tmp72 = ___d;
      if (tmp69) {
        tmp69 = typeof tmp68 !== "boolean";
      }
      if (tmp69) {
        tmp69 = typeof tmp68 !== "function";
      }
      let tmp73 = tmp70;
      let tmp74 = ___d;
      if (tmp69) {
        let tmp75;
        let tmp97;
        if (-1 === tmp68.__i) {
          tmp75 = closure_19;
        } else {
          tmp75 = arr[tmp68.__i] || closure_19;
        }
        tmp68.__i = num7;
        let tmp87 = M(insertBefore, tmp68, tmp75, __s2, arg5, callResult, arr, tmp72, flag2, arg10);
        let __e = tmp68.__e;
        let tmp88 = tmp68.ref && tmp75.ref != tmp68.ref;
        if (tmp88) {
          if (tmp75.ref) {
            let tmp90 = N(tmp75.ref, null, tmp68);
          }
          __c = tmp68.__c;
          let push = arg10.push;
          let ref = tmp68.ref;
          if (!__c) {
            __c = __e;
          }
          let arr2 = push(ref, __c, tmp68);
        }
        let tmp92 = null == tmp70 && null != __e;
        if (tmp92) {
          tmp70 = __e;
        }
        if (!(65536 & tmp68.__u)) {
          let nextSibling;
          if (tmp75.__k !== tmp68.__k) {
            if (typeof tmp68.type === "function") {
              if (undefined !== tmp68.__d) {
                nextSibling = tmp68.__d;
              }
            }
            nextSibling = ___d;
            if (__e) {
              nextSibling = __e.nextSibling;
            }
          }
          tmp68.__d = undefined;
          tmp68.__u = tmp68.__u & -196609;
          tmp74 = nextSibling;
          tmp73 = tmp70;
        }
        if (typeof tmp68.type === "function") {
          let __k1 = tmp68.__k;
          let tmp98 = ___d;
          if (__k1) {
            let num8 = 0;
            let tmp99 = ___d;
            tmp98 = ___d;
            if (0 < __k1.length) {
              while (true) {
                let tmp102 = tmp99;
                if (__k1[num8]) {
                  let tmp108;
                  __k1[num8].__ = tmp68;
                  let tmp103 = __k1[num8];
                  if (typeof tmp103.type === "function") {
                    __k2 = tmp103.__k;
                    let tmp109 = tmp99;
                    if (__k2) {
                      let num9 = 0;
                      let tmp110 = tmp99;
                      tmp109 = tmp99;
                      if (0 < __k2.length) {
                        while (true) {
                          let tmp113 = tmp110;
                          if (__k2[num9]) {
                            __k2[num9].__ = tmp103;
                            tmp113 = $(__k2[num9], tmp110, insertBefore);
                          }
                          tmp109 = tmp113;
                          if (!__k2) {
                            break;
                          } else {
                            num9 = num9 + 1;
                            tmp110 = tmp113;
                            tmp109 = tmp113;
                            if (num9 >= __k2.length) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    tmp108 = tmp109;
                  } else {
                    let __e5 = tmp99;
                    if (tmp103.__e != tmp99) {
                      let tmp104 = tmp99;
                      let insertBefore2 = insertBefore.insertBefore;
                      let __e4 = tmp103.__e;
                      if (!tmp99) {
                        tmp104 = null;
                      }
                      let insertBefore2Result = insertBefore2(__e4, tmp104);
                      __e5 = tmp103.__e;
                    }
                    while (true) {
                      let tmp107 = __e5 && __e5.nextSibling;
                      tmp108 = tmp107;
                      if (null == tmp107) {
                        break;
                      } else {
                        __e5 = tmp107;
                        tmp108 = tmp107;
                        if (8 === tmp107.nodeType) {
                          continue;
                        } else {
                          break;
                        }
                        break;
                      }
                    }
                  }
                  tmp102 = tmp108;
                }
                tmp98 = tmp102;
                if (!__k1) {
                  break;
                } else {
                  num8 = num8 + 1;
                  tmp99 = tmp102;
                  tmp98 = tmp102;
                  if (num8 >= __k1.length) {
                    break;
                  }
                }
              }
            }
          }
          tmp97 = tmp98;
        } else {
          let __e3 = ___d;
          if (tmp68.__e != ___d) {
            let tmp93 = ___d;
            insertBefore = insertBefore.insertBefore;
            let __e2 = tmp68.__e;
            if (!___d) {
              tmp93 = null;
            }
            let insertBeforeResult = insertBefore(__e2, tmp93);
            __e3 = tmp68.__e;
          }
          while (true) {
            let tmp96 = __e3 && __e3.nextSibling;
            tmp97 = tmp96;
            if (null == tmp96) {
              break;
            } else {
              __e3 = tmp96;
              tmp97 = tmp96;
              if (8 === tmp96.nodeType) {
                continue;
              } else {
                break;
              }
              break;
            }
          }
        }
        nextSibling = tmp97;
      }
      num7 = num7 + 1;
      tmp65 = tmp73;
      ___d = tmp74;
      tmp66 = tmp73;
      tmp67 = tmp74;
    } while (num7 < items.length);
  }
  __k.__d = tmp67;
  __k.__e = tmp66;
}
function $(type, arg1, insertBefore) {
  let tmp4;
  if (typeof type.type === "function") {
    const __k = type.__k;
    let tmp5 = arg1;
    if (__k) {
      let num = 0;
      let tmp6 = arg1;
      tmp5 = arg1;
      if (0 < __k.length) {
        while (true) {
          let tmp9 = tmp6;
          if (__k[num]) {
            __k[num].__ = type;
            tmp9 = $(__k[num], tmp6, insertBefore);
          }
          tmp5 = tmp9;
          if (!__k) {
            break;
          } else {
            num = num + 1;
            tmp6 = tmp9;
            tmp5 = tmp9;
            if (num >= __k.length) {
              break;
            }
          }
        }
      }
    }
    return tmp5;
  } else {
    let __e2 = arg1;
    if (type.__e != arg1) {
      let tmp = arg1;
      insertBefore = insertBefore.insertBefore;
      const __e = type.__e;
      if (!arg1) {
        tmp = null;
      }
      insertBefore(__e, tmp);
      __e2 = type.__e;
    }
    while (true) {
      tmp4 = __e2 && __e2.nextSibling;
      if (null == tmp4) {
        break;
      } else {
        __e2 = tmp4;
        if (8 !== tmp4.nodeType) {
          break;
        }
      }
    }
    return tmp4;
  }
}
function T$1(style, key10064, cssText) {
  if ("-" === key10064[0]) {
    let str3 = "";
    const setProperty = style.setProperty;
    if (null != num) {
      str3 = num;
    }
    setProperty(key10064, str3);
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
          let tmp12 = cssText && key10064 in cssText;
          if (tmp12) {
            continue;
          } else {
            let tmp14 = T$1(iter.style, key10064, "");
            continue;
          }
          continue;
        }
      }
      if (cssText) {
        for (const key10072 in cssText) {
          let tmp16 = str && cssText[key10072] === str[key10072];
          if (tmp16) {
            continue;
          } else {
            let tmp18 = T$1(iter.style, key10072, cssText[key10072]);
            continue;
          }
          continue;
        }
      }
    }
  } else {
    let replaced;
    if ("o" === checked[0]) {
      if ("n" === checked[1]) {
        let substr;
        const str11 = checked.replace(/(PointerCapture)$|Capture$/i, "$1");
        if (str11.toLowerCase() in iter) {
          const formatted = str11.toLowerCase();
          substr = formatted.slice(2);
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
            const listener = iter.addEventListener(substr, tmp7 ? L : D$1, tmp7);
          }
        } else {
          const removed = iter.removeEventListener(substr, tmp7 ? L : D$1, tmp7);
        }
      }
    }
    const tmp = flag;
    if (tmp) {
      const str7 = checked.replace(/xlink(H|:h)/, "h");
      replaced = str7.replace(/sName$/, "s");
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
                              replaced = checked;
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
    const tmp3 = l[dependencyMap.type + true];
    if (obj.event) {
      eventResult = obj.event(dependencyMap);
    }
    return tmp3(eventResult);
  }
}
function M(__P, type, __u, __s2, flag, arr2, arr, arg7, flag2, arg9) {
  let length;
  let length2;
  let sum1;
  let closure_0 = type;
  let tmp = __s2;
  type = type.type;
  if (undefined !== type.constructor) {
    return null;
  } else {
    let tmp4 = arg7;
    let tmp3 = flag2;
    if (128 & __u.__u) {
      tmp3 = 32 & __u.__u;
      const __e = __u.__e;
      type.__e = __e;
      items = [__e];
      tmp4 = __e;
    }
    const __b = obj.__b;
    const tmp5 = obj;
    if (__b) {
      tmp6(type);
    }
    if (typeof type === "function") {
      try {
        let tmp25;
        let obj2;
        let obj3;
        let tmp2;
        let element;
        const props = type.props;
        const contextType = type.contextType && tmp[tmp21.__c];
        const tmp24 = contextType;
        if (tmp24) {
          let __;
          if (contextType) {
            __ = obj.props.value;
          } else {
            __ = tmp21.__;
          }
          tmp25 = __;
        } else {
          tmp25 = tmp;
        }
        if (__u.__c) {
          __c = __u.__c;
          type.__c = __c;
          obj2 = __c;
          obj3 = __c;
          const __E = __c.__E;
          __c.__ = __E;
          tmp2 = __E;
        } else {
          if ("prototype" in type) {
            if (type.prototype.render) {
              const self = this;
              const self2 = this;
              const type1 = new type(props, tmp29);
              obj2 = type1;
              obj3 = type1;
              type.__c = type1;
            }
            if (contextType) {
              contextType.sub(obj2);
            }
            obj2.props = props;
            if (!obj2.state) {
              obj2.state = {};
            }
            obj2.context = tmp25;
            obj2.__n = tmp;
            obj2.__d = true;
            flag = true;
            obj2.__h = [];
            obj2._sb = [];
          }
          obj3 = Object.create(b$1.prototype);
          new b$1(props, tmp25);
          obj2 = obj3;
          type.__c = obj3;
          obj3.constructor = type;
          obj3.render = q$1;
        }
        if (null == obj2.__s) {
          obj2.__s = obj2.state;
        }
        if (null != type.getDerivedStateFromProps) {
          if (obj2.__s == obj2.state) {
            const obj4 = {};
            v$1(obj4, obj2.__s);
            obj2.__s = obj4;
          }
          v$1(obj2.__s, type.getDerivedStateFromProps(props, obj2.__s));
        }
        const props2 = obj2.props;
        const state = obj2.state;
        obj2.__v = type;
        let tmp66 = null == type.getDerivedStateFromProps;
        if (flag) {
          if (tmp66) {
            tmp66 = null != obj2.componentWillMount;
          }
          if (tmp66) {
            obj2.componentWillMount();
          }
          if (null != obj2.componentDidMount) {
            const __h = obj2.__h;
            arr = __h.push(obj2.componentDidMount);
          }
        } else {
          const tmp67 = tmp66 && props !== tmp63 && null != obj2.componentWillReceiveProps;
          if (tmp67) {
            const result = obj2.componentWillReceiveProps(props, tmp29);
          }
          if (!obj2.__e) {
            if (type.__v !== __u.__v) {
              obj2.props = props;
              obj2.state = obj2.__s;
              obj2.__d = false;
            }
            ({ __e: type.__e, __k: type.__k } = __u);
            const __k = type.__k;
            const item = __k.forEach((item) => {
              const tmp = item;
              if (tmp) {
                item.__ = __;
              }
            });
            let num3 = 0;
            if (0 < obj2._sb.length) {
              do {
                let __h1 = obj2.__h;
                let arr3 = __h1.push(obj2._sb[num3]);
                sum = num3 + 1;
                num3 = sum;
                length = obj2._sb.length;
              } while (sum < length);
            }
            obj2._sb = [];
            if (obj2.__h.length) {
              arr.push(obj2);
            }
          }
          if (null != obj2.componentWillUpdate) {
            obj2.componentWillUpdate(props, obj2.__s, tmp25);
          }
          if (null != obj2.componentDidUpdate) {
            const __h2 = obj2.__h;
            __h2.push(() => {
              obj3.componentDidUpdate(props2, state, closure_4);
            });
          }
        }
        obj2.context = tmp25;
        obj2.props = props;
        obj2.__P = __P;
        obj2.__e = false;
        const ___r = tmp5.__r;
        let num5 = 0;
        if ("prototype" in type) {
          if (type.prototype.render) {
            obj2.state = obj2.__s;
            obj2.__d = false;
            const tmp115 = ___r;
            if (tmp115) {
              ___r(type);
            }
            element = obj2.render(obj2.props, obj2.state, obj2.context);
            let num7 = 0;
            if (0 < obj2._sb.length) {
              do {
                let __h3 = obj2.__h;
                let arr6 = __h3.push(obj2._sb[num7]);
                sum1 = num7 + 1;
                num7 = sum1;
                length2 = obj2._sb.length;
              } while (sum1 < length2);
            }
            obj2._sb = [];
          }
          obj2.state = obj2.__s;
          if (null != obj2.getChildContext) {
            const obj7 = {};
            v$1(obj7, tmp);
            v$1(obj7, obj2.getChildContext());
            tmp = obj7;
          }
          if (!flag) {
            flag = null == obj2.getSnapshotBeforeUpdate;
          }
          if (!flag) {
            const snapshotBeforeUpdate = obj2.getSnapshotBeforeUpdate(props2, state);
          }
          if (null != element) {
            if (element.type === g$1) {
              let children;
              let items1;
              if (null == element.key) {
                children = element.props.children;
              }
              if (tmp132(children)) {
                items1 = children;
              } else {
                items1 = [children];
              }
              tmp131(__P, items1, type, __u, tmp, flag, arr2, arr, tmp4, tmp3, arg9);
              obj2.base = type.__e;
              type.__u = type.__u & -161;
              if (obj2.__h.length) {
                arr.push(obj2);
              }
              if (tmp2) {
                obj2.__ = null;
                obj2.__E = null;
              }
            }
          }
          children = element;
        }
        while (true) {
          obj2.__d = false;
          let tmp108 = ___r;
          if (tmp108) {
            let ___rResult1 = ___r(type);
          }
          element = obj2.render(obj2.props, obj2.state, obj2.context);
          obj2.state = obj2.__s;
          if (!obj2.__d) {
            break;
          } else {
            let sum2 = num5 + 1;
            num5 = sum2;
            if (sum2 < 25) {
              continue;
            } else {
              break;
            }
            break;
          }
        }
      } catch (tmp154) {
        type.__v = null;
        if (!tmp3) {
          if (null == arr2) {
            ({ __e: type.__e, __k: type.__k } = __u);
          }
          obj.__e(tmp154, type, __u);
        }
        type.__e = tmp4;
        let num9 = 32;
        __u = type.__u;
        if (tmp3) {
          num9 = 160;
        }
        type.__u = __u | num9;
        arr2[arr2.indexOf(tmp4)] = null;
      }
    } else {
      if (null == arr2) {
        if (type.__v === __u.__v) {
          ({ __k: type.__k, __e: type.__e } = __u);
        }
      }
      type.__e = z$1(__u.__e, type, __u, tmp, flag, arr2, arr, tmp3, arg9);
    }
    const diffed = obj.diffed;
    const tmp159 = diffed;
    if (tmp159) {
      diffed(type);
    }
  }
}
function z$1(__e, type, props, __s2, flag, arr2, arr, flag2, arg8) {
  let length;
  let num3;
  let props2;
  let tmp2;
  let tmp26;
  let tmp49;
  let tmp69;
  ({ props: props2, type } = type);
  props = props.props;
  let callResult = arr2;
  let iter = __e;
  if (null != arr2) {
    let num = 0;
    num3 = 3;
    iter = __e;
    if (0 < callResult.length) {
      while (true) {
        tmp2 = callResult[num];
        if (tmp2) {
          if ("setAttribute" in tmp2 === type) {
            let tmp4;
            if (type) {
              tmp4 = tmp2.localName === type;
            } else {
              tmp4 = num3 === tmp2.nodeType;
            }
            if (tmp4) {
              break;
            }
          }
        }
        num = num + 1;
        iter = __e;
      }
      callResult[num] = null;
      iter = tmp2;
    }
  }
  if (null == iter) {
    if (null === type) {
      const _document = document;
      return document.createTextNode(props2);
    } else {
      let elementNS;
      const _document2 = document;
      if (flag) {
        elementNS = _document2.createElementNS("http://www.w3.org/2000/svg", type);
      } else {
        let is = props2.is;
        const createElement = _document2.createElement;
        if (is) {
          is = props2;
        }
        elementNS = <type {...is} />;
      }
      flag2 = false;
      iter = elementNS;
      callResult = null;
    }
  }
  if (null === type) {
    let tmp87 = props === props2;
    if (!tmp87) {
      if (flag2) {
        flag2 = iter.data === props2;
      }
      tmp87 = flag2;
    }
    if (!tmp87) {
      iter.data = props2;
    }
  } else {
    if (callResult) {
      callResult = slice.call(iter.childNodes);
    }
    let iter2 = tmp6;
    if (!flag2) {
      iter2 = tmp6;
      if (null != callResult) {
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
        let tmp91 = iter2[tmp12];
        if ("children" == tmp12) {
          continue;
        } else {
          if ("dangerouslySetInnerHTML" != tmp12) {
            let tmp14 = "key" === tmp12 || tmp12 in props2;
            if (!tmp14) {
              let tmp21 = A$1(iter, tmp90, null, tmp91, flag);
            }
          }
          continue;
        }
        continue;
      }
    }
    let tmp30;
    const keys1 = Object.keys();
    if (keys1 !== undefined) {
      tmp30 = tmp26;
      while (keys1[num3] !== undefined) {
        let tmp93 = props2[tmp36];
        if ("children" == tmp36) {
          continue;
        } else {
          tmp26 = tmp93;
          if ("dangerouslySetInnerHTML" == tmp36) {
            continue;
          } else {
            tmp26 = tmp35;
            if ("value" == tmp36) {
              continue;
            } else {
              tmp26 = tmp35;
              if ("checked" == tmp36) {
                continue;
              } else {
                let tmp37 = "key" === tmp36;
                if (!tmp37) {
                  let tmp38 = flag2 && typeof tmp93 !== "function";
                  tmp37 = tmp38;
                }
                if (!tmp37) {
                  tmp37 = iter2[tmp36] === tmp93;
                }
                tmp26 = tmp35;
                if (tmp37) {
                  continue;
                } else {
                  let tmp44 = A$1(iter, tmp92, tmp93, iter2[tmp36], flag);
                  tmp26 = tmp35;
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
    if (tmp30) {
      let tmp71 = flag2;
      if (!tmp71) {
        let tmp72 = tmp9;
        if (tmp72) {
          tmp72 = tmp30.__html === tmp9.__html || tmp30.__html === iter.innerHTML;
        }
        tmp71 = tmp72;
      }
      if (!tmp71) {
        iter.innerHTML = tmp30.__html;
      }
      type.__k = [];
    } else {
      let __k;
      if (tmp9) {
        iter.innerHTML = "";
      }
      let tmp47 = tmp29;
      if (!isArray(tmp29)) {
        items = [tmp29];
        tmp47 = items;
      }
      const tmp48 = flag && "foreignObject" !== type;
      if (callResult) {
        __k = callResult[0];
      } else {
        __k = props.__k;
        if (__k) {
          let num5 = 0;
          if (0 < props.__k.length) {
            while (true) {
              tmp49 = props.__k[num5];
              if (null != tmp49) {
                if (null != tmp49.__e) {
                  break;
                }
              }
              num5 = num5 + 1;
              __k = __e;
            }
            __e = tmp49.__e;
          }
          __e = null;
          if (typeof props.type === "function") {
            let tmp53 = null;
            if (props.__) {
              tmp53 = m$1(props.__, props.__i + 1);
            }
            __e = tmp53;
          }
        }
      }
      P$1(iter, tmp47, type, props, __s2, tmp48, callResult, arr, __k, flag2, arg8);
      if (null != callResult) {
        let diff = tmp94 - 1;
        if (+callResult.length) {
          do {
            if (null != callResult[diff]) {
              let tmp67 = callResult[diff];
              let parentNode = tmp67.parentNode;
              if (parentNode) {
                let removeChildResult = parentNode.removeChild(tmp67);
              }
            }
            tmp69 = +diff;
            diff = tmp69 - 1;
          } while (tmp69);
        }
      }
    }
    if (!flag2) {
      let tmp74 = undefined !== tmp28;
      if (tmp74) {
        let tmp75 = tmp28 !== iter.value;
        if (!tmp75) {
          tmp75 = "progress" === type && !tmp28;
        }
        if (!tmp75) {
          tmp75 = "option" === type && tmp28 !== iter2.value;
        }
        tmp74 = tmp75;
      }
      if (tmp74) {
        A$1(iter, "value", tmp28, iter2.value, false);
      }
      const tmp82 = undefined !== tmp27 && tmp27 !== iter.checked;
      if (tmp82) {
        A$1(iter, "checked", tmp27, iter2.checked, false);
      }
    }
  }
  return iter;
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
    const tmp2 = ref.ref.current && ref.ref.current !== ref.ref.__e;
    if (!tmp2) {
      N(ref.ref, null, __v);
    }
  }
  __c = ref.__c;
  if (null != __c) {
    if (__c.componentWillUnmount) {
      try {
        __c.componentWillUnmount();
      } catch (tmp7) {
        obj.__e(tmp7, __v);
      }
    }
    __c.__P = null;
    __c.base = null;
    ref.ref.__c = undefined;
  }
  let tmp9 = arg2;
  const __k = ref.__k;
  if (__k) {
    let num;
    for (let num = 0; num < __k.length; num = num + 1) {
      if (__k[num]) {
        let tmp13 = tmp9;
        let tmp12 = __k[num];
        if (!tmp9) {
          tmp13 = typeof ref.type !== "function";
        }
        let tmp11Result = O(tmp12, __v, tmp13);
      }
    }
  }
  if (!tmp9) {
    tmp9 = null == ref.__e;
  }
  if (!tmp9) {
    p$1(ref.ref.__e);
  }
  ref.ref.__d = undefined;
  ref.ref.__e = undefined;
  ref.ref.__ = undefined;
}
function q$1(arg0, arg1, arg2) {
  return this.constructor(arg0, arg2);
}
let shouldComponentUpdate = function y(t, fn, fn2) {
  closure_42 = tmp + 1;
  const tmp2 = obj;
  if (obj.__h) {
    let num = c46;
    const __h = tmp2.__h;
    if (!c46) {
      num = 2;
    }
    __h(__c, +closure_42, num);
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
    const obj2 = { __V };
    __.push(obj2);
  }
  let tmp8 = __H.__[tmp];
  let closure_0 = tmp8;
  tmp8.t = t;
  if (!tmp8.__c) {
    let tmp11;
    const tmp10 = fn2;
    if (tmp10) {
      tmp11 = fn2(fn);
    } else {
      tmp11 = fn;
      if (typeof fn === "function") {
        tmp11 = fn(undefined);
      }
    }
    items = [
      tmp11,
      (arg0) => {
          let first;
          if (closure_0.__N) {
            first = closure_0.__N[0];
          } else {
            first = closure_0.__[0];
          }
          const tResult = closure_0.t(first, arg0);
          if (first !== tResult) {
            items = [tResult, closure_0.__[1]];
            closure_0.__N = items;
            __c = closure_0.__c;
            __c.setState({});
          }
        }
    ];
    tmp8.__ = items;
    tmp8.__c = __c;
    if (!__c.u) {
      shouldComponentUpdate = function f(arg0, arg1, arg2) {
        if (closure_0.__c.__H) {
          const self = this;
          const __ = closure_0.__c.__H.__;
          const found = __.filter((__c) => __c.__c);
          if (found.every((__N) => !__N.__N)) {
            let callResult = !closure_2;
            if (closure_2) {
              callResult = closure_2.call(self, arg0, arg1, arg2);
            }
            return callResult;
          } else {
            let c0 = false;
            const item = found.forEach((__N) => {
              if (__N.__N) {
                __N.__ = __N.__N;
                __N.__N = undefined;
                if (__N.__[0] !== __N.__[0]) {
                  c0 = true;
                }
              }
            });
            let tmp8 = !(!c0 && closure_0.__c.props === arg0);
            if (tmp8) {
              let callResult1 = !closure_2;
              if (closure_2) {
                callResult1 = closure_2.call(self, arg0, arg1, arg2);
              }
              tmp8 = callResult1;
            }
            return tmp8;
          }
        } else {
          return true;
        }
      };
      const flag = true;
      __c.u = true;
      let closure_2 = __c.shouldComponentUpdate;
      const componentWillUpdate = __c.componentWillUpdate;
      __c.componentWillUpdate = function(arg0, arg1, arg2) {
        const self = this;
        if (this.__e) {
          closure_2 = undefined;
          fn(arg0, arg1, arg2);
        }
        if (componentWillUpdate) {
          componentWillUpdate.call(self, arg0, arg1, arg2);
        }
      };
      __c.shouldComponentUpdate = shouldComponentUpdate;
    }
  }
  return tmp8.__N || tmp8.__;
};
class A {
  constructor(__, i) {
    closure_42 = tmp + 1;
    if (obj.__h) {
      let num = c46;
      const __h = tmp2.__h;
      if (!c46) {
        num = 4;
      }
      __h(__c, +closure_42, num);
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
      const obj2 = { __V };
      __.push(obj2);
    }
    let tmp9 = !tmp2.__s;
    if (tmp9) {
      const __H1 = tmp8.__H;
      let someResult = !__H1;
      if (__H1) {
        someResult = __H1.length !== i.length;
      }
      if (!someResult) {
        someResult = i.some((item, index) => item !== __H1[index]);
      }
      tmp9 = someResult;
    }
    if (tmp9) {
      __H.__[+closure_42].__ = __;
      __H.__[+closure_42].i = i;
      const __h1 = __c.__h;
      __h1.push(__H.__[+closure_42]);
    }
  }
}
const fn2 = function q(__h, i) {
  let __;
  closure_42 = tmp + 1;
  const tmp2 = obj;
  if (obj.__h) {
    let num = c46;
    __h = tmp2.__h;
    if (!c46) {
      num = 7;
    }
    __h(__c, +closure_42, num);
  }
  c46 = 0;
  let __H = __c.__H;
  if (!__H) {
    obj = { __: [], __h: [] };
    __c.__H = obj;
    __H = obj;
  }
  if (+closure_42 >= __H.__.length) {
    const __1 = __H.__;
    const obj2 = { __V };
    __1.push(obj2);
  }
  const __H1 = tmp8.__H;
  let someResult = !__H1;
  if (__H1) {
    someResult = __H1.length !== i.length;
  }
  if (!someResult) {
    someResult = i.some((item, index) => item !== __H1[index]);
  }
  if (someResult) {
    __H.__[+closure_42].__V = __h();
    __H.__[+closure_42].i = i;
    __H.__[+closure_42].__h = __h;
    __ = tmp8.__V;
  } else {
    __ = tmp8.__;
  }
  return __;
};
function j() {
  let arr = closure_47.shift();
  if (arr) {
    if (arr.__P) {
      if (arr.__H) {
        try {
          const __h = arr.__H.__h;
          const item = __h.forEach(z);
          const __h1 = arr.__H.__h;
          const item1 = __h1.forEach(B);
          arr.__H.__h = [];
        } catch (tmp7) {
          arr.__H.__h = [];
          obj.__e(tmp7, arr.__v);
        }
      }
    }
    arr = closure_47.shift();
  }
}
function w(arg0) {
  let closure_2;
  let closure_0 = arg0;
  const fn = function r() {
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
    let closure_1 = requestAnimationFrame(fn);
  }
}
function z(__c) {
  __c = __c.__c;
  const tmp = c43;
  if (typeof __c === "function") {
    __c.__c = undefined;
    __c();
  }
  c43 = tmp;
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
  let tmp2Result = null;
  const tmp = fn2(() => {
    let elementNS;
    obj = { __html: elementNS.outerHTML };
    elementNS = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const entries = Object.entries({ width: "32", height: "30", viewBox: "0 0 72 66", fill: "inherit" });
    const item = entries.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      elementNS5.setAttributeNS(null, tmp, tmp2);
    });
    const elementNS1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const entries1 = Object.entries({ transform: "translate(11, 11)", d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z" });
    const item1 = entries1.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      elementNS5.setAttributeNS(null, tmp, tmp2);
    });
    elementNS.appendChild(elementNS1);
    return obj;
  }, []);
  const tmp3 = y$1("span", { class: "dialog__title" }, options.formTitle);
  if (options.showBranding) {
    obj = { class: "brand-link", target: "_blank", href: "https://sentry.io/welcome/", title: "Powered by Sentry", rel: "noopener noreferrer", dangerouslySetInnerHTML: tmp };
    tmp2Result = y$1("a", obj);
  }
  return y$1("h2", { class: "dialog__header" }, tmp3, tmp2Result);
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
  let _undefined;
  let addScreenshotButtonLabel;
  let c10;
  let c11;
  let c14;
  let c4;
  let cancelButtonLabel;
  let defaultEmail;
  let defaultName;
  let emailLabel;
  let emailPlaceholder;
  let messagePlaceholder;
  let namePlaceholder;
  let onFormClose;
  let onSubmitSuccess;
  let options;
  let removeScreenshotButtonLabel;
  let showEmail;
  let showName;
  let submitButtonLabel;
  let tmp12;
  let tmp15Result15;
  let tmp15Result17;
  let tmp5;
  let tmp7;
  ({ options, defaultEmail, defaultName, onSubmit: require, onSubmitSuccess } = onSubmitError);
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
  let tmp3 = onSubmitError;
  [tmp5, c10] = onSubmitError(fn(D, false), 2);
  const tmp4 = onSubmitError(fn(D, false), 2);
  [tmp7, c11] = onSubmitError(fn(D, null), 2);
  c46 = 1;
  onSubmitError(fn(D, null), 2);
  const tmp8 = onSubmitError(fn(D, false), 2);
  const first = tmp8[0];
  let closure_13 = tmp8[1];
  let input;
  if (screenshotInput != null) {
    input = screenshotInput.input;
  }
  [tmp12, c14] = tmp3(fn(D, null), 2);
  const f82296 = (arg0) => {
    _undefined(arg0);
    closure_1_13(false);
  };
  items = [emailLabel, isEmailRequired, isNameRequired, messageLabel, nameLabel];
  const f82297 = (name) => {
    let tmp2 = isEmailRequired;
    items = [];
    const tmp3 = isNameRequired && !name.name;
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
      closure_1_11("Please enter in the following required fields: " + items.join(", "));
    } else {
      closure_1_11(null);
    }
    return 0 === items.length;
  };
  c46 = 8;
  tmp3(fn(D, null), 2);
  const tmp14 = fn2(() => f82301, []);
  closure_15 = fn2(() => f82301, items);
  let closure_0 = screenshotInput(function*(arg0) {
    let closure_2;
    let tmp33;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let tags;
      let closure_3;
      try {
        let formData;
        let closure_1;
        let obj6;
        let valueResult;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            formData = undefined;
            closure_1 = undefined;
            obj6 = undefined;
            closure_3 = undefined;
            closure_1_10(true);
            tags = 1;
            closure_0.preventDefault();
            if (closure_0.target instanceof globalThis.HTMLFormElement) {
              const _FormData = FormData;
              const self = this;
              const self2 = this;
              formData = new FormData(closure_0.target);
              valueResult = undefined;
              const iter = closure_3;
              if (iter) {
                if (first) {
                  valueResult = iter.value();
                }
              }
              c5 = 2;
              c6 = 1;
              const obj4 = { value: valueResult, done: false };
              return obj4;
            } else {
              tags = 0;
              closure_1_10(false);
              c6 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else if (1 === c5) {
          tags = 0;
          valueResult = closure_1_10(false);
          throw closure_3;
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            tags = 0;
            closure_1_10(false);
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = value;
            obj6 = { name: retrieveStringValue(formData, "name"), email: retrieveStringValue(formData, "email"), message: valueResult, attachments: tmp33 };
            valueResult = retrieveStringValue(formData, "message");
            tmp33 = undefined;
            if (closure_1) {
              valueResult = closure_1;
              items = [closure_1];
              tmp33 = items;
            }
            valueResult = closure_1_15;
            if (closure_1_15(obj6)) {
              tags = 2;
              const obj7 = { name: obj6.name, email: obj6.email, message: obj6.message, source: "widget", tags };
              const obj8 = { attachments: obj6.attachments };
              valueResult = closure_0(obj7, obj8);
              c5 = 4;
              c6 = 1;
              const obj9 = { value: valueResult, done: false };
              return obj9;
            } else {
              tags = 0;
              closure_1_10(false);
              c6 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else {
          if (3 === c5) {
            valueResult = tmp;
            tags = 1;
            let closure_4 = closure_3;
            if (messageLabel) {
              const debug = closure_0(onSubmitSuccess[2]).debug;
              debug.error(closure_4);
            }
            closure_1_11(closure_4);
            valueResult = tmp;
            tmp(closure_4);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            tags = 0;
            closure_1_10(false);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = value;
            valueResult = obj6;
            valueResult(obj6, closure_3);
            tags = 1;
          }
          tags = 0;
          closure_1_10(false);
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp60) {
        closure_3 = tmp60;
        if (0 === tags) {
          c6 = 3;
          throw tmp60;
        } else if (1 === tmp62) {
          c5 = 1;
        } else {
          c5 = 3;
        }
      }
    }
  });
  if (screenshotInput) {
    screenshotInput = first;
  }
  const items1 = [screenshotInput, onSubmitSuccess, onSubmitError];
  const f134515 = function(arg0) {
    return f134515(...arguments);
  };
  c46 = 8;
  obj = { class: "form", onSubmit: fn2(() => f82301, items1) };
  let tmp15Result = null;
  if (input) {
    tmp15Result = null;
    if (first) {
      let obj2 = { onError: tmp14 };
      tmp15Result = y$1(input, obj2);
    }
  }
  let obj3 = { class: "form__right", "data-sentry-feedback": true, disabled };
  let tmp15Result13 = null;
  if (tmp7) {
    tmp15Result13 = y$1("div", { class: "form__error-container" }, tmp7);
  }
  if (showName) {
    let obj4 = { label: nameLabel, isRequiredLabel, isRequired: isNameRequired };
    let obj5 = { class: "form__input", defaultValue: defaultName, id: "name", name: "name", placeholder: namePlaceholder, required: isNameRequired, type: "text" };
    const tmp15Result14 = y$1(LabelText, obj4);
    tmp15Result15 = y$1("label", { for: "name", class: "form__label" }, tmp15Result14, y$1("input", obj5));
  } else {
    let obj6 = { "aria-hidden": true, value: defaultName, name: "name", type: "hidden" };
    tmp15Result15 = y$1("input", obj6);
  }
  if (showEmail) {
    let obj7 = { label: emailLabel, isRequiredLabel, isRequired: isEmailRequired };
    let obj8 = { class: "form__input", defaultValue: defaultEmail, id: "email", name: "email", placeholder: emailPlaceholder, required: isEmailRequired, type: "email" };
    const tmp15Result16 = y$1(LabelText, obj7);
    tmp15Result17 = y$1("label", { for: "email", class: "form__label" }, tmp15Result16, y$1("input", obj8));
  } else {
    let obj9 = { "aria-hidden": true, value: defaultEmail, name: "email", type: "hidden" };
    tmp15Result17 = y$1("input", obj9);
  }
  let tmp15Result22 = null;
  const tmp15Result18 = y$1(LabelText, { label: messageLabel, isRequiredLabel, isRequired: true });
  const tmp15Result19 = y$1("label", { for: "message", class: "form__label" }, tmp15Result18, y$1("textarea", { autoFocus: true, class: "form__input form__input--textarea", id: "message", name: "message", placeholder: messagePlaceholder, required: true, rows: 5 }));
  if (input) {
    const obj10 = {
      class: "btn btn--default",
      disabled,
      type: "button",
      onClick() {
          _undefined(null);
          closure_13((arg0) => !arg0);
        }
    };
    if (first) {
      addScreenshotButtonLabel = removeScreenshotButtonLabel;
    }
    let tmp15Result21 = null;
    const tmp15Result20 = y$1("button", obj10, addScreenshotButtonLabel);
    if (tmp12) {
      tmp15Result21 = y$1("div", { class: "form__error-container" }, tmp12.message);
    }
    tmp15Result22 = y$1("label", { for: "screenshot", class: "form__label" }, tmp15Result20, tmp15Result21);
  }
  const tmp15Result23 = y$1("div", { class: "form__top" }, tmp15Result13, tmp15Result15, tmp15Result17, tmp15Result19, tmp15Result22);
  const tmp15Result24 = y$1("button", { class: "btn btn--primary", disabled, type: "submit" }, submitButtonLabel);
  return y$1("form", obj, tmp15Result, y$1("fieldset", obj3, tmp15Result23, y$1("div", { class: "btn-group" }, tmp15Result24, y$1("button", { class: "btn btn--default", disabled, type: "button", onClick }, cancelButtonLabel))));
}
function LabelText(arg0) {
  let isRequired;
  let label;
  ({ label, isRequired } = arg0);
  if (isRequired) {
    isRequired = y$1("span", { class: "form__label__text--required" }, tmp);
  }
  return y$1("span", { class: "form__label__text" }, label, isRequired);
}
function Dialog(onFormSubmitted) {
  let tmp7Result;
  onFormSubmitted = onFormSubmitted.onFormSubmitted;
  const open = onFormSubmitted.open;
  const merged = Object.assign(onFormSubmitted, Object.assign({ open: 0, onFormSubmitted: 0 }));
  let first;
  const options = merged.options;
  const tmp2 = fn2(() => {
    let elementNS;
    obj = { __html: elementNS.outerHTML };
    const _document = onFormSubmitted(merged[2]).GLOBAL_OBJ.document;
    elementNS = _document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const entries = Object.entries({ width: "16", height: "17", viewBox: "0 0 16 17", fill: "inherit" });
    const item = entries.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      elementNS5.setAttributeNS(null, tmp, tmp2);
    });
    const _document2 = onFormSubmitted(merged[2]).GLOBAL_OBJ.document;
    const elementNS1 = _document2.createElementNS("http://www.w3.org/2000/svg", "g");
    const entries1 = Object.entries({ clipPath: "url(#clip0_57_156)" });
    const item1 = entries1.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      elementNS5.setAttributeNS(null, tmp, tmp2);
    });
    const _document3 = onFormSubmitted(merged[2]).GLOBAL_OBJ.document;
    const elementNS2 = _document3.createElementNS("http://www.w3.org/2000/svg", "path");
    const entries2 = Object.entries({ "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z" });
    const item2 = entries2.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      elementNS5.setAttributeNS(null, tmp, tmp2);
    });
    const _document4 = onFormSubmitted(merged[2]).GLOBAL_OBJ.document;
    const elementNS3 = _document4.createElementNS("http://www.w3.org/2000/svg", "path");
    const entries3 = Object.entries({ d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z" });
    const item3 = entries3.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      elementNS5.setAttributeNS(null, tmp, tmp2);
    });
    const appendChildResult = elementNS.appendChild(elementNS1);
    appendChildResult.append(elementNS3, elementNS2);
    const _document5 = onFormSubmitted(merged[2]).GLOBAL_OBJ.document;
    const elementNS4 = _document5.createElementNS("http://www.w3.org/2000/svg", "defs");
    const _document6 = onFormSubmitted(merged[2]).GLOBAL_OBJ.document;
    const elementNS5 = _document6.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    const entries4 = Object.entries({ id: "clip0_57_156" });
    const item4 = entries4.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      elementNS5.setAttributeNS(null, tmp, tmp2);
    });
    const _document7 = onFormSubmitted(merged[2]).GLOBAL_OBJ.document;
    const elementNS6 = _document7.createElementNS("http://www.w3.org/2000/svg", "rect");
    const entries5 = Object.entries({ width: "16", height: "16", fill: "white", transform: "translate(0 0.5)" });
    const item5 = entries5.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      elementNS5.setAttributeNS(null, tmp, tmp2);
    });
    elementNS5.appendChild(elementNS6);
    elementNS4.appendChild(elementNS5);
    const appendChildResult3 = elementNS.appendChild(elementNS4);
    const appendChildResult4 = appendChildResult3.appendChild(elementNS5);
    appendChildResult4.appendChild(elementNS6);
    return obj;
  }, []);
  const tmp3 = first(fn(D, null), 2);
  first = tmp3[0];
  let closure_3 = tmp3[1];
  items = [first];
  const f82300 = () => {
    if (first) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp);
      closure_1_3(null);
    }
    f82300();
  };
  [][0] = onFormSubmitted;
  const f82301 = (arg0, arg1) => {
    merged.onSubmitSuccess(arg0, arg1);
    closure_1_3(setTimeout(() => {
      closure_1_0();
      closure_1_3(null);
    }, 5000));
  };
  c46 = 8;
  const tmp5 = fn2(() => f82301, items);
  if (first) {
    const obj2 = { class: "success__position", onClick: tmp5 };
    const obj3 = { class: "success__icon", dangerouslySetInnerHTML: tmp2 };
    tmp7Result = y$1("div", obj2, y$1("div", { class: "success__content" }, options.successMessageText, y$1("span", obj3)));
  } else {
    obj = { class: "dialog", onClick: options.onFormClose, open };
    const obj4 = {
      class: "dialog__content",
      onClick(stopPropagation) {
          stopPropagation.stopPropagation();
        }
    };
    const obj5 = { options };
    const obj6 = { onSubmitSuccess: tmp6 };
    const tmp7Result2 = y$1(DialogHeader, obj5);
    const merged1 = Object.assign(merged);
    tmp7Result = y$1("dialog", obj, y$1("div", { class: "dialog__position" }, y$1("div", obj4, tmp7Result2, y$1(Form, obj6))));
  }
  return y$1(g$1, null, tmp7Result);
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const document = _mod693.GLOBAL_OBJ.document;
const navigator = _mod693.GLOBAL_OBJ.navigator;
let c6 = "Report a Bug";
function sendFeedback(message) {
  let tmp4Result4;
  obj = arg1;
  if (arg1 === undefined) {
    obj = { includeReplay: true };
  }
  let client;
  let closure_1;
  if (message.message) {
    const obj2 = _mod693;
    client = obj2.getClient();
    if (client) {
      let length = message.tags;
      if (length) {
        const _Object = Object;
        length = Object.keys(message.tags).length;
      }
      if (length) {
        const tmp4Result = _mod693;
        const currentScope = tmp4Result.getCurrentScope();
        currentScope.setTags(message.tags);
      }
      const obj3 = { source: "api", url: tmp4Result4.getLocationHref() };
      const captureFeedback = _mod693.captureFeedback;
      _mod693;
      tmp4Result4 = _mod693;
      const merged = Object.assign(message);
      closure_1 = captureFeedback(obj3, obj);
      const self5 = this;
      const self6 = this;
      const promise = new Promise((arg0, arg1) => {
        let closure_0;
        let closure_2;
        client = arg0;
        closure_1 = arg1;
        const timeout = setTimeout(() => closure_1("Unable to determine if Feedback was correctly sent."), 30000);
        let closure_3 = client.on("afterSendEvent", (event_id, statusCode) => {
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
                let tmp10Result;
                if (statusCode.statusCode < 300) {
                  tmp10Result = closure_0(tmp);
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
      const self3 = this;
      const self4 = this;
      const error = new Error("No client setup, cannot send feedback.");
      throw error;
    }
  } else {
    const tmp = globalThis;
    const _Error = Error;
    const self = this;
    let str = "Unable to submit feedback with empty message";
    const self2 = this;
    const error1 = new Error("Unable to submit feedback with empty message");
    throw error1;
  }
}
let closure_8 = typeof globalThis.__SENTRY_DEBUG__ === "undefined" || globalThis.__SENTRY_DEBUG__;
let closure_10 = { foreground: "#2b2233", background: "#ffffff", accentForeground: "white", accentBackground: "rgba(88, 74, 192, 1)", successColor: "#268d75", errorColor: "#df3338", border: "1.5px solid rgba(41, 35, 47, 0.13)", boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)", outline: "1px auto var(--accent-background)", interactiveFilter: "brightness(95%)" };
let closure_11 = { foreground: "#ebe6ef", background: "#29232f", accentForeground: "white", accentBackground: "rgba(88, 74, 192, 1)", successColor: "#2da98c", errorColor: "#f55459", border: "1.5px solid rgba(235, 230, 239, 0.15)", boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)", outline: "1px auto var(--accent-background)", interactiveFilter: "brightness(150%)" };
let closure_19 = {};
let items = [];
const re21 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const slice = items.slice;
let obj = {
  __e(require, __v, __u, arg3) {
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
            let ___d;
            const constructor = __c.constructor && null != obj.getDerivedStateFromError;
            if (constructor) {
              __c.setState(constructor.getDerivedStateFromError(tmp));
              ___d = __c.__d;
            }
            if (null != __c.componentDidCatch) {
              let obj2 = arg3;
              const componentDidCatch = __c.componentDidCatch;
              if (!arg3) {
                obj2 = {};
              }
              componentDidCatch(tmp, obj2);
              ___d = __c.__d;
            }
            const tmp10 = ___d;
            if (tmp10) {
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
  },
  __b: (arg0) => {
    let c43 = null;
    if (closure_50) {
      tmp(arg0);
    }
  },
  __: (arg0, __k) => {
    const tmp = __k.__k && __k.__k.__m;
    if (tmp) {
      arg0.__m = __k.__k.__m;
    }
    if (bans) {
      tmp2(arg0, __k);
    }
  },
  __r: (__c) => {
    if (closure_51) {
      tmp(__c);
    }
    closure_42 = 0;
    __c = __c.__c;
    let c43 = __c;
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
        const __h = __H.__h;
        const item1 = __h.forEach(z);
        const __h1 = __H.__h;
        const item2 = __h1.forEach(B);
        __H.__h = [];
        closure_42 = 0;
      }
    }
    c44 = c43;
  },
  diffed: (__c) => {
    if (isGuildMetadataLoaded) {
      tmp(__c);
    }
    __c = __c.__c;
    const tmp3 = __c && __c.__H;
    if (tmp3) {
      if (__c.__H.__h.length) {
        const tmp5 = 1 !== closure_47.push(__c) && _requestAnimationFrame === obj.requestAnimationFrame;
        if (!tmp5) {
          _requestAnimationFrame = obj.requestAnimationFrame || w;
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
    let c43 = null;
    c44 = null;
  },
  __c: (arg0, arr) => {
    let closure_0 = arr;
    arr.some((__h) => {
      let closure_43;
      try {
        __h = __h.__h;
        const item = __h.forEach(z);
        const __h1 = __h.__h;
        __h.__h = __h1.filter((item) => {
          const __ = item.__;
          const tmp = !__;
          if (__) {
            item.__c = item.__();
          }
          return tmp;
        });
      } catch (tmp3) {
        closure_0.some((__h) => {
          if (__h.__h) {
            __h.__h = [];
          }
        });
        closure_0 = [];
        obj.__e(tmp3, __h.__v);
      }
    });
    if (closure_53) {
      const tmp3 = arg0;
      tmp2(arg0, closure_0);
    }
  },
  unmount: (__c) => {
    if (closure_54) {
      tmp(__c);
    }
    __c = __c.__c;
    const tmp3 = __c && __c.__H;
    if (tmp3) {
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
  }
};
let sum = 0;
b$1.prototype.render = g$1;
let closure_15 = [];
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
let closure_60 = typeof requestAnimationFrame === "function";
const fn3 = function p(arg0) {
  c46 = 1;
  return fn(D, arg0);
};
const fn4 = function x(arg0, arg1) {
  let closure_0 = arg0;
  c46 = 8;
  return fn2(() => f82301, arg1);
};
let merged = Object.assign({ useCallback: null, useContext: null, useDebugValue: null, useEffect: null, useErrorBoundary: null, useId: null, useImperativeHandle: null, useLayoutEffect: null, useMemo: null, useReducer: null, useRef: null, useState: null });
merged[0] = fn4;
merged[1] = function P(c) {
  let __;
  closure_42 = tmp + 1;
  const tmp2 = __c.context[c.__c];
  if (__c.context[c.__c].__h) {
    let num = c46;
    const __h = tmp2.__h;
    if (!c46) {
      num = 9;
    }
    __h(__c, +closure_42, num);
  }
  c46 = 0;
  let __H = __c.__H;
  if (!__H) {
    const obj2 = { __: [], __h: [] };
    __c.__H = obj2;
    __H = obj2;
  }
  if (+closure_42 >= __H.__.length) {
    const __1 = __H.__;
    const obj3 = { __V };
    __1.push(obj3);
  }
  __H.__[+closure_42].c = c;
  if (__c.context[c.__c]) {
    if (null == __H.__[+closure_42].__) {
      __H.__[+closure_42].__ = true;
      __c.context[c.__c].sub(__c);
    }
    __ = obj.props.value;
  } else {
    __ = c.__;
  }
  return __;
};
merged[2] = function V(syncExternalStore, fn) {
  if (obj.useDebugValue) {
    let tmp4 = syncExternalStore;
    const useDebugValue = obj.useDebugValue;
    if (fn) {
      tmp4 = fn(syncExternalStore);
    }
    const debugValue = useDebugValue(tmp4);
  }
};
merged[3] = function _(__, i) {
  closure_42 = tmp + 1;
  if (obj.__h) {
    let num = c46;
    const __h = tmp2.__h;
    if (!c46) {
      num = 3;
    }
    __h(__c, +closure_42, num);
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
    const obj2 = { __V };
    __.push(obj2);
  }
  let tmp9 = !tmp2.__s;
  if (tmp9) {
    const __H1 = tmp8.__H;
    let someResult = !__H1;
    if (__H1) {
      someResult = __H1.length !== i.length;
    }
    if (!someResult) {
      someResult = i.some((item, index) => item !== __H1[index]);
    }
    tmp9 = someResult;
  }
  if (tmp9) {
    __H.__[+closure_42].__ = __;
    __H.__[+closure_42].i = i;
    const __h1 = __c.__H.__h;
    __h1.push(__H.__[+closure_42]);
  }
};
merged[4] = function b(__) {
  closure_42 = tmp + 1;
  const tmp2 = obj;
  if (obj.__h) {
    let num = c46;
    const __h = tmp2.__h;
    if (!c46) {
      num = 10;
    }
    __h(__c, +closure_42, num);
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
    const obj2 = { __V };
    __.push(obj2);
  }
  let closure_0 = tmp8;
  c46 = 1;
  const tmp9 = fn(D, undefined);
  let closure_1 = tmp9;
  __H.__[+closure_42].__ = __;
  if (!__c.componentDidCatch) {
    __c.componentDidCatch = (tmpResult, arg1) => {
      if (constants.__) {
        constants.__(tmpResult, arg1);
      }
      closure_1[1](tmpResult);
    };
  }
  items = [
    tmp9[0],
    () => {
      closure_1[1](undefined);
    }
  ];
  return items;
};
merged[5] = function g() {
  closure_42 = tmp + 1;
  const tmp2 = obj;
  if (obj.__h) {
    let num = c46;
    const __h = tmp2.__h;
    if (!c46) {
      num = 11;
    }
    __h(__c, +closure_42, num);
  }
  c46 = 0;
  let __H = __c.__H;
  if (!__H) {
    obj = { __: [], __h: [] };
    __c.__H = obj;
    __H = obj;
  }
  if (+closure_42 >= __H.__.length) {
    const __1 = __H.__;
    const obj2 = { __V };
    __1.push(obj2);
  }
  if (!__H.__[+closure_42].__) {
    const __v = __c.__v;
    let tmp11 = __v;
    if (null !== __v) {
      tmp11 = __v;
      if (!__v.__m) {
        let tmp12 = __v;
        tmp11 = __v;
        if (null !== __v.__) {
          const __ = tmp12.__;
          tmp11 = __;
          while (null !== __) {
            tmp11 = __;
            if (__.__m) {
              break;
            } else {
              tmp12 = __;
              tmp11 = __;
              if (null === __.__) {
                break;
              }
            }
          }
        }
      }
    }
    let __m = tmp11.__m;
    if (!__m) {
      items = [0, 0];
      tmp11.__m = items;
      __m = items;
    }
    __m[1] = +__m[1] + 1;
    __H.__[+closure_42].__ = `P${__m[0]}-${+__m[1]}`;
  }
  return __H.__[+closure_42].__;
};
merged[6] = function T(arg0, arg1, arr) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  c46 = 6;
  let combined = arr;
  if (null != arr) {
    combined = arr.concat(arg0);
  }
  A(() => {
    let fn;
    if (typeof closure_0 === "function") {
      closure_0(closure_1());
      fn = () => closure_1_0(null);
    } else if (closure_0) {
      closure_0.current = closure_1();
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
merged[9] = shouldComponentUpdate;
merged[10] = function F(arg0) {
  let closure_0 = arg0;
  c46 = 5;
  return fn2(() => ({ current }), []);
};
merged[11] = fn3;
let closure_65 = defineProperty(merged, Symbol.toStringTag, { value: "Module" });

export const buildFeedbackIntegration = (arg0) => {
  ({ lazyLoadIntegration: require, getModalIntegration: dependencyMap, getScreenshotIntegration: _slicedToArray } = arg0);
  return () => {
    let colorScheme;
    let tags;
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
    let closure_2 = { id: str, autoInject: flag, showBranding: flag2, isEmailRequired: flag3, isNameRequired: flag4, showEmail: flag5, showName: flag6, enableScreenshot: flag7, useSentryUser, tags, styleNonce, scriptNonce, colorScheme, themeDark, themeLight, triggerLabel, triggerAriaLabel: str16, cancelButtonLabel: str3, submitButtonLabel: str14, confirmButtonLabel: str4, formTitle: str7, emailLabel: str5, emailPlaceholder: str6, messageLabel: str9, messagePlaceholder: str10, nameLabel: str11, namePlaceholder: str12, successMessageText: str15, isRequiredLabel: str8, addScreenshotButtonLabel: str2, removeScreenshotButtonLabel: str13, highlightToolText: str17, hideToolText: str18, removeHighlightText: str19, onFormClose: obj.onFormClose, onFormOpen: obj.onFormOpen, onSubmitError: obj.onSubmitError, onSubmitSuccess: obj.onSubmitSuccess, onFormSubmitted: obj.onFormSubmitted };
    let c3 = null;
    let closure_4 = [];
    function _createShadow(id) {
      let colorScheme;
      let themeDark;
      let themeLight;
      const tmp = c3;
      if (!tmp) {
        let obj2;
        const element = <div />;
        const _String = String;
        element.id = String(id.id);
        const body = document.body;
        body.appendChild(element);
        const attachShadowResult = element.attachShadow({ mode: "open" });
        c3 = attachShadowResult;
        ({ colorScheme, themeDark, themeLight, styleNonce } = id);
        const appendChild = attachShadowResult.appendChild;
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
          obj2 = obj;
        } else {
          obj2 = {};
          const merged2 = Object.assign(closure_10);
          const merged3 = Object.assign(themeLight);
        }
        const _HermesInternal2 = HermesInternal;
        const combined = "\n  --foreground: " + obj2.foreground + ";\n  --background: " + obj2.background + ";\n  --accent-foreground: " + obj2.accentForeground + ";\n  --accent-background: " + obj2.accentBackground + ";\n  --success-color: " + obj2.successColor + ";\n  --error-color: " + obj2.errorColor + ";\n  --border: " + obj2.border + ";\n  --box-shadow: " + obj2.boxShadow + ";\n  --outline: " + obj2.outline + ";\n  --interactive-filter: " + obj2.interactiveFilter + ";\n  ";
        if ("system" === colorScheme) {
          const obj3 = {};
          const merged4 = Object.assign(closure_11);
          const merged5 = Object.assign(themeDark);
          const _HermesInternal4 = HermesInternal;
          const _HermesInternal5 = HermesInternal;
          str3 = "\n@media (prefers-color-scheme: dark) {\n  :host {\n    color-scheme: only dark;\n\n    " + "\n  --foreground: " + obj3.foreground + ";\n  --background: " + obj3.background + ";\n  --accent-foreground: " + obj3.accentForeground + ";\n  --accent-background: " + obj3.accentBackground + ";\n  --success-color: " + obj3.successColor + ";\n  --error-color: " + obj3.errorColor + ";\n  --border: " + obj3.border + ";\n  --box-shadow: " + obj3.boxShadow + ";\n  --outline: " + obj3.outline + ";\n  --interactive-filter: " + obj3.interactiveFilter + ";\n  " + "\n  }\n}";
        }
        const _HermesInternal3 = HermesInternal;
        element1.textContent = "\n:host {\n  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;\n  --font-size: 14px;\n  --z-index: 100000;\n\n  --page-margin: 16px;\n  --inset: auto 0 0 auto;\n  --actor-inset: var(--inset);\n\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n\n  " + str5 + "\n\n  " + combined + "\n}\n\n" + str3 + "\n";
        if (styleNonce) {
          const attr = element1.setAttribute("nonce", styleNonce);
        }
        appendChild(element1);
      }
      return c3;
    }
    let closure_0 = _asyncToGenerator(async function(arg0) {
      let obj9;
      let tmp3;
      let v2;
      let value;
      function isScreenshotSupported() {
        obj = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        let isMatch = obj.test(userAgent.userAgent);
        if (!isMatch) {
          const obj2 = /Macintosh/i;
          isMatch = obj2.test(userAgent.userAgent) && userAgent.maxTouchPoints && userAgent.maxTouchPoints > 1;
          const tmp3 = obj2.test(userAgent.userAgent) && userAgent.maxTouchPoints && userAgent.maxTouchPoints > 1;
        }
        if (!isMatch) {
          isMatch = !globalThis.isSecureContext;
        }
        return !isMatch;
      }
      closure_0 = arg0;
      if (value === 2) {
        value = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let createDialog;
          let screenshotIntegration;
          let self;
          let tmp6;
          let selfResult;
          value = 2;
          const tmp4 = v2;
          if (0 === v2) {
            if (arg0 === 1) {
              value = 3;
              throw value;
            } else if (arg0 === 2) {
              value = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              createDialog = undefined;
              screenshotIntegration = undefined;
              v2 = undefined;
              value = undefined;
              const enableScreenshot = closure_0.enableScreenshot && isScreenshotSupported();
              c3 = 1;
              if (scriptNonce) {
                tmp6 = scriptNonce();
                createDialog = tmp6();
                const obj4 = styleNonce(scriptNonce[2]);
                obj4.addIntegration(createDialog);
                c3 = 2;
                self = enableScreenshot;
                let tmp25;
                if (enableScreenshot) {
                  self = closure_2_2;
                  if (self) {
                    selfResult = self();
                    tmp25 = selfResult;
                  } else {
                    v2 = 4;
                    value = 1;
                    const obj5 = { value: closure_0("feedbackScreenshotIntegration", self), done: false };
                    return obj5;
                  }
                }
                v2 = tmp25;
                const tmp30 = v2;
                if (tmp30) {
                  screenshotIntegration = v2();
                  self = styleNonce(scriptNonce[2]);
                  self.addIntegration(screenshotIntegration);
                }
                c3 = 0;
              } else {
                v2 = 3;
                value = 1;
                const obj6 = { value: closure_0("feedbackModalIntegration", self), done: false };
                return obj6;
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            self = _createActor;
            if (self) {
              self = styleNonce(scriptNonce[2]).debug;
              self.error("[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`.");
            }
            const _Error = Error;
            self = this;
            const self2 = this;
            const error = new Error("[Feedback] Missing feedback modal integration!");
            throw error;
          } else if (2 === tmp4) {
            c3 = 0;
            self = _createActor;
            if (self) {
              self = styleNonce(scriptNonce[2]).debug;
              self.error("[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.");
            }
          } else if (3 === tmp4) {
            if (arg0 === 1) {
              value = 3;
              throw value;
            } else {
              tmp6 = value;
              if (arg0 === 2) {
                c3 = 0;
                value = 3;
                const obj7 = { value, done: true };
                return obj7;
              }
            }
          } else if (arg0 === 1) {
            value = 3;
            throw value;
          } else {
            selfResult = value;
            if (arg0 === 2) {
              c3 = 0;
              value = 3;
              obj = { value, done: true };
              return obj;
            }
          }
          self = createDialog.createDialog;
          const obj8 = { options: obj9, screenshotIntegration, sendFeedback: _attachTo, shadow: value(closure_0) };
          obj9 = {
            onFormClose() {
                  if (userAgent != null) {
                    userAgent.close();
                  }
                  const onFormClose = closure_1_0.onFormClose;
                  if (onFormClose != null) {
                    onFormClose();
                  }
                },
            onFormSubmitted() {
                  if (userAgent != null) {
                    userAgent.close();
                  }
                  const onFormSubmitted = closure_1_0.onFormSubmitted;
                  if (onFormSubmitted != null) {
                    onFormSubmitted();
                  }
                }
          };
          const merged = Object.assign(closure_0);
          self(obj8);
          value = 3;
          const obj10 = { value, done: true };
          return obj10;
        } catch (tmp47) {
          if (0 === c3) {
            value = 3;
            throw tmp47;
          } else if (1 === tmp48) {
            v2 = 1;
          } else {
            v2 = 2;
          }
        }
      }
    });
    function _loadAndRenderDialog(arg0) {
      return closure_0(...arguments);
    }
    function _attachTo(el, arg1) {
      let obj3;
      let obj4;
      let obj5;
      obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      let element;
      let c2;
      let handleClick;
      let unsubscribe;
      require = c2;
      let obj2 = {
        tags: obj3,
        onFormOpen() {
          const onFormOpen = obj.onFormOpen;
          if (onFormOpen != null) {
            onFormOpen();
          }
          const onFormOpen2 = closure_0.onFormOpen;
          if (onFormOpen2 != null) {
            onFormOpen2();
          }
        },
        onFormClose() {
          const onFormClose = obj.onFormClose;
          if (onFormClose != null) {
            onFormClose();
          }
          const onFormClose2 = closure_0.onFormClose;
          if (onFormClose2 != null) {
            onFormClose2();
          }
        },
        onSubmitSuccess(arg0, arg1) {
          const onSubmitSuccess = obj.onSubmitSuccess;
          if (onSubmitSuccess != null) {
            onSubmitSuccess(arg0, arg1);
          }
          const onSubmitSuccess2 = closure_0.onSubmitSuccess;
          if (onSubmitSuccess2 != null) {
            onSubmitSuccess2(arg0, arg1);
          }
        },
        onSubmitError(arg0) {
          const onSubmitError = obj.onSubmitError;
          if (onSubmitError != null) {
            onSubmitError(arg0);
          }
          const onSubmitError2 = closure_0.onSubmitError;
          if (onSubmitError2 != null) {
            onSubmitError2(arg0);
          }
        },
        onFormSubmitted() {
          const onFormSubmitted = obj.onFormSubmitted;
          if (onFormSubmitted != null) {
            onFormSubmitted();
          }
          const onFormSubmitted2 = closure_0.onFormSubmitted;
          if (onFormSubmitted2 != null) {
            onFormSubmitted2();
          }
        },
        themeDark: obj4,
        themeLight: obj5
      };
      let merged = Object.assign(c2);
      const merged1 = Object.assign(obj);
      obj3 = {};
      const merged2 = Object.assign(c2.tags);
      const merged3 = Object.assign(obj.tags);
      obj4 = {};
      const merged4 = Object.assign(c2.themeDark);
      const merged5 = Object.assign(obj.themeDark);
      obj5 = {};
      const merged6 = Object.assign(c2.themeLight);
      const merged7 = Object.assign(obj.themeLight);
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
        require = _asyncToGenerator(async () => {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let onFormSubmitted = tmp;
                  if (!c2) {
                    const obj4 = {
                      onFormSubmitted() {
                                  if (closure_1_2 != null) {
                                    closure_1_2.removeFromDom();
                                  }
                                  onFormSubmitted = onFormSubmitted.onFormSubmitted;
                                  if (onFormSubmitted != null) {
                                    onFormSubmitted();
                                  }
                                }
                    };
                    const merged = Object.assign(onFormSubmitted);
                    c1 = 1;
                    c2 = 1;
                    const obj5 = { value: _loadAndRenderDialog(obj4), done: false };
                    return obj5;
                  }
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c2 = value;
              }
              c2.appendToDom();
              c2.open();
              c2 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp14) {
              c2 = 3;
              throw tmp14;
            }
          }
        });
        handleClick = function handleClick() {
          return closure_0(...arguments);
        };
        const listener = element.addEventListener("click", handleClick);
        unsubscribe = function unsubscribe() {
          unsubscribe = unsubscribe.filter((item) => item !== unsubscribe);
          obj = c2;
          if (c2 != null) {
            obj.removeFromDom();
          }
          c2 = null;
          const removed = element.removeEventListener("click", handleClick);
        };
        unsubscribe.push(unsubscribe);
        return unsubscribe;
      } else {
        if (closure_2_8) {
          const debug = _mod693.debug;
          debug.error("[Feedback] Unable to attach to target element");
        }
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Unable to attach to target element");
        throw error;
      }
    }
    function _createActor(arg0) {
      let obj3;
      let obj4;
      let obj5;
      let triggerAriaLabel;
      let triggerLabel;
      obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let obj7;
      const obj2 = {
        tags: obj3,
        onFormOpen() {
          const onFormOpen = obj.onFormOpen;
          if (onFormOpen != null) {
            onFormOpen();
          }
          const onFormOpen2 = closure_0.onFormOpen;
          if (onFormOpen2 != null) {
            onFormOpen2();
          }
        },
        onFormClose() {
          const onFormClose = obj.onFormClose;
          if (onFormClose != null) {
            onFormClose();
          }
          const onFormClose2 = closure_0.onFormClose;
          if (onFormClose2 != null) {
            onFormClose2();
          }
        },
        onSubmitSuccess(arg0, arg1) {
          const onSubmitSuccess = obj.onSubmitSuccess;
          if (onSubmitSuccess != null) {
            onSubmitSuccess(arg0, arg1);
          }
          const onSubmitSuccess2 = closure_0.onSubmitSuccess;
          if (onSubmitSuccess2 != null) {
            onSubmitSuccess2(arg0, arg1);
          }
        },
        onSubmitError(arg0) {
          const onSubmitError = obj.onSubmitError;
          if (onSubmitError != null) {
            onSubmitError(arg0);
          }
          const onSubmitError2 = closure_0.onSubmitError;
          if (onSubmitError2 != null) {
            onSubmitError2(arg0);
          }
        },
        onFormSubmitted() {
          const onFormSubmitted = obj.onFormSubmitted;
          if (onFormSubmitted != null) {
            onFormSubmitted();
          }
          const onFormSubmitted2 = closure_0.onFormSubmitted;
          if (onFormSubmitted2 != null) {
            onFormSubmitted2();
          }
        },
        themeDark: obj4,
        themeLight: obj5
      };
      const merged = Object.assign(closure_2);
      const merged1 = Object.assign(obj);
      obj3 = {};
      const merged2 = Object.assign(closure_2.tags);
      const merged3 = Object.assign(obj.tags);
      obj4 = {};
      const merged4 = Object.assign(closure_2.themeDark);
      const merged5 = Object.assign(obj.themeDark);
      obj5 = {};
      const merged6 = Object.assign(closure_2.themeLight);
      const merged7 = Object.assign(obj.themeLight);
      ({ triggerLabel, triggerAriaLabel } = obj2);
      let closure_0 = _createShadow(obj2);
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
      const appendChild = element.appendChild;
      const _document = _mod693.GLOBAL_OBJ.document;
      const elementNS = _document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const entries = Object.entries({ width: "20", height: "20", viewBox: "0 0 20 20", fill: "var(--actor-color, var(--foreground))" });
      const item = entries.forEach((item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        elementNS5.setAttributeNS(null, tmp, tmp2);
      });
      const _document2 = _mod693.GLOBAL_OBJ.document;
      const elementNS1 = _document2.createElementNS("http://www.w3.org/2000/svg", "g");
      const entries1 = Object.entries({ clipPath: "url(#clip0_57_80)" });
      const item1 = entries1.forEach((item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        elementNS5.setAttributeNS(null, tmp, tmp2);
      });
      const _document3 = _mod693.GLOBAL_OBJ.document;
      const elementNS2 = _document3.createElementNS("http://www.w3.org/2000/svg", "path");
      const entries2 = Object.entries({ "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z" });
      const item2 = entries2.forEach((item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        elementNS5.setAttributeNS(null, tmp, tmp2);
      });
      const appendChildResult = elementNS.appendChild(elementNS1);
      appendChildResult.appendChild(elementNS2);
      const _document4 = _mod693.GLOBAL_OBJ.document;
      const elementNS3 = _document4.createElementNS("http://www.w3.org/2000/svg", "defs");
      const _document5 = _mod693.GLOBAL_OBJ.document;
      const elementNS4 = _document5.createElementNS("http://www.w3.org/2000/svg", "clipPath");
      const entries3 = Object.entries({ id: "clip0_57_80" });
      const item3 = entries3.forEach((item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        elementNS5.setAttributeNS(null, tmp, tmp2);
      });
      const _document6 = _mod693.GLOBAL_OBJ.document;
      const elementNS5 = _document6.createElementNS("http://www.w3.org/2000/svg", "rect");
      const entries4 = Object.entries({ width: "20", height: "20", fill: "white" });
      const item4 = entries4.forEach((item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        elementNS5.setAttributeNS(null, tmp, tmp2);
      });
      elementNS4.appendChild(elementNS5);
      elementNS3.appendChild(elementNS4);
      const appendChildResult4 = elementNS.appendChild(elementNS3);
      const appendChildResult5 = appendChildResult4.appendChild(elementNS4);
      appendChildResult5.appendChild(elementNS5);
      appendChild(elementNS);
      if (triggerLabel) {
        const element1 = <span />;
        element1.appendChild(document.createTextNode(triggerLabel));
        element.appendChild(element1);
      }
      element2 = <style />;
      element2.textContent = "\n.widget__actor {\n  position: fixed;\n  z-index: var(--z-index);\n  margin: var(--page-margin);\n  inset: var(--actor-inset);\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px;\n\n  font-family: inherit;\n  font-size: var(--font-size);\n  font-weight: 600;\n  line-height: 1.14em;\n  text-decoration: none;\n\n  background: var(--actor-background, var(--background));\n  border-radius: var(--actor-border-radius, 1.7em/50%);\n  border: var(--actor-border, var(--border));\n  box-shadow: var(--actor-box-shadow, var(--box-shadow));\n  color: var(--actor-color, var(--foreground));\n  fill: var(--actor-color, var(--foreground));\n  cursor: pointer;\n  opacity: 1;\n  transition: transform 0.2s ease-in-out;\n  transform: translate(0, 0) scale(1);\n}\n.widget__actor[aria-hidden=\"true\"] {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n  transform: translate(0, 16px) scale(0.98);\n}\n\n.widget__actor:hover {\n  background: var(--actor-hover-background, var(--background));\n  filter: var(--interactive-filter);\n}\n\n.widget__actor svg {\n  width: 1.14em;\n  height: 1.14em;\n}\n\n@media (max-width: 600px) {\n  .widget__actor span {\n    display: none;\n  }\n}\n";
      if (styleNonce) {
        const attr = element2.setAttribute("nonce", styleNonce);
      }
      obj7 = {
        el: element,
        appendToDom() {
          closure_0.appendChild(element2);
          closure_0.appendChild(element);
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
      const el = obj7.el;
      const obj8 = {
        onFormOpen() {
          obj7.hide();
        },
        onFormClose() {
          obj7.show();
        },
        onFormSubmitted() {
          obj7.show();
        }
      };
      const merged8 = Object.assign(obj2);
      _attachTo(el, obj8);
      return obj7;
    }
    let obj2 = {
      name: "Feedback",
      setupOnce() {
        obj = _mod693;
        const autoInject = obj.isBrowser() && closure_2.autoInject;
        if (autoInject) {
          if ("loading" === document.readyState) {
            const listener = document.addEventListener("DOMContentLoaded", () => {
              obj = _createActor();
              return obj.appendToDom();
            });
          } else {
            const obj3 = _createActor();
            obj3.appendToDom();
          }
        }
      },
      attachTo: _attachTo,
      createWidget() {
        let obj3;
        let obj4;
        let obj5;
        obj = arg0;
        if (arg0 === undefined) {
          obj = {};
        }
        let closure_0 = closure_2;
        const obj2 = {
          tags: obj3,
          onFormOpen() {
            const onFormOpen = obj.onFormOpen;
            if (onFormOpen != null) {
              onFormOpen();
            }
            const onFormOpen2 = closure_0.onFormOpen;
            if (onFormOpen2 != null) {
              onFormOpen2();
            }
          },
          onFormClose() {
            const onFormClose = obj.onFormClose;
            if (onFormClose != null) {
              onFormClose();
            }
            const onFormClose2 = closure_0.onFormClose;
            if (onFormClose2 != null) {
              onFormClose2();
            }
          },
          onSubmitSuccess(arg0, arg1) {
            const onSubmitSuccess = obj.onSubmitSuccess;
            if (onSubmitSuccess != null) {
              onSubmitSuccess(arg0, arg1);
            }
            const onSubmitSuccess2 = closure_0.onSubmitSuccess;
            if (onSubmitSuccess2 != null) {
              onSubmitSuccess2(arg0, arg1);
            }
          },
          onSubmitError(arg0) {
            const onSubmitError = obj.onSubmitError;
            if (onSubmitError != null) {
              onSubmitError(arg0);
            }
            const onSubmitError2 = closure_0.onSubmitError;
            if (onSubmitError2 != null) {
              onSubmitError2(arg0);
            }
          },
          onFormSubmitted() {
            const onFormSubmitted = obj.onFormSubmitted;
            if (onFormSubmitted != null) {
              onFormSubmitted();
            }
            const onFormSubmitted2 = closure_0.onFormSubmitted;
            if (onFormSubmitted2 != null) {
              onFormSubmitted2();
            }
          },
          themeDark: obj4,
          themeLight: obj5
        };
        const merged = Object.assign(closure_2);
        const merged1 = Object.assign(obj);
        obj3 = {};
        const merged2 = Object.assign(closure_2.tags);
        const merged3 = Object.assign(obj.tags);
        obj4 = {};
        const merged4 = Object.assign(closure_2.themeDark);
        const merged5 = Object.assign(obj.themeDark);
        obj5 = {};
        const merged6 = Object.assign(closure_2.themeLight);
        const merged7 = Object.assign(obj.themeLight);
        const obj6 = _createActor(obj2);
        obj6.appendToDom();
        return obj6;
      },
      createForm() {
        obj = arg0;
        if (arg0 === undefined) {
          obj = {};
        }
        return (async () => {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c0 = 2;
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                c0 = 3;
                obj = { value: _loadAndRenderDialog(mergeOptions(closure_1_2, obj)), done: true };
                return obj;
              }
            } catch (tmp7) {
              c0 = 3;
              throw tmp7;
            }
          }
        })();
      },
      remove() {
        if (parentElement) {
          parentElement = parentElement.parentElement;
          if (parentElement != null) {
            parentElement.remove();
          }
          parentElement = null;
        }
        const item = closure_4.forEach((fn) => fn());
        closure_4 = [];
      }
    };
    return obj2;
  };
};
export const feedbackModalIntegration = () => {
  let closure_25;
  let hooks;
  obj = {
    name: "FeedbackModal",
    setupOnce() {

    },
    createDialog(options) {
      let closure_1;
      let screenshotIntegration;
      options = options.options;
      ({ screenshotIntegration, sendFeedback: closure_1 } = options);
      let closure_5;
      let element;
      let overflow;
      let input;
      let renderContent;
      const shadow = options.shadow;
      const useSentryUser = options.useSentryUser;
      obj = options(onSubmit[2]);
      const currentScope = obj.getCurrentScope();
      let user = currentScope.getUser();
      const obj3 = options(onSubmit[2]);
      const isolationScope = obj3.getIsolationScope();
      const user1 = isolationScope.getUser();
      const obj5 = options(onSubmit[2]);
      const globalScope = obj5.getGlobalScope();
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
        let str = "nonce";
        const attr = element.setAttribute("nonce", styleNonce);
      }
      overflow = "";
      const obj2 = {
        appendToDom() {
          const hasItem = shadow.contains(element) || shadow.contains(closure_5);
          if (!hasItem) {
            shadow.appendChild(element);
            shadow.appendChild(closure_5);
          }
        },
        removeFromDom() {
          closure_5.remove();
          element.remove();
          document.body.style.overflow = overflow;
        },
        open() {
          renderContent(true);
          const onFormOpen = options.onFormOpen;
          if (onFormOpen != null) {
            onFormOpen();
          }
          obj = _mod693;
          const client = obj.getClient();
          if (client != null) {
            client.emit("openFeedbackWidget");
          }
          overflow = document.body.style.overflow;
          document.body.style.overflow = "hidden";
        },
        close() {
          renderContent(false);
          document.body.style.overflow = overflow;
        }
      };
      Object.defineProperty(obj2, "el", { get: () => closure_5, set: undefined });
      input = undefined;
      if (screenshotIntegration != null) {
        const obj4 = { h, hooks, dialog: obj2, options };
        input = screenshotIntegration.createInput(obj4);
      }
      renderContent = function renderContent(open) {
        let _String;
        let _String2;
        let isNameRequired;
        let length;
        let str;
        let str2;
        obj = {
          options,
          screenshotInput: input,
          showName: isNameRequired,
          showEmail: options.showEmail || options.isEmailRequired,
          defaultName: _String(str),
          defaultEmail: _String2(str2),
          onFormClose() {
            renderContent(false);
            const onFormClose = options.onFormClose;
            if (onFormClose != null) {
              onFormClose();
            }
          },
          onSubmit,
          onSubmitSuccess(arg0, arg1) {
            renderContent(false);
            const onSubmitSuccess = options.onSubmitSuccess;
            if (onSubmitSuccess != null) {
              onSubmitSuccess(arg0, arg1);
            }
          },
          onSubmitError(arg0) {
            const onSubmitError = options.onSubmitError;
            if (onSubmitError != null) {
              onSubmitError(arg0);
            }
          },
          onFormSubmitted() {
            const onFormSubmitted = options.onFormSubmitted;
            if (onFormSubmitted != null) {
              onFormSubmitted();
            }
          },
          open
        };
        isNameRequired = options.showName || options.isNameRequired;
        str = useSentryUser;
        _String = String;
        if (useSentryUser) {
          let tmp7;
          if (user != null) {
            tmp7 = tmp5[useSentryUser.name];
          }
          str = tmp7;
        }
        if (!str) {
          str = "";
        }
        str2 = useSentryUser;
        _String2 = String;
        if (useSentryUser) {
          let tmp10;
          if (user != null) {
            tmp10 = tmp8[useSentryUser.email];
          }
          str2 = tmp10;
        }
        if (!str2) {
          str2 = "";
        }
        const tmpResult = h(Dialog, obj);
        if (closure_2_13.__) {
          closure_2_13.__(tmpResult, closure_5);
        }
        const __k = closure_5.__k;
        items = [tmpResult];
        const tmpResult2 = h(g$1, null, items);
        closure_5.__k = tmpResult2;
        let tmp18 = null;
        const ownerSVGElement = closure_5.ownerSVGElement;
        const tmp16 = __k || closure_2_19;
        if (!__k) {
          let callResult = null;
          if (closure_5.firstChild) {
            callResult = slice.call(closure_5.childNodes);
          }
          tmp18 = callResult;
        }
        const items1 = [];
        const items2 = [];
        const tmp20 = __k ? __k.__e : closure_5.firstChild;
        closure_2_37(closure_5, tmpResult2, tmp16, closure_2_19, undefined !== ownerSVGElement, tmp18, items1, tmp20, false, items2);
        tmpResult2.__d = undefined;
        let __h = items1;
        let num = 0;
        if (0 < items2.length) {
          do {
            sum = num + 1;
            let sum1 = sum + 1;
            let tmp25 = closure_2_39(items2[num], items2[sum], items2[sum1]);
            num = sum1 + 1;
            length = items2.length;
          } while (num < length);
        }
        if (closure_2_13.__c) {
          closure_2_13.__c(tmpResult2, __h);
        }
        __h.some(f82288);
      };
      return obj2;
    }
  };
  return obj;
};
export const feedbackScreenshotIntegration = () => {
  obj = {
    name: "FeedbackScreenshot",
    setupOnce() {

    },
    createInput(dialog) {
      let h;
      let hooks;
      let options;
      ({ h, hooks, options } = dialog);
      h = undefined;
      dialog = dialog.dialog;
      let element = <canvas />;
      let closure_7;
      let style;
      let ScreenshotEditor;
      function useTakeScreenshot(arg0) {

      }
      function Toolbar(action) {
        let closure_129_1;
        action = action.action;
        ({ setAction: closure_129_1, options } = action);
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
            closure_1_1(str);
          }
        };
        const tmpResult = h("button", obj, options.highlightToolText);
        if ("hide" === action) {
          str = "editor__tool--active";
        }
        const obj2 = { class: "editor__tool-bar" };
        const obj3 = {
          type: "button",
          class: `editor__tool ${str}`,
          onClick() {
            let str = "hide";
            if ("hide" === action) {
              str = "";
            }
            closure_1_1(str);
          }
        };
        return h("div", { class: "editor__tool-container" }, h("div", obj2, tmpResult, h("button", obj3, options.hideToolText)));
      }
      function IconClose() {
        const tmp = h("circle", { r: "7", cx: "8", cy: "8", fill: "white" });
        const tmp2 = h("path", { strokeWidth: "1.5", d: "M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z" });
        const tmp3 = h("path", { strokeWidth: "1.5", d: "M5.34,11.41a.71.71,0,0,1-.53-.22.74.74,0,0,1,0-1.06l5.32-5.32a.75.75,0,0,1,1.06,1.06L5.87,11.19A.74.74,0,0,1,5.34,11.41Z" });
        return h("svg", { "data-test-id": "icon-close", viewBox: "0 0 16 16", fill: "#2B2233", height: "25px", width: "25px" }, tmp, tmp2, tmp3, h("path", { strokeWidth: "1.5", d: "M10.66,11.41a.74.74,0,0,1-.53-.22L4.81,5.87A.75.75,0,0,1,5.87,4.81l5.32,5.32a.74.74,0,0,1,0,1.06A.71.71,0,0,1,10.66,11.41Z" }));
      }
      const styleNonce = options.styleNonce;
      const element1 = <style />;
      element1.textContent = "\n.editor {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n}\n\n.editor__image-container {\n  justify-items: center;\n  padding: 15px;\n  position: relative;\n  height: 100%;\n  border-radius: var(--menu-border-radius, 6px);\n\n  background-color: " + "#1A141F" + ";\n  background-image: repeating-linear-gradient(\n      -145deg,\n      transparent,\n      transparent 8px,\n      " + "#1A141F" + " 8px,\n      " + "#1A141F" + " 11px\n    ),\n    repeating-linear-gradient(\n      -45deg,\n      transparent,\n      transparent 15px,\n      " + "#302735" + " 15px,\n      " + "#302735" + " 16px\n    );\n}\n\n.editor__canvas-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.editor__canvas-container > * {\n  object-fit: contain;\n  position: absolute;\n}\n\n.editor__tool-container {\n  padding-top: 8px;\n  display: flex;\n  justify-content: center;\n}\n\n.editor__tool-bar {\n  display: flex;\n  gap: 8px;\n}\n\n.editor__tool {\n  display: flex;\n  padding: 8px 12px;\n  justify-content: center;\n  align-items: center;\n  border: var(--button-border, var(--border));\n  border-radius: var(--button-border-radius, 6px);\n  background: var(--button-background, var(--background));\n  color: var(--button-color, var(--foreground));\n}\n\n.editor__tool--active {\n  background: var(--button-primary-background, var(--accent-background));\n  color: var(--button-primary-color, var(--accent-foreground));\n}\n\n.editor__rect {\n  position: absolute;\n  z-index: 2;\n}\n\n.editor__rect button {\n  opacity: 0;\n  position: absolute;\n  top: -12px;\n  right: -12px;\n  cursor: pointer;\n  padding: 0;\n  z-index: 3;\n  border: none;\n  background: none;\n}\n\n.editor__rect:hover button {\n  opacity: 1;\n}\n";
      if (styleNonce) {
        let str = "nonce";
        const attr = element1.setAttribute("nonce", styleNonce);
      }
      obj = {
        input: function Wrapper(onError) {
          let _undefined;
          let c1;
          let closure_130_0;
          let tmp12;
          let tmp2;
          onError = onError.onError;
          hooks = undefined;
          let tmp = element(hooks.useState(), 2);
          [tmp2, c1] = tmp;
          const callback = hooks.useCallback(() => {
            style.display = "none";
          }, []);
          const callback1 = hooks.useCallback((arg0, dpi) => {
            size = <canvas />;
            if (size) {
              const context = size.getContext("2d", { alpha: false });
              if (context) {
                context.scale(dpi, dpi);
                ({ videoWidth: size.width, videoHeight: size.height } = arg0);
                context.drawImage(arg0, 0, 0, size.width, size.height);
                obj = { canvas: size, dpi };
                _undefined(obj);
              }
            }
            ({ videoWidth: element.width, videoHeight: element.height } = arg0);
          }, []);
          const callback2 = hooks.useCallback(() => {
            style.display = "block";
          }, []);
          if (typeof useTakeScreenshot === "function") {
            let tmp15Result;
            let closure_3 = tmp6;
            obj = onError;
            const useState = onError.useState;
            let num = h(hooks[2]).GLOBAL_OBJ.devicePixelRatio;
            if (num == null) {
              num = 1;
            }
            [tmp12, closure_130_0] = element(useState(num), 2);
            const tmp11 = element(useState(num), 2);
            const effect = obj.useEffect(() => {
              function onChange() {
                onChange(onError(_undefined[2]).GLOBAL_OBJ.devicePixelRatio);
              }
              const matchMediaResult = globalThis.matchMedia("(resolution: " + onError(_undefined[2]).GLOBAL_OBJ.devicePixelRatio + "dppx)");
              const listener = matchMediaResult.addEventListener("change", onChange);
              return () => {
                const removed = matchMediaResult.removeEventListener("change", onChange);
              };
            }, []);
            let closure_4 = tmp12;
            const effect1 = obj.useEffect(() => {
              function takeScreenshot() {
                return closure_0(...arguments);
              }
              closure_0 = tmp6(function*() {
                let v2;
                if (c3 === 2) {
                  c3 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    let tmp;
                    c3 = 2;
                    if (0 === v2) {
                      if (arg0 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        let c1 = 0;
                        tmp = undefined;
                        let closure_1;
                        tmp();
                        mediaDevices = mediaDevices.mediaDevices;
                        const obj4 = { video: size, audio: false, monitorTypeSurfaces: "exclude", preferCurrentTab: true, selfBrowserSurface: "include", surfaceSwitching: "exclude" };
                        size = { width: tmp(callback1[2]).GLOBAL_OBJ.innerWidth * React, height: tmp(callback1[2]).GLOBAL_OBJ.innerHeight * React };
                        const getDisplayMedia = mediaDevices.getDisplayMedia;
                        v2 = 1;
                        c3 = 1;
                        const obj5 = { value: getDisplayMedia(obj4), done: false };
                        return obj5;
                      }
                    } else if (1 === tmp4) {
                      if (arg0 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        const obj6 = { value, done: true };
                        return obj6;
                      } else {
                        tmp = value;
                        closure_1 = <video />;
                        const self = this;
                        const self2 = this;
                        const promise = new Promise((arg0, arg1) => {
                          srcObject = arg0;
                          closure_1.srcObject = srcObject;
                          closure_1.onloadedmetadata = () => {
                            c1(closure_2_1, React);
                            const tracks = srcObject.getTracks();
                            const item = tracks.forEach((stop) => stop.stop());
                            closure_0();
                          };
                          const playResult = closure_1.play();
                          playResult.catch(arg1);
                        });
                        v2 = 2;
                        c3 = 1;
                        const obj7 = { value: promise, done: false };
                        return obj7;
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
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp14) {
                    c3 = 3;
                    throw tmp14;
                  }
                }
              });
              let promise = takeScreenshot();
              promise.catch(tmp6);
            }, []);
            if (tmp2) {
              let obj2 = { screenshot: tmp2 };
              tmp15Result = tmp15(ScreenshotEditor, obj2);
            } else {
              tmp15Result = tmp15("div", null);
            }
            return tmp15Result;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
        value() {
          return closure_0(...arguments);
        }
      };
      closure_7 = { __html: element1.innerText };
      style = dialog.el.style;
      ScreenshotEditor = function ScreenshotEditor(screenshot) {
        let id;
        screenshot = screenshot.screenshot;
        let action;
        let tmp = element(action.useState("highlight"), 2);
        action = tmp[0];
        const tmp3 = tmp[1];
        const tmp4 = element(action.useState([]), 2);
        const first1 = tmp4[0];
        options = tmp4[1];
        const ref = action.useRef(null);
        const ref1 = action.useRef(null);
        const ref2 = action.useRef(null);
        const ref3 = action.useRef(null);
        const tmp9 = element(action.useState(1), 2);
        const first2 = tmp9[0];
        let closure_9 = tmp9[1];
        items = [options.id];
        const memo = action.useMemo(() => {
          element = useTakeScreenshot.getElementById(id.id);
          if (element) {
            const computedStyle = globalThis.getComputedStyle(element);
            const propertyValue = computedStyle.getPropertyValue("--button-primary-background") || computedStyle.getPropertyValue("--accent-background");
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
              const tmp5 = 0 !== current.clientHeight && 0 !== current.clientWidth;
              if (!tmp5) {
                _setTimeout = setTimeout;
                const timerId = setTimeout(handleResize, 0);
              }
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
            let tmp5 = 0 !== current.clientHeight && 0 !== current.clientWidth;
            if (!tmp5) {
              _setTimeout = setTimeout;
              let timerId = setTimeout(handleResize, 0);
            }
          }
          let GLOBAL_OBJ = screenshot(hooks[2]).GLOBAL_OBJ;
          const listener = GLOBAL_OBJ.addEventListener("resize", handleResize);
          return () => {
            const GLOBAL_OBJ = _mod693.GLOBAL_OBJ;
            const removed = GLOBAL_OBJ.removeEventListener("resize", handleResize);
          };
        }, items1);
        const items2 = [screenshot];
        closure_11 = action.useCallback((getContext, translateY) => {
          const tmp = getContext;
          if (tmp) {
            const context = getContext.getContext("2d", { alpha: true });
            if (context) {
              context.scale(translateY, translateY);
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
          closure_0 = memo;
          if (current2) {
            const context1 = current2.getContext("2d", { alpha: true });
            if (context1) {
              if (first1.length) {
                context1.fillStyle = "rgba(0, 0, 0, 0.25)";
                context1.fillRect(0, 0, current2.width, current2.height);
              }
              const item = first1.forEach((type) => {
                type = type.type;
                if ("highlight" === type) {
                  context1.shadowColor = "rgba(0, 0, 0, 0.7)";
                  context1.shadowBlur = 50;
                  context1.fillStyle = tmp;
                  context1.fillRect(type.x - 1, type.y - 1, type.w + 2, type.h + 2);
                  context1.clearRect(type.x, type.y, type.w, type.h);
                } else if ("hide" === type) {
                  context1.fillStyle = "rgb(0, 0, 0)";
                  context1.fillRect(type.x, type.y, type.w, type.h);
                }
              });
            }
          }
        }, items4);
        const items5 = [first1, screenshot, memo];
        const effect2 = action.useEffect(() => {
          size = element;
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
              context1.scale(screenshot.dpi, screenshot.dpi);
              size2.width = screenshot.canvas.width;
              size2.height = screenshot.canvas.height;
              closure_0 = memo;
              if (size2) {
                const context2 = size2.getContext("2d", { alpha: true });
                if (context2) {
                  if (first1.length) {
                    context2.fillStyle = "rgba(0, 0, 0, 0.25)";
                    context2.fillRect(0, 0, size2.width, size2.height);
                  }
                  const item = first1.forEach((type) => {
                    type = type.type;
                    if ("highlight" === type) {
                      context1.shadowColor = "rgba(0, 0, 0, 0.7)";
                      context1.shadowBlur = 50;
                      context1.fillStyle = tmp;
                      context1.fillRect(type.x - 1, type.y - 1, type.w + 2, type.h + 2);
                      context1.clearRect(type.x, type.y, type.w, type.h);
                    } else if ("hide" === type) {
                      context1.fillStyle = "rgb(0, 0, 0)";
                      context1.fillRect(type.x, type.y, type.w, type.h);
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
            id((arg0) => {
              items = [...arg0];
              items.splice(closure_1_0, 1);
              return items;
            });
          };
        }, []);
        size = { width: `${screenshot.canvas.width * tmp10}px`, height: `${screenshot.canvas.height * tmp10}px` };
        function handleStopPropagation(stopPropagation) {
          stopPropagation.stopPropagation();
        }
        obj = { nonce: options.styleNonce, dangerouslySetInnerHTML: ref3 };
        let obj2 = { class: "editor__canvas-container", ref };
        const obj3 = {
          ref: ref3,
          onMouseDown(offsetX) {
            let point;
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
                    const point1 = { type: point.type, x: Math.min(point.x, result), y: Math.min(point.y, result1), w: Math.abs(result - point.x), h: Math.abs(result1 - point.y) };
                    const _Math = Math;
                    const _Math2 = Math;
                    const _Math3 = Math;
                    const _Math4 = Math;
                    items[tmp5] = point1;
                    closure_0 = memo;
                    if (current2) {
                      const context1 = current2.getContext("2d", { alpha: true });
                      if (context1) {
                        if (items.length) {
                          context1.fillStyle = "rgba(0, 0, 0, 0.25)";
                          context1.fillRect(0, 0, current2.width, current2.height);
                        }
                        const item = items.forEach((type) => {
                          type = type.type;
                          if ("highlight" === type) {
                            context1.shadowColor = "rgba(0, 0, 0, 0.7)";
                            context1.shadowBlur = 50;
                            context1.fillStyle = tmp;
                            context1.fillRect(type.x - 1, type.y - 1, type.w + 2, type.h + 2);
                            context1.clearRect(type.x, type.y, type.w, type.h);
                          } else if ("hide" === type) {
                            context1.fillStyle = "rgb(0, 0, 0)";
                            context1.fillRect(type.x, type.y, type.w, type.h);
                          }
                        });
                      }
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                function handleMouseUp(event) {
                  if (typeof getDrawCommand === "function") {
                    const result = (event.clientX - closure_0.x) / first2;
                    const result1 = (event.clientY - closure_0.y) / first2;
                    const point1 = { type: point.type, x: Math.min(point.x, result), y: Math.min(point.y, result1), w: Math.abs(result - point.x), h: Math.abs(result1 - point.y) };
                    const _Math = Math;
                    const _Math2 = Math;
                    const _Math3 = Math;
                    const _Math4 = Math;
                    const tmp7 = point1.w * first2 >= 1 && point1.h * first2 >= 1;
                    if (tmp7) {
                      handleMouseMove((arg0) => {
                        items = [];
                        items[HermesBuiltin.arraySpread(items, arg0, 0)] = point1;
                        return items;
                      });
                    }
                    const removed = React.removeEventListener("mousemove", handleMouseMove);
                    const removed1 = React.removeEventListener("mouseup", handleMouseUp);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                const str = "mousemove";
                const listener = useTakeScreenshot.addEventListener("mousemove", handleMouseMove);
                const str2 = "mouseup";
                const listener1 = useTakeScreenshot.addEventListener("mouseup", handleMouseUp);
              }
            }
          },
          style: size
        };
        const tmp16 = screenshot("style", obj);
        const obj4 = { options, action, setAction: tmp3 };
        const tmp17 = screenshot("canvas", { ref: ref1, id: "background", style: size });
        const tmp18 = screenshot("canvas", { ref: ref2, id: "foreground", style: size });
        const tmp19 = screenshot("div", { class: "editor__image-container" }, screenshot("div", obj2, tmp17, tmp18, screenshot("div", obj3, first1.map((item, key) => {
          obj = { key, class: "editor__rect", style: size };
          size = { top: `${item.y * first2}px`, left: `${item.x * first2}px`, width: `${item.w * first2}px`, height: `${item.h * first2}px` };
          const obj2 = { "aria-label": options.removeHighlightText, onClick: closure_12(key), onMouseDown: handleStopPropagation, onMouseUp: handleStopPropagation, type: "button" };
          return screenshot("div", obj, screenshot("button", obj2, screenshot(IconClose, null)));
        }))));
        return screenshot("div", { class: "editor" }, tmp16, tmp19, screenshot(ref1, obj4));
      };
      h = options(function*() {
        let value;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let _Uint8Array;
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_2 = tmp;
                _Uint8Array = undefined;
                const self3 = this;
                const self4 = this;
                const promise = new Promise((arg0) => {
                  closure_1_1.toBlob(arg0, "image/png");
                });
                c3 = 1;
                c4 = 1;
                const obj4 = { value: promise, done: false };
                return obj4;
              }
            } else if (1 === tmp4) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                _Uint8Array = value;
                const tmp12 = _Uint8Array;
                if (tmp12) {
                  value = {};
                  _Uint8Array = Uint8Array;
                  c3 = 2;
                  c4 = 1;
                  const obj6 = { value: _Uint8Array.arrayBuffer(), done: false };
                  return obj6;
                } else {
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              const self = this;
              const self2 = this;
              const tmp8 = new Uint8Array(value);
              value.data = tmp8;
              value.filename = "screenshot.png";
              value.contentType = "application/png";
              c4 = 3;
              obj = { value, done: true };
              return obj;
            }
          } catch (tmp18) {
            c4 = 3;
            throw tmp18;
          }
        }
      });
      return obj;
    }
  };
  return obj;
};
export const getFeedback = function getFeedback() {
  obj = _mod693;
  const client = obj.getClient();
  let integrationByName;
  if (client != null) {
    integrationByName = client.getIntegrationByName("Feedback");
  }
  return integrationByName;
};
export { sendFeedback };