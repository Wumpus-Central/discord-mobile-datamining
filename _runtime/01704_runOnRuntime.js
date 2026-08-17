// _runtime/01704_runOnRuntime.js
import ReanimatedModule2 from "ReanimatedModule" /* 1662 */;
import isWorkletFunction from "isWorkletFunction" /* 1679 */;
import freezeObjectInDev from "freezeObjectInDev" /* 1684 */;
import isJest from "isJest" /* 1657 */;

let closure_3 = { code: "function pnpm_runtimesTs1(){const{registerReanimatedError,registerLoggerConfig,config,setupCallGuard,setupConsole,initializer}=this.__closure;var _initializer;registerReanimatedError();registerLoggerConfig(config);setupCallGuard();setupConsole();(_initializer=initializer)===null||_initializer===void 0||_initializer();}" };
let closure_4 = { code: "function pnpm_runtimesTs3(){const{worklet,args}=this.__closure;worklet(...args);}" };
let closure_5 = { code: "function pnpm_runtimesTs4(){const{worklet,args}=this.__closure;worklet(...args);}" };
function runOnRuntime(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return globalThis._WORKLET ? (() => {
    const items = [...arguments];
    let obj = callback(closure_1_2[2]);
    const fn = function u() {
      closure_1_1(...items);
    };
    obj = { worklet: callback, args: items };
    fn.__closure = obj;
    fn.__workletHash = 1376644884193;
    fn.__initData = closure_1_4;
    return closure_0._scheduleOnRuntime(items, obj.makeShareableCloneOnUIRecursive(fn));
  }) : (() => {
    const items = [...arguments];
    const ReanimatedModule = callback(closure_1_2[1]).ReanimatedModule;
    let obj = callback(closure_1_2[2]);
    const fn = function l() {
      closure_1_1(...items);
    };
    obj = { worklet: callback, args: items };
    fn.__closure = obj;
    fn.__workletHash = 10918069222950;
    fn.__initData = closure_1_5;
    return ReanimatedModule.scheduleOnRuntime(items, obj.makeShareableCloneRecursive(fn));
  });
}
runOnRuntime.__closure = { __DEV__: false, SHOULD_BE_USE_WEB: isJest.shouldBeUseWeb(), isWorkletFunction: isWorkletFunction.isWorkletFunction, makeShareableCloneOnUIRecursive: freezeObjectInDev.makeShareableCloneOnUIRecursive, ReanimatedModule: ReanimatedModule2.ReanimatedModule, makeShareableCloneRecursive: freezeObjectInDev.makeShareableCloneRecursive };
runOnRuntime.__workletHash = 14671185280560;
runOnRuntime.__initData = { code: "function runOnRuntime_Pnpm_runtimesTs2(workletRuntime,worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,makeShareableCloneOnUIRecursive,ReanimatedModule,makeShareableCloneRecursive}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('The function passed to `runOnRuntime` is not a worklet.'+(_WORKLET?' Please make sure that `processNestedWorklets` option in Reanimated Babel plugin is enabled.':''));}if(_WORKLET){return function(...args){return global._scheduleOnRuntime(workletRuntime,makeShareableCloneOnUIRecursive(function(){'worklet';worklet(...args);}));};}return function(...args){return ReanimatedModule.scheduleOnRuntime(workletRuntime,makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));};}" };

export const createWorkletRuntime = function createWorkletRuntime(arg0, initializer) {
  closure_0 = initializer;
  const ReanimatedModule = __reanimatedLoggerConfig(1662).ReanimatedModule;
  let obj = __reanimatedLoggerConfig(1684);
  const fn = function l() {
    const result = __reanimatedLoggerConfig(closure_1_2[3]).registerReanimatedError();
    const obj = __reanimatedLoggerConfig(closure_1_2[3]);
    __reanimatedLoggerConfig(closure_1_2[4]).registerLoggerConfig(__reanimatedLoggerConfig);
    const obj2 = __reanimatedLoggerConfig(closure_1_2[4]);
    __reanimatedLoggerConfig(closure_1_2[5]).setupCallGuard();
    const obj3 = __reanimatedLoggerConfig(closure_1_2[5]);
    __reanimatedLoggerConfig(closure_1_2[5]).setupConsole();
    if (initializer != null) {
      initializer();
    }
  };
  obj = { registerReanimatedError: __reanimatedLoggerConfig(1665).registerReanimatedError, registerLoggerConfig: __reanimatedLoggerConfig(1658).registerLoggerConfig, config: globalThis.__reanimatedLoggerConfig, setupCallGuard: __reanimatedLoggerConfig(1656).setupCallGuard, setupConsole: __reanimatedLoggerConfig(1656).setupConsole, initializer };
  fn.__closure = obj;
  fn.__workletHash = 8531807001072;
  fn.__initData = closure_3;
  return ReanimatedModule.createWorkletRuntime(arg0, obj.makeShareableCloneRecursive(fn));
};
export { runOnRuntime };