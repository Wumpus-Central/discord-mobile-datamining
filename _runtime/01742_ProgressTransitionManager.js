// _runtime/01742_ProgressTransitionManager.js
import _classCallCheck from "_classCallCheck";
import { Platform } from "get ActivityIndicator";
import importDefaultResult from "_createClass";
import isJest from "isJest";
import { isJest } from "01609_isJest.js";
import { runWorkletOnJS } from "01613_runWorkletOnJS.js";
import { isReanimated3 } from "01650_isReanimated3.js";

const ProgressTransitionManager = global;
const require = arg1;
let closure_4 = { code: "function pnpm_ProgressTransitionManagerTs1(){const{viewTag,progressAnimation}=this.__closure;global.ProgressTransitionRegister.addProgressAnimation(viewTag,progressAnimation);}" };
let closure_5 = { code: "function pnpm_ProgressTransitionManagerTs2(){const{viewTag,isUnmounting}=this.__closure;global.ProgressTransitionRegister.removeProgressAnimation(viewTag,isUnmounting);}" };
let closure_6 = { code: "function pnpm_ProgressTransitionManagerTs3(event){const{lastProgressValue}=this.__closure;const progress=event.progress;if(progress===lastProgressValue){return;}lastProgressValue=progress;global.ProgressTransitionRegister.frame(progress);}" };
let closure_7 = { code: "function pnpm_ProgressTransitionManagerTs4(){global.ProgressTransitionRegister.onTransitionEnd();}" };
let closure_8 = { code: "function pnpm_ProgressTransitionManagerTs5(){global.ProgressTransitionRegister.onAndroidFinishTransitioning();}" };
class ProgressTransitionManager {
  constructor() {
    tmp = outer1_3(this, ProgressTransitionManager);
    this._sharedElementCount = 0;
    this._eventHandler = { isRegistered: false, onTransitionProgress: -1, onAppear: -1, onDisappear: -1, onSwipeDismiss: -1 };
    return;
  }
}
let obj = {
  key: "addProgressAnimation",
  value: function addProgressAnimation(viewTag, progressAnimation) {
    let closure_0 = viewTag;
    const _require = progressAnimation;
    const fn = function o() {
      const ProgressTransitionRegister = viewTag.ProgressTransitionRegister;
      ProgressTransitionRegister.addProgressAnimation(viewTag, closure_1);
    };
    fn.__closure = { viewTag, progressAnimation };
    fn.__workletHash = 1345064651573;
    fn.__initData = closure_4;
    _runWorkletOnJS.runOnUIImmediately(fn)();
    const result = this.registerEventHandlers();
  }
};
const items = [
  obj,
  {
    key: "removeProgressAnimation",
    value: function removeProgressAnimation(viewTag) {
      let closure_0 = viewTag;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      let result = this.unregisterEventHandlers();
      const fn = function o() {
        const ProgressTransitionRegister = viewTag.ProgressTransitionRegister;
        const result = ProgressTransitionRegister.removeProgressAnimation(viewTag, flag);
      };
      fn.__closure = { viewTag, isUnmounting: flag };
      fn.__workletHash = 3239143402257;
      fn.__initData = closure_5;
      flag(1613).runOnUIImmediately(fn)();
    }
  },
  {
    key: "registerEventHandlers",
    value: function registerEventHandlers() {
      this._sharedElementCount = this._sharedElementCount + 1;
      if (!this._eventHandler.isRegistered) {
        _eventHandler.isRegistered = true;
        let c0 = -1;
        let obj = isReanimated3 /* isReanimated3 */;
        const fn = function o(progress) {
          progress = progress.progress;
          if (progress !== progress) {
            const ProgressTransitionRegister = v1.ProgressTransitionRegister;
            ProgressTransitionRegister.frame(progress);
          }
        };
        obj = { lastProgressValue: null };
        obj[0] = c0;
        fn.__closure = obj;
        fn.__workletHash = 1831800135022;
        fn.__initData = closure_6;
        _eventHandler.onTransitionProgress = obj.registerEventHandler(fn, "onTransitionProgress");
        const fn2 = function s() {
          const ProgressTransitionRegister = v1.ProgressTransitionRegister;
          ProgressTransitionRegister.onTransitionEnd();
        };
        fn2.__closure = {};
        fn2.__workletHash = 10114828892519;
        fn2.__initData = closure_7;
        _eventHandler.onAppear = isReanimated3 /* isReanimated3 */.registerEventHandler(fn2, "onAppear");
        const obj3 = isReanimated3 /* isReanimated3 */;
        const fn3 = function n() {
          const ProgressTransitionRegister = v1.ProgressTransitionRegister;
          const result = ProgressTransitionRegister.onAndroidFinishTransitioning();
        };
        fn3.__closure = {};
        fn3.__workletHash = 13733013860161;
        fn3.__initData = closure_8;
        _eventHandler.onDisappear = isReanimated3 /* isReanimated3 */.registerEventHandler(fn3, "onFinishTransitioning");
        const obj4 = isReanimated3 /* isReanimated3 */;
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
          const result = isReanimated3 /* isReanimated3 */.unregisterEventHandler(_eventHandler.onTransitionProgress);
          _eventHandler.onTransitionProgress = -1;
          const obj = isReanimated3 /* isReanimated3 */;
        }
        if (-1 !== this._eventHandler.onAppear) {
          const result1 = isReanimated3 /* isReanimated3 */.unregisterEventHandler(_eventHandler.onAppear);
          _eventHandler.onAppear = -1;
          const obj2 = isReanimated3 /* isReanimated3 */;
        }
        if (-1 !== this._eventHandler.onDisappear) {
          const result2 = isReanimated3 /* isReanimated3 */.unregisterEventHandler(_eventHandler.onDisappear);
          _eventHandler.onDisappear = -1;
          const obj3 = isReanimated3 /* isReanimated3 */;
        }
        if (-1 !== this._eventHandler.onSwipeDismiss) {
          const result3 = isReanimated3 /* isReanimated3 */.unregisterEventHandler(_eventHandler.onSwipeDismiss);
          _eventHandler.onSwipeDismiss = -1;
          const obj4 = isReanimated3 /* isReanimated3 */;
        }
      }
    }
  }
];
function createProgressTransitionRegister() {
  const map = new Map();
  const map1 = new Map();
  const set = new Set();
  const set1 = new Set();
  let c4 = false;
  let c5 = false;
  const obj = {
    addProgressAnimation(arg0, arg1) {
      let tmp = set.size > 0;
      if (tmp) {
        tmp = !map.has(arg0);
      }
      if (tmp) {
        let c5 = false;
      }
      const result = map.set(arg0, arg1);
    },
    removeProgressAnimation(arg0, arg1) {
      if (set.size > 0) {
        let c5 = false;
      }
      if (arg1) {
        set1.add(arg0);
      } else {
        map.delete(arg0);
      }
    },
    onTransitionStart(arg0, arg1) {
      let closure_4 = c5;
      const result = map1.set(arg0, arg1);
      set.add(arg0);
      obj.frame(0);
    },
    frame(arg0) {
      for (const item10008 of set) {
        let tmp = item10008;
        let tmp2 = map;
        let value = map.get(item10008);
        if (value) {
          let tmp5 = value;
          let tmp6 = item10008;
          let tmp7 = map1;
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
          let c5 = false;
        } else {
          for (const item10012 of tmp) {
            let tmp7 = map;
            let _notifyAboutEndResult = map._notifyAboutEnd(item10012, flag);
            continue;
          }
          set.clear();
          if (!c5) {
            map1.clear();
            if (set1.size > 0) {
              for (const item10030 of tmp14) {
                let tmp17 = map;
                let deleteResult = map.delete(item10030);
                let tmp19 = map;
                let _notifyAboutEndResult1 = map._notifyAboutEnd(item10030, flag);
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
if (isJest.shouldBeUseWeb()) {
  function maybeThrowError() {
    if (!obj.isJest()) {
      const reanimatedError = new tmp(1617).ReanimatedError("`ProgressTransitionRegister` is not available on non-native platform.");
      throw reanimatedError;
    }
    obj = isJest /* isJest */;
    tmp = require;
  }
  const _Proxy = Proxy;
  obj = { get: null, set: null };
  obj[0] = maybeThrowError;
  obj[1] = function set() {
    if (typeof maybeThrowError !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (obj.isJest()) {
      return false;
    } else {
      const reanimatedError = new tmp(1617).ReanimatedError("`ProgressTransitionRegister` is not available on non-native platform.");
      throw reanimatedError;
    }
    obj = isJest /* isJest */;
    tmp = require;
  };
  const proxy = new Proxy({}, obj);
  global.ProgressTransitionRegister = proxy;
} else {
  obj = { code: "function pnpm_ProgressTransitionManagerTs9(){const{createProgressTransitionRegister}=this.__closure;global.ProgressTransitionRegister=createProgressTransitionRegister();}" };
  let fn = function n() {
    if (typeof createProgressTransitionRegister !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const map = new Map();
    const map1 = new Map();
    const set = new Set();
    const set1 = new Set();
    let c4 = false;
    let c5 = false;
    const obj = {
      addProgressAnimation(arg0, arg1) {
        let tmp = set.size > 0;
        if (tmp) {
          tmp = !map.has(arg0);
        }
        if (tmp) {
          let c5 = false;
        }
        const result = map.set(arg0, arg1);
      },
      removeProgressAnimation(arg0, arg1) {
        if (set.size > 0) {
          let c5 = false;
        }
        if (arg1) {
          set1.add(arg0);
        } else {
          map.delete(arg0);
        }
      },
      onTransitionStart(arg0, arg1) {
        let closure_4 = c5;
        const result = map1.set(arg0, arg1);
        set.add(arg0);
        obj.frame(0);
      },
      frame(arg0) {
        for (const item10008 of set) {
          let tmp = item10008;
          let tmp2 = map;
          let value = map.get(item10008);
          if (value) {
            let tmp5 = value;
            let tmp6 = item10008;
            let tmp7 = map1;
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
            let c5 = false;
          } else {
            for (const item10012 of tmp) {
              let tmp7 = map;
              let _notifyAboutEndResult = map._notifyAboutEnd(item10012, flag);
              continue;
            }
            set.clear();
            if (!c5) {
              map1.clear();
              if (set1.size > 0) {
                for (const item10030 of tmp14) {
                  let tmp17 = map;
                  let deleteResult = map.delete(item10030);
                  let tmp19 = map;
                  let _notifyAboutEndResult1 = map._notifyAboutEnd(item10030, flag);
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
    map.ProgressTransitionRegister = obj;
  };
  isJest = { createProgressTransitionRegister: null };
  isJest[0] = createProgressTransitionRegister;
  fn.__closure = isJest;
  fn.__workletHash = 1488439266980;
  fn.__initData = obj;
  require("runWorkletOnJS").runOnUIImmediately(fn)();
  let obj4 = require("runWorkletOnJS");
}

export const ProgressTransitionManager = require("_createClass")(ProgressTransitionManager, items);