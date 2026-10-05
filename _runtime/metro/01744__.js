// _runtime/metro/01744__.js
import setupMicrotasks from "../01650_setupMicrotasks.js";
import _updatePropsJS from "../01653__updatePropsJS.js";
import clampRGBA from "../01686_clampRGBA.js";
import _mod1745 from "01745__.js";
import ComponentRegistry2 from "../01746_ComponentRegistry.js";
import module_1646_mod from "01646__.js";

const require = globalThis.__r;
let _global;

let fn;
let fn3;
function updatePropsOnReactJS(arg0, arg1) {
  const ComponentRegistry = ComponentRegistry2.ComponentRegistry;
  const component = ComponentRegistry.getComponent(arg0);
  if (component) {
    const result = component._updateReanimatedProps(arg1);
  }
}
let module_1646 = module_1646_mod;
if (module_1646.shouldBeUseWeb()) {
  const fn2 = function o(value, arg1, arg2) {
    let closure_0 = arg1;
    let closure_1 = arg2;
    value = value.value;
    if (value != null) {
      const item = value.forEach((tag) => {
        tag = tag.tag;
        const obj = _updatePropsJS;
        obj._updatePropsJS(closure_0, tag, closure_1);
      });
    }
  };
  let obj = { _updatePropsJS: _updatePropsJS._updatePropsJS };
  let obj2 = {
    code: "function pnpm_updatePropsTs1(viewDescriptors,updates,isAnimatedProps){const{_updatePropsJS}=this.__closure;var _viewDescriptors$valu;(_viewDescriptors$valu=viewDescriptors.value)===null||_viewDescriptors$valu===void 0||_viewDescriptors$valu.forEach(function(viewDescriptor){const component=viewDescriptor.tag;_updatePropsJS(updates,component,isAnimatedProps);});}",
  };
  fn2.__closure = obj;
  fn2.__workletHash = 17381979125683;
  fn2.__initData = obj2;
  fn = fn2;
} else {
  fn = function s(value, transformOrigin) {
    _global = transformOrigin;
    value = value.value;
    const item = value.forEach((tag) => {
      let obj = global.lastUpdateByTag[tag.tag];
      if (obj == null) {
        obj = {};
      }
      const lastUpdateByTag = global.lastUpdateByTag;
      tag = tag.tag;
      const obj2 = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(transformOrigin);
      lastUpdateByTag[tag] = obj2;
      global.lastUpdateFrameTimeByTag[tag.tag] = global.__frameTimestamp;
    });
    let obj = clampRGBA;
    obj.processColorsInProps(transformOrigin);
    if ("transformOrigin" in transformOrigin) {
      const tmp2Result = _mod1745;
      transformOrigin.transformOrigin = tmp2Result.processTransformOrigin(transformOrigin.transformOrigin);
    }
    const UpdatePropsManager = _global.UpdatePropsManager;
    UpdatePropsManager.update(value, transformOrigin);
  };
  const obj4 = {
    code: "function pnpm_updatePropsTs2(viewDescriptors,updates){const{processColorsInProps,processTransformOrigin}=this.__closure;viewDescriptors.value.forEach(function(viewDescriptor){var _global$lastUpdateByT;const prevState=(_global$lastUpdateByT=global.lastUpdateByTag[viewDescriptor.tag])!==null&&_global$lastUpdateByT!==void 0?_global$lastUpdateByT:{};global.lastUpdateByTag[viewDescriptor.tag]={...prevState,...updates};global.lastUpdateFrameTimeByTag[viewDescriptor.tag]=global.__frameTimestamp;});processColorsInProps(updates);if('transformOrigin'in updates){updates.transformOrigin=processTransformOrigin(updates.transformOrigin);}global.UpdatePropsManager.update(viewDescriptors,updates);}",
  };
  fn.__closure = {
    processColorsInProps: clampRGBA.processColorsInProps,
    processTransformOrigin: _mod1745.processTransformOrigin,
  };
  fn.__workletHash = 9641647469033;
  fn.__initData = obj4;
  const obj3 = {
    processColorsInProps: clampRGBA.processColorsInProps,
    processTransformOrigin: _mod1745.processTransformOrigin,
  };
}
const __initData = {
  code: "function checkUpdate_Pnpm_updatePropsTs4(tag){const checkUpdate_Pnpm_updatePropsTs4=this._recur;const{runOnJS,updatePropsOnReactJS,scheduledFrameIds}=this.__closure;const currentFrameTime=global.__frameTimestamp;const lastUpdateFrameTime=global.lastUpdateFrameTimeByTag[tag];if(!currentFrameTime||!lastUpdateFrameTime){return;}if(currentFrameTime-lastUpdateFrameTime>=20){runOnJS(updatePropsOnReactJS)(tag,global.lastUpdateByTag[tag]);global.lastUpdateByTag[tag]=undefined;return;}if(scheduledFrameIds[tag]){return;}scheduledFrameIds[tag]=requestAnimationFrame(function(){'worklet';scheduledFrameIds[tag]=undefined;checkUpdate_Pnpm_updatePropsTs4(tag);});}",
};
let closure_6 = {
  code: "function pnpm_updatePropsTs5(){const{scheduledFrameIds,tag,checkUpdate}=this.__closure;scheduledFrameIds[tag]=undefined;checkUpdate(tag);}",
};
module_1646 = module_1646_mod;
if (module_1646.isFabric()) {
  const fn4 = function l() {
    let closure_0 = [];
    const scheduledFrameIds = {};
    function checkUpdate(tag) {
      let __closure;
      checkUpdate = tag;
      const __frameTimestamp = checkUpdate.__frameTimestamp;
      if (__frameTimestamp) {
        if (checkUpdate.lastUpdateFrameTimeByTag[tag]) {
          if (__frameTimestamp - checkUpdate.lastUpdateFrameTimeByTag[tag] >= 20) {
            const obj2 = __closure(checkUpdate[5]);
            obj2.runOnJS(updatePropsOnReactJS)(tag, checkUpdate.lastUpdateByTag[tag]);
            checkUpdate.lastUpdateByTag[tag] = undefined;
          } else if (!scheduledFrameIds[tag]) {
            const _requestAnimationFrame = requestAnimationFrame;
            fn = function p() {
              obj[tag] = undefined;
              checkUpdate(tag);
            };
            __closure = { scheduledFrameIds, tag, checkUpdate };
            fn.__closure = __closure;
            fn.__workletHash = 7847593993789;
            fn.__initData = __initData;
            scheduledFrameIds[tag] = requestAnimationFrame(fn);
          }
        }
      }
    }
    let obj2 = { runOnJS: scheduledFrameIds(checkUpdate[5]).runOnJS, updatePropsOnReactJS, scheduledFrameIds };
    checkUpdate.__closure = obj2;
    checkUpdate.__workletHash = 1753947436463;
    checkUpdate.__initData = __initData;
    return {
      update(value, updates) {
        const self = this;
        value = value.value;
        const item = value.forEach((shadowNodeWrapper) => {
          const obj = { shadowNodeWrapper: shadowNodeWrapper.shadowNodeWrapper, updates, tag: shadowNodeWrapper.tag };
          updates.push(obj);
          if (1 === updates.length) {
            const _queueMicrotask = queueMicrotask;
            queueMicrotask(self.flush);
          }
        });
      },
      flush() {
        global._updatePropsFabric(closure_0);
        const item = closure_0.forEach((tag) => {
          checkUpdate(tag.tag);
        });
        closure_0.length = 0;
      },
    };
  };
  const obj6 = {
    code: "function pnpm_updatePropsTs3(){const{runOnJS,updatePropsOnReactJS}=this.__closure;const operations=[];const scheduledFrameIds={};function checkUpdate(tag){'worklet';const currentFrameTime=global.__frameTimestamp;const lastUpdateFrameTime=global.lastUpdateFrameTimeByTag[tag];if(!currentFrameTime||!lastUpdateFrameTime){return;}if(currentFrameTime-lastUpdateFrameTime>=20){runOnJS(updatePropsOnReactJS)(tag,global.lastUpdateByTag[tag]);global.lastUpdateByTag[tag]=undefined;return;}if(scheduledFrameIds[tag]){return;}scheduledFrameIds[tag]=requestAnimationFrame(function(){'worklet';scheduledFrameIds[tag]=undefined;checkUpdate(tag);});}return{update:function(viewDescriptors,updates){var _this=this;viewDescriptors.value.forEach(function(viewDescriptor){const tag=viewDescriptor.tag;operations.push({shadowNodeWrapper:viewDescriptor.shadowNodeWrapper,updates:updates,tag:tag});if(operations.length===1){queueMicrotask(_this.flush);}});},flush:function(){global._updatePropsFabric(operations);operations.forEach(function({tag:tag}){checkUpdate(tag);});operations.length=0;}};}",
  };
  fn4.__closure = { runOnJS: setupMicrotasks.runOnJS, updatePropsOnReactJS };
  fn4.__workletHash = 7650186665575;
  fn4.__initData = obj6;
  fn3 = fn4;
  const obj5 = { runOnJS: setupMicrotasks.runOnJS, updatePropsOnReactJS };
} else {
  fn3 = function c() {
    let closure_0 = [];
    let obj = {
      update(value, updates) {
        const self = this;
        value = value.value;
        const item = value.forEach((tag) => {
          let str;
          const obj = { tag: tag.tag, name: str, updates };
          str = tag.name;
          const push = updates.push;
          if (!str) {
            str = "RCTView";
          }
          push(obj);
          if (1 === updates.length) {
            const _queueMicrotask = queueMicrotask;
            queueMicrotask(self.flush);
          }
        });
      },
      flush() {
        global._updatePropsPaper(closure_0);
        closure_0.length = 0;
      },
    };
    return obj;
  };
  fn3.__closure = {};
  fn3.__workletHash = 8150032191515;
  fn3.__initData = {
    code: "function pnpm_updatePropsTs6(){const operations=[];return{update:function(viewDescriptors,updates){var _this=this;viewDescriptors.value.forEach(function(viewDescriptor){operations.push({tag:viewDescriptor.tag,name:viewDescriptor.name||'RCTView',updates:updates});if(operations.length===1){queueMicrotask(_this.flush);}});},flush:function(){global._updatePropsPaper(operations);operations.length=0;}};}",
  };
}
module_1646 = module_1646_mod;
if (module_1646.shouldBeUseWeb()) {
  function maybeThrowError() {
    const obj = require("01646__.js");
    if (!obj.isJest()) {
      const self = this;
      const self2 = this;
      const reanimatedError = new require("ReanimatedError").ReanimatedError(
        "`UpdatePropsManager` is not available on non-native platform.",
      );
      throw reanimatedError;
    }
  }
  const _Proxy = Proxy;
  let self = this;
  let self2 = this;
  const obj7 = {
    get: maybeThrowError,
    set() {
      if (typeof maybeThrowError === "function") {
        const obj = require("01646__.js");
        if (obj.isJest()) {
          return false;
        } else {
          const self = this;
          const self2 = this;
          const reanimatedError = new require("ReanimatedError").ReanimatedError(
            "`UpdatePropsManager` is not available on non-native platform.",
          );
          throw reanimatedError;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
  };
  const proxy = new Proxy({}, obj7);
  global.UpdatePropsManager = proxy;
} else {
  const obj8 = {
    code: "function pnpm_updatePropsTs7(){const{createUpdatePropsManager}=this.__closure;global.UpdatePropsManager=createUpdatePropsManager();}",
  };
  const _module3 = setupMicrotasks;
  const fn5 = function _() {
    global.UpdatePropsManager = fn3();
  };
  const obj9 = { createUpdatePropsManager: fn3 };
  fn5.__closure = obj9;
  fn5.__workletHash = 4015188324291;
  fn5.__initData = obj8;
  _module3.runOnUIImmediately(fn5)();
}

export default fn;
export const updatePropsJestWrapper = (arg0, arg1, current, c4) => {
  let closure_0 = arg1;
  const item = updatePropsOnReactJS.forEach((fn) => {
    fn(closure_0);
  });
  current = current.current;
  const obj = {};
  const merged = Object.assign(current.current.value);
  const merged1 = Object.assign(arg1);
  current.value = obj;
  fn(arg0, arg1);
};
