// _runtime/01666_freezeObjectInDev.js
import _mod1667 from "metro/01667__.js";
import _slicedToArray from "metro/00032__.js";

require = fn;
function freezeObjectInDev(arg0) {}
let module_1639 = fn(1639);
module_1639.shouldBeUseWeb();
const REANIMATED_MAGIC_KEY = "REANIMATED_MAGIC_KEY";
function isHostObject(__remoteFunction) {
  return REANIMATED_MAGIC_KEY in __remoteFunction;
}
isHostObject.__closure = { MAGIC_KEY: "REANIMATED_MAGIC_KEY" };
isHostObject.__workletHash = 10372729533958;
isHostObject.__initData = {
  code: "function isHostObject_Pnpm_shareablesTs1(value){const{MAGIC_KEY}=this.__closure;return MAGIC_KEY in value;}",
};
module_1639 = { __init: null };
fn = function u() {
  const proxy = new Proxy(
    {},
    {
      get(arg0, arg1) {
        if ("_isReanimatedSharedValue" !== arg1) {
          if ("__remoteFunction" !== arg1) {
            const _String = String;
            const _HermesInternal = HermesInternal;
            const reanimatedError = new require("metro/01647__.js").ReanimatedError(
              "Trying to access property `" + String(arg1) + "` of an object which cannot be sent to the UI runtime.",
            );
            throw reanimatedError;
          }
        }
        return false;
      },
      set() {
        const reanimatedError = new require("metro/01647__.js").ReanimatedError(
          "Trying to write to an object which cannot be sent to the UI runtime.",
        );
        throw reanimatedError;
      },
    },
  );
  return proxy;
};
fn.__closure = {};
fn.__workletHash = 15880119471501;
fn.__initData = {
  code: "function pnpm_shareablesTs2(){return new Proxy({},{get:function(_,prop){if(prop==='_isReanimatedSharedValue'||prop==='__remoteFunction'){return false;}throw new ReanimatedError(\"Trying to access property `\"+String(prop)+\"` of an object which cannot be sent to the UI runtime.\");},set:function(){throw new ReanimatedError('Trying to write to an object which cannot be sent to the UI runtime.');}});}",
};
module_1639.__init = fn;
const VALID_ARRAY_VIEWS_NAMES = [
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Uint16Array",
  "Int32Array",
  "Uint32Array",
  "Float32Array",
  "Float64Array",
  "BigInt64Array",
  "BigUint64Array",
  "DataView",
];
const tmp3 = module_1639
  ? function makeShareableCloneRecursiveWeb(arg0) {
      return arg0;
    }
  : function makeShareableCloneRecursiveNative(__workletContextObjectFactory) {
      if (flag === undefined) {
        flag = false;
      }
      let num = shareableMappingCache12;
      if (shareableMappingCache12 === undefined) {
        num = 0;
      }
      if (num >= 30) {
        if (30 === num) {
          c7 = __workletContextObjectFactory;
        } else if (__workletContextObjectFactory === c7) {
          let reanimatedError = new name(stack[3]).ReanimatedError(
            "Trying to convert a cyclic object to a shareable. This is not supported.",
          );
          throw reanimatedError;
        }
      } else {
        c7 = undefined;
      }
      if (typeof __workletContextObjectFactory === "object") {
        if (null !== __workletContextObjectFactory) {
          let shareableMappingCache13 = name;
          let result = stack;
          const shareableMappingCache14 = name(stack[2]).shareableMappingCache;
          value = shareableMappingCache14.get(__workletContextObjectFactory);
          if (value === name(stack[2]).shareableMappingFlag) {
            value = __workletContextObjectFactory;
          }
          if (undefined !== value) {
            return value;
          } else {
            const _Array = Array;
            if (Array.isArray(__workletContextObjectFactory)) {
              closure_129_0 = flag;
              closure_129_1 = num;
              const mapped = __workletContextObjectFactory.map((item) => closure_10(item, buffer, name + 1));
              const WorkletsModule4 = shareableMappingCache13(result[5]).WorkletsModule;
              let shareableClone = WorkletsModule4.makeShareableClone(mapped, flag, __workletContextObjectFactory);
              shareableMappingCache12 = shareableMappingCache13(result[2]).shareableMappingCache;
              num = shareableMappingCache12.set(__workletContextObjectFactory, shareableClone);
              shareableMappingCache13 = shareableMappingCache13(result[2]).shareableMappingCache;
              result = shareableMappingCache13.set(shareableClone);
              let shareableClone1 = shareableClone;
            } else {
              if (typeof __workletContextObjectFactory === "function") {
                let result1 = shareableMappingCache13(result[4]);
                if (!result1.isWorkletFunction(__workletContextObjectFactory)) {
                  let WorkletsModule = shareableMappingCache13(result[5]).WorkletsModule;
                  shareableClone1 = WorkletsModule.makeShareableClone(
                    __workletContextObjectFactory,
                    flag,
                    __workletContextObjectFactory,
                  );
                  let shareableMappingCache = shareableMappingCache13(result[2]).shareableMappingCache;
                  const result2 = shareableMappingCache.set(__workletContextObjectFactory, shareableClone1);
                  let shareableMappingCache2 = shareableMappingCache13(result[2]).shareableMappingCache;
                  const result3 = shareableMappingCache2.set(shareableClone1);
                }
              }
              if (typeof isHostObject === "function") {
                if (REANIMATED_MAGIC_KEY in __workletContextObjectFactory) {
                  const WorkletsModule3 = shareableMappingCache13(result[5]).WorkletsModule;
                  const shareableClone2 = WorkletsModule3.makeShareableClone(
                    __workletContextObjectFactory,
                    flag,
                    __workletContextObjectFactory,
                  );
                  const shareableMappingCache10 = shareableMappingCache13(result[2]).shareableMappingCache;
                  const result4 = shareableMappingCache10.set(__workletContextObjectFactory, shareableClone2);
                  const shareableMappingCache11 = shareableMappingCache13(result[2]).shareableMappingCache;
                  const result5 = shareableMappingCache11.set(shareableClone2);
                  let tmp17 = shareableClone2;
                } else {
                  const _Object = Object;
                  const _Object2 = Object;
                  if (Object.getPrototypeOf(__workletContextObjectFactory) === Object.prototype) {
                    if (__workletContextObjectFactory.__workletContextObjectFactory) {
                      __workletContextObjectFactory = __workletContextObjectFactory.__workletContextObjectFactory;
                      let buffer = __workletContextObjectFactory;
                      let obj = { __init: null };
                      const fn4 = function c() {
                        return buffer();
                      };
                      obj = { workletContextObjectFactory: __workletContextObjectFactory };
                      fn4.__closure = obj;
                      fn4.__workletHash = 16264240301234;
                      fn4.__initData = __initData;
                      obj.__init = fn4;
                      const tmp37 = closure_10(obj);
                      const shareableMappingCache9 = shareableMappingCache13(result[2]).shareableMappingCache;
                      const result6 = shareableMappingCache9.set(__workletContextObjectFactory, tmp37);
                      tmp17 = tmp37;
                    }
                  }
                  const _Object3 = Object;
                  const _Object4 = Object;
                  if (Object.getPrototypeOf(__workletContextObjectFactory) === Object.prototype) {
                    const result7 = shareableMappingCache13(result[4]);
                    if (result7.isWorkletFunction(__workletContextObjectFactory)) {
                      tmp17 = (function cloneWorklet(__stackDetails, flag, shareableMappingCache12) {
                        if (__stackDetails.__stackDetails) {
                          delete tmp2[tmp];
                        }
                        const obj = {
                          __initData: closure_1_10(__stackDetails.__initData, true, shareableMappingCache12 + 1),
                        };
                        const entries = Object.entries(__stackDetails);
                        while (tmp4 !== undefined) {
                          let tmp7 = _slicedToArray(tmp5, 2);
                          [tmp8, tmp10] = tmp7;
                          let tmp11 = "__initData" === tmp8;
                          if (tmp11) {
                            tmp11 = undefined !== obj.__initData;
                          }
                          if (!tmp11) {
                            obj[tmp8] = closure_1_10(tmp10, flag, shareableMappingCache12 + 1);
                          }
                          continue;
                        }
                        const WorkletsModule = name(stack[5]).WorkletsModule;
                        const shareableClone = WorkletsModule.makeShareableClone(obj, true, __stackDetails);
                        const shareableMappingCache = name(stack[2]).shareableMappingCache;
                        const result = shareableMappingCache.set(__stackDetails, shareableClone);
                        const shareableMappingCache2 = name(stack[2]).shareableMappingCache;
                        const result1 = shareableMappingCache2.set(shareableClone);
                        freezeObjectInDev(0);
                        return shareableClone;
                      })(__workletContextObjectFactory, flag, num);
                    }
                  }
                  const _Object5 = Object;
                  const _Object6 = Object;
                  if (Object.getPrototypeOf(__workletContextObjectFactory) !== Object.prototype) {
                    if (typeof __workletContextObjectFactory !== "function") {
                      const _RegExp = RegExp;
                      if (__workletContextObjectFactory instanceof RegExp) {
                        const source = __workletContextObjectFactory.source;
                        buffer = source;
                        const flags = __workletContextObjectFactory.flags;
                        name = flags;
                        const obj1 = { __init: null };
                        const fn3 = function s() {
                          const regExp = new RegExp(buffer, name);
                          return regExp;
                        };
                        const obj2 = { pattern: source, flags };
                        fn3.__closure = obj2;
                        fn3.__workletHash = 17343605339188;
                        fn3.__initData = __initData2;
                        obj1.__init = fn3;
                        const tmp33 = closure_10(obj1);
                        const shareableMappingCache8 = shareableMappingCache13(result[2]).shareableMappingCache;
                        const result8 = shareableMappingCache8.set(__workletContextObjectFactory, tmp33);
                        tmp17 = tmp33;
                      } else {
                        const _Error = Error;
                        if (__workletContextObjectFactory instanceof Error) {
                          const name2 = __workletContextObjectFactory.name;
                          buffer = name2;
                          const message = __workletContextObjectFactory.message;
                          name = message;
                          stack = __workletContextObjectFactory.stack;
                          const obj3 = { __init: null };
                          const fn2 = function u() {
                            const error = new Error();
                            error.name = buffer;
                            error.message = name;
                            error.stack = stack;
                            return error;
                          };
                          let error = { name: name2, message, stack };
                          fn2.__closure = error;
                          fn2.__workletHash = 1273124072033;
                          fn2.__initData = __initData3;
                          obj3.__init = fn2;
                          const tmp29 = closure_10(obj3);
                          const shareableMappingCache7 = shareableMappingCache13(result[2]).shareableMappingCache;
                          const result9 = shareableMappingCache7.set(__workletContextObjectFactory, tmp29);
                          tmp17 = tmp29;
                        } else {
                          const _ArrayBuffer = ArrayBuffer;
                          if (__workletContextObjectFactory instanceof ArrayBuffer) {
                            const WorkletsModule2 = shareableMappingCache13(result[5]).WorkletsModule;
                            const shareableClone3 = WorkletsModule2.makeShareableClone(
                              __workletContextObjectFactory,
                              flag,
                              __workletContextObjectFactory,
                            );
                            const shareableMappingCache5 = shareableMappingCache13(result[2]).shareableMappingCache;
                            const result10 = shareableMappingCache5.set(__workletContextObjectFactory, shareableClone3);
                            const shareableMappingCache6 = shareableMappingCache13(result[2]).shareableMappingCache;
                            const result11 = shareableMappingCache6.set(shareableClone3);
                            tmp17 = shareableClone3;
                          } else {
                            const _ArrayBuffer2 = ArrayBuffer;
                            if (ArrayBuffer.isView(__workletContextObjectFactory)) {
                              buffer = __workletContextObjectFactory.buffer;
                              name = __workletContextObjectFactory.constructor.name;
                              const obj4 = { __init: null };
                              const fn = function s() {
                                if (closure_9.includes(name)) {
                                  let tmp10 = global[name];
                                  if (undefined === tmp10) {
                                    const _HermesInternal2 = HermesInternal;
                                    const reanimatedError = new require("metro/01647__.js").ReanimatedError(
                                      "[Reanimated] Constructor for `" + name + "` not found.",
                                    );
                                    throw reanimatedError;
                                  } else {
                                    tmp10 = new tmp10(buffer);
                                    return tmp10;
                                  }
                                } else {
                                  const _HermesInternal = HermesInternal;
                                  const reanimatedError1 = new require("metro/01647__.js").ReanimatedError(
                                    "[Reanimated] Invalid array view name `" + name + "`.",
                                  );
                                  throw reanimatedError1;
                                }
                              };
                              const obj5 = { VALID_ARRAY_VIEWS_NAMES, typeName: name, buffer };
                              fn.__closure = obj5;
                              fn.__workletHash = 2440560686150;
                              fn.__initData = __initData4;
                              obj4.__init = fn;
                              const tmp22 = closure_10(obj4);
                              const shareableMappingCache4 = shareableMappingCache13(result[2]).shareableMappingCache;
                              const result12 = shareableMappingCache4.set(__workletContextObjectFactory, tmp22);
                              tmp17 = tmp22;
                            } else {
                              tmp17 = closure_10(module_1639);
                              const shareableMappingCache3 = shareableMappingCache13(result[2]).shareableMappingCache;
                              const result13 = shareableMappingCache3.set(__workletContextObjectFactory, tmp17);
                            }
                          }
                        }
                      }
                    }
                  }
                  tmp17 = (function clonePlainJSObject(__workletContextObjectFactory, flag, shareableMappingCache12) {
                    const obj = {};
                    const entries = Object.entries(__workletContextObjectFactory);
                    while (tmp2 !== undefined) {
                      let tmp5 = _slicedToArray(tmp3, 2);
                      [tmp6, tmp8] = tmp5;
                      let tmp9 = "__initData" === tmp6;
                      if (tmp9) {
                        tmp9 = undefined !== obj.__initData;
                      }
                      if (!tmp9) {
                        obj[tmp6] = closure_1_10(tmp8, flag, shareableMappingCache12 + 1);
                      }
                      continue;
                    }
                    const WorkletsModule = name(stack[5]).WorkletsModule;
                    const shareableClone = WorkletsModule.makeShareableClone(obj, flag, __workletContextObjectFactory);
                    const shareableMappingCache = name(stack[2]).shareableMappingCache;
                    const result = shareableMappingCache.set(__workletContextObjectFactory, shareableClone);
                    const shareableMappingCache2 = name(stack[2]).shareableMappingCache;
                    const result1 = shareableMappingCache2.set(shareableClone);
                    freezeObjectInDev(0);
                    return shareableClone;
                  })(__workletContextObjectFactory, flag, num);
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        }
      }
      const WorkletsModule5 = name(stack[5]).WorkletsModule;
      return WorkletsModule5.makeShareableClone(__workletContextObjectFactory, flag);
    };
let closure_10 = tmp3;
const __initData = {
  code: "function pnpm_shareablesTs3(){const{workletContextObjectFactory}=this.__closure;return workletContextObjectFactory();}",
};
const __initData2 = {
  code: "function pnpm_shareablesTs4(){const{pattern,flags}=this.__closure;return new RegExp(pattern,flags);}",
};
const __initData3 = {
  code: "function pnpm_shareablesTs5(){const{name,message,stack}=this.__closure;const error=new Error();error.name=name;error.message=message;error.stack=stack;return error;}",
};
const __initData4 = {
  code: 'function pnpm_shareablesTs6(){const{VALID_ARRAY_VIEWS_NAMES,typeName,buffer}=this.__closure;if(!VALID_ARRAY_VIEWS_NAMES.includes(typeName)){throw new ReanimatedError("[Reanimated] Invalid array view name `"+typeName+"`.");}const constructor=global[typeName];if(constructor===undefined){throw new ReanimatedError("[Reanimated] Constructor for `"+typeName+"` not found.");}return new constructor(buffer);}',
};
function isRemoteFunction(__remoteFunction) {
  return __remoteFunction.__remoteFunction;
}
isRemoteFunction.__closure = {};
isRemoteFunction.__workletHash = 12817663616448;
isRemoteFunction.__initData = {
  code: "function isRemoteFunction_Pnpm_shareablesTs7(value){return!!value.__remoteFunction;}",
};
function makeShareableCloneOnUIRecursive(fn) {
  if (module_1639) {
    return fn;
  } else {
    function cloneRecursive(__remoteFunction) {
      if (typeof __remoteFunction !== "object") {
        if (typeof __remoteFunction !== "function") {
          return global._makeShareableClone(__remoteFunction, undefined);
        }
      }
      if (isHostObject(__remoteFunction)) {
        return global._makeShareableClone(__remoteFunction, undefined);
      } else if (isRemoteFunction(__remoteFunction)) {
        return __remoteFunction.__remoteFunction;
      } else {
        const _Array = Array;
        if (Array.isArray(__remoteFunction)) {
          return global._makeShareableClone(__remoteFunction.map(cloneRecursive), undefined);
        } else {
          const obj = {};
          const _Object = Object;
          const entries = Object.entries(__remoteFunction);
          const tmp5 = entries[Symbol.iterator]();
          while (tmp5 !== undefined) {
            let tmp10 = _slicedToArray(tmp7, 2);
            obj[tmp10[0]] = cloneRecursive(tmp10[1]);
            continue;
          }
          return global._makeShareableClone(obj, __remoteFunction);
        }
      }
    }
    return cloneRecursive(fn);
  }
}
makeShareableCloneOnUIRecursive.__closure = { SHOULD_BE_USE_WEB: module_1639, isHostObject, isRemoteFunction };
makeShareableCloneOnUIRecursive.__workletHash = 10912061747670;
makeShareableCloneOnUIRecursive.__initData = {
  code: "function makeShareableCloneOnUIRecursive_Pnpm_shareablesTs8(value){const{SHOULD_BE_USE_WEB,isHostObject,isRemoteFunction}=this.__closure;if(SHOULD_BE_USE_WEB){return value;}function cloneRecursive(value){if(typeof value==='object'&&value!==null||typeof value==='function'){if(isHostObject(value)){return global._makeShareableClone(value,undefined);}if(isRemoteFunction(value)){return value.__remoteFunction;}if(Array.isArray(value)){return global._makeShareableClone(value.map(cloneRecursive),undefined);}const toAdapt={};for(const[key,element]of Object.entries(value)){toAdapt[key]=cloneRecursive(element);}return global._makeShareableClone(toAdapt,value);}return global._makeShareableClone(value,undefined);}return cloneRecursive(value);}",
};
const __initData5 = { code: "function pnpm_shareablesTs9(){const{value}=this.__closure;return value;}" };

export const makeShareableCloneRecursive = tmp3;
export { makeShareableCloneOnUIRecursive };
export const makeShareable = module_1639
  ? function makeShareableJS(arg0) {
      return arg0;
    }
  : function makeShareableNative(value) {
      closure_0 = value;
      const shareableMappingCache = _mod1667.shareableMappingCache;
      if (shareableMappingCache.get(value)) {
        return value;
      } else {
        let obj = { __init: null };
        const fn = function n() {
          return closure_0;
        };
        obj = { value };
        fn.__closure = obj;
        fn.__workletHash = 5731865988281;
        fn.__initData = __initData5;
        obj.__init = fn;
        const shareableMappingCache2 = _mod1667.shareableMappingCache;
        const result = shareableMappingCache2.set(value, closure_10(obj));
        return value;
      }
    };
