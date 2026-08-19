// === Module 1755: updatePropsOnReactJS ===

// Module 1755 (updatePropsOnReactJS)
import runWorkletOnJS from "runWorkletOnJS" /* 1661 */;
import _makeShareableClone from "_makeShareableClone" /* 1664 */;
import t from "t" /* 1665 */;
import call from "call" /* 1697 */;
import validateTransformOrigin from "validateTransformOrigin" /* 1756 */;
import map from "map" /* 1757 */;
import isJest from "isJest" /* 1657 */;

function updatePropsOnReactJS(arg0, arg1) {
  const ComponentRegistry = map.ComponentRegistry;
  const component = ComponentRegistry.getComponent(arg0);
  if (component) {
    const result = component._updateReanimatedProps(arg1);
  }
}
if (isJest.shouldBeUseWeb()) {
  const fn2 = function o(value) {
    closure_0 = arg1;
    closure_1 = arg2;
    value = value.value;
    if (value != null) {
      const item = value.forEach((item, index) => {
        callback(dependencyMap[1])._updatePropsJS(closure_0, item.tag, callback);
      });
    }
  };
  let obj = { code: "function pnpm_updatePropsTs1(viewDescriptors,updates,isAnimatedProps){const{_updatePropsJS}=this.__closure;var _viewDescriptors$valu;(_viewDescriptors$valu=viewDescriptors.value)===null||_viewDescriptors$valu===void 0||_viewDescriptors$valu.forEach(function(viewDescriptor){const component=viewDescriptor.tag;_updatePropsJS(updates,component,isAnimatedProps);});}" };
  obj[0] = _makeShareableClone._updatePropsJS;
  fn2.__closure = obj;
  fn2.__workletHash = 17381979125683;
  fn2.__initData = obj;
  let fn = fn2;
} else {
  fn = function s(value, transformOrigin) {
    const _global = transformOrigin;
    value = value.value;
    const item = value.forEach((item, index) => {
      let obj = transformOrigin.lastUpdateByTag[item.tag];
      if (obj == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(transformOrigin);
      transformOrigin.lastUpdateByTag[item.tag] = obj;
      transformOrigin.lastUpdateFrameTimeByTag[item.tag] = transformOrigin.__frameTimestamp;
    });
    call.processColorsInProps(transformOrigin);
    if ("transformOrigin" in transformOrigin) {
      transformOrigin.transformOrigin = validateTransformOrigin.processTransformOrigin(transformOrigin.transformOrigin);
      const tmp2Result = validateTransformOrigin;
    }
    const UpdatePropsManager = _global.UpdatePropsManager;
    UpdatePropsManager.update(value, transformOrigin);
  };
  const obj1 = { processColorsInProps: null, processTransformOrigin: null };
  obj1[0] = call.processColorsInProps;
  obj1[1] = validateTransformOrigin.processTransformOrigin;
  fn.__closure = obj1;
  fn.__workletHash = 9641647469033;
  fn.__initData = { code: "function pnpm_updatePropsTs2(viewDescriptors,updates){const{processColorsInProps,processTransformOrigin}=this.__closure;viewDescriptors.value.forEach(function(viewDescriptor){var _global$lastUpdateByT;const prevState=(_global$lastUpdateByT=global.lastUpdateByTag[viewDescriptor.tag])!==null&&_global$lastUpdateByT!==void 0?_global$lastUpdateByT:{};global.lastUpdateByTag[viewDescriptor.tag]={...prevState,...updates};global.lastUpdateFrameTimeByTag[viewDescriptor.tag]=global.__frameTimestamp;});processColorsInProps(updates);if('transformOrigin'in updates){updates.transformOrigin=processTransformOrigin(updates.transformOrigin);}global.UpdatePropsManager.update(viewDescriptors,updates);}" };
}
let closure_5 = { code: "function checkUpdate_Pnpm_updatePropsTs4(tag){const checkUpdate_Pnpm_updatePropsTs4=this._recur;const{runOnJS,updatePropsOnReactJS,scheduledFrameIds}=this.__closure;const currentFrameTime=global.__frameTimestamp;const lastUpdateFrameTime=global.lastUpdateFrameTimeByTag[tag];if(!currentFrameTime||!lastUpdateFrameTime){return;}if(currentFrameTime-lastUpdateFrameTime>=20){runOnJS(updatePropsOnReactJS)(tag,global.lastUpdateByTag[tag]);global.lastUpdateByTag[tag]=undefined;return;}if(scheduledFrameIds[tag]){return;}scheduledFrameIds[tag]=requestAnimationFrame(function(){'worklet';scheduledFrameIds[tag]=undefined;checkUpdate_Pnpm_updatePropsTs4(tag);});}" };
let closure_6 = { code: "function pnpm_updatePropsTs5(){const{scheduledFrameIds,tag,checkUpdate}=this.__closure;scheduledFrameIds[tag]=undefined;checkUpdate(tag);}" };
if (isJest.isFabric()) {
  const fn4 = function l() {
    let obj = {};
    function checkUpdate(arg0) {
      closure_0 = arg0;
      const __frameTimestamp = global.__frameTimestamp;
      if (__frameTimestamp) {
        if (tmp2) {
          if (__frameTimestamp - tmp2 >= 20) {
            runWorkletOnJS.runOnJS(updatePropsOnReactJS)(arg0, global.lastUpdateByTag[arg0]);
            global.lastUpdateByTag[arg0] = undefined;
          } else if (!obj[arg0]) {
            const _requestAnimationFrame = requestAnimationFrame;
            fn = function p() {
              obj[callback] = undefined;
              callback(callback);
            };
            obj = { scheduledFrameIds: null, tag: null, checkUpdate: null };
            obj[0] = tmp3;
            obj[1] = arg0;
            obj[2] = closure_0;
            fn.__closure = obj;
            fn.__workletHash = 7847593993789;
            fn.__initData = closure_6;
            tmp3[arg0] = requestAnimationFrame(fn);
          }
        }
      }
    }
    obj = { runOnJS: obj(checkUpdate[5]).runOnJS, updatePropsOnReactJS, scheduledFrameIds: obj };
    checkUpdate.__closure = obj;
    checkUpdate.__workletHash = 1753947436463;
    checkUpdate.__initData = closure_5;
    obj = {
      update(value) {
        const self = this;
        closure_0 = arg1;
        value = value.value;
        const item = value.forEach((item, index) => {
          arr = arr.push({ shadowNodeWrapper: item.shadowNodeWrapper, updates: arr, tag: item.tag });
          if (1 === arr.length) {
            const _queueMicrotask = queueMicrotask;
            queueMicrotask(self.flush);
          }
        });
      },
      flush() {
        checkUpdate._updatePropsFabric(checkUpdate);
        const item = checkUpdate.forEach((item, index) => {
          callback(item.tag);
        });
        checkUpdate.length = 0;
      }
    };
    return obj;
  };
  const obj3 = { runOnJS: null, updatePropsOnReactJS: null };
  obj3[0] = runWorkletOnJS.runOnJS;
  obj3[1] = updatePropsOnReactJS;
  fn4.__closure = obj3;
  fn4.__workletHash = 7650186665575;
  fn4.__initData = { code: "function pnpm_updatePropsTs3(){const{runOnJS,updatePropsOnReactJS}=this.__closure;const operations=[];const scheduledFrameIds={};function checkUpdate(tag){'worklet';const currentFrameTime=global.__frameTimestamp;const lastUpdateFrameTime=global.lastUpdateFrameTimeByTag[tag];if(!currentFrameTime||!lastUpdateFrameTime){return;}if(currentFrameTime-lastUpdateFrameTime>=20){runOnJS(updatePropsOnReactJS)(tag,global.lastUpdateByTag[tag]);global.lastUpdateByTag[tag]=undefined;return;}if(scheduledFrameIds[tag]){return;}scheduledFrameIds[tag]=requestAnimationFrame(function(){'worklet';scheduledFrameIds[tag]=undefined;checkUpdate(tag);});}return{update:function(viewDescriptors,updates){var _this=this;viewDescriptors.value.forEach(function(viewDescriptor){const tag=viewDescriptor.tag;operations.push({shadowNodeWrapper:viewDescriptor.shadowNodeWrapper,updates:updates,tag:tag});if(operations.length===1){queueMicrotask(_this.flush);}});},flush:function(){global._updatePropsFabric(operations);operations.forEach(function({tag:tag}){checkUpdate(tag);});operations.length=0;}};}" };
  let fn3 = fn4;
} else {
  fn3 = function c() {
    closure_0 = [];
    return {
      update(value) {
        const self = this;
        closure_0 = arg1;
        value = value.value;
        const item = value.forEach((item, index) => {
          const obj = { tag: item.tag, name: null, updates: null };
          let str = item.name;
          if (!str) {
            str = "RCTView";
          }
          obj[1] = str;
          obj[2] = arr;
          arr = arr.push(obj);
          if (1 === arr.length) {
            const _queueMicrotask = queueMicrotask;
            queueMicrotask(self.flush);
          }
        });
      },
      flush() {
        closure_0._updatePropsPaper(closure_0);
        closure_0.length = 0;
      }
    };
  };
  fn3.__closure = {};
  fn3.__workletHash = 8150032191515;
  fn3.__initData = { code: "function pnpm_updatePropsTs6(){const operations=[];return{update:function(viewDescriptors,updates){var _this=this;viewDescriptors.value.forEach(function(viewDescriptor){operations.push({tag:viewDescriptor.tag,name:viewDescriptor.name||'RCTView',updates:updates});if(operations.length===1){queueMicrotask(_this.flush);}});},flush:function(){global._updatePropsPaper(operations);operations.length=0;}};}" };
}
if (isJest.shouldBeUseWeb()) {
  function maybeThrowError() {
    if (!obj.isJest()) {
      const reanimatedError = new t.ReanimatedError("`UpdatePropsManager` is not available on non-native platform.");
      throw reanimatedError;
    }
    obj = isJest;
  }
  const _Proxy = Proxy;
  const obj5 = { get: null, set: null };
  obj5[0] = maybeThrowError;
  obj5[1] = function set() {
    if (typeof maybeThrowError !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (obj.isJest()) {
      return false;
    } else {
      const reanimatedError = new t.ReanimatedError("`UpdatePropsManager` is not available on non-native platform.");
      throw reanimatedError;
    }
    obj = isJest;
  };
  const proxy = new Proxy({}, obj5);
  global.UpdatePropsManager = proxy;
} else {
  const _module3 = runWorkletOnJS;
  const fn5 = function _() {
    global.UpdatePropsManager = fn3();
  };
  const obj7 = { createUpdatePropsManager: null };
  obj7[0] = fn3;
  fn5.__closure = obj7;
  fn5.__workletHash = 4015188324291;
  fn5.__initData = { code: "function pnpm_updatePropsTs7(){const{createUpdatePropsManager}=this.__closure;global.UpdatePropsManager=createUpdatePropsManager();}" };
  _module3.runOnUIImmediately(fn5)();
}

export default fn;
export const updatePropsJestWrapper = (closure_0, keys, current, c4) => {
  closure_0 = keys;
  const item = updatePropsOnReactJS.forEach((item, index) => {
    item(closure_0);
  });
  const merged = Object.assign(current.current.value);
  const merged1 = Object.assign(keys);
  current.current.value = {};
  fn(closure_0, keys);
};