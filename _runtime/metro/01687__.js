// _runtime/metro/01687__.js
import overrideLogFunctionImplementation from "../01639_overrideLogFunctionImplementation.js";
import _mod1641 from "01641__.js";
import ReanimatedModule2 from "../01645_ReanimatedModule.js";
import _mod1648 from "01648__.js";
import _mod1662 from "01662__.js";
import freezeObjectInDev from "../01667_freezeObjectInDev.js";
import 01640__ from "01640__.js";

const __initData = { code: "function pnpm_runtimesTs1(){const{registerReanimatedError,registerLoggerConfig,config,setupCallGuard,setupConsole,initializer}=this.__closure;var _initializer;registerReanimatedError();registerLoggerConfig(config);setupCallGuard();setupConsole();(_initializer=initializer)===null||_initializer===void 0||_initializer();}" };
let closure_4 = { code: "function pnpm_runtimesTs3(){const{worklet,args}=this.__closure;worklet(...args);}" };
let closure_5 = { code: "function pnpm_runtimesTs4(){const{worklet,args}=this.__closure;worklet(...args);}" };
function runOnRuntime(arg0, worklet) {
  closure_0 = arg0;
  return globalThis._WORKLET ? (() => {
    const items = [...arguments];
    const fn = function u() {
      closure_1(...items);
    };
    fn.__closure = { worklet, args: items };
    fn.__workletHash = 1376644884193;
    fn.__initData = __initData;
    return closure_0._scheduleOnRuntime(items, worklet(1667).makeShareableCloneOnUIRecursive(fn));
  }) : (() => {
    const items = [...arguments];
    const ReanimatedModule = worklet(1645).ReanimatedModule;
    const fn = function l() {
      closure_1(...items);
    };
    fn.__closure = { worklet, args: items };
    fn.__workletHash = 10918069222950;
    fn.__initData = __initData2;
    return ReanimatedModule.scheduleOnRuntime(items, worklet(1667).makeShareableCloneRecursive(fn));
  });
}
runOnRuntime.__closure = { __DEV__: false, SHOULD_BE_USE_WEB: module_1640.shouldBeUseWeb(), isWorkletFunction: _mod1662.isWorkletFunction, makeShareableCloneOnUIRecursive: freezeObjectInDev.makeShareableCloneOnUIRecursive, ReanimatedModule: ReanimatedModule2.ReanimatedModule, makeShareableCloneRecursive: freezeObjectInDev.makeShareableCloneRecursive };
runOnRuntime.__workletHash = 14671185280560;
runOnRuntime.__initData = { code: "function runOnRuntime_Pnpm_runtimesTs2(workletRuntime,worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,makeShareableCloneOnUIRecursive,ReanimatedModule,makeShareableCloneRecursive}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('The function passed to `runOnRuntime` is not a worklet.'+(_WORKLET?' Please make sure that `processNestedWorklets` option in Reanimated Babel plugin is enabled.':''));}if(_WORKLET){return function(...args){return global._scheduleOnRuntime(workletRuntime,makeShareableCloneOnUIRecursive(function(){'worklet';worklet(...args);}));};}return function(...args){return ReanimatedModule.scheduleOnRuntime(workletRuntime,makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));};}" };

export const createWorkletRuntime = function createWorkletRuntime(arg0, initializer) {
  const ReanimatedModule = __reanimatedLoggerConfig(1645).ReanimatedModule;
  const fn = function l() {
    const result = _mod1648.registerReanimatedError();
    _mod1641.registerLoggerConfig(__reanimatedLoggerConfig);
    overrideLogFunctionImplementation.setupCallGuard();
    overrideLogFunctionImplementation.setupConsole();
    if (initializer != null) {
      initializer();
    }
  };
  let obj = __reanimatedLoggerConfig(1667);
  fn.__closure = { registerReanimatedError: __reanimatedLoggerConfig(1648).registerReanimatedError, registerLoggerConfig: __reanimatedLoggerConfig(1641).registerLoggerConfig, config: globalThis.__reanimatedLoggerConfig, setupCallGuard: __reanimatedLoggerConfig(1639).setupCallGuard, setupConsole: __reanimatedLoggerConfig(1639).setupConsole, initializer };
  fn.__workletHash = 8531807001072;
  fn.__initData = __initData;
  return ReanimatedModule.createWorkletRuntime(arg0, obj.makeShareableCloneRecursive(fn));
};
export { runOnRuntime };