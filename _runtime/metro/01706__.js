// _runtime/metro/01706__.js
import overrideLogFunctionImplementation from "../01658_overrideLogFunctionImplementation.js";
import _mod1660 from "01660__.js";
import ReanimatedModule2 from "../01664_ReanimatedModule.js";
import _mod1667 from "01667__.js";
import _mod1681 from "01681__.js";
import freezeObjectInDev from "../01686_freezeObjectInDev.js";
import 01659__ from "01659__.js";

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
    return closure_0._scheduleOnRuntime(items, worklet(1686).makeShareableCloneOnUIRecursive(fn));
  }) : (() => {
    const items = [...arguments];
    const ReanimatedModule = worklet(1664).ReanimatedModule;
    const fn = function l() {
      closure_1(...items);
    };
    fn.__closure = { worklet, args: items };
    fn.__workletHash = 10918069222950;
    fn.__initData = __initData2;
    return ReanimatedModule.scheduleOnRuntime(items, worklet(1686).makeShareableCloneRecursive(fn));
  });
}
runOnRuntime.__closure = { __DEV__: false, SHOULD_BE_USE_WEB: module_1659.shouldBeUseWeb(), isWorkletFunction: _mod1681.isWorkletFunction, makeShareableCloneOnUIRecursive: freezeObjectInDev.makeShareableCloneOnUIRecursive, ReanimatedModule: ReanimatedModule2.ReanimatedModule, makeShareableCloneRecursive: freezeObjectInDev.makeShareableCloneRecursive };
runOnRuntime.__workletHash = 14671185280560;
runOnRuntime.__initData = { code: "function runOnRuntime_Pnpm_runtimesTs2(workletRuntime,worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,makeShareableCloneOnUIRecursive,ReanimatedModule,makeShareableCloneRecursive}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('The function passed to `runOnRuntime` is not a worklet.'+(_WORKLET?' Please make sure that `processNestedWorklets` option in Reanimated Babel plugin is enabled.':''));}if(_WORKLET){return function(...args){return global._scheduleOnRuntime(workletRuntime,makeShareableCloneOnUIRecursive(function(){'worklet';worklet(...args);}));};}return function(...args){return ReanimatedModule.scheduleOnRuntime(workletRuntime,makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));};}" };

export const createWorkletRuntime = function createWorkletRuntime(arg0, initializer) {
  const ReanimatedModule = __reanimatedLoggerConfig(1664).ReanimatedModule;
  const fn = function l() {
    const result = _mod1667.registerReanimatedError();
    _mod1660.registerLoggerConfig(__reanimatedLoggerConfig);
    overrideLogFunctionImplementation.setupCallGuard();
    overrideLogFunctionImplementation.setupConsole();
    if (initializer != null) {
      initializer();
    }
  };
  let obj = __reanimatedLoggerConfig(1686);
  fn.__closure = { registerReanimatedError: __reanimatedLoggerConfig(1667).registerReanimatedError, registerLoggerConfig: __reanimatedLoggerConfig(1660).registerLoggerConfig, config: globalThis.__reanimatedLoggerConfig, setupCallGuard: __reanimatedLoggerConfig(1658).setupCallGuard, setupConsole: __reanimatedLoggerConfig(1658).setupConsole, initializer };
  fn.__workletHash = 8531807001072;
  fn.__initData = __initData;
  return ReanimatedModule.createWorkletRuntime(arg0, obj.makeShareableCloneRecursive(fn));
};
export { runOnRuntime };