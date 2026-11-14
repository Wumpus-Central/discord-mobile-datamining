// _runtime/01711_threadsNative.js
import _mod1710 from "metro/01710__.js";
import NativeWorklets from "01712_NativeWorklets.js";
import registerCustomSerializable from "01719_registerCustomSerializable.js";
import _mod1721 from "metro/01721__.js";
import _slicedToArray from "metro/00032__.js";

require = fn;
function scheduleOnUI(arg0) {
  items = [arg0, [...arguments].slice(), undefined, undefined, undefined];
  closure_4.push(items);
  if (1 === closure_4.length) {
    const _queueMicrotask = queueMicrotask;
    queueMicrotask(() => {
      dependencyMap2 = [];
      items = [];
      const items1 = [];
      while (tmp2 !== undefined) {
        let tmp5 = closure_1_3(tmp3, 4);
        [tmp6, tmp7, tmp8, tmp10] = tmp5;
        if (undefined === tmp8) {
          let obj3 = closure_1_0(1719);
          let arr = items.push(obj3.createSerializable(tmp6));
          let obj4 = closure_1_0(1719);
          let arr2 = items1.push(obj4.createSerializable(tmp7));
        } else {
          if (closure_2 == null) {
            let obj = closure_1_0(1719);
            closure_2 = obj.createSerializable(closure_1_5);
          }
          let arr3 = items.push(closure_2);
          let obj2 = closure_1_0(1719);
          let items2 = [tmp6, tmp7, tmp9, tmp10];
          let arr7 = items1.push(obj2.createSerializable(items2));
        }
        continue;
      }
      const WorkletsModule = closure_1_0(1712).WorkletsModule;
      const WorkletsModule2 = closure_1_0(1712).WorkletsModule;
      const serializableArray = WorkletsModule2.createSerializableArray(items);
      const WorkletsModule3 = closure_1_0(1712).WorkletsModule;
      WorkletsModule.scheduleOnUI(serializableArray, WorkletsModule3.createSerializableArray(items1), undefined);
      tmp2 = dependencyMap2[Symbol.iterator]();
    });
  }
}
function runOnUISync(arg0) {
  const substr = [...arguments].slice();
  const WorkletsModule = NativeWorklets.WorkletsModule;
  items = [closure_7, arg0, substr, registerCustomSerializable.makeShareableCloneOnUIRecursive];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp2, tmp3, tmp4, tmp5] = items;
  function pnpm_threadsNativeTs2() {
    return _undefined3(_undefined(...c1));
  }
  const items1 = [tmp3, tmp4, tmp5];
  pnpm_threadsNativeTs2.__closure = items1;
  pnpm_threadsNativeTs2.__workletHash = 2333067153550;
  pnpm_threadsNativeTs2.__initData = tmp2;
  return WorkletsModule.runOnUISync(registerCustomSerializable.createSerializable(pnpm_threadsNativeTs2), undefined);
}
let closure_4 = [];
let items = [
  {
    code: "(function runAsyncUIJob_Pnpm_threadsNativeTs1(workletFunction,workletArgs,resolve,reject){try{const result=workletFunction(...workletArgs);const serializedResult=globalThis.__serializer(result);globalThis.__workletsModuleProxy.handlePromise(resolve,serializedResult);}catch(error){const serializedError=globalThis.__serializer(error);globalThis.__workletsModuleProxy.handlePromise(reject,serializedError);}})",
  },
];
[tmp2] = items;
function runAsyncUIJob(arg0, arg1, c2, c2) {
  try {
    items = [];
    HermesBuiltin.arraySpread(arg1, 0);
    const _globalThis = globalThis;
    const _globalThis2 = globalThis;
    __workletsModuleProxy.handlePromise(c2, globalThis.__serializer(HermesBuiltin.apply(items, undefined)));
  } catch (tmp10) {
    const _globalThis3 = globalThis;
    const _globalThis4 = globalThis;
    __workletsModuleProxy2.handlePromise(c2, globalThis.__serializer(tmp10));
  }
}
runAsyncUIJob.__workletHash = 11899598733373;
runAsyncUIJob.__initData = tmp2;
let closure_7 = {
  code: "(function pnpm_threadsNativeTs2(){let[worklet,args,makeShareableCloneOnUIRecursive]=this.__closure;const result=worklet(...args);return makeShareableCloneOnUIRecursive(result);})",
};
let items1 = [
  {
    code: "(function scheduleOnRN_Pnpm_threadsNativeTs3(fun,...args){const scheduleOnRN_Pnpm_threadsNativeTs3=this._recur;let[RuntimeKind,isWorkletFunction,runWorkletOnJS,SHOULD_CAPTURE_SCHEDULE_STACK]=this.__closure;if(globalThis.__RUNTIME_KIND===RuntimeKind.ReactNative){queueMicrotask(args.length?function(){return fun(...args);}:fun);}else if(isWorkletFunction(fun)){scheduleOnRN_Pnpm_threadsNativeTs3(runWorkletOnJS,fun,...args);}else{globalThis.__workletsModuleProxy.scheduleOnRN(fun,args.length>0?globalThis.__serializer(args):undefined,SHOULD_CAPTURE_SCHEDULE_STACK?new Error().stack:undefined);}})",
  },
  fn(1710).RuntimeKind,
  fn(1721).isWorkletFunction,
  function runWorkletOnJS(fn) {
    fn(...HermesBuiltin.copyRestArgs());
  },
  false,
];
let closure_129_0;
let closure_129_1;
let closure_129_2;
let closure_129_3;
[tmp3, tmp4, tmp5, tmp6, tmp7] = items1;
function scheduleOnRN(arg0) {
  let fn = arg0;
  closure_0 = arg0;
  const substr = [...arguments].slice();
  if (globalThis.__RUNTIME_KIND === require.ReactNative) {
    if (substr.length) {
      fn = () => closure_0(...substr);
    }
    queueMicrotask(fn);
  } else if (dependencyMap(fn)) {
    items = [React2, fn];
    HermesBuiltin.arraySpread(substr, 2);
    HermesBuiltin.apply(items, undefined);
  } else {
    const _globalThis = globalThis;
    let __serializerResult;
    if (substr.length > 0) {
      const _globalThis2 = globalThis;
      __serializerResult = globalThis.__serializer(substr);
    }
    let stack;
    if (_slicedToArray) {
      const _Error = Error;
      const error = new Error();
      stack = error.stack;
    }
    __workletsModuleProxy.scheduleOnRN(fn, __serializerResult, stack);
  }
}
let closure_129_4 = scheduleOnRN;
let items2 = [tmp4, tmp5, tmp6, tmp7];
scheduleOnRN.__closure = items2;
scheduleOnRN.__workletHash = 12664382057292;
scheduleOnRN.__initData = tmp3;
const items3 = [
  {
    code: "(function runOnJS_Pnpm_threadsNativeTs4(fun){let[scheduleOnRN]=this.__closure;return function(...args){scheduleOnRN(fun,...args);};})",
  },
  scheduleOnRN,
];
let closure_130_0;
[tmp8, tmp9] = items3;
function runOnJS(arg0) {
  closure_0 = arg0;
  return () => {
    require(...HermesBuiltin.copyRestArgs());
  };
}
const items4 = [tmp9];
runOnJS.__closure = items4;
runOnJS.__workletHash = 13472084703672;
runOnJS.__initData = tmp8;
const items5 = [
  {
    code: "(function getCurrentThreadId_Pnpm_threadsNativeTs5(){return globalThis.__workletsModuleProxy.getCurrentThreadId();})",
  },
];
[tmp10] = items5;
function getCurrentThreadId() {
  return __workletsModuleProxy.getCurrentThreadId();
}
getCurrentThreadId.__workletHash = 13536958329162;
getCurrentThreadId.__initData = tmp10;

