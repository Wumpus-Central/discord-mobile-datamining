// === Module 1737: ? ===

// Module 1737
import runWorkletOnJS from "runWorkletOnJS" /* 1643 */;
import _makeShareableClone from "_makeShareableClone" /* 1646 */;
import _mod1679 from "module_1679" /* 1679 */;
import validateTransformOrigin from "validateTransformOrigin" /* 1738 */;
import ComponentRegistry2 from "ComponentRegistry" /* 1739 */;
import module_1639 from "module_1639" /* 1639 */;

function updatePropsOnReactJS(arg0, arg1) {
  const ComponentRegistry = ComponentRegistry2.ComponentRegistry;
  const component = ComponentRegistry.getComponent(arg0);
  if (component) {
    const result = component._updateReanimatedProps(arg1);
  }
}
if (module_1639.shouldBeUseWeb()) {
  const fn2 = function o(value, arg1, arg2) {
    closure_0 = arg1;
    closure_1 = arg2;
    value = value.value;
    if (value != null) {
      const item = value.forEach((tag) => {
        _makeShareableClone._updatePropsJS(closure_0, tag.tag, closure_1);
      });
    }
  };
  let obj = { _updatePropsJS: null };
  obj = { code: "function pnpm_updatePropsTs1(viewDescriptors,updates,isAnimatedProps){const{_updatePropsJS}=this.__closure;var _viewDescriptors$valu;(_viewDescriptors$valu=viewDescriptors.value)===null||_viewDescriptors$valu===void 0||_viewDescriptors$valu.forEach(function(viewDescriptor){const component=viewDescriptor.tag;_updatePropsJS(updates,component,isAnimatedProps);});}", _updatePropsJS: _makeShareableClone._updatePropsJS };
  fn2.__closure = obj;
  fn2.__workletHash = 17381979125683;
  fn2.__initData = obj;
  let fn = fn2;
} else {
  fn = function s(value, transformOrigin) {
    _global = transformOrigin;
    value = value.value;
    const item = value.forEach((tag) => {
      let obj = global.lastUpdateByTag[tag.tag];
      if (obj == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(closure_0);
      global.lastUpdateByTag[tag.tag] = obj;
      global.lastUpdateFrameTimeByTag[tag.tag] = global.__frameTimestamp;
    });
    _mod1679.processColorsInProps(transformOrigin);
    if ("transformOrigin" in transformOrigin) {
      transformOrigin.transformOrigin = validateTransformOrigin.processTransformOrigin(transformOrigin.transformOrigin);
      const tmp2Result = validateTransformOrigin;
    }
    const UpdatePropsManager = _global.UpdatePropsManager;
    UpdatePropsManager.update(value, transformOrigin);
  };
  const obj1 = { processColorsInProps: _mod1679.processColorsInProps, processTransformOrigin: validateTransformOrigin.processTransformOrigin };
  fn.__closure = obj1;
  fn.__workletHash = 9641647469033;
  fn.__initData = { code: "function pnpm_updatePropsTs2(viewDescriptors,updates){const{processColorsInProps,processTransformOrigin}=this.__closure;viewDescriptors.value.forEach(function(viewDescriptor){var _global$lastUpdateByT;const prevState=(_global$lastUpdateByT=global.lastUpdateByTag[viewDescriptor.tag])!==null&&_global$lastUpdateByT!==void 0?_global$lastUpdateByT:{};global.lastUpdateByTag[viewDescriptor.tag]={...prevState,...updates};global.lastUpdateFrameTimeByTag[viewDescriptor.tag]=global.__frameTimestamp;});processColorsInProps(updates);if('transformOrigin'in updates){updates.transformOrigin=processTransformOrigin(updates.transformOrigin);}global.UpdatePropsManager.update(viewDescriptors,updates);}" };
  const obj2 = { code: "function pnpm_updatePropsTs2(viewDescriptors,updates){const{processColorsInProps,processTransformOrigin}=this.__closure;viewDescriptors.value.forEach(function(viewDescriptor){var _global$lastUpdateByT;const prevState=(_global$lastUpdateByT=global.lastUpdateByTag[viewDescriptor.tag])!==null&&_global$lastUpdateByT!==void 0?_global$lastUpdateByT:{};global.lastUpdateByTag[viewDescriptor.tag]={...prevState,...updates};global.lastUpdateFrameTimeByTag[viewDescriptor.tag]=global.__frameTimestamp;});processColorsInProps(updates);if('transformOrigin'in updates){updates.transformOrigin=processTransformOrigin(updates.transformOrigin);}global.UpdatePropsManager.update(viewDescriptors,updates);}" };
}
const __initData = { code: "function checkUpdate_Pnpm_updatePropsTs4(tag){const checkUpdate_Pnpm_updatePropsTs4=this._recur;const{runOnJS,updatePropsOnReactJS,scheduledFrameIds}=this.__closure;const currentFrameTime=global.__frameTimestamp;const lastUpdateFrameTime=global.lastUpdateFrameTimeByTag[tag];if(!currentFrameTime||!lastUpdateFrameTime){return;}if(currentFrameTime-lastUpdateFrameTime>=20){runOnJS(updatePropsOnReactJS)(tag,global.lastUpdateByTag[tag]);global.lastUpdateByTag[tag]=undefined;return;}if(scheduledFrameIds[tag]){return;}scheduledFrameIds[tag]=requestAnimationFrame(function(){'worklet';scheduledFrameIds[tag]=undefined;checkUpdate_Pnpm_updatePropsTs4(tag);});}" };
let closure_6 = { code: "function pnpm_updatePropsTs5(){const{scheduledFrameIds,tag,checkUpdate}=this.__closure;scheduledFrameIds[tag]=undefined;checkUpdate(tag);}" };
if (module_1639.isFabric()) {
  const fn4 = function l() {
    let checkUpdate = [];
    let __closure = {};
    checkUpdate = function checkUpdate(tag) {
      checkUpdate = tag;
      const __frameTimestamp = global.__frameTimestamp;
      if (__frameTimestamp) {
        if (tmp2) {
          if (__frameTimestamp - tmp2 >= 20) {
            runWorkletOnJS.runOnJS(updatePropsOnReactJS)(tag, tmp.lastUpdateByTag[tag]);
            tmp.lastUpdateByTag[tag] = undefined;
          } else if (!__closure[tag]) {
            const _requestAnimationFrame = requestAnimationFrame;
            fn = function p() {
              require[closure_0] = undefined;
              checkUpdate(closure_0);
            };
            __closure = { scheduledFrameIds: tmp3, tag, checkUpdate };
            fn.__closure = __closure;
            fn.__workletHash = 7847593993789;
            fn.__initData = __initData;
            tmp3[tag] = requestAnimationFrame(fn);
          }
        }
      }
    };
    __closure = { runOnJS: __closure(checkUpdate[5]).runOnJS, updatePropsOnReactJS, scheduledFrameIds: __closure };
    checkUpdate.__closure = __closure;
    checkUpdate.__workletHash = 1753947436463;
    checkUpdate.__initData = __initData;
    __closure = {
      update(value, updates) {
        const self = this;
        value = value.value;
        const item = value.forEach((shadowNodeWrapper) => {
          checkUpdate.push({ shadowNodeWrapper: shadowNodeWrapper.shadowNodeWrapper, updates, tag: shadowNodeWrapper.tag });
          if (1 === checkUpdate.length) {
            const _queueMicrotask = queueMicrotask;
            queueMicrotask(self.flush);
          }
        });
      },
      flush() {
        global._updatePropsFabric(checkUpdate);
        const item = checkUpdate.forEach((tag) => {
          checkUpdate(tag.tag);
        });
        checkUpdate.length = 0;
      }
    };
    return __closure;
  };
  const obj3 = { runOnJS: runWorkletOnJS.runOnJS, updatePropsOnReactJS };
  fn4.__closure = obj3;
  fn4.__workletHash = 7650186665575;
  fn4.__initData = { code: "function pnpm_updatePropsTs3(){const{runOnJS,updatePropsOnReactJS}=this.__closure;const operations=[];const scheduledFrameIds={};function checkUpdate(tag){'worklet';const currentFrameTime=global.__frameTimestamp;const lastUpdateFrameTime=global.lastUpdateFrameTimeByTag[tag];if(!currentFrameTime||!lastUpdateFrameTime){return;}if(currentFrameTime-lastUpdateFrameTime>=20){runOnJS(updatePropsOnReactJS)(tag,global.lastUpdateByTag[tag]);global.lastUpdateByTag[tag]=undefined;return;}if(scheduledFrameIds[tag]){return;}scheduledFrameIds[tag]=requestAnimationFrame(function(){'worklet';scheduledFrameIds[tag]=undefined;checkUpdate(tag);});}return{update:function(viewDescriptors,updates){var _this=this;viewDescriptors.value.forEach(function(viewDescriptor){const tag=viewDescriptor.tag;operations.push({shadowNodeWrapper:viewDescriptor.shadowNodeWrapper,updates:updates,tag:tag});if(operations.length===1){queueMicrotask(_this.flush);}});},flush:function(){global._updatePropsFabric(operations);operations.forEach(function({tag:tag}){checkUpdate(tag);});operations.length=0;}};}" };
  let fn3 = fn4;
  const obj4 = { code: "function pnpm_updatePropsTs3(){const{runOnJS,updatePropsOnReactJS}=this.__closure;const operations=[];const scheduledFrameIds={};function checkUpdate(tag){'worklet';const currentFrameTime=global.__frameTimestamp;const lastUpdateFrameTime=global.lastUpdateFrameTimeByTag[tag];if(!currentFrameTime||!lastUpdateFrameTime){return;}if(currentFrameTime-lastUpdateFrameTime>=20){runOnJS(updatePropsOnReactJS)(tag,global.lastUpdateByTag[tag]);global.lastUpdateByTag[tag]=undefined;return;}if(scheduledFrameIds[tag]){return;}scheduledFrameIds[tag]=requestAnimationFrame(function(){'worklet';scheduledFrameIds[tag]=undefined;checkUpdate(tag);});}return{update:function(viewDescriptors,updates){var _this=this;viewDescriptors.value.forEach(function(viewDescriptor){const tag=viewDescriptor.tag;operations.push({shadowNodeWrapper:viewDescriptor.shadowNodeWrapper,updates:updates,tag:tag});if(operations.length===1){queueMicrotask(_this.flush);}});},flush:function(){global._updatePropsFabric(operations);operations.forEach(function({tag:tag}){checkUpdate(tag);});operations.length=0;}};}" };
} else {
  fn3 = function c() {
    closure_0 = [];
    return {
      update(value, updates) {
        const self = this;
        value = value.value;
        const item = value.forEach((tag) => {
          let arr = updates;
          const obj = { tag: tag.tag, name: null, updates: null };
          let str = tag.name;
          if (!str) {
            str = "RCTView";
          }
          obj.name = str;
          obj.updates = updates;
          arr = updates.push(obj);
          if (1 === arr.length) {
            const _queueMicrotask = queueMicrotask;
            queueMicrotask(self.flush);
          }
        });
      },
      flush() {
        global._updatePropsPaper(closure_0);
        closure_0.length = 0;
      }
    };
  };
  fn3.__closure = {};
  fn3.__workletHash = 8150032191515;
  fn3.__initData = { code: "function pnpm_updatePropsTs6(){const operations=[];return{update:function(viewDescriptors,updates){var _this=this;viewDescriptors.value.forEach(function(viewDescriptor){operations.push({tag:viewDescriptor.tag,name:viewDescriptor.name||'RCTView',updates:updates});if(operations.length===1){queueMicrotask(_this.flush);}});},flush:function(){global._updatePropsPaper(operations);operations.length=0;}};}" };
}
if (module_1639.shouldBeUseWeb()) {
  function maybeThrowError() {
    if (!obj.isJest()) {
      const reanimatedError = new tmp(1647).ReanimatedError("`UpdatePropsManager` is not available on non-native platform.");
      throw reanimatedError;
    }
    obj = require("module_1639");
    tmp = require;
  }
  const _Proxy = Proxy;
  const obj5 = {
    get: maybeThrowError,
    set() {
        if (typeof maybeThrowError === "function") {
          if (obj.isJest()) {
            return false;
          } else {
            const reanimatedError = new tmp(1647).ReanimatedError("`UpdatePropsManager` is not available on non-native platform.");
            throw reanimatedError;
          }
          obj = require("module_1639");
          tmp = require;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
  };
  const proxy = new Proxy({}, obj5);
  global.UpdatePropsManager = proxy;
} else {
  const _module3 = runWorkletOnJS;
  const fn5 = function _() {
    global.UpdatePropsManager = fn3();
  };
  const obj7 = { createUpdatePropsManager: fn3 };
  fn5.__closure = obj7;
  fn5.__workletHash = 4015188324291;
  fn5.__initData = { code: "function pnpm_updatePropsTs7(){const{createUpdatePropsManager}=this.__closure;global.UpdatePropsManager=createUpdatePropsManager();}" };
  _module3.runOnUIImmediately(fn5)();
  const obj6 = { code: "function pnpm_updatePropsTs7(){const{createUpdatePropsManager}=this.__closure;global.UpdatePropsManager=createUpdatePropsManager();}" };
}

export default fn;
export const updatePropsJestWrapper = (D, keys, current, arr) => {
  closure_0 = keys;
  const item = arr.forEach((fn) => {
    fn(closure_0);
  });
  const merged = Object.assign(current.current.value);
  const merged1 = Object.assign(keys);
  current.current.value = {};
  fn(D, keys);
};