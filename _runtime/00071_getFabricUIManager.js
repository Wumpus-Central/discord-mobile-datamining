// _runtime/00071_getFabricUIManager.js
const global = arg0;
const module = arg2;
const dependencyMap = arg6;
let closure_4 = ["createNode", "cloneNode", "cloneNodeWithNewChildren", "cloneNodeWithNewProps", "cloneNodeWithNewChildrenAndProps", "createChildSet", "appendChild", "appendChildToSet", "completeRoot", "measure", "measureInWindow", "measureLayout", "configureNextLayoutAnimation", "sendAccessibilityEvent", "findShadowNodeByTag_DEPRECATED", "setNativeProps", "dispatchCommand", "compareDocumentPosition", "getBoundingClientRect", "setIsJSResponder", "unstable_DefaultEventPriority", "unstable_DiscreteEventPriority", "unstable_ContinuousEventPriority", "unstable_IdleEventPriority", "unstable_getCurrentEventPriority"];
arg5.getFabricUIManager = function getFabricUIManager() {
  let tmp = null == closure_3;
  if (tmp) {
    tmp = null != global.nativeFabricUIManager;
  }
  if (tmp) {
    closure_3 = (function createProxyWithCachedProperties(nativeFabricUIManager, closure_4) {
      let closure_0 = nativeFabricUIManager;
      let obj = Object.create(nativeFabricUIManager);
      function _loop(iter) {
        let closure_0 = iter;
        const obj = {
          get() {
            return iter[iter];
          }
        };
        obj(outer1_2[0])(obj, iter, obj);
      }
      const iter = closure_4[Symbol.iterator]();
      while (iter !== undefined) {
        let _loopResult = _loop(iter.next());
        continue;
      }
      return obj;
    })(global.nativeFabricUIManager, closure_4);
  }
  return closure_3;
};