export { scheduleOnUI };
export function runOnUI(c3) {
  closure_0 = c3;
  return () => {
    scheduleOnUI(...HermesBuiltin.copyRestArgs());
  };
}
export { runOnUISync };
export function executeOnUIRuntimeSync(arg0) {
  closure_0 = arg0;
  return () => runOnUISync(...HermesBuiltin.copyRestArgs());
}
export { scheduleOnRN };
export function runOnRNSync(initializer) {
  const substr = [...arguments].slice();
  if (globalThis.__RUNTIME_KIND === _mod1710.RuntimeKind.ReactNative) {
    items = [];
    HermesBuiltin.arraySpread(substr, 0);
    let applyResult = HermesBuiltin.apply(items, undefined);
  } else {
    const _globalThis = globalThis;
    let __serializerResult = initializer;
    if (tmpResult.isWorkletFunction(initializer)) {
      const _globalThis2 = globalThis;
      __serializerResult = globalThis.__serializer(initializer);
    }
    let __serializerResult1;
    if (substr.length > 0) {
      const _globalThis3 = globalThis;
      __serializerResult1 = globalThis.__serializer(substr);
    }
    applyResult = __workletsModuleProxy.runOnRNSync(__serializerResult, __serializerResult1, undefined);
    tmpResult = _mod1721;
  }
  return applyResult;
}
export { runOnJS };
export function runOnUIAsync(arg0) {
  closure_0 = arg0;
  closure_1 = [...arguments].slice();
  return new Promise((arg0, arg1) => {
    items = [closure_0, dependencyMap, arg0, arg1, undefined];
    dependencyMap2.push(items);
    if (1 === dependencyMap2.length) {
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(() => {
        dependencyMap2 = [];
        items = [];
        const items1 = [];
        while (tmp2 !== undefined) {
          let tmp5 = closure_1_3(tmp3, 4);
          [tmp6, tmp7, tmp8, tmp10] = tmp5;
          if (undefined === tmp8) {
            let obj3 = closure_1_0(1719);
            let arr = items.push(obj3.createSerializable(tmp6));
            let obj4 = closure_1_0(1719);
            let arr2 = items1.push(obj4.createSerializable(tmp7));
          } else {
            if (closure_2 == null) {
              let obj = closure_1_0(1719);
              closure_2 = obj.createSerializable(closure_1_5);
            }
            let arr3 = items.push(closure_2);
            let obj2 = closure_1_0(1719);
            let items2 = [tmp6, tmp7, tmp9, tmp10];
            let arr7 = items1.push(obj2.createSerializable(items2));
          }
          continue;
        }
        const WorkletsModule = closure_1_0(1712).WorkletsModule;
        const WorkletsModule2 = closure_1_0(1712).WorkletsModule;
        const serializableArray = WorkletsModule2.createSerializableArray(items);
        const WorkletsModule3 = closure_1_0(1712).WorkletsModule;
        WorkletsModule.scheduleOnUI(serializableArray, WorkletsModule3.createSerializableArray(items1), undefined);
        tmp2 = dependencyMap2[Symbol.iterator]();
      });
    }
  });
}
export { getCurrentThreadId };
