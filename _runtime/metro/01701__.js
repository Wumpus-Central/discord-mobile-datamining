// === Module 1701: ? ===

// Module 1701
import overrideLogFunctionImplementation from "overrideLogFunctionImplementation" /* 1653 */;
import _mod1655 from "module_1655" /* 1655 */;
import ReanimatedModule2 from "ReanimatedModule" /* 1659 */;
import _mod1662 from "module_1662" /* 1662 */;
import _mod1676 from "module_1676" /* 1676 */;
import freezeObjectInDev from "freezeObjectInDev" /* 1681 */;
import module_1654 from "module_1654" /* 1654 */;

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
    return closure_0._scheduleOnRuntime(items, worklet(1681).makeShareableCloneOnUIRecursive(fn));
  }) : (() => {
    const items = [...arguments];
    const ReanimatedModule = worklet(1659).ReanimatedModule;
    const fn = function l() {
      closure_1(...items);
    };
    fn.__closure = { worklet, args: items };
    fn.__workletHash = 10918069222950;
    fn.__initData = __initData2;
    return ReanimatedModule.scheduleOnRuntime(items, worklet(1681).makeShareableCloneRecursive(fn));
  });
}
runOnRuntime.__closure = { __DEV__: false, SHOULD_BE_USE_WEB: module_1654.shouldBeUseWeb(), isWorkletFunction: _mod1676.isWorkletFunction, makeShareableCloneOnUIRecursive: freezeObjectInDev.makeShareableCloneOnUIRecursive, ReanimatedModule: ReanimatedModule2.ReanimatedModule, makeShareableCloneRecursive: freezeObjectInDev.makeShareableCloneRecursive };
runOnRuntime.__workletHash = 14671185280560;
runOnRuntime.__initData = { code: "function runOnRuntime_Pnpm_runtimesTs2(workletRuntime,worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,makeShareableCloneOnUIRecursive,ReanimatedModule,makeShareableCloneRecursive}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('The function passed to `runOnRuntime` is not a worklet.'+(_WORKLET?' Please make sure that `processNestedWorklets` option in Reanimated Babel plugin is enabled.':''));}if(_WORKLET){return function(...args){return global._scheduleOnRuntime(workletRuntime,makeShareableCloneOnUIRecursive(function(){'worklet';worklet(...args);}));};}return function(...args){return ReanimatedModule.scheduleOnRuntime(workletRuntime,makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));};}" };

export function createWorkletRuntime(arg0, initializer) {
  const ReanimatedModule = __reanimatedLoggerConfig(1659).ReanimatedModule;
  const fn = function l() {
    const result = _mod1662.registerReanimatedError();
    _mod1655.registerLoggerConfig(__reanimatedLoggerConfig);
    overrideLogFunctionImplementation.setupCallGuard();
    overrideLogFunctionImplementation.setupConsole();
    if (initializer != null) {
      initializer();
    }
  };
  let obj = __reanimatedLoggerConfig(1681);
  fn.__closure = { registerReanimatedError: __reanimatedLoggerConfig(1662).registerReanimatedError, registerLoggerConfig: __reanimatedLoggerConfig(1655).registerLoggerConfig, config: globalThis.__reanimatedLoggerConfig, setupCallGuard: __reanimatedLoggerConfig(1653).setupCallGuard, setupConsole: __reanimatedLoggerConfig(1653).setupConsole, initializer };
  fn.__workletHash = 8531807001072;
  fn.__initData = __initData;
  return ReanimatedModule.createWorkletRuntime(arg0, obj.makeShareableCloneRecursive(fn));
}
export { runOnRuntime };