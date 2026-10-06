// === Module 1797: ? ===

// Module 1797
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import module_1646_mod from "module_1646" /* 1646 */;

let c3;
let closure_4;
({ useRef: c3, useState: closure_4 } = react);
let module_1646 = module_1646_mod;
module_1646.shouldBeUseWeb();
module_1646 = module_1646_mod;
module_1646 = module_1646.isIOS();
if (!module_1646) {
  const _module3 = module_1646;
  module_1646 = _module3.isMacOS();
}
const __initData = { code: "function pnpm_useAnimatedRefTs1(){const{tagOrWrapper,viewName}=this.__closure;const f=function(){return tagOrWrapper.value;};if(viewName){f.viewName=viewName;}return f;}" };

export const useAnimatedRef = module_1646 ? (function useAnimatedRefWeb() {
  let fun;
  const f85186 = (getScrollableNode) => {
    let scrollableNode;
    if (getScrollableNode.getScrollableNode) {
      scrollableNode = getScrollableNode.getScrollableNode();
    } else {
      scrollableNode = getScrollableNode;
      if (getScrollableNode.getNativeScrollRef) {
        scrollableNode = getScrollableNode.getNativeScrollRef();
      }
    }
    return scrollableNode;
  };
  map = new Map();
  const current = fun(map).current;
  let closure_2 = fun(-1);
  const tmp2 = fun(null);
  if (!tmp2.current) {
    fun = function fun(map) {
      let tag;
      let closure_0 = map;
      if (closure_0) {
        ref.current = closure_0(map);
        fun.getTag = () => {
          const obj = first(first1[3]);
          return obj.findNodeHandle(map);
        };
        fun.current = map;
        const arr = tag;
        if (tag.size) {
          tag = undefined;
          if (fun != null) {
            const getTag = fun.getTag;
            if (getTag != null) {
              tag = getTag();
            }
          }
          if (tag == null) {
            tag = null;
          }
          const item = arr.forEach((fn, fn2) => {
            if (fn != null) {
              fn();
            }
            const result = current.set(fn2, fn2(tag));
          });
        }
      }
      return ref.current;
    };
    fun.observe = (fn) => {
      let closure_0 = fn;
      let tag;
      if (fun != null) {
        const getTag = fun.getTag;
        if (getTag != null) {
          tag = getTag();
        }
      }
      if (tag == null) {
        tag = null;
      }
      const result = current.set(fn, fn(tag));
      return () => {
        const value = current.get(fn);
        if (value != null) {
          value();
        }
        current.delete(fn);
      };
    };
    fun.current = null;
    tmp2.current = fun;
  }
  return tmp2.current;
}) : (function useAnimatedRefNative() {
  let fn;
  const viewName = _slicedToArray(closure_4(() => {
    let mutable = null;
    const obj = first(first1[2]);
    if (!obj.isFabric()) {
      mutable = null;
      if (module_1646) {
        const tmpResult = first(first1[4]);
        mutable = tmpResult.makeMutable(null);
      }
    }
    return mutable;
  }), 1)[0];
  const first1 = _slicedToArray(closure_4(() => {
    const obj = first(first1[4]);
    return obj.makeMutable(null);
  }), 1)[0];
  const f85189 = (viewConfig) => {
    let fn;
    const obj = first(first1[2]);
    if (obj.isFabric()) {
      fn = first(first1[5]).getShadowNodeWrapperFromRef;
    } else {
      fn = (getScrollableNode) => {
        let scrollableNode;
        const findNodeHandle = closure_1_0(current[3]).findNodeHandle;
        closure_1_0(current[3]);
        if (getScrollableNode.getScrollableNode) {
          scrollableNode = getScrollableNode.getScrollableNode();
        } else {
          scrollableNode = getScrollableNode;
          if (getScrollableNode.getNativeScrollRef) {
            scrollableNode = getScrollableNode.getNativeScrollRef();
          }
        }
        return findNodeHandle(scrollableNode);
      };
    }
    current.value = fn(viewConfig);
    if (f85189) {
      let str;
      if (viewConfig != null) {
        viewConfig = viewConfig.viewConfig;
        if (viewConfig != null) {
          str = viewConfig.uiViewClassName;
        }
      }
      if (!str) {
        str = "RCTView";
      }
      tmp3.value = str;
    }
    return current.value;
  };
  let fun;
  map = new Map();
  let current = closure_3(map).current;
  let closure_2 = closure_3(-1);
  const tmp4 = closure_3(null);
  if (!tmp4.current) {
    fun = function fun(map) {
      let tag;
      let closure_0 = map;
      if (closure_0) {
        ref.current = closure_0(map);
        fun.getTag = () => {
          const obj = first(first1[3]);
          return obj.findNodeHandle(map);
        };
        fun.current = map;
        const arr = tag;
        if (tag.size) {
          tag = undefined;
          if (fun != null) {
            const getTag = fun.getTag;
            if (getTag != null) {
              tag = getTag();
            }
          }
          if (tag == null) {
            tag = null;
          }
          const item = arr.forEach((fn, fn2) => {
            if (fn != null) {
              fn();
            }
            const result = current.set(fn2, fn2(tag));
          });
        }
      }
      return ref.current;
    };
    fun.observe = (fn) => {
      let closure_0 = fn;
      let tag;
      if (fun != null) {
        const getTag = fun.getTag;
        if (getTag != null) {
          tag = getTag();
        }
      }
      if (tag == null) {
        tag = null;
      }
      const result = current.set(fn, fn(tag));
      return () => {
        const value = current.get(fn);
        if (value != null) {
          value();
        }
        current.delete(fn);
      };
    };
    fun.current = null;
    tmp4.current = fun;
  }
  current = tmp4.current;
  const shareableMappingCache = viewName(first1[6]).shareableMappingCache;
  if (!shareableMappingCache.get(current)) {
    let obj = { __init: fn };
    fn = function n() {
      let value;
      const fn = function f() {
        return value.value;
      };
      if (viewName) {
        fn.viewName = viewName;
      }
      return fn;
    };
    const obj2 = { tagOrWrapper: first1, viewName };
    fn.__closure = obj2;
    fn.__workletHash = 5138727370224;
    fn.__initData = __initData;
    const tmp5Result = viewName(first1[7]);
    const shareableCloneRecursive = tmp5Result.makeShareableCloneRecursive(obj);
    const shareableMappingCache2 = tmp5(tmp6[6]).shareableMappingCache;
    let result = shareableMappingCache2.set(current, shareableCloneRecursive);
  }
  return current;
});