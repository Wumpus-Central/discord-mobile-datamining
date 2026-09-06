// _runtime/metro/01790__.js
import findHostInstance from "../01664_findHostInstance.js";
import findNodeHandle from "../01744_findNodeHandle.js";
import _slicedToArray from "00032__.js";

require = fn;
const noop = fn(19);
({ useRef: c3, useState: closure_4 } = noop);
let module_1639 = fn(1639);
module_1639.shouldBeUseWeb();
module_1639 = fn(1639);
module_1639 = module_1639.isIOS();
if (!module_1639) {
  module_1639 = fn(1639).isMacOS();
  const obj3 = fn(1639);
}
const __initData = {
  code: "function pnpm_useAnimatedRefTs1(){const{tagOrWrapper,viewName}=this.__closure;const f=function(){return tagOrWrapper.value;};if(viewName){f.viewName=viewName;}return f;}",
};

export const useAnimatedRef = module_1639
  ? function useAnimatedRefWeb() {
      const f74130 = (getScrollableNode) => {
        if (getScrollableNode.getScrollableNode) {
          let scrollableNode = getScrollableNode.getScrollableNode();
        } else {
          scrollableNode = getScrollableNode;
          if (getScrollableNode.getNativeScrollRef) {
            scrollableNode = getScrollableNode.getNativeScrollRef();
          }
        }
        return scrollableNode;
      };
      const current = fun(new Map()).current;
      closure_2 = fun(-1);
      const tmp2 = fun(null);
      if (!tmp2.current) {
        fun = function fun(map) {
          viewName = map;
          if (map) {
            ref.current = viewName(map);
            closure_3.getTag = () => findNodeHandle.findNodeHandle(closure_0);
            closure_3.current = map;
            if (tag.size) {
              tag = undefined;
              if (closure_3 != null) {
                const getTag = closure_3.getTag;
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
                const result = first1.set(fn2, fn2(tag));
              });
            }
            arr = tag;
          }
          return ref.current;
        };
        fun.observe = (fn) => {
          closure_0 = fn;
          let tag;
          if (closure_3 != null) {
            const getTag = closure_3.getTag;
            if (getTag != null) {
              tag = getTag();
            }
          }
          if (tag == null) {
            tag = null;
          }
          const result = first1.set(fn, fn(tag));
          return () => {
            value = first1.get(closure_0);
            if (value != null) {
              value();
            }
            first1.delete(closure_0);
          };
        };
        fun.current = null;
        tmp2.current = fun;
      }
      return tmp2.current;
    }
  : function useAnimatedRefNative() {
      let viewName = _slicedToArray(
        closure_4(() => {
          let mutable = null;
          if (!obj.isFabric()) {
            mutable = null;
            if (module_1639) {
              mutable = first(first1[4]).makeMutable(null);
              const tmpResult = first(first1[4]);
            }
          }
          return mutable;
        }),
        1,
      )[0];
      const first1 = _slicedToArray(
        closure_4(() => first(first1[4]).makeMutable(null)),
        1,
      )[0];
      closure_129_0 = (viewConfig) => {
        if (obj.isFabric()) {
          let fn = findHostInstance.getShadowNodeWrapperFromRef;
        } else {
          fn = (getScrollableNode) => {
            if (getScrollableNode.getScrollableNode) {
              let scrollableNode = getScrollableNode.getScrollableNode();
            } else {
              scrollableNode = getScrollableNode;
              if (getScrollableNode.getNativeScrollRef) {
                scrollableNode = getScrollableNode.getNativeScrollRef();
              }
            }
            return viewName(first1[3]).findNodeHandle(scrollableNode);
          };
        }
        first1.value = fn(viewConfig);
        if (first) {
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
        return first1.value;
      };
      closure_129_3 = undefined;
      const current2 = closure_3(new Map()).current;
      closure_129_2 = closure_3(-1);
      const tmp4 = closure_3(null);
      if (!tmp4.current) {
        function fun(map) {
          viewName = map;
          if (map) {
            ref.current = viewName(map);
            closure_3.getTag = () => findNodeHandle.findNodeHandle(closure_0);
            closure_3.current = map;
            if (tag.size) {
              tag = undefined;
              if (closure_3 != null) {
                const getTag = closure_3.getTag;
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
                const result = first1.set(fn2, fn2(tag));
              });
            }
            arr = tag;
          }
          return ref.current;
        }
        closure_129_3 = fun;
        fun.observe = (fn) => {
          closure_0 = fn;
          let tag;
          if (closure_3 != null) {
            const getTag = closure_3.getTag;
            if (getTag != null) {
              tag = getTag();
            }
          }
          if (tag == null) {
            tag = null;
          }
          const result = first1.set(fn, fn(tag));
          return () => {
            value = first1.get(closure_0);
            if (value != null) {
              value();
            }
            first1.delete(closure_0);
          };
        };
        fun.current = null;
        tmp4.current = fun;
      }
      const current = tmp4.current;
      const shareableMappingCache = viewName(first1[6]).shareableMappingCache;
      if (!shareableMappingCache.get(current)) {
        let obj = { __init: null };
        let fn = function n() {
          const fn = function f() {
            return value.value;
          };
          if (viewName) {
            fn.viewName = viewName;
          }
          return fn;
        };
        obj = { tagOrWrapper: first1, viewName };
        fn.__closure = obj;
        fn.__workletHash = 5138727370224;
        fn.__initData = __initData;
        obj.__init = fn;
        const shareableCloneRecursive = tmp5(tmp6[7]).makeShareableCloneRecursive(obj);
        const shareableMappingCache2 = tmp5(tmp6[6]).shareableMappingCache;
        let result = shareableMappingCache2.set(current, shareableCloneRecursive);
        const tmp5Result = tmp5(tmp6[7]);
      }
      return current;
    };
