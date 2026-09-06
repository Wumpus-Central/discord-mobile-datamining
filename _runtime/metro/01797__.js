// === Module 1797: ? ===

// Module 1797
import runWorkletOnJS from "runWorkletOnJS" /* 1643 */;

const fn = function t() {
  let obj = { frameCallbackRegistry: new Map(), activeFrameCallbacks: null, previousFrameTimestamp: null, nextCallId: 0, runCallbacks: null, registerFrameCallback: null, unregisterFrameCallback: null, manageStateFrameCallback: null };
  const map = new Map();
  obj.activeFrameCallbacks = new Set();
  obj.runCallbacks = function runCallbacks(nextCallId) {
    const self = this;
    closure_1 = nextCallId;
    function loop(previousFrameTimestamp) {
      if (timeSincePreviousFrame === self.nextCallId) {
        if (null === tmp.previousFrameTimestamp) {
          tmp.previousFrameTimestamp = previousFrameTimestamp;
        }
        timeSincePreviousFrame = previousFrameTimestamp - tmp.previousFrameTimestamp;
        const item = tmp.activeFrameCallbacks.forEach((item) => {
          value = self.frameCallbackRegistry.get(item);
          const startTime = value.startTime;
          if (null === startTime) {
            value.startTime = previousFrameTimestamp;
            let obj = { timestamp: previousFrameTimestamp, timeSincePreviousFrame: null, timeSinceFirstFrame: 0 };
            value.callback(obj);
          } else {
            obj = { timestamp: previousFrameTimestamp, timeSincePreviousFrame, timeSinceFirstFrame: previousFrameTimestamp - startTime };
            value.callback(obj);
          }
        });
        if (tmp.activeFrameCallbacks.size > 0) {
          tmp.previousFrameTimestamp = previousFrameTimestamp;
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(previousFrameTimestamp);
        } else {
          tmp.previousFrameTimestamp = null;
        }
        const activeFrameCallbacks = tmp.activeFrameCallbacks;
      }
    }
    if (tmp) {
      let _requestAnimationFrame = requestAnimationFrame;
      let animationFrame = requestAnimationFrame(loop);
    }
  };
  obj.registerFrameCallback = function registerFrameCallback(callback, arg1) {
    const result = this.frameCallbackRegistry.set(arg1, { callback, startTime: null });
  };
  obj.unregisterFrameCallback = function unregisterFrameCallback(arg0) {
    const result = this.manageStateFrameCallback(arg0, false);
    this.frameCallbackRegistry.delete(arg0);
  };
  obj.manageStateFrameCallback = function manageStateFrameCallback(arg0, arg1) {
    if (-1 !== arg0) {
      const self = this;
      if (arg1) {
        self.activeFrameCallbacks.add(arg0);
        self.runCallbacks(self.nextCallId);
        const activeFrameCallbacks2 = self.activeFrameCallbacks;
      } else {
        self.frameCallbackRegistry.get(arg0).startTime = null;
        self.activeFrameCallbacks.delete(arg0);
        if (0 === self.activeFrameCallbacks.size) {
          self.nextCallId = self.nextCallId + 1;
        }
        const activeFrameCallbacks = self.activeFrameCallbacks;
        const frameCallbackRegistry = self.frameCallbackRegistry;
      }
    }
  };
  global._frameCallbackRegistry = obj;
};
fn.__closure = {};
fn.__workletHash = 12487935997347;
fn.__initData = { code: "function pnpm_FrameCallbackRegistryUITs1(){const frameCallbackRegistry={frameCallbackRegistry:new Map(),activeFrameCallbacks:new Set(),previousFrameTimestamp:null,nextCallId:0,runCallbacks:function(callId){var _this=this;const loop=function(timestamp){if(callId!==_this.nextCallId){return;}if(_this.previousFrameTimestamp===null){_this.previousFrameTimestamp=timestamp;}const delta=timestamp-_this.previousFrameTimestamp;_this.activeFrameCallbacks.forEach(function(callbackId){const callbackDetails=_this.frameCallbackRegistry.get(callbackId);const{startTime:startTime}=callbackDetails;if(startTime===null){callbackDetails.startTime=timestamp;callbackDetails.callback({timestamp:timestamp,timeSincePreviousFrame:null,timeSinceFirstFrame:0});}else{callbackDetails.callback({timestamp:timestamp,timeSincePreviousFrame:delta,timeSinceFirstFrame:timestamp-startTime});}});if(_this.activeFrameCallbacks.size>0){_this.previousFrameTimestamp=timestamp;requestAnimationFrame(loop);}else{_this.previousFrameTimestamp=null;}};if(this.activeFrameCallbacks.size===1&&callId===this.nextCallId){requestAnimationFrame(loop);}},registerFrameCallback:function(callback,callbackId){this.frameCallbackRegistry.set(callbackId,{callback:callback,startTime:null});},unregisterFrameCallback:function(callbackId){this.manageStateFrameCallback(callbackId,false);this.frameCallbackRegistry.delete(callbackId);},manageStateFrameCallback:function(callbackId,state){if(callbackId===-1){return;}if(state){this.activeFrameCallbacks.add(callbackId);this.runCallbacks(this.nextCallId);}else{const callback=this.frameCallbackRegistry.get(callbackId);callback.startTime=null;this.activeFrameCallbacks.delete(callbackId);if(this.activeFrameCallbacks.size===0){this.nextCallId+=1;}}}};global._frameCallbackRegistry=frameCallbackRegistry;}" };

export const prepareUIRegistry = runWorkletOnJS.runOnUIImmediately(fn);