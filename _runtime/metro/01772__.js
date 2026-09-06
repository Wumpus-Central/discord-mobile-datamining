// === Module 1772: ? ===

// Module 1772
import runOnRuntime from "runOnRuntime" /* 1680 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const ProgressTransitionManager = global;
require = fn;
const Platform = fn(17).Platform;
const __initData = { code: "function pnpm_ProgressTransitionManagerTs1(){const{viewTag,progressAnimation}=this.__closure;global.ProgressTransitionRegister.addProgressAnimation(viewTag,progressAnimation);}" };
const __initData2 = { code: "function pnpm_ProgressTransitionManagerTs2(){const{viewTag,isUnmounting}=this.__closure;global.ProgressTransitionRegister.removeProgressAnimation(viewTag,isUnmounting);}" };
const __initData3 = { code: "function pnpm_ProgressTransitionManagerTs3(event){const{lastProgressValue}=this.__closure;const progress=event.progress;if(progress===lastProgressValue){return;}lastProgressValue=progress;global.ProgressTransitionRegister.frame(progress);}" };
const __initData4 = { code: "function pnpm_ProgressTransitionManagerTs4(){global.ProgressTransitionRegister.onTransitionEnd();}" };
const __initData5 = { code: "function pnpm_ProgressTransitionManagerTs5(){global.ProgressTransitionRegister.onAndroidFinishTransitioning();}" };
class ProgressTransitionManager {
  constructor() {
    tmp = closure_3(this, ProgressTransitionManager);
    this._sharedElementCount = 0;
    this._eventHandler = { isRegistered: false, onTransitionProgress: -1, onAppear: -1, onDisappear: -1, onSwipeDismiss: -1 };
    return;
  }
}
const entry = {
  key: "addProgressAnimation",
  value: function addProgressAnimation(viewTag, progressAnimation) {
    closure_0 = viewTag;
    _require = progressAnimation;
    const fn = function o() {
      const ProgressTransitionRegister = ProgressTransitionManager.ProgressTransitionRegister;
      ProgressTransitionRegister.addProgressAnimation(closure_0, closure_1);
    };
    fn.__closure = { viewTag, progressAnimation };
    fn.__workletHash = 1345064651573;
    fn.__initData = __initData;
    require("runWorkletOnJS").runOnUIImmediately(fn)();
    const result = this.registerEventHandlers();
  }
};
const items = [
  entry,
  {
    key: "removeProgressAnimation",
    value: function removeProgressAnimation(viewTag) {
      closure_0 = viewTag;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      let result = this.unregisterEventHandlers();
      const fn = function o() {
        const ProgressTransitionRegister = ProgressTransitionManager.ProgressTransitionRegister;
        const result = ProgressTransitionRegister.removeProgressAnimation(closure_0, flag);
      };
      fn.__closure = { viewTag, isUnmounting: flag };
      fn.__workletHash = 3239143402257;
      fn.__initData = __initData2;
      flag(1643).runOnUIImmediately(fn)();
    }
  },
  {
    key: "registerEventHandlers",
    value: function registerEventHandlers() {
      this._sharedElementCount = this._sharedElementCount + 1;
      if (!this._eventHandler.isRegistered) {
        _eventHandler.isRegistered = true;
        let progress = -1;
        const fn = function o(progress) {
          progress = progress.progress;
          if (progress !== progress) {
            const ProgressTransitionRegister = ProgressTransitionManager.ProgressTransitionRegister;
            ProgressTransitionRegister.frame(progress);
          }
        };
        const obj = { lastProgressValue: progress };
        fn.__closure = obj;
        fn.__workletHash = 1831800135022;
        fn.__initData = __initData3;
        _eventHandler.onTransitionProgress = obj.registerEventHandler(fn, "onTransitionProgress");
        const fn2 = function s() {
          const ProgressTransitionRegister = progress.ProgressTransitionRegister;
          ProgressTransitionRegister.onTransitionEnd();
        };
        fn2.__closure = {};
        fn2.__workletHash = 10114828892519;
        fn2.__initData = __initData4;
        _eventHandler.onAppear = runOnRuntime.registerEventHandler(fn2, "onAppear");
        const fn3 = function n() {
          const ProgressTransitionRegister = progress.ProgressTransitionRegister;
          const result = ProgressTransitionRegister.onAndroidFinishTransitioning();
        };
        fn3.__closure = {};
        fn3.__workletHash = 13733013860161;
        fn3.__initData = __initData5;
        _eventHandler.onDisappear = runOnRuntime.registerEventHandler(fn3, "onFinishTransitioning");
      }
    }
  },
  {
    key: "unregisterEventHandlers",
    value: function unregisterEventHandlers() {
      this._sharedElementCount = this._sharedElementCount - 1;
      if (0 === this._sharedElementCount) {
        this._eventHandler.isRegistered = false;
        if (-1 !== this._eventHandler.onTransitionProgress) {
          const result = runOnRuntime.unregisterEventHandler(_eventHandler.onTransitionProgress);
          _eventHandler.onTransitionProgress = -1;
        }
        if (-1 !== this._eventHandler.onAppear) {
          const result1 = runOnRuntime.unregisterEventHandler(_eventHandler.onAppear);
          _eventHandler.onAppear = -1;
        }
        if (-1 !== this._eventHandler.onDisappear) {
          const result2 = runOnRuntime.unregisterEventHandler(_eventHandler.onDisappear);
          _eventHandler.onDisappear = -1;
        }
        if (-1 !== this._eventHandler.onSwipeDismiss) {
          const result3 = runOnRuntime.unregisterEventHandler(_eventHandler.onSwipeDismiss);
          _eventHandler.onSwipeDismiss = -1;
        }
      }
    }
  }
];
function createProgressTransitionRegister() {
  const map = new Map();
  map1 = new Map();
  const set = new Set();
  const set1 = new Set();
  c4 = false;
  c5 = false;
  const obj = {
    addProgressAnimation(arg0, arg1) {
      let tmp = set.size > 0;
      if (tmp) {
        tmp = !map.has(arg0);
      }
      if (tmp) {
        c5 = false;
      }
      const result = map.set(arg0, arg1);
    },
    removeProgressAnimation(arg0, arg1) {
      if (set.size > 0) {
        c5 = false;
      }
      if (arg1) {
        set1.add(arg0);
      } else {
        map.delete(arg0);
      }
    },
    onTransitionStart(arg0, arg1) {
      c4 = c5;
      const result = map1.set(arg0, arg1);
      set.add(arg0);
      obj.frame(0);
    },
    frame(arg0) {
      for (const item10008 of set) {
        let tmp = item10008;
        value = map.get(item10008);
        if (value) {
          let tmp4Result = tmp4(tmp, map1.get(tmp), arg0);
        }
        continue;
      }
    },
    onAndroidFinishTransitioning() {
      if (set1.size > 0) {
        obj.onTransitionEnd();
      }
    },
    onTransitionEnd() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (0 !== set.size) {
        if (c4) {
          c4 = false;
          c5 = false;
        } else {
          for (const item10012 of tmp) {
            let _notifyAboutEndResult = ProgressTransitionManager._notifyAboutEnd(item10012, flag);
            continue;
          }
          set.clear();
          if (!c5) {
            map1.clear();
            if (set1.size > 0) {
              for (const item10030 of tmp14) {
                let deleteResult = map.delete(item10030);
                let _notifyAboutEndResult1 = ProgressTransitionManager._notifyAboutEnd(item10030, flag);
                continue;
              }
              set1.clear();
            }
          }
        }
      } else {
        set1.clear();
      }
    }
  };
  return obj;
}
createProgressTransitionRegister.__closure = { IS_ANDROID: true };
createProgressTransitionRegister.__workletHash = 2226368593346;
createProgressTransitionRegister.__initData = { code: "function createProgressTransitionRegister_Pnpm_ProgressTransitionManagerTs8(){const{IS_ANDROID}=this.__closure;const progressAnimations=new Map();const snapshots=new Map();const currentTransitions=new Set();const toRemove=new Set();let skipCleaning=false;let isTransitionRestart=false;const progressTransitionManager={addProgressAnimation:function(viewTag,progressAnimation){if(currentTransitions.size>0&&!progressAnimations.has(viewTag)){isTransitionRestart=!IS_ANDROID;}progressAnimations.set(viewTag,progressAnimation);},removeProgressAnimation:function(viewTag,isUnmounting){if(currentTransitions.size>0){isTransitionRestart=!IS_ANDROID;}if(isUnmounting){toRemove.add(viewTag);}else{progressAnimations.delete(viewTag);}},onTransitionStart:function(viewTag,snapshot){skipCleaning=isTransitionRestart;snapshots.set(viewTag,snapshot);currentTransitions.add(viewTag);progressTransitionManager.frame(0);},frame:function(progress){for(const viewTag of currentTransitions){const progressAnimation=progressAnimations.get(viewTag);if(!progressAnimation){continue;}const snapshot=snapshots.get(viewTag);progressAnimation(viewTag,snapshot,progress);}},onAndroidFinishTransitioning:function(){if(toRemove.size>0){progressTransitionManager.onTransitionEnd();}},onTransitionEnd:function(removeViews=false){if(currentTransitions.size===0){toRemove.clear();return;}if(skipCleaning){skipCleaning=false;isTransitionRestart=false;return;}for(const viewTag of currentTransitions){global._notifyAboutEnd(viewTag,removeViews);}currentTransitions.clear();if(isTransitionRestart){return;}snapshots.clear();if(toRemove.size>0){for(const viewTag of toRemove){progressAnimations.delete(viewTag);global._notifyAboutEnd(viewTag,removeViews);}toRemove.clear();}}};return progressTransitionManager;}" };
let module_1639 = fn(1639);
if (module_1639.shouldBeUseWeb()) {
  function maybeThrowError() {
    if (!obj.isJest()) {
      const reanimatedError = new tmp(1647).ReanimatedError("`ProgressTransitionRegister` is not available on non-native platform.");
      throw reanimatedError;
    }
    obj = require("module_1639");
    tmp = require;
  }
  const _Proxy = Proxy;
  let obj = {
    get: maybeThrowError,
    set() {
        if (typeof maybeThrowError === "function") {
          if (obj.isJest()) {
            return false;
          } else {
            const reanimatedError = new tmp(1647).ReanimatedError("`ProgressTransitionRegister` is not available on non-native platform.");
            throw reanimatedError;
          }
          obj = require("module_1639");
          tmp = require;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
  };
  const proxy = new Proxy({}, obj);
  global.ProgressTransitionRegister = proxy;
} else {
  obj = { code: "function pnpm_ProgressTransitionManagerTs9(){const{createProgressTransitionRegister}=this.__closure;global.ProgressTransitionRegister=createProgressTransitionRegister();}" };
  fn = function n() {
    if (typeof createProgressTransitionRegister === "function") {
      const _Map = Map;
      const map = new Map();
      const _Map2 = Map;
      map1 = new Map();
      const _Set = Set;
      const set = new Set();
      const _Set2 = Set;
      const set1 = new Set();
      c4 = false;
      c5 = false;
      const ProgressTransitionRegister = {
        addProgressAnimation(arg0, arg1) {
            let tmp = set.size > 0;
            if (tmp) {
              tmp = !map.has(arg0);
            }
            if (tmp) {
              c5 = false;
            }
            const result = map.set(arg0, arg1);
          },
        removeProgressAnimation(arg0, arg1) {
            if (set.size > 0) {
              c5 = false;
            }
            if (arg1) {
              set1.add(arg0);
            } else {
              map.delete(arg0);
            }
          },
        onTransitionStart(arg0, arg1) {
            c4 = c5;
            const result = map1.set(arg0, arg1);
            set.add(arg0);
            obj.frame(0);
          },
        frame(arg0) {
            for (const item10008 of set) {
              let tmp = item10008;
              value = map.get(item10008);
              if (value) {
                let tmp4Result = tmp4(tmp, map1.get(tmp), arg0);
              }
              continue;
            }
          },
        onAndroidFinishTransitioning() {
            if (set1.size > 0) {
              obj.onTransitionEnd();
            }
          },
        onTransitionEnd() {
            let flag = arg0;
            if (arg0 === undefined) {
              flag = false;
            }
            if (0 !== set.size) {
              if (c4) {
                c4 = false;
                c5 = false;
              } else {
                for (const item10012 of tmp) {
                  let _notifyAboutEndResult = ProgressTransitionManager._notifyAboutEnd(item10012, flag);
                  continue;
                }
                set.clear();
                if (!c5) {
                  map1.clear();
                  if (set1.size > 0) {
                    for (const item10030 of tmp14) {
                      let deleteResult = map.delete(item10030);
                      let _notifyAboutEndResult1 = ProgressTransitionManager._notifyAboutEnd(item10030, flag);
                      continue;
                    }
                    set1.clear();
                  }
                }
              }
            } else {
              set1.clear();
            }
          }
      };
      tmp.ProgressTransitionRegister = ProgressTransitionRegister;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  module_1639 = { createProgressTransitionRegister };
  fn.__closure = module_1639;
  fn.__workletHash = 1488439266980;
  fn.__initData = obj;
  fn(1643).runOnUIImmediately(fn)();
  let obj4 = fn(1643);
}

export const ProgressTransitionManager = _createClass(ProgressTransitionManager, items);