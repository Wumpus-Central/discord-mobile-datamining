// === Module 1804: prepareUIRegistry ===

// Module 1804 (prepareUIRegistry)
import setupMicrotasks from "setupMicrotasks" /* 1650 */;

const fn = function t() {
  let obj = {
    frameCallbackRegistry: new Map(),
    activeFrameCallbacks: new Set(),
    previousFrameTimestamp: null,
    nextCallId: 0,
    runCallbacks(nextCallId) {
      const self = this;
      let closure_1 = nextCallId;
      function loop(previousFrameTimestamp) {
        let timeSincePreviousFrame;
        if (timeSincePreviousFrame === self.nextCallId) {
          if (null === self.previousFrameTimestamp) {
            self.previousFrameTimestamp = previousFrameTimestamp;
          }
          timeSincePreviousFrame = previousFrameTimestamp - self.previousFrameTimestamp;
          const activeFrameCallbacks = self.activeFrameCallbacks;
          const item = activeFrameCallbacks.forEach((item) => {
            const frameCallbackRegistry = self.frameCallbackRegistry;
            const value = frameCallbackRegistry.get(item);
            const startTime = value.startTime;
            if (null === startTime) {
              value.startTime = previousFrameTimestamp;
              const obj = { timestamp: previousFrameTimestamp, timeSincePreviousFrame: null, timeSinceFirstFrame: 0 };
              value.callback(obj);
            } else {
              const obj2 = { timestamp: previousFrameTimestamp, timeSincePreviousFrame, timeSinceFirstFrame: previousFrameTimestamp - startTime };
              value.callback(obj2);
            }
          });
          if (self.activeFrameCallbacks.size > 0) {
            self.previousFrameTimestamp = previousFrameTimestamp;
            const _requestAnimationFrame = requestAnimationFrame;
            const animationFrame = requestAnimationFrame(previousFrameTimestamp);
          } else {
            self.previousFrameTimestamp = null;
          }
        }
      }
      const tmp = 1 === this.activeFrameCallbacks.size && nextCallId === this.nextCallId;
      if (tmp) {
        let _requestAnimationFrame = requestAnimationFrame;
        let animationFrame = requestAnimationFrame(loop);
      }
    },
    registerFrameCallback(callback, arg1) {
      const frameCallbackRegistry = this.frameCallbackRegistry;
      const obj = { callback, startTime: null };
      const result = frameCallbackRegistry.set(arg1, obj);
    },
    unregisterFrameCallback(arg0) {
      const result = this.manageStateFrameCallback(arg0, false);
      const frameCallbackRegistry = this.frameCallbackRegistry;
      frameCallbackRegistry.delete(arg0);
    },
    manageStateFrameCallback(arg0, arg1) {
      if (-1 !== arg0) {
        const self = this;
        const tmp5 = arg1;
        if (tmp5) {
          const activeFrameCallbacks2 = self.activeFrameCallbacks;
          activeFrameCallbacks2.add(arg0);
          self.runCallbacks(self.nextCallId);
        } else {
          const frameCallbackRegistry = self.frameCallbackRegistry;
          frameCallbackRegistry.get(arg0).startTime = null;
          const activeFrameCallbacks = self.activeFrameCallbacks;
          activeFrameCallbacks.delete(arg0);
          if (0 === self.activeFrameCallbacks.size) {
            self.nextCallId = self.nextCallId + 1;
          }
        }
      }
    }
  };
  new Map();
  global._frameCallbackRegistry = obj;
  new Set();
};
fn.__closure = {};
fn.__workletHash = 12487935997347;
fn.__initData = { code: "function pnpm_FrameCallbackRegistryUITs1(){const frameCallbackRegistry={frameCallbackRegistry:new Map(),activeFrameCallbacks:new Set(),previousFrameTimestamp:null,nextCallId:0,runCallbacks:function(callId){var _this=this;const loop=function(timestamp){if(callId!==_this.nextCallId){return;}if(_this.previousFrameTimestamp===null){_this.previousFrameTimestamp=timestamp;}const delta=timestamp-_this.previousFrameTimestamp;_this.activeFrameCallbacks.forEach(function(callbackId){const callbackDetails=_this.frameCallbackRegistry.get(callbackId);const{startTime:startTime}=callbackDetails;if(startTime===null){callbackDetails.startTime=timestamp;callbackDetails.callback({timestamp:timestamp,timeSincePreviousFrame:null,timeSinceFirstFrame:0});}else{callbackDetails.callback({timestamp:timestamp,timeSincePreviousFrame:delta,timeSinceFirstFrame:timestamp-startTime});}});if(_this.activeFrameCallbacks.size>0){_this.previousFrameTimestamp=timestamp;requestAnimationFrame(loop);}else{_this.previousFrameTimestamp=null;}};if(this.activeFrameCallbacks.size===1&&callId===this.nextCallId){requestAnimationFrame(loop);}},registerFrameCallback:function(callback,callbackId){this.frameCallbackRegistry.set(callbackId,{callback:callback,startTime:null});},unregisterFrameCallback:function(callbackId){this.manageStateFrameCallback(callbackId,false);this.frameCallbackRegistry.delete(callbackId);},manageStateFrameCallback:function(callbackId,state){if(callbackId===-1){return;}if(state){this.activeFrameCallbacks.add(callbackId);this.runCallbacks(this.nextCallId);}else{const callback=this.frameCallbackRegistry.get(callbackId);callback.startTime=null;this.activeFrameCallbacks.delete(callbackId);if(this.activeFrameCallbacks.size===0){this.nextCallId+=1;}}}};global._frameCallbackRegistry=frameCallbackRegistry;}" };

export const prepareUIRegistry = setupMicrotasks.runOnUIImmediately(fn);