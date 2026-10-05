// _runtime/00071_defineLazyObjectProperty.js
let closure_3;

let closure_4 = [
  "createNode",
  "cloneNode",
  "cloneNodeWithNewChildren",
  "cloneNodeWithNewProps",
  "cloneNodeWithNewChildrenAndProps",
  "createChildSet",
  "appendChild",
  "appendChildToSet",
  "completeRoot",
  "measure",
  "measureInWindow",
  "measureLayout",
  "configureNextLayoutAnimation",
  "sendAccessibilityEvent",
  "findShadowNodeByTag_DEPRECATED",
  "setNativeProps",
  "dispatchCommand",
  "compareDocumentPosition",
  "getBoundingClientRect",
  "setIsJSResponder",
  "unstable_DefaultEventPriority",
  "unstable_DiscreteEventPriority",
  "unstable_ContinuousEventPriority",
  "unstable_IdleEventPriority",
  "unstable_getCurrentEventPriority",
];

export const getFabricUIManager = function getFabricUIManager() {
  function createProxyWithCachedProperties(nativeFabricUIManager, arg1) {
    let closure_0 = nativeFabricUIManager;
    let obj = Object.create(nativeFabricUIManager);
    function _loop(iter) {
      obj = {
        get() {
          return iter[iter];
        },
      };
      obj(closure_1_2[0])(obj, iter, obj);
    }
    const iter = arg1[Symbol.iterator]();
    while (iter !== undefined) {
      let _loopResult = _loop(iter.next());
      continue;
    }
    return obj;
  }
  const tmp = null == closure_3 && null != global.nativeFabricUIManager;
  if (tmp) {
    closure_3 = createProxyWithCachedProperties(global.nativeFabricUIManager, closure_4);
  }
  return closure_3;
};
