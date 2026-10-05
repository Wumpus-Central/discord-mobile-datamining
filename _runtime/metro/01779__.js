// === Module 1779: ? ===

// Module 1779
import react_native from "react-native" /* 17 */;
import setupMicrotasks from "setupMicrotasks" /* 1650 */;
import startMapper from "startMapper" /* 1687 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import module_1646 from "module_1646" /* 1646 */;

const require = globalThis.__r;
let _require, map, map1, set;

const Platform = react_native.Platform;
const __initData = { code: "function pnpm_ProgressTransitionManagerTs1(){const{viewTag,progressAnimation}=this.__closure;global.ProgressTransitionRegister.addProgressAnimation(viewTag,progressAnimation);}" };
const __initData2 = { code: "function pnpm_ProgressTransitionManagerTs2(){const{viewTag,isUnmounting}=this.__closure;global.ProgressTransitionRegister.removeProgressAnimation(viewTag,isUnmounting);}" };
const __initData3 = { code: "function pnpm_ProgressTransitionManagerTs3(event){const{lastProgressValue}=this.__closure;const progress=event.progress;if(progress===lastProgressValue){return;}lastProgressValue=progress;global.ProgressTransitionRegister.frame(progress);}" };
const __initData4 = { code: "function pnpm_ProgressTransitionManagerTs4(){global.ProgressTransitionRegister.onTransitionEnd();}" };
const __initData5 = { code: "function pnpm_ProgressTransitionManagerTs5(){global.ProgressTransitionRegister.onAndroidFinishTransitioning();}" };
class ProgressTransitionManager {
  constructor() {
    _classCallCheck(this, ProgressTransitionManager);
    this._sharedElementCount = 0;
    this._eventHandler = { isRegistered: false, onTransitionProgress: -1, onAppear: -1, onDisappear: -1, onSwipeDismiss: -1 };
  }
}
const entry = {
  key: "addProgressAnimation",
  value: function addProgressAnimation(viewTag, progressAnimation) {
    let closure_0 = viewTag;
    _require = progressAnimation;
    const fn = function o() {
      const ProgressTransitionRegister = global.ProgressTransitionRegister;
      ProgressTransitionRegister.addProgressAnimation(viewTag, progressAnimation);
    };
    fn.__closure = { viewTag, progressAnimation };
    fn.__workletHash = 1345064651573;
    fn.__initData = __initData;
    const obj = require("setupMicrotasks");
    obj.runOnUIImmediately(fn)();
    const result = this.registerEventHandlers();
  }
};
const items = [
  entry,
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
        const ProgressTransitionRegister = global.ProgressTransitionRegister;
        const result = ProgressTransitionRegister.removeProgressAnimation(viewTag, flag);
      };
      fn.__closure = { viewTag, isUnmounting: flag };
      fn.__workletHash = 3239143402257;
      fn.__initData = __initData2;
      const obj = flag(1650);
      obj.runOnUIImmediately(fn)();
    }
  },
  {
    key: "registerEventHandlers",
    value: function registerEventHandlers() {
      this._sharedElementCount = this._sharedElementCount + 1;
      if (!this._eventHandler.isRegistered) {
        this._eventHandler.isRegistered = true;
        let progress = -1;
        const fn = function o(progress) {
          progress = progress.progress;
          if (progress !== progress) {
            const ProgressTransitionRegister = global.ProgressTransitionRegister;
            ProgressTransitionRegister.frame(progress);
          }
        };
        const obj2 = { lastProgressValue: progress };
        fn.__closure = obj2;
        fn.__workletHash = 1831800135022;
        fn.__initData = __initData3;
        const obj = startMapper;
        this._eventHandler.onTransitionProgress = obj.registerEventHandler(fn, "onTransitionProgress");
        const fn2 = function s() {
          const ProgressTransitionRegister = progress.ProgressTransitionRegister;
          ProgressTransitionRegister.onTransitionEnd();
        };
        fn2.__closure = {};
        fn2.__workletHash = 10114828892519;
        fn2.__initData = __initData4;
        const obj3 = startMapper;
        this._eventHandler.onAppear = obj3.registerEventHandler(fn2, "onAppear");
        const fn3 = function n() {
          const ProgressTransitionRegister = progress.ProgressTransitionRegister;
          const result = ProgressTransitionRegister.onAndroidFinishTransitioning();
        };
        fn3.__closure = {};
        fn3.__workletHash = 13733013860161;
        fn3.__initData = __initData5;
        const obj4 = startMapper;
        this._eventHandler.onDisappear = obj4.registerEventHandler(fn3, "onFinishTransitioning");
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
          const obj = startMapper;
          const result = obj.unregisterEventHandler(_eventHandler.onTransitionProgress);
          this._eventHandler.onTransitionProgress = -1;
        }
        if (-1 !== this._eventHandler.onAppear) {
          const obj2 = startMapper;
          const result1 = obj2.unregisterEventHandler(_eventHandler.onAppear);
          this._eventHandler.onAppear = -1;
        }
        if (-1 !== this._eventHandler.onDisappear) {
          const obj3 = startMapper;
          const result2 = obj3.unregisterEventHandler(_eventHandler.onDisappear);
          this._eventHandler.onDisappear = -1;
        }
        if (-1 !== this._eventHandler.onSwipeDismiss) {
          const obj4 = startMapper;
          const result3 = obj4.unregisterEventHandler(_eventHandler.onSwipeDismiss);
          this._eventHandler.onSwipeDismiss = -1;
        }
      }
    }
  }
];
function createProgressTransitionRegister() {
  map = new Map();
  map1 = new Map();
  set = new Set();
  const set1 = new Set();
  let c4 = false;
  let c5 = false;
  const obj = {
    addProgressAnimation(arg0, arg1) {
      const tmp = set.size > 0 && !map.has(arg0);
      if (tmp) {
        c5 = false;
      }
      const result = map.set(arg0, arg1);
    },
    removeProgressAnimation(arg0, arg1) {
      if (set.size > 0) {
        c5 = false;
      }
      const tmp = arg1;
      if (tmp) {
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
        let value = map.get(item10008);
        if (value) {
          let tmp4Result = tmp4(item10008, map1.get(item10008), arg0);
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
        const tmp4 = c4;
        if (tmp4) {
          c4 = false;
          c5 = false;
        } else {
          for (const item10012 of set) {
            let _notifyAboutEndResult = global._notifyAboutEnd(item10012, flag);
            continue;
          }
          set.clear();
          const tmp11 = c5;
          if (!tmp11) {
            map1.clear();
            if (set1.size > 0) {
              for (const item10030 of set1) {
                let deleteResult = map.delete(item10030);
                let _notifyAboutEndResult1 = global._notifyAboutEnd(item10030, flag);
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
const importDefaultResultResult = _createClass(ProgressTransitionManager, items);
if (module_1646.shouldBeUseWeb()) {
  function maybeThrowError() {
    const obj = require("module_1646");
    if (!obj.isJest()) {
      const self = this;
      const self2 = this;
      const reanimatedError = new require("ReanimatedError").ReanimatedError("`ProgressTransitionRegister` is not available on non-native platform.");
      throw reanimatedError;
    }
  }
  const _Proxy = Proxy;
  let obj = {
    get: maybeThrowError,
    set() {
        if (typeof maybeThrowError === "function") {
          const obj = require("module_1646");
          if (obj.isJest()) {
            return false;
          } else {
            const self = this;
            const self2 = this;
            const reanimatedError = new require("ReanimatedError").ReanimatedError("`ProgressTransitionRegister` is not available on non-native platform.");
            throw reanimatedError;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
  };
  let self = this;
  let self2 = this;
  let tmp5 = obj;
  const proxy = new Proxy({}, obj);
  global.ProgressTransitionRegister = proxy;
} else {
  let obj2 = { code: "function pnpm_ProgressTransitionManagerTs9(){const{createProgressTransitionRegister}=this.__closure;global.ProgressTransitionRegister=createProgressTransitionRegister();}" };
  const _module1 = setupMicrotasks;
  let fn = function n() {
    let set1;
    if (typeof createProgressTransitionRegister === "function") {
      const _Map = Map;
      const self = this;
      const self2 = this;
      new Map();
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      new Map();
      const _Set = Set;
      const self5 = this;
      const self6 = this;
      new Set();
      const _Set2 = Set;
      const self7 = this;
      const self8 = this;
      new Set();
      let c4 = false;
      let c5 = false;
      const ProgressTransitionRegister = {
        addProgressAnimation(arg0, arg1) {
            const tmp = set.size > 0 && !map.has(arg0);
            if (tmp) {
              c5 = false;
            }
            const result = map.set(arg0, arg1);
          },
        removeProgressAnimation(arg0, arg1) {
            if (set.size > 0) {
              c5 = false;
            }
            const tmp = arg1;
            if (tmp) {
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
              let value = map.get(item10008);
              if (value) {
                let tmp4Result = tmp4(item10008, map1.get(item10008), arg0);
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
              const tmp4 = c4;
              if (tmp4) {
                c4 = false;
                c5 = false;
              } else {
                for (const item10012 of set) {
                  let _notifyAboutEndResult = global._notifyAboutEnd(item10012, flag);
                  continue;
                }
                set.clear();
                const tmp11 = c5;
                if (!tmp11) {
                  map1.clear();
                  if (set1.size > 0) {
                    for (const item10030 of set1) {
                      let deleteResult = map.delete(item10030);
                      let _notifyAboutEndResult1 = global._notifyAboutEnd(item10030, flag);
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
  let obj3 = { createProgressTransitionRegister };
  fn.__closure = obj3;
  fn.__workletHash = 1488439266980;
  fn.__initData = obj2;
  let tmp4 = _module1.runOnUIImmediately(fn)();
}
const ProgressTransitionManager_export = importDefaultResultResult;

export { ProgressTransitionManager_export as ProgressTransitionManager };