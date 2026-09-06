// _runtime/01790_useAnimatedRef.js
import closure_2 from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";
import isJest from "01639_isJest.js";

const require = arg1;
({ useRef: c3, useState: c4 } = noop);
isJest = isJest.shouldBeUseWeb();
isJest = isJest.isIOS();
if (!isJest) {
  isJest = require("isJest").isMacOS();
  const obj3 = require("isJest");
}
let closure_6 = {
  code: "function pnpm_useAnimatedRefTs1(){const{tagOrWrapper,viewName}=this.__closure;const f=function(){return tagOrWrapper.value;};if(viewName){f.viewName=viewName;}return f;}",
};

export const useAnimatedRef = isJest
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
          const callback = map;
          if (map) {
            ref.current = callback(map);
            fun.getTag = () => f74133(current[3]).findNodeHandle(closure_0);
            fun.current = map;
            if (tag.size) {
              tag = undefined;
              if (tmp3 != null) {
                const getTag = tmp3.getTag;
                if (getTag != null) {
                  tag = getTag();
                }
              }
              if (tag == null) {
                tag = null;
              }
              const item = arr.forEach((arg0, arg1) => {
                if (arg0 != null) {
                  arg0();
                }
                const result = tag.set(arg1, arg1(tag));
              });
            }
            arr = tag;
          }
          return ref.current;
        };
        fun.observe = (arg0) => {
          closure_0 = arg0;
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
          const result = current.set(arg0, arg0(tag));
          return () => {
            const value = closure_1_1.get(closure_0);
            if (value != null) {
              value();
            }
            closure_1_1.delete(closure_0);
          };
        };
        fun.current = null;
        tmp2.current = fun;
      }
      return tmp2.current;
    }
  : function useAnimatedRefNative() {
      const first = callback(
        callback2(() => {
          let mutable = null;
          if (!obj.isFabric()) {
            mutable = null;
            if (closure_5) {
              mutable = f74133(current[4]).makeMutable(null);
              const tmpResult = f74133(current[4]);
            }
          }
          return mutable;
        }),
        1,
      )[0];
      let f74133 = first;
      const first1 = callback(
        callback2(() => f74133(current[4]).makeMutable(null)),
        1,
      )[0];
      let current = first1;
      f74133 = (viewConfig) => {
        if (obj.isFabric()) {
          let fn = f74133(current[5]).getShadowNodeWrapperFromRef;
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
            return callback(table[3]).findNodeHandle(scrollableNode);
          };
        }
        current.value = fn(viewConfig);
        if (f74133) {
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
      current = undefined;
      callback = undefined;
      let fun;
      current = fun(new Map()).current;
      callback = fun(-1);
      const tmp4 = fun(null);
      if (!tmp4.current) {
        fun = function fun(map) {
          const callback = map;
          if (map) {
            ref.current = callback(map);
            fun.getTag = () => f74133(current[3]).findNodeHandle(closure_0);
            fun.current = map;
            if (tag.size) {
              tag = undefined;
              if (tmp3 != null) {
                const getTag = tmp3.getTag;
                if (getTag != null) {
                  tag = getTag();
                }
              }
              if (tag == null) {
                tag = null;
              }
              const item = arr.forEach((arg0, arg1) => {
                if (arg0 != null) {
                  arg0();
                }
                const result = tag.set(arg1, arg1(tag));
              });
            }
            arr = tag;
          }
          return ref.current;
        };
        fun.observe = (arg0) => {
          closure_0 = arg0;
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
          const result = current.set(arg0, arg0(tag));
          return () => {
            const value = closure_1_1.get(closure_0);
            if (value != null) {
              value();
            }
            closure_1_1.delete(closure_0);
          };
        };
        fun.current = null;
        tmp4.current = fun;
      }
      current = tmp4.current;
      const shareableMappingCache = f74133(current[6]).shareableMappingCache;
      if (!shareableMappingCache.get(current)) {
        let obj = { __init: null };
        let fn = function n() {
          const fn = function f() {
            return value.value;
          };
          if (f74133) {
            fn.viewName = f74133;
          }
          return fn;
        };
        obj = { tagOrWrapper: null, viewName: null };
        obj[0] = first1;
        obj[1] = first;
        fn.__closure = obj;
        fn.__workletHash = 5138727370224;
        fn.__initData = closure_6;
        obj[0] = fn;
        const shareableCloneRecursive = tmp5(tmp6[7]).makeShareableCloneRecursive(obj);
        const shareableMappingCache2 = tmp5(tmp6[6]).shareableMappingCache;
        let result = shareableMappingCache2.set(current, shareableCloneRecursive);
        const tmp5Result = tmp5(tmp6[7]);
      }
      return current;
    };
