import _slicedToArray from "_slicedToArray";
import isJest from "isJest";

const require = arg1;
function freezeObjectInDev(arg0) {

}
isJest = isJest.shouldBeUseWeb();
const REANIMATED_MAGIC_KEY = "REANIMATED_MAGIC_KEY";
function isHostObject(arg0) {
  return REANIMATED_MAGIC_KEY in arg0;
}
isHostObject.__closure = { MAGIC_KEY: "REANIMATED_MAGIC_KEY" };
isHostObject.__workletHash = 10372729533958;
isHostObject.__initData = { code: "function isHostObject_Pnpm_shareablesTs1(value){const{MAGIC_KEY}=this.__closure;return MAGIC_KEY in value;}" };
let fn = function u() {
  const proxy = new Proxy({}, {
    get(arg0, arg1) {
      if ("_isReanimatedSharedValue" !== arg1) {
        if ("__remoteFunction" !== arg1) {
          const _String = String;
          const _HermesInternal = HermesInternal;
          const reanimatedError = new callback(1617).ReanimatedError("Trying to access property `" + String(arg1) + "` of an object which cannot be sent to the UI runtime.");
          throw reanimatedError;
        }
      }
      return false;
    },
    set() {
      const reanimatedError = new callback(1617).ReanimatedError("Trying to write to an object which cannot be sent to the UI runtime.");
      throw reanimatedError;
    }
  });
  return proxy;
};
fn.__closure = {};
fn.__workletHash = 15880119471501;
fn.__initData = { code: "function pnpm_shareablesTs2(){return new Proxy({},{get:function(_,prop){if(prop==='_isReanimatedSharedValue'||prop==='__remoteFunction'){return false;}throw new ReanimatedError(\"Trying to access property `\"+String(prop)+\"` of an object which cannot be sent to the UI runtime.\");},set:function(){throw new ReanimatedError('Trying to write to an object which cannot be sent to the UI runtime.');}});}" };
let closure_8 = { __init: fn };
let closure_9 = ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array", "DataView"];
const tmp3 = isJest ? (function makeShareableCloneRecursiveWeb(arg0) {
  return arg0;
}) : (function makeShareableCloneRecursiveNative(fn, flag) {
  if (flag === undefined) {
    flag = false;
  }
  let num = arg2;
  if (arg2 === undefined) {
    num = 0;
  }
  if (num >= 30) {
    if (30 === num) {
      let c7 = fn;
    } else if (fn === c7) {
      let reanimatedError = new name(stack[3]).ReanimatedError("Trying to convert a cyclic object to a shareable. This is not supported.");
      throw reanimatedError;
    }
  } else {
    c7 = undefined;
  }
  if (typeof fn === "object") {
    if (null !== fn) {
      let shareableMappingCache13 = name;
      let result = stack;
      const shareableMappingCache14 = name(stack[2]).shareableMappingCache;
      let value = shareableMappingCache14.get(fn);
      if (value === name(stack[2]).shareableMappingFlag) {
        value = fn;
      }
      if (undefined !== value) {
        return value;
      } else {
        const _Array = Array;
        if (Array.isArray(fn)) {
          let buffer = flag;
          name = num;
          const mapped = fn.map((arg0) => outer1_10(arg0, buffer, name + 1));
          const WorkletsModule4 = shareableMappingCache13(result[5]).WorkletsModule;
          let shareableClone = WorkletsModule4.makeShareableClone(mapped, flag, fn);
          const shareableMappingCache12 = shareableMappingCache13(result[2]).shareableMappingCache;
          num = shareableMappingCache12.set(fn, shareableClone);
          shareableMappingCache13 = shareableMappingCache13(result[2]).shareableMappingCache;
          result = shareableMappingCache13.set(shareableClone);
          let shareableClone1 = shareableClone;
        } else {
          if (typeof fn === "function") {
            let result1 = shareableMappingCache13(result[4]);
            if (!result1.isWorkletFunction(fn)) {
              let WorkletsModule = shareableMappingCache13(result[5]).WorkletsModule;
              shareableClone1 = WorkletsModule.makeShareableClone(fn, flag, fn);
              let shareableMappingCache = shareableMappingCache13(result[2]).shareableMappingCache;
              const result2 = shareableMappingCache.set(fn, shareableClone1);
              let shareableMappingCache2 = shareableMappingCache13(result[2]).shareableMappingCache;
              const result3 = shareableMappingCache2.set(shareableClone1);
            }
          }
          if (typeof isHostObject !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (REANIMATED_MAGIC_KEY in fn) {
            const WorkletsModule3 = shareableMappingCache13(result[5]).WorkletsModule;
            const shareableClone2 = WorkletsModule3.makeShareableClone(fn, flag, fn);
            const shareableMappingCache10 = shareableMappingCache13(result[2]).shareableMappingCache;
            const result4 = shareableMappingCache10.set(fn, shareableClone2);
            const shareableMappingCache11 = shareableMappingCache13(result[2]).shareableMappingCache;
            const result5 = shareableMappingCache11.set(shareableClone2);
            let tmp17 = shareableClone2;
          } else {
            const _Object = Object;
            const _Object2 = Object;
            if (Object.getPrototypeOf(fn) === Object.prototype) {
              if (fn.__workletContextObjectFactory) {
                const __workletContextObjectFactory = fn.__workletContextObjectFactory;
                buffer = __workletContextObjectFactory;
                let obj = { __init: null };
                const fn4 = function c() {
                  return buffer();
                };
                obj = { workletContextObjectFactory: null };
                obj[0] = __workletContextObjectFactory;
                fn4.__closure = obj;
                fn4.__workletHash = 16264240301234;
                fn4.__initData = closure_11;
                obj[0] = fn4;
                const tmp37 = tmp3(obj);
                const shareableMappingCache9 = shareableMappingCache13(result[2]).shareableMappingCache;
                const result6 = shareableMappingCache9.set(fn, tmp37);
                tmp17 = tmp37;
              }
            }
            const _Object3 = Object;
            const _Object4 = Object;
            if (Object.getPrototypeOf(fn) === Object.prototype) {
              const result7 = shareableMappingCache13(result[4]);
              if (result7.isWorkletFunction(fn)) {
                tmp17 = (function cloneWorklet(__stackDetails, flag, arg2) {
                  let tmp10;
                  let tmp8;
                  if (__stackDetails.__stackDetails) {
                    delete tmp2[tmp];
                  }
                  const obj = { __initData: callback2(__stackDetails.__initData, true, arg2 + 1) };
                  const entries = Object.entries(__stackDetails);
                  while (tmp4 !== undefined) {
                    let tmp6 = callback;
                    let tmp7 = callback(tmp5, 2);
                    [tmp8, tmp10] = tmp7;
                    let tmp11 = "__initData" === tmp8;
                    let tmp9 = tmp8;
                    if (tmp11) {
                      tmp11 = undefined !== obj.__initData;
                    }
                    if (!tmp11) {
                      let tmp12 = tmp8;
                      let tmp13 = callback2;
                      let tmp14 = tmp10;
                      obj[tmp9] = callback2(tmp10, flag, arg2 + 1);
                    }
                    continue;
                  }
                  const WorkletsModule = name(stack[5]).WorkletsModule;
                  const shareableClone = WorkletsModule.makeShareableClone(obj, true, __stackDetails);
                  const shareableMappingCache = name(stack[2]).shareableMappingCache;
                  const result = shareableMappingCache.set(__stackDetails, shareableClone);
                  const shareableMappingCache2 = name(stack[2]).shareableMappingCache;
                  const result1 = shareableMappingCache2.set(shareableClone);
                  callback3(0);
                  return shareableClone;
                })(fn, flag, num);
              }
            }
            const _Object5 = Object;
            const _Object6 = Object;
            if (Object.getPrototypeOf(fn) !== Object.prototype) {
              if (typeof fn !== "function") {
                const _RegExp = RegExp;
                if (fn instanceof RegExp) {
                  const source = fn.source;
                  buffer = source;
                  const flags = fn.flags;
                  name = flags;
                  const obj1 = { __init: null };
                  const fn3 = function s() {
                    const regExp = new RegExp(buffer, name);
                    return regExp;
                  };
                  const obj2 = { pattern: null, flags: null };
                  obj2[0] = source;
                  obj2[1] = flags;
                  fn3.__closure = obj2;
                  fn3.__workletHash = 17343605339188;
                  fn3.__initData = closure_12;
                  obj1[0] = fn3;
                  const tmp33 = tmp3(obj1);
                  const shareableMappingCache8 = shareableMappingCache13(result[2]).shareableMappingCache;
                  const result8 = shareableMappingCache8.set(fn, tmp33);
                  tmp17 = tmp33;
                } else {
                  const _Error = Error;
                  if (fn instanceof Error) {
                    const name2 = fn.name;
                    buffer = name2;
                    const message = fn.message;
                    name = message;
                    stack = fn.stack;
                    const obj3 = { __init: null };
                    const fn2 = function u() {
                      const error = new Error();
                      error.name = buffer;
                      error.message = name;
                      error.stack = stack;
                      return error;
                    };
                    const obj4 = { name: null, message: null, stack: null };
                    obj4[0] = name2;
                    obj4[1] = message;
                    obj4[2] = stack;
                    fn2.__closure = obj4;
                    fn2.__workletHash = 1273124072033;
                    fn2.__initData = closure_13;
                    obj3[0] = fn2;
                    const tmp29 = tmp3(obj3);
                    const shareableMappingCache7 = shareableMappingCache13(result[2]).shareableMappingCache;
                    const result9 = shareableMappingCache7.set(fn, tmp29);
                    tmp17 = tmp29;
                  } else {
                    const _ArrayBuffer = ArrayBuffer;
                    if (fn instanceof ArrayBuffer) {
                      const WorkletsModule2 = shareableMappingCache13(result[5]).WorkletsModule;
                      const shareableClone3 = WorkletsModule2.makeShareableClone(fn, flag, fn);
                      const shareableMappingCache5 = shareableMappingCache13(result[2]).shareableMappingCache;
                      const result10 = shareableMappingCache5.set(fn, shareableClone3);
                      const shareableMappingCache6 = shareableMappingCache13(result[2]).shareableMappingCache;
                      const result11 = shareableMappingCache6.set(shareableClone3);
                      tmp17 = shareableClone3;
                    } else {
                      const _ArrayBuffer2 = ArrayBuffer;
                      if (ArrayBuffer.isView(fn)) {
                        buffer = fn.buffer;
                        name = fn.constructor.name;
                        const obj5 = { __init: null };
                        fn = function s() {
                          if (outer1_9.includes(name)) {
                            let tmp10 = buffer[tmp];
                            if (undefined === tmp10) {
                              const _HermesInternal2 = HermesInternal;
                              const reanimatedError = new name(stack[3]).ReanimatedError("[Reanimated] Constructor for `" + tmp + "` not found.");
                              throw reanimatedError;
                            } else {
                              tmp10 = new tmp10(buffer);
                              return tmp10;
                            }
                          } else {
                            const _HermesInternal = HermesInternal;
                            const reanimatedError1 = new name(stack[3]).ReanimatedError("[Reanimated] Invalid array view name `" + tmp + "`.");
                            throw reanimatedError1;
                          }
                        };
                        const obj6 = { VALID_ARRAY_VIEWS_NAMES: null, typeName: null, buffer: null };
                        obj6[0] = closure_9;
                        obj6[1] = name;
                        obj6[2] = buffer;
                        fn.__closure = obj6;
                        fn.__workletHash = 2440560686150;
                        fn.__initData = closure_14;
                        obj5[0] = fn;
                        const tmp22 = tmp3(obj5);
                        const shareableMappingCache4 = shareableMappingCache13(result[2]).shareableMappingCache;
                        const result12 = shareableMappingCache4.set(fn, tmp22);
                        tmp17 = tmp22;
                      } else {
                        tmp17 = tmp3(closure_8);
                        const shareableMappingCache3 = shareableMappingCache13(result[2]).shareableMappingCache;
                        const result13 = shareableMappingCache3.set(fn, tmp17);
                      }
                    }
                  }
                }
              }
            }
            tmp17 = (function clonePlainJSObject(fn, flag, arg2) {
              let tmp6;
              let tmp8;
              const obj = {};
              const entries = Object.entries(fn);
              while (tmp2 !== undefined) {
                let tmp4 = callback;
                let tmp5 = callback(tmp3, 2);
                [tmp6, tmp8] = tmp5;
                let tmp9 = "__initData" === tmp6;
                let tmp7 = tmp6;
                if (tmp9) {
                  tmp9 = undefined !== obj.__initData;
                }
                if (!tmp9) {
                  let tmp10 = tmp6;
                  let tmp11 = callback2;
                  let tmp12 = tmp8;
                  obj[tmp7] = callback2(tmp8, flag, arg2 + 1);
                }
                continue;
              }
              const WorkletsModule = name(stack[5]).WorkletsModule;
              const shareableClone = WorkletsModule.makeShareableClone(obj, flag, fn);
              const shareableMappingCache = name(stack[2]).shareableMappingCache;
              const result = shareableMappingCache.set(fn, shareableClone);
              const shareableMappingCache2 = name(stack[2]).shareableMappingCache;
              const result1 = shareableMappingCache2.set(shareableClone);
              callback3(0);
              return shareableClone;
            })(fn, flag, num);
          }
        }
      }
    }
  }
  const WorkletsModule5 = name(stack[5]).WorkletsModule;
  return WorkletsModule5.makeShareableClone(fn, flag);
});
let c10 = tmp3;
let closure_11 = { code: "function pnpm_shareablesTs3(){const{workletContextObjectFactory}=this.__closure;return workletContextObjectFactory();}" };
let closure_12 = { code: "function pnpm_shareablesTs4(){const{pattern,flags}=this.__closure;return new RegExp(pattern,flags);}" };
let closure_13 = { code: "function pnpm_shareablesTs5(){const{name,message,stack}=this.__closure;const error=new Error();error.name=name;error.message=message;error.stack=stack;return error;}" };
let closure_14 = { code: "function pnpm_shareablesTs6(){const{VALID_ARRAY_VIEWS_NAMES,typeName,buffer}=this.__closure;if(!VALID_ARRAY_VIEWS_NAMES.includes(typeName)){throw new ReanimatedError(\"[Reanimated] Invalid array view name `\"+typeName+\"`.\");}const constructor=global[typeName];if(constructor===undefined){throw new ReanimatedError(\"[Reanimated] Constructor for `\"+typeName+\"` not found.\");}return new constructor(buffer);}" };
function isRemoteFunction(__remoteFunction) {
  return __remoteFunction.__remoteFunction;
}
isRemoteFunction.__closure = {};
isRemoteFunction.__workletHash = 12817663616448;
isRemoteFunction.__initData = { code: "function isRemoteFunction_Pnpm_shareablesTs7(value){return!!value.__remoteFunction;}" };
function makeShareableCloneOnUIRecursive(fn) {
  if (isJest) {
    return fn;
  } else {
    function cloneRecursive(fn) {
      if (typeof fn !== "object") {
        if (typeof fn !== "function") {
          return cloneRecursive._makeShareableClone(fn, undefined);
        }
      }
      if (outer1_6(fn)) {
        return cloneRecursive._makeShareableClone(fn, undefined);
      } else if (outer1_15(fn)) {
        return fn.__remoteFunction;
      } else {
        const _Array = Array;
        if (Array.isArray(fn)) {
          return cloneRecursive._makeShareableClone(fn.map(cloneRecursive), undefined);
        } else {
          const obj = {};
          const _Object = Object;
          const entries = Object.entries(fn);
          const tmp5 = entries[Symbol.iterator]();
          while (tmp5 !== undefined) {
            let tmp9 = outer1_3;
            let tmp10 = outer1_3(tmp7, 2);
            let tmp11 = cloneRecursive;
            obj[tmp10[0]] = cloneRecursive(tmp10[1]);
            continue;
          }
          return cloneRecursive._makeShareableClone(obj, fn);
        }
      }
    }
    return cloneRecursive(fn);
  }
}
makeShareableCloneOnUIRecursive.__closure = { SHOULD_BE_USE_WEB: isJest, isHostObject, isRemoteFunction };
makeShareableCloneOnUIRecursive.__workletHash = 10912061747670;
makeShareableCloneOnUIRecursive.__initData = { code: "function makeShareableCloneOnUIRecursive_Pnpm_shareablesTs8(value){const{SHOULD_BE_USE_WEB,isHostObject,isRemoteFunction}=this.__closure;if(SHOULD_BE_USE_WEB){return value;}function cloneRecursive(value){if(typeof value==='object'&&value!==null||typeof value==='function'){if(isHostObject(value)){return global._makeShareableClone(value,undefined);}if(isRemoteFunction(value)){return value.__remoteFunction;}if(Array.isArray(value)){return global._makeShareableClone(value.map(cloneRecursive),undefined);}const toAdapt={};for(const[key,element]of Object.entries(value)){toAdapt[key]=cloneRecursive(element);}return global._makeShareableClone(toAdapt,value);}return global._makeShareableClone(value,undefined);}return cloneRecursive(value);}" };
let closure_17 = { code: "function pnpm_shareablesTs9(){const{value}=this.__closure;return value;}" };

export const makeShareableCloneRecursive = tmp3;
export { makeShareableCloneOnUIRecursive };
export const makeShareable = isJest ? (function makeShareableJS(arg0) {
  return arg0;
}) : (function makeShareableNative(arg0) {
  let closure_0 = arg0;
  const shareableMappingCache = require(1637) /* weakMap */.shareableMappingCache;
  if (shareableMappingCache.get(arg0)) {
    return arg0;
  } else {
    let obj = { __init: null };
    const fn = function n() {
      return closure_0;
    };
    obj = { value: null };
    obj[0] = arg0;
    fn.__closure = obj;
    fn.__workletHash = 5731865988281;
    fn.__initData = closure_17;
    obj[0] = fn;
    const shareableMappingCache2 = tmp(1637).shareableMappingCache;
    const result = shareableMappingCache2.set(arg0, tmp3(obj));
    return arg0;
  }
  tmp = require;
});