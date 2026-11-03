// === Module 1704: findHostInstance ===

// Module 1704 (findHostInstance)
import ReactFabric from "ReactFabric" /* 116 */;

require = arg1;
const dependencyMap = arg6;

export function findHostInstance(_componentRef) {
  _componentRef = _componentRef._componentRef;
  let tmp;
  if (_componentRef) {
    let tmp2;
    if (_componentRef.__internalInstanceHandle) {
      if (_componentRef.__nativeTag) {
        if (_componentRef.__viewConfig) {
          tmp2 = _componentRef;
        }
      }
    }
    tmp = tmp2;
  }
  if (undefined !== tmp) {
    return tmp;
  } else {
    let tmp12Result;
    if (_componentRef) {
      const getNativeScrollRef = _componentRef.getNativeScrollRef;
      let nativeScrollRef;
      if (getNativeScrollRef != null) {
        nativeScrollRef = getNativeScrollRef();
      }
      if (!nativeScrollRef) {
        const getScrollableNode = _componentRef.getScrollableNode;
        let scrollableNode;
        if (getScrollableNode != null) {
          scrollableNode = getScrollableNode();
        }
        if (scrollableNode) {
          if (typeof scrollableNode !== "number") {
            let tmp10;
            if (scrollableNode) {
              let tmp9;
              if (scrollableNode.__internalInstanceHandle) {
                if (scrollableNode.__nativeTag) {
                  if (scrollableNode.__viewConfig) {
                    tmp9 = scrollableNode;
                  }
                }
              }
              tmp10 = tmp9;
            }
            tmp12Result = tmp10;
          }
        }
      } else {
        let tmp5;
        if (nativeScrollRef) {
          let tmp6;
          if (nativeScrollRef.__internalInstanceHandle) {
            if (nativeScrollRef.__nativeTag) {
              if (nativeScrollRef.__viewConfig) {
                tmp6 = nativeScrollRef;
              }
            }
          }
          tmp5 = tmp6;
        }
        tmp12Result = tmp5;
      }
    }
    if (undefined === tmp12Result) {
      (function resolveFindHostInstance_DEPRECATED() {
        if (undefined === prop) {
          try {
            const tmp3 = ReactFabric;
            prop = undefined;
            if (tmp3 != null) {
              if (tmp3.default != null) {
                prop = _default.findHostInstance_DEPRECATED;
              }
            }
            if (prop == null) {
              let prop1;
              if (tmp3 != null) {
                prop1 = tmp3.findHostInstance_DEPRECATED;
              }
              prop = prop1;
            }
          } catch (err) {
            const _Error = Error;
            const error = new Error("[Reanimated] Failed to resolve findHostInstance_DEPRECATED");
            throw error;
          }
        }
      })();
      tmp12Result = React2(_componentRef);
    }
    return tmp12Result;
  }
}