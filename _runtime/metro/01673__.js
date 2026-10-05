// === Module 1673: ? ===

// Module 1673
import shareableMappingFlag from "shareableMappingFlag" /* 1674 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import module_1646_mod from "module_1646" /* 1646 */;

const require = globalThis.__r;

let fn;
function freezeObjectInDev(arg0) {

}
let module_1646 = module_1646_mod;
module_1646 = module_1646.shouldBeUseWeb();
const REANIMATED_MAGIC_KEY = "REANIMATED_MAGIC_KEY";
function isHostObject(__remoteFunction) {
  return REANIMATED_MAGIC_KEY in __remoteFunction;
}
isHostObject.__closure = { MAGIC_KEY: "REANIMATED_MAGIC_KEY" };
isHostObject.__workletHash = 10372729533958;
isHostObject.__initData = { code: "function isHostObject_Pnpm_shareablesTs1(value){const{MAGIC_KEY}=this.__closure;return MAGIC_KEY in value;}" };
let obj = { __init: fn };
fn = function u() {
  obj = {
    get(arg0, arg1) {
      if ("_isReanimatedSharedValue" !== arg1) {
        if ("__remoteFunction" !== arg1) {
          const _String = String;
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const reanimatedError = new require("ReanimatedError").ReanimatedError("Trying to access property `" + String(arg1) + "` of an object which cannot be sent to the UI runtime.");
          throw reanimatedError;
        }
      }
      return false;
    },
    set() {
      const reanimatedError = new require("ReanimatedError").ReanimatedError("Trying to write to an object which cannot be sent to the UI runtime.");
      throw reanimatedError;
    }
  };
  const proxy = new Proxy({}, obj);
  return proxy;
};
fn.__closure = {};
fn.__workletHash = 15880119471501;
fn.__initData = { code: "function pnpm_shareablesTs2(){return new Proxy({},{get:function(_,prop){if(prop==='_isReanimatedSharedValue'||prop==='__remoteFunction'){return false;}throw new ReanimatedError(\"Trying to access property `\"+String(prop)+\"` of an object which cannot be sent to the UI runtime.\");},set:function(){throw new ReanimatedError('Trying to write to an object which cannot be sent to the UI runtime.');}});}" };
const VALID_ARRAY_VIEWS_NAMES = ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array", "DataView"];
let tmp3 = module_1646 ? (function makeShareableCloneRecursiveWeb(arg0) {
  return arg0;
}) : (function makeShareableCloneRecursiveNative(__workletContextObjectFactory) {
  let c7;
  let flag;
  let fn;
  let fn2;
  let fn3;
  let fn4;
  let name;
  function cloneWorklet(__stackDetails, flag, arg2) {
    let tmp7;
    let tmp9;
    if (__stackDetails.__stackDetails) {
      delete tmp["__stackDetails"];
    }
    obj = { __initData: closure_1_10(__stackDetails.__initData, true, arg2 + 1) };
    const entries = Object.entries(__stackDetails);
    const tmp3 = entries[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp6 = _slicedToArray(tmp4, 2);
      [tmp7, tmp9] = tmp6;
      let tmp10 = "__initData" === tmp7 && undefined !== obj.__initData;
      if (!tmp10) {
        obj[tmp7] = closure_1_10(tmp9, flag, arg2 + 1);
      }
      continue;
    }
    const WorkletsModule = name(dependencyMap[5]).WorkletsModule;
    const shareableClone = WorkletsModule.makeShareableClone(obj, true, __stackDetails);
    const shareableMappingCache = name(dependencyMap[2]).shareableMappingCache;
    const result = shareableMappingCache.set(__stackDetails, shareableClone);
    const shareableMappingCache2 = name(dependencyMap[2]).shareableMappingCache;
    const result1 = shareableMappingCache2.set(shareableClone);
    freezeObjectInDev(0);
    return shareableClone;
  }
  function clonePlainJSObject(__workletContextObjectFactory, flag, arg2) {
    let tmp6;
    let tmp8;
    obj = {};
    const entries = Object.entries(__workletContextObjectFactory);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp8] = tmp5;
      let tmp9 = "__initData" === tmp6 && undefined !== obj.__initData;
      if (!tmp9) {
        obj[tmp6] = closure_1_10(tmp8, flag, arg2 + 1);
      }
      continue;
    }
    const WorkletsModule = name(dependencyMap[5]).WorkletsModule;
    const shareableClone = WorkletsModule.makeShareableClone(obj, flag, __workletContextObjectFactory);
    const shareableMappingCache = name(dependencyMap[2]).shareableMappingCache;
    const result = shareableMappingCache.set(__workletContextObjectFactory, shareableClone);
    const shareableMappingCache2 = name(dependencyMap[2]).shareableMappingCache;
    const result1 = shareableMappingCache2.set(shareableClone);
    freezeObjectInDev(0);
    return shareableClone;
  }
  if (flag === undefined) {
    flag = false;
  }
  let num = arg2;
  if (arg2 === undefined) {
    num = 0;
  }
  if (num >= 30) {
    if (30 === num) {
      c7 = __workletContextObjectFactory;
    } else {
      const tmp = c7;
      if (__workletContextObjectFactory === c7) {
        let tmp2 = name;
        let self = this;
        let self2 = this;
        let reanimatedError = new name(1654).ReanimatedError("Trying to convert a cyclic object to a shareable. This is not supported.");
        let tmp5 = reanimatedError;
        throw reanimatedError;
      }
    }
  } else {
    c7 = undefined;
  }
  if (typeof __workletContextObjectFactory === "object") {
    let tmp6 = null;
    if (null !== __workletContextObjectFactory) {
      const shareableMappingCache14 = name(1674).shareableMappingCache;
      let value = shareableMappingCache14.get(__workletContextObjectFactory);
      if (value === name(1674).shareableMappingFlag) {
        value = __workletContextObjectFactory;
      }
      if (undefined === value) {
        let shareableClone1;
        const _Array = Array;
        if (Array.isArray(__workletContextObjectFactory)) {
          const mapped = __workletContextObjectFactory.map((item) => closure_2_10(item, flag, num + 1));
          const WorkletsModule4 = tmp44(1659).WorkletsModule;
          let shareableClone = WorkletsModule4.makeShareableClone(mapped, flag, __workletContextObjectFactory);
          const shareableMappingCache12 = tmp44(1674).shareableMappingCache;
          let result = shareableMappingCache12.set(__workletContextObjectFactory, shareableClone);
          const shareableMappingCache13 = tmp44(1674).shareableMappingCache;
          let result1 = shareableMappingCache13.set(shareableClone);
          shareableClone1 = shareableClone;
        } else {
          if (typeof __workletContextObjectFactory === "function") {
            const tmp44Result = name(1668);
            if (!tmp44Result.isWorkletFunction(__workletContextObjectFactory)) {
              let WorkletsModule = tmp44(1659).WorkletsModule;
              shareableClone1 = WorkletsModule.makeShareableClone(__workletContextObjectFactory, flag, __workletContextObjectFactory);
              let shareableMappingCache = tmp44(1674).shareableMappingCache;
              const result2 = shareableMappingCache.set(__workletContextObjectFactory, shareableClone1);
              let shareableMappingCache2 = tmp44(1674).shareableMappingCache;
              const result3 = shareableMappingCache2.set(shareableClone1);
            }
          }
          if (typeof isHostObject === "function") {
            let tmp15;
            if (REANIMATED_MAGIC_KEY in __workletContextObjectFactory) {
              const WorkletsModule3 = tmp44(1659).WorkletsModule;
              const shareableClone2 = WorkletsModule3.makeShareableClone(__workletContextObjectFactory, flag, __workletContextObjectFactory);
              const shareableMappingCache10 = tmp44(1674).shareableMappingCache;
              const result4 = shareableMappingCache10.set(__workletContextObjectFactory, shareableClone2);
              const shareableMappingCache11 = tmp44(1674).shareableMappingCache;
              const result5 = shareableMappingCache11.set(shareableClone2);
              tmp15 = shareableClone2;
            } else {
              const _Object = Object;
              const _Object2 = Object;
              if (Object.getPrototypeOf(__workletContextObjectFactory) === Object.prototype) {
                if (__workletContextObjectFactory.__workletContextObjectFactory) {
                  __workletContextObjectFactory = __workletContextObjectFactory.__workletContextObjectFactory;
                  obj = { __init: fn4 };
                  fn4 = function c() {
                    return __workletContextObjectFactory();
                  };
                  const obj2 = { workletContextObjectFactory: __workletContextObjectFactory };
                  fn4.__closure = obj2;
                  fn4.__workletHash = 16264240301234;
                  fn4.__initData = __initData;
                  const tmp35 = closure_10(obj);
                  const shareableMappingCache9 = tmp44(1674).shareableMappingCache;
                  const result6 = shareableMappingCache9.set(__workletContextObjectFactory, tmp35);
                  tmp15 = tmp35;
                }
              }
              const _Object3 = Object;
              const _Object4 = Object;
              if (Object.getPrototypeOf(__workletContextObjectFactory) === Object.prototype) {
                const tmp44Result2 = name(1668);
                if (tmp44Result2.isWorkletFunction(__workletContextObjectFactory)) {
                  tmp15 = cloneWorklet(__workletContextObjectFactory, flag, num);
                }
              }
              const _Object5 = Object;
              const _Object6 = Object;
              if (Object.getPrototypeOf(__workletContextObjectFactory) !== Object.prototype) {
                if (typeof __workletContextObjectFactory !== "function") {
                  const _RegExp = RegExp;
                  if (__workletContextObjectFactory instanceof RegExp) {
                    const source = __workletContextObjectFactory.source;
                    const flags = __workletContextObjectFactory.flags;
                    const obj3 = { __init: fn3 };
                    fn3 = function s() {
                      const regExp = new RegExp(source, flags);
                      return regExp;
                    };
                    const obj4 = { pattern: source, flags };
                    fn3.__closure = obj4;
                    fn3.__workletHash = 17343605339188;
                    fn3.__initData = __initData2;
                    const tmp31 = closure_10(obj3);
                    const shareableMappingCache8 = tmp44(1674).shareableMappingCache;
                    const result7 = shareableMappingCache8.set(__workletContextObjectFactory, tmp31);
                    tmp15 = tmp31;
                  } else {
                    const _Error = Error;
                    if (__workletContextObjectFactory instanceof Error) {
                      const name2 = __workletContextObjectFactory.name;
                      const message = __workletContextObjectFactory.message;
                      const stack = __workletContextObjectFactory.stack;
                      const obj5 = { __init: fn2 };
                      fn2 = function u() {
                        const error = new Error();
                        error.name = name2;
                        error.message = message;
                        error.stack = stack;
                        return error;
                      };
                      let error = { name: name2, message, stack };
                      fn2.__closure = error;
                      fn2.__workletHash = 1273124072033;
                      fn2.__initData = __initData3;
                      const tmp27 = closure_10(obj5);
                      const shareableMappingCache7 = tmp44(1674).shareableMappingCache;
                      const result8 = shareableMappingCache7.set(__workletContextObjectFactory, tmp27);
                      tmp15 = tmp27;
                    } else {
                      const _ArrayBuffer = ArrayBuffer;
                      if (__workletContextObjectFactory instanceof ArrayBuffer) {
                        const WorkletsModule2 = tmp44(1659).WorkletsModule;
                        const shareableClone3 = WorkletsModule2.makeShareableClone(__workletContextObjectFactory, flag, __workletContextObjectFactory);
                        const shareableMappingCache5 = tmp44(1674).shareableMappingCache;
                        const result9 = shareableMappingCache5.set(__workletContextObjectFactory, shareableClone3);
                        const shareableMappingCache6 = tmp44(1674).shareableMappingCache;
                        const result10 = shareableMappingCache6.set(shareableClone3);
                        tmp15 = shareableClone3;
                      } else {
                        const _ArrayBuffer2 = ArrayBuffer;
                        if (ArrayBuffer.isView(__workletContextObjectFactory)) {
                          const buffer = __workletContextObjectFactory.buffer;
                          name = __workletContextObjectFactory.constructor.name;
                          const obj6 = { __init: fn };
                          fn = function s() {
                            if (VALID_ARRAY_VIEWS_NAMES.includes(name)) {
                              if (undefined === global[name]) {
                                const _HermesInternal2 = HermesInternal;
                                const self5 = this;
                                const self6 = this;
                                const reanimatedError = new require("ReanimatedError").ReanimatedError("[Reanimated] Constructor for `" + name + "` not found.");
                                throw reanimatedError;
                              } else {
                                const self3 = this;
                                const self4 = this;
                                const tmp82 = new global[name](buffer);
                                return tmp82;
                              }
                            } else {
                              const _HermesInternal = HermesInternal;
                              const self = this;
                              const self2 = this;
                              const reanimatedError1 = new require("ReanimatedError").ReanimatedError("[Reanimated] Invalid array view name `" + name + "`.");
                              throw reanimatedError1;
                            }
                          };
                          const obj7 = { VALID_ARRAY_VIEWS_NAMES, typeName: name, buffer };
                          fn.__closure = obj7;
                          fn.__workletHash = 2440560686150;
                          fn.__initData = __initData4;
                          const tmp20 = closure_10(obj6);
                          const shareableMappingCache4 = tmp44(1674).shareableMappingCache;
                          const result11 = shareableMappingCache4.set(__workletContextObjectFactory, tmp20);
                          tmp15 = tmp20;
                        } else {
                          tmp15 = closure_10(obj);
                          const shareableMappingCache3 = tmp44(1674).shareableMappingCache;
                          const result12 = shareableMappingCache3.set(__workletContextObjectFactory, tmp15);
                        }
                      }
                    }
                  }
                }
              }
              tmp15 = clonePlainJSObject(__workletContextObjectFactory, flag, num);
            }
            shareableClone1 = tmp15;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        value = shareableClone1;
      }
      return value;
    }
  }
  const WorkletsModule5 = name(1659).WorkletsModule;
  return WorkletsModule5.makeShareableClone(__workletContextObjectFactory, flag);
});
let closure_10 = tmp3;
const __initData = { code: "function pnpm_shareablesTs3(){const{workletContextObjectFactory}=this.__closure;return workletContextObjectFactory();}" };
const __initData2 = { code: "function pnpm_shareablesTs4(){const{pattern,flags}=this.__closure;return new RegExp(pattern,flags);}" };
const __initData3 = { code: "function pnpm_shareablesTs5(){const{name,message,stack}=this.__closure;const error=new Error();error.name=name;error.message=message;error.stack=stack;return error;}" };
const __initData4 = { code: "function pnpm_shareablesTs6(){const{VALID_ARRAY_VIEWS_NAMES,typeName,buffer}=this.__closure;if(!VALID_ARRAY_VIEWS_NAMES.includes(typeName)){throw new ReanimatedError(\"[Reanimated] Invalid array view name `\"+typeName+\"`.\");}const constructor=global[typeName];if(constructor===undefined){throw new ReanimatedError(\"[Reanimated] Constructor for `\"+typeName+\"` not found.\");}return new constructor(buffer);}" };
function isRemoteFunction(__remoteFunction) {
  return __remoteFunction.__remoteFunction;
}
isRemoteFunction.__closure = {};
isRemoteFunction.__workletHash = 12817663616448;
isRemoteFunction.__initData = { code: "function isRemoteFunction_Pnpm_shareablesTs7(value){return!!value.__remoteFunction;}" };
function makeShareableCloneOnUIRecursive(fn) {
  if (module_1646) {
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
          obj = {};
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
makeShareableCloneOnUIRecursive.__closure = { SHOULD_BE_USE_WEB: module_1646, isHostObject, isRemoteFunction };
makeShareableCloneOnUIRecursive.__workletHash = 10912061747670;
makeShareableCloneOnUIRecursive.__initData = { code: "function makeShareableCloneOnUIRecursive_Pnpm_shareablesTs8(value){const{SHOULD_BE_USE_WEB,isHostObject,isRemoteFunction}=this.__closure;if(SHOULD_BE_USE_WEB){return value;}function cloneRecursive(value){if(typeof value==='object'&&value!==null||typeof value==='function'){if(isHostObject(value)){return global._makeShareableClone(value,undefined);}if(isRemoteFunction(value)){return value.__remoteFunction;}if(Array.isArray(value)){return global._makeShareableClone(value.map(cloneRecursive),undefined);}const toAdapt={};for(const[key,element]of Object.entries(value)){toAdapt[key]=cloneRecursive(element);}return global._makeShareableClone(toAdapt,value);}return global._makeShareableClone(value,undefined);}return cloneRecursive(value);}" };
const __initData5 = { code: "function pnpm_shareablesTs9(){const{value}=this.__closure;return value;}" };

export const makeShareableCloneRecursive = tmp3;
export { makeShareableCloneOnUIRecursive };
export const makeShareable = module_1646 ? (function makeShareableJS(arg0) {
  return arg0;
}) : (function makeShareableNative(value) {
  let fn;
  let closure_0 = value;
  const shareableMappingCache = shareableMappingFlag.shareableMappingCache;
  if (shareableMappingCache.get(value)) {
    return value;
  } else {
    obj = { __init: fn };
    fn = function n() {
      return closure_0;
    };
    const obj2 = { value };
    fn.__closure = obj2;
    fn.__workletHash = 5731865988281;
    fn.__initData = __initData5;
    const tmp5 = closure_10(obj);
    const shareableMappingCache2 = shareableMappingFlag.shareableMappingCache;
    const result = shareableMappingCache2.set(value, tmp5);
    return value;
  }
});